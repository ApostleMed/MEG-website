# CLAUDE.md — Medical Education Guild site

Project rules for Claude Code. Read before working on anything in `content/guides/`.

## What this site is

Medical Education Guild (mededuguild.com) advises student aspirants on international
medical education pathways. The `/guides` section is a reference library written for
two audiences at once: students making irreversible six-year decisions, and AI search
systems deciding what to cite.

Both audiences need the same thing — accuracy that can be traced to a primary source.

## Content rules (non-negotiable)

**Never invent or extend regulatory facts.** Exam names, regulator names, eligibility
rules, country lists, fees, timelines. If a table looks incomplete or a country seems
missing, say so and stop. Do not fill gaps from general knowledge. A wrong licensing
fact can cost a student years and a family's savings, and it destroys the credibility
this whole section is built on.

**Never edit body prose for style.** It is fact-checked and deliberately worded.
Structural changes (headings, layout, components) are fine. Wording changes are not,
unless I ask.

**The `✓` verification marker is a factual claim.** It means the row was checked
against the regulator's own published source on the page's `lastVerified` date.

- A row may carry `✓` only if it matches an entry in that page's
  `verifiedJurisdictions` frontmatter array.
- Never add, move, or infer a `✓`.
- Regions listed in `indicativeRegions` must never carry one.
- The build must fail on any mismatch.

**Never remove disclaimers.** The "indicative only" notes and the "confirm with the
regulator" lines are the honest counterpart to the verified markers. They stay.

**No salary figures anywhere in guides.** They go stale fast and a stale number costs
more trust than it earns.

**No gating.** Guides are never placed behind a form, login, or paywall.

## Technical rules

**Frontmatter is the single source of truth.** The `faq` array renders both the visible
FAQ section and the `FAQPage` JSON-LD. Never hand-write schema that duplicates
frontmatter — it drifts, and mismatched schema is worse than none.

**Everything server-rendered.** Body content, the `shortAnswer` block, tables, and FAQ
must all be present in initial HTML. Client-only rendering defeats the purpose of these
pages.

**Semantic HTML matters more than usual here.** Real heading hierarchy, real tables with
`<thead>` and `<th scope>`. Extraction quality depends on it.

**Do not block crawlers**, AI or otherwise, in robots.txt or meta robots.

## Freshness workflow

`lastVerified` in frontmatter is a public claim, surfaced on the page. It must only be
bumped when someone has actually re-checked the sources.

- Never update `lastVerified` as part of an unrelated change.
- `dateModified` may update on any content edit.
- If a page's `lastVerified` is more than 90 days old, flag it — don't change it.

Competitor pages on these topics are static and years stale. A genuinely current
verification date is this section's main advantage, and it only works if it's true.

## Design tokens

```
--ink:      #16202B    /* body text */
--paper:    #FBFAF7    /* background */
--rule:     #D9D5CC    /* borders */
--seal:     #7A2E2E    /* accent, correction callouts */
--verify:   #1E6F5C    /* verification markers */
--muted:    #5C6570    /* secondary text */
```

Newsreader (display) · IBM Plex Sans (body) · IBM Plex Mono (labels, data).
Body measure ~37rem. Tables may break wider and scroll horizontally.

Blockquotes in guide markdown are **correction callouts** — the highest-value claims on
each page. Style them distinctly, never as decorative pull quotes.

## Adding a new guide

1. Create `content/guides/<slug>.md` with full frontmatter — `shortAnswer`, `faq`,
   `lastVerified`, `verifiedJurisdictions`, `related` are all required.
2. `shortAnswer` opens with a direct declarative sentence answering the page's title
   question. Under 60 words. This is the field most likely to be quoted.
3. Cross-link via `related`.
4. Run the FAQ/schema parity and verification-marker checks before committing.
