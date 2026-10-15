"use client";
import { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useBooking } from "@/components/BookingModal";
import { useI18n } from "@/i18n/I18nProvider";

const FLEET = [
  {
    name: "Škoda Kodiaq 4x4",
    seats: "4 passagers + chauffeur",
    specs: "Automatique · Diesel · 4x4 · Climatisé",
    plate: "88395-B-15",
    pax: 4,
    is4x4: true,
    photos: ["/images/fleet/v1-1.jpg", "/images/fleet/v1-2.jpg", "/images/fleet/v1-3.jpg"],
    desc: "Idéal pour les groupes de 1 à 4 personnes. Confort haut de gamme, transmission intégrale pour les routes de montagne et les pistes du désert.",
  },
  {
    name: "Mercedes Vito Tourer 114 CDI",
    seats: "7 passagers + chauffeur",
    specs: "Automatique · Diesel · Climatisé",
    plate: "88428-B-15",
    pax: 7,
    is4x4: false,
    photos: ["/images/fleet/v2-1.jpg", "/images/fleet/v2-2.jpg", "/images/fleet/v2-3.jpg"],
    desc: "Grand confort pour les familles ou groupes jusqu'à 7 personnes. Sièges individuels capitaine, large coffre à bagages.",
  },
  {
    name: "Ford Tourneo Custom",
    seats: "7 passagers + chauffeur",
    specs: "Automatique · Diesel · Climatisé",
    plate: "88393-B-15",
    pax: 7,
    is4x4: false,
    photos: ["/images/fleet/v3-1.jpg", "/images/fleet/v3-2.jpg", "/images/fleet/v3-3.jpg"],
    desc: "Spacieux et modulable jusqu'à 7 passagers. Parfait pour les transferts longue distance et les circuits multi-jours à travers le Maroc.",
  },
  {
    name: "Fiat Scudo",
    seats: "7 passagers + chauffeur",
    specs: "Automatique · Diesel · Climatisé",
    plate: "88394-B-15",
    pax: 7,
    is4x4: false,
    photos: ["/images/fleet/v4-1.jpg", "/images/fleet/v4-2.jpg", "/images/fleet/v4-3.jpg"],
    desc: "Compact et agile, idéal pour naviguer dans les médinas. Confort optimal pour les transferts urbains et les excursions journalières.",
  },
];

type LightboxState = { vehicleIdx: number; photoIdx: number } | null;
type LightboxSetIdx = (idx: number) => void;

