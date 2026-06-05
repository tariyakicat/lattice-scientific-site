import Link from "next/link";
import { ArrowUpRight, BadgeCheck, Download, FileCheck2, LockKeyhole, ShieldCheck } from "lucide-react";
import { StaticPlate } from "@/components/artwork-plate";
import { CtaBand } from "@/components/cta-band";
import { MiniQuoteForm } from "@/components/mini-quote-form";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { SectionHeading } from "@/components/section-heading";
import { TemplateCard } from "@/components/template-card";
import { processSteps, projects, services, templates } from "@/lib/data";

const trustItems = [
  {
    title: "Journal-ready files",
    text: "Vector, 300 dpi and web exports prepared around real submission constraints.",
    icon: FileCheck2,
  },
  {
    title: "Researcher-led briefing",
    text: "We start with the mechanism, data hierarchy and reviewer expectations before styling.",
    icon: BadgeCheck,
  },
  {
    title: "Confidential workflow",
    text: "Manuscripts, grants and pre-publication visuals stay scoped for review and delivery.",
    icon: ShieldCheck,
  },
  {
    title: "Reusable outputs",
    text: "Figures are built for papers, slides, lab websites, social crops and print where needed.",
    icon: LockKeyhole,
  },
];

const faqs = [
  {
    question: "How much does a scientific illustration cost?",
    answer: "Most static figures start from the ranges shown above. Final scope depends on complexity, source material, deadline, number of panels and whether editable source files are required.",
  },
  {
    question: "Can you follow journal specifications?",
    answer: "Yes. Send the journal link or author guidelines and we will prepare sizing, resolution, format and safe-area constraints before final export.",
  },
  {
    question: "Do you provide revisions?",
    answer: "Custom work is scoped with structured revision rounds. We separate scientific corrections from style refinements so author comments stay manageable.",
  },
  {
    question: "Can I start with a template instead of custom work?",
    answer: "Yes. Free templates download immediately, and paid packs can be requested from the templates page while checkout is being connected.",
  },
];

const testimonials = [
  {
    quote: "The first draft made the mechanism easier to explain than our manuscript text.",
    role: "Biomedical research group",
  },
  {
    quote: "Clear hierarchy, clean labels and export files that worked across slides and submission.",
    role: "Materials science team",
  },
  {
    quote: "The workflow helped us turn a rough sketch into a figure the whole author team could review.",
    role: "Environmental microbiology lab",
  },
];

