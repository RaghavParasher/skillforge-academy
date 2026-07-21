"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Zap, Target, Users, BarChart3, Globe, Sparkles } from "lucide-react";

const features = [
  {
    title: "On-Chain Capstone Badges",
    description: "Every engineer earns cryptographically verifiable badges tied directly to their GitHub capstone PRs and architectural reviews.",
    icon: Globe,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/20"
  },
  {
    title: "Agile Pod Upskilling",
    description: "Modular 12-week cohorts engineered specifically to fit alongside high-velocity sprint schedules without blocking production.",
    icon: Zap,
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20"
  },
  {
    title: "Live ROI Telemetry",
    description: "Connect our telemetry agent to Jira and GitHub to track real-time pull request velocity and code quality improvements.",
    icon: BarChart3,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20"
  },
  {
    title: "Principal Architect Mentorship",
    description: "Live weekly architectural code reviews conducted by staff engineers and AI experts from tier-1 tech companies.",
    icon: Users,
    color: "text-violet-400",
    bg: "bg-violet-500/10 border-violet-500/20"
  },
  {
    title: "Tailored RAG & LLM Tracks",
    description: "Curriculum custom-built around your organization's exact tech stack, cloud providers, and proprietary datasets.",
    icon: Target,
    color: "text-rose-400",
    bg: "bg-rose-500/10 border-rose-500/20"
  },
  {
    title: "SOC2 & Zero-Trust Security",
    description: "Enterprise-grade isolation and zero-trust sandboxes ensuring your proprietary code models never leave secure boundaries.",
    icon: Shield,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10 border-indigo-500/20"
  }
];

const SkillForgeEdge = () => {
  return (
    <section className="section-padding bg-[#0B0F19] relative">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles size={14} /> Why CTOs Choose SkillForge
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-400">SkillForge Edge</span>
          </h2>
          <p className="text-lg text-text-muted">
            We don't just provide passive lectures; we deploy high-velocity engineering capabilities that permanently transform your organization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-3xl group"
            >
              <div className={`w-14 h-14 ${feature.bg} border rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                <feature.icon size={28} className={feature.color} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">{feature.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillForgeEdge;
