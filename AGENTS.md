# RT Renovations Website

## Overview
Next.js 14 App Router website for a premium renovation and painting company. Built with TypeScript, Tailwind CSS, and Lucide icons.

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom design tokens (charcoal #172125, gold #D8B86A, cream #F4E8C9, canvas #F7F6F2)
- **Icons:** lucide-react
- **Fonts:** Plus Jakarta Sans (headings) + Inter (body) via next/font

## Running the App
```bash
docker compose -f docker-compose.base44.yml up -d --build
```
The dev server runs on port 3000 with `next dev -H 0.0.0.0`.

## Project Structure
- `src/app/` — App Router pages (homepage, about, services, our-work, blog, contact)
- `src/components/` — Reusable React components
- `src/lib/data.ts` — Centralized content data (services, gallery, testimonials, blog posts, site config)
- `src/app/globals.css` — Design system: utility classes, focus states, reduced-motion support

## Key Design Decisions
- Client components only where needed: Navbar (scroll state), Gallery (filtering/lightbox), ContactForm (validation)
- All other components are server components for performance
- Images use native `<img>` with `loading="lazy"` and descriptive alt text
- Service detail pages use dynamic `[slug]` route with `generateStaticParams`
- SEO: per-page metadata, Open Graph, LocalBusiness structured data in root layout
- Accessibility: semantic HTML, aria labels, keyboard-focusable gold outlines, prefers-reduced-motion support

## Notes
- Images are sourced from Unsplash and configured in `next.config.mjs` remotePatterns
- Contact form is client-side only (no backend) — shows success message on valid submit
- The `_config.yml` and `site/` directory are leftover from the original GitHub Pages repo
