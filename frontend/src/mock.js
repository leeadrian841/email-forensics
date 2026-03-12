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
    id: "fake-microsoft-365-login",
    title: "Fake Microsoft 365 Login Page",
    subtitle: "Credential harvesting via spoofed Microsoft account alert",
    date: "2025-07-15",
    severity: "Critical",
    category: "Phishing",
    tags: ["Credential Harvesting", "Brand Impersonation", "Microsoft 365"],
    summary:
      "An email impersonating Microsoft warned the recipient of 'unusual sign-in activity' and directed them to a cloned Office 365 login page designed to steal credentials. SPF and DKIM both failed, and the sending domain was registered only 3 days before the campaign.",
    verdict: "Confirmed Phishing",
    tldr: "Fake Microsoft alert leading to a credential harvesting page hosted on a newly registered lookalike domain.",

    // Replace with your own screenshots
    screenshots: [
      // { url: "/images/case1-email.png", caption: "The phishing email as it appeared in the inbox", alt: "Phishing email screenshot" },
      // { url: "/images/case1-fake-login.png", caption: "The cloned Microsoft 365 login page", alt: "Fake login page" },
    ],

    emailHeaders: [
      { key: "From",     value: "Microsoft Account Team <security@micr0soft-alerts.com>", flagged: true  },
      { key: "Reply-To", value: "no-reply@micr0soft-alerts.com",                          flagged: true  },
      { key: "To",       value: "(your email address)",                                    flagged: false },
      { key: "Subject",  value: "Unusual sign-in activity on your account",                flagged: true  },
      { key: "Date",     value: "(date of email)",                                         flagged: false },
      { key: "Authentication-Results", value: "spf=fail; dkim=fail; dmarc=fail",           flagged: true  },
      { key: "Received", value: "(replace with actual Received chain)",                    flagged: false },
      { key: "X-Originating-IP", value: "(replace with originating IP)",                   flagged: true  },
      { key: "Message-ID", value: "(replace with message ID)",                             flagged: false },
      // Add more headers from the actual email...
    ],

    redFlags: [
      { flag: "Sender domain 'micr0soft-alerts.com' uses a zero instead of the letter 'o' — classic typosquatting.", severity: "Critical" },
      { flag: "SPF, DKIM, and DMARC all failed — email is not authorized by Microsoft.", severity: "Critical" },
      { flag: "Domain registered only 3 days before the email was sent.", severity: "High" },
      { flag: "Urgency language: 'Your account will be locked in 24 hours.'", severity: "Medium" },
      { flag: "Login page URL does not match any official Microsoft domain.", severity: "Critical" },
    ],

    analysis: [
      {
        step: "1. Email Header Inspection",
        content:
          "Replace this with your analysis of the email headers. What did you find when examining the From address, Reply-To, and Authentication-Results?",
        codeBlock: {
          language: "text",
          title: "Authentication-Results Header",
          code: `Authentication-Results: mx.google.com;
  spf=fail (sender IP not authorized) smtp.mailfrom=micr0soft-alerts.com;
  dkim=fail (signature verification failed);
  dmarc=fail (p=REJECT) header.from=micr0soft-alerts.com`,
        },
      },
      {
        step: "2. Domain Registration Analysis",
        content:
          "Replace this with your WHOIS analysis. When was the domain registered? Who is the registrar? Does the registration date correlate with the campaign timing?",
        codeBlock: {
          language: "text",
          title: "WHOIS Lookup — micr0soft-alerts.com",
          code: `Domain Name: micr0soft-alerts.com
Registrar: (registrar name)
Creation Date: (date)
Registrant: REDACTED FOR PRIVACY
Name Server: (nameserver)`,
        },
      },
      {
        step: "3. URL & Landing Page Analysis",
        content:
          "Replace this with your analysis of the phishing link. Where did it redirect? Did the landing page match the real Microsoft login page? What differences did you spot?",
        // images: [
        //   { url: "/images/case1-url-comparison.png", caption: "Side-by-side: real vs fake login page", alt: "URL comparison" },
        // ],
      },
      {
        step: "4. IP & Threat Intelligence Lookup",
        content:
          "Replace this with your findings from VirusTotal, AbuseIPDB, or other threat intel tools. Was the IP flagged? What was the geolocation?",
      },
    ],

    recommendations: [
      "Never click login links in unexpected 'security alert' emails — navigate to the service directly.",
      "Verify the sender domain character by character — look for number/letter substitutions.",
      "Enable multi-factor authentication on all accounts to limit damage from credential theft.",
      "Report the phishing email to Microsoft via reportphishing@microsoft.com.",
    ],

    techniques: [
      "Brand Impersonation",
      "Typosquatting",
      "Credential Harvesting",
      "Urgency/Fear Manipulation",
    ],

    iocs: [
      { type: "Domain", value: "micr0soft-alerts.com" },
      { type: "URL",    value: "(replace with full phishing URL)" },
      { type: "IP",     value: "(replace with originating IP)" },
      { type: "Email",  value: "security@micr0soft-alerts.com" },
    ],
  },

  // ── CASE 2: Business Email Compromise ──────────────────────────────────────
  {
    id: "ceo-wire-transfer-bec",
    title: "CEO Wire Transfer Request",
    subtitle: "Business email compromise targeting finance department",
    date: "2025-08-02",
    severity: "Critical",
    category: "BEC",
    tags: ["Wire Fraud", "CEO Impersonation", "Social Engineering"],
    summary:
      "An attacker impersonated the company CEO via a lookalike domain and emailed the finance team requesting an urgent wire transfer to a 'new vendor.' The email bypassed spam filters because the domain had valid SPF/DKIM records, but DMARC alignment failed since the domain was not the real company domain.",
    verdict: "Confirmed BEC",
    tldr: "CEO impersonation via lookalike domain requesting a fraudulent wire transfer to an attacker-controlled bank account.",

    screenshots: [
      // { url: "/images/case2-email.png", caption: "The BEC email requesting wire transfer", alt: "BEC email" },
    ],

    emailHeaders: [
      { key: "From",     value: "CEO Name <ceo@company-name.co>",               flagged: true  },
      { key: "Reply-To", value: "ceo@company-name.co",                          flagged: true  },
      { key: "To",       value: "(finance team email)",                          flagged: false },
      { key: "Subject",  value: "Urgent — Wire transfer needed today",          flagged: true  },
      { key: "Date",     value: "(date of email)",                               flagged: false },
      { key: "Authentication-Results", value: "spf=pass; dkim=pass; dmarc=fail", flagged: true  },
      { key: "X-Originating-IP", value: "(replace with originating IP)",         flagged: true  },
      // Add more headers...
    ],

    redFlags: [
      { flag: "Sender domain is 'company-name.co' — NOT the real company domain 'company-name.com'.", severity: "Critical" },
      { flag: "DMARC failed — domain alignment mismatch despite valid SPF/DKIM.", severity: "High" },
      { flag: "Unusual request: CEO directly emailing finance for an urgent wire transfer.", severity: "High" },
      { flag: "Request to bypass normal approval process due to 'time sensitivity.'", severity: "Medium" },
      { flag: "Email sent outside normal business hours.", severity: "Low" },
    ],

    analysis: [
      {
        step: "1. Sender Domain Verification",
        content:
          "Replace this with your analysis. How did you identify the lookalike domain? What was the difference between the real and fake domains?",
      },
      {
        step: "2. Email Authentication Analysis",
        content:
          "Replace this with your SPF/DKIM/DMARC analysis. Note that SPF and DKIM passed because the attacker set up proper records on their own domain — but DMARC failed because the domain doesn't align with the real company.",
        codeBlock: {
          language: "text",
          title: "Authentication-Results Breakdown",
          code: `spf=pass  → The sending IP IS authorized for company-name.co (attacker's domain)
dkim=pass → The email IS signed by company-name.co (attacker's domain)
dmarc=fail → company-name.co does NOT align with the real company-name.com`,
        },
      },
      {
        step: "3. Domain Registration & Infrastructure",
        content:
          "Replace this with your WHOIS and DNS analysis of the lookalike domain.",
      },
      {
        step: "4. Social Engineering Techniques",
        content:
          "Replace this with your analysis of the social engineering tactics used — urgency, authority, secrecy, etc.",
      },
    ],

    recommendations: [
      "Always verify wire transfer requests through a separate communication channel (phone call, in-person).",
      "Implement DMARC with p=reject on the company domain to prevent impersonation.",
      "Train finance teams to scrutinize sender domains character by character.",
      "Establish multi-person approval for wire transfers above a threshold.",
    ],

    techniques: [
      "CEO Impersonation",
      "Lookalike Domain",
      "Authority Exploitation",
      "Urgency Manipulation",
    ],

    iocs: [
      { type: "Domain", value: "company-name.co" },
      { type: "Email",  value: "ceo@company-name.co" },
      { type: "IP",     value: "(replace with originating IP)" },
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
