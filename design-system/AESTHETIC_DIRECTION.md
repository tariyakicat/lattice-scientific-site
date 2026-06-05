# Lattice Visual Aesthetic Direction

> Rebuilt after user rejection of the previous gallery-archive aesthetic.
> Reference model: `https://inmywork.com/`.
> This direction uses inmywork for conversion structure and content emphasis, while upgrading the visual quality for Lattice Visual.

## Direction Name

**Scientific Service Atelier**

A service-first scientific illustration website that makes the buying path immediately legible: what Lattice Visual makes, how much it generally costs, how long it takes, what the work looks like, and how to start.

## What We Are Taking From Inmywork

Inmywork works because it is direct:

- Hero states the offer plainly: scientific illustrations and academic journal cover designs.
- A lightweight order/lead form appears immediately.
- Trust appears early with university/client proof.
- Services include price ranges and delivery times, not vague marketing.
- Recent journal cover designs are shown as proof.
- Workflow, FAQ, testimonials and free scientific objects reduce buyer anxiety.

Lattice Visual should use this same conversion spine, but not its WordPress visual treatment.

## What We Are Not Copying

- No blurry stock-office hero as the dominant brand image.
- No heavy plugin carousel feeling.
- No crowded WordPress spacing, oversized shadows, or inconsistent card styling.
- No fake journal/client logo strip such as Nature/Cell unless real, approved credits exist.
- No pure portfolio-gallery first screen that hides service, pricing and order intent.

## Core Concept

The memorable idea: **a high-trust scientific service desk wrapped around excellent artwork.**

The website should feel like a precise research communication studio where a scientist can quickly answer:

1. Can they make the visual I need?
2. Have they made credible work before?
3. What will it cost and how long will it take?
4. What do I send them to get started?

## Visual Positioning

- **Tone:** professional, bright, academic, practical, premium enough to trust.
- **Reference feel:** inmywork's service clarity + upgraded editorial cleanliness.
- **Not:** abstract design studio, SaaS landing page, biotech dashboard, art museum.
- **First impression:** "This team sells scientific illustration services and knows the academic workflow."

## Palette Direction

Use the MASTER semantic tokens, revised toward inmywork's light professional service feel:

- Default mode is light and bright.
- Cool white and soft grey backgrounds separate sections.
- Primary text is confident near-black/navy.
- Primary CTA uses a restrained research green, echoing inmywork's order/download button but cleaner.
- Blue remains a secondary link/focus color, not the dominant brand color.
- Portfolio images carry most of the color.

Dark mode remains supported because the project requires it, but the visual identity is light-first.

## Typography Direction

Move away from the previous high-fashion serif-led portfolio tone.

- Headings should be bold, readable, and service-oriented.
- Body should feel academic but highly legible.
- Use an editorial serif only for small emphasis or section pulls, not every major headline.
- Use mono/tabular figures for prices, delivery times, dimensions and labels.

Recommended feel:

- H1: strong grotesque/sans, large and practical.
- Section titles: clear sans with occasional colored phrase emphasis.
- Service cards: mono delivery metadata + bold price.

## Homepage Architecture

The homepage must follow the inmywork conversion sequence, upgraded:

1. **Hero / instant quote entry**
   - H1: "Scientific illustrations and academic journal cover designs."
   - Subcopy: one sentence naming graphical abstracts, figures, covers and animations.
   - Left or overlay: mini quote form with name, email, institution/company and service type.
   - Right/background: real Lattice portfolio artwork montage, not generic stock.
   - Primary CTA: `Request a quote`.
   - Secondary CTA: `View gallery`.

2. **Experience / trust**
   - Replace unclear Nature/Cell-style logos with transparent proof modules.
   - Use only claims we can stand behind, such as "Journal-ready files", "Researcher-led briefing", "High-resolution delivery", and later real client logos if provided.
   - If using institution/client logos later, label them clearly as "Selected client affiliations" or "Work prepared for researchers from".

3. **We Design Scientific Illustrations**
   - Short paragraph explaining use cases.
   - Bullet list or icon row: graphical abstracts, scientific figures, journal covers, animations, posters, 3D visualization.
   - One strong artwork image beside the text.

4. **Service Pricing Cards**
   - Four to six cards.
   - Each card must show: service name, what it is for, delivery time, indicative price range, Get Started CTA.
   - Pricing visibility is mandatory; it is part of the inmywork benchmark.

5. **Recent Work**
   - Recent journal covers / graphical abstracts / animations.
   - Dense image proof, but not the first and only story.
   - Images must be complete and inspectable; diagrams default to contain.

6. **Resource / lead magnet**
   - Optional phase-2 band inspired by inmywork's free scientific objects.
   - For now: "Free figure brief template" or "Scientific figure checklist" placeholder, not a fake download library.

7. **Testimonials**
   - Use compact quote cards with role/context.
   - Avoid fake names unless clearly placeholder.

8. **FAQ**
   - Price, revisions, data confidentiality, source files, turnaround.

9. **Final CTA**
   - "It is easy to get started" style close.
   - Link back to quote form.

## Portfolio Architecture

The portfolio should look more like inmywork's gallery proof section than a conceptual archive:

- Clear page title: `Scientific Illustration Gallery`.
- Filters: service type first, scientific field second.
- Grid favors complete image visibility over dramatic cropping.
- Captions are simple: service, field, usage, year.
- The gallery should support "journal covers", "graphical abstracts", "figures", "animations" as buyer-recognizable categories.

## Service Page Architecture

Each service page should have:

- Plain service headline.
- "Best for" use cases.
- Delivery time and indicative price range near the top.
- 4-8 sample images.
- Process steps and file formats.
- FAQ specific to that service.
- Quote CTA.

## Motion Principles

Motion should make the service feel polished, not experimental:

- Hero artwork montage fades in with a 40-60ms stagger.
- Mini form fields and CTA have clear focus/hover states.
- Service cards lift subtly and reveal a fine border accent on hover.
- Pricing numbers can count/fade in once, but no gimmicky counters.
- Gallery filters use quick fade/translate transitions under 240ms.
- Honor `prefers-reduced-motion`.

## Implementation Consequences

The current site needs structural redesign, not small cosmetic polish:

- Rebuild the homepage around hero lead form + trust + pricing cards + recent work + FAQ.
- Move pure portfolio-grid treatment lower on the page.
- Remove unclear journal logo strip behavior unless real credits are available and labelled.
- Adjust imagery so figures/abstracts are not cropped.
- Replace the current high-art serif dominance with clearer service typography.
- Keep light/dark support, but design the light theme as the primary brand expression.
