import React from 'react';
import { motion } from 'framer-motion';
import { Crown, BookOpen, Stethoscope, FileSpreadsheet, ArrowRight, CheckCircle } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { GoldButton } from '../common/GoldButton';

export const AboutSection = ({ onOpenInquiry }) => {
  const pillars = [
    {
      title: "Anatomy & Physiology",
      desc: "Deep conceptual understanding of the 12 human body systems, organs, and biological mechanisms.",
      icon: Stethoscope
    },
    {
      title: "Medical Terminology",
      desc: "Mastery of clinical prefixes, suffixes, combining forms, diagnostic abbreviations, and pathology words.",
      icon: BookOpen
    },
    {
      title: "ICD-10-CM Concepts",
      desc: "Thorough training in disease categorization, coding conventions, tabular lists, and index navigation.",
      icon: FileSpreadsheet
    },
    {
      title: "Healthcare Documentation",
      desc: "Real chart audits, deciphering physician notes, operative summaries, and insurance reimbursement workflows.",
      icon: CheckCircle
    }
  ];

  const handleScrollToCurriculum = (e) => {
    e.preventDefault();
    const el = document.getElementById('curriculum');
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="relative py-20 sm:py-24 bg-obsidian-900/60 overflow-hidden">
      {/* Ambient background gold glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="About VS Medical Coding Academy"
          title="Learn. Practice."
          highlight="Grow."
          subtitle="Empowering Life Science and Healthcare graduates to build prestigious, high-paying corporate careers in medical documentation and healthcare IT."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-12">
          
          {/* Left Column: Brand Story & Mission */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-semibold">
              <Crown className="w-3.5 h-3.5 text-gold-400" />
              <span>Motto: Learn . Discipline . Success</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white leading-snug">
              Making Medical Coding Education Simple, Structured, and Accessible
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              <strong>VS Medical Coding Academy</strong>, established in <strong>Salem, Tamil Nadu</strong>, provides career-focused Medical Coding training for students and graduates from Life Science and Healthcare backgrounds.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Our goal is to demystify complex medical coding guidelines through live interactive online classes. We focus on building rock-solid fundamentals in Anatomy, Physiology, Medical Terminology, ICD-10-CM concepts, official coding guidelines, and healthcare documentation.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <a
                href="#curriculum"
                onClick={handleScrollToCurriculum}
                className="inline-flex items-center gap-2 text-sm font-bold text-gold-400 hover:text-gold-300 transition-colors group cursor-pointer"
              >
                <span>Know More About Our Curriculum</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                onClick={onOpenInquiry}
                className="text-xs font-semibold text-slate-300 hover:text-white underline underline-offset-4"
              >
                Talk to a Mentor
              </button>
            </div>
          </motion.div>

          {/* Right Column: 4 Foundation Pillars Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-obsidian-800/80 border border-gold-500/20 hover:border-gold-500/50 hover:bg-obsidian-750 transition-all duration-300 shadow-md group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-4 group-hover:scale-110 group-hover:text-gold-200 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-bold text-white text-base mb-2 group-hover:text-gold-300 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
