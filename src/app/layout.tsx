import type { Metadata } from "next";
import { DM_Sans, Playfair_Display, Caveat, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ScrollReset } from "@/components/ScrollReset";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
  display: "swap",
});
const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tour Me Morocco — Explorez, Voyagez, Découvrez",
  description:
    "Des expériences uniques, des destinations de rêve et un accompagnement sur mesure pour découvrir le Maroc de façon inoubliable.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={cn(dmSans.variable, playfair.variable, caveat.variable, "font-sans", geist.variable)}>
      <body className="font-sans antialiased">
        <ScrollReset />
        {children}

        {/* WhatsApp fixe mobile uniquement */}
        <a
          href="https://wa.me/212612345678"
          target="_blank"
          rel="noopener noreferrer"
          className="sm:hidden fixed bottom-5 right-5 z-50 w-14 h-14 flex items-center justify-center bg-[#25D366] text-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,.3)]"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.103 1.514 5.831L0 24l6.336-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.792 9.792 0 01-5.012-1.383l-.36-.214-3.713.975.989-3.617-.234-.37A9.787 9.787 0 012.182 12C2.182 6.578 6.578 2.182 12 2.182c5.422 0 9.818 4.396 9.818 9.818 0 5.422-4.396 9.818-9.818 9.818zm5.39-7.373c-.293-.146-1.74-.858-2.01-.956-.269-.098-.465-.146-.661.147-.196.293-.759.956-.931 1.152-.172.196-.343.22-.636.073-.293-.146-1.24-.457-2.363-1.458-.873-.78-1.462-1.743-1.634-2.037-.171-.293-.018-.451.129-.597.132-.131.293-.342.44-.513.146-.17.195-.293.293-.49.098-.195.049-.366-.024-.513-.073-.146-.661-1.595-.906-2.183-.24-.573-.482-.495-.661-.505-.171-.008-.366-.01-.562-.01s-.513.073-.781.366c-.269.293-1.027 1.004-1.027 2.45 0 1.447 1.053 2.844 1.2 3.04.146.195 2.073 3.165 5.022 4.437.702.303 1.25.484 1.677.619.704.224 1.344.193 1.85.117.565-.084 1.74-.711 1.986-1.399.245-.687.245-1.276.171-1.399-.073-.122-.269-.195-.562-.342z"/>
          </svg>
        </a>
      </body>
    </html>
  );
}
