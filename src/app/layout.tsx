import type { Metadata } from "next";
import { DM_Sans, Playfair_Display, Caveat, Geist, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ScrollReset } from "@/components/ScrollReset";
import { BookingProvider } from "@/components/BookingModal";
import { I18nProvider } from "@/i18n/I18nProvider";
import { PageTransition } from "@/components/PageTransition";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

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
  title: "Morocco Trip Mate — Explorez, Voyagez, Découvrez",
  description:
    "Des expériences uniques, des destinations de rêve et un accompagnement sur mesure pour découvrir le Maroc de façon inoubliable.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={cn(dmSans.variable, playfair.variable, caveat.variable, outfit.variable, "font-sans", geist.variable)}>
      <body className="font-sans antialiased">
        <ScrollReset />
        <I18nProvider>
          <BookingProvider>
            <Navbar />
            <PageTransition>
              {children}
            </PageTransition>
            <Footer />
            <WhatsAppFloat />
          </BookingProvider>
        </I18nProvider>


      </body>
    </html>
  );
}
