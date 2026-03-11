// Mock data for Email Forensics Portfolio
// All case studies, guides, and reference data

export const ANALYST_INFO = {
  name: "Alex Mercer",
  title: "Email Forensics Analyst & Cybersecurity Researcher",
  tagline: "Dissecting threats. Exposing deception. Protecting inboxes.",
  bio: "Specializing in email-based threat analysis, phishing forensics, and security awareness. I investigate suspicious emails, document attack patterns, and help organizations identify and respond to email-based threats.",
  stats: [
    { label: "Cases Investigated", value: "120+" },
    { label: "Phishing Campaigns", value: "47" },
    { label: "Organizations Protected", value: "23" },
    { label: "Years Experience", value: "6" }
  ],
  skills: [
    "Email Header Analysis", "OSINT", "Domain Forensics", "SPF/DKIM/DMARC",
    "Malware Analysis", "Social Engineering Detection", "Threat Intelligence",
    "SMTP Protocol Analysis"
  ]
};

export const CASE_STUDIES = [
  {
    id: "paypal-credential-harvest-2024",
    title: "Operation PayPal Harvest",
    subtitle: "Credential Harvesting via Spoofed PayPal Domain",
    date: "2024-11-14",
    severity: "Critical",
    category: "Phishing",
    tags: ["Credential Harvesting", "Domain Spoofing", "HTML Smuggling"],
    summary: "A sophisticated phishing campaign impersonating PayPal used a lookalike domain with valid SSL certificate to steal user credentials. The email bypassed standard spam filters by abusing a legitimate email marketing service.",
    verdict: "Confirmed Phishing",
    tldr: "Attackers registered paypa1-secure.com (using numeral '1') to impersonate PayPal, sent via SendGrid infrastructure, and harvested credentials from 400+ victims before takedown.",
    emailHeaders: [
      { key: "From", value: "PayPal Security <noreply@paypa1-secure.com>", flagged: true },
      { key: "Reply-To", value: "support@paypa1-secure.com", flagged: true },
      { key: "To", value: "victim@example.com", flagged: false },
      { key: "Subject", value: "Urgent: Your PayPal account has been limited", flagged: true },
      { key: "Date", value: "Thu, 14 Nov 2024 03:22:11 +0000", flagged: false },
      { key: "Message-ID", value: "<c4f9a2b1.7d3e@sendgrid.net>", flagged: true },
      { key: "X-Mailer", value: "SendGrid SMTP API", flagged: true },
      { key: "Received", value: "from mail.sendgrid.net (149.72.110.45) by mx.google.com", flagged: false },
      { key: "X-Originating-IP", value: "185.220.101.42", flagged: true },
      { key: "Authentication-Results", value: "spf=pass smtp.mailfrom=paypa1-secure.com; dkim=pass; dmarc=fail", flagged: true },
      { key: "X-Spam-Score", value: "1.2 (passed)", flagged: true },
      { key: "Content-Type", value: "text/html; charset=UTF-8", flagged: false }
    ],
    redFlags: [
      { flag: "Sender domain paypa1-secure.com uses numeral '1' instead of letter 'l'", severity: "Critical" },
      { flag: "DMARC policy fail despite SPF/DKIM pass — domain not aligned with PayPal's official domain", severity: "Critical" },
      { flag: "X-Originating-IP resolves to a known Tor exit node (185.220.101.42)", severity: "Critical" },
      { flag: "Email sent at 3:22 AM UTC, unusual for legitimate business communications", severity: "Medium" },
      { flag: "Message-ID format indicates third-party bulk sending service (SendGrid)", severity: "High" },
      { flag: "Subject uses urgency language: 'Urgent' and 'limited'", severity: "Medium" },
      { flag: "No legitimate PayPal communication uses this sending domain", severity: "Critical" }
    ],
    analysis: [
      {
        step: "1. Domain Registration Analysis",
        content: "The domain paypa1-secure.com was registered just 3 days before this campaign launched via Namecheap using privacy protection. WHOIS data showed no connection to PayPal Inc. The domain had a valid Let's Encrypt SSL certificate, which gave false credibility."
      },
      {
        step: "2. Email Infrastructure",
        content: "The attacker abused SendGrid's SMTP relay to send emails — a common technique to inherit SendGrid's good IP reputation and bypass spam filters. The actual origin IP (185.220.101.42) traces to a Tor exit relay in Germany, obscuring the attacker's true location."
      },
      {
        step: "3. Authentication Bypass",
        content: "SPF passed because attacker had legitimate control of the spoofed domain. DKIM passed for the same reason. However, DMARC failed because the 'From' domain (paypa1-secure.com) does not align with PayPal's actual domain (paypal.com). This DMARC failure is the key forensic indicator."
      },
      {
        step: "4. Payload Analysis",
        content: "The HTML email contained a redirect chain: click → bit.ly shortener → paypa1-secure.com/login → actual credential harvest form. The landing page was a pixel-perfect clone of PayPal's login page, including realistic CSS and JavaScript."
      }
    ],
    recommendations: [
      "Enable DMARC strict policy (p=reject) on your domain",
      "Train users to verify sender domain character-by-character",
      "Use a password manager — it won't autofill on fake domains",
      "Enable multi-factor authentication on all financial accounts",
      "Report phishing to the legitimate brand's abuse team"
    ],
    techniques: ["Typosquatting", "Third-party SMTP relay abuse", "Tor exit node origin", "SSL certificate spoofing", "Redirect chain"],
    iocs: [
      { type: "Domain", value: "paypa1-secure.com" },
      { type: "IP", value: "185.220.101.42" },
      { type: "URL", value: "https://paypa1-secure.com/login" },
      { type: "Hash (email)", value: "sha256:a4c2f9e1b3d87..." }
    ]
  },
  {
    id: "microsoft365-bec-2024",
    title: "Microsoft 365 BEC Campaign",
    subtitle: "Business Email Compromise via Compromised Vendor Account",
    date: "2024-09-03",
    severity: "High",
    category: "BEC",
    tags: ["BEC", "Account Takeover", "Wire Fraud"],
    summary: "A business email compromise attack used a previously compromised vendor's legitimate Microsoft 365 account to request fraudulent wire transfers. The email passed all authentication checks because it originated from a genuinely compromised account.",
    verdict: "Confirmed BEC / Wire Fraud Attempt",
    tldr: "Attacker gained access to vendor's M365 account via password spray, studied communication patterns for 2 weeks, then sent targeted wire transfer request to the victim's finance department.",
    emailHeaders: [
      { key: "From", value: "James Wilson <j.wilson@legitvendor-inc.com>", flagged: false },
      { key: "Reply-To", value: "j.wilson@legitvendor-inc.com", flagged: false },
      { key: "To", value: "finance@victimcompany.com", flagged: false },
      { key: "Subject", value: "Re: Q4 Invoice — Updated Banking Details", flagged: true },
      { key: "Date", value: "Tue, 03 Sep 2024 14:55:03 +0000", flagged: false },
      { key: "Message-ID", value: "<AM6PR01MB4562A8F2C3@EUR01.prod.exchangelabs.com>", flagged: false },
      { key: "X-MS-Exchange-Organization-SCL", value: "-1 (trusted sender)", flagged: true },
      { key: "Authentication-Results", value: "spf=pass; dkim=pass; dmarc=pass", flagged: false },
      { key: "X-Originating-IP", value: "40.107.92.68", flagged: false },
      { key: "X-Microsoft-Antispam", value: "BCL:0 (no spam confidence)", flagged: false },
      { key: "X-Forwarded-To", value: "[empty — inbox rule deleted]", flagged: true },
      { key: "X-MS-Exchange-Inbox-Rules-Loop", value: "finance@victimcompany.com", flagged: true }
    ],
    redFlags: [
      { flag: "Email references 'updated banking details' — a classic BEC pattern for wire fraud", severity: "Critical" },
      { flag: "X-Forwarded-To is empty — suggests an inbox rule was set to delete/forward replies", severity: "High" },
      { flag: "X-MS-Exchange-Organization-SCL: -1 means Microsoft explicitly trusted this sender, bypassing all scanning", severity: "High" },
      { flag: "The request came on a Tuesday afternoon — attackers time BEC to catch targets before EOD", severity: "Medium" },
      { flag: "No prior invoices included 'updated banking details' — behavioral anomaly", severity: "High" },
      { flag: "Vendor account had signin from Nigerian IP 2 weeks prior — account was compromised", severity: "Critical" }
    ],
    analysis: [
      {
        step: "1. Initial Compromise",
        content: "Log analysis of the vendor's M365 account revealed a successful login from IP 197.210.54.33 (Nigeria) on August 19, 2024 — 15 days before the BEC email was sent. The attacker used a password spray attack (testing common passwords across many accounts) to gain access."
      },
      {
        step: "2. Reconnaissance Phase",
        content: "During the 15-day window, the attacker read through emails to understand vendor-client communication patterns, ongoing projects, invoice schedules, and key personnel names. This 'living off the land' approach made the eventual BEC email highly convincing."
      },
      {
        step: "3. Why Authentication Passed",
        content: "Since the email originated from a legitimately compromised account, SPF, DKIM, and DMARC all passed. This is the core challenge of BEC — traditional email authentication cannot detect account takeovers. Behavioral analytics and out-of-band verification are required."
      },
      {
        step: "4. Inbox Rule Persistence",
        content: "The attacker created an inbox rule on the vendor's account to delete any replies containing keywords like 'bank', 'wire', or 'transfer' — preventing the real James Wilson from seeing replies that might expose the fraud."
      }
    ],
    recommendations: [
      "Always verify banking changes via phone call to a known number",
      "Implement out-of-band verification for any payment change requests",
      "Enable sign-in risk policies in Azure AD / Entra ID",
      "Monitor M365 for inbox rule creation, especially for deletion rules",
      "Use Microsoft Defender for Identity to detect password spray attacks",
      "Require MFA for all vendor and partner accounts"
    ],
    techniques: ["Password Spray", "Account Takeover", "Inbox Rule Manipulation", "Social Engineering"],
    iocs: [
      { type: "IP (compromise)", value: "197.210.54.33" },
      { type: "Account", value: "j.wilson@legitvendor-inc.com (compromised)" },
      { type: "TTP", value: "T1586.002 - Compromise Email Accounts" }
    ]
  },
  {
    id: "amazon-smishing-2024",
    title: "Amazon Package Delivery Scam",
    subtitle: "Multi-Vector Smishing + Email Phishing Combo",
    date: "2024-10-28",
    severity: "High",
    category: "Scam",
    tags: ["Smishing", "Brand Impersonation", "Package Scam"],
    summary: "A coordinated campaign used both SMS (smishing) and email phishing to impersonate Amazon's package delivery service. Victims who clicked the link were asked to pay a fake 'customs fee' and provide credit card details.",
    verdict: "Confirmed Phishing / Financial Fraud",
    tldr: "Fake Amazon delivery notifications sent via email and SMS led victims to a realistic Amazon payment page that charged a fake $2.99 'customs fee' — capturing full credit card data including CVV.",
    emailHeaders: [
      { key: "From", value: "Amazon Delivery <delivery-update@amaz0n-pkg.net>", flagged: true },
      { key: "Reply-To", value: "no-reply@amaz0n-pkg.net", flagged: true },
      { key: "To", value: "victim@gmail.com", flagged: false },
      { key: "Subject", value: "Your Amazon package is pending delivery — action required", flagged: true },
      { key: "Date", value: "Mon, 28 Oct 2024 09:15:44 +0000", flagged: false },
      { key: "X-Originating-IP", value: "45.153.204.109", flagged: true },
      { key: "Authentication-Results", value: "spf=none; dkim=none; dmarc=none", flagged: true },
      { key: "X-PHP-Originating-Script", value: "0:mailer.php", flagged: true },
      { key: "Received", value: "from mail.amaz0n-pkg.net (45.153.204.109) [bulletproof hosting]", flagged: true },
      { key: "Content-Type", value: "text/html; charset=utf-8", flagged: false },
      { key: "MIME-Version", value: "1.0", flagged: false },
      { key: "X-Mailer", value: "PHPMailer 6.5.0", flagged: true }
    ],
    redFlags: [
      { flag: "Domain amaz0n-pkg.net uses numeral '0' instead of letter 'o'", severity: "Critical" },
      { flag: "SPF, DKIM, and DMARC all return 'none' — no email authentication configured", severity: "Critical" },
      { flag: "X-PHP-Originating-Script header reveals a PHP mass mailer script — typical of crimeware toolkits", severity: "High" },
      { flag: "X-Mailer: PHPMailer suggests low-cost bulk sending, not legitimate enterprise infrastructure", severity: "High" },
      { flag: "IP 45.153.204.109 belongs to a known bulletproof hosting provider", severity: "Critical" },
      { flag: "Amazon does not charge customs fees via email — operational impossibility", severity: "Critical" },
      { flag: "Email references an unspecified 'package' with no tracking number — generic pretexting", severity: "Medium" }
    ],
    analysis: [
      {
        step: "1. Infrastructure Assessment",
        content: "The originating IP (45.153.204.109) resolves to a bulletproof hosting provider in the Netherlands known for hosting cybercriminal infrastructure. The domain amaz0n-pkg.net was registered via a privacy-protected registrar, the day before the campaign launched."
      },
      {
        step: "2. Mailer Identification",
        content: "The X-PHP-Originating-Script and X-Mailer headers expose that the attacker used a PHP-based crimeware mailer kit (commonly sold on dark web forums). These kits automate mass phishing campaigns and include built-in templates for major brands."
      },
      {
        step: "3. No Authentication — Instant Tell",
        content: "The complete absence of SPF, DKIM, and DMARC records on amaz0n-pkg.net is a clear indicator. Legitimate Amazon emails use amazon.com with strict DMARC policies (p=reject). Any email from a domain without these records claiming to be Amazon is fraudulent."
      },
      {
        step: "4. Financial Fraud Mechanism",
        content: "The phishing page used a realistic Amazon UI clone and asked victims to pay $2.99 'customs clearance'. This low amount reduces victim suspicion while capturing complete payment card data (name, number, expiry, CVV) for later monetization or sale on card marketplaces."
      }
    ],
    recommendations: [
      "Always track packages directly on amazon.com — never via email links",
      "Amazon never charges customs fees via email",
      "Check domain name character-by-character before entering any data",
      "Use virtual/single-use credit card numbers for online purchases",
      "Report phishing to Amazon at stop-spoofing@amazon.com"
    ],
    techniques: ["Typosquatting", "PHP Crimeware Kit", "Bulletproof Hosting", "Multi-vector delivery (email + SMS)"],
    iocs: [
      { type: "Domain", value: "amaz0n-pkg.net" },
      { type: "IP", value: "45.153.204.109" },
      { type: "URL", value: "https://amaz0n-pkg.net/delivery/pay" },
      { type: "Email", value: "delivery-update@amaz0n-pkg.net" }
    ]
  },
  {
    id: "hr-w2-tax-phish-2025",
    title: "HR W-2 Tax Season Phish",
    subtitle: "Spear Phishing HR Personnel for W-2 / Tax Documents",
    date: "2025-01-22",
    severity: "Critical",
    category: "Spear Phishing",
    tags: ["Spear Phishing", "Tax Fraud", "HR Targeting", "CEO Fraud"],
    summary: "A highly targeted spear phishing email impersonating a company CEO requested W-2 tax forms for all employees from the HR department. The attacker researched employee names via LinkedIn before crafting the email.",
    verdict: "Confirmed Spear Phishing / Tax Fraud",
    tldr: "Attacker used executive impersonation to request W-2s during tax season — a recurring annual campaign. The email spoofed the CEO's display name but used a lookalike domain. Two HR staff responded before the campaign was identified.",
    emailHeaders: [
      { key: "From", value: "Michael Chen, CEO <mchen@acme-corp-hq.com>", flagged: true },
      { key: "Reply-To", value: "m.chen.ceo@gmail.com", flagged: true },
      { key: "To", value: "hr.team@acmecorp.com", flagged: false },
      { key: "Subject", value: "URGENT: Need all employee W-2 forms ASAP", flagged: true },
      { key: "Date", value: "Tue, 22 Jan 2025 07:44:00 +0000", flagged: true },
      { key: "X-Originating-IP", value: "91.195.240.117", flagged: true },
      { key: "Authentication-Results", value: "spf=pass smtp.mailfrom=acme-corp-hq.com; dkim=pass; dmarc=fail header.from=acme-corp-hq.com", flagged: true },
      { key: "Received", value: "from mail.acme-corp-hq.com (91.195.240.117)", flagged: true },
      { key: "X-Google-DKIM-Signature", value: "absent", flagged: false }
    ],
    redFlags: [
      { flag: "Reply-To is a personal Gmail (m.chen.ceo@gmail.com) — any response goes to attacker, not CEO", severity: "Critical" },
      { flag: "From domain acme-corp-hq.com differs from real domain acmecorp.com", severity: "Critical" },
      { flag: "DMARC fails because from-domain does not align with organization's verified domain", severity: "Critical" },
      { flag: "Email sent at 7:44 AM — before typical business hours, creating false urgency", severity: "Medium" },
      { flag: "Subject uses 'URGENT' and 'ASAP' — classic social engineering pressure tactic", severity: "High" },
      { flag: "IP 91.195.240.117 geolocates to Russia, inconsistent with US-based CEO's location", severity: "High" },
      { flag: "W-2 requests via email is never legitimate — CEOs use proper HR systems", severity: "Critical" }
    ],
    analysis: [
      {
        step: "1. OSINT Reconnaissance",
        content: "The attacker harvested CEO name (Michael Chen), HR contact emails, and company domain from LinkedIn and the company website. This level of targeting is characteristic of spear phishing — generic phishing would not know individual names or roles."
      },
      {
        step: "2. Reply-To Manipulation — The Core Trick",
        content: "The most critical finding: the Reply-To header is set to a Gmail address controlled by the attacker. Even though the From field shows the CEO's name, any reply from HR staff goes directly to the attacker. This technique is simple but devastatingly effective."
      },
      {
        step: "3. Domain Impersonation",
        content: "The lookalike domain acme-corp-hq.com (vs real acmecorp.com) was registered 4 days before the attack. It had valid SPF/DKIM records configured, but DMARC failed because it wasn't aligned with the organization's legitimate domain."
      },
      {
        step: "4. Tax Season Timing",
        content: "W-2 phishing is a well-documented seasonal threat (January–April). The IRS has issued repeated alerts about this exact attack pattern. The data harvested (name, SSN, salary) can be used for identity theft and fraudulent tax return filing."
      }
    ],
    recommendations: [
      "Implement a process requiring phone verification for any sensitive document requests",
      "Add email banners for external emails (most mail clients support this)",
      "Train HR specifically on W-2 and wire transfer phishing — they are primary targets",
      "Configure DMARC p=reject on your primary domain",
      "Use email filtering rules to flag Reply-To mismatches from executive impersonation"
    ],
    techniques: ["LinkedIn OSINT", "Reply-To Manipulation", "Executive Impersonation", "Seasonal Targeting"],
    iocs: [
      { type: "Domain", value: "acme-corp-hq.com" },
      { type: "IP", value: "91.195.240.117" },
      { type: "Email", value: "m.chen.ceo@gmail.com" }
    ]
  }
];

