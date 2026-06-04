import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { AnimatePresence, motion } from "framer-motion";
import {
  fields,
  pricing,
  processSteps,
  projects,
  serviceTypes,
  services,
  testimonials,
} from "./content/scientific";
import "./styles.css";

const navItems = [
  { label: "Work", path: "/work" },
  { label: "Services", path: "/services" },
  { label: "Process", path: "/process" },
  { label: "Pricing", path: "/pricing" },
  { label: "About", path: "/about" },
];

const ease = [0.16, 1, 0.3, 1];
const viewport = { once: true, amount: 0.12 };

function useRoute() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const navigate = (nextPath) => {
    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, "", nextPath);
      setPath(nextPath);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return { path, navigate };
}

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.7, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

function Media({ project, className = "" }) {
  if (project.mediaType === "video") {
    return (
      <video
        className={className}
        src={project.video}
        poster={project.cover}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    );
  }

  return <img className={className} src={project.cover} alt={project.title} loading="lazy" />;
}

function Header({ path, navigate }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  return (
    <header className="site-header">
      <button className="wordmark" onClick={() => navigate("/")} aria-label="Lattice Visual home">
        <span className="mark">LV</span>
        <span>Lattice Visual</span>
      </button>

      <nav className="desktop-nav" aria-label="Primary">
        {navItems.map((item) => (
          <button
            key={item.path}
            className={path === item.path || path.startsWith(`${item.path}/`) ? "active" : ""}
            onClick={() => navigate(item.path)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <button className="start-button desktop-cta" onClick={() => navigate("/contact")}>
        Start a project
      </button>

      <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-label="Open menu">
        <span />
        <span />
      </button>

      {open && (
        <div className="mobile-panel">
          {navItems.map((item) => (
            <button key={item.path} onClick={() => navigate(item.path)}>
              {item.label}
            </button>
          ))}
          <button className="start-button" onClick={() => navigate("/contact")}>
            Start a project
          </button>
        </div>
      )}
    </header>
  );
}

function Footer({ navigate }) {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <p className="eyebrow">Lattice Visual Scientific Illustration</p>
          <h2>Your science deserves a figure editors remember.</h2>
        </div>
        <button className="start-button large" onClick={() => navigate("/contact")}>
          Request a quote
        </button>
      </div>

      <div className="footer-grid">
        <div>
          <strong>Services</strong>
          {services.map((service) => (
            <button key={service.slug} onClick={() => navigate(`/services/${service.slug}`)}>
              {service.title}
            </button>
          ))}
        </div>
        <div>
          <strong>Studio</strong>
          <button onClick={() => navigate("/work")}>Work</button>
          <button onClick={() => navigate("/process")}>Process</button>
          <button onClick={() => navigate("/pricing")}>Pricing</button>
          <button onClick={() => navigate("/about")}>About</button>
        </div>
        <div>
          <strong>Contact</strong>
          <a href="mailto:hello@latticevisual.com">hello@latticevisual.com</a>
          <span>London · Remote worldwide</span>
          <span>Graphical abstracts, covers, mechanisms, workflows, animation.</span>
        </div>
      </div>
    </footer>
  );
}

function ProjectTile({ project, navigate, index }) {
  return (
    <motion.button
      className={`project-tile ${project.ratio}`}
      onClick={() => navigate(`/work/${project.slug}`)}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.65, ease, delay: Math.min(index * 0.035, 0.18) }}
    >
      <Media project={project} />
      <span className="tile-caption">
        <span>{project.title}</span>
        <small>
          {project.service} · {project.journal}
        </small>
      </span>
    </motion.button>
  );
}

function FilterBar({ label, options, active, setActive }) {
  return (
    <div className="filter-row" aria-label={label}>
      <span>{label}</span>
      <div>
        {options.map((option) => (
          <button key={option} className={active === option ? "active" : ""} onClick={() => setActive(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

function WorkGrid({ navigate, limit, showFilters = false }) {
  const [service, setService] = useState("All");
  const [field, setField] = useState("All");
  const [visible, setVisible] = useState(limit ?? 8);

  const filtered = useMemo(
    () =>
      projects.filter(
        (project) =>
          (service === "All" || project.service === service) && (field === "All" || project.field === field),
      ),
    [service, field],
  );

  const shown = filtered.slice(0, visible);

  useEffect(() => {
    setVisible(limit ?? 8);
  }, [service, field, limit]);

  return (
    <section className="work-section">
      {showFilters && (
        <div className="filters">
          <FilterBar label="Service" options={serviceTypes} active={service} setActive={setService} />
          <FilterBar label="Field" options={fields} active={field} setActive={setField} />
        </div>
      )}

      <div className="project-grid">
        {shown.map((project, index) => (
          <ProjectTile key={project.slug} project={project} navigate={navigate} index={index} />
        ))}
      </div>

      {visible < filtered.length && (
        <div className="center-action">
          <button className="secondary-button" onClick={() => setVisible((value) => value + 4)}>
            Load more work
          </button>
        </div>
      )}
    </section>
  );
}

function Home({ navigate }) {
  return (
    <main>
      <section className="home-hero graph-paper">
        <div className="hero-copy">
          <p className="eyebrow">Scientific illustration · journal figures · animation</p>
          <h1>Publication-grade figures for research that needs to be understood fast.</h1>
          <p>
            Lattice Visual designs graphical abstracts, mechanism diagrams, workflow figures, journal covers and
            scientific animation for labs, founders and research teams.
          </p>
          <div className="hero-actions">
            <button className="start-button large" onClick={() => navigate("/contact")}>
              Start a project
            </button>
            <button className="ghost-button" onClick={() => navigate("/work")}>
              View portfolio
            </button>
          </div>
        </div>
        <div className="hero-reel" aria-label="Selected portfolio samples">
          {projects.slice(0, 4).map((project) => (
            <button key={project.slug} onClick={() => navigate(`/work/${project.slug}`)}>
              <Media project={project} />
            </button>
          ))}
        </div>
      </section>

      <section className="section intro-band">
        <Reveal className="section-heading">
          <p className="eyebrow">Services</p>
          <h2>Five focused ways to turn research into visual proof.</h2>
        </Reveal>
        <div className="service-grid">
          {services.map((service, index) => (
            <Reveal key={service.slug} className="service-card" delay={index * 0.04}>
              <button onClick={() => navigate(`/services/${service.slug}`)} style={{ "--accent-local": service.accent }}>
                <span className="service-icon" />
                <strong>{service.title}</strong>
                <p>{service.summary}</p>
                <small>{service.price}</small>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <Reveal className="section-heading wide-heading">
          <p className="eyebrow">Selected work</p>
          <h2>The gallery is the proof.</h2>
          <button className="secondary-button" onClick={() => navigate("/work")}>
            Open full gallery
          </button>
        </Reveal>
        <WorkGrid navigate={navigate} limit={6} />
      </section>

      <TrustBlock />
      <CtaBand navigate={navigate} />
    </main>
  );
}

function WorkPage({ navigate }) {
  return (
    <main>
      <PageHero
        eyebrow="Gallery"
        title="Scientific artwork, diagrams and motion built for publication pressure."
        text="Filter by service type or scientific field. Each piece is structured around a clear problem, a visual solution and journal-ready delivery."
      />
      <WorkGrid navigate={navigate} showFilters />
      <CtaBand navigate={navigate} />
    </main>
  );
}

function ProjectPage({ project, navigate }) {
  const current = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(current + 1) % projects.length];

  return (
    <main>
      <section className="project-hero">
        <button className="back-link" onClick={() => navigate("/work")}>
          Back to work
        </button>
        <div className="project-title-block">
          <p className="eyebrow">
            {project.service} · {project.field}
          </p>
          <h1>{project.title}</h1>
        </div>
        <div className="project-meta">
          <span>{project.journal}</span>
          <span>{project.doi}</span>
          <span>{project.year}</span>
        </div>
      </section>

      <section className="project-media-full">
        <Media project={project} />
      </section>

      <section className="project-brief">
        <Reveal>
          <p className="eyebrow">Science problem</p>
          <h2>{project.problem}</h2>
        </Reveal>
        <Reveal>
          <p className="eyebrow">Visual solution</p>
          <p>{project.solution}</p>
        </Reveal>
      </section>

      <section className="project-gallery">
        {project.gallery.map((image, index) => (
          <Reveal key={image} className={index === 0 ? "gallery-image wide" : "gallery-image"}>
            <img src={image} alt={`${project.title} sample ${index + 1}`} loading="lazy" />
          </Reveal>
        ))}
      </section>

      <section className="next-project">
        <button onClick={() => navigate(`/work/${next.slug}`)}>
          <span>Next project</span>
          <strong>{next.title}</strong>
        </button>
      </section>
    </main>
  );
}

function ServicesIndex({ navigate }) {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="Specialist scientific illustration for papers, grants, covers and presentations."
        text="Each service is scoped around editorial clarity, scientific accuracy, file compliance and fast review cycles."
      />
      <section className="section service-index">
        {services.map((service, index) => (
          <Reveal key={service.slug} className="service-row" delay={index * 0.04}>
            <button onClick={() => navigate(`/services/${service.slug}`)} style={{ "--accent-local": service.accent }}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{service.title}</strong>
              <p>{service.summary}</p>
            </button>
          </Reveal>
        ))}
      </section>
    </main>
  );
}

function ServicePage({ service, navigate }) {
  const samples = projects.filter((project) => project.service === service.label);
  const heroSample = samples[0] ?? projects[0];

  return (
    <main>
      <section className="service-hero" style={{ "--accent-local": service.accent }}>
        <div>
          <p className="eyebrow">Service</p>
          <h1>{service.title}</h1>
          <p>{service.summary}</p>
        </div>
        <div className="service-hero-side">
          <button className="service-preview" onClick={() => navigate(`/work/${heroSample.slug}`)}>
            <Media project={heroSample} />
            <span>
              <strong>{heroSample.title}</strong>
              <small>
                {heroSample.field} · {heroSample.journal}
              </small>
            </span>
          </button>
          <aside>
            <span>Price hint</span>
            <strong>{service.price}</strong>
            <button className="start-button" onClick={() => navigate("/contact")}>
              Request quote
            </button>
          </aside>
        </div>
      </section>

      <section className="section two-column">
        <Reveal>
          <p className="eyebrow">When journals want this</p>
          <h2>{service.when}</h2>
        </Reveal>
        <Reveal>
          <p className="eyebrow">Our approach</p>
          <p>{service.approach}</p>
          <div className="format-list">
            {service.formats.map((format) => (
              <span key={format}>{format}</span>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section">
        <Reveal className="section-heading wide-heading">
          <p className="eyebrow">Samples</p>
          <h2>{samples.length ? "Relevant work from the portfolio." : "Selected adjacent portfolio work."}</h2>
        </Reveal>
        <div className="project-grid">
          {(samples.length ? samples : projects.slice(0, 4)).map((project, index) => (
            <ProjectTile key={project.slug} project={project} navigate={navigate} index={index} />
          ))}
        </div>
      </section>

      <FaqBlock />
      <CtaBand navigate={navigate} />
    </main>
  );
}

function ProcessPage({ navigate }) {
  return (
    <main>
      <PageHero
        eyebrow="Process"
        title="A clear quote flow for busy labs and deadline-driven submissions."
        text="Most static figures move from brief to delivery in one to three weeks. Urgent journal deadlines can be scoped as a rush tier."
      />
      <section className="section process-list">
        {processSteps.map((step, index) => (
          <Reveal key={step.title} className="process-step" delay={index * 0.05}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{step.title}</h2>
            <p>{step.text}</p>
          </Reveal>
        ))}
      </section>
      <section className="section revision-policy">
        <Reveal>
          <p className="eyebrow">Revision policy</p>
          <h2>Two structured revision rounds are included in standard static projects.</h2>
          <p>
            Additional author rounds, journal resubmission changes, rush delivery and alternate cover concepts are quoted
            before work starts so there are no awkward surprises.
          </p>
        </Reveal>
      </section>
      <CtaBand navigate={navigate} />
    </main>
  );
}

function PricingPage({ navigate }) {
  return (
    <main>
      <PageHero
        eyebrow="Pricing"
        title="Indicative ranges, scoped around complexity rather than mystery."
        text="Final quotes depend on source material, number of panels, 2D/3D requirements, author rounds, journal specs and deadline pressure."
      />
      <section className="section pricing-table">
        <div className="table">
          <div className="table-row head">
            <span>Service</span>
            <span>Range</span>
            <span>Typical turnaround</span>
          </div>
          {pricing.map(([service, range, turnaround]) => (
            <div className="table-row" key={service}>
              <span>{service}</span>
              <strong>{range}</strong>
              <span>{turnaround}</span>
            </div>
          ))}
        </div>
        <Reveal className="pricing-note">
          <h2>What affects price</h2>
          <p>
            Complexity rises with multi-scale mechanisms, 3D rendering, custom molecular assets, cover concepting,
            urgent turnarounds and large author groups. Straightforward redraws and clean workflow figures are faster.
          </p>
          <button className="start-button" onClick={() => navigate("/contact")}>
            Get a custom quote
          </button>
        </Reveal>
      </section>
      <FaqBlock />
    </main>
  );
}

function AboutPage({ navigate }) {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="A scientific design studio with researcher literacy and editorial taste."
        text="Lattice Visual sits between the lab bench and the design studio: rigorous enough for peer review, polished enough for covers, talks and public communication."
      />
      <section className="section about-grid">
        <Reveal>
          <h2>Dual DNA</h2>
          <p>
            We build figures like designers and read briefs like researchers. The work starts with mechanism, evidence,
            hierarchy and journal requirements before it becomes composition, color, typography and motion.
          </p>
        </Reveal>
        <Reveal>
          <h2>Fields covered</h2>
          <p>
            Biology, chemistry, medicine, materials science, physics, pharmacology, biomedical engineering,
            environmental science and interdisciplinary grant communication.
          </p>
        </Reveal>
      </section>
      <TrustBlock />
      <CtaBand navigate={navigate} />
    </main>
  );
}

function ContactPage() {
  const [status, setStatus] = useState("idle");

  const submit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const payload = new FormData(form);

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        body: payload,
      });

      if (!response.ok) throw new Error("Quote request failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("local-success");
    }
  };

  return (
    <main>
      <PageHero
        eyebrow="Start a project"
        title="Send the science, the deadline and the target journal."
        text="We reply within one working day with scope, price range and next steps. Manuscripts, drafts and reference files are welcome."
      />
      <section className="section contact-layout">
        <form className="quote-form" onSubmit={submit}>
          <label>
            Name
            <input name="name" required autoComplete="name" />
          </label>
          <label>
            Email
            <input name="email" type="email" required autoComplete="email" />
          </label>
          <label>
            Service type
            <select name="service" required defaultValue="">
              <option value="" disabled>
                Select one
              </option>
              {services.map((service) => (
                <option key={service.slug}>{service.title}</option>
              ))}
            </select>
          </label>
          <label>
            Target journal
            <input name="journal" placeholder="Target journal, conference or institution" />
          </label>
          <label>
            Deadline
            <input name="deadline" type="date" />
          </label>
          <label className="full">
            Project notes
            <textarea name="message" rows="6" required placeholder="Briefly describe the paper, mechanism or visual problem." />
          </label>
          <label className="file-input full">
            Manuscript, draft or references
            <input name="file" type="file" multiple />
          </label>
          <button className="start-button large" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send quote request"}
          </button>
          {status === "success" && (
            <p className="form-success">Quote request received. We will reply within one working day.</p>
          )}
          {status === "local-success" && (
            <p className="form-success">Quote request captured in prototype mode. The Vercel API route is included for deployment.</p>
          )}
        </form>
        <aside className="contact-aside">
          <h2>What to include</h2>
          <p>Manuscript or abstract, draft sketch, journal specs, deadline, author-review needs and any examples of visual taste.</p>
          <div className="contact-promise">
            <span>Response time</span>
            <strong>Within 1 working day</strong>
          </div>
        </aside>
      </section>
    </main>
  );
}

function PageHero({ eyebrow, title, text }) {
  return (
    <section className="page-hero graph-paper">
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{text}</p>
      </Reveal>
    </section>
  );
}

function TrustBlock() {
  return (
    <section className="section trust-block">
      <Reveal className="section-heading">
        <p className="eyebrow">Studio standards</p>
        <h2>Built for journal specs, author review and deadline pressure.</h2>
      </Reveal>
      <div className="proof-grid">
        <Reveal className="proof-card">
          <span>01</span>
          <strong>Spec-ready delivery</strong>
          <p>Vector files, 300 dpi exports, title-safe crops and journal-specific sizing where needed.</p>
        </Reveal>
        <Reveal className="proof-card">
          <span>02</span>
          <strong>Researcher-literate review</strong>
          <p>We structure the visual argument before polishing the composition, so accuracy does not get lost.</p>
        </Reveal>
        <Reveal className="proof-card">
          <span>03</span>
          <strong>Reusable visual systems</strong>
          <p>Figures can extend into talks, lab websites, grant decks, social launch posts and animations.</p>
        </Reveal>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <Reveal key={testimonial.name} className="testimonial">
            <p>"{testimonial.quote}"</p>
            <span>{testimonial.name}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function FaqBlock() {
  const faqs = [
    ["Do you follow journal specifications?", "Yes. Final exports can be sized to the target journal, with vector, 300 dpi raster and web crops where appropriate."],
    ["How many revisions are included?", "Standard static projects include two structured revision rounds. Animation and cover projects are scoped individually."],
    ["Can you work from a rough sketch?", "Yes. A sketch, abstract, manuscript, figure draft or slide deck is enough to begin scoping."],
  ];

  return (
    <section className="section faq">
      <Reveal className="section-heading">
        <p className="eyebrow">FAQ</p>
        <h2>Practical details before you brief us.</h2>
      </Reveal>
      <div className="faq-list">
        {faqs.map(([question, answer]) => (
          <details key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function CtaBand({ navigate }) {
  return (
    <section className="cta-band">
      <p className="eyebrow">Ready when the manuscript is almost there</p>
      <h2>Send a draft, a deadline and the journal target.</h2>
      <button className="start-button large" onClick={() => navigate("/contact")}>
        Start a project
      </button>
    </section>
  );
}

function NotFound({ navigate }) {
  return (
    <main>
      <PageHero
        eyebrow="404"
        title="This page is outside the current scientific illustration site."
        text="Return to the portfolio or start a quote request."
      />
      <div className="center-action not-found-actions">
        <button className="secondary-button" onClick={() => navigate("/work")}>
          View work
        </button>
        <button className="start-button" onClick={() => navigate("/contact")}>
          Start a project
        </button>
      </div>
    </main>
  );
}

function App() {
  const { path, navigate } = useRoute();
  const serviceSlug = path.match(/^\/services\/([^/]+)/)?.[1];
  const projectSlug = path.match(/^\/work\/([^/]+)/)?.[1];
  const service = services.find((item) => item.slug === serviceSlug);
  const project = projects.find((item) => item.slug === projectSlug);

  let page = <NotFound navigate={navigate} />;

  if (path === "/") page = <Home navigate={navigate} />;
  else if (path === "/work") page = <WorkPage navigate={navigate} />;
  else if (project) page = <ProjectPage project={project} navigate={navigate} />;
  else if (path === "/services") page = <ServicesIndex navigate={navigate} />;
  else if (service) page = <ServicePage service={service} navigate={navigate} />;
  else if (path === "/process") page = <ProcessPage navigate={navigate} />;
  else if (path === "/pricing") page = <PricingPage navigate={navigate} />;
  else if (path === "/about") page = <AboutPage navigate={navigate} />;
  else if (path === "/contact") page = <ContactPage />;

  return (
    <div className="site-shell">
      <Header path={path} navigate={navigate} />
      <AnimatePresence mode="wait">
        <motion.div
          key={path}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease }}
        >
          {page}
        </motion.div>
      </AnimatePresence>
      <Footer navigate={navigate} />
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
