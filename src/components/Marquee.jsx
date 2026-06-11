import { motion, useAnimationControls, useReducedMotion } from "framer-motion";
import { useEffect } from "react";
import { marqueeImages } from "../data/site";

export default function Marquee({ text, logos, reverse = false, compact = false }) {
  const reduceMotion = useReducedMotion();
  const controls = useAnimationControls();
  const items = logos || marqueeImages;
  const duplicated = [...items, ...items];
  const animation = { x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] };
  const transition = { duration: compact ? 18 : 28, repeat: Infinity, ease: "linear" };

  useEffect(() => {
    if (!reduceMotion) {
      controls.start(animation, { transition });
    }
  }, [controls, reduceMotion, reverse, compact]);

  if (reduceMotion) {
    return (
      <div className="overflow-hidden py-4">
        <div className="flex gap-4 overflow-hidden">
          {items.slice(0, 6).map((item, index) => (
            <MarqueeItem key={`${item}-${index}`} item={item} text={text} compact={compact} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden py-4" onMouseEnter={() => controls.stop()} onMouseLeave={() => controls.start(animation, { transition })}>
      <motion.div
        className="flex w-max gap-4"
        animate={controls}
      >
        {duplicated.map((item, index) => (
          <MarqueeItem key={`${item}-${index}`} item={item} text={text} compact={compact} />
        ))}
      </motion.div>
    </div>
  );
}

function MarqueeItem({ item, text, compact }) {
  if (text) {
    return (
      <span className="whitespace-nowrap rounded-full border border-black/10 bg-white px-8 py-4 text-2xl font-black tracking-tight text-ink shadow-sm md:text-4xl">
        {item}
      </span>
    );
  }

  if (item.startsWith("/")) {
    return (
      <figure className={`${compact ? "h-24 w-36" : "h-40 w-60 md:h-52 md:w-80"} overflow-hidden rounded-[2rem] border border-black/10 bg-white p-2 shadow-card`}>
        <img src={item} alt="Scientific visual preview" loading="lazy" className="h-full w-full rounded-[1.5rem] object-cover" />
      </figure>
    );
  }

  return (
    <span className="flex h-16 min-w-44 items-center justify-center rounded-2xl border border-black/10 bg-white/80 px-8 text-lg font-black text-neutral-400 grayscale transition duration-300 hover:text-ink hover:grayscale-0">
      {item}
    </span>
  );
}
