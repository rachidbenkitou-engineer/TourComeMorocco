import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTransferBySlug, transfers } from "@/data/transfers";
import { getTransferContent } from "@/lib/transferContent";
import { JsonLd } from "@/components/JsonLd";
import TransferDetail from "@/app/transfers/[slug]/TransferDetail";
import type { Locale } from "@/i18n/translations";

const BASE     = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tourmemorocco.com";
const LOCALES: Locale[] = ["fr", "en", "ar", "it"];
const WHATSAPP = "https://wa.me/212709274114";

const OG_LOCALE: Record<Locale, string> = {
  fr: "fr_FR", en: "en_US", ar: "ar_MA", it: "it_IT",
};

const BREADCRUMB_LABELS: Record<Locale, { home: string; transfers: string }> = {
  fr: { home: "Accueil",    transfers: "Transferts"    },
  en: { home: "Home",       transfers: "Transfers"     },
  ar: { home: "الرئيسية",   transfers: "التحويلات"     },
  it: { home: "Home",       transfers: "Trasferimenti" },
};

const BOOK_LABEL: Record<Locale, string> = {
  fr: "Réserver par WhatsApp",
  en: "Book via WhatsApp",
  ar: "احجز عبر واتساب",
  it: "Prenota via WhatsApp",
};

const truncate = (s: string, n = 155) =>
  s.length > n ? s.slice(0, n - 1) + "…" : s;

export function generateStaticParams() {
  return LOCALES.flatMap(locale =>
    transfers.map(t => ({ locale, slug: t.slug }))
  );
}

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string; slug: string }> }
): Promise<Metadata> {
  const { locale, slug } = await params;
  const l = (LOCALES.includes(locale as Locale) ? locale : "fr") as Locale;
  const transfer = getTransferBySlug(slug);
  if (!transfer) return {};

  const c    = getTransferContent(transfer, l);
  const url  = `${BASE}/${l}/transfers/${slug}`;
  const desc = truncate(c.intro[0]);
  const img  = `${BASE}/images/${transfer.image}`;

  return {
    title:       `${c.h1} — ${c.labels.from} €${transfer.prices.sedan}`,
    description: desc,
    keywords:    `${c.h1}, transfert privé Marrakech, chauffeur privé Maroc`,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(LOCALES.map(loc => [loc, `${BASE}/${loc}/transfers/${slug}`])),
    },
    openGraph: {
      title:           `${c.h1} | Tour Me Morocco`,
      description:     truncate(c.intro[0], 200),
      url,
      type:            "website",
      locale:          OG_LOCALE[l],
      alternateLocale: LOCALES.filter(loc => loc !== l).map(loc => OG_LOCALE[loc]),
      images:          [{ url: img, width: 1200, height: 630, alt: c.h1 }],
    },
    twitter: {
      card:        "summary_large_image",
      title:       `${c.h1} | Tour Me Morocco`,
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
  const transfer = getTransferBySlug(slug);
  if (!transfer) notFound();

  const c   = getTransferContent(transfer!, l);
  const url = `${BASE}/${l}/transfers/${slug}`;
  const bc  = BREADCRUMB_LABELS[l];

  const schemas = [
    /* ── Service ── */
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": c.h1,
      "description": c.intro[0],
      "url": url,
      "inLanguage": l,
      "image": `${BASE}/images/${transfer!.image}`,
      "potentialAction": {
        "@type":  "ReserveAction",
        "target": WHATSAPP,
        "name":   BOOK_LABEL[l],
        "result": { "@type": "Reservation", "name": c.h1 },
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
      "areaServed": [
        { "@type": "City", "name": l === "ar" ? "مراكش" : "Marrakech" },
        {
          "@type": "City",
          "name": (transfer!.to as Record<string, string>)[l] ?? transfer!.to.fr,
        },
      ],
      "serviceType": transfer!.category === "airport" ? "Airport Transfer" : "Private Transfer",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": c.priceTitle,
        "itemListElement": [
          {
            "@type": "Offer",
            "name": c.labels.sedan,
            "price": transfer!.prices.sedan,
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            "name": c.labels.van,
            "price": transfer!.prices.van,
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            "name": c.labels.luxuryVan,
            "price": transfer!.prices.luxuryVan,
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock",
          },
        ],
      },
      "itemListElement": c.included.map((item, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": item,
      })),
    },

    /* ── BreadcrumbList ── */
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": bc.home,      "item": `${BASE}/${l}` },
        { "@type": "ListItem", "position": 2, "name": bc.transfers,  "item": `${BASE}/${l}/transfers` },
        {
          "@type": "ListItem",
          "position": 3,
          "name": (transfer!.to as Record<string, string>)[l] ?? transfer!.to.fr,
          "item": url,
        },
      ],
    },

    /* ── FAQPage ── */
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "inLanguage": l,
      "mainEntity": c.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
      })),
    },
  ];

  return (
    <>
      <JsonLd data={schemas as unknown as Record<string, unknown>[]} />
      <TransferDetail slug={slug} />
    </>
  );
}
