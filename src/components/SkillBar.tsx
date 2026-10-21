"use client";
import { useEffect, useRef, useState } from "react";

interface SkillBarProps {
  label: string;
  value: number;
}

export default function SkillBar({ label, value }: SkillBarProps) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        setTimeout(() => setWidth(value), 100);
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="progress">
      <span className="skill">
        {label} <i className="val">{value}%</i>
      </span>
      <div className="progress-bar-wrap">
        <div
          className="progress-bar"
          style={{ width: `${width}%`, transition: "width 1s ease-in-out" }}
        />
      </div>
    </div>
  );
}
