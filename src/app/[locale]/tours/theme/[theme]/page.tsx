import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { tours } from "@/data/tours";
import type { Locale } from "@/i18n/translations";

const BASE     = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tourmemorocco.com";
const LOCALES: Locale[] = ["fr", "en", "ar", "it"];
const WHATSAPP = "https://wa.me/212709274114";

const OG_LOCALE: Record<Locale, string> = {
  fr: "fr_FR", en: "en_US", ar: "ar_MA", it: "it_IT",
};

type Theme = "day-trips" | "3-days" | "sahara" | "imperial-cities" | "from-casablanca" | "from-tangier" | "from-fes";
const THEMES: Theme[] = ["day-trips", "3-days", "sahara", "imperial-cities", "from-casablanca", "from-tangier", "from-fes"];

/* ── Theme → tour slug filter ── */
const THEME_SLUGS: Record<Theme, string[]> = {
  "day-trips": [
    "marrakech-essaouira-day-trip",
    "chefchaouen-day-trip",
    "ait-ben-haddou-ouarzazate-day-trip",
    "casablanca-city-tour",
    "casablanca-to-marrakech-private-tour",
    "fes-chefchaouen-tour",
  ],
  "3-days": [
    "3-day-marrakech-merzouga-sahara-tour",
    "3-day-marrakech-fes-desert-tour",
    "3-day-fes-merzouga-marrakech-sahara-tour",
    "3-day-casablanca-merzouga-sahara-tour",
  ],
  "sahara": [
    "3-day-marrakech-merzouga-sahara-tour",
    "4-day-marrakech-sahara-private-tour",
    "3-day-marrakech-fes-desert-tour",
    "6-day-marrakech-sahara-fes-chefchaouen-tour",
    "7-day-marrakech-sahara-tour",
    "8-day-morocco-sahara-fes",
    "9-day-morocco-sahara-fes-chefchaouen",
    "10-day-morocco-imperial-cities-sahara-tour",
    "5-day-tangier-marrakech-chefchaouen-sahara-tour",
    "3-day-fes-merzouga-marrakech-sahara-tour",
    "8-day-casablanca-marrakech-sahara-tour",
    "9-day-casablanca-desert-mountains-discovery",
    "3-day-casablanca-merzouga-sahara-tour",
    "5-day-marrakech-casablanca-sahara-tour",
  ],
  "imperial-cities": [
    "10-day-morocco-imperial-cities-sahara-tour",
    "7-day-marrakech-casablanca-private-tour",
    "5-day-marrakech-casablanca-sahara-tour",
    "8-day-morocco-sahara-fes",
    "9-day-morocco-sahara-fes-chefchaouen",
  ],
  "from-casablanca": [
    "casablanca-to-marrakech-private-tour",
    "casablanca-city-tour",
    "8-day-casablanca-marrakech-sahara-tour",
    "9-day-casablanca-desert-mountains-discovery",
    "3-day-casablanca-merzouga-sahara-tour",
  ],
  "from-tangier": [
    "5-day-tangier-marrakech-chefchaouen-sahara-tour",
  ],
  "from-fes": [
    "fes-chefchaouen-tour",
    "3-day-fes-merzouga-marrakech-sahara-tour",
  ],
};

