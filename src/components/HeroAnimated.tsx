"use client";
import { motion } from "framer-motion";
import ContactButton from "./ContactButton";
import { useLanguage } from "@/context/LanguageContext";

const ease = [0.22, 1, 0.36, 1] as const;

export default function HeroAnimated() {
  const { tr } = useLanguage();

  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease }}
      >
        {tr.hero.title}
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.25, ease }}
      >
        {tr.hero.subtitle}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5, ease }}
      >
        <ContactButton className="btn-get-started">{tr.hero.contact}</ContactButton>
      </motion.div>

      <motion.div
        className="d-block d-md-none"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.75, ease }}
        style={{ marginTop: "20px", textAlign: "center", fontStyle: "italic", display: "flex", flexDirection: "column", alignItems: "center", gap: "3px" }}
      >
        {tr.hero.lines.map((line, i) => (
          <span key={i} style={{ color: "#fff", fontSize: "13px", letterSpacing: "0.2px" }}>
            {line}
          </span>
        ))}
      </motion.div>
    </>
  );
}