export default function HomePage() {
  const [heroProject, smallA, smallB] = projects;
  const featuredTemplates = templates.filter((template) => template.featured);

  return (
    <main>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid min-h-[calc(100dvh-4rem)] max-w-site gap-10 px-5 py-12 md:grid-cols-12 md:px-8 md:py-16 xl:px-12">
          <div className="flex flex-col justify-center md:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Scientific illustration services</p>
            <h1 className="mt-5 text-balance text-5xl font-bold leading-[0.96] text-ink md:text-6xl xl:text-7xl">
              Scientific illustrations and academic journal cover designs.
            </h1>
            <p className="mt-6 max-w-copy text-base leading-7 text-text-muted md:text-lg">
              Graphical abstracts, paper figures, mechanism diagrams, journal covers, animations and templates for research teams that need publication-ready visuals.
            </p>
            <div className="mt-7 grid grid-cols-3 gap-3 border-y border-border py-5">
              {[
                ["6", "service lines"],
                ["24h", "quote response"],
                ["2+", "revision rounds"],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="font-mono text-2xl font-semibold tabular text-ink">{value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-text-muted">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/work" className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-bg px-5 font-semibold text-ink transition duration-200 hover:-translate-y-0.5 hover:border-border-strong">
                View gallery
              </Link>
              <Link href="/templates" className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-border bg-bg px-5 font-semibold text-ink transition duration-200 hover:-translate-y-0.5 hover:border-border-strong">
                Templates
                <ArrowUpRight aria-hidden className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="grid content-center gap-5 md:col-span-7 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <MiniQuoteForm />
            </div>
            <div className="grid gap-4 lg:col-span-5">
              <StaticPlate project={heroProject} priority label="GRAPHICAL ABSTRACT / FROM £240" />
              <div className="grid grid-cols-2 gap-4">
                <StaticPlate project={smallA} label="FIGURE / 5-10 DAYS" />
                <StaticPlate project={smallB} label="MEDICAL / FROM £180" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-bg">
        <div className="mx-auto max-w-site px-5 py-12 md:px-8 xl:px-12">
          <p className="text-center font-mono text-xs uppercase tracking-[0.18em] text-text-muted">Experience and delivery proof, without fake journal-logo claims</p>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-lg border border-border bg-surface p-5">
                  <Icon aria-hidden className="h-5 w-5 text-accent" />
                  <h2 className="mt-6 text-lg font-bold text-ink">{item.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-text-muted">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-site gap-10 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28 xl:px-12">
        <div className="md:col-span-5">
          <SectionHeading eyebrow="We design scientific illustrations" title="Figures that explain, persuade and survive review.">
            <p>Most biological, chemical, medical and materials papers need visuals that compress complex mechanisms without losing scientific accuracy.</p>
          </SectionHeading>
          <div className="mt-8 grid gap-3 text-sm leading-6 text-text">
            {["Graphical abstracts and TOC art", "Mechanism diagrams and manuscript figures", "Journal covers and visual campaigns", "Conference animations and lab website loops"].map((item) => (
              <p key={item} className="flex gap-3 border-b border-border pb-3">
                <BadgeCheck aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="grid gap-4 md:col-span-7 md:grid-cols-2">
          <StaticPlate project={projects[4]} className="md:row-span-2" label="JOURNAL COVER / MATERIALS" />
          <StaticPlate project={projects[3]} label="GRAPHICAL ABSTRACT / CHEMISTRY" />
          <StaticPlate project={projects[5]} label="ANIMATION / CELL BIOLOGY" />
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-site px-5 py-20 md:px-8 md:py-28 xl:px-12">
          <SectionHeading eyebrow="Pricing guide" title="Choose a service, then send the science.">
            <p>Indicative ranges make early planning easier. We confirm final scope after seeing your source material, deadline and target use.</p>
          </SectionHeading>
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.slug} className="flex h-full flex-col rounded-lg border border-border bg-bg p-6 transition duration-200 hover:-translate-y-1 hover:border-accent">
                  <div className="flex items-start justify-between gap-5">
                    <Icon aria-hidden className="h-6 w-6 text-accent" />
                    <div className="text-right font-mono text-xs uppercase tracking-[0.14em] text-text-muted">
                      <p>{service.delivery}</p>
                      <p className="mt-1 text-ink">{service.price}</p>
                    </div>
                  </div>
                  <h3 className="mt-8 text-2xl font-bold leading-tight text-ink">{service.title}</h3>
                  <p className="mt-4 leading-7 text-text-muted">{service.description}</p>
                  <p className="mt-5 text-sm leading-6 text-text">{service.bestFor}</p>
                  <Link href={`/contact?service=${service.slug}`} className="mt-auto inline-flex h-11 items-center gap-2 pt-7 text-sm font-bold text-ink">
                    Get started
                    <ArrowUpRight aria-hidden className="h-4 w-4 text-accent" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-site px-5 py-20 md:px-8 md:py-28 xl:px-12">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Recent work" title="Recent covers, abstracts, figures and animation loops.">
            <p>The gallery is proof of fit: complete diagrams, cover-scale images and high-resolution visuals for scientific review.</p>
          </SectionHeading>
          <Link href="/work" className="inline-flex h-11 items-center gap-2 self-start rounded-md border border-border bg-surface px-4 text-sm font-semibold text-ink transition duration-200 hover:-translate-y-0.5 hover:border-border-strong md:self-end">
            Open gallery
            <ArrowUpRight aria-hidden className="h-4 w-4" />
          </Link>
        </div>
        <PortfolioGrid featuredOnly />
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-site px-5 py-20 md:px-8 md:py-28 xl:px-12">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Templates & downloads" title="Start with a template, upgrade to custom work later.">
              <p>Free planning templates download immediately. Paid editable packs are request-to-purchase while checkout is being connected.</p>
            </SectionHeading>
            <Link href="/templates" className="inline-flex h-11 items-center gap-2 self-start rounded-md border border-border bg-bg px-4 text-sm font-semibold text-ink transition duration-200 hover:-translate-y-0.5 hover:border-border-strong md:self-end">
              Browse templates
              <ArrowUpRight aria-hidden className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featuredTemplates.map((template) => (
              <TemplateCard key={template.slug} template={template} compact />
            ))}
          </div>
          <p className="mt-8 flex items-start gap-3 rounded-lg border border-border bg-bg p-5 text-sm leading-6 text-text-muted">
            <Download aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            Free files are direct downloads. Paid packs link to a request flow so we can confirm formats and usage rights before delivery.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-site px-5 py-20 md:px-8 md:py-28 xl:px-12">
        <SectionHeading eyebrow="Workflow" title="A clear path from rough science to final files." />
        <div className="mt-12 grid gap-3 md:grid-cols-5">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="rounded-lg border border-border bg-surface p-5">
                <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.16em] text-text-muted">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <Icon aria-hidden className="h-4 w-4 text-accent" />
                </div>
                <h3 className="mt-8 text-xl font-bold text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-text-muted">{step.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-site gap-8 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28 xl:px-12">
          <div className="md:col-span-5">
            <SectionHeading eyebrow="Questions" title="What researchers ask before ordering." />
          </div>
          <div className="grid gap-4 md:col-span-7">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-lg border border-border bg-bg p-6">
                <h3 className="text-xl font-bold text-ink">{faq.question}</h3>
                <p className="mt-3 leading-7 text-text-muted">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-site px-5 py-20 md:px-8 md:py-28 xl:px-12">
        <SectionHeading eyebrow="Feedback" title="Designed around author review, not just decoration." />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure key={item.role} className="rounded-lg border border-border bg-surface p-6 shadow-plate">
              <blockquote className="text-xl font-bold leading-snug text-ink">"{item.quote}"</blockquote>
              <figcaption className="mt-8 font-mono text-xs uppercase tracking-[0.16em] text-text-muted">{item.role}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
