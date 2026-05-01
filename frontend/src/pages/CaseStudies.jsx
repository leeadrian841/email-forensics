// -----------------------------------------------------------------------------
// CaseStudies.jsx — Case study list page with search & filters
//
// Displays all entries from the CASE_STUDIES array in case-studies.js as cards.
// Supports filtering by category, severity, and free-text search.
//
// Content source: CASE_STUDIES from case-studies.js
// To add a new case: add an entry to the CASE_STUDIES array in case-studies.js.
// -----------------------------------------------------------------------------
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Search,
  Filter,
  Mail,
  AlertTriangle,
  Flag,
  Shield,
  ArrowRight,
  Calendar,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { CASE_STUDIES } from "../case-studies";

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

const categoryIcon = (category) => {
  switch (category) {
    case "Phishing":
      return <Mail className="w-4 h-4" />;
    case "BEC":
      return <AlertTriangle className="w-4 h-4" />;
    case "Spear Phishing":
      return <Flag className="w-4 h-4" />;
    default:
      return <Shield className="w-4 h-4" />;
  }
};

const ALL_CATEGORIES = ["All", ...new Set(CASE_STUDIES.map((c) => c.category))];
const ALL_SEVERITIES = ["All", "Critical", "High", "Medium", "Low"];

const CaseStudies = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSeverity, setSelectedSeverity] = useState("All");

  const filtered = CASE_STUDIES.filter((c) => {
    const matchSearch =
      c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchCategory =
      selectedCategory === "All" || c.category === selectedCategory;
    const matchSeverity =
      selectedSeverity === "All" || c.severity === selectedSeverity;
    return matchSearch && matchCategory && matchSeverity;
  });

  return (
    <div className="min-h-screen bg-[#060b14] pt-24 pb-20">
      {/* Header */}
      <div className="px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-[#22d3ee] text-xs font-mono mb-4 uppercase tracking-widest">
            <Search className="w-3.5 h-3.5" />
            Forensic Investigations
          </div>
          <h1 className="text-4xl font-bold text-[#f0f4f8] font-mono mb-4">
            Case Studies
          </h1>
          <p className="text-[#8899aa] text-lg max-w-2xl">
            Detailed technical analysis of real-world phishing, scam, and
            business email compromise campaigns.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="px-6 lg:px-8 mb-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4a5568]" />
              <input
                type="text"
                placeholder="Search cases, tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-[#0d1526] border border-[#1a2d45] rounded-lg text-[#f0f4f8] placeholder-[#4a5568] text-sm font-mono focus:outline-hidden focus:border-[#22d3ee]/50 focus:ring-1 focus:ring-[#22d3ee]/20 transition-colors duration-200"
              />
            </div>

            {/* Category filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="w-4 h-4 text-[#4a5568]" />
              {ALL_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-md text-xs font-mono transition-colors duration-200 ${
                    selectedCategory === cat
                      ? "bg-[#22d3ee]/10 text-[#22d3ee] border border-[#22d3ee]/30"
                      : "bg-[#0d1526] text-[#8899aa] border border-[#1a2d45] hover:border-[#22d3ee]/20 hover:text-[#f0f4f8]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Severity filter */}
            <div className="flex items-center gap-2 flex-wrap">
              {["Critical", "High", "Medium"].map((sev) => (
                <button
                  key={sev}
                  onClick={() =>
                    setSelectedSeverity(selectedSeverity === sev ? "All" : sev)
                  }
                  className={`px-3 py-1.5 rounded-md text-xs font-mono transition-colors duration-200 border ${
                    selectedSeverity === sev
                      ? severityColor(sev)
                      : "bg-[#0d1526] text-[#8899aa] border-[#1a2d45] hover:border-[#22d3ee]/20"
                  }`}
                >
                  {sev}
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <p className="text-[#4a5568] text-xs font-mono mt-4">
            Showing {filtered.length} of {CASE_STUDIES.length} cases
          </p>
        </div>
      </div>

      {/* Cases grid */}
      <div className="px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <Shield className="w-12 h-12 text-[#1a2d45] mx-auto mb-4" />
              <p className="text-[#4a5568] font-mono">
                No cases match your filters.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filtered.map((caseStudy) => (
                <NavLink
                  key={caseStudy.id}
                  to={`/case-studies/${caseStudy.id}`}
                  className="group block"
                >
                  <Card className="h-full bg-[#0d1526] border-[#1a2d45] hover:border-[#22d3ee]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.05)]">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono border ${severityColor(caseStudy.severity)}`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-current" />
                          {caseStudy.severity}
                        </div>
                        <div className="flex items-center gap-1.5 text-[#4a5568] text-xs font-mono">
                          <Calendar className="w-3 h-3" />
                          {caseStudy.date}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mb-3">
                        <div className="text-[#22d3ee]">
                          {categoryIcon(caseStudy.category)}
                        </div>
                        <span className="text-xs font-mono text-[#8899aa] bg-[#111f35] border border-[#1a2d45] px-2 py-0.5 rounded">
                          {caseStudy.category}
                        </span>
                        <span className="text-xs font-mono text-[#22d3ee] bg-[#22d3ee]/5 border border-[#22d3ee]/20 px-2 py-0.5 rounded">
                          {caseStudy.verdict}
                        </span>
                      </div>

                      <h3 className="text-[#f0f4f8] font-bold text-lg group-hover:text-[#22d3ee] transition-colors duration-200 font-mono">
                        {caseStudy.title}
                      </h3>
                      <p className="text-[#8899aa] text-sm font-mono">
                        {caseStudy.subtitle}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-[#8899aa] text-sm leading-relaxed mb-5">
                        {caseStudy.summary}
                      </p>

                      {/* TL;DR */}
                      <div className="bg-[#060b14] border border-[#1a2d45] rounded-lg p-3 mb-5">
                        <span className="text-[#22d3ee] text-xs font-mono uppercase tracking-wider">
                          TL;DR &mdash;{" "}
                        </span>
                        <span className="text-[#8899aa] text-xs font-mono">
                          {caseStudy.tldr}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {caseStudy.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded text-xs font-mono bg-[#111f35] text-[#8899aa] border border-[#1a2d45]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-1.5 text-[#22d3ee] text-sm font-mono group-hover:gap-2.5 transition-all duration-200">
                        Read full analysis{" "}
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
