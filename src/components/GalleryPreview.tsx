"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useI18n } from "@/i18n/I18nProvider";
import { Reveal } from "@/components/Reveal";
import { galleryImages, type GalleryImage } from "@/data/gallery";

// 9 images → perfect 4-col bento (2×2 hero + 2×2 top-right + 4 bottom row)
const FEATURED_SLUGS = [
  "/gallery/g01.jpg",
  "/gallery/g04.jpg",
  "/gallery/g15.jpg",
  "/gallery/g14.jpg",
  "/gallery/g24.jpg",
  "/gallery/g05.jpg",
  "/gallery/g03.jpg",
  "/gallery/g10.jpg",
  "/gallery/g02.jpg",
];

const SPRING = { type: "spring" as const, stiffness: 280, damping: 22 };

function Lightbox({
  images, index, onClose, onPrev, onNext,
}: {
  images: GalleryImage[]; index: number;
  onClose: () => void; onPrev: () => void; onNext: () => void;
}) {
  const image = images[index]!;
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
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{ background: "rgba(3,16,20,.96)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 flex items-center gap-2.5 bg-white/15 hover:bg-white/30 border border-white/40 text-white font-bold text-[14px] px-6 py-3 rounded-full shadow-2xl transition-all duration-200 hover:scale-105 cursor-pointer"
        style={{ zIndex: 9999 }}
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round">
          <path d="M18 6 6 18M6 6l12 12"/>
        </svg>
        Fermer
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
      <div
        className="relative max-w-[88vw] max-h-[80vh] flex items-center justify-center"
        onClick={e => e.stopPropagation()}
      >
        <div className="rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,.65)]">
          <Image
            src={image.src} alt={image.alt}
            width={1200} height={900}
            className="object-contain max-w-[88vw] max-h-[76vh] block"
            priority
          />
        </div>
      </div>

      {/* Caption + progress dots */}
      <div className="absolute bottom-0 inset-x-0 flex flex-col items-center pb-5 gap-2.5">
        <p className="text-white/80 text-[13px] font-medium text-center px-16 leading-snug">{image.alt}</p>
        <div className="flex items-center gap-2">
          {images.map((_, i) => (
            <span key={i}
              className={`rounded-full transition-all duration-300 ${
                i === index ? "w-5 h-1.5 bg-[#f5b63f]" : "w-1.5 h-1.5 bg-white/25"
              }`}
            />
          ))}
        </div>
        <p className="text-white/30 text-[10px] tracking-widest">{index + 1} / {images.length}</p>
      </div>
    </div>
  );
}

