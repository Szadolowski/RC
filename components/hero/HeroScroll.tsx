"use client";

import { Mouse } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export default function HeroScroll() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 sm:bottom-8"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
    >
      <motion.div
        animate={prefersReducedMotion ? undefined : { y: [0, 5, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Mouse
          size={30}
          strokeWidth={1.25}
          className="text-(--gold-dark)"
          aria-hidden="true"
        />
      </motion.div>
      <motion.span
        className="whitespace-nowrap text-[11px] leading-[125%] tracking-[-0.16px] text-(--text-secondary) sm:text-xs"
        animate={
          prefersReducedMotion ? undefined : { opacity: [0.55, 1, 0.55] }
        }
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        Scrolluj dalej
      </motion.span>
    </motion.div>
  );
}
