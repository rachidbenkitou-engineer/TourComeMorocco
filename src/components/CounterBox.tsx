"use client";
import { useEffect, useRef, useState } from "react";

interface CounterBoxProps {
  icon: string;
  end: number;
  label: string;
  suffix?: string;
  className?: string;
}

export default function CounterBox({ icon, end, label, suffix = "", className = "" }: CounterBoxProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 2000;
        const steps = 60;
        const increment = end / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);
      }
    }, { threshold: 0.5 });

    observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className={`count-box${className ? ` ${className}` : ""}`}>
      <i className={icon} />
      <span>{count}{suffix}</span>
      <p>{label}</p>
    </div>
  );
}
