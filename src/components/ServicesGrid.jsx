import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { services } from "../data/site";

const colorClass = {
  cyan: "group-hover:border-cyan group-hover:bg-cyan/10 text-cyan",
  magenta: "group-hover:border-magenta group-hover:bg-magenta/10 text-magenta",
  orange: "group-hover:border-orange group-hover:bg-orange/10 text-orange",
};

export default function ServicesGrid() {
  return (
    <section id="services" className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan">Our Services</p>
              <h2 className="mt-4 max-w-3xl text-5xl font-black leading-tight tracking-[-0.045em] text-ink md:text-7xl">Creative tools for every scientific story.</h2>
            </div>
            <a href="#projects" className="inline-flex items-center gap-2 self-start rounded-full border border-black/10 bg-white px-5 py-3 font-bold text-ink transition hover:-translate-y-0.5 hover:border-cyan md:self-end">
              Explore the Portfolio
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.name} delay={index * 0.04}>
                <motion.article whileHover={{ y: -8, scale: 1.02 }} className={`group min-h-52 rounded-[2rem] border border-black/10 bg-white p-7 shadow-sm transition ${colorClass[service.color]}`}>
                  <div className="flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl border border-black/10 bg-paper transition group-hover:bg-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-neutral-300 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-ink" aria-hidden />
                  </div>
                  <h3 className="mt-12 text-2xl font-black tracking-[-0.03em] text-ink">{service.name}</h3>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
