import type { LucideIcon } from "lucide-react";
import {
  Aperture,
  Atom,
  BadgeCheck,
  Biohazard,
  Blocks,
  BookImage,
  Boxes,
  Brain,
  ClipboardList,
  ChartNoAxesCombined,
  Clapperboard,
  Download,
  FlaskConical,
  FileArchive,
  FileImage,
  Layers3,
  Microscope,
  Network,
  Orbit,
  PenTool,
  ScanSearch,
  Workflow,
} from "lucide-react";

export type Discipline =
  | "Molecular/Cellular"
  | "Medicine"
  | "Ecology"
  | "Chemistry"
  | "Physics/Materials"
  | "Data Visualization";

export type Usage =
  | "Journal Cover"
  | "Figure"
  | "Graphical Abstract"
  | "Animation"
  | "Poster"
  | "3D Visualization";

export type TemplateCategory =
  | "Graphical Abstract"
  | "Journal Cover"
  | "Paper Figure"
  | "Poster"
  | "Animation"
  | "Briefing";

export type TemplateItem = {
  slug: string;
  title: string;
  category: TemplateCategory;
  access: "Free" | "Paid";
  price: string;
  format: string;
  description: string;
  includes: string[];
  cta: string;
  href: string;
  icon: LucideIcon;
  featured?: boolean;
};

export type Project = {
  slug: string;
  title: string;
  discipline: Discipline;
  usage: Usage;
  year: string;
  client: string;
  context: string;
  brief: string;
  solution: string;
  cover: string;
  width: number;
  height: number;
  fit?: "contain" | "cover";
  video?: string;
  gallery: Array<{ src: string; width: number; height: number; alt: string; fit?: "contain" | "cover" }>;
};

const asset = (name: string) => `/scientific-illustration/${name}`;

export const disciplines: Discipline[] = [
  "Molecular/Cellular",
  "Medicine",
  "Ecology",
  "Chemistry",
  "Physics/Materials",
  "Data Visualization",
];

export const usages: Usage[] = [
  "Journal Cover",
  "Figure",
  "Graphical Abstract",
  "Animation",
  "Poster",
  "3D Visualization",
];

export const templateCategories: TemplateCategory[] = [
  "Graphical Abstract",
  "Journal Cover",
  "Paper Figure",
  "Poster",
  "Animation",
  "Briefing",
];

export const templates: TemplateItem[] = [
  {
    slug: "scientific-figure-brief",
    title: "Scientific Figure Brief Template",
    category: "Briefing",
    access: "Free",
    price: "Free",
    format: "MD / DOCX-ready outline",
    description: "A structured brief for sending manuscript context, key mechanisms, target journal specs and revision constraints.",
    includes: ["Project context prompts", "Required assets checklist", "Journal specification fields"],
    cta: "Download free",
    href: "/templates/scientific-figure-brief-template.md",
    icon: ClipboardList,
    featured: true,
  },
  {
    slug: "graphical-abstract-storyboard",
    title: "Graphical Abstract Storyboard",
    category: "Graphical Abstract",
    access: "Free",
    price: "Free",
    format: "MD / slide-planning outline",
    description: "Plan a graphical abstract as a sequence of inputs, mechanism, output and take-home message before design begins.",
    includes: ["Narrative flow prompts", "Label hierarchy guide", "Thumbnail-readability checks"],
    cta: "Download free",
    href: "/templates/graphical-abstract-storyboard.md",
    icon: Network,
    featured: true,
  },
  {
    slug: "journal-cover-checklist",
    title: "Journal Cover Submission Checklist",
    category: "Journal Cover",
    access: "Free",
    price: "Free",
    format: "MD checklist",
    description: "A compact checklist for cover dimensions, safe areas, title zones, resolution and credit information.",
    includes: ["Pre-submission checklist", "Credit/permission fields", "Export quality checks"],
    cta: "Download free",
    href: "/templates/journal-cover-submission-checklist.md",
    icon: BookImage,
    featured: true,
  },
  {
    slug: "premium-graphical-abstract-kit",
    title: "Premium Graphical Abstract Kit",
    category: "Graphical Abstract",
    access: "Paid",
    price: "£39",
    format: "Figma / PPTX / SVG",
    description: "Editable layouts for mechanism-led, process-led and comparison-led graphical abstracts with publication-safe spacing.",
    includes: ["12 editable layouts", "Scientific label styles", "Export presets"],
    cta: "Request purchase",
    href: "/contact?template=premium-graphical-abstract-kit",
    icon: FileImage,
    featured: true,
  },
  {
    slug: "mechanism-diagram-pack",
    title: "Mechanism Diagram Pack",
    category: "Paper Figure",
    access: "Paid",
    price: "£49",
    format: "Figma / PPTX / SVG",
    description: "Reusable pathway, interface, before-after and multi-step figure structures for manuscript diagrams.",
    includes: ["18 diagram blocks", "Arrow and label system", "Light/dark export palettes"],
    cta: "Request purchase",
    href: "/contact?template=mechanism-diagram-pack",
    icon: FileArchive,
  },
  {
    slug: "poster-layout-system",
    title: "Academic Poster Layout System",
    category: "Poster",
    access: "Paid",
    price: "£29",
    format: "PPTX / PDF guide",
    description: "Conference poster structures for dense research stories, visual abstracts and method-heavy workflows.",
    includes: ["A0 and 48x36 layouts", "Figure-first poster grid", "Typography and export guide"],
    cta: "Request purchase",
    href: "/contact?template=poster-layout-system",
    icon: Download,
  },
  {
    slug: "animation-storyboard-kit",
    title: "Scientific Animation Storyboard Kit",
    category: "Animation",
    access: "Paid",
    price: "£59",
    format: "PDF / Figma / shot list",
    description: "Storyboard sheets and shot planning templates for mechanism videos, conference loops and lab website animations.",
    includes: ["Scene timing sheets", "Motion cue library", "Voiceover/label planning"],
    cta: "Request purchase",
    href: "/contact?template=animation-storyboard-kit",
    icon: Clapperboard,
  },
];

