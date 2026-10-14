"use client";
import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";
import { transfers, CATEGORIES, type Transfer, type TransferCategory } from "@/data/transfers";

/* ── icons ─────────────────────────────────────── */
function IconClock() {
  return (
    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>
    </svg>
  );
}
function IconFlag() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
      <line x1="4" y1="22" x2="4" y2="15"/>
    </svg>
  );
}
function IconPin() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>
    </svg>
  );
}
function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5"/>
    </svg>
  );
}
function IconArrow() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  );
}
function IconRoad() {
  return (
    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 21 9 3M19 21 15 3M3 9h18M4 15h16"/>
    </svg>
  );
}

/* category icon */
function CategoryIcon({ cat }: { cat: TransferCategory | "all" }) {
  if (cat === "airport") return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21 4 19 4s-2 1-3.5 2.5L11 8 2.8 6.2l-2.3 2.3 8 5-3.8 3.8-2-.5-1.4 1.4 2.5 1 1 2.5 1.4-1.4-.5-2 3.8-3.8 5 8z"/>
    </svg>
  );
  if (cat === "city") return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  );
  if (cat === "coast") return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>
    </svg>
  );
  if (cat === "desert") return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9"/><path d="m15.8 8.2-2.4 5.2-5.2 2.4 2.4-5.2z"/>
    </svg>
  );
  return null;
}

