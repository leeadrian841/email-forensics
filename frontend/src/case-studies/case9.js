// ── CASE 9: ATM Card Fraud ────────────────────────────────────
export default {
    id: "hsbc-atm-card-419-fraud",
    title: "Fake HSBC London $5.5M ATM Card Release Scam",
    subtitle: "Classic 419 abandoned-ATM-card fraud impersonating an HSBC executive via a compromised Nigerian university student account",
    date: "2026-05-05",
    severity: "High",
    category: "Fraud",
    tags: ["419 Fraud", "Advance Fee", "ATM Card Scam", "HSBC Impersonation", "Compromised Student Account", "Google Workspace Abuse", "Nigerian Origin"],
    summary:
      "A textbook 419 'abandoned ATM card' fraud impersonating Amol Dalvi, claimed 'Director ATM Head of Operation HSBC London', sent from a compromised student account at the National Open University of Nigeria (NOUN). The email claims a $5.5 million ATM card belongs to the recipient and offers to courier it once the recipient pays courier charges and provides their full name, address, and phone number. The 'former director who tried to divert your fund' twist is a stock 419 narrative element designed to manufacture urgency and explain why the recipient has never heard of this supposed inheritance. The compromised account (nou261119705@noun.edu.ng) follows the NOUN student matriculation number format (NOU/261119705), confirming it is a real student account that has been hijacked. Critically, NOUN runs its email on Google Workspace, which means the email originated from Google's own SMTP infrastructure (mail-sor-f65.google.com) — DKIM is signed by gappssmtp.com, SPF is via Google's SMTP, and the message arrives with all authentication checks passing cleanly. This Google Workspace abuse via a compromised student account is the most dangerous variant of 419 authentication-passing seen in the dataset so far. Reply-To redirects to dalviamol542@gmail.com (also referenced inside the body) — a separate attacker-controlled Gmail account.",
    verdict: "Confirmed 419 Advance Fee Fraud — Compromised Google Workspace Student Account",
    tldr: "Fake HSBC director offering $5.5M ATM card if you pay 'courier charges'. Sent via Google Workspace from a hijacked Nigerian university student account. All auth passes cleanly via Google. Same actor playbook as Cases 7-9. Do not reply.",
  
    screenshots: [
      {
        url: "/email-forensics/images/atm-card-fraud-email1.png",
        caption: "The HSBC ATM card fraud email",
        alt: "ATM card scam screenshot"
      },
      {
        url: "/email-forensics/images/atm-card-fraud-email2.png",
        caption: "Email headers of the HSBC ATM card fraud email",
        alt: "Critical email headers"
      },
    ],
  
    emailHeaders: [
      // ── Delivery & Routing ──────────────────────────────────────────────────
      { key: "Return-Path", value: "<nou261119705@noun.edu.ng>", flagged: true }, // Nigerian university student account; format NOU<matriculation_number> indicates a real NOUN student
      { key: "Received", value: "from mail-sor-f65.google.com (mail-sor-f65.google.com. [209.85.220.65]) by mx.google.com with SMTPS id 956f58d0204a3-65c2e8479b3sor3971234d50; Tue, 05 May 2026 02:28:38 -0700 (PDT)", flagged: true }, // sent via Google's own SOR (Sender Origin Relay) infrastructure — NOUN runs email on Google Workspace, so this is Google sending Google
      { key: "X-Originating-IP", value: "(not present — Google Workspace strips originating IP for Gmail/Workspace clients)", flagged: true  }, // X-Originating-IP absent because Google Workspace removes it; defeats geographic correlation that worked for some of the previous cases
  
      // ── Sender Identity ─────────────────────────────────────────────────────
      { key: "From", value: "Amol Dalvi <nou261119705@noun.edu.ng>", flagged: true }, // display name "Amol Dalvi" claims HSBC London directorship; account is a NOUN student matriculation number — name/account mismatch confirms impersonation
      { key: "Reply-To", value: "dalviamol542@gmail.com", flagged: true }, // Reply-To redirects to attacker Gmail; same address embedded in body as direct contact — single-channel design
      { key: "To", value: "undisclosed-recipients:;", flagged: true }, // explicit undisclosed-recipients header — mass BCC send
      { key: "Bcc", value: "leeadrian841@gmail.com", flagged: true }, // BCC visible because Gmail preserves the BCC field for the recipient — confirms mass BCC distribution
  
      // ── Content ─────────────────────────────────────────────────────────────
      { key: "Subject", value: "YOUR PAYMENT RELEASE.", flagged: true }, // all-caps subject with trailing period; generic mass-mail boilerplate
      { key: "Date", value: "Tue, 5 May 2026 02:28:29 -0700", flagged: false },
  
      // ── Authentication ───────────────────────────────────────────────────────
      { key: "Authentication-Results", value: "mx.google.com; dkim=pass header.i=@noun-edu-ng.20251104.gappssmtp.com; spf=pass smtp.mailfrom=nou261119705@noun.edu.ng; dmarc=pass (p=NONE sp=NONE dis=NONE) header.from=noun.edu.ng; arc=pass (i=1)", flagged: false }, // all checks pass — but DKIM is signed by gappssmtp.com (Google Workspace platform DKIM), not by noun.edu.ng directly; legitimate-looking but indicates account is on Google Workspace
      { key: "Received-SPF", value: "pass (google.com: domain of nou261119705@noun.edu.ng designates 209.85.220.65 as permitted sender) client-ip=209.85.220.65", flagged: false }, // 209.85.220.65 is Google's SMTP — confirms Google Workspace tenancy
      { key: "DKIM-Signature", value: "v=1; a=rsa-sha256; d=noun-edu-ng.20251104.gappssmtp.com; s=20251104", flagged: true }, // DKIM signing domain is the gappssmtp.com platform-level DKIM, not noun.edu.ng — indicates NOUN has DKIM via Google Workspace platform but no domain-aligned DKIM key
      { key: "X-Google-DKIM-Signature", value: "v=1; a=rsa-sha256; d=1e100.net; s=20251104", flagged: false }, // legitimate Google internal DKIM (1e100.net is Google's infrastructure domain)
      { key: "ARC-Authentication-Results (i=1)", value: "i=1; mx.google.com; arc=none", flagged: false }, // ARC chain shows no prior ARC seal — message originated at Google Workspace, not forwarded
  
      // ── Google Workspace Metadata ────────────────────────────────────────────
      { key: "X-Gm-Message-State", value: "AOJu0YwvSvji/AMhPUzI+lHO8epX5alcO++vnN6Dq5aya+P/JCxa8Kbb...", flagged: false }, // legitimate Google internal message state — confirms message was composed in Gmail/Workspace UI
      { key: "X-Gm-Features", value: "AVHnY4JOJCynl6fgOL_ov4croQ-4ZE3t-Mzd2DE2OCWhpNECK5Lhguj18HWv6sk", flagged: false }, // Gmail feature flag header — confirms Workspace origin
      { key: "X-Gm-Gg", value: "AeBDieuupd1Kv7HM35yqy+6Co/B/TZ0kI9+k4cGXBhU3P77G/LbLbXiwXqJcm4qJSZ0...", flagged: false },
  
      // ── Message Structure ────────────────────────────────────────────────────
      { key: "Message-ID", value: "<CANza2xg2riD0q-q8-1e3oFBJF_f40ChF_0YGz8fyVfeVGnYPag@mail.gmail.com>", flagged: true }, // Message-ID domain is mail.gmail.com — but the account is supposedly noun.edu.ng; this confirms NOUN uses Google Workspace, which is technically legitimate but reveals the underlying platform
      { key: "MIME-Version", value: "1.0", flagged: false },
      { key: "Content-Type", value: "multipart/alternative; boundary=\"00000000000003275506510eac60\"", flagged: false },
    ],
  
    redFlags: [
      // Critical
      { flag: "Impersonates HSBC London executive ('Director ATM Head of Operation')", severity: "Critical" },
      { flag: "Sent from a compromised Nigerian student account (NOUN matriculation 261119705)", severity: "Critical" },
      { flag: "Promises $5.5 million USD via 'abandoned ATM card' delivered by courier", severity: "Critical" },
      { flag: "Requires recipient to pay 'courier charges' upfront — advance fee mechanism", severity: "Critical" },
      { flag: "Reply-To redirects to attacker Gmail (dalviamol542@gmail.com) distinct from sender", severity: "Critical" },
      { flag: "Solicits PII: full name, address, phone number for 'claim'", severity: "Critical" },
  
      // High
      { flag: "Display name (Amol Dalvi) does not match account (matriculation number) at NOUN", severity: "High" },
      { flag: "All authentication passes via Google Workspace — most dangerous auth scenario in dataset", severity: "High" },
      { flag: "HSBC executives do not personally email random individuals about ATM card delivery", severity: "High" },
      { flag: "Mass BCC send (undisclosed-recipients) confirms it is unsolicited bulk fraud", severity: "High" },
      { flag: "X-Originating-IP absent — Google Workspace strips it, defeating geographic attribution", severity: "High" },
      { flag: "Stock 419 'former director tried to divert your fund' narrative element", severity: "High" },
      { flag: "Pretextual urgency ('this is the 3rd time') manufactures false prior history", severity: "High" },
  
      // Medium
      { flag: "Subject is all-caps boilerplate ('YOUR PAYMENT RELEASE.') with no personalisation", severity: "Medium" },
      { flag: "Body Reply-To address (dalviamol542@gmail.com) reverses claimed name (Dalvi Amol)", severity: "Medium" },
      { flag: "DKIM signed by gappssmtp.com platform DKIM, not by noun.edu.ng directly", severity: "Medium" },
      { flag: "DMARC policy is p=NONE — even a failure would not have blocked delivery", severity: "Medium" },
      { flag: "Account name 'nou261119705' is a Nigerian student matriculation, not a banker's email", severity: "Medium" },
  
      // Low
      { flag: "Grammatical errors ('rightfully intimate beneficiary', 'registered re liable')", severity: "Low" },
      { flag: "'Mr.Amol Dalvi' missing space — formatting inconsistency typical of low-effort scam", severity: "Low" },
      { flag: "Single contact channel (one Gmail) — less infrastructure than Cases 7/8 (Gmail+phone)", severity: "Low" },
    ],
  
    analysis: [
      {
        step: "1. The 'Abandoned ATM Card' Variant of 419 Fraud",
        content:
          "The 'abandoned ATM card' or 'unclaimed ATM payment release' variant is a long-running 419 fraud subfamily that has circulated continuously since at least the mid-2000s. The premise is functionally identical to other 419 schemes — a banker contacts the recipient about a large sum of unclaimed funds — but the delivery mechanism is specifically reframed around a physical ATM card to make the scheme feel more concrete and tangible than a bank transfer. The pretextual narrative element about a 'former director who tried to divert your fund' explains why the recipient has never been contacted before, manufactures urgency around the new director's investigation, and casts the new contact as a hero acting against corruption. The advance fee hook here is 'courier charges' — explicitly named in the email — which sounds proportionate and reasonable to a victim who believes they are about to receive $5.5 million. Once paid, additional fees (insurance, customs clearance, anti-money-laundering certification, courier upgrade fees) are invented indefinitely.",
      },
      {
        step: "2. Google Workspace Abuse — The Most Dangerous Auth-Passing Variant",
        content:
          "This email is the most technically dangerous of all the authentication-passing fraud emails in the dataset because it weaponises Google's own infrastructure. The National Open University of Nigeria runs its student email on Google Workspace, which means a hijacked NOUN student account is functionally equivalent to a hijacked Gmail account from Gmail's authentication perspective. SPF passes because the relay IP (209.85.220.65) is Google's own SMTP. DKIM passes because Google Workspace signs all outbound mail with its platform DKIM key (gappssmtp.com). DMARC passes because alignment is checked between the From domain and the DKIM domain, which both resolve through Google. ARC passes. Even the Message-ID is a legitimate Gmail Message-ID. There is no header-level signal of fraud — a recipient or automated filter looking only at authentication and infrastructure metadata would conclude this email is genuinely from a NOUN student email account. The fraud is detectable only by reading the content and noticing the impersonation.",
        codeBlock: {
          language: "text",
          title: "Google Workspace authentication chain",
          code: `Sending IP:        209.85.220.65 (mail-sor-f65.google.com — Google SMTP)
Sending domain:    nou261119705@noun.edu.ng
DKIM signed by:    noun-edu-ng.20251104.gappssmtp.com (Google Workspace platform DKIM)
SPF result:        pass (Google SMTP authorised for noun.edu.ng)
DMARC result:      pass (DKIM domain alignment via Google platform)
Message-ID:        @mail.gmail.com (Gmail-generated)
ARC chain:         pass (i=1 via Google)
X-Originating-IP:  (absent — Google strips this for Workspace senders)

Effect: Every header-level authentication signal indicates legitimacy.
        The fraud is invisible to header analysis alone.`,
        },
      },
      {
        step: "3. Compromised NOUN Student Account",
        content:
          "The sending account (nou261119705@noun.edu.ng) follows the standard National Open University of Nigeria student email format: 'nou' prefix followed by the student's matriculation number. This means 261119705 is a real NOUN student matriculation number belonging to a specific person — almost certainly compromised via credential theft, credential stuffing using leaked passwords from unrelated breaches, or phishing of the original student. NOUN is a major distance-learning university with a large student population, and Nigerian university accounts are repeatedly targeted because they offer Google Workspace authentication trust at minimal acquisition cost. The student whose account was compromised is also a victim here — their email reputation is being damaged, and any reply blocking or abuse complaints will impact their ability to use their legitimate university email. The compromise should be reported to NOUN IT and Google Workspace abuse to allow the legitimate owner to recover access.",
        codeBlock: {
          language: "text",
          title: "NOUN student account format",
          code: `Account:         nou261119705@noun.edu.ng
                  ↑   ↑
                  │   └── 261119705 = student matriculation number
                  └────── 'nou' prefix = National Open University of Nigeria

Real student:    Owner of matriculation 261119705 at NOUN (compromised victim)
Attacker:        Operating the account remotely after credential theft
Platform:        Google Workspace (NOUN tenant)

Comparison to prior cases:
  Case 2 (rcn.com):       compromised US ISP account
  Case 6 (sccoast.net):   compromised US ISP account
  Case 7 (fibertel):      compromised Argentinian ISP account
  Case 8 (NCKU):          compromised Taiwanese university account
  Case 9 (NOUN):          compromised Nigerian university account on Google Workspace ←
                           geographic origin matches the historical 419 fraud heartland`,
        },
      },
      {
        step: "4. Reply-To Address Reveals Attacker Identity Pattern",
        content:
          "The Reply-To address (dalviamol542@gmail.com) reveals the attacker's identity construction. The display name 'Amol Dalvi' is reversed in the Gmail handle to 'dalviamol' with a 542 suffix. This name-reversal pattern is common in 419 fraud Gmail account creation — the attacker registers a Gmail account that, when read backward, appears to match the claimed identity, which adds a thin layer of plausibility if the victim glances at the Reply-To. A real banking executive named Amol Dalvi would have a corporate hsbc.com email, not a personal Gmail with a number suffix. Notably, this case uses a single contact channel (one Gmail) versus the dual-channel (Gmail + phone) approach in Cases 7 and 8, suggesting either lower investment in this campaign or that the operator handles all replies from a single inbox.",
        codeBlock: {
          language: "text",
          title: "Reply-To pattern across the 419 family",
          code: `Case 7  (IMF/INTERPOL):    From:    brs1944@sccoast.net
                              Reply-To: charlesflanagan221@yahoo.com
                              Body:    charlesrflanagan9@gmail.com + phone

Case 8  (UN Compensation): From:    omarcapone@fibertel.com.ar
                           Reply-To: (none)
                           Body:    charleswscharf593@gmail.com + phone
  
Case 9  (Next-of-Kin):     From:    hllu@mail.csie.ncku.edu.tw
                           Reply-To: emily.portney37@gmail.com
                           Body:    (none beyond Reply-To)

Case 10 (HSBC ATM):        From:    nou261119705@noun.edu.ng
                           Reply-To: dalviamol542@gmail.com   ← name reversed
                           Body:    dalviamol542@gmail.com (same)

Pattern: Reply-To Gmail with name-reversal or numeric suffix
         is the consistent attacker-controlled inbox across the 419 family.`,
        },
      },
      {
        step: "5. Why This Brings Geographic Attribution Closer to Source",
        content:
          "Cases 7, 8, and 9 used compromised accounts in the US, Argentina, and Taiwan — geographically distant from the historical 419 fraud heartland in West Africa. Case 10 uses a compromised Nigerian university account, which is consistent with the original geographic source of 419 fraud (the scheme is named after Section 419 of the Nigerian Criminal Code, which criminalises obtaining property by false pretences). This is not necessarily evidence that the actor behind Case 10 is the same as Cases 7-9 — the 419 playbook is widely shared and used by many independent operations — but it does indicate that this particular email was likely composed by an operator with direct access to Nigerian university credential markets, which is a more localised infrastructure than the ISP-credential markets used in Cases 7 and 8. Whether the same operator or a related cluster is behind multiple cases would require correlation of additional indicators (Gmail accounts, phone numbers, courier company names if mentioned in follow-up replies, BTC/wire instructions from later in the conversation thread).",
      },
    ],
  
    recommendations: [
      "Do not reply to the email and do not contact dalviamol542@gmail.com — any reply confirms your address is active and triggers an aggressive follow-up requesting courier charges.",
      "Do not pay any 'courier charges', 'shipping fees', 'insurance', 'customs clearance', or any other upfront payment regardless of how reasonable the amount sounds — this is the fraud mechanism itself.",
      "Do not provide your full name, address, or phone number — this PII has independent value for identity theft and will be sold to other fraud operations even if you never engage further.",
      "Report the compromised NOUN student account (nou261119705@noun.edu.ng) to NOUN IT abuse — the legitimate student owner deserves to recover their account.",
      "Report the compromised Google Workspace account to Google at https://support.google.com/a/answer/178266 (compromised account abuse form) — Google can suspend the account and notify the NOUN administrator.",
      "Report the attacker Gmail (dalviamol542@gmail.com) to Google at support.google.com/mail/answer/8253.",
      "Report the impersonation to HSBC at phishing@hsbc.com — HSBC actively pursues executive impersonation cases.",
      "If you are in Singapore, file a report with the Singapore Police Force Anti-Scam Command via the I-Witness portal.",
      "Real HSBC executives do not personally email random individuals about $5.5M ATM cards delivered via courier — when in doubt, contact HSBC directly through their published corporate channels.",
    ],
  
    techniques: [
      "419 Advance Fee Fraud (Abandoned ATM Card Variant)",
      "Real-Sounding Executive Impersonation (HSBC London)",
      "Compromised University Student Account (Google Workspace)",
      "Google Workspace Authentication Abuse (DKIM/SPF/DMARC all pass via Google)",
      "Reply-To Misdirection with Name-Reversal Gmail",
      "Mass BCC Distribution (undisclosed-recipients)",
      "Courier Charge as Advance Fee Hook",
      "Pretextual Urgency ('3rd notification')",
      "Stock Narrative Element ('former director tried to divert your fund')",
      "PII Harvesting (Name, Address, Phone)",
    ],
  
    iocs: [
      { type: "Email", value: "nou261119705@noun.edu.ng (compromised NOUN student account)" },
      { type: "Email", value: "dalviamol542@gmail.com (Reply-To and body contact — attacker Gmail)" },
      { type: "Domain", value: "noun.edu.ng (National Open University of Nigeria — Google Workspace tenant)" },
      { type: "IP", value: "209.85.220.65 (Google SMTP — shared infrastructure, lower priority IOC)" },
      { type: "Person", value: "Amol Dalvi (claimed identity — likely fabricated; no verified HSBC executive by this name)" },
      { type: "Org", value: "HSBC London (impersonated — no actual involvement)" },
      { type: "Amount", value: "$5,500,000 USD (claimed ATM card value — fictitious)" },
      { type: "Matric", value: "NOUN matriculation number 261119705 (compromised victim — student should be notified)" },
    ],
};
