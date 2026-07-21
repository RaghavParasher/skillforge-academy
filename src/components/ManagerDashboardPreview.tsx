"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart3, Users, Award, Zap, ShieldCheck, Download, Terminal, CheckCircle, Activity, Sparkles } from "lucide-react";

type DashboardTab = "competency" | "cohorts" | "velocity";

const ManagerDashboardPreview = () => {
  const [activeTab, setActiveTab] = useState<DashboardTab>("competency");

  const competencyData = [
    { skill: "LLM Agent Architecture & RAG Pipelines", before: 34, after: 94, category: "AI Engineering" },
    { skill: "Distributed Kubernetes Cluster Scaling", before: 48, after: 91, category: "Cloud & DevOps" },
    { skill: "Vector Database Indexing & Search", before: 22, after: 88, category: "Data Infrastructure" },
    { skill: "Zero-Trust Cloud Security Hardening", before: 55, after: 96, category: "Cybersecurity" },
    { skill: "Automated MLOps & Model Retraining", before: 40, after: 89, category: "Machine Learning" }
  ];

  return (
    <section className="section-padding relative overflow-hidden bg-slate-950/60 border-y border-slate-800/80">
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-custom">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-4"
            >
              <Activity size={14} className="animate-pulse" /> SkillForge Analytics & Governance Engine
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Real-Time <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400">Workforce Intelligence</span>
            </h2>
            <p className="text-lg text-text-muted mt-4">
              Give your CTO and engineering leaders total visibility into skill benchmarks, cohort velocity, and verified enterprise certification progress.
            </p>
          </div>

          <div className="flex gap-2 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800 self-start lg:self-auto">
            <button
              onClick={() => setActiveTab("competency")}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === "competency"
                  ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <BarChart3 size={15} /> Competency Matrix
            </button>
            <button
              onClick={() => setActiveTab("cohorts")}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === "cohorts"
                  ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Users size={15} /> Cohort Engagement
            </button>
            <button
              onClick={() => setActiveTab("velocity")}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === "velocity"
                  ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Zap size={15} /> ROI Velocity
            </button>
          </div>
        </div>

        {/* Interactive Dashboard Window */}
        <div className="glass-morphism rounded-3xl border border-slate-800 shadow-2xl overflow-hidden">
          {/* Top Window Bar */}
          <div className="bg-slate-900/90 px-6 py-4 border-b border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs font-mono text-slate-400 ml-3">
                skillforge-governance-dashboard.enterprise.internal
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> Live Sync Active
              </span>
              <span className="hidden sm:inline bg-slate-800 px-3 py-1 rounded-md text-slate-300">
                Cohort: Q3-AI-Enterprise
              </span>
            </div>
          </div>

          <div className="p-6 md:p-10">
            <AnimatePresence mode="wait">
              {activeTab === "competency" && (
                <motion.div
                  key="competency"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-8"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800/60">
                    <div>
                      <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        Before vs. After Upskilling Competency Benchmarks
                      </h3>
                      <p className="text-sm text-text-muted mt-0.5">
                        Verified via live coding labs and automated architectural code reviews.
                      </p>
                    </div>
                    <div className="flex items-center gap-6 text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-sm bg-slate-700 inline-block" />
                        <span className="text-slate-400">Before Baseline</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-sm bg-gradient-to-r from-cyan-400 to-emerald-400 inline-block" />
                        <span className="text-slate-200">After SkillForge Certification</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {competencyData.map((item, idx) => (
                      <div key={item.skill} className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                          <div className="flex items-center gap-3">
                            <span className="text-xs font-mono px-2 py-0.5 bg-slate-800 text-slate-300 rounded border border-slate-700">
                              {item.category}
                            </span>
                            <span className="font-semibold text-slate-200">{item.skill}</span>
                          </div>
                          <div className="flex items-center gap-4 font-mono text-xs">
                            <span className="text-slate-400">Before: {item.before}%</span>
                            <span className="text-emerald-400 font-bold">After: {item.after}%</span>
                            <span className="bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 font-bold">
                              +{item.after - item.before}% Gain
                            </span>
                          </div>
                        </div>

                        {/* Double Progress Bar */}
                        <div className="h-4 bg-slate-900 rounded-lg overflow-hidden border border-slate-800 relative flex flex-col justify-center">
                          {/* After Bar (Full) */}
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.after}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            className="h-full bg-gradient-to-r from-cyan-500 via-emerald-500 to-cyan-400 relative rounded-r-md"
                          />
                          {/* Before Bar overlay marker */}
                          <div
                            style={{ left: `${item.before}%` }}
                            className="absolute top-0 bottom-0 w-1 bg-slate-400 z-10 shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-5 h-5 text-cyan-400 shrink-0" />
                      <p className="text-xs text-slate-300 leading-relaxed">
                        <span className="font-bold text-white">AI Engine Summary:</span> Overall technical competency across all 5 active cohorts has increased by <span className="text-emerald-400 font-bold">+52%</span> within the first 6 weeks of deployment.
                      </p>
                    </div>
                    <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono font-semibold rounded-xl border border-slate-700 flex items-center gap-2 shrink-0 transition-all">
                      <Download size={14} /> Export Audit PDF
                    </button>
                  </div>
                </motion.div>
              )}

              {activeTab === "cohorts" && (
                <motion.div
                  key="cohorts"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="grid md:grid-cols-3 gap-6"
                >
                  <div className="glass-card p-6 rounded-2xl space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">Active Cohort 1</span>
                      <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-xs font-mono rounded-full border border-emerald-500/20">
                        94% Active
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white">GenAI Engineering Lead Track</h4>
                    <p className="text-xs text-text-muted leading-relaxed">
                      42 Senior Backend Engineers completing week 6: Custom RAG Architecture and Vector DB sharding.
                    </p>
                    <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-400">Labs Completed:</span>
                      <span className="text-cyan-400 font-bold">18 / 24</span>
                    </div>
                  </div>

                  <div className="glass-card p-6 rounded-2xl space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono uppercase tracking-wider text-violet-400">Active Cohort 2</span>
                      <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-xs font-mono rounded-full border border-emerald-500/20">
                        88% Active
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white">Multi-Cloud Kubernetes Specialist</h4>
                    <p className="text-xs text-text-muted leading-relaxed">
                      28 DevOps Engineers mastering zero-downtime service mesh deployments across AWS & GCP.
                    </p>
                    <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-400">Labs Completed:</span>
                      <span className="text-violet-400 font-bold">14 / 20</span>
                    </div>
                  </div>

                  <div className="glass-card p-6 rounded-2xl space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono uppercase tracking-wider text-amber-400">Certifications</span>
                      <Award className="w-4 h-4 text-amber-400" />
                    </div>
                    <h4 className="text-lg font-bold text-white">Verified Credentials Issued</h4>
                    <div className="text-3xl font-black font-mono text-white">124 Badges</div>
                    <p className="text-xs text-text-muted">
                      Every badge is cryptographically verified on-chain with linked GitHub repository capstones.
                    </p>
                    <div className="pt-2 border-t border-slate-800/80 flex items-center gap-2 text-xs font-mono text-emerald-400">
                      <CheckCircle size={14} /> 100% Industry Recognized
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "velocity" && (
                <motion.div
                  key="velocity"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="grid md:grid-cols-2 gap-8 items-center"
                >
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white">
                      Measurable Engineering Velocity Improvement
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed">
                      SkillForge doesn't just teach theory; we track how fast your engineering pods ship code before and after program completion.
                    </p>

                    <div className="space-y-4">
                      <div className="bg-slate-900/70 p-4 rounded-xl border border-slate-800 flex items-center justify-between">
                        <div>
                          <div className="text-xs text-text-muted font-mono">AI Feature Delivery Time</div>
                          <div className="text-lg font-bold text-white mt-0.5">8.2 Weeks &rarr; 1.8 Weeks</div>
                        </div>
                        <span className="text-2xl font-black font-mono text-cyan-400">-78% Time</span>
                      </div>

                      <div className="bg-slate-900/70 p-4 rounded-xl border border-slate-800 flex items-center justify-between">
                        <div>
                          <div className="text-xs text-text-muted font-mono">Code Review Cycle & Bug Rate</div>
                          <div className="text-lg font-bold text-white mt-0.5">4.2 Days &rarr; 1.1 Days</div>
                        </div>
                        <span className="text-2xl font-black font-mono text-emerald-400">-74% Cycle</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 font-mono text-xs space-y-3">
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-800 text-slate-400">
                      <Terminal size={14} className="text-cyan-400" /> Terminal: skillforge-metrics-agent
                    </div>
                    <div className="text-emerald-400">[08:42:12] INFO: Connecting to Jira & GitHub organization hooks...</div>
                    <div className="text-slate-300">[08:42:14] SUCCESS: Analyzed 1,420 pull requests across 4 engineering teams.</div>
                    <div className="text-cyan-300">[08:42:15] METRIC: Average PR approval speed up by 3.2x post-training.</div>
                    <div className="text-amber-300">[08:42:16] METRIC: Zero critical CVE vulnerabilities introduced in last 60 days.</div>
                    <div className="pt-2 text-slate-500">// Automated telemetry synced directly to Executive Dashboard.</div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagerDashboardPreview;
