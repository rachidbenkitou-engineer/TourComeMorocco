"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useI18n } from "@/i18n/I18nProvider";
import { useBooking } from "@/components/BookingModal";

const SPRING = { type: "spring" as const, stiffness: 280, damping: 22 };

const SLIDE_IMAGES = [
  { src: "/slide2.jpg", pos: "center 60%" },
  { src: "/slide3.png", pos: "center 40%" },
];

export function Hero() {
  const { t, locale } = useI18n();
  const slides = t.hero.slides;
  const [current,  setCurrent]  = useState(0);
  const [prev,     setPrev]     = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);
  const [textKey,  setTextKey]  = useState(0);

  function goTo(idx: number) {
    if (idx === current || animating) return;
    setPrev(current);
    setAnimating(true);
    setCurrent(idx);
    setTextKey(k => k + 1);
    setTimeout(() => { setPrev(null); setAnimating(false); }, 900);
  }

  useEffect(() => {
    const id = setInterval(() => {
      const next = (current + 1) % slides.length;
      goTo(next);
    }, 5500);
    return () => clearInterval(id);
  }, [current, animating]);

  const slide = slides[current];
  const { open: openBooking } = useBooking();

  return (
    <section
      id="top"
      aria-label="Bannière principale"
      className="relative min-h-screen flex flex-col justify-center items-center text-center text-white overflow-visible pb-32"
    >
      {/* ── Slideshow ── */}
      <div className="absolute inset-0 overflow-hidden">

        {prev !== null && (
          <div key={`prev-${prev}`} className="absolute inset-0 slide-exit">
            <Image src={SLIDE_IMAGES[prev].src} alt={slides[prev].script} fill
              className="object-cover" style={{ objectPosition: SLIDE_IMAGES[prev].pos }}
              priority sizes="100vw" />
          </div>
        )}

        <div key={`curr-${current}`} className="absolute inset-0 slide-enter">
          <div className="absolute inset-0 kenburns">
            <Image src={SLIDE_IMAGES[current].src} alt={slide.script} fill
              className="object-cover" style={{ objectPosition: SLIDE_IMAGES[current].pos }}
              priority={current === 0} sizes="100vw" />
          </div>
        </div>

        {/* Cinematic overlay */}
        <div className="absolute inset-0 z-10" style={{
          background: "linear-gradient(180deg,rgba(6,47,53,.72) 0%,rgba(6,47,53,.18) 30%,rgba(6,47,53,.12) 55%,rgba(6,47,53,.65) 85%,rgba(6,47,53,.90) 100%)"
        }} />
        <div className="absolute inset-0 z-10" style={{
          background: "linear-gradient(90deg,rgba(2,34,40,.28) 0%,transparent 55%)"
        }} />
      </div>

      {/* ── Copy — animé à chaque changement de slide ── */}
      <div
        className="relative z-20 px-5 w-full max-w-[800px] mx-auto flex flex-col items-center justify-center text-center"
        style={{ marginTop: "120px" }}
      >
        <div key={textKey} className="text-enter flex flex-col items-center text-center w-full">

          {/* Script */}
          <p
            className="font-script text-gold mb-1"
            style={{ fontSize: "clamp(30px,3.8vw,46px)", transform: "rotate(-2deg)" }}
          >
            {slide.script}
          </p>

          {/* Titre H1 */}
          <h1
            className="font-serif font-semibold mb-4 [text-shadow:0_3px_18px_rgba(23,50,57,.55)]"
            style={{ fontSize: "clamp(38px,5.8vw,76px)", lineHeight: 1.08 }}
          >
            {slide.titleLine1}<br />{slide.titleLine2}
          </h1>

          {/* Description */}
          <p
            className="text-white/85 leading-[1.65] mb-8 max-w-[580px] [text-shadow:0_1px_8px_rgba(0,0,0,.5)]"
            style={{ fontSize: "clamp(13px,1.25vw,15.5px)" }}
          >
            {slide.desc}
          </p>
        </div>

        {/* CTA + Dots */}
        <div className="flex flex-col items-center justify-center gap-5 [animation:fade-up_.65s_.35s_ease_both]">

          {/* Boutons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div whileHover={{ y: -5, scale: 1.04 }} whileTap={{ scale: 0.96 }} transition={SPRING}>
              <Link
                href={`/${locale}/tours`}
                className="group inline-flex items-center gap-3 rounded-full hover:shadow-[0_14px_36px_rgba(245,182,63,.5)] transition-shadow duration-300"
                style={{
                  background: "linear-gradient(135deg,#f5c842 0%,#e8921e 100%)",
                  fontSize: "11px", letterSpacing: "0.12em", fontWeight: 700,
                  padding: "13px 14px 13px 26px", color: "#1c2e2e", textTransform: "uppercase",
                }}
              >
                {t.hero.cta1}
                <span className="w-7 h-7 rounded-full bg-[#1c2e2e]/15 flex items-center justify-center group-hover:bg-[#1c2e2e]/25 transition-colors text-[15px] leading-none">
                  {locale === "ar" ? "←" : "→"}
                </span>
              </Link>
            </motion.div>

            <motion.button
              type="button"
              onClick={() => openBooking("")}
              whileHover={{ y: -5, scale: 1.04, borderColor: "rgba(255,255,255,1)", backgroundColor: "rgba(255,255,255,.1)" }}
              whileTap={{ scale: 0.96 }}
              transition={SPRING}
              className="inline-flex items-center rounded-full border border-white/45 text-white backdrop-blur-[2px] cursor-pointer"
              style={{
                fontSize: "11px", letterSpacing: "0.12em", fontWeight: 600,
                padding: "13px 26px", textTransform: "uppercase",
              }}
            >
              {t.hero.cta2}
            </motion.button>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-3 mt-4">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Slide ${i + 1}`}
                className={`block p-0 border-0 rounded-full cursor-pointer transition-all duration-300 ${
                  i === current ? "w-6 h-2 bg-[#f5b63f]" : "w-2 h-2 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

        </div>

      </div>

    </section>
  );
}
