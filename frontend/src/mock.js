// =============================================================================
// mock.js — SINGLE SOURCE OF TRUTH FOR ALL WEBSITE CONTENT
//
// Edit this file to add, remove, or update content on the portfolio.
// You should NOT need to touch any other file for content changes.
//
// Sections:
//   ANALYST_INFO   → Home page: name, title, bio, certs, skills
//   CASE_STUDIES   → Case Studies pages: investigations & forensic analysis
//   GUIDE_CONTENT  → Identification Guide page: headers, platform guides,
//                     checklist, tools, and comparison table
// =============================================================================

// -----------------------------------------------------------------------------
// ANALYST INFO
// Your personal details shown on the Home page.
// -----------------------------------------------------------------------------
export const ANALYST_INFO = {
  name: "Adrian Lee",
  title: "Aspiring Cybersecurity Associate",
  tagline: "Dissecting deception — one email header at a time.",
  bio: "A Project Engineer pivoting into cybersecurity. I investigate hands-on cases to sharpen my ability to trace, analyze, and expose malicious email threats. My goal is to bring my analytical mindset to the world of cybersecurity.",

  // --------------------------------------------------------------------------
  // CERTIFICATIONS
  // Each entry shows as a cert badge on the Home page.
  // Fields: name (string), issuer (string), year (string)
  // --------------------------------------------------------------------------
  certs: [
    {
      name: "Google Cybersecurity Certificate",
      issuer: "Google / Coursera",
      year: "2025",
    },
    // Add more certs below — copy the block above and fill in the details:
    // {
    //   name: "CompTIA Security+",
    //   issuer: "CompTIA",
    //   year: "2025",
    // },
  ],

  // --------------------------------------------------------------------------
  // SKILLS
  // Shown as pill badges on the Home page.
  // --------------------------------------------------------------------------
  skills: [
    "Email Header Analysis",
    "Phishing Detection & Investigation",
    "OSINT (Open-Source Intelligence)",
    "Network Fundamentals",
    "MXToolbox",
    "VirusTotal",
    "PhishTool",
    "Wireshark",
  ],
};

