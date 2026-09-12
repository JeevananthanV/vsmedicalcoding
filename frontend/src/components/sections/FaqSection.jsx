import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { faqData } from '../../data/faqData';

export const FaqSection = ({ onOpenInquiry }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="relative py-20 sm:py-24 bg-obsidian-900/60 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Clear Answers"
          title="Frequently Asked"
          highlight="Questions"
          subtitle="Everything you need to know about Medical Coding, curriculum structure, batch timings, and admission guidelines."
        />

        <div className="mt-12 space-y-3.5">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? 'bg-obsidian-850 border-gold-400/60 shadow-lg shadow-gold-500/5'
                    : 'bg-obsidian-900/80 border-slate-800/90 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`text-sm sm:text-base font-bold font-display ${
                    isOpen ? 'text-gold-300' : 'text-white'
                  }`}>
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-gold-500 text-obsidian-950 font-bold' : 'bg-obsidian-950 text-slate-400'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4 stroke-[3]" /> : <Plus className="w-4 h-4 stroke-[3]" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Help Callout */}
        <div className="mt-10 text-center p-6 rounded-2xl bg-obsidian-950 border border-gold-500/20">
          <p className="text-xs sm:text-sm text-slate-300">
            Have a question not covered above? We're here to help!
          </p>
          <button
            onClick={onOpenInquiry}
            className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-gold-400 hover:text-gold-300 underline underline-offset-4 cursor-pointer"
          >
            <HelpCircle className="w-4 h-4" />
            <span>Ask our Salem Admissions Coordinator directly on WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
};
