"use client";
import { useState } from "react";

function IconChevron({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>
      <path d="M6 9l6 6 6-6"/>
    </svg>
  );
}

export function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#e4eaea] last:border-0">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between gap-4 py-4 text-left cursor-pointer"
      >
        <span className="text-[13.5px] font-semibold text-[#062f35]">{question}</span>
        <span className="flex-shrink-0 text-[#a87627]"><IconChevron open={open} /></span>
      </button>
      {open && (
        <p className="pb-4 text-[13px] text-[#5a7578] leading-relaxed">
          {answer}
        </p>
      )}
    </div>
  );
}
