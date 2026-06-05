import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { SectionHeading } from "@/components/section-heading";
import { processSteps } from "@/lib/data";

export const metadata: Metadata = {
  title: "Process",
  description: "The Lattice Visual workflow from scientific brief to final publication-ready files.",
};

export default function ProcessPage() {
  return (
    <main>
      <section className="plate-grid border-b border-border">
        <div className="mx-auto max-w-site px-5 py-20 md:px-8 md:py-28 xl:px-12">
          <SectionHeading as="h1" eyebrow="Process" title="A workflow for multi-author science and publication deadlines.">
            <p>
              The process is structured so researchers know when to provide scientific input, when design decisions are locked, and what files arrive at the end.
            </p>
          </SectionHeading>
        </div>
      </section>

      <section className="mx-auto max-w-site px-5 py-20 md:px-8 md:py-28 xl:px-12">
        <div className="grid gap-4">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="grid gap-5 rounded-lg border border-border bg-surface p-6 shadow-plate md:grid-cols-12 md:items-center">
                <div className="flex items-center justify-between md:col-span-2">
                  <span className="font-mono text-sm uppercase tracking-[0.18em] text-accent">{String(index + 1).padStart(2, "0")}</span>
                  <Icon aria-hidden className="h-5 w-5 text-accent md:hidden" />
                </div>
                <h2 className="font-display text-4xl leading-none text-ink md:col-span-4 md:text-5xl">{step.title}</h2>
                <p className="text-base leading-7 text-text-muted md:col-span-5">{step.text}</p>
                <Icon aria-hidden className="hidden h-6 w-6 justify-self-end text-accent md:block" />
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-site gap-8 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28 xl:px-12">
          <div className="md:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Revision policy</p>
            <h2 className="mt-4 font-display text-4xl leading-none text-ink md:text-6xl">Clear rounds, clear files.</h2>
          </div>
          <div className="grid gap-6 leading-8 text-text-muted md:col-span-7">
            <p>
              Standard static illustration projects include structured revision rounds. Animation, cover concepting and multi-figure systems are scoped with milestone checks so review does not become open-ended.
            </p>
            <p>
              Final files can include editable vector, high-resolution raster, slide-ready crops, web crops and transparent assets depending on the brief.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
