"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Accredian's Data Science program transformed our analytics team. The custom curriculum was exactly what we needed for our retail use cases.",
    author: "Sarah Jenkins",
    role: "Head of Data, Global Retail Corp",
    rating: 5
  },
  {
    quote: "The AI strategy workshop was eye-opening for our leadership. We've now implemented a clear roadmap for generative AI integration.",
    author: "Michael Chen",
    role: "CTO, FinTech Solutions",
    rating: 5
  },
  {
    quote: "Scaling our tech team's skills was a challenge until we partnered with Accredian. Their delivery process is seamless and highly effective.",
    author: "Priya Sharma",
    role: "VP Engineering, TechInnovate",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-6">
            Trusted by <span className="text-primary">Global Partners</span>
          </h2>
          <p className="text-lg text-text-muted">
            See how organizations are achieving strategic excellence with our tailored training programs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-blue-50/30 p-8 rounded-3xl border border-blue-100 flex flex-col justify-between relative group hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="absolute top-6 right-8 text-blue-200">
                <Quote size={48} fill="currentColor" />
              </div>
              
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-lg text-secondary font-medium leading-relaxed mb-8 relative z-10">
                  "{t.quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-secondary">{t.author}</h4>
                  <p className="text-sm text-text-muted">{t.role}</p>
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
