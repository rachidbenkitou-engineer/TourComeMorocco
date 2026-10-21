import { notFound } from "next/navigation";
import { I18nProvider } from "@/i18n/I18nProvider";
import { BookingProvider } from "@/components/BookingModal";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { ScrollReset } from "@/components/ScrollReset";
import { PageTransition } from "@/components/PageTransition";
import { WelcomePopup } from "@/components/WelcomePopup";
import type { Locale } from "@/i18n/translations";

const VALID_LOCALES: Locale[] = ["fr", "en", "ar", "it"];

export function generateStaticParams() {
  return VALID_LOCALES.map(locale => ({ locale }));
}

export default async function LocaleLayout({
  params,
  children,
}: {
  params: Promise<{ locale: string }>;
  children: React.ReactNode;
}) {
  const { locale } = await params;
  if (!VALID_LOCALES.includes(locale as Locale)) notFound();

  return (
    <I18nProvider initialLocale={locale as Locale}>
      <BookingProvider>
        <ScrollReset />
        <Navbar />
        <PageTransition>
          {children}
        </PageTransition>
        <Footer />
        <WhatsAppFloat />
        <WelcomePopup />
      </BookingProvider>
    </I18nProvider>
  );
}
