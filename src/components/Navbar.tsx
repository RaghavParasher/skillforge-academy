"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Sparkles, Calculator, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Programs", href: "#programs" },
    { name: "ROI Engine", href: "#roi-calculator" },
    { name: "AI Analytics", href: "#about" },
    { name: "Enterprise FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 py-3.5 shadow-2xl shadow-black/60" : "bg-transparent py-6"
      )}
    >
      <div className="container-custom flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 text-slate-950 p-1.5 rounded-xl font-black text-xl px-2.5 shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-transform">
            S
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-2xl tracking-tight text-white flex items-center gap-1.5">
              SkillForge <span className="text-xs font-mono font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 px-2 py-0.5 rounded-full border border-cyan-500/30">AI Platform</span>
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-1.5"
            >
              {link.name === "ROI Engine" && <Calculator size={14} className="text-cyan-400" />}
              {link.name}
            </Link>
          ))}
          <a
            href="#contact"
            className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 transition-all flex items-center gap-2 active:scale-95"
          >
            <Sparkles size={14} /> Calculate ROI
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-2xl absolute top-full left-0 w-full border-b border-slate-800 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-slate-300 hover:text-cyan-400 py-2.5 border-b border-slate-900 flex items-center justify-between"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
                <ArrowRight size={16} className="text-slate-600" />
              </Link>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3.5 rounded-xl text-center font-bold mt-2 shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2"
            >
              <Sparkles size={16} /> Calculate Custom ROI
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
