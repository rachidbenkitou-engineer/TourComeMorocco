"use client";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

const WA_NUMBER = "212709274114";
const YEAR = new Date().getFullYear();
const WA_URL = `https://wa.me/${WA_NUMBER}`;
const IG_URL = "https://www.instagram.com/";

const EXCURSION_SLUGS = [
  "vallee-ourika-atlas",
  "cascades-ouzoud",
  "desert-agafay-coucher-soleil",
  "imlil-toubkal-atlas",
];

const TOUR_SLUGS = [
  "marrakech-essaouira-day-trip",
  "chefchaouen-day-trip",
  "fes-chefchaouen-tour",
  "9-day-morocco-sahara-fes-chefchaouen",
];

function WhatsAppIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.103 1.514 5.831L0 24l6.336-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.792 9.792 0 01-5.012-1.383l-.36-.214-3.713.975.989-3.617-.234-.37A9.787 9.787 0 012.182 12C2.182 6.578 6.578 2.182 12 2.182c5.422 0 9.818 4.396 9.818 9.818 0 5.422-4.396 9.818-9.818 9.818zm5.39-7.373c-.293-.146-1.74-.858-2.01-.956-.269-.098-.465-.146-.661.147-.196.293-.759.956-.931 1.152-.172.196-.343.22-.636.073-.293-.146-1.24-.457-2.363-1.458-.873-.78-1.462-1.743-1.634-2.037-.171-.293-.018-.451.129-.597.132-.131.293-.342.44-.513.146-.17.195-.293.293-.49.098-.195.049-.366-.024-.513-.073-.146-.661-1.595-.906-2.183-.24-.573-.482-.495-.661-.505-.171-.008-.366-.01-.562-.01s-.513.073-.781.366c-.269.293-1.027 1.004-1.027 2.45 0 1.447 1.053 2.844 1.2 3.04.146.195 2.073 3.165 5.022 4.437.702.303 1.25.484 1.677.619.704.224 1.344.193 1.85.117.565-.084 1.74-.711 1.986-1.399.245-.687.245-1.276.171-1.399-.073-.122-.269-.195-.562-.342z"/>
    </svg>
  );
}

function FooterSection({ title, links }: {
  title: string;
  links: { href: string; label: string; external?: boolean }[];
}) {
  return (
    <div>
      <h3 className="text-[10.5px] font-bold tracking-[0.16em] uppercase text-[#f5b63f] mb-4">
        {title}
      </h3>
      <ul className="space-y-2.5">
        {links.map(l => (
          <li key={l.href + l.label}>
            {l.external ? (
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-white/60 hover:text-white transition-colors leading-snug"
              >
                {l.label}
              </a>
            ) : (
              <Link
                href={l.href}
                className="text-[13px] text-white/60 hover:text-white transition-colors leading-snug"
              >
                {l.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const { t } = useI18n();

  const transferLinks = t.footer.transferLinks.map(label => ({
    href: "/transfers",
    label,
  }));

  const excursionLinks = [
    ...t.footer.excursionLinks.map((label, i) => ({
      href: `/excursions/${EXCURSION_SLUGS[i]}`,
      label,
    })),
    { href: "/excursions", label: t.footer.viewAll },
  ];

  const tourLinks = [
    ...t.footer.tourLinks.map((label, i) => ({
      href: `/tours/${TOUR_SLUGS[i]}`,
      label,
    })),
    { href: "/tours", label: t.footer.viewAll },
  ];

  const helpLinks = [
    { href: "/fleet",    label: t.footer.helpLinks.fleet   },
    { href: "/gallery",  label: t.footer.helpLinks.gallery },
    { href: "https://wa.me/212709274114", label: t.footer.helpLinks.contact, external: true },
    { href: "https://wa.me/212709274114", label: t.footer.helpLinks.bookNow, external: true },
  ];

  return (
    <footer id="contact" className="bg-[#062f35] bg-zellige text-white">
      <div className="max-w-[1280px] mx-auto px-[clamp(16px,4.5vw,56px)]">

        {/* ── Top: brand + socials ── */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 py-12 border-b border-white/10">
          <div>
            <Link href="/#top" className="flex items-center gap-3 mb-3">
              <svg width="30" height="34" viewBox="0 0 38 42" fill="none" className="flex-shrink-0">
                <path d="M2 41L2 19C2 9.06 9.61 1 19 1C28.39 1 36 9.06 36 19L36 41"
                  stroke="#f5b63f" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M8 41L8 21C8 13.8 13 8 19 8C25 8 30 13.8 30 21L30 41"
                  stroke="#f5b63f" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
                <path d="M19 11L21.3 17.7L28.5 20L21.3 22.3L19 29L16.7 22.3L9.5 20L16.7 17.7Z"
                  fill="#f5b63f"/>
              </svg>
              <span className="font-serif text-[22px] text-[#fff0cb] tracking-[-0.4px]">
                Transfer Maroc
              </span>
            </Link>
            <p className="text-[13px] text-white/50 max-w-[380px] leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          <div className="flex gap-3 flex-shrink-0">
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/8 hover:bg-white/14 border border-white/15 text-white text-[12px] font-semibold px-4 py-2.5 rounded-[20px] transition-colors"
            >
              <Instagram size={14} />
              {t.footer.instagram}
            </a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-[12px] font-semibold px-4 py-2.5 rounded-[20px] transition-colors"
            >
              <WhatsAppIcon size={14} />
              {t.footer.whatsapp}
            </a>
          </div>
        </div>

        {/* ── 4-column grid ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 py-12">
          <FooterSection title={t.footer.popularTransfers} links={transferLinks} />
          <FooterSection title={t.footer.excursionsTitle}  links={excursionLinks} />
          <FooterSection title={t.footer.toursTitle}       links={tourLinks} />
          <FooterSection title={t.footer.helpTitle}        links={helpLinks} />
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-white/10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-white/40">
          <span>© {YEAR} {t.footer.rights}</span>
          <span dir="ltr">+212 709 274 114 · {t.footer.available}</span>
        </div>
      </div>
    </footer>
  );
}
