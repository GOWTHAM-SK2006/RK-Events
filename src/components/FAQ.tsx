"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import { faqsData } from "@/data/cateringData";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-cream-100 relative overflow-hidden border-t border-gold-500/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-maroon-800/10 border border-gold-500/30 text-maroon-800 text-xs font-semibold uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-gold-600" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-maroon-900 tracking-tight mb-3">
            Planning Your Event with Us
          </h2>

          <p className="text-sm text-charcoal-700">
            Common questions regarding catering bookings, service coverage around
            Udumalpet, and custom menu planning.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqsData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="rounded-2xl bg-white border border-gold-500/25 overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none hover:bg-cream-100/50 transition-colors"
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-maroon-900 pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-full bg-cream-200 text-maroon-900 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-maroon-900 text-gold-300" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 text-xs sm:text-sm text-charcoal-600 leading-relaxed border-t border-gold-500/10 mt-1">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

