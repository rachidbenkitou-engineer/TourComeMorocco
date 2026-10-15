"use client";
import { createContext, useContext, useState, useEffect, useRef, type ReactNode, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/i18n/I18nProvider";
import { transfers } from "@/data/transfers";

/* ─── WhatsApp ──────────────────────────────────────── */
const WA_NUMBER = "212709274114";
function waLink(text: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

/* ─── Context ────────────────────────────────────────── */
type BookingState = { service: string; price?: string } | null;
type BookingCtx   = { open: (service: string, price?: string) => void };

const Ctx = createContext<BookingCtx>({ open: () => {} });
export function useBooking() { return useContext(Ctx); }

export function BookingProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<BookingState>(null);
  return (
    <Ctx.Provider value={{ open: (s, p) => setState({ service: s, price: p }) }}>
      {children}
      <AnimatePresence>
        {state && (
          <BookingModal
            key="booking-modal"
            service={state.service}
            price={state.price}
            onClose={() => setState(null)}
          />
        )}
      </AnimatePresence>
    </Ctx.Provider>
  );
}

/* ─── Mode type ──────────────────────────────────────── */
type Mode = "transfer" | "tour" | "excursion";

/* ─── Cities & options ───────────────────────────────── */

const TOUR_DURATIONS: Record<string, string[]> = {
  fr: ["1 à 3 jours", "4 à 7 jours", "8 jours et +"],
  en: ["1 to 3 days", "4 to 7 days", "8 days +"],
  ar: ["1 إلى 3 أيام", "4 إلى 7 أيام", "8 أيام وأكثر"],
  it: ["1 a 3 giorni", "4 a 7 giorni", "8 giorni e +"],
};
const EXCURSION_DURATIONS: Record<string, string[]> = {
  fr: ["Journée complète", "Demi-journée"],
  en: ["Full day",         "Half day"],
  ar: ["يوم كامل",         "نصف يوم"],
  it: ["Giornata intera",  "Mezza giornata"],
};

/* ─── Calendar helpers ───────────────────────────────── */
const MONTHS: Record<string, string[]> = {
  fr: ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],
  en: ["January","February","March","April","May","June","July","August","September","October","November","December"],
  ar: ["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],
  it: ["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],
};
const WEEK_DAYS: Record<string, string[]> = {
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
  return `${d} ${(MONTHS[locale] ?? MONTHS.fr)[m - 1]} ${y}`;
}

/* ─── Icons ──────────────────────────────────────────── */
const IcoX = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M18 6 6 18M6 6l12 12"/>
  </svg>
);
const IcoTransfer = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="m21 3-7.2 18-3.4-7.4L3 10.2z"/><path d="M21 3 10.4 13.6"/>
  </svg>
);
const IcoTour = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6.5 8.5 4l7 2.5L21 4v13.5L15.5 20l-7-2.5L3 20z"/>
    <path d="M8.5 4v13.5M15.5 6.5V20"/>
  </svg>
);
const IcoExcursion = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9"/><path d="m15.8 8.2-2.4 5.2-5.2 2.4 2.4-5.2z"/>
  </svg>
);
const IcoPin = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>
  </svg>
);
const IcoDest = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z"/><circle cx="12" cy="9" r="2.4"/>
  </svg>
);
const IcoCalSB = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
  </svg>
);
const IcoClock = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>
  </svg>
);
const IcoUser = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="7" r="4"/><path d="M4 21v-1a7 7 0 0 1 14 0v1"/>
  </svg>
);
const IcoPhone = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.19h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.87a16 16 0 0 0 6 6l.95-1.95a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const IcoChevronSB = ({ open }: { open: boolean }) => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    className={cn("flex-shrink-0 transition-transform duration-200", open ? "rotate-180 text-[#b87a06]" : "text-[#b8c9ca]")}>
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

