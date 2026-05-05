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
      examples: [
        {
          url: "/email-forensics/images/reply-to-example1.png",   // public URL or local path
          caption: "Notice both 'From' and 'Reply-To' headers are different email addresses. The 'From' header is an invalid email address but the 'Reply-To' header is from a free email provider.",
          alt: "Spoofed From header example",
        },
        {
          url: "/email-forensics/images/reply-to-check1.png",   // public URL or local path
          caption: "Notice that the email address from the 'From' header is an invalid email address after doing a check on it. This gives you a valid reason to consider that this is phishing.",
          alt: "Invalid email address example",
        },
      ],
    },
    {
      name: "Reply-To",
      description:
        "Where replies are actually sent. If different from 'From', this is a major red flag.",
      forensicValue: "High",
      whatToLook:
        "Should match the From domain for legitimate email. Mismatch indicates Reply-To manipulation attack.",
      examples: [
        {
          url: "/email-forensics/images/reply-to-example1.png",   // public URL or local path
          caption: "Notice both 'From' and 'Reply-To' headers are different email addresses. The 'From' header is an invalid email address but the 'Reply-To' header is from a free email provider.",
          alt: "Spoofed From header example",
        },
        {
          url: "/email-forensics/images/reply-to-check1.png",   // public URL or local path
          caption: "Notice that the email address from the 'From' header is an invalid email address after doing a check on it. This gives you a valid reason to consider that this is phishing.",
          alt: "Invalid email address example",
        },
      ],
    },
    {
      name: "Received",
      description:
        "Chain of mail servers the email passed through, in reverse chronological order (bottom = origin).",
      forensicValue: "Critical",
      whatToLook:
        "Read from bottom to top. Check if originating IP matches claimed sender's infrastructure.",
      examples: [
        {
          url: "/email-forensics/images/received-normal-example.png",   // public URL or local path
          caption: "Notice the 'Received' header in this example. Only one 'Received' header is seen so you can assume that this email is highly safe.",
          alt: "Received header example - Safe",
        },
        {
          url: "/email-forensics/images/received-sus-example.png",   // public URL or local path
          caption: "Notice the multiple 'Received' headers in this example. A suspicious/malicious email will have more than 1 'Received' headers showing that it was sent across multiple IP addresses.",
          alt: "Received header example - Suspicious",
        },
      ],
    },
    {
      name: "Authentication-Results",
      description:
        "Results of SPF, DKIM, and DMARC checks performed by the receiving mail server.",
      forensicValue: "Critical",
      whatToLook:
        "All three should pass for legitimate email. DMARC fail with SPF/DKIM pass can indicate domain spoofing.",
      examples: [
        {
          url: "/email-forensics/images/auth-results-1.png",
          caption: "Both SPF & DKIM passed but DMARC failed. You have to be cautious if any of these failed.",
          alt: "Auth-Results: Example 1",
        },
        {
          url: "/email-forensics/images/auth-results-2.png",
          caption: "All of them passed. So what will you do now? You will check the other email headers too to confirm the suspicions.",
          alt: "Auth-Results: Example 2",
        },
      ],
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
      description: "A unique identifier assigned by the sending server. Usually used by threat actors for tracking emails.",
      forensicValue: "Medium",
      whatToLook:
        "Domain portion should match sender's domain. Mismatch suggests third-party sending service.",
      examples: [
        {
          url: "/email-forensics/images/message-id-example1.png",
          caption: "You can see that this is sent from an Amazon SES server. Usually, registered companies use Amazon SES to email their clients about news or promotions.",
          alt: "Message-ID: Example 1",
        },
        {
          url: "/email-forensics/images/message-id-example2.png",
          caption: "You can see that this is suspicious since it is sent using Zimbra Web Client. Threat actors like to use this platform to send phishing emails since it is easy to impersonate login pages and it aligns with most admin workflows and used by most SMEs and public institutions. This allows them easiy to lure people into clicking such phishing emails.",
          alt: "Message-ID: Example 2",
        },
      ],
    },
    {
      name: "X-Mailer",
      description: "The software or service used to send the email.",
      forensicValue: "Medium",
      whatToLook:c
        "PHPMailer, mass mailer scripts suggest bulk/automated sending. Enterprise systems use different signatures.",
      examples: [
        {
          url: "/email-forensics/images/x-mailer-example1.png",
          caption: "This is considered since the Zimbra web client is used in this email. This shows that it is highly phishing and threat actors like to use this since it is easily configurable for phishing campaigns.",
          alt: "X-Mailer: Example 1",
        },
      ],
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
    {
      name: "URLVoid - Web Page Screenshot",
      url: "https://www.urlvoid.com/web-page-screenshot/",
      description:
        "View web pages without getting infected by an exploit or by malicious code injected in the web page.",
    },
    {
      name: "Hunter - Email Verifier",
      url: "https://hunter.io/email-verifier",
      description:
        "Verify email addresses for both valid email and server statuses.",
    },
    {
      name: "SendTrust - Email Security Best Practices",
      url: "https://sendtrust.io/guides/email-security",
      description:
        "Informative articles on email security",
    },
  ],
};