// =============================================================================
// CASE STUDIES
// Each entry is one investigation. Displayed on the Case Studies list page
// and as a full detail page. To add a new case, copy the template below
// and fill in your own data. Remove or comment out entries you don't need.
// =============================================================================
export const CASE_STUDIES = [
  // --------------------------------------------------------------------------
  // TEMPLATE — Copy this entire block to create a new case study.
  // Remove the /* and */ markers and fill in your details.
  // --------------------------------------------------------------------------
  /*
  {
    // REQUIRED ----------------------------------------------------------------

    // Unique URL slug — use lowercase-with-hyphens, no spaces.
    // This becomes the URL: /#/case-studies/<id>
    id: "your-case-id-here",

    // Short title shown on the card and as the page heading.
    title: "Your Case Title",

    // One-line subtitle shown below the title.
    subtitle: "Brief description of the attack vector",

    // Date the investigation was performed — format: YYYY-MM-DD
    date: "2025-01-01",

    // Severity level — choose one: "Critical" | "High" | "Medium" | "Low"
    severity: "High",

    // Category of attack — e.g. "Phishing", "BEC", "Spear Phishing", "Scam"
    category: "Phishing",

    // Tags shown as pill badges — list 2–4 short keywords.
    tags: ["Tag One", "Tag Two", "Tag Three"],

    // 2–3 sentence summary shown on the case card in the list view.
    summary:
      "Write a concise summary of what the email campaign was doing and how it was delivered.",

    // The official verdict you reached after your investigation.
    verdict: "Confirmed Phishing",

    // One-sentence TL;DR — the single most important finding.
    tldr: "The core takeaway of this investigation in one sentence.",

    // OPTIONAL ----------------------------------------------------------------

    // Screenshots or images shown at the top of the case detail page.
    // Use a publicly accessible URL (e.g. hosted on GitHub, Imgur, etc.)
    // or a relative path inside /public/images/ (e.g. "/images/my-screenshot.png").
    // Each entry: { url: string, caption: string, alt: string }
    screenshots: [
      // {
      //   url: "https://example.com/screenshot.png",
      //   caption: "The phishing email as seen in Gmail inbox",
      //   alt: "Screenshot of phishing email",
      // },
    ],

    // EMAIL HEADERS -----------------------------------------------------------
    // The raw email headers extracted from the suspicious email.
    // Each entry: { key: string, value: string, flagged: boolean }
    // Set flagged: true for headers that contain suspicious or malicious values.
    emailHeaders: [
      { key: "From",     value: "Display Name <sender@suspicious-domain.com>", flagged: true  },
      { key: "Reply-To", value: "attacker@gmail.com",                          flagged: true  },
      { key: "To",       value: "victim@yourdomain.com",                       flagged: false },
      { key: "Subject",  value: "Urgent: Action required on your account",     flagged: true  },
      { key: "Date",     value: "Mon, 01 Jan 2025 03:00:00 +0000",             flagged: false },
      { key: "Authentication-Results", value: "spf=fail; dkim=none; dmarc=fail", flagged: true },
      { key: "X-Originating-IP",       value: "1.2.3.4",                        flagged: true },
      // Add more headers here...
    ],

    // RED FLAGS ---------------------------------------------------------------
    // List each suspicious indicator you identified during analysis.
    // Each entry: { flag: string, severity: "Critical" | "High" | "Medium" | "Low" }
    redFlags: [
      { flag: "Describe the first suspicious indicator you found.", severity: "Critical" },
      { flag: "Describe the second suspicious indicator.",          severity: "High"     },
      // Add more red flags here...
    ],

    // FORENSIC ANALYSIS STEPS -------------------------------------------------
    // Walk through your investigation step by step.
    // Each step supports: plain text, a code block, and/or screenshots.
    //
    // Entry fields:
    //   step    — Step label, e.g. "1. Domain Registration Analysis"
    //   content — Your written analysis (plain text / paragraph)
    //
    //   codeBlock (optional) — A code snippet or raw data block.
    //     language — e.g. "text", "bash", "python", "json", "html"
    //     title    — Label shown above the code block (e.g. "Raw WHOIS Output")
    //     code     — The actual code / output as a string (use backtick template literal)
    //
    //   images (optional) — Images specific to this step.
    //     url     — Image URL or path (same rules as screenshots above)
    //     caption — Short caption shown below the image
    //     alt     — Alt text for accessibility
    analysis: [
      {
        step: "1. First Analysis Step",
        content:
          "Describe what you investigated in this step and what you found.",
        // Optional: Add a code block to show raw data, headers, WHOIS output, etc.
        codeBlock: {
          language: "text",
          title: "Example: WHOIS Output",
          code: `Domain Name: suspicious-domain.com
          Registrar: Namecheap, Inc.
          Creation Date: 2024-12-29
          Registrant: REDACTED FOR PRIVACY`,
        },
        // Optional: Add images for this specific step.
        // images: [
        //   { url: "/images/step1.png", caption: "WHOIS result", alt: "WHOIS lookup" },
        // ],
      },
      {
        step: "2. Second Analysis Step",
        content:
          "Continue your forensic walkthrough here. Remove codeBlock/images if not needed.",
      },
      // Add more steps here...
    ],

    // RECOMMENDATIONS ---------------------------------------------------------
    // What should users/organizations do to protect themselves?
    // Each entry is a plain string.
    recommendations: [
      "First recommendation for protection.",
      "Second recommendation.",
      // Add more...
    ],

    // ATTACK TECHNIQUES -------------------------------------------------------
    // Short labels for the techniques used (shown in the sidebar).
    techniques: ["Technique One", "Technique Two"],

    // INDICATORS OF COMPROMISE (IOCs) ----------------------------------------
    // Technical artifacts from the attack (shown in sidebar).
    // Each entry: { type: string, value: string }
    // Types: "Domain", "IP", "URL", "Email", "Hash", "TTP"
    iocs: [
      { type: "Domain", value: "suspicious-domain.com" },
      { type: "IP",     value: "1.2.3.4" },
      // Add more IOCs here...
    ],
  },
  */

  // ADD YOUR REAL CASE STUDIES BELOW -----------------------------------------
  // Copy the template above (without the /* */ markers) and fill it in.
  // Replace placeholder text with your actual findings.

  // ── CASE 1: Credential Harvesting Phishing ────────────────────────────────
  {
    id: "fake-cloud-storage-payment-phishing",
    title: "Fake Cloud Storage Payment Failure",
    subtitle: "Credential/payment harvesting via spoofed cloud storage billing alert",
    date: "2026-02-21",
    severity: "Critical",
    category: "Phishing",
    tags: ["Credential Harvesting", "Brand Impersonation", "Payment Fraud", "GCS Abuse"],
    summary:
      "An email impersonating a generic 'Cloud Storage' service warned the recipient that their payment method had failed and their subscription was about to expire. A CTA button directed them to a page hosted on Google Cloud Storage (storage.googleapis.com/whilewait/), abusing a legitimate GCS bucket to bypass URL reputation filters. The sending domain, envelope sender, and claimed relay hostname were all unrelated to each other and to any real cloud provider. DKIM and DMARC were entirely absent, and the email was routed through a bulk marketing ESP (Sailthru). The body was additionally padded with hundreds of random alphanumeric strings and scraped news text to evade Bayesian spam filters.",
    verdict: "Confirmed Phishing",
    tldr: "Fake cloud storage billing alert with a GCS-hosted phishing page, multi-domain spoofing, no DKIM/DMARC, and spam filter evasion padding.",

    screenshots: [
      { url: "/email-forensics/images/case1-email.png", caption: "The phishing email as it appeared in the inbox", alt: "Phishing email screenshot" },
      // { url: "/email-forensics/images/case1-phishing-page.png", caption: "The GCS-hosted phishing landing page", alt: "Phishing landing page" },
    ],

    emailHeaders: [
      // ── Delivery & Routing ──────────────────────────────────────────────────
      { key: "Delivered-To", value: "me@gmail.com", flagged: true  }, // duplicate/conflicting recipient — template substitution failure
      { key: "Return-Path", value: "<qequmwqucakzc@uuenenodiel.melbrotech.co.za>", flagged: true  }, // gibberish address on unrelated .co.za domain
      { key: "Received", value: "ecobee.com (dhjh.dhgate.com. [89.252.161.234]) by mx.google.com with ESMTPS id 4fb4d7f45d1cf-65eabb5d536si2391912a12; Sat, 21 Feb 2026 15:04:48 -0800 (PST)", flagged: true }, // claimed hostname ecobee.com is falsified — actual PTR resolves to dhgate.com
      { key: "Received", value: "nj1-madbrick.flt (172.18.20.7) by njmta-53.sailthru.com id h1t7vc1qqbsf for <leeadrian841@gmail.com>; 02-21-2026 (envelope-from <delivery@mx.sailthru.com>)", flagged: true }, // bulk marketing ESP (Sailthru) — never used by legitimate cloud billing
      { key: "Received", value: "efianalytics.com (216.244.76.116)", flagged: true }, // third-party analytics tracking hop
      { key: "X-Received", value: "by 2002:a17:907:7211:b0:b88:241e:693c with SMTP id a640c23a62f3a-b9081aedf8amr262581966b; Sat, 21 Feb 2026 15:04:48 -0800 (PST)", flagged: false },
      { key: "X-Originating-IP", value: "89.252.161.234", flagged: true }, // resolves to dhgate.com, not the claimed ecobee.com
      { key: "X-Destination-ID", value: "1938-516037", flagged: false },
  
      // ── Sender Identity ─────────────────────────────────────────────────────
      { key: "From", value: "Payment-Declined <nooreply@rytfotrwegt.us>", flagged: true  }, // display name and domain unrelated to any cloud service
      { key: "Sender", value: "kmdujraaiwisprgafeiarffzeeftwo", flagged: true  }, // not a valid email address — gibberish string, violates RFC 5322
  
      // ── Content ─────────────────────────────────────────────────────────────
      { key: "Subject", value: "leeadrian841, Your Cloud Account has been locked on 02-21-2026. Your photos and videos will be removed!", flagged: true }, // urgency/fear tactic with harvested username as personalisation
  
      // ── Authentication ───────────────────────────────────────────────────────
      { key: "Authentication-Results", value: "mx.google.com; spf=pass smtp.mailfrom=qequmwqucakzc@uuenenodiel.melbrotech.co.za; dkim=none; dmarc=none", flagged: true }, // SPF passes only on attacker-owned domain; DKIM and DMARC entirely absent
      { key: "Received-SPF", value: "pass (google.com: domain of qequmwqucakzc@uuenenodiel.melbrotech.co.za designates 89.252.161.234 as permitted sender) client-ip=89.252.161.234", flagged: false }, // technically passes but misleading — attacker controls this domain
      { key: "ARC-Seal", value: "i=1; a=rsa-sha256; t=1771715088; cv=none; d=google.com; s=arc-20240605", flagged: false },
      { key: "ARC-Authentication-Results", value: "i=1; mx.google.com; spf=pass smtp.mailfrom=qequmwqucakzc@uuenenodiel.melbrotech.co.za", flagged: false },
  
      // ── Suspicious / Fabricated Headers ─────────────────────────────────────
      { key: "X-Google-Sender-Delegation", value: "trusted email", flagged: true }, // fabricated — real Google delegation headers contain a domain name, not a freeform phrase
      { key: "List-Unsubscribe", value: "<http://ecobee.com/LEAVE=To>", flagged: true }, // abuses ecobee.com brand to appear legitimate
  
      // ── Message Structure ────────────────────────────────────────────────────
      { key: "Message-ID", value: "<90556134.02581880.ko4z9.bad1smtpin_added_broken@mx.google.com>", flagged: true }, // "bad1smtpin_added_broken" — Google flagged structural violation on ingress
      { key: "MIME-Version", value: "1.0", flagged: false },
      { key: "Content-Type", value: "multipart/digest; boundary=\"----=_Part_qxRazlRjQOiS_1129434735014.frqkvRcwiCF\"", flagged: false },
      { key: "Content-Transfer-Encoding", value: "amazonses", flagged: true }, // not a valid MIME encoding — must be base64, quoted-printable, 7bit, 8bit, or binary
    ],

    redFlags: [
      // Critical
      { flag: "Sender domain unrelated to claimed service", severity: "Critical" },
      { flag: "Envelope sender is a different unrelated domain", severity: "Critical" },
      { flag: "Received hostname is falsified (ecobee.com spoof)", severity: "Critical" },
      { flag: "DKIM and DMARC completely absent", severity: "Critical" },
      { flag: "Fabricated X-Google-Sender-Delegation header", severity: "Critical" },
      { flag: "Body padded with fake credentials and junk text", severity: "Critical" },
  
      // High
      { flag: "Fear/urgency subject with harvested username", severity: "High" },
      { flag: "Routed through bulk marketing ESP (Sailthru)", severity: "High" },
      { flag: "List-Unsubscribe abuses ecobee.com domain", severity: "High" },
      { flag: "Invalid Sender header (not an email address)", severity: "High" },
      { flag: "Phishing page hosted on legitimate GCS bucket", severity: "High" },
  
      // Medium
      { flag: "Duplicate conflicting Delivered-To headers", severity: "Medium" },
      { flag: "Extra analytics hop in routing chain", severity: "Medium" },
      { flag: "SPF pass on attacker-owned domain (misleading)", severity: "Medium" },
  
      // Low
      { flag: "Invalid Content-Transfer-Encoding value", severity: "Low" },
      { flag: "Message-ID flagged broken by Google on ingress", severity: "Low" },
    ],

  analysis: [
    {
      step: "1. Email Header Inspection",
      content:
        "The visible From address (nooreply@rytfotrwegt.us) and the envelope Return-Path (qequmwqucakzc@uuenenodiel.melbrotech.co.za) are completely unrelated domains — neither has any connection to a real cloud storage provider. SPF passes only because the attacker controls melbrotech.co.za and configured it correctly; this provides no legitimacy signal. DKIM is entirely absent, meaning the message body cannot be verified as untampered. Without DKIM there can be no DMARC alignment, so the visible From address is wholly unverified. The Sender field contains a plain gibberish string rather than a valid RFC 5322 mailbox address.",
      codeBlock: {
        language: "text",
        title: "Authentication-Results Header",
        code: `Authentication-Results: mx.google.com;
          spf=pass (google.com: domain of qequmwqucakzc@uuenenodiel.melbrotech.co.za designates 89.252.161.234 as permitted sender) smtp.mailfrom=qequmwqucakzc@uuenenodiel.melbrotech.co.za;
          dkim=none;
          dmarc=none`,
      },
    },
    {
      step: "2. Routing & Infrastructure Analysis",
      content:
        "The email passed through three suspicious hops before reaching my email account. The outermost Received header claims the sending host is ecobee.com (a smart-thermostat brand), but the IP 89.252.161.234 resolves to dhjh.dhgate.com — a completely different company. This hostname was attacker-injected and is meaningless as an authentication signal. The second hop reveals the true infrastructure: Sailthru (njmta-53.sailthru.com), a legitimate bulk marketing ESP, was used to send the email — a platform that has no business relationship with cloud storage billing. A third hop through efianalytics.com adds click/open tracking.",
      codeBlock: {
        language: "text",
        title: "Received Chain (oldest to newest)",
        code: `1. from efianalytics.com (216.244.76.116)          ← analytics tracking
          2. from nj1-madbrick.flt (172.18.20.7)
            by njmta-53.sailthru.com                        ← bulk ESP (Sailthru)
            envelope-from <delivery@mx.sailthru.com>
          3. from ecobee.com (dhjh.dhgate.com [89.252.161.234])
            by mx.google.com                                ← falsified hostname`,
      },
    },
    {
      step: "3. Phishing URL & Landing Page Analysis",
      content:
        "All CTA links in the email body (Update Account Details, Contact Support, Account Settings) resolve to the same GCS bucket: storage.googleapis.com/whilewait/comessuccess.html. The attacker abused a free Google Cloud Storage bucket to host the phishing page, deliberately choosing a legitimate Google domain to bypass URL reputation filters and corporate web proxies. Each link includes unique tracking parameters (lm=, page=) to identify which recipient clicked. The anchor of the URL (#index.php?...) disguises the actual path as a PHP query string to appear more like a real web application.",
      codeBlock: {
        language: "text",
        title: "Phishing URLs extracted from email body",
        code:
          `CTA Button:
            https://storage.googleapis.com/whilewait/comessuccess.html#index.php?search=4&d145906&ryzio=802-1938&lm=516037NPUR46646&sd=1&page=17NSznnUsGpVVhl

          Contact Support:
            https://storage.googleapis.com/whilewait/comessuccess.html#index.php?search=4&d145906&gmofc=802-1938&lm=516037KHNX46646&sd=1&page=2LmyDH843MtJnjO

          Account Settings:
            https://storage.googleapis.com/whilewait/comessuccess.html#index.php?search=4&d145906&ajpdp=802-1938&lm=516037LYGD46646&sd=1&page=WsS2EUvgMK7q6nF

          GCS Bucket: whilewait (storage.googleapis.com)`,
      },
    },
    {
      step: "4. Body Content & Spam Evasion Analysis",
      content:
        "The HTML body presents a plausible-looking payment failure notice with a fake Subscription ID (9018660) and product name (Cloud Storage Premium). Below the visible HTML, the plain-text MIME part is stuffed with hundreds of random alphanumeric tokens, fake login credential pairs, and scraped Guardian newspaper articles. This is a deliberate Bayesian poisoning technique: injecting large volumes of innocuous-looking text shifts the statistical word distribution of the message away from known spam signatures, increasing the probability of bypassing content-based spam filters.",
      codeBlock: {
        language: "text",
        title: "Spam evasion content found in plain-text MIME part (excerpt)",
        code: `Login Name: WNOQGLMJUOPTBJZMHAYCRU
Password:   MTCZPWEJLPDDEQTVFFOTYX

Login Name: RXU
Password:   FLSXNJUAKGWEXSGKEPIQUE

7FIXTF2V17WIXI43IL SMV3JNO38TW01LK OOWDADW8AP37I ...
[hundreds of additional random tokens]

[Scraped Guardian article text about EU foreign aid budgets]
[Scraped text about Parsec gaming software]`,
      },
    },
  ],

    recommendations: [
      "Never click 'Update Payment' or 'Verify Account' links in unsolicited emails — navigate to the service directly via a bookmarked URL.",
      "Treat any email as spam/phishing where SPF passes but DKIM and DMARC are absent as unverified, regardless of the visible From address.",
      "Be suspicious of Google Cloud Storage URLs (storage.googleapis.com) used as landing pages — attackers abuse free GCS buckets specifically because the domain has a high reputation score.",
      "Report the GCS bucket to Google at https://support.google.com/code/contact/cloud_platform_report.",
      "Enable multi-factor authentication on all cloud accounts so stolen credentials alone cannot grant access.",
      "Check your email provider's spam filter settings and ensure DMARC rejection policies are enforced for your own domain.",
    ],

    techniques: [
      "Brand Impersonation",
      "Multi-Domain Spoofing",
      "GCS Bucket Abuse",
      "Bayesian Poisoning",
      "Urgency/Fear Manipulation",
      "Bulk ESP Abuse (Sailthru)",
    ],

    iocs: [
      { type: "Domain", value: "rytfotrwegt.us" },
      { type: "Domain", value: "uuenenodiel.melbrotech.co.za" },
      { type: "Domain", value: "dhjh.dhgate.com" },
      { type: "Email", value: "nooreply@rytfotrwegt.us" },
      { type: "Email", value: "qequmwqucakzc@uuenenodiel.melbrotech.co.za" },
      { type: "IP", value: "89.252.161.234" },
      { type: "URL", value: "https://storage.googleapis.com/whilewait/comessuccess.html" },
      { type: "GCS Bucket", value: "whilewait (storage.googleapis.com)" },
      { type: "ESP", value: "njmta-53.sailthru.com" },
    ],
  },

  // ── CASE 2: Business Email Compromise ──────────────────────────────────────
  {
    id: "corporate-bec-probe",
    title: "Corporate BEC Probe",
    subtitle: "Business email compromise reconnaissance via display name spoofing",
    date: "2026-02-13",
    severity: "High",
    category: "Business Email Compromise",
    tags: ["BEC", "Display Name Spoofing", "Social Engineering", "Reconnaissance", "Compromised Account"],
    summary:
      "A single-line probe email impersonating my CEO from my company was sent from a personal US ISP address (wmcclean@rcn.com) to the recipient. The body contains only 'Are you there?' — a classic BEC opener designed to confirm inbox activity and establish a conversation thread before launching a financial fraud request. Unlike mass phishing, this email passes SPF, DKIM, and DMARC fully, making it significantly harder to detect automatically. A read receipt was silently requested via Disposition-Notification-To to further confirm the address is active. The X-Originating-IP differs from the sending SMTP relay, indicating the message was composed from a separate host — consistent with a compromised or purpose-created account being operated remotely.",
    verdict: "Suspected BEC / Social Engineering Probe",
    tldr: "One-line 'Are you there?' probe impersonating a Singapore tech company employee, sent from a US ISP personal account. Passes all authentication. Classic BEC first-contact pattern.",

    screenshots: [
      // { url: "/images/case2-email.png", caption: "The BEC email requesting wire transfer", alt: "BEC email" },
    ],

    emailHeaders: [
    // ── Delivery & Routing ──────────────────────────────────────────────────
    { key: "Delivered-To", value: "My Personal Email", flagged: false },
    { key: "Return-Path", value: "<wmcclean@rcn.com>", flagged: true }, // personal US ISP address — not a corporate domain for a Singapore tech company
    { key: "Received", value: "from smtp.rcn.com (mail.rcn.syn-alias.com. [129.213.13.252]) by mx.google.com with ESMTPS id d75a77b69052e-506ac337d51si3327421cf; Fri, 13 Feb 2026 00:38:07 -0800 (PST)", flagged: false },
    { key: "X-Received", value: "by 2002:a05:622a:18a9:b0:501:1795:9d52 with SMTP id d75a77b69052e-506a6a4a183mr16728211cf; Fri, 13 Feb 2026 00:38:07 -0800 (PST)", flagged: false },
    { key: "X-Originating-IP", value: "[162.243.8.41]", flagged: true }, // differs from SMTP relay (129.213.13.252) — email composed from a separate host, consistent with remote account operation
    { key: "X-Mailer", value: "Zimbra 10.1.16_GA_4850 (ZimbraModernWebClient - FF147 (Windows)/10.1.16_GA_4850)", flagged: false },

    // ── Sender Identity ─────────────────────────────────────────────────────
    { key: "From", value: "My CEO <wmcclean@rcn.com>", flagged: true }, // display name "My CEO" doesn't match rcn.com personal ISP account — classic display name spoofing to impersonate corporate staff
    { key: "X-Authed-Username", value: "d21jY2xlYW5AcmNuLmNvbQ==", flagged: true }, // base64 decodes to wmcclean@rcn.com — confirms authenticated send; account may be compromised or purpose-created

    // ── Content ─────────────────────────────────────────────────────────────
    { key: "Subject", value: "RFNet Technologies Pte Ltd", flagged: true }, // company name used as subject to establish false legitimacy — no context, no ask, pure social engineering opener
    { key: "Date", value: "Fri, 13 Feb 2026 03:38:06 -0500 (EST)", flagged: false },

    // ── Authentication ───────────────────────────────────────────────────────
    { key: "Authentication-Results", value: "mx.google.com; dkim=pass header.i=@rcn.com header.s=20180516; spf=pass smtp.mailfrom=wmcclean@rcn.com; dmarc=pass (p=NONE sp=NONE dis=NONE) header.from=rcn.com", flagged: false }, // all three pass — dangerous because automated filters will not flag this
    { key: "Received-SPF", value: "pass (google.com: domain of wmcclean@rcn.com designates 129.213.13.252 as permitted sender) client-ip=129.213.13.252", flagged: false },
    { key: "DKIM-Signature", value: "v=1; a=rsa-sha1; d=rcn.com; s=20180516; h=From:Subject:Date:To:MIME-Version:Content-Type", flagged: true }, // uses deprecated rsa-sha1 algorithm (SHA-1 is cryptographically weak); modern senders use rsa-sha256
    { key: "ARC-Seal", value: "i=1; a=rsa-sha256; t=1770971887; cv=none; d=google.com; s=arc-20240605", flagged: false },
    { key: "ARC-Authentication-Results", value: "i=1; mx.google.com; dkim=pass header.i=@rcn.com; spf=pass smtp.mailfrom=wmcclean@rcn.com; dmarc=pass (p=NONE sp=NONE dis=NONE)", flagged: false },

    // ── Suspicious Headers ───────────────────────────────────────────────────
    { key: "Disposition-Notification-To", value: "My CEO <wmcclean@rcn.com>", flagged: true }, // silent read receipt request — used to confirm the inbox is active without the recipient realising
    { key: "X-Vade-Verdict", value: "clean", flagged: true }, // Vade email security marked this clean — illustrates why BEC is effective; passing auth evades automated filters

    // ── Message Structure ────────────────────────────────────────────────────
    { key: "Message-ID", value: "<726578122.17898607.1770971886977.JavaMail.zimbra@rcn.com>", flagged: false },
    { key: "MIME-Version", value: "1.0", flagged: false },
    { key: "Content-Type", value: "multipart/alternative; boundary=\"=_bc2553ec-4435-4d0a-ad64-a6a9cc12e624\"", flagged: false },
    { key: "Content-Transfer-Encoding", value: "quoted-printable", flagged: true },
    ],

    redFlags: [
      // High
      { flag: "Display name impersonates named individual at a real Singapore company", severity: "High" },
      { flag: "Sending domain (rcn.com) is a US personal ISP, not a corporate domain", severity: "High" },
      { flag: "Single-line probe body ('Are you there?') — classic BEC first-contact", severity: "High" },
      { flag: "Silent read receipt requested via Disposition-Notification-To", severity: "High" },
      { flag: "X-Originating-IP differs from SMTP relay — composed on a separate host", severity: "High" },
  
      // Medium
      { flag: "All authentication passes — will bypass most automated filters", severity: "Medium" },
      { flag: "DKIM signed with deprecated RSA-SHA1 algorithm", severity: "Medium" },
      { flag: "X-Vade-Verdict marked clean — security tooling failed to flag", severity: "Medium" },
  
      // Low
      { flag: "No email signature or company branding for a claimed business contact", severity: "Low" },
      { flag: "Recipient addressed by first name only — harvested from email prefix", severity: "Low" },
    ],

    analysis: [
      {
        step: "1. BEC Pattern Recognition",
        content:
          "This is not mass phishing — it is a targeted Business Email Compromise probe. The attacker set the display name to 'CEO' and the subject to 'My Company', impersonating a specific individual at a real Singapore-based IT company. The entire body is a single line: 'Hello Adrian, Are you there?' This is a textbook BEC opener: make first contact, establish a thread, confirm the inbox is monitored, then in a follow-up message introduce a financial request (invoice fraud, wire transfer, gift card purchase, or payroll redirect). The absence of any link or attachment is deliberate — there is nothing for a security tool to scan.",
      },
      {
        step: "2. Why Authentication Passing Makes This More Dangerous",
        content:
          "Unlike the previous phishing case, this email passes SPF, DKIM, and DMARC completely. The sending account (wmcclean@rcn.com) is a legitimate RCN cable ISP email account — either compromised via credential theft or purpose-created by the attacker to mimic a plausible name. Because authentication is valid for rcn.com, Gmail and Vade both accepted it as clean. DMARC policy for rcn.com is p=NONE, meaning even a failure would not have resulted in rejection. Defenders cannot rely on authentication signals here — the only detection vectors are the display name mismatch and the behavioural pattern of the message.",
        codeBlock: {
          language: "text",
          title: "Authentication-Results — all pass",
          code: `Authentication-Results: mx.google.com;
            dkim=pass  header.i=@rcn.com header.s=20180516 header.b="Rf1Db9M/";
            spf=pass   (wmcclean@rcn.com → 129.213.13.252 is permitted sender);
            dmarc=pass (p=NONE sp=NONE dis=NONE) header.from=rcn.com
            X-Vade-Verdict: clean   ← security filter saw nothing wrong`,
        },
      },
      {
        step: "3. Originating IP vs SMTP Relay Discrepancy",
        content:
          "The X-Originating-IP (162.243.8.41) is distinct from the RCN SMTP relay (129.213.13.252). This means the email was composed and submitted from one host, then relayed through RCN's mail infrastructure. This pattern is consistent with a compromised account being accessed remotely — for example via webmail from a VPN or proxy IP — rather than from the legitimate account owner's usual device. Investigating 162.243.8.41 against threat intelligence databases (AbuseIPDB, VirusTotal, Shodan) would confirm whether this IP has been associated with BEC or spam campaigns.",
        codeBlock: {
          language: "text",
          title: "IP discrepancy",
          code: `X-Originating-IP:  [162.243.8.41]        ← where email was composed/submitted
  SMTP relay:         129.213.13.252        ← rcn.com mail server (legitimate)
  X-Authed-Username:  d21jY2xlYW5AcmNuLmNvbQ==
                      → base64 → wmcclean@rcn.com  (authenticated sender)`,
        },
      },
      {
        step: "4. Silent Read Receipt as Inbox Confirmation",
        content:
          "The Disposition-Notification-To header silently requests a read receipt back to wmcclean@rcn.com. If the recipient's email client honours this (Outlook does by default; Gmail does not), the attacker receives confirmation that the address is active and monitored without the recipient being aware they responded. This is a low-cost, low-risk recon technique — even if the recipient never replies to the email itself, a read receipt alone gives the attacker the confirmation they need to continue the BEC chain.",
        codeBlock: {
          language: "text",
          title: "Read receipt header",
          code: `Disposition-Notification-To: CEO <wmcclean@rcn.com>`,
        },
      },
    ],

    recommendations: [
      "Do not reply to unsolicited 'Are you there?' or 'Is this Adrian?' emails from unknown senders, even if the display name looks familiar.",
      "Always verify the actual email address domain — not just the display name — before engaging with any business contact.",
      "Disable automatic read receipt responses in your email client to prevent silent inbox confirmation.",
      "Look up the claimed company independently and contact them through official channels to verify if this person sent the email.",
      "Report the originating IP (162.243.8.41) to AbuseIPDB and check it against VirusTotal for prior BEC associations.",
      "If you manage a corporate domain, set your DMARC policy to p=reject (not p=NONE) to prevent display name spoofing of your own domain.",
    ],

    techniques: [
      "Display Name Spoofing",
      "BEC Reconnaissance Probe",
      "Compromised/Purpose-Created Account",
      "Silent Read Receipt Harvesting",
      "Social Engineering (First-Contact Pattern)",
    ],

    iocs: [
      { type: "Email", value: "wmcclean@rcn.com" },
      { type: "IP", value: "162.243.8.41" },
      { type: "IP", value: "129.213.13.252" },
      { type: "Domain", value: "rcn.com" },
      { type: "Name", value: "CEO (impersonated)" },
      { type: "Company", value: "My Company (impersonated)" },
    ],
  },

  // ── CASE 3: Sextortion Scam ─────────────────────────────────────
  {
    id: "sextortion-pegasus-bitcoin-scam",
    title: "Pegasus Sextortion Scam",
    subtitle: "Fabricated device compromise claim with Litecoin extortion demand",
    date: "2024-12-17",
    severity: "High",
    category: "Sextortion / Social Engineering",
    tags: ["Sextortion", "Cryptocurrency Extortion", "Email Spoofing", "Spam Filter Evasion", "Cyrillic Substitution"],
    summary:
      "A sextortion email was spoofed to appear as though it was sent from my personal Hotmail address, creating a false impression of account compromise. The email claims the attacker installed Pegasus spyware on all of the recipient's devices, recorded compromising webcam footage, and will distribute it to all contacts unless $1,850 in Litecoin is paid within 48 hours. All three authentication checks — SPF, DKIM, and DMARC — failed. The actual sending infrastructure was boyerfinancialplanning.com (23.230.37.82), a hijacked or abused third-party domain entirely unrelated to the claimed sender. The body employs multiple spam evasion techniques: Cyrillic look-alike character substitution within words, white-on-white hidden junk text interspersed throughout the HTML, and quoted-printable encoding to fragment recognisable keywords. The Pegasus claim is fabricated — no real IOCs or proof of compromise are provided.",
    verdict: "Confirmed Scam — Sextortion / No Actual Compromise",
    tldr: "Fake 'sent from your own account' sextortion demanding $1,850 in Litecoin. Pegasus claim is fabricated. SPF/DKIM/DMARC all fail. Actual sender is a hijacked third-party domain.",

    screenshots: [
      // { url: "/images/sextortion-email.png", caption: "The sextortion email as rendered in Outlook", alt: "Sextortion email screenshot" },
    ],

    emailHeaders: [
      // ── Delivery & Routing ──────────────────────────────────────────────────
      { key: "Received", value: "from boyerfinancialplanning.com (23.230.37.82) by BL6PEPF0001AB54.mail.protection.outlook.com via Frontend Transport; Tue, 17 Dec 2024 19:24:29 +0000", flagged: true }, // actual sending host — a financial planning firm's domain, hijacked or abused to relay spam
      { key: "Received", value: "from BL6PEPF0001AB54.namprd02.prod.outlook.com by BN6PR17CA0043.outlook.office365.com via Frontend Transport; Tue, 17 Dec 2024 19:24:30 +0000", flagged: false },
      { key: "Received", value: "from BN6PR17CA0043.namprd17.prod.outlook.com by SEYPR04MB6631.apcprd04.prod.outlook.com; Tue, 17 Dec 2024 19:24:32 +0000", flagged: false },
      { key: "X-Sender-IP", value: "23.230.37.82", flagged: true }, // IP of actual sending host (boyerfinancialplanning.com) — not a Hotmail/Microsoft IP
      { key: "Return-Path", value: "leeadrian841@hotmail.com", flagged: true }, // spoofed to match recipient's own address — creates illusion of self-send / account compromise
  
      // ── Sender Identity ─────────────────────────────────────────────────────
      { key: "From", value: "\"leeadrian841@hotmail.com\" <leeadrian841@hotmail.com>", flagged: true }, // forged — email is not actually from this Hotmail account; SPF failure confirms this
      { key: "To", value: "<leeadrian841@hotmail.com>", flagged: true }, // sent to self — deliberate tactic to suggest the attacker controls the account
      { key: "X-SID-PRA", value: "LEEADRIAN841@HOTMAIL.COM", flagged: false },
      { key: "X-SID-Result", value: "FAIL", flagged: true }, // Microsoft's Sender ID check explicitly failed — From address is forged
      { key: "X-MS-Exchange-Organization-AuthAs", value: "Anonymous", flagged: true }, // Exchange confirmed the sender is unauthenticated — not a logged-in Hotmail user
  
      // ── Content ─────────────────────────────────────────────────────────────
      { key: "Subject", value: "You have been hacked (leeadrian841@hotmail.com)", flagged: true }, // fear tactic; recipient's own email in subject to simulate proof of access
      { key: "Date", value: "Tue, 17 Dec 2024 11:24:29 -0800", flagged: false },
  
      // ── Authentication ───────────────────────────────────────────────────────
      { key: "Authentication-Results", value: "spf=fail (sender IP is 23.230.37.82) smtp.mailfrom=hotmail.com; dkim=none (message not signed) header.d=none; dmarc=fail action=none header.from=hotmail.com", flagged: true }, // all three fail — definitive proof the From address is forged
      { key: "Received-SPF", value: "Fail (protection.outlook.com: domain of hotmail.com does not designate 23.230.37.82 as permitted sender) client-ip=23.230.37.82; helo=boyerfinancialplanning.com", flagged: true }, // SPF explicitly fails; HELO reveals actual sending domain
      { key: "X-MS-Exchange-Organization-AuthSource", value: "BL6PEPF0001AB54.namprd02.prod.outlook.com", flagged: false },
  
      // ── Microsoft Exchange Metadata ──────────────────────────────────────────
      { key: "X-MS-Exchange-Organization-SCL", value: "-1", flagged: true }, // SCL -1 means bypassed spam filtering — likely whitelisted or misconfigured; dangerous for a failed-auth message
      { key: "X-MS-Exchange-AtpMessageProperties", value: "SA|SL", flagged: false },
      { key: "X-MS-Exchange-Organization-MessageDirectionality", value: "Incoming", flagged: false },
      { key: "X-EOPAttributedMessage", value: "0", flagged: false },
      { key: "X-MS-UserLastLogonTime", value: "12/17/2024 2:41:52 PM", flagged: false },
  
      // ── Message Structure ────────────────────────────────────────────────────
      { key: "Message-ID", value: "<0c6c2c2eda48cf1d3e91e843b7c8d2d8d5f016e8@hotmail.com>", flagged: true }, // domain matches forged From — not a genuine Hotmail-generated Message-ID
      { key: "Content-Type", value: "multipart/alternative; boundary=\"01abb4b29f5b744f6cc634af5ab010b636\"", flagged: false },
      { key: "Content-Transfer-Encoding", value: "quoted-printable", flagged: true }, // used to fragment keywords (e.g. "а" via =D0=B0 Cyrillic) to evade content filters
      { key: "X-IncomingTopHeaderMarker", value: "OriginalChecksum:B3E22F525890F20166F2AD39C46F52CCD90A23A7BA9727DC9CDA50584B2D40F3; SizeAsReceived:361; Count:7", flagged: true }, // only 7 headers on arrival — unusually sparse for a legitimate Hotmail message; consistent with a minimal spoofed submission
    ],

    redFlags: [
      // Critical
      { flag: "From address forged as recipient's own Hotmail account", severity: "Critical" },
      { flag: "SPF, DKIM, and DMARC all fail — From address definitively spoofed", severity: "Critical" },
      { flag: "Actual sender is boyerfinancialplanning.com — hijacked third-party domain", severity: "Critical" },
      { flag: "Extortion demand: $1,850 in Litecoin with 48-hour deadline", severity: "Critical" },
  
      // High
      { flag: "Fabricated Pegasus spyware claim with no proof of compromise", severity: "High" },
      { flag: "Cyrillic look-alike characters used to fragment keywords (filter evasion)", severity: "High" },
      { flag: "White-on-white hidden junk text interspersed in HTML (filter evasion)", severity: "High" },
      { flag: "Microsoft Sender ID check (X-SID-Result) explicitly failed", severity: "High" },
      { flag: "Exchange authenticated sender as Anonymous — not a logged-in user", severity: "High" },
  
      // Medium
      { flag: "SCL set to -1 (spam filter bypassed) despite all auth checks failing", severity: "Medium" },
      { flag: "Message-ID domain matches forged From — not genuine Hotmail-issued", severity: "Medium" },
      { flag: "Quoted-printable encoding used to obfuscate body text", severity: "Medium" },
  
      // Low
      { flag: "Only 7 headers present on arrival — unusually sparse for Hotmail", severity: "Low" },
      { flag: "No personalisaton beyond recipient email address — mass template", severity: "Low" },
    ],

    analysis: [
      {
        step: "1. The 'Sent From Your Own Account' Illusion",
        content:
          "The email's most impactful psychological trick is making it appear to have been sent from the recipient's own Hotmail address. Both the From and Return-Path headers show leeadrian841@hotmail.com, and the To field is the same address — creating the impression the attacker is inside the account. However, the authentication headers immediately disprove this: SPF explicitly fails because the actual sending IP (23.230.37.82) belongs to boyerfinancialplanning.com, which Microsoft does not recognise as an authorised sender for hotmail.com. DKIM is entirely absent. DMARC fails. Microsoft's own Sender ID result is FAIL, and Exchange logged the sender as 'Anonymous'. The account was not compromised — the headers were simply forged.",
        codeBlock: {
          language: "text",
          title: "Authentication-Results — all three fail",
          code: `Authentication-Results:
    spf=fail   (sender IP 23.230.37.82 is NOT authorised for hotmail.com)
               smtp.mailfrom=hotmail.com
               helo=boyerfinancialplanning.com   ← actual sending domain
    dkim=none  (message not signed)
    dmarc=fail action=none header.from=hotmail.com
  
  X-SID-Result: FAIL
  X-MS-Exchange-Organization-AuthAs: Anonymous`,
        },
      },
      {
        step: "2. The Pegasus Claim Is Fabricated",
        content:
          "The email claims Pegasus spyware was installed on all of the recipient's devices by tricking them into clicking a malicious link. No evidence is provided: no screenshot, no sample file, no device identifier, no proof of recorded footage, no demonstration of data access. Real Pegasus infections are nation-state-grade operations costing hundreds of thousands of dollars per target — they are not used for $1,850 cryptocurrency extortion schemes. This is a mass-template sextortion campaign sent to large lists of harvested email addresses. The attacker has no footage, no access, and no spyware on any device.",
      },
      {
        step: "3. Spam Filter Evasion Techniques",
        content:
          "Three distinct evasion techniques are present in this email. First, Cyrillic look-alike characters are substituted for Latin letters throughout the body — 'а' (U+0430, Cyrillic) replaces 'a' (U+0061, Latin) in key words such as 'address', 'transaction', and 'published'. These look identical to humans but are different bytes, causing keyword-matching filters to miss them. Second, white-on-white hidden text (<font color=#ffffff>) is scattered throughout the HTML — random alphanumeric strings invisible to the reader but present to text-based spam classifiers, shifting the statistical word distribution. Third, quoted-printable encoding fragments the text at the byte level (=D0=B0 for Cyrillic 'а'), adding another layer of obfuscation.",
        codeBlock: {
          language: "text",
          title: "Evasion techniques in the HTML body",
          code: `1. Cyrillic substitution (looks identical, different bytes):
     "аddress"  → а = U+0430 (Cyrillic а), not U+0061 (Latin a)
     "trаnsfer" → same substitution
     "рublished"→ р = U+0440 (Cyrillic р)
  
  2. White-on-white hidden junk text (invisible to reader):
     <font color="#ffffff">G4jlDki 8T0Bf3 6G79SV6A 0Dmj3E4K mPbqqG4i 2ef32.</font>
     <font color="#ffffff">hk0xv2a eO0V Dv9vBI U5ZOztvk x05N P20U3.</font>
     [dozens more instances throughout]
  
  3. Quoted-printable encoding of Cyrillic characters:
     =D0=B0 → а (Cyrillic а)
     =D0=B5 → е (Cyrillic е)
     =D1=80 → р (Cyrillic р)`,
        },
      },
      {
        step: "4. Extortion Demand & Cryptocurrency Wallet",
        content:
          "The email demands $1,850 in Litecoin (LTC) to the wallet address ltc1qcdz3jh8zqhq3vapaudk2wkx9a8q9mtszty0pzk. A 48-hour deadline is imposed after the email is opened, with a false claim that the attacker will be notified when it is read. The recipient is warned not to contact police, not to reply (as the sender claims to have sent it from the recipient's own account), and not to reset devices. These warnings are psychological pressure tactics — none of them have any technical basis, as there is no actual device access. The Litecoin wallet should be reported to relevant cryptocurrency abuse databases.",
        codeBlock: {
          language: "text",
          title: "Extortion demand extracted from body",
          code: `Amount:  $1,850 USD
  Currency: Litecoin (LTC)
  Wallet:   ltc1qcdz3jh8zqhq3vapaudk2wkx9a8q9mtszty0pzk
  Deadline: 48 hours from email open
  Threat:   Distribute fabricated/non-existent videos to all contacts`,
        },
      },
    ],

    recommendations: [
      "Do not pay — no footage exists and no device has been compromised. This is a mass-template scam sent to millions of addresses.",
      "Do not reply, and do not attempt to negotiate — any engagement confirms the address is active.",
      "Report the email as phishing/scam in Outlook using the built-in 'Report' button.",
      "Report the Litecoin wallet address to the Crypto Abuse DB at https://www.cryptoscamdb.org.",
      "Report the sending IP (23.230.37.82) and domain (boyerfinancialplanning.com) to AbuseIPDB.",
      "If concerned about account security, change your Hotmail password and enable two-factor authentication — not because this email proves compromise, but as good practice.",
      "Verify that your account has not actually been accessed by checking Hotmail's sign-in activity log at account.microsoft.com/security.",
    ],

    techniques: [
      "Email Spoofing (Self-Send Illusion)",
      "Sextortion / Fabricated Compromise Claim",
      "Cyrillic Look-Alike Character Substitution",
      "White-on-White HTML Text Injection (Bayesian Poisoning)",
      "Quoted-Printable Keyword Fragmentation",
      "Cryptocurrency Extortion",
      "Fear / Urgency / Deadline Manipulation",
    ],

    iocs: [
      { type: "Domain", value: "boyerfinancialplanning.com" },
      { type: "IP", value: "23.230.37.82" },
      { type: "Email", value: "leeadrian841@hotmail.com (forged — not a real sender)" },
      { type: "Crypto Wallet", value: "ltc1qcdz3jh8zqhq3vapaudk2wkx9a8q9mtszty0pzk (Litecoin)" },
      { type: "Crypto Amount", value: "$1,850 USD in LTC" },
    ],
  },

  // ── CASE 4: Cloud Payment Scam ───────────────────────────────────────────
  {
    id: "failure-notice-gcs-cloud-payment-phishing",
    title: "Fake 'Failure Notice' Cloud Payment Phishing",
    subtitle: "GCS bucket phishing with multi-layer identity fabrication and advanced HTML evasion",
    date: "2026-02-27",
    severity: "Critical",
    category: "Phishing",
    tags: ["Credential Harvesting", "GCS Bucket Abuse", "Identity Fabrication", "Bayesian Poisoning", "Invalid HTML Evasion"],
    summary:
      "An email with the subject 'Failure Notice' — designed to mimic a mail delivery bounce — actually contains a cloud payment phishing page hosted on a second Google Cloud Storage bucket (storage.googleapis.com/noonchi/). The sending infrastructure is a Ukrainian cooking blog subdomain (sb100014.cozycook.biz.ua) whose IP resolves to dashboard.freedommobile.ca, a Canadian mobile carrier — entirely unrelated to the claimed sender. The attacker fabricated the recipient's own Gmail address as the original sender using two forged headers (X-Original-Sender and X-Google-Sender-Delegation), and built the From address around the recipient's username to heighten the illusion of a self-originated message. DKIM passes but only for a nonsensical deeply-nested subdomain. DMARC is absent. The email body deploys four simultaneous spam filter evasion techniques: invalid custom HTML tag names, structured junk token blocks, a scraped government voter registration table, and a completely fabricated Content-Transfer-Encoding value. The same efianalytics.com tracking hop present in Case 1 reappears here, suggesting shared infrastructure.",
    verdict: "Confirmed Phishing — Same Infrastructure Cluster as Case 1",
    tldr: "Fake bounce notice hiding a GCS-hosted cloud payment phishing page. Recipient's own Gmail used as fabricated sender. Four simultaneous spam evasion techniques. Shares efianalytics.com hop with Case 1.",

    screenshots: [
    // { url: "/images/failure-notice-email.png", caption: "The email rendered as a cloud payment notice despite the 'Failure Notice' subject", alt: "Phishing email screenshot" },
    // { url: "/images/failure-notice-gcs-page.png", caption: "The GCS-hosted landing page at storage.googleapis.com/noonchi/", alt: "GCS phishing page" },
    ],

    emailHeaders: [
      // ── Delivery & Routing ──────────────────────────────────────────────────
      { key: "Delivered-To", value: "me@gmail.com", flagged: true }, // duplicate conflicting Delivered-To — same template error pattern as Case 1
      { key: "Return-Path", value: "<leeadrian841@sb100014.cozycook.biz.ua>", flagged: true }, // recipient's username grafted onto attacker's Ukrainian subdomain
      { key: "Received", value: "from sb100014.cozycook.biz.ua (dashboard.freedommobile.ca. [89.252.175.150]) by mx.google.com with ESMTPS id a640c23a62f3a-b935a9c96c6si297972366b; Thu, 26 Feb 2026 23:49:42 -0800 (PST)", flagged: true }, // claimed host is a Ukrainian cooking blog; PTR resolves to a Canadian mobile carrier
      { key: "Received", value: "from efianalytics.com (efianalytics.com. 216.244.76.116)", flagged: true }, // same third-party analytics tracking hop as Case 1 — shared infrastructure
      { key: "X-Received", value: "by 2002:a17:907:2d91:b0:b93:7d70:20a0 with SMTP id a640c23a62f3a-b937d7025e8mr42402366b; Thu, 26 Feb 2026 23:49:42 -0800 (PST)", flagged: false },
      { key: "X-Originating-IP", value: "217.18.210.147", flagged: true }, // differs from SMTP relay IP (89.252.175.150) — email composed on a separate host
  
      // ── Sender Identity ─────────────────────────────────────────────────────
      { key: "From", value: "leeadrian841 <leeadrian841-4393@Xd3nc.sb100014.cozycook.biz.ua>", flagged: true }, // recipient's username in both display name and localpart — engineered to appear self-originated
      { key: "Sender", value: "leeadrian841@Xd3nc.WVksarv.sb100014.cozycook.biz.ua", flagged: true }, // deeply nested nonsense subdomain; Sender ≠ From subdomain (Xd3nc.sb vs Xd3nc.WVksarv.sb)
      { key: "To", value: "me@aol.com", flagged: true  }, // To address is an AOL account unrelated to the Gmail recipient — bulk send template mismatch
      { key: "X-Original-Sender", value: "<leeadrian841@gmail.com>", flagged: true }, // fabricated — implies Gmail account is the true origin; it is not
      { key: "X-Google-Sender-Delegation", value: "leeadrian841@gmail.com Trusted Sender", flagged: true }, // fabricated Google header; same trick as Case 1 but now includes recipient's Gmail address to reinforce impersonation
  
      // ── Content ─────────────────────────────────────────────────────────────
      { key: "Subject", value: "Failure Notice", flagged: true }, // deliberate mismatch — body is a cloud payment notice; "Failure Notice" mimics a mail bounce to slip past subject-based filters
      { key: "Date", value: "Fri, 27 Feb 2026 08:44:22 +0100", flagged: true }, // ~9 hours ahead of the Gmail receipt timestamp (23:49 PST = 07:49 UTC+1) — clock skew consistent with pre-scheduled or queued bulk send
      { key: "Precedence", value: "bulk", flagged: true }, // self-identified as bulk mail
  
      // ── Authentication ───────────────────────────────────────────────────────
      { key: "Authentication-Results", value: "mx.google.com; dkim=pass header.i=@Xd3nc.WVksarv.sb100014.cozycook.biz.ua header.s=mail; spf=pass smtp.mailfrom=leeadrian841@sb100014.cozycook.biz.ua",                      flagged: true  }, // DKIM passes only for a junk nested subdomain — not rcn.com, not hotmail.com, not any real service; DMARC entirely absent
      { key: "Received-SPF", value: "pass (google.com: domain of leeadrian841@sb100014.cozycook.biz.ua designates 89.252.175.150 as permitted sender) client-ip=89.252.175.150",                                  flagged: false }, // technically passes — attacker controls cozycook.biz.ua
      { key: "DKIM-Signature", value: "v=1; a=rsa-sha1; d=Xd3nc.WVksarv.sb100014.cozycook.biz.ua; s=mail; h=Sender:From:To:Message-ID:List-Unsubscribe:Date:Content-Type:MIME-Version:Subject",                    flagged: true  }, // rsa-sha1 is cryptographically deprecated; signing domain is a nonsense subdomain with no relation to any real sender
      { key: "DomainKey-Signature", value: "a=rsa-sha1; c=nofws; d=Xd3nc.WVksarv.sb100014.cozycook.biz.ua",                                                                                                             flagged: true  }, // DomainKeys is a legacy predecessor to DKIM, deprecated since 2007 — no modern mail infrastructure uses it; presence here suggests very old or repurposed spam tooling
  
      // ── Suspicious / Fabricated Headers ─────────────────────────────────────
      { key: "X-Google-Original-Message-ID", value: "<-@vevida.net>", flagged: true }, // malformed Message-ID (starts with '-'); vevida.net is a Dutch hosting provider unrelated to this email; header appears fabricated
      { key: "List-Unsubscribe", value: "<http://WVksarv.nuo/LEAVE=To>", flagged: true }, // .nuo is not a valid TLD — this domain does not exist; unsubscribe link is a dead placeholder
      { key: "X-Forwarded-Encrypted", value: "i=2; AJvYcCW/asQOZq05WHuxqRhhIO2O+nkfvs4i8gtarMBkAh3+OrWOVZtv6jg82ccVVwqBnDs/CKC1RcklTTrp9tc=@gmail.com", flagged: false },
  
      // ── Message Structure ────────────────────────────────────────────────────
      { key: "Message-ID", value: "<17972-leeadrian841@WVksarv.nuo>", flagged: true }, // domain uses same non-existent .nuo TLD as the List-Unsubscribe
      { key: "Content-Length", value: "353", flagged: true }, // first Content-Length declaration
      { key: "Content-Length", value: "1245", flagged: true }, // duplicate conflicting Content-Length — two different values in same message; violates RFC 2822
      { key: "MIME-Version", value: "1.0", flagged: false },
      { key: "Content-Type", value: "multipart/digest; boundary=\"----=_Part_987654321\"", flagged: false },
      { key: "Content-Transfer-Encoding", value: "AAreoGVrkJ", flagged: true }, // completely fabricated encoding value — not base64, quoted-printable, 7bit, 8bit, or binary; identical evasion pattern to Case 1's "amazonses"
    ],

    redFlags: [
      // Critical
      { flag: "Phishing payload hosted on second GCS bucket (storage.googleapis.com/noonchi/)", severity: "Critical" },
      { flag: "Subject 'Failure Notice' deliberately mismatches cloud payment body content", severity: "Critical" },
      { flag: "Recipient's own Gmail address fabricated as sender via X-Original-Sender", severity: "Critical" },
      { flag: "X-Google-Sender-Delegation forged with recipient's Gmail address", severity: "Critical" },
      { flag: "DMARC entirely absent; DKIM only passes for a nonsense junk subdomain", severity: "Critical" },
      { flag: "HTML body uses hundreds of invalid custom tag names as spam filter evasion", severity: "Critical" },
  
      // High
      { flag: "Sending IP resolves to dashboard.freedommobile.ca — unrelated Canadian carrier", severity: "High" },
      { flag: "Sending domain is a Ukrainian cooking blog subdomain (cozycook.biz.ua)", severity: "High" },
      { flag: "Same efianalytics.com tracking hop as Case 1 — shared attacker infrastructure", severity: "High" },
      { flag: "Body contains structured junk token blocks as Bayesian poisoning", severity: "High" },
      { flag: "Scraped government voter registration table injected into body", severity: "High" },
      { flag: "To address (me@aol.com) does not match actual recipient — bulk send error", severity: "High" },
  
      // Medium
      { flag: "Duplicate conflicting Content-Length headers (353 vs 1245)", severity: "Medium" },
      { flag: "Duplicate conflicting Delivered-To headers — same as Case 1 template error", severity: "Medium" },
      { flag: "Date header is ~9 hours ahead of actual receipt time", severity: "Medium" },
      { flag: "DomainKey-Signature present — deprecated since 2007, signals old spam tooling", severity: "Medium" },
      { flag: "X-Originating-IP differs from SMTP relay — composed on separate host", severity: "Medium" },
      { flag: "Precedence: bulk — self-identifies as mass mail", severity: "Medium" },
  
      // Low
      { flag: "List-Unsubscribe uses a non-existent .nuo TLD", severity: "Low" },
      { flag: "Message-ID uses same non-existent .nuo TLD", severity: "Low" },
      { flag: "Content-Transfer-Encoding is a fabricated non-MIME value (AAreoGVrkJ)", severity: "Low" },
      { flag: "X-Google-Original-Message-ID is malformed and references unrelated vevida.net", severity: "Low" },
    ],

    analysis: [
      {
        step: "1. Subject/Body Mismatch as a Filter Bypass",
        content:
          "The subject line reads 'Failure Notice', mimicking a standard mail delivery failure (bounce) notification — a category of email that users are conditioned to open and act on quickly. However, the actual HTML body is titled 'Cloud Payment Notice' and presents a cloud storage subscription billing alert with a prominent CTA button. This deliberate mismatch is a subject-line evasion tactic: subject-based spam classifiers scanning for 'payment', 'account locked', or 'subscription' keywords will score this message lower because the subject contains none of those terms.",
      },
      {
        step: "2. Identity Fabrication — Recipient's Own Gmail as the Sender",
        content:
          "This email goes further than Case 1 in impersonating the recipient. The From display name and localpart both incorporate the recipient's username (leeadrian841). More importantly, two fabricated headers explicitly name the recipient's real Gmail account as the origin: X-Original-Sender and X-Google-Sender-Delegation. Neither header is authentic — X-Original-Sender is not a Google infrastructure header, and X-Google-Sender-Delegation with a freeform value is a forgery (as established in Case 1). The goal is to make any recipient who inspects headers believe their Gmail account was the actual sender, creating panic about a compromise that does not exist.",
        codeBlock: {
          language: "text",
          title: "Fabricated sender identity headers",
          code: `From:              leeadrian841 <leeadrian841-4393@Xd3nc.sb100014.cozycook.biz.ua>
  Sender:            leeadrian841@Xd3nc.WVksarv.sb100014.cozycook.biz.ua
  Return-Path:       <leeadrian841@sb100014.cozycook.biz.ua>
  X-Original-Sender: <leeadrian841@gmail.com>           ← fabricated
  X-Google-Sender-Delegation: leeadrian841@gmail.com Trusted Sender  ← fabricated
  
  Actual sending infrastructure:
    SMTP relay:   sb100014.cozycook.biz.ua
    IP:           89.252.175.150  →  dashboard.freedommobile.ca (Canadian mobile carrier)
    Origin IP:    217.18.210.147  (separate composition host)`,
        },
      },
      {
        step: "3. DKIM Pass on a Nonsense Subdomain",
        content:
          "Authentication-Results shows dkim=pass, which might appear reassuring at a glance. However the signing domain is Xd3nc.WVksarv.sb100014.cozycook.biz.ua — a four-level deep subdomain under a Ukrainian cooking blog. DKIM passing on this domain proves nothing about the legitimacy of the message; it only proves the attacker controls the DNS for their own subdomain and configured it correctly. Critically, DMARC is entirely absent, which means there is no alignment check tying the DKIM-signing domain to the visible From address. The two domains (Xd3nc.WVksarv.sb100014.cozycook.biz.ua for DKIM vs Xd3nc.sb100014.cozycook.biz.ua for From) are not even the same subdomain — the Sender field adds an extra WVksarv label that the From field omits.",
        codeBlock: {
          language: "text",
          title: "DKIM subdomain mismatch and absence of DMARC",
          code: `DKIM-Signature: d=Xd3nc.WVksarv.sb100014.cozycook.biz.ua   ← signing domain
  From:              leeadrian841-4393@Xd3nc.sb100014.cozycook.biz.ua  ← different subdomain
  DMARC:             (absent — no alignment check performed)
  
  Result: DKIM pass is technically valid but entirely meaningless for trust.`,
        },
      },
      {
        step: "4. GCS Bucket Abuse — Second Instance",
        content:
          "The phishing CTA links to storage.googleapis.com/noonchi/noon.html, a different GCS bucket from Case 1 (which used the 'whilewait' bucket). The same technique is in use: a free Google Cloud Storage bucket is used to host the phishing page so that the URL's domain (storage.googleapis.com) carries Google's high reputation score and bypasses URL filtering. Tracking parameters embedded in the URL fragment (act=cl, pid=, uid=, vid=, ofid=, lid=, cid=) are used to identify individual recipients who clicked. Report the 'noonchi' bucket to Google alongside the 'whilewait' bucket from Case 1.",
        codeBlock: {
          language: "text",
          title: "GCS phishing URL",
          code: `https://storage.googleapis.com/noonchi/noon.html
    #?act=cl&pid=3471_md&uid=2&vid=25295&ofid=198&lid=160&cid=533743
  
  GCS Bucket: noonchi  (storage.googleapis.com)
  Tracking params: act, pid, uid, vid, ofid, lid, cid`,
        },
      },
      {
        step: "5. Four Simultaneous Spam Evasion Techniques",
        content:
          "This is the most heavily-evasion-layered email in the set. Four distinct techniques are deployed simultaneously in the body. First, the entire HTML structure uses randomly generated tag names (<kxxpurb4dw>, <gijx40pdyq>, <yjwigh1m6m>, etc.) instead of valid HTML elements — these are not rendered by browsers but are parsed by email security scanners, diluting the ratio of meaningful content to junk tokens. Second, hundreds of structured alphanumeric token blocks ([14_14_Aa] delimited) are injected to poison statistical classifiers. Third, a scraped government voter registration form table ('Voter Information') with empty cells is injected to add legitimate-looking structural content. Fourth, the Content-Transfer-Encoding is set to the fabricated value 'AAreoGVrkJ' (identical in pattern to Case 1's 'amazonses'), which may cause some parsers to skip content analysis on the affected MIME part.",
        codeBlock: {
          language: "text",
          title: "Evasion techniques in the HTML body",
          code: `1. Invalid custom HTML tag names (not rendered, confuse parsers):
     <kxxpurb4dw>...</e3e6cglzk4>  <gijx40pdyq>...</g1gt46hh1k>
     <gspqr87frp class="TitleMessageTableStyle">...
  
  2. Structured junk token blocks (Bayesian poisoning):
     <kxxpurb4dw>..._____[14_14_Aa]__..._-_..._[14_14_Aa]_...
     [hundreds of blocks with identical delimiter pattern]
  
  3. Scraped voter registration table (legitimacy padding):
     <gspqr87frp class="TitleMessageTableStyle">Voter Information</...>
     [empty table rows with GenLabelBold CSS class from a government web app]
  
  4. Fabricated Content-Transfer-Encoding:
     Content-Transfer-Encoding: AAreoGVrkJ  (not a valid MIME encoding)`,
        },
      },
      {
        step: "6. Infrastructure Overlap with Case 1",
        content:
          "The presence of the efianalytics.com hop (216.244.76.116) in both this email and Case 1, combined with the identical Content-Transfer-Encoding forgery pattern, the duplicate Delivered-To template error, and the GCS bucket abuse technique, strongly suggests both emails originate from the same threat actor or campaign infrastructure. The IP 89.252.175.150 used here also shares the same /16 subnet (89.252.x.x) as Case 1's IP (89.252.161.234), further supporting shared hosting or the same bulletproof hosting provider.",
        codeBlock: {
          language: "text",
          title: "Infrastructure overlap with Case 1",
          code: `Shared indicator               Case 1                    This email
  ─────────────────────────────────────────────────────────────────
  efianalytics.com hop           216.244.76.116             216.244.76.116  ✓
  SMTP IP /16 subnet             89.252.161.234             89.252.175.150  ✓ (same /16)
  Content-Transfer-Encoding      amazonses (fake)           AAreoGVrkJ (fake) ✓
  Duplicate Delivered-To         me@gmail.com               me@gmail.com    ✓
  GCS bucket abuse               whilewait                  noonchi         ✓ (same technique)`,
        },
      },
    ],

    recommendations: [
      "Report both GCS buckets ('noonchi' and 'whilewait') to Google at https://support.google.com/code/contact/cloud_platform_report.",
      "Report the sending IP (89.252.175.150) and the shared efianalytics.com IP (216.244.76.116) to AbuseIPDB — the infrastructure overlap with Case 1 may help attribute a broader campaign.",
      "Do not be reassured by DKIM=pass — always check what domain is actually being signed (header.i) and whether it matches the visible From domain.",
      "Treat any 'Failure Notice' or 'Mail Delivery Failed' email containing a CTA button with extreme scepticism — legitimate bounce messages never contain payment prompts.",
      "Consider blocking the entire 89.252.0.0/16 subnet at your mail gateway if these emails are recurring.",
      "Note that the 'noonchi' GCS bucket URL and tracking parameters (cid=533743, vid=25295) can be shared with Google's Trust & Safety team as additional campaign fingerprints.",
    ],

    techniques: [
      "Subject/Body Content Mismatch (Filter Evasion)",
      "Recipient Identity Fabrication",
      "GCS Bucket Abuse (Second Instance)",
      "Invalid HTML Tag Name Injection",
      "Structured Token Block Injection (Bayesian Poisoning)",
      "Scraped Legitimate Content Injection",
      "Fabricated MIME Encoding Value",
      "DomainKey Legacy Signature (Old Spam Tooling)",
      "DKIM Pass on Nonsense Subdomain",
    ],

    iocs: [
      { type: "Domain", value: "sb100014.cozycook.biz.ua" },
      { type: "Domain", value: "Xd3nc.WVksarv.sb100014.cozycook.biz.ua" },
      { type: "Domain", value: "dashboard.freedommobile.ca" },
      { type: "Domain", value: "efianalytics.com" },
      { type: "IP", value: "89.252.175.150" },
      { type: "IP", value: "217.18.210.147" },
      { type: "IP", value: "216.244.76.116 (efianalytics.com — shared with Case 1)" },
      { type: "URL", value: "https://storage.googleapis.com/noonchi/noon.html" },
      { type: "GCS Bucket", value: "noonchi (storage.googleapis.com)" },
      { type: "Email", value: "leeadrian841@sb100014.cozycook.biz.ua" },
    ],
  },

  // ── CASE 5: Investment Fraud ────────────────────────────────────
  {
    id: "sblc-advance-fee-investment-fraud",
    title: "SBLC Turnkey Funding — Advance Fee Fraud",
    subtitle: "Investment fraud impersonating a trade finance firm via GetResponse ESP, targeting businesses with fabricated SBLC funding promises",
    date: "2026-04-17",
    severity: "High",
    category: "Financial Fraud / Advance Fee Scam",
    tags: ["Advance Fee Fraud", "Investment Scam", "SBLC Fraud", "Unsolicited Bulk Email", "Brand Impersonation"],
    summary:
      "An unsolicited bulk email sent via the legitimate GetResponse email marketing platform on behalf of tradefinancedirect.com (operated by Grayku LLC) promotes a fabricated 'SBLC Turnkey Non-Recourse Funding' programme. The email promises returns of $3.5M–$28M USD within 20–30 days in exchange for an upfront participation fee of $50K–$400K USD per spot — a textbook advance fee fraud structure. Unlike the phishing cluster in Cases 1, 4, and 5, all authentication checks pass legitimately because the attacker registered a real domain, configured proper DKIM for it, and used a paid ESP. The BNP Paribas bank logo is displayed without any affiliation to add false institutional credibility. The recipient was silently added to the attacker's mailing list without consent on 19 June 2025, as evidenced by the Require-Recipient-Valid-Since header. The registered address (16192 Coastal Highway, Lewes, DE 19958) is a Delaware registered-agent address used by thousands of shell companies, not a real operational office.",
    verdict: "Confirmed Financial Fraud — SBLC Advance Fee Scam",
    tldr: "Fake trade finance firm promising millions in 20-30 days for a $50K–$400K upfront fee. All auth passes — sent via GetResponse with a real domain. Classic advance fee fraud. Do not pay any fee.",

    screenshots: [
    // { url: "/images/sblc-email.png", caption: "The SBLC funding email as rendered", alt: "SBLC fraud email screenshot" },
    // { url: "/images/sblc-landing.png", caption: "grayku.com/turnkey-sblc/lp2/ landing page", alt: "SBLC fraud landing page" },
    ],

    emailHeaders: [
      // ── Delivery & Routing ──────────────────────────────────────────────────
      { key: "Return-Path", value: "<bounce-197450001@bounce.gr-mail5.com>", flagged: false }, // legitimate GetResponse bounce address — consistent with paid ESP use
      { key: "Received", value: "from mta-10.theta.gr-mail5.com ([104.160.68.233]) by mx.google.com with ESMTPS id 6a1803df08f44-8b02af0e1f8si16485536d6; Fri, 17 Apr 2026 06:57:56 -0700 (PDT)", flagged: false }, // legitimate GetResponse MTA
  
      // ── Sender Identity ─────────────────────────────────────────────────────
      { key: "From", value: "\"Trade Finance Team\" <info@tradefinancedirect.com>", flagged: true  }, // domain is a purpose-registered fraudulent finance site, not a regulated institution
      { key: "Reply-To", value: "info@tradefinancedirect.com", flagged: false },
  
      // ── Content ─────────────────────────────────────────────────────────────
      { key: "Subject", value: "Important Confirmation Needed - Funding Request", flagged: true  }, // false urgency — "confirmation needed" implies a prior request the recipient never made
      { key: "Date", value: "Fri, 17 Apr 2026 13:07:25 +0000", flagged: false },
      { key: "Precedence", value: "bulk", flagged: true  }, // self-identified as bulk mail — recipient never opted in
  
      // ── Authentication ───────────────────────────────────────────────────────
      { key: "Authentication-Results", value: "mx.google.com; dkim=pass header.i=@gr-mail5.com; dkim=pass header.i=@tradefinancedirect.com; spf=pass smtp.mailfrom=bounce-197450001@bounce.gr-mail5.com; dmarc=pass (p=NONE sp=NONE dis=NONE) header.from=tradefinancedirect.com", flagged: false }, // all pass — attacker paid for a real domain and real ESP; authentication is not a detection signal here
      { key: "Received-SPF",   value: "pass (google.com: domain of bounce-197450001@bounce.gr-mail5.com designates 104.160.68.233 as permitted sender) client-ip=104.160.68.233",                              flagged: false },
      { key: "DKIM-Signature", value: "a=rsa-sha256; d=gr-mail5.com; s=k1024e; h=Sender:From:To:Subject:Message-ID:List-Unsubscribe",                                                                         flagged: false }, // legitimate GetResponse platform signature
      { key: "DKIM-Signature", value: "a=rsa-sha256; d=tradefinancedirect.com; s=ac01a113; h=Sender:From:To:Subject:Message-ID:List-Unsubscribe",                                                             flagged: false }, // legitimate sender domain signature — domain was properly configured
  
      // ── ESP & Campaign Metadata ──────────────────────────────────────────────
      { key: "Feedback-ID", value: "c=o1may4:u=bvgaev:broadcast:getresponse", flagged: false }, // legitimate GetResponse campaign ID
      { key: "Message-ID", value: "<getresponse.xserial.s56bGG6SOxSka...@gr-mail5.com>", flagged: false }, // legitimate GetResponse Message-ID format
      { key: "List-Unsubscribe", value: "<https://app.getresponse.com/one_click_unsubscribe.html?...>, <mailto:listunsubscribe@gr-mail5.com?...>",                                                             flagged: false }, // legitimate GetResponse unsubscribe mechanism
      { key: "List-Unsubscribe-Post", value: "List-Unsubscribe=One-Click", flagged: false },
      { key: "X-Complaints-To", value: "abuse@gr-mail5.com", flagged: false }, // legitimate abuse reporting address for GetResponse
      { key: "X-CSA-Complaints", value: "csa-complaints@eco.de", flagged: false },
  
      // ── Suspicious Headers ───────────────────────────────────────────────────
      { key: "Require-Recipient-Valid-Since", value: "leeadrian841@gmail.com; Thu, 19 Jun 2025 23:36:05 +0000", flagged: true }, // reveals recipient was added to the attacker's GetResponse list on 19 Jun 2025 — without consent; email address was harvested
      { key: "MIME-Version", value: "1.0", flagged: false },
      { key: "Content-Type", value: "multipart/alternative; boundary=8f6aedeba39276a6c36fc7567d059d4c", flagged: false },
      { key: "Content-Transfer-Encoding", value: "quoted-printable", flagged: false },
    ],

    redFlags: [
      // Critical
      { flag: "Promises $3.5M–$28M USD returns in 20–30 days — economically impossible", severity: "Critical" },
      { flag: "Requires $50K–$400K USD upfront participation fee — advance fee fraud structure", severity: "Critical" },
      { flag: "Recipient's email harvested and added to mailing list without consent (Jun 2025)", severity: "Critical" },
      { flag: "\"Non-Recourse: No Repayment Necessary\" — fabricated legal framing to justify the upfront fee", severity: "Critical" },
  
      // High
      { flag: "tradefinancedirect.com is a purpose-registered fraudulent finance domain", severity: "High" },
      { flag: "BNP Paribas bank logo used without any affiliation to manufacture credibility", severity: "High" },
      { flag: "Registered address is a Delaware shell company agent — not a real office", severity: "High" },
      { flag: "Subject implies a prior 'funding request' the recipient never submitted", severity: "High" },
      { flag: "Grayku LLC is the actual operator — not a regulated financial institution", severity: "High" },
  
      // Medium
      { flag: "Authentication passes completely — will evade all automated header-based filters", severity: "Medium" },
      { flag: "Sent via legitimate ESP (GetResponse) to borrow platform trust", severity: "Medium" },
      { flag: "Unsolicited bulk mail (Precedence: bulk) to a harvested address", severity: "Medium" },
      { flag: "Pool batch option ($50K × 8 clients) designed to lower entry barrier for victims", severity: "Medium" },
  
      // Low
      { flag: "DMARC policy is p=NONE — even a failure would not have blocked delivery", severity: "Low" },
      { flag: "Images hosted on grayku.com reveal the true operator behind tradefinancedirect.com", severity: "Low" },
    ],

    analysis: [
      {
        step: "1. What Is an SBLC Scam",
        content:
          "SBLC (Standby Letter of Credit) fraud is a well-documented financial scam targeting business owners and project developers seeking large capital. A real SBLC is a legitimate bank instrument used as a payment guarantee — but scammers use the terminology to construct elaborate fake investment programmes. The core mechanic is always the same: promise enormous, guaranteed returns (here $3.5M–$28M in 20–30 days) in exchange for a substantial upfront 'participation fee', 'issuance cost', or 'programme entry spot' (here $50K–$400K). Once the fee is paid, the returns never materialise, and the operator disappears or invents additional fees to delay and extract more money. No regulated bank or financial institution offers guaranteed non-recourse returns of 56% LTV in under a month.",
      },
      {
        step: "2. Why Authentication Passing Makes This More Dangerous",
        content:
          "This email is the inverse of Cases 1, 4, and 5 in terms of authentication. Every check passes cleanly: DKIM is signed for both gr-mail5.com and tradefinancedirect.com using rsa-sha256, SPF passes for the GetResponse relay, and DMARC passes for tradefinancedirect.com. The attacker invested in a real domain, configured DNS records correctly, and paid for a legitimate email marketing platform (GetResponse). This means no spam filter will flag this email on authentication grounds — the only detection signals are the content itself and the behavioural pattern of the unsolicited financial offer.",
        codeBlock: {
          language: "text",
          title: "Authentication-Results — all pass legitimately",
          code: `dkim=pass  header.i=@gr-mail5.com     (GetResponse platform DKIM)
dkim=pass  header.i=@tradefinancedirect.com (sender domain DKIM — properly configured)
spf=pass   smtp.mailfrom=bounce-197450001@bounce.gr-mail5.com
dmarc=pass (p=NONE sp=NONE dis=NONE) header.from=tradefinancedirect.com
          
Assessment: Authentication signals are useless for detection here.
            The fraud is entirely in the content and financial claims.`,
        },
      },
      {
        step: "3. Recipient Email Was Harvested Without Consent",
        content:
          "The Require-Recipient-Valid-Since header reveals that leeadrian841@gmail.com was added to the attacker's GetResponse contact list on 19 June 2025 — approximately 10 months before this email was sent. The recipient never subscribed to any trade finance newsletter or funding programme. This header is used by GetResponse to validate that an email address existed before it was added to a list, but here it inadvertently exposes the precise date the address was harvested and uploaded to the campaign list. This constitutes unsolicited commercial email (spam) under most jurisdictions' anti-spam laws.",
        codeBlock: {
          language: "text",
          title: "Email harvest date exposed in header",
          code: `Require-Recipient-Valid-Since: leeadrian841@gmail.com; Thu, 19 Jun 2025 23:36:05 +0000
                                                ↑
                                Date address was added to GetResponse list
                                Recipient never subscribed — address was harvested`,
        },
      },
      {
        step: "4. Financial Claims Are Economically Impossible",
        content:
          "The programme advertises returns that are structurally impossible for any legitimate financial product. A $50K contribution returning $3.5M in 20–30 days represents a 7,000% return in under a month. The '10-month' programme promises each participant in an 8-person pool '0.6 × 100M × 0.75 / 8 clients = ~$5.6M per month' — a total of $56M per client over 10 months on a $50K investment. No SBLC, letter of credit, or trade finance instrument produces returns of this magnitude. BNP Paribas is displayed as the 'issuing bank' with their logo — BNP Paribas has no affiliation with this programme and their brand is being used without authorisation to manufacture institutional legitimacy.",
        codeBlock: {
          language: "text",
          title: "Fabricated financial claims extracted from email body",
          code: `Entry fee:
$400,000 USD per individual spot
OR $50,000 USD per person (pool of 8 clients = $400K combined)
          
Promised returns (individual):
20–30 days:   $3,500,000 USD   (7,000% return in under 1 month)
10 months:    ~$56,250,000 USD (112,500% total return)
          
Promised returns (full $400K spot):
20–30 days:   $28,000,000 USD
10 months:    $478,000,000 USD
          
"Issuing Bank": BNP Paribas (logo used — no actual affiliation)
"Non-Recourse": No repayment required — framing designed to justify the upfront fee`,
        },
      },
      {
        step: "5. Operator Identity — Grayku LLC",
        content:
          "The email footer discloses the true operator as 'Grayku LLC, 16192 Coastal Highway, Lewes, DE 19958'. This address is a registered agent service in Delaware used by thousands of anonymous shell companies — it is not an operational office. The domain grayku.com hosts all images used in the email, confirming it is the actual campaign infrastructure. tradefinancedirect.com is a purpose-registered front domain. Neither entity appears in any financial regulator's register (FCA, SEC, MAS, ASIC) as an authorised firm. Receiving a second similar email, as noted, is consistent with the address being sold or shared across multiple campaign lists once confirmed as active.",
        codeBlock: {
          language: "text",
          title: "Operator details extracted from email footer",
          code: `Disclosed operator: Grayku LLC
Address:  16192 Coastal Highway, Lewes, DE 19958, USA
            ↑ Delaware registered-agent address (not a real office)
          
Domains:
tradefinancedirect.com  ← sender/front domain
grayku.com              ← image hosting / actual campaign infrastructure
          
ESP account:        GetResponse (Feedback-ID: c=o1may4:u=bvgaev)
Regulated?          No — not registered with FCA, SEC, MAS, or any known regulator`,
        },
      },
    ],

    recommendations: [
      "Do not pay any participation fee, entry cost, or 'programme spot' — no legitimate investment returns $3.5M on a $50K entry in 20–30 days. Any upfront fee demanded is the fraud itself.",
      "Report the email as spam to GetResponse at abuse@gr-mail5.com and via the one-click unsubscribe — filing an abuse report may get the campaign account suspended.",
      "Report Grayku LLC and tradefinancedirect.com to the FTC (reportfraud.ftc.gov) and the SEC's fraud tip line (sec.gov/tcr) if you are in the US.",
      "If you are in Singapore, report to the Singapore Police Force Anti-Scam Command (I-Witness portal) and MAS (Monetary Authority of Singapore) for unlicensed financial solicitation.",
      "Verify any financial firm making unsolicited funding offers against your regulator's register before engaging — MAS Financial Institutions Directory, FCA Register, SEC EDGAR.",
      "The fact that you have received two similar emails indicates your address has been added to a harvested list. Consider whether your email was exposed in a data breach at haveibeenpwned.com.",
      "Do not reply to such email or visit grayku.com — both actions confirm to the sender that your address is active and monitored.",
    ],

    techniques: [
      "Advance Fee Fraud (SBLC/Trade Finance Variant)",
      "Legitimate ESP Abuse (GetResponse)",
      "Purpose-Registered Fraudulent Domain",
      "Unauthorized Brand Use (BNP Paribas)",
      "Shell Company / Registered Agent Address",
      "False Urgency ('Confirmation Needed')",
      "Harvested Mailing List Without Consent",
      "Pool Batch Option (Lower Entry Barrier for Victims)",
    ],

    iocs: [
      { type: "Domain", value: "tradefinancedirect.com" },
      { type: "Domain", value: "grayku.com" },
      { type: "Email", value: "info@tradefinancedirect.com" },
      { type: "URL", value: "https://www.grayku.com/turnkey-sblc/lp2/" },
      { type: "URL", value: "https://www.grayku.com/brussels-sblc/mailer5/" },
      { type: "IP", value: "104.160.68.233 (GetResponse MTA — shared infrastructure, lower priority IOC)" },
      { type: "Company", value: "Grayku LLC, 16192 Coastal Highway, Lewes, DE 19958 (shell company address)" },
      { type: "ESP", value: "GetResponse account: Feedback-ID c=o1may4:u=bvgaev" },
      { type: "Brand", value: "BNP Paribas (impersonated — displayed without affiliation)" },
    ],
  },

  // ── CASE 6: Interpol Compensation Fraud ────────────────────────────────────
  {
    id: "imf-interpol-compensation-advance-fee-fraud",
    title: "Fake IMF / INTERPOL Compensation — Advance Fee & PII Harvesting",
    subtitle: "419-style fraud impersonating the IMF and INTERPOL via a compromised US ISP account",
    date: "2026-04-04",
    severity: "High",
    category: "Advance Fee Fraud / PII Harvesting",
    tags: ["419 Fraud", "Advance Fee", "IMF Impersonation", "INTERPOL Impersonation", "PII Harvesting", "Compromised Account", "Reply-To Hijack"],
    summary:
      "A classic 419-style advance fee fraud sent from a personal South Carolina ISP account (brs1944@sccoast.net) — likely compromised or purpose-created — impersonating the IMF and INTERPOL. The email claims $2,500,000 USD has been 'recovered' in the recipient's name and will be delivered via an 'ATM Visa Card', but requires a 'delivery fee' and the recipient's full name, phone number, and home address. The delivery fee is the advance fee hook — once paid, additional fees will be invented indefinitely. The PII solicitation additionally enables identity theft. All authentication passes legitimately, and Vade email security marked it clean. A Reply-To misdirection redirects responses to a separate Yahoo account (charlesflanagan221@yahoo.com) while a Gmail address and US phone number are embedded in the body as the actual contact channels. The infrastructure mirrors Case 2 (RFNet BEC) almost exactly: same Zimbra version, same X-Vade-Verdict: clean, same ISP account pattern, same originating IP / relay discrepancy.",
    verdict: "Confirmed 419 Advance Fee Fraud — IMF/INTERPOL Impersonation",
    tldr: "Fake IMF 'compensation' of $2.5M delivered via ATM card, requiring a 'delivery fee' and your home address. Classic 419 advance fee structure. All auth passes. Do not reply, do not pay any fee, do not provide personal details.",
  
    screenshots: [
      // { url: "/images/imf-fraud-email.png", caption: "The IMF compensation fraud email", alt: "IMF fraud email screenshot" },
    ],
  
    emailHeaders: [
      // ── Delivery & Routing ──────────────────────────────────────────────────
      { key: "Return-Path",      value: "<brs1944@sccoast.net>",                                                                                                                                                 flagged: true  }, // personal South Carolina ISP account — not an IMF or INTERPOL address
      { key: "Received",         value: "from mail.gci.net ([129.80.43.150]) by mx.google.com with ESMTPS id 6a1803df08f44-8a593ee312asi122586996d6; Sat, 04 Apr 2026 15:18:44 -0700 (PDT)",                    flagged: false }, // legitimate sccoast.net / GCI mail relay
      { key: "Received",         value: "from [10.219.153.78] helo=md01.beryl.email-ash1.sync.lan by smtp.beryl.email-ash1.sync.lan (envelope-from <brs1944@sccoast.net>); Sat, 04 Apr 2026 18:18:39 -0400",    flagged: true  }, // routed through Beryl commercial mailing platform (sync.lan) before hitting sccoast.net SMTP
      { key: "X-Originating-IP", value: "[45.144.114.204]",                                                                                                                                                     flagged: true  }, // differs from GCI/sccoast relay (129.80.43.150) — email composed on a separate host; consistent with compromised account operated remotely
      { key: "X-Mailer",         value: "Zimbra 10.1.16_GA_4850 (ZimbraWebClient - GC146 (Win)/10.1.16_GA_4863)",                                                                                               flagged: true  }, // identical Zimbra version and client type to Case 2 (RFNet BEC probe) — possible shared tooling or same actor
  
      // ── Sender Identity ─────────────────────────────────────────────────────
      { key: "From", value: "c <brs1944@sccoast.net>", flagged: true }, // display name is a single letter "c" — placeholder never populated; South Carolina ISP not affiliated with IMF or INTERPOL
      { key: "Reply-To", value: "c <charlesflanagan221@yahoo.com>", flagged: true }, // Reply-To redirects to a Yahoo account distinct from the sending address — classic misdirection to receive replies on attacker-controlled inbox
      { key: "To", value: "(not present — likely BCC or undisclosed recipients)", flagged: true }, // absence of To header suggests mass BCC send to harvested list
      { key: "X-Vade-Verdict", value: "clean", flagged: true }, // Vade security marked this clean — same failure as Case 2; all auth passes so automated filters do not flag it
  
      // ── Content ─────────────────────────────────────────────────────────────
      { key: "Subject", value: "ATTENTION",                                                                                                                                                             flagged: true  }, // single-word all-caps subject — no context; designed to create urgency and curiosity without triggering keyword filters
      { key: "Date", value: "Sat, 4 Apr 2026 18:18:39 -0400 (EDT)",                                                                                                                                 flagged: false },
  
      // ── Authentication ───────────────────────────────────────────────────────
      { key: "Authentication-Results", value: "mx.google.com; dkim=pass header.i=@sccoast.net header.s=20180516; spf=pass smtp.mailfrom=brs1944@sccoast.net; dmarc=pass (p=NONE sp=NONE dis=NONE) header.from=sccoast.net", flagged: false }, // all three pass — account is legitimate; authentication cannot detect this fraud
      { key: "Received-SPF", value: "pass (google.com: domain of brs1944@sccoast.net designates 129.80.43.150 as permitted sender) client-ip=129.80.43.150",                                         flagged: false },
      { key: "DKIM-Signature", value: "v=1; a=rsa-sha256; d=sccoast.net; s=20180516; h=From:Subject:Date:To:MIME-Version:Content-Type",                                                                flagged: false }, // legitimate rsa-sha256 — unlike Cases 4/5 which used deprecated rsa-sha1
  
      // ── Campaign / Platform Metadata ─────────────────────────────────────────
      { key: "Feedback-ID", value: "bos:htc:res:beryl",                                                                                                                                                    flagged: true  }, // Beryl commercial mailing platform used to route the send — same pattern as Case 2's use of legitimate relay infrastructure
      { key: "X-Vade-Client", value: "BERYL",                                                                                                                                                                 flagged: false },
      { key: "Thread-Index", value: "A5C61+tSbJ9IPeN3uREZIV4YbLmBHg==",                                                                                                                                    flagged: false },
      { key: "Thread-Topic", value: "ATTENTION",                                                                                                                                                            flagged: false },
  
      // ── Message Structure ────────────────────────────────────────────────────
      { key: "Message-ID",       value: "<2004971955.123888740.1775341119597.JavaMail.zimbra@sccoast.net>",                                                                                                      flagged: false },
      { key: "MIME-Version",     value: "1.0",                                                                                                                                                                  flagged: false },
      { key: "Content-Type",     value: "multipart/alternative; boundary=\"=_5445523c-8912-4883-a6cb-d793eac78743\"",                                                                                           flagged: false },
      { key: "Content-Transfer-Encoding", value: "7bit", flagged: false },
    ],
  
    redFlags: [
      // Critical
      { flag: "IMF and INTERPOL impersonation — neither organisation disburses funds via ATM cards", severity: "Critical" },
      { flag: "\"Delivery fee\" required for $2.5M compensation — textbook advance fee fraud hook", severity: "Critical" },
      { flag: "Solicits full name, phone number, and home address — PII for identity theft", severity: "Critical" },
      { flag: "Reply-To redirects to separate Yahoo account — replies go to attacker, not sender", severity: "Critical" },
  
      // High
      { flag: "Sending account (brs1944@sccoast.net) is a personal ISP with no IMF/INTERPOL affiliation", severity: "High" },
      { flag: "X-Originating-IP differs from SMTP relay — account operated from a separate remote host", severity: "High" },
      { flag: "Contact details in body (Gmail + US phone) are the real fraud operation channels", severity: "High" },
      { flag: "Display name is a single letter 'c' — template placeholder left blank", severity: "High" },
      { flag: "Vade security marked clean — fraud entirely undetected by automated filters", severity: "High" },
  
      // Medium
      { flag: "All authentication passes — cannot be detected by header analysis alone", severity: "Medium" },
      { flag: "Sent via Beryl commercial mailing platform (Feedback-ID: beryl) to add relay legitimacy", severity: "Medium" },
      { flag: "DMARC policy is p=NONE — even a DMARC failure would not have blocked delivery", severity: "Medium" },
      { flag: "Identical Zimbra version and client to Case 2 (RFNet BEC) — possible shared tooling", severity: "Medium" },
      { flag: "72-hour deadline imposed — urgency tactic to prevent due diligence", severity: "Medium" },
  
      // Low
      { flag: "No To header — email likely sent as BCC to a mass harvested list", severity: "Low" },
      { flag: "Subject 'ATTENTION' in all caps — generic lure with no keyword filter triggers", severity: "Low" },
    ],
  
    analysis: [
      {
        step: "1. The IMF/INTERPOL Compensation Scam Explained",
        content:
          "This is a variant of the classic '419 advance fee fraud', named after the Nigerian criminal code section that covers it. The specific flavour here is the 'compensation' or 'unclaimed funds' lure: the recipient is told a large sum ($2.5M) has been recovered in their name by an authoritative international body (IMF + INTERPOL), and needs only to pay a small 'delivery fee' to receive it. Once the fee is paid, the fraudster invents additional fees — insurance, taxes, customs clearance, legal certification — each one just small enough that the victim keeps paying to protect their perceived investment. The ATM card delivery mechanism is a common variant: it avoids bank wire transfer red flags and is familiar enough to seem plausible. The IMF does not disburse funds via ATM cards. INTERPOL does not manage financial compensation programmes.",
      },
      {
        step: "2. PII Harvesting as a Secondary Goal",
        content:
          "Beyond the advance fee, the email requests full name, phone number, and home address within 72 hours. This PII has standalone value independent of whether the victim pays: it can be sold to other fraud operations, used for identity theft, or used to send physical mail scams. The 72-hour deadline is designed to pressure a response before the recipient thinks critically. Victims who provide PII but never pay any fee are still at risk — their details circulate in fraud databases and they will receive further targeted scam attempts calibrated to their apparent profile.",
        codeBlock: {
          language: "text",
          title: "PII solicitation and contact channels in email body",
          code: `Requested PII (within 72 hours):
    Full Name
    Phone Number
    Current Address
  
  Attacker contact channels:
    Reply-To:  charlesflanagan221@yahoo.com   ← receives all replies
    Body Gmail: charlesrflanagan9@gmail.com   ← direct contact
    Body phone: +1 (724) 270-4267             ← US phone (area code: Pittsburgh, PA)
  
  Sending account: brs1944@sccoast.net        ← compromised/purpose-created ISP account
                                                (replies do NOT go here)`,
        },
      },
      {
        step: "3. Reply-To Misdirection",
        content:
          "The From address (brs1944@sccoast.net) is a South Carolina ISP account used only to send the email. The Reply-To is set to a separate Yahoo account (charlesflanagan221@yahoo.com). Any recipient who hits 'Reply' will send their response — and any PII they include — directly to the attacker's Yahoo inbox, not to the sccoast.net account. A third contact channel (charlesrflanagan9@gmail.com) and a US phone number are embedded in the body for victims who respond directly rather than replying. This three-channel approach (Yahoo for replies, Gmail and phone for direct contact) is designed so that even if one channel is suspended, the operation continues.",
        codeBlock: {
          language: "text",
          title: "Reply-To misdirection flow",
          code: `Recipient hits 'Reply'  →  charlesflanagan221@yahoo.com  (attacker inbox)
                                           NOT brs1944@sccoast.net
  Recipient emails body address →  charlesrflanagan9@gmail.com
  Recipient calls body number   →  +1 (724) 270-4267 (Pittsburgh, PA area code)
  
  All three channels converge on the same fraud operation.
  sccoast.net account is purely a disposable send vehicle.`,
        },
      },
      {
        step: "4. Infrastructure Overlap with Case 2 (RFNet BEC)",
        content:
          "Two technical fingerprints connect this email to the RFNet BEC probe (Case 2). First, the Zimbra version is identical: Zimbra 10.1.16_GA_4850, same WebClient, same Windows platform. Second, both emails pass all three authentication checks and are marked clean by Vade security, indicating the attacker understands that using a legitimate ISP account is the most reliable way to evade automated filtering. The ISP differs (sccoast.net here vs rcn.com in Case 2), but the operational template — compromise or create a personal ISP webmail account, send from it, redirect replies to a separate attacker-controlled inbox — is identical. This may be the same actor, a related group sharing tooling, or simply convergent evolution of a common fraud technique.",
        codeBlock: {
          language: "text",
          title: "Infrastructure comparison: Case 2 (RFNet BEC) vs Case 7 (IMF Fraud)",
          code: `Indicator                   Case 2 (RFNet BEC)              Case 7 (IMF Fraud)
  ────────────────────────────────────────────────────────────────────────
  Zimbra version              10.1.16_GA_4850                10.1.16_GA_4850        ✓ identical
  X-Mailer client             ZimbraWebClient (FF/Windows)   ZimbraWebClient (GC/Windows) ≈ similar
  X-Vade-Verdict              clean                          clean                  ✓ identical
  Auth result                 DKIM/SPF/DMARC all pass        DKIM/SPF/DMARC all pass ✓ identical
  Sending account type        Personal ISP (rcn.com)         Personal ISP (sccoast.net) ✓ same pattern
  X-Orig-IP ≠ relay           162.243.8.41 vs 129.213.13.252 45.144.114.204 vs 129.80.43.150 ✓ same pattern
  Reply-To misdirection       No (BEC probe — no reply-to)   Yes (Yahoo account)    ≈ related technique`,
        },
      },
    ],
  
    recommendations: [
      "Do not reply, do not call +1 (724) 270-4267, and do not email charlesrflanagan9@gmail.com or charlesflanagan221@yahoo.com — any contact confirms your address is active and will escalate targeting.",
      "Do not pay any 'delivery fee', 'insurance fee', 'customs clearance', or any other charge — this is the fraud mechanism itself and fees will multiply indefinitely.",
      "Do not provide your full name, phone number, or home address — this PII has independent value for identity theft and will be sold to other fraud operations.",
      "Report the Yahoo contact account (charlesflanagan221@yahoo.com) to Yahoo at abuse@yahoo-inc.com.",
      "Report the Gmail contact (charlesrflanagan9@gmail.com) to Google at support.google.com/mail/answer/8253.",
      "Report the phone number (+1 724-270-4267) to the FTC at reportfraud.ftc.gov.",
      "If you are in Singapore, file a report with the Singapore Police Force Anti-Scam Command via the I-Witness portal at eservices.police.gov.sg.",
      "Report the sending account (brs1944@sccoast.net) to sccoast.net / GCI abuse at abuse@sccoast.net — the account is likely compromised and the legitimate owner should be notified.",
    ],
  
    techniques: [
      "419 Advance Fee Fraud (IMF/INTERPOL Compensation Variant)",
      "International Organisation Impersonation (IMF + INTERPOL)",
      "Reply-To Misdirection to Separate Attacker Inbox",
      "PII Harvesting (Name, Phone, Home Address)",
      "Compromised / Purpose-Created ISP Account",
      "Fake Urgency (72-Hour Deadline)",
      "Using legitimate ISP Account to pass Authentication",
    ],
  
    iocs: [
      { type: "Email",   value: "brs1944@sccoast.net (sending account — likely compromised)" },
      { type: "Email",   value: "charlesflanagan221@yahoo.com (Reply-To — attacker inbox)" },
      { type: "Email",   value: "charlesrflanagan9@gmail.com (body contact — attacker Gmail)" },
      { type: "Phone",   value: "+1 (724) 270-4267 (Pittsburgh, PA area code — attacker phone)" },
      { type: "IP",      value: "45.144.114.204 (X-Originating-IP — remote composition host)" },
      { type: "Domain",  value: "sccoast.net (South Carolina ISP — account likely compromised)" },
      { type: "Org",     value: "IMF (impersonated — no affiliation)" },
      { type: "Org",     value: "INTERPOL (impersonated — no affiliation)" },
    ],
  },

  // ── CASE 7: UN Compensation Fraud ────────────────────────────────────
  {
    id: "un-compensation-advance-fee-fraud",
    title: "Fake UN Compensation — Advance Fee Fraud",
    subtitle: "Crude 419 fraud impersonating the United Nations via a compromised Argentine ISP account",
    date: "2026-04-12",
    severity: "High",
    category: "Advance Fee Fraud / PII Harvesting",
    tags: ["419 Fraud", "Advance Fee", "UN Impersonation", "Compromised Account", "PII Harvesting", "Cross-Continent Operation"],
    summary:
      "A crude, low-effort 419 advance fee fraud impersonating the United Nations, sent from a compromised or purpose-created Argentinian ISP account (omarcapone@fibertel.com.ar — Fibertel is a Cablevisión residential broadband service in Argentina). The email claims '$50 million dollars' has been approved by the UN as compensation for being a 'victim of scam', and instructs the recipient to respond via a Gmail address (charleswscharf593@gmail.com) or US phone number (+1 213 357 2744). The email contains no proper Subject line, no Thread-Topic, no To address, no Reply-To, no display name beyond 'compensation', and only 8 lines of ungrammatical body text — the lowest effort of all cases analysed. Despite its crudeness, all authentication checks pass because the attacker operates through a real ISP webmail account. The X-Originating-IP (129.222.206.18) resolves to an Ecuadorian ISP, while the sending account is Argentinian and the contact number is US — a three-continent infrastructure pattern consistent with an organised 419 operation using proxies or compromised accounts across jurisdictions. The Gmail contact address impersonates the name of Charles W. Scharf, the CEO of Wells Fargo, as a decoy identity.",
    verdict: "Confirmed 419 Advance Fee Fraud — UN Impersonation (Low Effort Variant)",
    tldr: "Crude UN compensation scam offering $50M from a compromised Argentinian ISP account. Blank subject, typos, and a Gmail contact impersonating the Wells Fargo CEO's name. Do not reply. Same fraud family as the IMF/INTERPOL compensation case.",
  
    screenshots: [
      // { url: "/images/un-compensation-email.png", caption: "The UN compensation fraud email", alt: "UN fraud email screenshot" },
    ],
  
    emailHeaders: [
      // ── Delivery & Routing ──────────────────────────────────────────────────
      { key: "Return-Path", value: "<omarcapone@fibertel.com.ar>", flagged: true }, // Argentinian residential ISP account (Fibertel = Cablevisión broadband); no affiliation with the UN
      { key: "Received", value: "from smtp.fibertel.com.ar (avasmr03-slo1.fibertel.com.ar. [24.232.0.196]) by mx.google.com with ESMTPS id a92af1059eb24-12c345a133csi26838434c88; Sun, 12 Apr 2026 03:05:04 -0700 (PDT)", flagged: false }, // legitimate Fibertel Argentina SMTP relay
      { key: "Received", value: "from vZMTA02.fibertel.com.ar [201.212.7.85] by avasmr03-slo1.int.fibertel.com.ar (Postfix) with ESMTPS; Sun, 12 Apr 2026 07:04:33 -0300 (-03)", flagged: false }, // internal Fibertel routing — legitimate
      { key: "Received", value: "from vzmbox09-fc.int.fibertel.com.ar [10.120.162.6] by vzmta02-fc.int.fibertel.com.ar (Postfix) with ESMTP; Sun, 12 Apr 2026 07:03:36 -0300 (ART)", flagged: false }, // internal Fibertel webmail server — legitimate
      { key: "X-Originating-IP", value: "[129.222.206.18]", flagged: true }, // differs from Fibertel relay (24.232.0.196) — email composed from a separate remote host, consistent with compromised account
      { key: "X-Mailer", value: "Zimbra 8.6.0_GA_1191 (ZimbraWebClient - GC146 (Win)/8.6.0_GA_1191)", flagged: true }, // Zimbra 8.6.0 is a very old version (released 2014, end-of-life) — Fibertel runs an outdated Zimbra deployment that is easier to compromise; matches attacker targeting pattern
  
      // ── Sender Identity ─────────────────────────────────────────────────────
      { key: "From", value: "compensation <omarcapone@fibertel.com.ar>", flagged: true }, // display name is literally the word "compensation" — a template field left as-is; Argentine ISP account not affiliated with the UN
      { key: "To", value: "(absent)", flagged: true }, // no To header present — mass BCC send to harvested list
      { key: "Subject", value: "(blank)", flagged: true }, // subject line is completely empty — template error or deliberate keyword filter evasion
      { key: "Thread-Topic", value: "(blank)", flagged: true }, // Thread-Topic also blank — confirms subject was intentionally or carelessly left empty

      // ── Content ─────────────────────────────────────────────────────────────
      { key: "Subject", value: "(empty)", flagged: true }, // completely blank Subject field — unusual for legitimate mail and often bypasses keyword-based spam filters that only scan subjects
      { key: "Thread-Topic", value: "(empty)", flagged: true }, // also empty — consistent with template fields left unpopulated
      { key: "Date", value: "Sun, 12 Apr 2026 07:03:36 -0300 (ART)", flagged: false },
      
      // ── Authentication ───────────────────────────────────────────────────────
      { key: "Authentication-Results", value: "mx.google.com; dkim=pass header.i=@fibertel.com.ar header.s=mail; spf=pass smtp.mailfrom=omarcapone@fibertel.com.ar", flagged: false }, // both pass — attacker uses a legitimate ISP account; authentication cannot detect this fraud
      { key: "Received-SPF", value: "pass (google.com: domain of omarcapone@fibertel.com.ar designates 24.232.0.196 as permitted sender) client-ip=24.232.0.196", flagged: false },
      { key: "DKIM-Signature", value: "v=1; a=rsa-sha256; d=fibertel.com.ar; s=mail; h=x-mailer:content-type:mime-version:subject:message-id:from:date", flagged: false }, // legitimate Fibertel ISP DKIM signature using rsa-sha256
      { key: "DMARC", value: "(absent — no DMARC record for fibertel.com.ar)", flagged: true }, // Fibertel does not publish a DMARC record, so no alignment check is performed; allows future spoofing of the same domain
  
      // ── Message Structure ────────────────────────────────────────────────────
      { key: "Message-ID", value: "<501530683.70105152.1775988216568.JavaMail.zimbra@fibertel.com.ar>", flagged: false }, // legitimate Zimbra-generated Message-ID
      { key: "MIME-Version", value: "1.0", flagged: false },
      { key: "Content-Type", value: "multipart/alternative; boundary=\"----=_Part_70105151_1278397881.1775988216567\"", flagged: false },
      { key: "Content-Transfer-Encoding", value: "7bit", flagged: false },
    ],
  
    redFlags: [
      // Critical
      { flag: "UN impersonation — the United Nations does not distribute compensation via email", severity: "Critical" },
      { flag: "$50 million payout offered to a stranger via email — economically absurd", severity: "Critical" },
      { flag: "Sent from a compromised Argentinian residential ISP account (Fibertel)", severity: "Critical" },
      { flag: "X-Originating-IP in Ecuador while sending account is Argentinian — account hijacking", severity: "Critical" },
      { flag: "Body Gmail (charleswscharf593@gmail.com) impersonates name of Wells Fargo CEO Charles W. Scharf", severity: "Critical" },
  
      // High
      { flag: "Completely empty Subject line — subject-based spam filter evasion", severity: "High" },
      { flag: "No To header — mass BCC send to harvested email list", severity: "High" },
      { flag: "No Reply-To — forces victim to email body address, leaving no header trace", severity: "High" },
      { flag: "Display name 'compensation' is a role placeholder, not a real person/organisation", severity: "High" },
      { flag: "Contact redirects to Gmail + US phone while sending from Argentina — three-continent infrastructure", severity: "High" },
      { flag: "Victim-shaming framing: 'compensation for being a victim of scam' targets prior scam victims on sucker lists", severity: "High" },
  
      // Medium
      { flag: "Authentication passes completely — cannot be detected by automated header analysis", severity: "Medium" },
      { flag: "Fibertel has no DMARC record — no alignment enforcement for the domain", severity: "Medium" },
      { flag: "Zimbra version 8.6.0 (2014, end-of-life) — outdated and vulnerable mail server", severity: "Medium" },
      { flag: "Ungrammatical body text ('been a victim of scam by the wrong people who paraded')", severity: "Medium" },
      { flag: "Self-aware spam disclaimer ('if you found this in your junk/spam') — attempts to pre-empt filter suspicion", severity: "Medium" },
  
      // Low
      { flag: "Thread-Topic also empty — template fields left blank", severity: "Low" },
      { flag: "No timestamps or case reference numbers to add false legitimacy", severity: "Low" },
      { flag: "Legitimate account holder name (Omar Capone) unrelated to 'compensation' display name", severity: "Low" },
    ],
  
    analysis: [
      {
        step: "1. The UN Compensation Scam — a 419 Subfamily",
        content:
          "This is a textbook variant of the '419 compensation scam' — a subfamily of West African advance fee fraud that specifically targets recipients on 'sucker lists' (email lists of people who have previously been defrauded). The framing is deliberately sympathetic: the recipient is positioned as a past victim of unscrupulous scammers, and the UN is now graciously compensating them. This framing works on two levels — it validates the recipient's potential prior experience of being scammed, and it positions the current sender as the ethical authority making things right. Once contact is established, the standard 419 playbook applies: invented fees for 'processing', 'insurance', 'anti-money-laundering certification', or 'legal clearance' are requested to release the promised $50M, and each fee triggers additional fees indefinitely.",
      },
      {
        step: "2. Why This Is the Lowest-Effort Email in the Dataset",
        content:
          "Unlike the elaborate HTML templates of Cases 1, 4, 5, and 6, this email is only eight lines of plain ungrammatical text. There is no Subject, no Thread-Topic, no To address, no branding, no case reference number, no document attachment, no typography, and the body contains grammatical errors ('been a victim of scam by the wrong people who paraded themselves on what they are not'). The operation invests minimal effort per message and relies on mass-volume distribution via compromised ISP accounts. The low effort does not mean low success — 419 operators specifically rely on this minimal-effort style because it filters out sceptical recipients and leaves only the most credulous to respond, reducing the operator's workload per successful conversion.",
        codeBlock: {
          language: "text",
          title: "Complete email body (verbatim)",
          code: `This is a true compensation Approved by the UNITED NATION to
  compensate you for been a victim of scam by the wrong people who
  paraded themselves on what they are not so because of this, the United
  Nation approved our Bank to process online bank with valid cash of
  $50 million dollars in your favor in order to compensate you.
  Get back as soon as possible.
  
  Note: if you found this email in your junk/spam, it's because of your
  internet IP server, We look forward to your prompt response
  
  Respond via email below:
    Email: charleswscharf593@gmail.com
    OR    +1(213) 357-2744`,
        },
      },
      {
        step: "3. The Cross-Continent Infrastructure Pattern",
        content:
          "The email exhibits a three-continent operational pattern that is characteristic of organised 419 operations. The sending account (omarcapone@fibertel.com.ar) is on an Argentinian residential ISP — likely compromised credentials purchased from a broader ISP account dump, or a purpose-created account registered using stolen Argentinian identity. The X-Originating-IP (129.222.206.18) resolves to Ecuador, meaning the attacker composed the email from an Ecuadorian network, not Argentina — indicating remote access to the Argentinian webmail account via proxy, VPN, or direct compromise. The reply channels (Gmail + US 213 area code phone) are US-based. This geographical spread serves two purposes: it makes law enforcement investigation harder because three different jurisdictions are involved, and it allows the operator to receive victim replies in an English-speaking jurisdiction while the compromised sending account and payload composition happen in South America.",
        codeBlock: {
          language: "text",
          title: "Cross-continent infrastructure breakdown",
          code: `Function                    Location           Evidence
  ─────────────────────────────────────────────────────────────────
  Sending SMTP account        Argentina          omarcapone@fibertel.com.ar (Fibertel / Cablevisión)
  Sending IP (relay)          Argentina          24.232.0.196 (Fibertel Buenos Aires)
  Email composition host      Ecuador            129.222.206.18 (Claro / Ecuadorian ISP)
  Reply Gmail address         United States      charleswscharf593@gmail.com (Google infra)
  Contact phone number        United States      +1 213 357 2744 (Los Angeles, CA area code)
  
  Legitimate account owner:   Omar Capone (Argentinian residential customer — victim of compromise)`,
        },
      },
      {
        step: "4. Impersonation of Wells Fargo CEO's Name",
        content:
          "The Gmail address provided for contact is charleswscharf593@gmail.com. Charles W. Scharf is the real, current CEO of Wells Fargo & Company — a prominent US bank. The attacker has crafted the Gmail username specifically to match the name of a well-known financial executive, likely to provide an extra layer of false credibility if the victim searches the name online. This is a deliberate choice: if a victim does due diligence on the name 'Charles W. Scharf', they find a real banking executive at a real Fortune 100 bank, which may reinforce their belief that the UN compensation offer is legitimate. Scharf has no affiliation with any UN compensation programme, and the real Wells Fargo CEO does not correspond via Gmail accounts to random individuals about UN payouts.",
        codeBlock: {
          language: "text",
          title: "Impersonated identity",
          code: `Gmail address in email body:   charleswscharf593@gmail.com
  Apparent impersonation of:     Charles W. Scharf
  Real identity:                 CEO and President of Wells Fargo & Company
                                 (since October 2019)
  
  Attacker's purpose:            Victim searches the name → finds real banking executive
                                  → perceived legitimacy increases
                                  → conversion rate improves
  
  Real Charles W. Scharf's actual contact:  via Wells Fargo corporate channels only`,
        },
      },
      {
        step: "5. Comparison to IMF/INTERPOL Fraud Case",
        content:
          "This case and the IMF/INTERPOL fraud case are members of the same 419 fraud family but differ in effort level. Both impersonate major international organisations (UN here, IMF + INTERPOL in the other case), both offer an implausibly large compensation sum ($50M here, $2.5M in the other case), both request follow-up contact on channels different from the sending account (Gmail + US phone in both), and both pass all authentication checks by using legitimate ISP accounts. The critical difference is polish: the IMF/INTERPOL fraud case has a proper Subject ('ATTENTION'), specific PII requests, a structured body, and a Reply-To misdirection. This case has no Subject, no PII ask, no Reply-To, and ungrammatical text. Both are the same category of attack operated by similar actor profiles — but the IMF/INTERPOL fraud case is tuned for higher-value targets while this case is mass-blast at minimum cost.",
        codeBlock: {
          language: "text",
          title: "Case 7 vs Case 8 comparison — same fraud family, different effort tier",
          code: `Indicator                   IMF/INTERPOL Case       UN Compensation Case
  ────────────────────────────────────────────────────────────────────────
  Impersonated org            IMF + INTERPOL              United Nations
  Compensation amount         $2,500,000 USD              $50,000,000 USD
  Sending account type        US ISP (sccoast.net)        Argentinian ISP (fibertel.com.ar)
  Authentication              All pass                    All pass (no DMARC)
  Subject line                "ATTENTION"                 (empty)
  Body length                 ~15 lines structured        8 lines ungrammatical
  PII requested               Name, phone, address        None (initial contact only)
  Reply-To redirect           Yes (Yahoo)                 No (body Gmail only)
  Body contact                Gmail + US phone            Gmail + US phone
  Deadline                    72 hours                    "as soon as possible"
  Decoy identity              None named                  Charles W. Scharf (WF CEO)
  Effort tier                 Medium                      Minimum`,
        },
      },
    ],
  
    recommendations: [
      "Do not email charleswscharf593@gmail.com or call +1 (213) 357-2744 — any contact confirms your address is active and will escalate targeting.",
      "Do not pay any fee, provide personal details, or send identity documents regardless of what the follow-up message claims is required.",
      "Report the Gmail contact (charleswscharf593@gmail.com) to Google at support.google.com/mail/answer/8253 — use of a real bank CEO's name strengthens the abuse report.",
      "Report the phone number (+1 213-357-2744) to the FTC at reportfraud.ftc.gov.",
      "Report the compromised account (omarcapone@fibertel.com.ar) to Fibertel abuse at abuse@fibertel.com.ar — the legitimate account holder deserves to be notified their account is being used for fraud.",
      "If you are in Singapore, file a report with the Singapore Police Force Anti-Scam Command via the I-Witness portal at eservices.police.gov.sg.",
      "If you have previously lost money to a scam and received this email as a 'recovery compensation' lure, be aware this is a common second-stage targeting of known fraud victims — report both incidents.",
    ],
  
    techniques: [
      "419 Advance Fee Fraud (UN Compensation Variant)",
      "International Organisation Impersonation (United Nations)",
      "Compromised Residential ISP Account (Fibertel / Argentina)",
      "Cross-Continent Operational Infrastructure",
      "Spam Filter Deflection Script",
      "Empty Subject Line Filter Evasion",
      "Fake Urgency ('Get back as soon as possible')",
      "Sucker List Targeting (Framing as Compensation for Prior Scam)",
      "Decoy Identity Impersonation (Wells Fargo CEO Name)",
      "Mass BCC Send to Harvested List",
      "Self-Aware Spam Disclaimer",
      "Body-Only Contact Redirect (No Reply-To Header)",
    ],
  
    iocs: [
      { type: "Email", value: "omarcapone@fibertel.com.ar (compromised sending account)" },
      { type: "Email", value: "charleswscharf593@gmail.com (body contact — impersonates Wells Fargo CEO name)" },
      { type: "Phone", value: "+1 (213) 357-2744 (Los Angeles CA area code — attacker phone)" },
      { type: "IP", value: "129.222.206.18 (X-Originating-IP — Ecuador composition host)" },
      { type: "IP", value: "24.232.0.196 (Fibertel Argentina SMTP relay)" },
      { type: "Domain", value: "fibertel.com.ar (Argentinian ISP — account compromised)" },
      { type: "Org", value: "United Nations (impersonated — no affiliation)" },
      { type: "Person", value: "Charles W. Scharf (name impersonated — real Wells Fargo CEO, unaffiliated)" },
    ],
  },
];

