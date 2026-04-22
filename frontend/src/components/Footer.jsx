// -----------------------------------------------------------------------------
// Footer.jsx — Site footer
//
// Contains: brand description, section links, and external tool links.
// To edit external tool links: update the array starting around line ~58.
// To edit section links: update the array starting around line ~35.
// -----------------------------------------------------------------------------
import React from "react";
import { NavLink } from "react-router-dom";
import { Shield, ExternalLink, Terminal } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#040912] border-t border-[#1a2d45] mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#22d3ee]/10 border border-[#22d3ee]/30 flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#22d3ee]" />
              </div>
              <span className="text-[#f0f4f8] font-semibold font-mono">
                EmailForensics
              </span>
            </div>
            <p className="text-[#8899aa] text-sm leading-relaxed">
              Documenting email-based threats, forensic analysis techniques, and
              security research to help protect users and organizations from
              phishing and scam campaigns.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[#f0f4f8] font-semibold text-sm mb-4 font-mono uppercase tracking-wider">
              Sections
            </h3>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/case-studies", label: "Case Studies" },
                { to: "/guide", label: "Identification Guide" },
              ].map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className="text-[#8899aa] hover:text-[#22d3ee] text-sm transition-colors duration-200 font-mono"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-[#f0f4f8] font-semibold text-sm mb-4 font-mono uppercase tracking-wider">
              External Tools
            </h3>
            <ul className="space-y-2">
              {[
                {
                  label: "MXToolbox Header Analyzer",
                  url: "https://mxtoolbox.com/EmailHeaders.aspx",
                },
                {
                  label: "Google Messageheader Tool",
                  url: "https://toolbox.googleapps.com/apps/messageheader/",
                },
                {
                  label: "VirusTotal (File/URL Analysis)",
                  url: "https://www.virustotal.com/gui/home/"
                },
                {
                  label: "AbuseIPDB",
                  url: "https://www.abuseipdb.com"
                },
                {
                  label: "Autopsy",
                  url: "https://www.autopsy.com/"
                },
                {
                  label: "SIFT Workstation",
                  url: "https://www.sans.org/tools/sift-workstation"
                },
              ].map((resource) => (
                <li key={resource.label}>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[#8899aa] hover:text-[#22d3ee] text-sm transition-colors duration-200 font-mono"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {resource.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#1a2d45] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[#8899aa] text-xs font-mono">
            <Terminal className="w-3.5 h-3.5 text-[#22d3ee]" />
            <span>
              &copy; {currentYear} EmailForensics &mdash; Educational &amp;
              Research Portfolio
            </span>
          </div>
          <p className="text-[#4a5568] text-xs font-mono">
            All case studies are anonymized. For educational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
