"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

const LeadForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <section className="section-padding bg-primary" id="contact">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto bg-white p-12 rounded-[3rem] text-center shadow-2xl">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} />
            </div>
            <h2 className="text-3xl font-bold text-secondary mb-4">Request Received!</h2>
            <p className="text-text-muted mb-8 text-lg">
              Our enterprise team will reach out to you within 24 hours to discuss your requirements.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="text-primary font-bold hover:underline"
            >
              Send another request
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-primary relative overflow-hidden" id="contact">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full translate-x-1/4 translate-y-1/4 blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
              Ready to <span className="text-blue-200">Scale</span> Your <br /> Training?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Join 200+ organizations that have already transformed their workforce with Accredian. Fill out the form and let's build your custom learning roadmap.
            </p>
            
            <div className="space-y-6">
              {[
                "1-on-1 Consultation with experts",
                "Customized curriculum mapping",
                "Pilot program opportunities",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4 text-white font-medium text-lg">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <CheckCircle size={14} />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">First Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="John"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Last Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Doe"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Work Email</label>
                <input 
                  required
                  type="email" 
                  placeholder="john@company.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Organization Size</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all appearance-none bg-white">
                  <option>1-50 employees</option>
                  <option>51-200 employees</option>
                  <option>201-1000 employees</option>
                  <option>1000+ employees</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">How can we help?</label>
                <textarea 
                  rows={3}
                  placeholder="Tell us about your training needs..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                ></textarea>
              </div>

              <button 
                disabled={loading}
                className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? "Sending..." : "Submit Inquiry"}
                <Send size={18} />
              </button>
              
              <p className="text-center text-xs text-gray-400">
                By submitting, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
