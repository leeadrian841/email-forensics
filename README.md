<div align="center">

# 🔍 Email Forensics Portfolio

### *Dissecting Digital Deception — One Header at a Time*

[![Live Site](https://img.shields.io/badge/🌐_Live_Site-leeadrian841.github.io/email--forensics-0ea5e9?style=for-the-badge)](https://leeadrian841.github.io/email-forensics)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)](https://fastapi.tiangolo.com/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com/)

> **A full-stack cybersecurity portfolio built to showcase real-world email threat analysis.**  
> Anonymised case studies. Dozens of IOCs. One mission — make phishing attacks transparent.

</div>

---

## 🧠 What is This?

This is not a template. Every case study, every IOC, every forensic finding documented here comes from **hands-on analysis of real malicious emails**.

The site serves as both a **living portfolio** and a **public reference tool** for anyone learning threat intelligence, SOC analysis, or email security. It walks through the anatomy of phishing campaigns, business email compromise, extortion, and advance-fee fraud — complete with raw header breakdowns, authentication failures, and attacker infrastructure mapping.

---

## ⚡ Live Demo

**🔗 [https://leeadrian841.github.io/email-forensics](https://leeadrian841.github.io/email-forensics)**

| Page | Description |
|------|-------------|
| 🏠 **Home** | Portfolio overview, certifications, skills, and featured investigations |
| 🗂️ **Case Studies** | Full-length threat analyses with IOC tables and severity ratings |
| 📖 **Identification Guide** | Interactive phishing checklist + header reference for analysts |

---

## 🔬 Case Studies at a Glance

Each investigation includes: full email header walkthrough, authentication result analysis (SPF / DKIM / DMARC), attacker infrastructure mapping, IOC extraction, and severity-rated findings.

| # | Campaign | Attack Type | Severity | Notable Technique |
|---|-----------|-------------|----------|-------------------|
| 1 | **Fake Cloud Storage Payment** | Credential Harvesting | 🔴 Critical | GCS bucket abuse + Sailthru ESP relay |
| 2 | **Corporate BEC Probe** | Business Email Compromise | 🟠 High | Silent read receipt + CEO impersonation |
| 3 | **Sextortion Scam** | Extortion | 🟠 High | Cyrillic lookalike chars + white-on-white HTML injection |
| 4 | **Failure Notice Camouflage** | Credential Harvesting | 🔴 Critical | Fabricated Google delegation headers + subject/body mismatch |
| 5 | **SBLC Turnkey Funding** | Advance Fee Fraud | 🟠 High | Legitimate ESP (GetResponse) abused to pass all auth checks |
| 6 | **IMF/INTERPOL Compensation** | 419 Fraud | 🟠 High | Compromised ISP account + Reply-To hijacking |
| 7 | **UN Compensation** | 419 Fraud | 🟠 High | Compromised ISP account + Reply-To hijacking |

---

## 🧩 Forensics Skills Demonstrated

```
✅ Email header parsing and authentication chain reconstruction
✅ SPF / DKIM / DMARC alignment analysis
✅ Detecting fabricated and malformed headers
✅ Content filter evasion: Cyrillic substitution, HTML tag injection, Bayesian poisoning
✅ ESP and mail relay identification (Sailthru, GetResponse, Beryl)
✅ IP geolocation and PTR record discrepancy analysis
✅ GCS bucket and free-tier cloud infrastructure abuse patterns
✅ IOC extraction and categorisation (domains, IPs, wallets, headers)
✅ BEC reconnaissance pattern recognition
✅ Social engineering tactic mapping
```

---

## 🎯 Why This Project Exists

Most cybersecurity portfolios demonstrate tools. This one demonstrates **critical thinking**.

Email-based attacks remain the #1 initial access vector in breaches worldwide — yet the forensics process is rarely documented in a way that's accessible, reproducible, or educational. This project bridges that gap by:

- Showing the **full reasoning process** behind identifying a malicious email
- Documenting **attacker techniques** with enough detail to build detection rules from
- Providing a **public reference** that junior analysts and students can learn from
- Proving that **authentication alone isn't enough** — Cases 5 and 6 demonstrate attacks that pass SPF, DKIM, and DMARC cleanly

---

## 📬 Contact

Built by **Adrian Lee** — Learning cybersecurity.

[![GitHub](https://img.shields.io/badge/GitHub-leeadrian841-181717?style=flat-square&logo=github)](https://github.com/leeadrian841)

---

## ⚖️ License

**Code:** Licensed under the [MIT License](LICENSE) — © 2026 Adrian Lee

**Content & Case Studies:** Licensed under [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/) —
You may share and adapt the written content with attribution, but not for commercial purposes.

> All case studies use anonymised or sanitised data.
> IOCs are documented for **educational and defensive purposes only**.
> This project does not constitute legal or professional security advice.

---

## ⚠️ Disclaimer

This portfolio is intended solely for **educational and defensive security research**.
All email samples have been anonymised. Any IOCs published are provided to help defenders
build detection rules — not to facilitate attacks. The author assumes no liability for
misuse of information presented here.

---

<div align="center">
  <sub>All case studies use anonymised or sanitised data. IOCs are documented for educational and defensive purposes only.</sub>
</div>
