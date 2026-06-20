export const premiumResources = {
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
