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

const buildArticle = (fm) => {
  const article = {
    '@type': 'Article',
    headline: fm.title,
    description: fm.description,
    datePublished: fm.datePublished,
    dateModified: fm.dateModified,
    mainEntityOfPage: fm.canonical,
    publisher: { '@id': ORG_ID },
    author: { '@id': ORG_ID },
    // Speakable: helps voice assistants read the extractable answer aloud
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.short-answer'],
    },
  };
  if (fm.reviewedBy) {
    article.reviewedBy = {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: fm.reviewedBy,
    };
  }
  return article;
};

// BreadcrumbList — helps Google build breadcrumb rich results
const buildBreadcrumb = (fm) => ({
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_ORIGIN + '/' },
    { '@type': 'ListItem', position: 2, name: 'University Guidance', item: SITE_ORIGIN + '/guides' },
    { '@type': 'ListItem', position: 3, name: fm.title, item: fm.canonical },
  ],
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
  const graph = [
    buildOrganization(),
    buildBreadcrumb(fm),
    buildArticle(fm),
    buildFAQPage(fm),
  ];
  if (fm.slug === 'how-to-choose-a-medical-university') {
    const steps = extractHowToSteps(body);
    graph.push(buildHowTo(fm, steps));
  }
  return { '@context': 'https://schema.org', '@graph': graph };
};

// ─── HTML template ───────────────────────────────────────────────────────────