/* ── transfer card ──────────────────────────────── */
function TransferCard({ transfer }: { transfer: Transfer }) {
  return (
    <div className="bg-white rounded-2xl border border-[#e4eaeb] p-5 flex flex-col hover:border-[#f5b63f] hover:shadow-[0_8px_28px_rgba(6,47,53,.10)] transition-all duration-200 group">

      {/* Départ */}
      <div className="flex items-center gap-2.5 mb-1.5">
        <span className="w-8 h-8 rounded-full bg-[#062f35] flex items-center justify-center flex-shrink-0 text-[#f5b63f]">
          <IconPin />
        </span>
        <div>
          <p className="text-[9px] font-bold tracking-[0.12em] text-[#8a9ea0] uppercase leading-none mb-0.5">Départ</p>
          <p className="text-[13.5px] font-bold text-[#062f35]">Marrakech</p>
        </div>
      </div>

      {/* Ligne route */}
      <div className="flex items-center gap-2.5 pl-4 my-1">
        <div className="flex flex-col gap-[3px]">
          <span className="w-px h-[7px] bg-[#d4dede]" />
          <span className="w-px h-[7px] bg-[#d4dede]" />
          <span className="w-px h-[7px] bg-[#d4dede]" />
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-[10px] text-[#8a9ea0] font-semibold">
            <IconClock />
            {transfer.duration}
          </span>
          <span className="flex items-center gap-1 text-[10px] text-[#8a9ea0] font-semibold">
            <IconRoad />
            {transfer.distance}
          </span>
        </div>
      </div>

      {/* Arrivée */}
      <div className="flex items-center gap-2.5 mb-4">
        <span className="w-8 h-8 rounded-full bg-[#fff5df] flex items-center justify-center flex-shrink-0 text-[#b87a06]">
          <IconFlag />
        </span>
        <div>
          <p className="text-[9px] font-bold tracking-[0.12em] text-[#8a9ea0] uppercase leading-none mb-0.5">Arrivée</p>
          <p className="text-[13.5px] font-bold text-[#062f35]">{transfer.to}</p>
        </div>
      </div>

      {/* Prix + CTA */}
      <div className="flex items-end justify-between pt-3.5 border-t border-[#e4eaeb] mt-auto">
        <div>
          <p className="text-[8.5px] text-[#b0bcbd] font-semibold uppercase tracking-wide leading-none mb-1">Prix aller</p>
          <p className="text-[26px] font-bold text-[#062f35] leading-none group-hover:text-[#b07d21] transition-colors">
            {transfer.price}
          </p>
        </div>
        <Link
          href="/#contact"
          className="flex items-center gap-1.5 text-[11px] font-bold px-4 py-2.5 rounded-full bg-[#062f35] text-white hover:bg-[#0a4a51] transition-colors whitespace-nowrap"
        >
          Réserver <IconArrow />
        </Link>
      </div>
    </div>
  );
}

/* ── page ───────────────────────────────────────── */
export default function TransfersPage() {
  const [activeCategory, setActiveCategory] = useState<TransferCategory | "all">("all");

  const filtered =
    activeCategory === "all"
      ? transfers
      : transfers.filter(t => t.category === activeCategory);

  return (
    <>
      <Navbar />

      <main className="min-h-screen" style={{ background: "#fff8f0" }}>

        {/* ── Hero ──────────────────────────────── */}
        <div className="bg-[#062f35]" style={{ paddingTop: "78px" }}>
          <div className="max-w-[1280px] mx-auto px-[clamp(16px,4.5vw,56px)] py-14">
            <p
              className="font-script text-[#f5b63f] mb-2"
              style={{ fontSize: "clamp(22px,2.8vw,34px)", transform: "rotate(-1.5deg)" }}
            >
              Depuis Marrakech
            </p>
            <h1
              className="font-serif font-semibold text-white mb-4 leading-tight"
              style={{ fontSize: "clamp(28px,4vw,52px)" }}
            >
              Transferts Privés
            </h1>
            <p className="text-white/65 max-w-[520px] leading-relaxed" style={{ fontSize: "clamp(13px,1.15vw,15px)" }}>
              Chauffeur privé dédié, prix fixe tout inclus. Aucune surprise à l'arrivée.
            </p>

            {/* Garanties */}
            <div className="flex flex-wrap gap-3 mt-7">
              {[
                "Prix fixe tout inclus",
                "Chauffeur privé",
                "Retour au même tarif",
                "Disponible 24h/24",
              ].map(item => (
                <div key={item} className="flex items-center gap-1.5 bg-white/8 border border-white/12 rounded-full px-3 py-1.5 text-[11.5px] font-medium text-white/85">
                  <span className="text-[#f5b63f]"><IconCheck /></span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Content ───────────────────────────── */}
        <div className="max-w-[1280px] mx-auto px-[clamp(16px,4.5vw,56px)] py-10">

          {/* Filter tabs */}
          <div className="flex items-center gap-2 flex-wrap mb-8">
            {CATEGORIES.map(({ id, label }) => {
              const active = activeCategory === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActiveCategory(id)}
                  className={cn(
                    "flex items-center gap-1.5 text-[12px] font-semibold px-4 py-2 rounded-full border transition-all duration-150 cursor-pointer whitespace-nowrap",
                    active
                      ? "bg-[#062f35] border-[#062f35] text-white shadow-[0_4px_12px_rgba(6,47,53,.22)]"
                      : "bg-white border-[#dce5e5] text-[#4a6465] hover:border-[#062f35] hover:text-[#062f35]",
                  )}
                >
                  {id !== "all" && (
                    <span className={active ? "text-[#f5b63f]" : "text-[#8a9ea0]"}>
                      <CategoryIcon cat={id} />
                    </span>
                  )}
                  {label}
                </button>
              );
            })}
            <span className="ml-2 text-[11px] text-[#8a9ea0] font-medium">
              {filtered.length} transfert{filtered.length > 1 ? "s" : ""}
            </span>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((t, i) => (
              <TransferCard key={`${t.to}-${i}`} transfer={t} />
            ))}
          </div>
        </div>

        {/* ── Info band ─────────────────────────── */}
        <div className="max-w-[1280px] mx-auto px-[clamp(16px,4.5vw,56px)] pb-6">
          <div className="bg-[#fff0cb] border border-[#f0d070] rounded-2xl px-6 py-4 flex items-start gap-3">
            <span className="text-[#b87a06] mt-0.5 flex-shrink-0">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>
              </svg>
            </span>
            <p className="text-[12.5px] text-[#7a5c0a] leading-relaxed">
              <strong>Prix fixe tout inclus avec chauffeur privé.</strong> Les transferts retour vers Casablanca sont disponibles au même tarif. Pour tout itinéraire personnalisé, contactez-nous directement.
            </p>
          </div>
        </div>

        {/* ── CTA band ──────────────────────────── */}
        <div className="bg-[#062f35] mt-2">
          <div className="max-w-[1280px] mx-auto px-[clamp(16px,4.5vw,56px)] py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-white text-center sm:text-left">
              <p
                className="font-script text-[#f5b63f] mb-1"
                style={{ fontSize: "clamp(20px,2.2vw,28px)", transform: "rotate(-1deg)" }}
              >
                Votre destination n'est pas listée ?
              </p>
              <p className="text-white/65 text-[13.5px] max-w-[420px]">
                Contactez-nous pour organiser votre transfert sur mesure depuis Marrakech.
              </p>
            </div>
            <Link
              href="/#contact"
              className="flex items-center gap-3 rounded-full transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_12px_28px_rgba(245,182,63,.4)] whitespace-nowrap flex-shrink-0"
              style={{
                background: "linear-gradient(135deg,#f5c842 0%,#e8921e 100%)",
                fontSize: "11px", letterSpacing: "0.12em", fontWeight: 700,
                padding: "13px 14px 13px 26px", color: "#1c2e2e", textTransform: "uppercase",
              }}
            >
              Nous contacter
              <span className="w-7 h-7 rounded-full bg-[#1c2e2e]/15 flex items-center justify-center text-[15px]">→</span>
            </Link>
          </div>
        </div>

      </main>

      <Footer />
    </>
  );
}
