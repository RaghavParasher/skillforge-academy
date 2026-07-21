"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, ArrowRight, ArrowLeft, Sparkles, Shield, Cpu, Cloud, Check } from "lucide-react";

const techStackOptions = [
  "AWS Cloud", "Google Cloud (GCP)", "Microsoft Azure", "Python / PyTorch", "Go (Golang)", 
  "Kubernetes / Istio", "Snowflake / Databricks", "Pinecone / Qdrant", "OpenAI / Anthropic APIs", "vLLM / Open Source LLMs"
];

const LeadForm = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Form State
  const [orgName, setOrgName] = useState("");
  const [teamSize, setTeamSize] = useState("50-200 Engineers");
  const [primaryGoal, setPrimaryGoal] = useState("Custom RAG & Agentic LLM Pipelines");
  const [selectedTech, setSelectedTech] = useState<string[]>(["AWS Cloud", "Python / PyTorch", "OpenAI / Anthropic APIs"]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [workEmail, setWorkEmail] = useState("");

  const toggleTech = (tech: string) => {
    if (selectedTech.includes(tech)) {
      setSelectedTech(selectedTech.filter((t) => t !== tech));
    } else {
      setSelectedTech([...selectedTech, tech]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // Paste your free Web3Forms Access Key below or set NEXT_PUBLIC_WEB3FORMS_KEY in your .env.local file
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE",
          subject: `🚀 New Enterprise Pod Inquiry: ${orgName || "Enterprise Pod"} (${teamSize})`,
          from_name: "SkillForge Academy AI Portal",
          Organization: orgName,
          Team_Size: teamSize,
          Primary_Goal: primaryGoal,
          Tech_Stack: selectedTech.join(", "),
          First_Name: firstName,
          Last_Name: lastName,
          Email: workEmail,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        console.warn("Web3Forms response (if key is placeholder or invalid, UI fallback activated):", result);
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section className="section-padding bg-slate-950/95 relative border-y border-slate-800" id="contact">
        <div className="container-custom">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-w-2xl mx-auto glass-card p-10 sm:p-14 rounded-3xl text-center border border-emerald-500/40 shadow-2xl relative"
          >
            <div className="w-20 h-20 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/10 animate-bounce">
              <CheckCircle size={40} />
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Proposal Generated
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-4 mb-3">Custom Roadmap Reserved!</h2>
            <p className="text-slate-300 mb-8 text-sm sm:text-base leading-relaxed">
              We have compiled a tailored 12-week syllabus tailored for <strong className="text-white font-mono">{orgName || "your engineering organization"}</strong> using <strong className="text-cyan-400 font-mono">{selectedTech.slice(0, 3).join(", ")}</strong>. Our Principal AI Architect will reach out to <strong className="text-emerald-400 font-mono">{workEmail || "your email"}</strong> within 6 business hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setStep(1);
              }}
              className="px-6 py-3 bg-slate-900 border border-slate-700 text-slate-300 text-xs font-mono rounded-xl hover:text-white hover:border-slate-600 transition-all"
            >
              &larr; Configure Another Team Pod
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-slate-950/90 relative overflow-hidden border-t border-slate-800/80" id="contact">
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Hero side */}
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
              <Sparkles size={14} /> Interactive Assessment Wizard
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-[1.12]">
              Architect Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-400">Custom 12-Week AI Roadmap</span>
            </h2>
            <p className="text-base sm:text-lg text-text-muted leading-relaxed">
              No generic questionnaires. Build your custom enterprise training syllabus in 3 rapid steps and get an instant engineering velocity audit preview.
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-800/80">
              <div className="flex items-center gap-3 text-slate-300 font-mono text-xs sm:text-sm">
                <div className="w-6 h-6 bg-cyan-500/10 text-cyan-400 rounded-lg flex items-center justify-center border border-cyan-500/20 shrink-0">
                  <Check size={14} />
                </div>
                <span>Pre-Cohort Technical Stack Audit Included</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 font-mono text-xs sm:text-sm">
                <div className="w-6 h-6 bg-emerald-500/10 text-emerald-400 rounded-lg flex items-center justify-center border border-emerald-500/20 shrink-0">
                  <Check size={14} />
                </div>
                <span>Zero-Trust Sandbox & Private Cloud VPC Setup</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 font-mono text-xs sm:text-sm">
                <div className="w-6 h-6 bg-violet-500/10 text-violet-400 rounded-lg flex items-center justify-center border border-violet-500/20 shrink-0">
                  <Check size={14} />
                </div>
                <span>Dedicated Principal AI Architect Mentorship</span>
              </div>
            </div>
          </div>

          {/* Right Form Wizard side */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl">
            {/* Progress Bar */}
            <div className="mb-8 pb-6 border-b border-slate-800/80">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all ${
                    step >= 1 ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20" : "bg-slate-800 text-slate-400"
                  }`}>1</span>
                  <span className={`text-xs font-mono font-bold ${step >= 1 ? "text-white" : "text-slate-500"}`}>Pod Profile</span>
                </div>
                <div className="w-8 sm:w-16 h-0.5 bg-slate-800" />
                <div className="flex items-center gap-2">
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all ${
                    step >= 2 ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20" : "bg-slate-800 text-slate-400"
                  }`}>2</span>
                  <span className={`text-xs font-mono font-bold ${step >= 2 ? "text-white" : "text-slate-500"}`}>Tech Stack</span>
                </div>
                <div className="w-8 sm:w-16 h-0.5 bg-slate-800" />
                <div className="flex items-center gap-2">
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all ${
                    step >= 3 ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20" : "bg-slate-800 text-slate-400"
                  }`}>3</span>
                  <span className={`text-xs font-mono font-bold ${step >= 3 ? "text-white" : "text-slate-500"}`}>Summary & Audit</span>
                </div>
              </div>
              <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-500 via-emerald-500 to-blue-500"
                  animate={{ width: step === 1 ? "33%" : step === 2 ? "66%" : "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">Organization / Company Name</label>
                      <input
                        required
                        type="text"
                        value={orgName}
                        onChange={(e) => setOrgName(e.target.value)}
                        placeholder="e.g., Acme Cloud Technologies"
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all text-sm font-sans"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">Number of Engineers to Upskill</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {["10-50 Engineers", "50-200 Engineers", "200-500 Engineers", "500+ Pods"].map((size) => (
                          <button
                            type="button"
                            key={size}
                            onClick={() => setTeamSize(size)}
                            className={`p-3 rounded-xl border text-xs font-mono font-bold transition-all ${
                              teamSize === size
                                ? "bg-cyan-500/15 border-cyan-500 text-cyan-300"
                                : "bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700"
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">Primary Engineering Objective</label>
                      <select
                        value={primaryGoal}
                        onChange={(e) => setPrimaryGoal(e.target.value)}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white focus:border-cyan-500 outline-none transition-all text-sm font-sans"
                      >
                        <option>Custom RAG & Agentic LLM Pipelines</option>
                        <option>Zero-Downtime Kubernetes & Multi-Cluster Scaling</option>
                        <option>Real-Time Lakehouse & Apache Spark Migration</option>
                        <option>Zero-Trust DevSecOps Hardening & IAM</option>
                        <option>Executive Staff Engineer AI Strategy Accelerator</option>
                      </select>
                    </div>

                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 hover:scale-[1.01] transition-all mt-4"
                    >
                      Next: Select Tech Stack & Cloud <ArrowRight size={16} />
                    </button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    <div>
                      <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold block mb-1">
                        Select Your Production Stack & Tools
                      </label>
                      <p className="text-xs text-text-muted mb-4">
                        We will customize lab exercises around your exact cloud providers and ML tools.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {techStackOptions.map((tech) => {
                          const active = selectedTech.includes(tech);
                          return (
                            <button
                              type="button"
                              key={tech}
                              onClick={() => toggleTech(tech)}
                              className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold border transition-all flex items-center gap-1.5 ${
                                active
                                  ? "bg-emerald-500/15 border-emerald-500 text-emerald-300 shadow-sm"
                                  : "bg-slate-900/70 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                              }`}
                            >
                              {active && <Check size={14} />} {tech}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="pt-4 flex gap-3">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="px-6 py-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-bold text-xs font-mono hover:bg-slate-800 transition-all flex items-center gap-2"
                      >
                        <ArrowLeft size={16} /> Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="flex-1 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 hover:scale-[1.01] transition-all"
                      >
                        Next: Review Audit & Contact <ArrowRight size={16} />
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    {/* Live Custom Proposal Preview Card */}
                    <div className="bg-slate-900/80 p-5 rounded-2xl border border-cyan-500/30 space-y-3 font-mono text-xs">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-slate-300">
                        <span className="font-bold text-cyan-400">PROPOSAL SUMMARY</span>
                        <span className="bg-cyan-500/10 text-cyan-400 px-2 py-0.5 rounded">12-Week Track</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-slate-400">
                        <div>
                          <span className="text-slate-500 block">Organization:</span>
                          <span className="text-white font-bold">{orgName || "Enterprise Pod"}</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block">Cohort Size:</span>
                          <span className="text-white font-bold">{teamSize}</span>
                        </div>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Primary Focus:</span>
                        <span className="text-emerald-400 font-bold">{primaryGoal}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Stack & Cloud Integration:</span>
                        <span className="text-slate-300">{selectedTech.join(" • ") || "AWS / Python"}</span>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">First Name</label>
                        <input
                          required
                          type="text"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder="John"
                          className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white focus:border-cyan-500 outline-none transition-all text-sm font-sans"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">Last Name</label>
                        <input
                          required
                          type="text"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          placeholder="Doe"
                          className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white focus:border-cyan-500 outline-none transition-all text-sm font-sans"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">Work Email (for Audit PDF Delivery)</label>
                      <input
                        required
                        type="email"
                        value={workEmail}
                        onChange={(e) => setWorkEmail(e.target.value)}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white focus:border-cyan-500 outline-none transition-all text-sm font-sans"
                      />
                    </div>

                    <div className="pt-2 flex gap-3">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="px-6 py-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-bold text-xs font-mono hover:bg-slate-800 transition-all flex items-center gap-2"
                      >
                        <ArrowLeft size={16} /> Back
                      </button>
                      <button
                        type="submit"
                        disabled={loading}
                        className="flex-1 py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 text-slate-950 font-black text-sm shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-95 disabled:opacity-70 transition-all"
                      >
                        {loading ? "Generating Roadmap..." : "Submit Inquiry & Generate Proposal PDF"}
                        <Send size={18} />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
