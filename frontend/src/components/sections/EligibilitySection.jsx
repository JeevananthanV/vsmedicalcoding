import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, ArrowRight, Dna, Atom, Microscope, Pill, HeartHandshake, Activity, Sparkles } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { GoldButton } from '../common/GoldButton';
import { eligibilityData } from '../../data/eligibilityData';

export const EligibilitySection = ({ onOpenInquiry }) => {
  const [selectedDegreeIndex, setSelectedDegreeIndex] = useState(0);

  const iconMap = {
    Dna,
    Atom,
    Microscope,
    Pill,
    HeartHandshake,
    Activity,
  };

  const selectedProfile = eligibilityData[selectedDegreeIndex];
  const CurrentIcon = iconMap[selectedProfile.icon] || Activity;

  return (
    <section id="eligibility" className="relative py-20 sm:py-24 bg-obsidian-900/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Candidate Eligibility"
          title="Is Medical Coding"
          highlight="Right for You?"
          subtitle="Our training is specifically designed for learners with a Life Science or Healthcare-related educational background who aspire to build high-growth careers in corporate healthcare IT."
        />

        {/* Degree Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mt-12 mb-8">
          {eligibilityData.map((item, index) => {
            const Icon = iconMap[item.icon] || Activity;
            const isSelected = selectedDegreeIndex === index;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedDegreeIndex(index)}
                className={`p-4 rounded-2xl flex flex-col items-center text-center transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-gold-500/15 border-gold-400 shadow-lg shadow-gold-500/10 -translate-y-1'
                    : 'bg-obsidian-850/80 border-slate-800 hover:border-gold-500/30 hover:bg-obsidian-800 text-slate-300'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-colors ${
                  isSelected
                    ? 'bg-gold-500/20 text-gold-300 border border-gold-400/40'
                    : 'bg-obsidian-950 text-slate-400 border border-slate-800'
                }`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className={`text-xs sm:text-sm font-bold leading-snug ${
                  isSelected ? 'text-white' : 'text-slate-200'
                }`}>
                  {item.degree}
                </h4>
                <span className="mt-2 text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                  Eligible
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Deep-Dive Card for Selected Degree */}
        <motion.div
          key={selectedDegreeIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-obsidian-850 to-obsidian-950 border border-gold-500/30 shadow-2xl backdrop-blur-md"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-gold-300">
                  <CurrentIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                    {selectedProfile.degree}
                  </h3>
                  <p className="text-xs text-gold-400 font-medium">
                    {selectedProfile.subtext}
                  </p>
                </div>
                <span className="ml-auto px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {selectedProfile.matchRate}
                </span>
              </div>

              <div className="pt-2">
                <p className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-1">
                  Why Your Background Gives You An Unfair Advantage:
                </p>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  {selectedProfile.whySuitable}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-2">
                  Target Healthcare IT Career Roles:
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedProfile.careerRoles.map((role, rIdx) => (
                    <span
                      key={rIdx}
                      className="px-3 py-1 rounded-xl bg-obsidian-900 border border-slate-700 text-slate-200 text-xs font-medium"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Quick Action */}
            <div className="lg:col-span-4 p-5 rounded-2xl bg-obsidian-900/90 border border-gold-500/20 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center mx-auto">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-white text-base">
                Ready to Transition?
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Connect with our academic counselors to understand how your specific degree translates into top placement opportunities.
              </p>
              <GoldButton
                onClick={onOpenInquiry}
                fullWidth
                size="sm"
                icon={ArrowRight}
              >
                Verify My Degree Eligibility
              </GoldButton>
            </div>
          </div>
        </motion.div>

        {/* Bottom Crucial Clarification */}
        <div className="mt-8 p-4 rounded-2xl bg-obsidian-950 border border-emerald-500/30 flex items-center justify-center gap-3 text-center">
          <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
          <p className="text-xs sm:text-sm text-slate-300 font-medium">
            <strong>Zero Prior Experience Required:</strong> No previous Medical Coding or software engineering experience is required for our Basic Level training.
          </p>
        </div>

      </div>
    </section>
  );
};
