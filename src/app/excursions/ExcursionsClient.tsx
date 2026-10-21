"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";

import { excursions } from "@/data/excursions";
import { useBooking } from "@/components/BookingModal";
import { useI18n } from "@/i18n/I18nProvider";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";

type DurationFilter = "all" | "journee" | "demijournee";

function IconClock() {
  return (
    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>
    </svg>
  );
}
function IconArrow() {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  );
}
function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5"/>
    </svg>
  );
}

export default function ExcursionsClient() {
  const { open: openBooking } = useBooking();
  const { t, locale } = useI18n();
  const pg = t.pages.excursions;
  const ex = t.excursions;

  const searchParams = useSearchParams();
  const paramType    = searchParams.get("type") as DurationFilter | null;
  const [filter, setFilter] = useState<DurationFilter>(
    paramType && ["journee", "demijournee"].includes(paramType) ? paramType : "all"
  );
  const [syncedParams, setSyncedParams] = useState(searchParams);
  if (searchParams !== syncedParams) {
    setSyncedParams(searchParams);
    setFilter(paramType && ["journee", "demijournee"].includes(paramType) ? paramType : "all");
  }

  const FILTERS: { id: DurationFilter; label: string }[] = [
    { id: "all",        label: pg.filter.all        },
    { id: "journee",    label: pg.filter.journee    },
    { id: "demijournee", label: pg.filter.demijournee },
  ];

  const filteredExcursions = filter === "all"
    ? excursions
    : excursions.filter(e => e.durationKey === filter);

  return (
    <main className="min-h-screen bg-[#fff8f0]">

        {/* ── Hero header ── */}
        <div className="bg-[#062f35]" style={{ paddingTop: "78px" }}>
          <div className="max-w-[1280px] mx-auto px-[clamp(16px,4.5vw,56px)] py-14">
            <Reveal from="up" delay={0}>
              <p className="font-script text-[#f5b63f] mb-2"
                style={{ fontSize: "clamp(22px,2.8vw,34px)", transform: "rotate(-1.5deg)" }}>
                {ex.script}
              </p>
            </Reveal>
            <Reveal from="up" delay={0.1}>
              <h1 className="font-serif font-semibold text-white mb-4 leading-tight"
                style={{ fontSize: "clamp(28px,4vw,52px)" }}>
                {pg.heroTitle}
              </h1>
            </Reveal>
            <Reveal from="up" delay={0.18}>
              <p className="text-white/65 max-w-[500px] leading-relaxed" style={{ fontSize: "clamp(13px,1.15vw,15px)" }}>
                {pg.heroSubtitle}
              </p>
            </Reveal>
            <Reveal from="up" delay={0.26}>
              <div className="flex flex-wrap gap-3 mt-7">
                {pg.guarantees.map(item => (
                  <div key={item} className="flex items-center gap-1.5 bg-white/8 border border-white/12 rounded-full px-3 py-1.5 text-[11.5px] font-medium text-white/85">
                    <span className="text-[#f5b63f]"><IconCheck /></span>
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto px-[clamp(16px,4.5vw,56px)] py-14">

          {/* ── Filter chips ── */}
          <div className="flex flex-wrap gap-2 mb-10">
            {FILTERS.map(f => {
              const count = f.id === "all"
                ? excursions.length
                : excursions.filter(e => e.durationKey === f.id).length;
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFilter(f.id)}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[12px] font-semibold transition-all duration-200 cursor-pointer",
                    filter === f.id
                      ? "bg-[#f5b63f] text-[#1c2e2e] shadow-[0_3px_14px_rgba(245,182,63,.4)]"
                      : "bg-white border border-[#e4e9e5] text-[#5a7578] hover:border-[#f5b63f] hover:text-[#062f35]",
                  )}
                >
                  {f.label}
                  <span className={cn(
                    "text-[10px] font-bold rounded-full px-1.5 py-0.5 min-w-[18px] text-center leading-none",
                    filter === f.id ? "bg-[#1c2e2e]/15" : "bg-[#f0ebe3] text-[#8a9a9b]",
                  )}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* ── Grid ── */}
          {filteredExcursions.length === 0 ? (
            <div className="text-center py-20 text-[#5a7578] text-[14px]">
              {locale === "ar" ? "لا توجد رحلات لهذه الفئة." : locale === "en" ? "No excursions in this category." : locale === "it" ? "Nessuna escursione in questa categoria." : "Aucune excursion dans cette catégorie."}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
              {filteredExcursions.map((excursion, i) => (
                <motion.div key={excursion.slug} layout
                  initial={{ opacity: 0, y: 32, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.38, delay: Math.min(i * 0.07, 0.35), ease: [0.16, 1, 0.3, 1] }}
                >
                <Link href={`/${locale}/excursions/${excursion.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-lift transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
                >
                  <div className="relative h-[220px] overflow-hidden flex-shrink-0">
                    <Image src={excursion.image} alt={excursion.title[locale]} fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#031e22]/80 via-[#031e22]/20 to-transparent" />
                    <span className="absolute top-3 left-3 flex items-center gap-1.5 bg-[#062f35]/85 backdrop-blur-sm text-[#f5b63f] text-[10px] font-bold px-2.5 py-1 rounded-full">
                      <IconClock /> {excursion.duration[locale]}
                    </span>
                    {excursion.fromPrice && (
                      <span className="absolute top-3 right-3 bg-[#f5b63f] text-[#1c2e2e] text-[11px] font-bold px-2.5 py-1 rounded-full">
                        {pg.from} {excursion.fromPrice}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col flex-1 p-5">
                    <h2 className="font-serif text-[16px] font-semibold text-[#062f35] leading-tight mb-2">
                      {excursion.title[locale]}
                    </h2>
                    <p className="text-[12.5px] text-[#5a7578] leading-relaxed mb-3">
                      {excursion.short[locale]}
                    </p>
                    {excursion.highlights[locale].slice(0, 2).map((h, i) => (
                      <div key={i} className="flex items-start gap-1.5 mb-1">
                        <span className="mt-[3px] w-3.5 h-3.5 flex-shrink-0 rounded-full bg-[#f5b63f]/20 border border-[#f5b63f]/40 flex items-center justify-center text-[#b07d21]">
                          <IconCheck />
                        </span>
                        <span className="text-[11px] text-[#5a7578] leading-snug">{h}</span>
                      </div>
                    ))}
                    <div className="flex items-center justify-between border-t border-[#f0ebe3] pt-4 mt-4">
                      <span className="text-[10.5px] font-semibold text-[#a87627] uppercase tracking-[0.08em]">
                        {ex.cardLabel}
                      </span>
                      <span className="inline-flex items-center gap-1.5 bg-[#062f35] group-hover:bg-[#0a3d45] text-white text-[10.5px] font-semibold px-3.5 py-2 rounded-full transition-colors">
                        {ex.cardView} <IconArrow />
                      </span>
                    </div>
                  </div>
                </Link>
                </motion.div>
              ))}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* ── CTA band ── */}
        <div className="bg-[#062f35]">
          <div className="max-w-[1280px] mx-auto px-[clamp(16px,4.5vw,56px)] py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <p className="font-script text-[#f5b63f] mb-1"
                style={{ fontSize: "clamp(20px,2.2vw,28px)", transform: "rotate(-1deg)" }}>
                {pg.ctaScript}
              </p>
              <p className="text-white/65 text-[13.5px] max-w-[420px]">{pg.ctaSubtitle}</p>
            </div>
            <button type="button" onClick={() => openBooking(pg.ctaBtn)}
              className="flex items-center gap-3 rounded-full transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_12px_28px_rgba(245,182,63,.4)] whitespace-nowrap flex-shrink-0 cursor-pointer"
              style={{
                background: "linear-gradient(135deg,#f5c842 0%,#e8921e 100%)",
                fontSize: "11px", letterSpacing: "0.12em", fontWeight: 700,
                padding: "13px 14px 13px 26px", color: "#1c2e2e", textTransform: "uppercase",
              }}
            >
              {pg.ctaBtn}
              <span className="w-7 h-7 rounded-full bg-[#1c2e2e]/15 flex items-center justify-center text-[15px]">→</span>
            </button>
          </div>
        </div>

      </main>
  );
}
