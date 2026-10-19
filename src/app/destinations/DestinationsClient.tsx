"use client";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { destinations } from "@/data/destinations";
import { useI18n } from "@/i18n/I18nProvider";
import type { Locale } from "@/i18n/translations";

const LOCALES = ["fr", "en", "ar", "it"] as const;

const LABELS: Record<Locale, { h1: string; sub: string; discover: string }> = {
  fr: { h1: "Destinations au Maroc",        sub: "Explorez le Maroc avec un chauffeur privé dédié",        discover: "Découvrir →" },
  en: { h1: "Destinations in Morocco",      sub: "Explore Morocco with a dedicated private driver",         discover: "Discover →"  },
  ar: { h1: "وجهات في المغرب",              sub: "استكشف المغرب مع سائق خاص مخصص",                        discover: "اكتشف ←"     },
  it: { h1: "Destinazioni in Marocco",      sub: "Esplora il Marocco con un autista privato dedicato",      discover: "Scopri →"    },
};

export default function DestinationsClient() {
  const { locale } = useI18n();
  const l = (LOCALES.includes(locale as Locale) ? locale : "fr") as Locale;
  const lbl = LABELS[l];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#fff8f0]">
        {/* Hero */}
        <section className="bg-[#062f35] py-16 px-4 text-center">
          <p className="text-[#a87627] font-caveat text-2xl mb-2">Tour Me Morocco</p>
          <h1 className="font-playfair text-4xl md:text-5xl text-white mb-4">{lbl.h1}</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">{lbl.sub}</p>
        </section>

        {/* Grid */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map(d => (
              <Link
                key={d.slug}
                href={`/${l}/destinations/${d.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={`/images/${d.image}`}
                    alt={d.name[l]}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <h2 className="absolute bottom-4 left-4 font-playfair text-2xl text-white">{d.name[l]}</h2>
                </div>
                <div className="p-5">
                  <p className="text-[#a87627] text-sm font-medium mb-2">{d.tagline[l]}</p>
                  <p className="text-[#062f35]/70 text-sm line-clamp-3">{d.intro[l]}</p>
                  <span className="mt-4 inline-block text-[#062f35] font-semibold text-sm border-b border-[#a87627] pb-0.5">
                    {lbl.discover}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
