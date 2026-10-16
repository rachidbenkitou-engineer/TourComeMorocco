"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarCheck, Menu, X, Globe, ChevronDown, Check } from "lucide-react";
import { useBooking } from "@/components/BookingModal";
import { useI18n } from "@/i18n/I18nProvider";
import { LOCALES, LOCALE_LABELS, LOCALE_NAMES, type Locale } from "@/i18n/translations";

function WhatsAppIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.103 1.514 5.831L0 24l6.336-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.792 9.792 0 01-5.012-1.383l-.36-.214-3.713.975.989-3.617-.234-.37A9.787 9.787 0 012.182 12C2.182 6.578 6.578 2.182 12 2.182c5.422 0 9.818 4.396 9.818 9.818 0 5.422-4.396 9.818-9.818 9.818zm5.39-7.373c-.293-.146-1.74-.858-2.01-.956-.269-.098-.465-.146-.661.147-.196.293-.759.956-.931 1.152-.172.196-.343.22-.636.073-.293-.146-1.24-.457-2.363-1.458-.873-.78-1.462-1.743-1.634-2.037-.171-.293-.018-.451.129-.597.132-.131.293-.342.44-.513.146-.17.195-.293.293-.49.098-.195.049-.366-.024-.513-.073-.146-.661-1.595-.906-2.183-.24-.573-.482-.495-.661-.505-.171-.008-.366-.01-.562-.01s-.513.073-.781.366c-.269.293-1.027 1.004-1.027 2.45 0 1.447 1.053 2.844 1.2 3.04.146.195 2.073 3.165 5.022 4.437.702.303 1.25.484 1.677.619.704.224 1.344.193 1.85.117.565-.084 1.74-.711 1.986-1.399.245-.687.245-1.276.171-1.399-.073-.122-.269-.195-.562-.342z"/>
    </svg>
  );
}

