# Content Cluster Plan — photobytiff.com

**Method:** SERP-overlap clustering (how Google actually groups these terms), validated with live searches on 2026-05-31. Built on the content that now exists on the site (5 service pages, Fort Bragg location page, 18 blog posts) rather than from scratch.

**Data caveat:** SERP overlap measured via WebSearch (top-10 organic), not a paid rank API. No keyword *volumes* were available — the "Vol" column is a **relative** small-local-market estimate (H/M/L), not measured numbers. Validate in Google Search Console once the site is indexed.

---

## What the SERPs told us

| Search | Who ranks (top domains) | Overlap group |
|---|---|---|
| family photographer Fayetteville NC | taylorheim, jmarie, victoriavasilyeva, savannahleigh, lizahondros, simplyheaven | **Commercial** |
| newborn photographer Fayetteville NC | taylorheim, jmarie, victoriavasilyeva, paigeporchia, tinyvisuals, simplyheaven | **Commercial** (4–6 shared w/ family) |
| maternity photographer Fayetteville NC | jmarie, taylorheim, paigeporchia, carolinamediastar, simplyheaven, aidangrace | **Commercial** (4–6 shared) |
| cake smash photographer Fayetteville NC | simplyheaven, taylorheim, carolinamediastar, tinyvisuals, coco | **Commercial** (2–3 shared) |
| Fort Bragg family photographer | proimagedigital, savannahleigh, lisaterry (+ Fort Bragg CA noise) | **Military** (distinct SERP) |
| what to wear family photos fall | national blogs only (briana c, theeverymom, brittanybekas) | **Informational** (0 local overlap) |
| when to book newborn photos | national blogs only (marybethmiller, jennchen, whitneyobrien) | **Informational** (0 local overlap) |

**Interpretation:** The local service terms form one tight commercial neighborhood — but they resolve to *different service pages*, so we build one spoke each (no cannibalization). Fort Bragg is its own SERP → its own cluster. Informational queries live in a completely separate, national SERP → they're blog spokes that funnel visitors toward the money pages.

---

## Architecture: 1 pillar, 4 clusters

### PILLAR
**"Photographer in Spring Lake / Fayetteville, NC"** → `/services` (the pricing + services hub)
- Role: broad commercial head term; links down to every service and up-catches "photographer near me / Spring Lake NC / Fayetteville NC" traffic.
- Already exists. Enhancement: it now links to all 5 service spokes (done) + should link to the Fort Bragg page and 2–3 top blog posts.

---

### CLUSTER A — Service / money pages (commercial)  🟦
Each is a dedicated landing page; intent = "hire a {service} photographer here."

| Spoke | Target keyword | Page (exists) | Vol | Intent |
|---|---|---|---|---|
| Newborn | newborn photographer Fayetteville / Spring Lake NC | `/services/newborn-photography` | M | Commercial |
| Family | family photographer Fayetteville / Fort Bragg NC | `/services/family-photography` | M-H | Commercial |
| Maternity | maternity photographer Spring Lake / Fayetteville NC | `/services/maternity-photography` | L-M | Commercial |
| Cake smash | cake smash photographer Fayetteville NC | `/services/cake-smash-photography` | L-M | Commercial |
| Milestone | milestone / children's photographer Spring Lake NC | `/services/milestone-photography` | L | Commercial |

### CLUSTER B — Fort Bragg / military (commercial, niche)  🟩
The differentiator. Distinct SERP, low competition, recurring demand.

| Spoke | Target keyword | Page (exists) | Vol | Intent |
|---|---|---|---|---|
| Fort Bragg hub | Fort Bragg family photographer | `/fort-bragg-family-photographer` | L | Commercial |
| Military family blog | military family photography Fort Bragg | `/blog/family-photography-fort-bragg-nc` | L | Info→Commercial |

### CLUSTER C — Prep / how-to (informational, top-of-funnel)  🟧
National SERP, no local competition — easy to rank, funnels to money pages.

| Spoke | Target keyword | Page (exists) | Vol | Intent |
|---|---|---|---|---|
| What to wear | what to wear family photos | `/blog/what-to-wear-to-a-photoshoot` | H | Informational |
| Coordinating outfits | how to coordinate family photo outfits | `/blog/how-to-choose-coordinating-outfits-family-session` | M | Informational |
| How to prepare | how to prepare for a photoshoot | `/blog/how-to-prepare-for-a-photoshoot` | M | Informational |
| What to expect | what to expect at a family photo session | `/blog/what-to-expect-at-your-family-photo-session` | M | Informational |
| Newborn tips | when to book newborn photos / newborn prep | `/blog/newborn-photography-tips-spring-lake-nc` | M | Informational |

