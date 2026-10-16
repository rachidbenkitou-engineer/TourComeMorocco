"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { tours } from "@/data/tours";
import { useI18n } from "@/i18n/I18nProvider";
import { Reveal } from "@/components/Reveal";

function IconClock() {
  return (
    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>
    </svg>
  );
}
function IconArrow({ rtl }: { rtl?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      style={rtl ? { transform: "scaleX(-1)" } : undefined}>
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  );
}

const SPRING = { type: "spring" as const, stiffness: 280, damping: 22 };
const featured = tours.filter(t => t.featured);

export function Tours() {
  const { t, locale } = useI18n();
  const tr  = t.tours;
  const loc = locale as "fr" | "en" | "ar";

  return (
    <section id="tours" className="-mt-12 sm:-mt-20 pt-0 pb-16 bg-[#fff8f0]">
      <div className="max-w-[1280px] mx-auto px-[clamp(16px,4.5vw,56px)]">

        {/* Header — per-element stagger */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <Reveal from="left">
              <div className="flex items-center gap-2.5 mb-1">
                <span className="h-px w-7 bg-[#f5b63f] opacity-70 flex-shrink-0" aria-hidden />
                <p className="font-script text-[#f5b63f]"
                  style={{ fontSize: "clamp(20px,2.2vw,28px)", transform: "rotate(-1.5deg)" }}>
                  {tr.script}
                </p>
              </div>
            </Reveal>
            <Reveal from="up" delay={0.1}>
              <h2 className="font-serif font-semibold text-[#062f35] leading-tight"
                style={{ fontSize: "clamp(26px,3.2vw,42px)" }}>
                {tr.title}
              </h2>
            </Reveal>
            <Reveal from="up" delay={0.18}>
              <p className="text-[#5a7578] text-[13.5px] mt-2 max-w-[460px] leading-relaxed">
                {tr.subtitle}
              </p>
            </Reveal>
          </div>
          <Reveal from="right" delay={0.14}>
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }} transition={SPRING}>
              <Link href="/tours"
                className="flex items-center gap-2 text-[12.5px] font-semibold text-[#062f35] border border-[#062f35] hover:bg-[#062f35] hover:text-white px-5 py-2.5 rounded-full transition-colors duration-200 whitespace-nowrap self-start sm:self-auto">
                {tr.seeAll} <IconArrow rtl={locale === "ar"} />
              </Link>
            </motion.div>
          </Reveal>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((tour, i) => (
            <Reveal key={tour.slug} delay={i * 0.09}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={SPRING}
                className="h-full"
              >
                <Link href={`/tours/${tour.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-lift transition-shadow duration-300 flex flex-col h-full"
                >
                  <div className="relative h-[220px] overflow-hidden flex-shrink-0">
                    <Image src={tour.image} alt={tour.title[loc]} fill
                      className="object-cover transition-transform duration-700 group-hover:scale-108"
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#031e22]/80 via-[#031e22]/20 to-transparent" />
                    <motion.span
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.09 + 0.3, duration: 0.5 }}
                      className="absolute top-3 left-3 flex items-center gap-1.5 bg-[#062f35]/85 backdrop-blur-sm text-[#f5b63f] text-[10px] font-bold px-2.5 py-1 rounded-full"
                    >
                      <IconClock /> {tour.days[loc]}
                    </motion.span>
                  </div>
                  <div className="flex flex-col flex-1 p-5">
                    <h3 className="font-serif text-[16px] font-semibold text-[#062f35] leading-tight mb-2">
                      {tour.title[loc]}
                    </h3>
                    <p className="text-[12.5px] text-[#5a7578] leading-relaxed flex-1 mb-4">
                      {tour.short[loc]}
                    </p>
                    <div className="flex items-center justify-between border-t border-[#f0ebe3] pt-4 mt-auto">
                      <span className="text-[10.5px] font-semibold text-[#a87627] uppercase tracking-[0.08em]">
                        {tr.cardLabel}
                      </span>
                      <span className="inline-flex items-center gap-1.5 bg-[#062f35] group-hover:bg-[#0a3d45] text-white text-[10.5px] font-semibold px-3.5 py-2 rounded-full transition-colors duration-200">
                        {tr.cardView} <IconArrow rtl={locale === "ar"} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={0.15} className="mt-10 flex justify-center">
          <motion.div whileHover={{ scale: 1.06, y: -3 }} whileTap={{ scale: 0.97 }} transition={SPRING}>
            <Link href="/tours"
              className="flex items-center gap-2 text-[12px] font-bold text-[#062f35] border-2 border-[#062f35] px-8 py-3 rounded-full hover:bg-[#062f35] hover:text-white transition-colors duration-200">
              {tr.seeAll} <IconArrow rtl={locale === "ar"} />
            </Link>
          </motion.div>
        </Reveal>

      </div>
    </section>
  );
}
