"use client";

import React from "react";
import { motion } from "framer-motion";

const partners = [
  "Google Cloud", "Amazon Web Services", "Microsoft Azure", "Meta AI", "OpenAI Labs", "Databricks", "Snowflake", "Anthropic"
];

const Partners = () => {
  return (
    <section className="py-14 bg-slate-950 border-b border-slate-800/80">
      <div className="container-custom">
        <p className="text-center text-xs font-mono font-bold text-slate-500 uppercase tracking-[0.25em] mb-10">
          Trusted by Engineering Leaders at Top AI & Tech Organizations
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-500">
          {partners.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="text-xl md:text-2xl font-black text-slate-400 hover:text-cyan-400 font-mono tracking-tight transition-colors cursor-default"
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
