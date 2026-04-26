"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, BarChart, Users2, ArrowRight } from "lucide-react";

const programs = [
  {
    title: "Executive PG in Data Science",
    duration: "12 Months",
    highlights: ["Capstone Projects", "Job Assistance"],
    icon: BarChart,
    color: "bg-blue-600"
  },
  {
    title: "Advanced AI for Leaders",
    duration: "6 Months",
    highlights: ["Strategy Workshops", "Expert Mentor"],
    icon: Users2,
    color: "bg-indigo-600"
  },
  {
    title: "Business Analytics Accelerator",
    duration: "4 Months",
    highlights: ["Data Visualization", "Statistical Analysis"],
    icon: Clock,
    color: "bg-cyan-600"
  }
];

const ProgramModules = () => {
  return (
    <section className="section-padding bg-white" id="programs">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-6">
            Featured <span className="text-primary">Programs</span>
          </h2>
          <p className="text-lg text-text-muted">
            Our most popular modules for corporate teams and working professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-[2rem] border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              <div className={`h-40 ${program.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
                </div>
                <program.icon size={64} className="text-white relative z-10 group-hover:scale-110 transition-transform duration-500" />
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-4 font-bold uppercase tracking-wider">
                  <Clock size={14} /> {program.duration}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-6 group-hover:text-primary transition-colors">
                  {program.title}
                </h3>
                
                <ul className="space-y-3 mb-8">
                  {program.highlights.map((h) => (
                    <li key={h} className="text-sm text-text-muted flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {h}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full py-3 rounded-xl border border-gray-200 text-secondary font-bold hover:bg-primary hover:text-white hover:border-primary transition-all flex items-center justify-center gap-2 group/btn">
                  Learn More
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramModules;
