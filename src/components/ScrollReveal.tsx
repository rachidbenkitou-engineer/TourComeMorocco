"use client";
import { useRef } from "react";
import { motion, useInView, type TargetAndTransition } from "motion/react";
import { ReactNode } from "react";

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

export function ScrollReveal({
  children,
  delay = 0,
  from = "up",
  className,
}: {
  children: ReactNode;
  delay?: number;
  from?: From;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={HIDDEN[from]}
      animate={inView ? VISIBLE[from] : HIDDEN[from]}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