/* ─── SearchBar-style icon circle (w-28px) ──────────── */
function SBIcon({ open, filled, children }: { open: boolean; filled?: boolean; children: React.ReactNode }) {
  return (
    <span className={cn(
      "w-[28px] h-[28px] rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200",
      open || filled ? "bg-[#fff0cb] text-[#b87a06] shadow-[0_0_0_3px_rgba(248,183,53,.12)]" : "bg-[#f0f5f5] text-[#8aabae]",
    )}>
      {children}
    </span>
  );
}

/* ─── SearchBar-style field text ────────────────────── */
function SBText({ placeholder, value }: { placeholder: string; value: string }) {
  return (
    <span className="flex flex-col flex-1 min-w-0 text-left justify-center gap-[3px]">
      {value && (
        <span className="text-[9px] font-bold uppercase tracking-[0.07em] text-[#8aabae] leading-none">
          {placeholder}
        </span>
      )}
      <span className={cn("text-[12.5px] font-medium leading-none truncate transition-colors", value ? "text-[#0d2f32]" : "text-[#b0c4c5]")}>
        {value || placeholder}
      </span>
    </span>
  );
}

/* ─── SearchBar-style dropdown (fixed for modal) ─────── */
function SBField({
  IconComp, placeholder, value, onValue, options, locked, searchable,
}: {
  IconComp: () => React.ReactElement;
  placeholder: string;
  value: string;
  onValue: (v: string) => void;
  options?: string[];
  locked?: boolean;
  searchable?: boolean;
}) {
  const [open,  setOpen]  = useState(false);
  const [query, setQuery] = useState("");
  const [pos,   setPos]   = useState<React.CSSProperties>({});
  const ref      = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  function calcPos() {
    if (ref.current) {
      const r = ref.current.getBoundingClientRect();
      setPos({ top: r.bottom + 4, left: r.left, width: r.width });
    }
  }
  function toggle() {
    if (locked || !options?.length) return;
    if (!open) { calcPos(); setQuery(""); }
    setOpen(v => !v);
  }

  useEffect(() => {
    if (!open) return;
    if (searchable) setTimeout(() => searchRef.current?.focus(), 60);
    const h = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", h);
    window.addEventListener("scroll", calcPos, true);
    return () => { document.removeEventListener("mousedown", h); window.removeEventListener("scroll", calcPos, true); };
  }, [open, searchable]);

  const filtered = searchable && query.trim()
    ? (options ?? []).filter(o => o.toLowerCase().includes(query.toLowerCase()))
    : (options ?? []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={toggle}
        className={cn(
          "flex items-center gap-2.5 h-[44px] px-3 rounded-xl bg-white border w-full transition-all duration-150",
          locked ? "cursor-default bg-[#f7f2ea] border-[#e4e9e5]" :
          open   ? "border-[#f5b63f] shadow-[0_0_0_3px_rgba(245,182,63,.16)] cursor-pointer"
                 : "border-[#ddd8ce] hover:border-[#c9d8d9] hover:shadow-[0_2px_10px_rgba(6,47,53,.09)] cursor-pointer",
        )}
      >
        <SBIcon open={open} filled={!!value}><IconComp /></SBIcon>
        <SBText placeholder={placeholder} value={value} />
        {!locked && <IcoChevronSB open={open} />}
      </button>

      {open && options && (
        <div
          className="fixed bg-white border border-[#e8e3da] rounded-xl shadow-[0_10px_32px_rgba(6,47,53,.16)] overflow-hidden"
          style={{ ...pos, zIndex: 9999999 }}
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
                  placeholder={`Rechercher…`}
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
          <div className="max-h-[200px] overflow-y-auto py-1.5
            [&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-track]:bg-transparent
            [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#e4cfa0]"
            style={{ scrollbarWidth: "thin", scrollbarColor: "#e4cfa0 transparent" }}>
            {filtered.length === 0 ? (
              <p className="px-4 py-3 text-[12px] text-[#9ab0b2] text-center">Aucun résultat</p>
            ) : filtered.map(opt => (
              <button key={opt} type="button"
                onClick={() => { onValue(opt); setOpen(false); setQuery(""); }}
                className={cn(
                  "w-full text-left px-4 py-[9px] text-[12.5px] leading-snug transition-colors",
                  value === opt ? "text-[#b87a06] font-semibold bg-[#fffbf2]" : "text-[#1a3a3c] hover:bg-[#f6f2eb]",
                )}>
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── SearchBar-style calendar (fixed for modal) ─────── */
function SBFieldDate({ placeholder, value, onChange }: {
  placeholder: string; value: string; onChange: (v: string) => void;
}) {
  const { locale } = useI18n();
  const [open, setOpen] = useState(false);
  const [pos,  setPos]  = useState<React.CSSProperties>({});
  const ref = useRef<HTMLDivElement>(null);

  const now  = new Date();
  const init = value ? new Date(value + "T12:00:00") : now;
  const [vy, setVy] = useState(init.getFullYear());
  const [vm, setVm] = useState(init.getMonth());

  function calcPos() {
    if (ref.current) {
      const r          = ref.current.getBoundingClientRect();
      const calW       = 276;
      const left       = Math.max(8, Math.min(r.left, window.innerWidth - calW - 8));
      const spaceBelow = window.innerHeight - r.bottom - 8;
      setPos({ top: r.bottom + 6, left, maxHeight: Math.max(spaceBelow, 200) });
    }
  }
  function toggle() { if (!open) calcPos(); setOpen(v => !v); }

  useEffect(() => {
    if (!open) return;
    const h = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", h);
    window.addEventListener("scroll", calcPos, true);
    return () => { document.removeEventListener("mousedown", h); window.removeEventListener("scroll", calcPos, true); };
  }, [open]);

  const cells    = calGrid(vy, vm);
  const months   = MONTHS[locale]    ?? MONTHS.fr;
  const weekDays = WEEK_DAYS[locale] ?? WEEK_DAYS.fr;
  const todayStr = toYMD(now.getFullYear(), now.getMonth(), now.getDate());

  function prevMonth() { if (vm === 0) { setVy(y => y - 1); setVm(11); } else { setVm(m => m - 1); } }
  function nextMonth() { if (vm === 11) { setVy(y => y + 1); setVm(0); } else { setVm(m => m + 1); } }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={toggle}
        className={cn(
          "flex items-center gap-2.5 h-[44px] px-3 rounded-xl bg-white border w-full cursor-pointer transition-all duration-150",
          open ? "border-[#f5b63f] shadow-[0_0_0_3px_rgba(245,182,63,.16)]"
               : "border-[#ddd8ce] hover:border-[#c9d8d9] hover:shadow-[0_2px_10px_rgba(6,47,53,.09)]",
        )}
      >
        <SBIcon open={open} filled={!!value}><IcoCalSB /></SBIcon>
        <SBText placeholder={placeholder} value={value ? fmtDate(value, locale) : ""} />
        <IcoChevronSB open={open} />
      </button>

      {open && (
        <div
          className="fixed bg-white rounded-2xl shadow-[0_14px_44px_rgba(6,47,53,.2)] border border-[#e8e3da] p-3.5 select-none overflow-y-auto"
          style={{ ...pos, zIndex: 9999999, width: 276 }}
        >
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
          <div className="h-px bg-[#f0ebe3] mb-2.5" />
          <div className="grid grid-cols-7 mb-1">
            {weekDays.map(d => (
              <div key={d} className="text-center text-[9.5px] font-bold text-[#b0c4c5] py-1 uppercase tracking-wide">{d}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-y-0.5">
            {cells.map((day, i) => {
              if (!day) return <div key={i} />;
              const str     = toYMD(vy, vm, day);
              const isSel   = str === value;
              const isToday = str === todayStr;
              const isDisab = str < todayStr;
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

/* ─── Small FieldIcon (w-22px) for name/phone ────────── */
function FieldIcon({ open, children }: { open?: boolean; children: React.ReactNode }) {
  return (
    <span className={cn(
      "w-[22px] h-[22px] rounded-full flex items-center justify-center flex-shrink-0 transition-colors",
      open ? "bg-[#fff0cb] text-[#b87a06]" : "bg-[#fff5df] text-[#b77c0d]",
    )}>
      {children}
    </span>
  );
}

/* ─── Small FieldInput for name/phone ────────────────── */
function FieldInput({ icon, type = "text", placeholder, value, onChange, autoComplete }: {
  icon: React.ReactNode; type?: string; placeholder: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; autoComplete?: string;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div className={cn(
      "flex items-center gap-2 h-[34px] px-2.5 rounded-lg bg-white border w-full transition-all duration-150",
      focused ? "border-[#f5b63f] shadow-[0_0_0_3px_rgba(245,182,63,.13)]" : "border-[#e4e9e5] hover:border-[#c9b898]",
    )}>
      <FieldIcon open={focused}>{icon}</FieldIcon>
      <input
        type={type} placeholder={placeholder} value={value} onChange={onChange}
        autoComplete={autoComplete}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        className="flex-1 bg-transparent border-none outline-none text-[12.5px] font-medium text-[#0d2f32] placeholder:text-[#adbfc0] w-full min-w-0"
      />
    </div>
  );
}

/* label style */
const lbl = "block text-[9px] font-bold uppercase tracking-[0.12em] text-[#5a7578] mb-1";

/* ─── BookingModal ───────────────────────────────────── */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function BookingModal({ service, price: _price, onClose }: { service: string; price?: string; onClose: () => void }) {
  const { locale } = useI18n();

  const [mode, setMode]   = useState<Mode>("transfer");
  const [dest, setDest]   = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate]   = useState("");
  const [name, setName]   = useState("");
  const [phone, setPhone] = useState("");
  const [err,  setErr]    = useState<string | null>(null);

  /* reset service fields on mode change */
  function switchMode(m: Mode) { setMode(m); setDest(""); setDuration(""); setDate(""); setErr(null); }

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);
  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose]);

  /* localized labels */
  const labels = {
    transfer: locale === "ar" ? "نقل" : locale === "en" ? "Transfer" : "Transfert",
    tour:     locale === "ar" ? "جولة" : locale === "en" ? "Tour" : "Circuit",
    excursion: locale === "ar" ? "نزهة" : locale === "en" ? "Excursion" : "Excursion",
    departure:   locale === "ar" ? "المغادرة" : locale === "en" ? "Departure" : "Départ",
    destination: locale === "ar" ? "الوجهة" : locale === "en" ? "Destination" : "Destination",
    duration:    locale === "ar" ? "المدة" : locale === "en" ? "Duration" : "Durée",
    date:        locale === "ar" ? "التاريخ" : locale === "en" ? "Date" : "Date",
    name:        locale === "ar" ? "الاسم" : locale === "en" ? "Full name" : "Nom complet",
    phone:       locale === "ar" ? "الهاتف (اختياري)" : locale === "en" ? "Phone (optional)" : "Téléphone (optionnel)",
    submit:      locale === "ar" ? "احجز عبر واتساب" : locale === "en" ? "Book on WhatsApp" : "Réserver sur WhatsApp",
    errName:     locale === "ar" ? "الاسم مطلوب" : locale === "en" ? "Name required" : "Nom requis",
    errDate:     locale === "ar" ? "التاريخ مطلوب" : locale === "en" ? "Date required" : "Date requise",
    errDest:     locale === "ar" ? "الوجهة مطلوبة" : locale === "en" ? "Destination required" : "Destination requise",
    errDuration: locale === "ar" ? "المدة مطلوبة" : locale === "en" ? "Duration required" : "Durée requise",
    namePh:      locale === "ar" ? "أدخل اسمك" : locale === "en" ? "Your full name" : "Votre nom",
    datePh:      locale === "ar" ? "اختر التاريخ" : locale === "en" ? "Choose a date" : "Choisir une date",
    destPh:      locale === "ar" ? "اختر وجهة" : locale === "en" ? "Choose a destination" : "Choisir une destination",
    durationPh:  locale === "ar" ? "اختر المدة" : locale === "en" ? "Choose duration" : "Choisir une durée",
  };

  const loc = locale as "fr" | "en" | "ar";
  const transferCities   = transfers
    .map(t => (t.to as Record<string, string | undefined>)[locale] ?? t.to.en)
    .filter((v): v is string => Boolean(v))
    .sort((a, b) => a.localeCompare(b, locale));
  const tourDurations    = TOUR_DURATIONS[locale]       ?? TOUR_DURATIONS.fr;
  const excurDurations   = EXCURSION_DURATIONS[locale]  ?? EXCURSION_DURATIONS.fr;

  function submit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim())  { setErr(labels.errName);     return; }
    if (mode === "transfer" && !dest) { setErr(labels.errDest); return; }
    if (mode !== "transfer" && !duration) { setErr(labels.errDuration); return; }
    if (!date) { setErr(labels.errDate); return; }
    setErr(null);

    const lines: string[] = [`*Réservation — Transfer Maroc*`, ``];
    if (mode === "transfer") {
      lines.push(`🚗 Marrakech → ${dest}`);
    } else if (mode === "tour") {
      lines.push(`🗺 Circuit : ${duration}`);
    } else {
      lines.push(`🌄 Excursion : ${duration}`);
    }
    lines.push(`📅 ${labels.date} : ${fmtDate(date, locale)}`);
    lines.push(`👤 ${labels.name} : ${name}`);
    if (phone) lines.push(`📞 ${labels.phone.replace(" (optionnel)", "").replace(" (optional)", "")} : ${phone}`);

    window.open(waLink(lines.filter(Boolean).join("\n")), "_blank", "noopener");
  }

  const MODES: { id: Mode; Icon: () => React.ReactElement; label: string }[] = [
    { id: "transfer",  Icon: IcoTransfer,  label: labels.transfer  },
    { id: "tour",      Icon: IcoTour,      label: labels.tour      },
    { id: "excursion", Icon: IcoExcursion, label: labels.excursion },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#031e22]/70 backdrop-blur-sm p-4 sm:p-6"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <motion.div
        initial={{ opacity: 0, y: 48, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 32, scale: 0.97 }}
        transition={{ type: "spring", damping: 26, stiffness: 320 }}
        className="relative w-full max-w-[520px] bg-[#fff8f0] rounded-3xl shadow-[0_24px_60px_rgba(6,47,53,.35)] overflow-hidden"
      >
        {/* ── Header ── */}
        <div className="bg-[#062f35] px-5 pt-4 pb-4">
          <button onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-colors">
            <IcoX />
          </button>
          <p className="text-[9.5px] font-bold tracking-[0.18em] uppercase text-[#f5b63f]/70 mb-0.5">Transfer Maroc</p>
          <h2 className="font-serif text-white text-[15px] sm:text-[17px] leading-snug pr-8">
            {locale === "ar" ? "احجز رحلتك" : locale === "en" ? "Book your trip" : "Réservez votre voyage"}
          </h2>
        </div>

        {/* ── Mode tabs (SearchBar style) ── */}
        <div className="grid grid-cols-3 gap-1.5 px-2.5 py-2 bg-[#07383b]">
          {MODES.map(({ id, Icon, label }) => {
            const active = mode === id;
            return (
              <button key={id} type="button" onClick={() => switchMode(id)}
                className={cn(
                  "relative flex items-center justify-center gap-1.5 h-[36px] px-2 rounded-lg border transition-all duration-200 cursor-pointer",
                  active
                    ? "bg-white text-[#07383b] border-[#e0dbd0] shadow-[0_4px_16px_rgba(0,0,0,.18)]"
                    : "border-transparent text-white/65 hover:bg-white/10 hover:text-white hover:border-white/15",
                )}
              >
                <span className={cn(
                  "flex-shrink-0 w-[18px] h-[18px] rounded-[6px] grid place-items-center transition-all duration-200",
                  active ? "bg-[#fff0cb] text-[#b87a06]" : "bg-white/12 text-current",
                )}>
                  <Icon />
                </span>
                <span className={cn("text-[10px] font-bold leading-none", active ? "text-[#062f35]" : "")}>
                  {label}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Form ── */}
        <form onSubmit={submit} className="px-4 pt-3 pb-4 sm:px-5 space-y-2.5
          max-h-[calc(90dvh-115px)] overflow-y-auto
          [&::-webkit-scrollbar]:w-[5px] [&::-webkit-scrollbar-track]:bg-transparent
          [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#e4cfa0]"
          style={{ scrollbarWidth: "thin", scrollbarColor: "#e4cfa0 transparent" }}>

          {/* ── Transfer fields ── */}
          {mode === "transfer" && (
            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <label className={lbl}>{labels.departure}</label>
                <SBField
                  IconComp={IcoPin}
                  placeholder="Marrakech"
                  value="Marrakech"
                  onValue={() => {}}
                  locked
                />
              </div>
              <div>
                <label className={lbl}>{labels.destination}</label>
                <SBField
                  IconComp={IcoDest}
                  placeholder={labels.destPh}
                  value={dest}
                  onValue={v => { setDest(v); setErr(null); }}
                  options={transferCities}
                  searchable
                />
              </div>
            </div>
          )}

          {/* ── Tour fields ── */}
          {mode === "tour" && (
            <div>
              <label className={lbl}>{labels.duration}</label>
              <SBField
                IconComp={IcoClock}
                placeholder={labels.durationPh}
                value={duration}
                onValue={v => { setDuration(v); setErr(null); }}
                options={tourDurations}
              />
            </div>
          )}

          {/* ── Excursion fields ── */}
          {mode === "excursion" && (
            <div>
              <label className={lbl}>{labels.duration}</label>
              <SBField
                IconComp={IcoClock}
                placeholder={labels.durationPh}
                value={duration}
                onValue={v => { setDuration(v); setErr(null); }}
                options={excurDurations}
              />
            </div>
          )}

          {/* ── Date (always) ── */}
          <div>
            <label className={lbl}>{labels.date}</label>
            <SBFieldDate
              placeholder={labels.datePh}
              value={date}
              onChange={v => { setDate(v); setErr(null); }}
            />
          </div>

          {/* ── Divider ── */}
          <div className="h-px bg-[#ede8df]" />

          {/* ── Name ── */}
          <div>
            <label className={lbl}>{labels.name}</label>
            <FieldInput
              icon={<IcoUser />}
              placeholder={labels.namePh}
              value={name}
              onChange={e => { setName(e.target.value); setErr(null); }}
              autoComplete="name"
            />
          </div>

          {/* ── Phone (optional) ── */}
          <div>
            <label className={lbl}>{labels.phone}</label>
            <FieldInput
              icon={<IcoPhone />}
              type="tel"
              placeholder="+212 6 XX XX XX XX"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              autoComplete="tel"
            />
          </div>

          {/* ── Error ── */}
          {err && (
            <p className="text-[12px] text-red-500 bg-red-50 border border-red-200 rounded-lg px-4 py-2.5">
              {err}
            </p>
          )}

          {/* ── Submit ── */}
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 h-12 rounded-xl
              bg-gradient-to-b from-[#ffc84d] to-[#f5a623]
              hover:from-[#ffd166] hover:to-[#f5b235]
              text-[#17342f] font-bold text-[13px] cursor-pointer
              transition-all duration-200 shadow-[0_4px_18px_rgba(218,151,24,.38)]
              hover:shadow-[0_6px_24px_rgba(218,151,24,.48)] hover:-translate-y-[1px] active:scale-[.97]"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12.004 0C5.373 0 0 5.373 0 12.004c0 2.117.555 4.103 1.523 5.832L.057 23.944l6.303-1.654A11.944 11.944 0 0 0 12.004 24C18.627 24 24 18.627 24 12.004 24 5.373 18.627 0 12.004 0zm0 21.902a9.896 9.896 0 0 1-5.042-1.376l-.36-.214-3.737.98.998-3.648-.235-.374a9.862 9.862 0 0 1-1.514-5.27c0-5.455 4.438-9.893 9.89-9.893 5.453 0 9.891 4.438 9.891 9.893 0 5.453-4.438 9.902-9.891 9.902z"/>
            </svg>
            {labels.submit}
          </button>

        </form>
      </motion.div>
    </motion.div>
  );
}
