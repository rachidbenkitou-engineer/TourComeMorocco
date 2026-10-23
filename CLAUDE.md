# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # dev server bound to 0.0.0.0 (all interfaces)
npm run build    # production build (standalone output)
npm run start    # production server
npm run lint     # ESLint via next lint
```

No test suite is configured.

## Architecture

This is the **Noova Technology** company website — a Next.js 15 App Router project with React 19, TypeScript, Bootstrap 5, and Framer Motion.

### Page structure

The homepage (`src/app/page.tsx`) is a single long-scroll page with anchor sections: `#about`, `#services`, `#portfolio`, `#team`. Navigation links point to `/#about` etc. and use `IntersectionObserver` in `Header.tsx` to track the active section.

Separate pages: `/blog`, `/blog/[slug]`, `/portfolio/[slug]`, `/about`, `/services`, `/pricing`, `/contact`, `/team`.

Almost every component is `"use client"` because they consume `LanguageContext`.

### i18n system

Custom multilingual support — no i18n library. Three languages: `EN`, `FR`, `AR` (Arabic is RTL).

- All UI strings live in `src/translations/index.ts`, exported as a nested object keyed by `Lang = "EN" | "FR" | "AR"`.
- `src/context/LanguageContext.tsx` provides `{ lang, setLang, tr }` via `useLanguage()`. `tr` is the current-language slice — always use `tr.section.key` for text, never hardcode strings.
- When Arabic is active, `document.documentElement.dir = "rtl"` is set automatically.

### Blog / content data

Blog posts are a static array in `src/data/posts.ts`. Each `Post` has all text fields typed as `Record<Lang, string>` (or `Record<Lang, string[]>` for lists), so every field must be provided in all three languages. Content is an array of typed `Block` objects (`p`, `h3`, `blockquote`, `img`, `ul`). Adding a post means appending to `POSTS` with full EN/FR/AR coverage.

### Animation primitives

`src/components/Animations.tsx` exports three Framer Motion wrappers:
- `FadeInUp` — single element fade-in from below on scroll into view
- `StaggerGrid` / `StaggerItem` — parent/child pair for staggered grid reveals

All use `viewport={{ once: true }}` so they only animate the first time.

### Contact modal

The contact button is not a route. Clicking it fires `window.dispatchEvent(new CustomEvent("open-contact-modal"))`. Components that need to open the modal listen for this event. The modal collects a name and project description, then opens a pre-filled WhatsApp link.

### Styling

- `src/app/globals.css` — global CSS (Bootstrap overrides, section styles, component classes)
- Bootstrap 5 installed via npm; Bootstrap Icons and Boxicons loaded via CDN links in `src/app/layout.tsx`
- Colors: brand green `#94c045`, dark `#3c4133`

### Build output

`next.config.ts` sets `output: "standalone"` — the build produces a self-contained Node.js server under `.next/standalone`.