export const projects: Project[] = [
  {
    slug: "algae-bacteria-symbiosis",
    title: "Algae-Bacteria Symbiosis in Treatment Water",
    discipline: "Ecology",
    usage: "Graphical Abstract",
    year: "2026",
    client: "Environmental microbiology lab",
    context: "Manuscript graphical abstract",
    brief: "A microbial interaction system needed to communicate host, symbiont, pollutant and response pathways without becoming a crowded figure.",
    solution: "We structured the image as a scientific plate with a clean process arc, separate biological layers and restrained labels for journal review.",
    cover: asset("ga2_algae.jpg"),
    width: 3600,
    height: 4495,
    fit: "contain",
    gallery: [
      { src: asset("ga2_algae.jpg"), width: 3600, height: 4495, alt: "Graphical abstract showing algae bacteria symbiosis", fit: "contain" },
      { src: asset("algae_bacteria.jpg"), width: 4000, height: 2800, alt: "Algae and bacteria interaction illustration", fit: "contain" },
      { src: asset("toc.png"), width: 9307, height: 4840, alt: "Wide scientific table of contents artwork", fit: "contain" },
    ],
  },
  {
    slug: "eps-composite-interface",
    title: "EPS Composite Interface Mechanism",
    discipline: "Physics/Materials",
    usage: "Figure",
    year: "2026",
    client: "Materials science group",
    context: "Mechanism diagram for manuscript figure",
    brief: "The interface chemistry of a composite system was difficult to explain from text and microscopy references alone.",
    solution: "A layered figure clarifies matrix, reinforcement, interface zone and performance logic while keeping each label manuscript-ready.",
    cover: asset("eps_composite.jpg"),
    width: 3500,
    height: 2400,
    fit: "contain",
    gallery: [
      { src: asset("eps_composite.jpg"), width: 3500, height: 2400, alt: "EPS composite mechanism diagram", fit: "contain" },
      { src: asset("composite_fiber.png"), width: 4400, height: 3200, alt: "Composite fibre membrane scientific artwork", fit: "contain" },
      { src: asset("663c017276effff1f0bd2d9e8ca7e3ce.jpg"), width: 2372, height: 1239, alt: "Materials science process figure", fit: "contain" },
    ],
  },
  {
    slug: "skin-regeneration-pathway",
    title: "Skin Regeneration Pathway",
    discipline: "Medicine",
    usage: "Figure",
    year: "2026",
    client: "Translational medicine team",
    context: "Biomedical mechanism figure",
    brief: "A staged healing process needed to speak to specialist reviewers and non-specialist collaborators in one image.",
    solution: "We designed a stepped tissue-level figure with cellular actors, directional logic and enough white space for editorial scanning.",
    cover: asset("skin_healing.png"),
    width: 3800,
    height: 3500,
    fit: "contain",
    gallery: [
      { src: asset("skin_healing.png"), width: 3800, height: 3500, alt: "Skin healing mechanism diagram", fit: "contain" },
      { src: asset("711211d7fo408a215a49ee44613fa617.png"), width: 4715, height: 6534, alt: "Biomedical illustration study", fit: "contain" },
      { src: asset("407bb10d9c58a4e2f0bf1ef07a2b552f.jpg"), width: 1733, height: 1280, alt: "Biomedical process artwork", fit: "contain" },
    ],
  },
  {
    slug: "nanobubble-delivery-system",
    title: "Nanobubble Delivery System",
    discipline: "Chemistry",
    usage: "Graphical Abstract",
    year: "2025",
    client: "Applied chemistry lab",
    context: "Table-of-contents graphic",
    brief: "A delivery mechanism depended on scale, release timing and surface behavior that were hard to show in manuscript text.",
    solution: "A central object system and concise reaction pathway make the result readable as a thumbnail and as a full-width figure.",
    cover: asset("nbs_v2.png"),
    width: 4800,
    height: 5200,
    fit: "contain",
    gallery: [
      { src: asset("nbs_v2.png"), width: 4800, height: 5200, alt: "Nanobubble delivery graphical abstract", fit: "contain" },
      { src: asset("273130ef8af227ce97c174c2140af801.jpg"), width: 1280, height: 1282, alt: "Scientific object render", fit: "contain" },
      { src: asset("a96536c9f6751ba1c1bba6b57817ee78.jpg"), width: 1914, height: 1280, alt: "Chemical process visual", fit: "contain" },
    ],
  },
  {
    slug: "membrane-fibre-cover",
    title: "Membrane Fibre Cover Study",
    discipline: "Physics/Materials",
    usage: "Journal Cover",
    year: "2025",
    client: "Polymer materials lab",
    context: "Journal cover concept",
    brief: "The research needed a cover candidate with more editorial presence than a literal data visualization.",
    solution: "We translated real morphology into a cover-scale composition while preserving material cues and publication-safe contrast.",
    cover: asset("composite_fiber.png"),
    width: 4400,
    height: 3200,
    fit: "cover",
    gallery: [
      { src: asset("composite_fiber.png"), width: 4400, height: 3200, alt: "Composite fibre membrane cover artwork", fit: "contain" },
      { src: asset("32afc8715e60384cea135d1fa952ad3f.jpg"), width: 2696, height: 1274, alt: "Wide materials cover visual", fit: "cover" },
      { src: asset("7611699c50124bb94b5639f9de15a679.jpg"), width: 1616, height: 1280, alt: "Microstructure cover study", fit: "cover" },
    ],
  },
  {
    slug: "cellular-cascade-loop",
    title: "Cellular Cascade Loop",
    discipline: "Molecular/Cellular",
    usage: "Animation",
    year: "2026",
    client: "Cell biology group",
    context: "Conference and lab website loop",
    brief: "A pathway presentation needed to work silently on a conference screen and as a website hero loop.",
    solution: "The static mechanism became a lightweight MP4 loop with controlled pacing, readable labels and presentation-safe framing.",
    cover: asset("thumb_video1.jpg"),
    width: 1280,
    height: 720,
    fit: "cover",
    video: asset("video1.mp4"),
    gallery: [
      { src: asset("thumb_video1.jpg"), width: 1280, height: 720, alt: "Cellular cascade animation poster", fit: "cover" },
      { src: asset("95077384b4ce565b77b8c2c22c4dadac.jpg"), width: 2198, height: 907, alt: "Cellular pathway wide artwork", fit: "contain" },
      { src: asset("b9746f0de7106d0250b93d03fd3c8e40.jpg"), width: 1707, height: 1280, alt: "Molecular visual study", fit: "contain" },
    ],
  },
  {
    slug: "molecular-assembly-motion",
    title: "Molecular Assembly Motion",
    discipline: "Chemistry",
    usage: "Animation",
    year: "2026",
    client: "Molecular engineering team",
    context: "Supplementary animation",
    brief: "Assembly behavior was clearer as time-based motion than as a dense sequence of panels.",
    solution: "We storyboarded a short loop that reveals orientation, assembly and final state without needing voiceover.",
    cover: asset("thumb_video2.jpg"),
    width: 1280,
    height: 720,
    fit: "cover",
    video: asset("video2.mp4"),
    gallery: [
      { src: asset("thumb_video2.jpg"), width: 1280, height: 720, alt: "Molecular assembly animation poster", fit: "cover" },
      { src: asset("b9746f0de7106d0250b93d03fd3c8e40.jpg"), width: 1707, height: 1280, alt: "Molecular assembly illustration", fit: "contain" },
      { src: asset("407bb10d9c58a4e2f0bf1ef07a2b552f.jpg"), width: 1733, height: 1280, alt: "Scientific assembly visual", fit: "contain" },
    ],
  },
  {
    slug: "toc-data-plate",
    title: "System Overview Plate",
    discipline: "Data Visualization",
    usage: "Poster",
    year: "2025",
    client: "Interdisciplinary research group",
    context: "Large-format overview figure",
    brief: "A complex system needed a single plate for talks, poster sessions and a project website.",
    solution: "We built a wide information plate with modular sections, clear hierarchy and enough resolution for print inspection.",
    cover: asset("toc.png"),
    width: 9307,
    height: 4840,
    fit: "contain",
    gallery: [
      { src: asset("toc.png"), width: 9307, height: 4840, alt: "Wide system overview plate", fit: "contain" },
      { src: asset("algae_bacteria.jpg"), width: 4000, height: 2800, alt: "System ecology illustration", fit: "contain" },
      { src: asset("eps_composite.jpg"), width: 3500, height: 2400, alt: "Materials system diagram", fit: "contain" },
    ],
  },
];

