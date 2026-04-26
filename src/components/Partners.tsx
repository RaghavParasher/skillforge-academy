"use client";

import React from "react";
import { motion } from "framer-motion";

const partners = [
  "Google", "Amazon", "Microsoft", "Meta", "Netflix", "Adobe", "Salesforce", "IBM"
];

const Partners = () => {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="container-custom">
        <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-12">
          Trusted by Industry Leaders Worldwide
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
          {partners.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="text-2xl md:text-3xl font-black text-gray-800 tracking-tighter"
            >
              {partner}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
