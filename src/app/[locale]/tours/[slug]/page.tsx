import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTour, tours } from "@/data/tours";
import { JsonLd } from "@/components/JsonLd";
import TourDetail from "@/app/tours/[slug]/TourDetail";
import type { Locale } from "@/i18n/translations";

const BASE    = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tourmemorocco.com";
const LOCALES: Locale[] = ["fr", "en", "ar", "it"];

/* Tours only have fr/en/ar. Italian falls back to French. */
type TourLocale = "fr" | "en" | "ar";

const BREADCRUMB_LABELS: Record<Locale, { home: string; tours: string }> = {
  fr: { home: "Accueil",    tours: "Tours"   },
  en: { home: "Home",       tours: "Tours"   },
  ar: { home: "الرئيسية",   tours: "الجولات" },
  it: { home: "Home",       tours: "Tour"    },
};

const PRIVATE_LABEL: Record<Locale, string> = {
  fr: "Tour Privé",
  en: "Private Tour",
  ar: "جولة خاصة",
  it: "Tour Privato",
};

const truncate = (s: string, n = 155) =>
  s.length > n ? s.slice(0, n - 1) + "…" : s;

function gl<T>(obj: Record<string, T>, l: string): T {
  return (obj[l] as T) ?? (obj.fr as T);
}

export function generateStaticParams() {
  return LOCALES.flatMap(locale =>
    tours.map(t => ({ locale, slug: t.slug }))
  );
}

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string; slug: string }> }
): Promise<Metadata> {
  const { locale, slug } = await params;
  const l  = (LOCALES.includes(locale as Locale) ? locale : "fr") as Locale;
  const tl = (l === "it" ? "fr" : l) as TourLocale;
  const tour = getTour(slug);
  if (!tour) return {};

  const title = tour.title[tl];
  const days  = tour.days[tl];
  const short = tour.short[tl];
  const url   = `${BASE}/${l}/tours/${slug}`;

  const desc = truncate(`${short}. ${PRIVATE_LABEL[l]} ${days} ${l === "ar" ? "من مراكش" : l === "en" ? "from Marrakech" : l === "it" ? "da Marrakech" : "depuis Marrakech"}.`);

  return {
    title: `${title} — ${days} ${PRIVATE_LABEL[l]}`,
    description: desc,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(LOCALES.map(loc => [loc, `${BASE}/${loc}/tours/${slug}`])),
    },
    openGraph: {
      title: `${title} | Transfer Maroc`,
      description: desc,
      url,
      type: "website",
      images: tour.image ? [{ url: `${BASE}${tour.image}`, width: 1200, height: 630 }] : undefined,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const l  = (LOCALES.includes(locale as Locale) ? locale : "fr") as Locale;
  const tl = (l === "it" ? "fr" : l) as TourLocale;
  const tour = getTour(slug);
  if (!tour) notFound();

  const title = tour!.title[tl];
  const url   = `${BASE}/${l}/tours/${slug}`;
  const bc    = BREADCRUMB_LABELS[l];

  const schemas = [
    /* ── TouristTrip ── */
    {
      "@context": "https://schema.org",
      "@type": "TouristTrip",
      "name": title,
      "description": tour!.intro[tl],
      "url": url,
      "inLanguage": l,
      "image": `${BASE}${tour!.image}`,
      "duration": `P${tour!.daysNum}D`,
      "itinerary": tour!.itinerary.map(day => ({
        "@type": "TouristAttraction",
        "name": gl(day.title as Record<string, string>, tl),
        "description": gl(day.description as Record<string, string>, tl),
      })),
      "touristType": PRIVATE_LABEL[l],
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
        { "@type": "ListItem", "position": 1, "name": bc.home,  "item": `${BASE}/${l}` },
        { "@type": "ListItem", "position": 2, "name": bc.tours, "item": `${BASE}/${l}/tours` },
        { "@type": "ListItem", "position": 3, "name": title,    "item": url },
      ],
    },

    /* ── FAQPage ── */
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "inLanguage": l,
      "mainEntity": tour!.faqs.map(faq => ({
        "@type": "Question",
        "name": gl(faq.question as Record<string, string>, tl),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": gl(faq.answer as Record<string, string>, tl),
        },
      })),
    },
  ];

  return (
    <>
      <JsonLd data={schemas as unknown as Record<string, unknown>[]} />
      <TourDetail slug={slug} />
    </>
  );
}
