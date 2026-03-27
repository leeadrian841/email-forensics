// -----------------------------------------------------------------------------
// Home.jsx — Landing page
//
// Displays: hero section, certifications, featured case studies,
// "What is Email Forensics?" section, skills, and CTA.
//
// Content source: ANALYST_INFO and CASE_STUDIES from mock.js
// To edit: update ANALYST_INFO (name, bio, certs, skills) and
//          CASE_STUDIES (featured cases are the first 3 entries) in mock.js.
// -----------------------------------------------------------------------------
import React from "react";
import { NavLink } from "react-router-dom";
import {
  Shield,
  AlertTriangle,
  Search,
  ChevronRight,
  Mail,
  Eye,
  Lock,
  Flag,
  Activity,
  Terminal,
  BookOpen,
  ArrowRight,
  Award,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { ANALYST_INFO, CASE_STUDIES } from "../mock";

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

const Home = () => {
  const featuredCases = CASE_STUDIES.slice(0, 3);

  return (
    <div className="min-h-screen bg-[#060b14]">
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 lg:px-8 overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(26,45,69,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(26,45,69,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Glow effect */}
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#22d3ee]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-3xl">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#22d3ee]/20 bg-[#22d3ee]/5 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#22d3ee] animate-pulse" />
              <span className="text-[#22d3ee] text-xs font-mono">
                Forensics Portfolio &mdash; Active Research
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#f0f4f8] leading-tight mb-6 font-mono">
              Email{" "}
              <span className="text-[#22d3ee]">Forensics</span>
              <br />
              <span className="text-[#8899aa] text-3xl sm:text-4xl lg:text-5xl font-normal">
                Dissecting Digital Deception
              </span>
            </h1>

            <p className="text-[#8899aa] text-lg leading-relaxed mb-10 max-w-2xl">
              {ANALYST_INFO.tagline}. This portfolio documents real-world
              phishing investigations, case studies, and guides to help users
              identify malicious emails across all platforms.
            </p>

            <div className="flex flex-wrap gap-4">
              <NavLink
                to="/case-studies"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#22d3ee] text-[#060b14] font-semibold text-sm hover:bg-[#38bdf8] transition-colors duration-200 font-mono"
              >
                <Search className="w-4 h-4" />
                Explore Cases
                <ChevronRight className="w-4 h-4" />
              </NavLink>
              <NavLink
                to="/guide"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#1a2d45] text-[#8899aa] hover:text-[#f0f4f8] hover:border-[#22d3ee]/30 hover:bg-[#0d1526] transition-colors duration-200 font-mono text-sm"
              >
                <BookOpen className="w-4 h-4" />
                Read the Guide
              </NavLink>
            </div>
          </div>

          {/* Certifications */}
          {ANALYST_INFO.certs && ANALYST_INFO.certs.length > 0 && (
            <div className="mt-20">
              <div className="flex items-center gap-2 text-[#22d3ee] text-xs font-mono mb-5 uppercase tracking-widest">
                <Award className="w-3.5 h-3.5" />
                Certifications
              </div>
              <div className="flex flex-wrap gap-4">
                {ANALYST_INFO.certs.map((cert) => (
                  <div
                    key={cert.name}
                    className="flex items-center gap-3 px-5 py-4 rounded-xl border border-[#22d3ee]/20 bg-[#22d3ee]/5 hover:bg-[#22d3ee]/10 transition-colors duration-200"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#22d3ee]/10 border border-[#22d3ee]/20 flex items-center justify-center shrink-0">
                      <Award className="w-4 h-4 text-[#22d3ee]" />
                    </div>
                    <div>
                      <p className="text-[#f0f4f8] font-semibold font-mono text-sm">
                        {cert.name}
                      </p>
                      <p className="text-[#8899aa] font-mono text-xs mt-0.5">
                        {cert.issuer} &middot; {cert.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 px-6 lg:px-8 border-t border-[#1a2d45]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-2 text-[#22d3ee] text-xs font-mono mb-3 uppercase tracking-widest">
                <Activity className="w-3.5 h-3.5" />
                Recent Investigations
              </div>
              <h2 className="text-3xl font-bold text-[#f0f4f8] font-mono">
                Featured Case Studies
              </h2>
            </div>
            <NavLink
              to="/case-studies"
              className="hidden sm:flex items-center gap-2 text-[#22d3ee] text-sm font-mono hover:gap-3 transition-all duration-200"
            >
              View all cases <ArrowRight className="w-4 h-4" />
            </NavLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCases.map((caseStudy) => (
              <NavLink
                key={caseStudy.id}
                to={`/case-studies/${caseStudy.id}`}
                className="group block"
              >
                <Card className="h-full bg-[#0d1526] border-[#1a2d45] hover:border-[#22d3ee]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.05)]">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono border ${severityColor(caseStudy.severity)}`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-current" />
                        {caseStudy.severity}
                      </div>
                      <span className="text-[#4a5568] text-xs font-mono">
                        {caseStudy.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[#22d3ee] mb-2">
                      {categoryIcon(caseStudy.category)}
                      <span className="text-xs font-mono text-[#8899aa]">
                        {caseStudy.category}
                      </span>
                    </div>
                    <h3 className="text-[#f0f4f8] font-bold text-base group-hover:text-[#22d3ee] transition-colors duration-200 font-mono">
                      {caseStudy.title}
                    </h3>
                    <p className="text-[#8899aa] text-xs font-mono">
                      {caseStudy.subtitle}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#8899aa] text-sm leading-relaxed mb-4 line-clamp-3">
                      {caseStudy.summary}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {caseStudy.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-xs font-mono bg-[#111f35] text-[#8899aa] border border-[#1a2d45]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 text-[#22d3ee] text-xs font-mono group-hover:gap-2.5 transition-all duration-200">
                      Read full analysis <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </CardContent>
                </Card>
              </NavLink>
            ))}
          </div>

          <div className="mt-6 sm:hidden">
            <NavLink
              to="/case-studies"
              className="flex items-center justify-center gap-2 text-[#22d3ee] text-sm font-mono"
            >
              View all cases <ArrowRight className="w-4 h-4" />
            </NavLink>
          </div>
        </div>
      </section>

      {/* What is Email Forensics */}
      <section className="py-20 px-6 lg:px-8 bg-[#040912] border-y border-[#1a2d45]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 text-[#22d3ee] text-xs font-mono mb-4 uppercase tracking-widest">
                <Terminal className="w-3.5 h-3.5" />
                About This Portfolio
              </div>
              <h2 className="text-3xl font-bold text-[#f0f4f8] font-mono mb-6">
                What is Email Forensics?
              </h2>
              <p className="text-[#8899aa] leading-relaxed mb-6">
                Email forensics is the process of examining email messages to
                identify their true origin, detect manipulation, and determine
                whether they are malicious. It involves analyzing technical
                metadata in email headers that most users never see.
              </p>
              <p className="text-[#8899aa] leading-relaxed mb-8">
                This portfolio documents real-world phishing and scam campaigns
                I&apos;ve investigated, along with detailed technical analysis
                of how these attacks work and how to identify them.
              </p>
              <NavLink
                to="/guide"
                className="inline-flex items-center gap-2 text-[#22d3ee] font-mono text-sm hover:gap-3 transition-all duration-200"
              >
                Learn to identify phishing emails{" "}
                <ArrowRight className="w-4 h-4" />
              </NavLink>
            </div>

            {/* Feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: <Mail className="w-5 h-5" />,
                  title: "Header Analysis",
                  desc: "Decoding From, Received, Authentication-Results and other critical headers",
                },
                {
                  icon: <Shield className="w-5 h-5" />,
                  title: "SPF/DKIM/DMARC",
                  desc: "Understanding email authentication protocols and how attackers bypass them",
                },
                {
                  icon: <Search className="w-5 h-5" />,
                  title: "Domain Forensics",
                  desc: "WHOIS analysis, typosquatting detection, and registrar investigations",
                },
                {
                  icon: <Eye className="w-5 h-5" />,
                  title: "IOC Extraction",
                  desc: "Identifying indicators of compromise from malicious email samples",
                },
                {
                  icon: <Lock className="w-5 h-5" />,
                  title: "Desktop vs Mobile",
                  desc: "Why email inspection differs between platforms and what you can find where",
                },
                {
                  icon: <AlertTriangle className="w-5 h-5" />,
                  title: "Red Flag Patterns",
                  desc: "Common social engineering techniques used in phishing campaigns",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-5 rounded-xl border border-[#1a2d45] bg-[#0d1526] hover:border-[#22d3ee]/20 transition-colors duration-200"
                >
                  <div className="text-[#22d3ee] mb-3">{item.icon}</div>
                  <h3 className="text-[#f0f4f8] font-semibold text-sm font-mono mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-[#8899aa] text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-[#22d3ee] text-xs font-mono mb-4 uppercase tracking-widest">
            <Shield className="w-3.5 h-3.5" />
            Technical Skills
          </div>
          <h2 className="text-3xl font-bold text-[#f0f4f8] font-mono mb-10">
            Areas of Expertise
          </h2>
          <div className="flex flex-wrap gap-3">
            {ANALYST_INFO.skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-lg border border-[#1a2d45] bg-[#0d1526] text-[#8899aa] text-sm font-mono hover:border-[#22d3ee]/30 hover:text-[#22d3ee] transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-8 border-t border-[#1a2d45]">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-2xl border border-[#1a2d45] bg-[#0d1526] p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-64 bg-[#22d3ee]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative max-w-2xl">
              <h2 className="text-3xl font-bold text-[#f0f4f8] font-mono mb-4">
                Not sure if an email is legitimate?
              </h2>
              <p className="text-[#8899aa] leading-relaxed mb-8">
                Read the identification guide to learn how to inspect email
                headers on desktop browsers, understand what to look for, and
                protect yourself from phishing attacks.
              </p>
              <NavLink
                to="/guide"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#22d3ee] text-[#060b14] font-semibold text-sm hover:bg-[#38bdf8] transition-colors duration-200 font-mono"
              >
                <BookOpen className="w-4 h-4" />
                Start the Guide
                <ChevronRight className="w-4 h-4" />
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
