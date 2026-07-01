# Technical SEO Audit — photobytiff.com

**Target:** https://photobytiff.com (live production)
**Method:** Live HTTP inspection (headers, robots, sitemap, raw HTML/SSR) + source cross-check. No PageSpeed/CrUX API key available, so Core Web Vitals are lab-estimate only.
**Date:** 2026-07-01
**Stack:** Next.js 16 (App Router, SSG) on Vercel

---

## Technical Score: **88 / 100** — Strong

The live site is technically clean: HTTPS enforced with HSTS, valid robots + sitemap, self-referencing canonicals on every page now resolving to the correct apex host, fully server-rendered content, and rich JSON-LD in the initial HTML. The deductions are concentrated in a **duplicate-H1 rendering quirk**, **missing security headers**, **no CrUX field data** (low-traffic, expected), and **no IndexNow**.

| Category | Status | Score |
|---|---|---|
| Crawlability | pass | 95 |
| Indexability | warn | 82 |
| Security | warn | 78 |
| URL Structure | pass | 98 |
| Mobile | pass | 92 |
| Core Web Vitals | warn | 80* |
| Structured Data | pass | 98 |
| JS Rendering | pass | 95 |
| IndexNow | fail | 0 |

\* Lab estimate — no field data available.

---

## 1. Crawlability — 95 (pass)
- ✅ `robots.txt` live, valid: `User-agent: * / Allow: /` + `Sitemap:` directive.
- ✅ `sitemap.xml` live and complete — **all 26 URLs present** (7 static + Fort Bragg + 5 services + 13 blog), valid XML, numeric priorities, `lastmod` timestamps.
- ✅ No accidental `noindex` — homepage and all pages serve `<meta name="robots" content="index, follow">`.
- ✅ Crawl depth healthy: every page reachable from home in ≤2 clicks (nav, footer "Sessions" column, services hub, blog related-links).
- 🟡 **AI crawlers unmanaged (by choice).** No AI-specific rules — GPTBot, ClaudeBot, PerplexityBot, etc. all currently allowed. Given the site's GEO strategy (llms.txt present, wanting AI citations), **allowing them is the right call** — flagged only for awareness, not a fix.

## 2. Indexability — 82 (warn)
- ✅ **Canonical host resolved.** Apex `photobytiff.com` serves 200 directly; `www` now 307-redirects to apex. Canonicals, schema `@id`s, sitemap, and llms.txt all use the apex — **fully consistent** (this was fixed today).
- ✅ Self-referencing canonicals verified live on home, service pages (`/services/newborn-photography`), and blog posts — each names its own URL.
- ✅ Canonicals are in the **raw server HTML** (not JS-injected) — no risk of the Dec-2025 JS-canonical-conflict issue.
- 🔴 **Duplicate `<h1>` on the homepage.** The raw HTML contains the hero H1 **twice** ("Lifestyle Photography" appears in two `<h1>` tags). Cause: `HorizontalScroll` renders its panels twice — a mobile copy (`md:hidden`) and a desktop copy (`hidden md:block`) — each containing the hero panel's H1. Only one is visible per breakpoint via CSS, but **both are in the DOM**, so crawlers see two H1s. Fix below. *(This is the only real indexability defect.)*
- 🟡 Near-duplicate risk on service pages: low. Each has unique title/H1/meta/body. Fine.
- 🟡 No thin pages after the earlier content expansion. Fine.

## 3. Security — 78 (warn)
- ✅ **HTTPS enforced** — `http://` 308-redirects to `https://` (single hop).
- ✅ **HSTS present:** `Strict-Transport-Security: max-age=63072000` (2 years). Good.
- 🟡 HSTS lacks `includeSubDomains` and `preload` — fine for this site; add if you want preload-list inclusion.
- 🟠 **Missing security headers** (all absent on live responses):
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY` (or CSP `frame-ancestors`)
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Content-Security-Policy` (optional, more involved)
  These aren't ranking factors, but they're easy wins and standard hardening. One-time add in `next.config.mjs`. Fix below.

