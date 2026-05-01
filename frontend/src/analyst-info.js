// -----------------------------------------------------------------------------
// ANALYST INFO
// Your personal details shown on the Home page
//  → Home page: name, title, bio, certs, skills
// -----------------------------------------------------------------------------
export const ANALYST_INFO = {
  name: "Adrian Lee",
  title: "Aspiring Cybersecurity Associate",
  tagline: "Dissecting deception — one email header at a time.",
  bio: "A Project Engineer pivoting into cybersecurity. I investigate hands-on cases to sharpen my ability to trace, analyze, and expose malicious email threats. My goal is to bring my analytical mindset to the world of cybersecurity.",

  // --------------------------------------------------------------------------
  // CERTIFICATIONS
  // Each entry shows as a cert badge on the Home page.
  // Fields: name (string), issuer (string), year (string)
  // --------------------------------------------------------------------------
  certs: [
    {
      name: "Google Cybersecurity Certificate",
      issuer: "Google / Coursera",
      year: "2025",
    },
    // Add more certs below — copy the block above and fill in the details:
    // {
    //   name: "CompTIA Security+",
    //   issuer: "CompTIA",
    //   year: "2025",
    // },
  ],

  // --------------------------------------------------------------------------
  // SKILLS
  // Shown as pill badges on the Home page.
  // --------------------------------------------------------------------------
  skills: [
    "Email Header Analysis",
    "Phishing Detection & Investigation",
    "OSINT (Open-Source Intelligence)",
    "Network Fundamentals",
    "MXToolbox",
    "VirusTotal",
    "PhishTool",
    "Wireshark",
  ],
};
