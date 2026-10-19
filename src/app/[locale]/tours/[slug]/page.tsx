import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTour, tours } from "@/data/tours";
import { JsonLd } from "@/components/JsonLd";
import TourDetail from "@/app/tours/[slug]/TourDetail";
import type { Locale } from "@/i18n/translations";

const BASE     = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tourmemorocco.com";
const LOCALES: Locale[] = ["fr", "en", "ar", "it"];
const WHATSAPP = "https://wa.me/212709274114";

/* ── OG locale codes ── */
const OG_LOCALE: Record<Locale, string> = {
  fr: "fr_FR", en: "en_US", ar: "ar_MA", it: "it_IT",
};

/* ── UI labels per locale ── */
const LBL: Record<Locale, {
  home: string; tours: string; privateTour: string;
  vehicle: string; book: string; priceOnRequest: string;
}> = {
  fr: { home: "Accueil",    tours: "Tours",    privateTour: "Tour Privé",    vehicle: "par véhicule",  book: "Réserver par WhatsApp",  priceOnRequest: "Prix sur demande"     },
  en: { home: "Home",       tours: "Tours",    privateTour: "Private Tour",  vehicle: "per vehicle",   book: "Book via WhatsApp",       priceOnRequest: "Price on request"     },
  ar: { home: "الرئيسية",   tours: "الجولات",  privateTour: "جولة خاصة",    vehicle: "للسيارة",       book: "احجز عبر واتساب",         priceOnRequest: "السعر عند الطلب"      },
  it: { home: "Home",       tours: "Tour",     privateTour: "Tour Privato",  vehicle: "a veicolo",     book: "Prenota via WhatsApp",     priceOnRequest: "Prezzo su richiesta"  },
};

/* ── Cities: name + geo ── */
type CityKey = "marrakech" | "casablanca" | "tangier" | "fes";
const CITIES: Record<CityKey, {
  name: Record<Locale, string>;
  lat: number; lng: number;
}> = {
  marrakech: { name: { fr: "Marrakech",  en: "Marrakech",  ar: "مراكش",        it: "Marrakech" }, lat: 31.6295,  lng: -7.9811 },
  casablanca: { name: { fr: "Casablanca", en: "Casablanca", ar: "الدار البيضاء", it: "Casablanca" }, lat: 33.5731, lng: -7.5898 },
  tangier:    { name: { fr: "Tanger",     en: "Tangier",    ar: "طنجة",          it: "Tangeri"   }, lat: 35.7595,  lng: -5.8330 },
  fes:        { name: { fr: "Fès",        en: "Fes",        ar: "فاس",           it: "Fes"       }, lat: 34.0331,  lng: -5.0003 },
};

function cityPlace(key: CityKey, l: Locale) {
  const c = CITIES[key];
  return {
    "@type": "Place",
    "name": c.name[l],
    "address": { "@type": "PostalAddress", "addressLocality": c.name.en, "addressCountry": "MA" },
    "geo": { "@type": "GeoCoordinates", "latitude": c.lat, "longitude": c.lng },
  };
}

/* ── Detect start / end city from slug ── */
function detectCityKey(slug: string, pos: "start" | "end"): CityKey {
  const isCasStart = slug.startsWith("casablanca") || /^[389]-day-casablanca/.test(slug) || slug === "8-day-casablanca-marrakech-sahara-tour";
  const isTanStart = slug.startsWith("5-day-tangier");
  const isFesStart = slug.startsWith("3-day-fes");
  const isCasEnd   = slug.includes("-casablanca-private-tour") || slug.includes("-casablanca-sahara-tour") || slug.includes("-to-casablanca");

  if (pos === "start") {
    if (isCasStart) return "casablanca";
    if (isTanStart) return "tangier";
    if (isFesStart) return "fes";
  } else {
    if (isCasEnd && !isCasStart) return "casablanca";
  }
  return "marrakech";
}

/* ── ISO 8601 duration ── */
function isoDuration(daysNum: number, days: Record<Locale, string>): string {
  const isHalfDay = Object.values(days).some(d =>
    /demi|half|mezza|نصف/i.test(d)
  );
  return isHalfDay ? "PT5H" : `P${daysNum}D`;
}

const truncate = (s: string, n = 155) =>
  s.length > n ? s.slice(0, n - 1) + "…" : s;

/* ════════════════════════════════════════════ */

