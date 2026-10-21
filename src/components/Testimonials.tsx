"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "motion/react";
import { useI18n } from "@/i18n/I18nProvider";
import { Reveal } from "@/components/Reveal";

const TA_URL      = "https://www.tripadvisor.com.eg/Profile/abdelilahb671";
const MAX_CHARS   = 220;
const INTERVAL_MS = 4000;
const TRANS_MS    = 200;
const DRAG_THRESHOLD = 50; // px to trigger slide

const REVIEWS = [
  {
    name: "Marco & Elena R.",
    text: "Siamo stati in Marocco dal 12 al 19 ottobre 2024 per un tour da Marrakech al deserto di Merzouga e ritorno, gestito dall'agenzia Best Service Tours, che ringraziamo per averci affiancato guide e driver impeccabili, puntuali e molto ben preparati. Mustafà e Abdelouahad per due giorni a Marrakech (Mustafà ottimo autista nonostante la giovane età e Abdelouahad molto ben preparato, sempre pronto a rispondere alle nostre domande e soprattutto per il suo ottimo italiano)\nAbdelilah invece ci ha accompagnati per 4 giorni fino al deserto e ritorno, molto discreto eppure presente al bisogno, molto disponibile a farci conoscere il meglio del suo paese, e a fermarsi ogni volta che lo richiedevano per foto o altro. Perfetto sia come autista che come guida. Grazie per aver reso bellissima questa nostra vacanza!!!",
  },
  {
    name: "Andrea P.",
    text: "Ho inviato la recensione... Credo che ci vorrà qualche ora o qualche giorno per vederla 👍🏼",
  },
  {
    name: "Roberto F.",
    text: "Tour di una settimana da Marrakech al deserto. Paesaggi stupendi. Abbiamo visto il vero Marocco ed esplorato posti che pochi turisti credo abbiano visitato. Il nostro ringraziamento va soprattutto all'autista - cicerone Abdellilah, una persona davvero speciale. Sempre puntuale e disponibile ad esaudire i nostri desideri e capricci. Con lui per quattro giorni abbiamo percorso circa 1500 km in assoluto comfort con il fuoristrada sempre in perfetto ordine. Lo consigliamo vivamente a chi dovesse intraprendere un tour del Marocco",
  },
  {
    name: "Giulia R.",
    text: "Abdel un ottimo autista e compagno di viaggio. Affidabile, puntuale e molto attento alle proprie esigenze e pronto ad esaudire ogni desiderio.\nPer futuri viaggi in Marocco ci affideremo sempre a lui 🤩",
  },
  {
    name: "Luca & Sara M.",
    text: "Siamo stati accompagnati in tour per una settimana da Abdel e abbiamo apprezzato la sua puntualità e professionalità. Ci ha inoltre accompagnato in posti meravigliosi. Persona discreta, gentile e disponibile. Assolutamente da consigliare",
  },
  {
    name: "Chiara B.",
    text: "\"Che Dio ti protegga per me e ti conceda una lunga vita, sei il miglior zio del mondo.\" 😍❤️",
  },
  {
    name: "Valentina C.",
    text: "Grazie Abdel sei una persona fantastica, professionale, preparato e gentile. È stata una vacanza meravigliosa anche grazie a te. E questo è stato uno dei momenti divertentissimi.",
  },
];

const N       = REVIEWS.length;        // 7
const PREPEND = 3;                     // clones prepended at start

// Track layout: [last-3 clones | 7 real | first-3 clones] = 13 items
const TRACK = [
  ...REVIEWS.slice(N - PREPEND),       // clones of [4,5,6] at positions 0-2
  ...REVIEWS,                           // real reviews at positions 3-9
  ...REVIEWS.slice(0, PREPEND),         // clones of [0,1,2] at positions 10-12
];

/* ─── TripAdvisor icon ─── */
function TaIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5zm0 13.5c-3.315 0-6-2.685-6-6h2a4 4 0 0 0 8 0h2c0 3.315-2.685 6-6 6z"/>
    </svg>
  );
}