// Site tokens match the main MEG SPA (Tailwind config + index.css)
const CSS = `
  :root {
    --navy: #003366;      /* accent */
    --gold: #DAA520;      /* primary */
    --ink: #1C1C1C;
    --muted: #63666A;
    --rule: #E5E1DA;
    --bglight: #F6F6F6;
    --footer: #1C1C1C;
    --verify: #1E6F5C;
    --paper-tint: #FFF9EA;
  }
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    margin: 0;
    background: #fff;
    color: var(--ink);
    font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
    font-size: 17px;
    line-height: 1.65;
    -webkit-font-smoothing: antialiased;
  }
  .playfair { font-family: 'Playfair Display', 'Georgia', serif; }
  a { color: var(--navy); text-decoration: underline; text-underline-offset: 2px; }
  a:hover { color: var(--gold); }
  a:focus-visible { outline: 2px solid var(--gold); outline-offset: 2px; border-radius: 2px; }

  /* ── Site header — matches Navbar.jsx ── */
  .site-header {
    background: #fff;
    border-bottom: 1px solid rgba(0,0,0,0.05);
    box-shadow: 0 1px 2px rgba(0,0,0,0.03);
    position: sticky;
    top: 0;
    z-index: 50;
  }
  .site-header-inner {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 20px;
    gap: 24px;
  }
  .brand-logo { display: flex; align-items: center; gap: 8px; text-decoration: none; }
  .brand-logo img { width: 56px; height: auto; display: block; }
  .main-nav { display: none; align-items: center; gap: 32px; margin-left: 40px; flex: 1; }
  .main-nav a {
    color: #9CA3AF;
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    transition: color 0.2s;
  }
  .main-nav a:hover, .main-nav a.active { color: var(--gold); }
  .cta-btn {
    background: var(--gold);
    color: #fff !important;
    padding: 12px 24px;
    border-radius: 999px;
    font-weight: 700;
    font-size: 15px;
    text-decoration: none;
    box-shadow: 0 2px 8px rgba(218,165,32,0.25);
    transition: transform 0.2s, box-shadow 0.2s;
    white-space: nowrap;
  }
  .cta-btn:hover { transform: scale(1.03); box-shadow: 0 4px 12px rgba(218,165,32,0.35); color: #fff !important; }

  @media (min-width: 1024px) {
    .main-nav { display: flex; }
  }
  @media (max-width: 1023px) {
    .site-header-inner { padding: 8px 16px; }
    .cta-btn { padding: 10px 18px; font-size: 13px; }
  }

  /* ── Guide tab bar (matches Career Guide tab bar) ── */
  .guide-tabs {
    background: #fff;
    border-bottom: 1px solid var(--rule);
    position: sticky;
    top: 72px;
    z-index: 40;
  }
  .guide-tabs-inner {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    gap: 8px;
    padding: 0 20px;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  .guide-tabs a {
    padding: 18px 20px 16px;
    color: var(--muted);
    text-decoration: none;
    font-size: 15px;
    font-weight: 600;
    white-space: nowrap;
    border-bottom: 3px solid transparent;
    transition: color 0.2s, border-color 0.2s;
  }
  .guide-tabs a:hover { color: var(--navy); }
  .guide-tabs a.active {
    color: var(--navy);
    border-bottom-color: var(--gold);
  }

  /* ── Article layout ── */
  main.guide {
    max-width: 760px;
    margin: 0 auto;
    padding: 56px 24px 96px;
  }
  main.guide.index { max-width: 1000px; }

  .breadcrumb {
    font-size: 13px;
    color: var(--muted);
    margin-bottom: 24px;
  }
  .breadcrumb a { color: var(--muted); }
  .breadcrumb a:hover { color: var(--gold); }

  h1 {
    font-family: 'Playfair Display', 'Georgia', serif;
    font-weight: 700;
    font-size: clamp(30px, 5vw, 44px);
    line-height: 1.2;
    color: var(--navy);
    margin: 0 0 16px;
  }
  h2 {
    font-family: 'Playfair Display', 'Georgia', serif;
    font-weight: 700;
    font-size: clamp(24px, 3.5vw, 32px);
    color: var(--navy);
    margin: 64px 0 20px;
    line-height: 1.3;
  }
  h3 {
    font-family: 'Playfair Display', 'Georgia', serif;
    font-weight: 700;
    font-size: 22px;
    color: var(--navy);
    margin: 40px 0 14px;
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
    gap: 16px 20px;
  }
  .article-meta strong { color: var(--ink); font-weight: 600; }

  /* Short answer callout */
  .short-answer {
    background: #FFF9EA;
    border-left: 4px solid var(--gold);
    padding: 24px 28px;
    margin: 24px 0 40px;
    border-radius: 8px;
    font-size: 17px;
  }
  .short-answer .label {
    display: block;
    font-family: 'Playfair Display', serif;
    color: var(--gold);
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    margin-bottom: 10px;
    font-weight: 700;
  }
  .short-answer p { margin: 0; }

  /* Table of contents */
  .toc {
    background: var(--bglight);
    border: 1px solid var(--rule);
    border-radius: 10px;
    padding: 22px 28px;
    margin: 0 0 56px;
  }
  .toc h2 {
    font-family: 'Playfair Display', serif;
    font-size: 13px;
    color: var(--gold);
    text-transform: uppercase;
    letter-spacing: 0.14em;
    margin: 0 0 14px;
    font-weight: 700;
  }
  .toc ol {
    list-style: decimal-leading-zero;
    padding-left: 32px;
    margin: 0;
    columns: 1;
    color: var(--muted);
  }
  @media (min-width: 720px) { .toc ol { columns: 2; column-gap: 40px; } }
  .toc li { margin-bottom: 8px; break-inside: avoid; }
  .toc a { color: var(--navy); text-decoration: none; font-size: 15px; }
  .toc a:hover { color: var(--gold); text-decoration: underline; }

  /* Body */
  p, ul, ol { margin: 0 0 20px; }
  ul, ol { padding-left: 26px; }
  li { margin-bottom: 8px; }
  li > p { margin-bottom: 8px; }
  strong { color: var(--ink); font-weight: 700; }
  hr {
    border: 0;
    border-top: 1px solid var(--rule);
    margin: 56px 0;
  }

  /* Correction callouts */
  .correction-callout {
    background: #FFF9EA;
    border-left: 4px solid var(--gold);
    padding: 22px 26px;
    margin: 32px 0;
    border-radius: 8px;
    color: var(--ink);
  }
  .correction-callout p { margin: 0 0 14px; }
  .correction-callout p:last-child { margin-bottom: 0; }
  .correction-callout strong:first-child { color: var(--navy); }

  /* Tables */
  .table-wrap {
    margin: 28px 0;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    border: 1px solid var(--rule);
    border-radius: 8px;
    background: #fff;
  }
  table {
    width: 100%;
    min-width: 720px;
    border-collapse: collapse;
    font-size: 14px;
  }
  thead th {
    background: var(--navy);
    color: #fff;
    text-align: left;
    padding: 14px 16px;
    font-weight: 700;
    border-bottom: 2px solid var(--navy);
    font-size: 13px;
    letter-spacing: 0.02em;
  }
  tbody td {
    padding: 14px 16px;
    border-bottom: 1px solid var(--rule);
    vertical-align: top;
  }
  tbody tr:last-child td { border-bottom: none; }
  tbody tr:hover { background: var(--bglight); }

  /* Verification marker */
  .verify-marker {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    background: var(--verify);
    color: #fff;
    border-radius: 50%;
    font-size: 11px;
    font-weight: 700;
    vertical-align: middle;
    margin-left: 6px;
    cursor: help;
    line-height: 1;
  }

  /* FAQ */
  section.faq { margin-top: 72px; padding-top: 40px; border-top: 1px solid var(--rule); }
  section.faq h2 { margin-top: 0; }
  section.faq details {
    border-bottom: 1px solid var(--rule);
    padding: 18px 0;
  }
  section.faq details:last-of-type { border-bottom: none; }
  section.faq summary {
    font-weight: 600;
    color: var(--navy);
    cursor: pointer;
    padding: 6px 0;
    list-style: none;
    position: relative;
    padding-right: 32px;
    font-size: 17px;
  }
  section.faq summary::-webkit-details-marker { display: none; }
  section.faq summary::after {
    content: '+';
    position: absolute;
    right: 6px;
    top: 2px;
    color: var(--gold);
    font-size: 22px;
    font-weight: 400;
    transition: transform 0.2s;
  }
  section.faq details[open] summary::after { content: '−'; }
  section.faq summary:hover { color: var(--gold); }
  section.faq details p {
    margin: 14px 0 0;
    color: var(--muted);
    font-size: 16px;
    line-height: 1.7;
  }

  /* Related links */
  .related {
    margin-top: 56px;
    padding: 28px;
    background: var(--bglight);
    border-radius: 10px;
    border-left: 4px solid var(--navy);
  }
  .related h2 {
    font-size: 13px;
    color: var(--gold);
    text-transform: uppercase;
    letter-spacing: 0.14em;
    margin: 0 0 14px;
    font-family: 'Playfair Display', serif;
  }
  .related ul { list-style: none; padding: 0; margin: 0; }
  .related li { margin: 10px 0; }
  .related a { color: var(--navy); font-weight: 600; text-decoration: none; }
  .related a:hover { color: var(--gold); text-decoration: underline; }

  /* Site footer — matches Footer.jsx look */
  .site-footer {
    background: var(--footer);
    color: rgba(255,255,255,0.75);
    padding: 48px 24px 32px;
    margin-top: 80px;
  }
  .site-footer-inner {
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    gap: 32px;
    grid-template-columns: 1fr;
  }
  @media (min-width: 720px) {
    .site-footer-inner { grid-template-columns: 2fr 1fr 1fr; gap: 48px; }
  }
  .site-footer h3 {
    font-family: 'Playfair Display', serif;
    font-size: 18px;
    color: #fff;
    margin: 0 0 14px;
    font-weight: 700;
  }
  .site-footer ul { list-style: none; padding: 0; margin: 0; }
  .site-footer li { margin: 8px 0; }
  .site-footer a {
    color: rgba(255,255,255,0.75);
    text-decoration: none;
    font-size: 14px;
  }
  .site-footer a:hover { color: var(--gold); }
  .site-footer .brand-line {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
  }
  .site-footer .brand-line img { width: 40px; height: auto; }
  .site-footer .brand-line strong {
    font-family: 'Playfair Display', serif;
    color: #DAA520;
    font-size: 16px;
    font-weight: 700;
  }
  .site-footer .tagline { font-size: 14px; line-height: 1.7; }
  .site-footer-bottom {
    max-width: 1000px;
    margin: 40px auto 0;
    padding-top: 24px;
    border-top: 1px solid rgba(255,255,255,0.1);
    font-size: 13px;
    text-align: center;
    color: rgba(255,255,255,0.5);
  }

  /* Guides index page */
  .guides-hero {
    text-align: center;
    margin: 32px 0 56px;
  }
  .guides-hero .kicker {
    display: block;
    font-family: 'Playfair Display', serif;
    color: var(--gold);
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    margin-bottom: 12px;
    font-weight: 700;
  }
  .guides-hero h1 { margin-bottom: 14px; }
  .guides-hero p {
    color: var(--muted);
    max-width: 620px;
    margin: 0 auto;
    font-size: 17px;
  }
  .guides-list { list-style: none; padding: 0; margin: 0; display: grid; gap: 20px; }
  @media (min-width: 720px) { .guides-list { grid-template-columns: 1fr 1fr; gap: 24px; } }
  .guides-list li {
    background: #fff;
    border: 1px solid var(--rule);
    border-radius: 12px;
    padding: 28px;
    transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
  }
  .guides-list li:hover {
    border-color: var(--gold);
    box-shadow: 0 8px 24px rgba(0,0,0,0.06);
    transform: translateY(-2px);
  }
  .guides-list a { text-decoration: none; display: block; }
  .guides-list .card-kicker {
    font-family: 'Playfair Display', serif;
    color: var(--gold);
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .guides-list h2 {
    margin: 0 0 12px;
    font-size: 22px;
    color: var(--navy);
    line-height: 1.3;
  }
  .guides-list .desc { color: var(--muted); font-size: 15px; margin: 0 0 16px; }
  .guides-list .meta {
    color: var(--muted);
    font-size: 12px;
    padding-top: 12px;
    border-top: 1px solid var(--rule);
  }
  .guides-list .cta-inline {
    color: var(--gold);
    font-weight: 700;
    font-size: 14px;
  }

  /* Responsive */
  @media (max-width: 480px) {
    main.guide { padding: 32px 20px 64px; }
    h1 { font-size: 26px; }
    .guide-tabs { top: 64px; }
    .guide-tabs a { padding: 14px 14px 12px; font-size: 14px; }
  }
  @media (prefers-reduced-motion: reduce) {
    * { animation: none !important; transition: none !important; }
    html { scroll-behavior: auto; }
  }
`;

