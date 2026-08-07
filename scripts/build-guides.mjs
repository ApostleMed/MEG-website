// Build-time prerender for /guides pages.
//
// Reads content/guides/*.md, validates verification markers and FAQ parity,
// renders standalone HTML files into dist/guides/<slug>/index.html, generates
// a /guides index, and writes sitemap.xml + robots.txt.
//
// Runs after `vite build` so it can write into the existing dist/ tree.
// The site is a Vite React SPA; Netlify serves static files first, then
// falls back to /index.html for any unmatched route (see netlify.toml).

import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

const ROOT = path.resolve(process.cwd());
const CONTENT_DIR = path.join(ROOT, 'content/guides');
const DIST_DIR = path.join(ROOT, 'dist');
const OUT_GUIDES = path.join(DIST_DIR, 'guides');

const SITE_ORIGIN = 'https://www.mededuguild.com';
const SITE_NAME = 'Medical Education Guild';
const ORG_ID = `${SITE_ORIGIN}/#organization`;

// ─── Slugify heading text for anchor IDs ─────────────────────────────────────

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/&[a-z]+;/g, '')          // strip HTML entities
    .replace(/<[^>]+>/g, '')            // strip HTML tags
    .replace(/[^\w\s—-]/g, '')          // remove punctuation
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

// ─── HTML escape ─────────────────────────────────────────────────────────────

const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

// ─── Marked configuration ────────────────────────────────────────────────────

const renderer = new marked.Renderer();

// Anchor links on h2 and h3
renderer.heading = ({ tokens, depth }) => {
  const text = marked.Parser.parseInline(tokens);
  const raw = tokens.map((t) => t.raw || t.text || '').join('');
  if (depth === 2 || depth === 3) {
    const id = slugify(raw);
    return `<h${depth} id="${id}"><a href="#${id}" class="anchor-link" aria-label="Anchor for this section">${text}</a></h${depth}>\n`;
  }
  return `<h${depth}>${text}</h${depth}>\n`;
};

// Correction callouts
renderer.blockquote = ({ tokens }) => {
  const inner = marked.Parser.parse(tokens);
  return `<blockquote class="correction-callout" role="note" aria-label="Correction">${inner}</blockquote>\n`;
};

// Wrap tables for horizontal scroll on narrow screens
renderer.table = ({ header, rows, align }) => {
  const headerHtml =
    '<tr>' +
    header
      .map((cell, i) => {
        const content = marked.Parser.parseInline(cell.tokens);
        const alignAttr = align[i] ? ` style="text-align:${align[i]}"` : '';
        return `<th scope="col"${alignAttr}>${content}</th>`;
      })
      .join('') +
    '</tr>';

  const bodyHtml = rows
    .map((row) => {
      return (
        '<tr>' +
        row
          .map((cell, i) => {
            let content = marked.Parser.parseInline(cell.tokens);
            // Wrap ✓ markers so they carry a tooltip and consistent style
            content = content.replace(
              /✓/g,
              `<span class="verify-marker" title="Verified against the regulator's own published source on this page's lastVerified date" aria-label="Verified">✓</span>`,
            );
            const alignAttr = align[i] ? ` style="text-align:${align[i]}"` : '';
            return `<td${alignAttr}>${content}</td>`;
          })
          .join('') +
        '</tr>'
      );
    })
    .join('\n');

  return `<div class="table-wrap"><table><thead>${headerHtml}</thead><tbody>${bodyHtml}</tbody></table></div>\n`;
};

marked.use({ renderer, gfm: true });

// ─── Extract Check-NN steps for HowTo schema ─────────────────────────────────

