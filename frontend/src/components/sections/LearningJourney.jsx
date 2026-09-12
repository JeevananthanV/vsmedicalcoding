import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Layers, Binary, CheckSquare, Users2, Award } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const LearningJourney = () => {
  const steps = [
    {
      step: "01",
      name: "Understand",
      title: "Foundations & Terminology",
      desc: "Learn core Human Anatomy, Physiology, and standardized Medical Terminology prefixes and suffixes.",
      icon: BookOpen
    },
    {
      step: "02",
      name: "Explore",
      title: "12 Body Systems",
      desc: "Understand the 12 major human body systems, organ functions, and pathological disease processes.",
      icon: Layers
    },
    {
      step: "03",
      name: "Learn Coding",
      title: "ICD-10-CM Guidelines",
      desc: "Master ICD-10-CM concepts, chapter-specific coding guidelines, conventions, and index navigation.",
      icon: Binary
    },
    {
      step: "04",
      name: "Practice",
      title: "MCQ & Case Scenarios",
      desc: "Solve comprehensive MCQs, diagnostic coding exercises, and practice charting clinical scenarios daily.",
      icon: CheckSquare
    },
    {
      step: "05",
      name: "Prepare",
      title: "Interview & Career Ready",
      desc: "Practice healthcare BPO interview questions, technical viva drills, and resume optimization.",
      icon: Users2
    },
    {
      step: "06",
      name: "Complete",
      title: "Certification & Launch",
      desc: "Complete the capstone assessment and receive your official VS Medical Coding Academy Certificate.",
      icon: Award
    }
  ];

  return (
    <section id="journey" className="relative py-20 sm:py-24 bg-obsidian-900/60 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Structured 6-Step Roadmap"
          title="Your Learning"
          highlight="Journey"
          subtitle="From absolute novice to a confident, certified medical coding professional through a proven step-by-step methodology."
        />

        {/* Desktop & Tablet Timeline */}
        <div className="relative mt-16">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-[2px] bg-gradient-to-r from-gold-500/20 via-gold-400 to-gold-500/20 -translate-y-6 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="flex flex-col items-center text-center p-5 rounded-2xl bg-obsidian-900/90 border border-gold-500/20 hover:border-gold-400 shadow-xl group"
                >
                  {/* Step Node */}
                  <div className="relative w-14 h-14 rounded-2xl bg-obsidian-950 border border-gold-500/40 flex items-center justify-center text-gold-400 mb-4 shadow-lg group-hover:scale-110 group-hover:border-gold-300 group-hover:text-gold-200 transition-all">
                    <Icon className="w-6 h-6" />
                    <span className="absolute -top-2.5 -right-2.5 text-[10px] font-black font-mono px-2 py-0.5 rounded-full bg-gold-gradient text-obsidian-950 shadow-sm">
                      {item.step}
                    </span>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-1">
                    Step {item.step} • {item.name}
                  </span>

                  <h3 className="font-display font-bold text-white text-base mb-2 group-hover:text-gold-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
