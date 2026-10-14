"use client";
import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 214, suffix: "+", label: "Transfer Routes"  },
  { value: 19,  suffix: "+", label: "Private Tours"    },
  { value: 22,  suffix: "+", label: "Excursions"       },
  { value: 42,  suffix: "+", label: "Destinations"     },
];

function useCountUp(target: number, duration = 1800, active = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let raf: number;
    let start: number | null = null;

    const tick = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);

  return count;
}

function StatItem({ value, suffix, label, active }: { value: number; suffix: string; label: string; active: boolean }) {
  const count = useCountUp(value, 1800, active);
  return (
    <div className="flex flex-col items-center text-center px-4 py-2">
      <span
        className="font-serif font-bold text-[#f5b63f] leading-none tabular-nums"
        style={{ fontSize: "clamp(44px,5vw,72px)" }}
      >
        {count}{suffix}
      </span>
      <span className="text-white/55 text-[11px] font-semibold uppercase tracking-[0.18em] mt-2">
        {label}
      </span>
    </div>
  );
}

export function Stats() {
  const ref     = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-[#062f35]">
      <div className="max-w-[1280px] mx-auto px-[clamp(16px,4.5vw,56px)] py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 divide-x-0 md:divide-x md:divide-white/10">
          {STATS.map(s => (
            <StatItem key={s.label} value={s.value} suffix={s.suffix} label={s.label} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
