# SCI website refinement — 5 November 2026

Implemented in the existing Astro project for `sci.latticevisual.com`. Changes are local; no deployment, remote push or hosting settings were changed.

## Experience

- Replaced the full-background hero with an editorial split layout featuring an original eye illustration.
- Retained the blue studio identity, with warm white surfaces, navy typography, Source Serif 4 headings and DM Sans body text.
- Reorganised the homepage into services, selected work, application concepts, free resources, process and contact. Removed repeated service galleries from the homepage; the full visual explanation collection remains linked.
- Updated shared navigation, cards, collection headings, contact form and footer. Mobile navigation closes after selection, outside click or Escape.
- Expanded the main portfolio from 6 to 14 entries. Filters and category cross-links show populated categories. The dedicated `/portfolio/explain/` collection remains available.
- Homepage selections open their matching project viewer through `category` and `project` query parameters. Existing comparison viewers remain available below the portfolio grid.
- Kept old `/#explain`, `/#present` and `/#impact` destinations valid, and removed nested main landmarks from portfolio pages.

## Artwork provenance

The following source files are from `/Users/yangyinan/Documents/poster/`. Source files were left intact. Web copies preserve full compositions and transparency, use WebP and are bounded to 2200 px. They are portfolio previews, not new downloadable resource products.

| Source | Web asset in `src/assets/portfolio/poster-collection/` | Placement |
| --- | --- | --- |
| 眼睛2.tif | anatomical-eye.webp | Homepage hero, portfolio |
| 脑子3.tif | anatomical-brain.webp | Portfolio |
| 线粒体.png | mitochondrial-response.webp | Portfolio |
| 环氧泡沫材料制备.png | epoxy-foam-process.webp | Selected work, portfolio |
| 机器学习V3 拷贝.tif | machine-learning-materials.webp | Selected work, portfolio |
| 虫子海报 拷贝.png | antimicrobial-peptide-poster.webp | Selected work, portfolio |

Two existing explanation-gallery images, `graphical-nanovaccine.webp` and `mechanism-plant-lineage.webp`, now also have main portfolio entries. Imported entry dates reflect this update, not asserted project completion dates. No client names, tool credits or publication claims were added.

## Verification

- `npm run build`: 0 errors, 0 warnings, 0 hints; 80 pages built.
- All generated HTML: no broken local links or fragments; one H1 and main landmark per page.
- Browser layout checks at 320, 390, 768, 1024 and 1440 px on homepage, portfolio, resources, applications and blog: no document horizontal overflow.
- Desktop and mobile screenshot review: hero, selected artwork, contact layout and full-composition project viewer.
- Portfolio: direct project opening, category filtering, restored all-project count, close button and Escape.
- Resources: search combined with topic, zero-results reset; existing downloads retained.
- Contact: application context and project-type prefill, required-name/email errors. No enquiry was sent and live email delivery was not tested.
- Loaded homepage images checked after scrolling: no failed images.
- `git diff --check` passed.

Local screenshots and detailed asset/static-check reports are in ignored `tmp/refinement-qa/`.

To preview the completed build locally, run `npm run preview -- --port 4173` in this project, then open `http://localhost:4173/`.
