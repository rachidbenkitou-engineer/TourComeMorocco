# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Next.js, port 3000)
npm run build     # Production build
npm run lint      # ESLint check
```

No test suite is configured.

## Stack

- **Next.js 16** (App Router) with **React 19** and **TypeScript**
- **Tailwind CSS v4** — utility-first styling; no separate config file
- **motion** (`motion/react`) for animations
- **lucide-react** for icons
- **shadcn/ui** primitives in `src/components/ui/` (button, input, select, textarea, label)
- Path alias: `@/` → `src/`

## Architecture

### Pages (App Router)
All pages live under `src/app/`. Each page imports `<Navbar>` and `<Footer>` explicitly — there is no shared layout wrapping them. The root `layout.tsx` wraps everything in two global providers: `I18nProvider` and `BookingProvider`.

### i18n System
All UI strings are in `src/i18n/translations.ts` as a single `TRANSLATIONS` object keyed by `"fr" | "en" | "ar"`. The `I18nProvider` (`src/i18n/I18nProvider.tsx`) exposes `useI18n()` which returns `{ t, locale, setLocale }`. Locale is persisted to `localStorage` under `tcm_locale`. Arabic sets `document.dir = "rtl"` automatically.

**Data in `src/data/`** uses two different patterns:
- `tours.ts` and `transfers.ts`: fields are `I18n<T>` objects `{ fr, en, ar }` — must call `field[locale]` to read.
- `excursions.ts`: all fields are plain strings in French only (not yet localized).

### Booking Flow
`BookingModal.tsx` exports both `BookingProvider` and `useBooking()`. Calling `useBooking().open(service, price?)` opens a global modal that builds a WhatsApp message and redirects to `wa.me/212709274114`.

### Brand Colors & Fonts
- Primary dark: `#062f35`
- Gold accent: `#a87627`
- Fonts: DM Sans (body), Playfair Display (headings), Caveat (script/decorative), Geist (fallback)
- CSS variables: `--font-dm-sans`, `--font-playfair`, `--font-caveat`, `--font-sans`

### Content Structure
- `src/data/tours.ts` — multi-day private tours with full i18n, itinerary, FAQs, gallery
- `src/data/excursions.ts` — day excursions, French-only strings
- `src/data/transfers.ts` — point-to-point transfers from Marrakech, i18n `to` field
- `src/data/gallery.ts` — gallery image list

### Key Patterns
- All interactive components are `"use client"` — the app is effectively fully client-side rendered; only the root `layout.tsx` and `page.tsx` are server components.
- Inline SVGs are used throughout instead of icon components for custom shapes.
- The fleet vehicle list is duplicated in both `src/app/fleet/page.tsx` and `src/components/BookingModal.tsx` — keep them in sync when updating vehicles.
