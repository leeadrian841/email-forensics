# Cybersecurity Portfolio - PRD

## Problem Statement
Build a frontend-only portfolio website for cybersecurity (email forensics focus) for Adrian Lee. Showcases phishing/scam email investigation case studies and identification guides. Intended for GitHub Pages deployment.

## Architecture
- Frontend-only React app (no backend/database)
- Content managed via `/app/frontend/src/mock.js`
- HashRouter for GitHub Pages compatibility
- Dark cyber-themed design with Shadcn UI + TailwindCSS

## Completed
- Multi-page React app (Home, Case Studies, Case Study Detail, Guide)
- CodeBlock and ScreenshotGallery components
- Content personalized for Adrian Lee
- Emergent branding removed
- CI/CD: GitHub Actions deploy + Dependabot auto-merge configured
- **2025-02-XX**: Fixed GitHub Actions build failure — removed `cache: yarn` and `cache-dependency-path` from `setup-node` step, changed `yarn install --frozen-lockfile` to `yarn install` in both `deploy.yml` and `dependabot-automerge.yml`

## Setup Notes
- GitHub Pages: Repo Settings > Pages > Source = "GitHub Actions"
- Allow auto-merge: Repo Settings > General > enable

## Backlog
- None. User scope complete. User to populate `mock.js` with real case study content.
