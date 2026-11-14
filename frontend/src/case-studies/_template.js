// =============================================================================
// CASE STUDY TEMPLATE
// Copy this file to caseN.js (next free number), uncomment the object below,
// and fill in your own data. Files starting with "_" are ignored by index.js.
// =============================================================================

/*
export default {
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
};
*/
