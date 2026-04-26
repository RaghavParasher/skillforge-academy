"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How does the enterprise program differ from individual courses?",
    answer: "Our enterprise programs are highly customized to your organization's specific tech stack, business goals, and team skill levels. They include dedicated mentorship, progress tracking for managers, and private cohort sessions."
  },
  {
    question: "What is the typical duration of a corporate training program?",
    answer: "Durations vary based on the curriculum depth, ranging from 2-week intensive bootcamps to 6-month long-term transformation journeys. We work with you to find the right pace."
  },
  {
    question: "Do you offer both online and offline training?",
    answer: "Yes, we provide flexible delivery models including 100% online (live or self-paced), on-site physical workshops, and hybrid models that combine the best of both worlds."
  },
  {
    question: "How do you measure the ROI of the training?",
    answer: "We use a multi-layered assessment framework including pre and post-training competency mapping, real-world project outcomes, and employee productivity metrics."
  },
  {
    question: "Can we customize the curriculum for our specific industry?",
    answer: "Absolutely. Our academic team works closely with your subject matter experts to integrate industry-specific case studies and proprietary datasets into the curriculum."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-gray-50/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-text-muted">
            Everything you need to know about our enterprise solutions.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                className="w-full p-6 text-left flex justify-between items-center gap-4"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="text-lg font-bold text-secondary">{faq.question}</span>
                <div className={`shrink-0 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                  <ChevronDown className="text-primary" />
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-text-muted leading-relaxed border-t border-gray-50 pt-4">
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
