// -----------------------------------------------------------------------------
// Guide.jsx — Email identification guide page
//
// Sections: Critical Email Headers (expandable, with optional example images),
// How to Access Email Headers (desktop/mobile tabs, with optional screenshots),
// Desktop vs Mobile comparison table, Phishing Email Checklist, and Tools.
//
// Content source: GUIDE_CONTENT from guide-content.js
// To edit: update GUIDE_CONTENT in guide-content.js. Add images via the `examples`
// field on keyHeaders, or `screenshots` field on desktop/mobile guides.
// -----------------------------------------------------------------------------
import React, { useState } from "react";
import {
  Monitor,
  Smartphone,
  CheckCircle,
  XCircle,
  AlertTriangle,
  BookOpen,
  Terminal,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Shield,
  ImageIcon,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { GUIDE_CONTENT } from "../guide-content";
import ScreenshotGallery from "../components/ScreenshotGallery";

const forensicValueColor = {
  Critical: "text-[#fb7185] bg-[#fb7185]/10 border-[#fb7185]/20",
  High: "text-[#f59e0b] bg-[#f59e0b]/10 border-[#f59e0b]/20",
  Medium: "text-[#22d3ee] bg-[#22d3ee]/10 border-[#22d3ee]/20",
  Low: "text-[#8899aa] bg-[#8899aa]/10 border-[#8899aa]/20",
};

const Guide = () => {
  const [expandedHeader, setExpandedHeader] = useState(null);
  const [checklist, setChecklist] = useState(
    GUIDE_CONTENT.quickChecklist.map(() => false)
  );
  const checkedCount = checklist.filter(Boolean).length;

  const toggleCheck = (i) => {
    setChecklist((prev) => prev.map((v, idx) => (idx === i ? !v : v)));
  };

  return (
    <div className="min-h-screen bg-[#060b14] pt-24 pb-20">
      {/* Page header */}
      <div className="px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-[#22d3ee] text-xs font-mono mb-4 uppercase tracking-widest">
            <BookOpen className="w-3.5 h-3.5" />
            Security Awareness Guide
          </div>
          <h1 className="text-4xl font-bold text-[#f0f4f8] font-mono mb-4">
            How to Identify Phishing Emails
          </h1>
          <p className="text-[#8899aa] text-lg max-w-2xl leading-relaxed">
            {GUIDE_CONTENT.overview}
          </p>
        </div>
      </div>

      <div className="px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Key Headers Reference */}
          <section>
            <div className="flex items-center gap-2 text-[#22d3ee] text-xs font-mono mb-4 uppercase tracking-widest">
              <Terminal className="w-3.5 h-3.5" />
              Header Reference
            </div>
            <h2 className="text-2xl font-bold text-[#f0f4f8] font-mono mb-6">
              Critical Email Headers
            </h2>
            <div className="space-y-3">
              {GUIDE_CONTENT.keyHeaders.map((header, i) => (
                <div
                  key={header.name}
                  className="bg-[#0d1526] border border-[#1a2d45] rounded-xl overflow-hidden"
                >
                  <button
                    className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-[#111f35] transition-colors duration-150"
                    onClick={() =>
                      setExpandedHeader(expandedHeader === i ? null : i)
                    }
                  >
                    <code className="text-[#22d3ee] font-mono text-sm font-bold w-44 shrink-0">
                      {header.name}:
                    </code>
                    <span className="text-[#8899aa] text-sm font-mono flex-1 text-left line-clamp-1">
                      {header.description}
                    </span>
                    <span
                      className={`shrink-0 px-2.5 py-1 rounded-full text-xs font-mono border ${forensicValueColor[header.forensicValue] || forensicValueColor.Low}`}
                    >
                      {header.forensicValue}
                    </span>
                    {expandedHeader === i ? (
                      <ChevronUp className="w-4 h-4 text-[#22d3ee] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#4a5568] shrink-0" />
                    )}
                  </button>
                  {expandedHeader === i && (
                    <div className="border-t border-[#1a2d45] px-5 pb-5 pt-4 space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <span className="text-[#4a5568] text-xs font-mono uppercase tracking-wider block mb-2">
                            Description
                          </span>
                          <p className="text-[#8899aa] text-sm font-mono leading-relaxed">
                            {header.description}
                          </p>
                        </div>
                        <div>
                          <span className="text-[#4a5568] text-xs font-mono uppercase tracking-wider block mb-2">
                            What to look for
                          </span>
                          <p className="text-[#f0f4f8] text-sm font-mono leading-relaxed">
                            {header.whatToLook}
                          </p>
                        </div>
                      </div>
                      {header.examples && header.examples.length > 0 && (
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <ImageIcon className="w-3.5 h-3.5 text-[#f59e0b]" />
                            <span className="text-[#f59e0b] text-xs font-mono uppercase tracking-wider">
                              Examples
                            </span>
                          </div>
                          <ScreenshotGallery images={header.examples} />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Desktop vs Mobile Tabs */}
          <section>
            <div className="flex items-center gap-2 text-[#22d3ee] text-xs font-mono mb-4 uppercase tracking-widest">
              <Shield className="w-3.5 h-3.5" />
              Platform Guide
            </div>
            <h2 className="text-2xl font-bold text-[#f0f4f8] font-mono mb-2">
              How to Access Email Headers
            </h2>
            <p className="text-[#8899aa] font-mono text-sm mb-8 leading-relaxed max-w-2xl">
              The method for accessing full email headers varies significantly by platform. Desktop email
              clients and webmail on desktop browsers provide full header access. Mobile apps are deliberately
              simplified and hide most forensic data.
            </p>

            <Tabs defaultValue="desktop">
              <TabsList className="bg-[#0d1526] border border-[#1a2d45] p-1 mb-8 w-full sm:w-auto">
                <TabsTrigger
                  value="desktop"
                  className="data-[state=active]:bg-[#22d3ee] data-[state=active]:text-[#060b14] data-[state=inactive]:text-[#8899aa] font-mono text-sm gap-2 px-6"
                >
                  <Monitor className="w-4 h-4" />
                  Desktop
                </TabsTrigger>
                <TabsTrigger
                  value="mobile"
                  className="data-[state=active]:bg-[#22d3ee] data-[state=active]:text-[#060b14] data-[state=inactive]:text-[#8899aa] font-mono text-sm gap-2 px-6"
                >
                  <Smartphone className="w-4 h-4" />
                  Mobile
                </TabsTrigger>
              </TabsList>

              <TabsContent value="desktop">
                <div className="mb-6 bg-[#10b981]/5 border border-[#10b981]/20 rounded-xl p-4 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#10b981] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#10b981] font-mono text-sm font-semibold mb-1">
                      Full Header Access Available
                    </p>
                    <p className="text-[#8899aa] font-mono text-xs leading-relaxed">
                      Desktop email clients and webmail accessed via a desktop browser give you
                      access to the complete set of email headers including SPF/DKIM/DMARC
                      authentication results, full server routing chain, and originating IP address.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {GUIDE_CONTENT.desktopGuides.map((guide, i) => (
                    <Card
                      key={i}
                      className="bg-[#0d1526] border-[#1a2d45] hover:border-[#22d3ee]/20 transition-colors duration-200"
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-2 mb-1">
                          <Monitor className="w-4 h-4 text-[#22d3ee]" />
                          <h3 className="text-[#f0f4f8] font-semibold font-mono text-sm">
                            {guide.client}
                          </h3>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ol className="space-y-2.5 mb-5">
                          {guide.steps.map((step, j) => (
                            <li key={j} className="flex items-start gap-3">
                              <span className="w-5 h-5 rounded flex items-center justify-center bg-[#22d3ee]/10 border border-[#22d3ee]/20 text-[#22d3ee] text-xs font-mono font-bold shrink-0 mt-0.5">
                                {j + 1}
                              </span>
                              <p className="text-[#8899aa] text-sm font-mono leading-relaxed">
                                {step}
                              </p>
                            </li>
                          ))}
                        </ol>
                        {guide.tips && (
                          <div className="bg-[#060b14] border border-[#1a2d45] rounded-lg p-3 mb-5">
                            <span className="text-[#f59e0b] text-xs font-mono font-semibold">
                              Tip:{" "}
                            </span>
                            <span className="text-[#8899aa] text-xs font-mono">
                              {guide.tips}
                            </span>
                          </div>
                        )}
                        {guide.screenshots && guide.screenshots.length > 0 && (
                          <ScreenshotGallery images={guide.screenshots} />
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="mobile">
                <div className="mb-6 bg-[#fb7185]/5 border border-[#fb7185]/20 rounded-xl p-4 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#fb7185] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#fb7185] font-mono text-sm font-semibold mb-1">
                      Limited Header Access on Mobile
                    </p>
                    <p className="text-[#8899aa] font-mono text-xs leading-relaxed">
                      Mobile email apps are designed for simplicity and intentionally hide
                      technical metadata like full headers. This makes forensic analysis
                      significantly harder on mobile. For suspicious emails, forward them
                      to a desktop client for full inspection.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {GUIDE_CONTENT.mobileGuides.map((guide, i) => (
                    <Card
                      key={i}
                      className="bg-[#0d1526] border-[#1a2d45] hover:border-[#fb7185]/20 transition-colors duration-200"
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-2 mb-1">
                          <Smartphone className="w-4 h-4 text-[#f59e0b]" />
                          <h3 className="text-[#f0f4f8] font-semibold font-mono text-sm">
                            {guide.client}
                          </h3>
                        </div>
                        {guide.limitation && (
                          <div className="bg-[#fb7185]/5 border border-[#fb7185]/15 rounded-lg p-2.5 mt-2">
                            <p className="text-[#fda4af] text-xs font-mono leading-relaxed">
                              {guide.limitation}
                            </p>
                          </div>
                        )}
                      </CardHeader>
                      <CardContent>
                        <ol className="space-y-2.5 mb-5">
                          {guide.steps.map((step, j) => (
                            <li key={j} className="flex items-start gap-3">
                              <span className="w-5 h-5 rounded flex items-center justify-center bg-[#f59e0b]/10 border border-[#f59e0b]/20 text-[#f59e0b] text-xs font-mono font-bold shrink-0 mt-0.5">
                                {j + 1}
                              </span>
                              <p className="text-[#8899aa] text-sm font-mono leading-relaxed">
                                {step}
                              </p>
                            </li>
                          ))}
                        </ol>
                        {guide.tips && (
                          <div className="bg-[#060b14] border border-[#1a2d45] rounded-lg p-3 mb-5">
                            <span className="text-[#f59e0b] text-xs font-mono font-semibold">
                              Tip:{" "}
                            </span>
                            <span className="text-[#8899aa] text-xs font-mono">
                              {guide.tips}
                            </span>
                          </div>
                        )}
                        {guide.screenshots && guide.screenshots.length > 0 && (
                          <ScreenshotGallery images={guide.screenshots} />
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </section>

          {/* Comparison Table */}
          <section>
            <div className="flex items-center gap-2 text-[#22d3ee] text-xs font-mono mb-4 uppercase tracking-widest">
              <Monitor className="w-3.5 h-3.5" />
              Comparison
            </div>
            <h2 className="text-2xl font-bold text-[#f0f4f8] font-mono mb-6">
              Desktop vs Mobile: What You Can See
            </h2>
            <div className="bg-[#0d1526] border border-[#1a2d45] rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#1a2d45]">
                      <th className="text-left px-5 py-4 text-[#8899aa] text-xs font-mono uppercase tracking-wider">
                        Feature
                      </th>
                      <th className="px-5 py-4 text-center">
                        <div className="flex items-center justify-center gap-2 text-[#22d3ee] text-xs font-mono uppercase tracking-wider">
                          <Monitor className="w-3.5 h-3.5" />
                          Desktop
                        </div>
                      </th>
                      <th className="px-5 py-4 text-center">
                        <div className="flex items-center justify-center gap-2 text-[#f59e0b] text-xs font-mono uppercase tracking-wider">
                          <Smartphone className="w-3.5 h-3.5" />
                          Mobile
                        </div>
                      </th>
                      <th className="text-left px-5 py-4 text-[#8899aa] text-xs font-mono uppercase tracking-wider hidden lg:table-cell">
                        Notes
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1a2d45]">
                    {GUIDE_CONTENT.mobileVsDesktopComparison.map((row, i) => (
                      <tr
                        key={i}
                        className="hover:bg-[#111f35] transition-colors duration-150"
                      >
                        <td className="px-5 py-3.5 text-[#f0f4f8] text-sm font-mono">
                          {row.feature}
                        </td>
                        <td className="px-5 py-3.5 text-center">
                          {row.desktop === true ? (
                            <CheckCircle className="w-5 h-5 text-[#10b981] mx-auto" />
                          ) : row.desktop === false ? (
                            <XCircle className="w-5 h-5 text-[#fb7185] mx-auto" />
                          ) : (
                            <span className="text-[#f59e0b] text-xs font-mono">
                              Partial
                            </span>
                          )}
                        </td>
                        <td className="px-5 py-3.5 text-center">
                          {row.mobile === true ? (
                            <CheckCircle className="w-5 h-5 text-[#10b981] mx-auto" />
                          ) : row.mobile === false ? (
                            <XCircle className="w-5 h-5 text-[#fb7185] mx-auto" />
                          ) : (
                            <span className="text-[#f59e0b] text-xs font-mono">
                              Partial
                            </span>
                          )}
                        </td>
                        <td className="px-5 py-3.5 text-[#8899aa] text-xs font-mono hidden lg:table-cell">
                          {row.notes}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Quick Checklist */}
          <section>
            <div className="flex items-center gap-2 text-[#22d3ee] text-xs font-mono mb-4 uppercase tracking-widest">
              <CheckCircle className="w-3.5 h-3.5" />
              Quick Reference
            </div>
            <h2 className="text-2xl font-bold text-[#f0f4f8] font-mono mb-2">
              Phishing Email Checklist
            </h2>
            <p className="text-[#8899aa] font-mono text-sm mb-8">
              Use this checklist when you receive a suspicious email. Check each
              item — more unchecked items means higher risk.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
              {GUIDE_CONTENT.quickChecklist.map((item, i) => (
                <button
                  key={i}
                  onClick={() => toggleCheck(i)}
                  className={`flex items-start gap-3 p-4 rounded-xl border text-left transition-all duration-200 ${
                    checklist[i]
                      ? "border-[#10b981]/30 bg-[#10b981]/5"
                      : "border-[#1a2d45] bg-[#0d1526] hover:border-[#22d3ee]/20"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-200 ${
                      checklist[i]
                        ? "bg-[#10b981] border-[#10b981]"
                        : "border-[#1a2d45]"
                    }`}
                  >
                    {checklist[i] && (
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                  <span
                    className={`text-sm font-mono leading-relaxed ${
                      checklist[i] ? "text-[#10b981]" : "text-[#8899aa]"
                    }`}
                  >
                    {item}
                  </span>
                </button>
              ))}
            </div>

            {/* Progress indicator */}
            <div className="bg-[#0d1526] border border-[#1a2d45] rounded-xl p-4 flex items-center gap-4">
              <div className="flex-1 h-2 bg-[#060b14] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#22d3ee] rounded-full transition-all duration-300"
                  style={{
                    width: `${
                      (checkedCount / GUIDE_CONTENT.quickChecklist.length) * 100
                    }%`,
                  }}
                />
              </div>
              <span className="text-[#22d3ee] text-sm font-mono shrink-0">
                {checkedCount} / {GUIDE_CONTENT.quickChecklist.length} verified
              </span>
            </div>
            {checkedCount === GUIDE_CONTENT.quickChecklist.length && (
              <div className="mt-4 bg-[#10b981]/5 border border-[#10b981]/20 rounded-xl p-4 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#10b981]" />
                <span className="text-[#10b981] font-mono text-sm">
                  All checks passed. This email appears to be from a legitimate source. When in doubt, always verify through a separate communication channel.
                </span>
              </div>
            )}
          </section>

          {/* Tools */}
          <section>
            <div className="flex items-center gap-2 text-[#22d3ee] text-xs font-mono mb-4 uppercase tracking-widest">
              <ExternalLink className="w-3.5 h-3.5" />
              Resources
            </div>
            <h2 className="text-2xl font-bold text-[#f0f4f8] font-mono mb-6">
              Forensic Tools & Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {GUIDE_CONTENT.tools.map((tool, i) => (
                <a
                  key={i}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-[#0d1526] border border-[#1a2d45] rounded-xl p-5 hover:border-[#22d3ee]/30 transition-all duration-200 hover:shadow-[0_0_20px_rgba(34,211,238,0.05)]"
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="text-[#f0f4f8] font-semibold font-mono text-sm group-hover:text-[#22d3ee] transition-colors duration-200">
                      {tool.name}
                    </h3>
                    <ExternalLink className="w-3.5 h-3.5 text-[#4a5568] group-hover:text-[#22d3ee] shrink-0 mt-0.5 transition-colors duration-200" />
                  </div>
                  <p className="text-[#8899aa] text-xs font-mono leading-relaxed">
                    {tool.description}
                  </p>
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Guide;
