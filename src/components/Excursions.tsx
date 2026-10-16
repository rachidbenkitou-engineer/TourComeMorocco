"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { featuredExcursions } from "@/data/excursions";
import { useI18n } from "@/i18n/I18nProvider";
import { Reveal } from "@/components/Reveal";

type L = "fr" | "en" | "ar" | "it";
const EXCURSION_I18N: Record<string, { title: Record<L, string>; short: Record<L, string> }> = {
  "vallee-ourika-atlas": {
    title: {
      fr: "Vallée de l'Ourika et Atlas depuis Marrakech",
      en: "Ourika Valley and Atlas from Marrakech",
      ar: "وادي أوريكا والأطلس من مراكش",
      it: "Valle dell'Ourika e Atlante da Marrakech",
    },
    short: {
      fr: "Villages berbères, coopérative d'argan et cascades de Setti Fatma",
      en: "Berber villages, argan cooperative and Setti Fatma waterfalls",
      ar: "قرى أمازيغية، تعاونية أركان وشلالات سيتي فاطمة",
      it: "Villaggi berberi, cooperativa di argan e cascate di Setti Fatma",
    },
  },
  "cascades-ouzoud": {
    title: {
      fr: "Cascades d'Ouzoud depuis Marrakech",
      en: "Ouzoud Waterfalls from Marrakech",
      ar: "شلالات أوزود من مراكش",
      it: "Cascate di Ouzoud da Marrakech",
    },
    short: {
      fr: "Les plus hautes cascades du Maroc, oliveraies et singes sauvages",
      en: "Morocco's highest waterfalls, olive groves and wild monkeys",
      ar: "أعلى شلالات المغرب، غابات الزيتون والقرود البربرية",
      it: "Le cascate più alte del Marocco, uliveti e scimmie selvatiche",
    },
  },
  "desert-agafay-coucher-soleil": {
    title: {
      fr: "Coucher de soleil et dromadaire dans le désert d'Agafay",
      en: "Sunset and camel ride in Agafay Desert",
      ar: "غروب الشمس وركوب الإبل في صحراء أكافاي",
      it: "Tramonto e cammello nel deserto di Agafay",
    },
    short: {
      fr: "Désert de pierre, balade à dromadaire au coucher du soleil et dîner sous les étoiles",
      en: "Stone desert, camel ride at sunset and dinner under the stars",
      ar: "صحراء حجرية، ركوب الإبل عند الغروب والعشاء تحت النجوم",
      it: "Deserto di pietra, giro in cammello al tramonto e cena sotto le stelle",
    },
  },
  "imlil-toubkal-atlas": {
    title: {
      fr: "Imlil et parc national du Toubkal depuis Marrakech",
      en: "Imlil and Toubkal National Park from Marrakech",
      ar: "إملي وحديقة توبقال الوطنية من مراكش",
      it: "Imlil e parco nazionale del Toubkal da Marrakech",
    },
    short: {
      fr: "Randonnée dans le Haut Atlas jusqu'aux villages berbères sous le plus haut sommet d'Afrique du Nord",
      en: "Hiking in the High Atlas to Berber villages under North Africa's highest peak",
      ar: "مشي في جبال الأطلس إلى القرى الأمازيغية تحت أعلى قمة في شمال أفريقيا",
      it: "Escursione nell'Alto Atlante fino ai villaggi berberi sotto la vetta più alta del Nord Africa",
    },
  },
};

const DURATION_I18N: Record<string, Record<L, string>> = {
  "Journée complète": { fr: "Journée complète", en: "Full Day",  ar: "يوم كامل",  it: "Giornata intera" },
  "Demi-journée":     { fr: "Demi-journée",     en: "Half Day",  ar: "نصف يوم",   it: "Mezza giornata"  },
};

const SPRING = { type: "spring" as const, stiffness: 280, damping: 22 };

function IconClock() {
  return (
    <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>
    </svg>
  );
}
function IconArrow({ rtl }: { rtl?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      style={rtl ? { transform: "scaleX(-1)" } : undefined}>
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  );
}

