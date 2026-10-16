"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { Reveal } from "@/components/Reveal";

type L = "fr" | "en" | "ar" | "it";
const destinations = [
  {
    name:    { fr: "Marrakech",        en: "Marrakech",      ar: "مراكش",              it: "Marrakech"          },
    country: { fr: "Maroc",            en: "Morocco",        ar: "المغرب",             it: "Marocco"            },
    img: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&w=900&q=85",
    href: "#contact",
  },
  {
    name:    { fr: "Fès",              en: "Fez",            ar: "فاس",                it: "Fès"                },
    country: { fr: "Maroc",            en: "Morocco",        ar: "المغرب",             it: "Marocco"            },
    img: "https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=900&q=85",
    href: "#contact",
  },
  {
    name:    { fr: "Désert du Sahara", en: "Sahara Desert",  ar: "صحراء الصحراء",      it: "Deserto del Sahara" },
    country: { fr: "Maroc",            en: "Morocco",        ar: "المغرب",             it: "Marocco"            },
    img: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=900&q=85",
    href: "#contact",
  },
  {
    name:    { fr: "Chefchaouen",      en: "Chefchaouen",    ar: "شفشاون",             it: "Chefchaouen"        },
    country: { fr: "Maroc",            en: "Morocco",        ar: "المغرب",             it: "Marocco"            },
    img: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=85",
    href: "#contact",
  },
];

const SPRING = { type: "spring" as const, stiffness: 280, damping: 22 };

export function Destinations() {
  const { t, locale } = useI18n();
  const tr  = t.destinations;
  const loc = locale as L;

  return (
    <section id="destinations" className="bg-[#fff8f0] -mt-4 sm:-mt-16 pt-0 pb-16 sm:pb-20" aria-labelledby="dest-heading">
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
              <h2 id="dest-heading" className="font-serif font-semibold text-[#062f35] leading-tight"
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
              <Link href="#contact"
                className="flex items-center gap-2 text-[12.5px] font-semibold text-[#062f35] border border-[#062f35] hover:bg-[#062f35] hover:text-white px-5 py-2.5 rounded-full transition-colors duration-200 whitespace-nowrap self-start sm:self-auto">
                {tr.viewAll}
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </motion.div>
          </Reveal>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
          {destinations.map((d, i) => (
            <Reveal key={d.name.fr} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -10, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={SPRING}
                className="h-full"
              >
                <Link href={d.href}
                  className="group relative h-[176px] lg:h-[240px] rounded-2xl overflow-hidden block bg-[#ddd] shadow-card hover:shadow-lift transition-shadow duration-300"
                >
                  <Image src={d.img} alt={d.name[loc]} fill
                    className="object-cover transition-transform duration-600 group-hover:scale-110"
                  />
                  <div className="absolute inset-[40%_0_0_0] bg-gradient-to-t from-[#031e22]/85 to-transparent" />
                  <span className="absolute z-10 bottom-3 left-3 right-3 flex items-end justify-between text-white">
                    <span>
                      <b className="flex items-center gap-1 text-[14px] font-bold">
                        <MapPin size={12} className="text-[#f5b63f]" />
                        {d.name[loc]}
                      </b>
                      <small className="block text-[11px] text-white/70 mt-0.5 ml-4">{d.country[loc]}</small>
                    </span>
                    <motion.span
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      transition={SPRING}
                      className="bg-[#f5b63f] text-[#1c2e2e] w-[28px] h-[28px] grid place-items-center rounded-full text-[16px] font-bold flex-shrink-0"
                    >
                      {locale === "ar" ? "←" : "→"}
                    </motion.span>
                  </span>
                </Link>
              </motion.div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
