"use client";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

type Mode = "circuit" | "transfert" | "excursion";

const ALL_CITIES = [
  "Casablanca","Marrakech","Fès","Rabat","Tanger","Agadir",
  "Essaouira","Meknès","Chefchaouen","Ouarzazate","Merzouga",
  "Tétouan","Asilah","Ifrane","Azrou","Midelt","El Jadida",
  "Safi","Beni Mellal","Oualidia","Taroudant","Taghazout",
  "Kénitra","Aït Ben Haddou","Dades","Todra Gorge","Erfoud",
  "Zagora","Errachidia","Mohammedia","Imlil","Agafay",
  "Ourika Valley","Ouzoud Waterfalls",
];

const CIRCUIT_LENGTHS = ["1 à 3 jours", "4 à 7 jours", "8 jours et +"];
const EXCURSION_CITIES = ["Marrakech","Fès","Casablanca","Tanger","Agadir"];

/* ─── SVG icons ─────────────────────────────────── */
const IconCircuit  = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6.5 8.5 4l7 2.5L21 4v13.5L15.5 20l-7-2.5L3 20z"/>
    <path d="M8.5 4v13.5M15.5 6.5V20"/>
  </svg>
);
const IconTransfert = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="m21 3-7.2 18-3.4-7.4L3 10.2z"/>
    <path d="M21 3 10.4 13.6"/>
  </svg>
);
const IconExcursion = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
const IconSearch = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="10.8" cy="10.8" r="6.8"/>
    <path d="m16 16 4.5 4.5"/>
  </svg>
);
const IconChevron = ({ open }: { open: boolean }) => (
  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    className={cn("flex-shrink-0 text-[#adbfc0] transition-transform duration-200", open && "rotate-180")}>
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

const TABS: { id: Mode; Icon: () => React.ReactElement; label: string; sub: string }[] = [
  { id: "circuit",   Icon: IconCircuit,   label: "Circuit",   sub: "De ville en ville"    },
  { id: "transfert", Icon: IconTransfert, label: "Transfert", sub: "Un trajet, simplement" },
  { id: "excursion", Icon: IconExcursion, label: "Excursion", sub: "Une journée d'évasion" },
];

const BUTTON_LABEL: Record<Mode, string> = {
  circuit:   "Voir les circuits",
  transfert: "Voir les prix",
  excursion: "Voir les excursions",
};

/* ─── Custom dropdown Field ──────────────────────── */
function Field({
  IconComponent, placeholder, value, onValue, options,
}: {
  IconComponent: () => React.ReactElement;
  placeholder: string;
  value: string;
  onValue: (v: string) => void;
  options: string[];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        className={cn(
          "flex items-center gap-2 h-[38px] px-2.5 rounded-lg bg-white border w-full cursor-pointer transition-all duration-150",
          open
            ? "border-[#f5b63f] shadow-[0_0_0_3px_rgba(245,182,63,.13)]"
            : "border-[#e4e9e5] hover:border-[#c9b898]",
        )}
      >
        <span className={cn(
          "w-[22px] h-[22px] rounded-full flex items-center justify-center flex-shrink-0 transition-colors",
          open ? "bg-[#fff0cb] text-[#b87a06]" : "bg-[#fff5df] text-[#b77c0d]",
        )}>
          <IconComponent />
        </span>
        <span className={cn(
          "flex-1 text-left text-[12.5px] font-medium leading-none truncate",
          value ? "text-[#0d2f32]" : "text-[#adbfc0]",
        )}>
          {value || placeholder}
        </span>
        <IconChevron open={open} />
      </button>

      {open && (
        <div className="absolute top-[calc(100%+4px)] left-0 right-0 bg-white border border-[#e8e3da] rounded-xl shadow-[0_8px_28px_rgba(6,47,53,.14)] z-[9999] max-h-[220px] overflow-y-auto py-1.5">
          {options.map(opt => (
            <button
              key={opt}
              type="button"
              onClick={() => { onValue(opt); setOpen(false); }}
              className={cn(
                "w-full text-left px-4 py-2 text-[13px] leading-snug transition-colors",
                value === opt
                  ? "text-[#b87a06] font-semibold bg-[#fff8f0]"
                  : "text-[#1a3a3c] hover:bg-[#f7f2ea]",
              )}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── SearchBar ──────────────────────────────────── */
export function SearchBar() {
  const [mode,    setMode]   = useState<Mode>("circuit");
  const [depart,  setDepart] = useState("");
  const [arrivee, setArrivee] = useState("");

  function reset() { setDepart(""); setArrivee(""); }

  return (
    <div className="rounded-t-2xl shadow-[0_16px_40px_rgba(5,40,42,.22)] border border-white/60 bg-[#07383b]">

      {/* ── Tab bar ── */}
      <div className="grid grid-cols-3 gap-1 p-1.5 bg-[#07383b] rounded-t-[15px] overflow-hidden">
        {TABS.map(({ id, Icon, label, sub }) => {
          const active = mode === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => { setMode(id); reset(); }}
              className={cn(
                "relative flex items-center gap-2 min-h-[40px] px-2 py-1.5 rounded-[8px] border border-transparent",
                "text-left cursor-pointer transition-all duration-200",
                active
                  ? "bg-[#fffdf8] text-[#07383b] shadow-[0_4px_10px_rgba(0,0,0,.10)]"
                  : "text-white/70 hover:bg-white/7 hover:text-white",
              )}
            >
              <span className={cn(
                "flex-shrink-0 w-[24px] h-[24px] rounded-[7px] grid place-items-center transition-colors",
                active ? "bg-[#fff0cb] text-[#b87a06]" : "bg-white/10 text-current",
              )}>
                <Icon />
              </span>
              <span className="flex flex-col gap-0.5 min-w-0">
                <strong className="text-[11px] font-bold leading-none">{label}</strong>
                <small className={cn("text-[9px] leading-none", active ? "text-[#819294]" : "opacity-60")}>
                  {sub}
                </small>
              </span>
              {active && (
                <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#f7b735]" />
              )}
            </button>
          );
        })}
      </div>

      {/* ── Formulaire ── */}
      <form
        onSubmit={e => e.preventDefault()}
        className={cn(
          "grid gap-1.5 p-2 pt-2 bg-[#fffdf8]",
          mode === "transfert"
            ? "grid-cols-1 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto]"
            : "grid-cols-1 sm:grid-cols-[minmax(0,1fr)_auto]",
        )}
      >
        {mode === "circuit" && (
          <Field
            IconComponent={IconCalendar}
            placeholder="Toutes durées"
            value={depart}
            onValue={setDepart}
            options={CIRCUIT_LENGTHS}
          />
        )}

        {mode === "transfert" && (
          <>
            <Field
              IconComponent={IconPin}
              placeholder="Ville de départ"
              value={depart}
              onValue={setDepart}
              options={ALL_CITIES}
            />
            <Field
              IconComponent={IconDest}
              placeholder="Destination"
              value={arrivee}
              onValue={setArrivee}
              options={ALL_CITIES.filter(c => c !== depart)}
            />
          </>
        )}

        {mode === "excursion" && (
          <Field
            IconComponent={IconDest}
            placeholder="Toutes les villes"
            value={depart}
            onValue={setDepart}
            options={EXCURSION_CITIES}
          />
        )}

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-1.5 h-[38px] px-4 rounded-lg bg-[#f7b735] hover:bg-[#ffc64e] active:scale-[.98] text-[#173638] font-bold text-[11px] cursor-pointer transition-all duration-200 shadow-[0_4px_12px_rgba(218,151,24,.22)] hover:shadow-[0_6px_16px_rgba(218,151,24,.32)] hover:-translate-y-[1px] whitespace-nowrap sm:col-auto col-span-full"
        >
          <IconSearch />
          {BUTTON_LABEL[mode]}
        </button>
      </form>

    </div>
  );
}
