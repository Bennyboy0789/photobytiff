# Site Structure & URL Architecture

## Current URLs (7 pages + 13 blog posts)
```
/                     Home
/about                About Tiffany
/services             All session types + pricing
/portfolio            Filterable gallery (Maternity/Newborn/Children/Families/Cake Smash)
/blog                 Blog listing
/blog/[slug]          13 individual posts (newly added)
/contact              Contact form (SMTP2GO)
/mini-sessions        Seasonal mini sessions
```

## Recommended additions

### Service landing pages (the priority — one focused page per money term)
```
/services/newborn-photography           "Newborn Photographer | Fayetteville & Spring Lake, NC"
/services/maternity-photography         "Maternity Photographer | Spring Lake, NC"
/services/family-photography            "Family Photographer | Fayetteville & Fort Liberty, NC"
/services/cake-smash-photography        "Cake Smash Photographer | Spring Lake, NC"
/services/milestone-photography         "Milestone & Children's Photographer | Spring Lake, NC"
```
Keep `/services` as the **pricing hub** that links down to each of these.

### Location page (the wedge)
```
/fort-liberty-family-photographer       Military families: PCS, homecoming, deployment, promotion sessions
```
(Add /fayetteville- and /sanford- variants later ONLY if you can make each genuinely unique — thin near-duplicate location pages get penalized. Quality gate below.)

### Each service page template (≈600–900 words)
1. H1: `{Service} Photographer in Spring Lake & Fayetteville, NC`
2. Intro: what the session is + your approach (reuse the strong blog copy you already wrote)
3. What's included / pricing snapshot → link to /services
4. Gallery: 6–10 images from that portfolio category
5. FAQ (3–5 Q&A) → feeds FAQPage schema + AI Overviews
6. CTA → /contact
7. Internal links: related service, relevant blog posts, portfolio filter

## Internal linking rules
- Home → all 5 service pages (add to a "Services" section/nav dropdown)
- Each service page ↔ its portfolio category, ↔ 2–3 related blog posts, → /contact
- Every blog post → the most relevant service page (currently posts only link back to /blog and /contact)
- Footer → all service pages (sitewide equity distribution)
- Breadcrumbs on service/blog pages (with BreadcrumbList schema)

## Schema markup plan per page type
| Page | Schema types |
|---|---|
| Home | LocalBusiness (enrich existing) + WebSite + (optional) sitelinks SearchAction |
| About | Person (Tiffany — name, jobTitle, image, sameAs, worksFor) |
| Service pages | Service + Offer (price) + BreadcrumbList + FAQPage + ImageObject |
| Portfolio | ImageGallery / ImageObject with unique captions |
| Blog post | BlogPosting (author=Person, datePublished, image, headline) + BreadcrumbList |
| Contact | ContactPage + LocalBusiness ref |
| Mini-sessions | Event or Service with availability dates |

## Quality gates (prevent index bloat)
- ❌ No location page without ≥400 words of genuinely unique copy (local landmarks, real sessions shot there, town-specific detail).
- ❌ No blog post under ~300 words — expand or merge the current thin ones.
- ❌ No duplicate meta titles/descriptions (each service page unique).
- ✅ Every indexable page: unique H1, unique title, unique meta description, canonical, ≥1 image with descriptive alt.
## robots.txt + sitemap
- `public/robots.txt` already exists, is clean, and points to the sitemap ✓ — no change needed.
- Update `src/app/sitemap.ts`: append `/services/*`, the location page, and all `/blog/[slug]` URLs from the shared posts data. (Priorities are already numeric ✓.)
