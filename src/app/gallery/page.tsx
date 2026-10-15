"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
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
      style={{ background: "rgba(4,28,33,.96)" }}
      onClick={onClose}
    >
      <button onClick={onClose}
        className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M18 6 6 18M6 6l12 12"/>
        </svg>
      </button>
      <button onClick={e => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </button>
      <button onClick={e => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </button>
      <div className="relative max-w-[90vw] max-h-[82vh] flex items-center justify-center" onClick={e => e.stopPropagation()}>
        <Image src={image.src} alt={image.alt} width={1200} height={900}
          className="object-contain max-w-[90vw] max-h-[78vh] rounded-xl shadow-2xl"
          priority
        />
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center px-4">
        <p className="text-white/90 text-[13px] font-medium">{image.alt}</p>
        <p className="text-white/40 text-[11px] mt-1">{index + 1} / {total}</p>
      </div>
    </div>
  );
}

export default function GalleryPage() {
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
      <Navbar />
      {lightboxIndex !== null && (
        <Lightbox image={filtered[lightboxIndex]} index={lightboxIndex} total={filtered.length}
          onClose={closeLightbox} onPrev={prevImage} onNext={nextImage} />
      )}
      <main className="min-h-screen" style={{ background: "#fff8f0" }}>

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
          <div className="columns-2 md:columns-3 gap-3">
            {filtered.map((img, i) => (
              <div key={img.src} className="break-inside-avoid mb-3 relative overflow-hidden rounded-xl cursor-pointer group"
                onClick={() => openLightbox(i)}>
                <Image src={img.src} alt={img.alt} width={600} height={450}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width:768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-[#062f35]/0 group-hover:bg-[#062f35]/45 transition-all duration-300 flex items-end p-3">
                  <p className="text-white text-[11px] font-semibold leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300 [text-shadow:0_1px_4px_rgba(0,0,0,.5)]">
                    {img.alt}
                  </p>
                </div>
                <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/0 group-hover:bg-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
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
            <a href="/#contact"
              className="flex items-center gap-3 rounded-full transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_12px_28px_rgba(245,182,63,.4)] whitespace-nowrap flex-shrink-0"
              style={{
                background: "linear-gradient(135deg,#f5c842 0%,#e8921e 100%)",
                fontSize: "11px", letterSpacing: "0.12em", fontWeight: 700,
                padding: "13px 14px 13px 26px", color: "#1c2e2e", textTransform: "uppercase",
              }}
            >
              {pg.ctaBtn}
              <span className="w-7 h-7 rounded-full bg-[#1c2e2e]/15 flex items-center justify-center text-[15px]">→</span>
            </a>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
