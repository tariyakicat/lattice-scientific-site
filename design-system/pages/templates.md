# Templates Page Override

> Overrides `design-system/MASTER.md` for the templates/downloads section.

## Page Intent

Templates are a second conversion path: free templates build trust and email/resource intent, paid templates create a lower-ticket product line for users who are not ready for custom illustration.

## Structure

- Hero: explain free and paid scientific figure templates.
- Filter/segmentation: All, Free, Paid, Graphical Abstract, Journal Cover, Figure, Poster, Animation.
- Template cards: title, use case, format, license/access, price, CTA.
- Free items: direct download.
- Paid items: purchase/request CTA until payment infrastructure exists.
- FAQ: usage rights, editability, software requirements, refunds/updates.

## Visual Rules

- Keep light academic service style.
- Free and paid states must be text-labeled, not color-only.
- Paid cards can use a subtle accent border, not a loud marketplace style.
- Template previews should look like clean resource cards, not app-store tiles.
- Use Lucide icons only.

## Interaction Rules

- Free downloads use standard links with `download` when files exist.
- Paid templates must not pretend checkout exists. Use `Request purchase` or `Buy template pack` linking to contact until payment is implemented.
- Every card must disclose format and intended use before CTA.
- Cards remain readable in dark mode.

## Acceptance Criteria

- Users can distinguish free vs paid at a glance.
- Free resources are actually downloadable.
- Paid resources have a clear next step without fake checkout.
- Templates appear in main navigation and homepage.
