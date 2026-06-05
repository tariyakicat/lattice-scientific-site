# Lattice Visual Design System

> Source of truth for the Lattice Visual scientific illustration website.
> Generated from `ui-ux-pro-max` design-system and domain searches on 2026-06-04, then curated for this project's scientific illustration / academic B2B portfolio brief.

## Retrieval Rules

1. Before building a page, read this file.
2. Then check `design-system/pages/<page>.md`.
3. If a page file exists, its rules override this MASTER only for that page.
4. Components must use semantic tokens from this document. Do not hardcode raw hex values inside components.

## Product Position

Lattice Visual is a scientific illustration studio for researchers, journals, laboratories, biotech and pharma teams. The site must feel:

- Journal-cover refined, but immediately understandable as a service business.
- Precise, academic, practical and proof-first.
- Trustworthy for high-stakes research communication.
- Quiet in UI color so portfolio images carry the visual energy.
- Fast and comfortable for browsing many high-resolution artworks.
- Clear about services, indicative prices, turnaround and quote flow.

## Core Pattern

**Primary pattern:** Service-and-proof conversion site.

This replaces the previous gallery-first portfolio direction. The inmywork reference proves that buyers in this category need service clarity before they browse deeply: offer, trust, price, delivery, gallery proof, workflow, FAQ and quote path.

Global page rhythm:

1. Plain service offer and quote/start action above the fold.
2. Early trust and capability proof.
3. Service categories with delivery time and indicative price ranges.
4. Recent work / gallery proof.
5. Templates and downloadable resources as a lower-friction entry point.
6. Workflow, testimonials and FAQ to reduce buying anxiety.
7. Clear quote CTA.

## Aesthetic Principles

- **Service clarity first:** A new visitor must quickly understand what can be ordered, how it works, and what it may cost.
- **Work is proof:** Images validate the service, but should not hide service/pricing information.
- **Light academic service feel:** Bright, calm, precise sectioning inspired by inmywork, upgraded with cleaner spacing and typography.
- **Measured trust:** Use real, label-clear trust modules. Do not show unexplained Nature/Cell-style logo strips.
- **No decorative noise:** Any texture or pattern must support precision, e.g. faint grid, hairlines, measurement ticks.
- **No generic SaaS cards:** Cards are only for repeated services, work, testimonials, pricing, forms and FAQ.
- **No emoji icons:** Use Lucide icons only. Icons are functional, not decorative.

## Color System

Use semantic tokens for both themes. The chosen palette follows the `ui-ux-pro-max` neutral/cool professional recommendations, rejecting vibrant rose/pink outputs because they conflict with the brief.

### Light Theme Tokens

| Token | Value | Use |
|---|---:|---|
| `--color-bg` | `#F8FAFC` | Page background |
| `--color-canvas` | `#FFFFFF` | Main gallery/image canvas |
| `--color-surface` | `#FFFFFF` | Cards, forms, header |
| `--color-surface-muted` | `#EAEFF3` | Subtle bands, skeletons |
| `--color-ink` | `#0F172A` | Primary text |
| `--color-text` | `#1E293B` | Body text |
| `--color-text-muted` | `#64748B` | Secondary text |
| `--color-border` | `#E2E8F0` | Hairlines/dividers |
| `--color-border-strong` | `#CBD5E1` | Active dividers |
| `--color-primary` | `#0F172A` | Brand/nav/action text |
| `--color-accent` | `#43B875` | Primary CTA, order buttons |
| `--color-accent-soft` | `#E8F7EE` | CTA/service highlight background |
| `--color-link` | `#2563EB` | Text links, focus detail |
| `--color-success` | `#0F766E` | Success states |
| `--color-danger` | `#DC2626` | Error/destructive states |
| `--color-ring` | `#2563EB` | Focus ring |

### Dark Theme Tokens

| Token | Value | Use |
|---|---:|---|
| `--color-bg` | `#070A0F` | Page background |
| `--color-canvas` | `#0B111A` | Image canvas |
| `--color-surface` | `#111827` | Cards, forms, header |
| `--color-surface-muted` | `#1E293B` | Subtle bands, skeletons |
| `--color-ink` | `#F8FAFC` | Primary text |
| `--color-text` | `#E2E8F0` | Body text |
| `--color-text-muted` | `#94A3B8` | Secondary text |
| `--color-border` | `#263244` | Hairlines/dividers |
| `--color-border-strong` | `#475569` | Active dividers |
| `--color-primary` | `#F8FAFC` | Brand/nav/action text |
| `--color-accent` | `#63D992` | Primary CTA, order buttons |
| `--color-accent-soft` | `#123524` | CTA/service highlight background |
| `--color-link` | `#93C5FD` | Text links, focus detail |
| `--color-success` | `#2DD4BF` | Success states |
| `--color-danger` | `#F87171` | Error/destructive states |
| `--color-ring` | `#93C5FD` | Focus ring |

### Color Rules

- Do not use bright accent fills behind large areas of artwork.
- Research green is for primary quote/order actions and selected service emphasis.
- Blue is reserved for text links, focus detail and secondary informational states.
- Borders must remain visible in both themes.
- Text contrast target: body text at least 4.5:1; secondary text at least 3:1 for metadata and captions.
- Functional color must never be the only signal; pair it with text or icon.

## Typography

Use an academic sans/serif/mono trio informed by `ui-ux-pro-max` typography results and the inmywork benchmark's direct service tone.

