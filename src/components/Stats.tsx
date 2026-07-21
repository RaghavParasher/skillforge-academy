"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Engineering Pods Upskilled", value: "350+" },
  { label: "On-Chain Capstone Badges", value: "14,800+" },
  { label: "Avg. Velocity Increase", value: "+3.2x" },
  { label: "Active Enterprise Cohorts", value: "48+" },
];

const Stats = () => {
  return (
    <section className="bg-slate-950/80 border-y border-slate-800/80 text-white py-14 md:py-20 relative overflow-hidden">
      {/* Texture Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none cyber-grid"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full radial-glow pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group p-6 rounded-3xl bg-slate-900/40 border border-slate-800/60 hover:border-cyan-500/40 transition-all"
            >
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-400 mb-2 font-mono group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-slate-400 font-mono font-bold uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
