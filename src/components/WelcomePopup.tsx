"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useI18n } from "@/i18n/I18nProvider";


const ZELLIGE = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='72' height='72'%3E%3Cpolygon points='36,14 40.6,24.9 51.6,20.4 47.1,31.4 58,36 47.1,40.6 51.6,51.6 40.6,47.1 36,58 31.4,47.1 20.4,51.6 24.9,40.6 14,36 24.9,31.4 20.4,20.4 31.4,24.9' fill='none' stroke='rgba(245,182,63,1)' stroke-width='1' stroke-linejoin='round'/%3E%3C/svg%3E")`;

export function WelcomePopup() {
  const { locale } = useI18n();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 1000);
    return () => clearTimeout(t);
  }, []);

  function dismiss() {
    setShow(false);
  }

  const isRtl = locale === "ar";

  const L = {
    eyebrow:
      locale === "en" ? "Travel Tip"
    : locale === "ar" ? "نصيحة سفر"
    : locale === "it" ? "Consiglio di viaggio"
    :                   "Conseil de voyage",

    title:
      locale === "en" ? "Don't leave without tasting..."
    : locale === "ar" ? "...لا تغادر قبل أن تتذوق"
    : locale === "it" ? "Non partite senza assaggiare..."
    :                   "Ne repartez pas sans goûter...",

    message:
      locale === "en"
        ? "Tagine, Couscous, Tanjia — Moroccan cuisine is an adventure in itself. Let the flavors of Marrakech surprise you, with the best companion in Morocco."
    : locale === "ar"
        ? "الطاجين، الكسكس، الطنجية — المطبخ المغربي مغامرة بحد ذاتها. دعوا نكهات مراكش تفاجئكم، برفقة أفضل مرافق في المغرب."
    : locale === "it"
        ? "Tagine, Couscous, Tanjia — la cucina marocchina è un'avventura a sé. Lasciatevi sorprendere dai sapori di Marrakech, con il miglior accompagnatore in Marocco."
    :     "Tagine, Couscous, Tanjia — la cuisine marocaine est une aventure à elle seule. Laissez-vous surprendre par les saveurs de Marrakech, avec le meilleur accompagnant au Maroc.",

    cta:
      locale === "en" ? "Got it, let's go!"
    : locale === "ar" ? "!فهمت، هيا نذهب"
    : locale === "it" ? "Capito, andiamo!"
    :                   "Compris, on y va !",
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.22 } }}
          transition={{ duration: 0.28 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
          style={{ background: "rgba(2,16,20,.80)", backdropFilter: "blur(5px)" }}
          onClick={dismiss}
        >
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.93 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ type: "spring", damping: 26, stiffness: 290, delay: 0.06 }}
            className="relative w-full max-w-[440px] rounded-[28px] overflow-hidden"
            style={{ boxShadow: "0 40px 100px rgba(0,0,0,.7), 0 0 0 1px rgba(245,182,63,.12)" }}
            onClick={e => e.stopPropagation()}
          >
            {/* Background photo */}
            <div className="absolute inset-0">
              <Image
                src="/images/destMerzouga.jpg"
                alt=""
                fill
                className="object-cover object-center"
                sizes="440px"
                priority
              />
            </div>
            {/* Gradient overlay */}
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(168deg, rgba(6,47,53,.93) 0%, rgba(6,47,53,.62) 45%, rgba(6,47,53,.86) 100%)" }}
            />
            {/* Zellige overlay */}
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{ backgroundImage: ZELLIGE, backgroundSize: "72px 72px" }}
            />
            {/* Gold rim top */}
            <div
              className="absolute top-0 inset-x-0 h-[2px]"
              style={{ background: "linear-gradient(90deg, transparent, rgba(245,182,63,.75) 35%, rgba(245,182,63,.75) 65%, transparent)" }}
            />

            {/* Close button */}
            <button
              onClick={dismiss}
              aria-label="Fermer"
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/60 hover:text-white transition-all duration-200 cursor-pointer"
            >
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6 6 18M6 6l12 12"/>
              </svg>
            </button>

            {/* Content */}
            <div
              className="relative z-10 px-8 pt-10 pb-9 flex flex-col items-center text-center"
              dir={isRtl ? "rtl" : "ltr"}
            >
              {/* 8-point star emblem */}
              <div className="mb-4">
                <svg width="42" height="42" viewBox="0 0 44 44" fill="none">
                  <path
                    d="M22 3L25.3 13.7L36 10.4L32.7 21.1L43.4 22L32.7 22.9L36 33.6L25.3 30.3L22 41L18.7 30.3L8 33.6L11.3 22.9L0.6 22L11.3 21.1L8 10.4L18.7 13.7Z"
                    fill="#f5b63f"
                    opacity="0.85"
                  />
                  <circle cx="22" cy="22" r="4" fill="#062f35"/>
                  <circle cx="22" cy="22" r="1.5" fill="#f5b63f" opacity="0.55"/>
                </svg>
              </div>

              {/* Eyebrow */}
              <p className="text-[#f5b63f] font-bold uppercase tracking-[0.22em] mb-3" style={{ fontSize: "9px" }}>
                {L.eyebrow}
              </p>

              {/* Title */}
              <h2
                className="font-serif text-white leading-tight mb-3"
                style={{ fontSize: "clamp(26px,6vw,34px)", fontWeight: 600 }}
              >
                {L.title}
              </h2>

              {/* Ornament */}
              <div className="flex items-center gap-2 mb-5" style={{ width: "110px" }}>
                <div className="flex-1 h-px" style={{ background: "rgba(245,182,63,.28)" }} />
                <svg width="6" height="6" viewBox="0 0 6 6">
                  <polygon points="3,0 6,3 3,6 0,3" fill="rgba(245,182,63,.5)"/>
                </svg>
                <div className="flex-1 h-px" style={{ background: "rgba(245,182,63,.28)" }} />
              </div>

              {/* Welcome message */}
              <p
                className="text-white/65 leading-[1.72] mb-8"
                style={{ fontSize: "clamp(12.5px,1.8vw,13.5px)", maxWidth: "320px" }}
              >
                {L.message}
              </p>

              {/* Explorer CTA */}
              <button
                onClick={dismiss}
                className="flex items-center gap-2 font-bold rounded-full transition-all duration-200 hover:scale-[1.04] active:scale-[0.98] cursor-pointer"
                style={{
                  fontSize: "12.5px",
                  letterSpacing: "0.06em",
                  padding: "13px 32px",
                  color: "#1c2e2e",
                  background: "linear-gradient(135deg,#f5c842 0%,#e8921e 100%)",
                  boxShadow: "0 8px 26px rgba(245,182,63,.38)",
                }}
              >
                {L.cta}
                <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={isRtl ? "M13 5l-6 5 6 5" : "M7 5l6 5-6 5"}/>
                </svg>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
