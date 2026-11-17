# EmailForensics.io — Cybersecurity Portfolio

A portfolio website focused on email forensics, phishing investigation case
studies, and an identification guide for spotting malicious emails.

Built with **React 19 + Vite 8 + Tailwind CSS 4** and deployed to
**GitHub Pages** via GitHub Actions. It is a static site: there is no backend.

---

## Quick Start (local development)

```bash
cd frontend
yarn install
yarn start           # → http://localhost:3000/email-forensics/
node --test tests/   # checks every case file (also runs before each deploy)
yarn build           # production build → frontend/dist/
```

The site always runs under `/email-forensics/`, the same path as on GitHub
Pages, so image paths work the same locally and live.

---

## Project Structure

```
├── .github/
│   ├── dependabot.yml              # Automated dependency updates
│   └── workflows/
│       ├── deploy.yml              # Check data, build & deploy to GitHub Pages
│       └── dependabot-automerge.yml
│
└── frontend/
    ├── index.html                  # HTML shell — edit <title> and <meta> here
    ├── vite.config.js              # Vite config (base path: /email-forensics/)
    ├── yarn.lock                   # Exact dependency versions — commit changes to it
    ├── tests/cases.test.js         # Checks case files: required fields, unique ids, images
    ├── public/images/              # Screenshots used by cases and the guide
    │
    └── src/
        ├── case-studies/
        │   ├── _template.js        # Copy this to start a new case
        │   ├── case1.js … case10.js  # One investigation per file
        │   └── index.js            # Loads every caseN.js; FEATURED_CASE_IDS picks Home's cases
        ├── analyst-info.js         # Your name, bio, certifications, skills
        ├── guide-content.js        # Identification Guide content
        │
        ├── pages/
        │   ├── Home.jsx            # Landing page
        │   ├── CaseStudies.jsx     # Case study list with filters
        │   ├── CaseStudyDetail.jsx # Single case study view (single email or campaign)
        │   └── Guide.jsx           # Identification guide
        │
        ├── components/
        │   ├── Navbar.jsx          # Top navigation bar
        │   ├── Footer.jsx          # Site footer & external links
        │   ├── CodeBlock.jsx       # Code / raw text display with copy button
        │   ├── ScreenshotGallery.jsx # Image grid with lightbox
        │   ├── caseBadges.jsx      # Shared severity colours and category icons
        │   └── ui/                 # card.jsx, tabs.jsx
        │
        ├── App.jsx                 # Router setup
        ├── App.css                 # Global overrides
        └── index.css               # Tailwind base + theme variables
```

---

## How to Edit Content

### Personal info (Home page)
Edit `ANALYST_INFO` in [`frontend/src/analyst-info.js`](frontend/src/analyst-info.js)
— name, title, tagline, bio, certifications and skills.

### Case studies
Each case is its own file in [`frontend/src/case-studies/`](frontend/src/case-studies/).
To add one, copy `_template.js` to the next free number (e.g. `case11.js`),
remove the `/*` `*/` markers, and fill it in. It is picked up automatically,
sorted by file number. Fields include:
- Basic info (id, title, date, severity, category, tags)
- Email headers, red flags, forensic analysis steps
- Screenshots, code blocks, recommendations, IOCs

A campaign case (several emails from one operator) uses `campaign` and
`emails[]` instead of `emailHeaders` — see `case10.js`.

To change the three cases featured on Home, edit `FEATURED_CASE_IDS` in
`case-studies/index.js` (use each case's `id`).

### Identification guide
`GUIDE_CONTENT` in [`frontend/src/guide-content.js`](frontend/src/guide-content.js) contains:
- `keyHeaders` — each header entry supports an optional `examples` array of
  `{ url, caption, alt }` to show screenshot examples of anomalies.
- `desktopGuides` / `mobileGuides` — each guide supports an optional
  `screenshots` array with the same format.
- `quickChecklist`, `tools`, and comparison table data.

### Images
Place images in `frontend/public/images/` and reference them as
`/email-forensics/images/your-file.png`, or use any publicly hosted URL.

---

## Deployment (GitHub Pages)

Deployment is fully automated via GitHub Actions.

1. Push to `main` → `deploy.yml` checks the case data, builds, and deploys.
   If a case file is missing a field or an image, the deploy stops and the
   live site stays as it was.
2. **One-time setup:** Go to your repo → Settings → Pages → set Source to
   **GitHub Actions**.
3. Your site will be live at `https://<username>.github.io/<repo-name>/`.

Dependencies are pinned in `frontend/yarn.lock`, and the deploy installs
exactly those versions. Dependabot opens PRs that update the lockfile and
auto-merges patch/minor bumps once the build passes.

---

## License

Educational & research portfolio. All case studies are anonymized.
