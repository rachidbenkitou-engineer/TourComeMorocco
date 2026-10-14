"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState, use } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getTour } from "@/data/tours";

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
        <p className="pb-4 text-[13px] text-[#5a7578] leading-relaxed">
          {answer}
        </p>
      )}
    </div>
  );
}

export default function TourDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const tour = getTour(slug);
  if (!tour) notFound();

  const whatsappMsg = encodeURIComponent(`Hello, I'd like to enquire about the "${tour.title}" (${tour.days}) private tour.`);
  const whatsappUrl = `https://wa.me/212600000000?text=${whatsappMsg}`;

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#fff8f0]">

        {/* ── Hero ── */}
        <div className="relative h-[55vh] min-h-[380px] overflow-hidden" style={{ paddingTop: "78px" }}>
          <Image
            src={tour.image}
            alt={tour.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#031e22]/90 via-[#031e22]/40 to-[#031e22]/30" />

          <div className="absolute inset-0 flex flex-col justify-end pb-10 px-[clamp(16px,4.5vw,56px)] max-w-[1280px] mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-white/50 text-[11px] mb-4">
              <Link href="/tours" className="hover:text-white/80 transition-colors">Tours</Link>
              <span>/</span>
              <span className="text-white/70">{tour.title}</span>
            </div>

            <span className="inline-flex items-center gap-2 bg-[#f5b63f] text-[#1c2e2e] text-[10.5px] font-bold px-3 py-1 rounded-full mb-4 w-fit">
              {tour.days} · Private Tour
            </span>
            <h1
              className="font-serif font-semibold text-white leading-tight max-w-[680px]"
              style={{ fontSize: "clamp(26px,4vw,52px)" }}
            >
              {tour.title}
            </h1>
          </div>
        </div>

        {/* ── Body ── */}
        <div className="max-w-[1280px] mx-auto px-[clamp(16px,4.5vw,56px)] py-14">
          <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">

            {/* ── Left column ── */}
            <div className="space-y-12">

              {/* Intro */}
              <p className="text-[15px] text-[#3a5a5e] leading-[1.75]">{tour.intro}</p>

              {/* Itinerary */}
              <div>
                <h2 className="font-serif text-[22px] font-semibold text-[#062f35] mb-6">Itinerary</h2>
                <div className="space-y-4">
                  {tour.itinerary.map((day, i) => (
                    <div key={i} className="rounded-xl border border-[#dce8e8] bg-white p-5">
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#a87627]">{day.day}</span>
                      <h3 className="font-serif text-[16px] text-[#062f35] mt-1 mb-2">{day.title}</h3>
                      <p className="text-[13px] text-[#5a7578] leading-relaxed">{day.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h2 className="font-serif text-[22px] font-semibold text-[#062f35] mb-5">Tour Highlights</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {tour.highlights.map((h, i) => (
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
                  <h2 className="font-serif text-[22px] font-semibold text-[#062f35] mb-5">Gallery</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {tour.gallery.map((src, i) => (
                      <div key={i} className="relative aspect-square overflow-hidden rounded-xl border border-[#dce8e8]">
                        <Image
                          src={src}
                          alt={`${tour.title} — photo ${i + 1}`}
                          fill
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
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#a87627]">Private Tour</span>
                <p className="font-serif text-[24px] text-[#f5b63f] mt-1 mb-3">Get a Quote</p>
                <p className="text-[13px] text-[#5a7578] leading-relaxed mb-6">
                  Every tour is priced for your exact dates and group size. Send an enquiry and we'll come back with a fixed quote within the hour.
                </p>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full rounded-full text-[11.5px] font-bold uppercase tracking-[0.1em] py-3.5 transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(245,182,63,.35)]"
                  style={{ background: "linear-gradient(135deg,#f5c842 0%,#e8921e 100%)", color: "#1c2e2e" }}
                >
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Book on WhatsApp
                </a>

                <Link
                  href="/tours"
                  className="mt-4 flex items-center justify-center text-[12px] text-[#5a7578] hover:text-[#062f35] transition-colors"
                >
                  ← Back to all tours
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
                Frequently Asked Questions
              </h2>
              <div>
                {tour.faqs.map((faq, i) => (
                  <FaqItem key={i} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── CTA ── */}
        <div className="bg-[#062f35]">
          <div className="max-w-[1280px] mx-auto px-[clamp(16px,4.5vw,56px)] py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <p
                className="font-script text-[#f5b63f] mb-1"
                style={{ fontSize: "clamp(20px,2.2vw,28px)", transform: "rotate(-1deg)" }}
              >
                Ready to explore?
              </p>
              <p className="text-white/65 text-[13.5px] max-w-[380px]">
                Contact us now to get a personalised quote for this tour.
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-full transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_12px_28px_rgba(245,182,63,.4)] whitespace-nowrap flex-shrink-0"
              style={{
                background: "linear-gradient(135deg,#f5c842 0%,#e8921e 100%)",
                fontSize: "11px", letterSpacing: "0.12em", fontWeight: 700,
                padding: "13px 14px 13px 26px", color: "#1c2e2e", textTransform: "uppercase",
              }}
            >
              Book This Tour
              <span className="w-7 h-7 rounded-full bg-[#1c2e2e]/15 flex items-center justify-center text-[15px]">→</span>
            </a>
          </div>
        </div>

      </main>

      <Footer />
    </>
  );
}
