# Science, health, education and technology expansion

The site now introduces illustration and visual communication for researchers, educators and brands. The homepage offers three service paths: explain a concept, teach and present, and showcase a project. Existing specialist portfolio and article URLs remain available.

## New content and discovery

- Three clearly labelled studio concepts demonstrate health education, plant biology teaching and environmental technology communication. They are rendered on the homepage and `/applications/` using existing artwork.
- Each concept describes its audience, brief, approach and possible deliverables, and links to a relevant resource or portfolio page and an editable enquiry.
- The homepage now includes free resources. Navigation, footer, blog and portfolio entries link the expanded offering together.
- Public resources have topic and use metadata. Only populated categories appear in the library. Search, access/type, topic and use combine and persist in the URL.
- Resource details link back to topic/use filters and relevant application studies.
- Contact options cover health, education, skin and beauty, products, presentations and digital experiences. The optional delivery-channel field is included in both email formats.

## Verification

- Astro check and build: 0 errors, 0 warnings, 0 hints; 80 prerendered pages.
- Desktop (1280 × 800) and mobile (390 × 844): inspected hero, application compositions, resource controls and contact layout; no horizontal overflow on the checked pages. Fixed a plant-example text overlap and a presentation-gallery sizing overflow.
- Browser: combined filters, zero-results reset, URL state after reload, mobile navigation, application-to-contact prefill, editable channel, and required-field validation passed. Static preview also returns the correct filtered resource.
- Contact handler: mocked email delivery verifies the new field, HTML escaping, oversized-field rejection and backwards-compatible submissions. No test emails were sent.
- Built-page checks: internal links and fragments, one H1 and canonical per checked page, application sitemap inclusion and continued exclusion/noindex of the Stripe test resource passed.
- Local screenshots and verification output: `tmp/site-expansion-qa/` (not committed).

## External follow-up

The Tawk.to welcome trigger still says “research communication project”. Its dashboard is not signed in, and this message is controlled outside the repository. The widget itself remains operational. In Administration → Triggers → Welcome message, suggested replacement:

> Hi! What would you like to explain? We can help with illustrations, educational content and product or project visuals.

The existing suggested reply buttons can remain. No Tawk settings or visitor conversations were changed.
