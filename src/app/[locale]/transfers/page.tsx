import type { Metadata } from "next";
import { Suspense } from "react";
import TransfersClient from "@/app/transfers/TransfersClient";
import { JsonLd } from "@/components/JsonLd";
import { transfers } from "@/data/transfers";
import type { Locale } from "@/i18n/translations";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tourmemorocco.com";
const LOCALES = ["fr", "en", "ar", "it"] as const;

const META: Record<Locale, { title: string; description: string; listName: string }> = {
  fr: {
    title: "Transferts Privés depuis Marrakech — Prix Fixe & Chauffeur Dédié",
    description: `${transfers.length} routes de transfert privé depuis Marrakech : aéroports, villes, désert et côte. Prix fixes, sans compteur. Réservation WhatsApp en 1h.`,
    listName: "Transferts privés depuis Marrakech",
  },
  en: {
    title: "Private Transfers from Marrakech — Fixed Price & Dedicated Driver",
    description: `${transfers.length} private transfer routes from Marrakech: airports, cities, desert and coast. Fixed prices, no meter. WhatsApp booking in 1h.`,
    listName: "Private transfers from Marrakech",
  },
  ar: {
    title: "نقل خاص من مراكش — سعر ثابت وسائق مخصص",
    description: `${transfers.length} مسار نقل خاص من مراكش: مطارات، مدن، صحراء وساحل. أسعار ثابتة. حجز واتساب في ساعة.`,
    listName: "نقل خاص من مراكش",
  },
  it: {
    title: "Trasferimenti Privati da Marrakech — Prezzo Fisso & Autista Dedicato",
    description: `${transfers.length} percorsi di trasferimento privato da Marrakech: aeroporti, città, deserto e costa. Prezzi fissi. Prenotazione WhatsApp in 1h.`,
    listName: "Trasferimenti privati da Marrakech",
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
      canonical: `${BASE}/${l}/transfers`,
      languages: Object.fromEntries(LOCALES.map(loc => [loc, `${BASE}/${loc}/transfers`])),
    },
    openGraph: { title: m.title, description: m.description, url: `${BASE}/${l}/transfers`, type: "website" },
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
    "numberOfItems": transfers.length,
    "itemListElement": transfers.map((t, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": `${l === "ar" ? "نقل مراكش إلى" : l === "en" ? "Transfer Marrakech →" : l === "it" ? "Trasferimento Marrakech →" : "Transfert Marrakech →"} ${(t.to as Record<string, string>)[l] ?? t.to.fr}`,
      "url": `${BASE}/${l}/transfers/${t.slug}`,
    })),
  };

  return (
    <>
      <JsonLd data={itemListSchema} />
      <Suspense fallback={<div className="min-h-screen bg-[#fff8f0]" />}>
        <TransfersClient />
      </Suspense>
    </>
  );
}
