# Cybersecurity Portfolio - PRD

## Problem Statement
Frontend-only portfolio website for cybersecurity (email forensics) for Adrian Lee. GitHub Pages deployment via GitHub Actions.

## Architecture
- React 19 + Vite 7 + TailwindCSS 3 + Shadcn UI
- All content in `frontend/src/mock.js`
- BrowserRouter with clean URLs (SPA redirect via 404.html for GitHub Pages)
- Base path: `/email-forensics/` in production, `/` in dev

## Completed
- Multi-page app: Home, Case Studies, Case Study Detail, Guide
- CodeBlock + ScreenshotGallery components
- Personalized content (Adrian Lee)
- Emergent branding removed
- CI/CD: GitHub Actions + Dependabot
- Migrated CRA to Vite 7, updated all deps
- Guide page: `examples` on headers, `screenshots` on guides
- Repo cleanup, README.md, header comments on all files
- 5 editable case studies (Phishing, BEC, Scam)
- Increased root font size to 18px for large displays
- Switched HashRouter to BrowserRouter for clean URLs (no /#/)
- Added public/404.html SPA redirect for GitHub Pages compatibility

## Key Config
- `vite.config.js`: base is `/email-forensics/` for build, `/` for dev
- `App.jsx`: BrowserRouter basename from `import.meta.env.BASE_URL`
- `public/404.html`: Saves path to sessionStorage, redirects to index
- `index.html`: Restores path from sessionStorage on load

## Backlog
None. User to replace placeholder text in mock.js with real investigation findings.