| Role | Font | Source |
|---|---|---|
| Display / H1 / section titles | `Atkinson Hyperlegible` | Clear academic/service readability |
| Editorial pulls / optional emphasis | `Crimson Pro` | Scholarly accent, used sparingly |
| Body / UI / nav / forms | `Atkinson Hyperlegible` | Accessible institutional UI |
| Metadata / DOI / dimensions / prices | `JetBrains Mono` | Tabular scientific/data tone |

Recommended import:

```css
@import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=Crimson+Pro:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');
```

Typography rules:

- Body text minimum 16px on mobile.
- Body line-height: 1.55 to 1.7.
- Desktop long-form measure: 60-75 characters.
- Use bold, readable service headings. Avoid high-fashion serif dominance.
- Metadata uses mono with `font-variant-numeric: tabular-nums`.
- Avoid tight tracking on body text.
- Do not truncate scientific titles unless a full title is available via detail page or tooltip.

## Spacing And Grid

Use a 4/8px spacing system.

| Token | Value | Use |
|---|---:|---|
| `--space-1` | `4px` | Micro offsets |
| `--space-2` | `8px` | Icon gaps, compact labels |
| `--space-3` | `12px` | Tight controls |
| `--space-4` | `16px` | Base component padding |
| `--space-5` | `20px` | Compact card padding |
| `--space-6` | `24px` | Standard card padding |
| `--space-8` | `32px` | Section inner gaps |
| `--space-10` | `40px` | Large grid gaps |
| `--space-12` | `48px` | Section groups |
| `--space-16` | `64px` | Large vertical rhythm |
| `--space-24` | `96px` | Desktop section rhythm |
| `--space-32` | `128px` | Hero / page top rhythm |

Grid rules:

- Desktop: 12-column grid.
- Tablet: 8-column grid.
- Mobile: 4-column grid.
- Max content width: `1440px` for image-led layouts, `1120px` for text/service layouts, `760px` for long-form paragraphs.
- Page gutters: 20px mobile, 32px tablet, 48-64px desktop.
- Avoid horizontal scroll at all breakpoints.

## Components

### Header

- Sticky header with direct service navigation.
- Left: wordmark. Center/right: Pricing, Gallery, Workflow, FAQ, Our Story / About.
- Primary action: "Get a quote" or "Order now".
- Optional resource/download action may appear only when a real resource exists.
- Mobile: menu button with Lucide Menu icon and clear `aria-label`.

### Buttons

- Use one primary CTA per view.
- Height: 44px minimum.
- Radius: subtle, 6-10px, not bubbly.
- States: hover, active, focus, disabled.
- Motion: 150-240ms, transform/opacity/background only.
- Focus ring visible in both themes using `--color-ring`.

### Portfolio Cards

- Cards frame artworks without cropping important content by default.
- Use declared aspect ratios to prevent CLS.
- Hover may reveal title, discipline, usage, year, but must not be the only way to access info on touch.
- Hover motion: 180-260ms; slight lift or image scale only.
- Captions use mono metadata sparingly.

### Service / Pricing Cards

- Every primary service card should include service name, short use case, delivery time, indicative price range and CTA.
- Delivery time and price use mono/tabular figures.
- Highlight one recommended/general service card at most.
- Do not hide pricing behind hover.
- Cards should feel clean and bright, not like SaaS feature boxes.

### Template Cards

- Template cards must clearly label `Free` or `Paid`.
- Free templates can link directly to downloadable files.
- Paid templates require a clear purchase/request CTA until payment infrastructure is available.
- Cards should show format, intended use, included files and license/access notes.
- Do not use color alone to distinguish free and paid states.

### Forms

- Visible labels, not placeholder-only.
- Required fields indicated by text or mark.
- Error below relevant field, with actionable copy.
- Submit button has loading/disabled/success states.
- File upload explains accepted formats and maximum size.

## Imagery And Media

From `ui-ux-pro-max` UX search:

- Use AVIF/WebP where available; preserve originals only as source assets.
- Use responsive `srcset`/Next Image sizes.
- Lazy-load below-fold images.
- Declare width/height or aspect-ratio for every image/media item.
- Avoid serving 4000px images into small cards.
- Use skeletons for slow media loading over 300ms.
- Portfolio pages with 50+ items need pagination, "load more", or virtualization.
- High-resolution project detail pages may use progressive loading.

Scientific image rule:

- Do not crop diagrams or graphical abstracts unless the crop is intentional and duplicated by a full-view option.
- Journal cover art can crop more dramatically; diagrams/figures default to contain.

## Motion System

Motion should feel premium but restrained.

- Global duration tokens: 150ms, 220ms, 300ms, 400ms max for larger page transitions.
- Easing: ease-out for entrance, ease-in for exit, spring-like but not bouncy for shared image transitions.
- Animate transform and opacity only.
- Respect `prefers-reduced-motion`.
- Use motion for cause/effect: filtering, image reveal, hover state, page transition, form success.
- Avoid parallax-heavy effects that make scientific images harder to inspect.

## Accessibility Checklist

- Body contrast >= 4.5:1 in light and dark.
- Secondary text >= 3:1.
- Focus visible on every interactive element.
- All icon-only buttons have `aria-label`.
- All meaningful images have alt text.
- Heading hierarchy must not skip levels.
- Do not use color alone for status/filter selection.
- Mobile body text >= 16px.
- Touch targets >= 44px.
- Reduced motion supported.

## Implementation Constraints For Later Phases

- Framework: Next.js App Router + TypeScript + Tailwind CSS.
- Icons: Lucide only.
- Theme: light/dark with token parity.
- Components must use semantic tokens, not raw hex.
- Page implementation must read this MASTER and any page override before coding.
