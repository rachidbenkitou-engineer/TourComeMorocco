"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { useI18n } from "@/i18n/I18nProvider";
import { Reveal } from "@/components/Reveal";

const AVATARS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=180&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=180&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=180&q=80",
];

const SPRING = { type: "spring" as const, stiffness: 280, damping: 22 };

export function Testimonials() {
  const { t } = useI18n();
  const tm = t.testimonials;

  return (
    <section id="avis" className="max-w-[1280px] mx-auto px-[4.2%] py-2 pb-6 bg-[#fffaf4]" aria-labelledby="avis-heading">

      <Reveal from="scale">
        <div className="flex items-center justify-center gap-2.5 text-[#a77a2c] text-[11px] font-bold tracking-[0.4px] mb-2">
          <motion.span
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="h-px w-20 bg-[#c99b3c] origin-right block"
          />
          {tm.eyebrow}
          <motion.span
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="h-px w-20 bg-[#c99b3c] origin-left block"
          />
        </div>
      </Reveal>

      <Reveal from="up" delay={0.1}>
        <h2 id="avis-heading" className="font-serif text-[24px] font-semibold text-center tracking-[-0.8px] mb-3.5 text-ink">
          {tm.title}
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
        {tm.reviews.map((r, i) => (
          <Reveal key={r.name} delay={i * 0.1} from="up">
            <motion.article
              whileHover={{ y: -6, boxShadow: "0 14px_36px_rgba(0,0,0,.1)" }}
              whileTap={{ scale: 0.98 }}
              transition={SPRING}
              className="flex gap-2.5 items-center bg-white border border-[#eee7df] rounded-[11px] shadow-[0_3px_6px_rgba(0,0,0,.05)] p-[15px_17px] min-h-[94px] h-full cursor-default"
            >
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={SPRING}
                className="flex-shrink-0"
              >
                <Image
                  src={AVATARS[i]}
                  alt={r.name}
                  width={63}
                  height={63}
                  className="rounded-full object-cover w-[63px] h-[63px]"
                />
              </motion.div>
              <div>
                <p className="text-[9px] leading-[1.55] text-[#313a3b] m-0 mb-1.5">{r.text}</p>
                <b className="text-[10px] text-ink">{r.name}</b>
                <motion.span
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.35, duration: 0.4 }}
                  className="text-[#efa51e] text-[13px] tracking-[1px] ml-1.5 inline-block"
                >
                  ★★★★★
                </motion.span>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
