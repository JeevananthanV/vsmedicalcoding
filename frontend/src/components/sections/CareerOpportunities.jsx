import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building, FileCheck2, Database, Receipt, Headphones, ArrowRight, TrendingUp, ShieldCheck } from 'lucide-react';
import { GoldButton } from '../common/GoldButton';

export const CareerOpportunities = ({ onOpenInquiry }) => {
  const careerAreas = [
    {
      title: "Medical Coding Specialist",
      desc: "Review patient records and assign accurate ICD-10-CM diagnostic codes for healthcare providers.",
      icon: Briefcase
    },
    {
      title: "Healthcare BPO Executive",
      desc: "Manage offshore revenue cycle processes, chart audits, and provider billing support.",
      icon: Building
    },
    {
      title: "Medical Records Analyst",
      desc: "Verify electronic medical record completeness and regulatory documentation compliance.",
      icon: Database
    },
    {
      title: "Healthcare Documentation Specialist",
      desc: "Audit physician progress notes, diagnostic summaries, and operative clinical reports.",
      icon: FileCheck2
    },
    {
      title: "Claims & Billing Associate",
      desc: "Facilitate accurate insurance claims processing and reduce claim denial turnaround times.",
      icon: Receipt
    },
    {
      title: "Non-Voice Healthcare Operations",
      desc: "High-focus backend analytics, clinical documentation validation, and account processing.",
      icon: Headphones
    }
  ];

  const exampleLadder = [
    {
      stage: "Entry Level",
      role: "Junior Medical Coder",
      experience: "0 – 1 Year",
      focus: "Foundation chart reviews, ICD-10 assignment under senior supervisor guidance."
    },
    {
      stage: "Mid Level",
      role: "Senior Medical Coder",
      experience: "1 – 3 Years",
      focus: "Complex multi-specialty clinical charts, mentoring fresh graduates, accuracy validation."
    },
    {
      stage: "Advanced Level",
      role: "QA & Compliance Auditor",
      experience: "3 – 5 Years",
      focus: "Root-cause error analysis, HIPAA compliance auditing, client revenue cycle health."
    },
    {
      stage: "Leadership Level",
      role: "Coding Team Lead / Trainer",
      experience: "5+ Years",
      focus: "Operational delivery management, corporate onboarding, client SLA oversight."
    }
  ];

  return (
    <section id="career" className="relative py-16 sm:py-20 bg-obsidian-850 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
            Industry Opportunities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight mt-3">
            Where Can Medical Coding <span className="text-gold-gradient block sm:inline">Take You?</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Medical Coding skills open doors across international healthcare BPOs, hospital networks, health IT vendors, and revenue cycle management firms.
          </p>
        </div>

        {/* 6 Career Areas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {careerAreas.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-5 rounded-2xl bg-obsidian-900 border border-slate-800 hover:border-slate-700 shadow-md flex items-start gap-4 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-base mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Example Career Progression Banner */}
        <div className="rounded-3xl bg-obsidian-900 border border-slate-700/80 p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
            <div>
              <span className="text-xs font-mono font-bold text-gold-400 uppercase tracking-wider">
                Industry Career Growth Model
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-1">
                Example Career Progression in Healthcare Documentation
              </h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium border border-slate-700">
              Illustrative Industry Path
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {exampleLadder.map((step, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-obsidian-950 border border-slate-800 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase font-mono font-bold text-gold-400">
                    {step.stage} • {step.experience}
                  </span>
                  <h4 className="font-display font-bold text-white text-sm sm:text-base mt-1 mb-2">
                    {step.role}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Ethical Disclaimer */}
          <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
            <p>
              <strong>Important Note:</strong> Career progression, starting designations, and salary bands vary based on individual qualification, aptitude, personal performance in corporate interviews, and employer hiring guidelines.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