function Lightbox({ state, onClose, onNav, onSetIdx, expandLabel }: {
  state: LightboxState;
  onClose: () => void;
  onNav: (dir: -1 | 1) => void;
  onSetIdx: LightboxSetIdx;
  expandLabel: string;
}) {
  if (!state) return null;
  const v = FLEET[state.vehicleIdx];
  const src = v.photos[state.photoIdx];
  const total = v.photos.length;

  return (
    <div
      className="fixed inset-0 z-[99999] bg-[#031e22]/97 backdrop-blur-md flex flex-col items-center justify-center p-4"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <button onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M18 6 6 18M6 6l12 12"/>
        </svg>
      </button>
      <p className="absolute top-5 left-1/2 -translate-x-1/2 text-[11px] font-semibold text-white/50 tracking-[0.15em]">
        {state.photoIdx + 1} / {total}
      </p>
      <div className="relative w-full max-w-[900px] max-h-[75vh] aspect-[4/3] rounded-2xl overflow-hidden border border-[#f5b63f]/20 shadow-[0_32px_80px_rgba(0,0,0,.6)]">
        <Image src={src} alt={`${v.name} — photo ${state.photoIdx + 1}`} fill
          className="object-cover" sizes="(max-width:900px) 100vw, 900px" priority />
      </div>
      {state.photoIdx > 0 && (
        <button onClick={() => onNav(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-colors"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
      )}
      {state.photoIdx < total - 1 && (
        <button onClick={() => onNav(1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-colors"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      )}
      <div className="flex gap-3 mt-5">
        {v.photos.map((ph, i) => (
          <button key={ph} onClick={() => onSetIdx(i)}
            className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 flex-shrink-0 ${
              i === state.photoIdx
                ? "border-[#f5b63f] scale-110 shadow-[0_4px_12px_rgba(245,182,63,.4)]"
                : "border-transparent opacity-50 hover:opacity-80"
            }`}
          >
            <Image src={ph} alt="" fill className="object-cover" sizes="64px" />
          </button>
        ))}
      </div>
      <p className="mt-4 font-serif text-[15px] text-white/70">{v.name}</p>
    </div>
  );
}

function VehicleCard({ vehicle, vehicleIdx, reversed, onPhotoClick, bookLabel, plateLabel, expandLabel }: {
  vehicle: typeof FLEET[0];
  vehicleIdx: number;
  reversed: boolean;
  onPhotoClick: (photoIdx: number) => void;
  bookLabel: string;
  plateLabel: string;
  expandLabel: string;
}) {
  const { open: openBooking } = useBooking();

  return (
    <article className="bg-white rounded-3xl shadow-[0_4px_32px_rgba(6,47,53,.09)] border border-[#e8efef] overflow-hidden">
      <div className={`grid lg:grid-cols-2 gap-0 ${reversed ? "lg:grid-flow-col-dense" : ""}`}>

        <div className={`p-7 lg:p-9 flex flex-col justify-between ${reversed ? "lg:order-2" : ""}`}>
          <div>
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.14em] uppercase bg-[#062f35] text-[#f5b63f] px-3 py-1.5 rounded-full">
                <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
                {vehicle.pax} pax
              </span>
              {vehicle.is4x4 && (
                <span className="text-[10px] font-bold tracking-[0.14em] uppercase bg-[#f5b63f]/15 text-[#a87627] border border-[#f5b63f]/40 px-3 py-1.5 rounded-full">
                  4×4
                </span>
              )}
            </div>
            <h2 className="font-serif font-semibold text-[#062f35] leading-tight mb-3"
              style={{ fontSize: "clamp(19px,1.8vw,26px)" }}>
              {vehicle.name}
            </h2>
            <p className="text-[13.5px] text-[#5a7578] leading-relaxed mb-6">{vehicle.desc}</p>
            <div className="space-y-3 mb-7">
              {[
                { icon: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M12 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z", label: vehicle.seats },
                { icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 14.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9m0-5.83a1.33 1.33 0 1 0 0 2.66 1.33 1.33 0 0 0 0-2.66", label: vehicle.specs },
              ].map((row, i) => (
                <div key={i} className="flex items-center gap-3 text-[12.5px] text-[#3a5a5e]">
                  <span className="w-8 h-8 rounded-full bg-[#f0f5f5] border border-[#dce8e8] flex items-center justify-center text-[#062f35] flex-shrink-0">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d={row.icon}/>
                    </svg>
                  </span>
                  {row.label}
                </div>
              ))}
              <div className="flex items-center gap-3 text-[12px] text-[#7a9496]">
                <span className="w-8 h-8 rounded-full bg-[#f0f5f5] border border-[#dce8e8] flex items-center justify-center text-[#a8b8b9] flex-shrink-0">
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
                    <line x1="7" y1="7" x2="7.01" y2="7"/>
                  </svg>
                </span>
                <span>{plateLabel} : <span className="font-mono font-bold text-[#062f35] tracking-wide">{vehicle.plate}</span></span>
              </div>
            </div>
          </div>
          <button type="button"
            onClick={() => openBooking(`${bookLabel} — ${vehicle.name} (${vehicle.seats})`)}
            className="flex items-center justify-center gap-2.5 rounded-full text-[11.5px] font-bold uppercase tracking-[0.1em] py-4 px-6 transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_10px_28px_rgba(245,182,63,.4)] active:scale-[.98] cursor-pointer"
            style={{ background: "linear-gradient(135deg,#f5c842 0%,#e8921e 100%)", color: "#1c2e2e" }}
          >
            {bookLabel}
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        <div className={`relative bg-[#f4f7f7] ${reversed ? "lg:order-1" : ""}`}>
          <div className="p-4 lg:p-5 h-full flex flex-col gap-3">
            <button onClick={() => onPhotoClick(0)}
              className="group relative flex-1 min-h-[220px] rounded-2xl overflow-hidden border-2 border-transparent hover:border-[#f5b63f] focus:border-[#f5b63f] transition-all duration-300 shadow-[0_2px_16px_rgba(6,47,53,.12)] cursor-zoom-in"
            >
              <Image src={vehicle.photos[0]} alt={vehicle.name} fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-[#062f35]/0 group-hover:bg-[#062f35]/30 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm text-white text-[11px] font-semibold px-3.5 py-1.5 rounded-full border border-white/30 flex items-center gap-1.5">
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/>
                  </svg>
                  {expandLabel}
                </span>
              </div>
              <span className="absolute bottom-3 right-3 bg-[#062f35]/75 backdrop-blur-sm text-white/80 text-[10px] font-semibold px-2.5 py-1 rounded-full">
                1 / {vehicle.photos.length}
              </span>
            </button>
            <div className="grid grid-cols-2 gap-3">
              {vehicle.photos.slice(1).map((src, i) => (
                <button key={src} onClick={() => onPhotoClick(i + 1)}
                  className="group relative h-[110px] rounded-xl overflow-hidden border-2 border-[#e4eaeb] hover:border-[#f5b63f] focus:border-[#f5b63f] transition-all duration-300 shadow-[0_2px_8px_rgba(6,47,53,.08)] cursor-zoom-in"
                >
                  <Image src={src} alt={`${vehicle.name} — photo ${i + 2}`} fill
                    sizes="(max-width:640px) 50vw, 200px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-[#062f35]/0 group-hover:bg-[#062f35]/25 transition-colors duration-300" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function FleetPage() {
  const [lightbox, setLightbox] = useState<LightboxState>(null);
  const { open: openBooking } = useBooking();
  const { t } = useI18n();
  const pg = t.pages.fleet;

  function openLightbox(vehicleIdx: number, photoIdx: number) {
    setLightbox({ vehicleIdx, photoIdx });
    document.body.style.overflow = "hidden";
  }
  function closeLightbox() {
    setLightbox(null);
    document.body.style.overflow = "";
  }
  function navLightbox(dir: -1 | 1) {
    if (!lightbox) return;
    const v = FLEET[lightbox.vehicleIdx];
    const next = lightbox.photoIdx + dir;
    if (next >= 0 && next < v.photos.length) {
      setLightbox({ ...lightbox, photoIdx: next });
    }
  }
  function setLightboxIdx(idx: number) {
    if (!lightbox) return;
    setLightbox({ ...lightbox, photoIdx: idx });
  }

  return (
    <>
      <Navbar />
      <Lightbox state={lightbox} onClose={closeLightbox} onNav={navLightbox} onSetIdx={setLightboxIdx} expandLabel={pg.expandBtn} />
      <main className="min-h-screen bg-[#fff8f0]">

        <div className="bg-[#062f35]" style={{ paddingTop: "78px" }}>
          <div className="max-w-[1280px] mx-auto px-[clamp(16px,4.5vw,56px)] py-14">
            <p className="font-script text-[#f5b63f] mb-2"
              style={{ fontSize: "clamp(22px,2.8vw,34px)", transform: "rotate(-1.5deg)" }}>
              {pg.heroScript}
            </p>
            <h1 className="font-serif font-semibold text-white mb-4 leading-tight"
              style={{ fontSize: "clamp(28px,4vw,52px)" }}>
              {pg.heroTitle}
            </h1>
            <p className="text-white/65 max-w-[520px] leading-relaxed" style={{ fontSize: "clamp(13px,1.15vw,15px)" }}>
              {pg.heroSubtitle}
            </p>
            <div className="flex flex-wrap gap-3 mt-7">
              {pg.guarantees.map(item => (
                <div key={item} className="flex items-center gap-1.5 bg-white/8 border border-white/12 rounded-full px-3 py-1.5 text-[11.5px] font-medium text-white/85">
                  <span className="text-[#f5b63f]">
                    <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto px-[clamp(16px,4.5vw,56px)] py-14 space-y-10">
          {FLEET.map((v, idx) => (
            <VehicleCard key={v.name} vehicle={v} vehicleIdx={idx} reversed={idx % 2 === 1}
              onPhotoClick={(photoIdx) => openLightbox(idx, photoIdx)}
              bookLabel={pg.bookVehicle}
              plateLabel={pg.plateLabel}
              expandLabel={pg.expandBtn}
            />
          ))}
        </div>

        <div className="bg-[#062f35]">
          <div className="max-w-[1280px] mx-auto px-[clamp(16px,4.5vw,56px)] py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <p className="font-script text-[#f5b63f] mb-1"
                style={{ fontSize: "clamp(20px,2.2vw,28px)", transform: "rotate(-1deg)" }}>
                {pg.ctaScript}
              </p>
              <p className="text-white/65 text-[13.5px] max-w-[420px]">{pg.ctaSubtitle}</p>
            </div>
            <button type="button" onClick={() => openBooking(pg.heroTitle)}
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
      <Footer />
    </>
  );
}
