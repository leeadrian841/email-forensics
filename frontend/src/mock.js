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
      // { url: "/images/case1-email.png", caption: "The phishing email as it appeared in the inbox", alt: "Phishing email screenshot" },
      // { url: "/images/case1-phishing-page.png", caption: "The GCS-hosted phishing landing page", alt: "Phishing landing page" },
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
    { key: "Content-Transfer-Encoding", value: "quoted-printable", flagged: false },
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
          "This is not mass phishing — it is a targeted Business Email Compromise probe. The attacker set the display name to 'Deric Lee' and the subject to 'RFNet Technologies Pte Ltd', impersonating a specific individual at a real Singapore-based IT company. The entire body is a single line: 'Hello Adrian, Are you there?' This is a textbook BEC opener: make first contact, establish a thread, confirm the inbox is monitored, then in a follow-up message introduce a financial request (invoice fraud, wire transfer, gift card purchase, or payroll redirect). The absence of any link or attachment is deliberate — there is nothing for a security tool to scan.",
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
      { type: "Email",   value: "wmcclean@rcn.com" },
      { type: "IP",      value: "162.243.8.41" },
      { type: "IP",      value: "129.213.13.252" },
      { type: "Domain",  value: "rcn.com" },
      { type: "Name",    value: "CEO (impersonated)" },
      { type: "Company", value: "My Company (impersonated)" },
    ],
  },

  // ── CASE 3: Delivery Notification Scam ─────────────────────────────────────
  {
    id: "fake-delivery-notification",
    title: "Fake Package Delivery Notification",
    subtitle: "Malicious link disguised as a shipping update",
    date: "2025-08-20",
    severity: "High",
    category: "Phishing",
    tags: ["Package Scam", "Malicious Link", "Brand Impersonation"],
    summary:
      "A mass-mailed phishing campaign impersonated a well-known shipping carrier, claiming the recipient had a package pending delivery. The email contained a tracking link that redirected through multiple URL shorteners to a malicious payload download page.",
    verdict: "Confirmed Phishing",
    tldr: "Fake shipping notification using a redirect chain to deliver a malicious download link.",

    screenshots: [
      // { url: "/images/case3-email.png", caption: "The fake delivery notification email", alt: "Delivery scam email" },
    ],

    emailHeaders: [
      { key: "From",     value: "Delivery Service <noreply@del1very-update.com>", flagged: true  },
      { key: "Reply-To", value: "noreply@del1very-update.com",                    flagged: true  },
      { key: "To",       value: "(your email address)",                            flagged: false },
      { key: "Subject",  value: "Your package is waiting — confirm delivery",     flagged: true  },
      { key: "Date",     value: "(date of email)",                                 flagged: false },
      { key: "Authentication-Results", value: "spf=fail; dkim=none; dmarc=fail",   flagged: true  },
      { key: "X-Mailer", value: "PHPMailer 6.8.0",                                flagged: true  },
      { key: "X-Originating-IP", value: "(replace with originating IP)",           flagged: true  },
      // Add more headers...
    ],

    redFlags: [
      { flag: "Sender domain uses number substitution: 'del1very-update.com'.", severity: "Critical" },
      { flag: "X-Mailer shows PHPMailer — commonly used in phishing campaigns.", severity: "High" },
      { flag: "SPF and DMARC both failed.", severity: "High" },
      { flag: "Tracking link uses multiple URL shorteners to obscure the true destination.", severity: "Critical" },
      { flag: "Generic greeting ('Dear Customer') instead of recipient's name.", severity: "Medium" },
    ],

    analysis: [
      {
        step: "1. Email Header Analysis",
        content:
          "Replace this with your analysis of the email headers. What stood out about the From address, X-Mailer, and authentication results?",
      },
      {
        step: "2. URL Redirect Chain Analysis",
        content:
          "Replace this with your analysis of the tracking link. How many redirects were there? Where did the final destination lead?",
        codeBlock: {
          language: "text",
          title: "URL Redirect Chain",
          code: `Link in email:  https://bit.ly/XXXXXX
  → Redirect 1: https://tinyurl.com/YYYYYY
  → Redirect 2: https://tracking-del1very.com/confirm?id=ZZZZ
  → Final:      https://(malicious-domain)/download.html`,
        },
      },
      {
        step: "3. Domain & IP Intelligence",
        content:
          "Replace this with VirusTotal/AbuseIPDB findings on the sending IP and all domains in the redirect chain.",
      },
      {
        step: "4. Payload Analysis",
        content:
          "Replace this with your analysis of the final payload (if safely examined). Was it a malware download? A credential form? What type of file was served?",
      },
    ],

    recommendations: [
      "Never click tracking links in unexpected delivery emails — go directly to the carrier's website.",
      "Be suspicious of URL shorteners in official-looking emails.",
      "Check for X-Mailer headers that indicate bulk mailing tools.",
      "Report suspicious delivery emails to the impersonated carrier's abuse team.",
    ],

    techniques: [
      "Brand Impersonation",
      "URL Redirect Chain",
      "Typosquatting",
      "Mass Mailing (PHPMailer)",
    ],

    iocs: [
      { type: "Domain", value: "del1very-update.com" },
      { type: "Domain", value: "(final redirect domain)" },
      { type: "URL",    value: "(full redirect chain URL)" },
      { type: "IP",     value: "(replace with originating IP)" },
      { type: "Email",  value: "noreply@del1very-update.com" },
    ],
  },

  // ── CASE 4: Invoice Payment Scam ───────────────────────────────────────────
  {
    id: "fake-invoice-payment",
    title: "Fake Invoice with Updated Bank Details",
    subtitle: "Invoice fraud targeting accounts payable",
    date: "2025-09-05",
    severity: "High",
    category: "Scam",
    tags: ["Invoice Fraud", "Payment Redirect", "Vendor Impersonation"],
    summary:
      "An attacker impersonated a known vendor and sent a fake invoice claiming that the company's bank details had changed. The email included a PDF attachment with modified payment instructions directing funds to an attacker-controlled account.",
    verdict: "Confirmed Scam",
    tldr: "Vendor impersonation email with a fake invoice PDF redirecting payments to a fraudulent bank account.",

    screenshots: [
      // { url: "/images/case4-email.png", caption: "The invoice email claiming bank details have changed", alt: "Invoice scam email" },
      // { url: "/images/case4-pdf.png", caption: "The attached PDF with fraudulent bank details", alt: "Fake invoice PDF" },
    ],

    emailHeaders: [
      { key: "From",     value: "Vendor Name <accounts@vendor-invoices.net>",    flagged: true  },
      { key: "Reply-To", value: "accounts@vendor-invoices.net",                  flagged: true  },
      { key: "To",       value: "(accounts payable email)",                      flagged: false },
      { key: "Subject",  value: "Updated banking details — Invoice #INV-2025-0891", flagged: true },
      { key: "Date",     value: "(date of email)",                               flagged: false },
      { key: "Authentication-Results", value: "spf=pass; dkim=pass; dmarc=fail", flagged: true  },
      { key: "X-Originating-IP", value: "(replace with originating IP)",         flagged: true  },
      // Add more headers...
    ],

    redFlags: [
      { flag: "Sender domain 'vendor-invoices.net' is NOT the vendor's real domain.", severity: "Critical" },
      { flag: "Unexpected request to change bank details for an established vendor.", severity: "Critical" },
      { flag: "DMARC failed — domain not aligned with the real vendor.", severity: "High" },
      { flag: "PDF invoice contains formatting inconsistencies compared to legitimate invoices.", severity: "Medium" },
      { flag: "Email requests payment 'within 48 hours' to create urgency.", severity: "Medium" },
    ],

    analysis: [
      {
        step: "1. Sender Verification",
        content:
          "Replace this with your analysis. How did you determine the sender domain was not the legitimate vendor? What did WHOIS reveal?",
      },
      {
        step: "2. Email Authentication Analysis",
        content:
          "Replace this with your SPF/DKIM/DMARC analysis.",
      },
      {
        step: "3. PDF Attachment Analysis",
        content:
          "Replace this with your analysis of the PDF. Did you check the metadata? Were the bank details verifiable? Did you compare it with legitimate invoices from this vendor?",
        codeBlock: {
          language: "text",
          title: "PDF Metadata (exiftool output)",
          code: `File Name: Invoice-INV-2025-0891.pdf
Creator: (replace with PDF creator)
Producer: (replace with PDF producer)
Create Date: (replace with creation date)
Modify Date: (replace with modification date)`,
        },
      },
      {
        step: "4. Verification with Legitimate Vendor",
        content:
          "Replace this with your findings after contacting the real vendor through known channels. Did they confirm the invoice was fraudulent?",
      },
    ],

    recommendations: [
      "Always verify bank detail changes by calling the vendor on a known phone number.",
      "Establish a two-person sign-off for any change to payment details.",
      "Compare invoice formatting and details against previous legitimate invoices.",
      "Implement email authentication policies (DMARC p=reject) for your own domain.",
    ],

    techniques: [
      "Vendor Impersonation",
      "Payment Redirect Fraud",
      "Lookalike Domain",
      "PDF Attachment Manipulation",
    ],

    iocs: [
      { type: "Domain", value: "vendor-invoices.net" },
      { type: "Email",  value: "accounts@vendor-invoices.net" },
      { type: "IP",     value: "(replace with originating IP)" },
      { type: "Hash",   value: "(replace with PDF SHA-256 hash)" },
    ],
  },

  // ── CASE 5: Account Suspension Phishing ────────────────────────────────────
  {
    id: "paypal-account-suspension",
    title: "PayPal Account Suspension Notice",
    subtitle: "Fake account restriction alert to harvest login credentials",
    date: "2025-09-18",
    severity: "High",
    category: "Phishing",
    tags: ["Account Takeover", "Brand Impersonation", "PayPal"],
    summary:
      "A phishing email disguised as an official PayPal notice claimed the recipient's account had been limited due to 'suspicious activity.' The email contained a button linking to a cloned PayPal login page. The sending domain had no relation to PayPal and all authentication checks failed.",
    verdict: "Confirmed Phishing",
    tldr: "Fake PayPal restriction notice leading to a credential harvesting page on an unrelated domain.",

    screenshots: [
      // { url: "/images/case5-email.png", caption: "The fake PayPal suspension email", alt: "PayPal phishing email" },
      // { url: "/images/case5-login.png", caption: "The cloned PayPal login page", alt: "Fake PayPal login" },
    ],

    emailHeaders: [
      { key: "From",     value: "PayPal <service@paypa1-security.com>",            flagged: true  },
      { key: "Reply-To", value: "support@paypa1-security.com",                     flagged: true  },
      { key: "To",       value: "(your email address)",                             flagged: false },
      { key: "Subject",  value: "Action Required: Your account has been limited",  flagged: true  },
      { key: "Date",     value: "(date of email)",                                  flagged: false },
      { key: "Authentication-Results", value: "spf=fail; dkim=none; dmarc=fail",    flagged: true  },
      { key: "X-Mailer", value: "(replace with X-Mailer if present)",              flagged: false },
      { key: "X-Originating-IP", value: "(replace with originating IP)",            flagged: true  },
      // Add more headers...
    ],

    redFlags: [
      { flag: "Domain uses 'paypa1' with a number 1 instead of the letter 'l'.", severity: "Critical" },
      { flag: "All email authentication checks (SPF/DKIM/DMARC) failed.", severity: "Critical" },
      { flag: "'Resolve Now' button links to a non-PayPal domain.", severity: "Critical" },
      { flag: "Urgency: 'Your account will be permanently limited in 24 hours.'", severity: "High" },
      { flag: "Generic greeting instead of the account holder's real name.", severity: "Medium" },
    ],

    analysis: [
      {
        step: "1. Sender & Domain Analysis",
        content:
          "Replace this with your analysis of the From address and the paypa1-security.com domain.",
      },
      {
        step: "2. Email Authentication Check",
        content:
          "Replace this with your Authentication-Results analysis. How did SPF, DKIM, and DMARC fare?",
      },
      {
        step: "3. Phishing URL Inspection",
        content:
          "Replace this with your analysis of the 'Resolve Now' button URL. Where did it actually point? Did you safely examine the landing page?",
      },
      {
        step: "4. Threat Intelligence Correlation",
        content:
          "Replace this with findings from VirusTotal, PhishTank, or other tools. Was this domain/campaign already reported?",
      },
    ],

    recommendations: [
      "PayPal will always address you by your full name — generic greetings are a red flag.",
      "Check the URL in the browser address bar before entering credentials.",
      "Navigate to PayPal directly by typing paypal.com — never click email links for account issues.",
      "Report phishing to PayPal by forwarding the email to phishing@paypal.com.",
    ],

    techniques: [
      "Brand Impersonation",
      "Typosquatting (1 vs l)",
      "Credential Harvesting",
      "Fear/Urgency Manipulation",
    ],

    iocs: [
      { type: "Domain", value: "paypa1-security.com" },
      { type: "URL",    value: "(replace with phishing URL)" },
      { type: "Email",  value: "service@paypa1-security.com" },
      { type: "IP",     value: "(replace with originating IP)" },
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
