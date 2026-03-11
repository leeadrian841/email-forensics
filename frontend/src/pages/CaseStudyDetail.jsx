import React, { useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import {
  ArrowLeft,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Flag,
  Terminal,
  Shield,
  Copy,
  ExternalLink,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { CASE_STUDIES } from "../mock";

const severityColor = (severity) => {
  switch (severity) {
    case "Critical":
      return "bg-[#fb7185]/10 text-[#fb7185] border-[#fb7185]/20";
    case "High":
      return "bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/20";
    case "Medium":
      return "bg-[#22d3ee]/10 text-[#22d3ee] border-[#22d3ee]/20";
    default:
      return "bg-[#8899aa]/10 text-[#8899aa] border-[#8899aa]/20";
  }
};

const flagSeverityStyles = {
  Critical: "border-l-[#fb7185] bg-[#fb7185]/5",
  High: "border-l-[#f59e0b] bg-[#f59e0b]/5",
  Medium: "border-l-[#22d3ee] bg-[#22d3ee]/5",
};

const flagTextColor = {
  Critical: "text-[#fb7185]",
  High: "text-[#f59e0b]",
  Medium: "text-[#22d3ee]",
};

const CaseStudyDetail = () => {
  const { id } = useParams();
  const [copiedHeader, setCopiedHeader] = useState(null);
  const [expandedAnalysis, setExpandedAnalysis] = useState(null);

  const caseStudy = CASE_STUDIES.find((c) => c.id === id);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-[#060b14] pt-32 px-6 text-center">
        <Shield className="w-16 h-16 text-[#1a2d45] mx-auto mb-6" />
        <h1 className="text-2xl font-bold text-[#f0f4f8] font-mono mb-4">
          Case Not Found
        </h1>
        <p className="text-[#8899aa] font-mono mb-8">
          The case study you&apos;re looking for doesn&apos;t exist.
        </p>
        <NavLink
          to="/case-studies"
          className="inline-flex items-center gap-2 text-[#22d3ee] font-mono text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back to all cases
        </NavLink>
      </div>
    );
  }

  const copyToClipboard = (value, key) => {
    navigator.clipboard.writeText(value).then(() => {
      setCopiedHeader(key);
      setTimeout(() => setCopiedHeader(null), 2000);
    });
  };

  const flaggedCount = caseStudy.emailHeaders.filter((h) => h.flagged).length;

  return (
    <div className="min-h-screen bg-[#060b14] pt-24 pb-20">
      {/* Back nav */}
      <div className="px-6 lg:px-8 mb-8">
        <div className="max-w-5xl mx-auto">
          <NavLink
            to="/case-studies"
            className="inline-flex items-center gap-2 text-[#8899aa] hover:text-[#22d3ee] font-mono text-sm transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Case Studies
          </NavLink>
        </div>
      </div>

      <div className="px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header section */}
          <div className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <div
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono border ${severityColor(caseStudy.severity)}`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                {caseStudy.severity} Severity
              </div>
              <span className="text-xs font-mono text-[#8899aa] bg-[#111f35] border border-[#1a2d45] px-2.5 py-1 rounded-full">
                {caseStudy.category}
              </span>
              <span className="text-xs font-mono text-[#22d3ee] bg-[#22d3ee]/5 border border-[#22d3ee]/20 px-2.5 py-1 rounded-full">
                {caseStudy.verdict}
              </span>
              <span className="text-[#4a5568] text-xs font-mono ml-auto">
                {caseStudy.date}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-[#f0f4f8] font-mono mb-3">
              {caseStudy.title}
            </h1>
            <p className="text-[#8899aa] text-lg font-mono mb-6">
              {caseStudy.subtitle}
            </p>

            {/* TL;DR */}
            <div className="bg-[#0d1526] border border-[#22d3ee]/20 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <Terminal className="w-4 h-4 text-[#22d3ee]" />
                <span className="text-[#22d3ee] text-xs font-mono uppercase tracking-wider">
                  TL;DR Summary
                </span>
              </div>
              <p className="text-[#f0f4f8] font-mono text-sm leading-relaxed">
                {caseStudy.tldr}
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {caseStudy.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-[#111f35] text-[#8899aa] border border-[#1a2d45]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Email Headers */}
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-[#f0f4f8] font-mono flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-[#22d3ee]" />
                    Email Headers
                  </h2>
                  <span className="text-xs font-mono text-[#fb7185]">
                    {flaggedCount} flagged headers
                  </span>
                </div>

                <div className="bg-[#030712] rounded-xl border border-[#1a2d45] overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#1a2d45] bg-[#0d1526]">
                    <div className="w-3 h-3 rounded-full bg-[#fb7185]" />
                    <div className="w-3 h-3 rounded-full bg-[#f59e0b]" />
                    <div className="w-3 h-3 rounded-full bg-[#22d3ee]" />
                    <span className="text-[#4a5568] text-xs font-mono ml-2">
                      raw_headers.txt
                    </span>
                  </div>
                  <div className="divide-y divide-[#0d1526]">
                    {caseStudy.emailHeaders.map((header) => (
                      <div
                        key={header.key}
                        className={`group flex items-start gap-0 px-4 py-3 hover:bg-[#0d1526]/50 transition-colors duration-150 ${
                          header.flagged ? "bg-[#fb7185]/3" : ""
                        }`}
                      >
                        <div className="w-44 flex-shrink-0 flex items-center gap-2">
                          {header.flagged ? (
                            <AlertTriangle className="w-3 h-3 text-[#fb7185] flex-shrink-0" />
                          ) : (
                            <span className="w-3 h-3 flex-shrink-0" />
                          )}
                          <span
                            className={`text-xs font-mono font-semibold ${
                              header.flagged
                                ? "text-[#fb7185]"
                                : "text-[#22d3ee]"
                            }`}
                          >
                            {header.key}:
                          </span>
                        </div>
                        <span
                          className={`text-xs font-mono flex-1 break-all leading-relaxed ${
                            header.flagged ? "text-[#fda4af]" : "text-[#8899aa]"
                          }`}
                        >
                          {header.value}
                        </span>
                        <button
                          onClick={() =>
                            copyToClipboard(header.value, header.key)
                          }
                          className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-150 text-[#4a5568] hover:text-[#22d3ee]"
                          title="Copy value"
                        >
                          {copiedHeader === header.key ? (
                            <CheckCircle className="w-3.5 h-3.5 text-[#22d3ee]" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Red Flags */}
              <section>
                <h2 className="text-xl font-bold text-[#f0f4f8] font-mono flex items-center gap-2 mb-4">
                  <Flag className="w-5 h-5 text-[#fb7185]" />
                  Red Flags Identified
                </h2>
                <div className="space-y-3">
                  {caseStudy.redFlags.map((rf, i) => (
                    <div
                      key={i}
                      className={`border-l-4 pl-4 py-3 pr-4 rounded-r-lg ${flagSeverityStyles[rf.severity] || "border-l-[#8899aa] bg-[#8899aa]/5"}`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-[#f0f4f8] text-sm font-mono leading-relaxed">
                          {rf.flag}
                        </p>
                        <span
                          className={`flex-shrink-0 text-xs font-mono font-semibold ${flagTextColor[rf.severity] || "text-[#8899aa]"}`}
                        >
                          {rf.severity}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Analysis Steps */}
              <section>
                <h2 className="text-xl font-bold text-[#f0f4f8] font-mono flex items-center gap-2 mb-4">
                  <Shield className="w-5 h-5 text-[#22d3ee]" />
                  Forensic Analysis
                </h2>
                <div className="space-y-3">
                  {caseStudy.analysis.map((step, i) => (
                    <div
                      key={i}
                      className="bg-[#0d1526] border border-[#1a2d45] rounded-xl overflow-hidden"
                    >
                      <button
                        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-[#111f35] transition-colors duration-150"
                        onClick={() =>
                          setExpandedAnalysis(expandedAnalysis === i ? null : i)
                        }
                      >
                        <span className="text-[#f0f4f8] font-semibold font-mono text-sm">
                          {step.step}
                        </span>
                        {expandedAnalysis === i ? (
                          <ChevronUp className="w-4 h-4 text-[#22d3ee] flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-[#4a5568] flex-shrink-0" />
                        )}
                      </button>
                      {expandedAnalysis === i && (
                        <div className="px-5 pb-5 border-t border-[#1a2d45]">
                          <p className="text-[#8899aa] text-sm leading-relaxed pt-4 font-mono">
                            {step.content}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Recommendations */}
              <section>
                <h2 className="text-xl font-bold text-[#f0f4f8] font-mono flex items-center gap-2 mb-4">
                  <CheckCircle className="w-5 h-5 text-[#10b981]" />
                  Recommendations
                </h2>
                <div className="bg-[#0d1526] border border-[#1a2d45] rounded-xl p-5 space-y-3">
                  {caseStudy.recommendations.map((rec, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-[#10b981] text-xs font-mono font-bold">
                          {i + 1}
                        </span>
                      </div>
                      <p className="text-[#8899aa] text-sm font-mono leading-relaxed">
                        {rec}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Summary card */}
              <Card className="bg-[#0d1526] border-[#1a2d45]">
                <CardHeader className="pb-2">
                  <h3 className="text-[#f0f4f8] font-semibold font-mono text-sm">
                    Case Summary
                  </h3>
                </CardHeader>
                <CardContent className="space-y-3 text-xs font-mono">
                  <div>
                    <span className="text-[#4a5568] block mb-1">Verdict</span>
                    <span className="text-[#22d3ee]">{caseStudy.verdict}</span>
                  </div>
                  <div>
                    <span className="text-[#4a5568] block mb-1">Category</span>
                    <span className="text-[#f0f4f8]">{caseStudy.category}</span>
                  </div>
                  <div>
                    <span className="text-[#4a5568] block mb-1">Date</span>
                    <span className="text-[#f0f4f8]">{caseStudy.date}</span>
                  </div>
                  <div>
                    <span className="text-[#4a5568] block mb-1">Flagged Headers</span>
                    <span className="text-[#fb7185]">{flaggedCount} of {caseStudy.emailHeaders.length}</span>
                  </div>
                  <div>
                    <span className="text-[#4a5568] block mb-1">Red Flags</span>
                    <span className="text-[#fb7185]">{caseStudy.redFlags.length} identified</span>
                  </div>
                </CardContent>
              </Card>

              {/* Techniques */}
              <Card className="bg-[#0d1526] border-[#1a2d45]">
                <CardHeader className="pb-2">
                  <h3 className="text-[#f0f4f8] font-semibold font-mono text-sm">
                    Attack Techniques
                  </h3>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1.5">
                    {caseStudy.techniques.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 rounded text-xs font-mono bg-[#111f35] text-[#8899aa] border border-[#1a2d45]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* IOCs */}
              <Card className="bg-[#0d1526] border-[#1a2d45]">
                <CardHeader className="pb-2">
                  <h3 className="text-[#f0f4f8] font-semibold font-mono text-sm flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-[#fb7185]" />
                    Indicators of Compromise
                  </h3>
                </CardHeader>
                <CardContent className="space-y-2">
                  {caseStudy.iocs.map((ioc, i) => (
                    <div key={i} className="bg-[#060b14] rounded-lg p-3">
                      <span className="text-[#4a5568] text-xs font-mono block mb-1">
                        {ioc.type}
                      </span>
                      <span className="text-[#fb7185] text-xs font-mono break-all">
                        {ioc.value}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Navigate */}
              <NavLink
                to="/case-studies"
                className="flex items-center gap-2 text-[#8899aa] hover:text-[#22d3ee] font-mono text-sm transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4" /> All Case Studies
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail;
