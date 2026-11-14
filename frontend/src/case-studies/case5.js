// ── CASE 5: Investment Fraud ────────────────────────────────────
export default {
    id: "sblc-advance-fee-investment-fraud",
    title: "SBLC Turnkey Funding — Advance Fee Fraud",
    subtitle: "Investment fraud impersonating a trade finance firm via GetResponse ESP, targeting businesses with fabricated SBLC funding promises",
    date: "2026-04-17",
    severity: "High",
    category: "Fraud",
    tags: ["Advance Fee Fraud", "Investment Scam", "SBLC Fraud", "Unsolicited Bulk Email", "Brand Impersonation"],
    summary:
      "An unsolicited bulk email sent via the legitimate GetResponse email marketing platform on behalf of tradefinancedirect.com (operated by Grayku LLC) promotes a fabricated 'SBLC Turnkey Non-Recourse Funding' programme. The email promises returns of $3.5M–$28M USD within 20–30 days in exchange for an upfront participation fee of $50K–$400K USD per spot — a textbook advance fee fraud structure. Unlike the phishing cluster in Cases 1, 4, and 5, all authentication checks pass legitimately because the attacker registered a real domain, configured proper DKIM for it, and used a paid ESP. The BNP Paribas bank logo is displayed without any affiliation to add false institutional credibility. The recipient was silently added to the attacker's mailing list without consent on 19 June 2025, as evidenced by the Require-Recipient-Valid-Since header. The registered address (16192 Coastal Highway, Lewes, DE 19958) is a Delaware registered-agent address used by thousands of shell companies, not a real operational office.",
    verdict: "Confirmed Financial Fraud — SBLC Advance Fee Scam",
    tldr: "Fake trade finance firm promising millions in 20-30 days for a $50K–$400K upfront fee. All auth passes — sent via GetResponse with a real domain. Classic advance fee fraud. Do not pay any fee.",

    screenshots: [
      {
        url: "/email-forensics/images/sblc-email.png",
        caption: "The SBLC funding email as rendered",
        alt: "SBLC fraud email screenshot"
      },
      {
        url: "/email-forensics/images/sblc-phishing-link.png",
        caption: "Do the link looks suspicious to you? It seems that it will add you to a targeted email list.",
        alt: "SBLC fraud CTA button"
      },
      {
        url: "/email-forensics/images/sblc-phishing-page.png",
        caption: "grayku.com Landing Page",
        alt: "SBLC fraud landing page"
      },
    ],

    emailHeaders: [
      // ── Delivery & Routing ──────────────────────────────────────────────────
      { key: "Return-Path", value: "<bounce-197450001@bounce.gr-mail5.com>", flagged: false }, // legitimate GetResponse bounce address — consistent with paid ESP use
      { key: "Received", value: "from mta-10.theta.gr-mail5.com ([104.160.68.233]) by mx.google.com with ESMTPS id 6a1803df08f44-8b02af0e1f8si16485536d6; Fri, 17 Apr 2026 06:57:56 -0700 (PDT)", flagged: false }, // legitimate GetResponse MTA
  
      // ── Sender Identity ─────────────────────────────────────────────────────
      { key: "From", value: "\"Trade Finance Team\" <info@tradefinancedirect.com>", flagged: true  }, // domain is a purpose-registered fraudulent finance site, not a regulated institution
      { key: "Reply-To", value: "info@tradefinancedirect.com", flagged: false },
  
      // ── Content ─────────────────────────────────────────────────────────────
      { key: "Subject", value: "Important Confirmation Needed - Funding Request", flagged: true  }, // false urgency — "confirmation needed" implies a prior request the recipient never made
      { key: "Date", value: "Fri, 17 Apr 2026 13:07:25 +0000", flagged: false },
      { key: "Precedence", value: "bulk", flagged: true  }, // self-identified as bulk mail — recipient never opted in
  
      // ── Authentication ───────────────────────────────────────────────────────
      { key: "Authentication-Results", value: "mx.google.com; dkim=pass header.i=@gr-mail5.com; dkim=pass header.i=@tradefinancedirect.com; spf=pass smtp.mailfrom=bounce-197450001@bounce.gr-mail5.com; dmarc=pass (p=NONE sp=NONE dis=NONE) header.from=tradefinancedirect.com", flagged: false }, // all pass — attacker paid for a real domain and real ESP; authentication is not a detection signal here
      { key: "Received-SPF",   value: "pass (google.com: domain of bounce-197450001@bounce.gr-mail5.com designates 104.160.68.233 as permitted sender) client-ip=104.160.68.233",                              flagged: false },
      { key: "DKIM-Signature", value: "a=rsa-sha256; d=gr-mail5.com; s=k1024e; h=Sender:From:To:Subject:Message-ID:List-Unsubscribe",                                                                         flagged: false }, // legitimate GetResponse platform signature
      { key: "DKIM-Signature", value: "a=rsa-sha256; d=tradefinancedirect.com; s=ac01a113; h=Sender:From:To:Subject:Message-ID:List-Unsubscribe",                                                             flagged: false }, // legitimate sender domain signature — domain was properly configured
  
      // ── ESP & Campaign Metadata ──────────────────────────────────────────────
      { key: "Feedback-ID", value: "c=o1may4:u=bvgaev:broadcast:getresponse", flagged: false }, // legitimate GetResponse campaign ID
      { key: "Message-ID", value: "<getresponse.xserial.s56bGG6SOxSka...@gr-mail5.com>", flagged: false }, // legitimate GetResponse Message-ID format
      { key: "List-Unsubscribe", value: "<https://app.getresponse.com/one_click_unsubscribe.html?...>, <mailto:listunsubscribe@gr-mail5.com?...>",                                                             flagged: false }, // legitimate GetResponse unsubscribe mechanism
      { key: "List-Unsubscribe-Post", value: "List-Unsubscribe=One-Click", flagged: false },
      { key: "X-Complaints-To", value: "abuse@gr-mail5.com", flagged: false }, // legitimate abuse reporting address for GetResponse
      { key: "X-CSA-Complaints", value: "csa-complaints@eco.de", flagged: false },
  
      // ── Suspicious Headers ───────────────────────────────────────────────────
      { key: "Require-Recipient-Valid-Since", value: "leeadrian841@gmail.com; Thu, 19 Jun 2025 23:36:05 +0000", flagged: true }, // reveals recipient was added to the attacker's GetResponse list on 19 Jun 2025 — without consent; email address was harvested
      { key: "MIME-Version", value: "1.0", flagged: false },
      { key: "Content-Type", value: "multipart/alternative; boundary=8f6aedeba39276a6c36fc7567d059d4c", flagged: false },
      { key: "Content-Transfer-Encoding", value: "quoted-printable", flagged: false },
    ],

    redFlags: [
      // Critical
      { flag: "Promises $3.5M–$28M USD returns in 20–30 days — economically impossible", severity: "Critical" },
      { flag: "Requires $50K–$400K USD upfront participation fee — advance fee fraud structure", severity: "Critical" },
      { flag: "Recipient's email harvested and added to mailing list without consent (Jun 2025)", severity: "Critical" },
      { flag: "\"Non-Recourse: No Repayment Necessary\" — fabricated legal framing to justify the upfront fee", severity: "Critical" },
  
      // High
      { flag: "tradefinancedirect.com is a purpose-registered fraudulent finance domain", severity: "High" },
      { flag: "BNP Paribas bank logo used without any affiliation to manufacture credibility", severity: "High" },
      { flag: "Registered address is a Delaware shell company agent — not a real office", severity: "High" },
      { flag: "Subject implies a prior 'funding request' the recipient never submitted", severity: "High" },
      { flag: "Grayku LLC is the actual operator — not a regulated financial institution", severity: "High" },
  
      // Medium
      { flag: "Authentication passes completely — will evade all automated header-based filters", severity: "Medium" },
      { flag: "Sent via legitimate ESP (GetResponse) to borrow platform trust", severity: "Medium" },
      { flag: "Unsolicited bulk mail (Precedence: bulk) to a harvested address", severity: "Medium" },
      { flag: "Pool batch option ($50K × 8 clients) designed to lower entry barrier for victims", severity: "Medium" },
  
      // Low
      { flag: "DMARC policy is p=NONE — even a failure would not have blocked delivery", severity: "Low" },
      { flag: "Images hosted on grayku.com reveal the true operator behind tradefinancedirect.com", severity: "Low" },
    ],

    analysis: [
      {
        step: "1. What Is an SBLC Scam",
        content:
          "SBLC (Standby Letter of Credit) fraud is a well-documented financial scam targeting business owners and project developers seeking large capital. A real SBLC is a legitimate bank instrument used as a payment guarantee — but scammers use the terminology to construct elaborate fake investment programmes. The core mechanic is always the same: promise enormous, guaranteed returns (here $3.5M–$28M in 20–30 days) in exchange for a substantial upfront 'participation fee', 'issuance cost', or 'programme entry spot' (here $50K–$400K). Once the fee is paid, the returns never materialise, and the operator disappears or invents additional fees to delay and extract more money. No regulated bank or financial institution offers guaranteed non-recourse returns of 56% LTV in under a month.",
      },
      {
        step: "2. Why Authentication Passing Makes This More Dangerous",
        content:
          "This email is the inverse of Cases 1, 4, and 5 in terms of authentication. Every check passes cleanly: DKIM is signed for both gr-mail5.com and tradefinancedirect.com using rsa-sha256, SPF passes for the GetResponse relay, and DMARC passes for tradefinancedirect.com. The attacker invested in a real domain, configured DNS records correctly, and paid for a legitimate email marketing platform (GetResponse). This means no spam filter will flag this email on authentication grounds — the only detection signals are the content itself and the behavioural pattern of the unsolicited financial offer.",
        codeBlock: {
          language: "text",
          title: "Authentication-Results — all pass legitimately",
          code: `dkim=pass  header.i=@gr-mail5.com     (GetResponse platform DKIM)
dkim=pass  header.i=@tradefinancedirect.com (sender domain DKIM — properly configured)
spf=pass   smtp.mailfrom=bounce-197450001@bounce.gr-mail5.com
dmarc=pass (p=NONE sp=NONE dis=NONE) header.from=tradefinancedirect.com
          
Assessment: Authentication signals are useless for detection here.
            The fraud is entirely in the content and financial claims.`,
        },
      },
      {
        step: "3. Recipient Email Was Harvested Without Consent",
        content:
          "The Require-Recipient-Valid-Since header reveals that leeadrian841@gmail.com was added to the attacker's GetResponse contact list on 19 June 2025 — approximately 10 months before this email was sent. The recipient never subscribed to any trade finance newsletter or funding programme. This header is used by GetResponse to validate that an email address existed before it was added to a list, but here it inadvertently exposes the precise date the address was harvested and uploaded to the campaign list. This constitutes unsolicited commercial email (spam) under most jurisdictions' anti-spam laws.",
        codeBlock: {
          language: "text",
          title: "Email harvest date exposed in header",
          code: `Require-Recipient-Valid-Since: leeadrian841@gmail.com; Thu, 19 Jun 2025 23:36:05 +0000
                                                ↑
                                Date address was added to GetResponse list
                                Recipient never subscribed — address was harvested`,
        },
      },
      {
        step: "4. Financial Claims Are Economically Impossible",
        content:
          "The programme advertises returns that are structurally impossible for any legitimate financial product. A $50K contribution returning $3.5M in 20–30 days represents a 7,000% return in under a month. The '10-month' programme promises each participant in an 8-person pool '0.6 × 100M × 0.75 / 8 clients = ~$5.6M per month' — a total of $56M per client over 10 months on a $50K investment. No SBLC, letter of credit, or trade finance instrument produces returns of this magnitude. BNP Paribas is displayed as the 'issuing bank' with their logo — BNP Paribas has no affiliation with this programme and their brand is being used without authorisation to manufacture institutional legitimacy.",
        codeBlock: {
          language: "text",
          title: "Fabricated financial claims extracted from email body",
          code: `Entry fee:
$400,000 USD per individual spot
OR $50,000 USD per person (pool of 8 clients = $400K combined)
          
Promised returns (individual):
20–30 days:   $3,500,000 USD   (7,000% return in under 1 month)
10 months:    ~$56,250,000 USD (112,500% total return)
          
Promised returns (full $400K spot):
20–30 days:   $28,000,000 USD
10 months:    $478,000,000 USD
          
"Issuing Bank": BNP Paribas (logo used — no actual affiliation)
"Non-Recourse": No repayment required — framing designed to justify the upfront fee`,
        },
      },
      {
        step: "5. Operator Identity — Grayku LLC",
        content:
          "The email footer discloses the true operator as 'Grayku LLC, 16192 Coastal Highway, Lewes, DE 19958'. This address is a registered agent service in Delaware used by thousands of anonymous shell companies — it is not an operational office. The domain grayku.com hosts all images used in the email, confirming it is the actual campaign infrastructure. tradefinancedirect.com is a purpose-registered front domain. Neither entity appears in any financial regulator's register (FCA, SEC, MAS, ASIC) as an authorised firm. Receiving a second similar email, as noted, is consistent with the address being sold or shared across multiple campaign lists once confirmed as active.",
        codeBlock: {
          language: "text",
          title: "Operator details extracted from email footer",
          code: `Disclosed operator: Grayku LLC
Address:  16192 Coastal Highway, Lewes, DE 19958, USA
            ↑ Delaware registered-agent address (not a real office)
          
Domains:
tradefinancedirect.com  ← sender/front domain
grayku.com              ← image hosting / actual campaign infrastructure
          
ESP account:        GetResponse (Feedback-ID: c=o1may4:u=bvgaev)
Regulated?          No — not registered with FCA, SEC, MAS, or any known regulator`,
        },
      },
    ],

    recommendations: [
      "Do not pay any participation fee, entry cost, or 'programme spot' — no legitimate investment returns $3.5M on a $50K entry in 20–30 days. Any upfront fee demanded is the fraud itself.",
      "Report the email as spam to GetResponse at abuse@gr-mail5.com and via the one-click unsubscribe — filing an abuse report may get the campaign account suspended.",
      "Report Grayku LLC and tradefinancedirect.com to the FTC (reportfraud.ftc.gov) and the SEC's fraud tip line (sec.gov/tcr) if you are in the US.",
      "If you are in Singapore, report to the Singapore Police Force Anti-Scam Command (I-Witness portal) and MAS (Monetary Authority of Singapore) for unlicensed financial solicitation.",
      "Verify any financial firm making unsolicited funding offers against your regulator's register before engaging — MAS Financial Institutions Directory, FCA Register, SEC EDGAR.",
      "The fact that you have received two similar emails indicates your address has been added to a harvested list. Consider whether your email was exposed in a data breach at haveibeenpwned.com.",
      "Do not reply to such email or visit grayku.com — both actions confirm to the sender that your address is active and monitored.",
    ],

    techniques: [
      "Advance Fee Fraud (SBLC/Trade Finance Variant)",
      "Legitimate ESP Abuse (GetResponse)",
      "Purpose-Registered Fraudulent Domain",
      "Unauthorized Brand Use (BNP Paribas)",
      "Shell Company / Registered Agent Address",
      "False Urgency ('Confirmation Needed')",
      "Harvested Mailing List Without Consent",
      "Pool Batch Option (Lower Entry Barrier for Victims)",
    ],

    iocs: [
      { type: "Domain", value: "tradefinancedirect.com" },
      { type: "Domain", value: "grayku.com" },
      { type: "Email", value: "info@tradefinancedirect.com" },
      { type: "URL", value: "https://www.grayku.com/turnkey-sblc/lp2/" },
      { type: "URL", value: "https://www.grayku.com/brussels-sblc/mailer5/" },
      { type: "IP", value: "104.160.68.233 (GetResponse MTA — shared infrastructure, lower priority IOC)" },
      { type: "Company", value: "Grayku LLC, 16192 Coastal Highway, Lewes, DE 19958 (shell company address)" },
      { type: "ESP", value: "GetResponse account: Feedback-ID c=o1may4:u=bvgaev" },
      { type: "Brand", value: "BNP Paribas (impersonated — displayed without affiliation)" },
    ],
};
