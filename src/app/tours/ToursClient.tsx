"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";

import { tours } from "@/data/tours";
import { useBooking } from "@/components/BookingModal";
import { useI18n } from "@/i18n/I18nProvider";
import { cn } from "@/lib/utils";

type DureeFilter = "all" | "court" | "moyen" | "long";

function getCategory(daysNum: number): "court" | "moyen" | "long" {
  if (daysNum <= 3) return "court";
  if (daysNum <= 7) return "moyen";
  return "long";
}

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

export default function ToursClient() {
  const { open: openBooking } = useBooking();
  const { t, locale } = useI18n();
  const pg  = t.pages.tours;
  const tr  = t.tours;
  const loc = locale as "fr" | "en" | "ar" | "it";

  const searchParams = useSearchParams();
  const paramDuree   = searchParams.get("duree") as DureeFilter | null;
  const [filter, setFilter] = useState<DureeFilter>(
    paramDuree && ["court", "moyen", "long"].includes(paramDuree) ? paramDuree : "all"
  );
  const [syncedParams, setSyncedParams] = useState(searchParams);
  if (searchParams !== syncedParams) {
    setSyncedParams(searchParams);
    setFilter(paramDuree && ["court", "moyen", "long"].includes(paramDuree) ? paramDuree : "all");
  }

  const FILTERS: { id: DureeFilter; label: string }[] = [
    { id: "all",   label: pg.filter.all   },
    { id: "court", label: pg.filter.court },
    { id: "moyen", label: pg.filter.moyen },
    { id: "long",  label: pg.filter.long  },
  ];

  const filteredTours = filter === "all"
    ? tours
    : tours.filter(t => getCategory(t.daysNum) === filter);

  return (
    <main className="min-h-screen bg-[#fff8f0]">

        {/* ── Hero header ── */}
        <div className="bg-[#062f35]" style={{ paddingTop: "78px" }}>
          <div className="max-w-[1280px] mx-auto px-[clamp(16px,4.5vw,56px)] py-14">
            <p className="font-script text-[#f5b63f] mb-2"
              style={{ fontSize: "clamp(22px,2.8vw,34px)", transform: "rotate(-1.5deg)" }}>
              {tr.script}
            </p>
            <h1 className="font-serif font-semibold text-white mb-4 leading-tight"
              style={{ fontSize: "clamp(28px,4vw,52px)" }}>
              {pg.heroTitle}
            </h1>
            <p className="text-white/65 max-w-[500px] leading-relaxed" style={{ fontSize: "clamp(13px,1.15vw,15px)" }}>
              {pg.heroSubtitle}
            </p>
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto px-[clamp(16px,4.5vw,56px)] py-14">

          {/* ── Filter chips ── */}
          <div className="flex flex-wrap gap-2 mb-10">
            {FILTERS.map(f => {
              const count = f.id === "all"
                ? tours.length
                : tours.filter(t => getCategory(t.daysNum) === f.id).length;
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
          {filteredTours.length === 0 ? (
            <div className="text-center py-20 text-[#5a7578] text-[14px]">
              {locale === "ar" ? "لا توجد جولات لهذه الفئة." : locale === "en" ? "No tours in this category." : "Aucun tour dans cette catégorie."}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
              {filteredTours.map(tour => (
                <motion.div key={tour.slug} layout
                  initial={{ opacity: 0, y: 20, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0,  scale: 1    }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.22 }}
                >
                <Link href={`/${locale}/tours/${tour.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-lift transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
                >
                  <div className="relative h-[220px] overflow-hidden flex-shrink-0">
                    <Image src={tour.image} alt={tour.title[loc]} fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#031e22]/80 via-[#031e22]/20 to-transparent" />
                    <span className="absolute top-3 left-3 flex items-center gap-1.5 bg-[#062f35]/85 backdrop-blur-sm text-[#f5b63f] text-[10px] font-bold px-2.5 py-1 rounded-full">
                      <IconClock /> {tour.days[loc]}
                    </span>
                  </div>
                  <div className="flex flex-col flex-1 p-5">
                    <h2 className="font-serif text-[16px] font-semibold text-[#062f35] leading-tight mb-2">
                      {tour.title[loc]}
                    </h2>
                    <p className="text-[12.5px] text-[#5a7578] leading-relaxed flex-1 mb-4">
                      {tour.short[loc]}
                    </p>
                    <div className="flex items-center justify-between border-t border-[#f0ebe3] pt-4 mt-auto">
                      <span className="text-[10.5px] font-semibold text-[#a87627] uppercase tracking-[0.08em]">
                        {tr.cardLabel}
                      </span>
                      <span className="inline-flex items-center gap-1.5 bg-[#062f35] group-hover:bg-[#0a3d45] text-white text-[10.5px] font-semibold px-3.5 py-2 rounded-full transition-colors">
                        {tr.cardView} <IconArrow />
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
