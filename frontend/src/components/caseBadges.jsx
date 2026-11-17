// Shared case-study badge styles, used by Home, CaseStudies and CaseStudyDetail.
import React from "react";
import { Mail, AlertTriangle, Flag, Shield } from "lucide-react";

export const severityColor = (severity) => {
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

export const categoryIcon = (category) => {
  switch (category) {
    case "Phishing":
      return <Mail className="w-4 h-4" />;
    case "Business Email Compromise":
      return <AlertTriangle className="w-4 h-4" />;
    case "Spear Phishing":
      return <Flag className="w-4 h-4" />;
    default:
      return <Shield className="w-4 h-4" />;
  }
};
