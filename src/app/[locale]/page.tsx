import type { Metadata } from "next";
import { Hero }             from "@/components/Hero";
import { SearchBar }        from "@/components/SearchBar";
import { Stats }            from "@/components/Stats";
import { PopularTransfers } from "@/components/PopularTransfers";
import { Tours }            from "@/components/Tours";
import { Excursions }       from "@/components/Excursions";
import { GalleryPreview }   from "@/components/GalleryPreview";
import { Destinations }     from "@/components/Destinations";
import { About }            from "@/components/About";
import { Testimonials }     from "@/components/Testimonials";
import { CTABanner }        from "@/components/CTABanner";
import { JsonLd }           from "@/components/JsonLd";
import type { Locale }      from "@/i18n/translations";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tourmemorocco.com";

const META: Record<Locale, { title: string; description: string }> = {
  fr: {
    title: "Transfer Maroc — Chauffeur Privé & Transferts depuis Marrakech",
    description: "Transferts privés, circuits et excursions depuis Marrakech avec chauffeur dédié. Prix fixes, sans compteur. Aéroport, Essaouira, Sahara… Réservation WhatsApp en 1h.",
  },
  en: {
    title: "Transfer Maroc — Private Driver & Transfers from Marrakech",
    description: "Private transfers, tours and excursions from Marrakech with a dedicated driver. Fixed prices, no meter. Airport, Essaouira, Sahara… WhatsApp booking in 1h.",
  },
  ar: {
    title: "ترانسفير مارك — سائق خاص ونقل من مراكش",
    description: "نقل خاص وجولات وإكسبديشنز من مراكش مع سائق مخصص. أسعار ثابتة. مطار، الصويرة، الصحراء... حجز واتساب في ساعة.",
  },
  it: {
    title: "Transfer Maroc — Autista Privato e Trasferimenti da Marrakech",
    description: "Trasferimenti privati, tour ed escursioni da Marrakech con autista dedicato. Prezzi fissi. Aeroporto, Essaouira, Sahara… Prenotazione WhatsApp in 1h.",
  },
};

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
      canonical: `${BASE}/${l}`,
      languages: { fr: `${BASE}/fr`, en: `${BASE}/en`, ar: `${BASE}/ar`, it: `${BASE}/it` },
    },
    openGraph: { title: m.title, description: m.description, url: `${BASE}/${l}`, type: "website", locale: l },
  };
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["TravelAgency", "LocalBusiness"],
  "name": "Tour Me Morocco",
  "url": BASE,
  "telephone": "+212709274114",
  "description": "Service de chauffeur privé et transferts depuis Marrakech. Transferts aéroport, excursions journée et circuits multi-jours.",
  "address": { "@type": "PostalAddress", "addressLocality": "Marrakech", "addressCountry": "MA" },
  "geo": { "@type": "GeoCoordinates", "latitude": 31.6295, "longitude": -7.9811 },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "00:00", "closes": "23:59",
  },
  "priceRange": "€€",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Tour Me Morocco",
  "url": BASE,
};

export default function Page() {
  return (
    <main>
      <JsonLd data={[localBusinessSchema, websiteSchema] as unknown as Record<string, unknown>[]} />
      <Hero />
      <div className="relative z-50 px-[4%] pt-0 pb-0 mt-0 bg-[#062f35]">
        <div className="max-w-[960px] mx-auto">
          <SearchBar />
        </div>
      </div>
      <Stats />
      <PopularTransfers />
      <Tours />
      <Excursions />
      <GalleryPreview />
      <Destinations />
      <About />
      <Testimonials />
      <CTABanner />
    </main>
  );
}