export function generateStaticParams() {
  return LOCALES.flatMap(locale =>
    tours.map(t => ({ locale, slug: t.slug }))
  );
}

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string; slug: string }> }
): Promise<Metadata> {
  const { locale, slug } = await params;
  const l    = (LOCALES.includes(locale as Locale) ? locale : "fr") as Locale;
  const tour = getTour(slug);
  if (!tour) return {};

  const lb    = LBL[l];
  const title = tour.title[l];
  const days  = tour.days[l];
  const desc  = truncate(`${tour.intro[l]} — ${days} ${lb.privateTour}.`);
  const kw    = tour.highlights[l].slice(0, 8).join(", ");
  const url   = `${BASE}/${l}/tours/${slug}`;

  const images = [
    { url: `${BASE}${tour.image}`, width: 1200, height: 630, alt: title },
    ...tour.gallery.slice(0, 2).map(g => ({ url: `${BASE}${g}`, width: 1200, height: 630 })),
  ];

  return {
    title:       `${title} — ${days} ${lb.privateTour}`,
    description: desc,
    keywords:    kw,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(LOCALES.map(loc => [loc, `${BASE}/${loc}/tours/${slug}`])),
    },
    openGraph: {
      title:       `${title} | Tour Me Morocco`,
      description: desc,
      url,
      type:   "website",
      locale: OG_LOCALE[l],
      alternateLocale: LOCALES.filter(loc => loc !== l).map(loc => OG_LOCALE[loc]),
      images,
    },
    twitter: {
      card:        "summary_large_image",
      title:       `${title} | Tour Me Morocco`,
      description: desc,
      images:      [`${BASE}${tour.image}`],
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
  const l    = (LOCALES.includes(locale as Locale) ? locale : "fr") as Locale;
  const tour = getTour(slug);
  if (!tour) notFound();

  const lb       = LBL[l];
  const title    = tour!.title[l];
  const url      = `${BASE}/${l}/tours/${slug}`;
  const duration = isoDuration(tour!.daysNum, tour!.days);

  const startPlace = cityPlace(detectCityKey(slug, "start"), l);
  const endPlace   = cityPlace(detectCityKey(slug, "end"),   l);

  const allImages = [
    `${BASE}${tour!.image}`,
    ...tour!.gallery.map(g => `${BASE}${g}`),
  ];

  const schemas = [
    /* ── TouristTrip ── */
    {
      "@context": "https://schema.org",
      "@type": "TouristTrip",
      "name": title,
      "description": tour!.intro[l],
      "url": url,
      "inLanguage": l,
      "image": allImages,
      "duration": duration,

      "startLocation": startPlace,
      "endLocation":   endPlace,

      "about": tour!.highlights[l].map(h => ({ "@type": "Thing", "name": h })),

      "itinerary": tour!.itinerary.map(day => ({
        "@type":       "TouristAttraction",
        "name":        day.title[l],
        "description": day.description[l],
        "address":     { "@type": "PostalAddress", "addressCountry": "MA" },
      })),

      "touristType": [lb.privateTour],

      "offers": {
        "@type":        "Offer",
        "availability": "https://schema.org/InStock",
        "url":          WHATSAPP,
        "description":  lb.book,
        "priceCurrency": "EUR",
        "priceSpecification": {
          "@type":       "UnitPriceSpecification",
          "description": lb.priceOnRequest,
          "unitText":    lb.vehicle,
        },
      },

      /* Booking intent signal */
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
        { "@type": "ListItem", "position": 1, "name": lb.home,  "item": `${BASE}/${l}` },
        { "@type": "ListItem", "position": 2, "name": lb.tours, "item": `${BASE}/${l}/tours` },
        { "@type": "ListItem", "position": 3, "name": title,    "item": url },
      ],
    },

    /* ── FAQPage ── */
    ...(tour!.faqs.length > 0 ? [{
      "@context":   "https://schema.org",
      "@type":      "FAQPage",
      "inLanguage": l,
      "mainEntity": tour!.faqs.map(faq => ({
        "@type": "Question",
        "name":  faq.question[l],
        "acceptedAnswer": { "@type": "Answer", "text": faq.answer[l] },
      })),
    }] : []),
  ];

  return (
    <>
      <JsonLd data={schemas as unknown as Record<string, unknown>[]} />
      <TourDetail slug={slug} />
    </>
  );
}
