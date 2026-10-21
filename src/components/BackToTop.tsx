"use client";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const onScroll = () => setActive(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <a
      href="#"
      className={`back-to-top d-flex align-items-center justify-content-center${active ? " active" : ""}`}
      onClick={(e) => { e.preventDefault(); scrollToTop(); }}
    >
      <i className="bi bi-arrow-up-short" />
    </a>
  );
}
