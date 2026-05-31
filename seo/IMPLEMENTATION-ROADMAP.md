# Implementation Roadmap

Phased, calibrated for a solo photographer with limited time/budget. Each phase lists **owner** (Dev = code I can do in this repo; Tiffany = business action).

---

## Phase 1 — Foundation (Weeks 1–4)
**Goal: stop losing rankings to bugs, claim the local profile, set up measurement.**

| # | Task | Owner | Why |
|---|---|---|---|
| 1 | **Claim & verify Google Business Profile** (service-area, category, photos, prices) | Tiffany | #1 local ranking lever |
| 2 | Set up GA4 + Google Search Console; submit sitemap | Tiffany (Dev assists) | Establish baseline — **do before measuring anything** |
| 3 | One-tap Google review link + request flow | Tiffany | Reviews drive map pack |
| 4 | Add `/blog/[slug]` URLs to `sitemap.ts` | Dev | Complete sitemap (priorities already numeric ✓) |
| 5 | Fill `telephone` in LocalBusiness schema; wire Person as founder | Dev | Rich results, E-E-A-T (rest of schema already solid ✓) |
| 6 | Unique alt text across portfolio | Dev | Image SEO |

> Note: an earlier draft listed a duplicate-render bug, boolean sitemap priority, and missing robots.txt as Phase-1 emergencies. Those were verified false against the code and removed — the technical base is already sound, so Phase 1 leads with the business actions (GBP, reviews, analytics) instead.

**Exit criteria:** GSC verified + sitemap submitted; GBP live; first reviews coming in.

---

## Phase 2 — Expansion (Weeks 5–12)
**Goal: build the pages that actually capture money searches.**

| # | Task | Owner |
|---|---|---|
| 9 | Build 5 service landing pages (newborn, maternity, family, cake smash, milestone) | Dev + Tiffany (copy/images) |
| 10 | Build /fort-liberty-family-photographer location page | Dev + Tiffany |
| 11 | Add Service + FAQPage + BreadcrumbList schema to those pages | Dev |
| 12 | Add Services dropdown to nav + footer links to all service pages | Dev |
| 13 | Internal linking pass (blog→service, service→portfolio/contact) | Dev |
| 14 | Expand the 7 thin blog posts to 300+ words | Tiffany |
| 15 | Publish 2 seasonal blog posts (see CONTENT-CALENDAR) | Tiffany |
| 16 | Get listed on 3–5 directories (Thumbtack, The Bash, Bark, local mom networks) | Tiffany |

**Exit criteria:** 6 new indexable pages live & in sitemap; each with unique title/meta/schema; 10+ Google reviews.

---

## Phase 3 — Scale (Weeks 13–24 / Months 4–6)
**Goal: depth, freshness, and authority signals.**

| # | Task | Owner |
|---|---|---|
| 17 | Maintain blog cadence (~2/mo per calendar) | Tiffany |
| 18 | GEO/AI: add `/llms.txt`, tighten FAQ Q&A blocks for AI Overviews | Dev |
| 19 | Add Review schema + on-site reviews pulled from GBP to service pages | Dev |
| 20 | Core Web Vitals pass (LCP/INP/CLS on mobile, esp. portfolio) | Dev |
| 21 | Build seasonal mini-session pages 6–8 weeks ahead of each season | Dev + Tiffany |
| 22 | Earn local backlinks: venue/vendor cross-links, local blog features, military-spouse groups | Tiffany |
| 23 | Review GSC: prune/expand pages with impressions but no clicks | Dev + Tiffany |

**Exit criteria:** Ranking top-20 for 40–60 terms; map-pack top-3 for 2–3 towns; CWV all "Good".

---

## Phase 4 — Authority (Months 7–12)
**Goal: become the default name for family photography in the Fort Liberty metro.**

| # | Task | Owner |
|---|---|---|
| 24 | Thought-leadership / signature content (e.g. "Ultimate Fort Liberty Family Photo Guide") | Tiffany |
| 25 | PR: local press, base spouse newsletters, vendor collabs | Tiffany |
| 26 | Add /fayetteville- and /sanford- location pages IF each can be genuinely unique | Dev + Tiffany |
| 27 | Steady review growth → 50+ | Tiffany |
| 28 | Quarterly technical + content audit | Dev |

**Exit criteria:** 100+ ranked keywords; consistent map-pack top-3 across the service area; bookings materially up year-over-year.

---

## Dependencies & sequencing
- GBP claim (#1) is the highest-ROI single action — start it day one (verification can take days).
- GA4/GSC (#2) must precede any "measure the baseline" claim.
- Service pages (#9) depend on Tiffany supplying short copy + selecting gallery images per service (the images already exist and are categorized in the portfolio).
- Backlinks/reviews are slow-compounding — start them early even though payoff is later.

## Quick-win shortlist (if time is tight, do only these)
1. Claim GBP + start review requests (Tiffany)
2. Build the 5 service pages (Dev + Tiffany)
3. Set up GSC/GA4 + add blog URLs to sitemap (Dev + Tiffany)

That short list captures the majority of the available upside for a business this size.