const THEME_META: Record<Theme, Record<Locale, {
  title: string; description: string; h1: string; sub: string; image: string;
}>> = {
  "day-trips": {
    fr: {
      title:       "Excursions d'une Journée depuis Marrakech — Tours Privés",
      description: "Excursions privées d'une journée depuis Marrakech : Essaouira, Chefchaouen, Aït Ben Haddou, Ouarzazate… Chauffeur dédié, départ à l'heure, prix fixe.",
      h1:          "Excursions d'une Journée depuis Marrakech",
      sub:         "Découvrez le Maroc en une journée avec un chauffeur privé",
      image:       "/images/essaouira.jpg",
    },
    en: {
      title:       "Day Trips from Marrakech — Private Tours",
      description: "Private day trips from Marrakech: Essaouira, Chefchaouen, Aït Ben Haddou, Ouarzazate… Dedicated driver, on-time departure, fixed price.",
      h1:          "Day Trips from Marrakech",
      sub:         "Discover Morocco in a day with a private driver",
      image:       "/images/essaouira.jpg",
    },
    ar: {
      title:       "رحلات يوم كامل من مراكش — جولات خاصة",
      description: "رحلات خاصة ليوم كامل من مراكش: الصويرة، شفشاون، أيت بنحدو، ورزازات... سائق مخصص، مواعيد دقيقة، سعر ثابت.",
      h1:          "رحلات يوم كامل من مراكش",
      sub:         "اكتشف المغرب في يوم مع سائق خاص",
      image:       "/images/essaouira.jpg",
    },
    it: {
      title:       "Gite di un Giorno da Marrakech — Tour Privati",
      description: "Gite private di un giorno da Marrakech: Essaouira, Chefchaouen, Aït Ben Haddou, Ouarzazate… Autista dedicato, partenza puntuale, prezzo fisso.",
      h1:          "Gite di un Giorno da Marrakech",
      sub:         "Scopri il Marocco in un giorno con un autista privato",
      image:       "/images/essaouira.jpg",
    },
  },
  "3-days": {
    fr: {
      title:       "Circuits 3 Jours au Maroc — Tours Privés depuis Marrakech",
      description: "Circuits privés de 3 jours depuis Marrakech, Fès ou Casablanca : Sahara, Merzouga, Erg Chebbi. Hébergement, chameau, nuit en camp berbère inclus.",
      h1:          "Circuits 3 Jours au Maroc",
      sub:         "Sahara, Merzouga et désert en 3 jours",
      image:       "/images/desertCamels.jpg",
    },
    en: {
      title:       "3-Day Morocco Tours — Private Circuits from Marrakech",
      description: "Private 3-day circuits from Marrakech, Fes or Casablanca: Sahara, Merzouga, Erg Chebbi. Accommodation, camel ride, Berber camp night included.",
      h1:          "3-Day Morocco Tours",
      sub:         "Sahara, Merzouga and the desert in 3 days",
      image:       "/images/desertCamels.jpg",
    },
    ar: {
      title:       "جولات 3 أيام في المغرب — مشاوير خاصة من مراكش",
      description: "مشاوير خاصة 3 أيام من مراكش أو فاس أو الدار البيضاء: الصحراء، مرزوقة، عرق الشبي. إقامة وركوب جمال ومبيت في مخيم بربري.",
      h1:          "جولات 3 أيام في المغرب",
      sub:         "الصحراء ومرزوقة في 3 أيام",
      image:       "/images/desertCamels.jpg",
    },
    it: {
      title:       "Tour 3 Giorni in Marocco — Circuiti Privati da Marrakech",
      description: "Circuiti privati di 3 giorni da Marrakech, Fes o Casablanca: Sahara, Merzouga, Erg Chebbi. Alloggio, giro in cammello, notte in campo berbero inclusi.",
      h1:          "Tour 3 Giorni in Marocco",
      sub:         "Sahara, Merzouga e il deserto in 3 giorni",
      image:       "/images/desertCamels.jpg",
    },
  },
  "sahara": {
    fr: {
      title:       "Tours Sahara depuis Marrakech — Désert Merzouga & Dunes",
      description: "Tours privés au Sahara depuis Marrakech : Erg Chebbi, Merzouga, nuit en camp berbère, balade à chameau au lever du soleil. De 3 à 10 jours.",
      h1:          "Tours Sahara depuis Marrakech",
      sub:         "Erg Chebbi, Merzouga et nuit sous les étoiles",
      image:       "/images/dunes.jpg",
    },
    en: {
      title:       "Sahara Tours from Marrakech — Merzouga Desert & Dunes",
      description: "Private Sahara tours from Marrakech: Erg Chebbi, Merzouga, night in a Berber camp, camel ride at sunrise. From 3 to 10 days.",
      h1:          "Sahara Tours from Marrakech",
      sub:         "Erg Chebbi, Merzouga and starlit nights",
      image:       "/images/dunes.jpg",
    },
    ar: {
      title:       "جولات الصحراء من مراكش — صحراء مرزوقة والكثبان",
      description: "جولات خاصة إلى الصحراء من مراكش: عرق الشبي، مرزوقة، ليلة في مخيم بربري، ركوب الجمال عند شروق الشمس. من 3 إلى 10 أيام.",
      h1:          "جولات الصحراء من مراكش",
      sub:         "عرق الشبي ومرزوقة والليالي تحت النجوم",
      image:       "/images/dunes.jpg",
    },
    it: {
      title:       "Tour del Sahara da Marrakech — Deserto Merzouga e Dune",
      description: "Tour privati del Sahara da Marrakech: Erg Chebbi, Merzouga, notte in campo berbero, giro in cammello all'alba. Da 3 a 10 giorni.",
      h1:          "Tour del Sahara da Marrakech",
      sub:         "Erg Chebbi, Merzouga e notti stellate",
      image:       "/images/dunes.jpg",
    },
  },
  "imperial-cities": {
    fr: {
      title:       "Villes Impériales du Maroc — Circuit Marrakech Fès Meknès Rabat",
      description: "Circuit des 4 villes impériales du Maroc : Marrakech, Fès, Meknès, Rabat. Tours privés de 7 à 10 jours avec chauffeur dédié et nuits en riad.",
      h1:          "Villes Impériales du Maroc",
      sub:         "Marrakech, Fès, Meknès, Rabat en circuit privé",
      image:       "/images/fes.jpg",
    },
    en: {
      title:       "Imperial Cities of Morocco — Circuit Marrakech Fes Meknes Rabat",
      description: "Circuit of Morocco's 4 imperial cities: Marrakech, Fes, Meknes, Rabat. Private tours of 7 to 10 days with dedicated driver and riad nights.",
      h1:          "Imperial Cities of Morocco",
      sub:         "Marrakech, Fes, Meknes, Rabat on a private circuit",
      image:       "/images/fes.jpg",
    },
    ar: {
      title:       "المدن الإمبراطورية في المغرب — دورة مراكش فاس مكناس الرباط",
      description: "دورة المدن الإمبراطورية الأربع في المغرب: مراكش، فاس، مكناس، الرباط. مشاوير خاصة من 7 إلى 10 أيام مع سائق مخصص وليالٍ في الرياضات.",
      h1:          "المدن الإمبراطورية في المغرب",
      sub:         "مراكش وفاس ومكناس والرباط في دورة خاصة",
      image:       "/images/fes.jpg",
    },
    it: {
      title:       "Città Imperiali del Marocco — Circuito Marrakech Fes Meknes Rabat",
      description: "Circuito delle 4 città imperiali del Marocco: Marrakech, Fes, Meknes, Rabat. Tour privati da 7 a 10 giorni con autista dedicato e notti in riad.",
      h1:          "Città Imperiali del Marocco",
      sub:         "Marrakech, Fes, Meknes, Rabat in un circuito privato",
      image:       "/images/fes.jpg",
    },
  },
  "from-casablanca": {
    fr: {
      title:       "Tours Privés depuis Casablanca — Circuits Maroc",
      description: "Tours et circuits privés depuis Casablanca : transfert vers Marrakech, Sahara, Merzouga et villes impériales. Chauffeur dédié, prix fixes.",
      h1:          "Tours depuis Casablanca",
      sub:         "Circuits privés de Casablanca vers le Maroc",
      image:       "/images/casablanca.jpg",
    },
    en: {
      title:       "Private Tours from Casablanca — Morocco Circuits",
      description: "Private tours and circuits from Casablanca: transfer to Marrakech, Sahara, Merzouga and imperial cities. Dedicated driver, fixed prices.",
      h1:          "Tours from Casablanca",
      sub:         "Private circuits from Casablanca across Morocco",
      image:       "/images/casablanca.jpg",
    },
    ar: {
      title:       "جولات خاصة من الدار البيضاء — مشاوير المغرب",
      description: "جولات ومشاوير خاصة من الدار البيضاء: نقل إلى مراكش، الصحراء، مرزوقة والمدن الإمبراطورية. سائق مخصص، أسعار ثابتة.",
      h1:          "جولات من الدار البيضاء",
      sub:         "مشاوير خاصة من الدار البيضاء في المغرب",
      image:       "/images/casablanca.jpg",
    },
    it: {
      title:       "Tour Privati da Casablanca — Circuiti Marocco",
      description: "Tour e circuiti privati da Casablanca: trasferimento a Marrakech, Sahara, Merzouga e città imperiali. Autista dedicato, prezzi fissi.",
      h1:          "Tour da Casablanca",
      sub:         "Circuiti privati da Casablanca in tutto il Marocco",
      image:       "/images/casablanca.jpg",
    },
  },
  "from-tangier": {
    fr: {
      title:       "Tours Privés depuis Tanger — Circuits Maroc",
      description: "Circuit privé depuis Tanger vers Chefchaouen, Sahara, Merzouga et Marrakech. Chauffeur dédié, 5 jours de découverte du Maroc du nord au sud.",
      h1:          "Tours depuis Tanger",
      sub:         "De Tanger à Marrakech via Chefchaouen et le Sahara",
      image:       "/images/tangerCity.jpg",
    },
    en: {
      title:       "Private Tours from Tangier — Morocco Circuits",
      description: "Private circuit from Tangier to Chefchaouen, Sahara, Merzouga and Marrakech. Dedicated driver, 5 days discovering Morocco from north to south.",
      h1:          "Tours from Tangier",
      sub:         "From Tangier to Marrakech via Chefchaouen and the Sahara",
      image:       "/images/tangerCity.jpg",
    },
    ar: {
      title:       "جولات خاصة من طنجة — مشاوير المغرب",
      description: "مشوار خاص من طنجة إلى شفشاون والصحراء ومرزوقة ومراكش. سائق مخصص، 5 أيام لاكتشاف المغرب من الشمال إلى الجنوب.",
      h1:          "جولات من طنجة",
      sub:         "من طنجة إلى مراكش عبر شفشاون والصحراء",
      image:       "/images/tangerCity.jpg",
    },
    it: {
      title:       "Tour Privati da Tangeri — Circuiti Marocco",
      description: "Circuito privato da Tangeri verso Chefchaouen, Sahara, Merzouga e Marrakech. Autista dedicato, 5 giorni per scoprire il Marocco da nord a sud.",
      h1:          "Tour da Tangeri",
      sub:         "Da Tangeri a Marrakech via Chefchaouen e il Sahara",
      image:       "/images/tangerCity.jpg",
    },
  },
  "from-fes": {
    fr: {
      title:       "Tours Privés depuis Fès — Circuits Maroc",
      description: "Circuits privés depuis Fès : Chefchaouen et Sahara Merzouga. Chauffeur dédié, départ depuis Fès, retour Marrakech ou Fès. Prix fixes.",
      h1:          "Tours depuis Fès",
      sub:         "De Fès vers Chefchaouen et le Sahara de Merzouga",
      image:       "/images/fes.jpg",
    },
    en: {
      title:       "Private Tours from Fes — Morocco Circuits",
      description: "Private circuits from Fes: Chefchaouen and Merzouga Sahara. Dedicated driver, departure from Fes, return to Marrakech or Fes. Fixed prices.",
      h1:          "Tours from Fes",
      sub:         "From Fes to Chefchaouen and the Sahara of Merzouga",
      image:       "/images/fes.jpg",
    },
    ar: {
      title:       "جولات خاصة من فاس — مشاوير المغرب",
      description: "مشاوير خاصة من فاس: شفشاون وصحراء مرزوقة. سائق مخصص، انطلاق من فاس، عودة إلى مراكش أو فاس. أسعار ثابتة.",
      h1:          "جولات من فاس",
      sub:         "من فاس إلى شفشاون وصحراء مرزوقة",
      image:       "/images/fes.jpg",
    },
    it: {
      title:       "Tour Privati da Fes — Circuiti Marocco",
      description: "Circuiti privati da Fes: Chefchaouen e Sahara di Merzouga. Autista dedicato, partenza da Fes, ritorno a Marrakech o Fes. Prezzi fissi.",
      h1:          "Tour da Fes",
      sub:         "Da Fes verso Chefchaouen e il Sahara di Merzouga",
      image:       "/images/fes.jpg",
    },
  },
};

