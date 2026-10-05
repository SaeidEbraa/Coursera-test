# Base44 Dev Environment

## Project Overview
This is a GitHub Pages Jekyll site using the `jekyll-theme-cayman` theme.
The main content is `README.md`, rendered as the homepage via `index.md`.

## Setup
- The app runs via `docker compose -f docker-compose.base44.yml up -d`
- Jekyll serves on port 3000 with live reload (`--livereload --force_polling`)
- Gems are installed on container startup via `bundle install` (cached in a named volume)
- No external secrets or credentials are needed

## Key Files
- `docker-compose.base44.yml` — Base44 dev compose (Ruby 3.3 + Jekyll)
- `Gemfile` — Ruby dependencies (jekyll, jekyll-theme-cayman, webrick)
- `_config.yml` — Jekyll config (theme + exclusions)
- `index.md` — Homepage that includes README.md with the cayman theme layout
- `site/index.html` — Standalone static HTML page at `/site/`

## Verification
- `curl http://localhost:3000/` should return 200 with the cayman-themed README content
- `docker compose -f docker-compose.base44.yml ps` should show the web service as healthy
- Edits to `.md` and `.html` files auto-reload in the preview via Jekyll's live reload