export const services: Array<{
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  deliverables: string[];
  price: string;
  delivery: string;
  bestFor: string;
}> = [
  {
    slug: "journal-covers",
    title: "Scientific journal covers",
    description: "Cover concepts with editorial presence, built from accurate scientific references.",
    icon: BookImage,
    deliverables: ["Concept sketch", "Print-safe raster", "Title-safe variants"],
    price: "From £480",
    delivery: "10-18 days",
    bestFor: "Cover submissions, issue artwork and editorial campaigns.",
  },
  {
    slug: "paper-figures",
    title: "Paper figures",
    description: "Mechanism diagrams, figure panels and visual systems for manuscript submission.",
    icon: PenTool,
    deliverables: ["Editable vector", "300 dpi exports", "Journal sizing"],
    price: "From £180",
    delivery: "5-10 days",
    bestFor: "Mechanisms, workflow figures and multi-panel manuscript visuals.",
  },
  {
    slug: "graphical-abstracts",
    title: "Graphical abstracts",
    description: "Single-image summaries that make the central finding understandable at a glance.",
    icon: Network,
    deliverables: ["TOC format", "Web crops", "Label refinement"],
    price: "From £240",
    delivery: "7-12 days",
    bestFor: "TOC graphics, paper summaries and submission highlights.",
  },
  {
    slug: "scientific-animation",
    title: "Scientific animation",
    description: "Short loops and explanatory motion for conferences, supplementary files and lab websites.",
    icon: Clapperboard,
    deliverables: ["MP4/WebM", "Still frames", "Captioned variants"],
    price: "From £650",
    delivery: "2-4 weeks",
    bestFor: "Conference loops, lab websites and mechanism explainers.",
  },
  {
    slug: "academic-posters",
    title: "Academic posters",
    description: "Large-format visual storytelling for posters, grant reviews and institutional communication.",
    icon: ScanSearch,
    deliverables: ["Print PDF", "Slide crops", "Figure hierarchy"],
    price: "From £220",
    delivery: "5-9 days",
    bestFor: "Conference posters, grant visuals and research summaries.",
  },
  {
    slug: "3d-visualization",
    title: "3D molecular and cellular visualization",
    description: "Molecular, cellular and material scenes designed for accuracy, clarity and presentation.",
    icon: Orbit,
    deliverables: ["Rendered stills", "Transparent assets", "Scene variants"],
    price: "From £320",
    delivery: "8-15 days",
    bestFor: "Molecular scenes, cells, materials and presentation assets.",
  },
];

