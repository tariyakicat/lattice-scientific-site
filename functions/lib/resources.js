export const premiumResources = {
  "stripe-test-download": {
    title: "Stripe Test Download",
    price: 100,
    currency: "usd",
    stripePriceId: null,
    downloadName: "lattice-visual-stripe-test.svg",
    contentType: "image/svg+xml; charset=utf-8",
    inlineContent: `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800" role="img" aria-labelledby="title desc">
  <title id="title">Lattice Visual Stripe test download</title>
  <desc id="desc">A private test asset delivered after a verified Stripe Sandbox payment.</desc>
  <rect width="1200" height="800" fill="#f4f8fc"/>
  <circle cx="930" cy="180" r="220" fill="#dcebf7"/>
  <circle cx="190" cy="690" r="280" fill="#e8f2fa"/>
  <path d="M120 570 C320 230 520 680 710 350 S1010 180 1100 420" fill="none" stroke="#1f7fc4" stroke-width="18" stroke-linecap="round"/>
  <g fill="#1a2433" font-family="Arial, Helvetica, sans-serif">
    <text x="120" y="205" font-size="34" letter-spacing="4">LATTICE VISUAL</text>
    <text x="120" y="325" font-size="76" font-weight="700">Payment test complete</text>
    <text x="120" y="395" font-size="30" fill="#5a6675">This private SVG was released after Stripe verified the purchase.</text>
    <text x="120" y="720" font-size="24" fill="#5a6675">Sandbox resource · $1.00 · Testing only</text>
  </g>
</svg>`,
  },
  "journal-cover-layouts": {
    title: "Journal Cover Layouts",
    price: 1900,
    currency: "usd",
    stripePriceId: "price_TODO_journal_cover_layouts",
  },
  "mechanism-figure-kit": {
    title: "Mechanism Figure Kit",
    price: 2900,
    currency: "usd",
    stripePriceId: "price_TODO_mechanism_figure_kit",
  },
  "scientific-slide-deck": {
    title: "Scientific Slide Deck",
    price: 2400,
    currency: "usd",
    stripePriceId: "price_TODO_scientific_slide_deck",
  },
  "cell-organelle-3d-pack": {
    title: "Cell & Organelle 3D Pack",
    price: 3500,
    currency: "usd",
    stripePriceId: "price_TODO_cell_organelle_pack",
  },
  "biomedical-texture-pack": {
    title: "Biomedical Texture Pack",
    price: 1500,
    currency: "usd",
    stripePriceId: "price_TODO_biomedical_texture_pack",
  },
};

export function getPremiumResource(slug) {
  return premiumResources[slug] || null;
}

export function isPaidSessionForResource(session, slug, resource) {
  return session?.payment_status === "paid"
    && session?.metadata?.resourceSlug === slug
    && session?.amount_total === resource.price
    && session?.currency === resource.currency;
}
