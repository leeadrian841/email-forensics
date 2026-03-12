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
- Migrated CRA to Vite 7, updated all deps
- Guide page: `examples` on headers, `screenshots` on guides
- Repo cleanup: removed unnecessary files, cleaned .gitignore, added README.md
- Added header comments to all source files
- Added 5 editable case studies covering different attack types:
  1. Fake Microsoft 365 Login (Credential Harvesting / Phishing)
  2. CEO Wire Transfer Request (BEC)
  3. Fake Package Delivery Notification (Phishing / Malicious Link)
  4. Fake Invoice with Updated Bank Details (Scam / Invoice Fraud)
  5. PayPal Account Suspension Notice (Phishing / Account Takeover)

## Backlog
None. User to replace placeholder text in mock.js with real investigation findings.