// =============================================================================
// GUIDE CONTENT
// The content for the Identification Guide page.
// You can edit text here, but the structure should be kept the same.
// =============================================================================
export const GUIDE_CONTENT = {
  overview:
    "Email headers contain metadata that reveals the true origin, routing path, and authentication status of any email. Learning to read them is one of the most powerful skills in identifying phishing, spam, and spoofed messages.",

  // --------------------------------------------------------------------------
  // KEY HEADERS
  // Each header can have an optional `examples` array of screenshots/images.
  // Examples appear when the header is expanded, showing real-world anomalies.
  //
  //   examples: [
  //     {
  //       url: "/images/from-header-spoofed.png",   // public URL or local path
  //       caption: "Notice the display name says 'PayPal' but the address is from a free email provider.",
  //       alt: "Spoofed From header example",
  //     },
  //   ],
  // --------------------------------------------------------------------------
  keyHeaders: [
    {
      name: "From",
      description:
        "The display name and email address shown to the recipient. This can be completely spoofed — it is the least trustworthy header.",
      forensicValue: "Low",
      whatToLook:
        "Compare display name vs actual email address. Look for lookalike domains (paypa1 vs paypal).",
      examples: [],
    },
    {
      name: "Reply-To",
      description:
        "Where replies are actually sent. If different from 'From', this is a major red flag.",
      forensicValue: "High",
      whatToLook:
        "Should match the From domain for legitimate email. Mismatch indicates Reply-To manipulation attack.",
      examples: [],
    },
    {
      name: "Received",
      description:
        "Chain of mail servers the email passed through, in reverse chronological order (bottom = origin).",
      forensicValue: "Critical",
      whatToLook:
        "Read from bottom to top. Check if originating IP matches claimed sender's infrastructure.",
      examples: [],
    },
    {
      name: "Authentication-Results",
      description:
        "Results of SPF, DKIM, and DMARC checks performed by the receiving mail server.",
      forensicValue: "Critical",
      whatToLook:
        "All three should pass for legitimate email. DMARC fail with SPF/DKIM pass can indicate domain spoofing.",
      examples: [],
    },
    {
      name: "X-Originating-IP",
      description:
        "The original IP address of the computer or server that sent the email.",
      forensicValue: "High",
      whatToLook:
        "Look up in threat intelligence databases (VirusTotal, AbuseIPDB). Check geolocation consistency.",
      examples: [],
    },
    {
      name: "Message-ID",
      description: "A unique identifier assigned by the sending server.",
      forensicValue: "Medium",
      whatToLook:
        "Domain portion should match sender's domain. Mismatch suggests third-party sending service.",
      examples: [],
    },
    {
      name: "X-Mailer",
      description: "The software or service used to send the email.",
      forensicValue: "Medium",
      whatToLook:
        "PHPMailer, mass mailer scripts suggest bulk/automated sending. Enterprise systems use different signatures.",
      examples: [],
    },
  ],

  // --------------------------------------------------------------------------
  // DESKTOP GUIDES
  // Each guide can have an optional `screenshots` array.
  // Screenshots appear below the steps to visually show how to access headers.
  //
  //   screenshots: [
  //     {
  //       url: "/images/gmail-show-original.png",
  //       caption: "Click the three-dot menu and select 'Show original'.",
  //       alt: "Gmail Show Original menu option",
  //     },
  //   ],
  // --------------------------------------------------------------------------
  desktopGuides: [
    {
      client: "Gmail (Web Browser)",
      steps: [
        "Open the email you want to inspect",
        "Click the three-dot menu in the top-right corner of the email",
        "Select 'Show original' from the dropdown",
        "A new tab opens with the full raw headers and email body",
        "Look for headers starting with 'Received:', 'Authentication-Results:', 'From:', 'Reply-To:'",
      ],
      tips: "Gmail also provides a 'Copy to clipboard' button in the Show Original view. You can paste headers into online tools like MXToolbox Header Analyzer for automated analysis.",
      screenshots: [],
    },
    {
      client: "Outlook Web App (OWA)",
      steps: [
        "Open the email in Outlook Web App",
        "Click the three-dot menu at the top of the email",
        "Select 'View message details'",
        "A panel opens on the right with the raw message headers",
        "Scroll through to find authentication results and routing information",
      ],
      tips: "In Outlook desktop app: double-click to open email, then go to File tab, then Properties, then look in the Internet headers section.",
      screenshots: [],
    },
    {
      client: "Apple Mail (macOS)",
      steps: [
        "Open the email in Apple Mail",
        "Go to View menu in the menu bar",
        "Select Message then All Headers",
        "Or press Shift + Cmd + H to toggle header visibility",
        "The full header block will appear above the email body",
      ],
      tips: "You can also use View > Message > Raw Source (Shift + Cmd + U) to see the complete raw email including headers and encoded body.",
      screenshots: [],
    },
    {
      client: "Mozilla Thunderbird",
      steps: [
        "Open the email in Mozilla Thunderbird",
        "Go to View menu, then Headers, then All",
        "Or use the keyboard shortcut Ctrl+U to view raw message source",
        "The raw source view shows all headers in original format",
        "Use Ctrl+F to search for specific headers like 'Authentication-Results'",
      ],
      tips: "Thunderbird's raw source view is particularly useful — it shows the complete MIME structure including all parts of multipart emails.",
      screenshots: [],
    },
  ],

  // --------------------------------------------------------------------------
  // MOBILE GUIDES
  // Same optional `screenshots` array as desktop guides above.
  // --------------------------------------------------------------------------
  mobileGuides: [
    {
      client: "Gmail (Android / iOS App)",
      limitation:
        "Gmail mobile app does NOT expose full email headers. You can only see basic From/To/Date/Subject information.",
      steps: [
        "Open the Gmail app and navigate to the email",
        "Tap the three-dot menu in the top-right corner",
        "Tap 'Show details' to see expanded From/To/Date fields",
        "There is NO option to view full technical headers in Gmail mobile",
        "Workaround: Forward the email to yourself and open on desktop",
      ],
      tips: "In a mobile browser (not the app), you may access Gmail's 'Show original' for raw headers on some devices — but results are inconsistent.",
      screenshots: [],
    },
    {
      client: "Outlook (Android / iOS App)",
      limitation:
        "Outlook mobile provides a 'View Message Details' option, but shows significantly less detail than desktop. DKIM/SPF/DMARC results are not displayed.",
      steps: [
        "Open the Outlook mobile app and select the email",
        "Tap the three-dot menu at the top",
        "Scroll down and tap 'View Message Details'",
        "You will see limited header information — mainly basic routing",
        "Full forensic headers are NOT available in the mobile app",
      ],
      tips: "Outlook mobile does show the originating server in some cases. For full analysis, use Outlook on desktop or OWA on a desktop browser.",
      screenshots: [],
    },
    {
      client: "Apple Mail (iPhone / iPad)",
      limitation:
        "iOS Apple Mail has the most restricted header visibility of any major mail client — only the display name and email address are accessible to users.",
      steps: [
        "Open Apple Mail and select the email",
        "Tap and hold on the sender's name at the top",
        "A popup shows the actual email address — this is the only exposure",
        "There is NO way to view full headers in Apple Mail on iOS",
        "To analyze headers, forward the email to a desktop email client",
      ],
      tips: "Power users on iOS can use third-party apps that allow pasting forwarded email content for analysis.",
      screenshots: [],
    },
  ],

  mobileVsDesktopComparison: [
    {
      feature: "View raw email headers",
      desktop: true,
      mobile: false,
      notes: "Mobile apps intentionally hide raw headers for simplicity",
    },
    {
      feature: "SPF/DKIM/DMARC results",
      desktop: true,
      mobile: false,
      notes: "Authentication results only visible on desktop clients",
    },
    {
      feature: "Originating IP address",
      desktop: true,
      mobile: false,
      notes: "X-Originating-IP not shown in mobile apps",
    },
    {
      feature: "Received routing chain",
      desktop: true,
      mobile: false,
      notes: "Server hop chain only visible in full header view",
    },
    {
      feature: "Reply-To inspection",
      desktop: true,
      mobile: "partial",
      notes: "Mobile shows it in some apps only when replying",
    },
    {
      feature: "Message-ID",
      desktop: true,
      mobile: false,
      notes: "Not accessible in any major mobile email app",
    },
    {
      feature: "X-Mailer identification",
      desktop: true,
      mobile: false,
      notes: "Sending software metadata hidden on mobile",
    },
    {
      feature: "Sender display name vs address",
      desktop: true,
      mobile: true,
      notes: "Most mobile apps show both on tap/long-press",
    },
    {
      feature: "Link URL inspection (hover)",
      desktop: true,
      mobile: false,
      notes: "Desktop lets you hover over links; mobile requires long-press",
    },
    {
      feature: "Attachment type verification",
      desktop: true,
      mobile: "partial",
      notes: "Mobile apps show filename but not always MIME type",
    },
  ],

  quickChecklist: [
    "Does the sender domain match the company's real domain?",
    "Is the Reply-To different from the From address?",
    "Does the email create urgency or threaten negative consequences?",
    "Are there any spelling errors or number substitutions in the domain name?",
    "Did SPF, DKIM, and DMARC all pass?",
    "Does the originating IP match the sender's claimed location?",
    "Does the email ask you to click a link or download an attachment unexpectedly?",
    "Can you verify this request through a separate, known communication channel?",
  ],

  tools: [
    {
      name: "MXToolbox Header Analyzer",
      url: "https://mxtoolbox.com/EmailHeaders.aspx",
      description:
        "Paste raw headers for automated analysis and visualization of the email routing chain.",
    },
    {
      name: "Google Admin Toolbox Messageheader",
      url: "https://toolbox.googleapps.com/apps/messageheader/",
      description:
        "Google's own header analyzer — excellent for Gmail headers and SPF/DKIM/DMARC breakdown.",
    },
    {
      name: "VirusTotal",
      url: "https://www.virustotal.com",
      description:
        "Check suspicious domains, URLs, IPs, and file hashes against 70+ threat intelligence databases.",
    },
    {
      name: "AbuseIPDB",
      url: "https://www.abuseipdb.com",
      description:
        "IP reputation database — check if an originating IP has been reported for abuse.",
    },
    {
      name: "WHOIS Lookup",
      url: "https://whois.domaintools.com",
      description:
        "Check domain registration date, registrar, and ownership history.",
    },
    {
      name: "PhishTool",
      url: "https://www.phishtool.com",
      description:
        "Automated phishing email analysis — upload an .eml file for header parsing, URL extraction, and threat scoring.",
    },
    {
      name: "Phishtank",
      url: "https://www.phishtank.com",
      description:
        "Community-driven database of verified phishing URLs.",
    },
  ],
};
