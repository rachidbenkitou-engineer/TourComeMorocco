"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { getTour } from "@/data/tours";
import { useBooking } from "@/components/BookingModal";
import { useI18n } from "@/i18n/I18nProvider";

function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5"/>
    </svg>
  );
}
function IconChevron({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>
      <path d="M6 9l6 6 6-6"/>
    </svg>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#e4eaea] last:border-0">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between gap-4 py-4 text-left cursor-pointer"
      >
        <span className="text-[13.5px] font-semibold text-[#062f35]">{question}</span>
        <span className="flex-shrink-0 text-[#a87627]"><IconChevron open={open} /></span>
      </button>
      {open && (
        <p className="pb-4 text-[13px] text-[#5a7578] leading-relaxed">{answer}</p>
      )}
    </div>
  );
}

export default function TourDetail({ slug }: { slug: string }) {
  const tour = getTour(slug);
  if (!tour) notFound();

  const { open: openBooking } = useBooking();
  const { t, locale } = useI18n();
  const dt  = t.pages.tours.detail;
  const loc = locale as "fr" | "en" | "ar";

  const title = tour.title[loc];
  const bookTour = () => openBooking(`${dt.privateTour} : ${title} (${tour.days[loc]})`);

  return (
    <main className="min-h-screen bg-[#fff8f0]">

        {/* ── Hero ── */}
        <div className="relative h-[55vh] min-h-[380px] overflow-hidden" style={{ paddingTop: "78px" }}>
          <Image src={tour.image} alt={title} fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#031e22]/90 via-[#031e22]/40 to-[#031e22]/30" />

          <div className="absolute inset-0 flex flex-col justify-end pb-10 px-[clamp(16px,4.5vw,56px)] max-w-[1280px] mx-auto">
            <div className="flex items-center gap-2 text-white/50 text-[11px] mb-4">
              <Link href="/tours" className="hover:text-white/80 transition-colors">
                {t.nav.tours}
              </Link>
              <span>/</span>
              <span className="text-white/70">{title}</span>
            </div>
            <span className="inline-flex items-center gap-2 bg-[#f5b63f] text-[#1c2e2e] text-[10.5px] font-bold px-3 py-1 rounded-full mb-4 w-fit">
              {tour.days[loc]} · {dt.privateTour}
            </span>
            <h1 className="font-serif font-semibold text-white leading-tight max-w-[680px]"
              style={{ fontSize: "clamp(26px,4vw,52px)" }}>
              {title}
            </h1>
          </div>
        </div>

        {/* ── Body ── */}
        <div className="max-w-[1280px] mx-auto px-[clamp(16px,4.5vw,56px)] py-14">
          <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">

            {/* ── Left column ── */}
            <div className="space-y-12">

              {/* Intro */}
              <p className="text-[15px] text-[#3a5a5e] leading-[1.75]">{tour.intro[loc]}</p>

              {/* Itinerary */}
              <div>
                <h2 className="font-serif text-[22px] font-semibold text-[#062f35] mb-6">{dt.itinerary}</h2>
                <div className="space-y-4">
                  {tour.itinerary.map((day, i) => (
                    <div key={i} className="rounded-xl border border-[#dce8e8] bg-white p-5">
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#a87627]">{day.day[loc]}</span>
                      <h3 className="font-serif text-[16px] text-[#062f35] mt-1 mb-2">{day.title[loc]}</h3>
                      <p className="text-[13px] text-[#5a7578] leading-relaxed">{day.description[loc]}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h2 className="font-serif text-[22px] font-semibold text-[#062f35] mb-5">{dt.highlights}</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {tour.highlights[loc].map((h, i) => (
                    <li key={i} className="flex items-start gap-3 rounded-xl border border-[#dce8e8] bg-white p-4">
                      <span className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full bg-[#f5b63f]/15 border border-[#f5b63f]/30 flex items-center justify-center text-[#b07d21]">
                        <IconCheck />
                      </span>
                      <span className="text-[13px] text-[#3a5a5e] leading-snug">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Gallery */}
              {tour.gallery.length > 0 && (
                <div>
                  <h2 className="font-serif text-[22px] font-semibold text-[#062f35] mb-5">{dt.gallery}</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {tour.gallery.map((src, i) => (
                      <div key={i} className="relative aspect-square overflow-hidden rounded-xl border border-[#dce8e8]">
                        <Image src={src} alt={`${title} — ${i + 1}`} fill
                          sizes="(max-width:640px) 50vw, 220px"
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ── Right column — sticky sidebar ── */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-2xl border border-[#f5b63f]/30 bg-white shadow-[0_4px_24px_rgba(6,47,53,.08)] p-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#a87627]">{dt.privateTour}</span>
                <p className="font-serif text-[24px] text-[#f5b63f] mt-1 mb-3">{dt.getQuote}</p>
                <p className="text-[13px] text-[#5a7578] leading-relaxed mb-6">{dt.quoteDesc}</p>
                <button type="button" onClick={bookTour}
                  className="flex items-center justify-center gap-2.5 w-full rounded-full text-[11.5px] font-bold uppercase tracking-[0.1em] py-3.5 transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(245,182,63,.35)] cursor-pointer"
                  style={{ background: "linear-gradient(135deg,#f5c842 0%,#e8921e 100%)", color: "#1c2e2e" }}
                >
                  {dt.bookTour}
                </button>
                <Link href="/tours"
                  className="mt-4 flex items-center justify-center text-[12px] text-[#5a7578] hover:text-[#062f35] transition-colors">
                  {dt.backToTours}
                </Link>
              </div>
            </aside>
          </div>
        </div>

        {/* ── FAQ ── */}
        {tour.faqs.length > 0 && (
          <div className="bg-white border-t border-[#e8efef]">
            <div className="max-w-[780px] mx-auto px-[clamp(16px,4.5vw,56px)] py-14">
              <h2 className="font-serif text-[24px] font-semibold text-[#062f35] mb-8 text-center">
                {dt.faq}
              </h2>
              <div>
                {tour.faqs.map((faq, i) => (
                  <FaqItem key={i} question={faq.question[loc]} answer={faq.answer[loc]} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── CTA ── */}
        <div className="bg-[#062f35]">
          <div className="max-w-[1280px] mx-auto px-[clamp(16px,4.5vw,56px)] py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <p className="font-script text-[#f5b63f] mb-1"
                style={{ fontSize: "clamp(20px,2.2vw,28px)", transform: "rotate(-1deg)" }}>
                {dt.ctaTitle}
              </p>
              <p className="text-white/65 text-[13.5px] max-w-[380px]">{dt.ctaDesc}</p>
            </div>
            <button type="button" onClick={bookTour}
              className="flex items-center gap-3 rounded-full transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_12px_28px_rgba(245,182,63,.4)] whitespace-nowrap flex-shrink-0 cursor-pointer"
              style={{
                background: "linear-gradient(135deg,#f5c842 0%,#e8921e 100%)",
                fontSize: "11px", letterSpacing: "0.12em", fontWeight: 700,
                padding: "13px 14px 13px 26px", color: "#1c2e2e", textTransform: "uppercase",
              }}
            >
              {dt.bookTour}
              <span className="w-7 h-7 rounded-full bg-[#1c2e2e]/15 flex items-center justify-center text-[15px]">→</span>
            </button>
          </div>
        </div>

      </main>
  );
}
