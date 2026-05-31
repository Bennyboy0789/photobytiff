# SEO Strategy — Lifestyle Photography by Tiffany

**Business:** Lifestyle Photography by Tiffany (photobytiff.com)
**Owner / talent:** Tiffany Jarosz
**Type:** Local service business — service-area photographer (no storefront)
**Primary location:** Spring Lake, NC 28390
**Service area:** Spring Lake, Fayetteville, Fort Liberty, Sanford, Cameron, Raeford
**Niche:** Family & lifestyle photography — newborn, maternity, family, children, milestone, cake smash, mini sessions
**Pricing:** $175 (mini) – $400 (family)
**Stack:** Next.js 16 on Vercel
**Plan date:** May 31, 2026

> Note: No DataForSEO/paid keyword tools were available when this plan was generated, and the skill's industry template files were not present. Search-volume and difficulty figures below are **directional estimates** based on a small-market local family-photography vertical, not measured data. Validate with Google Search Console + Keyword Planner once live (both free).

---

## 0. On-site fixes (verified against the actual code)

> Correction: an earlier draft of this section listed a "critical duplicate-render bug," a boolean sitemap priority, and a missing robots.txt. **I re-checked the code and none of those are real** — `layout.tsx` renders `{children}` exactly once, `sitemap.ts` already uses numeric priorities, and `public/robots.txt` exists and is clean. The technical foundation is in good shape. The genuinely-open items are below.

Real, verified items:

1. **🟠 Sitemap omits the blog post URLs.** [src/app/sitemap.ts](../src/app/sitemap.ts) lists the 7 static pages but not the 13 `/blog/[slug]` posts. Generate them from the shared `posts.ts` data. When service/location pages are built, add those too. (Priorities are already numeric — fine.)
2. **🟡 LocalBusiness schema — one real gap.** Most is already solid (`priceRange: '$$'`, `areaServed`, `hasOfferCatalog`, `Person`, `WebSite`, dual `@type` all present ✓). The only empty field is **`telephone: ''`** — populate it once there's a public business number. Optionally wire the `Person` node as `founder`.
3. **🟡 Duplicate image alt text.** The portfolio rebuild set every image's alt to a generic per-category string (e.g. "Maternity Session - Spring Lake NC" ×10). Unique, descriptive alt text is an easy image-SEO win.
4. **🟡 Thin blog content.** Post pages currently render only the excerpt as the body. Six posts are full mini-articles; the rest are 2–3 sentences and read as thin to Google.

Net: the codebase is **healthier than the original draft claimed** — priority shifts toward the real opportunities (service pages, GBP, reviews) below.

---

## 1. Goals & positioning

**Business goal:** Book more paid sessions from the Fayetteville/Fort Liberty metro, smoothing the seasonal swings (fall mini-session rush vs. slow winter).

**SEO goal:** Own the local "near me" family-photography searches for the Fort Liberty military-family market and surrounding towns, and rank for high-intent service+location terms.

**Positioning angle (differentiators to lean into):**
- **Military-family friendly** — Fort Liberty (formerly Fort Bragg) is the largest US Army installation by population. PCS-move family photos, deployment/homecoming sessions, and milestone shoots are a huge, recurring, underserved local niche. *This is the single biggest opportunity.*
- **Baby-led / lifestyle approach** (already a content theme) — differentiates from posed studio shooters.
- **Transparent pricing** — most local photographers hide prices; you publish them. Keep that; it's a conversion and trust win.

---

## 2. Target keyword themes

Grouped by intent. Volumes are **rough local estimates** (monthly), difficulty is relative within this small market.

### Money / high-intent (service + location) — build dedicated pages
| Keyword theme | Est. vol | Difficulty | Target page |
|---|---|---|---|
| spring lake nc photographer | low-med | low | Home |
| fayetteville nc family photographer | medium | medium | /family-photography (new) |
| newborn photographer fayetteville nc | low-med | low-med | /newborn-photography (new) |
| maternity photographer fayetteville nc | low-med | low-med | /maternity-photography (new) |
| cake smash photographer near me | low-med | low | /cake-smash-photography (new) |
| fort liberty family photographer | low | low | /fort-liberty-photographer (new) |
| military homecoming photographer nc | low | low | blog + service mention |
| photographers in spring lake nc | low | low | Home / GBP |

### Research / mid-funnel — blog
- "what to wear for family photos" · "best time for newborn photos" · "cake smash ideas" · "fall mini session outfits" · "milestone photo ideas" · "maternity photo poses"

