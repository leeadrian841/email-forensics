# Cybersecurity Portfolio - PRD

## Problem Statement
Build a frontend-only portfolio website for cybersecurity (email forensics focus) for Adrian Lee. Showcases phishing/scam email investigation case studies and identification guides. Intended for GitHub Pages deployment.

## Architecture
- Frontend-only React app (no backend/database)
- **Build tool: Vite 7** (migrated from deprecated Create React App)
- Content managed via `/app/frontend/src/mock.js`
- HashRouter for GitHub Pages compatibility
- Dark cyber-themed design with Shadcn UI + TailwindCSS 3

## Key Files
- `frontend/vite.config.js` — Vite configuration (base: './', port 3000, @ alias)
- `frontend/index.html` — Root HTML (Vite convention, at project root not public/)
- `frontend/src/index.jsx` — App entry point
- `frontend/src/App.jsx` — Router setup (HashRouter)
- `frontend/src/mock.js` — All content (case studies, guide, personal info)
- `frontend/tailwind.config.cjs` — Tailwind config (CJS for compatibility with TW3)
- `frontend/postcss.config.cjs` — PostCSS config
- `.github/workflows/deploy.yml` — GitHub Actions deploy (outputs to `dist/`)
- `.github/workflows/dependabot-automerge.yml` — Dependabot auto-merge

## Completed
- Multi-page React app (Home, Case Studies, Case Study Detail, Guide)
- CodeBlock and ScreenshotGallery components
- Content personalized for Adrian Lee
- Emergent branding removed
- CI/CD: GitHub Actions deploy + Dependabot auto-merge configured
- Fixed GitHub Actions build failure (removed yarn cache dependency)
- **Migrated from CRA/CRACO to Vite 7** — removed deprecated react-scripts, @craco/craco, cra-template
- **Updated all dependencies** to latest compatible versions (React 19.2.4, Radix UI, lucide-react 0.577, etc.)
- Build output changed from `build/` to `dist/` (Vite convention)
- Config files use `.cjs` extension for TailwindCSS 3 compatibility with ESM package

## Setup Notes
- GitHub Pages: Repo Settings > Pages > Source = "GitHub Actions"
- Allow auto-merge: Repo Settings > General > enable

## Backlog
- None. User scope complete. User to populate `mock.js` with real case study content.
