"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollReset() {
  const pathname = usePathname();
  useEffect(() => {
    // scroll to top after the exit animation finishes (180ms)
    const t = setTimeout(() => window.scrollTo({ top: 0, behavior: "instant" }), 200);
    return () => clearTimeout(t);
  }, [pathname]);
  return null;
}
