import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CtaBand() {
  return (
    <section className="mx-auto max-w-site px-5 py-20 md:px-8 md:py-28 xl:px-12">
      <div className="plate-crop-mark relative overflow-hidden rounded-lg border border-border bg-surface px-6 py-10 shadow-plate md:px-10 md:py-14">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Quote request</p>
            <h2 className="mt-4 max-w-4xl font-display text-4xl leading-none text-ink md:text-6xl">
              Send the science, the deadline and the intended use.
            </h2>
          </div>
          <div className="md:col-span-4 md:justify-self-end">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-accent px-5 font-semibold text-canvas transition duration-200 hover:-translate-y-0.5"
            >
              Request a quote
              <ArrowUpRight aria-hidden className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
