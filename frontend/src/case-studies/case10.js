// ── CASE 10: Fake Recruiter Campaign ────────────────────────────────────
// Merged campaign case: three fake recruiter emails, one operator.
// Recipient address, tracking IDs, and message hashes are redacted. URLs are defanged.
export default {
    id: "fake-recruiter-retargeting-campaign",
    title: "Fake Recruiter Retargeting Campaign",
    subtitle: "Three emails, three Gmail accounts, one operator",
    date: "2026-11-08",
    dateEnd: "2026-11-13",
    severity: "High",
    category: "Recruitment Fraud / PII Harvesting",
    tags: ["Job Scam", "Fake Recruiter", "Campaign", "Account Rotation", "CV Harvesting", "Tracking Pixel", "OSINT Scraping", "Gmail Abuse"],
    summary:
      "Three unsolicited recruiter emails reached the same inbox within six days, each from a different free Gmail account. All three share one template: the same subject format, the same HTML structure, and the same paraphrase of the recipient's public portfolio. The first email posed as 'Ashmont Search', an agency with no discoverable registration or web presence, and asked for a CV. The second dropped the agency, added a hidden mail-merge tracking pixel, and asked for a one-word reply. The third dropped every identity marker and asked only about career interests. The operator rotated accounts and softened the ask after each non-reply. Every IP in all three emails belongs to Google, and Gmail strips the sender's client IP, so header geolocation is impossible. All authentication passes because the accounts are genuine Gmail accounts. The campaign links through template structure, not infrastructure.",
    verdict: "Recruitment Fraud Campaign: One Operator, Three Rotated Gmail Accounts",
    tldr: "One operator sent three fake recruiter emails from three Gmail accounts in six days, softening the ask each time: CV request, keyword reply, open question. All auth passes. Template fingerprints link them.",

    screenshots: [],

    // ── Campaign block ─────────────────────────────────────────────────────────
    campaign: {
      timeline: [
        { emailId: "e1", sent: "Sun 08 Nov 2026, 08:21 SGT", sender: "gideons134679@gmail.com",      persona: "Gideon, Career Consultant, Ashmont Search",          ask: "Send latest CV and target roles" },
        { emailId: "e2", sent: "Wed 11 Nov 2026, 10:48 SGT", sender: "qakinola29@gmail.com",         persona: "Professional Executive Talent Relations Specialist", ask: "Reply INTERESTED or OPEN" },
        { emailId: "e3", sent: "Fri 13 Nov 2026, 09:25 SGT", sender: "samuel.executive28@gmail.com", persona: "None (unsigned)",                                   ask: "Share future career interests" },
      ],
    fingerprints: [
      { indicator: "Subject Header",        values: ["NAME + HEADLINE", "Name | Headline", "Name | Headline"],                         shared: true  },
      { indicator: "HTML Nesting",            values: ["ltr > div > auto", "ltr > div > auto", "ltr > div > auto"],                      shared: true  },
      { indicator: "Scraped Profile Summary", values: ["Yes", "Yes", "Yes"],                                                             shared: true  },
      { indicator: "Sender Domain",           values: ["gmail.com", "gmail.com", "gmail.com"],                                           shared: true  },
      { indicator: "Delivery Window (SGT)",   values: ["08:21", "10:48", "09:25"],                                                       shared: true  },
      { indicator: "Authentication",          values: ["All pass", "All pass", "All pass"],                                              shared: true  },
      { indicator: "Sender Account",          values: ["gideons134679", "qakinola29", "samuel.executive28"],                             shared: false },
      { indicator: "Agency Name",            values: ["Ashmont Search", "None", "None"],                                                shared: false },
      { indicator: "Tracking Pixel",          values: ["None", "p.mailmerge.eu", "None"],                                                shared: false },
      { indicator: "Date Header Offset",      values: ["+0100", "-0800", "+0100"],                                                       shared: false },
      { indicator: "Google Relay IP Address",            values: ["209.85.220.41", "209.85.220.65", "209.85.220.41"],                               shared: false },
    ],
    },

    // ── Per-email evidence ─────────────────────────────────────────────────────
    emails: [
      {
        id: "e1",
        label: "Email 1: Ashmont Search",
        date: "2026-11-08",
        severity: "High",
        emailHeaders: [
          // Delivery & Routing
          { key: "Delivered-To",     value: "[recipient]", flagged: false },
          { key: "Received",         value: "by 2002:a05:7119:1052:10b0:1eb:e41d:28db with SMTP id cy18-n1csp617997ggb; Sat, 7 Nov 2026 16:21:32 -0800 (PST)", flagged: false }, // decodes to 10.5.113.25, recipient's Gmail mailbox server
          { key: "X-Received",       value: "by 2002:a05:651c:4182:b0:3ab:185f:575d with SMTP id 38308e7fff4ca-3adfa3f6650mr375631fa; Sat, 07 Nov 2026 16:21:32 -0800 (PST)", flagged: false }, // decodes to 10.5.101.28, Google internal
          { key: "Return-Path",      value: "<gideons134679@gmail.com>", flagged: true }, // free Gmail with six-digit suffix; no agency domain
          { key: "Received",         value: "from mail-sor-f41.google.com (mail-sor-f41.google.com. [209.85.220.41]) by mx.google.com with SMTPS; Sat, 07 Nov 2026 16:21:32 -0800 (PST)", flagged: false }, // Google outbound relay, AS15169
          { key: "X-Received",       value: "by 2002:a05:651c:a170:b0:3ac:4b79:573b with SMTP id 38308e7fff4ca-3adfa488e4fmr437811fa; Sat, 07 Nov 2026 16:21:31 -0800 (PST)", flagged: false }, // decodes to 10.5.101.28, Google internal
          { key: "X-Originating-IP", value: "(absent: Gmail strips the sender's client IP)", flagged: true }, // sender location concealed

          // Sender Identity
          { key: "From",     value: "Gideon S <gideons134679@gmail.com>", flagged: true }, // first name and initial only
          { key: "To",       value: "Adrian Lee <[recipient]>", flagged: true }, // personalised field, consistent with mail merge
          { key: "Reply-To", value: "(not set)", flagged: false },
  
          // Content
          { key: "Subject", value: "ADRIAN LEE — CYBERSECURITY & TECHNOLOGY OPERATIONS", flagged: true }, // name + headline template
          { key: "Date",    value: "Sun, 8 Nov 2026 01:21:18 +0100", flagged: true }, // = 00:21 UTC = 08:21 SGT Sunday
  
          // Authentication
          { key: "Authentication-Results", value: "mx.google.com; dkim=pass header.i=@gmail.com header.s=20260707; arc=pass (i=1); spf=pass smtp.mailfrom=gideons134679@gmail.com; dmarc=pass (p=NONE sp=QUARANTINE dis=NONE) header.from=gmail.com; dara=pass header.i=@gmail.com", flagged: false }, // all pass; genuine Gmail account
          { key: "Received-SPF",           value: "pass (google.com: domain of gideons134679@gmail.com designates 209.85.220.41 as permitted sender) client-ip=209.85.220.41", flagged: false },
          { key: "DKIM-Signature",         value: "v=1; a=rsa-sha256; d=gmail.com; s=20260707; t=1794097292; x=1794702092", flagged: false }, // t = 2026-11-08 00:21:32 UTC
          { key: "ARC-Seal",               value: "i=1; cv=none; d=google.com, then i=2; cv=pass; d=google.com", flagged: false }, // Google internal only
  
          // Message Structure
          { key: "Message-ID",          value: "<CAG7dqE4xXar+ZD0SWodPz53yqFweVBJoQRCnSi1mhWsFYNjvQA@mail.gmail.com>", flagged: false },
          { key: "Content-Type",        value: "multipart/alternative; boundary=\"000000000000c44269065fb8d3d9\"", flagged: false },
          { key: "HTML body structure", value: "<div dir=\"ltr\"><div><div dir=\"auto\">...", flagged: true }, // campaign template fingerprint
        ],
        redFlags: [
          { flag: "Direct CV request to an unverified sender: PII harvest",                          severity: "Critical" },
          { flag: "Agency 'Ashmont Search' has no discoverable registration or web presence",        severity: "High" },
          { flag: "No MOM EA licence number or EA personnel registration number",                    severity: "High" },
          { flag: "Sender states the portfolio was the source: confirmed OSINT scraping",            severity: "High" },
          { flag: "Signature carries no website, phone, address, or LinkedIn profile",               severity: "Medium" },
          { flag: "Sent 08:21 SGT on a Sunday",                                                      severity: "Medium" },
        ],
      },
      {
        id: "e2",
        label: "Email 2: Akinola Quadri",
        date: "2026-11-11",
        severity: "Medium",
        emailHeaders: [
          // Delivery & Routing
          { key: "Delivered-To",     value: "[recipient]", flagged: false },
          { key: "Received",         value: "by 2002:a05:7118:4610:b0:1ec:fca0:f95a with SMTP id i16csp351718ggp; Tue, 10 Nov 2026 18:49:05 -0800 (PST)", flagged: false }, // decodes to 10.5.113.24, recipient's Gmail mailbox server
          { key: "X-Received",       value: "by 2002:a17:902:e943:b0:2ed:1b26:2bf5 with SMTP id d9443c01a7336-2edd7a8a14emr11668775ad; Tue, 10 Nov 2026 18:49:05 -0800 (PST)", flagged: false }, // decodes to 10.23.9.2, Google internal
          { key: "Return-Path",      value: "<qakinola29@gmail.com>", flagged: true }, // free Gmail with numeric suffix
          { key: "Received",         value: "from mail-sor-f65.google.com (mail-sor-f65.google.com. [209.85.220.65]) by mx.google.com with SMTPS; Tue, 10 Nov 2026 18:49:05 -0800 (PST)", flagged: false }, // Google outbound relay, AS15169
          { key: "X-Received",       value: "by 2002:a17:902:d58f:b0:2df:a4d8:57ad with SMTP id d9443c01a7336-2edd7b82f3emr11508635ad; Tue, 10 Nov 2026 18:49:05 -0800 (PST)", flagged: false }, // decodes to 10.23.9.2, Google internal
          { key: "X-Originating-IP", value: "(absent: Gmail strips the sender's client IP)", flagged: true },
  
          // Sender Identity
          { key: "From",     value: "Akinola Quadri <qakinola29@gmail.com>", flagged: true }, // second identity in the campaign
          { key: "To",       value: "Adrian Lee <[recipient]>", flagged: true }, // mail-merge personalisation
          { key: "Reply-To", value: "(not set)", flagged: false },
  
          // Content
          { key: "Subject", value: "Adrian Lee | Cybersecurity & IT Engineering Opportunity – Telecommunications", flagged: true }, // name | headline template
          { key: "Date",    value: "Tue, 10 Nov 2026 18:48:54 -0800", flagged: true }, // = 02:48 UTC = 10:48 SGT; offset differs from emails 1 and 3
  
          // Authentication
          { key: "Authentication-Results", value: "mx.google.com; dkim=pass header.i=@gmail.com header.s=20260707; arc=pass (i=1); spf=pass smtp.mailfrom=qakinola29@gmail.com; dmarc=pass (p=NONE sp=QUARANTINE dis=NONE) header.from=gmail.com; dara=pass header.i=@gmail.com", flagged: false },
          { key: "Received-SPF",           value: "pass (google.com: domain of qakinola29@gmail.com designates 209.85.220.65 as permitted sender) client-ip=209.85.220.65", flagged: false },
          { key: "DKIM-Signature",         value: "v=1; a=rsa-sha256; d=gmail.com; s=20260707; t=1794365345; x=1794970145", flagged: false }, // t = 2026-11-11 02:49:05 UTC
          { key: "ARC-Seal",               value: "i=1; cv=none; d=google.com, then i=2; cv=pass; d=google.com", flagged: false },
  
          // Message Structure
          { key: "Message-ID",              value: "<CAJFXg-sDPAmQhcgm9U5=7teK4b=ALy133WNf9Tq6SZ4cuffxeA@mail.gmail.com>", flagged: false },
          { key: "Content-Type",            value: "multipart/alternative; boundary=\"000000000000fcbe3f065ff73cff\"", flagged: false },
          { key: "HTML body structure",     value: "<div dir=\"ltr\"><div><div dir=\"auto\">...", flagged: true }, // campaign template fingerprint
          { key: "Embedded tracking pixel", value: "<img width=\"0\" height=\"0\" class=\"mailtrack-img\" src=\"hxxps://p[.]mailmerge[.]eu/trace/mail/[redacted].png?u=[redacted]\">", flagged: true }, // per-recipient open tracking from a mail-merge tool
        ],
        redFlags: [
          { flag: "Hidden 0x0 tracking pixel (p.mailmerge.eu) logs opens and confirms bulk mail merge", severity: "High" },
          { flag: "Keyword-reply CTA ('reply INTERESTED or OPEN'): automated qualification funnel",     severity: "High" },
          { flag: "Unnamed 'telecommunications' opportunity: no company, role, salary, or location",    severity: "High" },
          { flag: "Body cites public project categories (email forensics, networking, DevOps)",         severity: "High" },
          { flag: "Fabricated title: 'Professional Executive Talent Relations Specialist'",             severity: "Medium" },
          { flag: "Unsigned: 'Best regards' with no name or contact details",                           severity: "Medium" },
        ],
      },
      {
        id: "e3",
        label: "Email 3: Samuel Executive",
        date: "2026-11-13",
        severity: "Medium",
        emailHeaders: [
          // Delivery & Routing
          { key: "Delivered-To",     value: "[recipient]", flagged: false },
          { key: "Received",         value: "by 2002:a05:7118:30a9:b0:1ec:fca0:f95a with SMTP id p41csp2400892ggh; Thu, 12 Nov 2026 17:25:46 -0800 (PST)", flagged: false }, // decodes to 10.5.113.24, recipient's Gmail mailbox server
          { key: "X-Received",       value: "by 2002:a53:c2c4:0:b0:679:992e:3ad8 with SMTP id 956f58d0204a3-67d8973d68dmr458482d50; Thu, 12 Nov 2026 17:25:46 -0800 (PST)", flagged: false }, // decodes to 10.83.194.196, Google internal
          { key: "Return-Path",      value: "<samuel.executive28@gmail.com>", flagged: true }, // free Gmail with numeric suffix
          { key: "Received",         value: "from mail-sor-f41.google.com (mail-sor-f41.google.com. [209.85.220.41]) by mx.google.com with SMTPS; Thu, 12 Nov 2026 17:25:46 -0800 (PST)", flagged: false }, // Google outbound relay, AS15169
          { key: "X-Received",       value: "by 2002:a05:690e:4381:b0:67b:dd37:e3b8 with SMTP id 956f58d0204a3-67d896e8237mr457666d50; Thu, 12 Nov 2026 17:25:46 -0800 (PST)", flagged: false }, // decodes to 10.5.105.14, Google internal
          { key: "X-Originating-IP", value: "(absent: Gmail strips the sender's client IP)", flagged: true },
  
          // Sender Identity
          { key: "From",     value: "Samuel Executive <samuel.executive28@gmail.com>", flagged: true }, // 'Executive' used as a surname; placeholder identity
          { key: "To",       value: "Adrian Lee <[recipient]>", flagged: true }, // mail-merge personalisation
          { key: "Reply-To", value: "(not set)", flagged: false },
  
          // Content
          { key: "Subject", value: "Adrian Lee | Cybersecurity and IT engineering", flagged: true }, // name | headline template
          { key: "Date",    value: "Fri, 13 Nov 2026 02:25:35 +0100", flagged: true }, // = 01:25 UTC = 09:25 SGT
  
          // Authentication
          { key: "Authentication-Results", value: "mx.google.com; dkim=pass header.i=@gmail.com header.s=20260707; arc=pass (i=1); spf=pass smtp.mailfrom=samuel.executive28@gmail.com; dmarc=pass (p=NONE sp=QUARANTINE dis=NONE) header.from=gmail.com; dara=pass header.i=@gmail.com", flagged: false },
          { key: "Received-SPF",           value: "pass (google.com: domain of samuel.executive28@gmail.com designates 209.85.220.41 as permitted sender) client-ip=209.85.220.41", flagged: false },
          { key: "DKIM-Signature",         value: "v=1; a=rsa-sha256; d=gmail.com; s=20260707; t=1794533146; x=1795137946", flagged: false }, // t = 2026-11-13 01:25:46 UTC
          { key: "ARC-Seal",               value: "i=1; cv=none; d=google.com, then i=2; cv=pass; d=google.com", flagged: false },
  
          // Message Structure
          { key: "Message-ID",          value: "<CAPqRjgiZT5m6y0uttb35JAkp9dQEXOCd7GgoJ3+ECMtdmTGXDQ@mail.gmail.com>", flagged: false },
          { key: "Content-Type",        value: "multipart/alternative; boundary=\"000000000000b943da06601e4e30\"", flagged: false },
          { key: "HTML body structure", value: "<div dir=\"ltr\"><div><div dir=\"auto\">...", flagged: true }, // campaign template fingerprint
        ],
        redFlags: [
          { flag: "No company, client, role, or surname: sender is unverifiable",      severity: "High" },
          { flag: "Unsigned: 'Best regards' with no name, title, or contact details",  severity: "High" },
          { flag: "Display name uses 'Executive' as a surname: placeholder identity",  severity: "Medium" },
          { flag: "No payload or concrete ask: built to elicit a reply",               severity: "Medium" },
        ],
      },
    ],

    // ── Campaign-level findings ────────────────────────────────────────────────
    redFlags: [
      // Critical
      { flag: "Campaign opens with a CV request to an unverified sender: PII harvest", severity: "Critical" },
  
      // High
      { flag: "Three sender identities in six days: account rotation",                         severity: "High" },
      { flag: "Ask softens after each non-reply: CV, then keyword, then open question",        severity: "High" },
      { flag: "Identical template across all three emails: one operator",                      severity: "High" },
      { flag: "All three paraphrase the recipient's public portfolio: OSINT scraping",         severity: "High" },
      { flag: "Every sender uses free Gmail; no agency domain, licence, or verifiable identity", severity: "High" },
  
      // Medium
      { flag: "Sender IP concealed in all three: only Google relay and private Google addresses", severity: "Medium" },
      { flag: "All sends land between 08:00 and 11:00 SGT: scheduled to the recipient's morning", severity: "Medium" },
      { flag: "Mail-merge tooling confirmed by tracking pixel in email 2",                        severity: "Medium" },
  
      // Low
      { flag: "Date offsets disagree (+0100, -0800, +0100): timezone is not a location signal", severity: "Low" },
      { flag: "All authentication passes via Google: header checks offer no protection",        severity: "Low" },
    ],
  
    analysis: [
      {
        step: "1. Campaign Timeline",
        content:
          "Three emails arrived in six days from three Gmail accounts. The first carried the fullest persona and the strongest ask: a named agency and a CV request. The second dropped the agency and asked for a one-word reply. The third dropped every identity marker and asked an open question. The operator rotated accounts and lowered the barrier to reply after each silence.",
        codeBlock: {
          language: "text",
          title: "Timeline",
          code: `#  Sent (SGT)          Sender                         Persona               Ask
  ──────────────────────────────────────────────────────────────────────────────────────────
  1  Sun 08 Nov 08:21    gideons134679@gmail.com        Ashmont Search        Send CV + target roles
  2  Wed 11 Nov 10:48    qakinola29@gmail.com           Talent Relations      Reply INTERESTED / OPEN
  3  Fri 13 Nov 09:25    samuel.executive28@gmail.com   none                  Share career interests`,
        },
      },
      {
        step: "2. Attribution by Template, Not Infrastructure",
        content:
          "No infrastructure links these emails. Each uses a different account, and the shared Google relays serve millions of senders. The link is the template. All three subjects pair the recipient's name with a profile headline. All three HTML bodies nest a dir=\"auto\" block inside a dir=\"ltr\" block in the same way. All three open with the same paraphrase of the recipient's public profile. Emails 2 and 3 share an unsigned 'Best regards' sign-off. Structure matching caught what IP and domain matching cannot.",
        codeBlock: {
          language: "text",
          title: "Shared fingerprints",
          code: `Indicator            Email 1              Email 2              Email 3
  ───────────────────────────────────────────────────────────────────────────
  Subject template     NAME + HEADLINE      Name | Headline      Name | Headline
  HTML nesting         ltr > div > auto     ltr > div > auto     ltr > div > auto
  Scraped summary      yes                  yes                  yes
  Sender domain        gmail.com            gmail.com            gmail.com
  Authentication       all pass             all pass             all pass
  Delivery (SGT)       08:21                10:48                09:25`,
        },
      },
      {
        step: "3. IP Sweep: Every Address Belongs to Google",
        content:
          "Each email shows one public IP and two or three 2002:: IPv6 addresses. The public IPs are Google outbound relays in AS15169. The 2002:: addresses embed private 10.x IPv4 addresses, which are Google's internal transport hosts and the recipient's own mailbox servers. Private addresses carry no geolocation. Gmail strips X-Originating-IP, so the sender's client IP never reaches the recipient. Geolocating these values returns Google's data centres, not the operator.",
        codeBlock: {
          language: "text",
          title: "Decoded addresses",
          code: `Email  Public relay                              Embedded private addresses
  ─────────────────────────────────────────────────────────────────────────────────
  1      209.85.220.41  mail-sor-f41.google.com    10.5.113.25 (mailbox), 10.5.101.28
  2      209.85.220.65  mail-sor-f65.google.com    10.5.113.24 (mailbox), 10.23.9.2
  3      209.85.220.41  mail-sor-f41.google.com    10.5.113.24 (mailbox), 10.83.194.196, 10.5.105.14
  
  X-Originating-IP: absent in all three (stripped by Gmail)`,
        },
      },
      {
        step: "4. Mail Merge, Open Tracking, and the Keyword Funnel",
        content:
          "Email 2 ends with a 0x0 image of class 'mailtrack-img' loaded from p.mailmerge.eu with a per-recipient ID. That is a mail-merge open tracker. It shows the operator merges scraped names and headlines into a template and sends in bulk through Gmail. The same email asks for a one-word reply, INTERESTED or OPEN. Single keywords sort responders from non-responders without reading. An open and a keyword reply together confirm a live, job-seeking target.",
        codeBlock: {
          language: "text",
          title: "Tracking pixel (defanged, IDs redacted)",
          code: `<img width="0" height="0" class="mailtrack-img" style="display:flex"
       src="hxxps://p[.]mailmerge[.]eu/trace/mail/[redacted].png?u=[redacted]">`,
        },
      },
      {
        step: "5. The CV Request and the Agency Check",
        content:
          "Email 1 asks for a CV before naming any client or role. A CV carries phone, address, employer history, and often date of birth. Web searches return no website, listing, or recruiter profile for 'Ashmont Search'. Singapore employment agencies require a licence under the Employment Agencies Act 1958, and MOM publishes licensed agencies and registered personnel in its EA Directory. The email quotes no licence number. The Personal Data Protection Act 2012 requires an organisation to state the purpose of collection. The email states none.",
      },
      {
        step: "6. Hypotheses Revised During Analysis",
        content:
          "Two early calls changed as evidence arrived. First: email 3, analysed alone, looked like a hand-typed targeted send because of its named To field. The tracking pixel in email 2 showed the campaign runs on mail merge, so the personalisation is automated. Second: the +0100 Date offset in email 3 looked like a soft location signal. Email 2 carries -0800 from the same campaign, so the offset reflects account settings and carries no location value. Send times converted to the recipient's timezone proved the better signal.",
      },
    ],
  
    recommendations: [
      "Do not send a CV, NRIC, passport, or bank details to any of the three senders.",
      "Do not reply, including with the keyword. A reply confirms a live, job-seeking target.",
      "Verify any agency and recruiter in the MOM EA Directory before sharing personal data.",
      "Disable automatic image loading in Gmail to block tracking pixels.",
      "Never pay a fee for a job, and never run an unsolicited 'assessment' file outside an isolated VM.",
      "Report all three accounts via Gmail 'Report phishing' and submit the campaign to ScamShield.",
      "Remove phone, address, and date of birth from any publicly downloadable CV.",
      "Do not geolocate Gmail relay IPs. Decode 2002:: addresses and mark private ranges as internal.",
    ],
  
    techniques: [
      "Fake Recruiter Pretext",
      "Fictitious Agency Persona",
      "CV and PII Harvesting",
      "OSINT Portfolio Scraping",
      "Gmail Mail Merge (Personalised Bulk Send)",
      "Open-Tracking Pixel",
      "Keyword-Reply Qualification Funnel",
      "Sender Account Rotation",
      "Retargeting with Softened Asks",
      "Scheduled Delivery to Recipient's Timezone",
      "Sender Location Concealment via Gmail Infrastructure",
    ],
  
    iocs: [
      { type: "Email",   value: "gideons134679@gmail.com (email 1)" },
      { type: "Email",   value: "qakinola29@gmail.com (email 2)" },
      { type: "Email",   value: "samuel.executive28@gmail.com (email 3)" },
      { type: "Name",    value: "Gideon S, 'Career Consultant' (unverified persona, email 1)" },
      { type: "Name",    value: "Akinola Quadri (unverified persona, email 2)" },
      { type: "Name",    value: "Samuel Executive (placeholder identity, email 3)" },
      { type: "Company", value: "Ashmont Search (no discoverable registration or web presence, email 1)" },
      { type: "Domain",  value: "p.mailmerge.eu (tracking pixel host, email 2)" },
      { type: "URL",     value: "hxxps://p[.]mailmerge[.]eu/trace/mail/[redacted].png?u=[redacted] (email 2)" },
      { type: "IP",      value: "209.85.220.41 (Google relay; shared infrastructure, not an attacker IOC)" },
      { type: "IP",      value: "209.85.220.65 (Google relay; shared infrastructure, not an attacker IOC)" },
    ],
};
