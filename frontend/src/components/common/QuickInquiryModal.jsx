import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, ExternalLink, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { GoldButton } from './GoldButton';

export const QuickInquiryModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    qualification: '',
    batchPreference: 'Evening Live Online',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `*New Admission Inquiry - VS Medical Coding Academy*\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Qualification:* ${formData.qualification}\n` +
      `*Preferred Batch:* ${formData.batchPreference}\n` +
      `*Notes:* ${formData.notes || 'Interested in syllabus & admission details.'}`
    );
    
    // Open WhatsApp
    window.open(`https://wa.me/918300853884?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-lg bg-obsidian-900 border border-gold-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-gold-500/10 overflow-hidden"
        >
          {/* Ambient Gold Glow Corner */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <>
              <div className="mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-semibold uppercase tracking-wider mb-2">
                  <Sparkles className="w-3 h-3" />
                  <span>Salem Academy Admissions</span>
                </div>
                <h3 className="text-2xl font-bold font-display text-white">
                  Quick Course Inquiry
                </h3>
                <p className="text-sm text-slate-400 mt-1">
                  Connect with our counselors for syllabus, upcoming batch timings, and flexible installment options.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priyadharshini"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-obsidian-950 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-gold-400 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-obsidian-950 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-gold-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Graduation / Degree *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. B.Sc Zoology / B.Pharm"
                      value={formData.qualification}
                      onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-obsidian-950 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-gold-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Preferred Batch Slot
                  </label>
                  <select
                    value={formData.batchPreference}
                    onChange={(e) => setFormData({ ...formData, batchPreference: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-obsidian-950 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-gold-400 transition-colors"
                  >
                    <option value="Evening Live Online (7:30 PM - 9:00 PM)">Evening Live Online (7:30 PM - 9:00 PM)</option>
                    <option value="Morning Live Online (10:00 AM - 11:30 AM)">Morning Live Online (10:00 AM - 11:30 AM)</option>
                    <option value="Weekend Special Live Batch">Weekend Special Live Batch</option>
                  </select>
                </div>

                <div className="pt-2">
                  <GoldButton
                    fullWidth
                    size="md"
                    icon={Send}
                    type="submit"
                  >
                    Submit via WhatsApp Hotline
                  </GoldButton>
                </div>

                <div className="text-center pt-2">
                  <span className="text-xs text-slate-400">Or register officially via </span>
                  <a
                    href="https://forms.gle/xiK963HaBQASsgBB8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-gold-400 hover:text-gold-300 underline inline-flex items-center gap-1"
                  >
                    Official Google Form <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold font-display text-white mb-2">
                Inquiry Sent Successfully!
              </h4>
              <p className="text-sm text-slate-300 max-w-sm mx-auto mb-6">
                Our admissions advisor has received your details and will get in touch on WhatsApp/Call shortly.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://forms.gle/xiK963HaBQASsgBB8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-gold-gradient text-obsidian-950 font-bold text-sm shadow-lg hover:shadow-gold-500/30 transition-all flex items-center justify-center gap-2"
                >
                  <span>Complete Official Google Admission Form</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="text-xs text-slate-400 hover:text-white transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
