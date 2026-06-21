export const portfolioCategoryNames = [
  "Graphical Abstracts",
  "Journal Covers",
  "Figures",
  "Infographics",
  "Slides",
  "Posters",
  "Branding",
] as const;

export type PortfolioCategoryName = (typeof portfolioCategoryNames)[number];

export const portfolioCategories = [
  {
    slug: "graphical-abstracts",
    name: "Graphical Abstracts",
    heading: "Graphical abstract design examples",
    intro: "Concise visual narratives that distil a research question, method and key finding into one coherent composition.",
  },
  {
    slug: "journal-covers",
    name: "Journal Covers",
    heading: "Scientific journal cover design examples",
    intro: "Concept-led scientific artwork developed for editorial cover formats, with careful attention to hierarchy and visual storytelling.",
  },
  {
    slug: "figures",
    name: "Figures",
    heading: "Scientific figure design examples",
    intro: "Clear mechanism, pathway and process figures built to make technical relationships easier to follow.",
  },
  {
    slug: "infographics",
    name: "Infographics",
    heading: "Scientific infographic examples",
    intro: "Structured visual explanations that translate dense scientific information for specialist and broader audiences.",
  },
  {
    slug: "slides",
    name: "Slides",
    heading: "Scientific presentation design examples",
    intro: "Presentation visuals that give research talks, proposals and pitch decks a clear visual rhythm.",
  },
  {
    slug: "posters",
    name: "Posters",
    heading: "Scientific poster design examples",
    intro: "Research posters designed for rapid scanning, legible evidence and confident conference presentation.",
  },
  {
    slug: "branding",
    name: "Branding",
    heading: "Scientific branding examples",
    intro: "Visual identities and communication systems for research groups, scientific initiatives and technology teams.",
  },
] as const satisfies ReadonlyArray<{
  slug: string;
  name: PortfolioCategoryName;
  heading: string;
  intro: string;
}>;

export function getPortfolioCategoryBySlug(slug: string) {
  return portfolioCategories.find((category) => category.slug === slug);
}

export function getPortfolioCategoryByName(name: PortfolioCategoryName) {
  return portfolioCategories.find((category) => category.name === name);
}
