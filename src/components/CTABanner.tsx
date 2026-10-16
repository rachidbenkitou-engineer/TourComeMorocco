"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { useI18n } from "@/i18n/I18nProvider";
import { Reveal } from "@/components/Reveal";

const SPRING = { type: "spring" as const, stiffness: 280, damping: 22 };

export function CTABanner() {
  const { t, locale } = useI18n();
  const ct = t.cta;

  return (
    <section
      id="sejours"
      className="relative flex items-center justify-center gap-[clamp(25px,7vw,90px)] text-white rounded-[19px_19px_0_0] overflow-hidden min-h-[108px] py-5 px-[5%]"
      style={{
        background:
          "linear-gradient(90deg,rgba(0,66,62,.85),rgba(0,62,60,.74))," +
          "url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1800&q=85') center 50%/cover",
      }}
    >
      <motion.span
        initial={{ opacity: 0, rotate: -35, scale: 0.5 }}
        whileInView={{ opacity: 1, rotate: -25, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-[16%] top-3 text-[29px] text-gold"
      >
        ✈
      </motion.span>

      <Reveal from="left">
        <div className="text-center">
          <h2 className="font-serif text-[25px] font-semibold text-white m-0">
            {ct.title}
          </h2>
          <p className="text-[12px] text-center text-white/80 mt-1.5 m-0">
            {ct.subtitle}
          </p>
        </div>
      </Reveal>

      <Reveal from="right" delay={0.12}>
        <motion.div
          whileHover={{ scale: 1.07, y: -3 }}
          whileTap={{ scale: 0.96 }}
          transition={SPRING}
        >
          <Link
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-4 bg-gold text-[#182c2c] text-[11px] font-bold px-5 py-3 rounded-[30px] hover:shadow-[0_8px_24px_rgba(245,182,63,.5)] transition-shadow duration-200 whitespace-nowrap"
          >
            {ct.button} <span className="text-[18px] leading-[10px]">{locale === "ar" ? "←" : "→"}</span>
          </Link>
        </motion.div>
      </Reveal>
    </section>
  );
}
