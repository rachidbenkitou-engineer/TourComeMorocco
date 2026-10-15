"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { getExcursion, excursions } from "@/data/excursions";
import { useBooking } from "@/components/BookingModal";
import { useI18n } from "@/i18n/I18nProvider";

function IconClock() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>
    </svg>
  );
}
function IconPin() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>
    </svg>
  );
}
function IconUsers() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  );
}
function IconGlobe() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  );
}
function IconShield() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  );
}
function IconZap() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  );
}
function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5"/>
    </svg>
  );
}
function IconX() {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18M6 6l12 12"/>
    </svg>
  );
}
function IconArrow() {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7"/>
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

const INCLUDED = [
  "Chauffeur privé tout au long du trajet",
  "Prise en charge depuis votre hébergement",
  "Eau minérale à bord",
  "Guide local francophone",
];
const NOT_INCLUDED = [
  "Déjeuner et dîner",
  "Billets d'entrée des sites",
  "Pourboires (au bon vouloir)",
  "Activités optionnelles",
];

export default function ExcursionDetail({ slug }: { slug: string }) {
  const excursion = getExcursion(slug);
  if (!excursion) notFound();

  const { open: openBooking } = useBooking();
  const { t } = useI18n();
  const dt = t.pages.excursions.detail;
  const pg = t.pages.excursions;

  const bookFn = () => openBooking(
    `${dt.privateExcursion} : ${excursion.title} (${excursion.duration})`,
    excursion.fromPrice
  );

  const related = excursions.filter(e => e.slug !== excursion.slug).slice(0, 3);

  const facts = [
    { icon: <IconClock />, label: "Durée",  value: excursion.duration },
    { icon: <IconPin />,   label: "Départ", value: "Marrakech" },
    { icon: <IconUsers />, label: "Groupe", value: "Privé · jusqu'à 7" },
    { icon: <IconGlobe />, label: "Langue", value: "FR · EN · AR" },
  ];

  return (
    <main className="min-h-screen bg-[#fff8f0]">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden" style={{ height: "72vh", minHeight: "500px" }}>
          <div className="absolute inset-0 kenburns">
            <Image src={excursion.image} alt={excursion.title} fill priority sizes="100vw" className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#031e22]/93 via-[#031e22]/50 to-[#031e22]/18" />

          <div className="relative h-full flex flex-col justify-end pb-12 px-[clamp(16px,4.5vw,56px)] max-w-[1280px] mx-auto"
            style={{ paddingTop: "78px" }}>
            {/* Breadcrumb */}
            <div className="flex items-center gap-1.5 text-white/45 text-[11px] mb-5">
              <Link href="/" className="hover:text-white/75 transition-colors">Accueil</Link>
              <span>/</span>
              <Link href="/excursions" className="hover:text-white/75 transition-colors">{t.nav.excursions}</Link>
              <span>/</span>
              <span className="text-white/65 line-clamp-1">{excursion.title}</span>
            </div>

            <span className="inline-flex items-center gap-1.5 bg-[#f5b63f]/15 border border-[#f5b63f]/35 text-[#f5b63f] text-[10px] font-bold px-3 py-1 rounded-full mb-4 w-fit uppercase tracking-wider">
              {dt.privateExcursion} · Depuis Marrakech
            </span>

            <h1 className="font-serif font-semibold text-white leading-tight max-w-[780px] mb-4"
              style={{ fontSize: "clamp(26px,4.5vw,56px)" }}>
              {excursion.title}
            </h1>
            <p className="text-white/75 max-w-[560px] mb-7 leading-relaxed"
              style={{ fontSize: "clamp(13px,1.1vw,15.5px)" }}>
              {excursion.short}
            </p>

            {/* Pills */}
            <div className="flex flex-wrap gap-2 text-[12px]">
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/18 text-white px-3 py-1.5 rounded-full font-medium">
                <IconClock /> {excursion.duration}
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/18 text-white px-3 py-1.5 rounded-full font-medium">
                <IconPin /> Depuis Marrakech
              </span>
              <span className="flex items-center gap-1.5 bg-[#f5b63f] text-[#1c2e2e] font-bold px-3 py-1.5 rounded-full">
                {excursion.fromPrice ?? dt.getQuote}
              </span>
            </div>
          </div>
        </section>

        {/* ── Sticky in-page nav ── */}
        <nav className="sticky z-30 border-b border-[#e4eaeb] bg-white/92 backdrop-blur-sm"
          style={{ top: "60px" }} aria-label={excursion.title}>
          <div className="max-w-[1280px] mx-auto px-[clamp(16px,4.5vw,56px)] flex gap-6 overflow-x-auto text-[12.5px] font-semibold">
            {[
              { href: "#overview",   label: "Vue d'ensemble" },
              { href: "#programme",  label: dt.itinerary },
              { href: "#highlights", label: dt.highlights },
              ...(excursion.faqs.length > 0 ? [{ href: "#faq", label: dt.faq }] : []),
            ].map(s => (
              <a key={s.href} href={s.href}
                className="shrink-0 border-b-2 border-transparent py-3.5 text-[#6a8a8d] hover:border-[#f5b63f] hover:text-[#062f35] transition-colors">
                {s.label}
              </a>
            ))}
          </div>
        </nav>

        {/* ── Body ── */}
        <div className="max-w-[1280px] mx-auto px-[clamp(16px,4.5vw,56px)] py-14">
          <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">

            {/* ── Left column ── */}
            <div className="space-y-16 min-w-0">

              {/* Overview */}
              <section id="overview" className="scroll-mt-[140px]">
                <h2 className="font-serif text-[24px] font-semibold text-[#062f35] mb-5">Vue d&apos;ensemble</h2>
                <p className="text-[15px] text-[#3a5a5e] leading-[1.75] mb-8">{excursion.intro}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {facts.map(f => (
                    <div key={f.label} className="rounded-2xl border border-[#dce8e8] bg-white p-4">
                      <span className="text-[#f5b63f]">{f.icon}</span>
                      <div className="mt-2 text-[10px] text-[#8a9ea0] font-semibold uppercase tracking-[0.1em]">{f.label}</div>
                      <div className="text-[12.5px] font-semibold text-[#062f35] mt-0.5">{f.value}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Programme — numbered timeline */}
              <section id="programme" className="scroll-mt-[140px]">
                <h2 className="font-serif text-[24px] font-semibold text-[#062f35] mb-8">{dt.itinerary}</h2>
                <ol className="relative space-y-6 before:absolute before:inset-y-2 before:left-[19px] before:w-px before:bg-gradient-to-b before:from-[#f5b63f] before:via-[#e4eaeb] before:to-transparent">
                  {excursion.itinerary.map((step, i) => (
                    <li key={i} className="relative pl-14">
                      <span className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border-4 border-[#fff8f0] bg-[#f5b63f] text-[13px] font-bold text-[#1c2e2e] shadow-card">
                        {i + 1}
                      </span>
                      <div className="rounded-2xl border border-[#dce8e8] bg-white p-5 shadow-card">
                        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#a87627]">{step.day}</span>
                        <h3 className="font-serif text-[16px] text-[#062f35] mt-1 mb-2 font-semibold">{step.title}</h3>
                        <p className="text-[13px] text-[#5a7578] leading-relaxed">{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>

              {/* Points forts */}
              <section id="highlights" className="scroll-mt-[140px]">
                <h2 className="font-serif text-[24px] font-semibold text-[#062f35] mb-6">{dt.highlights}</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {excursion.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 rounded-2xl border border-[#dce8e8] bg-white p-4">
                      <span className="mt-0.5 w-6 h-6 flex-shrink-0 rounded-full bg-[#f5b63f]/15 border border-[#f5b63f]/30 flex items-center justify-center text-[#b07d21]">
                        <IconCheck />
                      </span>
                      <span className="text-[13px] text-[#3a5a5e] leading-snug font-medium">{h}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Inclus / Non inclus */}
              <section className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-[#dce8e8] bg-white p-6">
                  <h2 className="font-serif text-[20px] font-semibold text-[#062f35] mb-5">Inclus</h2>
                  <ul className="space-y-3">
                    {INCLUDED.map(item => (
                      <li key={item} className="flex items-start gap-2.5 text-[13px] text-[#3a5a5e]">
                        <span className="mt-0.5 flex-shrink-0 text-[#25d366]"><IconCheck /></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-[#dce8e8] bg-white p-6">
                  <h2 className="font-serif text-[20px] font-semibold text-[#062f35] mb-5">Non inclus</h2>
                  <ul className="space-y-3">
                    {NOT_INCLUDED.map(item => (
                      <li key={item} className="flex items-start gap-2.5 text-[13px] text-[#5a7578]">
                        <span className="mt-0.5 flex-shrink-0 text-[#e05b5b]"><IconX /></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* FAQ */}
              {excursion.faqs.length > 0 && (
                <section id="faq" className="scroll-mt-[140px]">
                  <h2 className="font-serif text-[24px] font-semibold text-[#062f35] mb-6">{dt.faq}</h2>
                  <div className="bg-white rounded-2xl border border-[#dce8e8] px-6">
                    {excursion.faqs.map((faq, i) => (
                      <FaqItem key={i} question={faq.question} answer={faq.answer} />
                    ))}
                  </div>
                </section>
              )}

            </div>

            {/* ── Right column — sticky sidebar ── */}
            <aside className="lg:sticky lg:top-[110px] lg:self-start">
              <div className="rounded-2xl overflow-hidden border border-[#f5b63f]/25 shadow-lift">
                {/* Dark zellige header */}
                <div className="bg-[#062f35] bg-zellige p-6">
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#f5b63f]/70">{dt.privateExcursion}</span>
                  {excursion.fromPrice ? (
                    <>
                      <p className="font-serif text-white mt-1 leading-tight" style={{ fontSize: "clamp(22px,2.5vw,30px)" }}>
                        {excursion.fromPrice}
                      </p>
                      <p className="text-white/50 text-[11.5px] mt-0.5">par groupe · véhicule privé</p>
                    </>
                  ) : (
                    <>
                      <p className="font-serif text-white mt-1 leading-tight" style={{ fontSize: "clamp(20px,2.2vw,26px)" }}>
                        {dt.getQuote}
                      </p>
                      <p className="text-white/50 text-[11.5px] mt-0.5">Prix selon groupe et véhicule</p>
                    </>
                  )}
                </div>
                {/* White body */}
                <div className="bg-white p-6 space-y-3">
                  <p className="text-[12.5px] text-[#5a7578] leading-relaxed">{dt.quoteDesc}</p>

                  <button type="button" onClick={bookFn}
                    className="flex items-center justify-center gap-2.5 w-full rounded-full text-[11.5px] font-bold uppercase tracking-[0.1em] py-3.5 transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(245,182,63,.35)] cursor-pointer"
                    style={{ background: "linear-gradient(135deg,#f5c842 0%,#e8921e 100%)", color: "#1c2e2e" }}>
                    {dt.bookExcursion}
                  </button>

                  <ul className="pt-1 space-y-2.5">
                    {[
                      { icon: <IconShield />, text: "Prise en charge depuis votre hôtel" },
                      { icon: <IconZap />,    text: "Réponse en moins d'une heure" },
                      { icon: <IconUsers />,  text: "Groupe privé · jusqu'à 7 personnes" },
                    ].map(item => (
                      <li key={item.text} className="flex items-center gap-2 text-[12px] text-[#5a7578]">
                        <span className="text-[#a87627] flex-shrink-0">{item.icon}</span>
                        {item.text}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-3 border-t border-[#f0ebe3] space-y-2">
                    {pg.guarantees.map((g, i) => (
                      <div key={i} className="flex items-center gap-2 text-[12px] text-[#5a7578]">
                        <span className="w-4 h-4 rounded-full bg-[#f5b63f]/15 border border-[#f5b63f]/30 flex items-center justify-center text-[#b07d21] flex-shrink-0">
                          <IconCheck />
                        </span>
                        {g}
                      </div>
                    ))}
                  </div>

                  <Link href="/excursions"
                    className="mt-1 flex items-center justify-center text-[12px] text-[#8a9ea0] hover:text-[#062f35] transition-colors">
                    {dt.backToExcursions}
                  </Link>
                </div>
              </div>
            </aside>

          </div>
        </div>

        {/* ── Excursions similaires ── */}
        <section className="bg-white border-t border-[#e8efef] py-16">
          <div className="max-w-[1280px] mx-auto px-[clamp(16px,4.5vw,56px)]">
            <div className="flex items-center gap-2.5 mb-1">
              <span className="h-px w-7 bg-[#f5b63f] opacity-70 flex-shrink-0" aria-hidden />
              <p className="font-script text-[#f5b63f]"
                style={{ fontSize: "clamp(18px,1.8vw,24px)", transform: "rotate(-1deg)" }}>
                {t.excursions.script}
              </p>
            </div>
            <h2 className="font-serif text-[#062f35] font-semibold mb-8" style={{ fontSize: "clamp(22px,2.8vw,32px)" }}>
              À découvrir aussi
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map(rel => (
                <Link key={rel.slug} href={`/excursions/${rel.slug}`}
                  className="group bg-[#fff8f0] rounded-2xl overflow-hidden shadow-card hover:shadow-lift transition-all duration-300 hover:-translate-y-1.5 flex flex-col">
                  <div className="relative h-[180px] overflow-hidden flex-shrink-0">
                    <Image src={rel.image} alt={rel.title} fill
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#031e22]/72 to-transparent" />
                    <span className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-[#062f35]/80 backdrop-blur-sm text-[#f5b63f] text-[10px] font-bold px-2.5 py-1 rounded-full">
                      <IconClock /> {rel.duration}
                    </span>
                    {rel.fromPrice && (
                      <span className="absolute top-3 right-3 bg-[#f5b63f] text-[#1c2e2e] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                        {rel.fromPrice}
                      </span>
                    )}
                  </div>
                  <div className="p-4 flex-1">
                    <h3 className="font-serif text-[14.5px] font-semibold text-[#062f35] leading-tight mb-1.5">{rel.title}</h3>
                    <p className="text-[12px] text-[#5a7578] line-clamp-2">{rel.short}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/excursions"
                className="inline-flex items-center gap-2 border border-[#062f35] text-[#062f35] hover:bg-[#062f35] hover:text-white text-[12.5px] font-semibold px-6 py-2.5 rounded-full transition-all duration-200">
                {t.excursions.seeAll} <IconArrow />
              </Link>
            </div>
          </div>
        </section>

        {/* ── CTA band ── */}
        <div className="bg-[#062f35] bg-zellige">
          <div className="max-w-[1280px] mx-auto px-[clamp(16px,4.5vw,56px)] py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <p className="font-script text-[#f5b63f] mb-1"
                style={{ fontSize: "clamp(20px,2.2vw,28px)", transform: "rotate(-1deg)" }}>
                {dt.ctaTitle}
              </p>
              <p className="text-white/65 text-[13.5px] max-w-[380px]">{dt.ctaDesc}</p>
            </div>
            <button type="button" onClick={bookFn}
              className="flex items-center gap-3 rounded-full transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_12px_28px_rgba(245,182,63,.4)] whitespace-nowrap flex-shrink-0 cursor-pointer"
              style={{
                background: "linear-gradient(135deg,#f5c842 0%,#e8921e 100%)",
                fontSize: "11px", letterSpacing: "0.12em", fontWeight: 700,
                padding: "13px 14px 13px 26px", color: "#1c2e2e", textTransform: "uppercase",
              }}>
              {dt.bookExcursion}
              <span className="w-7 h-7 rounded-full bg-[#1c2e2e]/15 flex items-center justify-center text-[15px]">→</span>
            </button>
          </div>
        </div>

      </main>
  );
}