### Local discovery — Google Business Profile (not the website)
- "photographer near me", map-pack terms. **GBP is the #1 lever for a local service business and is currently the biggest gap** (see §5).

---

## 3. Competitive landscape (to validate)

No live competitive data was pulled (no DataForSEO). Action: search each money term above in an incognito window from a Fayetteville location and record who ranks in (a) the map pack and (b) organic. Expected competitor types in this market:
- Established Fayetteville studio photographers with Google review counts in the hundreds.
- Other military-spouse solo photographers (your closest comp set).
- Directory/aggregator pages (The Bash, Thumbtack, WeddingWire-style) — these often outrank individual sites; getting listed on them is a backlink + referral channel.

See **COMPETITOR-ANALYSIS.md** for the framework to fill in.

---

## 4. Site architecture changes

Current: single `/services` page covers all session types. This is the **biggest on-site content gap** — one page cannot rank for newborn, maternity, family, cake smash, AND milestone simultaneously.

**Recommended:** keep `/services` as the pricing hub, but add a dedicated, indexable landing page per core service (each ~600–900 words, own schema, own gallery, own FAQ, internal links to portfolio + contact). Plus one location page for the Fort Liberty market.

See **SITE-STRUCTURE.md** for the full URL map.

---

## 5. Google Business Profile (do this Week 1 — free, highest ROI)

For a local service business, **GBP usually drives more bookings than the website itself.**
- Claim/verify the profile (service-area business — hide the home address, set service-area to your towns).
- Category: "Photographer" (+ secondary "Photography studio", "Portrait studio").
- Add all services with prices, 20+ photos, business hours, booking link to `/contact`.
- **Reviews are the ranking engine** — set up a one-tap review link and request a review after every session. Target 10 in 60 days, then steady cadence. This is the highest-impact single action in the whole plan.
- Post weekly (sessions, mini-session announcements) — GBP posts mirror your blog.

---

## 6. Technical foundation

- **Performance:** Next 16 + Vercel + `next/image` (already used) is a strong base. Watch LCP on the homepage hero and the portfolio masonry. Target LCP < 2.5s, INP < 200ms, CLS < 0.1.
- **Schema plan per page type:** see SITE-STRUCTURE.md (LocalBusiness, Service, ImageObject, BreadcrumbList, BlogPosting, Person/author, FAQPage).
- **Sitemap + robots:** fix per §0.
- **AI search readiness:** add an `/llms.txt`, keep FAQ content in clean Q&A blocks (cited by AI Overviews/ChatGPT), ensure each service page answers "how much", "where", "what's included" in plain text.

---

## 7. KPI targets

| Metric | Baseline (today) | 3 Month | 6 Month | 12 Month |
|---|---|---|---|---|
| Organic sessions/mo | ~unknown (set in GA4 now) | +25% | +75% | 2–3× |
| Ranked keywords (top 20) | low | 15–25 | 40–60 | 100+ |
| Map-pack appearances (money terms) | likely 0 | occasional | top-3 for 2–3 towns | top-3 across service area |
| Google reviews | current count | +10 | +25 | 50+ |
| Indexed pages | 7 + 13 posts | +5 service/location pages | +blog cadence | 40+ quality URLs |
| Core Web Vitals (mobile) | fix dup-render first | all "Good" | all "Good" | all "Good" |

DA/"domain authority" is a third-party vanity metric; we track rankings, GBP, and bookings instead.

---

## 8. Risks & mitigation

| Risk | Mitigation |
|---|---|
| Service searches split across one /services page | Build dedicated per-service landing pages (§4) |
| Solo operator, limited time for content | Repurpose: 1 session → 1 blog post + 3 GBP posts + IG/FB; batch quarterly |
| Seasonal demand swings | Publish seasonal mini-session pages 6–8 weeks ahead; evergreen service pages carry the off-season |
| Small market = low volume | Win on map pack + reviews + military niche rather than raw traffic |
| No backlinks | Local: GBP, directories, military-spouse networks, venue/vendor cross-links, local mom blogs |

---

## 9. What I can implement right now (in this repo)

High-leverage, code-level, no extra cost:
1. Add blog post URLs (and future service/location URLs) to `sitemap.ts`
2. Per-page Service/Breadcrumb/FAQ schema; fill `telephone` once available
3. Scaffold the 5 service landing pages + 1 Fort Liberty location page
4. Unique alt text across the portfolio
5. Add `/llms.txt`

Tell me which to start with — I'd recommend 3 (service pages) first, since that's where the real ranking upside is, then 1.
