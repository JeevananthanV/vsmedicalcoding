import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';

export const MobileBottomBar = ({ onOpenInquiry }) => {
  const whatsappUrl = "https://wa.me/918300853884?text=Hello%20VS%20Medical%20Coding%20Academy%2C%20I%20would%20like%20to%20enquire%20about%20the%2045-day%20Medical%20Coding%20training%20program.";

  return (
    <aside aria-label="Quick Actions" className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-obsidian-950/95 border-t border-slate-800 backdrop-blur-xl flex items-center gap-3 shadow-2xl">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-obsidian-850 border border-emerald-500/40 text-emerald-400 text-xs font-bold shadow-md active:scale-95 transition-all"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-4 h-4 fill-emerald-500/20" />
        <span>WhatsApp Us</span>
      </a>

      <button
        onClick={onOpenInquiry}
        className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F5D77F] to-[#AA771C] text-obsidian-950 text-xs font-black shadow-lg shadow-gold-500/20 active:scale-95 transition-all cursor-pointer"
      >
        <span>Enquire Now</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </aside>
  );
};
