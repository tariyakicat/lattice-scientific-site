import { motion, useReducedMotion } from "framer-motion";

export default function Reveal({ children, className = "", delay = 0, as = "div" }) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as] || motion.div;

  return (
    <Component
      className={className}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, ease: "easeOut", delay }}
    >
      {children}
    </Component>
  );
}
