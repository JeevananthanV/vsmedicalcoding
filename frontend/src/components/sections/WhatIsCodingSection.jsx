import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, CheckCircle2, XCircle, ArrowRight, Sparkles, HelpCircle, RotateCcw } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { GoldButton } from '../common/GoldButton';

export const WhatIsCodingSection = ({ onOpenInquiry }) => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const interactiveCases = [
    {
      id: "case-cardiology",
      specialty: "Cardiology Case",
      patientSummary: "58-year-old male with acute crushing retrosternal pain radiating to left arm. Cardiac troponin elevated at 4.2 ng/mL. EKG demonstrates ST-segment depressions in anterior leads without ST-elevation.",
      question: "Which primary diagnosis and ICD-10-CM code should the medical coder assign?",
      options: [
        { label: "A", text: "ST elevation (STEMI) myocardial infarction of anterior wall", code: "I21.09", correct: false },
        { label: "B", text: "Non-ST elevation (NSTEMI) myocardial infarction", code: "I21.4", correct: true },
        { label: "C", text: "Angina pectoris, unspecified", code: "I20.9", correct: false },
        { label: "D", text: "Chronic ischemic heart disease", code: "I25.9", correct: false },
      ],
      explanation: "Per ICD-10-CM Official Guidelines Section I.C.9.e, when clinical documentation and laboratory markers confirm myocardial necrosis without ST elevation, assign code I21.4 (NSTEMI)."
    },
    {
      id: "case-endocrine",
      specialty: "Endocrine Case",
      patientSummary: "62-year-old female with 15-year history of Type 2 Diabetes presents for routine follow-up. Urinalysis reveals microalbuminuria; nephrologist confirms diabetic nephropathy.",
      question: "Which combination code accurately captures this manifestation?",
      options: [
        { label: "A", text: "Type 1 diabetes mellitus with diabetic nephropathy", code: "E10.21", correct: false },
        { label: "B", text: "Type 2 diabetes mellitus without complications", code: "E11.9", correct: false },
        { label: "C", text: "Type 2 diabetes mellitus with diabetic nephropathy", code: "E11.21", correct: true },
        { label: "D", text: "Chronic kidney disease, unspecified", code: "N18.9", correct: false },
      ],
      explanation: "ICD-10-CM uses combination codes for diabetes and its manifestations. Category E11.21 uniquely captures both the Type 2 diabetes and the renal complication."
    },
    {
      id: "case-gi",
      specialty: "Gastrointestinal Case",
      patientSummary: "24-year-old male presents to the Emergency Department with severe right lower quadrant rebound tenderness, leukocytosis, and low-grade fever. Ultrasound confirms acute appendicitis.",
      question: "What is the primary ICD-10-CM diagnostic code?",
      options: [
        { label: "A", text: "Acute appendicitis with generalized peritonitis", code: "K35.20", correct: false },
        { label: "B", text: "Other acute appendicitis without peritonitis", code: "K35.80", correct: true },
        { label: "C", text: "Irritable bowel syndrome", code: "K58.9", correct: false },
        { label: "D", text: "Diverticulitis of large intestine", code: "K57.92", correct: false },
      ],
      explanation: "Since peritoneal perforation or generalized rupture is not documented, K35.80 is the standard assignment per Chapter 11 digestive guidelines."
    }
  ];

  const currentCase = interactiveCases[activeCaseIndex];

  const handleSelectCase = (idx) => {
    setActiveCaseIndex(idx);
    setSelectedOption(null);
    setHasSubmitted(false);
  };

  const handleSelectOption = (idx) => {
    if (hasSubmitted) return;
    setSelectedOption(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;
    setHasSubmitted(true);
  };

  const handleReset = () => {
    setSelectedOption(null);
    setHasSubmitted(false);
  };

  const isCorrect = selectedOption !== null && currentCase.options[selectedOption].correct;

  return (
    <section id="what-is-coding" className="relative py-16 sm:py-20 bg-obsidian-850 border-y border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading with high visual contrast */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-gold-300 text-xs font-semibold tracking-wider uppercase mb-3 border border-slate-700">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Interactive Learning Demo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            What is Medical Coding? <span className="text-gold-gradient block sm:inline">Try It Live.</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Medical Coding translates unstructured doctor notes, diagnoses, and treatments into standardized alphanumeric codes like <strong>ICD-10-CM</strong> for hospital billing and records. Experience how a coder analyzes a case:
          </p>
        </div>

        {/* The Interactive Case Simulator Mini-App */}
        <div className="rounded-3xl bg-obsidian-900 border border-slate-700/80 shadow-2xl p-5 sm:p-8 lg:p-10">
          
          {/* Header Bar: Case Selector */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                Select Case Study:
              </span>
              <div className="flex flex-wrap gap-2 mt-2">
                {interactiveCases.map((c, i) => (
                  <button
                    key={c.id}
                    onClick={() => handleSelectCase(i)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      activeCaseIndex === i
                        ? 'bg-gold-500 text-obsidian-950 font-bold shadow-md'
                        : 'bg-obsidian-800 text-slate-300 hover:text-white hover:bg-obsidian-750'
                    }`}
                  >
                    {c.specialty}
                  </button>
                ))}
              </div>
            </div>

            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
              Live Interactive Exercise
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
            
            {/* Left: Patient Clinical Chart */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-obsidian-950 border border-slate-800">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-wider pb-2 mb-3 border-b border-slate-800">
                  <FileText className="w-4 h-4 text-blue-400" />
                  <span>Physician's Progress Note</span>
                </div>
                <blockquote className="font-mono text-xs sm:text-sm text-slate-300 leading-relaxed italic bg-obsidian-900/90 p-4 rounded-xl border border-slate-800/80">
                  "{currentCase.patientSummary}"
                </blockquote>
              </div>

              <div className="p-4 rounded-2xl bg-obsidian-800/50 border border-slate-800 text-xs text-slate-400 space-y-1.5">
                <p className="font-bold text-slate-300">Why Coders Are Essential:</p>
                <p>Computers cannot interpret clinical context like human coders trained in Anatomy and ICD-10 guidelines.</p>
              </div>
            </div>

            {/* Right: Coding Multiple Choice & Code Verification */}
            <div className="lg:col-span-7 space-y-4">
              <div>
                <p className="text-xs font-mono font-bold text-gold-400 uppercase tracking-wider mb-1">
                  Question:
                </p>
                <h3 className="text-base sm:text-lg font-bold text-white mb-4">
                  {currentCase.question}
                </h3>
              </div>

              <div className="space-y-2.5">
                {currentCase.options.map((option, oIdx) => {
                  const isSelected = selectedOption === oIdx;
                  let optionStyle = 'bg-obsidian-950 border-slate-800 text-slate-200 hover:border-slate-600';

                  if (isSelected && !hasSubmitted) {
                    optionStyle = 'bg-gold-500/15 border-gold-400 text-white shadow-md';
                  }

                  if (hasSubmitted) {
                    if (option.correct) {
                      optionStyle = 'bg-emerald-500/15 border-emerald-400 text-white';
                    } else if (isSelected && !option.correct) {
                      optionStyle = 'bg-rose-500/15 border-rose-400 text-slate-300';
                    } else {
                      optionStyle = 'bg-obsidian-950/60 border-slate-800/50 text-slate-500 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleSelectOption(oIdx)}
                      disabled={hasSubmitted}
                      className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between gap-3 cursor-pointer ${optionStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-lg bg-obsidian-800 border border-slate-700 text-xs font-mono font-bold flex items-center justify-center shrink-0">
                          {option.label}
                        </span>
                        <span>{option.text}</span>
                      </div>
                      <span className="font-mono text-xs font-bold text-gold-400 shrink-0">
                        {option.code}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center gap-3">
                {!hasSubmitted ? (
                  <button
                    onClick={handleSubmitAnswer}
                    disabled={selectedOption === null}
                    className={`py-2.5 px-6 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      selectedOption !== null
                        ? 'bg-gold-500 text-obsidian-950 hover:bg-gold-400 shadow-md'
                        : 'bg-obsidian-800 text-slate-500 border border-slate-800 cursor-not-allowed'
                    }`}
                  >
                    Check Diagnosis Code
                  </button>
                ) : (
                  <button
                    onClick={handleReset}
                    className="py-2.5 px-4 rounded-xl bg-obsidian-800 text-slate-300 hover:text-white border border-slate-700 text-xs font-semibold flex items-center gap-2 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Try Again</span>
                  </button>
                )}
              </div>

              {/* Instant Verification Feedback Panel */}
              <AnimatePresence>
                {hasSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`p-4 rounded-2xl border text-xs sm:text-sm ${
                      isCorrect
                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-200'
                        : 'bg-amber-500/10 border-amber-500/30 text-amber-200'
                    }`}
                  >
                    <div className="flex items-center gap-2 font-bold mb-1">
                      {isCorrect ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span className="text-emerald-300">Correct Diagnosis! Standard Code Assigned:</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-4 h-4 text-amber-400 shrink-0" />
                          <span className="text-amber-300">Review Clinical Coding Guideline:</span>
                        </>
                      )}
                    </div>
                    <p className="text-slate-300 leading-relaxed mt-1">
                      {currentCase.explanation}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </div>

          {/* Mini-App Bottom CTA */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-400 text-center sm:text-left">
              Want to master these official coding guidelines for 100+ clinical conditions?
            </p>
            <GoldButton
              href="https://forms.gle/xiK963HaBQASsgBB8"
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              icon={ArrowRight}
            >
              Learn in 45-Day Program
            </GoldButton>
          </div>

        </div>

      </div>
    </section>
  );
};
