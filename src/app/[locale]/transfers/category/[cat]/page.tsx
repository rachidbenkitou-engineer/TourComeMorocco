import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { transfers } from "@/data/transfers";
import type { Locale } from "@/i18n/translations";

const BASE     = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tourmemorocco.com";
const LOCALES: Locale[] = ["fr", "en", "ar", "it"];
const WHATSAPP = "https://wa.me/212709274114";

const OG_LOCALE: Record<Locale, string> = {
  fr: "fr_FR", en: "en_US", ar: "ar_MA", it: "it_IT",
};

type Cat = "airports" | "cities" | "coast" | "desert";
const CATS: Cat[] = ["airports", "cities", "coast", "desert"];

/* ── Category → transfer.category mapping ── */
const CAT_FILTER: Record<Cat, (t: typeof transfers[number]) => boolean> = {
  airports: t => t.category === "airport",
  cities:   t => t.category === "city",
  coast:    t => t.category === "coast",
  desert:   t => t.category === "desert",
};

const CAT_META: Record<Cat, Record<Locale, {
  title: string; description: string; h1: string; sub: string; image: string;
}>> = {
  airports: {
    fr: {
      title:       "Transferts Aéroport depuis Marrakech — Chauffeur Privé",
      description: "Transferts privés depuis l'aéroport de Marrakech Menara (RAK) vers tous les hôtels et riads. Prix fixes, accueil en salle, ponctuel. Réservation WhatsApp.",
      h1:          "Transferts Aéroport Marrakech",
      sub:         "Accueil panneau, attente gratuite, prix fixe",
      image:       "/images/road.jpg",
    },
    en: {
      title:       "Airport Transfers from Marrakech — Private Driver",
      description: "Private transfers from Marrakech Menara Airport (RAK) to all hotels and riads. Fixed prices, meet & greet, punctual. WhatsApp booking.",
      h1:          "Marrakech Airport Transfers",
      sub:         "Meet & greet, free waiting time, fixed price",
      image:       "/images/road.jpg",
    },
    ar: {
      title:       "نقل المطار من مراكش — سائق خاص",
      description: "نقل خاص من مطار مراكش المنارة (RAK) إلى جميع الفنادق والرياضات. أسعار ثابتة، استقبال، دقيق المواعيد. حجز واتساب.",
      h1:          "نقل مطار مراكش",
      sub:         "استقبال، وقت انتظار مجاني، سعر ثابت",
      image:       "/images/road.jpg",
    },
    it: {
      title:       "Trasferimenti Aeroporto da Marrakech — Autista Privato",
      description: "Trasferimenti privati dall'aeroporto di Marrakech Menara (RAK) a tutti gli hotel e riad. Prezzi fissi, accoglienza, puntuale. Prenotazione WhatsApp.",
      h1:          "Trasferimenti Aeroporto Marrakech",
      sub:         "Accoglienza, attesa gratuita, prezzo fisso",
      image:       "/images/road.jpg",
    },
  },
  cities: {
    fr: {
      title:       "Transferts Privés entre Villes depuis Marrakech",
      description: "Transferts privés de Marrakech vers Casablanca, Fès, Rabat, Agadir, Tanger et autres villes du Maroc. Chauffeur dédié, prix fixes, départ à l'heure.",
      h1:          "Transferts Villes depuis Marrakech",
      sub:         "Casablanca, Fès, Rabat, Agadir, Tanger et plus",
      image:       "/images/casablanca.jpg",
    },
    en: {
      title:       "Private City-to-City Transfers from Marrakech",
      description: "Private transfers from Marrakech to Casablanca, Fes, Rabat, Agadir, Tangier and other Moroccan cities. Dedicated driver, fixed prices, on-time departure.",
      h1:          "City Transfers from Marrakech",
      sub:         "Casablanca, Fes, Rabat, Agadir, Tangier and more",
      image:       "/images/casablanca.jpg",
    },
    ar: {
      title:       "نقل خاص بين المدن من مراكش",
      description: "نقل خاص من مراكش إلى الدار البيضاء، فاس، الرباط، أكادير، طنجة ومدن مغربية أخرى. سائق مخصص، أسعار ثابتة، مواعيد دقيقة.",
      h1:          "نقل المدن من مراكش",
      sub:         "الدار البيضاء، فاس، الرباط، أكادير، طنجة والمزيد",
      image:       "/images/casablanca.jpg",
    },
    it: {
      title:       "Trasferimenti Privati tra Città da Marrakech",
      description: "Trasferimenti privati da Marrakech a Casablanca, Fes, Rabat, Agadir, Tangeri e altre città del Marocco. Autista dedicato, prezzi fissi, partenza puntuale.",
      h1:          "Trasferimenti Città da Marrakech",
      sub:         "Casablanca, Fes, Rabat, Agadir, Tangeri e altro",
      image:       "/images/casablanca.jpg",
    },
  },
  coast: {
    fr: {
      title:       "Transferts Côte Atlantique depuis Marrakech — Essaouira, Agadir",
      description: "Transferts privés depuis Marrakech vers les destinations côtières : Essaouira, Agadir, Safi… Voiture avec chauffeur, prix fixes, confort garanti.",
      h1:          "Transferts Côte Atlantique",
      sub:         "Essaouira, Agadir et les plages atlantiques",
      image:       "/images/essaouira.jpg",
    },
    en: {
      title:       "Atlantic Coast Transfers from Marrakech — Essaouira, Agadir",
      description: "Private transfers from Marrakech to Atlantic coast destinations: Essaouira, Agadir, Safi… Chauffeured car, fixed prices, guaranteed comfort.",
      h1:          "Atlantic Coast Transfers",
      sub:         "Essaouira, Agadir and the Atlantic beaches",
      image:       "/images/essaouira.jpg",
    },
    ar: {
      title:       "نقل الساحل الأطلسي من مراكش — الصويرة، أكادير",
      description: "نقل خاص من مراكش إلى الوجهات الساحلية: الصويرة، أكادير، آسفي... سيارة مع سائق، أسعار ثابتة، راحة مضمونة.",
      h1:          "نقل الساحل الأطلسي",
      sub:         "الصويرة وأكادير والشواطئ الأطلسية",
      image:       "/images/essaouira.jpg",
    },
    it: {
      title:       "Trasferimenti Costa Atlantica da Marrakech — Essaouira, Agadir",
      description: "Trasferimenti privati da Marrakech verso le destinazioni costiere atlantiche: Essaouira, Agadir, Safi… Auto con autista, prezzi fissi, comfort garantito.",
      h1:          "Trasferimenti Costa Atlantica",
      sub:         "Essaouira, Agadir e le spiagge atlantiche",
      image:       "/images/essaouira.jpg",
    },
  },
  desert: {
    fr: {
      title:       "Transferts Désert depuis Marrakech — Merzouga, Zagora, Ouarzazate",
      description: "Transferts privés depuis Marrakech vers les destinations désertiques : Merzouga, Zagora, Ouarzazate, Aït Ben Haddou… Route des Mille Kasbahs avec chauffeur privé.",
      h1:          "Transferts Désert depuis Marrakech",
      sub:         "Merzouga, Zagora, Ouarzazate et la Route des Kasbahs",
      image:       "/images/desertCamels.jpg",
    },
    en: {
      title:       "Desert Transfers from Marrakech — Merzouga, Zagora, Ouarzazate",
      description: "Private transfers from Marrakech to desert destinations: Merzouga, Zagora, Ouarzazate, Aït Ben Haddou… Road of a Thousand Kasbahs with a private driver.",
      h1:          "Desert Transfers from Marrakech",
      sub:         "Merzouga, Zagora, Ouarzazate and the Road of Kasbahs",
      image:       "/images/desertCamels.jpg",
    },
    ar: {
      title:       "نقل الصحراء من مراكش — مرزوقة، زاكورة، ورزازات",
      description: "نقل خاص من مراكش إلى الوجهات الصحراوية: مرزوقة، زاكورة، ورزازات، أيت بنحدو... طريق الألف قصبة مع سائق خاص.",
      h1:          "نقل الصحراء من مراكش",
      sub:         "مرزوقة وزاكورة وورزازات وطريق القصبات",
      image:       "/images/desertCamels.jpg",
    },
    it: {
      title:       "Trasferimenti Deserto da Marrakech — Merzouga, Zagora, Ouarzazate",
      description: "Trasferimenti privati da Marrakech verso destinazioni desertiche: Merzouga, Zagora, Ouarzazate, Aït Ben Haddou… Strada delle Mille Kasbah con autista privato.",
      h1:          "Trasferimenti Deserto da Marrakech",
      sub:         "Merzouga, Zagora, Ouarzazate e la Strada delle Kasbah",
      image:       "/images/desertCamels.jpg",
    },
  },
};

