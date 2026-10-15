"use client";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/i18n/I18nProvider";
import { transfers } from "@/data/transfers";

const FEATURED_SLUGS = [
  { slug: "aeroport-menara",  img: "/gallery/g23.jpg" },
  { slug: "essaouira",        img: "/gallery/g13.jpg" },
  { slug: "agadir",           img: "/gallery/g10.jpg" },
  { slug: "ait-ben-haddou",   img: "/gallery/g08.jpg" },
  { slug: "ouarzazate",       img: "/gallery/g06.jpg" },
  { slug: "fes",              img: "/gallery/g18.jpg" },
  { slug: "rabat",            img: "/gallery/g22.jpg" },
  { slug: "merzouga",         img: "/gallery/g24.jpg" },
  { slug: "casablanca",       img: "/gallery/g02.jpg" },
];

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
    <section className="pt-2 pb-20 bg-[#fff8f0]">
      <div className="max-w-[1280px] mx-auto px-[clamp(16px,4.5vw,56px)]">

        {/* Header */}
        <div className="mb-10">
          <p className="font-script text-[#f5b63f] mb-1"
            style={{ fontSize: "clamp(20px,2.2vw,28px)", transform: "rotate(-1.5deg)" }}>
            {tr.script}
          </p>
          <h2 className="font-serif font-semibold text-[#062f35] leading-tight"
            style={{ fontSize: "clamp(26px,3.2vw,42px)" }}>
            {tr.title}
          </h2>
          <p className="text-[#5a7578] text-[13.5px] mt-2 max-w-[460px] leading-relaxed">
            {tr.subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {routes.map(route => (
            <Link key={route.slug} href={`/transfers/${route.slug}`}
              className="group relative h-[160px] sm:h-[190px] md:h-[210px] overflow-hidden rounded-2xl cursor-pointer shadow-[0_4px_20px_rgba(6,47,53,.12)] hover:shadow-[0_12px_36px_rgba(6,47,53,.22)] transition-all duration-300 hover:-translate-y-1"
            >
              <Image src={route.img} alt={route.name} fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width:640px) 50vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#031e22]/90 via-[#031e22]/25 to-transparent" />
              <div className="absolute top-3 right-3 bg-[#f5b63f] text-[#1c2e2e] text-[10.5px] font-bold px-2.5 py-1 rounded-full shadow-md">
                {tr.cardFrom} {route.price}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white/60 text-[9.5px] font-bold uppercase tracking-[0.12em] mb-0.5">
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
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <Link href="/transfers"
            className="flex items-center gap-2 text-[12px] font-bold text-[#062f35] border-2 border-[#062f35] px-8 py-3 rounded-full hover:bg-[#062f35] hover:text-white transition-all duration-200">
            {tr.seeAll} <IconArrowRight />
          </Link>
        </div>

      </div>
    </section>
  );
}
