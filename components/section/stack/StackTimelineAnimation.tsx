"use client";

import { motion, useReducedMotion } from "motion/react";
import type { StacklineItem } from "./stacklineData";

type StackTimelineAnimationProps = {
  stack: StacklineItem;
  index: number;
};

export default function StackTimelineAnimation({
  stack,
  index,
}: StackTimelineAnimationProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="group rounded-xl border border-(--border-gold) bg-(--surface-800)/70 p-5 transition-colors duration-300 hover:border-(--gold-primary) md:p-7"
    >
      <div className="mb-4 flex items-center gap-4">
        <span className="font-mono text-xs text-(--gold-primary)">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="text-xl font-bold text-(--text-primary) md:text-2xl">
          {stack.title}
        </h3>
      </div>

      <p className="max-w-2xl text-sm leading-7 text-(--text-secondary)">
        {stack.description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {stack.technology.map((technology) => (
          <li
            key={technology}
            className="rounded-md border border-(--border) bg-(--bg-900) px-3 py-1.5 font-mono text-xs text-(--gold-light) transition-colors group-hover:border-(--border-strong)"
          >
            {technology}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
