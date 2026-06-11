import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navItems } from "../data/site";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`fixed left-0 right-0 top-0 z-50 transition duration-300 ${scrolled ? "bg-white/75 shadow-sm backdrop-blur-2xl" : "bg-transparent"}`}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8" aria-label="Primary navigation">
        <a href="#top" className="flex items-center gap-3 font-black tracking-tight text-ink" aria-label="Lattice Visual home">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-ink text-sm text-white">LV</span>
          <span>Lattice Visual</span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-semibold text-neutral-600 transition hover:text-ink">
              {item.label}
            </a>
          ))}
        </div>
        <a href="#contact" className="hidden items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-cyan md:inline-flex">
          Get Started
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </a>
        <button
          className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </nav>
      {open ? (
        <div className="mx-5 mb-4 rounded-[1.5rem] border border-black/10 bg-white p-4 shadow-card md:hidden">
          <div className="grid gap-1">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 font-bold text-neutral-700 transition hover:bg-paper hover:text-ink">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 rounded-2xl bg-ink px-4 py-3 text-center font-bold text-white">
              Get Started
            </a>
          </div>
        </div>
      ) : null}
    </motion.header>
  );
}
