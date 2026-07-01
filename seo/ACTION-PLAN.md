# SEO Action Plan — photobytiff.com

Prioritized from the full audit. **Score today: 82/100.** Items marked **[Dev]** I can do in this repo now; **[You]** are business/live actions.

---

## 🔴 CRITICAL — do immediately (blocks indexing / penalties)

1. **[You] Verify the live site isn't blocking crawlers.**
   `https://photobytiff.com` currently returns a **307 redirect**. Open it in an incognito window:
   - If it loads the site normally → fine (it was just apex↔www or a trailing-slash redirect). No action.
   - If it shows a **Vercel login / password wall** → Deployment Protection is on for production. Turn it OFF: Vercel → Project → Settings → **Deployment Protection** → disable for Production. **While this is on, Google cannot index the site and no SEO work matters.**
   - Then confirm one canonical host: pick `photobytiff.com` **or** `www.` and 301 the other (Vercel → Domains).

---

## 🟠 HIGH — within 1 week (significant ranking impact)

2. **[Dev] Build 5 service landing pages** (`/services/newborn-photography`, `-maternity-`, `-family-`, `-cake-smash-`, `-milestone-`). Each: unique H1, 600–900 words (reuse your strong blog copy), gallery from that portfolio category, FAQ, `Service`+`FAQPage`+`BreadcrumbList` schema, links to /contact. *Biggest ranking upside.* Needs a little copy input from you per service.

3. **[Dev] Build the Fort Liberty location page** (`/fort-liberty-family-photographer`) — PCS, homecoming, deployment, promotion sessions. Your strongest differentiator; nobody local targets it.

4. **[Dev] Add `BlogPosting` + `BreadcrumbList` JSON-LD to blog posts** (author = the existing Tiffany `Person`, `datePublished`, `image`, `headline`). Uses data already in `posts.ts`.

5. **[You] Claim & verify Google Business Profile** + start requesting reviews after every session. For a local service business this drives more bookings than the website. Highest business ROI.

6. **[You] Set up Search Console + GA4**, verify the domain, submit `sitemap.xml`. Nothing can be measured until this exists.

---

## 🟡 MEDIUM — within 1 month (optimization)

7. **[Dev] Add `llms.txt`** at `/public/llms.txt` — who/what/where/services/prices/booking. Cheap AI-search win.

8. **[Dev] Add an FAQ block** (real Q&A: "How much is a session?", "Where do you shoot?", "How far do you travel?", "What's included?") to `/services` and each service page → `FAQPage` schema + AI Overview citations.

9. **[Dev] Migrate expanded blog copy into the rich `content` field** for the 9 posts still using the excerpt fallback, with `<h2>`/`<p>` structure.

10. **[Dev] Convert homepage section labels to `<h2>`/`<h3>`** ("Service offerings", "Kind Words", "About", "Ready to book?") for proper heading hierarchy.

11. **[Dev] Fix `logo` schema path** — points to `/images/logo.png`; confirm it exists or repoint to the real logo file.

12. **[You] Populate `telephone`** (schema + GBP) once you have a public business number → **[Dev]** wires it in.

13. **[You] Get listed** on Thumbtack / The Bash / Bark / local mom & military-spouse networks (referrals + backlinks).

---

## 🟢 LOW — backlog (nice to have)

14. **[Dev]** Add `manifest.webmanifest` + PWA icons.
15. **[Dev]** Hand-tune alt text for hero/featured images (currently filename-derived — fine, but could be richer).
16. **[Dev]** Add `ImageObject` schema to portfolio images.
17. **[Dev]** Per-post `lastModified` dates in the sitemap.
18. **[You]** Resolve the duplicate portfolio image (`family-session-outdoor-nature.jpg` appears in both Maternity and Cake Smash).
19. **[You/Dev]** Join PPA or a local photographers' guild → authority signal + backlink.

---

## Suggested sequence
**This week:** #1 (you, urgent) → #5, #6 (you) → I build #4, #7, #8, #10 (fast, no input needed).
**Next 2 weeks:** #2, #3 (service + location pages — needs your per-service copy/images).
**Then:** #9, #11, #12, and the backlog.

Want me to start on the **[Dev]** items that need no input from you right now — #4 (blog schema), #7 (llms.txt), #8 (FAQ + schema), #10 (heading structure)? I can knock those out and build to verify in one pass.
