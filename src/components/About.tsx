"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Award, Home, HeadphonesIcon, CreditCard } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { Reveal } from "@/components/Reveal";

const POINT_ICONS = [Award, Home, HeadphonesIcon, CreditCard];
const SPRING = { type: "spring" as const, stiffness: 260, damping: 24 };

export function About() {
  const { t, locale } = useI18n();
  const ab = t.about;
  const captionLines = ab.caption.split("\n");

  return (
    <section
      id="about"
      className="max-w-[1280px] mx-auto px-[4.2%] grid grid-cols-1 md:grid-cols-[1.15fr_1.1fr_.72fr] gap-7 items-center py-2 pb-7 min-h-[290px]"
    >
      {/* ── Polaroid collage — each photo animates individually ── */}
      <div className="relative h-[245px] min-w-0">

        <motion.div
          initial={{ opacity: 0, rotate: -18, scale: 0.82, y: 24 }}
          whileInView={{ opacity: 1, rotate: -8, scale: 1, y: 0 }}
          whileHover={{ scale: 1.1, rotate: -4, zIndex: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="absolute w-[34%] h-[57%] left-[2%] top-[18%] bg-white p-[7px] pb-5 shadow-[0_5px_12px_rgba(73,53,31,.17)] cursor-pointer"
          style={{ zIndex: 1 }}
        >
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&w=600&q=85"
              alt="Montgolfière au Maroc" fill className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, rotate: 18, scale: 0.82, y: 24 }}
          whileInView={{ opacity: 1, rotate: 8, scale: 1, y: 0 }}
          whileHover={{ scale: 1.1, rotate: 4, zIndex: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
          className="absolute w-[37%] h-[66%] left-[36%] top-[30%] bg-white p-[7px] pb-5 shadow-[0_5px_12px_rgba(73,53,31,.17)] cursor-pointer"
          style={{ zIndex: 2 }}
        >
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=85"
              alt="Médina marocaine" fill className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, rotate: -22, scale: 0.82, y: 24 }}
          whileInView={{ opacity: 1, rotate: -13, scale: 1, y: 0 }}
          whileHover={{ scale: 1.1, rotate: -7, zIndex: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="absolute w-[36%] h-[59%] left-[62%] top-[38%] bg-white p-[7px] pb-5 shadow-[0_5px_12px_rgba(73,53,31,.17)] cursor-pointer"
          style={{ zIndex: 3 }}
        >
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=600&q=85"
              alt="Plage marocaine" fill className="object-cover"
            />
          </div>
        </motion.div>

        <motion.span
          initial={{ opacity: 0, x: 12, rotate: -15 }}
          whileInView={{ opacity: 1, x: 0, rotate: -20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute top-[1%] right-[2%] text-[22px] text-navy"
        >
          〰 · · · · ✈
        </motion.span>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute bottom-0 left-[24%] font-script text-[27px]/[1] -rotate-[8deg] text-[#152d2d] m-0"
        >
          {captionLines[0]}<br />{captionLines[1]}
        </motion.p>
      </div>

      {/* ── Copy — line by line ── */}
      <div className="about-copy flex flex-col gap-1">
        <Reveal delay={0.05}>
          <p className="text-[#a77928] font-bold text-[11px] tracking-[0.4px] m-0 mb-2.5">
            {ab.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <h2 className="font-serif text-[25px] font-semibold tracking-[-0.8px] mb-3.5">
            {ab.title}
          </h2>
        </Reveal>
        <Reveal delay={0.19}>
          <p className="text-[11px] leading-[1.6] text-[#393f3e] mb-4">
            {ab.desc}
          </p>
        </Reveal>
        <Reveal delay={0.26}>
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }} transition={SPRING} className="inline-block">
            <Link
              href="#contact"
              className="inline-flex items-center gap-4 bg-gold text-[#182c2c] text-[11px] font-bold px-[17px] py-[10px] rounded-[30px] hover:shadow-[0_7px_20px_rgba(0,0,0,.15)] transition-shadow duration-200"
            >
              {ab.cta} <span className="text-[18px] leading-[10px]">{locale === "ar" ? "←" : "→"}</span>
            </Link>
          </motion.div>
        </Reveal>
      </div>

      {/* ── Points — slide from right with stagger ── */}
      <div className="flex flex-col gap-4">
        {ab.points.map((point, i) => {
          const Icon = POINT_ICONS[i];
          return (
            <Reveal key={point.label} delay={i * 0.1} from="right">
              <motion.article
                whileHover={{ x: -4 }}
                transition={SPRING}
                className="flex gap-3 items-center"
              >
                <motion.span
                  whileHover={{ scale: 1.15, rotate: 8 }}
                  transition={SPRING}
                  className="w-[43px] h-[43px] grid place-items-center flex-shrink-0 rounded-full bg-[#f8ead5] text-[#b17c2c]"
                >
                  <Icon size={20} strokeWidth={1.5} />
                </motion.span>
                <div>
                  <b className="block text-[11px] font-bold text-ink">{point.label}</b>
                  <p className="text-[10px] text-muted mt-1 m-0">{point.desc}</p>
                </div>
              </motion.article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
