// ── CASE 6: Interpol Compensation Fraud ────────────────────────────────────
export default {
    id: "imf-interpol-compensation-advance-fee-fraud",
    title: "Fake IMF / INTERPOL Compensation — Advance Fee & PII Harvesting",
    subtitle: "419-style fraud impersonating the IMF and INTERPOL via a compromised US ISP account",
    date: "2026-04-04",
    severity: "High",
    category: "Fraud",
    tags: ["419 Fraud", "Advance Fee", "IMF Impersonation", "INTERPOL Impersonation", "PII Harvesting", "Compromised Account", "Reply-To Hijack"],
    summary:
      "A classic 419-style advance fee fraud sent from a personal South Carolina ISP account (brs1944@sccoast.net) — likely compromised or purpose-created — impersonating the IMF and INTERPOL. The email claims $2,500,000 USD has been 'recovered' in the recipient's name and will be delivered via an 'ATM Visa Card', but requires a 'delivery fee' and the recipient's full name, phone number, and home address. The delivery fee is the advance fee hook — once paid, additional fees will be invented indefinitely. The PII solicitation additionally enables identity theft. All authentication passes legitimately, and Vade email security marked it clean. A Reply-To misdirection redirects responses to a separate Yahoo account (charlesflanagan221@yahoo.com) while a Gmail address and US phone number are embedded in the body as the actual contact channels. The infrastructure mirrors Case 2 (RFNet BEC) almost exactly: same Zimbra version, same X-Vade-Verdict: clean, same ISP account pattern, same originating IP / relay discrepancy.",
    verdict: "Confirmed 419 Advance Fee Fraud — IMF/INTERPOL Impersonation",
    tldr: "Fake IMF 'compensation' of $2.5M delivered via ATM card, requiring a 'delivery fee' and your home address. Classic 419 advance fee structure. All auth passes. Do not reply, do not pay any fee, do not provide personal details.",
  
    screenshots: [
      {
        url: "/email-forensics/images/imf-fraud-email.png",
        caption: "The IMF compensation fraud email",
        alt: "IMF fraud email screenshot"
      },
    ],
  
    emailHeaders: [
      // ── Delivery & Routing ──────────────────────────────────────────────────
      { key: "Return-Path", value: "<brs1944@sccoast.net>", flagged: true }, // personal South Carolina ISP account — not an IMF or INTERPOL address
      { key: "Received", value: "from mail.gci.net ([129.80.43.150]) by mx.google.com with ESMTPS id 6a1803df08f44-8a593ee312asi122586996d6; Sat, 04 Apr 2026 15:18:44 -0700 (PDT)", flagged: false }, // legitimate sccoast.net / GCI mail relay
      { key: "Received", value: "from [10.219.153.78] helo=md01.beryl.email-ash1.sync.lan by smtp.beryl.email-ash1.sync.lan (envelope-from <brs1944@sccoast.net>); Sat, 04 Apr 2026 18:18:39 -0400", flagged: true }, // routed through Beryl commercial mailing platform (sync.lan) before hitting sccoast.net SMTP
      { key: "X-Originating-IP", value: "[45.144.114.204]", flagged: true }, // differs from GCI/sccoast relay (129.80.43.150) — email composed on a separate host; consistent with compromised account operated remotely
      { key: "X-Mailer", value: "Zimbra 10.1.16_GA_4850 (ZimbraWebClient - GC146 (Win)/10.1.16_GA_4863)", flagged: true }, // identical Zimbra version and client type to Case 2 (RFNet BEC probe) — possible shared tooling or same actor
  
      // ── Sender Identity ─────────────────────────────────────────────────────
      { key: "From", value: "c <brs1944@sccoast.net>", flagged: true }, // display name is a single letter "c" — placeholder never populated; South Carolina ISP not affiliated with IMF or INTERPOL
      { key: "Reply-To", value: "c <charlesflanagan221@yahoo.com>", flagged: true }, // Reply-To redirects to a Yahoo account distinct from the sending address — classic misdirection to receive replies on attacker-controlled inbox
      { key: "To", value: "(not present — likely BCC or undisclosed recipients)", flagged: true }, // absence of To header suggests mass BCC send to harvested list
      { key: "X-Vade-Verdict", value: "clean", flagged: true }, // Vade security marked this clean — same failure as Case 2; all auth passes so automated filters do not flag it
  
      // ── Content ─────────────────────────────────────────────────────────────
      { key: "Subject", value: "ATTENTION", flagged: true }, // single-word all-caps subject — no context; designed to create urgency and curiosity without triggering keyword filters
      { key: "Date", value: "Sat, 4 Apr 2026 18:18:39 -0400 (EDT)", flagged: false },
  
      // ── Authentication ───────────────────────────────────────────────────────
      { key: "Authentication-Results", value: "mx.google.com; dkim=pass header.i=@sccoast.net header.s=20180516; spf=pass smtp.mailfrom=brs1944@sccoast.net; dmarc=pass (p=NONE sp=NONE dis=NONE) header.from=sccoast.net", flagged: false }, // all three pass — account is legitimate; authentication cannot detect this fraud
      { key: "Received-SPF", value: "pass (google.com: domain of brs1944@sccoast.net designates 129.80.43.150 as permitted sender) client-ip=129.80.43.150", flagged: false },
      { key: "DKIM-Signature", value: "v=1; a=rsa-sha256; d=sccoast.net; s=20180516; h=From:Subject:Date:To:MIME-Version:Content-Type", flagged: false }, // legitimate rsa-sha256 — unlike Cases 4/5 which used deprecated rsa-sha1
  
      // ── Campaign / Platform Metadata ─────────────────────────────────────────
      { key: "Feedback-ID", value: "bos:htc:res:beryl", flagged: true }, // Beryl commercial mailing platform used to route the send — same pattern as Case 2's use of legitimate relay infrastructure
      { key: "X-Vade-Client", value: "BERYL", flagged: false },
      { key: "Thread-Index", value: "A5C61+tSbJ9IPeN3uREZIV4YbLmBHg==", flagged: false },
      { key: "Thread-Topic", value: "ATTENTION", flagged: false },
  
      // ── Message Structure ────────────────────────────────────────────────────
      { key: "Message-ID", value: "<2004971955.123888740.1775341119597.JavaMail.zimbra@sccoast.net>", flagged: false },
      { key: "MIME-Version", value: "1.0", flagged: false },
      { key: "Content-Type", value: "multipart/alternative; boundary=\"=_5445523c-8912-4883-a6cb-d793eac78743\"", flagged: false },
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
  
Sending account: brs1944@sccoast.net      ← compromised/purpose-created ISP account
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
      { type: "Email", value: "brs1944@sccoast.net (sending account — likely compromised)" },
      { type: "Email", value: "charlesflanagan221@yahoo.com (Reply-To — attacker inbox)" },
      { type: "Email", value: "charlesrflanagan9@gmail.com (body contact — attacker Gmail)" },
      { type: "Phone", value: "+1 (724) 270-4267 (Pittsburgh, PA area code — attacker phone)" },
      { type: "IP", value: "45.144.114.204 (X-Originating-IP — remote composition host)" },
      { type: "Domain", value: "sccoast.net (South Carolina ISP — account likely compromised)" },
      { type: "Org", value: "IMF (impersonated — no affiliation)" },
      { type: "Org", value: "INTERPOL (impersonated — no affiliation)" },
    ],
};
