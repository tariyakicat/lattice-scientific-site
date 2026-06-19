import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { founder } from "../data/site";

export default function About() {
  return (
    <section id="about" className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <Reveal>
          <motion.figure whileHover={{ scale: 1.02, rotate: -1 }} className="mx-auto aspect-square max-w-sm overflow-hidden rounded-full border border-black/10 bg-white p-3 shadow-soft md:mx-0">
            <img src={founder.image} alt="Lattice Visual team portrait placeholder" loading="lazy" className="h-full w-full rounded-full object-cover" />
          </motion.figure>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan">About the studio</p>
          <h2 className="mt-4 text-5xl font-black leading-tight tracking-[-0.045em] text-ink md:text-7xl">Hi, we are Lattice Visual.</h2>
          <h3 className="mt-6 text-2xl font-black leading-snug tracking-[-0.03em] text-ink md:text-3xl">{founder.title}</h3>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">{founder.bio}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 font-bold text-ink transition hover:-translate-y-0.5 hover:border-cyan">
              View Profile
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
            <a href="mailto:contact@latticevisual.com" className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:bg-cyan">
              Book a Meeting
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