export const GUIDE_CONTENT = {
  overview: "Email headers contain metadata that reveals the true origin, routing path, and authentication status of any email. Learning to read them is one of the most powerful skills in identifying phishing, spam, and spoofed messages.",

  keyHeaders: [
    {
      name: "From",
      description: "The display name and email address shown to the recipient. This can be completely spoofed — it is the least trustworthy header.",
      forensicValue: "Low",
      whatToLook: "Compare display name vs actual email address. Look for lookalike domains (paypa1 vs paypal)."
    },
    {
      name: "Reply-To",
      description: "Where replies are actually sent. If different from 'From', this is a major red flag.",
      forensicValue: "High",
      whatToLook: "Should match the From domain for legitimate email. Mismatch indicates Reply-To manipulation attack."
    },
    {
      name: "Received",
      description: "Chain of mail servers the email passed through, in reverse chronological order (bottom = origin).",
      forensicValue: "Critical",
      whatToLook: "Read from bottom to top. Check if originating IP matches claimed sender's infrastructure."
    },
    {
      name: "Authentication-Results",
      description: "Results of SPF, DKIM, and DMARC checks performed by the receiving mail server.",
      forensicValue: "Critical",
      whatToLook: "All three should pass for legitimate email. DMARC fail with SPF/DKIM pass can indicate domain spoofing."
    },
    {
      name: "X-Originating-IP",
      description: "The original IP address of the computer or server that sent the email.",
      forensicValue: "High",
      whatToLook: "Look up in threat intelligence databases (VirusTotal, AbuseIPDB). Check geolocation consistency."
    },
    {
      name: "Message-ID",
      description: "A unique identifier assigned by the sending server.",
      forensicValue: "Medium",
      whatToLook: "Domain portion should match sender's domain. Mismatch suggests third-party sending service."
    },
    {
      name: "X-Mailer",
      description: "The software or service used to send the email.",
      forensicValue: "Medium",
      whatToLook: "PHPMailer, mass mailer scripts suggest bulk/automated sending. Enterprise systems use different signatures."
    }
  ],

  desktopGuides: [
    {
      client: "Gmail (Web Browser)",
      steps: [
        "Open the email you want to inspect",
        "Click the three-dot menu in the top-right corner of the email",
        "Select 'Show original' from the dropdown",
        "A new tab opens with the full raw headers and email body",
        "Look for headers starting with 'Received:', 'Authentication-Results:', 'From:', 'Reply-To:'"
      ],
      tips: "Gmail also provides a 'Copy to clipboard' button in the Show Original view. You can paste headers into online tools like MXToolbox Header Analyzer for automated analysis."
    },
    {
      client: "Outlook Web App (OWA)",
      steps: [
        "Open the email in Outlook Web App",
        "Click the three-dot menu at the top of the email",
        "Select 'View message details'",
        "A panel opens on the right with the raw message headers",
        "Scroll through to find authentication results and routing information"
      ],
      tips: "In Outlook desktop app: double-click to open email, then go to File tab, then Properties, then look in the Internet headers section."
    },
    {
      client: "Apple Mail (macOS)",
      steps: [
        "Open the email in Apple Mail",
        "Go to View menu in the menu bar",
        "Select Message then All Headers",
        "Or press Shift + Cmd + H to toggle header visibility",
        "The full header block will appear above the email body"
      ],
      tips: "You can also use View > Message > Raw Source (Shift + Cmd + U) to see the complete raw email including headers and encoded body."
    },
    {
      client: "Mozilla Thunderbird",
      steps: [
        "Open the email in Mozilla Thunderbird",
        "Go to View menu, then Headers, then All",
        "Or use the keyboard shortcut Ctrl+U to view raw message source",
        "The raw source view shows all headers in original format",
        "Use Ctrl+F to search for specific headers like 'Authentication-Results'"
      ],
      tips: "Thunderbird's raw source view is particularly useful — it shows the complete MIME structure including all parts of multipart emails."
    }
  ],

  mobileGuides: [
    {
      client: "Gmail (Android / iOS App)",
      limitation: "Gmail mobile app does NOT expose full email headers. You can only see basic From/To/Date/Subject information.",
      steps: [
        "Open the Gmail app and navigate to the email",
        "Tap the three-dot menu in the top-right corner",
        "Tap 'Show details' to see expanded From/To/Date fields",
        "There is NO option to view full technical headers in Gmail mobile",
        "Workaround: Forward the email to yourself and open on desktop"
      ],
      tips: "In a mobile browser (not the app), you may access Gmail's 'Show original' for raw headers on some devices — but results are inconsistent."
    },
    {
      client: "Outlook (Android / iOS App)",
      limitation: "Outlook mobile provides a 'View Message Details' option, but shows significantly less detail than desktop. DKIM/SPF/DMARC results are not displayed.",
      steps: [
        "Open the Outlook mobile app and select the email",
        "Tap the three-dot menu at the top",
        "Scroll down and tap 'View Message Details'",
        "You will see limited header information — mainly basic routing",
        "Full forensic headers are NOT available in the mobile app"
      ],
      tips: "Outlook mobile does show the originating server in some cases. For full analysis, use Outlook on desktop or OWA on a desktop browser."
    },
    {
      client: "Apple Mail (iPhone / iPad)",
      limitation: "iOS Apple Mail has the most restricted header visibility of any major mail client — only the display name and email address are accessible to users.",
      steps: [
        "Open Apple Mail and select the email",
        "Tap and hold on the sender's name at the top",
        "A popup shows the actual email address — this is the only exposure",
        "There is NO way to view full headers in Apple Mail on iOS",
        "To analyze headers, forward the email to a desktop email client"
      ],
      tips: "Power users on iOS can use third-party apps that allow pasting forwarded email content for analysis."
    }
  ],

  mobileVsDesktopComparison: [
    { feature: "View raw email headers", desktop: true, mobile: false, notes: "Mobile apps intentionally hide raw headers for simplicity" },
    { feature: "SPF/DKIM/DMARC results", desktop: true, mobile: false, notes: "Authentication results only visible on desktop clients" },
    { feature: "Originating IP address", desktop: true, mobile: false, notes: "X-Originating-IP not shown in mobile apps" },
    { feature: "Received routing chain", desktop: true, mobile: false, notes: "Server hop chain only visible in full header view" },
    { feature: "Reply-To inspection", desktop: true, mobile: "partial", notes: "Mobile shows it in some apps only when replying" },
    { feature: "Message-ID", desktop: true, mobile: false, notes: "Not accessible in any major mobile email app" },
    { feature: "X-Mailer identification", desktop: true, mobile: false, notes: "Sending software metadata hidden on mobile" },
    { feature: "Sender display name vs address", desktop: true, mobile: true, notes: "Most mobile apps show both on tap/long-press" },
    { feature: "Link URL inspection (hover)", desktop: true, mobile: false, notes: "Desktop lets you hover over links; mobile requires long-press" },
    { feature: "Attachment type verification", desktop: true, mobile: "partial", notes: "Mobile apps show filename but not always MIME type" }
  ],

  quickChecklist: [
    "Does the sender domain match the company's real domain?",
    "Is the Reply-To different from the From address?",
    "Does the email create urgency or threaten negative consequences?",
    "Are there any spelling errors or number substitutions in the domain name?",
    "Did SPF, DKIM, and DMARC all pass?",
    "Does the originating IP match the sender's claimed location?",
    "Does the email ask you to click a link or download an attachment unexpectedly?",
    "Can you verify this request through a separate, known communication channel?"
  ],

  tools: [
    { name: "MXToolbox Header Analyzer", url: "https://mxtoolbox.com/EmailHeaders.aspx", description: "Paste raw headers for automated analysis and visualization of the email routing chain." },
    { name: "Google Admin Toolbox Messageheader", url: "https://toolbox.googleapps.com/apps/messageheader/", description: "Google's own header analyzer — excellent for Gmail headers and SPF/DKIM/DMARC breakdown." },
    { name: "VirusTotal", url: "https://www.virustotal.com", description: "Check suspicious domains, URLs, IPs, and file hashes against 70+ threat intelligence databases." },
    { name: "AbuseIPDB", url: "https://www.abuseipdb.com", description: "IP reputation database — check if an originating IP has been reported for abuse." },
    { name: "WHOIS Lookup", url: "https://whois.domaintools.com", description: "Check domain registration date, registrar, and ownership history." },
    { name: "Phishtank", url: "https://www.phishtank.com", description: "Community-driven database of verified phishing URLs." }
  ]
};
