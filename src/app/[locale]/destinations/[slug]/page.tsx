import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { destinations, getDestination } from "@/data/destinations";
import { getTour, tours } from "@/data/tours";
import { excursions } from "@/data/excursions";
import { getTransferBySlug } from "@/data/transfers";
import type { Locale } from "@/i18n/translations";

const BASE     = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tourmemorocco.com";
const LOCALES: Locale[] = ["fr", "en", "ar", "it"];
const WHATSAPP = "https://wa.me/212709274114";

const OG_LOCALE: Record<Locale, string> = {
  fr: "fr_FR", en: "en_US", ar: "ar_MA", it: "it_IT",
};

const LBL: Record<Locale, {
  home: string; destinations: string; transfer: string; tours: string;
  excursions: string; book: string; from: string;
  viewTransfer: string; viewTours: string; viewExcursions: string;
  days: string; duration: string; distance: string; sedan: string; van: string;
}> = {
  fr: {
    home: "Accueil", destinations: "Destinations", transfer: "Transfert", tours: "Tours",
    excursions: "Excursions", book: "Réserver par WhatsApp", from: "À partir de",
    viewTransfer: "Voir le transfert →", viewTours: "Voir les tours →", viewExcursions: "Voir les excursions →",
    days: "jours", duration: "Durée", distance: "Distance", sedan: "Berline", van: "Van",
  },
  en: {
    home: "Home", destinations: "Destinations", transfer: "Transfer", tours: "Tours",
    excursions: "Excursions", book: "Book via WhatsApp", from: "From",
    viewTransfer: "View transfer →", viewTours: "View tours →", viewExcursions: "View excursions →",
    days: "days", duration: "Duration", distance: "Distance", sedan: "Sedan", van: "Van",
  },
  ar: {
    home: "الرئيسية", destinations: "الوجهات", transfer: "النقل", tours: "الجولات",
    excursions: "الرحلات", book: "احجز عبر واتساب", from: "ابتداءً من",
    viewTransfer: "← عرض النقل", viewTours: "← عرض الجولات", viewExcursions: "← عرض الرحلات",
    days: "أيام", duration: "المدة", distance: "المسافة", sedan: "سيدان", van: "فان",
  },
  it: {
    home: "Home", destinations: "Destinazioni", transfer: "Trasferimento", tours: "Tour",
    excursions: "Escursioni", book: "Prenota via WhatsApp", from: "Da",
    viewTransfer: "Vedi trasferimento →", viewTours: "Vedi tour →", viewExcursions: "Vedi escursioni →",
    days: "giorni", duration: "Durata", distance: "Distanza", sedan: "Berlina", van: "Van",
  },
};

