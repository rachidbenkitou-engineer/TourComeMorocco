"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    src:   "/slide1.jpg",
    pos:   "center 38%",
    script: "Kasbah & Montagnes",
    title:  <>Entre kasbahs et<br />horizons dorés</>,
    desc:   "Partez à la découverte des villages berbères et des kasbahs millénaires au cœur des montagnes marocaines.",
  },
  {
    src:   "/slide2.jpg",
    pos:   "center 50%",
    script: "Désert du Sahara",
    title:  <>L'immensité dorée<br />du Grand Erg</>,
    desc:   "Vivez l'aventure ultime entre dunes à perte de vue et couchers de soleil inoubliables sur l'Erg Chebbi.",
  },
  {
    src:   "/slide3.jpg",
    pos:   "center 50%",
    script: "Médinas & Riads",
    title:  <>L'âme du Maroc<br />authentique</>,
    desc:   "Perdez-vous dans les ruelles colorées des médinas, entre épices envoûtantes, riads fleuris et artisanat d'exception.",
  },
];

export function Hero() {
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

  return (
    <section
      id="top"
      aria-label="Bannière principale"
      className="relative min-h-screen flex flex-col justify-center items-center text-center text-white overflow-visible"
    >
      {/* ── Slideshow ── */}
      <div className="absolute inset-0 overflow-hidden">

        {prev !== null && (
          <div key={`prev-${prev}`} className="absolute inset-0 slide-exit">
            <Image src={slides[prev].src} alt={slides[prev].script} fill
              className="object-cover" style={{ objectPosition: slides[prev].pos }}
              priority sizes="100vw" />
          </div>
        )}

        <div key={`curr-${current}`} className="absolute inset-0 slide-enter">
          <Image src={slide.src} alt={slide.script} fill
            className="object-cover" style={{ objectPosition: slide.pos }}
            priority={current === 0} sizes="100vw" />
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
        className="relative z-20 px-5 max-w-[800px] mx-auto flex flex-col items-center"
        style={{ marginTop: "-80px" }}
      >
        <div key={textKey} className="text-enter flex flex-col items-center w-full">

          {/* Script */}
          <p
            className="font-script text-gold mb-1"
            style={{ fontSize: "clamp(30px,3.8vw,46px)", transform: "rotate(-2deg)" }}
          >
            {slide.script}
          </p>

          {/* Titre H1 */}
          <h1
            className="font-serif font-semibold tracking-[-1.5px] mb-4 [text-shadow:0_3px_18px_rgba(23,50,57,.55)]"
            style={{ fontSize: "clamp(38px,5.8vw,72px)", lineHeight: 1.04 }}
          >
            {slide.title}
          </h1>

          {/* Description */}
          <p
            className="text-white/85 leading-[1.65] mb-8 max-w-[580px] [text-shadow:0_1px_8px_rgba(0,0,0,.5)]"
            style={{ fontSize: "clamp(13px,1.25vw,15.5px)" }}
          >
            {slide.desc}
          </p>
        </div>

        {/* CTA — stables, pas réanimés */}
        <div className="flex flex-wrap items-center justify-center gap-4 [animation:fade-up_.65s_.35s_ease_both]">

          <Link
            href="#destinations"
            className="group inline-flex items-center gap-3 rounded-full transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_12px_32px_rgba(245,182,63,.45)]"
            style={{
              background: "linear-gradient(135deg,#f5c842 0%,#e8921e 100%)",
              fontSize: "11px", letterSpacing: "0.12em", fontWeight: 700,
              padding: "13px 14px 13px 26px", color: "#1c2e2e", textTransform: "uppercase",
            }}
          >
            Explorer nos voyages
            <span className="w-7 h-7 rounded-full bg-[#1c2e2e]/15 flex items-center justify-center group-hover:bg-[#1c2e2e]/25 transition-colors text-[15px] leading-none">
              →
            </span>
          </Link>

          <Link
            href="#contact"
            className="inline-flex items-center rounded-full border border-white/45 text-white transition-all duration-300 hover:-translate-y-[3px] hover:border-white hover:bg-white/10 hover:shadow-[0_8px_24px_rgba(255,255,255,.12)] backdrop-blur-[2px]"
            style={{
              fontSize: "11px", letterSpacing: "0.12em", fontWeight: 600,
              padding: "13px 26px", textTransform: "uppercase",
            }}
          >
            Réserver maintenant
          </Link>
        </div>

        {/* ── Dots — juste sous les boutons ── */}
        <div className="flex items-center gap-3 mt-6">
          {slides.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current ? "w-6 h-2 bg-[#f5b63f]" : "w-2 h-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

    </section>
  );
}
