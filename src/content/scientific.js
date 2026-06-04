const asset = (name) => `/scientific-illustration/${name}`;

export const serviceTypes = [
  "All",
  "Graphical Abstract",
  "Mechanism Diagram",
  "Process Figure",
  "Journal Cover",
  "Scientific Animation",
];

export const fields = ["All", "Biology", "Chemistry", "Medicine", "Materials", "Physics"];

export const projects = [
  {
    slug: "algae-bacteria-symbiosis",
    title: "Algae Bacteria Symbiosis",
    service: "Graphical Abstract",
    field: "Biology",
    journal: "Journal-ready TOC",
    doi: "DOI pending",
    year: "2026",
    ratio: "tall",
    mediaType: "image",
    cover: asset("ga2_algae.jpg"),
    gallery: [asset("ga2_algae.jpg"), asset("algae_bacteria.jpg"), asset("toc.png")],
    problem: "A dense microbial interaction needed to become legible as a single editorial figure.",
    solution:
      "We separated the system into host, symbiont and metabolite layers, then used controlled color and scale to keep the biological story readable at thumbnail and print sizes.",
  },
  {
    slug: "eps-composite-interface",
    title: "EPS Composite Interface",
    service: "Mechanism Diagram",
    field: "Materials",
    journal: "Materials communication",
    doi: "DOI pending",
    year: "2026",
    ratio: "wide",
    mediaType: "image",
    cover: asset("eps_composite.jpg"),
    gallery: [asset("eps_composite.jpg"), asset("composite_fiber.png"), asset("663c017276effff1f0bd2d9e8ca7e3ce.jpg")],
    problem: "The interface chemistry of a composite system was hard to explain through manuscript text alone.",
    solution:
      "A layered cutaway shows the fibre network, matrix, interaction zone and resulting properties in one journal-spec figure.",
  },
  {
    slug: "skin-regeneration-pathway",
    title: "Skin Regeneration Pathway",
    service: "Process Figure",
    field: "Medicine",
    journal: "Biomedical workflow figure",
    doi: "DOI pending",
    year: "2026",
    ratio: "standard",
    mediaType: "image",
    cover: asset("skin_healing.png"),
    gallery: [asset("skin_healing.png"), asset("711211d7fo408a215a49ee44613fa617.png"), asset("386d20c47n3d02d8d06fa482d0fa5b39.jpg")],
    problem: "A multi-stage healing mechanism needed a figure that could support both specialist review and public-facing explanation.",
    solution:
      "We built a stepped process diagram with tissue-level context, cellular actors and visual hierarchy for fast editorial scanning.",
  },
  {
    slug: "nanobubble-delivery",
    title: "Nanobubble Delivery System",
    service: "Graphical Abstract",
    field: "Chemistry",
    journal: "Chemistry TOC",
    doi: "DOI pending",
    year: "2025",
    ratio: "tall",
    mediaType: "image",
    cover: asset("nbs_v2.png"),
    gallery: [asset("nbs_v2.png"), asset("273130ef8af227ce97c174c2140af801.jpg"), asset("a96536c9f6751ba1c1bba6b57817ee78.jpg")],
    problem: "The manuscript described a delivery system whose function depended on scale, surface and timed release.",
    solution:
      "A clean central object, annotated release states and calibrated blue/teal accents make the mechanism memorable without overloading the abstract.",
  },
  {
    slug: "membrane-fibre-network",
    title: "Membrane Fibre Network",
    service: "Journal Cover",
    field: "Materials",
    journal: "Cover concept",
    doi: "DOI pending",
    year: "2025",
    ratio: "wide",
    mediaType: "image",
    cover: asset("composite_fiber.png"),
    gallery: [asset("composite_fiber.png"), asset("407bb10d9c58a4e2f0bf1ef07a2b552f.jpg"), asset("32afc8715e60384cea135d1fa952ad3f.jpg")],
    problem: "The research needed a cover candidate with scientific specificity and enough visual drama to survive journal production.",
    solution:
      "We pushed the fibre morphology into a bright, macro-scale composition while preserving cues from the actual material structure.",
  },
  {
    slug: "cellular-cascade-loop",
    title: "Cellular Cascade Loop",
    service: "Scientific Animation",
    field: "Biology",
    journal: "Conference loop",
    doi: "Supplementary visual",
    year: "2026",
    ratio: "wide",
    mediaType: "video",
    cover: asset("thumb_video1.jpg"),
    video: asset("video1.mp4"),
    gallery: [asset("thumb_video1.jpg"), asset("95077384b4ce565b77b8c2c22c4dadac.jpg"), asset("af18dd8f2gce438006fdba76cae9a49c.jpg")],
    problem: "A pathway presentation needed a short visual loop that could work silently on a conference screen.",
    solution:
      "We converted the static mechanism into a low-weight MP4 loop with restrained motion, clean labels and slide-ready framing.",
  },
  {
    slug: "molecular-assembly-motion",
    title: "Molecular Assembly Motion",
    service: "Scientific Animation",
    field: "Chemistry",
    journal: "Supplementary animation",
    doi: "Supplementary visual",
    year: "2026",
    ratio: "wide",
    mediaType: "video",
    cover: asset("thumb_video2.jpg"),
    video: asset("video2.mp4"),
    gallery: [asset("thumb_video2.jpg"), asset("b9746f0de7106d0250b93d03fd3c8e40.jpg"), asset("426c9f970ra839d0be1aa133bd1378ea.jpg")],
    problem: "Assembly behavior was easier to understand as time-based motion than as a sequence of crowded panels.",
    solution:
      "A short loop establishes orientation, reveals the assembly steps, then returns smoothly for web, talk and lab-site use.",
  },
  {
    slug: "microstructure-cover-study",
    title: "Microstructure Cover Study",
    service: "Journal Cover",
    field: "Physics",
    journal: "Journal cover candidate",
    doi: "DOI pending",
    year: "2025",
    ratio: "standard",
    mediaType: "image",
    cover: asset("7611699c50124bb94b5639f9de15a679.jpg"),
    gallery: [asset("7611699c50124bb94b5639f9de15a679.jpg"), asset("2e9663fcfid8ddd6a1c988a2eedfa85c.jpg"), asset("f20218d15g64d57a38540dc232e9431e_2.jpg")],
    problem: "A physics-led result needed an image with editorial presence rather than a literal screenshot of the data.",
    solution:
      "The final cover direction translates microstructure, field and scale into a clean image that still feels scientifically anchored.",
  },
];

