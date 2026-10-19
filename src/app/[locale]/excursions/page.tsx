import type { Metadata } from "next";
import { Suspense } from "react";
import ExcursionsClient from "@/app/excursions/ExcursionsClient";
import { JsonLd } from "@/components/JsonLd";
import { excursions } from "@/data/excursions";
import type { Locale } from "@/i18n/translations";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tourmemorocco.com";
const LOCALES = ["fr", "en", "ar", "it"] as const;

const OG_LOCALE: Record<Locale, string> = {
  fr: "fr_FR", en: "en_US", ar: "ar_MA", it: "it_IT",
};

const OG_IMAGE = "/images/ourikaFalls.jpg";

const META: Record<Locale, { title: string; description: string; listName: string }> = {
  fr: {
    title: "Excursions Privées depuis Marrakech — Journée & Demi-Journée",
    description: `${excursions.length} excursions privées depuis Marrakech : Ourika, Ouzoud, Agafay, Imlil, Essaouira… Chauffeur dédié, guide local, prix fixe. Réservez en 1h.`,
    listName: "Excursions privées depuis Marrakech",
  },
  en: {
    title: "Private Excursions from Marrakech — Full Day & Half Day",
    description: `${excursions.length} private excursions from Marrakech: Ourika, Ouzoud, Agafay, Imlil, Essaouira… Dedicated driver, local guide, fixed price. Book in 1h.`,
    listName: "Private day excursions from Marrakech",
  },
  ar: {
    title: "رحلات خاصة من مراكش — يوم كامل ونصف يوم",
    description: `${excursions.length} رحلات خاصة من مراكش: أوريكا، أوزود، أغافاي، إيمليل، الصويرة... سائق مخصص، مرشد محلي، سعر ثابت.`,
    listName: "رحلات خاصة من مراكش",
  },
  it: {
    title: "Escursioni Private da Marrakech — Giornata Intera & Mezza Giornata",
    description: `${excursions.length} escursioni private da Marrakech: Ourika, Ouzoud, Agafay, Imlil, Essaouira… Autista dedicato, guida locale, prezzo fisso.`,
    listName: "Escursioni private da Marrakech",
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
      canonical: `${BASE}/${l}/excursions`,
      languages: Object.fromEntries(LOCALES.map(loc => [loc, `${BASE}/${loc}/excursions`])),
    },
    openGraph: {
      title:           m.title,
      description:     m.description,
      url:             `${BASE}/${l}/excursions`,
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
    "numberOfItems": excursions.length,
    "itemListElement": excursions.map((e, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": e.title[l],
      "description": e.short[l],
      "url": `${BASE}/${l}/excursions/${e.slug}`,
    })),
  };

  return (
    <>
      <JsonLd data={itemListSchema} />
      <Suspense fallback={<div className="min-h-screen bg-[#fff8f0]" />}>
        <ExcursionsClient />
      </Suspense>
    </>
  );
}
