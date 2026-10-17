import type { Metadata } from "next";
import { Suspense } from "react";
import ToursClient from "@/app/tours/ToursClient";
import { JsonLd } from "@/components/JsonLd";
import { tours } from "@/data/tours";
import type { Locale } from "@/i18n/translations";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tourmemorocco.com";
const LOCALES = ["fr", "en", "ar", "it"] as const;

/* Tours only have fr/en/ar — Italian falls back to French */
type TourLocale = "fr" | "en" | "ar";

const META: Record<Locale, { title: string; description: string; listName: string }> = {
  fr: {
    title: "Tours Privés & Circuits depuis Marrakech — Chauffeur Dédié",
    description: `${tours.length} circuits privés d'1 à 9 jours depuis Marrakech : Essaouira, Chefchaouen, Fès, Sahara. Chauffeur privé, prix fixe, départ à votre rythme.`,
    listName: "Tours privés et circuits depuis Marrakech",
  },
  en: {
    title: "Private Tours & Circuits from Marrakech — Dedicated Driver",
    description: `${tours.length} private circuits from 1 to 9 days from Marrakech: Essaouira, Chefchaouen, Fes, Sahara. Private driver, fixed price, flexible departure.`,
    listName: "Private tours and circuits from Marrakech",
  },
  ar: {
    title: "جولات خاصة ودوائر من مراكش — سائق مخصص",
    description: `${tours.length} جولات خاصة من 1 إلى 9 أيام من مراكش: الصويرة، شفشاون، فاس، الصحراء. سائق خاص، سعر ثابت، مغادرة مرنة.`,
    listName: "الجولات الخاصة والدوائر من مراكش",
  },
  it: {
    title: "Tour Privati & Circuiti da Marrakech — Autista Dedicato",
    description: `${tours.length} circuiti privati da 1 a 9 giorni da Marrakech: Essaouira, Chefchaouen, Fes, Sahara. Autista privato, prezzo fisso, partenza flessibile.`,
    listName: "Tour privati e circuiti da Marrakech",
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
    openGraph: { title: m.title, description: m.description, url: `${BASE}/${l}/tours`, type: "website" },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l = (LOCALES.includes(locale as Locale) ? locale : "fr") as Locale;
  const tl = (l === "it" ? "fr" : l) as TourLocale;
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
      "name": t.title[tl],
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
