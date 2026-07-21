"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How does SkillForge AI training differ from standard video courses like Udemy or Coursera?",
    answer: "Standard courses teach generic theory in isolation. SkillForge embeds interactive AI coding labs, principal architect code reviews, and live GitHub PR integration directly inside your enterprise environment. Every module ends with an on-chain verified capstone project executed within your own cloud architecture."
  },
  {
    question: "How does the Live ROI Telemetry and GitHub PR velocity tracking work?",
    answer: "We provide an optional read-only telemetry agent that connects to Jira and GitHub organization hooks. It tracks PR cycle times, code review speeds, and vulnerability reduction before and after upskilling cohorts, providing your executive team with real-time ROI proof on the Governance Dashboard."
  },
  {
    question: "What security measures ensure our proprietary code models remain private?",
    answer: "We operate strictly under SOC2 Type II and zero-trust security compliance. All hands-on coding labs and fine-tuning exercises are executed within isolated, zero-data-retention sandboxes or directly inside your private VPC. Your proprietary data and models never leave your security boundaries."
  },
  {
    question: "Can we customize the 12-week roadmap for our specific cloud providers and tech stack?",
    answer: "Yes! Our principal architects conduct a pre-cohort technical audit of your existing stack (e.g., AWS vs. GCP, PyTorch vs. TensorFlow, Snowflake vs. Databricks) and tailor the weekly labs and capstone specifications to match your exact production roadmap."
  },
  {
    question: "What is the time commitment required for active engineering pods?",
    answer: "Our enterprise tracks are specifically engineered for high-velocity teams. Engineers spend 4-6 hours per week (divided into self-paced interactive labs and 1 live weekly architectural review), ensuring zero interruption to ongoing sprint deliverables."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-[#0B0F19] relative" id="faq">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-4">
            <HelpCircle size={14} /> Clear Answers for Technical Leaders
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Questions</span>
          </h2>
          <p className="text-lg text-text-muted">
            Everything CTOs, VP of Engineering, and People Leaders need to know about deploying SkillForge Academy.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full p-6 text-left flex justify-between items-center gap-4 focus:outline-none"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="text-base sm:text-lg font-bold text-slate-100">{faq.question}</span>
                <div className={`shrink-0 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                  <ChevronDown className="text-cyan-400" />
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="px-6 pb-6 text-sm sm:text-base text-text-muted leading-relaxed border-t border-slate-800/80 pt-4 font-sans">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
