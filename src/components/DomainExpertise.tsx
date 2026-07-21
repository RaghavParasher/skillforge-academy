"use client";

import React from "react";
import { motion } from "framer-motion";
import { Database, BrainCircuit, Code, LineChart, Cpu, Cloud } from "lucide-react";

const domains = [
  { name: "Generative AI & LLMs", icon: BrainCircuit, count: "48+ Enterprise Labs", color: "text-cyan-400", border: "hover:border-cyan-500/40" },
  { name: "Cloud Native & Kubernetes", icon: Cloud, count: "36+ DevOps Tracks", color: "text-violet-400", border: "hover:border-violet-500/40" },
  { name: "Data Engineering & Spark", icon: Database, count: "42+ Pipeline Labs", color: "text-emerald-400", border: "hover:border-emerald-500/40" },
  { name: "Full Stack Microservices", icon: Code, count: "55+ Architecture Labs", color: "text-blue-400", border: "hover:border-blue-500/40" },
  { name: "Zero-Trust Cybersecurity", icon: Cpu, count: "28+ Hardening Labs", color: "text-amber-400", border: "hover:border-amber-500/40" },
  { name: "AI Technical Leadership", icon: LineChart, count: "24+ Executive Tracks", color: "text-rose-400", border: "hover:border-rose-500/40" },
];

const DomainExpertise = () => {
  return (
    <section className="section-padding bg-slate-950/60 border-t border-slate-800/80">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Domain Expertise</span>
            </h2>
            <p className="text-lg text-text-muted">
              Deep-dive into mission-critical engineering fields with curriculum developed and audited by principal architects from tier-1 technology leaders.
            </p>
          </div>
          <a href="#programs" className="text-cyan-400 font-mono text-sm font-bold flex items-center gap-2 hover:text-cyan-300 transition-colors">
            Explore All 230+ Labs &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {domains.map((domain, index) => (
            <motion.div
              key={domain.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`flex flex-col items-center text-center p-6 rounded-2xl glass-card border border-slate-800/80 ${domain.border} transition-all cursor-pointer group`}
            >
              <div className={`w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center ${domain.color} mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                <domain.icon size={32} strokeWidth={1.5} />
              </div>
              <h4 className="font-bold text-white text-sm mb-1">{domain.name}</h4>
              <p className="text-xs font-mono text-text-muted mt-1">{domain.count}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainExpertise;
