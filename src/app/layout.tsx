import type { Metadata } from "next";
import { DM_Sans, Playfair_Display, Caveat, Geist, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist    = Geist({ subsets: ["latin"], variable: "--font-sans" });
const outfit   = Outfit({ subsets: ["latin"], variable: "--font-outfit", weight: ["300","400","500","600","700","800"], display: "swap" });
const dmSans   = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", style: ["normal","italic"], display: "swap" });
const caveat   = Caveat({ subsets: ["latin"], variable: "--font-caveat", display: "swap" });

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tourmemorocco.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Transfer Maroc — Chauffeur Privé & Transferts depuis Marrakech",
    template: "%s | Transfer Maroc",
  },
  description:
    "Transferts privés, circuits et excursions depuis Marrakech avec chauffeur privé. Prix fixes, sans compteur. Aéroport, villes, désert & côte. Réservation WhatsApp en 1h.",
  openGraph: {
    type: "website",
    siteName: "Transfer Maroc",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Transfer Maroc — Chauffeur Privé Marrakech" }],
  },
  twitter: { card: "summary_large_image", images: ["/og-image.jpg"] },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={cn(dmSans.variable, playfair.variable, caveat.variable, outfit.variable, "font-sans", geist.variable)}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
