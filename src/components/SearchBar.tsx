"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { useI18n } from "@/i18n/I18nProvider";
import { transfers, findTransferByRoute } from "@/data/transfers";
import { excursions } from "@/data/excursions";

type L = "fr" | "en" | "ar" | "it";

type Mode = "circuit" | "transfert" | "excursion";


const CIRCUIT_LENGTHS_FR = ["1 à 3 jours", "4 à 7 jours", "8 jours et +"];
const CIRCUIT_LENGTHS_EN = ["1 to 3 days", "4 to 7 days", "8 days +"];
const CIRCUIT_LENGTHS_AR = ["1 إلى 3 أيام", "4 إلى 7 أيام", "8 أيام وأكثر"];
const CIRCUIT_LENGTHS_IT = ["1 a 3 giorni", "4 a 7 giorni", "8 giorni e +"];
const CIRCUIT_SLUGS      = ["court", "moyen", "long"] as const;
const CIRCUIT_FROM_PRICES: Record<typeof CIRCUIT_SLUGS[number], string> = {
  court: "€120",
  moyen: "€350",
  long:  "€980",
};

/* ─── Calendar helpers ───────────────────────────────── */
const CAL_MONTHS: Record<string, string[]> = {
  fr: ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],
  en: ["January","February","March","April","May","June","July","August","September","October","November","December"],
  ar: ["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],
  it: ["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],
};
const CAL_DAYS: Record<string, string[]> = {
  fr: ["Lu","Ma","Me","Je","Ve","Sa","Di"],
  en: ["Mo","Tu","We","Th","Fr","Sa","Su"],
  ar: ["إث","ثل","أر","خم","جم","سب","أح"],
  it: ["Lu","Ma","Me","Gi","Ve","Sa","Do"],
};
function calGrid(year: number, month: number): (number | null)[] {
  const offset = (new Date(year, month, 1).getDay() + 6) % 7;
  const total  = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = Array(offset).fill(null);
  for (let d = 1; d <= total; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}
function toYMD(y: number, m: number, d: number) {
  return `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}
function fmtDate(str: string, locale: string) {
  if (!str) return "";
  const [y, m, d] = str.split("-").map(Number);
  return `${d} ${(CAL_MONTHS[locale] ?? CAL_MONTHS.fr)[m - 1]} ${y}`;
}

/* ─── SVG icons ─────────────────────────────────── */
const IconCircuit = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6.5 8.5 4l7 2.5L21 4v13.5L15.5 20l-7-2.5L3 20z"/>
    <path d="M8.5 4v13.5M15.5 6.5V20"/>
  </svg>
);
const IconTransfert = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="m21 3-7.2 18-3.4-7.4L3 10.2z"/>
    <path d="M21 3 10.4 13.6"/>
  </svg>
);
const IconExcursion = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9"/>
    <path d="m15.8 8.2-2.4 5.2-5.2 2.4 2.4-5.2z"/>
  </svg>
);
const IconCalendar = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <path d="M16 2v4M8 2v4M3 10h18"/>
  </svg>
);
const IconPin = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/>
    <circle cx="12" cy="10" r="2.5"/>
  </svg>
);
const IconDest = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z"/>
    <circle cx="12" cy="9" r="2.4"/>
  </svg>
);
const IconClock = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>
  </svg>
);
const IconSearch = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="10.8" cy="10.8" r="6.8"/>
    <path d="m16 16 4.5 4.5"/>
  </svg>
);
const IconChevron = ({ open }: { open: boolean }) => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    className={cn("flex-shrink-0 transition-transform duration-200", open ? "rotate-180 text-[#b87a06]" : "text-[#b8c9ca]")}>
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

/* ─── Shared icon circle ─────────────────────────── */
function FieldIcon({ open, filled, children }: { open: boolean; filled?: boolean; children: React.ReactNode }) {
  return (
    <span className={cn(
      "w-[28px] h-[28px] rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200",
      open || filled
        ? "bg-[#fff0cb] text-[#b87a06] shadow-[0_0_0_3px_rgba(248,183,53,.12)]"
        : "bg-[#f0f5f5] text-[#8aabae]",
    )}>
      {children}
    </span>
  );
}

/* ─── Field interior text ────────────────────────── */
function FieldText({ placeholder, value }: { placeholder: string; value: string }) {
  return (
    <span className="flex flex-col flex-1 min-w-0 text-left justify-center gap-[3px]">
      {value && (
        <span className="text-[9px] font-bold uppercase tracking-[0.07em] text-[#8aabae] leading-none">
          {placeholder}
        </span>
      )}
      <span className={cn(
        "text-[12.5px] font-medium leading-none truncate transition-colors",
        value ? "text-[#0d2f32]" : "text-[#b0c4c5]",
      )}>
        {value || placeholder}
      </span>
    </span>
  );
}

/* ─── Field — dropdown list ──────────────────────── */
function Field({
  IconComponent, placeholder, value, onValue, options, searchable,
}: {
  IconComponent: () => React.ReactElement;
  placeholder: string;
  value: string;
  onValue: (v: string) => void;
  options: string[];
  searchable?: boolean;
}) {
  const [open,  setOpen]  = useState(false);
  const [query, setQuery] = useState("");
  const ref       = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    if (searchable) setTimeout(() => searchRef.current?.focus(), 60);
    const h = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, [open, searchable]);

  const filtered = searchable && query.trim()
    ? options.filter(o => o.toLowerCase().includes(query.toLowerCase()))
    : options;

  function toggle() { if (!open) setQuery(""); setOpen(v => !v); }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={toggle}
        className={cn(
          "flex items-center gap-2.5 h-[50px] px-3 rounded-xl bg-white border w-full cursor-pointer transition-all duration-150",
          open
            ? "border-[#f5b63f] shadow-[0_0_0_3px_rgba(245,182,63,.16)]"
            : "border-[#ddd8ce] hover:border-[#c9d8d9] hover:shadow-[0_2px_10px_rgba(6,47,53,.09)]",
        )}
      >
        <FieldIcon open={open} filled={!!value}><IconComponent /></FieldIcon>
        <FieldText placeholder={placeholder} value={value} />
        <IconChevron open={open} />
      </button>

      {open && (
        <div
          className="absolute top-[calc(100%+5px)] left-0 right-0 bg-white border border-[#e8e3da] rounded-xl shadow-[0_10px_32px_rgba(6,47,53,.16)] z-[9999] overflow-hidden"
        >
          {searchable && (
            <div className="px-2.5 pt-2.5 pb-1.5 border-b border-[#f0ebe3]">
              <div className="flex items-center gap-2 h-[32px] px-2.5 rounded-lg bg-[#f6f2eb] border border-[#e8e3da] focus-within:border-[#f5b63f] focus-within:bg-white transition-colors">
                <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 text-[#9ab0b2]">
                  <circle cx="11" cy="11" r="7"/><path d="m21 21-4.35-4.35"/>
                </svg>
                <input
                  ref={searchRef}
                  type="text"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Rechercher…"
                  className="flex-1 bg-transparent border-none outline-none text-[11.5px] font-medium text-[#0d2f32] placeholder:text-[#adbfc0] min-w-0"
                />
                {query && (
                  <button type="button" onClick={() => setQuery("")} className="flex-shrink-0 text-[#adbfc0] hover:text-[#5a7578] transition-colors">
                    <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
                  </button>
                )}
              </div>
            </div>
          )}
          <div
            className="max-h-[200px] overflow-y-auto py-1.5
              [&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-track]:bg-transparent
              [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#e4cfa0]
              [&::-webkit-scrollbar-thumb:hover]:bg-[#f5b63f]"
            style={{ scrollbarWidth: "thin", scrollbarColor: "#e4cfa0 transparent" }}
          >
            {filtered.length === 0 ? (
              <p className="px-4 py-3 text-[12px] text-[#9ab0b2] text-center">Aucun résultat</p>
            ) : filtered.map(opt => (
              <button
                key={opt}
                type="button"
                onClick={() => { onValue(opt); setOpen(false); setQuery(""); }}
                className={cn(
                  "w-full text-left px-4 py-[9px] text-[12.5px] leading-snug transition-colors",
                  value === opt
                    ? "text-[#b87a06] font-semibold bg-[#fffbf2]"
                    : "text-[#1a3a3c] hover:bg-[#f6f2eb]",
                )}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── FieldDate — custom calendar (absolute pos) ─── */
function FieldDate({
  placeholder, value, onChange,
}: {
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
}) {
  const { locale } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const [now] = useState(() => new Date());
  const init = value ? new Date(value + "T12:00:00") : now;
  const [vy, setVy] = useState(init.getFullYear());
  const [vm, setVm] = useState(init.getMonth());

  useEffect(() => {
    if (!open) return;
    const h = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, [open]);

  const cells    = calGrid(vy, vm);
  const months   = CAL_MONTHS[locale] ?? CAL_MONTHS.fr;
  const weekDays = CAL_DAYS[locale]   ?? CAL_DAYS.fr;
  const todayStr = toYMD(now.getFullYear(), now.getMonth(), now.getDate());
  const minStr   = todayStr;

  const displayValue = value ? fmtDate(value, locale) : "";

  function prevMonth() {
    if (vm === 0) { setVy(y => y - 1); setVm(11); } else { setVm(m => m - 1); }
  }
  function nextMonth() {
    if (vm === 11) { setVy(y => y + 1); setVm(0); } else { setVm(m => m + 1); }
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        className={cn(
          "flex items-center gap-2.5 h-[50px] px-3 rounded-xl bg-white border w-full cursor-pointer transition-all duration-150",
          open
            ? "border-[#f5b63f] shadow-[0_0_0_3px_rgba(245,182,63,.16)]"
            : "border-[#ddd8ce] hover:border-[#c9d8d9] hover:shadow-[0_2px_10px_rgba(6,47,53,.09)]",
        )}
      >
        <FieldIcon open={open} filled={!!value}><IconCalendar /></FieldIcon>
        <FieldText placeholder={placeholder} value={displayValue} />
        <IconChevron open={open} />
      </button>

      {open && (
        <div
          className="absolute top-[calc(100%+6px)] left-0 bg-white rounded-2xl shadow-[0_14px_44px_rgba(6,47,53,.2)] border border-[#e8e3da] p-3.5 select-none z-[9999]"
          style={{ width: 276 }}
        >
          {/* Month nav */}
          <div className="flex items-center justify-between mb-3 px-0.5">
            <button type="button" onClick={prevMonth}
              className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-[#f0f5f5] text-[#3a6568] transition-colors">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <span className="text-[12.5px] font-bold text-[#062f35] tracking-wide">{months[vm]} {vy}</span>
            <button type="button" onClick={nextMonth}
              className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-[#f0f5f5] text-[#3a6568] transition-colors">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>

          {/* Divider */}
          <div className="h-px bg-[#f0ebe3] mb-2.5" />

          {/* Day names */}
          <div className="grid grid-cols-7 mb-1">
            {weekDays.map(d => (
              <div key={d} className="text-center text-[9.5px] font-bold text-[#b0c4c5] py-1 uppercase tracking-wide">{d}</div>
            ))}
          </div>

          {/* Days */}
          <div className="grid grid-cols-7 gap-y-0.5">
            {cells.map((day, i) => {
              if (!day) return <div key={i} />;
              const str     = toYMD(vy, vm, day);
              const isSel   = str === value;
              const isToday = str === todayStr;
              const isDisab = str < minStr;
              return (
                <button key={i} type="button" disabled={isDisab}
                  onClick={() => { onChange(str); setOpen(false); }}
                  className={cn(
                    "h-8 w-full rounded-lg text-[12px] font-medium transition-all duration-100",
                    isDisab  ? "text-[#d0d8d8] cursor-not-allowed" :
                    isSel    ? "bg-[#f5b63f] text-white font-bold shadow-[0_3px_10px_rgba(245,182,63,.4)]" :
                    isToday  ? "border border-[#f5b63f] text-[#b87a06] font-bold hover:bg-[#fff8ee]" :
                               "text-[#1a3a3c] hover:bg-[#f0f5f5]",
                  )}>
                  {day}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── SearchBar ──────────────────────────────────── */
export function SearchBar() {
  const { t, locale } = useI18n();
  const loc = locale as L;
  const sb = t.searchBar;
  const circuitLengths = locale === "en" ? CIRCUIT_LENGTHS_EN : locale === "ar" ? CIRCUIT_LENGTHS_AR : locale === "it" ? CIRCUIT_LENGTHS_IT : CIRCUIT_LENGTHS_FR;

  const excursionNames = excursions.map(e => e.title[loc]);
  const excursionPh    = locale === "en" ? "Choose an excursion" : locale === "ar" ? "اختر رحلة" : locale === "it" ? "Scegli un'escursione" : "Choisir une excursion";
  const viewDetails    = locale === "en" ? "View Details" : locale === "ar" ? "عرض التفاصيل" : locale === "it" ? "Vedi dettagli" : "Voir détails";

  const TABS = [
    { id: "transfert" as Mode, Icon: IconTransfert, label: sb.tabs.transfert.label, sub: sb.tabs.transfert.sub },
    { id: "circuit"   as Mode, Icon: IconCircuit,   label: sb.tabs.circuit.label,   sub: sb.tabs.circuit.sub   },
    { id: "excursion" as Mode, Icon: IconExcursion, label: sb.tabs.excursion.label, sub: sb.tabs.excursion.sub },
  ];
  const datePlaceholder = locale === "en" ? "Choose a date" : locale === "ar" ? "اختر التاريخ" : locale === "it" ? "Scegli una data" : "Choisir une date";

  const router = useRouter();

  const mktName = locale === "ar" ? "مراكش" : "Marrakech";

  const fromCities: string[] = (() => {
    const seen = new Set<string>();
    const result: string[] = [];
    seen.add(mktName); result.push(mktName);
    transfers.forEach(t => {
      if (t.from) {
        const n = (t.from as Record<string, string | undefined>)[locale] ?? t.from.en ?? t.from.fr ?? "";
        if (n && !seen.has(n)) { seen.add(n); result.push(n); }
      }
    });
    return result;
  })();

  const [mode,    setMode]   = useState<Mode>("transfert");
  const [depart,  setDepart] = useState(mktName);
  const [arrivee, setArrivee] = useState("");
  const [date,    setDate]   = useState("");

  const filteredDests = transfers
    .filter(t => {
      const fromName = t.from
        ? (t.from as Record<string, string | undefined>)[locale] ?? t.from.en ?? t.from.fr ?? ""
        : mktName;
      return fromName === depart;
    })
    .map(t => (t.to as Record<string, string | undefined>)[locale] ?? t.to.en ?? "")
    .filter((v): v is string => Boolean(v))
    .sort((a, b) => a.localeCompare(b, locale));

  const selectedSlug = (() => {
    const idx = circuitLengths.indexOf(depart);
    return idx >= 0 ? CIRCUIT_SLUGS[idx] : null;
  })();

  useEffect(() => { if (mode === "transfert") setArrivee(""); }, [depart]);

  function reset(newMode: Mode = mode) { setDepart(newMode === "transfert" ? mktName : ""); setArrivee(""); setDate(""); }

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (mode === "circuit") {
      const idx  = circuitLengths.indexOf(depart);
      const slug = idx >= 0 ? CIRCUIT_SLUGS[idx] : null;
      router.push(slug ? `/tours?duree=${slug}` : "/tours");
    } else if (mode === "transfert") {
      const found = arrivee ? findTransferByRoute(depart, arrivee, locale) : null;
      router.push(found ? `/transfers/${found.slug}` : "/transfers");
    } else {
      const found = excursions.find(e => e.title[loc] === depart);
      router.push(found ? `/excursions/${found.slug}` : "/excursions");
    }
  }

  return (
    <div className="rounded-2xl border border-[#f5b63f]/30 bg-[#07383b]"
      style={{ boxShadow: "0 0 0 1px rgba(245,182,63,.08), 0 8px 0 -4px rgba(245,182,63,.12), 0 28px 60px rgba(3,22,26,.6)" }}>

      {/* ── Tab bar ── */}
      <div className="grid grid-cols-3 gap-1.5 p-2 bg-[#07383b] rounded-t-2xl border-b border-white/10">
        {TABS.map(({ id, Icon, label, sub }) => {
          const active = mode === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => { setMode(id); reset(id); }}
              className={cn(
                "relative flex items-center justify-center gap-1.5 sm:gap-2.5 min-h-[54px] px-2 sm:px-3 py-2.5 rounded-xl border",
                "text-left cursor-pointer transition-all duration-200",
                active
                  ? "bg-white text-[#07383b] border-[#e0dbd0] shadow-[0_6px_20px_rgba(0,0,0,.22),0_1px_0_rgba(255,255,255,.8)_inset]"
                  : "border-transparent text-white/70 hover:bg-white/10 hover:text-white hover:border-white/15",
              )}
            >
              <span className={cn(
                "flex-shrink-0 w-[22px] h-[22px] sm:w-[32px] sm:h-[32px] rounded-[7px] sm:rounded-[10px] grid place-items-center transition-all duration-200",
                active ? "bg-[#fff0cb] text-[#b87a06] shadow-[0_2px_6px_rgba(184,122,6,.25)]" : "bg-white/12 text-current",
              )}>
                <Icon />
              </span>
              <span className="flex flex-col gap-[3px] min-w-0">
                <strong className={cn("text-[10px] sm:text-[11.5px] font-bold leading-none", active ? "text-[#062f35]" : "")}>
                  {label}
                </strong>
                <small className={cn("hidden sm:block text-[9.5px] leading-none font-medium", active ? "text-[#7a9ea0]" : "opacity-50")}>
                  {sub}
                </small>
              </span>
              {active && (
                <span className="absolute bottom-2.5 right-2.5 w-[5px] h-[5px] rounded-full bg-[#f7b735] shadow-[0_0_8px_rgba(247,183,53,.8)]" />
              )}
            </button>
          );
        })}
      </div>

      {/* ── Formulaire ── */}
      <form
        onSubmit={handleSearch}
        className={cn(
          "grid gap-2.5 p-3 bg-[#f4f0e8] rounded-b-2xl",
          mode === "transfert"
            ? "grid-cols-1 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_auto]"
            : "grid-cols-1 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto]",
        )}
      >
        {mode === "circuit" && (
          <>
            <Field
              IconComponent={IconCalendar}
              placeholder={sb.placeholders.allDurations}
              value={depart}
              onValue={setDepart}
              options={circuitLengths}
            />
            <FieldDate
              placeholder={datePlaceholder}
              value={date}
              onChange={setDate}
            />
          </>
        )}

        {mode === "transfert" && (
          <>
            <Field
              IconComponent={IconPin}
              placeholder={sb.placeholders.departure}
              value={depart}
              onValue={setDepart}
              options={fromCities}
            />
            <Field
              IconComponent={IconDest}
              placeholder={sb.placeholders.destination}
              value={arrivee}
              onValue={setArrivee}
              options={filteredDests}
              searchable
            />
            <FieldDate
              placeholder={datePlaceholder}
              value={date}
              onChange={setDate}
            />
          </>
        )}

        {mode === "excursion" && (
          <>
            <Field
              IconComponent={IconExcursion}
              placeholder={excursionPh}
              value={depart}
              onValue={setDepart}
              options={excursionNames}
              searchable
            />
            <FieldDate
              placeholder={datePlaceholder}
              value={date}
              onChange={setDate}
            />
          </>
        )}

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 h-[48px] px-5 rounded-xl
            bg-gradient-to-b from-[#ffc84d] to-[#f5a623]
            hover:from-[#ffd166] hover:to-[#f5b235]
            active:scale-[.97] text-[#17342f] font-bold text-[12px] cursor-pointer
            transition-all duration-200
            shadow-[0_4px_18px_rgba(218,151,24,.38)] hover:shadow-[0_6px_24px_rgba(218,151,24,.48)]
            hover:-translate-y-[1px] whitespace-nowrap sm:col-auto col-span-full"
        >
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
          {viewDetails}
        </button>
      </form>

    </div>
  );
}