// Header matches Navbar.jsx visually — logo, main nav, gold CTA button
const buildHeader = (activePath = '') => {
  const isActive = (p) => (activePath.startsWith(p) ? ' active' : '');
  return `
  <header class="site-header">
    <div class="site-header-inner">
      <a href="/" class="brand-logo" aria-label="Medical Education Guild home">
        <img src="/logo.png" alt="Medical Education Guild" />
      </a>
      <nav class="main-nav" aria-label="Main navigation">
        <a href="/"${isActive('/') && activePath === '/' ? ' class="active"' : ''}>Medical Education guild</a>
        <a href="/about"${isActive('/about')}>Who are we</a>
        <a href="/guides"${isActive('/guides') ? ' class="active"' : ''}>University Guidance</a>
        <a href="/resources"${isActive('/resources')}>Career Guide</a>
        <a href="/contact"${isActive('/contact')}>Contact Us</a>
      </nav>
      <a href="https://calendly.com/mededuguild/pathway?month=2025-08" class="cta-btn">Book a Consultation</a>
    </div>
  </header>
`;
};

// Guide tab bar — switches between the two guides
const buildGuideTabs = (activeSlug, allGuides) => {
  const tabs = allGuides
    .map((g) => {
      const active = g.fm.slug === activeSlug ? ' class="active"' : '';
      // Short tab label — strip the subtitle after ":"
      const label = g.fm.title.split(':')[0].trim();
      return `      <a href="/guides/${g.fm.slug}"${active}>${esc(label)}</a>`;
    })
    .join('\n');
  return `
  <nav class="guide-tabs" aria-label="Guide selection">
    <div class="guide-tabs-inner">
${tabs}
    </div>
  </nav>
`;
};

