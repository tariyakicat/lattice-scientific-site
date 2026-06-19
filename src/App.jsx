import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BookOpen,
  Box,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  Clock3,
  Dna,
  EyeOff,
  FileText,
  FileImage,
  Film,
  GitBranch,
  Globe2,
  ImageIcon,
  Layout,
  LifeBuoy,
  Mail,
  Microscope,
  Monitor,
  MousePointer2,
  PieChart,
  Presentation,
  RotateCcw,
  Sparkles,
  Target,
  Upload,
} from "lucide-react";

const contactEmail = "contact@latticevisual.com";
const generatedAssets = {
  hero: "/generated/hero-background-wide.webp?v=hero-bg-wide-1",
  before: "/generated/before-raw-sketch.svg?v=mock-2",
  after: "/generated/after-polished-figure.svg?v=mock-2",
};

const servicePages = [
  [
    { title: "Graphical Abstracts", description: "Capture your research in one clear visual.", icon: BookOpen },
    { title: "Figures", description: "Mechanisms, pathways, and data visualizations.", icon: GitBranch },
    { title: "Journal Covers", description: "Stand out with bespoke cover art.", icon: ImageIcon },
    { title: "Slides", description: "Powerful visuals for presentations and pitch decks.", icon: Presentation },
    { title: "Posters", description: "Scientific posters that inform and impress.", icon: Layout },
    { title: "Infographics", description: "Simplify complex information for any audience.", icon: PieChart },
  ],
  [
    { title: "Scientific Animation", description: "Show dynamic processes unfolding over time.", icon: Film },
    { title: "Medical Illustration", description: "Explain anatomy and treatment with precision.", icon: Microscope },
    { title: "3D Visualization", description: "Add depth to molecular and cellular stories.", icon: Box },
    { title: "Pathway Diagrams", description: "Connect mechanisms across biological systems.", icon: Activity },
    { title: "Data Visualization", description: "Turn datasets into readable visual evidence.", icon: BarChart3 },
    { title: "Digital Experiences", description: "Bring research stories to screens and sites.", icon: Monitor },
  ],
  [
    { title: "Molecular Illustration", description: "Reveal structures at the smallest scale.", icon: Dna },
    { title: "Research Reports", description: "Structure long-form scientific narratives.", icon: FileText },
    { title: "Conference Graphics", description: "Create a coherent visual system for events.", icon: Presentation },
    { title: "Educational Media", description: "Make specialist knowledge easier to learn.", icon: BookOpen },
    { title: "Interactive Figures", description: "Guide audiences through layered evidence.", icon: Activity },
    { title: "Public Communication", description: "Translate research for wider audiences.", icon: Globe2 },
  ],
];

const testimonials = [
  {
    quote: "The visual structure made the mechanism understandable to collaborators outside our field.",
    name: "Principal Investigator",
    role: "Biomedical research lab",
  },
  {
    quote: "The figure finally matched the quality of the science. It became the clearest part of the submission.",
    name: "Postdoctoral researcher",
    role: "Materials science manuscript",
  },
  {
    quote: "The team translated a very dense process into a visual explanation we could use everywhere.",
    name: "Scientific communications lead",
    role: "Biotech platform launch",
  },
];

const processSteps = ["Brief", "Scientific review", "Visual draft", "Revision", "Final files"];

const impactSlides = [
  {
    journal: "Regenerative biomaterials",
    coverImg: "/generated/impact-cover-bone-repair-full.webp",
    title: "Injectable hydrogel strategy for inflammation control and bone repair",
    focus: "Si/Sr@nHA · PLGA · angiogenesis · bone remodelling",
    explanation: "The figure explains how a composite hydrogel shifts the local inflammatory response, supports vascular growth, and guides bone formation across cellular and tissue scales.",
  },
  {
    journal: "Environmental biotechnology",
    coverImg: "/generated/impact-cover-microalgae-full.webp",
    title: "Photocatalysis-microalgae system for antibiotic wastewater treatment",
    focus: "WO3/alpha-Fe2O3 zeolite · visible light · microalgae response",
    explanation: "This mechanism visual connects material preparation, antibiotic pre-oxidation, toxicity reduction, and the downstream metabolic response of Chlorella-based treatment.",
  },
  {
    journal: "Nano-therapeutic mechanism",
    coverImg: "/generated/impact-cover-nanotherapeutic-full.webp",
    title: "ER-targeted nanoplatform activating oxidative stress pathways",
    focus: "TMPUZ NBs · ROS · ER stress · ferroptosis / apoptosis",
    explanation: "The illustration shows a therapy-oriented nanoparticle workflow from construct formation to cellular uptake, organelle targeting, and stress-response pathways inside the cell.",
  },
];

