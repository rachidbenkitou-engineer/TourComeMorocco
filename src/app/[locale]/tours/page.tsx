import type { Metadata } from "next";
import { Suspense } from "react";
import ToursClient from "@/app/tours/ToursClient";
import { JsonLd } from "@/components/JsonLd";
import { tours } from "@/data/tours";
import type { Locale } from "@/i18n/translations";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tourmemorocco.com";
const LOCALES = ["fr", "en", "ar", "it"] as const;

const OG_LOCALE: Record<Locale, string> = {
  fr: "fr_FR", en: "en_US", ar: "ar_MA", it: "it_IT",
};

const OG_IMAGE = "/images/dunes.jpg";

const META: Record<Locale, { title: string; description: string; listName: string }> = {
  fr: {
    title: `${tours.length} Tours Privés & Circuits au Maroc — Chauffeur Dédié depuis Marrakech`,
    description: `${tours.length} circuits privés depuis Marrakech : excursions d'une journée, circuits 3–10 jours au Sahara, Fès, Chefchaouen, villes impériales. Chauffeur privé, prix fixe.`,
    listName: "Tours privés et circuits au Maroc depuis Marrakech",
  },
  en: {
    title: `${tours.length} Private Tours & Morocco Circuits — Dedicated Driver from Marrakech`,
    description: `${tours.length} private tours from Marrakech: day trips, 3–10 day circuits to the Sahara, Fes, Chefchaouen, imperial cities. Private driver, fixed price, flexible departure.`,
    listName: "Private tours and Morocco circuits from Marrakech",
  },
  ar: {
    title: `${tours.length} جولة خاصة ودورة في المغرب — سائق مخصص من مراكش`,
    description: `${tours.length} جولة خاصة من مراكش: رحلات يومية، جولات من 3 إلى 10 أيام إلى الصحراء، فاس، شفشاون، المدن الإمبراطورية. سائق خاص، سعر ثابت.`,
    listName: "الجولات الخاصة والدورات المغربية من مراكش",
  },
  it: {
    title: `${tours.length} Tour Privati & Circuiti in Marocco — Autista Dedicato da Marrakech`,
    description: `${tours.length} tour privati da Marrakech: gite giornaliere, circuiti da 3 a 10 giorni nel Sahara, Fes, Chefchaouen, città imperiali. Autista privato, prezzo fisso.`,
    listName: "Tour privati e circuiti marocchini da Marrakech",
  },
};

export function generateStaticParams() {
  return LOCALES.map(locale => ({ locale }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  const l = (LOCALES.includes(locale as Locale) ? locale : "fr") as Locale;
  const m = META[l];
  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: `${BASE}/${l}/tours`,
      languages: Object.fromEntries(LOCALES.map(loc => [loc, `${BASE}/${loc}/tours`])),
    },
    openGraph: {
      title:           m.title,
      description:     m.description,
      url:             `${BASE}/${l}/tours`,
      type:            "website",
      locale:          OG_LOCALE[l],
      alternateLocale: LOCALES.filter(loc => loc !== l).map(loc => OG_LOCALE[loc]),
      images:          [{ url: `${BASE}${OG_IMAGE}`, width: 1200, height: 630, alt: m.title }],
    },
    twitter: {
      card:        "summary_large_image",
      title:       m.title,
      description: m.description,
      images:      [`${BASE}${OG_IMAGE}`],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l = (LOCALES.includes(locale as Locale) ? locale : "fr") as Locale;
  const m = META[l];

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": m.listName,
    "inLanguage": l,
    "numberOfItems": tours.length,
    "itemListElement": tours.map((t, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": t.title[l],
      "description": t.short[l],
      "url": `${BASE}/${l}/tours/${t.slug}`,
    })),
  };

  return (
    <>
      <JsonLd data={itemListSchema} />
      <Suspense fallback={<div className="min-h-screen bg-[#fff8f0]" />}>
        <ToursClient />
      </Suspense>
    </>
  );
}