// Footer matches Footer.jsx look — dark bg, brand + contact + links
const FOOTER = `
  <footer class="site-footer">
    <div class="site-footer-inner">
      <div>
        <div class="brand-line">
          <img src="/logo.png" alt="MEG" />
          <strong>Medical Education Guild</strong>
        </div>
        <p class="tagline">Shaping a world where healthcare knowledge is universal, and being a healer is a noble duty.</p>
        <p class="tagline" style="margin-top:16px;">
          <a href="mailto:info@mededuguild.com">info@mededuguild.com</a>
        </p>
      </div>
      <div>
        <h3>How can we help</h3>
        <ul>
          <li><a href="/service/1">Pathway Consultation</a></li>
          <li><a href="/scholarship">Scholarship</a></li>
          <li><a href="/high-school">High School for Healthcare Aspirants</a></li>
        </ul>
      </div>
      <div>
        <h3>Explore</h3>
        <ul>
          <li><a href="/about">Who we are</a></li>
          <li><a href="/guides">University Guidance</a></li>
          <li><a href="/resources">Career Guide</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </div>
    <div class="site-footer-bottom">
      © ${new Date().getFullYear()} Medical Education Guild · mededuguild.com
    </div>
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
  ${buildHeader('/guides')}
  ${buildGuideTabs(fm.slug, allGuides)}

  <main class="guide">
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a href="/">Home</a> · <a href="/guides">University Guidance</a> · <span>${esc(fm.title)}</span>
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
            <div class="card-kicker">Guide</div>
            <h2>${esc(fm.title)}</h2>
            <p class="desc">${esc(fm.description)}</p>
            <p class="cta-inline">Read the guide →</p>
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
  ${buildHeader('/guides')}

  <main class="guide index">
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a href="/">Home</a> · <span>University Guidance</span>
    </nav>

    <div class="guides-hero">
      <span class="kicker">Medical Education Guild</span>
      <h1>University Guidance</h1>
      <p>Plain-language reference material for students choosing an international medical education pathway. Every page is verified against primary regulator sources on a stated date and re-checked routinely.</p>
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

const buildRobots = () => {
  // Explicitly welcome every major AI crawler — some check for their own
  // named UA line before crawling, even when User-agent: * allows them.
  const aiBots = [
    'GPTBot',              // OpenAI (ChatGPT training)
    'OAI-SearchBot',       // OpenAI (SearchGPT)
    'ChatGPT-User',        // ChatGPT browsing
    'Google-Extended',     // Google (Bard/Gemini training)
    'Googlebot',           // Google Search + AI Overview
    'Googlebot-Image',
    'Bingbot',             // Bing + Copilot
    'PerplexityBot',       // Perplexity
    'Perplexity-User',
    'ClaudeBot',           // Anthropic (Claude training)
    'Claude-Web',
    'anthropic-ai',
    'ClaudeUser',
    'CCBot',               // Common Crawl
    'Applebot',            // Apple Intelligence
    'Applebot-Extended',
    'Meta-ExternalAgent',  // Meta
    'meta-externalagent',
    'FacebookBot',
    'Amazonbot',           // Amazon
    'YandexBot',
    'DuckDuckBot',
    'MojeekBot',
    'Bytespider',          // TikTok/ByteDance
    'cohere-ai',
  ];
  const perBot = aiBots.map((b) => `User-agent: ${b}\nAllow: /\n`).join('\n');
  return `# Medical Education Guild — all crawlers welcome, including AI systems.