function MobileLangPicker({ locale, setLocale, closeMenu, t }: {
  locale: Locale;
  setLocale: (l: Locale) => void;
  closeMenu: () => void;
  t: ReturnType<typeof useI18n>["t"];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-white/10 mt-2 pt-3 px-3 pb-2">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="w-full flex items-center justify-between gap-2 bg-[#062f35] border border-[#f5b63f]/40 hover:border-[#f5b63f]/70 rounded-xl px-3.5 py-2.5 transition-colors cursor-pointer"
      >
        <span className="flex items-center gap-2.5">
          <Globe size={14} className="text-[#f5b63f] flex-shrink-0" />
          <span className="text-[13px] font-semibold text-white">{LOCALE_NAMES[locale]}</span>
        </span>
        <ChevronDown size={13} className="text-[#f5b63f]/60 flex-shrink-0" />
      </button>

      {/* Popup overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[999999] flex items-end sm:items-center justify-center"
          onClick={() => setOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal */}
          <div
            className="relative w-full max-w-[320px] mx-4 mb-6 sm:mb-0 rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,.6)]"
            style={{ background: "linear-gradient(160deg,#083d43 0%,#062f35 100%)" }}
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <Globe size={16} className="text-[#f5b63f]" />
                <span className="text-white font-semibold text-[14px]">{t.nav.language}</span>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white/60 hover:text-white transition-colors cursor-pointer"
              >
                <X size={14} />
              </button>
            </div>

            {/* Options — scrollable if many languages */}
            <div
              className="lang-scroll py-2 max-h-[52vh] overflow-y-auto"
              style={{ scrollbarWidth: "thin", scrollbarColor: "#f5b63f #062f35" }}
            >
              {LOCALES.map((l: Locale) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => { setLocale(l); setOpen(false); closeMenu(); }}
                  className={`w-full flex items-center justify-between px-5 py-3.5 text-[13.5px] font-semibold transition-colors cursor-pointer ${
                    locale === l
                      ? "text-[#f5b63f]"
                      : "text-white/65 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className={`text-[10px] font-black w-7 h-6 flex items-center justify-center rounded-md ${
                      locale === l ? "bg-[#f5b63f] text-[#062f35]" : "bg-white/10 text-white/50"
                    }`}>
                      {LOCALE_LABELS[l]}
                    </span>
                    {LOCALE_NAMES[l]}
                  </span>
                  {locale === l && <Check size={14} className="text-[#f5b63f] flex-shrink-0" />}
                </button>
              ))}
            </div>

            {/* Gold bottom bar */}
            <div className="h-1 w-full" style={{ background: "linear-gradient(90deg,#f5b63f,#e8921e)" }} />
          </div>
        </div>
      )}
    </div>
  );
}

function LangSwitcher() {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        aria-label={t.nav.language}
        className="flex items-center gap-1.5 h-[34px] px-3 rounded-[20px] border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition-colors text-[11px] font-semibold cursor-pointer"
      >
        <Globe size={13} />
        {LOCALE_LABELS[locale]}
        <ChevronDown size={10} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 bg-[#062f35] border border-white/15 rounded-xl py-1 shadow-[0_12px_32px_rgba(0,0,0,.4)] min-w-[130px] z-50">
          {LOCALES.map((l: Locale) => (
            <button
              key={l}
              type="button"
              onClick={() => { setLocale(l); setOpen(false); }}
              className={`w-full flex items-center justify-between px-4 py-2.5 text-[12px] font-semibold transition-colors cursor-pointer ${
                locale === l ? "text-[#f5b63f]" : "text-white/65 hover:text-white"
              }`}
            >
              <span>{LOCALE_NAMES[l]}</span>
              {locale === l && <Check size={12} className="text-[#f5b63f] flex-shrink-0" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const pathname                = usePathname();
  const { open: openBooking }   = useBooking();
  const { t, locale, setLocale } = useI18n();

  const navLinks = [
    { label: t.nav.transfers,  href: "/transfers"  },
    { label: t.nav.tours,      href: "/tours"      },
    { label: t.nav.excursions, href: "/excursions" },
    { label: t.nav.fleet,      href: "/fleet"      },
    { label: t.nav.gallery,    href: "/gallery"    },
    { label: t.nav.contact,    href: "https://wa.me/212709274114", external: true },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href.startsWith("/") && !href.includes("#") && pathname === href;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[99999] transition-all duration-500 ${
        scrolled ? "bg-[#062f35] shadow-[0_2px_20px_rgba(0,0,0,.35)]" : ""
      }`}
      style={!scrolled ? {
        background: "linear-gradient(180deg,rgba(6,47,53,.78) 0%,rgba(6,47,53,.0) 100%)"
      } : undefined}
    >
      <div className="max-w-[1280px] mx-auto px-[clamp(16px,4.5vw,56px)] h-[78px] flex items-center justify-between gap-5">

        {/* ── Logo ── */}
        <Link href="/#top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
          <svg width="26" height="29" viewBox="0 0 38 42" fill="none" className="sm:w-[34px] sm:h-[38px] flex-shrink-0">
            <path d="M2 41L2 19C2 9.06 9.61 1 19 1C28.39 1 36 9.06 36 19L36 41"
              stroke="#f5b63f" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M8 41L8 21C8 13.8 13 8 19 8C25 8 30 13.8 30 21L30 41"
              stroke="#f5b63f" strokeWidth="1" strokeLinecap="round" opacity="0.38"/>
            <path d="M19 11L21.3 17.7L28.5 20L21.3 22.3L19 29L16.7 22.3L9.5 20L16.7 17.7Z"
              fill="#f5b63f"/>
          </svg>
          <span className="leading-none">
            <strong className="block font-serif text-[16px] sm:text-[20px] text-[#fff0cb] tracking-[-0.3px]">
              Morocco Trip Mate
            </strong>
            <small className="hidden sm:block text-[8.5px] tracking-[0.2em] text-white/45 mt-1 font-sans">
              {{ fr: "Explorez · Voyagez · Découvrez", en: "Explore · Travel · Discover", ar: "استكشف · سافر · اكتشف", it: "Esplora · Viaggia · Scopri" }[locale] ?? "Explorez · Voyagez · Découvrez"}
            </small>
          </span>
        </Link>

        {/* ── Nav desktop ── */}
        <nav className="hidden lg:flex items-center gap-[clamp(10px,1.4vw,22px)] flex-1 justify-center">
          {navLinks.map(l => {
            const active = isActive(l.href);
            const cls = "group flex flex-col items-center gap-[5px] py-[6px]";
            const inner = (
              <>
                <span className={`text-[13.5px] font-semibold tracking-[0.02em] whitespace-nowrap transition-colors duration-200 ${
                  active ? "text-white" : "text-white/80 group-hover:text-white"
                }`}>
                  {l.label}
                </span>
                <span className={`block h-[2px] w-full rounded-full bg-[#f5b63f] transition-all duration-250 ${
                  active
                    ? "opacity-100 scale-x-100"
                    : "opacity-0 scale-x-50 group-hover:opacity-100 group-hover:scale-x-100"
                }`} />
              </>
            );
            return l.external ? (
              <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
            ) : (
              <Link key={l.href} href={l.href} className={cls}>{inner}</Link>
            );
          })}
        </nav>

        {/* ── Actions ── */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="hidden lg:block">
            <LangSwitcher />
          </div>

          <button
            type="button"
            onClick={() => openBooking(t.nav.bookNow)}
            className="flex items-center gap-1.5 bg-[#f5b63f] hover:bg-[#e9a52e] text-[#162c2c] text-[11px] font-bold px-3.5 py-[8px] rounded-[20px] transition-colors whitespace-nowrap cursor-pointer"
          >
            <CalendarCheck size={14} />
            <span>{t.nav.bookNow}</span>
          </button>

          <a
            href="https://wa.me/212709274114"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-[11px] font-bold px-3.5 py-[8px] rounded-[20px] transition-colors whitespace-nowrap"
          >
            <WhatsAppIcon size={14} />
            <span className="hidden sm:inline">{t.nav.whatsapp}</span>
          </a>

          <button
            onClick={() => setOpen(v => !v)}
            aria-label="Menu"
            className="lg:hidden w-9 h-9 flex items-center justify-center bg-white/10 border border-white/20 rounded-lg ml-1"
          >
            {open ? <X size={18} className="text-white" /> : <Menu size={18} className="text-white" />}
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      {open && (
        <div className="lg:hidden absolute top-[78px] left-3 right-3 bg-[#062f35]/97 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl p-2">
          {navLinks.map(l => {
            const active = isActive(l.href);
            const mobileCls = `flex items-center h-11 px-4 text-[13px] font-semibold rounded-xl transition-colors ${
              active ? "text-[#f5b63f] bg-white/5" : "text-white/75 hover:text-white hover:bg-white/5"
            }`;
            const inner = (
              <>
                {active && <span className="w-1 h-1 rounded-full bg-[#f5b63f] mr-2 flex-shrink-0" />}
                {l.label}
              </>
            );
            return l.external ? (
              <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className={mobileCls} onClick={() => setOpen(false)}>{inner}</a>
            ) : (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className={mobileCls}>{inner}</Link>
            );
          })}

          {/* Language picker */}
          <MobileLangPicker
            locale={locale}
            setLocale={setLocale}
            closeMenu={() => setOpen(false)}
            t={t}
          />

          <div className="border-t border-white/10 pt-2 px-2 pb-1 flex gap-2">
            <Link href="/#contact" onClick={() => setOpen(false)}
              className="flex-1 flex items-center justify-center gap-2 bg-[#f5b63f] text-[#162c2c] text-[12px] font-bold py-2.5 rounded-xl">
              <CalendarCheck size={14} /> {t.nav.bookNow}
            </Link>
            <a href="https://wa.me/212709274114" target="_blank" rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white text-[12px] font-bold py-2.5 rounded-xl">
              <WhatsAppIcon size={14} /> {t.nav.whatsapp}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
