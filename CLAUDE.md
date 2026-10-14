# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (Turbopack)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
npx tsc --noEmit # Type-check without emitting
npx next typegen # Generate Next.js route types (run before type-check)
```

## Architecture

**Stack:** Next.js 16.4 (App Router), React 19, TypeScript, Tailwind CSS v4, `motion` for animation.

**Important — Next.js 16 breaking changes:** This is Next.js 16, which differs from 14/15. Before writing any route or async component code, read the relevant guide in `node_modules/next/dist/docs/` (see `AGENTS.md` for the full warning). Dynamic params (`params`, `searchParams`) are now `Promise<…>` and must be awaited or unwrapped with `use()`.

**Known build issue:** `src/app/tours/[slug]/page.tsx` is marked `"use client"` and calls `use(params)` to unwrap the async params. Because the file is a Client Component, Next.js cannot statically pre-render it without `generateStaticParams`. Adding `generateStaticParams` (which returns all tour slugs from `src/data/tours.ts`) is the correct fix for static export or prerendering failures on that route.

**Data layer:** All content is static TypeScript — no database, no API calls at runtime.
- `src/data/tours.ts` — `Tour[]` array + `getTour(slug)` helper
- `src/data/transfers.ts` — `Transfer[]` array + category constants
- `src/data/gallery.ts` — gallery image list

**Pages:**
- `/` — homepage composed of many section components
- `/tours` — server component listing all tours
- `/tours/[slug]` — client component tour detail (uses `use(params)`)
- `/transfers` — transfers page
- `/gallery` — gallery page

**Components** live in `src/components/`. UI primitives (button, input, select, etc.) are in `src/components/ui/` and follow shadcn conventions.

**Styling conventions:**
- Tailwind v4 with custom CSS variables in `globals.css`
- Brand colors: dark teal `#062f35`, gold `#f5b63f`/`#e8921e`, light background `#fff8f0`
- Font variables: `--font-playfair` (serif headings), `--font-dm-sans` (body), `--font-caveat` (script/decorative)
- `font-serif` → Playfair Display, `font-script` → Caveat (set in globals.css)
- Responsive spacing uses `clamp()` inline styles rather than Tailwind breakpoints for fluid scaling

**Deployment:** Docker + nginx on a VPS, not Vercel. `next.config.ts` sets `output: "standalone"`. CI/CD via `.github/workflows/deploy.yml` — pushes to `main` trigger lint + type-check, then rsync to server and `docker compose build`. The `DEPLOY_ENABLED` repository variable must be `true` to activate the deploy job.

To add a new tour, append an entry to the `tours` array in `src/data/tours.ts`. The slug becomes the URL path. If the `[slug]` page needs static prerendering, export `generateStaticParams` from that file.
