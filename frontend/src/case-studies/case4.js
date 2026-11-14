// ── CASE 4: Cloud Payment Scam ───────────────────────────────────────────
export default {
    id: "failure-notice-gcs-cloud-payment-phishing",
    title: "Fake 'Failure Notice' Cloud Payment Phishing",
    subtitle: "GCS bucket phishing with multi-layer identity fabrication and advanced HTML evasion",
    date: "2026-02-27",
    severity: "Critical",
    category: "Phishing",
    tags: ["Credential Harvesting", "GCS Bucket Abuse", "Identity Fabrication", "Bayesian Poisoning", "Invalid HTML Evasion"],
    summary:
      "An email with the subject 'Failure Notice' — designed to mimic a mail delivery bounce — actually contains a cloud payment phishing page hosted on a second Google Cloud Storage bucket (storage.googleapis.com/noonchi/). The sending infrastructure is a Ukrainian cooking blog subdomain (sb100014.cozycook.biz.ua) whose IP resolves to dashboard.freedommobile.ca, a Canadian mobile carrier — entirely unrelated to the claimed sender. The attacker fabricated the recipient's own Gmail address as the original sender using two forged headers (X-Original-Sender and X-Google-Sender-Delegation), and built the From address around the recipient's username to heighten the illusion of a self-originated message. DKIM passes but only for a nonsensical deeply-nested subdomain. DMARC is absent. The email body deploys four simultaneous spam filter evasion techniques: invalid custom HTML tag names, structured junk token blocks, a scraped government voter registration table, and a completely fabricated Content-Transfer-Encoding value. The same efianalytics.com tracking hop present in Case 1 reappears here, suggesting shared infrastructure.",
    verdict: "Confirmed Phishing — Same Infrastructure Cluster as Case 1",
    tldr: "Fake bounce notice hiding a GCS-hosted cloud payment phishing page. Recipient's own Gmail used as fabricated sender. Four simultaneous spam evasion techniques. Shares efianalytics.com hop with Case 1.",

    screenshots: [
      {
        url: "/email-forensics/images/case4-failure-notice-email.png",
        caption: "The email rendered as a cloud payment notice despite the 'Failure Notice' subject",
        alt: "Phishing email screenshot"
      },
      {
        url: "/email-forensics/images/case4-failure-notice-cloudflare-page.png",
        caption: "The Cloudflare/GCS-hosted landing page at storage.googleapis.com/noonchi/",
        alt: "Cloudflare/GCS phishing page"
      },
    ],

    emailHeaders: [
      // ── Delivery & Routing ──────────────────────────────────────────────────
      { key: "Delivered-To", value: "me@gmail.com", flagged: true }, // duplicate conflicting Delivered-To — same template error pattern as Case 1
      { key: "Return-Path", value: "<leeadrian841@sb100014.cozycook.biz.ua>", flagged: true }, // recipient's username grafted onto attacker's Ukrainian subdomain
      { key: "Received", value: "from sb100014.cozycook.biz.ua (dashboard.freedommobile.ca. [89.252.175.150]) by mx.google.com with ESMTPS id a640c23a62f3a-b935a9c96c6si297972366b; Thu, 26 Feb 2026 23:49:42 -0800 (PST)", flagged: true }, // claimed host is a Ukrainian cooking blog; PTR resolves to a Canadian mobile carrier
      { key: "Received", value: "from efianalytics.com (efianalytics.com. 216.244.76.116)", flagged: true }, // same third-party analytics tracking hop as Case 1 — shared infrastructure
      { key: "X-Received", value: "by 2002:a17:907:2d91:b0:b93:7d70:20a0 with SMTP id a640c23a62f3a-b937d7025e8mr42402366b; Thu, 26 Feb 2026 23:49:42 -0800 (PST)", flagged: false },
      { key: "X-Originating-IP", value: "217.18.210.147", flagged: true }, // differs from SMTP relay IP (89.252.175.150) — email composed on a separate host
  
      // ── Sender Identity ─────────────────────────────────────────────────────
      { key: "From", value: "leeadrian841 <leeadrian841-4393@Xd3nc.sb100014.cozycook.biz.ua>", flagged: true }, // recipient's username in both display name and localpart — engineered to appear self-originated
      { key: "Sender", value: "leeadrian841@Xd3nc.WVksarv.sb100014.cozycook.biz.ua", flagged: true }, // deeply nested nonsense subdomain; Sender ≠ From subdomain (Xd3nc.sb vs Xd3nc.WVksarv.sb)
      { key: "To", value: "me@aol.com", flagged: true  }, // To address is an AOL account unrelated to the Gmail recipient — bulk send template mismatch
      { key: "X-Original-Sender", value: "<leeadrian841@gmail.com>", flagged: true }, // fabricated — implies Gmail account is the true origin; it is not
      { key: "X-Google-Sender-Delegation", value: "leeadrian841@gmail.com Trusted Sender", flagged: true }, // fabricated Google header; same trick as Case 1 but now includes recipient's Gmail address to reinforce impersonation
  
      // ── Content ─────────────────────────────────────────────────────────────
      { key: "Subject", value: "Failure Notice", flagged: true }, // deliberate mismatch — body is a cloud payment notice; "Failure Notice" mimics a mail bounce to slip past subject-based filters
      { key: "Date", value: "Fri, 27 Feb 2026 08:44:22 +0100", flagged: true }, // ~9 hours ahead of the Gmail receipt timestamp (23:49 PST = 07:49 UTC+1) — clock skew consistent with pre-scheduled or queued bulk send
      { key: "Precedence", value: "bulk", flagged: true }, // self-identified as bulk mail
  
      // ── Authentication ───────────────────────────────────────────────────────
      { key: "Authentication-Results", value: "mx.google.com; dkim=pass header.i=@Xd3nc.WVksarv.sb100014.cozycook.biz.ua header.s=mail; spf=pass smtp.mailfrom=leeadrian841@sb100014.cozycook.biz.ua",                      flagged: true  }, // DKIM passes only for a junk nested subdomain — not rcn.com, not hotmail.com, not any real service; DMARC entirely absent
      { key: "Received-SPF", value: "pass (google.com: domain of leeadrian841@sb100014.cozycook.biz.ua designates 89.252.175.150 as permitted sender) client-ip=89.252.175.150",                                  flagged: false }, // technically passes — attacker controls cozycook.biz.ua
      { key: "DKIM-Signature", value: "v=1; a=rsa-sha1; d=Xd3nc.WVksarv.sb100014.cozycook.biz.ua; s=mail; h=Sender:From:To:Message-ID:List-Unsubscribe:Date:Content-Type:MIME-Version:Subject",                    flagged: true  }, // rsa-sha1 is cryptographically deprecated; signing domain is a nonsense subdomain with no relation to any real sender
      { key: "DomainKey-Signature", value: "a=rsa-sha1; c=nofws; d=Xd3nc.WVksarv.sb100014.cozycook.biz.ua",                                                                                                             flagged: true  }, // DomainKeys is a legacy predecessor to DKIM, deprecated since 2007 — no modern mail infrastructure uses it; presence here suggests very old or repurposed spam tooling
  
      // ── Suspicious / Fabricated Headers ─────────────────────────────────────
      { key: "X-Google-Original-Message-ID", value: "<-@vevida.net>", flagged: true }, // malformed Message-ID (starts with '-'); vevida.net is a Dutch hosting provider unrelated to this email; header appears fabricated
      { key: "List-Unsubscribe", value: "<http://WVksarv.nuo/LEAVE=To>", flagged: true }, // .nuo is not a valid TLD — this domain does not exist; unsubscribe link is a dead placeholder
      { key: "X-Forwarded-Encrypted", value: "i=2; AJvYcCW/asQOZq05WHuxqRhhIO2O+nkfvs4i8gtarMBkAh3+OrWOVZtv6jg82ccVVwqBnDs/CKC1RcklTTrp9tc=@gmail.com", flagged: false },
  
      // ── Message Structure ────────────────────────────────────────────────────
      { key: "Message-ID", value: "<17972-leeadrian841@WVksarv.nuo>", flagged: true }, // domain uses same non-existent .nuo TLD as the List-Unsubscribe
      { key: "Content-Length", value: "353", flagged: true }, // first Content-Length declaration
      { key: "Content-Length", value: "1245", flagged: true }, // duplicate conflicting Content-Length — two different values in same message; violates RFC 2822
      { key: "MIME-Version", value: "1.0", flagged: false },
      { key: "Content-Type", value: "multipart/digest; boundary=\"----=_Part_987654321\"", flagged: false },
      { key: "Content-Transfer-Encoding", value: "AAreoGVrkJ", flagged: true }, // completely fabricated encoding value — not base64, quoted-printable, 7bit, 8bit, or binary; identical evasion pattern to Case 1's "amazonses"
    ],

    redFlags: [
      // Critical
      { flag: "Phishing payload hosted on second GCS bucket (storage.googleapis.com/noonchi/)", severity: "Critical" },
      { flag: "Subject 'Failure Notice' deliberately mismatches cloud payment body content", severity: "Critical" },
      { flag: "Recipient's own Gmail address fabricated as sender via X-Original-Sender", severity: "Critical" },
      { flag: "X-Google-Sender-Delegation forged with recipient's Gmail address", severity: "Critical" },
      { flag: "DMARC entirely absent; DKIM only passes for a nonsense junk subdomain", severity: "Critical" },
      { flag: "HTML body uses hundreds of invalid custom tag names as spam filter evasion", severity: "Critical" },
  
      // High
      { flag: "Sending IP resolves to dashboard.freedommobile.ca — unrelated Canadian carrier", severity: "High" },
      { flag: "Sending domain is a Ukrainian cooking blog subdomain (cozycook.biz.ua)", severity: "High" },
      { flag: "Same efianalytics.com tracking hop as Case 1 — shared attacker infrastructure", severity: "High" },
      { flag: "Body contains structured junk token blocks as Bayesian poisoning", severity: "High" },
      { flag: "Scraped government voter registration table injected into body", severity: "High" },
      { flag: "To address (me@aol.com) does not match actual recipient — bulk send error", severity: "High" },
  
      // Medium
      { flag: "Duplicate conflicting Content-Length headers (353 vs 1245)", severity: "Medium" },
      { flag: "Duplicate conflicting Delivered-To headers — same as Case 1 template error", severity: "Medium" },
      { flag: "Date header is ~9 hours ahead of actual receipt time", severity: "Medium" },
      { flag: "DomainKey-Signature present — deprecated since 2007, signals old spam tooling", severity: "Medium" },
      { flag: "X-Originating-IP differs from SMTP relay — composed on separate host", severity: "Medium" },
      { flag: "Precedence: bulk — self-identifies as mass mail", severity: "Medium" },
  
      // Low
      { flag: "List-Unsubscribe uses a non-existent .nuo TLD", severity: "Low" },
      { flag: "Message-ID uses same non-existent .nuo TLD", severity: "Low" },
      { flag: "Content-Transfer-Encoding is a fabricated non-MIME value (AAreoGVrkJ)", severity: "Low" },
      { flag: "X-Google-Original-Message-ID is malformed and references unrelated vevida.net", severity: "Low" },
    ],

    analysis: [
      {
        step: "1. Subject/Body Mismatch as a Filter Bypass",
        content:
          "The subject line reads 'Failure Notice', mimicking a standard mail delivery failure (bounce) notification — a category of email that users are conditioned to open and act on quickly. However, the actual HTML body is titled 'Cloud Payment Notice' and presents a cloud storage subscription billing alert with a prominent CTA button. This deliberate mismatch is a subject-line evasion tactic: subject-based spam classifiers scanning for 'payment', 'account locked', or 'subscription' keywords will score this message lower because the subject contains none of those terms.",
      },
      {
        step: "2. Identity Fabrication — Recipient's Own Gmail as the Sender",
        content:
          "This email goes further than Case 1 in impersonating the recipient. The From display name and localpart both incorporate the recipient's username (leeadrian841). More importantly, two fabricated headers explicitly name the recipient's real Gmail account as the origin: X-Original-Sender and X-Google-Sender-Delegation. Neither header is authentic — X-Original-Sender is not a Google infrastructure header, and X-Google-Sender-Delegation with a freeform value is a forgery (as established in Case 1). The goal is to make any recipient who inspects headers believe their Gmail account was the actual sender, creating panic about a compromise that does not exist.",
        codeBlock: {
          language: "text",
          title: "Fabricated sender identity headers",
          code:
            `From:              leeadrian841 <leeadrian841-4393@Xd3nc.sb100014.cozycook.biz.ua>
Sender:            leeadrian841@Xd3nc.WVksarv.sb100014.cozycook.biz.ua
Return-Path:       <leeadrian841@sb100014.cozycook.biz.ua>
X-Original-Sender: <leeadrian841@gmail.com>           ← fabricated
X-Google-Sender-Delegation: leeadrian841@gmail.com Trusted Sender  ← fabricated
  
Actual sending infrastructure:
SMTP relay:   sb100014.cozycook.biz.ua
IP:           89.252.175.150  →  dashboard.freedommobile.ca (Canadian mobile carrier)
Origin IP:    217.18.210.147  (separate composition host)`,
        },
      },
      {
        step: "3. DKIM Pass on a Nonsense Subdomain",
        content:
          "Authentication-Results shows dkim=pass, which might appear reassuring at a glance. However the signing domain is Xd3nc.WVksarv.sb100014.cozycook.biz.ua — a four-level deep subdomain under a Ukrainian cooking blog. DKIM passing on this domain proves nothing about the legitimacy of the message; it only proves the attacker controls the DNS for their own subdomain and configured it correctly. Critically, DMARC is entirely absent, which means there is no alignment check tying the DKIM-signing domain to the visible From address. The two domains (Xd3nc.WVksarv.sb100014.cozycook.biz.ua for DKIM vs Xd3nc.sb100014.cozycook.biz.ua for From) are not even the same subdomain — the Sender field adds an extra WVksarv label that the From field omits.",
        codeBlock: {
          language: "text",
          title: "DKIM subdomain mismatch and absence of DMARC",
          code:
            `DKIM-Signature: d=Xd3nc.WVksarv.sb100014.cozycook.biz.ua   ← signing domain
From:              leeadrian841-4393@Xd3nc.sb100014.cozycook.biz.ua  ← different subdomain
DMARC:             (absent — no alignment check performed)
  
Result: DKIM pass is technically valid but entirely meaningless for trust.`,
        },
      },
      {
        step: "4. GCS Bucket Abuse — Second Instance",
        content:
          "The phishing CTA links to storage.googleapis.com/noonchi/noon.html, a different GCS bucket from Case 1 (which used the 'whilewait' bucket). The same technique is in use: a free Google Cloud Storage bucket is used to host the phishing page so that the URL's domain (storage.googleapis.com) carries Google's high reputation score and bypasses URL filtering. Tracking parameters embedded in the URL fragment (act=cl, pid=, uid=, vid=, ofid=, lid=, cid=) are used to identify individual recipients who clicked. Report the 'noonchi' bucket to Google alongside the 'whilewait' bucket from Case 1.",
        codeBlock: {
          language: "text",
          title: "GCS phishing URL",
          code:
            `https://storage.googleapis.com/noonchi/noon.html#?act=cl&pid=3471_md&uid=2&vid=25295&ofid=198&lid=160&cid=533743

GCS Bucket: noonchi  (storage.googleapis.com)
Tracking params: act, pid, uid, vid, ofid, lid, cid`,
        },
      },
      {
        step: "5. Four Simultaneous Spam Evasion Techniques",
        content:
          "This is the most heavily-evasion-layered email in the set. Four distinct techniques are deployed simultaneously in the body. First, the entire HTML structure uses randomly generated tag names (<kxxpurb4dw>, <gijx40pdyq>, <yjwigh1m6m>, etc.) instead of valid HTML elements — these are not rendered by browsers but are parsed by email security scanners, diluting the ratio of meaningful content to junk tokens. Second, hundreds of structured alphanumeric token blocks ([14_14_Aa] delimited) are injected to poison statistical classifiers. Third, a scraped government voter registration form table ('Voter Information') with empty cells is injected to add legitimate-looking structural content. Fourth, the Content-Transfer-Encoding is set to the fabricated value 'AAreoGVrkJ' (identical in pattern to Case 1's 'amazonses'), which may cause some parsers to skip content analysis on the affected MIME part.",
        codeBlock: {
          language: "text",
          title: "Evasion techniques in the HTML body",
          code: `1. Invalid custom HTML tag names (not rendered, confuse parsers):
   <kxxpurb4dw>...</e3e6cglzk4>  <gijx40pdyq>...</g1gt46hh1k>
   <gspqr87frp class="TitleMessageTableStyle">...

2. Structured junk token blocks (Bayesian poisoning):
   <kxxpurb4dw>..._____[14_14_Aa]__..._-_..._[14_14_Aa]_...
   [hundreds of blocks with identical delimiter pattern]

3. Scraped voter registration table (legitimacy padding):
   <gspqr87frp class="TitleMessageTableStyle">Voter Information</...>
   [empty table rows with GenLabelBold CSS class from a government web app]

4. Fabricated Content-Transfer-Encoding:
   Content-Transfer-Encoding: AAreoGVrkJ  (not a valid MIME encoding)`,
        },
      },
      {
        step: "6. Infrastructure Overlap with Case 1",
        content:
          "The presence of the efianalytics.com hop (216.244.76.116) in both this email and Case 1, combined with the identical Content-Transfer-Encoding forgery pattern, the duplicate Delivered-To template error, and the GCS bucket abuse technique, strongly suggests both emails originate from the same threat actor or campaign infrastructure. The IP 89.252.175.150 used here also shares the same /16 subnet (89.252.x.x) as Case 1's IP (89.252.161.234), further supporting shared hosting or the same bulletproof hosting provider.",
        codeBlock: {
          language: "text",
          title: "Infrastructure overlap with Case 1",
          code: `Shared indicator               Case 1                    This email
─────────────────────────────────────────────────────────────────
efianalytics.com hop           216.244.76.116             216.244.76.116  ✓
SMTP IP /16 subnet             89.252.161.234             89.252.175.150  ✓ (same /16)
Content-Transfer-Encoding      amazonses (fake)           AAreoGVrkJ (fake) ✓
Duplicate Delivered-To         me@gmail.com               me@gmail.com    ✓
GCS bucket abuse               whilewait                  noonchi         ✓ (same technique)`,
        },
      },
    ],

    recommendations: [
      "Report both GCS buckets ('noonchi' and 'whilewait') to Google at https://support.google.com/code/contact/cloud_platform_report.",
      "Report the sending IP (89.252.175.150) and the shared efianalytics.com IP (216.244.76.116) to AbuseIPDB — the infrastructure overlap with Case 1 may help attribute a broader campaign.",
      "Do not be reassured by DKIM=pass — always check what domain is actually being signed (header.i) and whether it matches the visible From domain.",
      "Treat any 'Failure Notice' or 'Mail Delivery Failed' email containing a CTA button with extreme scepticism — legitimate bounce messages never contain payment prompts.",
      "Consider blocking the entire 89.252.0.0/16 subnet at your mail gateway if these emails are recurring.",
      "Note that the 'noonchi' GCS bucket URL and tracking parameters (cid=533743, vid=25295) can be shared with Google's Trust & Safety team as additional campaign fingerprints.",
    ],

    techniques: [
      "Subject/Body Content Mismatch (Filter Evasion)",
      "Recipient Identity Fabrication",
      "GCS Bucket Abuse (Second Instance)",
      "Invalid HTML Tag Name Injection",
      "Structured Token Block Injection (Bayesian Poisoning)",
      "Scraped Legitimate Content Injection",
      "Fabricated MIME Encoding Value",
      "DomainKey Legacy Signature (Old Spam Tooling)",
      "DKIM Pass on Nonsense Subdomain",
    ],

    iocs: [
      { type: "Domain", value: "sb100014.cozycook.biz.ua" },
      { type: "Domain", value: "Xd3nc.WVksarv.sb100014.cozycook.biz.ua" },
      { type: "Domain", value: "dashboard.freedommobile.ca" },
      { type: "Domain", value: "efianalytics.com" },
      { type: "IP", value: "89.252.175.150" },
      { type: "IP", value: "217.18.210.147" },
      { type: "IP", value: "216.244.76.116 (efianalytics.com — shared with Case 1)" },
      { type: "URL", value: "https://storage.googleapis.com/noonchi/noon.html" },
      { type: "GCS Bucket", value: "noonchi (storage.googleapis.com)" },
      { type: "Email", value: "leeadrian841@sb100014.cozycook.biz.ua" },
    ],
};
