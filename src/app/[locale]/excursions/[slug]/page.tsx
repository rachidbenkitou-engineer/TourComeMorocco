import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getExcursion, excursions } from "@/data/excursions";
import { JsonLd } from "@/components/JsonLd";
import ExcursionDetail from "@/app/excursions/[slug]/ExcursionDetail";
import type { Locale } from "@/i18n/translations";

const BASE    = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tourmemorocco.com";
const LOCALES: Locale[] = ["fr", "en", "ar", "it"];

const BREADCRUMB_LABELS: Record<Locale, { home: string; excursions: string }> = {
  fr: { home: "Accueil",    excursions: "Excursions" },
  en: { home: "Home",       excursions: "Excursions" },
  ar: { home: "الرئيسية",   excursions: "الرحلات"    },
  it: { home: "Home",       excursions: "Escursioni" },
};

const FROM_LABELS: Record<Locale, string> = {
  fr: "Dès",  en: "From",  ar: "من",  it: "Da",
};

const truncate = (s: string, n = 155) =>
  s.length > n ? s.slice(0, n - 1) + "…" : s;

function gl<T>(obj: Record<string, T>, l: string, fallback = "fr"): T {
  return (obj[l] as T) ?? (obj[fallback] as T);
}

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

  const title    = gl(e.title as Record<string, string>, l);
  const short    = gl(e.short as Record<string, string>, l);
  const duration = gl(e.duration as Record<string, string>, l);
  const price    = e.fromPrice ?? "€80";
  const url      = `${BASE}/${l}/excursions/${slug}`;

  const desc = truncate(`${short}. ${duration} ${FROM_LABELS[l]} Marrakech. ${FROM_LABELS[l]} ${price} ${l === "ar" ? "للسيارة" : l === "en" ? "per vehicle" : l === "it" ? "a veicolo" : "par véhicule"}.`);

  return {
    title: `${title} — ${duration}`,
    description: desc,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(LOCALES.map(loc => [loc, `${BASE}/${loc}/excursions/${slug}`])),
    },
    openGraph: {
      title: `${title} | Transfer Maroc`,
      description: desc,
      url,
      type: "website",
      images: e.image ? [{ url: `${BASE}${e.image}`, width: 1200, height: 630 }] : undefined,
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
  const e = getExcursion(slug);
  if (!e) notFound();

  const title    = gl(e!.title    as Record<string, string>, l);
  const intro    = gl(e!.intro    as Record<string, string>, l);
  const url      = `${BASE}/${l}/excursions/${slug}`;
  const bc       = BREADCRUMB_LABELS[l];

  const schemas = [
    /* ── TouristTrip ── */
    {
      "@context": "https://schema.org",
      "@type": "TouristTrip",
      "name": title,
      "description": intro,
      "url": url,
      "inLanguage": l,
      "image": `${BASE}${e!.image}`,
      "itinerary": e!.itinerary.map(day => ({
        "@type": "TouristAttraction",
        "name": gl(day.title as Record<string, string>, l),
        "description": gl(day.description as Record<string, string>, l),
      })),
      "touristType": [
        l === "ar" ? "مسافرون خاصون" :
        l === "en" ? "Private travellers" :
        l === "it" ? "Turisti privati" :
        "Voyageurs privés",
      ],
      "offers": {
        "@type": "Offer",
        "price": e!.fromPrice?.replace(/[^0-9]/g, "") ?? "80",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": e!.fromPrice?.replace(/[^0-9]/g, "") ?? "80",
          "priceCurrency": "EUR",
          "referenceQuantity": {
            "@type": "QuantitativeValue",
            "value": 1,
            "unitCode": "C62",
            "unitText": l === "ar" ? "سيارة" : l === "en" ? "vehicle" : l === "it" ? "veicolo" : "véhicule",
          },
        },
      },
      "provider": {
        "@type": "TravelAgency",
        "name": "Tour Me Morocco",
        "url": BASE,
        "telephone": "+212709274114",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": l === "ar" ? "مراكش" : "Marrakech",
          "addressCountry": "MA",
        },
      },
    },

    /* ── BreadcrumbList ── */
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": bc.home,       "item": `${BASE}/${l}` },
        { "@type": "ListItem", "position": 2, "name": bc.excursions, "item": `${BASE}/${l}/excursions` },
        { "@type": "ListItem", "position": 3, "name": title,         "item": url },
      ],
    },

    /* ── FAQPage ── */
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "inLanguage": l,
      "mainEntity": e!.faqs.map(faq => ({
        "@type": "Question",
        "name": gl(faq.question as Record<string, string>, l),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": gl(faq.answer as Record<string, string>, l),
        },
      })),
    },
  ];

  return (
    <>
      <JsonLd data={schemas as unknown as Record<string, unknown>[]} />
      <ExcursionDetail slug={slug} />
    </>
  );
}
