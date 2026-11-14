// ── CASE 7: UN Compensation Fraud ────────────────────────────────────
export default {
    id: "un-compensation-advance-fee-fraud",
    title: "Fake UN Compensation — Advance Fee Fraud",
    subtitle: "Crude 419 fraud impersonating the United Nations via a compromised Argentine ISP account",
    date: "2026-04-12",
    severity: "High",
    category: "Fraud",
    tags: ["419 Fraud", "Advance Fee", "UN Impersonation", "Compromised Account", "PII Harvesting", "Cross-Continent Operation"],
    summary:
      "A crude, low-effort 419 advance fee fraud impersonating the United Nations, sent from a compromised or purpose-created Argentinian ISP account (omarcapone@fibertel.com.ar — Fibertel is a Cablevisión residential broadband service in Argentina). The email claims '$50 million dollars' has been approved by the UN as compensation for being a 'victim of scam', and instructs the recipient to respond via a Gmail address (charleswscharf593@gmail.com) or US phone number (+1 213 357 2744). The email contains no proper Subject line, no Thread-Topic, no To address, no Reply-To, no display name beyond 'compensation', and only 8 lines of ungrammatical body text — the lowest effort of all cases analysed. Despite its crudeness, all authentication checks pass because the attacker operates through a real ISP webmail account. The X-Originating-IP (129.222.206.18) resolves to an Ecuadorian ISP, while the sending account is Argentinian and the contact number is US — a three-continent infrastructure pattern consistent with an organised 419 operation using proxies or compromised accounts across jurisdictions. The Gmail contact address impersonates the name of Charles W. Scharf, the CEO of Wells Fargo, as a decoy identity.",
    verdict: "Confirmed 419 Advance Fee Fraud — UN Impersonation (Low Effort Variant)",
    tldr: "Crude UN compensation scam offering $50M from a compromised Argentinian ISP account. Blank subject, typos, and a Gmail contact impersonating the Wells Fargo CEO's name. Do not reply. Same fraud family as the IMF/INTERPOL compensation case.",
  
    screenshots: [
      {
        url: "/email-forensics/images/un-compensation-email.png",
        caption: "The UN compensation fraud email",
        alt: "UN fraud email screenshot"
      },
    ],
  
    emailHeaders: [
      // ── Delivery & Routing ──────────────────────────────────────────────────
      { key: "Return-Path", value: "<omarcapone@fibertel.com.ar>", flagged: true }, // Argentinian residential ISP account (Fibertel = Cablevisión broadband); no affiliation with the UN
      { key: "Received", value: "from smtp.fibertel.com.ar (avasmr03-slo1.fibertel.com.ar. [24.232.0.196]) by mx.google.com with ESMTPS id a92af1059eb24-12c345a133csi26838434c88; Sun, 12 Apr 2026 03:05:04 -0700 (PDT)", flagged: false }, // legitimate Fibertel Argentina SMTP relay
      { key: "Received", value: "from vZMTA02.fibertel.com.ar [201.212.7.85] by avasmr03-slo1.int.fibertel.com.ar (Postfix) with ESMTPS; Sun, 12 Apr 2026 07:04:33 -0300 (-03)", flagged: false }, // internal Fibertel routing — legitimate
      { key: "Received", value: "from vzmbox09-fc.int.fibertel.com.ar [10.120.162.6] by vzmta02-fc.int.fibertel.com.ar (Postfix) with ESMTP; Sun, 12 Apr 2026 07:03:36 -0300 (ART)", flagged: false }, // internal Fibertel webmail server — legitimate
      { key: "X-Originating-IP", value: "[129.222.206.18]", flagged: true }, // differs from Fibertel relay (24.232.0.196) — email composed from a separate remote host, consistent with compromised account
      { key: "X-Mailer", value: "Zimbra 8.6.0_GA_1191 (ZimbraWebClient - GC146 (Win)/8.6.0_GA_1191)", flagged: true }, // Zimbra 8.6.0 is a very old version (released 2014, end-of-life) — Fibertel runs an outdated Zimbra deployment that is easier to compromise; matches attacker targeting pattern
  
      // ── Sender Identity ─────────────────────────────────────────────────────
      { key: "From", value: "compensation <omarcapone@fibertel.com.ar>", flagged: true }, // display name is literally the word "compensation" — a template field left as-is; Argentine ISP account not affiliated with the UN
      { key: "To", value: "(absent)", flagged: true }, // no To header present — mass BCC send to harvested list
      { key: "Subject", value: "(blank)", flagged: true }, // subject line is completely empty — template error or deliberate keyword filter evasion
      { key: "Thread-Topic", value: "(blank)", flagged: true }, // Thread-Topic also blank — confirms subject was intentionally or carelessly left empty

      // ── Content ─────────────────────────────────────────────────────────────
      { key: "Subject", value: "(empty)", flagged: true }, // completely blank Subject field — unusual for legitimate mail and often bypasses keyword-based spam filters that only scan subjects
      { key: "Thread-Topic", value: "(empty)", flagged: true }, // also empty — consistent with template fields left unpopulated
      { key: "Date", value: "Sun, 12 Apr 2026 07:03:36 -0300 (ART)", flagged: false },
      
      // ── Authentication ───────────────────────────────────────────────────────
      { key: "Authentication-Results", value: "mx.google.com; dkim=pass header.i=@fibertel.com.ar header.s=mail; spf=pass smtp.mailfrom=omarcapone@fibertel.com.ar", flagged: false }, // both pass — attacker uses a legitimate ISP account; authentication cannot detect this fraud
      { key: "Received-SPF", value: "pass (google.com: domain of omarcapone@fibertel.com.ar designates 24.232.0.196 as permitted sender) client-ip=24.232.0.196", flagged: false },
      { key: "DKIM-Signature", value: "v=1; a=rsa-sha256; d=fibertel.com.ar; s=mail; h=x-mailer:content-type:mime-version:subject:message-id:from:date", flagged: false }, // legitimate Fibertel ISP DKIM signature using rsa-sha256
      { key: "DMARC", value: "(absent — no DMARC record for fibertel.com.ar)", flagged: true }, // Fibertel does not publish a DMARC record, so no alignment check is performed; allows future spoofing of the same domain
  
      // ── Message Structure ────────────────────────────────────────────────────
      { key: "Message-ID", value: "<501530683.70105152.1775988216568.JavaMail.zimbra@fibertel.com.ar>", flagged: false }, // legitimate Zimbra-generated Message-ID
      { key: "MIME-Version", value: "1.0", flagged: false },
      { key: "Content-Type", value: "multipart/alternative; boundary=\"----=_Part_70105151_1278397881.1775988216567\"", flagged: false },
      { key: "Content-Transfer-Encoding", value: "7bit", flagged: false },
    ],
  
    redFlags: [
      // Critical
      { flag: "UN impersonation — the United Nations does not distribute compensation via email", severity: "Critical" },
      { flag: "$50 million payout offered to a stranger via email — economically absurd", severity: "Critical" },
      { flag: "Sent from a compromised Argentinian residential ISP account (Fibertel)", severity: "Critical" },
      { flag: "X-Originating-IP in Ecuador while sending account is Argentinian — account hijacking", severity: "Critical" },
      { flag: "Body Gmail (charleswscharf593@gmail.com) impersonates name of Wells Fargo CEO Charles W. Scharf", severity: "Critical" },
  
      // High
      { flag: "Completely empty Subject line — subject-based spam filter evasion", severity: "High" },
      { flag: "No To header — mass BCC send to harvested email list", severity: "High" },
      { flag: "No Reply-To — forces victim to email body address, leaving no header trace", severity: "High" },
      { flag: "Display name 'compensation' is a role placeholder, not a real person/organisation", severity: "High" },
      { flag: "Contact redirects to Gmail + US phone while sending from Argentina — three-continent infrastructure", severity: "High" },
      { flag: "Victim-shaming framing: 'compensation for being a victim of scam' targets prior scam victims on sucker lists", severity: "High" },
  
      // Medium
      { flag: "Authentication passes completely — cannot be detected by automated header analysis", severity: "Medium" },
      { flag: "Fibertel has no DMARC record — no alignment enforcement for the domain", severity: "Medium" },
      { flag: "Zimbra version 8.6.0 (2014, end-of-life) — outdated and vulnerable mail server", severity: "Medium" },
      { flag: "Ungrammatical body text ('been a victim of scam by the wrong people who paraded')", severity: "Medium" },
      { flag: "Self-aware spam disclaimer ('if you found this in your junk/spam') — attempts to pre-empt filter suspicion", severity: "Medium" },
  
      // Low
      { flag: "Thread-Topic also empty — template fields left blank", severity: "Low" },
      { flag: "No timestamps or case reference numbers to add false legitimacy", severity: "Low" },
      { flag: "Legitimate account holder name (Omar Capone) unrelated to 'compensation' display name", severity: "Low" },
    ],
  
    analysis: [
      {
        step: "1. The UN Compensation Scam — a 419 Subfamily",
        content:
          "This is a textbook variant of the '419 compensation scam' — a subfamily of West African advance fee fraud that specifically targets recipients on 'sucker lists' (email lists of people who have previously been defrauded). The framing is deliberately sympathetic: the recipient is positioned as a past victim of unscrupulous scammers, and the UN is now graciously compensating them. This framing works on two levels — it validates the recipient's potential prior experience of being scammed, and it positions the current sender as the ethical authority making things right. Once contact is established, the standard 419 playbook applies: invented fees for 'processing', 'insurance', 'anti-money-laundering certification', or 'legal clearance' are requested to release the promised $50M, and each fee triggers additional fees indefinitely.",
      },
      {
        step: "2. Why This Is the Lowest-Effort Email in the Dataset",
        content:
          "Unlike the elaborate HTML templates of Cases 1, 4, 5, and 6, this email is only eight lines of plain ungrammatical text. There is no Subject, no Thread-Topic, no To address, no branding, no case reference number, no document attachment, no typography, and the body contains grammatical errors ('been a victim of scam by the wrong people who paraded themselves on what they are not'). The operation invests minimal effort per message and relies on mass-volume distribution via compromised ISP accounts. The low effort does not mean low success — 419 operators specifically rely on this minimal-effort style because it filters out sceptical recipients and leaves only the most credulous to respond, reducing the operator's workload per successful conversion.",
        codeBlock: {
          language: "text",
          title: "Complete email body (verbatim)",
          code: `This is a true compensation Approved by the UNITED NATION to
compensate you for been a victim of scam by the wrong people who
paraded themselves on what they are not so because of this, the United
Nation approved our Bank to process online bank with valid cash of
$50 million dollars in your favor in order to compensate you.
Get back as soon as possible.
  
Note: if you found this email in your junk/spam, it's because of your
internet IP server, We look forward to your prompt response
  
Respond via email below:
Email: charleswscharf593@gmail.com
 OR    +1(213) 357-2744`,
        },
      },
      {
        step: "3. The Cross-Continent Infrastructure Pattern",
        content:
          "The email exhibits a three-continent operational pattern that is characteristic of organised 419 operations. The sending account (omarcapone@fibertel.com.ar) is on an Argentinian residential ISP — likely compromised credentials purchased from a broader ISP account dump, or a purpose-created account registered using stolen Argentinian identity. The X-Originating-IP (129.222.206.18) resolves to Ecuador, meaning the attacker composed the email from an Ecuadorian network, not Argentina — indicating remote access to the Argentinian webmail account via proxy, VPN, or direct compromise. The reply channels (Gmail + US 213 area code phone) are US-based. This geographical spread serves two purposes: it makes law enforcement investigation harder because three different jurisdictions are involved, and it allows the operator to receive victim replies in an English-speaking jurisdiction while the compromised sending account and payload composition happen in South America.",
        codeBlock: {
          language: "text",
          title: "Cross-continent infrastructure breakdown",
          code: `Function                    Location           Evidence
─────────────────────────────────────────────────────────────────
Sending SMTP account        Argentina          omarcapone@fibertel.com.ar (Fibertel / Cablevisión)
Sending IP (relay)          Argentina          24.232.0.196 (Fibertel Buenos Aires)
Email composition host      Ecuador            129.222.206.18 (Claro / Ecuadorian ISP)
Reply Gmail address         United States      charleswscharf593@gmail.com (Google infra)
Contact phone number        United States      +1 213 357 2744 (Los Angeles, CA area code)
  
Legitimate account owner:   Omar Capone (Argentinian residential customer — victim of compromise)`,
        },
      },
      {
        step: "4. Impersonation of Wells Fargo CEO's Name",
        content:
          "The Gmail address provided for contact is charleswscharf593@gmail.com. Charles W. Scharf is the real, current CEO of Wells Fargo & Company — a prominent US bank. The attacker has crafted the Gmail username specifically to match the name of a well-known financial executive, likely to provide an extra layer of false credibility if the victim searches the name online. This is a deliberate choice: if a victim does due diligence on the name 'Charles W. Scharf', they find a real banking executive at a real Fortune 100 bank, which may reinforce their belief that the UN compensation offer is legitimate. Scharf has no affiliation with any UN compensation programme, and the real Wells Fargo CEO does not correspond via Gmail accounts to random individuals about UN payouts.",
        codeBlock: {
          language: "text",
          title: "Impersonated identity",
          code: `Gmail address in email body:   charleswscharf593@gmail.com
Apparent impersonation of:     Charles W. Scharf
Real identity:                 CEO and President of Wells Fargo & Company
                               (since October 2019)
  
Attacker's purpose:            Victim searches the name → finds real banking executive
                                → perceived legitimacy increases
                                → conversion rate improves
  
Real Charles W. Scharf's actual contact:  via Wells Fargo corporate channels only`,
        },
      },
      {
        step: "5. Comparison to IMF/INTERPOL Fraud Case",
        content:
          "This case and the IMF/INTERPOL fraud case are members of the same 419 fraud family but differ in effort level. Both impersonate major international organisations (UN here, IMF + INTERPOL in the other case), both offer an implausibly large compensation sum ($50M here, $2.5M in the other case), both request follow-up contact on channels different from the sending account (Gmail + US phone in both), and both pass all authentication checks by using legitimate ISP accounts. The critical difference is polish: the IMF/INTERPOL fraud case has a proper Subject ('ATTENTION'), specific PII requests, a structured body, and a Reply-To misdirection. This case has no Subject, no PII ask, no Reply-To, and ungrammatical text. Both are the same category of attack operated by similar actor profiles — but the IMF/INTERPOL fraud case is tuned for higher-value targets while this case is mass-blast at minimum cost.",
        codeBlock: {
          language: "text",
          title: "Case 7 vs Case 8 comparison — same fraud family, different effort tier",
          code: `Indicator                   IMF/INTERPOL Case       UN Compensation Case
────────────────────────────────────────────────────────────────────────
Impersonated org            IMF + INTERPOL              United Nations
Compensation amount         $2,500,000 USD              $50,000,000 USD
Sending account type        US ISP (sccoast.net)        Argentinian ISP (fibertel.com.ar)
Authentication              All pass                    All pass (no DMARC)
Subject line                "ATTENTION"                 (empty)
Body length                 ~15 lines structured        8 lines ungrammatical
PII requested               Name, phone, address        None (initial contact only)
Reply-To redirect           Yes (Yahoo)                 No (body Gmail only)
Body contact                Gmail + US phone            Gmail + US phone
Deadline                    72 hours                    "as soon as possible"
Decoy identity              None named                  Charles W. Scharf (WF CEO)
Effort tier                 Medium                      Minimum`,
        },
      },
    ],
  
    recommendations: [
      "Do not email charleswscharf593@gmail.com or call +1 (213) 357-2744 — any contact confirms your address is active and will escalate targeting.",
      "Do not pay any fee, provide personal details, or send identity documents regardless of what the follow-up message claims is required.",
      "Report the Gmail contact (charleswscharf593@gmail.com) to Google at support.google.com/mail/answer/8253 — use of a real bank CEO's name strengthens the abuse report.",
      "Report the phone number (+1 213-357-2744) to the FTC at reportfraud.ftc.gov.",
      "Report the compromised account (omarcapone@fibertel.com.ar) to Fibertel abuse at abuse@fibertel.com.ar — the legitimate account holder deserves to be notified their account is being used for fraud.",
      "If you are in Singapore, file a report with the Singapore Police Force Anti-Scam Command via the I-Witness portal at eservices.police.gov.sg.",
      "If you have previously lost money to a scam and received this email as a 'recovery compensation' lure, be aware this is a common second-stage targeting of known fraud victims — report both incidents.",
    ],
  
    techniques: [
      "419 Advance Fee Fraud (UN Compensation Variant)",
      "International Organisation Impersonation (United Nations)",
      "Compromised Residential ISP Account (Fibertel / Argentina)",
      "Cross-Continent Operational Infrastructure",
      "Spam Filter Deflection Script",
      "Empty Subject Line Filter Evasion",
      "Fake Urgency ('Get back as soon as possible')",
      "Sucker List Targeting (Framing as Compensation for Prior Scam)",
      "Decoy Identity Impersonation (Wells Fargo CEO Name)",
      "Mass BCC Send to Harvested List",
      "Self-Aware Spam Disclaimer",
      "Body-Only Contact Redirect (No Reply-To Header)",
    ],
  
    iocs: [
      { type: "Email", value: "omarcapone@fibertel.com.ar (compromised sending account)" },
      { type: "Email", value: "charleswscharf593@gmail.com (body contact — impersonates Wells Fargo CEO name)" },
      { type: "Phone", value: "+1 (213) 357-2744 (Los Angeles CA area code — attacker phone)" },
      { type: "IP", value: "129.222.206.18 (X-Originating-IP — Ecuador composition host)" },
      { type: "IP", value: "24.232.0.196 (Fibertel Argentina SMTP relay)" },
      { type: "Domain", value: "fibertel.com.ar (Argentinian ISP — account compromised)" },
      { type: "Org", value: "United Nations (impersonated — no affiliation)" },
      { type: "Person", value: "Charles W. Scharf (name impersonated — real Wells Fargo CEO, unaffiliated)" },
    ],
};
