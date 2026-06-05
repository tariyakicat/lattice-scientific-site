import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a quote for scientific illustration, journal cover art, manuscript figures or scientific animation.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="plate-grid border-b border-border">
        <div className="mx-auto max-w-site px-5 py-20 md:px-8 md:py-28 xl:px-12">
          <SectionHeading as="h1" eyebrow="Contact" title="Send the science, deadline and intended use.">
            <p>
              Share the manuscript, draft sketch or reference images you already have. We will reply with scope, timeline and a quote path within one working day.
            </p>
          </SectionHeading>
        </div>
      </section>

      <section className="mx-auto grid max-w-site gap-8 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28 xl:px-12">
        <div className="md:col-span-8">
          <ContactForm />
        </div>
        <aside className="rounded-lg border border-border bg-surface p-6 shadow-plate md:col-span-4">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">What helps</p>
          <ul className="mt-8 grid gap-5 text-sm leading-6 text-text-muted">
            <li>
              <strong className="block text-ink">Scientific source</strong>
              Manuscript, abstract, figure draft, grant summary or slide deck.
            </li>
            <li>
              <strong className="block text-ink">Target use</strong>
              Journal cover, manuscript figure, graphical abstract, conference loop or lab website.
            </li>
            <li>
              <strong className="block text-ink">Constraints</strong>
              Deadline, journal dimensions, author-review needs and preferred file formats.
            </li>
          </ul>
        </aside>
      </section>
    </main>
  );
}