const extractHowToSteps = (body) => {
  const stepRegex = /^## (Check \d+.*)$/gm;
  const matches = [...body.matchAll(stepRegex)];
  return matches.map((m, idx) => {
    const heading = m[1].trim();
    // Body text is the paragraph immediately after the heading, up to the next ## or ---
    const startIdx = m.index + m[0].length;
    const rest = body.slice(startIdx);
    const nextHeadingIdx = rest.search(/\n##\s|\n---\s*$/m);
    const stepBody = (nextHeadingIdx === -1 ? rest : rest.slice(0, nextHeadingIdx)).trim();
    // Take the first paragraph as the description
    const firstPara = stepBody.split(/\n\s*\n/)[0].replace(/\n/g, ' ').trim();
    return {
      '@type': 'HowToStep',
      position: idx + 1,
      name: heading,
      text: firstPara,
      url: `${SITE_ORIGIN}/guides/how-to-choose-a-medical-university#${encodeURIComponent(slugify(heading))}`,
    };
  });
};

// ─── Validation ──────────────────────────────────────────────────────────────

// Extract markdown table rows and inspect their first cell for ✓.
// Returns a list of { firstCellText, hasCheck } per row across all tables.
const extractTableCheckRows = (body) => {
  const rows = [];
  // Match GitHub-style markdown tables. Each table: header | header row, separator, then data rows.
  const tableBlocks = body.match(/(?:^\|.+\|\s*\n)+/gm) || [];
  for (const block of tableBlocks) {
    const lines = block.trim().split('\n');
    if (lines.length < 2) continue;
    // Skip header (line 0) and separator (line 1)
    for (let i = 2; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line.startsWith('|')) continue;
      // Split cells; ignore leading/trailing empties from the pipes
      const cells = line.split('|').slice(1, -1).map((c) => c.trim());
      if (cells.length === 0) continue;
      const firstCell = cells[0];
      if (firstCell.includes('✓')) {
        // Extract the label text, dropping the ✓, bold markers, and anything after ' — '
        const label = firstCell
          .replace(/✓/g, '')
          .replace(/\*\*/g, '')
          .split(/\s+—\s+/)[0]
          .trim();
        rows.push({ firstCell, label });
      }
    }
  }
  return rows;
};

const validate = (fm, body, slug) => {
  const errors = [];

  // 1. Required frontmatter fields
  const required = [
    'slug', 'title', 'metaTitle', 'description', 'canonical',
    'datePublished', 'dateModified', 'lastVerified',
    'shortAnswer', 'faq', 'verifiedJurisdictions', 'related',
  ];
  for (const key of required) {
    if (fm[key] === undefined || fm[key] === null) {
      errors.push(`[${slug}] Missing frontmatter field: ${key}`);
    }
  }

  // 2. slug in frontmatter must match filename
  if (fm.slug && fm.slug !== slug) {
    errors.push(`[${slug}] Frontmatter slug "${fm.slug}" does not match filename`);
  }

  // 3. Verification-marker parity — every ✓ row must appear in verifiedJurisdictions
  const verifiedList = fm.verifiedJurisdictions || [];
  const checkRows = extractTableCheckRows(body);
  for (const row of checkRows) {
    const inList = verifiedList.some(
      (j) => j.trim().toLowerCase() === row.label.toLowerCase(),
    );
    if (!inList) {
      errors.push(
        `[${slug}] Table row marked with ✓ but "${row.label}" is not in verifiedJurisdictions.\n` +
          `           Row: ${row.firstCell}\n` +
          `           Allowed: ${verifiedList.join(', ')}`,
      );
    }
  }

  // 4. Warn if lastVerified is stale (older than 90 days from today)
  const lastVerified = new Date(fm.lastVerified);
  const ninetyDaysAgo = new Date();
  ninetyDaysAgo.setDate(ninetyDaysAgo.getDate() - 90);
  if (lastVerified < ninetyDaysAgo) {
    console.warn(
      `[${slug}] ⚠ lastVerified is ${fm.lastVerified} — more than 90 days old. Flag for re-verification (do not silently update).`,
    );
  }

  return errors;
};

// ─── JSON-LD graph builder ───────────────────────────────────────────────────

const buildOrganization = () => ({
  '@type': 'Organization',
  '@id': ORG_ID,
  name: SITE_NAME,
  url: SITE_ORIGIN,
  logo: `${SITE_ORIGIN}/logo.png`,
});

const buildArticle = (fm) => ({
  '@type': 'Article',
  headline: fm.title,
  description: fm.description,
  datePublished: fm.datePublished,
  dateModified: fm.dateModified,
  mainEntityOfPage: fm.canonical,
  publisher: { '@id': ORG_ID },
  author: { '@id': ORG_ID },
});