const LABELS: Record<Locale, { home: string; transfers: string; sedan: string; van: string; book: string }> = {
  fr: { home: "Accueil", transfers: "Transferts", sedan: "Berline", van: "Van", book: "Réserver par WhatsApp" },
  en: { home: "Home",    transfers: "Transfers",  sedan: "Sedan",   van: "Van", book: "Book via WhatsApp" },
  ar: { home: "الرئيسية", transfers: "التحويلات", sedan: "سيدان",  van: "فان", book: "احجز عبر واتساب" },
  it: { home: "Home",    transfers: "Trasferimenti", sedan: "Berlina", van: "Van", book: "Prenota via WhatsApp" },
};

export function generateStaticParams() {
  return LOCALES.flatMap(locale => CATS.map(cat => ({ locale, cat })));
}

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string; cat: string }> }
): Promise<Metadata> {
  const { locale, cat } = await params;
  const l = (LOCALES.includes(locale as Locale) ? locale : "fr") as Locale;
  if (!CATS.includes(cat as Cat)) return {};
  const m = CAT_META[cat as Cat][l];
  const url = `${BASE}/${l}/transfers/category/${cat}`;

  return {
    title:       m.title,
    description: m.description,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(LOCALES.map(loc => [loc, `${BASE}/${loc}/transfers/category/${cat}`])),
    },
    openGraph: {
      title:           m.title,
      description:     m.description,
      url,
      type:            "website",
      locale:          OG_LOCALE[l],
      alternateLocale: LOCALES.filter(loc => loc !== l).map(loc => OG_LOCALE[loc]),
      images:          [{ url: `${BASE}${m.image}`, width: 1200, height: 630, alt: m.h1 }],
    },
    twitter: {
      card:        "summary_large_image",
      title:       m.title,
      description: m.description,
      images:      [`${BASE}${m.image}`],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; cat: string }>;
}) {
  const { locale, cat } = await params;
  const l = (LOCALES.includes(locale as Locale) ? locale : "fr") as Locale;
  if (!CATS.includes(cat as Cat)) notFound();

  const c    = cat as Cat;
  const m    = CAT_META[c][l];
  const lbl  = LABELS[l];
  const url  = `${BASE}/${l}/transfers/category/${cat}`;
  const list = transfers.filter(CAT_FILTER[c]);

  const itemListSchema = {
    "@context":      "https://schema.org",
    "@type":         "ItemList",
    "name":          m.h1,
    "inLanguage":    l,
    "numberOfItems": list.length,
    "itemListElement": list.map((t, i) => ({
      "@type":    "ListItem",
      "position": i + 1,
      "name":     `Marrakech → ${(t.to as Record<string, string>)[l] ?? t.to.fr}`,
      "url":      `${BASE}/${l}/transfers/${t.slug}`,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type":    "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": lbl.home,      "item": `${BASE}/${l}` },
      { "@type": "ListItem", "position": 2, "name": lbl.transfers, "item": `${BASE}/${l}/transfers` },
      { "@type": "ListItem", "position": 3, "name": m.h1,          "item": url },
    ],
  };

  return (
    <>
      <JsonLd data={[itemListSchema, breadcrumbSchema] as unknown as Record<string, unknown>[]} />
      <Navbar />
      <main className="min-h-screen bg-[#fff8f0]">

        {/* Hero */}
        <section className="relative h-64">
          <Image src={m.image} alt={m.h1} fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-[#062f35]/70" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <p className="text-[#a87627] font-caveat text-2xl mb-2">Tour Me Morocco</p>
            <h1 className="font-playfair text-4xl md:text-5xl text-white mb-2">{m.h1}</h1>
            <p className="text-white/80 text-lg">{m.sub}</p>
          </div>
        </section>

        {/* Breadcrumb */}
        <nav className="max-w-5xl mx-auto px-4 py-4 text-sm text-[#062f35]/60">
          <Link href={`/${l}`} className="hover:text-[#a87627]">{lbl.home}</Link>
          {" › "}
          <Link href={`/${l}/transfers`} className="hover:text-[#a87627]">{lbl.transfers}</Link>
          {" › "}
          <span className="text-[#062f35]">{m.h1}</span>
        </nav>

        {/* Transfer list */}
        <section className="max-w-5xl mx-auto px-4 py-8">
          <div className="grid gap-4">
            {list.map(t => (
              <Link
                key={t.slug}
                href={`/${l}/transfers/${t.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row"
              >
                <div className="relative h-40 sm:h-auto sm:w-48 shrink-0">
                  <Image
                    src={`/images/${t.image}`}
                    alt={`Marrakech → ${(t.to as Record<string, string>)[l] ?? t.to.fr}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 192px"
                  />
                </div>
                <div className="p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-4">
                  <div>
                    <h2 className="font-playfair text-xl text-[#062f35] group-hover:text-[#a87627] transition-colors">
                      Marrakech → {(t.to as Record<string, string>)[l] ?? t.to.fr}
                    </h2>
                    <p className="text-[#062f35]/60 text-sm mt-1">
                      {lbl.sedan}: €{t.prices.sedan} · {lbl.van}: €{t.prices.van}
                    </p>
                  </div>
                  <span className="shrink-0 border border-[#062f35] text-[#062f35] px-4 py-2 rounded-full text-sm font-semibold group-hover:bg-[#062f35] group-hover:text-white transition-colors">
                    {l === "ar" ? "التفاصيل" : l === "it" ? "Dettagli" : l === "en" ? "Details" : "Détails"}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-5xl mx-auto px-4 py-12 text-center">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#a87627] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#062f35] transition-colors"
          >
            {lbl.book}
          </a>
        </section>

      </main>
      <Footer />
    </>
  );
}
