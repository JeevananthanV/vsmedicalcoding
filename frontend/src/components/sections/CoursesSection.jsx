import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, Sparkles, Clock, MonitorPlay, Award, ChevronDown, ChevronUp, FileText } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { GoldButton } from '../common/GoldButton';
import { coursesData } from '../../data/coursesData';

export const CoursesSection = ({ onOpenInquiry }) => {
  const [expandedCourse, setExpandedCourse] = useState(null);

  const toggleSyllabus = (courseId) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId);
  };

  return (
    <section id="courses" className="relative py-20 sm:py-24 bg-obsidian-950 overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Curated Learning Programs"
          title="Choose the Right"
          highlight="Learning Program"
          subtitle="Systematic, milestone-based curriculum taught by seasoned healthcare coding professionals. Designed to fast-track your career readiness."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12 items-start">
          {coursesData.map((course, index) => {
            const isFeatured = course.featured;
            const isExpanded = expandedCourse === course.id;

            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`rounded-3xl p-6 sm:p-8 relative flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? 'lg:col-span-7 bg-gradient-to-b from-obsidian-850 via-obsidian-900 to-obsidian-950 border-2 border-gold-400 shadow-2xl shadow-gold-500/10'
                    : 'lg:col-span-5 bg-gradient-to-b from-obsidian-900 to-obsidian-950 border border-slate-800 hover:border-gold-500/30 shadow-xl'
                }`}
              >
                {/* Featured Badge */}
                {isFeatured && (
                  <div className="absolute -top-3.5 right-6 bg-gold-gradient text-obsidian-950 font-black text-xs px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{course.badge}</span>
                  </div>
                )}

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gold-500/10 text-gold-300 text-xs font-semibold border border-gold-500/20">
                      <Clock className="w-3 h-3" />
                      {course.duration}
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-xs font-semibold border border-blue-500/20">
                      <MonitorPlay className="w-3 h-3" />
                      Live Online + Recorded
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white mb-2 leading-snug">
                    {course.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-medium text-gold-400 mb-4">
                    {course.tagline}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {course.description}
                  </p>

                  {/* Highlights Checklist */}
                  <div className="space-y-2.5 mb-8">
                    <p className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                      Course Features Included:
                    </p>
                    {course.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <div className="w-4 h-4 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Expandable Module Breakdown */}
                  {course.curriculum && (
                    <div className="border-t border-slate-800 pt-4 mb-6">
                      <button
                        onClick={() => toggleSyllabus(course.id)}
                        className="w-full flex items-center justify-between text-xs font-bold text-gold-400 hover:text-gold-300 uppercase tracking-wider py-1 cursor-pointer"
                      >
                        <span className="flex items-center gap-1.5">
                          <FileText className="w-3.5 h-3.5" />
                          {isExpanded ? 'Hide Detailed Modules' : 'View Detailed Syllabus Modules'}
                        </span>
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-4 space-y-3 overflow-hidden"
                          >
                            {course.curriculum.map((m, mIdx) => (
                              <div key={mIdx} className="p-3.5 rounded-xl bg-obsidian-950 border border-slate-800 text-xs">
                                <div className="font-bold text-white mb-1">
                                  <span className="text-gold-400 mr-2">{m.module}:</span>
                                  {m.title}
                                </div>
                                <ul className="list-disc list-inside text-slate-400 space-y-0.5 ml-2">
                                  {m.topics.map((t, tIdx) => (
                                    <li key={tIdx}>{t}</li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>

                {/* Bottom CTA Block */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <GoldButton
                    href="https://forms.gle/xiK963HaBQASsgBB8"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant={isFeatured ? 'primary' : 'secondary'}
                    size="md"
                    fullWidth={!isFeatured}
                    icon={ArrowRight}
                  >
                    Apply via Google Form
                  </GoldButton>

                  <button
                    onClick={onOpenInquiry}
                    className="px-4 py-2.5 rounded-xl border border-slate-700 text-slate-300 hover:border-gold-400 hover:text-white text-xs font-semibold text-center transition-colors cursor-pointer"
                  >
                    Enquire on WhatsApp
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Value Proposition Callout Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-obsidian-900 via-obsidian-850 to-obsidian-900 border border-gold-500/20 text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-display font-bold text-white text-base">
              Need Help Choosing the Right Path?
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Speak with our senior counselor for syllabus counseling, batch timings, and flexible installments.
            </p>
          </div>
          <button
            onClick={onOpenInquiry}
            className="px-5 py-2.5 rounded-xl bg-gold-gradient text-obsidian-950 font-bold text-xs shadow-md hover:shadow-gold-500/30 transition-all shrink-0 cursor-pointer"
          >
            Get Free Career Consultation
          </button>
        </div>

      </div>
    </section>
  );
};