export function Excursions() {
  const { t, locale } = useI18n();
  const tr  = t.excursions;
  const loc = locale as L;

  return (
    <section className="bg-[#fff8f0] -mt-4 sm:-mt-16 pt-0 pb-14 sm:pb-20">
      <div className="max-w-[1280px] mx-auto px-[clamp(16px,4.5vw,56px)]">

        {/* Header — per-element stagger */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <Reveal from="left">
              <div className="flex items-center gap-2.5 mb-1">
                <span className="h-px w-7 bg-[#f5b63f] opacity-70 flex-shrink-0" aria-hidden />
                <p className="font-script text-[#f5b63f]"
                  style={{ fontSize: "clamp(20px,2.2vw,28px)", transform: "rotate(-1.5deg)" }}>
                  {tr.script}
                </p>
              </div>
            </Reveal>
            <Reveal from="up" delay={0.1}>
              <h2 className="font-serif font-semibold text-[#062f35] leading-tight"
                style={{ fontSize: "clamp(24px,3.2vw,40px)" }}>
                {tr.title}
              </h2>
            </Reveal>
            <Reveal from="up" delay={0.18}>
              <p className="text-[#5a7578] mt-2 max-w-[440px]" style={{ fontSize: "clamp(13px,1.1vw,15px)" }}>
                {tr.subtitle}
              </p>
            </Reveal>
          </div>
          <Reveal from="right" delay={0.14}>
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }} transition={SPRING}>
              <Link href="/excursions"
                className="flex items-center gap-2 text-[12.5px] font-semibold text-[#062f35] border border-[#062f35] hover:bg-[#062f35] hover:text-white px-5 py-2.5 rounded-full transition-colors duration-200 whitespace-nowrap self-start sm:self-auto">
                {tr.seeAll} <IconArrow rtl={loc === "ar"} />
              </Link>
            </motion.div>
          </Reveal>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredExcursions.map((excursion, i) => (
            <Reveal key={excursion.slug} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={SPRING}
                className="h-full"
              >
                <Link href={`/excursions/${excursion.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-lift transition-shadow duration-300 flex flex-col h-full"
                >
                  <div className="relative h-[190px] overflow-hidden flex-shrink-0">
                    <Image src={excursion.image} alt={excursion.title} fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#031e22]/75 via-[#031e22]/15 to-transparent" />
                    <motion.span
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 + 0.3, duration: 0.45 }}
                      className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-[#062f35]/80 backdrop-blur-sm text-[#f5b63f] text-[10px] font-bold px-2.5 py-1 rounded-full"
                    >
                      <IconClock /> {DURATION_I18N[excursion.duration]?.[loc] ?? excursion.duration}
                    </motion.span>
                  </div>
                  <div className="flex flex-col flex-1 p-4">
                    <h3 className="font-serif text-[14.5px] font-semibold text-[#062f35] leading-snug mb-1.5">
                      {EXCURSION_I18N[excursion.slug]?.title[loc] ?? excursion.title}
                    </h3>
                    <p className="text-[12px] text-[#5a7578] leading-relaxed flex-1 mb-3">
                      {EXCURSION_I18N[excursion.slug]?.short[loc] ?? excursion.short}
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-[#f0ebe3] mt-auto">
                      <span className="text-[9.5px] font-bold text-[#a87627] uppercase tracking-[0.08em]">
                        {tr.cardLabel}
                      </span>
                      <span className="inline-flex items-center gap-1 bg-[#062f35] group-hover:bg-[#0a3d45] text-white text-[10px] font-semibold px-3 py-1.5 rounded-full transition-colors duration-200">
                        {tr.cardView} <IconArrow rtl={loc === "ar"} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <Reveal delay={0.15} className="mt-10 flex justify-center">
          <motion.div whileHover={{ scale: 1.06, y: -3 }} whileTap={{ scale: 0.97 }} transition={SPRING}>
            <Link href="/excursions"
              className="inline-flex items-center gap-3 rounded-full transition-shadow duration-300 hover:shadow-[0_12px_28px_rgba(245,182,63,.4)]"
              style={{
                background: "linear-gradient(135deg,#f5c842 0%,#e8921e 100%)",
                fontSize: "11px", letterSpacing: "0.12em", fontWeight: 700,
                padding: "13px 14px 13px 26px", color: "#1c2e2e", textTransform: "uppercase",
              }}
            >
              {tr.seeAll}
              <span className="w-7 h-7 rounded-full bg-[#1c2e2e]/15 flex items-center justify-center text-[15px]">→</span>
            </Link>
          </motion.div>
        </Reveal>

      </div>
    </section>
  );
}
