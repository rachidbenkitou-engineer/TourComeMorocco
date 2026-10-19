import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getExcursion, excursions } from "@/data/excursions";
import { JsonLd } from "@/components/JsonLd";
import ExcursionDetail from "@/app/excursions/[slug]/ExcursionDetail";
import type { Locale } from "@/i18n/translations";

const BASE     = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tourmemorocco.com";
const LOCALES: Locale[] = ["fr", "en", "ar", "it"];
const WHATSAPP = "https://wa.me/212709274114";

const OG_LOCALE: Record<Locale, string> = {
  fr: "fr_FR", en: "en_US", ar: "ar_MA", it: "it_IT",
};

const LBL: Record<Locale, {
  home: string; excursions: string; book: string; vehicle: string; from: string;
}> = {
  fr: { home: "Accueil",   excursions: "Excursions", book: "Réserver par WhatsApp", vehicle: "par véhicule", from: "Dès"  },
  en: { home: "Home",      excursions: "Excursions", book: "Book via WhatsApp",      vehicle: "per vehicle",  from: "From" },
  ar: { home: "الرئيسية",  excursions: "الرحلات",    book: "احجز عبر واتساب",        vehicle: "للسيارة",      from: "من"   },
  it: { home: "Home",      excursions: "Escursioni", book: "Prenota via WhatsApp",    vehicle: "a veicolo",    from: "Da"   },
};

const TOURIST_TYPE: Record<Locale, string> = {
  fr: "Voyageurs privés",
  en: "Private travellers",
  ar: "مسافرون خاصون",
  it: "Turisti privati",
};

const MARRAKECH_PLACE = {
  "@type": "Place",
  "name": "Marrakech",
  "address": { "@type": "PostalAddress", "addressLocality": "Marrakech", "addressCountry": "MA" },
  "geo": { "@type": "GeoCoordinates", "latitude": 31.6295, "longitude": -7.9811 },
};

function isoDuration(durationKey: "journee" | "demijournee"): string {
  return durationKey === "demijournee" ? "PT4H" : "PT8H";
}

const truncate = (s: string, n = 155) =>
  s.length > n ? s.slice(0, n - 1) + "…" : s;

/* ════════════════════════════════════════════ */

export function generateStaticParams() {
  return LOCALES.flatMap(locale =>
    excursions.map(e => ({ locale, slug: e.slug }))
  );
}

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string; slug: string }> }
): Promise<Metadata> {
  const { locale, slug } = await params;
  const l = (LOCALES.includes(locale as Locale) ? locale : "fr") as Locale;
  const e = getExcursion(slug);
  if (!e) return {};

  const lb       = LBL[l];
  const title    = e.title[l];
  const duration = e.duration[l];
  const price    = e.fromPrice ?? "€80";
  const url      = `${BASE}/${l}/excursions/${slug}`;

  const desc = truncate(`${e.short[l]}. ${duration} ${lb.from} Marrakech. ${lb.from} ${price} ${lb.vehicle}.`);
  const kw   = e.highlights[l].slice(0, 7).join(", ");

  return {
    title:       `${title} — ${duration}`,
    description: desc,
    keywords:    kw,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(LOCALES.map(loc => [loc, `${BASE}/${loc}/excursions/${slug}`])),
    },
    openGraph: {
      title:           `${title} | Tour Me Morocco`,
      description:     desc,
      url,
      type:            "website",
      locale:          OG_LOCALE[l],
      alternateLocale: LOCALES.filter(loc => loc !== l).map(loc => OG_LOCALE[loc]),
      images: [{ url: `${BASE}${e.image}`, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card:        "summary_large_image",
      title:       `${title} | Tour Me Morocco`,
      description: desc,
      images:      [`${BASE}${e.image}`],
    },
  };
}

/* ════════════════════════════════════════════ */

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const l = (LOCALES.includes(locale as Locale) ? locale : "fr") as Locale;
  const e = getExcursion(slug);
  if (!e) notFound();

  const lb    = LBL[l];
  const title = e!.title[l];
  const url   = `${BASE}/${l}/excursions/${slug}`;

  const schemas = [
    /* ── TouristTrip ── */
    {
      "@context":      "https://schema.org",
      "@type":         "TouristTrip",
      "name":          title,
      "description":   e!.intro[l],
      "url":           url,
      "inLanguage":    l,
      "image":         `${BASE}${e!.image}`,
      "duration":      isoDuration(e!.durationKey),

      "startLocation": MARRAKECH_PLACE,
      "endLocation":   MARRAKECH_PLACE,

      "about": e!.highlights[l].map(h => ({ "@type": "Thing", "name": h })),

      "itinerary": e!.itinerary.map(day => ({
        "@type":       "TouristAttraction",
        "name":        day.title[l],
        "description": day.description[l],
        "address":     { "@type": "PostalAddress", "addressCountry": "MA" },
      })),

      "touristType": [TOURIST_TYPE[l]],

      "offers": {
        "@type":         "Offer",
        "availability":  "https://schema.org/InStock",
        "url":           WHATSAPP,
        "description":   lb.book,
        "price":         e!.fromPrice?.replace(/[^0-9]/g, "") ?? "80",
        "priceCurrency": "EUR",
        "priceSpecification": {
          "@type":         "UnitPriceSpecification",
          "price":         e!.fromPrice?.replace(/[^0-9]/g, "") ?? "80",
          "priceCurrency": "EUR",
          "referenceQuantity": {
            "@type":    "QuantitativeValue",
            "value":    1,
            "unitCode": "C62",
            "unitText": lb.vehicle,
          },
        },
      },

      "potentialAction": {
        "@type":  "ReserveAction",
        "target": WHATSAPP,
        "name":   lb.book,
        "result": { "@type": "Reservation", "name": title },
      },

      "provider": {
        "@type":     "TravelAgency",
        "name":      "Tour Me Morocco",
        "url":       BASE,
        "telephone": "+212709274114",
        "sameAs":    ["https://www.instagram.com/tourmemorocco", "https://www.facebook.com/tourmemorocco"],
        "address": {
          "@type":           "PostalAddress",
          "addressLocality": l === "ar" ? "مراكش" : "Marrakech",
          "addressCountry":  "MA",
        },
        "geo": { "@type": "GeoCoordinates", "latitude": 31.6295, "longitude": -7.9811 },
      },
    },

    /* ── BreadcrumbList ── */
    {
      "@context": "https://schema.org",
      "@type":    "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": lb.home,        "item": `${BASE}/${l}` },
        { "@type": "ListItem", "position": 2, "name": lb.excursions,  "item": `${BASE}/${l}/excursions` },
        { "@type": "ListItem", "position": 3, "name": title,          "item": url },
      ],
    },

    /* ── FAQPage ── */
    ...(e!.faqs.length > 0 ? [{
      "@context":   "https://schema.org",
      "@type":      "FAQPage",
      "inLanguage": l,
      "mainEntity": e!.faqs.map(faq => ({
        "@type": "Question",
        "name":  faq.question[l],
        "acceptedAnswer": { "@type": "Answer", "text": faq.answer[l] },
      })),
    }] : []),
  ];

  return (
    <>
      <JsonLd data={schemas as unknown as Record<string, unknown>[]} />
      <ExcursionDetail slug={slug} />
    </>
  );
}
