import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Activity, FileCode, CheckCircle2, ChevronRight, Stethoscope, Sparkles } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { bodySystemsData } from '../../data/bodySystemsData';

export const CurriculumGrid = () => {
  const [activeTab, setActiveTab] = useState('systems');
  const [activeSystemIndex, setActiveSystemIndex] = useState(0);

  const foundationTopics = [
    { title: "Human Anatomy", desc: "Planes, quadrants, cavities, directional terminology, cellular structures." },
    { title: "Human Physiology", desc: "Homeostasis, biological functions, organ system interactions, disease mechanisms." },
    { title: "Medical Terminology", desc: "Latin/Greek roots, diagnostic/surgical suffixes, prefixes, clinical abbreviations." }
  ];

  const codingTopics = [
    { title: "ICD-10-CM Fundamentals", desc: "Alphanumeric code syntax, placeholders, 7th character extensions, Conventions." },
    { title: "Official Coding Guidelines", desc: "General guidelines, chapter-specific guidelines for inpatient and outpatient services." },
    { title: "Documentation Concepts", desc: "Deciphering physician orders, pathology reports, operative notes, and EHR charts." },
    { title: "Coding Practice & Drills", desc: "Real chart audits, assign codes, index search, and tabular list verification." },
    { title: "Daily MCQ Sessions", desc: "Comprehensive question banks modeled on actual healthcare BPO technical interview tests." }
  ];

  const activeSystem = bodySystemsData[activeSystemIndex];

  return (
    <section id="curriculum" className="relative py-20 sm:py-24 bg-obsidian-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="In-Depth Syllabus"
          title="What Will"
          highlight="You Learn?"
          subtitle="Explore our comprehensive curriculum spanning foundational biology, all 12 human body systems, and complete ICD-10-CM coding mastery."
        />

        {/* Tab Navigation */}
        <div className="flex justify-center mt-10 mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-obsidian-900 border border-gold-500/20 shadow-lg">
            <button
              onClick={() => setActiveTab('systems')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'systems'
                  ? 'bg-gold-gradient text-obsidian-950 font-bold shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Activity className="w-4 h-4" />
              <span>12 Human Body Systems</span>
            </button>

            <button
              onClick={() => setActiveTab('foundation')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'foundation'
                  ? 'bg-gold-gradient text-obsidian-950 font-bold shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Stethoscope className="w-4 h-4" />
              <span>Foundations</span>
            </button>

            <button
              onClick={() => setActiveTab('coding')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'coding'
                  ? 'bg-gold-gradient text-obsidian-950 font-bold shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <FileCode className="w-4 h-4" />
              <span>Coding Mastery</span>
            </button>
          </div>
        </div>

        {/* Tab 1: 12 Human Body Systems Explorer */}
        {activeTab === 'systems' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Interactive 12 Systems Pill Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {bodySystemsData.map((sys, idx) => {
                const isSelected = activeSystemIndex === idx;
                return (
                  <button
                    key={sys.id}
                    onClick={() => setActiveSystemIndex(idx)}
                    className={`p-3.5 rounded-xl text-left transition-all cursor-pointer border flex items-center justify-between ${
                      isSelected
                        ? 'bg-gold-500/15 border-gold-400 shadow-md shadow-gold-500/10 -translate-y-0.5'
                        : 'bg-obsidian-900/90 border-slate-800 hover:border-gold-500/30 text-slate-300'
                    }`}
                  >
                    <div>
                      <span className="text-[10px] font-mono text-gold-400 block">
                        {sys.badge}
                      </span>
                      <span className={`text-xs sm:text-sm font-bold ${
                        isSelected ? 'text-white' : 'text-slate-200'
                      }`}>
                        {sys.name}
                      </span>
                    </div>
                    <ChevronRight className={`w-4 h-4 ${
                      isSelected ? 'text-gold-300' : 'text-slate-500'
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Right: Detailed Deep Dive View */}
            <motion.div
              key={activeSystemIndex}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-obsidian-850 to-obsidian-950 border border-gold-500/30 shadow-2xl backdrop-blur-md"
            >
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-gold-500/20">
                <div>
                  <span className="text-xs font-mono font-bold text-gold-400 uppercase">
                    {activeSystem.badge} of 12
                  </span>
                  <h3 className="text-2xl font-bold font-display text-white">
                    {activeSystem.name}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-300">
                  <Activity className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div>
                  <p className="text-xs font-bold text-gold-300 uppercase tracking-wider mb-1">
                    Anatomical Organs & Structures:
                  </p>
                  <p className="text-slate-200 font-medium bg-obsidian-900/80 p-3 rounded-xl border border-slate-800">
                    {activeSystem.organs}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold text-gold-300 uppercase tracking-wider mb-1">
                    Key Pathology & Clinical Concepts:
                  </p>
                  <p className="text-slate-300 leading-relaxed bg-obsidian-900/80 p-3 rounded-xl border border-slate-800">
                    {activeSystem.keyConcepts}
                  </p>
                </div>

                <div className="pt-2">
                  <p className="text-xs font-bold text-gold-300 uppercase tracking-wider mb-1">
                    Representative ICD-10-CM Sample Codes:
                  </p>
                  <div className="p-3 rounded-xl bg-obsidian-900/80 border border-gold-500/30 font-mono text-gold-gradient font-bold text-xs sm:text-sm">
                    {activeSystem.icdSample}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Tab 2: Clinical Foundations */}
        {activeTab === 'foundation' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {foundationTopics.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-obsidian-900 border border-gold-500/20 hover:border-gold-400 transition-all shadow-xl"
              >
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center mb-4">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold font-display text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Coding Mastery */}
        {activeTab === 'coding' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {codingTopics.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-obsidian-900 border border-teal-500/20 hover:border-teal-400 transition-all shadow-xl"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-300 flex items-center justify-center mb-4">
                  <FileCode className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold font-display text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
