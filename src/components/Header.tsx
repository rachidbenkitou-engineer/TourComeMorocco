"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import type { Lang } from "@/translations";

const SECTIONS = [
  { href: "/#about", key: "about" as const, section: "about" },
  { href: "/#services", key: "services" as const, section: "services" },
  { href: "/#portfolio", key: "portfolio" as const, section: "portfolio" },
  { href: "/#team", key: "team" as const, section: "team" },
  { href: "/blog", key: "blog" as const, section: null },
];

const LANGUAGES = [
  { code: "EN", label: "English", flag: "🇬🇧" },
  { code: "FR", label: "Français", flag: "🇫🇷" },
  { code: "AR", label: "العربية", flag: "🇲🇦" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const mobileLangRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { lang, setLang, tr } = useLanguage();

  useEffect(() => {
    if (pathname !== "/") return;
    const sections = ["about", "services", "portfolio", "team"];
    const observers: IntersectionObserver[] = [];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.3 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    const onScroll = () => { if (window.scrollY < 100) setActiveSection(null); };
    window.addEventListener("scroll", onScroll);
    return () => { observers.forEach((o) => o.disconnect()); window.removeEventListener("scroll", onScroll); };
  }, [pathname]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
      if (mobileLangRef.current && !mobileLangRef.current.contains(e.target as Node)) setMobileLangOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isActive = (link: typeof SECTIONS[0]) => {
    if (link.section) return activeSection === link.section;
    if (link.href === "/") return pathname === "/" && activeSection === null;
    return pathname === link.href;
  };

  return (
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-between" style={{ position: "relative" }}>

        {/* Logo */}
        <div style={{ width: "200px", flexShrink: 0 }}>
          <Link href="/">
            <Image src="/assets/img/logo.png" alt="Tuplify Technology" width={707} height={353} style={{ height: "100px", width: "auto", objectFit: "contain" }} />
          </Link>
        </div>

        {/* Nav */}
        <nav id="navbar" className={`navbar${mobileOpen ? " navbar-mobile" : ""}`}>
          <ul>
            {SECTIONS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={isActive(link) ? "active" : ""} onClick={() => setMobileOpen(false)}>
                  {tr.nav[link.key]}
                </Link>
              </li>
            ))}

            {/* Language switcher — mobile panel dropdown */}
            {mobileOpen && (
              <li style={{ borderBottom: "none", padding: "8px 4px 4px" }}>
                <div ref={mobileLangRef} style={{ position: "relative" }}>
                  <button
                    type="button"
                    onClick={() => setMobileLangOpen((v) => !v)}
                    style={{
                      display: "flex", alignItems: "center", gap: "8px", width: "100%",
                      background: "transparent", border: "1.5px solid #dce4cc",
                      borderRadius: "50px", padding: "9px 16px", cursor: "pointer",
                      fontSize: "14px", fontWeight: 600, color: "#3c4133",
                    }}
                  >
                    <i className="bi bi-globe2" style={{ fontSize: "15px", color: "#94c045" }} />
                    {LANGUAGES.find((l) => l.code === lang)?.flag} {lang}
                    <i className="bi bi-chevron-down" style={{ fontSize: "11px", marginLeft: "auto" }} />
                  </button>
                  {mobileLangOpen && (
                    <div style={{
                      position: "absolute", bottom: "calc(100% + 6px)", left: 0, right: 0,
                      background: "#fff", borderRadius: "12px",
                      boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                      zIndex: 10, border: "1px solid #f0f2ea", overflow: "hidden",
                    }}>
                      {LANGUAGES.map((l) => (
                        <button key={l.code} type="button"
                          onClick={() => { setLang(l.code as Lang); setMobileLangOpen(false); }}
                          style={{
                            display: "flex", alignItems: "center", gap: "10px",
                            width: "100%", padding: "11px 16px",
                            background: lang === l.code ? "rgba(148,192,69,0.1)" : "transparent",
                            border: "none", cursor: "pointer", fontSize: "14px", fontWeight: 600,
                            color: lang === l.code ? "#94c045" : "#3c4133", textAlign: "left",
                          }}
                        >
                          <span style={{ fontSize: "17px" }}>{l.flag}</span>
                          {l.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            )}
          </ul>

          {/* Contact mobile — inside nav, before hamburger */}
          <button
            type="button"
            className="d-flex d-lg-none align-items-center justify-content-center"
            onClick={() => window.dispatchEvent(new CustomEvent("open-contact-modal"))}
            style={{
              background: "#94c045", border: "none", borderRadius: "50%",
              width: "36px", height: "36px", fontSize: "16px",
              color: "#fff", cursor: "pointer", marginRight: "10px", flexShrink: 0,
            }}
          >
            <i className="bi bi-chat-dots-fill" />
          </button>

          <i className={`bi mobile-nav-toggle ${mobileOpen ? "bi-x" : "bi-list"}`} onClick={() => setMobileOpen((v) => !v)} />
        </nav>

        {/* Right side desktop: lang + contact */}
        <div className="d-none d-lg-flex align-items-center gap-2" style={{ flexShrink: 0 }}>
          {/* Language switcher desktop */}
          <div ref={langRef} style={{ position: "relative" }}>
            <button
              type="button"
              onClick={() => setLangOpen((v) => !v)}
              style={{
                display: "flex", alignItems: "center", gap: "6px",
                background: "transparent", border: "1.5px solid #dce4cc",
                borderRadius: "50px", padding: "6px 14px", cursor: "pointer",
                fontSize: "13px", fontWeight: 600, color: "#3c4133",
              }}
            >
              <i className="bi bi-globe2" style={{ fontSize: "14px", color: "#94c045" }} />
              {lang}
              <i className="bi bi-chevron-down" style={{ fontSize: "10px" }} />
            </button>
            {langOpen && (
              <div style={{
                position: "absolute", top: "calc(100% + 8px)", right: 0,
                background: "#fff", borderRadius: "12px", minWidth: "140px",
                boxShadow: "0 8px 30px rgba(0,0,0,0.12)", overflow: "hidden",
                zIndex: 1000, border: "1px solid #f0f2ea",
              }}>
                {LANGUAGES.map((l) => (
                  <button key={l.code} type="button"
                    onClick={() => { setLang(l.code as Lang); setLangOpen(false); }}
                    style={{
                      display: "flex", alignItems: "center", gap: "10px",
                      width: "100%", padding: "10px 16px",
                      background: lang === l.code ? "rgba(148,192,69,0.1)" : "transparent",
                      border: "none", cursor: "pointer", fontSize: "13px", fontWeight: 600,
                      color: lang === l.code ? "#94c045" : "#3c4133", textAlign: "left",
                    }}
                  >
                    <span style={{ fontSize: "16px" }}>{l.flag}</span>
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Contact desktop */}
          <button type="button" className="getstarted" style={{ cursor: "pointer", border: "none", display: "flex", alignItems: "center", gap: "6px" }}
            onClick={() => window.dispatchEvent(new CustomEvent("open-contact-modal"))}>
            <i className="bi bi-chat-dots-fill" style={{ fontSize: "14px" }} />
            {tr.nav.contact}
          </button>
        </div>

      </div>
    </header>
  );
}
