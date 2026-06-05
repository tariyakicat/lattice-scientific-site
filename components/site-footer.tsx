import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto grid max-w-site gap-12 px-5 py-16 md:px-8 lg:grid-cols-12 xl:px-12">
        <div className="lg:col-span-5">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Lattice Visual</p>
          <h2 className="mt-4 max-w-xl font-display text-4xl leading-none text-ink md:text-5xl">
            Scientific illustration services, templates and publication-ready research visuals.
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-text-muted">Navigate</h3>
            <div className="mt-4 grid gap-3 text-sm text-text">
              <Link href="/work">Gallery</Link>
              <Link href="/services">Services</Link>
              <Link href="/templates">Templates</Link>
              <Link href="/process">Workflow</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-text-muted">Services</h3>
            <div className="mt-4 grid gap-3 text-sm text-text">
              {services.slice(0, 5).map((service) => (
                <Link key={service.slug} href="/services">
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-text-muted">Studio</h3>
            <div className="mt-4 grid gap-4 text-sm text-text">
              <a className="inline-flex items-center gap-2" href="mailto:hello@latticevisual.com">
                hello@latticevisual.com
                <ArrowUpRight aria-hidden className="h-4 w-4" />
              </a>
              <p>London / remote worldwide</p>
              <p className="text-text-muted">Journal covers, figures, graphical abstracts, animation and 3D scientific visualization.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
