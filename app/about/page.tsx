import type { Metadata } from "next";
import { BadgeCheck, BookOpenText, GraduationCap, Microscope } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { SectionHeading } from "@/components/section-heading";
import { aboutStats } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: "About Lattice Visual, a scientific illustration studio combining academic literacy and editorial design.",
};

const principles = [
  {
    title: "Academic literacy",
    text: "We read the manuscript logic before designing the composition, so the final image supports the paper rather than decorating it.",
    icon: GraduationCap,
  },
  {
    title: "Editorial control",
    text: "Every plate uses scale, hierarchy, label discipline and negative space to help editors and reviewers scan faster.",
    icon: BookOpenText,
  },
  {
    title: "Scientific restraint",
    text: "We avoid generic science gloss. Texture, color and motion must clarify the mechanism or strengthen the cover concept.",
    icon: Microscope,
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="plate-grid border-b border-border">
        <div className="mx-auto grid max-w-site gap-10 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28 xl:px-12">
          <div className="md:col-span-8">
            <SectionHeading as="h1" eyebrow="About" title="A scientific design studio for images that carry evidence.">
              <p>
                Lattice Visual sits between the laboratory and the journal art desk. The work is designed for people who need complex research to be reviewed, remembered and reused.
              </p>
            </SectionHeading>
          </div>
          <div className="grid gap-3 md:col-span-4">
            {aboutStats.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-border bg-surface p-5 shadow-plate">
                <p className="font-display text-5xl leading-none text-ink tabular">{stat.value}</p>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.16em] text-text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-site px-5 py-20 md:px-8 md:py-28 xl:px-12">
        <div className="grid gap-5 md:grid-cols-3">
          {principles.map((principle) => {
            const Icon = principle.icon;
            return (
              <article key={principle.title} className="rounded-lg border border-border bg-surface p-6 shadow-plate">
                <Icon aria-hidden className="h-5 w-5 text-accent" />
                <h2 className="mt-10 text-2xl font-semibold text-ink">{principle.title}</h2>
                <p className="mt-4 leading-7 text-text-muted">{principle.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-site gap-8 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28 xl:px-12">
          <div className="md:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Credentials</p>
            <h2 className="mt-4 font-display text-4xl leading-none text-ink md:text-6xl">Built for specialist review.</h2>
          </div>
          <div className="grid gap-6 text-lg leading-8 text-text-muted md:col-span-7">
            <p>
              The studio workflow is designed around scientific reference, author review and publication constraints. Every project begins with source material and ends with files that can move across manuscript, cover, talk and web contexts.
            </p>
            <div className="flex items-start gap-3 rounded-lg border border-border bg-bg p-5">
              <BadgeCheck aria-hidden className="mt-1 h-5 w-5 shrink-0 text-accent" />
              <p>For public launch, real institution names, DOIs and testimonials should be added only after approval.</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
