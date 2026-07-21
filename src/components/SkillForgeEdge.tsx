"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Zap, Target, Users, BarChart3, Globe } from "lucide-react";

const features = [
  {
    title: "Global Certification",
    description: "Get recognized globally with certifications that carry weight in every market.",
    icon: Globe,
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    title: "Agile Learning",
    description: "Flexible modules designed to fit into the busiest corporate schedules.",
    icon: Zap,
    color: "text-amber-600",
    bg: "bg-amber-50"
  },
  {
    title: "Data-Driven Insights",
    description: "Track progress with advanced analytics and performance metrics.",
    icon: BarChart3,
    color: "text-emerald-600",
    bg: "bg-emerald-50"
  },
  {
    title: "Expert Mentorship",
    description: "Learn from industry veterans with decades of hands-on experience.",
    icon: Users,
    color: "text-purple-600",
    bg: "bg-purple-50"
  },
  {
    title: "Customized Paths",
    description: "Tailored curriculum to meet your specific business objectives.",
    icon: Target,
    color: "text-rose-600",
    bg: "bg-rose-50"
  },
  {
    title: "Secure & Compliant",
    description: "Enterprise-grade security for all your training data and records.",
    icon: Shield,
    color: "text-indigo-600",
    bg: "bg-indigo-50"
  }
];

const SkillForgeEdge = () => {
  return (
    <section className="section-padding bg-gray-50/50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-6">
            The <span className="text-primary">SkillForge Edge</span>
          </h2>
          <p className="text-lg text-text-muted">
            We don't just provide courses; we build capabilities that transform organizations.
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
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className={`w-14 h-14 ${feature.bg} ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">{feature.title}</h3>
              <p className="text-text-muted leading-relaxed">
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
