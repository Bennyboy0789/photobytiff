# Full SEO Audit — photobytiff.com

**Audited:** Lifestyle Photography by Tiffany (Tiffany Jarosz)
**Business type:** Local service business — service-area photographer, Spring Lake / Fayetteville / Fort Liberty, NC
**Method:** Source-code audit of the Next.js 16 app (reflects latest uncommitted work). Live-only signals noted separately.
**Date:** 2026-05-31

> Scope note: This audit reads the **source**, which is the accurate picture of what will deploy. Signals that require the live site + Google tooling — real Core Web Vitals *field* data (CrUX), indexation status (Search Console), organic traffic (GA4), and backlinks — cannot be measured from code and are called out as "needs live/GSC." No DataForSEO/Moz/Google API credentials were available.

---

## Executive Summary

### Overall SEO Health Score: **82 / 100** — Strong

The codebase is genuinely well-built for SEO: per-page metadata, canonicals, OpenGraph/Twitter cards, a rich JSON-LD entity graph (LocalBusiness + Person + WebSite), `next/image` everywhere, a dynamic sitemap, and clean semantic H1s. Recent fixes (dynamic sitemap, schema founder link, unique alt text, expanded blog copy) already closed most of the common gaps. The remaining points are concentrated in **(1) a live-site redirect that may block indexing, (2) content depth for money keywords, and (3) AI-search readiness.**

| Category | Weight | Score | Weighted |
|---|---|---|---|
| Technical SEO | 22% | 82 | 18.0 |
| Content Quality | 23% | 78 | 17.9 |
| On-Page SEO | 20% | 88 | 17.6 |
| Schema / Structured Data | 10% | 95 | 9.5 |
| Performance (CWV) | 10% | 75* | 7.5 |
| AI Search Readiness | 10% | 62 | 6.2 |
| Images | 5% | 92 | 4.6 |
| **Total** | | | **81.3 → 82** |

\* Performance is a code-based estimate; needs CrUX field data to confirm.

### Top 5 Critical / High issues
1. **🔴 Live site returns HTTP 307 redirect** (`https://photobytiff.com` → redirect). If this is **Vercel Deployment Protection / password protection**, Googlebot is being blocked and **nothing will index**. Must verify immediately — this would invalidate all other SEO work. (Needs live check; see Technical.)
2. **🟠 No dedicated service landing pages.** One `/services` page targets newborn + maternity + family + cake smash + milestone at once — it cannot rank well for any single "{service} photographer {city}" term. Biggest content-shaped opportunity.
3. **🟠 No AI-search / GEO layer.** No `llms.txt`, no FAQ blocks in Q&A format, no `BlogPosting` schema on posts. Missing easy AI Overviews / ChatGPT citation surface.
4. **🟠 Blog posts lack `BlogPosting` schema** and only 4 of 13 use the rich `content` field; the rest render a single excerpt paragraph (thin-ish, though expanded).
5. **🟡 Homepage content lives inside a client-side horizontal-scroll component.** It IS in the static HTML (good), but section headers are styled `<p>`/`<span>` rather than `<h2>`, weakening topical structure.

### Top 5 Quick Wins
1. Add `public/robots.txt` sitemap already ✓ — add an **`llms.txt`** (30 min).
2. Add **`BlogPosting` + `BreadcrumbList` JSON-LD** to blog post pages (uses data you already have).
3. Convert homepage section labels ("Service offerings", "Kind Words") to real `<h2>`s.
4. Populate the empty **`telephone`** once a public number exists (schema + GBP consistency).
5. Add a short **FAQ block** (Q&A) to `/services` → feeds FAQPage schema + AI Overviews.

---

## Technical SEO — 82/100

**Strong:**
- ✅ Dynamic `sitemap.ts` now includes all 13 blog URLs + 7 static pages, numeric priorities.
- ✅ `public/robots.txt` present, `Allow: /`, sitemap referenced.
- ✅ Canonicals on every page (`alternates.canonical`).
- ✅ `metadataBase` set; robots directives (`index/follow`, `max-image-preview:large`).
- ✅ HTTPS, Next 16 + Vercel (HTTP/2, edge caching, security headers by default).
- ✅ `lang="en"` set on `<html>`.

**Issues:**
- 🔴 **Live root returns 307.** Could be benign (apex→www or added trailing slash) or fatal (deployment protection). **Action:** open `https://photobytiff.com` in incognito; if it shows a Vercel login/password wall, disable protection for production in Vercel → Settings → Deployment Protection. Until confirmed, treat as Critical.
- 🟡 No `robots.ts`/`sitemap` `lastModified` per-post (all share build time) — minor.
- 🟡 No `manifest` / PWA icons (`manifest.webmanifest`) — minor, affects mobile "add to home screen" and some rich signals.
- ⏳ **Needs GSC:** indexation coverage, crawl stats, mobile usability — can't be read from code.

## Content Quality — 78/100

**Strong:**
- ✅ Clear E-E-A-T: named photographer, real About bio with experience ("5+ years"), on-site testimonials, real session galleries.
- ✅ 6 substantial "Education" blog posts (400–600 words) genuinely useful and keyword-aligned.
- ✅ The 7 previously-thin posts were expanded to ~300–400 words.
- ✅ Transparent pricing (rare in this vertical — trust + conversion signal).

