import type { Metadata } from "next";
import { Suspense } from "react";
import DestinationsClient from "@/app/destinations/DestinationsClient";
import { JsonLd } from "@/components/JsonLd";
import { destinations } from "@/data/destinations";
import type { Locale } from "@/i18n/translations";

const BASE    = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tourmemorocco.com";
const LOCALES = ["fr", "en", "ar", "it"] as const;

const OG_LOCALE: Record<Locale, string> = {
  fr: "fr_FR", en: "en_US", ar: "ar_MA", it: "it_IT",
};

const OG_IMAGE = "/images/essaouira.jpg";

const META: Record<Locale, { title: string; description: string; listName: string }> = {
  fr: {
    title:       `${destinations.length} Destinations au Maroc — Transferts & Tours depuis Marrakech`,
    description: `Explorez ${destinations.length} destinations marocaines : Essaouira, Merzouga, Fès, Chefchaouen, Imlil, Ouzoud… Transferts privés, excursions et tours multi-jours avec chauffeur dédié.`,
    listName:    "Destinations au Maroc depuis Marrakech",
  },
  en: {
    title:       `${destinations.length} Destinations in Morocco — Transfers & Tours from Marrakech`,
    description: `Explore ${destinations.length} Moroccan destinations: Essaouira, Merzouga, Fes, Chefchaouen, Imlil, Ouzoud… Private transfers, excursions and multi-day tours with dedicated driver.`,
    listName:    "Destinations in Morocco from Marrakech",
  },
  ar: {
    title:       `${destinations.length} وجهة في المغرب — نقل وجولات من مراكش`,
    description: `استكشف ${destinations.length} وجهة مغربية: الصويرة، مرزوقة، فاس، شفشاون، إيمليل، أوزود... نقل خاص ورحلات ومشاوير متعددة الأيام مع سائق مخصص.`,
    listName:    "وجهات في المغرب من مراكش",
  },
  it: {
    title:       `${destinations.length} Destinazioni in Marocco — Trasferimenti & Tour da Marrakech`,
    description: `Esplora ${destinations.length} destinazioni marocchine: Essaouira, Merzouga, Fes, Chefchaouen, Imlil, Ouzoud… Trasferimenti privati, escursioni e tour di più giorni con autista dedicato.`,
    listName:    "Destinazioni in Marocco da Marrakech",
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
    title:       m.title,
    description: m.description,
    alternates: {
      canonical: `${BASE}/${l}/destinations`,
      languages: Object.fromEntries(LOCALES.map(loc => [loc, `${BASE}/${loc}/destinations`])),
    },
    openGraph: {
      title:           m.title,
      description:     m.description,
      url:             `${BASE}/${l}/destinations`,
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
    "@context":      "https://schema.org",
    "@type":         "ItemList",
    "name":          m.listName,
    "inLanguage":    l,
    "numberOfItems": destinations.length,
    "itemListElement": destinations.map((d, i) => ({
      "@type":       "ListItem",
      "position":    i + 1,
      "name":        d.name[l],
      "description": d.tagline[l],
      "url":         `${BASE}/${l}/destinations/${d.slug}`,
    })),
  };

  return (
    <>
      <JsonLd data={itemListSchema} />
      <Suspense fallback={<div className="min-h-screen bg-[#fff8f0]" />}>
        <DestinationsClient />
      </Suspense>
    </>
  );
}
