"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles, Terminal, Cpu, ShieldCheck } from "lucide-react";

const Hero = () => {
  const points = [
    "AI-Powered 12-Week Roadmap Generation",
    "On-Chain Verified GitHub Capstone Badges",
    "Live Engineering Velocity & ROI Telemetry",
  ];

  return (
    <section className="relative pt-36 pb-24 md:pt-48 md:pb-36 overflow-hidden bg-[#0B0F19] cyber-grid">
      {/* Radial Glow & Gradient Mesh */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[550px] radial-glow pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-violet-500/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Floating Animated Badges (Desktop) */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="hidden lg:flex absolute top-44 left-16 glass-card px-4 py-2.5 rounded-2xl items-center gap-2.5 border border-cyan-500/30 shadow-lg shadow-cyan-500/10 text-xs font-mono"
      >
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span className="text-slate-300">Agent Deployed:</span>
        <span className="text-cyan-400 font-bold">RAG_Pipeline_v2</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="hidden lg:flex absolute top-56 right-16 glass-card px-4 py-2.5 rounded-2xl items-center gap-2.5 border border-emerald-500/30 shadow-lg shadow-emerald-500/10 text-xs font-mono"
      >
        <CheckCircle2 size={15} className="text-emerald-400" />
        <span className="text-slate-300">PR Review Velocity:</span>
        <span className="text-emerald-400 font-bold">+3.2x Faster</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="hidden lg:flex absolute bottom-24 left-1/4 glass-card px-4 py-2.5 rounded-2xl items-center gap-2.5 border border-violet-500/30 shadow-lg shadow-violet-500/10 text-xs font-mono"
      >
        <Cpu size={15} className="text-violet-400" />
        <span className="text-slate-300">Active Engineers Upskilling:</span>
        <span className="text-violet-300 font-bold">1,420 Pods</span>
      </motion.div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs font-bold tracking-widest text-cyan-400 uppercase bg-cyan-500/10 rounded-full border border-cyan-500/30 shadow-lg shadow-cyan-500/10">
              <Sparkles size={14} className="animate-spin text-cyan-400" style={{ animationDuration: '6s' }} /> Next-Gen Enterprise AI Workforce Engine
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white leading-[1.08] tracking-tight mb-8">
              Transform Your Engineering <br className="hidden sm:inline" />
              Pod into a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-violet-400 relative inline-block">
                High-Velocity AI Force
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-text-muted mb-12 max-w-3xl mx-auto leading-relaxed">
              We don't just stream generic video courses. SkillForge Academy embeds interactive AI coding labs, architectural code reviews, and live ROI telemetry right into your enterprise workflow.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-14"
          >
            <a
              href="#roi-calculator"
              className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl text-base sm:text-lg font-bold hover:from-cyan-400 hover:to-indigo-500 transition-all shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-1 flex items-center justify-center gap-2.5 group"
            >
              <Terminal size={18} /> Launch AI ROI Simulator
              <ArrowRight className="group-hover:translate-x-1.5 transition-transform" />
            </a>
            <a
              href="#programs"
              className="w-full sm:w-auto bg-slate-900/80 text-slate-200 border border-slate-700/80 hover:border-cyan-500/40 px-8 py-4 rounded-2xl text-base sm:text-lg font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
            >
              Explore Curriculum Tracks
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-6 md:gap-10 pt-6 border-t border-slate-800/80 max-w-3xl mx-auto"
          >
            {points.map((point) => (
              <div key={point} className="flex items-center gap-2.5 text-slate-300 text-sm font-medium">
                <CheckCircle2 size={18} className="text-cyan-400 shrink-0" />
                {point}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