const buildFAQPage = (fm) => ({
  '@type': 'FAQPage',
  mainEntity: fm.faq.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
});

const buildHowTo = (fm, steps) => ({
  '@type': 'HowTo',
  name: fm.framework?.name || fm.title,
  description: fm.description,
  step: steps,
});

const buildGraph = (fm, body) => {
  const graph = [buildOrganization(), buildArticle(fm), buildFAQPage(fm)];
  if (fm.slug === 'how-to-choose-a-medical-university') {
    const steps = extractHowToSteps(body);
    graph.push(buildHowTo(fm, steps));
  }
  return { '@context': 'https://schema.org', '@graph': graph };
};

// ─── HTML template ───────────────────────────────────────────────────────────

const CSS = `
  :root {
    --navy: #003366;
    --gold: #DAA520;
    --ink: #1C1C1C;
    --muted: #63666A;
    --rule: #E5E1DA;
    --paper: #FBFAF7;
    --paper-tint: #F5F1E8;
    --verify: #1E6F5C;
  }
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    margin: 0;
    background: var(--paper);
    color: var(--ink);
    font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
    font-size: 17px;
    line-height: 1.65;
    -webkit-font-smoothing: antialiased;
  }
  a { color: var(--navy); text-decoration: underline; text-underline-offset: 2px; }
  a:hover { color: var(--gold); }
  a:focus-visible { outline: 2px solid var(--gold); outline-offset: 2px; border-radius: 2px; }

  /* Header */
  .site-header {
    background: white;
    border-bottom: 1px solid var(--rule);
    padding: 16px 24px;
  }
  .site-header-inner {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
  }
  .site-header .brand {
    font-family: 'Playfair Display', 'Georgia', serif;
    font-weight: 700;
    font-size: 18px;
    color: var(--navy);
    text-decoration: none;
  }
  .site-header nav { display: flex; gap: 20px; flex-wrap: wrap; }
  .site-header nav a {
    color: var(--muted);
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
  }
  .site-header nav a:hover { color: var(--navy); }

  /* Article layout */
  main.guide {
    max-width: 720px;
    margin: 0 auto;
    padding: 48px 24px 96px;
  }
  main.guide.index { max-width: 900px; }

  .breadcrumb {
    font-size: 13px;
    color: var(--muted);
    margin-bottom: 24px;
  }
  .breadcrumb a { color: var(--muted); }

  h1 {
    font-family: 'Playfair Display', 'Georgia', serif;
    font-weight: 700;
    font-size: clamp(28px, 4.5vw, 40px);
    line-height: 1.2;
    color: var(--navy);
    margin: 0 0 8px;
  }
  h2 {
    font-family: 'Playfair Display', 'Georgia', serif;
    font-weight: 700;
    font-size: clamp(22px, 3vw, 28px);
    color: var(--navy);
    margin: 56px 0 20px;
    line-height: 1.3;
  }
  h3 {
    font-family: 'Playfair Display', 'Georgia', serif;
    font-weight: 700;
    font-size: 20px;
    color: var(--navy);
    margin: 36px 0 12px;
  }
  h2 a.anchor-link, h3 a.anchor-link {
    color: inherit;
    text-decoration: none;
  }
  h2 a.anchor-link:hover, h3 a.anchor-link:hover { color: var(--gold); }

  /* Metadata bar */
  .article-meta {
    font-size: 13px;
    color: var(--muted);
    margin-bottom: 32px;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--rule);
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
  .article-meta strong { color: var(--ink); font-weight: 600; }

  /* Short answer */
  .short-answer {
    background: var(--paper-tint);
    border-left: 4px solid var(--gold);
    padding: 20px 24px;
    margin: 24px 0 40px;
    border-radius: 6px;
    font-size: 17px;
  }
  .short-answer .label {
    display: block;
    font-family: 'Playfair Display', serif;
    color: var(--gold);
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    margin-bottom: 8px;
    font-weight: 700;
  }

  /* Table of contents */
  .toc {
    background: white;
    border: 1px solid var(--rule);
    border-radius: 8px;
    padding: 20px 24px;
    margin: 0 0 48px;
  }
  .toc h2 {
    font-family: 'Playfair Display', serif;
    font-size: 13px;
    color: var(--gold);
    text-transform: uppercase;
    letter-spacing: 0.12em;
    margin: 0 0 12px;
    font-weight: 700;
  }
  .toc ol {
    list-style: decimal-leading-zero;
    padding-left: 28px;
    margin: 0;
    columns: 1;
  }
  @media (min-width: 720px) { .toc ol { columns: 2; column-gap: 32px; } }
  .toc li { margin-bottom: 8px; break-inside: avoid; }
  .toc a { color: var(--navy); text-decoration: none; font-size: 14px; }
  .toc a:hover { color: var(--gold); text-decoration: underline; }

  /* Body */
  p, ul, ol { margin: 0 0 20px; }
  ul, ol { padding-left: 24px; }
  li { margin-bottom: 8px; }
  strong { color: var(--ink); font-weight: 600; }
  hr {
    border: 0;
    border-top: 1px solid var(--rule);
    margin: 48px 0;
  }

  /* Correction callouts */
  .correction-callout {
    background: #FFF9EA;
    border-left: 4px solid var(--gold);
    padding: 20px 24px;
    margin: 32px 0;
    border-radius: 6px;
    color: var(--ink);
  }
  .correction-callout p { margin: 0 0 12px; }
  .correction-callout p:last-child { margin-bottom: 0; }
  .correction-callout strong:first-child { color: var(--navy); }

  /* Tables */
  .table-wrap {
    margin: 24px 0;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    border: 1px solid var(--rule);
    border-radius: 6px;
  }
  table {
    width: 100%;
    min-width: 720px;
    border-collapse: collapse;
    font-size: 14px;
  }
  thead th {
    background: var(--navy);
    color: white;
    text-align: left;
    padding: 12px 14px;
    font-weight: 600;
    border-bottom: 2px solid var(--navy);
    font-size: 13px;
  }
  tbody td {
    padding: 12px 14px;
    border-bottom: 1px solid var(--rule);
    vertical-align: top;
  }
  tbody tr:last-child td { border-bottom: none; }
  tbody tr:hover { background: var(--paper-tint); }

  /* Verification marker */
  .verify-marker {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    background: var(--verify);
    color: white;
    border-radius: 50%;
    font-size: 11px;
    font-weight: 700;
    vertical-align: middle;
    margin-left: 4px;
    cursor: help;
    line-height: 1;
  }

  /* FAQ */
  section.faq { margin-top: 64px; padding-top: 32px; border-top: 1px solid var(--rule); }
  section.faq h2 { margin-top: 0; }
  section.faq details {
    border-bottom: 1px solid var(--rule);
    padding: 16px 0;
  }
  section.faq details:last-of-type { border-bottom: none; }
  section.faq summary {
    font-weight: 600;
    color: var(--navy);
    cursor: pointer;
    padding: 6px 0;
    list-style: none;
    position: relative;
    padding-right: 28px;
  }
  section.faq summary::-webkit-details-marker { display: none; }
  section.faq summary::after {
    content: '+';
    position: absolute;
    right: 4px;
    top: 4px;
    color: var(--gold);
    font-size: 20px;
    font-weight: 400;
    transition: transform 0.2s;
  }
  section.faq details[open] summary::after { content: '−'; }
  section.faq summary:hover { color: var(--gold); }
  section.faq details p {
    margin: 12px 0 0;
    color: var(--muted);
    font-size: 15px;
  }

  /* Related links */
  .related {
    margin-top: 48px;
    padding: 24px;
    background: var(--paper-tint);
    border-radius: 8px;
  }
  .related h2 {
    font-size: 13px;
    color: var(--gold);
    text-transform: uppercase;
    letter-spacing: 0.12em;
    margin: 0 0 12px;
    font-family: 'Playfair Display', serif;
  }
  .related ul { list-style: none; padding: 0; margin: 0; }
  .related li { margin: 8px 0; }
  .related a { color: var(--navy); font-weight: 500; }

  /* Footer */
  .site-footer {
    background: var(--navy);
    color: rgba(255,255,255,0.75);
    padding: 32px 24px;
    text-align: center;
    font-size: 13px;
  }
  .site-footer a { color: white; }

  /* Index page */
  .guides-list { list-style: none; padding: 0; margin: 40px 0 0; }
  .guides-list li {
    background: white;
    border: 1px solid var(--rule);
    border-radius: 8px;
    padding: 24px 28px;
    margin-bottom: 20px;
    transition: border-color 0.2s;
  }
  .guides-list li:hover { border-color: var(--gold); }
  .guides-list a { text-decoration: none; }
  .guides-list h2 {
    margin: 0 0 8px;
    font-size: 22px;
    color: var(--navy);
  }
  .guides-list .desc { color: var(--muted); font-size: 15px; margin: 0 0 12px; }
  .guides-list .meta { color: var(--muted); font-size: 13px; }

  /* Responsive */
  @media (max-width: 480px) {
    main.guide { padding: 32px 20px 64px; }
    h1 { font-size: 26px; }
    .site-header { padding: 12px 16px; }
    .site-header nav { gap: 12px; }
    .site-header nav a { font-size: 13px; }
  }
  @media (prefers-reduced-motion: reduce) {
    * { animation: none !important; transition: none !important; }
    html { scroll-behavior: auto; }
  }
`;

