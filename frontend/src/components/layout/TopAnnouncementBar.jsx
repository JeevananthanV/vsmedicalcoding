      import React from 'react';
import { Phone, Sparkles, Clock, ArrowRight, Instagram } from 'lucide-react';

export const TopAnnouncementBar = ({ onOpenInquiry }) => {
  return (
    <aside aria-label="Announcement" className="relative z-40 bg-gradient-to-r from-obsidian-950 via-obsidian-900 to-obsidian-950 border-b border-gold-500/20 text-xs py-2 px-4 text-slate-300">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left: Batch & Location Status */}
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
          </span>
          <span className="font-semibold text-gold-300 uppercase tracking-wider text-[11px]">
            New Batch Starting Soon:
          </span>
          <span className="hidden sm:inline text-slate-300">
            Admissions open for Salem & Pan-India Live Online Training
          </span>
        </div>

        {/* Center: Offer Hook */}
        <div className="hidden lg:flex items-center gap-1.5 text-slate-300">
          <Clock className="w-3.5 h-3.5 text-gold-400" />
          <span>Limited Seats • Flexible Installment Plans Available</span>
        </div>

        {/* Right: Hotline Call, Instagram & Quick CTA */}
        <div className="flex items-center gap-3.5 ml-auto sm:ml-0">
          <a
            href="https://www.instagram.com/coachingvs?stkn=MWNyZnB4OGNyeGNsZA%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-slate-300 hover:text-pink-400 transition-colors font-medium"
            title="Follow us on Instagram @coachingvs"
            aria-label="Instagram @coachingvs"
          >
            <Instagram className="w-3.5 h-3.5 text-pink-400" />
            <span className="hidden md:inline">@coachingvs</span>
          </a>

          <a
            href="tel:+918300853884"
            className="flex items-center gap-1.5 text-slate-200 hover:text-gold-300 transition-colors font-medium"
          >
            <Phone className="w-3.5 h-3.5 text-gold-400" />
            <span>+91 8300853884</span>
          </a>

          <button
            onClick={onOpenInquiry}
            className="hidden md:inline-flex items-center gap-1 text-gold-400 hover:text-gold-200 font-semibold transition-colors group cursor-pointer"
          >
            <span>Enquire Now</span>
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </aside>
  );
};
