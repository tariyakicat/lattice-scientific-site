import type { Metadata } from "next";
import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description: "Scientific illustration services for covers, figures, graphical abstracts, animation, posters and 3D visualization.",
};

export default function ServicesPage() {
  return (
    <main>
      <section className="plate-grid border-b border-border">
        <div className="mx-auto max-w-site px-5 py-20 md:px-8 md:py-28 xl:px-12">
          <SectionHeading as="h1" eyebrow="Services" title="Scientific illustration services built around review, resolution and reuse.">
            <p>
              Each engagement starts with the scientific argument, then becomes a visual system that can survive manuscript review, slide projection and high-resolution publication.
            </p>
          </SectionHeading>
        </div>
      </section>

      <section className="mx-auto max-w-site px-5 py-20 md:px-8 md:py-28 xl:px-12">
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article key={service.slug} className="plate-crop-mark relative overflow-hidden rounded-lg border border-border bg-surface p-6 shadow-plate">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">{String(index + 1).padStart(2, "0")}</p>
                    <h2 className="mt-8 max-w-xl text-balance font-display text-4xl leading-none text-ink md:text-5xl">{service.title}</h2>
                  </div>
                  <Icon aria-hidden className="h-6 w-6 shrink-0 text-accent" />
                </div>
                <div className="mt-6 grid gap-3 border-y border-border py-4 sm:grid-cols-2">
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-text-muted">
                    Delivery
                    <span className="mt-1 block text-sm font-semibold tabular text-ink">{service.delivery}</span>
                  </p>
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-text-muted">
                    Indicative price
                    <span className="mt-1 block text-sm font-semibold tabular text-ink">{service.price}</span>
                  </p>
                </div>
                <p className="mt-6 max-w-copy text-base leading-7 text-text-muted">{service.description}</p>
                <p className="mt-4 text-sm leading-6 text-text">{service.bestFor}</p>
                <ul className="mt-8 grid gap-3">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-text">
                      <Check aria-hidden className="h-4 w-4 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/contact" className="inline-flex h-12 items-center gap-2 rounded-md bg-accent px-5 font-semibold text-canvas transition duration-200 hover:-translate-y-0.5">
            Scope a project
            <ArrowUpRight aria-hidden className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