export const services = [
  {
    slug: "graphical-abstract",
    title: "Graphical Abstracts",
    label: "Graphical Abstract",
    accent: "#2E6BFF",
    summary: "A single figure that makes the central finding clear before the abstract is read.",
    when:
      "Useful for journal submission systems, table-of-contents graphics, institutional communications and research pages where editors and readers scan quickly.",
    approach:
      "We identify the paper's one visual argument, reduce secondary detail, and design a journal-spec composition that survives small thumbnails, PDF review and high-resolution publication.",
    formats: ["Editable vector", "300 dpi raster", "Journal-spec sizing", "Web/social crops"],
    price: "From £380–£1,200 depending on complexity and revision depth.",
  },
  {
    slug: "mechanism-diagram",
    title: "Mechanism Diagrams",
    label: "Mechanism Diagram",
    accent: "#12B5A5",
    summary: "Precise mechanism figures for molecular, cellular, material and physical systems.",
    when:
      "Best when the result depends on causal sequence, interface behavior, pathway logic or a multi-scale explanation.",
    approach:
      "We map the science first, then create a visual grammar for actors, states, forces and transitions so the diagram reads with minimal caption support.",
    formats: ["Editable vector", "Layered source files", "300 dpi raster", "Manuscript-ready labels"],
    price: "From £450–£1,500 depending on pathway density and reference material.",
  },
  {
    slug: "process-figure",
    title: "Process & Workflow Figures",
    label: "Process Figure",
    accent: "#7A5CFF",
    summary: "Workflow, protocol and pipeline figures that make complex methods look ordered.",
    when:
      "Ideal for methods sections, grant diagrams, platform explanations, clinical pathways and lab process visuals.",
    approach:
      "We turn procedural information into a modular system of steps, decision points and outputs that can be reused across papers, decks and websites.",
    formats: ["Editable vector", "Slide-ready SVG/PDF", "300 dpi raster", "Icon system where needed"],
    price: "From £320–£950 depending on the number of steps and outputs.",
  },
  {
    slug: "journal-cover",
    title: "Scientific Journal Covers",
    label: "Journal Cover",
    accent: "#FF6B5B",
    summary: "Cover concepts with enough editorial force to make research feel memorable.",
    when:
      "For cover submissions, paid cover slots, institutional press, award announcements and high-impact publication moments.",
    approach:
      "We start from real science, then push composition, texture, light and scale until the work feels cover-worthy without becoming generic science art.",
    formats: ["Cover-spec raster", "Print-safe color", "Title-safe variants", "Social launch crops"],
    price: "From £850–£2,800 depending on 2D/3D complexity and concept count.",
  },
  {
    slug: "scientific-animation",
    title: "Scientific Animation",
    label: "Scientific Animation",
    accent: "#2E6BFF",
    summary: "Lightweight loops and explanatory motion for talks, supplementary files and lab websites.",
    when:
      "Useful when time, assembly, transport, growth or interaction is the finding, and static panels make the story feel slow.",
    approach:
      "We storyboard for silent comprehension, keep files web-friendly, and export talk-ready loops or longer explanatory sequences.",
    formats: ["MP4/WebM loops", "Slide-ready video", "Captioned variants", "Still frames"],
    price: "From £900–£4,500 depending on runtime, 3D requirements and voiceover/captions.",
  },
];

export const processSteps = [
  {
    title: "Brief",
    text: "Send manuscript, draft figure, journal target, deadline and any required specifications.",
  },
  {
    title: "Structure",
    text: "We identify the visual argument, hierarchy, labels and what can be removed without losing scientific accuracy.",
  },
  {
    title: "Draft",
    text: "You receive a first composition with style direction, scale logic and citation-ready notes.",
  },
  {
    title: "Revisions",
    text: "Two revision rounds are included for standard projects; urgent and multi-author review cycles can be planned upfront.",
  },
  {
    title: "Delivery",
    text: "Final files arrive as vector, 300 dpi raster and journal-specific exports, with web and presentation crops where useful.",
  },
];

export const pricing = [
  ["Graphical abstract", "£380–£1,200", "1–2 weeks"],
  ["Mechanism diagram", "£450–£1,500", "1–3 weeks"],
  ["Process/workflow figure", "£320–£950", "5–10 days"],
  ["Journal cover", "£850–£2,800", "2–4 weeks"],
  ["Scientific animation", "£900–£4,500", "2–6 weeks"],
];

export const testimonials = [
  {
    quote:
      "The figure turned a complicated mechanism into something reviewers could understand in seconds.",
    name: "PI, biomedical materials lab",
  },
  {
    quote:
      "Our cover submission felt premium without losing the science. The delivery files were exactly what the journal asked for.",
    name: "Postdoctoral researcher, chemistry",
  },
];
