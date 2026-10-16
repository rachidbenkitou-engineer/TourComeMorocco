"use client";
import { useRef, ReactNode } from "react";
import { motion, useInView } from "motion/react";

interface Props {
  children: ReactNode;
  delay?: number;
  /** "up" (default), "left", "right", "scale" */
  from?: "up" | "left" | "right" | "scale";
  className?: string;
}

const HIDDEN: Record<NonNullable<Props["from"]>, object> = {
  up:    { opacity: 0, y: 48 },
  left:  { opacity: 0, x: -48 },
  right: { opacity: 0, x: 48 },
  scale: { opacity: 0, scale: 0.94 },
};

const VISIBLE: Record<NonNullable<Props["from"]>, object> = {
  up:    { opacity: 1, y: 0 },
  left:  { opacity: 1, x: 0 },
  right: { opacity: 1, x: 0 },
  scale: { opacity: 1, scale: 1 },
};

export function ScrollReveal({ children, delay = 0, from = "up", className }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });

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
