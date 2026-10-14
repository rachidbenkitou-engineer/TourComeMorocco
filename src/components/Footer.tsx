"use client";
import Link from "next/link";
import { Facebook, Instagram, Youtube, Music } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Accueil",      href: "#top"         },
  { label: "Destinations", href: "#destinations" },
  { label: "À propos",     href: "#about"        },
  { label: "Avis",         href: "#avis"         },
  { label: "Contact",      href: "#contact"      },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [msg, setMsg]     = useState("");

  function handleNewsletter(e: React.FormEvent) {
    e.preventDefault();
    if (email) {
      setMsg("Merci ! Vous êtes inscrit à notre newsletter.");
      setEmail("");
    }
  }

  return (
    <footer id="contact" className="bg-deep text-white px-[3%] pt-5 pb-0">
      <div className="grid grid-cols-1 md:grid-cols-[1.05fr_1.5fr_.8fr_1fr] items-center gap-5 pb-4">

        {/* Brand */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <svg width="32" height="36" viewBox="0 0 38 42" fill="none" className="flex-shrink-0">
            <path d="M2 41L2 19C2 9.06 9.61 1 19 1C28.39 1 36 9.06 36 19L36 41"
              stroke="#f5b63f" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M8 41L8 21C8 13.8 13 8 19 8C25 8 30 13.8 30 21L30 41"
              stroke="#f5b63f" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
            <path d="M19 11L21.3 17.7L28.5 20L21.3 22.3L19 29L16.7 22.3L9.5 20L16.7 17.7Z"
              fill="#f5b63f"/>
          </svg>
          <span className="flex flex-col leading-none">
            <strong className="font-serif text-[20px] text-[#fff0cb] tracking-[-0.5px]">Tour Me Morocco</strong>
            <small className="text-[8px] tracking-[0.22px] text-white/40 mt-[3px]">Explorez · Voyagez · Découvrez</small>
          </span>
        </div>

        {/* Nav */}
        <nav className="flex flex-wrap gap-x-3 gap-y-1 items-center justify-center text-[9px] font-medium">
          {navLinks.map((l, i) => (
            <span key={l.href} className="flex items-center gap-3">
              {i > 0 && <span className="text-[#789095]">|</span>}
              <Link href={l.href} className="text-white/70 hover:text-white transition-colors whitespace-nowrap">
                {l.label}
              </Link>
            </span>
          ))}
        </nav>

        {/* Socials */}
        <div className="flex gap-4 justify-center text-base font-bold">
          {[
            { Icon: Facebook,  href: "#", label: "Facebook"  },
            { Icon: Instagram, href: "#", label: "Instagram" },
            { Icon: Youtube,   href: "#", label: "YouTube"   },
            { Icon: Music,     href: "#", label: "TikTok"    },
          ].map(({ Icon, href, label }) => (
            <a key={label} href={href} aria-label={label} className="hover:text-gold transition-colors">
              <Icon size={16} />
            </a>
          ))}
        </div>

        {/* Newsletter */}
        <form id="newsletter" onSubmit={handleNewsletter}>
          <label htmlFor="nl-email" className="block text-[9px] font-semibold mb-1.5 text-white/80">
            Inscrivez-vous à notre newsletter
          </label>
          <div className="flex bg-white rounded-[6px] p-[3px]">
            <input
              id="nl-email"
              type="email"
              placeholder="Votre adresse email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="border-0 outline-none min-w-0 w-full px-2 py-1 text-[#333] text-[10px] bg-transparent"
            />
            <button
              type="submit"
              className="border-0 rounded-[4px] bg-gold w-7 flex-shrink-0 flex items-center justify-center text-[#182c2c] font-bold hover:bg-gold-dark transition-colors cursor-pointer"
              aria-label="S'inscrire"
            >
              →
            </button>
          </div>
          {msg && <small className="block mt-1 text-[9px] text-[#f5c66d]">{msg}</small>}
        </form>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#426168] flex flex-col md:flex-row justify-between items-center py-2.5 gap-2 text-[9px] text-white/50">
        <span>© 2025 Tour Me Morocco. Tous droits réservés.</span>
        <div className="flex gap-3">
          {["Conditions générales","Politique de confidentialité","FAQ"].map((l, i) => (
            <span key={l} className="flex items-center gap-3">
              {i > 0 && <span className="text-[#789095]">|</span>}
              <Link href="#contact" className="hover:text-white/80 transition-colors">{l}</Link>
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