export function GalleryPreview() {
  const { t, locale } = useI18n();
  const pg = t.pages.gallery;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const featured = FEATURED_SLUGS.map(
    (src) => galleryImages.find((g) => g.src === src) ?? { src, alt: "Maroc", category: "places" as const }
  );

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(
    () => setLightboxIndex(i => i === null ? null : (i - 1 + featured.length) % featured.length),
    [featured.length]
  );
  const nextImage = useCallback(
    () => setLightboxIndex(i => i === null ? null : (i + 1) % featured.length),
    [featured.length]
  );

  return (
    <>
      {lightboxIndex !== null && (
        <Lightbox
          images={featured}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}

      <section id="gallery-preview" className="bg-[#fff8f0] -mt-6 sm:-mt-10 pt-0 pb-16 sm:pb-20">
        <div className="max-w-[1280px] mx-auto px-[clamp(16px,4.5vw,56px)]">

          {/* ── Header ── */}
          <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <Reveal from="left">
                <div className="flex items-center gap-2.5 mb-1">
                  <span className="h-px w-7 bg-[#f5b63f] opacity-70 flex-shrink-0" aria-hidden />
                  <p
                    className="font-script text-[#f5b63f]"
                    style={{ fontSize: "clamp(20px,2.2vw,28px)", transform: "rotate(-1.5deg)" }}
                  >
                    {pg.homeScript}
                  </p>
                </div>
              </Reveal>
              <Reveal from="up" delay={0.1}>
                <h2
                  className="font-serif font-semibold text-[#062f35] leading-tight"
                  style={{ fontSize: "clamp(24px,3.2vw,40px)" }}
                >
                  {pg.homeTitle}
                </h2>
              </Reveal>
              <Reveal from="up" delay={0.18}>
                <p className="text-[#5a7578] mt-2 max-w-[440px]" style={{ fontSize: "clamp(13px,1.1vw,15px)" }}>
                  {pg.homeSubtitle}
                </p>
              </Reveal>
            </div>

            <Reveal from="right" delay={0.14}>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }} transition={SPRING}>
                <Link
                  href={`/${locale}/gallery`}
                  className="flex items-center gap-2 text-[12.5px] font-semibold text-[#062f35] border border-[#062f35] hover:bg-[#062f35] hover:text-white px-5 py-2.5 rounded-full transition-colors duration-200 whitespace-nowrap"
                >
                  {pg.viewAll}
                  <svg
                    viewBox="0 0 24 24" width="13" height="13" fill="none"
                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    className={locale === "ar" ? "rotate-180" : ""}
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </Reveal>
          </div>

          {/*
            ── Bento mosaic grid ──
            Mobile (2-col): hero full-width, 8 thumbs below
            Desktop (4-col, auto-rows 190px):
              img[0] → 2 cols × 2 rows (hero)
              img[1-4] → 1×1 filling right of hero
              img[5-8] → 4×1 bottom row
          */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:[grid-auto-rows:190px]">
            {featured.map((img, i) => (
              <Reveal
                key={img.src}
                delay={i * 0.055}
                className={`h-full ${i === 0 ? "col-span-2 md:row-span-2" : "col-span-1"}`}
              >
                <motion.button
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={SPRING}
                  className="group relative w-full overflow-hidden rounded-2xl cursor-pointer aspect-[4/3] md:aspect-auto md:h-full shadow-[0_2px_16px_rgba(6,47,53,.09)] hover:shadow-[0_8px_28px_rgba(6,47,53,.20)] ring-0 hover:ring-2 hover:ring-[#f5b63f] hover:ring-offset-2 ring-offset-[#fff8f0] transition-[box-shadow,ring] duration-300"
                >
                  <Image
                    src={img.src} alt={img.alt} fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes={i === 0 ? "(min-width:768px) 50vw, 100vw" : "(min-width:768px) 25vw, 50vw"}
                  />
                  {/* permanent bottom vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#031e22]/50 via-transparent to-transparent" />
                  {/* hover tint */}
                  <div className="absolute inset-0 bg-[#062f35]/0 group-hover:bg-[#062f35]/22 transition-colors duration-300" />
                  {/* caption slides up */}
                  <div className="absolute bottom-0 inset-x-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white text-[11px] font-medium leading-snug [text-shadow:0_1px_6px_rgba(0,0,0,.7)]">
                      {img.alt}
                    </p>
                  </div>
                  {/* expand icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/0 group-hover:bg-white/15 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                    </svg>
                  </div>
                  {/* gold corner accent on hero only */}
                  {i === 0 && (
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <div className="w-6 h-[2px] bg-[#f5b63f]/55 rounded-full" />
                      <div className="w-[2px] h-6 bg-[#f5b63f]/55 rounded-full mt-0" style={{ marginTop: "-2px" }} />
                    </div>
                  )}
                </motion.button>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3} className="mt-8 flex justify-center">
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }} transition={SPRING}>
              <Link
                href={`/${locale}/gallery`}
                className="flex items-center gap-3 rounded-full transition-all duration-300 hover:shadow-[0_12px_28px_rgba(245,182,63,.4)] whitespace-nowrap cursor-pointer"
                style={{
                  background: "linear-gradient(135deg,#f5c842 0%,#e8921e 100%)",
                  fontSize: "11px", letterSpacing: "0.12em", fontWeight: 700,
                  padding: "13px 14px 13px 26px", color: "#1c2e2e", textTransform: "uppercase",
                }}
              >
                {pg.viewAll}
                <span className="w-7 h-7 rounded-full bg-[#1c2e2e]/15 flex items-center justify-center text-[15px]">
                  {locale === "ar" ? "←" : "→"}
                </span>
              </Link>
            </motion.div>
          </Reveal>

        </div>
      </section>
    </>
  );
}