## 4. URL Structure — 98 (pass)
- ✅ Clean, descriptive, hyphenated, lowercase, keyword-rich (`/services/newborn-photography`, `/fort-bragg-family-photographer`).
- ✅ Logical hierarchy (`/services/*`).
- ✅ No query params for content, no redirect chains (apex serves 200 directly), all URLs <100 chars.
- ✅ Consistent no-trailing-slash convention.

## 5. Mobile — 92 (pass)
- ✅ `<meta name="viewport" content="width=device-width, initial-scale=1">` present in raw HTML.
- ✅ Responsive Tailwind; mobile uses a dedicated vertical-snap layout (added earlier).
- ✅ Mobile-first indexing (100% since Jul 2024) — content identical on mobile, fully SSR.
- 🟡 The homepage's `HorizontalScroll` dual-render (mobile+desktop copies in DOM) is what causes the duplicate H1 — a mobile/desktop parity side-effect worth the fix below.

## 6. Core Web Vitals — 80 (warn, lab estimate only)
- ⏳ **No CrUX field data** — expected for a new/low-traffic site. Cannot score for real until traffic accrues. **Set up PageSpeed Insights + Search Console to get field data.**
- ✅ Strong foundations: SSG, `next/image` everywhere (WebP, responsive sizes), `next/font` with swap, hero images `priority`.
- 🟡 Watch on real devices: homepage framer-motion horizontal-scroll + polaroid cycler (JS/animation → possible INP cost); 74-image portfolio masonry (aspect classes reserve space, so CLS should be fine).

## 7. Structured Data — 98 (pass)
- ✅ Rich JSON-LD in **raw HTML** (not JS-injected — correct per Dec-2025 guidance).
- ✅ Homepage `@graph`: LocalBusiness+ProfessionalService, Person, WebSite (SearchAction), with cross-linked `@id`s and `founder`.
- ✅ Service pages: Service + Offer + FAQPage + BreadcrumbList (verified live on `/services/newborn-photography`).
- ✅ Blog posts: BlogPosting + BreadcrumbList. `/services` hub: FAQPage.
- 🟡 `telephone` still empty in LocalBusiness (omitted, not blank — fine; populate when a number exists).

## 8. JavaScript Rendering — 95 (pass)
- ✅ **Fully server-rendered.** Verified body copy ("Newborn Photographer in Spring Lake…") present in **raw HTML** without JS execution.
- ✅ Critical SEO elements (title, description, canonical, robots, JSON-LD) all in initial HTML.
- ✅ SSG → non-200 error pages won't hide content (no JS-dependent meta).

## 9. IndexNow — 0 (fail)
- ❌ No IndexNow key file (`/{key}.txt` probe → 404), no submission on publish. Bing/Yandex/Naver only (not Google), but cheap to add for faster non-Google indexing. Low priority for a local site. Optional.

---

## Prioritized fixes

### 🔴 High (fix this week)
1. **Duplicate homepage `<h1>`.** Two `<h1>`s in the DOM from HorizontalScroll's mobile+desktop dual-render. Options: (a) demote the mobile-panel copies' hero to a visually-identical non-h1, or (b) render one panel set and switch layout via CSS only. Simplest correct fix: ensure only one H1 exists across both breakpoints. **I can implement this.**

### 🟠 Medium (this month)
2. **Add security headers** in `next.config.mjs` (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`). One-time, ~10 lines. **I can implement this.**
3. **Set up Search Console + PageSpeed Insights** (business action) — unlocks real CWV field data + indexation status. Prerequisite for scoring CWV.

### 🟢 Low (backlog)
4. Add `includeSubDomains; preload` to HSTS if you want preload-list inclusion.
5. Consider IndexNow for Bing/Yandex if you care about non-Google engines.
6. Populate `telephone` in schema once a public number exists.

---

## Summary
Nothing here blocks indexing or causes penalties. The site is in strong technical shape — the standouts are the **duplicate H1** (only real defect, easy fix) and **missing hardening headers** (nice-to-have). Both are code fixes I can do now. Everything else is either already correct or a business/measurement setup step.
