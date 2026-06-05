import type { Metadata } from "next";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "High-resolution scientific illustration portfolio organized by discipline and use.",
};

export default function WorkPage() {
  return (
    <main>
      <section className="plate-grid border-b border-border">
        <div className="mx-auto max-w-site px-5 py-20 md:px-8 md:py-28 xl:px-12">
          <SectionHeading as="h1" eyebrow="Portfolio" title="High-resolution scientific artwork, organized by discipline.">
            <p>
              Filter the archive by scientific field and intended use. Diagrams are mounted complete by default, while cover studies may use editorial crops with full views inside each case study.
            </p>
          </SectionHeading>
        </div>
      </section>

      <section className="mx-auto max-w-site px-5 py-12 md:px-8 md:py-16 xl:px-12">
        <PortfolioGrid />
      </section>
    </main>
  );
}
