"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useI18n } from "@/i18n/I18nProvider";
import { transfers } from "@/data/transfers";
import { Reveal } from "@/components/Reveal";

const FEATURED_SLUGS = [
  { slug: "aeroport-menara",  img: "/images/transferAeroportMenara.jpg" },
  { slug: "essaouira",        img: "/images/transferEssaouira.jpg" },
  { slug: "agadir",           img: "/images/transferAgadir.jpg" },
  { slug: "ait-ben-haddou",   img: "/images/transferAitBenHaddou.jpg" },
  { slug: "ouarzazate",       img: "/images/transferOuarzazate.jpg" },
  { slug: "fes",              img: "/images/transferFes.jpg" },
  { slug: "rabat",            img: "/images/transferRabat.jpg" },
  { slug: "merzouga",         img: "/images/transferMerzouga.jpg" },
  { slug: "casablanca",       img: "/images/transferCasablanca.jpg" },
  { slug: "agafay",           img: "/images/agafay.jpg" },
];

const SPRING = { type: "spring" as const, stiffness: 280, damping: 22 };

function localizeUnits(str: string, locale: string) {
  if (locale !== "ar") return str;
  return str.replace(/\bh\b/g, "ساعة").replace(/\bkm\b/g, "كم").replace(/\bmin\b/g, "د");
}

function IconClock() {
  return (
    <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>
    </svg>
  );
}
function IconShield() {
  return (
    <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3 5 6v5c0 4.8 3 8 7 10 4-2 7-5.2 7-10V6z"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  );
}
function IconArrowRight() {
  return (
    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  );
}

export function PopularTransfers() {
  const { t, locale } = useI18n();
  const tr  = t.transfers;
  const loc = locale as "fr" | "en" | "ar" | "it";

  const routes = FEATURED_SLUGS.map(({ slug, img }) => {
    const transfer = transfers.find(t => t.slug === slug);
    if (!transfer) return null;
    return {
      name:     (transfer.to as Record<string, string | undefined>)[loc] ?? transfer.to.fr,
      price:    transfer.price,
      duration: transfer.duration,
      img,
      slug,
    };
  }).filter(Boolean) as { name: string; price: string; duration: string; img: string; slug: string }[];

  return (
    <section className="pt-5 sm:pt-2 pb-20 bg-[#fff8f0]">
      <div className="max-w-[1280px] mx-auto px-[clamp(16px,4.5vw,56px)]">

        {/* Header — per-element stagger */}
        <div className="mb-10">
          <Reveal from="left">
            <p className="font-script text-[#f5b63f] mb-1"
              style={{ fontSize: "clamp(20px,2.2vw,28px)", transform: "rotate(-1.5deg)" }}>
              {tr.script}
            </p>
          </Reveal>
          <Reveal from="up" delay={0.1}>
            <h2 className="font-serif font-semibold text-[#062f35] leading-tight"
              style={{ fontSize: "clamp(26px,3.2vw,42px)" }}>
              {tr.title}
            </h2>
          </Reveal>
          <Reveal from="up" delay={0.18}>
            <p className="text-[#5a7578] text-[13.5px] mt-2 max-w-[460px] leading-relaxed">
              {tr.subtitle}
            </p>
          </Reveal>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {routes.map((route, i) => (
            <Reveal key={route.slug} delay={i * 0.07} className={i === 9 ? "lg:hidden" : ""}>
              <motion.div
                whileHover={{ y: -8, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={SPRING}
                className="h-full"
              >
                <Link href={`/${locale}/transfers/${route.slug}`}
                  className="group relative h-[160px] sm:h-[190px] md:h-[210px] overflow-hidden rounded-2xl cursor-pointer shadow-[0_4px_20px_rgba(6,47,53,.12)] hover:shadow-[0_16px_40px_rgba(6,47,53,.25)] transition-shadow duration-300 block"
                >
                  <Image src={route.img} alt={route.name} fill
                    className="object-cover transition-transform duration-700 group-hover:scale-112"
                    sizes="(max-width:1024px) 50vw, 20vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#031e22]/90 via-[#031e22]/25 to-transparent" />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.07 + 0.25, duration: 0.4 }}
                    className="absolute top-3 right-3 bg-[#f5b63f] text-[#1c2e2e] text-[10.5px] font-bold px-2.5 py-1 rounded-full shadow-md"
                  >
                    {tr.cardFrom} {route.price}
                  </motion.div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-[#f5b63f] text-[9.5px] font-bold uppercase tracking-[0.12em] mb-0.5">
                      {tr.cardOrigin}
                    </p>
                    <p className="text-white font-bold leading-tight mb-2.5" style={{ fontSize: "clamp(13px,1.3vw,16px)" }}>
                      {route.name}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 text-white/75 text-[10px] font-medium">
                        <IconClock /> {localizeUnits(route.duration, locale)}
                      </span>
                      <span className="flex items-center gap-1 text-[9px] font-bold text-[#6ee7a8] bg-white/10 backdrop-blur-sm px-2 py-0.5 rounded-full border border-white/10">
                        <IconShield /> {tr.cardFixed}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={0.12} className="mt-10 flex justify-center">
          <motion.div whileHover={{ scale: 1.06, y: -3 }} whileTap={{ scale: 0.97 }} transition={SPRING}>
            <Link href={`/${locale}/transfers`}
              className="flex items-center gap-2 text-[12px] font-bold text-[#062f35] border-2 border-[#062f35] px-8 py-3 rounded-full hover:bg-[#062f35] hover:text-white transition-colors duration-200">
              {tr.seeAll} <IconArrowRight />
            </Link>
          </motion.div>
        </Reveal>

      </div>
    </section>
  );
}
