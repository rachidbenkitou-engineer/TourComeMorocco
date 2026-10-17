"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Clock, Route, Wallet, Check, ChevronDown } from "lucide-react";

import { TransferBookingForm } from "@/components/TransferBookingForm";
import { getTransferBySlug, transfers } from "@/data/transfers";
import { getTransferContent } from "@/lib/transferContent";
import { useI18n } from "@/i18n/I18nProvider";

const CATEGORY_ICONS: Record<string, string> = {
  airport: "✈",
  city:    "🏙",
  coast:   "🌊",
  desert:  "🏜",
};

function localizeUnits(str: string, locale: string) {
  if (locale !== "ar") return str;
  return str
    .replace(/\bkm\b/g, "كم")
    .replace(/\bmin\b/g, "د")
    .replace(/\bh\b/g, "ساعة");
}

const CATEGORY_LABELS: Record<string, Record<string, string>> = {
  airport: { fr: "Aéroport",        en: "Airport",          ar: "مطار",              it: "Aeroporto"          },
  city:    { fr: "Ville",           en: "City",             ar: "مدينة",             it: "Città"              },
  coast:   { fr: "Côte & Sud",      en: "Coast & South",    ar: "الساحل والجنوب",    it: "Costa & Sud"        },
  desert:  { fr: "Désert & Nature", en: "Desert & Nature",  ar: "الصحراء والطبيعة",  it: "Deserto & Natura"   },
};

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#e8e3da] rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left text-[13.5px] font-semibold text-[#062f35] hover:bg-[#f9f6f0] transition-colors cursor-pointer"
      >
        <span>{question}</span>
        <ChevronDown size={16} className={`flex-shrink-0 text-[#a87627] transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-5 pb-4 text-[13px] text-[#5a7a7c] leading-relaxed border-t border-[#e8e3da] pt-4">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function TransferDetail({ slug }: { slug: string }) {
  const { t, locale } = useI18n();

  const _transfer = getTransferBySlug(slug);
  if (!_transfer) notFound();
  const transfer = _transfer!;

  const c = getTransferContent(transfer, locale);
  const dest = transfer.to[locale as "fr" | "en" | "ar"] ?? transfer.to.fr;
  const mktName = locale === "ar" ? "مراكش" : "Marrakech";
  const arrow   = locale === "ar" ? "←" : "→";
  const categoryLabel = CATEGORY_LABELS[transfer.category]?.[locale] ?? transfer.category;

  const related = transfers
    .filter(tr => tr.slug !== slug && tr.category === transfer.category)
    .slice(0, 3);

  const priceRows = [
    { label: c.labels.sedan,      price: transfer.prices.sedan      },
    { label: c.labels.van,        price: transfer.prices.van        },
    { label: c.labels.luxuryVan,  price: transfer.prices.luxuryVan  },
  ];

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden bg-[#062f35]">
        <div className="absolute inset-0 kenburns">
          <Image
            src={`/images/${transfer.image}`}
            alt={`${mktName} ${arrow} ${dest}`}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#021e22] via-[#062f35]/50 to-transparent" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pb-12 pt-28">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[11px] text-white/50 mb-5 font-medium tracking-wide uppercase">
            <Link href={`/${locale}`} className="hover:text-white/80 transition-colors">
              {locale === "ar" ? "الرئيسية" : locale === "en" ? "Home" : locale === "it" ? "Home" : "Accueil"}
            </Link>
            <span>/</span>
            <Link href={`/${locale}/transfers`} className="hover:text-white/80 transition-colors">{t.nav.transfers}</Link>
            <span>/</span>
            <span className="text-[#f5b63f]">{dest}</span>
          </nav>

          {/* Eyebrow pills */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f5b63f]/15 border border-[#f5b63f]/30 text-[#f5b63f] text-[11px] font-semibold tracking-wider uppercase">
              {CATEGORY_ICONS[transfer.category]} {categoryLabel}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white/70 text-[11px] font-semibold tracking-wider uppercase">
              {locale === "ar" ? "سعر ثابت" : locale === "en" ? "Fixed Price" : locale === "it" ? "Prezzo fisso" : "Prix Fixe"}
            </span>
          </div>

          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
            {c.h1}
          </h1>

          <div className="flex flex-wrap items-center gap-4">
            <span className="text-3xl font-bold text-[#f5b63f]">{c.labels.from} €{transfer.prices.sedan}</span>
            <span className="text-white/50 text-sm">{localizeUnits(transfer.duration, locale)} · {localizeUnits(transfer.distance, locale)}</span>
          </div>
        </div>
      </section>

      {/* ── Quick facts bar ────────────────────────────────── */}
      <section className="border-y border-[#e8e3da] bg-[#f9f6f0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 sm:grid-cols-3 gap-6 py-7">
          {[
            { icon: <Route size={18} />, label: c.labels.distance, value: localizeUnits(transfer.distance, locale) },
            { icon: <Clock size={18} />, label: c.labels.duration, value: localizeUnits(transfer.duration, locale) },
            { icon: <Wallet size={18} />, label: c.labels.from,    value: `€${transfer.prices.sedan}` },
          ].map((f, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="grid w-11 h-11 place-items-center rounded-xl border border-[#f5b63f]/25 bg-[#f5b63f]/8 text-[#a87627] flex-shrink-0">
                {f.icon}
              </span>
              <span>
                <span className="block text-[10px] uppercase tracking-widest text-[#8aabae] font-medium">{f.label}</span>
                <span className="font-playfair text-lg text-[#062f35]">{f.value}</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Body ───────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:grid lg:grid-cols-[1.55fr_1fr] lg:gap-12">

        {/* ── Left column ──────────────────────────────────── */}
        <div className="space-y-12">

          {/* Back link + Book button */}
          <div className="flex items-center justify-between gap-3">
            <Link
              href={`/${locale}/transfers`}
              className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#3a6568] hover:text-[#062f35] transition-colors group min-w-0"
            >
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                className="flex-shrink-0 group-hover:-translate-x-0.5 transition-transform">
                <path d="M19 12H5M12 5l-7 7 7 7"/>
              </svg>
              <span className="truncate">{locale === "ar" ? "رجوع" : locale === "en" ? "Back" : locale === "it" ? "Indietro" : "Retour"}</span>
            </Link>

            <button
              type="button"
              onClick={() => document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth", block: "start" })}
              className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                bg-gradient-to-r from-[#f5b63f] to-[#e8921e]
                text-[#062f35] text-[12.5px] font-bold
                shadow-[0_4px_18px_rgba(245,182,63,.45)]
                hover:shadow-[0_6px_24px_rgba(245,182,63,.65)]
                hover:from-[#ffc84d] hover:to-[#f5b235]
                transition-all duration-200 cursor-pointer
                animate-[float-btn_2s_ease-in-out_infinite]"
            >
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>
              </svg>
              {locale === "ar" ? "احجز هذا النقل" : locale === "en" ? "Book this transfer" : locale === "it" ? "Prenota questo trasferimento" : "Réserver ce transfert"}
            </button>
          </div>

          {/* Intro */}
          <div>
            {c.intro.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="mb-4 text-[14px] leading-relaxed text-[#3a5c5e]"
              >
                {para}
              </motion.p>
            ))}
          </div>

          {/* Included */}
          <div>
            <h2 className="font-playfair text-2xl text-[#062f35] mb-5">{c.includedTitle}</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {c.included.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[13.5px] text-[#3a5c5e]">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-[1px]">
                    <Check size={11} className="text-emerald-600" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Price table */}
          <div>
            <h2 className="font-playfair text-2xl text-[#062f35] mb-5">{c.priceTitle}</h2>
            <div className="overflow-hidden rounded-2xl border border-[#e8e3da]">
              {priceRows.map((row, i) => (
                <div
                  key={row.label}
                  className={`flex items-center justify-between gap-4 px-5 py-4 ${i % 2 ? "bg-[#f9f6f0]" : "bg-white"}`}
                >
                  <span className="text-[13px] text-[#062f35]">{row.label}</span>
                  <span className="font-playfair text-lg text-[#f5b63f] shrink-0">
                    €{row.price}
                    <span className="ms-1 text-[11px] text-[#8aabae] font-normal"> {c.labels.perVehicle}</span>
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-[11px] text-[#8aabae]">{c.priceNote}</p>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="font-playfair text-2xl text-[#062f35] mb-5">{c.faqTitle}</h2>
            <div className="space-y-3">
              {c.faqs.map((faq, i) => (
                <FaqItem key={i} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>

          {/* Related transfers */}
          {related.length > 0 && (
            <div>
              <h2 className="font-playfair text-2xl text-[#062f35] mb-5">{c.labels.moreFrom}</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {related.map(rel => (
                  <Link
                    key={rel.slug}
                    href={`/${locale}/transfers/${rel.slug}`}
                    className="group block rounded-2xl border border-[#e8e3da] bg-white p-5 hover:shadow-[0_4px_20px_rgba(6,47,53,.12)] transition-all duration-200 hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#8aabae] mb-1">
                          {t.transfers.cardOrigin}
                        </p>
                        <p className="font-semibold text-[#062f35] text-[13.5px] leading-tight">
                          {(rel.to as Record<string, string | undefined>)[locale] ?? rel.to.fr}
                        </p>
                      </div>
                      <span className="text-[18px]">{CATEGORY_ICONS[rel.category]}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#f5b63f] font-bold">{rel.price}</span>
                      <span className="text-[11px] text-[#8aabae]">{localizeUnits(rel.duration, locale)}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ── Right aside ────────────────────────────────────── */}
        <aside id="booking-form" className="mt-12 lg:mt-0">
          <div className="lg:sticky lg:top-[80px]">
            <TransferBookingForm transfer={transfer} />
          </div>
        </aside>
      </div>

      {/* ── CTA band ──────────────────────────────────────── */}
      <section className="bg-[#062f35] bg-zellige py-16 px-4">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <p className="font-caveat text-[#f5b63f] text-2xl">{t.transfers.script}</p>
          <h2 className="font-playfair text-3xl text-white">
            {locale === "ar" ? "هل أنت مستعد للمغادرة؟" : locale === "en" ? "Ready to go?" : locale === "it" ? "Pronti a partire?" : "Prêt à partir ?"}
          </h2>
          <p className="text-white/65 text-[14px] leading-relaxed">
            {locale === "ar"
              ? "سعر ثابت وشامل، بدون عداد ولا مفاجآت."
              : locale === "en"
              ? "Fixed all-inclusive price, no meter, no surprises."
              : locale === "it"
              ? "Prezzo fisso tutto incluso, senza tassametro né sorprese."
              : "Prix fixe tout inclus, sans compteur ni surprise."}
          </p>
          <a
            href={`https://wa.me/212709274114?text=${encodeURIComponent(`${mktName} ${arrow} ${dest}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full
              bg-gradient-to-r from-[#f5b63f] to-[#e8a020]
              text-[#062f35] font-bold text-[13px]
              hover:from-[#ffc84d] hover:to-[#f5b235]
              transition-all duration-200 shadow-[0_4px_20px_rgba(245,182,63,.4)]
              hover:-translate-y-0.5"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12.004 0C5.373 0 0 5.373 0 12.004c0 2.117.555 4.103 1.523 5.832L.057 23.944l6.303-1.654A11.944 11.944 0 0 0 12.004 24C18.627 24 24 18.627 24 12.004 24 5.373 18.627 0 12.004 0zm0 21.902a9.896 9.896 0 0 1-5.042-1.376l-.36-.214-3.737.98.998-3.648-.235-.374a9.862 9.862 0 0 1-1.514-5.27c0-5.455 4.438-9.893 9.89-9.893 5.453 0 9.891 4.438 9.891 9.893 0 5.453-4.438 9.902-9.891 9.902z"/>
            </svg>
            {c.labels.bookNow}
          </a>
        </div>
      </section>
    </>
  );
}
