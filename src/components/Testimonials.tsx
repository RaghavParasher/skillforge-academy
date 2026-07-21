"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Star, Sparkles } from "lucide-react";

const testimonials = [
  {
    quote: "SkillForge Academy's GenAI Architect program transformed our backend team. Our custom RAG search pipelines over 10M+ documents went from concept to production in just 6 weeks.",
    author: "Sarah Jenkins",
    role: "VP of Data & AI, Global Retail Corp",
    rating: 5,
    badge: "Verified Enterprise Pod"
  },
  {
    quote: "The interactive AI strategy workshops and live code review mentorship from staff engineers gave our leadership complete confidence to migrate our monolithic stack to Kubernetes.",
    author: "Michael Chen",
    role: "Chief Technology Officer, FinTech Solutions",
    rating: 5,
    badge: "SOC2 Compliance Audited"
  },
  {
    quote: "We measured a 3.4x improvement in pull request review velocity across our 120-person engineering organization after deploying the SkillForge upskilling roadmap.",
    author: "Priya Sharma",
    role: "SVP Engineering, TechInnovate Cloud",
    rating: 5,
    badge: "Telemetry Verified ROI"
  }
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-slate-950/90 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles size={14} /> Proven Enterprise Impact
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Engineering Leaders</span>
          </h2>
          <p className="text-lg text-text-muted">
            See how CTOs and technical directors are achieving high-velocity AI transformation and measurable ROI across their engineering pods.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-3xl flex flex-col justify-between relative group hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="absolute top-6 right-8 text-slate-800 group-hover:text-cyan-500/20 transition-colors">
                <Quote size={48} fill="currentColor" />
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-cyan-400 text-cyan-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-800 text-slate-300 rounded border border-slate-700">
                    {t.badge}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-8 relative z-10 font-sans">
                  "{t.quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-4 pt-6 border-t border-slate-800/80">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center font-black text-slate-950 text-lg shadow-md">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{t.author}</h4>
                  <p className="text-xs font-mono text-cyan-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