# Guides at /guides/ are written specifically to be crawled and cited.

User-agent: *
Allow: /

${perBot}
Sitemap: ${SITE_ORIGIN}/sitemap.xml
`;
};

// llms.txt — emerging convention (llmstxt.org) for AI-readable site summary.
// Puts the extractable facts front and centre for LLM training and retrieval.
const buildLlmsTxt = (guides) => {
  const guidesList = guides
    .map(
      ({ fm }) =>
        `- [${fm.title}](${fm.canonical}): ${fm.description}\n  Short answer: ${String(fm.shortAnswer).trim().replace(/\s+/g, ' ')}`,
    )
    .join('\n\n');

  return `# Medical Education Guild

> Independent advisory on international medical education pathways. Guides are verified against primary regulator sources on stated dates. Site: ${SITE_ORIGIN}

## About

Medical Education Guild (MEG) advises student aspirants on international medical education, licensing routes, and where international medical graduates can work. All regulatory facts in guides are verified against primary regulator sources (ECFMG, GMC, AMC, SMC, MCC, MCNZ, DataFlow, CAMC, etc.) on a stated \`lastVerified\` date and re-checked routinely.

## Guides

${guidesList}

## Verification standard

Table rows carrying a ✓ marker have been checked against the regulator's own published source on the page's \`lastVerified\` date. Rows without ✓ are indicative — the regulator named is correct, but current requirements should be confirmed directly with that regulator. Regions marked "Indicative only" (Africa, Pacific islands, some Caribbean councils, Cyprus, Gibraltar, Crown Dependencies) are never marked verified.

## Contact

info@mededuguild.com
`;
};

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

  // Ensure /logo.png is at dist root (referenced by header/footer)
  const distLogo = path.join(DIST_DIR, 'logo.png');
  if (!fs.existsSync(distLogo)) {
    const src = path.join(ROOT, 'public/logo.png');
    if (fs.existsSync(src)) fs.copyFileSync(src, distLogo);
  }

  // Write sitemap + robots + llms.txt
  fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), buildSitemap(guides));
  fs.writeFileSync(path.join(DIST_DIR, 'robots.txt'), buildRobots());
  fs.writeFileSync(path.join(DIST_DIR, 'llms.txt'), buildLlmsTxt(guides));
  console.log(`  ✓ dist/sitemap.xml`);
  console.log(`  ✓ dist/robots.txt`);
  console.log(`  ✓ dist/llms.txt\n`);

  console.log('📚 Guides build complete.\n');
};

main();
