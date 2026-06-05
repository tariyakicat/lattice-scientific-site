# Portfolio Page Override

> Overrides `design-system/MASTER.md` for the portfolio/gallery page.
> Rebuilt to support the inmywork-style service buying path.

## Page Intent

The portfolio is a sample gallery for buyers evaluating service fit. It must answer "Can Lattice Visual make my kind of figure?" faster than it answers "Is this an interesting art archive?"

## Positioning

Use title language buyers recognize:

- `Scientific Illustration Gallery`
- `Recent Journal Covers`
- `Graphical Abstract Samples`
- `Scientific Animation Samples`

Avoid overly conceptual titles such as "Research Image Archive" or "Specimen Plates" on this page.

## Filter Priority

Primary filters: service/output type.

- All
- Journal Cover
- Graphical Abstract
- Scientific Figure
- Mechanism Diagram
- Scientific Animation
- Poster / 3D Visualization

Secondary filters: field.

- Molecular / Cellular
- Medicine
- Ecology
- Chemistry
- Physics / Materials
- Data Visualization

Selected filters must use text/shape indication, not color alone.

## Grid

Desktop:

- Clean image gallery with enough density to feel useful.
- 3-column or 4-column regular rhythm is acceptable; asymmetric layouts are secondary.
- Prioritize complete artwork visibility.
- Use `object-fit: contain` for diagrams, graphical abstracts and mechanism figures.
- Use `object-fit: cover` only for journal-cover-like artwork.

Mobile:

- Single column for large figures, optional 2-column for covers.
- Captions visible without hover.
- Filter controls wrap cleanly and remain tap-friendly.

## Card Metadata

Every item should show enough buyer context:

- Service type.
- Field.
- Usage: cover, TOC, graphical abstract, figure, animation, poster.
- Optional year.
- Optional client/publication only when real and approved.

## Recent Work Section

The homepage and portfolio both need "recent work" behavior inspired by inmywork:

- A heading like `Recent Scientific Illustration Work`.
- A dense but polished image grid.
- A CTA after the first 8-12 images: `Request a similar project`.

## Media Rules

- No broken or visibly cropped diagrams.
- Reserve dimensions/aspect ratios to prevent CLS.
- Use responsive image sizes.
- Lazy-load below fold.
- Use load-more when there are more than 18-24 samples.
- Videos use muted autoplay loops only when small and lightweight; still image fallback required.

## Motion

- Hover: subtle lift, image scale up to 1.02 max, border darkens.
- Filter: fade/translate within 180-240ms.
- No parallax and no motion that interferes with image inspection.

## Acceptance Criteria

- The user can find samples by service type within one interaction.
- Diagrams and abstracts are shown complete.
- The gallery supports quote conversion with clear CTAs.
- The page feels more useful and commercial than the previous pure portfolio direction.
