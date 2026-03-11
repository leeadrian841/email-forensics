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
- `frontend/src/pages/Guide.jsx` — Guide page with header examples + guide screenshots
- `frontend/src/components/ScreenshotGallery.jsx` — Reusable image gallery with lightbox
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
- Migrated from CRA/CRACO to Vite 7
- Updated all dependencies to latest compatible versions
- **Added `examples` support to Critical Email Headers** — each header entry in mock.js accepts an optional `examples` array of `{ url, caption, alt }` objects, rendered via ScreenshotGallery when expanded
- **Added `screenshots` support to How to Access Email Headers** — each desktop/mobile guide entry accepts an optional `screenshots` array, rendered below the steps/tips

## How to Add Content (for Adrian)
### Header examples (mock.js > keyHeaders)
```js
{
  name: "From",
  // ... existing fields ...
  examples: [
    { url: "/images/from-spoofed.png", caption: "Notice the display name vs actual email address.", alt: "Spoofed From header" },
  ],
}
```

### Guide screenshots (mock.js > desktopGuides / mobileGuides)
```js
{
  client: "Gmail (Web Browser)",
  // ... existing fields ...
  screenshots: [
    { url: "/images/gmail-show-original.png", caption: "Click 'Show original' from the menu.", alt: "Gmail menu" },
  ],
}
```

## Setup Notes
- GitHub Pages: Repo Settings > Pages > Source = "GitHub Actions"
- Allow auto-merge: Repo Settings > General > enable

## Backlog
- None. User scope complete. User to populate mock.js with real content and images.