export const processSteps = [
  { title: "Brief", text: "Manuscript, target use, deadline, draft figure and visual references are collected.", icon: FlaskConical },
  { title: "Map", text: "We identify the scientific argument, hierarchy, actors, states and labels.", icon: Workflow },
  { title: "Compose", text: "The first plate establishes scale, composition, color discipline and journal fit.", icon: Layers3 },
  { title: "Refine", text: "Author comments are resolved through structured revision rounds.", icon: BadgeCheck },
  { title: "Deliver", text: "Final packages include high-resolution, web and editable outputs where scoped.", icon: Boxes },
];

export const proofPoints = [
  { title: "Researcher-literate design", text: "We translate mechanisms before we polish pixels.", icon: Microscope },
  { title: "Journal-aware files", text: "Figures are built for real submission specs, resolution and revision workflows.", icon: Aperture },
  { title: "Image-first browsing", text: "Large artwork plates stay inspectable in light and dark modes.", icon: ScanSearch },
];

export const aboutStats = [
  { label: "Core services", value: "06" },
  { label: "Scientific domains", value: "06" },
  { label: "Review rounds scoped", value: "02+" },
];

export const disciplineIcons: Record<Discipline, LucideIcon> = {
  "Molecular/Cellular": Biohazard,
  Medicine: Brain,
  Ecology: Blocks,
  Chemistry: Atom,
  "Physics/Materials": Boxes,
  "Data Visualization": ChartNoAxesCombined,
};
