import React from "react";
import Link from "next/link";
import { Sparkles, Terminal, Shield, Cpu } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-12 border-t border-slate-800/80">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand Info */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-6 group">
              <div className="bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 text-slate-950 p-1.5 rounded-xl font-black text-xl px-2.5 shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-transform">
                S
              </div>
              <span className="font-black text-2xl tracking-tight text-white flex items-center gap-1.5">
                SkillForge <span className="text-xs font-mono font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 px-2 py-0.5 rounded-full border border-cyan-500/30">AI Platform</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Empowering enterprise engineering pods with interactive AI labs, principal architect code reviews, and live ROI telemetry. All coding labs run on SOC2 Type II isolated sandboxes.
            </p>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-base font-mono font-bold text-white mb-6 uppercase tracking-wider">Enterprise Tracks</h4>
            <ul className="space-y-3.5 text-sm font-sans text-slate-400">
              <li><Link href="#programs" className="hover:text-cyan-400 transition-colors">Enterprise RAG & Agentic AI</Link></li>
              <li><Link href="#programs" className="hover:text-cyan-400 transition-colors">Zero-Downtime Kubernetes Mesh</Link></li>
              <li><Link href="#programs" className="hover:text-cyan-400 transition-colors">Real-Time Lakehouse & Spark</Link></li>
              <li><Link href="#programs" className="hover:text-cyan-400 transition-colors">Zero-Trust DevSecOps Hardening</Link></li>
              <li><Link href="#programs" className="hover:text-cyan-400 transition-colors">CTO AI Strategy Accelerator</Link></li>
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-base font-mono font-bold text-white mb-6 uppercase tracking-wider">Platform & Telemetry</h4>
            <ul className="space-y-3.5 text-sm font-sans text-slate-400">
              <li><Link href="#roi-calculator" className="hover:text-cyan-400 transition-colors">Interactive ROI Calculator</Link></li>
              <li><Link href="#about" className="hover:text-cyan-400 transition-colors">Governance & Analytics Engine</Link></li>
              <li><Link href="#programs" className="hover:text-cyan-400 transition-colors">On-Chain Verified Badges</Link></li>
              <li><Link href="#faq" className="hover:text-cyan-400 transition-colors">SOC2 Security Sandboxes</Link></li>
              <li><Link href="#contact" className="hover:text-cyan-400 transition-colors">Schedule Technical Audit</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>All enterprise coding labs running securely on SOC2 Type II isolated instances.</span>
          </div>
          <div>
            &copy; {new Date().getFullYear()} SkillForge Academy Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
