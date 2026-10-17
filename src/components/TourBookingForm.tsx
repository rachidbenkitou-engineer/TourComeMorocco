"use client";
import { useState, useEffect, useRef, type FormEvent } from "react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/i18n/I18nProvider";
import type { Tour } from "@/data/tours";

const WA_NUMBER = "212709274114";

/* ─── Labels ──────────────────────────────────────────── */
const LABELS: Record<string, Record<string, string>> = {
  title:      { fr: "Réserver ce tour",                      en: "Book this tour",                        ar: "احجز هذه الجولة",                   it: "Prenota questo tour"                      },
  tour:       { fr: "Tour sélectionné",                      en: "Selected tour",                         ar: "الجولة المختارة",                    it: "Tour selezionato"                         },
  duration:   { fr: "Durée",                                 en: "Duration",                              ar: "المدة",                              it: "Durata"                                   },
  startDate:  { fr: "Date de départ",                        en: "Departure date",                        ar: "تاريخ الانطلاق",                     it: "Data di partenza"                         },
  passengers: { fr: "Personnes",                             en: "People",                                ar: "الأشخاص",                            it: "Persone"                                  },
  name:       { fr: "Nom complet",                           en: "Full name",                             ar: "الاسم الكامل",                       it: "Nome completo"                            },
  phone:      { fr: "Téléphone",                             en: "Phone",                                 ar: "الهاتف",                             it: "Telefono"                                 },
  notes:      { fr: "Notes",                                 en: "Notes",                                 ar: "ملاحظات",                            it: "Note"                                     },
  notesOpt:   { fr: "optionnel",                             en: "optional",                              ar: "اختياري",                            it: "facoltativo"                              },
  submit:     { fr: "Demander un devis sur WhatsApp",        en: "Request a quote on WhatsApp",           ar: "طلب عرض سعر عبر واتساب",             it: "Richiedi un preventivo su WhatsApp"       },
  errName:    { fr: "Nom requis",                            en: "Name required",                         ar: "الاسم مطلوب",                        it: "Nome richiesto"                           },
  errDate:    { fr: "Date requise",                          en: "Date required",                         ar: "التاريخ مطلوب",                      it: "Data richiesta"                           },
  namePh:     { fr: "Votre nom",                             en: "Your name",                             ar: "أدخل اسمك",                          it: "Il tuo nome"                              },
  notesPh:    { fr: "Hôtel, demandes spéciales, langues…",  en: "Hotel, special requests, languages…",   ar: "الفندق، طلبات خاصة، اللغات…",        it: "Hotel, richieste speciali, lingue…"       },
  chooseDt:   { fr: "Choisir une date",                      en: "Choose a date",                         ar: "اختر التاريخ",                       it: "Scegli una data"                          },
  privateTour:{ fr: "Tour Privé",                            en: "Private Tour",                          ar: "جولة خاصة",                          it: "Tour Privato"                             },
};
function l(key: string, locale: string): string {
  return LABELS[key]?.[locale] ?? LABELS[key]?.["fr"] ?? key;
}

/* ─── Calendar helpers ────────────────────────────────── */
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

/* ─── Shared primitives ──────────────────────────────── */
const IcoChevron = ({ open }: { open: boolean }) => (
  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    className={cn("flex-shrink-0 text-[#adbfc0] transition-transform duration-200", open && "rotate-180")}>
    <path d="m6 9 6 6 6-6"/>
  </svg>
);
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
const lbl = "block text-[9.5px] font-bold uppercase tracking-[0.12em] text-[#5a7578] mb-1";

function FieldInput({
  icon, type = "text", placeholder, value, onChange, autoComplete, hasError, readOnly,
}: {
  icon: React.ReactNode; type?: string; placeholder: string; value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string; hasError?: boolean; readOnly?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div className={cn(
      "flex items-center gap-2 h-[38px] px-2.5 rounded-lg bg-white border w-full transition-all duration-150",
      readOnly  ? "bg-[#f7f2ea] border-[#e4e9e5] cursor-not-allowed" :
      hasError  ? "border-red-400" :
      focused   ? "border-[#f5b63f] shadow-[0_0_0_3px_rgba(245,182,63,.13)]"
                : "border-[#e4e9e5] hover:border-[#c9b898]",
    )}>
      <FieldIcon open={focused && !readOnly}>{icon}</FieldIcon>
      <input
        type={type} placeholder={placeholder} value={value} onChange={onChange}
        readOnly={readOnly} autoComplete={autoComplete}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        className={cn(
          "flex-1 bg-transparent border-none outline-none text-[12.5px] font-medium text-[#0d2f32] placeholder:text-[#adbfc0] w-full min-w-0",
          readOnly && "cursor-not-allowed text-[#7a9090]",
        )}
      />
    </div>
  );
}

