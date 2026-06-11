import {
  Activity,
  BarChart3,
  Boxes,
  Clapperboard,
  FileImage,
  Film,
  Globe2,
  Layers3,
  MonitorPlay,
  Presentation,
  Sparkles,
} from "lucide-react";

const image = (name) => `/scientific-illustration/${name}`;

export const navItems = [
  { label: "Agency", href: "#agency" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
];

export const hero = {
  title: "Design Solutions for Science Communication",
  subtitle: "Share your research precisely and creatively through our stunning scientific visuals",
  image: image("ga2_algae.jpg"),
};

export const marqueeImages = [
  image("ga2_algae.jpg"),
  image("eps_composite.jpg"),
  image("skin_healing.png"),
  image("nbs_v2.png"),
  image("composite_fiber.png"),
  image("toc.png"),
  image("thumb_video1.jpg"),
  image("algae_bacteria.jpg"),
];

export const valueLinks = ["Journal Covers", "Illustrations", "Animations"];

export const services = [
  { name: "Graphical Abstract", icon: Sparkles, color: "cyan" },
  { name: "Cover Designs", icon: FileImage, color: "magenta" },
  { name: "Illustrations", icon: Layers3, color: "orange" },
  { name: "Data Visualization", icon: BarChart3, color: "cyan" },
  { name: "Web Design", icon: Globe2, color: "magenta" },
  { name: "Poster Design", icon: MonitorPlay, color: "orange" },
  { name: "Medical Animation", icon: Activity, color: "cyan" },
  { name: "2D/3D Animations", icon: Boxes, color: "magenta" },
  { name: "Product Videos", icon: Film, color: "orange" },
  { name: "Pitch Decks", icon: Presentation, color: "cyan" },
  { name: "Presentations", icon: Clapperboard, color: "magenta" },
];

export const clients = [
  { name: "Nature Portfolio", mark: "Nature", type: "Journal", logo: null },
  { name: "Cell Press", mark: "Cell", type: "Journal", logo: null },
  { name: "ACS Publications", mark: "ACS", type: "Journal", logo: null },
  { name: "Royal Society of Chemistry", mark: "RSC", type: "Journal", logo: null },
  { name: "Wiley", mark: "Wiley", type: "Publisher", logo: null },
  { name: "Science", mark: "Science", type: "Journal", logo: null },
  { name: "One BioMed", mark: "One BioMed", type: "Biotech", logo: null },
  { name: "Indian Institute of Science", mark: "IISc", type: "Institute", logo: null },
  { name: "Queen's University Belfast", mark: "Queen's Belfast", type: "University", logo: null },
  { name: "KAUST", mark: "KAUST", type: "Institute", logo: null },
  { name: "Terasaki Institute", mark: "Terasaki", type: "Institute", logo: null },
  { name: "University of Limerick", mark: "University of Limerick", type: "University", logo: null },
  { name: "University of Wurzburg", mark: "Universitat Wurzburg", type: "University", logo: null },
  { name: "NYU Abu Dhabi", mark: "NYU Abu Dhabi", type: "University", logo: null },
  { name: "Vizgen", mark: "Vizgen", type: "Biotech", logo: null },
  { name: "TIFR", mark: "TIFR", type: "Institute", logo: null },
  { name: "University College London", mark: "UCL", type: "University", logo: null },
  { name: "Imperial College London", mark: "Imperial", type: "University", logo: null },
];

export const projects = [
  {
    title: "Algae-Bacteria Symbiosis in Treatment Water",
    category: "Graphical Abstract",
    image: image("ga2_algae.jpg"),
  },
  {
    title: "Tiny Pores Turning the Tide",
    category: "Illustration",
    image: image("eps_composite.jpg"),
  },
  {
    title: "Skin Regeneration Pathway",
    category: "Medical Figure",
    image: image("skin_healing.png"),
  },
  {
    title: "Nanobubble Delivery System",
    category: "Cover Page",
    image: image("nbs_v2.png"),
  },
  {
    title: "Membrane Fibre Cover Study",
    category: "Cover Page",
    image: image("composite_fiber.png"),
  },
  {
    title: "Cellular Cascade Loop",
    category: "Animation",
    image: image("thumb_video1.jpg"),
  },
];

export const founder = {
  name: "Lattice Visual Studio",
  title: "We are researchers by training and designers by profession.",
  bio: "We translate complex mechanisms, data and biomedical stories into journal-ready figures, covers, animations and presentation systems for scientists, labs, journals and biotech teams.",
  image: image("711211d7fo408a215a49ee44613fa617.png"),
  email: "hello@latticevisual.com",
};
