"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

import { useI18n } from "@/i18n/I18nProvider";
import { cn } from "@/lib/utils";
import { galleryImages, GALLERY_CATEGORIES, type GalleryCategory, type GalleryImage } from "@/data/gallery";

function Lightbox({
  image, total, index, onClose, onPrev, onNext,
}: {
  image: GalleryImage; total: number; index: number;
  onClose: () => void; onPrev: () => void; onNext: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape")     onClose();
      if (e.key === "ArrowLeft")  onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{ background: "rgba(3,16,20,.97)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      {/* Close */}
      <button onClick={onClose}
        className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/22 flex items-center justify-center text-white/80 hover:text-white transition-all duration-200 hover:scale-105 cursor-pointer z-20"
      >
        <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M18 6 6 18M6 6l12 12"/>
        </svg>
      </button>

      {/* Prev */}
      <button onClick={e => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/8 hover:bg-[#f5b63f]/15 border border-white/10 hover:border-[#f5b63f]/40 flex items-center justify-center text-white/60 hover:text-[#f5b63f] transition-all duration-200 cursor-pointer z-10"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </button>

      {/* Next */}
      <button onClick={e => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/8 hover:bg-[#f5b63f]/15 border border-white/10 hover:border-[#f5b63f]/40 flex items-center justify-center text-white/60 hover:text-[#f5b63f] transition-all duration-200 cursor-pointer z-10"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </button>

      {/* Image */}
      <div className="relative max-w-[88vw] max-h-[82vh] flex items-center justify-center" onClick={e => e.stopPropagation()}>
        <div className="rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,.65)]">
          <Image src={image.src} alt={image.alt} width={1200} height={900}
            className="object-contain max-w-[88vw] max-h-[76vh] block"
            priority
          />
        </div>
      </div>

      {/* Caption + progress bar */}
      <div className="absolute bottom-0 inset-x-0 flex flex-col items-center pb-5 gap-2.5">
        <p className="text-white/80 text-[13px] font-medium text-center px-16 leading-snug">{image.alt}</p>
        <div className="h-0.5 bg-white/15 w-40 sm:w-56 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#f5b63f] rounded-full transition-all duration-300"
            style={{ width: `${((index + 1) / total) * 100}%` }}
          />
        </div>
        <p className="text-white/30 text-[10px] tracking-widest">{index + 1} / {total}</p>
      </div>
    </div>
  );
}

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | "all">("all");
  const [lightboxIndex, setLightboxIndex]   = useState<number | null>(null);
  const { t } = useI18n();
  const pg = t.pages.gallery;

  const filtered = activeCategory === "all"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox  = (i: number) => setLightboxIndex(i);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage     = useCallback(() => setLightboxIndex(i => i === null ? null : (i - 1 + filtered.length) % filtered.length), [filtered.length]);
  const nextImage     = useCallback(() => setLightboxIndex(i => i === null ? null : (i + 1) % filtered.length), [filtered.length]);

  return (
    <>
      {lightboxIndex !== null && (
        <Lightbox image={filtered[lightboxIndex]} index={lightboxIndex} total={filtered.length}
          onClose={closeLightbox} onPrev={prevImage} onNext={nextImage} />
      )}
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
            <p className="text-white/65 max-w-[500px] leading-relaxed" style={{ fontSize: "clamp(13px,1.15vw,15px)" }}>
              {pg.heroSubtitle}
            </p>
            <div className="flex items-center gap-6 mt-7">
              <div className="text-center">
                <p className="text-[28px] font-bold text-[#f5b63f] leading-none">{galleryImages.length}</p>
                <p className="text-[10px] text-white/50 uppercase tracking-widest mt-1">{pg.statsPhotos}</p>
              </div>
              <div className="w-px h-10 bg-white/15" />
              <div className="text-center">
                <p className="text-[28px] font-bold text-[#f5b63f] leading-none">
                  {galleryImages.filter(g => g.category === "guests").length}
                </p>
                <p className="text-[10px] text-white/50 uppercase tracking-widest mt-1">{pg.statsGuests}</p>
              </div>
              <div className="w-px h-10 bg-white/15" />
              <div className="text-center">
                <p className="text-[28px] font-bold text-[#f5b63f] leading-none">
                  {galleryImages.filter(g => g.category === "places").length}
                </p>
                <p className="text-[10px] text-white/50 uppercase tracking-widest mt-1">{pg.statsDest}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto px-[clamp(16px,4.5vw,56px)] py-10">
          <div className="flex items-center gap-2 flex-wrap mb-8">
            {GALLERY_CATEGORIES.map(({ id, label }) => {
              const active = activeCategory === id;
              const count  = id === "all"
                ? galleryImages.length
                : galleryImages.filter(g => g.category === id).length;
              return (
                <button key={id} type="button" onClick={() => setActiveCategory(id)}
                  className={cn(
                    "flex items-center gap-2 text-[12px] font-semibold px-4 py-2 rounded-full border transition-all duration-150 cursor-pointer whitespace-nowrap",
                    active
                      ? "bg-[#062f35] border-[#062f35] text-white shadow-[0_4px_12px_rgba(6,47,53,.22)]"
                      : "bg-white border-[#dce5e5] text-[#4a6465] hover:border-[#062f35] hover:text-[#062f35]",
                  )}
                >
                  {label}
                  <span className={cn("text-[10px] font-bold px-1.5 py-0.5 rounded-full", active ? "bg-white/15 text-white" : "bg-[#f0f4f4] text-[#8a9ea0]")}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
          {/* keyframes for stagger entrance */}
          <style>{`@keyframes gallFade{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}`}</style>

          <div className="columns-2 md:columns-3 lg:columns-4 gap-3">
            {filtered.map((img, i) => (
              <div key={img.src}
                className="break-inside-avoid mb-3 relative overflow-hidden rounded-xl cursor-pointer group shadow-[0_2px_12px_rgba(6,47,53,.07)] hover:shadow-[0_8px_24px_rgba(6,47,53,.18)] transition-shadow duration-300"
                style={{
                  animation: "gallFade .45s cubic-bezier(.16,1,.3,1) both",
                  animationDelay: `${Math.min(i * 0.04, 0.5)}s`,
                }}
                onClick={() => openLightbox(i)}
              >
                <Image src={img.src} alt={img.alt} width={600} height={450}
                  className="w-full h-auto object-cover transition-transform duration-600 group-hover:scale-[1.07]"
                  sizes="(max-width:768px) 50vw, (max-width:1024px) 33vw, 25vw"
                />
                {/* gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#031e22]/55 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* gold ring inset on hover */}
                <div className="absolute inset-0 rounded-xl ring-0 group-hover:ring-2 group-hover:ring-[#f5b63f] group-hover:ring-inset transition-all duration-300" />
                {/* caption */}
                <div className="absolute bottom-0 inset-x-0 p-3 translate-y-1.5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-[11px] font-semibold leading-snug [text-shadow:0_1px_6px_rgba(0,0,0,.7)]">
                    {img.alt}
                  </p>
                </div>
                {/* expand icon */}
                <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/0 group-hover:bg-white/18 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#062f35] mt-2">
          <div className="max-w-[1280px] mx-auto px-[clamp(16px,4.5vw,56px)] py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-white text-center sm:text-left">
              <p className="font-script text-[#f5b63f] mb-1"
                style={{ fontSize: "clamp(20px,2.2vw,28px)", transform: "rotate(-1deg)" }}>
                {pg.ctaScript}
              </p>
              <p className="text-white/65 text-[13.5px] max-w-[400px]">{pg.ctaSubtitle}</p>
            </div>
            <Link href="/#contact"
              className="flex items-center gap-3 rounded-full transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_12px_28px_rgba(245,182,63,.4)] whitespace-nowrap flex-shrink-0"
              style={{
                background: "linear-gradient(135deg,#f5c842 0%,#e8921e 100%)",
                fontSize: "11px", letterSpacing: "0.12em", fontWeight: 700,
                padding: "13px 14px 13px 26px", color: "#1c2e2e", textTransform: "uppercase",
              }}
            >
              {pg.ctaBtn}
              <span className="w-7 h-7 rounded-full bg-[#1c2e2e]/15 flex items-center justify-center text-[15px]">→</span>
            </Link>
          </div>
        </div>

      </main>
    </>
  );
}
