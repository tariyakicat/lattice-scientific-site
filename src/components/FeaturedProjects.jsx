import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { projects } from "../data/site";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-orange">Featured Projects</p>
              <h2 className="mt-4 text-5xl font-black tracking-[-0.045em] text-ink md:text-7xl">Selected visuals built for publication impact.</h2>
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-bold text-ink shadow-sm transition hover:-translate-y-0.5 hover:bg-orange hover:text-white">
              Start a project
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.05}>
              <motion.article whileHover={{ y: -8 }} className="group overflow-hidden rounded-[2rem] border border-black/10 bg-white p-3 shadow-card">
                <div className="overflow-hidden rounded-[1.5rem] bg-paper">
                  <img src={project.image} alt={project.title} loading="lazy" className="h-72 w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <span className="inline-flex rounded-full bg-paper px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-neutral-500 transition group-hover:bg-magenta group-hover:text-white">
                    {project.category}
                  </span>
                  <h3 className="mt-5 text-2xl font-black leading-tight tracking-[-0.035em] text-ink">{project.title}</h3>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
