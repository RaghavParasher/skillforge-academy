"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, TrendingUp, Clock, DollarSign, CheckCircle2, ArrowRight, Sparkles, Layers, Cpu, Code2 } from "lucide-react";

type FocusArea = "Generative AI & LLMs" | "Cloud Native Architecture" | "Data Engineering & ML" | "Cybersecurity Defense";
type SkillLevel = "Beginner / Legacy" | "Intermediate" | "Advanced Tech Stack";

const focusAreaIcons: Record<FocusArea, React.ReactNode> = {
  "Generative AI & LLMs": <Cpu className="w-5 h-5 text-cyan-400" />,
  "Cloud Native Architecture": <Layers className="w-5 h-5 text-violet-400" />,
  "Data Engineering & ML": <TrendingUp className="w-5 h-5 text-emerald-400" />,
  "Cybersecurity Defense": <Code2 className="w-5 h-5 text-amber-400" />
};

const ROICalculator = () => {
  const [teamSize, setTeamSize] = useState<number>(50);
  const [focusArea, setFocusArea] = useState<FocusArea>("Generative AI & LLMs");
  const [currentLevel, setCurrentLevel] = useState<SkillLevel>("Beginner / Legacy");

  // Dynamic calculations based on state
  const baseGain = currentLevel === "Beginner / Legacy" ? 38 : currentLevel === "Intermediate" ? 28 : 22;
  const sizeBonus = Math.min(Math.floor(teamSize / 50) * 2, 12);
  const productivityGain = baseGain + sizeBonus;

  const timeSavedMonths = currentLevel === "Beginner / Legacy" ? 5.5 : 3.8;
  const estimatedSavingsAnnual = Math.round(teamSize * 12.4); // in thousands ($k)

  const roadmaps: Record<FocusArea, { stage1: string; stage2: string; stage3: string; tools: string[] }> = {
    "Generative AI & LLMs": {
      stage1: "Prompt Engineering & Foundation LLM Architecture (PyTorch, Transformers)",
      stage2: "RAG Pipelines, Vector DBs & Fine-Tuning Custom Enterprise Models",
      stage3: "Production Agent Deployment, Guardrails & High-Throughput Inference",
      tools: ["LangChain", "PyTorch", "Pinecone", "OpenAI API", "vLLM"]
    },
    "Cloud Native Architecture": {
      stage1: "Microservices & Containerization Mastery (Docker, Kubernetes)",
      stage2: "Multi-Cloud Infrastructure as Code (Terraform, AWS, GCP)",
      stage3: "Zero-Downtime CI/CD, Service Meshes & High Availability",
      tools: ["Kubernetes", "Terraform", "AWS EKS", "ArgoCD", "Prometheus"]
    },
    "Data Engineering & ML": {
      stage1: "Modern Data Stack & Real-Time Stream Processing (Kafka, Spark)",
      stage2: "Feature Stores, Data Warehousing & Automated ETL Pipelines",
      stage3: "MLOps Productionization, Model Monitoring & Automated Retraining",
      tools: ["Apache Spark", "Snowflake", "Kafka", "MLflow", "Airflow"]
    },
    "Cybersecurity Defense": {
      stage1: "Zero-Trust Architecture & Threat Modeling Fundamentals",
      stage2: "Automated Vulnerability Scanning, Pen-Testing & Cloud Hardening",
      stage3: "24/7 Incident Response Playbooks & Compliance Automation",
      tools: ["Splunk", "CrowdStrike", "Vault", "Burp Suite", "AWS Shield"]
    }
  };

  const currentRoadmap = roadmaps[focusArea];

  return (
    <section className="section-padding relative overflow-hidden" id="roi-calculator">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-4"
          >
            <Sparkles size={14} className="animate-pulse" /> Interactive AI ROI & Roadmap Engine
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
            Calculate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-violet-400">Enterprise Impact</span>
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            Adjust the controls below to model how SkillForge Academy accelerates your engineering velocity and generates your tailored 12-week upskilling roadmap.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Controls Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 glass-morphism p-8 rounded-3xl border border-slate-800 space-y-8"
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <h3 className="text-xl font-bold flex items-center gap-2.5 text-slate-100">
                <Calculator className="w-5 h-5 text-cyan-400" /> Training Parameters
              </h3>
              <span className="text-xs text-cyan-400 font-mono bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20">
                Live Simulator
              </span>
            </div>

            {/* Team Size Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold text-slate-300">Engineering Team Size</label>
                <span className="text-xl font-extrabold text-cyan-400 font-mono">{teamSize} Engineers</span>
              </div>
              <input
                type="range"
                min="10"
                max="500"
                step="5"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none"
              />
              <div className="flex justify-between text-xs text-text-muted font-mono">
                <span>10 (Cohort)</span>
                <span>250 (Mid-Size)</span>
                <span>500+ (Enterprise)</span>
              </div>
            </div>

            {/* Focus Area Dropdown / Buttons */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-slate-300 block">Primary Upskilling Track</label>
              <div className="grid grid-cols-1 gap-2.5">
                {(Object.keys(roadmaps) as FocusArea[]).map((area) => (
                  <button
                    key={area}
                    type="button"
                    onClick={() => setFocusArea(area)}
                    className={`p-3.5 rounded-xl border text-left flex items-center justify-between transition-all duration-200 ${
                      focusArea === area
                        ? "bg-cyan-500/15 border-cyan-500 text-white shadow-lg shadow-cyan-500/10"
                        : "bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                    }`}
                  >
                    <span className="flex items-center gap-3 text-sm font-medium">
                      {focusAreaIcons[area]}
                      {area}
                    </span>
                    {focusArea === area && <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Current Skill Level */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-slate-300 block">Current Team Readiness</label>
              <div className="grid grid-cols-3 gap-2">
                {(["Beginner / Legacy", "Intermediate", "Advanced Tech Stack"] as SkillLevel[]).map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setCurrentLevel(lvl)}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                      currentLevel === lvl
                        ? "bg-violet-500/20 border-violet-500 text-white shadow-md shadow-violet-500/10"
                        : "bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700"
                    }`}
                  >
                    {lvl.split(" ")[0]}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Results & Live Roadmap Display */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Top Metrics Row */}
            <div className="grid sm:grid-cols-3 gap-4">
              <motion.div
                key={productivityGain}
                initial={{ scale: 0.95, opacity: 0.8 }}
                animate={{ scale: 1, opacity: 1 }}
                className="glass-card p-6 rounded-3xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all" />
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-3">
                  <TrendingUp size={22} />
                </div>
                <div className="text-3xl font-black text-white font-mono mb-1">
                  +{productivityGain}%
                </div>
                <div className="text-xs font-medium text-text-muted uppercase tracking-wider">
                  Productivity Velocity
                </div>
              </motion.div>

              <motion.div
                key={timeSavedMonths}
                initial={{ scale: 0.95, opacity: 0.8 }}
                animate={{ scale: 1, opacity: 1 }}
                className="glass-card p-6 rounded-3xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all" />
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-3">
                  <Clock size={22} />
                </div>
                <div className="text-3xl font-black text-white font-mono mb-1">
                  {timeSavedMonths} Mo
                </div>
                <div className="text-xs font-medium text-text-muted uppercase tracking-wider">
                  Time-to-Market Saved
                </div>
              </motion.div>

              <motion.div
                key={estimatedSavingsAnnual}
                initial={{ scale: 0.95, opacity: 0.8 }}
                animate={{ scale: 1, opacity: 1 }}
                className="glass-card p-6 rounded-3xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-violet-500/10 rounded-full blur-2xl group-hover:bg-violet-500/20 transition-all" />
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 mb-3">
                  <DollarSign size={22} />
                </div>
                <div className="text-3xl font-black text-white font-mono mb-1">
                  ${estimatedSavingsAnnual}K+
                </div>
                <div className="text-xs font-medium text-text-muted uppercase tracking-wider">
                  Annual ROI Impact
                </div>
              </motion.div>
            </div>

            {/* Dynamic Generated Roadmap Box */}
            <div className="glass-morphism p-8 rounded-3xl border border-slate-800 relative">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800/80 mb-6 gap-2">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                    Generated 12-Week Roadmap
                  </span>
                  <h4 className="text-xl font-extrabold text-white mt-1">
                    {focusArea} Track for {teamSize} Engineers
                  </h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {currentRoadmap.tools.map((t) => (
                    <span key={t} className="px-2.5 py-1 bg-slate-800/80 text-slate-300 text-[11px] font-mono rounded-md border border-slate-700/60">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={focusArea}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Stage 1 */}
                  <div className="flex gap-4 items-start relative pb-6 border-b border-slate-800/50">
                    <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-500 text-cyan-400 font-mono font-bold flex items-center justify-center shrink-0 text-sm mt-0.5 shadow-lg shadow-cyan-500/20">
                      1
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-bold text-white">Stage 1: Foundation & Core Architecture</span>
                        <span className="text-[11px] font-mono px-2 py-0.5 bg-cyan-500/10 text-cyan-400 rounded-full">Weeks 1-3</span>
                      </div>
                      <p className="text-sm text-text-muted">{currentRoadmap.stage1}</p>
                    </div>
                  </div>

                  {/* Stage 2 */}
                  <div className="flex gap-4 items-start relative pb-6 border-b border-slate-800/50">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 font-mono font-bold flex items-center justify-center shrink-0 text-sm mt-0.5 shadow-lg shadow-emerald-500/20">
                      2
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-bold text-white">Stage 2: Applied Labs & Enterprise Pipelines</span>
                        <span className="text-[11px] font-mono px-2 py-0.5 bg-emerald-500/10 text-emerald-400 rounded-full">Weeks 4-8</span>
                      </div>
                      <p className="text-sm text-text-muted">{currentRoadmap.stage2}</p>
                    </div>
                  </div>

                  {/* Stage 3 */}
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-violet-500/20 border border-violet-500 text-violet-400 font-mono font-bold flex items-center justify-center shrink-0 text-sm mt-0.5 shadow-lg shadow-violet-500/20">
                      3
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-bold text-white">Stage 3: Capstone Deployment & Governance</span>
                        <span className="text-[11px] font-mono px-2 py-0.5 bg-violet-500/10 text-violet-400 rounded-full">Weeks 9-12</span>
                      </div>
                      <p className="text-sm text-text-muted">{currentRoadmap.stage3}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-text-muted">
                  Ready to deploy this {focusArea} syllabus for your {teamSize} engineers?
                </span>
                <a
                  href="#contact"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                >
                  Lock in Custom Proposal <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
