import { ArrowUpRight } from "lucide-react";
import About from "./components/About";
import ClientsWall from "./components/ClientsWall";
import CTABanner from "./components/CTABanner";
import FeaturedProjects from "./components/FeaturedProjects";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Nav from "./components/Nav";
import Reveal from "./components/Reveal";
import ServicesGrid from "./components/ServicesGrid";
import { valueLinks } from "./data/site";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        <section id="gallery" className="overflow-hidden py-14 md:py-20" aria-label="Scientific visual gallery preview">
          <Marquee />
        </section>

        <section id="agency" className="px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <Reveal>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-magenta">Agency</p>
              <h2 className="mt-4 max-w-4xl text-5xl font-black leading-tight tracking-[-0.05em] text-ink md:text-7xl">
                We create impactful designs to make your science stand out.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg leading-8 text-neutral-600">
                Lattice Visual helps researchers, journals and biotech teams turn complex methods, mechanisms and datasets into precise editorial visuals for publication, pitches and public communication.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {valueLinks.map((link) => (
                  <a key={link} href="#services" className="group flex items-center justify-between rounded-2xl border border-black/10 bg-white px-5 py-4 text-sm font-black text-ink shadow-sm transition hover:-translate-y-0.5 hover:border-cyan">
                    {link}
                    <ArrowUpRight className="h-4 w-4 text-neutral-300 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-cyan" aria-hidden />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <ServicesGrid />
        <ClientsWall />
        <FeaturedProjects />
        <CTABanner />
        <About />
      </main>
      <Footer />
    </>
  );
}
