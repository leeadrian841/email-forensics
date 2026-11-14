// ── CASE 2: Business Email Compromise ──────────────────────────────────────
export default {
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
      {
        url: "/email-forensics/images/case2-email.png",
        caption: "The BEC email requesting activity/response",
        alt: "BEC email"
      },
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
          code:
            `Authentication-Results: mx.google.com;
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
          code: 
            `X-Originating-IP:  [162.243.8.41]        ← where email was composed/submitted
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
};
