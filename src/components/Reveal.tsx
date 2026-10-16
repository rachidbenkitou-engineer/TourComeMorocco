"use client";
import { useRef } from "react";
import { motion, useInView, type TargetAndTransition } from "motion/react";

type From = "up" | "left" | "right" | "scale";

const HIDDEN: Record<From, TargetAndTransition> = {
  up:    { opacity: 0, y: 48 },
  left:  { opacity: 0, x: -48 },
  right: { opacity: 0, x: 48 },
  scale: { opacity: 0, scale: 0.88 },
};

const VISIBLE: Record<From, TargetAndTransition> = {
  up:    { opacity: 1, y: 0 },
  left:  { opacity: 1, x: 0 },
  right: { opacity: 1, x: 0 },
  scale: { opacity: 1, scale: 1 },
};

export function Reveal({
  children,
  delay = 0,
  className,
  from = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  from?: From;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={HIDDEN[from]}
      animate={inView ? VISIBLE[from] : HIDDEN[from]}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
