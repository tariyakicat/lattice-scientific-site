import { ArrowUpRight } from "lucide-react";
import { navItems, founder } from "../data/site";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-black/10 bg-white px-5 py-16 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
        <div>
          <a href="#top" className="inline-flex items-center gap-3 font-black tracking-tight text-ink" aria-label="Lattice Visual home">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-ink text-sm text-white">LV</span>
            <span>Lattice Visual</span>
          </a>
          <p className="mt-6 max-w-xl text-3xl font-black leading-tight tracking-[-0.04em] text-ink md:text-5xl">
            Ready to turn complex research into visuals people remember?
          </p>
          <a href={`mailto:${founder.email}`} className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan px-6 py-4 font-black text-white transition hover:-translate-y-0.5 hover:bg-ink">
            Get Started
            <ArrowUpRight className="h-5 w-5" aria-hidden />
          </a>
        </div>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-neutral-400">Navigate</p>
          <div className="mt-5 grid gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="font-bold text-neutral-600 transition hover:text-ink">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-neutral-400">Connect</p>
          <div className="mt-5 grid gap-3">
            <a href={`mailto:${founder.email}`} className="font-bold text-neutral-600 transition hover:text-ink">{founder.email}</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="font-bold text-neutral-600 transition hover:text-ink">LinkedIn</a>
            <a href="https://www.behance.net" target="_blank" rel="noreferrer" className="font-bold text-neutral-600 transition hover:text-ink">Behance</a>
            <a href={`mailto:${founder.email}?subject=Meeting%20request%20with%20Lattice%20Visual`} className="font-bold text-neutral-600 transition hover:text-ink">Book a meeting</a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-3 border-t border-black/10 pt-6 text-sm font-semibold text-neutral-500 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Lattice Visual. Scientific illustration and communication design.</p>
        <p>London · Global research teams</p>
      </div>
    </footer>
  );
}
