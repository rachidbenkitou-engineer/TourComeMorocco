"use client";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 24 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              opacity: { duration: 0.42, ease: "easeOut" },
              y: { duration: 0.58, ease: [0.16, 1, 0.3, 1] },
            },
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.18, ease: "easeIn" },
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
