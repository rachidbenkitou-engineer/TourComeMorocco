"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { Reveal } from "@/components/Reveal";
import { transfers } from "@/data/transfers";

type L3 = "fr" | "en" | "ar";

const COUNTRY: Record<string, string> = {
  fr: "Maroc", en: "Morocco", ar: "المغرب", it: "Marocco",
};

const SPRING = { type: "spring" as const, stiffness: 280, damping: 22 };

export function Destinations() {
  const { t, locale } = useI18n();
  const tr  = t.destinations;
  const loc = (locale === "it" ? "fr" : locale) as L3;

  const HOME_SLUGS = ["fes", "chefchaouen", "imlil", "ouarzazate", "dades", "agafay"];
  const allDestinations = transfers.filter(d => !d.from && d.category !== "airport");
  const destinations = HOME_SLUGS
    .map(slug => allDestinations.find(d => d.slug === slug))
    .filter(Boolean) as typeof allDestinations;

  return (
    <section id="destinations" className="bg-[#fff8f0] -mt-4 sm:-mt-16 pt-0 pb-16 sm:pb-20" aria-labelledby="dest-heading">
      <div className="max-w-[1280px] mx-auto px-[clamp(16px,4.5vw,56px)]">

        {/* Header */}
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
              <h2 id="dest-heading" className="font-serif font-semibold text-[#062f35] leading-tight"
                style={{ fontSize: "clamp(24px,3.2vw,40px)" }}>
                {tr.title}
              </h2>
            </Reveal>
            <Reveal from="up" delay={0.18}>
              <p className="text-[#5a7578] mt-2 max-w-[440px]" style={{ fontSize: "clamp(13px,1.1vw,15px)" }}>
                {tr.subtitle}
              </p>
            </Reveal>
          </div>
          <Reveal from="right" delay={0.14}>
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }} transition={SPRING}>
              <Link href="/transfers"
                className="flex items-center gap-2 text-[12.5px] font-semibold text-[#062f35] border border-[#062f35] hover:bg-[#062f35] hover:text-white px-5 py-2.5 rounded-full transition-colors duration-200 whitespace-nowrap self-start sm:self-auto">
                {tr.viewAll}
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </motion.div>
          </Reveal>
        </div>

        {/* Grid — 6 destinations */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
          {destinations.map((d, i) => (
            <Reveal key={d.slug} delay={(i % 3) * 0.08}>
              <motion.div
                whileHover={{ y: -10, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={SPRING}
                className="h-full"
              >
                <Link href={`/transfers/${d.slug}`}
                  className="group relative h-[176px] lg:h-[220px] rounded-2xl overflow-hidden block bg-[#ddd] shadow-card hover:shadow-lift transition-shadow duration-300"
                >
                  <Image
                    src={`/images/${d.image}`}
                    alt={d.to[loc]}
                    fill
                    className="object-cover transition-transform duration-600 group-hover:scale-110"
                    sizes="(max-width:640px) 50vw, (max-width:1024px) 25vw, 25vw"
                  />
                  <div className="absolute inset-[40%_0_0_0] bg-gradient-to-t from-[#031e22]/85 to-transparent" />
                  <span className="absolute z-10 bottom-3 left-3 right-3 flex items-end justify-between text-white">
                    <span>
                      <b className="flex items-center gap-1 text-[13px] font-bold leading-tight">
                        <MapPin size={11} className="text-[#f5b63f] flex-shrink-0" />
                        {d.to[loc]}
                      </b>
                      <small className="block text-[11px] text-white/70 mt-0.5 ml-[15px]">
                        {COUNTRY[locale] ?? COUNTRY.fr}
                      </small>
                    </span>
                    <motion.span
                      whileHover={{ scale: 1.15, x: locale === "ar" ? -3 : 3 }}
                      transition={SPRING}
                      className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-[#f5b63f]/20 border border-[#f5b63f]/60 text-[#f5b63f]"
                    >
                      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={locale === "ar" ? "rotate-180" : ""}>
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </motion.span>
                  </span>
                </Link>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-8 flex justify-center">
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }} transition={SPRING}>
            <Link
              href="/transfers"
              className="flex items-center gap-3 rounded-full hover:shadow-[0_12px_28px_rgba(245,182,63,.4)] transition-all duration-300 whitespace-nowrap"
              style={{
                background: "linear-gradient(135deg,#f5c842 0%,#e8921e 100%)",
                fontSize: "11px", letterSpacing: "0.12em", fontWeight: 700,
                padding: "13px 14px 13px 26px", color: "#1c2e2e", textTransform: "uppercase",
              }}
            >
              {locale === "ar" ? "عرض جميع الوجهات" : locale === "en" ? "View all destinations" : locale === "it" ? "Vedi tutte le destinazioni" : "Voir toutes les destinations"}
              <span className="w-7 h-7 rounded-full bg-[#1c2e2e]/15 flex items-center justify-center text-[15px]">
                {locale === "ar" ? "←" : "→"}
              </span>
            </Link>
          </motion.div>
        </Reveal>

      </div>
    </section>
  );
}
