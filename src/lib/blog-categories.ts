export const blogCategories = [
  {
    name: "Graphical Abstracts",
    slug: "graphical-abstracts",
    intro: "Practical guidance for planning graphical abstracts that communicate one research story with clarity, hierarchy, and journal-ready craft.",
  },
  {
    name: "Scientific Posters",
    slug: "scientific-posters",
    intro: "Examples and design guidance for research posters that remain legible, structured, and persuasive in busy conference environments.",
  },
  {
    name: "Medical Illustration",
    slug: "medical-illustration",
    intro: "Clear guidance on commissioning, evaluating, and producing accurate medical and biomedical illustration for research communication.",
  },
  {
    name: "Research Presentations",
    slug: "research-presentations",
    intro: "Practical guidance for turning research into clear presentation decks for conferences, stakeholder meetings, investor conversations, and public engagement.",
  },
  {
    name: "Data Visualization",
    slug: "data-visualization",
    intro: "Evidence-led guidance for designing scientific charts and figures that preserve data integrity while improving clarity, accessibility, and interpretation.",
  },
] as const;

export const blogCategoryNames = blogCategories.map((category) => category.name) as [
  (typeof blogCategories)[number]["name"],
  ...(typeof blogCategories)[number]["name"][],
];

export function blogCategorySlug(name: string) {
  return blogCategories.find((category) => category.name === name)?.slug ?? slugify(name);
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
