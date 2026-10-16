"use client";
import { useRef } from "react";
import { motion, useInView, type TargetAndTransition } from "motion/react";

export function Reveal({
  children,
  delay = 0,
  className,
  from = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  from?: "up" | "left" | "right" | "scale";
}) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });

  const hidden: TargetAndTransition = (({
    up:    { opacity: 0, y: 40,  scale: 0.97 },
    left:  { opacity: 0, x: -40, scale: 0.97 },
    right: { opacity: 0, x: 40,  scale: 0.97 },
    scale: { opacity: 0, scale: 0.92 },
  }) as Record<string, TargetAndTransition>)[from];

  const visible: TargetAndTransition = (({
    up:    { opacity: 1, y: 0,  scale: 1 },
    left:  { opacity: 1, x: 0,  scale: 1 },
    right: { opacity: 1, x: 0,  scale: 1 },
    scale: { opacity: 1, scale: 1 },
  }) as Record<string, TargetAndTransition>)[from];

  return (
    <motion.div
      ref={ref}
      initial={hidden}
      animate={inView ? visible : undefined}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
