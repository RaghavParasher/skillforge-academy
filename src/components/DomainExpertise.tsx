"use client";

import React from "react";
import { motion } from "framer-motion";
import { Database, BrainCircuit, Code, LineChart, Cpu, Cloud } from "lucide-react";

const domains = [
  { name: "Data Science", icon: Database, count: "45+ Courses" },
  { name: "Artificial Intelligence", icon: BrainCircuit, count: "30+ Courses" },
  { name: "Product Management", icon: LineChart, count: "25+ Courses" },
  { name: "Full Stack Development", icon: Code, count: "50+ Courses" },
  { name: "Cyber Security", icon: Cpu, count: "20+ Courses" },
  { name: "Cloud Computing", icon: Cloud, count: "35+ Courses" },
];

const DomainExpertise = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-6">
              Our <span className="text-primary">Domain Expertise</span>
            </h2>
            <p className="text-lg text-text-muted">
              Deep-dive into specialized fields with curriculum developed by industry leaders and academic experts.
            </p>
          </div>
          <button className="text-primary font-bold flex items-center gap-2 hover:underline">
            View All Domains
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {domains.map((domain, index) => (
            <motion.div
              key={domain.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl border border-gray-100 hover:border-primary/20 hover:bg-blue-50/30 transition-all cursor-pointer group"
            >
              <div className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform">
                <domain.icon size={40} strokeWidth={1.5} />
              </div>
              <h4 className="font-bold text-secondary mb-1">{domain.name}</h4>
              <p className="text-xs text-text-muted">{domain.count}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainExpertise;