const HEADER = `
  <header class="site-header">
    <div class="site-header-inner">
      <a href="/" class="brand">Medical Education Guild</a>
      <nav>
        <a href="/about">Who we are</a>
        <a href="/guides">Guides</a>
        <a href="/resources">Career Guide</a>
        <a href="/scholarship">Scholarship</a>
        <a href="/contact">Contact</a>
      </nav>
    </div>
  </header>
`;

const FOOTER = `
  <footer class="site-footer">
    <p>© ${new Date().getFullYear()} Medical Education Guild · <a href="/">mededuguild.com</a> · <a href="/contact">Contact</a></p>
  </footer>
`;

// Format a date like "7 August 2026"
const formatDate = (dateStr) => {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
};

// ─── Build a single guide's HTML ─────────────────────────────────────────────

const buildGuideHtml = (fm, body, allGuides) => {
  const graph = buildGraph(fm, body);
  const bodyHtml = marked.parse(body);

  // TOC from H2s (excluding "The short answer")
  const h2Matches = [...body.matchAll(/^## (.+)$/gm)];
  const tocItems = h2Matches
    .map((m) => m[1].trim())
    .filter((h) => h.toLowerCase() !== 'the short answer')
    .map((h) => {
      const id = slugify(h);
      return `<li><a href="#${id}">${esc(h)}</a></li>`;
    })
    .join('\n            ');

  // FAQ HTML from frontmatter (single source of truth)
  const faqHtml = fm.faq
    .map(
      (item) =>
        `        <details>\n          <summary>${esc(item.q)}</summary>\n          <p>${esc(item.a)}</p>\n        </details>`,
    )
    .join('\n');

  // Related links from slugs
  const relatedHtml = (fm.related || [])
    .map((slug) => {
      const target = allGuides.find((g) => g.fm.slug === slug);
      if (!target) return '';
      return `<li><a href="/guides/${slug}">${esc(target.fm.title)}</a></li>`;
    })
    .filter(Boolean)
    .join('\n            ');

  const shortAnswerText = String(fm.shortAnswer).trim();

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${esc(fm.metaTitle)}</title>
  <meta name="description" content="${esc(fm.description)}">
  <link rel="canonical" href="${esc(fm.canonical)}">
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">

  <meta property="og:type" content="article">
  <meta property="og:site_name" content="${esc(SITE_NAME)}">
  <meta property="og:title" content="${esc(fm.metaTitle)}">
  <meta property="og:description" content="${esc(fm.description)}">
  <meta property="og:url" content="${esc(fm.canonical)}">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(fm.metaTitle)}">
  <meta name="twitter:description" content="${esc(fm.description)}">

  <link rel="icon" type="image/png" href="/logo.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@400;500;600;700&display=swap" rel="stylesheet">

  <script type="application/ld+json">${JSON.stringify(graph, null, 2)}</script>
  <style>${CSS}</style>
</head>
<body>
  ${HEADER}

  <main class="guide">
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a href="/">Home</a> · <a href="/guides">Guides</a> · <span>${esc(fm.title)}</span>
    </nav>

    <article>
      <h1>${esc(fm.title)}</h1>

      <div class="article-meta">
        <span><strong>Published:</strong> ${formatDate(fm.datePublished)}</span>
        <span><strong>Updated:</strong> ${formatDate(fm.dateModified)}</span>
        <span><strong>Last verified:</strong> ${formatDate(fm.lastVerified)}</span>
        ${fm.reviewedBy ? `<span><strong>Reviewed by:</strong> ${esc(fm.reviewedBy)}</span>` : ''}
      </div>

      <div class="short-answer">
        <span class="label">Short answer</span>
        <p>${esc(shortAnswerText)}</p>
      </div>

      <aside class="toc" aria-label="On this page">
        <h2>On this page</h2>
        <ol>
            ${tocItems}
          <li><a href="#frequently-asked-questions">Frequently asked questions</a></li>
        </ol>
      </aside>

      ${bodyHtml}

      <section class="faq" aria-labelledby="frequently-asked-questions">
        <h2 id="frequently-asked-questions"><a href="#frequently-asked-questions" class="anchor-link">Frequently asked questions</a></h2>
${faqHtml}
      </section>

      ${
        relatedHtml
          ? `<aside class="related" aria-label="Related guides">
        <h2>Related guides</h2>
        <ul>
            ${relatedHtml}
        </ul>
      </aside>`
          : ''
      }
    </article>
  </main>

  ${FOOTER}
</body>
</html>
`;
};

// ─── Guides index page ───────────────────────────────────────────────────────

const buildIndexHtml = (guides) => {
  const listHtml = guides
    .map(
      ({ fm }) => `        <li>
          <a href="/guides/${fm.slug}">
            <h2>${esc(fm.title)}</h2>
            <p class="desc">${esc(fm.description)}</p>
            <p class="meta">Updated ${formatDate(fm.dateModified)} · Last verified ${formatDate(fm.lastVerified)}</p>
          </a>
        </li>`,
    )
    .join('\n');

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      buildOrganization(),
      {
        '@type': 'CollectionPage',
        '@id': `${SITE_ORIGIN}/guides`,
        name: 'MEG Guides — Reference library for international medical education',
        url: `${SITE_ORIGIN}/guides`,
        description:
          'Reference guides on choosing a medical university, licensing routes, and where international medical graduates can work.',
        publisher: { '@id': ORG_ID },
        hasPart: guides.map(({ fm }) => ({
          '@type': 'Article',
          headline: fm.title,
          url: fm.canonical,
          dateModified: fm.dateModified,
        })),
      },
    ],
  };

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Guides — Medical Education Guild</title>
  <meta name="description" content="Reference guides on choosing a medical university, licensing exam routes, and where international medical graduates can work.">
  <link rel="canonical" href="${SITE_ORIGIN}/guides">
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">

  <meta property="og:type" content="website">
  <meta property="og:site_name" content="${SITE_NAME}">
  <meta property="og:title" content="Guides — Medical Education Guild">
  <meta property="og:description" content="Reference guides on international medical education pathways.">
  <meta property="og:url" content="${SITE_ORIGIN}/guides">

  <link rel="icon" type="image/png" href="/logo.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@400;500;600;700&display=swap" rel="stylesheet">

  <script type="application/ld+json">${JSON.stringify(graph, null, 2)}</script>
  <style>${CSS}</style>
</head>
<body>
  ${HEADER}

  <main class="guide index">
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a href="/">Home</a> · <span>Guides</span>
    </nav>

    <h1>Guides</h1>
    <div class="short-answer">
      <span class="label">Reference library</span>
      <p>Plain-language reference material for students choosing an international medical education pathway. Each page is verified against primary regulator sources on a stated date and re-checked routinely.</p>
    </div>

    <ol class="guides-list">
${listHtml}
    </ol>
  </main>

  ${FOOTER}
</body>
</html>
`;
};

// ─── Sitemap + robots ────────────────────────────────────────────────────────

const buildSitemap = (guides) => {
  const staticPages = [
    { loc: `${SITE_ORIGIN}/`, priority: '1.0' },
    { loc: `${SITE_ORIGIN}/about`, priority: '0.8' },
    { loc: `${SITE_ORIGIN}/resources`, priority: '0.9' },
    { loc: `${SITE_ORIGIN}/scholarship`, priority: '0.7' },
    { loc: `${SITE_ORIGIN}/contact`, priority: '0.6' },
    { loc: `${SITE_ORIGIN}/high-school`, priority: '0.6' },
    { loc: `${SITE_ORIGIN}/guides`, priority: '0.9' },
  ];
  const guidePages = guides.map(({ fm }) => ({
    loc: fm.canonical,
    lastmod: fm.dateModified,
    priority: '0.9',
  }));

  const entries = [
    ...staticPages.map((p) => `  <url>\n    <loc>${p.loc}</loc>\n    <priority>${p.priority}</priority>\n  </url>`),
    ...guidePages.map(
      (p) => `  <url>\n    <loc>${p.loc}</loc>\n    <lastmod>${p.lastmod}</lastmod>\n    <priority>${p.priority}</priority>\n  </url>`,
    ),
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>
`;
};

const buildRobots = () => `# All crawlers welcome — including AI systems.
User-agent: *
Allow: /

Sitemap: ${SITE_ORIGIN}/sitemap.xml
`;

// ─── Main ────────────────────────────────────────────────────────────────────

const main = () => {
  console.log('\n📚 Building guides...\n');

  if (!fs.existsSync(CONTENT_DIR)) {
    console.error(`✗ Content directory not found: ${CONTENT_DIR}`);
    process.exit(1);
  }
  if (!fs.existsSync(DIST_DIR)) {
    console.error(`✗ dist/ not found. Run \`vite build\` first.`);
    process.exit(1);
  }

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.md'));
  if (files.length === 0) {
    console.log('No guides to build.');
    return;
  }

  const guides = [];
  const allErrors = [];

  for (const file of files) {
    const slug = file.replace(/\.md$/, '');
    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf-8');
    const { data: fm, content: body } = matter(raw);

    const errors = validate(fm, body, slug);
    if (errors.length) {
      allErrors.push(...errors);
      continue;
    }

    guides.push({ fm, body, slug });
  }

  if (allErrors.length) {
    console.error('\n✗ Validation failed:\n');
    for (const err of allErrors) console.error('  ' + err);
    console.error('\nBuild aborted.\n');
    process.exit(1);
  }

  console.log(`✓ Validated ${guides.length} guide(s)\n`);
  console.log('  Verification checks passed:');
  for (const { fm, body } of guides) {
    const checkRows = extractTableCheckRows(body);
    console.log(
      `    ${fm.slug}: ${checkRows.length} ✓ marker(s), all mapped to verifiedJurisdictions`,
    );
  }
  console.log('\n  FAQ/schema parity: guaranteed by construction (single-source frontmatter)\n');

  // Write each guide
  fs.mkdirSync(OUT_GUIDES, { recursive: true });
  for (const guide of guides) {
    const html = buildGuideHtml(guide.fm, guide.body, guides);
    const dir = path.join(OUT_GUIDES, guide.slug);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), html);
    console.log(`  ✓ dist/guides/${guide.slug}/index.html (${html.length.toLocaleString()} bytes)`);
  }

  // Write index
  const indexHtml = buildIndexHtml(guides);
  fs.writeFileSync(path.join(OUT_GUIDES, 'index.html'), indexHtml);
  console.log(`  ✓ dist/guides/index.html (${indexHtml.length.toLocaleString()} bytes)`);

  // Write sitemap + robots
  fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), buildSitemap(guides));
  fs.writeFileSync(path.join(DIST_DIR, 'robots.txt'), buildRobots());
  console.log(`  ✓ dist/sitemap.xml`);
  console.log(`  ✓ dist/robots.txt\n`);

  console.log('📚 Guides build complete.\n');
};

main();
