// ── CASE 1: Credential Harvesting Phishing ────────────────────────────────
export default {
    id: "fake-cloud-storage-payment-phishing",
    title: "Fake Cloud Storage Payment Failure",
    subtitle: "Credential/payment harvesting via spoofed cloud storage billing alert",
    date: "2026-02-21",
    severity: "Critical",
    category: "Phishing",
    tags: ["Credential Harvesting", "Brand Impersonation", "Payment Fraud", "GCS Abuse"],
    summary:
      "An email impersonating a generic 'Cloud Storage' service warned the recipient that their payment method had failed and their subscription was about to expire. A CTA button directed them to a page hosted on Google Cloud Storage (storage.googleapis.com/whilewait/), abusing a legitimate GCS bucket to bypass URL reputation filters. The sending domain, envelope sender, and claimed relay hostname were all unrelated to each other and to any real cloud provider. DKIM and DMARC were entirely absent, and the email was routed through a bulk marketing ESP (Sailthru). The body was additionally padded with hundreds of random alphanumeric strings and scraped news text to evade Bayesian spam filters.",
    verdict: "Confirmed Phishing",
    tldr: "Fake cloud storage billing alert with a GCS-hosted phishing page, multi-domain spoofing, no DKIM/DMARC, and spam filter evasion padding.",

    screenshots: [
      {
        url: "/email-forensics/images/case1-email.png",
        caption: "The phishing email as it appeared in the inbox",
        alt: "Phishing email screenshot"
      },
      {
        url: "/email-forensics/images/case1-phishing-page.png",
        caption: "The GCS-hosted phishing landing page",
        alt: "Phishing landing page"
      },
    ],

    emailHeaders: [
      // ── Delivery & Routing ──────────────────────────────────────────────────
      { key: "Delivered-To", value: "me@gmail.com", flagged: true }, // duplicate/conflicting recipient — template substitution failure
      { key: "Return-Path", value: "<qequmwqucakzc@uuenenodiel.melbrotech.co.za>", flagged: true }, // gibberish address on unrelated .co.za domain
      { key: "Received", value: "ecobee.com (dhjh.dhgate.com. [89.252.161.234]) by mx.google.com with ESMTPS id 4fb4d7f45d1cf-65eabb5d536si2391912a12; Sat, 21 Feb 2026 15:04:48 -0800 (PST)", flagged: true }, // claimed hostname ecobee.com is falsified — actual PTR resolves to dhgate.com
      { key: "Received", value: "nj1-madbrick.flt (172.18.20.7) by njmta-53.sailthru.com id h1t7vc1qqbsf for <My Personal Email>; 02-21-2026 (envelope-from <delivery@mx.sailthru.com>)", flagged: true }, // bulk marketing ESP (Sailthru) — never used by legitimate cloud billing
      { key: "Received", value: "efianalytics.com (216.244.76.116)", flagged: true }, // third-party analytics tracking hop
      { key: "X-Received", value: "by 2002:a17:907:7211:b0:b88:241e:693c with SMTP id a640c23a62f3a-b9081aedf8amr262581966b; Sat, 21 Feb 2026 15:04:48 -0800 (PST)", flagged: false },
      { key: "X-Originating-IP", value: "89.252.161.234", flagged: true }, // resolves to dhgate.com, not the claimed ecobee.com
      { key: "X-Destination-ID", value: "1938-516037", flagged: false },
  
      // ── Sender Identity ─────────────────────────────────────────────────────
      { key: "From", value: "Payment-Declined <nooreply@rytfotrwegt.us>", flagged: true  }, // display name and domain unrelated to any cloud service
      { key: "Sender", value: "kmdujraaiwisprgafeiarffzeeftwo", flagged: true  }, // not a valid email address — gibberish string, violates RFC 5322
  
      // ── Content ─────────────────────────────────────────────────────────────
      { key: "Subject", value: "leeadrian841, Your Cloud Account has been locked on 02-21-2026. Your photos and videos will be removed!", flagged: true }, // urgency/fear tactic with harvested username as personalisation
  
      // ── Authentication ───────────────────────────────────────────────────────
      { key: "Authentication-Results", value: "mx.google.com; spf=pass smtp.mailfrom=qequmwqucakzc@uuenenodiel.melbrotech.co.za; dkim=none; dmarc=none", flagged: true }, // SPF passes only on attacker-owned domain; DKIM and DMARC entirely absent
      { key: "Received-SPF", value: "pass (google.com: domain of qequmwqucakzc@uuenenodiel.melbrotech.co.za designates 89.252.161.234 as permitted sender) client-ip=89.252.161.234", flagged: false }, // technically passes but misleading — attacker controls this domain
      { key: "ARC-Seal", value: "i=1; a=rsa-sha256; t=1771715088; cv=none; d=google.com; s=arc-20240605", flagged: false },
      { key: "ARC-Authentication-Results", value: "i=1; mx.google.com; spf=pass smtp.mailfrom=qequmwqucakzc@uuenenodiel.melbrotech.co.za", flagged: false },
  
      // ── Suspicious / Fabricated Headers ─────────────────────────────────────
      { key: "X-Google-Sender-Delegation", value: "trusted email", flagged: true }, // fabricated — real Google delegation headers contain a domain name, not a freeform phrase
      { key: "List-Unsubscribe", value: "<http://ecobee.com/LEAVE=To>", flagged: true }, // abuses ecobee.com brand to appear legitimate
  
      // ── Message Structure ────────────────────────────────────────────────────
      { key: "Message-ID", value: "<90556134.02581880.ko4z9.bad1smtpin_added_broken@mx.google.com>", flagged: true }, // "bad1smtpin_added_broken" — Google flagged structural violation on ingress
      { key: "MIME-Version", value: "1.0", flagged: false },
      { key: "Content-Type", value: "multipart/digest; boundary=\"----=_Part_qxRazlRjQOiS_1129434735014.frqkvRcwiCF\"", flagged: false },
      { key: "Content-Transfer-Encoding", value: "amazonses", flagged: true }, // not a valid MIME encoding — must be base64, quoted-printable, 7bit, 8bit, or binary
    ],

    redFlags: [
      // Critical
      { flag: "Sender domain unrelated to claimed service", severity: "Critical" },
      { flag: "Envelope sender is a different unrelated domain", severity: "Critical" },
      { flag: "Received hostname is falsified (ecobee.com spoof)", severity: "Critical" },
      { flag: "DKIM and DMARC completely absent", severity: "Critical" },
      { flag: "Fabricated X-Google-Sender-Delegation header", severity: "Critical" },
      { flag: "Body padded with fake credentials and junk text", severity: "Critical" },
  
      // High
      { flag: "Fear/urgency subject with harvested username", severity: "High" },
      { flag: "Routed through bulk marketing ESP (Sailthru)", severity: "High" },
      { flag: "List-Unsubscribe abuses ecobee.com domain", severity: "High" },
      { flag: "Invalid Sender header (not an email address)", severity: "High" },
      { flag: "Phishing page hosted on legitimate GCS bucket", severity: "High" },
  
      // Medium
      { flag: "Duplicate conflicting Delivered-To headers", severity: "Medium" },
      { flag: "Extra analytics hop in routing chain", severity: "Medium" },
      { flag: "SPF pass on attacker-owned domain (misleading)", severity: "Medium" },
  
      // Low
      { flag: "Invalid Content-Transfer-Encoding value", severity: "Low" },
      { flag: "Message-ID flagged broken by Google on ingress", severity: "Low" },
    ],

  analysis: [
    {
      step: "1. Email Header Inspection",
      content:
        "The visible From address (nooreply@rytfotrwegt.us) and the envelope Return-Path (qequmwqucakzc@uuenenodiel.melbrotech.co.za) are completely unrelated domains — neither has any connection to a real cloud storage provider. SPF passes only because the attacker controls melbrotech.co.za and configured it correctly; this provides no legitimacy signal. DKIM is entirely absent, meaning the message body cannot be verified as untampered. Without DKIM there can be no DMARC alignment, so the visible From address is wholly unverified. The Sender field contains a plain gibberish string rather than a valid RFC 5322 mailbox address.",
      codeBlock: {
        language: "text",
        title: "Authentication-Results Header",
        code:
          `Authentication-Results: mx.google.com;
spf=pass (google.com: domain of qequmwqucakzc@uuenenodiel.melbrotech.co.za designates 89.252.161.234 as permitted sender) smtp.mailfrom=qequmwqucakzc@uuenenodiel.melbrotech.co.za;
dkim=none;
dmarc=none`,
      },
    },
    {
      step: "2. Routing & Infrastructure Analysis",
      content:
        "The email passed through three suspicious hops before reaching my email account. The outermost Received header claims the sending host is ecobee.com (a smart-thermostat brand), but the IP 89.252.161.234 resolves to dhjh.dhgate.com — a completely different company. This hostname was attacker-injected and is meaningless as an authentication signal. The second hop reveals the true infrastructure: Sailthru (njmta-53.sailthru.com), a legitimate bulk marketing ESP, was used to send the email — a platform that has no business relationship with cloud storage billing. A third hop through efianalytics.com adds click/open tracking.",
      codeBlock: {
        language: "text",
        title: "Received Chain (oldest to newest)",
        code:
          `1.  from efianalytics.com (216.244.76.116)          ← analytics tracking
2.  from nj1-madbrick.flt (172.18.20.7)
    by njmta-53.sailthru.com                        ← bulk ESP (Sailthru)
    envelope-from <delivery@mx.sailthru.com>
3.  from ecobee.com (dhjh.dhgate.com [89.252.161.234])
    by mx.google.com                                ← falsified hostname`,
      },
    },
    {
      step: "3. Phishing URL & Landing Page Analysis",
      content:
        "All CTA links in the email body (Update Account Details, Contact Support, Account Settings) resolve to the same GCS bucket: storage.googleapis.com/whilewait/comessuccess.html. The attacker abused a free Google Cloud Storage bucket to host the phishing page, deliberately choosing a legitimate Google domain to bypass URL reputation filters and corporate web proxies. Each link includes unique tracking parameters (lm=, page=) to identify which recipient clicked. The anchor of the URL (#index.php?...) disguises the actual path as a PHP query string to appear more like a real web application.",
      codeBlock: {
        language: "text",
        title: "Phishing URLs extracted from email body",
        code:
          `CTA Button:
https://storage.googleapis.com/whilewait/comessuccess.html#index.php?search=4&d145906&ryzio=802-1938&lm=516037NPUR46646&sd=1&page=17NSznnUsGpVVhl

Contact Support:
https://storage.googleapis.com/whilewait/comessuccess.html#index.php?search=4&d145906&gmofc=802-1938&lm=516037KHNX46646&sd=1&page=2LmyDH843MtJnjO

Account Settings:
https://storage.googleapis.com/whilewait/comessuccess.html#index.php?search=4&d145906&ajpdp=802-1938&lm=516037LYGD46646&sd=1&page=WsS2EUvgMK7q6nF

GCS Bucket: whilewait (storage.googleapis.com)`,
      },
    },
    {
      step: "4. Body Content & Spam Evasion Analysis",
      content:
        "The HTML body presents a plausible-looking payment failure notice with a fake Subscription ID (9018660) and product name (Cloud Storage Premium). Below the visible HTML, the plain-text MIME part is stuffed with hundreds of random alphanumeric tokens, fake login credential pairs, and scraped Guardian newspaper articles. This is a deliberate Bayesian poisoning technique: injecting large volumes of innocuous-looking text shifts the statistical word distribution of the message away from known spam signatures, increasing the probability of bypassing content-based spam filters.",
      codeBlock: {
        language: "text",
        title: "Spam evasion content found in plain-text MIME part (excerpt)",
        code: `Login Name: WNOQGLMJUOPTBJZMHAYCRU
Password:   MTCZPWEJLPDDEQTVFFOTYX

Login Name: RXU
Password:   FLSXNJUAKGWEXSGKEPIQUE

7FIXTF2V17WIXI43IL SMV3JNO38TW01LK OOWDADW8AP37I ...
[hundreds of additional random tokens]

[Scraped Guardian article text about EU foreign aid budgets]
[Scraped text about Parsec gaming software]`,
      },
    },
  ],

    recommendations: [
      "Never click 'Update Payment' or 'Verify Account' links in unsolicited emails — navigate to the service directly via a bookmarked URL.",
      "Treat any email as spam/phishing where SPF passes but DKIM and DMARC are absent as unverified, regardless of the visible From address.",
      "Be suspicious of Google Cloud Storage URLs (storage.googleapis.com) used as landing pages — attackers abuse free GCS buckets specifically because the domain has a high reputation score.",
      "Report the GCS bucket to Google at https://support.google.com/code/contact/cloud_platform_report.",
      "Enable multi-factor authentication on all cloud accounts so stolen credentials alone cannot grant access.",
      "Check your email provider's spam filter settings and ensure DMARC rejection policies are enforced for your own domain.",
    ],

    techniques: [
      "Brand Impersonation",
      "Multi-Domain Spoofing",
      "GCS Bucket Abuse",
      "Bayesian Poisoning",
      "Urgency/Fear Manipulation",
      "Bulk ESP Abuse (Sailthru)",
    ],

    iocs: [
      { type: "Domain", value: "rytfotrwegt.us" },
      { type: "Domain", value: "uuenenodiel.melbrotech.co.za" },
      { type: "Domain", value: "dhjh.dhgate.com" },
      { type: "Email", value: "nooreply@rytfotrwegt.us" },
      { type: "Email", value: "qequmwqucakzc@uuenenodiel.melbrotech.co.za" },
      { type: "IP", value: "89.252.161.234" },
      { type: "URL", value: "https://storage.googleapis.com/whilewait/comessuccess.html" },
      { type: "GCS Bucket", value: "whilewait (storage.googleapis.com)" },
      { type: "ESP", value: "njmta-53.sailthru.com" },
    ],
};
