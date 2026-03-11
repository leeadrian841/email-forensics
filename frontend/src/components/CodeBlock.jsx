// -----------------------------------------------------------------------------
// CodeBlock.jsx — Syntax-highlighted code/text display
//
// Used in CaseStudyDetail.jsx to render raw headers, WHOIS output, etc.
// No content to edit here — content comes from the `codeBlock` field
// in each analysis step of a case study in mock.js.
// -----------------------------------------------------------------------------
import React, { useState } from "react";
import { Copy, CheckCircle, Terminal } from "lucide-react";

/**
 * CodeBlock — renders a styled code/text block with:
 *   - Language label badge
 *   - Optional title
 *   - Copy-to-clipboard button
 *   - Monospace IBM Plex Mono font
 *
 * Props:
 *   code     {string}  — The code or raw text to display (required)
 *   language {string}  — Language label shown in the header badge (default: "text")
 *   title    {string}  — Optional label shown above the code (e.g. "WHOIS Output")
 */
const CodeBlock = ({ code, language = "text", title }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // Map language to a display colour for the badge
  const langColor = {
    bash:   "text-[#22d3ee]  bg-[#22d3ee]/10  border-[#22d3ee]/20",
    sh:     "text-[#22d3ee]  bg-[#22d3ee]/10  border-[#22d3ee]/20",
    python: "text-[#f59e0b]  bg-[#f59e0b]/10  border-[#f59e0b]/20",
    py:     "text-[#f59e0b]  bg-[#f59e0b]/10  border-[#f59e0b]/20",
    json:   "text-[#a78bfa]  bg-[#a78bfa]/10  border-[#a78bfa]/20",
    html:   "text-[#fb7185]  bg-[#fb7185]/10  border-[#fb7185]/20",
    text:   "text-[#8899aa]  bg-[#8899aa]/10  border-[#8899aa]/20",
  };
  const badgeClass =
    langColor[language.toLowerCase()] ||
    "text-[#8899aa] bg-[#8899aa]/10 border-[#8899aa]/20";

  return (
    <div className="rounded-xl border border-[#1a2d45] overflow-hidden mt-4">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#0d1526] border-b border-[#1a2d45]">
        <div className="flex items-center gap-3">
          {/* Traffic-light dots */}
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#fb7185]/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#22d3ee]/50" />
          </div>
          {/* Title */}
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-[#4a5568]" />
            <span className="text-[#8899aa] text-xs font-mono">
              {title || "code"}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Language badge */}
          <span
            className={`px-2 py-0.5 rounded text-xs font-mono border ${badgeClass}`}
          >
            {language}
          </span>

          {/* Copy button */}
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-[#4a5568] hover:text-[#22d3ee] transition-colors duration-200"
            title="Copy to clipboard"
          >
            {copied ? (
              <>
                <CheckCircle className="w-3.5 h-3.5 text-[#22d3ee]" />
                <span className="text-[#22d3ee] text-xs font-mono">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span className="text-xs font-mono">Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code body */}
      <div className="bg-[#030712] overflow-x-auto">
        <pre className="px-5 py-4 text-xs font-mono text-[#8fafc2] leading-relaxed whitespace-pre">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
