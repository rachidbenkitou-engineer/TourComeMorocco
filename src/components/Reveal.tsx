"use client";
import { useEffect, useState } from "react";
import { motion, type TargetAndTransition } from "motion/react";

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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div
      key={mounted ? "c" : "s"}
      initial={HIDDEN[from]}
      whileInView={VISIBLE[from]}
      viewport={{ once: true, margin: "-60px 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
