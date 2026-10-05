"use client";

import { motion } from "motion/react";

const ctaClassName = `
  group inline-flex h-13.5 w-41.5 items-center justify-center
  rounded-[9px] border border-[#6F542D]
  bg-[rgba(10,9,8,0.72)]
  text-[15px] font-bold leading-[127%] tracking-[-0.16px]
  text-[#F5F1E9] will-change-transform
  transition-[transform,background-color,border-color,box-shadow]
  duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
  hover:-translate-y-0.5 hover:scale-[1.02]
  hover:border-[#8A6938] hover:bg-[rgba(18,15,12,0.82)]
  hover:shadow-[0_0_24px_rgba(111,84,45,0.16)]
  focus-visible:outline-none focus-visible:ring-2
  focus-visible:ring-(--gold-light)
`;

export default function HeroButton() {
  return (
    <motion.a
      href="#about"
      className={ctaClassName}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: 0.45, ease: "easeOut" }}
    >
      Poznaj mnie&nbsp;
      <span
        className="ml-1 inline-block transition-transform duration-500 ease-out group-hover:translate-x-1"
        aria-hidden="true"
      >
        →
      </span>
    </motion.a>
  );
}
