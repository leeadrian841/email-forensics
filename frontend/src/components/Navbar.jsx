import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Shield, Menu, X, Terminal } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/case-studies", label: "Case Studies" },
    { to: "/guide", label: "Identification Guide" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[#060b14]/95 border-b border-[#1a2d45] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-[#22d3ee]/10 border border-[#22d3ee]/30 flex items-center justify-center group-hover:bg-[#22d3ee]/20 transition-colors duration-200">
              <Shield className="w-5 h-5 text-[#22d3ee]" />
            </div>
            <div>
              <span className="text-[#f0f4f8] font-semibold text-sm font-mono tracking-wide">
                EmailForensics
              </span>
              <span className="text-[#22d3ee] font-mono text-sm">.sh</span>
            </div>
          </NavLink>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 font-mono ${
                    isActive
                      ? "text-[#22d3ee] bg-[#22d3ee]/10"
                      : "text-[#8899aa] hover:text-[#f0f4f8] hover:bg-[#1a2d45]"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Terminal badge */}
          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1a2d45] bg-[#0d1526]">
              <Terminal className="w-3.5 h-3.5 text-[#22d3ee]" />
              <span className="text-[#22d3ee] text-xs font-mono">
                analyst@shell:~$
              </span>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-[#8899aa] hover:text-[#f0f4f8] hover:bg-[#1a2d45] transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#060b14]/98 border-b border-[#1a2d45] backdrop-blur-md">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `block px-4 py-2.5 rounded-md text-sm font-mono transition-colors duration-200 ${
                    isActive
                      ? "text-[#22d3ee] bg-[#22d3ee]/10"
                      : "text-[#8899aa] hover:text-[#f0f4f8] hover:bg-[#1a2d45]"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