### CLUSTER D — Concept / "what is" + local (informational)  🟪
Education posts that capture "what is a X session" + local-discovery content.

| Spoke | Target keyword | Page (exists) | Vol | Intent |
|---|---|---|---|---|
| What is a cake smash | what is a cake smash session | `/blog/what-is-a-cake-smash-session` | M | Info |
| What is a milestone session | what is a milestone session | `/blog/what-is-a-milestone-session` | L-M | Info |
| What is a baby-led newborn session | baby-led newborn session | `/blog/what-is-a-baby-led-newborn-session` | L | Info |
| What is a mini session | what is a mini photo session | `/blog/what-is-a-mini-session` | L-M | Info |
| What is a lifestyle photographer | lifestyle photographer meaning | `/blog/what-is-a-lifestyle-photographer` | M | Info |
| Session locations | best photo session spots Spring Lake | `/blog/best-photo-session-locations-spring-lake-fort-bragg` | L-M | Info→Local |
| Spring Lake local | Spring Lake NC family spots | `/blog/spring-lake-hidden-gems-local-spots-families-love` | L | Info→Local |

---

## Internal link matrix (the important part)

**Mandatory backbone**
- Every **Cluster C/D blog post** → link to its matching **Cluster A service page** (e.g., "when to book newborn photos" → `/services/newborn-photography`). This is what converts informational traffic into bookings. *Several of your posts already do this via in-body links — extend to all.*
- Every **service page** → links to `/contact` (done) and its **portfolio category** (recommended add).
- **Pillar `/services`** → all 5 service pages (done) + Fort Bragg page (recommended add).

**Concept → money pairings (Cluster D → A)**
| Blog post | Should link to |
|---|---|
| what-is-a-cake-smash-session | /services/cake-smash-photography |
| what-is-a-milestone-session | /services/milestone-photography |
| childrens-milestone-photography | /services/milestone-photography |
| what-is-a-baby-led-newborn-session | /services/newborn-photography |
| newborn-photography-tips-spring-lake-nc | /services/newborn-photography |
| maternity-photography-spring-lake-nc | /services/maternity-photography |
| what-is-a-mini-session | /mini-sessions |
| sunflower-field-mini-session, 4th-of-july-mini-session | /mini-sessions |
| what-to-wear / coordinating-outfits / how-to-prepare / what-to-expect | /services/family-photography |
| best-photo-session-locations, spring-lake-hidden-gems | /services/family-photography + /fort-bragg-family-photographer |
| family-photography-fort-bragg-nc | /fort-bragg-family-photographer |

**Fort Bragg cluster (B)**
- `/fort-bragg-family-photographer` ↔ `/services/family-photography` (cross-link both ways)
- `/blog/family-photography-fort-bragg-nc` → `/fort-bragg-family-photographer` (spoke→hub)

**Rules applied**
- Every page reachable from `/services` in ≤2 clicks (no orphans).
- Anchor text = target keyword or close variant (never "click here").
- Links placed in body content, not just nav/footer.

---

## Cannibalization check ✅
No two pages target the same primary keyword:
- Service pages each own a distinct "{service} photographer" term.
- Blog posts own informational/question terms ("what is…", "when to…", "what to wear…").
- The one risk: `childrens-milestone-photography` (blog) vs `what-is-a-milestone-session` (blog) vs `/services/milestone-photography`. **Recommendation:** point both milestone blog posts at the service page and differentiate their angles (one "what is it," one "tips"), or merge the two thin milestone blog posts. Flagged, not urgent.

---

## Priority actions (what to actually do)
1. **Add the Cluster C/D → Cluster A body links** listed above to any post missing them. Highest-ROI SEO move now that the money pages exist — it routes your existing blog traffic to pages that book sessions.
2. **Link `/services` → `/fort-bragg-family-photographer`** and 2–3 top blog posts (pillar completeness).
3. **Add "related session" links** at the bottom of each service page to 2 relevant blog posts (spoke → informational, deepens the cluster).
4. Resolve the milestone near-duplicate (merge or differentiate).

I can implement #1–#3 in code — most are one-line `<a>` additions in `posts.ts` and the service data. Say the word.
