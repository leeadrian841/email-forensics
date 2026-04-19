# EmailForensics.io — Cybersecurity Portfolio

A portfolio website focused on email forensics, phishing investigation case
studies, and an identification guide for spotting malicious emails.

Built with **React 19 + Vite 7 + TailwindCSS** and deployed to
**GitHub Pages** via GitHub Actions.

---

## Quick Start (local development)

```bash
cd frontend
yarn install
yarn start        # → http://localhost:3000
yarn build        # production build → frontend/dist/
```

---

## Project Structure

```
├── .github/
│   ├── dependabot.yml              # Automated dependency updates
│   └── workflows/
│       ├── deploy.yml              # Build & deploy to GitHub Pages
│       └── dependabot-automerge.yml
│
├── frontend/
│   ├── index.html                  # HTML shell — edit <title> and <meta> here
│   ├── vite.config.js              # Vite config (no changes needed)
│   ├── tailwind.config.cjs         # Tailwind theme (no changes needed)
│   │
│   └── src/
│       ├── mock.js                 # ★ ALL CONTENT LIVES HERE ★
│       │
│       ├── pages/
│       │   ├── Home.jsx            # Landing page
│       │   ├── CaseStudies.jsx     # Case study list with filters
│       │   ├── CaseStudyDetail.jsx # Single case study view
│       │   └── Guide.jsx           # Identification guide
│       │
│       ├── components/
│       │   ├── Navbar.jsx          # Top navigation bar
│       │   ├── Footer.jsx          # Site footer & external links
│       │   ├── CodeBlock.jsx       # Syntax-highlighted code display
│       │   └── ScreenshotGallery.jsx # Image grid with lightbox
│       │
│       ├── App.jsx                 # Router setup
│       ├── App.css                 # Global overrides
│       └── index.css               # Tailwind base + theme variables
│
└── .gitignore
```

---

## How to Edit Content

**All website content is managed in one file:**
[`frontend/src/mock.js`](frontend/src/mock.js)

### Personal info (Home page)
Edit the `ANALYST_INFO` object — name, title, tagline, bio, certifications,
and skills are all defined there.

### Case studies
Each entry in the `CASE_STUDIES` array is a full investigation. A commented-out
template at the top of the array shows every available field. Copy it, uncomment,
and fill in your data. Fields include:
- Basic info (title, date, severity, category, tags)
- Email headers, red flags, forensic analysis steps
- Screenshots, code blocks, recommendations, IOCs

### Identification guide
The `GUIDE_CONTENT` object contains:
- `keyHeaders` — each header entry supports an optional `examples` array of
  `{ url, caption, alt }` to show screenshot examples of anomalies.
- `desktopGuides` / `mobileGuides` — each guide supports an optional
  `screenshots` array with the same format.
- `quickChecklist`, `tools`, and comparison table data.

### Images
Place images in `frontend/public/images/` and reference them as
`/images/your-file.png`, or use any publicly hosted URL.

---

## Deployment (GitHub Pages)

Deployment is fully automated via GitHub Actions.

1. Push to `main` → the `deploy.yml` workflow builds and deploys automatically.
2. **One-time setup:** Go to your repo → Settings → Pages → set Source to
   **GitHub Actions**.
3. Your site will be live at `https://<username>.github.io/<repo-name>/`.

Dependabot is configured to open PRs for dependency updates and auto-merge
patch/minor bumps.

---

## License

Educational & research portfolio. All case studies are anonymized.
