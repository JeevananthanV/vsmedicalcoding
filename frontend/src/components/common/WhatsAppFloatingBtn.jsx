import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppFloatingBtn = () => {
  const [showTooltip, setShowTooltip] = useState(true);
  const phoneNumber = "918300853884";
  const message = encodeURIComponent(
    "Hello VS Medical Coding Academy, I would like to know more about the 45-day Medical Coding training program, upcoming batch timings, and admission details."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end flex-col gap-2">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-obsidian-900 border border-gold-500/40 text-slate-200 text-xs px-3.5 py-2 rounded-xl shadow-2xl flex items-center gap-2 max-w-xs backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Have questions? <strong>Chat with Admissions!</strong></span>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="text-slate-400 hover:text-white ml-1"
              aria-label="Dismiss tooltip"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 text-white shadow-xl shadow-emerald-500/30 border-2 border-emerald-300/40 cursor-pointer"
        aria-label="Chat on WhatsApp with VS Medical Coding Academy"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-25" />
        <MessageCircle className="w-7 h-7 fill-white/10" />
      </motion.a>
    </div>
  );
};
