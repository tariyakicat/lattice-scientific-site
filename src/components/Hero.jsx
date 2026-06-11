import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { hero } from "../data/site";

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.25], [1, 1.06]);
  const y = useTransform(scrollYProgress, [0, 0.25], [0, reduceMotion ? 0 : -36]);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };
  const item = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section id="top" className="relative overflow-hidden px-5 pt-28 md:px-8 md:pt-34">
      <motion.div variants={container} initial="hidden" animate="show" className="mx-auto max-w-7xl text-center">
        <motion.h1 variants={item} className="mx-auto max-w-6xl text-balance text-5xl font-black leading-[0.92] tracking-[-0.06em] text-ink sm:text-6xl md:text-8xl lg:text-[7.35rem]">
          {hero.title}
        </motion.h1>
        <motion.p variants={item} className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-8 text-neutral-600 md:text-2xl">
          {hero.subtitle}
        </motion.p>
        <motion.div variants={item} className="mt-7 flex justify-center">
          <a href="#agency" className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-base font-bold text-white transition hover:bg-magenta">
            Learn More
            <ArrowDownRight className="h-5 w-5 transition group-hover:translate-x-1 group-hover:translate-y-1" aria-hidden />
          </a>
        </motion.div>
      </motion.div>

      <motion.figure style={{ scale, y }} className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-[3rem] border border-black/10 bg-white p-3 shadow-soft">
        <img src={hero.image} alt="Colorful scientific illustration hero visual" fetchPriority="high" className="h-[340px] w-full rounded-[2.3rem] object-cover md:h-[520px]" />
      </motion.figure>
    </section>
  );
}
