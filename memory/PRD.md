# Cybersecurity Portfolio - PRD

## Problem Statement
Frontend-only portfolio website for cybersecurity (email forensics) for Adrian Lee. GitHub Pages deployment via GitHub Actions.

## Architecture
- React 19 + Vite 7 + TailwindCSS 3 + Shadcn UI
- All content in `frontend/src/mock.js`
- HashRouter for GitHub Pages compatibility

## Completed
- Multi-page app: Home, Case Studies, Case Study Detail, Guide
- CodeBlock + ScreenshotGallery components
- Personalized content (Adrian Lee)
- Emergent branding removed
- CI/CD: GitHub Actions + Dependabot
- Migrated CRA → Vite 7, updated all deps
- Guide page: `examples` on headers, `screenshots` on guides
- Repo cleanup: removed unnecessary files, cleaned .gitignore, added README.md
- Added header comments to all source files for content editing guidance

## Backlog
None. User to populate mock.js with real content.
