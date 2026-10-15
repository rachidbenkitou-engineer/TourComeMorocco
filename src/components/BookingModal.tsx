"use client";
import { createContext, useContext, useState, useEffect, useRef, type ReactNode, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CalendarCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { useI18n } from "@/i18n/I18nProvider";

/* ─── WhatsApp ──────────────────────────────────────── */
const WA_NUMBER = "212709274114";
function waLink(text: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

/* ─── Fleet ─────────────────────────────────────────── */
const FLEET = [
  { name: "Škoda Kodiaq 4x4",       seats: "4 passagers + chauffeur" },
  { name: "Mercedes Vito Tourer",    seats: "7 passagers + chauffeur" },
  { name: "Ford Tourneo Custom",     seats: "7 passagers + chauffeur" },
  { name: "Renault Trafic Tourisme", seats: "7 passagers + chauffeur" },
];

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

/* ─── Icons ──────────────────────────────────────────── */
const IcoX = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M18 6 6 18M6 6l12 12"/>
  </svg>
);
const IcoMinus = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M5 12h14"/>
  </svg>
);
const IcoPlus = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M12 5v14M5 12h14"/>
  </svg>
);
const IcoUser = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="7" r="4"/><path d="M4 21v-1a7 7 0 0 1 14 0v1"/>
  </svg>
);
const IcoCalendar = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
  </svg>
);
const IcoClock = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>
  </svg>
);
const IcoUsers = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const IcoCar = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 17H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h.5l2-4h11l2 4H21a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"/>
    <circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>
  </svg>
);
const IcoPin = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>
  </svg>
);
const IcoFlag = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>
  </svg>
);
const IcoPlane = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21 4 19 4s-2 1-3.5 2.5L11 8 2.8 6.2l-2.3 2.3 8 5-3.8 3.8-2-.5-1.4 1.4 2.5 1 1 2.5 1.4-1.4-.5-2 3.8-3.8 5 8z"/>
  </svg>
);
const IcoChevron = ({ open }: { open: boolean }) => (
  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    className={cn("flex-shrink-0 text-[#adbfc0] transition-transform duration-200", open && "rotate-180")}>
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

/* ─── Icon circle (same as SearchBar) ────────────────── */
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

/* ─── FieldSelect — custom dropdown (SearchBar style) ── */
function FieldSelect({
  icon, placeholder, value, onChange, options, hasError,
}: {
  icon: React.ReactNode;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  hasError?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [dropStyle, setDropStyle] = useState<React.CSSProperties>({});
  const ref = useRef<HTMLDivElement>(null);

  function toggle() {
    if (!open && ref.current) {
      const r = ref.current.getBoundingClientRect();
      setDropStyle({ top: r.bottom + 4, left: r.left, width: r.width });
    }
    setOpen(v => !v);
  }

  useEffect(() => {
    if (!open) return;
    const h = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, [open]);

  const selected = options.find(o => o.value === value);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={toggle}
        className={cn(
          "flex items-center gap-2 h-[38px] px-2.5 rounded-lg bg-white border w-full cursor-pointer transition-all duration-150",
          hasError   ? "border-red-400" :
          open       ? "border-[#f5b63f] shadow-[0_0_0_3px_rgba(245,182,63,.13)]"
                     : "border-[#e4e9e5] hover:border-[#c9b898]",
        )}
      >
        <FieldIcon open={open}>{icon}</FieldIcon>
        <span className={cn(
          "flex-1 text-left text-[12.5px] font-medium leading-none truncate",
          selected ? "text-[#0d2f32]" : "text-[#adbfc0]",
        )}>
          {selected?.label ?? placeholder}
        </span>
        <IcoChevron open={open} />
      </button>

      {open && (
        <div
          className="fixed bg-white border border-[#e8e3da] rounded-xl shadow-[0_8px_28px_rgba(6,47,53,.14)] max-h-[220px] overflow-y-auto py-1.5"
          style={{ ...dropStyle, zIndex: 9999999 }}
        >
          {options.map(opt => (
            <button
              key={opt.value}
              type="button"
              onClick={() => { onChange(opt.value); setOpen(false); }}
              className={cn(
                "w-full text-left px-4 py-2 text-[13px] leading-snug transition-colors",
                value === opt.value
                  ? "text-[#b87a06] font-semibold bg-[#fff8f0]"
                  : "text-[#1a3a3c] hover:bg-[#f7f2ea]",
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── FieldInput — texte (SearchBar style, no dropdown) ─ */
function FieldInput({
  icon, type = "text", placeholder, value, onChange, maxLength, autoComplete, hasError,
}: {
  icon: React.ReactNode;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  autoComplete?: string;
  hasError?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div className={cn(
      "flex items-center gap-2 h-[38px] px-2.5 rounded-lg bg-white border w-full transition-all duration-150",
      hasError  ? "border-red-400" :
      focused   ? "border-[#f5b63f] shadow-[0_0_0_3px_rgba(245,182,63,.13)]"
                : "border-[#e4e9e5] hover:border-[#c9b898]",
    )}>
      <FieldIcon open={focused}>{icon}</FieldIcon>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        autoComplete={autoComplete}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="flex-1 bg-transparent border-none outline-none text-[12.5px] font-medium text-[#0d2f32] placeholder:text-[#adbfc0] w-full min-w-0"
      />
    </div>
  );
}

/* ─── Calendar helpers ───────────────────────────────── */
const MONTHS: Record<string, string[]> = {
  fr: ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],
  en: ["January","February","March","April","May","June","July","August","September","October","November","December"],
  ar: ["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],
};
const WEEK_DAYS: Record<string, string[]> = {
  fr: ["Lu","Ma","Me","Je","Ve","Sa","Di"],
  en: ["Mo","Tu","We","Th","Fr","Sa","Su"],
  ar: ["إث","ثل","أر","خم","جم","سب","أح"],
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

/* ─── FieldDatePicker — custom calendar popover ──────── */
function FieldDatePicker({
  icon, placeholder, value, onChange, min, hasError,
}: {
  icon: React.ReactNode;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  min?: string;
  hasError?: boolean;
}) {
  const { locale } = useI18n();
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<React.CSSProperties>({});
  const ref = useRef<HTMLDivElement>(null);

  const now = new Date();
  const init = value ? new Date(value + "T12:00:00") : now;
  const [vy, setVy] = useState(init.getFullYear());
  const [vm, setVm] = useState(init.getMonth());

  function toggle() {
    if (!open && ref.current) {
      const r = ref.current.getBoundingClientRect();
      setPos(window.innerHeight - r.bottom >= 310
        ? { top: r.bottom + 6, left: r.left }
        : { bottom: window.innerHeight - r.top + 6, left: r.left });
    }
    setOpen(v => !v);
  }

  useEffect(() => {
    if (!open) return;
    const h = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, [open]);

  const cells    = calGrid(vy, vm);
  const months   = MONTHS[locale]    ?? MONTHS.fr;
  const weekDays = WEEK_DAYS[locale] ?? WEEK_DAYS.fr;
  const todayStr = toYMD(now.getFullYear(), now.getMonth(), now.getDate());

  function prevMonth() { vm === 0 ? (setVy(y => y - 1), setVm(11)) : setVm(m => m - 1); }
  function nextMonth() { vm === 11 ? (setVy(y => y + 1), setVm(0)) : setVm(m => m + 1); }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={toggle}
        className={cn(
          "flex items-center gap-2 h-[38px] px-2.5 rounded-lg bg-white border w-full cursor-pointer transition-all duration-150",
          hasError ? "border-red-400" :
          open     ? "border-[#f5b63f] shadow-[0_0_0_3px_rgba(245,182,63,.13)]"
                   : "border-[#e4e9e5] hover:border-[#c9b898]",
        )}
      >
        <FieldIcon open={open}>{icon}</FieldIcon>
        <span className={cn("flex-1 text-left text-[12.5px] font-medium leading-none truncate", value ? "text-[#0d2f32]" : "text-[#adbfc0]")}>
          {value ? fmtDate(value, locale) : placeholder}
        </span>
        <IcoChevron open={open} />
      </button>

      {open && (
        <div
          className="fixed bg-white rounded-2xl shadow-[0_12px_40px_rgba(6,47,53,.22)] border border-[#e8e3da] p-3 select-none overflow-y-auto [&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#e4cfa0] [&::-webkit-scrollbar-thumb:hover]:bg-[#f5b63f]"
          style={{ ...pos, zIndex: 9999999, width: 272, scrollbarWidth: "thin", scrollbarColor: "#e4cfa0 transparent" }}
        >
          {/* Header navigation */}
          <div className="flex items-center justify-between mb-2.5 px-1">
            <button type="button" onClick={prevMonth}
              className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-[#f0f5f5] text-[#3a6568] transition-colors">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <span className="text-[12.5px] font-bold text-[#062f35]">{months[vm]} {vy}</span>
            <button type="button" onClick={nextMonth}
              className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-[#f0f5f5] text-[#3a6568] transition-colors">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
          {/* Day names */}
          <div className="grid grid-cols-7 mb-1">
            {weekDays.map(d => (
              <div key={d} className="text-center text-[10px] font-bold text-[#adbfc0] py-1">{d}</div>
            ))}
          </div>
          {/* Days grid */}
          <div className="grid grid-cols-7 gap-y-0.5">
            {cells.map((day, i) => {
              if (!day) return <div key={i} />;
              const str     = toYMD(vy, vm, day);
              const isSel   = str === value;
              const isToday = str === todayStr;
              const isDisab = !!min && str < min;
              return (
                <button key={i} type="button" disabled={isDisab}
                  onClick={() => { onChange(str); setOpen(false); }}
                  className={cn(
                    "h-8 w-full rounded-lg text-[12px] font-medium transition-all duration-100",
                    isDisab  ? "text-[#d0d8d8] cursor-not-allowed" :
                    isSel    ? "bg-[#f5b63f] text-[#1c2e2e] font-bold shadow-[0_2px_8px_rgba(245,182,63,.35)]" :
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

/* ─── Time slots ─────────────────────────────────────── */
const TIME_SLOTS: string[] = [];
for (let h = 0; h < 24; h++) {
  TIME_SLOTS.push(`${String(h).padStart(2, "0")}:00`);
  TIME_SLOTS.push(`${String(h).padStart(2, "0")}:30`);
}

/* ─── FieldTimePicker — custom time slot popover ─────── */
function FieldTimePicker({
  icon, placeholder, value, onChange, hasError,
}: {
  icon: React.ReactNode;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  hasError?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<React.CSSProperties>({});
  const ref = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  function toggle() {
    if (!open && ref.current) {
      const r = ref.current.getBoundingClientRect();
      setPos(window.innerHeight - r.bottom >= 240
        ? { top: r.bottom + 6, left: r.left }
        : { bottom: window.innerHeight - r.top + 6, left: r.left });
    }
    setOpen(v => !v);
  }

  useEffect(() => {
    if (!open) return;
    const h = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", h);
    if (listRef.current && value) {
      const idx = TIME_SLOTS.indexOf(value);
      if (idx >= 0) {
        const el = listRef.current.children[idx] as HTMLElement;
        el?.scrollIntoView({ block: "nearest" });
      }
    }
    return () => document.removeEventListener("mousedown", h);
  }, [open, value]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={toggle}
        className={cn(
          "flex items-center gap-2 h-[38px] px-2.5 rounded-lg bg-white border w-full cursor-pointer transition-all duration-150",
          hasError ? "border-red-400" :
          open     ? "border-[#f5b63f] shadow-[0_0_0_3px_rgba(245,182,63,.13)]"
                   : "border-[#e4e9e5] hover:border-[#c9b898]",
        )}
      >
        <FieldIcon open={open}>{icon}</FieldIcon>
        <span className={cn("flex-1 text-left text-[12.5px] font-medium leading-none truncate", value ? "text-[#0d2f32]" : "text-[#adbfc0]")}>
          {value || placeholder}
        </span>
        <IcoChevron open={open} />
      </button>

      {open && (
        <div
          className="fixed bg-white rounded-xl shadow-[0_8px_28px_rgba(6,47,53,.18)] border border-[#e8e3da] py-1.5 overflow-y-auto [&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#e4cfa0] [&::-webkit-scrollbar-thumb:hover]:bg-[#f5b63f]"
          style={{ ...pos, zIndex: 9999999, width: 160, maxHeight: 230, scrollbarWidth: "thin", scrollbarColor: "#e4cfa0 transparent" }}
        >
          <div ref={listRef}>
            {TIME_SLOTS.map(slot => (
              <button key={slot} type="button"
                onClick={() => { onChange(slot); setOpen(false); }}
                className={cn(
                  "w-full text-left px-4 py-2 text-[13px] leading-snug transition-colors",
                  value === slot ? "text-[#b87a06] font-bold bg-[#fff8f0]" : "text-[#1a3a3c] hover:bg-[#f7f2ea]",
                )}>
                {slot}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Label ──────────────────────────────────────────── */
const lbl = "block text-[9.5px] sm:text-[10px] font-bold uppercase tracking-[0.12em] text-[#5a7578] mb-1";

function OptLabel({ children, optLabel }: { children: React.ReactNode; optLabel: string }) {
  return (
    <label className={lbl}>
      {children}{" "}
      <span className="normal-case tracking-normal font-normal text-[#a8b8b9]">({optLabel})</span>
    </label>
  );
}

/* ─── Counter ────────────────────────────────────────── */
function Counter({ label, hint, value, onChange }: {
  label: string; hint: string; value: number; onChange: (n: number) => void;
}) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-[#e4e9e5] bg-[#f7f2ea] px-3 py-2">
      <div>
        <p className="text-[11.5px] font-semibold text-[#062f35]">{label}</p>
        <p className="text-[10px] text-[#7a9496] mt-0.5 hidden sm:block">{hint}</p>
      </div>
      <div className="flex items-center gap-2.5">
        <button type="button" onClick={() => onChange(Math.max(0, value - 1))}
          className="w-6 h-6 rounded-full border border-[#e4e9e5] bg-white flex items-center justify-center text-[#062f35] hover:border-[#062f35] transition-colors">
          <IcoMinus />
        </button>
        <span className="w-4 text-center font-bold text-[13px] text-[#062f35]">{value}</span>
        <button type="button" onClick={() => onChange(Math.min(9, value + 1))}
          className="w-6 h-6 rounded-full border border-[#e4e9e5] bg-white flex items-center justify-center text-[#062f35] hover:border-[#f5b63f] transition-colors">
          <IcoPlus />
        </button>
      </div>
    </div>
  );
}

/* ─── BookingModal ───────────────────────────────────── */
type Fields = {
  name: string; date: string; time: string;
  passengers: string; vehicle: string;
  pickup: string; dropoff: string; flight: string; notes: string;
};

function BookingModal({ service, price, onClose }: {
  service: string; price?: string; onClose: () => void;
}) {
  const { t, locale } = useI18n();
  const bk = t.booking;
  const optional = locale === "ar" ? "اختياري" : locale === "en" ? "optional" : "optionnel";

  const [f, setF] = useState<Fields>({
    name: "", date: "", time: "", passengers: "2",
    vehicle: "", pickup: "", dropoff: "", flight: "", notes: "",
  });
  const [sim,   setSim]   = useState(0);
  const [child, setChild] = useState(0);
  const [baby,  setBaby]  = useState(0);
  const [err, setErr] = useState<string | null>(null);
  const [showMore, setShowMore] = useState(false);

  const set = (k: keyof Fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setF(prev => ({ ...prev, [k]: e.target.value }));
      setErr(null);
    };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose]);

  function validate() {
    if (!f.name.trim() || f.name.trim().length < 2) { setErr(bk.errors.name); return false; }
    if (!f.date) { setErr(bk.errors.date); return false; }
    if (!f.time) { setErr(bk.errors.time); return false; }
    return true;
  }

  function submit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    const extras: string[] = [];
    if (sim   > 0) extras.push(`${sim} ${bk.extras.sim}`);
    if (child > 0) extras.push(`${child} ${bk.extras.child}`);
    if (baby  > 0) extras.push(`${baby} ${bk.extras.baby}`);

    const lines = [
      `*${bk.label} — Tour Come Morocco*`,
      ``,
      `• Service : ${service}${price ? ` — ${price}` : ""}`,
      `• ${bk.fields.name.replace(" *", "")} : ${f.name}`,
      `• ${bk.fields.date.replace(" *", "")} : ${f.date} / ${f.time}`,
      `• ${bk.fields.passengers} : ${f.passengers}`,
      `• ${bk.fields.vehicle} : ${f.vehicle || bk.placeholders.vehicleChoice}`,
      f.pickup  ? `• ${bk.fields.pickup} : ${f.pickup}`   : "",
      f.dropoff ? `• ${bk.fields.dropoff} : ${f.dropoff}` : "",
      f.flight  ? `• ${bk.fields.flight} : ${f.flight}`   : "",
      `• ${bk.fields.extras} : ${extras.length ? extras.join(", ") : "-"}`,
      f.notes   ? `• ${bk.fields.notes} : ${f.notes}`     : "",
    ].filter(Boolean).join("\n");

    window.open(waLink(lines), "_blank", "noopener");
  }

  /* options */
  const passengerOpts = [1,2,3,4,5,6,7].map(n => ({ value: String(n), label: String(n) }));
  const vehicleOpts = [
    { value: "", label: bk.placeholders.vehicleChoice },
    ...FLEET.map(v => ({ value: v.name, label: v.name })),
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
        className="relative w-full max-w-[520px] max-h-[90dvh] bg-[#fff8f0] rounded-3xl shadow-[0_24px_60px_rgba(6,47,53,.35)] flex flex-col overflow-hidden"
      >
        {/* ── Header ── */}
        <div className="bg-[#062f35] px-4 pt-3.5 pb-3.5 sm:px-6 sm:pt-5 sm:pb-5 flex-shrink-0">
          <button onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-colors">
            <IcoX />
          </button>
          <p className="text-[9px] sm:text-[10px] font-bold tracking-[0.18em] uppercase text-[#f5b63f]/70 mb-0.5">
            {bk.label}
          </p>
          <h2 className="font-serif text-white text-[14px] sm:text-[17px] leading-snug pr-8">{service}</h2>
          {price && (
            <p className="mt-1.5 sm:mt-2 flex items-baseline gap-2">
              <span className="text-[10px] sm:text-[10.5px] text-white/45">{bk.fixedPrice}</span>
              <span className="font-serif text-[20px] sm:text-[24px] text-[#f5b63f] leading-none">{price}</span>
            </p>
          )}
        </div>

        {/* ── Form (scrollable) ── */}
        <form onSubmit={submit} className="overflow-y-auto flex-1 px-4 py-3 space-y-2.5 sm:px-5 sm:py-4 sm:space-y-3 [&::-webkit-scrollbar]:w-[5px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#e4cfa0] [&::-webkit-scrollbar-thumb:hover]:bg-[#f5b63f]" style={{ scrollbarWidth: "thin", scrollbarColor: "#e4cfa0 transparent" }}>

          {/* Nom */}
          <div>
            <label className={lbl}>{bk.fields.name}</label>
            <FieldInput
              icon={<IcoUser />}
              placeholder={bk.placeholders.name}
              value={f.name}
              onChange={set("name")}
              maxLength={100}
              autoComplete="name"
              hasError={err === bk.errors.name}
            />
          </div>

          {/* Date + Heure */}
          <div className="grid grid-cols-2 gap-2.5">
            <div>
              <label className={lbl}>{bk.fields.date}</label>
              <FieldDatePicker
                icon={<IcoCalendar />}
                placeholder={locale === "en" ? "Choose a date" : locale === "ar" ? "اختر التاريخ" : "Choisir une date"}
                value={f.date}
                onChange={v => { setF(p => ({ ...p, date: v })); setErr(null); }}
                min={new Date().toISOString().split("T")[0]}
                hasError={err === bk.errors.date}
              />
            </div>
            <div>
              <label className={lbl}>{bk.fields.time}</label>
              <FieldTimePicker
                icon={<IcoClock />}
                placeholder={locale === "en" ? "Time" : locale === "ar" ? "الوقت" : "Heure"}
                value={f.time}
                onChange={v => { setF(p => ({ ...p, time: v })); setErr(null); }}
                hasError={err === bk.errors.time}
              />
            </div>
          </div>

          {/* Passagers + Véhicule */}
          <div className="grid grid-cols-2 gap-2.5">
            <div>
              <label className={lbl}>{bk.fields.passengers}</label>
              <FieldSelect
                icon={<IcoUsers />}
                placeholder="2"
                value={f.passengers}
                onChange={v => { setF(p => ({ ...p, passengers: v })); setErr(null); }}
                options={passengerOpts}
              />
            </div>
            <div>
              <label className={lbl}>{bk.fields.vehicle}</label>
              <FieldSelect
                icon={<IcoCar />}
                placeholder={bk.placeholders.vehicleChoice}
                value={f.vehicle}
                onChange={v => { setF(p => ({ ...p, vehicle: v })); setErr(null); }}
                options={vehicleOpts}
              />
            </div>
          </div>

          {/* Lieu de prise en charge */}
          <div>
            <label className={lbl}>{bk.fields.pickup}</label>
            <FieldInput
              icon={<IcoPin />}
              placeholder={bk.placeholders.pickup}
              value={f.pickup}
              onChange={set("pickup")}
              maxLength={150}
            />
          </div>

          {/* Toggle (mobile) */}
          <button
            type="button"
            onClick={() => setShowMore(v => !v)}
            className="sm:hidden w-full flex items-center justify-between text-[11px] font-semibold text-[#3a6568] bg-[#f0f5f5] border border-[#e4e9e5] rounded-lg px-3.5 py-2.5"
          >
            <span>{showMore ? bk.hideOptions : bk.moreOptions}</span>
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              className={`transition-transform duration-200 ${showMore ? "rotate-180" : ""}`}>
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>

          {/* Champs optionnels — animated expand/collapse on mobile, always open on desktop */}
          <div className={cn(
            "grid transition-[grid-template-rows] duration-300 ease-in-out",
            showMore ? "grid-rows-[1fr]" : "grid-rows-[0fr] sm:grid-rows-[1fr]",
          )}>
          <div className="overflow-hidden">
          <div className="space-y-2.5 sm:space-y-3">

            <div>
              <OptLabel optLabel={optional}>{bk.fields.dropoff}</OptLabel>
              <FieldInput
                icon={<IcoFlag />}
                placeholder={bk.placeholders.dropoff}
                value={f.dropoff}
                onChange={set("dropoff")}
                maxLength={150}
              />
            </div>

            <div>
              <OptLabel optLabel={optional}>{bk.fields.flight}</OptLabel>
              <FieldInput
                icon={<IcoPlane />}
                placeholder={bk.placeholders.flight}
                value={f.flight}
                onChange={set("flight")}
                maxLength={40}
              />
            </div>

            <div>
              <label className={lbl}>{bk.fields.extras}</label>
              <div className="space-y-1.5">
                <Counter label={bk.extras.sim}   hint={bk.extras.simHint}   value={sim}   onChange={setSim}   />
                <Counter label={bk.extras.child}  hint={bk.extras.childHint} value={child} onChange={setChild} />
                <Counter label={bk.extras.baby}   hint={bk.extras.babyHint}  value={baby}  onChange={setBaby}  />
              </div>
            </div>

            <div>
              <OptLabel optLabel={optional}>{bk.fields.notes}</OptLabel>
              <Textarea
                rows={2}
                placeholder={bk.placeholders.notes}
                value={f.notes}
                onChange={set("notes") as React.ChangeEventHandler<HTMLTextAreaElement>}
                maxLength={500}
                className="w-full rounded-lg border border-[#e4e9e5] bg-white px-3 py-2 text-[12.5px] font-medium text-[#0d2f32] placeholder:text-[#adbfc0] resize-none focus:border-[#f5b63f] focus:ring-[#f5b63f]/20 focus:outline-none transition-all"
              />
            </div>

          </div></div></div>

          {/* Erreur */}
          {err && (
            <p className="text-[12px] text-red-500 bg-red-50 border border-red-200 rounded-lg px-4 py-2.5">
              {err}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 font-bold text-[12.5px] sm:text-[13.5px] py-3 sm:py-4 rounded-2xl transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_10px_28px_rgba(245,182,63,.45)] active:scale-[.99] cursor-pointer"
            style={{ background: "linear-gradient(135deg,#f5c842 0%,#e8921e 100%)", color: "#1c2e2e" }}
          >
            <CalendarCheck size={16} />
            {bk.submit}
          </button>
          <p className="text-center text-[10px] text-[#8a9ea0] pb-1">
            {bk.waNote}
          </p>
        </form>
      </motion.div>
    </motion.div>
  );
}
