import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, MessageSquareQuote, Layers, Dumbbell, ClipboardCheck, RotateCcw, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const TrainingMethod = () => {
  const steps = [
    {
      step: "01",
      name: "Concept",
      desc: "Introducing foundational anatomy & coding theory.",
      icon: Lightbulb
    },
    {
      step: "02",
      name: "Explanation",
      desc: "Detailed breakdown of clinical guidelines & conventions.",
      icon: MessageSquareQuote
    },
    {
      step: "03",
      name: "Examples",
      desc: "Real-world medical chart walkthroughs & case studies.",
      icon: Layers
    },
    {
      step: "04",
      name: "Practice",
      desc: "Daily MCQ drills and diagnostic problem solving.",
      icon: Dumbbell
    },
    {
      step: "05",
      name: "Assessment",
      desc: "Objective testing to measure coding precision and speed.",
      icon: ClipboardCheck
    },
    {
      step: "06",
      name: "Revision",
      desc: "Recorded playback, doubt clearing, and exam polish.",
      icon: RotateCcw
    }
  ];

  return (
    <section className="relative py-20 sm:py-24 bg-obsidian-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Our Pedagogy"
          title="Learn With a"
          highlight="Structured Approach"
          subtitle="We focus on deep understanding of concepts rather than simply memorizing codes. Here is our six-phase teaching methodology."
        />

        {/* Connected 6 Cards Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-3 mt-12">
          {steps.map((item, index) => {
            const Icon = item.icon;
            const isLast = index === steps.length - 1;

            return (
              <div key={index} className="relative flex flex-col justify-between">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ y: -5 }}
                  className="p-5 rounded-2xl bg-obsidian-900 border border-gold-500/20 hover:border-gold-400 shadow-xl flex flex-col items-center text-center h-full group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-3 group-hover:scale-110 group-hover:text-gold-200 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] font-mono font-bold text-gold-400 uppercase tracking-widest mb-1">
                    Phase {item.step}
                  </span>

                  <h4 className="font-display font-bold text-white text-base mb-1.5 group-hover:text-gold-300 transition-colors">
                    {item.name}
                  </h4>

                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </motion.div>

                {/* Arrow indicator between cards on desktop */}
                {!isLast && (
                  <div className="hidden lg:flex absolute -right-2 top-1/2 -translate-y-1/2 z-20 w-4 h-4 rounded-full bg-gold-500 text-obsidian-950 items-center justify-center shadow-md">
                    <ArrowRight className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