function Reveal({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-900/5 bg-white/72 backdrop-blur-2xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8" aria-label="Primary navigation">
        <a href="#home" className="flex items-center gap-3 text-[15px] font-semibold tracking-tight text-slate-950" aria-label="Lattice Visual home">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-xs font-bold text-white">
            LV
            <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-sky-300" />
          </span>
          Lattice Visual
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-500 md:flex">
          <a href="#home" className="transition hover:text-slate-950">Home</a>
          <a href="#portfolio" className="transition hover:text-slate-950">Portfolio</a>
          <a href="#services" className="transition hover:text-slate-950">Services</a>
          <a href="#process" className="transition hover:text-slate-950">Process</a>
          <a href="#contact" className="transition hover:text-slate-950">Contact</a>
        </div>

        <a href="#contact" className="group hidden items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-600 md:inline-flex">
          Start a project
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="lv-hero" style={{ "--hero-bg": `url(${generatedAssets.hero})` }}>
      <div className="lv-hero-inner">
        <div className="lv-hero-grid">
          <motion.div
            className="lv-hero-copy"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="lv-hero-eyebrow">
              <Sparkles className="h-4 w-4" aria-hidden />
              Visual science communication studio
            </p>
            <h1 className="lv-hero-title">
              <span>Visual Science</span>
              <span>Communication for</span>
              <span>Research Impact</span>
            </h1>
            <p className="lv-hero-subtitle">
              We help scientists, labs and biotech teams communicate complex discoveries with accuracy and high visual impact.
            </p>
            <div className="lv-hero-actions">
              <a href="#contact" className="lv-hero-btn lv-hero-btn-primary">
                <span>Start a project</span>
                <span aria-hidden>→</span>
              </a>
              <a href="#services" className="lv-hero-btn lv-hero-btn-secondary">
                <span>View services</span>
                <span aria-hidden>→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <svg className="lv-hero-wave" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden>
        <path d="M0 88L80 78C160 68 320 48 480 54C640 60 800 92 960 92C1120 92 1280 60 1360 44L1440 28V120H0V88Z" fill="#fbfdff" />
      </svg>
    </section>
  );
}

