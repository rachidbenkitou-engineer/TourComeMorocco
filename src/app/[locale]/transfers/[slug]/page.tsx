import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTransferBySlug, transfers } from "@/data/transfers";
import { getTransferContent } from "@/lib/transferContent";
import { JsonLd } from "@/components/JsonLd";
import TransferDetail from "@/app/transfers/[slug]/TransferDetail";
import type { Locale } from "@/i18n/translations";

const BASE    = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tourmemorocco.com";
const LOCALES: Locale[] = ["fr", "en", "ar", "it"];

const BREADCRUMB_LABELS: Record<Locale, { home: string; transfers: string }> = {
  fr: { home: "Accueil",    transfers: "Transferts"  },
  en: { home: "Home",       transfers: "Transfers"   },
  ar: { home: "الرئيسية",   transfers: "التحويلات"   },
  it: { home: "Home",       transfers: "Trasferimenti" },
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

  const c   = getTransferContent(transfer, l);
  const url = `${BASE}/${l}/transfers/${slug}`;

  return {
    title: `${c.h1} — ${c.labels.from} €${transfer.prices.sedan}`,
    description: truncate(c.intro[0]),
    alternates: {
      canonical: url,
      languages: Object.fromEntries(LOCALES.map(loc => [loc, `${BASE}/${loc}/transfers/${slug}`])),
    },
    openGraph: {
      title: `${c.h1} | Transfer Maroc`,
      description: truncate(c.intro[0], 200),
      url,
      type: "website",
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
      "provider": {
        "@type": "TravelAgency",
        "name": "Tour Me Morocco",
        "url": BASE,
        "telephone": "+212709274114",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Marrakech",
          "addressCountry": "MA",
        },
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
