import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, MessageCircle, Calendar, Users, Laptop, Award, CheckCircle, ShieldCheck } from 'lucide-react';
import { GoldButton } from '../common/GoldButton';

export const HeroSection = ({ onOpenInquiry }) => {
  const quickStats = [
    { label: "Duration", value: "45 Days", detail: "Intensive Program" },
    { label: "Learning Mode", value: "Live Online", detail: "+ Recorded Replays" },
    { label: "Curriculum", value: "12 Systems", detail: "ICD-10-CM Aligned" },
    { label: "Audience", value: "Life Science", detail: "Freshers Welcome" },
    { label: "Outcome", value: "Certified", detail: "+ Interview Prep" },
  ];

  const handleScrollToProgram = (e) => {
    e.preventDefault();
    const el = document.getElementById('courses');
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const whatsappUrl = "https://wa.me/918300853884?text=Hello%20VS%20Medical%20Coding%20Academy%2C%20I%20would%20like%20to%20enquire%20about%20the%2045-day%20Medical%20Coding%20training%20program.";

  return (
    <section id="home" className="relative min-h-[88vh] flex flex-col justify-center overflow-hidden py-14 sm:py-18 bg-obsidian-950">
      
      {/* Background Graphic Asset with Obsidian Luxury Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero_bg.jpg"
          alt="High-tech Medical Coding Workstation"
          className="w-full h-full object-cover object-center opacity-30 filter brightness-70 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/85 to-obsidian-950/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian-950 via-obsidian-950/85 to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        
        {/* Top Direct Authority Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-gold-500/40 text-gold-300 text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span>Salem's Premier Academy • Live Online Batches</span>
        </div>

        {/* Main Heading - Big, bold, clear */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white leading-[1.15] max-w-4xl mx-auto">
          Build Your Career in{' '}
          <span className="text-gold-gradient block sm:inline">
            Medical Coding
          </span>
        </h1>

        {/* Value Proposition Subtitle */}
        <p className="mt-5 text-lg sm:text-xl text-slate-200 font-medium max-w-2xl mx-auto">
          45-Day Medical Coding Foundation Program for Life Science & Healthcare Graduates
        </p>

        {/* Clean Description */}
        <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
          Live interactive online classes + recorded revision access + real clinical cases + daily MCQ practice + mock interview preparation.
        </p>

        {/* Primary Clear CTA Group */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F5D77F] to-[#AA771C] text-obsidian-950 font-extrabold text-sm shadow-xl shadow-gold-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-obsidian-950/20" />
            <span>Enquire on WhatsApp</span>
          </a>

          <a
            href="#courses"
            onClick={handleScrollToProgram}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-obsidian-850 hover:bg-obsidian-800 border border-slate-700 hover:border-slate-500 text-slate-200 text-sm font-semibold transition-all cursor-pointer"
          >
            <span>View 45-Day Program</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Fast-Facts Metrics Bar (Level 3 Elevated Surface) */}
        <div className="mt-12 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-5 gap-3 p-3 rounded-2xl bg-obsidian-900/90 border border-slate-800 backdrop-blur-md shadow-xl text-left">
          {quickStats.map((item, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-xl bg-obsidian-950/80 border border-slate-800/80 ${
                idx === quickStats.length - 1 ? 'col-span-2 sm:col-span-1' : ''
              }`}
            >
              <p className="text-[10px] uppercase font-mono font-bold text-slate-400 tracking-wider">
                {item.label}
              </p>
              <p className="text-sm sm:text-base font-extrabold text-white mt-0.5">
                {item.value}
              </p>
              <p className="text-[11px] text-gold-400 font-medium">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
