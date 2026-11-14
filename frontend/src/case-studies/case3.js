// ── CASE 3: Sextortion Scam ─────────────────────────────────────
export default {
    id: "sextortion-pegasus-bitcoin-scam",
    title: "Pegasus Sextortion Scam",
    subtitle: "Fabricated device compromise claim with Litecoin extortion demand",
    date: "2024-12-17",
    severity: "High",
    category: "Social Engineering",
    tags: ["Sextortion", "Cryptocurrency Extortion", "Email Spoofing", "Spam Filter Evasion", "Cyrillic Substitution"],
    summary:
      "A sextortion email was spoofed to appear as though it was sent from my personal Hotmail address, creating a false impression of account compromise. The email claims the attacker installed Pegasus spyware on all of the recipient's devices, recorded compromising webcam footage, and will distribute it to all contacts unless $1,850 in Litecoin is paid within 48 hours. All three authentication checks — SPF, DKIM, and DMARC — failed. The actual sending infrastructure was boyerfinancialplanning.com (23.230.37.82), a hijacked or abused third-party domain entirely unrelated to the claimed sender. The body employs multiple spam evasion techniques: Cyrillic look-alike character substitution within words, white-on-white hidden junk text interspersed throughout the HTML, and quoted-printable encoding to fragment recognisable keywords. The Pegasus claim is fabricated — no real IOCs or proof of compromise are provided.",
    verdict: "Confirmed Scam — Sextortion / No Actual Compromise",
    tldr: "Fake 'sent from your own account' sextortion demanding $1,850 in Litecoin. Pegasus claim is fabricated. SPF/DKIM/DMARC all fail. Actual sender is a hijacked third-party domain.",

    screenshots: [
      {
        url: "/email-forensics/images/case3-email.png",
        caption: "The sextortion email as rendered in Outlook",
        alt: "Sextortion email"
      },
    ],

    emailHeaders: [
      // ── Delivery & Routing ──────────────────────────────────────────────────
      { key: "Received", value: "from boyerfinancialplanning.com (23.230.37.82) by BL6PEPF0001AB54.mail.protection.outlook.com via Frontend Transport; Tue, 17 Dec 2024 19:24:29 +0000", flagged: true }, // actual sending host — a financial planning firm's domain, hijacked or abused to relay spam
      { key: "Received", value: "from BL6PEPF0001AB54.namprd02.prod.outlook.com by BN6PR17CA0043.outlook.office365.com via Frontend Transport; Tue, 17 Dec 2024 19:24:30 +0000", flagged: false },
      { key: "Received", value: "from BN6PR17CA0043.namprd17.prod.outlook.com by SEYPR04MB6631.apcprd04.prod.outlook.com; Tue, 17 Dec 2024 19:24:32 +0000", flagged: false },
      { key: "X-Sender-IP", value: "23.230.37.82", flagged: true }, // IP of actual sending host (boyerfinancialplanning.com) — not a Hotmail/Microsoft IP
      { key: "Return-Path", value: "My Personal Email", flagged: true }, // spoofed to match recipient's own address — creates illusion of self-send / account compromise
  
      // ── Sender Identity ─────────────────────────────────────────────────────
      { key: "From", value: "\"My Personal Email\" <My Personal Email>", flagged: true }, // forged — email is not actually from this Hotmail account; SPF failure confirms this
      { key: "To", value: "<My Personal Email>", flagged: true }, // sent to self — deliberate tactic to suggest the attacker controls the account
      { key: "X-SID-PRA", value: "My Personal Email", flagged: false },
      { key: "X-SID-Result", value: "FAIL", flagged: true }, // Microsoft's Sender ID check explicitly failed — From address is forged
      { key: "X-MS-Exchange-Organization-AuthAs", value: "Anonymous", flagged: true }, // Exchange confirmed the sender is unauthenticated — not a logged-in Hotmail user
  
      // ── Content ─────────────────────────────────────────────────────────────
      { key: "Subject", value: "You have been hacked (My Personal Email)", flagged: true }, // fear tactic; recipient's own email in subject to simulate proof of access
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
          code:
            `Authentication-Results:
spf=fail    (sender IP 23.230.37.82 is NOT authorised for hotmail.com)
            smtp.mailfrom=hotmail.com
            helo=boyerfinancialplanning.com   ← actual sending domain
dkim=none   (message not signed)
dmarc=fail  action=none header.from=hotmail.com
            
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
          code:
            `1. Cyrillic substitution (looks identical, different bytes):
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
          code:
            `Amount:  $1,850 USD
Currency:  Litecoin (LTC)
Wallet:  ltc1qcdz3jh8zqhq3vapaudk2wkx9a8q9mtszty0pzk
Deadline:  48 hours from email open
Threat:  Distribute fabricated/non-existent videos to all contacts`,
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
      { type: "Email", value: "My Personal Email (forged — not a real sender)" },
      { type: "Crypto Wallet", value: "ltc1qcdz3jh8zqhq3vapaudk2wkx9a8q9mtszty0pzk (Litecoin)" },
      { type: "Crypto Amount", value: "$1,850 USD in LTC" },
    ],
};
