"use client";
import { notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "motion/react";
import { MapPin, Clock, Route, CheckCircle2, XCircle, ArrowRight, Phone } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getTransferBySlug, transfers, CATEGORIES } from "@/data/transfers";
import { useBooking } from "@/components/BookingModal";
import { useI18n } from "@/i18n/I18nProvider";

const CATEGORY_ICONS: Record<string, string> = {
  airport: "✈",
  city:    "🏙",
  coast:   "🌊",
  desert:  "🏜",
};

export default function TransferDetail({ slug }: { slug: string }) {
  const { open: openBooking } = useBooking();
  const { t, locale } = useI18n();

  const _transfer = getTransferBySlug(slug);
  if (!_transfer) notFound();
  const transfer = _transfer!;

  const dt   = t.pages.transfers.detail;
  const pg   = t.pages.transfers;
  const dest = transfer.to[locale];

  const categoryLabel = pg.categories[transfer.category] ?? transfer.category;

  const related = transfers
    .filter(t => t.slug !== slug && t.category === transfer.category)
    .slice(0, 3);

  const facts = [
    { icon: <MapPin size={16} />,   label: dt.labelFrom,     value: "Marrakech" },
    { icon: <ArrowRight size={16}/>, label: dt.labelTo,      value: dest },
    { icon: <Clock size={16} />,    label: dt.labelDuration, value: transfer.duration },
    { icon: <Route size={16} />,    label: dt.labelDistance, value: transfer.distance },
  ];

  function handleBook() {
    openBooking(`${dt.privateTransfer} : Marrakech → ${dest}`, transfer.price);
  }

  return (
    <>
      <Navbar />

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative min-h-[52vh] flex items-end bg-[#062f35] overflow-hidden">
        {/* zellige pattern overlay */}
        <div className="absolute inset-0 bg-zellige opacity-30" />
        {/* gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#021e22] via-[#062f35]/60 to-transparent" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pb-12 pt-28">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[11px] text-white/50 mb-5 font-medium tracking-wide uppercase">
            <Link href="/" className="hover:text-white/80 transition-colors">Accueil</Link>
            <span>/</span>
            <Link href="/transfers" className="hover:text-white/80 transition-colors">{t.nav.transfers}</Link>
            <span>/</span>
            <span className="text-[#f5b63f]">{dest}</span>
          </nav>

          {/* Eyebrow */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f5b63f]/15 border border-[#f5b63f]/30 text-[#f5b63f] text-[11px] font-semibold tracking-wider uppercase">
              <span>{CATEGORY_ICONS[transfer.category]}</span>
              {categoryLabel}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white/70 text-[11px] font-semibold tracking-wider uppercase">
              {dt.labelPrice}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
            Marrakech{" "}
            <span className="text-[#f5b63f]">→</span>{" "}
            {dest}
          </h1>

          {/* Price pill */}
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-3xl font-bold text-[#f5b63f]">{transfer.price}</span>
            <span className="text-white/50 text-sm">{transfer.duration} · {transfer.distance}</span>
          </div>
        </div>
      </section>

      {/* ── Body ───────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:grid lg:grid-cols-[1.6fr_1fr] lg:gap-12">

        {/* ── Left column ──────────────────────────────────── */}
        <div className="space-y-12">

          {/* Back link */}
          <Link href="/transfers"
            className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#3a6568] hover:text-[#062f35] transition-colors group">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-0.5 transition-transform">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
            {dt.backToTransfers}
          </Link>

          {/* Facts grid */}
          <div id="overview">
            <h2 className="font-playfair text-2xl text-[#062f35] mb-6">
              {locale === "ar" ? "معلومات الرحلة" : locale === "en" ? "Route Overview" : "Détails du trajet"}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {facts.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="bg-[#f9f6f0] rounded-2xl p-4 flex flex-col gap-2"
                >
                  <span className="w-8 h-8 rounded-xl bg-[#062f35] text-[#f5b63f] flex items-center justify-center">
                    {f.icon}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#8aabae]">{f.label}</span>
                  <span className="font-semibold text-[#062f35] text-[13px] leading-tight">{f.value}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Included / Not included */}
          <div id="includes" className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-playfair text-lg text-[#062f35] mb-4 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-emerald-500" />
                {locale === "ar" ? "ما يشمله السعر" : locale === "en" ? "What's included" : "Ce qui est inclus"}
              </h3>
              <ul className="space-y-2.5">
                {dt.included.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[13.5px] text-[#3a5c5e]">
                    <span className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-[1px]">
                      <svg viewBox="0 0 12 12" width="9" height="9" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 6l3 3 5-5"/>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-playfair text-lg text-[#062f35] mb-4 flex items-center gap-2">
                <XCircle size={18} className="text-red-400" />
                {locale === "ar" ? "غير مشمول" : locale === "en" ? "Not included" : "Non inclus"}
              </h3>
              <ul className="space-y-2.5">
                {dt.notIncluded.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[13.5px] text-[#3a5c5e]">
                    <span className="w-4 h-4 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 mt-[1px]">
                      <svg viewBox="0 0 12 12" width="9" height="9" fill="none" stroke="#f87171" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 3l6 6M9 3l-6 6"/>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* How it works */}
          <div>
            <h2 className="font-playfair text-2xl text-[#062f35] mb-6">
              {locale === "ar" ? "كيف يعمل" : locale === "en" ? "How it works" : "Comment ça marche"}
            </h2>
            <ol className="relative space-y-6 before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-[#f5b63f] before:to-[#f5b63f]/10">
              {(locale === "en"
                ? ["Book via WhatsApp in 2 minutes", "Receive your booking confirmation", "Driver meets you at your address", "Comfortable private ride to your destination"]
                : locale === "ar"
                ? ["احجز عبر واتساب في دقيقتين", "تلقى تأكيد الحجز", "السائق يستقبلك في عنوانك", "رحلة خاصة ومريحة إلى وجهتك"]
                : ["Réservez via WhatsApp en 2 minutes", "Recevez votre confirmation de réservation", "Le chauffeur vous accueille à votre adresse", "Trajet privé et confortable jusqu'à votre destination"]
              ).map((step, i) => (
                <li key={i} className="relative pl-14 flex items-start gap-3">
                  <span className="absolute left-0 w-10 h-10 rounded-full bg-[#f5b63f] text-[#062f35] font-bold text-sm flex items-center justify-center border-4 border-white shadow-sm flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-[13.5px] text-[#3a5c5e] leading-relaxed pt-2">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* ── Right sidebar ─────────────────────────────────── */}
        <aside className="mt-12 lg:mt-0">
          <div className="lg:sticky lg:top-[80px] rounded-2xl overflow-hidden shadow-lift border border-[#e8e3da]">
            {/* Sidebar header */}
            <div className="bg-[#062f35] bg-zellige px-6 py-5">
              <p className="text-[#f5b63f] text-[10px] font-bold uppercase tracking-[0.15em] mb-1">
                {dt.privateTransfer}
              </p>
              <div className="text-white font-playfair text-xl leading-snug">
                Marrakech → {dest}
              </div>
              <div className="text-[#f5b63f] text-3xl font-bold mt-3">{transfer.price}</div>
              <p className="text-white/50 text-[11px] mt-1">{transfer.duration} · {transfer.distance}</p>
            </div>

            {/* Sidebar body */}
            <div className="bg-white px-6 py-6 space-y-5">
              <p className="text-[13px] text-[#5a7a7c] leading-relaxed">{dt.quoteDesc}</p>

              <button
                onClick={handleBook}
                className="w-full inline-flex items-center justify-center gap-2 h-12 rounded-xl
                  bg-gradient-to-b from-[#ffc84d] to-[#f5a623]
                  hover:from-[#ffd166] hover:to-[#f5b235]
                  text-[#17342f] font-bold text-[13px] cursor-pointer
                  transition-all duration-200 shadow-[0_4px_18px_rgba(218,151,24,.38)]
                  hover:shadow-[0_6px_24px_rgba(218,151,24,.48)] hover:-translate-y-[1px] active:scale-[.97]"
              >
                <Phone size={15} />
                {dt.bookTransfer}
              </button>

              {/* Guarantees */}
              <div className="border-t border-[#f0ebe3] pt-5 space-y-3">
                {pg.guarantees.map((g, i) => (
                  <div key={i} className="flex items-center gap-3 text-[12.5px] text-[#3a5c5e]">
                    <span className="w-6 h-6 rounded-full bg-[#f5f9f9] flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 12 12" width="9" height="9" fill="none" stroke="#3a9ca0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 6l3 3 5-5"/>
                      </svg>
                    </span>
                    {g}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* ── Related transfers ──────────────────────────────── */}
      {related.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
          <h2 className="font-playfair text-2xl text-[#062f35] mb-6">{dt.related}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {related.map(rel => (
              <Link
                key={rel.slug}
                href={`/transfers/${rel.slug}`}
                className="group block rounded-2xl border border-[#e8e3da] bg-white p-5 hover:shadow-card transition-all duration-200 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#8aabae] mb-1">
                      {t.transfers.cardOrigin}
                    </p>
                    <p className="font-semibold text-[#062f35] text-[14px] leading-tight">
                      {rel.to[locale]}
                    </p>
                  </div>
                  <span className="text-[20px]">{CATEGORY_ICONS[rel.category]}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#f5b63f] font-bold text-lg">{rel.price}</span>
                  <span className="text-[11px] text-[#8aabae]">{rel.duration}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── CTA band ──────────────────────────────────────── */}
      <section className="bg-[#062f35] bg-zellige py-16 px-4">
        <div className="max-w-2xl mx-auto text-center space-y-5">
          <p className="font-caveat text-[#f5b63f] text-2xl">{t.transfers.script}</p>
          <h2 className="font-playfair text-3xl text-white">{dt.ctaTitle}</h2>
          <p className="text-white/65 text-[14px] leading-relaxed">{dt.ctaDesc}</p>
          <button
            onClick={handleBook}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full
              bg-gradient-to-r from-[#f5b63f] to-[#e8a020]
              text-[#062f35] font-bold text-[13px]
              hover:from-[#ffc84d] hover:to-[#f5b235]
              transition-all duration-200 shadow-[0_4px_20px_rgba(245,182,63,.4)]
              hover:-translate-y-0.5 cursor-pointer"
          >
            <Phone size={15} />
            {dt.bookTransfer}
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}