function Impact() {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToSlide = (nextIndex) => {
    setActiveIndex((nextIndex + impactSlides.length) % impactSlides.length);
  };

  const goToPrevious = () => goToSlide(activeIndex - 1);
  const goToNext = () => goToSlide(activeIndex + 1);

  useEffect(() => {
    if (reduceMotion || isPaused) return undefined;

    const timer = window.setTimeout(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % impactSlides.length);
    }, 5000);

    return () => window.clearTimeout(timer);
  }, [activeIndex, isPaused, reduceMotion]);

  return (
    <section id="impact" className="relative overflow-hidden bg-white py-20 md:py-24">
      <svg className="impact-top-wave" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden>
        <path d="M0 0H1440V34C1298 72 1142 90 972 82C802 74 668 30 484 34C300 38 148 76 0 54V0Z" fill="#fbfdff" />
      </svg>
      <span className="impact-orb impact-orb-a" aria-hidden />
      <span className="impact-orb impact-orb-b" aria-hidden />

      <div className="impact-inner mx-auto max-w-6xl px-5 md:px-8">
        <div className="impact-layout">
          <div className="impact-copy">
            <h2>Increase your impact</h2>
            <p>
              Strong visuals help your research get noticed, understood and cited. Our illustrations have been featured on leading journals and trusted by researchers worldwide.
            </p>
          </div>

          <div
            className={`impact-paper impact-carousel-card ${reduceMotion ? "is-reduced-motion" : ""}`}
            role="region"
            aria-label="Featured journal cover carousel"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setIsPaused(false);
              }
            }}
          >
            <div className="impact-carousel-controls" aria-label="Carousel controls">
              <button type="button" aria-label="Show previous featured journal slide" onClick={goToPrevious}>
                <span aria-hidden>←</span>
              </button>
              <button type="button" aria-label="Show next featured journal slide" onClick={goToNext}>
                <span aria-hidden>→</span>
              </button>
            </div>

            <div className="impact-slide-viewport" aria-live="polite">
              {impactSlides.map((slide, index) => (
                <article
                  key={slide.title}
                  className={`impact-slide ${index === activeIndex ? "is-active" : ""}`}
                  aria-hidden={index !== activeIndex}
                >
                  <img className="impact-cover" src={slide.coverImg} alt={`${slide.journal} scientific illustration preview`} loading={index === 0 ? "eager" : "lazy"} />
                  <div className="impact-slide-copy">
                    <span className="impact-category">{slide.journal}</span>
                    <h3>{slide.title}</h3>
                    <p className="impact-focus">{slide.focus}</p>
                    <p className="impact-explanation">{slide.explanation}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="impact-dots" aria-label="Journal carousel pagination">
              {impactSlides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  className={index === activeIndex ? "is-active" : ""}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSolution() {
  const problemPoints = [
    [FileImage, "Figures lack clarity and visual hierarchy"],
    [EyeOff, "Manuscripts get overlooked"],
    [Clock3, "Time-consuming and hard to do in-house"],
    [CircleHelp, "Limited design support in academia"],
  ];

  const solutionPoints = [
    [BadgeCheck, "Journal-ready, publication quality"],
    [Target, "Highlight the key message"],
    [LifeBuoy, "Save time with expert support"],
    [Globe2, "Trusted by scientists worldwide"],
  ];

  return (
    <section id="solution" className="relative overflow-hidden bg-slate-50 py-20 md:py-24">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <div className="problem-solution-flow">
          <Reveal className="solution-column solution-problem">
            <h2>Problem</h2>
            <h3>Complex science is hard to communicate</h3>
            <p className="solution-description">
              Dense data, abstract mechanisms and specialized language make it difficult to explain your research to a broader audience - from journal editors to investors and the public.
            </p>
            <ul className="solution-point-list">
              {problemPoints.map(([Icon, label]) => (
                <li key={label}>
                  <span className="solution-point-icon" aria-hidden="true"><Icon /></span>
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="solution-visual" delay={0.06}>
            <img
              className="solution-visual-image"
              src="/problem-solution.png"
              alt="A mirrored protein-like structure transitioning from warm orange to clear blue"
              width="1448"
              height="1086"
              loading="lazy"
              decoding="async"
            />
            <button
              className="solution-compare-button"
              type="button"
              aria-label="Compare problem and solution"
              title="Compare problem and solution"
            >
              <ChevronRight aria-hidden="true" />
            </button>
          </Reveal>

          <Reveal className="solution-column solution-answer" delay={0.12}>
            <h2>Solution</h2>
            <h3>Scientific visuals that make an impact</h3>
            <p className="solution-description">
              We translate your research into accurate, elegant and effective visuals that highlight the key story and drive understanding across any audience.
            </p>
            <ul className="solution-point-list">
              {solutionPoints.map(([Icon, label]) => (
                <li key={label}>
                  <span className="solution-point-icon" aria-hidden="true"><Icon /></span>
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function BeforeAfter() {
  const [value, setValue] = useState(52);

  return (
    <section id="portfolio" className="relative scroll-mt-24 bg-white py-20 md:py-24" aria-labelledby="before-after-title">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">Before / After</p>
            <h2 id="before-after-title" className="mt-5 text-4xl font-medium leading-tight tracking-[-0.055em] text-slate-950 md:text-6xl">
              From manuscript sketch to publication-ready figure.
            </h2>
          </div>
          <p className="max-w-md text-lg leading-8 text-slate-500">
            Move the divider to compare the raw scientific structure with a polished editorial visual.
          </p>
        </Reveal>

        <Reveal className="before-after-shell mt-14">
          <div className="comparison-stage">
            <div className="comparison-layer comparison-before">
              <SketchFigure />
            </div>
            <div className="comparison-layer comparison-after" style={{ clipPath: `inset(0 0 0 ${value}%)` }}>
              <PolishedFigure />
            </div>
            <div className="comparison-divider" style={{ left: `${value}%` }}>
              <MousePointer2 className="h-5 w-5" aria-hidden />
            </div>
            <input
              className="comparison-range"
              type="range"
              min="12"
              max="88"
              value={value}
              aria-label="Move before after comparison divider"
              onChange={(event) => setValue(Number(event.target.value))}
            />
          </div>
          <div className="comparison-caption">
            <span>raw sketch / notes</span>
            <span>lattice visual effect</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SketchFigure() {
  return (
    <img src={generatedAssets.before} alt="Raw scientific manuscript sketch before redesign" loading="lazy" className="h-full w-full object-cover" />
  );
}

function PolishedFigure() {
  return (
    <img src={generatedAssets.after} alt="Publication-ready scientific illustration after redesign" loading="lazy" className="h-full w-full object-cover" />
  );
}

function AwardBand() {
  return (
    <section className="proof-band" aria-label="Project proof">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 md:flex-row md:items-center md:justify-between md:px-8">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">Proof of craft</p>
          <h2 className="mt-4 text-4xl font-medium leading-tight tracking-[-0.045em] text-slate-950 md:text-6xl">
            Visual systems for scientific work that needs to travel.
          </h2>
        </Reveal>
        <Reveal delay={0.08} className="proof-token">
          <span>vector</span>
          <span>300 dpi</span>
          <span>journal specs</span>
          <span>editable files</span>
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  const reduceMotion = useReducedMotion();
  const [activePage, setActivePage] = useState(0);
  const goToServicePage = (page) => setActivePage((page + servicePages.length) % servicePages.length);

  return (
    <section id="services" className="bg-white py-20 md:py-24">
      <div className="services-journey mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="services-heading">
          <h2>We create</h2>
          <p>Publication-quality visuals for every stage of your research communication.</p>
        </Reveal>

        <div className="service-journey" role="region" aria-label="Scientific illustration services">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activePage}
              className="service-journey-page"
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.35, ease: "easeOut" }}
              aria-live="polite"
            >
              <div className="service-journey-track">
                <svg className="service-journey-line" viewBox="0 0 1200 160" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M100 52 C166 52 234 100 300 100 S434 52 500 52 S634 100 700 100 S834 52 900 52 S1034 100 1100 100" />
                </svg>

                <div className="service-journey-nodes">
                  {servicePages[activePage].map(({ title, description, icon: Icon }) => (
                    <article className="service-journey-node" key={title}>
                      <span className="service-node-icon" aria-hidden="true">
                        <Icon />
                      </span>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </article>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="service-controls">
            <button
              className="service-nav-button service-nav-previous"
              type="button"
              aria-label="Show previous service page"
              onClick={() => goToServicePage(activePage - 1)}
            >
              <ChevronLeft aria-hidden="true" />
            </button>

            <div className="service-pagination" aria-label="Service pages">
              {servicePages.map((page, index) => (
                <button
                  key={page[0].title}
                  type="button"
                  aria-label={`Go to page ${index + 1}`}
                  aria-current={index === activePage ? "true" : undefined}
                  className={index === activePage ? "is-active" : ""}
                  onClick={() => goToServicePage(index)}
                />
              ))}
            </div>

            <button
              className="service-nav-button service-nav-next"
              type="button"
              aria-label="Show next service page"
              onClick={() => goToServicePage(activePage + 1)}
            >
              <ChevronRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-slate-50 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">How does it work?</p>
          <h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.055em] text-slate-950 md:text-6xl">
            A clear workflow from scientific brief to final files.
          </h2>
        </Reveal>

        <Reveal className="process-river mt-16">
          {processSteps.map((step, index) => (
            <div key={step} className="process-step">
              <span>{index + 1}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-white py-20 md:py-24" aria-labelledby="testimonials-title">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">Our clients say</p>
            <h2 id="testimonials-title" className="mt-5 text-4xl font-medium tracking-[-0.055em] text-slate-950 md:text-6xl">
              Designed with scientists, not around them.
            </h2>
          </div>
          <p className="max-w-md text-lg leading-8 text-slate-500">
            The collaboration is built around accuracy first, then visual impact.
          </p>
        </Reveal>

        <div className="quote-stream mt-14">
          {testimonials.map((item, index) => (
            <Reveal key={item.quote} delay={index * 0.06} className="quote-panel">
              <p>“{item.quote}”</p>
              <span>{item.name}</span>
              <small>{item.role}</small>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const initialForm = {
    name: "",
    email: "",
    projectType: "",
    target: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef(null);

  const updateField = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: undefined }));
    }
  };

  const handleFiles = (selectedFiles) => {
    setFiles(Array.from(selectedFiles || []));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = {};

    if (!formData.name.trim()) nextErrors.name = "Please enter your name.";
    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) nextErrors.message = "Please tell us a little about your project.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // TODO: Send the validated form data and selected files to the production contact endpoint.
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormData(initialForm);
    setErrors({});
    setFiles([]);
    setIsSubmitted(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-slate-50 py-20 md:py-24">
      <div className="contact-shell mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="contact-card">
          <div className="contact-info">
            <img className="contact-info-art" src="/contact-ink.png" alt="" aria-hidden="true" />
            <div className="contact-info-content">
              <p className="contact-label">Contact</p>
              <h2>
                <span>Tell us about your project.</span>
                <span>We&apos;d love to hear from you.</span>
              </h2>

              <a className="contact-email" href={`mailto:${contactEmail}`}>
                <Mail aria-hidden="true" />
                <span>{contactEmail}</span>
              </a>
              <p className="contact-response">We typically reply within 1 business day.</p>

              <div className="contact-trust" aria-label="Contact assurances">
                {["Fast response", "Confidential", "No obligation"].map((item) => (
                  <span key={item}>
                    <CheckCircle2 aria-hidden="true" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-area">
            {isSubmitted ? (
              <div className="contact-success" role="status">
                <span className="contact-success-icon"><CheckCircle2 aria-hidden="true" /></span>
                <h3>Thanks - we&apos;ll reply within 1 business day.</h3>
                <p>Your project details are ready for our studio team to review.</p>
                <button type="button" onClick={resetForm}>
                  <RotateCcw aria-hidden="true" />
                  Send another message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="contact-form-grid">
                  <label className="contact-field" htmlFor="contact-name">
                    <span>Your name <em>*</em></span>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      placeholder="Your name"
                      autoComplete="name"
                      required
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "contact-name-error" : undefined}
                      onChange={updateField}
                    />
                    {errors.name && <small id="contact-name-error" className="contact-error">{errors.name}</small>}
                  </label>

                  <label className="contact-field" htmlFor="contact-email">
                    <span>Email address <em>*</em></span>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      placeholder="Email address"
                      autoComplete="email"
                      required
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "contact-email-error" : undefined}
                      onChange={updateField}
                    />
                    {errors.email && <small id="contact-email-error" className="contact-error">{errors.email}</small>}
                  </label>

                  <label className="contact-field" htmlFor="contact-project-type">
                    <span>Project type</span>
                    <span className="contact-select-wrap">
                      <select id="contact-project-type" name="projectType" value={formData.projectType} onChange={updateField}>
                        <option value="">Select project type</option>
                        <option>Graphical abstract</option>
                        <option>Scientific figure</option>
                        <option>Journal cover</option>
                        <option>Scientific animation</option>
                        <option>Presentation or poster</option>
                      </select>
                      <ChevronDown aria-hidden="true" />
                    </span>
                  </label>

                  <label className="contact-field" htmlFor="contact-target">
                    <span>Target journal / deadline</span>
                    <input
                      id="contact-target"
                      name="target"
                      type="text"
                      value={formData.target}
                      placeholder="Target journal / deadline"
                      onChange={updateField}
                    />
                  </label>

                  <label className="contact-field contact-field-full" htmlFor="contact-message">
                    <span>Tell us about your project <em>*</em></span>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      placeholder="Tell us about your project"
                      rows="5"
                      required
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? "contact-message-error" : undefined}
                      onChange={updateField}
                    />
                    {errors.message && <small id="contact-message-error" className="contact-error">{errors.message}</small>}
                  </label>
                </div>

                <div className="contact-submit-row">
                  <div>
                    <div
                      className={`contact-dropzone ${isDragging ? "is-dragging" : ""}`}
                      role="button"
                      tabIndex="0"
                      aria-label="Upload brief or files"
                      onClick={() => fileInputRef.current?.click()}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          fileInputRef.current?.click();
                        }
                      }}
                      onDragEnter={(event) => {
                        event.preventDefault();
                        setIsDragging(true);
                      }}
                      onDragOver={(event) => event.preventDefault()}
                      onDragLeave={() => setIsDragging(false)}
                      onDrop={(event) => {
                        event.preventDefault();
                        setIsDragging(false);
                        handleFiles(event.dataTransfer.files);
                      }}
                    >
                      <Upload aria-hidden="true" />
                      <span>
                        <strong>Upload brief or files (optional)</strong>
                        <small>Drag and drop or <b>click to browse</b></small>
                      </span>
                    </div>
                    <input
                      ref={fileInputRef}
                      className="contact-file-input"
                      type="file"
                      multiple
                      aria-label="Choose project files"
                      onChange={(event) => handleFiles(event.target.files)}
                    />
                    {files.length > 0 && (
                      <ul className="contact-file-list" aria-label="Selected files">
                        {files.map((file) => <li key={`${file.name}-${file.size}`}>{file.name}</li>)}
                      </ul>
                    )}
                  </div>

                  <button className="contact-send" type="submit">
                    Send message
                    <ArrowRight aria-hidden="true" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-5 py-8 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Lattice Visual. Scientific illustration and communication design.</p>
        <div className="flex gap-5">
          <a href="#home" className="hover:text-slate-950">Home</a>
          <a href="#services" className="hover:text-slate-950">Services</a>
          <a href="#contact" className="hover:text-slate-950">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Impact />
        <ProblemSolution />
        <BeforeAfter />
        <AwardBand />
        <Services />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