**Issues:**
- 🟠 **No service-specific landing pages** (see Executive #2) — the single biggest content gap.
- 🟡 Blog `content` (rich HTML body) is only filled for the first 4 posts; the other 9 fall back to the excerpt paragraph. Migrate the expanded copy into `content` with `<h2>`/`<p>` structure for depth + scannability.
- 🟡 The **Fort Liberty / military-family angle** — the strongest local differentiator — has no dedicated page or post yet.
- ⏳ Duplicate-content risk is low (each page unique), but confirm no `www`+apex both indexing once the 307 is resolved.

## On-Page SEO — 88/100

**Strong:**
- ✅ Unique `<title>` + meta description per page; title template `%s | Lifestyle Photography by Tiffany`.
- ✅ Exactly one `<h1>` per page, all unique and descriptive.
- ✅ Descriptive, keyword-aware titles with locations (Spring Lake, Fayetteville, Fort Liberty).
- ✅ Internal links present (nav, footer, blog→contact, portfolio filters).

**Issues:**
- 🟡 Homepage section headers are visual (`<p>`/`<span>`), not `<h2>`/`<h3>` — weakens heading hierarchy on the most important page.
- 🟡 Blog posts don't link **into** service pages (they don't exist yet); once built, add contextual links.
- 🟡 Homepage `<h1>` is "Lifestyle Photography" with "BY TIFFANY" as a separate `<p>` — consider making the full brand the H1 for exact-match strength.

## Schema / Structured Data — 95/100

**Excellent — best-in-class for a site this size:**
- ✅ `@graph` with `LocalBusiness`+`ProfessionalService`, `Person`, `WebSite`, cross-linked by `@id`.
- ✅ `areaServed` (Spring Lake, Fayetteville, Fort Liberty, Sanford, NC), `geo`, `priceRange`, `hasOfferCatalog` with per-service Offers + prices.
- ✅ `founder` now links business→Person; `sameAs` includes IG + Facebook on both entities.
- ✅ `WebSite` `SearchAction`.

**Issues:**
- 🟡 `telephone: ` removed (good — was empty); **add real number** when available.
- 🟡 **No `BlogPosting` schema** on posts, **no `BreadcrumbList`** anywhere, **no `ImageObject`** on portfolio, **no `FAQPage`** (no FAQ content yet).
- 🟡 `logo` points to `/images/logo.png` — verify that file exists (the real logo is `NEW-Logo-Design-BLACK.png`).

## Performance (CWV) — 75/100 *(code estimate)*

**Strong:**
- ✅ `next/image` used for **every** image (auto WebP, responsive `sizes`, lazy by default).
- ✅ Hero images use `priority`; fonts via `next/font` with `display: swap`.
- ✅ Static generation (SSG) for all content pages.

**Watch:**
- 🟡 Homepage hero is a large full-bleed image → **LCP risk**; keep it optimized (`priority` set ✓).
- 🟡 Framer-motion horizontal-scroll + polaroid cycler on the homepage add JS + animation work → possible **INP** cost on mid-range mobiles.
- 🟡 Portfolio renders 74 images in a masonry with layout animation → watch **CLS/INP**; ensure aspect ratios reserve space (they do via `aspect-*` classes ✓).
- ⏳ **Needs CrUX/PageSpeed** field data on the live URL to score for real.

## Images — 92/100

- ✅ All via `next/image`; WebP configured in `next.config.mjs`.
- ✅ **Unique, descriptive alt text** across all 74 portfolio images (recent fix).
- ✅ Responsive `sizes` on key images.
- 🟡 Alt text is filename-derived ("Children Natural Light Outdoor Portrait - Spring Lake, NC") — good enough; could be hand-tuned for the hero/featured shots.
- 🟡 A few source filenames have capital letters / underscores (`Jarosz-Family.jpg`, `Soccer_Milestone_Session.jpg`, `Photo-Banner.jpg`) — cosmetically inconsistent, not an SEO problem.

## AI Search Readiness (GEO) — 62/100

**Present:**
- ✅ Rich structured data (helps AI understand entity).
- ✅ Clean, server-rendered HTML (crawlable by AI bots).
- ✅ Clear factual content (services, prices, location).

**Missing:**
- 🟠 **No `llms.txt`** — add one summarizing who/what/where/services/prices/contact.
- 🟠 **No FAQ / Q&A blocks** — AI Overviews and ChatGPT preferentially cite direct question→answer passages. The blog "What is a..." posts are close; format an explicit FAQ on `/services` and service pages.
- 🟡 **No `BlogPosting`/author schema** on posts to attribute expertise.
- 🟡 No explicit "quick answer" summary blocks (price, area served, how to book) that AI can lift verbatim.

---

## What needs the LIVE site + Google tools (not auditable from code)
- Real Core Web Vitals (CrUX) → set up **PageSpeed Insights** + **Search Console**.
- Indexation coverage, crawl errors, mobile usability → **Search Console** (verify + submit `sitemap.xml`).
- Organic traffic / queries → **GA4** + GSC.
- Backlink profile → no free API connected; check GSC "Links" report once verified.
- **Google Business Profile** — the #1 local ranking factor — is a business action, not code.

See ACTION-PLAN.md for the prioritized fix list.
