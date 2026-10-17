import type { Metadata } from "next";
import { Suspense } from "react";
import GalleryPage from "@/app/gallery/GalleryClient";
import type { Locale } from "@/i18n/translations";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tourmemorocco.com";

const META: Record<Locale, { title: string; description: string }> = {
  fr: {
    title: "Galerie Photos — Marrakech, Atlas & Désert",
    description: "Découvrez le Maroc en images : Marrakech, Atlas, désert, côte atlantique. Photos de voyages réels avec Transfer Maroc.",
  },
  en: {
    title: "Photo Gallery — Marrakech, Atlas & Desert",
    description: "Discover Morocco through images: Marrakech, Atlas, desert, Atlantic coast. Real travel photos with Transfer Maroc.",
  },
  ar: {
    title: "معرض الصور — مراكش، الأطلس والصحراء",
    description: "اكتشف المغرب بالصور: مراكش، الأطلس، الصحراء، الساحل الأطلسي. صور رحلات حقيقية مع ترانسفير مارك.",
  },
  it: {
    title: "Galleria Foto — Marrakech, Atlante & Deserto",
    description: "Scopri il Marocco in immagini: Marrakech, Atlante, deserto, costa atlantica. Foto di viaggi reali con Transfer Maroc.",
  },
};

export function generateStaticParams() {
  return (["fr","en","ar","it"] as Locale[]).map(locale => ({ locale }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  const l = (["fr","en","ar","it"].includes(locale) ? locale : "fr") as Locale;
  const m = META[l];
  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: `${BASE}/${l}/gallery`,
      languages: { fr: `${BASE}/fr/gallery`, en: `${BASE}/en/gallery`, ar: `${BASE}/ar/gallery`, it: `${BASE}/it/gallery` },
    },
    openGraph: { title: m.title, description: m.description, url: `${BASE}/${l}/gallery`, type: "website" },
  };
}

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#fff8f0]" />}>
      <GalleryPage />
    </Suspense>
  );
}
