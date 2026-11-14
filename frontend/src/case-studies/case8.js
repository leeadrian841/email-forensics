// ── CASE 8: Next-Of-Kin Fraud ────────────────────────────────────
export default {
    id: "next-of-kin-inheritance-419-fraud",
    title: "Fake BNY Mellon Next-of-Kin Inheritance Scam",
    subtitle: "Classic 419 inheritance fraud impersonating a real BNY Mellon executive via a compromised Taiwanese university account",
    date: "2026-04-29",
    severity: "High",
    category: "Fraud",
    tags: ["419 Fraud", "Inheritance Scam", "Next-of-Kin Fraud", "BNY Mellon Impersonation", "Real Person Impersonation", "Compromised University Account", "Money Laundering Solicitation"],
    summary:
      "A textbook 'next-of-kin' inheritance fraud sent from a compromised account at the Department of Computer Science and Information Engineering, National Cheng Kung University (NCKU) in Taiwan. The email impersonates Emily Portney, the real former CFO of BNY Mellon (and head of BNY Mellon Asset Servicing during 2020–2022), and proposes a fictitious scheme to claim a $155,000,000 USD 'fixed deposit' belonging to a deceased engineer named 'Richard D. Petrelli'. The recipient is invited to be falsely named as the next-of-kin in exchange for a 50/50 split of the funds. The deceased's name appears to be fabricated — there is no public record of a Richard D. Petrelli who died in a New York car accident on 7 July 2013 with a $155M oil deposit. The recipient is asked to provide full name, address, phone, and occupation as the initial information harvest. The Reply-To redirects to a Gmail account (emily.portney37@gmail.com) distinct from the sending address. The X-Originating-IP (60.96.219.14) resolves to a residential ISP in Japan (au one net / KDDI), while the sending account is at a Taiwanese university — a Japan-to-Taiwan compromise pattern consistent with credential theft from leaked academic credential databases.",
    verdict: "Confirmed 419 Inheritance Fraud — Real Person Impersonation",
    tldr: "$155M next-of-kin inheritance scam impersonating the real former CFO of BNY Mellon. Sent from a compromised Taiwanese university account, replies redirected to Gmail. Asks you to commit bank fraud as the 'fake next of kin'. Do not reply.",
  
    screenshots: [
      {
        url: "/email-forensics/images/next-of-kin-email.png",
        caption: "The next-of-kin inheritance fraud email",
        alt: "Next-of-kin scam screenshot"
      },
    ],
  
    emailHeaders: [
      // ── Delivery & Routing ──────────────────────────────────────────────────
      { key: "Return-Path", value: "<hllu@mail.csie.ncku.edu.tw>", flagged: true }, // Taiwanese university CS department account; no affiliation with BNY Mellon
      { key: "Received", value: "from mta.csie.ncku.edu.tw (mta.csie.ncku.edu.tw. [140.116.246.204]) by mx.google.com with ESMTPS id d2e1a72fcca58-834ed978513si4406254b3a; Wed, 29 Apr 2026 06:18:57 -0700 (PDT)", flagged: false }, // legitimate NCKU CS department mail server
      { key: "Received", value: "from mbx.csie.ncku.edu.tw (mbox.csie.ncku.edu.tw [140.116.246.202]) by mta.csie.ncku.edu.tw (Postfix) with ESMTP; Wed, 29 Apr 2026 21:11:30 +0800 (CST)", flagged: false }, // internal NCKU webmail routing — legitimate
      { key: "X-Virus-Scanned", value: "amavis at mta.csie.ncku.edu.tw", flagged: false }, // legitimate amavis virus scanner — passed clean since the email contains no malware
      { key: "X-Originating-IP", value: "[60.96.219.14]", flagged: true }, // resolves to au one net / KDDI residential ISP in Japan — attacker accessed the Taiwanese university account from Japan
      { key: "X-Mailer", value: "Zimbra 10.1.16_GA_4850 (ZimbraWebClient - GC147 (Win)/10.1.16_GA_4863)", flagged: true }, // identical Zimbra version (10.1.16_GA_4850) to Cases 2 and 7 — third confirmed instance of the same Zimbra fingerprint across compromised-account fraud emails
  
      // ── Sender Identity ─────────────────────────────────────────────────────
      { key: "From", value: "Emily Portney <hllu@mail.csie.ncku.edu.tw>", flagged: true }, // display name "Emily Portney" is the real former CFO of BNY Mellon; account belongs to "hllu" at NCKU CS department — name/account mismatch confirms impersonation
      { key: "Reply-To", value: "emily.portney37@gmail.com", flagged: true }, // Reply-To redirects to Gmail account distinct from sending address — same pattern as Cases 7 and 8
      { key: "To", value: "(not present — BCC send to undisclosed recipients)", flagged: true }, // no To header — mass BCC send to harvested list
  
      // ── Content ─────────────────────────────────────────────────────────────
      { key: "Subject", value: "Attn: Email ID Owner", flagged: true }, // generic addressing — recipient not addressed by name; "Email ID Owner" is mass-mail boilerplate
      { key: "Date", value: "Wed, 29 Apr 2026 21:11:30 +0800 (CST)", flagged: false },
  
      // ── Authentication ───────────────────────────────────────────────────────
      { key: "Authentication-Results", value: "mx.google.com; spf=pass smtp.mailfrom=hllu@mail.csie.ncku.edu.tw; dmarc=pass (p=NONE sp=NONE dis=NONE) header.from=ncku.edu.tw", flagged: true }, // DKIM is absent (not in Authentication-Results) — only SPF and DMARC alignment pass; NCKU CS dept does not DKIM-sign
      { key: "Received-SPF", value: "pass (google.com: domain of hllu@mail.csie.ncku.edu.tw designates 140.116.246.204 as permitted sender) client-ip=140.116.246.204", flagged: false }, // technically valid — attacker is using a legitimate university account
      { key: "DKIM", value: "(absent — NCKU CS department does not sign with DKIM)", flagged: true }, // unlike Cases 7 and 8, this email has no DKIM signature; SPF and DMARC alone provide weaker authentication
  
      // ── Message Structure ────────────────────────────────────────────────────
      { key: "Message-ID", value: "<499355897.155586.1777468290217.JavaMail.zimbra@mail.csie.ncku.edu.tw>", flagged: false }, // legitimate Zimbra-generated Message-ID
      { key: "MIME-Version", value: "1.0", flagged: false },
      { key: "Content-Type", value: "multipart/alternative; boundary=\"=_9af3b372-64d0-4167-bd6e-33102981d12b\"", flagged: false },
      { key: "Content-Transfer-Encoding", value: "quoted-printable", flagged: false },
      { key: "Thread-Index", value: "qGC84VYbmXewOOxyMK7V+FoidErXRw==", flagged: false },
      { key: "Thread-Topic", value: "Attn: Email ID Owner", flagged: false },
    ],
  
    redFlags: [
      // Critical
      { flag: "Impersonates real person — Emily Portney, former CFO of BNY Mellon", severity: "Critical" },
      { flag: "Solicits the recipient to commit bank fraud (impersonate next-of-kin of a deceased person)", severity: "Critical" },
      { flag: "Promises 50/50 split of $155 million USD — economically and legally absurd", severity: "Critical" },
      { flag: "Sent from a compromised Taiwanese university CS department account", severity: "Critical" },
      { flag: "X-Originating-IP in Japan while sending account is in Taiwan — cross-border account hijacking", severity: "Critical" },
      { flag: "Reply-To redirects to Gmail account distinct from sender — replies go to attacker", severity: "Critical" },
  
      // High
      { flag: "Display name (Emily Portney) does not match account owner (hllu) at NCKU", severity: "High" },
      { flag: "Solicits PII: full name, address, phone, occupation as the initial harvest", severity: "High" },
      { flag: "BNY Mellon executives do not personally email random individuals about asset transfers", severity: "High" },
      { flag: "Pretextual story is a textbook 419 inheritance scam template", severity: "High" },
      { flag: "Subject 'Attn: Email ID Owner' is mass-mail boilerplate — recipient not personalised", severity: "High" },
      { flag: "Same Zimbra 10.1.16 fingerprint as Cases 2 and 7 — cross-case actor signal", severity: "High" },
  
      // Medium
      { flag: "DKIM absent — only SPF and DMARC alignment provide authentication", severity: "Medium" },
      { flag: "DMARC policy is p=NONE — even a failure would not have blocked delivery", severity: "Medium" },
      { flag: "Authentication passes — automated header analysis cannot detect the fraud", severity: "Medium" },
      { flag: "No To header — mass BCC send to harvested list", severity: "Medium" },
      { flag: "Plausibility hooks: specific names, dates, amounts, and 'oil consultant' detail to lend false credibility", severity: "Medium" },
      { flag: "Pre-emptive legal framing ('written agreement that will protect you') to overcome legal hesitation", severity: "Medium" },
  
      // Low
      { flag: "Deceased's name 'Richard D. Petrelli' has no matching public record of the described accident", severity: "Low" },
      { flag: "Reasoning that 'you don't need to share the same last name' specifically pre-empts the obvious objection", severity: "Low" },
      { flag: "Generic recipient discovery claim ('found your email in a business guestbook')",  severity: "Low" },
    ],
  
    analysis: [
      {
        step: "1. The Next-of-Kin Inheritance Fraud — a Distinct 419 Subfamily",
        content:
          "This is a specific subfamily of 419 advance fee fraud known as the 'next-of-kin' or 'unclaimed inheritance' scam. Unlike the compensation scam cases (which frame the recipient as a passive beneficiary), the next-of-kin scam invites the recipient to be an active participant in a fraudulent scheme. The sender claims to be a banker whose deceased client left a large unclaimed deposit, and proposes that the recipient impersonate the deceased's next-of-kin to claim the funds. The pretextual detail — names, dates, dollar amounts, professional titles — is designed to lend false credibility, but no part of the story is real. The scheme inevitably escalates into requests for processing fees, legal fees, anti-money-laundering certification fees, and tax clearance fees, which the victim must pay upfront to release the supposed inheritance. The crucial difference from a pure compensation scam is that the recipient is asked to participate in financial fraud — which means even if the inheritance were real, accepting the proposal would be a crime.",
      },
      {
        step: "2. Real Person Impersonation — Emily Portney",
        content:
          "The signature claims the sender is 'Emily Portney, CEO of BNY Mellon's Asset Servicing'. Emily Portney is a real person — she was the Chief Financial Officer of BNY Mellon from 2021 to 2023, having previously held the role of CFO of BNY Mellon Asset Servicing. She is no longer CEO of any BNY Mellon division. Choosing her name is deliberate: a recipient who searches 'Emily Portney BNY Mellon' will find genuine LinkedIn, news, and SEC filing results that confirm she is a real banking executive, lending false credibility to the email. Real BNY Mellon executives do not personally email random individuals about asset transfers — wealth and asset servicing communications occur through institutional channels, not Taiwanese university webmail accounts. The use of her Gmail-style namespace in the Reply-To (emily.portney37@gmail.com) reinforces the impersonation while ensuring all replies go to an attacker-controlled inbox.",
        codeBlock: {
          language: "text",
          title: "Real person impersonation",
          code: `Claimed identity:    Emily Portney, CEO of BNY Mellon's Asset Servicing
Real identity:       Emily Portney
                     Former CFO of BNY Mellon (2021–2023)
                     Previously CFO of BNY Mellon Asset Servicing
                     Currently no longer in that role
  
Sending account:     hllu@mail.csie.ncku.edu.tw
                     (NCKU CS department account, owner is "hllu" — not Emily Portney)
  
Reply-To:            emily.portney37@gmail.com
                     (attacker-controlled Gmail crafted to mimic her name)

Real Emily Portney's contact: institutional channels at her current employer only`,
        },
      },
      {
        step: "3. The Recipient Is Being Solicited to Commit a Crime",
        content:
          "The defining feature of this email versus Cases 7 and 8 is that the recipient is not merely a passive scam target — they are being asked to actively participate in bank fraud. Specifically, the email solicits the recipient to be falsely named as the next-of-kin of a deceased person they have never met, in order to claim funds that do not belong to them, with the promise of splitting the proceeds 50/50. In any jurisdiction, this constitutes wire fraud, bank fraud, identity fraud (against the deceased's estate), and money laundering. The pre-emptive framing 'you don't have to share the same last name with him' specifically anticipates and tries to overcome the most obvious legal objection. The 'written agreement that will protect you from any legal infringements' is meaningless — no private contract can shield either party from criminal prosecution for fraud. Even if every detail in the email were factually true, accepting the proposal would expose the recipient to criminal liability.",
        codeBlock: {
          language: "text",
          title: "Criminal nature of the proposed scheme",
          code: `What the recipient is being asked to do:
1. Falsely claim to be next-of-kin of Richard D. Petrelli (whom they never met)
2. File legal paperwork asserting an inheritance claim under false pretences
3. Receive $77.5M USD into their own account knowingly fraudulent
4. Transfer 50% to "Emily Portney" as the kickback
  
Crimes implicated (in most jurisdictions):
  • Wire fraud
  • Bank fraud
  • Identity fraud (against deceased's estate)
  • Conspiracy to commit fraud
  • Money laundering (by accepting and transferring fraudulent proceeds)
  
The "written agreement" is legally void and offers no protection.
Accepting any part of this scheme is a criminal act regardless of intent.`,
        },
      },
      {
        step: "4. Compromised Account — NCKU Computer Science Department",
        content:
          "The email originates from a legitimate account (hllu@mail.csie.ncku.edu.tw) at the Department of Computer Science and Information Engineering at National Cheng Kung University in Taiwan. The account is almost certainly compromised — the username 'hllu' likely belongs to a researcher, faculty member, or student named Lu (Romanised Taiwanese surname), not to Emily Portney. Academic email accounts are frequent targets for compromise because they have high reputation scores with major mail providers (helping fraud emails bypass spam filters), they often have weak password policies, and credentials are routinely exposed in dataset leaks from academic platforms. The X-Originating-IP (60.96.219.14) resolves to KDDI's au one net residential broadband in Japan — meaning the attacker accessed the Taiwanese university webmail from a Japanese residential connection. This is a textbook hijacked-credential pattern: the attacker is not in Taiwan, they simply purchased or stole the credentials and are operating the account remotely.",
        codeBlock: {
          language: "text",
          title: "Compromised account infrastructure",
          code: `Function                Location           Evidence
─────────────────────────────────────────────────────────────────
Sending SMTP account    Taiwan             hllu@mail.csie.ncku.edu.tw
                                          (NCKU CS dept — National Cheng Kung University)
Sending IP (relay)      Taiwan             140.116.246.204 (NCKU campus network)
Composition host        Japan              60.96.219.14 (KDDI au one net residential)
Reply Gmail             unknown            emily.portney37@gmail.com (Google infra)
  
Likely account owner:   Researcher/faculty named Lu (Romanised Taiwanese surname)
Compromise vector:      Credential theft (academic password leak, phishing, or
                        webmail credential stuffing using leaked databases)`,
        },
      },
      {
        step: "5. Cross-Case Pattern — Same Zimbra Fingerprint as Cases 2 and 7",
        content:
          "This is the third email in the dataset to use Zimbra 10.1.16_GA_4850 — the exact same version string appears in Case 2 (RFNet BEC probe via rcn.com) and Case 7 (IMF/INTERPOL fraud via sccoast.net). All three cases involve compromised legitimate accounts on Zimbra-based mail platforms, all three pass authentication, all three use Reply-To misdirection (Cases 7 and 9; Case 2 used display name spoofing instead), and all three were marked clean by automated security tooling. The pattern suggests either (a) a single fraud operation that systematically targets Zimbra-hosted email providers — university CS departments, regional ISPs, and small businesses are common Zimbra deployments — or (b) a credential vendor selling Zimbra account credentials specifically to fraud operators who exploit the high reputation scores of these platforms. Zimbra 10.1.16_GA_4850 was released in 2025 and is current, so the targeting is not driven by version-specific vulnerabilities but by the underlying credential theft ecosystem.",
        codeBlock: {
          language: "text",
          title: "Zimbra 10.1.16_GA_4850 fingerprint across cases",
          code: `Case        Sending Account              Country     Date         Auth     Vade
─────────────────────────────────────────────────────────────────────────────────
Case 2      wmcclean@rcn.com             USA         13 Feb 2026  All pass clean
Case 6      brs1944@sccoast.net          USA         04 Apr 2026  All pass clean
Case 8      hllu@mail.csie.ncku.edu.tw   Taiwan      29 Apr 2026  SPF+DMARC (no Vade header)
  
Common indicators:
  • Zimbra 10.1.16_GA_4850 ZimbraWebClient (GC/FF on Windows)
  • All compromised legitimate accounts (not purpose-registered)
  • All pass authentication via the legitimate account's domain
  • All redirect replies away from the sending account (Reply-To or display name)
  • All composed from an X-Originating-IP different from the SMTP relay region`,
        },
      },
      {
        step: "6. Comparison Across the 419 Family (Cases 7, 8, 9)",
        content:
          "This email completes a clear taxonomy of the 419 advance fee fraud family in the dataset. Case 7 (IMF/INTERPOL) is a compensation scam framing the recipient as a passive recovery beneficiary. Case 8 (UN) is a minimum-effort compensation scam with no specific story. Case 9 (next-of-kin) is the highest-effort variant of the family — a detailed pretextual story, a real person's name and title, specific dates and dollar amounts, and an explicit invitation to participate in a fraudulent scheme rather than passively receive funds. The investment in narrative detail correlates with the attacker's expectation of value: the story exists specifically because the recipient is being asked to accept criminal liability, which requires more persuasion than simply accepting a 'compensation payment'. All three rely on the same authentication-passing-via-compromised-legitimate-account technique, the same Reply-To misdirection (or its display name analogue), and the same Gmail/Yahoo/phone reply channel pattern.",
      },
    ],
  
    recommendations: [
      "Do not reply to the email and do not contact emily.portney37@gmail.com under any circumstances — any reply confirms your address is active and will trigger an aggressive follow-up.",
      "Do not provide your full name, address, phone number, or occupation — this PII has independent value for identity theft and will be sold to other fraud operations even if you never engage further.",
      "Recognise that even if the story were true, accepting this proposal would be wire fraud, bank fraud, and money laundering. There is no legal way to receive a stranger's inheritance by impersonating their next-of-kin.",
      "Report the compromised NCKU account (hllu@mail.csie.ncku.edu.tw) to NCKU CSIE department abuse: the IT staff at csie.ncku.edu.tw should be notified so the legitimate account holder can recover access.",
      "Report the Reply-To Gmail address (emily.portney37@gmail.com) to Google at support.google.com/mail/answer/8253 — the impersonation of a real banking executive strengthens the abuse case.",
      "Report the impersonation to BNY Mellon's fraud team at fraud@bnymellon.com — they actively pursue executive impersonation cases and can issue takedowns.",
      "If you are in Singapore, file a report with the Singapore Police Force Anti-Scam Command via the I-Witness portal.",
      "Real banking executives and asset servicing professionals do not use personal Gmail accounts for $155M asset transfer correspondence — when in doubt, contact the institution directly through their published corporate contact channels.",
    ],
  
    techniques: [
      "419 Advance Fee Fraud (Next-of-Kin Inheritance Variant)",
      "Real Person Impersonation (Emily Portney, former BNY Mellon CFO)",
      "Compromised Academic Email Account (NCKU CS Department)",
      "Cross-Border Account Hijacking (Japan → Taiwan)",
      "Reply-To Misdirection to Attacker Gmail",
      "Solicitation of Active Fraud Participation",
      "PII Harvesting (Name, Address, Phone, Occupation)",
      "Pretextual Narrative with Plausibility Hooks (specific names, dates, dollar amounts)",
      "Pre-emptive Legal Framing ('written agreement') to Overcome Hesitation",
    ],
  
    iocs: [
      { type: "Email",   value: "hllu@mail.csie.ncku.edu.tw (compromised sending account)" },
      { type: "Email",   value: "emily.portney37@gmail.com (Reply-To — attacker inbox impersonating real BNY Mellon executive)" },
      { type: "IP",      value: "60.96.219.14 (X-Originating-IP — KDDI au one net Japan composition host)" },
      { type: "IP",      value: "140.116.246.204 (NCKU SMTP relay)" },
      { type: "Domain",  value: "mail.csie.ncku.edu.tw (NCKU CS department mail server — account compromised)" },
      { type: "Person",  value: "Emily Portney (impersonated — real former CFO of BNY Mellon)" },
      { type: "Person",  value: "Richard D. Petrelli (likely fabricated identity used as fictional deceased)" },
      { type: "Org",     value: "BNY Mellon (impersonated — no actual involvement)" },
      { type: "Amount",  value: "$155,000,000 USD (claimed inheritance — fictitious)" },
    ],
};
