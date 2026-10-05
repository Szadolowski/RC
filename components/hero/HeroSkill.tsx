"use client";

import {
  Activity,
  Braces,
  Code2,
  Container,
  Network,
  Server,
  Terminal,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const skills = [
  { label: "Frontend", detail: "React / Next.js", icon: Code2 },
  { label: "Backend", detail: "Node.js / API", icon: Server },
  { label: "TypeScript", detail: "Typed systems", icon: Braces },
  { label: "DevOps", detail: "Docker / Linux", icon: Container },
  { label: "Automation", detail: "Reliable workflows", icon: Terminal },
  { label: "Networks", detail: "Infrastructure", icon: Network },
  { label: "Monitoring", detail: "Signals / uptime", icon: Activity },
];

const skillTrackWidth = skills.length * 180;

function SkillItems({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div
      aria-hidden={duplicate}
      className="flex h-full min-w-max items-stretch"
    >
      {skills.map(({ label, detail, icon: Icon }) => (
        <div
          key={`${duplicate ? "duplicate-" : ""}${label}`}
          className="flex h-full w-45 shrink-0 items-center gap-3 border-r border-(--border-strong) px-4 first:border-l"
        >
          <div className="flex size-8.5 shrink-0 items-center justify-center rounded-lg border border-(--gold-dark) text-(--gold-light)">
            <Icon size={17} strokeWidth={1.5} aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <strong className="block truncate text-xs font-bold leading-[125%] text-(--text-primary)">
              {label}
            </strong>
            <small className="mt-1 block text-[10px] leading-3 text-(--text-muted)">
              {detail}
            </small>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function HeroSkill() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;

    if (!container || !track) {
      return;
    }

    const updateOverflow = () => {
      setIsOverflowing(track.offsetWidth > container.clientWidth);
    };

    updateOverflow();
    const observer = new ResizeObserver(updateOverflow);
    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  const shouldAnimate = isOverflowing && !prefersReducedMotion;

  return (
    <div
      ref={containerRef}
      className="absolute bottom-20 left-1/2 z-20 h-24 w-screen -translate-x-1/2 overflow-hidden border-y border-(--gold-primary)/20 bg-[rgba(7,7,6,0.58)] backdrop-blur-sm"
    >
      {isOverflowing ? (
        <motion.div
          ref={trackRef}
          className="flex h-full min-w-max"
          animate={shouldAnimate ? { x: [0, -skillTrackWidth] } : { x: 0 }}
          transition={
            shouldAnimate
              ? { duration: 40, ease: "linear", repeat: Infinity }
              : { duration: 0 }
          }
        >
          <SkillItems />
          <SkillItems duplicate />
        </motion.div>
      ) : (
        <div ref={trackRef} className="mx-auto flex h-full w-fit max-w-360">
          <SkillItems />
        </div>
      )}
    </div>
  );
}