/* ─── Full-review modal ─── */
function ReviewModal({ review, onClose, readLess }: {
  review: typeof REVIEWS[0];
  onClose: () => void;
  readLess: string;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[9998] flex items-center justify-center p-4 sm:p-6"
      style={{ background: "rgba(3,16,20,.78)", backdropFilter: "blur(5px)" }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl p-6 w-full max-w-[480px] max-h-[80vh] overflow-y-auto shadow-[0_32px_80px_rgba(0,0,0,.45)]"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-[#062f35] text-white flex items-center justify-center font-bold text-[14px] flex-shrink-0 uppercase">
            {review.name[0]}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[13px] font-bold text-[#062f35] leading-snug">{review.name}</p>
            <span className="text-[#efa51e] text-[13px] tracking-[1px]">★★★★★</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#00aa6c]/10 flex items-center justify-center text-[#00aa6c]">
              <TaIcon />
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-[#f0f4f4] hover:bg-[#e0e8e8] flex items-center justify-center text-[#454f50] transition-colors cursor-pointer"
            >
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6 6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>
        <p className="text-[13px] leading-[1.8] text-[#454f50] whitespace-pre-line">{review.text}</p>
        <button
          onClick={onClose}
          className="mt-5 text-[11.5px] font-semibold text-[#a87627] hover:underline cursor-pointer"
        >
          {readLess}
        </button>
      </div>
    </div>
  );
}

/* ─── Review card ─── */
function ReviewCard({ review, readMore, onReadMore }: {
  review: typeof REVIEWS[0];
  readMore: string;
  onReadMore: () => void;
}) {
  const isLong = review.text.length > MAX_CHARS;
  const displayText = isLong
    ? review.text.slice(0, MAX_CHARS).trimEnd() + "…"
    : review.text;

  return (
    <article className="flex flex-col bg-white border border-[#eee7df] rounded-2xl shadow-[0_3px_12px_rgba(6,47,53,.07)] p-5 h-full">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-[#062f35] text-white flex items-center justify-center font-bold text-[14px] flex-shrink-0 uppercase">
          {review.name[0]}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[12px] font-bold text-[#062f35] leading-snug truncate">{review.name}</p>
          <span className="text-[#efa51e] text-[13px] tracking-[1px]">★★★★★</span>
        </div>
        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#00aa6c]/10 flex items-center justify-center text-[#00aa6c]">
          <TaIcon />
        </div>
      </div>
      <p className="text-[11.5px] leading-[1.75] text-[#454f50] flex-1 whitespace-pre-line">
        {displayText}
        {isLong && (
          <>
            {" "}
            <button
              onClick={onReadMore}
              className="text-[#a87627] font-semibold hover:underline text-[11px] cursor-pointer"
            >
              {readMore}
            </button>
          </>
        )}
      </p>
    </article>
  );
}

/* ─── Main section ─── */
export function Testimonials() {
  const { t, locale } = useI18n();
  const tm = t.testimonials;

  const wrapRef    = useRef<HTMLDivElement>(null);
  const [cardW,    setCardW]    = useState(0);
  const [selectedReview, setSelectedReview] = useState<typeof REVIEWS[0] | null>(null);
  // index into TRACK; real reviews live at PREPEND … PREPEND+N-1
  const [index,    setIndex]    = useState(PREPEND);
  const [animate,  setAnimate]  = useState(true);
  const [paused,   setPaused]   = useState(false);

  // drag state
  const dragStart   = useRef<number | null>(null);
  const [dragDelta,  setDragDelta]  = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  /* measure card width */
  const measure = useCallback(() => {
    if (!wrapRef.current) return;
    const w = wrapRef.current.clientWidth;
    setCardW(window.innerWidth >= 768 ? Math.round(w / 3) : w);
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  /* seamless loop: snap when we enter a clone zone */
  useEffect(() => {
    if (!animate) return;
    // entered end-clones zone → snap back to real start
    if (index >= PREPEND + N) {
      const t = setTimeout(() => {
        setAnimate(false);
        setIndex(PREPEND);
        requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
      }, TRANS_MS + 10);
      return () => clearTimeout(t);
    }
    // entered start-clones zone → snap forward to real end
    if (index < PREPEND) {
      const t = setTimeout(() => {
        setAnimate(false);
        setIndex(PREPEND + N - 1);
        requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
      }, TRANS_MS + 10);
      return () => clearTimeout(t);
    }
  }, [index, animate]);

  /* auto-advance */
  useEffect(() => {
    if (paused || cardW === 0 || isDragging) return;
    const t = setInterval(() => {
      setAnimate(true);
      setIndex(i => i + 1);
    }, INTERVAL_MS);
    return () => clearInterval(t);
  }, [paused, cardW, isDragging]);

  /* dot click */
  const goTo = (realIdx: number) => {
    setAnimate(true);
    setIndex(PREPEND + realIdx);
  };

  /* navigate */
  const goNext = useCallback(() => { setAnimate(true); setIndex(i => i + 1); }, []);
  const goPrev = useCallback(() => { setAnimate(true); setIndex(i => i - 1); }, []);

  /* ── Drag / swipe handlers (Pointer Events = touch + mouse) ── */
  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    if ((e.target as HTMLElement).closest("button, a")) return;
    dragStart.current = e.clientX;
    setIsDragging(true);
    setDragDelta(0);
    setPaused(true);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  }

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (dragStart.current === null) return;
    setDragDelta(e.clientX - dragStart.current);
  }

  function onPointerUp(e: React.PointerEvent<HTMLDivElement>) {
    if (dragStart.current === null) return;
    const delta = e.clientX - dragStart.current;
    dragStart.current = null;
    setIsDragging(false);
    setDragDelta(0);
    setPaused(false);

    if (Math.abs(delta) >= DRAG_THRESHOLD) {
      delta < 0 ? goNext() : goPrev();
    }
  }

  function onPointerCancel() {
    dragStart.current = null;
    setIsDragging(false);
    setDragDelta(0);
    setPaused(false);
  }

  const realIndex  = index - PREPEND;          // 0 – N-1, for dot highlight
  const translateX = -(index * cardW) + dragDelta;

  const L = {
    addReview: locale === "ar" ? "أضف تقييماً"        : locale === "en" ? "Add a review"       : locale === "it" ? "Aggiungi una recensione" : "Ajouter un avis",
    seeAll:   locale === "ar" ? "عرض جميع التقييمات"  : locale === "en" ? "See all reviews"     : locale === "it" ? "Vedi tutte le recensioni" : "Voir tous les avis",
    readMore: locale === "ar" ? "قراءة المزيد"         : locale === "en" ? "Read more"           : locale === "it" ? "Leggi di più"             : "Lire plus",
    readLess: locale === "ar" ? "أقل"                 : locale === "en" ? "Read less"           : locale === "it" ? "Leggi meno"               : "Lire moins",
  };

  return (
    <>
    {selectedReview && (
      <ReviewModal
        review={selectedReview}
        onClose={() => setSelectedReview(null)}
        readLess={L.readLess}
      />
    )}
    <section
      id="avis"
      className="max-w-[1280px] mx-auto px-[4.2%] py-2 pb-10 bg-[#fffaf4]"
      aria-labelledby="avis-heading"
      onMouseEnter={() => !isDragging && setPaused(true)}
      onMouseLeave={() => !isDragging && setPaused(false)}
    >
      {/* Eyebrow */}
      <Reveal from="scale">
        <div className="flex items-center justify-center gap-2.5 text-[#a77a2c] text-[11px] font-bold tracking-[0.4px] mb-2">
          <motion.span
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="h-px w-20 bg-[#c99b3c] origin-right block"
          />
          {tm.eyebrow}
          <motion.span
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="h-px w-20 bg-[#c99b3c] origin-left block"
          />
        </div>
      </Reveal>

      {/* Title + "Ajouter un avis" */}
      <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
        <Reveal from="up" delay={0.1}>
          <h2 id="avis-heading" className="font-serif text-[24px] font-semibold tracking-[-0.8px] text-ink">
            {tm.title}
          </h2>
        </Reveal>
        <Reveal from="right" delay={0.15}>
          <a
            href={TA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[11px] font-bold text-white bg-[#062f35] hover:bg-[#a87627] px-4 py-2 rounded-full transition-colors duration-200 shadow-sm"
          >
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round">
              <path d="M12 5v14M5 12h14"/>
            </svg>
            {L.addReview}
          </a>
        </Reveal>
      </div>

      {/* ── Sliding track ── */}
      <div
        ref={wrapRef}
        className="overflow-x-clip"
        style={{ cursor: isDragging ? "grabbing" : "grab", touchAction: "pan-y" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
      >
        {cardW > 0 && (
          <div
            style={{
              display:    "flex",
              width:      `${TRACK.length * cardW}px`,
              transform:  `translateX(${translateX}px)`,
              transition: !isDragging && animate
                ? `transform ${TRANS_MS}ms cubic-bezier(0.4,0,0.2,1)`
                : "none",
              userSelect: "none",
              WebkitUserSelect: "none",
            }}
          >
            {TRACK.map((review, i) => (
              <div
                key={i}
                style={{ width: cardW, flexShrink: 0 }}
                className="px-1.5 box-border py-0.5"
              >
                <ReviewCard review={review} readMore={L.readMore} onReadMore={() => setSelectedReview(review)} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Progress dots */}
      <div className="flex justify-center items-center gap-2 mt-4">
        {REVIEWS.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 cursor-pointer ${
              i === realIndex
                ? "w-5 h-[6px] bg-[#a87627]"
                : "w-[6px] h-[6px] bg-[#d4c4a8] hover:bg-[#c9a85c]"
            }`}
          />
        ))}
      </div>

      {/* "Voir tous les avis" */}
      <Reveal delay={0.2} className="mt-6 flex justify-center">
        <motion.a
          href={TA_URL}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 280, damping: 22 }}
          className="flex items-center gap-2 text-[12px] font-bold text-[#062f35] border-2 border-[#062f35] px-8 py-3 rounded-full hover:bg-[#062f35] hover:text-white transition-colors duration-200"
        >
          {L.seeAll}
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            className={locale === "ar" ? "rotate-180" : ""}>
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </motion.a>
      </Reveal>
    </section>
    </>
  );
}
