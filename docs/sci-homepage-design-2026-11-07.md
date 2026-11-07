# SCI homepage implementation — 7 November 2026

Implemented the user's selection of the first mockup in the latest Product Design set. The original blue-white cell background is retained. The homepage now presents four scientific illustration services, two real selected works, the four-step collaboration process, and a compact project enquiry that opens the existing detailed form.

The prior poster-folder additions remain in the portfolio collection. The homepage follows the selected two-work composition instead of adding extra images to it. Shared navigation, footer and typography now use the same scientific studio styling. Existing content routes and backend contact behavior are retained; four references to removed homepage anchors were repaired.

## Asset provenance

- Existing unchanged hero: `public/generated/hero-background-wide.webp`.
- Existing selected works: `src/assets/portfolio/explain/graphical-nanovaccine.webp` and `mechanism-neurovascular-unit.webp`.
- New LV mark: `public/generated/lattice-lv-mark.png`. Built-in ImageGen, derived from the selected mockup, then trimmed and downscaled for web delivery. Source output: `/Users/yangyinan/.codex/generated_images/01a1ab6b-b823-7c02-b46f-ad025fca33fc/exec-6ad0387d-ac6e-4374-8bf8-b7978108d550.png`.
- Generation prompt: “Extract and faithfully reproduce ONLY the small blue geometric LV monogram from the top-left corner of this supplied approved website mockup, as an isolated production website logo asset on a truly transparent background. Keep the same angular L and V, deep blue and small lighter-blue faceted accents, crisp clean edges. No wordmark, no other lettering, no website, no shadow, no border. One single logo, centered tightly with very little surrounding padding, square 512x512 canvas. This is a faithful asset extraction from the given design, not a new logo exploration.”
- New UI icons: `@phosphor-icons/core`, regular arrow-right, list, and x assets.

## Verification

The local Product Design report is `design-qa.md`; browser evidence is in `tmp/sci-design-qa/`. Build, all local link/asset targets, mobile menu, selected-project viewer, enquiry prefill, validation, modal focus and scrolling were checked. No live email was sent. No deployment or Git push was performed.

Preview: http://localhost:4321/

## Brand update

The user subsequently supplied the official full Lattice Visual logo. The shared header and footer now use the unchanged supplied image at `public/brand/lattice-visual-logo.png`, with responsive sizing. It replaces the earlier generated LV mark; the original file remains an unused design artifact.
