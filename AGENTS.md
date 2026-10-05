# CanDo House Website

## Overview
Next.js 14 App Router website for CanDo House, a renovation and building company in Canberra and Queanbeyan, Australia. Built with TypeScript, Tailwind CSS, and Lucide icons. Based on the design and content of candohouse.com.au.

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom design tokens (charcoal #333333, gold/brown #B18972, green #39783D, cream #F2EFEA, canvas #F8F7F5)
- **Icons:** lucide-react
- **Fonts:** Plus Jakarta Sans (headings) + Inter (body) via next/font

## Running the App
```bash
docker compose -f docker-compose.base44.yml up -d --build
```
The dev server runs on port 3000 with `next dev -H 0.0.0.0`.

## Project Structure
- `src/app/` — App Router pages (homepage, about, services, portfolio, blog, contact)
- `src/components/` — Reusable React components
- `src/lib/data.ts` — Centralized content data (services, portfolio, testimonials, blog posts, site config, brands)
- `src/app/globals.css` — Design system: utility classes, focus states, reduced-motion support

## Key Design Decisions
- Client components only where needed: Navbar (scroll state), Gallery (filtering/lightbox), ContactForm (validation)
- All other components are server components for performance
- Images use native `<img>` with `loading="lazy"` and descriptive alt text
- Service detail pages use dynamic `[slug]` route with `generateStaticParams`
- Portfolio page replaces the old "our-work" route
- Brand partner logos (Smeg, Polytec, Miele, Laminex, Caroma, Bosch) displayed on homepage
- Breadcrumb bars on sub-pages match CanDo House design
- SEO: per-page metadata, Open Graph, LocalBusiness structured data in root layout
- Accessibility: semantic HTML, aria labels, keyboard-focusable outlines, prefers-reduced-motion support

## Notes
- Images are sourced from the CanDo House API (app-candohouse-api-prod-g4a9bqehgehhcdhz.australiaeast-01.azurewebsites.net) and configured in next.config.mjs remotePatterns
- Contact form is client-side only (no backend) — shows success message on valid submit
