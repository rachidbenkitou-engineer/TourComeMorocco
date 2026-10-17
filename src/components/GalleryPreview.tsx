"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useI18n } from "@/i18n/I18nProvider";
import { Reveal } from "@/components/Reveal";
import { galleryImages, type GalleryImage } from "@/data/gallery";

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
  "/gallery/g08.jpg",
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
      style={{ background: "rgba(4,28,33,.96)" }}
      onClick={onClose}
    >
      <button onClick={onClose}
        className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/90 hover:bg-white text-[#062f35] text-[12px] font-bold px-4 py-2 rounded-full shadow-lg transition-all duration-200 hover:scale-105 z-20 cursor-pointer"
      >
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round">
          <path d="M18 6 6 18M6 6l12 12"/>
        </svg>
        ✕
      </button>
      <button onClick={e => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10 cursor-pointer"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </button>
      <button onClick={e => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10 cursor-pointer"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </button>
      <div
        className="relative max-w-[90vw] max-h-[82vh] flex items-center justify-center"
        onClick={e => e.stopPropagation()}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={1200}
          height={900}
          className="object-contain max-w-[90vw] max-h-[78vh] rounded-xl shadow-2xl"
          priority
        />
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center px-4">
        <p className="text-white/90 text-[13px] font-medium">{image.alt}</p>
        <p className="text-white/40 text-[11px] mt-1">{index + 1} / {images.length}</p>
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

          {/* ── Grid ── */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
            {featured.map((img, i) => (
              <Reveal key={img.src} delay={i * 0.07}>
                <motion.button
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={SPRING}
                  className="group relative block w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-card hover:shadow-lift transition-shadow duration-300 cursor-pointer"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(min-width: 768px) 20vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#031e22]/75 via-[#031e22]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute bottom-0 inset-x-0 p-3 text-white text-[11px] font-medium leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.alt}
                  </span>
                  <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/0 group-hover:bg-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                    </svg>
                  </div>
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
