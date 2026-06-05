import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Download, FileCheck2, LockKeyhole, Search } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { TemplateCard } from "@/components/template-card";
import { templates, templateCategories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Templates",
  description: "Free and paid scientific illustration templates for graphical abstracts, figures, journal covers, posters and animation planning.",
};

export default function TemplatesPage() {
  const freeTemplates = templates.filter((template) => template.access === "Free");
  const paidTemplates = templates.filter((template) => template.access === "Paid");

  return (
    <main>
      <section className="plate-grid border-b border-border">
        <div className="mx-auto grid max-w-site gap-10 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28 xl:px-12">
          <div className="md:col-span-8">
            <SectionHeading as="h1" eyebrow="Templates" title="Scientific templates for faster figures, covers and research visuals.">
              <p>
                Download free planning templates or request paid editable packs for graphical abstracts, mechanism diagrams, journal covers, posters and animation storyboards.
              </p>
            </SectionHeading>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#free"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-accent px-5 font-semibold text-canvas transition duration-200 hover:-translate-y-0.5"
              >
                <Download aria-hidden className="h-4 w-4" />
                Browse free templates
              </a>
              <a
                href="#paid"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-border bg-surface px-5 font-semibold text-ink transition duration-200 hover:-translate-y-0.5 hover:border-border-strong"
              >
                View paid packs
                <ArrowUpRight aria-hidden className="h-4 w-4" />
              </a>
            </div>
          </div>

          <aside className="rounded-lg border border-border bg-surface p-6 shadow-plate md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Resource library</p>
            <div className="mt-8 grid gap-4">
              {[
                { label: "Free templates", value: String(freeTemplates.length).padStart(2, "0"), icon: Download },
                { label: "Paid packs", value: String(paidTemplates.length).padStart(2, "0"), icon: LockKeyhole },
                { label: "Categories", value: String(templateCategories.length).padStart(2, "0"), icon: Search },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center justify-between border-b border-border pb-4 last:border-b-0 last:pb-0">
                    <span className="flex items-center gap-3 text-sm font-semibold text-ink">
                      <Icon aria-hidden className="h-4 w-4 text-accent" />
                      {item.label}
                    </span>
                    <span className="font-mono text-sm tabular text-text-muted">{item.value}</span>
                  </div>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-site px-5 py-10 md:px-8 xl:px-12">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-text-muted">Template categories</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {templateCategories.map((category) => (
              <span key={category} className="rounded-full border border-border bg-bg px-3 py-2 text-sm font-medium text-text">
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="free" className="mx-auto max-w-site scroll-mt-24 px-5 py-20 md:px-8 md:py-28 xl:px-12">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Free downloads" title="Planning templates for briefs, abstracts and cover submissions.">
            <p>These files are free to download and use when preparing a custom project brief or planning your own figure.</p>
          </SectionHeading>
          <FileCheck2 aria-hidden className="hidden h-10 w-10 text-accent md:block" />
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {freeTemplates.map((template) => (
            <TemplateCard key={template.slug} template={template} />
          ))}
        </div>
      </section>

      <section id="paid" className="border-y border-border bg-surface scroll-mt-24">
        <div className="mx-auto max-w-site px-5 py-20 md:px-8 md:py-28 xl:px-12">
          <SectionHeading eyebrow="Paid template packs" title="Editable systems for teams who need reusable scientific visual layouts.">
            <p>
              Paid packs are listed as request-to-purchase until checkout is connected. We will confirm file formats, usage terms and delivery by email.
            </p>
          </SectionHeading>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {paidTemplates.map((template) => (
              <TemplateCard key={template.slug} template={template} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-site px-5 py-20 md:px-8 md:py-28 xl:px-12">
        <div className="grid gap-8 rounded-lg border border-border bg-surface p-6 shadow-plate md:grid-cols-12 md:p-10">
          <div className="md:col-span-8">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Custom templates</p>
            <h2 className="mt-4 max-w-4xl text-balance text-4xl font-semibold leading-tight text-ink md:text-5xl">
              Need a template for your lab, journal or internal visual style?
            </h2>
            <p className="mt-5 max-w-copy leading-7 text-text-muted">
              We can build reusable figure systems, slide components and cover submission kits around your research area or brand guidelines.
            </p>
          </div>
          <div className="md:col-span-4 md:self-end md:justify-self-end">
            <Link
              href="/contact?template=custom-template-system"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-accent px-5 font-semibold text-canvas transition duration-200 hover:-translate-y-0.5"
            >
              Request a custom kit
              <ArrowUpRight aria-hidden className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