export function generateStaticParams() {
  return LOCALES.flatMap(locale =>
    destinations.map(d => ({ locale, slug: d.slug }))
  );
}

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string; slug: string }> }
): Promise<Metadata> {
  const { locale, slug } = await params;
  const l = (LOCALES.includes(locale as Locale) ? locale : "fr") as Locale;
  const d = getDestination(slug);
  if (!d) return {};

  const title = `${d.name[l]} — ${d.tagline[l]} | Tour Me Morocco`;
  const desc  = d.intro[l].slice(0, 155) + "…";
  const url   = `${BASE}/${l}/destinations/${slug}`;
  const img   = `${BASE}/images/${d.image}`;

  return {
    title,
    description: desc,
    keywords:    `${d.name[l]}, transfert ${d.name.fr}, excursion ${d.name.fr} depuis Marrakech`,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(LOCALES.map(loc => [loc, `${BASE}/${loc}/destinations/${slug}`])),
    },
    openGraph: {
      title,
      description:     desc,
      url,
      type:            "website",
      locale:          OG_LOCALE[l],
      alternateLocale: LOCALES.filter(loc => loc !== l).map(loc => OG_LOCALE[loc]),
      images:          [{ url: img, width: 1200, height: 630, alt: d.name[l] }],
    },
    twitter: {
      card:        "summary_large_image",
      title,
      description: desc,
      images:      [img],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const l = (LOCALES.includes(locale as Locale) ? locale : "fr") as Locale;
  const d = getDestination(slug);
  if (!d) notFound();

  const lbl      = LBL[l];
  const url      = `${BASE}/${l}/destinations/${slug}`;
  const transfer = d.transferSlug ? getTransferBySlug(d.transferSlug) : null;
  const destTours = d.tourSlugs.map(s => getTour(s)).filter(Boolean);
  const destExcursions = d.excursionSlugs.map(s => excursions.find(e => e.slug === s)).filter(Boolean);

  /* ── Schema ── */
  const touristDestSchema = {
    "@context":   "https://schema.org",
    "@type":      "TouristDestination",
    "name":       d.name[l],
    "description": d.intro[l],
    "url":        url,
    "image":      `${BASE}/images/${d.image}`,
    "geo": {
      "@type":     "GeoCoordinates",
      "latitude":  d.coords.lat,
      "longitude": d.coords.lng,
    },
    "address": {
      "@type":          "PostalAddress",
      "addressCountry": "MA",
    },
    "touristType": l === "ar" ? "سياح خاصون" : l === "it" ? "Turisti privati" : l === "en" ? "Private travellers" : "Voyageurs privés",
    "potentialAction": {
      "@type":  "ReserveAction",
      "target": WHATSAPP,
      "name":   lbl.book,
      "result": { "@type": "Reservation", "name": d.name[l] },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type":    "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": lbl.home,         "item": `${BASE}/${l}` },
      { "@type": "ListItem", "position": 2, "name": lbl.destinations, "item": `${BASE}/${l}/destinations` },
      { "@type": "ListItem", "position": 3, "name": d.name[l],        "item": url },
    ],
  };

  const itemListSchema = destTours.length + destExcursions.length > 0 ? {
    "@context": "https://schema.org",
    "@type":    "ItemList",
    "name":     `${lbl.tours} & ${lbl.excursions} — ${d.name[l]}`,
    "inLanguage": l,
    "itemListElement": [
      ...destTours.map((t, i) => ({
        "@type":    "ListItem",
        "position": i + 1,
        "name":     t!.title[l],
        "url":      `${BASE}/${l}/tours/${t!.slug}`,
      })),
      ...destExcursions.map((e, i) => ({
        "@type":    "ListItem",
        "position": destTours.length + i + 1,
        "name":     e!.title[l],
        "url":      `${BASE}/${l}/excursions/${e!.slug}`,
      })),
    ],
  } : null;

  return (
    <>
      <JsonLd data={[touristDestSchema, breadcrumbSchema, ...(itemListSchema ? [itemListSchema] : [])] as unknown as Record<string, unknown>[]} />
      <Navbar />
      <main className="min-h-screen bg-[#fff8f0]">

        {/* Hero */}
        <section className="relative h-[60vh] min-h-[400px]">
          <Image
            src={`/images/${d.image}`}
            alt={d.name[l]}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
            <p className="text-[#a87627] font-caveat text-xl mb-2">{lbl.destinations}</p>
            <h1 className="font-playfair text-5xl md:text-6xl text-white mb-3">{d.name[l]}</h1>
            <p className="text-white/80 text-xl">{d.tagline[l]}</p>
          </div>
        </section>

        {/* Breadcrumb */}
        <nav className="max-w-4xl mx-auto px-4 py-4 text-sm text-[#062f35]/60">
          <Link href={`/${l}`} className="hover:text-[#a87627]">{lbl.home}</Link>
          {" › "}
          <Link href={`/${l}/destinations`} className="hover:text-[#a87627]">{lbl.destinations}</Link>
          {" › "}
          <span className="text-[#062f35]">{d.name[l]}</span>
        </nav>

        {/* Intro */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <p className="text-[#062f35]/80 text-lg leading-relaxed">{d.intro[l]}</p>
        </section>

        {/* Transfer */}
        {transfer && (
          <section className="max-w-4xl mx-auto px-4 py-8 border-t border-[#062f35]/10">
            <h2 className="font-playfair text-3xl text-[#062f35] mb-6">{lbl.transfer}</h2>
            <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-[#062f35] text-lg">
                  {l === "ar" ? "مراكش → " : "Marrakech → "}{(transfer.to as Record<string, string>)[l] ?? transfer.to.fr}
                </p>
                <p className="text-[#062f35]/60 text-sm mt-1">
                  {lbl.sedan}: €{transfer.prices.sedan} · {lbl.van}: €{transfer.prices.van}
                </p>
              </div>
              <Link
                href={`/${l}/transfers/${transfer.slug}`}
                className="shrink-0 bg-[#062f35] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#a87627] transition-colors"
              >
                {lbl.viewTransfer}
              </Link>
            </div>
          </section>
        )}

        {/* Tours */}
        {destTours.length > 0 && (
          <section className="max-w-4xl mx-auto px-4 py-8 border-t border-[#062f35]/10">
            <h2 className="font-playfair text-3xl text-[#062f35] mb-6">{lbl.tours}</h2>
            <div className="grid gap-4">
              {destTours.map(t => (
                <Link
                  key={t!.slug}
                  href={`/${l}/tours/${t!.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row"
                >
                  <div className="relative h-40 sm:h-auto sm:w-48 shrink-0">
                    <Image
                      src={t!.image}
                      alt={t!.title[l]}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, 192px"
                    />
                  </div>
                  <div className="p-5 flex flex-col justify-center">
                    <p className="text-[#a87627] text-xs font-medium mb-1">{t!.days[l]}</p>
                    <h3 className="font-playfair text-xl text-[#062f35] group-hover:text-[#a87627] transition-colors">{t!.title[l]}</h3>
                    <p className="text-[#062f35]/60 text-sm mt-1 line-clamp-2">{t!.short[l]}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Excursions */}
        {destExcursions.length > 0 && (
          <section className="max-w-4xl mx-auto px-4 py-8 border-t border-[#062f35]/10">
            <h2 className="font-playfair text-3xl text-[#062f35] mb-6">{lbl.excursions}</h2>
            <div className="grid gap-4">
              {destExcursions.map(e => (
                <Link
                  key={e!.slug}
                  href={`/${l}/excursions/${e!.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row"
                >
                  <div className="relative h-40 sm:h-auto sm:w-48 shrink-0">
                    <Image
                      src={e!.image}
                      alt={e!.title[l]}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, 192px"
                    />
                  </div>
                  <div className="p-5 flex flex-col justify-center">
                    <p className="text-[#a87627] text-xs font-medium mb-1">{e!.duration[l]}</p>
                    <h3 className="font-playfair text-xl text-[#062f35] group-hover:text-[#a87627] transition-colors">{e!.title[l]}</h3>
                    <p className="text-[#062f35]/60 text-sm mt-1 line-clamp-2">{e!.short[l]}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 py-16 text-center">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#a87627] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#062f35] transition-colors"
          >
            {lbl.book}
          </a>
        </section>

      </main>
      <Footer />
    </>
  );
}
