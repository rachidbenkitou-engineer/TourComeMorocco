import { NextRequest, NextResponse } from "next/server";

const LOCALES = ["fr", "en", "ar", "it"] as const;
const DEFAULT_LOCALE = "it";

// Old paths that should redirect to the default locale
const LEGACY_PATHS = ["/transfers", "/tours", "/excursions", "/gallery"];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Already on a locale path — let it through
  if (LOCALES.some(l => pathname === `/${l}` || pathname.startsWith(`/${l}/`))) {
    return NextResponse.next();
  }

  // Redirect root → /fr
  if (pathname === "/") {
    const savedLocale = request.cookies.get("tcm_locale")?.value;
    const locale = LOCALES.includes(savedLocale as (typeof LOCALES)[number]) ? savedLocale : DEFAULT_LOCALE;
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  // Redirect legacy paths → /fr/...
  if (LEGACY_PATHS.some(p => pathname === p || pathname.startsWith(p + "/"))) {
    return NextResponse.redirect(new URL(`/${DEFAULT_LOCALE}${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|icon|sitemap|robots|llms|og-image|images|slide|.*\\..*).*)"],
};