const LABELS: Record<Locale, { home: string; tours: string; book: string; days: string }> = {
  fr: { home: "Accueil", tours: "Tours", book: "Réserver par WhatsApp", days: "jours" },
  en: { home: "Home",    tours: "Tours", book: "Book via WhatsApp",     days: "days"  },
  ar: { home: "الرئيسية", tours: "الجولات", book: "احجز عبر واتساب",  days: "أيام"  },
  it: { home: "Home",    tours: "Tour",  book: "Prenota via WhatsApp",  days: "giorni" },
};

export function generateStaticParams() {
  return LOCALES.flatMap(locale => THEMES.map(theme => ({ locale, theme })));
}

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string; theme: string }> }
): Promise<Metadata> {
  const { locale, theme } = await params;
  const l = (LOCALES.includes(locale as Locale) ? locale : "fr") as Locale;
  if (!THEMES.includes(theme as Theme)) return {};
  const m   = THEME_META[theme as Theme][l];
  const url = `${BASE}/${l}/tours/theme/${theme}`;

  return {
    title:       m.title,
    description: m.description,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(LOCALES.map(loc => [loc, `${BASE}/${loc}/tours/theme/${theme}`])),
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
  params: Promise<{ locale: string; theme: string }>;
}) {
  const { locale, theme } = await params;
  const l = (LOCALES.includes(locale as Locale) ? locale : "fr") as Locale;
  if (!THEMES.includes(theme as Theme)) notFound();

  const th   = theme as Theme;
  const m    = THEME_META[th][l];
  const lbl  = LABELS[l];
  const url  = `${BASE}/${l}/tours/theme/${theme}`;
  const slugs = THEME_SLUGS[th];
  const list  = tours.filter(t => slugs.includes(t.slug));

  const itemListSchema = {
    "@context":      "https://schema.org",
    "@type":         "ItemList",
    "name":          m.h1,
    "inLanguage":    l,
    "numberOfItems": list.length,
    "itemListElement": list.map((t, i) => ({
      "@type":       "ListItem",
      "position":    i + 1,
      "name":        t.title[l],
      "description": t.short[l],
      "url":         `${BASE}/${l}/tours/${t.slug}`,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type":    "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": lbl.home,  "item": `${BASE}/${l}` },
      { "@type": "ListItem", "position": 2, "name": lbl.tours, "item": `${BASE}/${l}/tours` },
      { "@type": "ListItem", "position": 3, "name": m.h1,      "item": url },
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
          <Link href={`/${l}/tours`} className="hover:text-[#a87627]">{lbl.tours}</Link>
          {" › "}
          <span className="text-[#062f35]">{m.h1}</span>
        </nav>

        {/* Tour list */}
        <section className="max-w-5xl mx-auto px-4 py-8">
          <div className="grid gap-6">
            {list.map(t => (
              <Link
                key={t.slug}
                href={`/${l}/tours/${t.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row"
              >
                <div className="relative h-48 sm:h-auto sm:w-64 shrink-0">
                  <Image
                    src={t.image}
                    alt={t.title[l]}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 256px"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <p className="text-[#a87627] text-xs font-medium mb-1">{t.days[l]}</p>
                  <h2 className="font-playfair text-2xl text-[#062f35] group-hover:text-[#a87627] transition-colors">{t.title[l]}</h2>
                  <p className="text-[#062f35]/60 text-sm mt-2 line-clamp-2">{t.short[l]}</p>
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