function FieldSelect({
  icon, placeholder, value, onChange, options,
}: {
  icon: React.ReactNode; placeholder: string; value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);
  const [dropStyle, setDropStyle] = useState<React.CSSProperties>({});
  const ref = useRef<HTMLDivElement>(null);
  function calcPos() {
    if (ref.current) {
      const r = ref.current.getBoundingClientRect();
      setDropStyle({ top: r.bottom + 4, left: r.left, width: r.width });
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
  const selected = options.find(o => o.value === value);
  return (
    <div ref={ref} className="relative">
      <button type="button" onClick={toggle}
        className={cn(
          "flex items-center gap-2 h-[38px] px-2.5 rounded-lg bg-white border w-full cursor-pointer transition-all duration-150",
          open ? "border-[#f5b63f] shadow-[0_0_0_3px_rgba(245,182,63,.13)]" : "border-[#e4e9e5] hover:border-[#c9b898]",
        )}>
        <FieldIcon open={open}>{icon}</FieldIcon>
        <span className={cn("flex-1 text-left text-[12.5px] font-medium leading-none truncate", selected ? "text-[#0d2f32]" : "text-[#adbfc0]")}>
          {selected?.label ?? placeholder}
        </span>
        <IcoChevron open={open} />
      </button>
      {open && (
        <div className="fixed bg-white border border-[#e8e3da] rounded-xl shadow-[0_8px_28px_rgba(6,47,53,.14)] max-h-[220px] overflow-y-auto py-1.5
          [&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#e4cfa0]"
          style={{ ...dropStyle, zIndex: 9999999, scrollbarWidth: "thin" }}>
          {options.map(opt => (
            <button key={opt.value} type="button" onClick={() => { onChange(opt.value); setOpen(false); }}
              className={cn("w-full text-left px-4 py-2 text-[13px] leading-snug transition-colors",
                value === opt.value ? "text-[#b87a06] font-semibold bg-[#fff8f0]" : "text-[#1a3a3c] hover:bg-[#f7f2ea]")}>
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function FieldDatePicker({
  icon, value, onChange, hasError,
}: {
  icon: React.ReactNode; value: string; onChange: (v: string) => void; hasError?: boolean;
}) {
  const { locale } = useI18n();
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<React.CSSProperties>({});
  const ref = useRef<HTMLDivElement>(null);
  const now  = new Date();
  const init = value ? new Date(value + "T12:00:00") : now;
  const [vy, setVy] = useState(init.getFullYear());
  const [vm, setVm] = useState(init.getMonth());

  function calcPos() {
    if (ref.current) {
      const r = ref.current.getBoundingClientRect();
      setPos(window.innerHeight - r.bottom >= 310
        ? { top: r.bottom + 6, left: r.left }
        : { bottom: window.innerHeight - r.top + 6, left: r.left });
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

  function prevMonth() { if (vm === 0) { setVy(y => y - 1); setVm(11); } else setVm(m => m - 1); }
  function nextMonth() { if (vm === 11) { setVy(y => y + 1); setVm(0); } else setVm(m => m + 1); }

  return (
    <div ref={ref} className="relative">
      <button type="button" onClick={toggle}
        className={cn(
          "flex items-center gap-2 h-[38px] px-2.5 rounded-lg bg-white border w-full cursor-pointer transition-all duration-150",
          hasError ? "border-red-400" :
          open     ? "border-[#f5b63f] shadow-[0_0_0_3px_rgba(245,182,63,.13)]"
                   : "border-[#e4e9e5] hover:border-[#c9b898]",
        )}>
        <FieldIcon open={open}>{icon}</FieldIcon>
        <span className={cn("flex-1 text-left text-[12.5px] font-medium leading-none truncate", value ? "text-[#0d2f32]" : "text-[#adbfc0]")}>
          {value ? fmtDate(value, locale) : l("chooseDt", locale)}
        </span>
        <IcoChevron open={open} />
      </button>
      {open && (
        <div className="fixed bg-white rounded-2xl shadow-[0_12px_40px_rgba(6,47,53,.22)] border border-[#e8e3da] p-3 select-none"
          style={{ ...pos, zIndex: 9999999, width: 272 }}>
          <div className="flex items-center justify-between mb-2.5 px-1">
            <button type="button" onClick={prevMonth} className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-[#f0f5f5] text-[#3a6568] transition-colors">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <span className="text-[12.5px] font-bold text-[#062f35]">{months[vm]} {vy}</span>
            <button type="button" onClick={nextMonth} className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-[#f0f5f5] text-[#3a6568] transition-colors">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
          <div className="grid grid-cols-7 mb-1">
            {weekDays.map(d => <div key={d} className="text-center text-[10px] font-bold text-[#adbfc0] py-1">{d}</div>)}
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

/* ─── Icons ──────────────────────────────────────────── */
const IcoMap = () => (
  <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6.5 8.5 4l7 2.5L21 4v13.5L15.5 20l-7-2.5L3 20z"/>
    <path d="M8.5 4v13.5M15.5 6.5V20"/>
  </svg>
);
const IcoClock = () => (
  <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>
  </svg>
);
const IcoCalendar = () => (
  <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
  </svg>
);
const IcoUsers = () => (
  <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const IcoUser = () => (
  <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="7" r="4"/><path d="M4 21v-1a7 7 0 0 1 14 0v1"/>
  </svg>
);
const IcoPhone = () => (
  <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.19h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.87a16 16 0 0 0 6 6l.95-1.95a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const IcoNote = () => (
  <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
  </svg>
);

/* ─── Main component ──────────────────────────────────── */
export function TourBookingForm({ tour }: { tour: Tour }) {
  const { locale } = useI18n();
  const loc = locale as "fr" | "en" | "ar" | "it";
  const tourTitle    = tour.title[loc];
  const tourDuration = tour.days[loc];

  const [date,       setDate]   = useState("");
  const [passengers, setPass]   = useState("2");
  const [name,       setName]   = useState("");
  const [phone,      setPhone]  = useState("");
  const [notes,      setNotes]  = useState("");
  const [errors,     setErrors] = useState<{ name?: string; date?: string }>({});

  const passengerOptions = Array.from({ length: 15 }, (_, i) => ({
    value: String(i + 1),
    label: String(i + 1),
  }));

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs: { name?: string; date?: string } = {};
    if (!name.trim()) errs.name = l("errName", locale);
    if (!date)        errs.date = l("errDate", locale);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});

    const lines = [
      `*${l("title", locale)} — Tour Me Morocco*`,
      ``,
      `🗺 ${tourTitle}`,
      `⏱ ${l("duration", locale)} : ${tourDuration}`,
      `📅 ${l("startDate", locale)} : ${fmtDate(date, locale)}`,
      `👥 ${l("passengers", locale)} : ${passengers}`,
      ``,
      `👤 ${l("name", locale)} : ${name}`,
      phone ? `📞 ${l("phone", locale)} : ${phone}` : "",
      notes ? `📝 ${notes}` : "",
    ].filter(Boolean);

    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank");
  }

  return (
    <div className="rounded-2xl border border-[#e8e3da] overflow-hidden shadow-[0_4px_24px_rgba(6,47,53,.10)]">

      {/* Header */}
      <div className="bg-[#062f35] bg-zellige px-5 py-4">
        <p className="text-[#f5b63f] text-[10px] font-bold uppercase tracking-[0.15em] mb-1">
          {l("privateTour", locale)}
        </p>
        <p className="text-white font-playfair text-[15px] leading-snug line-clamp-2">{tourTitle}</p>
      </div>

      {/* Tour info strip */}
      <div className="bg-[#fafaf7] border-b border-[#e8e3da] px-5 py-3.5 flex items-center gap-4">
        <div className="flex items-center gap-2 text-[12px] text-[#5a7578]">
          <span className="w-[22px] h-[22px] rounded-full bg-[#fff5df] text-[#b77c0d] flex items-center justify-center flex-shrink-0">
            <IcoClock />
          </span>
          <span>{tourDuration}</span>
        </div>
        <div className="flex items-center gap-2 text-[12px] text-[#5a7578]">
          <span className="w-[22px] h-[22px] rounded-full bg-[#fff5df] text-[#b77c0d] flex items-center justify-center flex-shrink-0">
            <IcoMap />
          </span>
          <span>{l("privateTour", locale)}</span>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="px-5 py-5 space-y-3.5 bg-white">

        {/* Tour name — locked */}
        <div>
          <label className={lbl}>{l("tour", locale)}</label>
          <FieldInput icon={<IcoMap />} placeholder={tourTitle} value={tourTitle} readOnly />
        </div>

        {/* Date + Passengers */}
        <div className="grid grid-cols-2 gap-2.5">
          <div>
            <label className={lbl}>{l("startDate", locale)}</label>
            <FieldDatePicker
              icon={<IcoCalendar />}
              value={date}
              onChange={setDate}
              hasError={!!errors.date}
            />
            {errors.date && <p className="mt-1 text-[10.5px] text-red-500">{errors.date}</p>}
          </div>
          <div>
            <label className={lbl}>{l("passengers", locale)}</label>
            <FieldSelect
              icon={<IcoUsers />}
              placeholder="2"
              value={passengers}
              onChange={setPass}
              options={passengerOptions}
            />
          </div>
        </div>

        {/* Name */}
        <div>
          <label className={lbl}>{l("name", locale)}</label>
          <FieldInput
            icon={<IcoUser />}
            placeholder={l("namePh", locale)}
            value={name}
            onChange={e => setName(e.target.value)}
            autoComplete="name"
            hasError={!!errors.name}
          />
          {errors.name && <p className="mt-1 text-[10.5px] text-red-500">{errors.name}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className={lbl}>{l("phone", locale)}</label>
          <FieldInput
            icon={<IcoPhone />}
            type="tel"
            placeholder="+212 6 XX XX XX XX"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            autoComplete="tel"
          />
        </div>

        {/* Notes */}
        <div>
          <label className={lbl}>
            {l("notes", locale)}{" "}
            <span className="normal-case tracking-normal font-normal text-[#a8b8b9]">({l("notesOpt", locale)})</span>
          </label>
          <div className="rounded-lg border border-[#e4e9e5] bg-white hover:border-[#c9b898] transition-colors focus-within:border-[#f5b63f] focus-within:shadow-[0_0_0_3px_rgba(245,182,63,.13)] p-2.5">
            <textarea
              value={notes}
              onChange={e => setNotes(e.target.value)}
              rows={3}
              placeholder={l("notesPh", locale)}
              className="w-full bg-transparent border-none outline-none resize-none text-[12.5px] font-medium text-[#0d2f32] placeholder:text-[#adbfc0]"
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 h-12 rounded-xl
            bg-gradient-to-b from-[#ffc84d] to-[#f5a623]
            hover:from-[#ffd166] hover:to-[#f5b235]
            text-[#17342f] font-bold text-[12.5px] cursor-pointer
            transition-all duration-200 shadow-[0_4px_18px_rgba(218,151,24,.38)]
            hover:shadow-[0_6px_24px_rgba(218,151,24,.48)] hover:-translate-y-[1px] active:scale-[.97]"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12.004 0C5.373 0 0 5.373 0 12.004c0 2.117.555 4.103 1.523 5.832L.057 23.944l6.303-1.654A11.944 11.944 0 0 0 12.004 24C18.627 24 24 18.627 24 12.004 24 5.373 18.627 0 12.004 0zm0 21.902a9.896 9.896 0 0 1-5.042-1.376l-.36-.214-3.737.98.998-3.648-.235-.374a9.862 9.862 0 0 1-1.514-5.27c0-5.455 4.438-9.893 9.89-9.893 5.453 0 9.891 4.438 9.891 9.893 0 5.453-4.438 9.902-9.891 9.902z"/>
          </svg>
          {l("submit", locale)}
        </button>

      </form>
    </div>
  );
}
