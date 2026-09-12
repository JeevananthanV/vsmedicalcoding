import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Phone, MessageCircle, MapPin, Send, CheckCircle2, Sparkles, Clock, ShieldCheck, Instagram } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { GoldButton } from '../common/GoldButton';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    qualification: '',
    preferredBatch: 'Evening Live Online',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `*Admission Inquiry - VS Medical Coding Academy*\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email || 'N/A'}\n` +
      `*Degree/Qualification:* ${formData.qualification}\n` +
      `*Preferred Batch:* ${formData.preferredBatch}\n` +
      `*Message:* ${formData.message || 'Interested in joining upcoming batch.'}`
    );
    window.open(`https://wa.me/918300853884?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-24 bg-obsidian-950 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Admissions & Contact"
          title="Begin Your"
          highlight="Journey Today"
          subtitle="Apply directly through our official Google Form or reach out to our admissions team in Salem via WhatsApp or Call."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12 items-start">
          
          {/* Left Column: Official Admission Links & Salem Center Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Google Form Action Box */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-obsidian-850 via-obsidian-900 to-obsidian-950 border-2 border-gold-400 shadow-2xl shadow-gold-500/10 relative overflow-hidden">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-300 text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                <span>Direct Admission Portal</span>
              </div>

              <h3 className="text-2xl font-bold font-display text-white mb-2">
                Official Google Admission Form
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Fill out the official registration form to reserve your seat in the upcoming live online batch. Limited batch sizes ensure individual focus.
              </p>

              <GoldButton
                href="https://forms.gle/xiK963HaBQASsgBB8"
                target="_blank"
                rel="noopener noreferrer"
                fullWidth
                size="lg"
                icon={ExternalLink}
              >
                Open Google Admission Form
              </GoldButton>

              <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Instant Confirmation</span>
                <span className="text-gold-400 font-semibold">forms.gle/xiK963HaBQASsgBB8</span>
              </div>
            </div>

            {/* Direct Helpline Cards */}
            <div className="p-6 rounded-3xl bg-obsidian-900 border border-slate-800 space-y-4">
              <h4 className="text-white font-display font-bold text-base">
                Salem Academy Helpline
              </h4>

              <div className="space-y-3 text-xs sm:text-sm">
                <a
                  href="https://wa.me/918300853884?text=Hello%20VS%20Medical%20Coding%20Academy%2C%20I%20would%20like%20to%20enquire%20about%20the%20Medical%20Coding%20training%20program."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-obsidian-950 border border-slate-800 hover:border-emerald-500/40 text-slate-200 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-emerald-400 text-xs">WhatsApp Direct Chat</p>
                    <p className="font-mono text-sm">+91 8300853884</p>
                  </div>
                </a>

                <a
                  href="tel:+918300853884"
                  className="flex items-center gap-3 p-3 rounded-xl bg-obsidian-950 border border-slate-800 hover:border-gold-500/40 text-slate-200 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-gold-400 text-xs">Admissions Hotline</p>
                    <p className="font-mono text-sm">+91 8300853884</p>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/coachingvs?stkn=MWNyZnB4OGNyeGNsZA%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-obsidian-950 border border-slate-800 hover:border-pink-500/40 text-slate-200 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/30 text-pink-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-pink-400 text-xs">Official Instagram</p>
                    <p className="font-mono text-sm">@coachingvs</p>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-obsidian-950 border border-slate-800 text-slate-300">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-blue-400 text-xs">Academy Location</p>
                    <p className="text-xs text-slate-300 leading-snug">
                      Salem, Tamil Nadu, India • Providing interactive live online batches for students across India.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Admission Form with Instant WhatsApp Dispatch */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-obsidian-900 border border-gold-500/20 shadow-2xl backdrop-blur-md">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 text-gold-300 text-xs font-semibold mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Fast Track Inquiry</span>
                </div>
                <h3 className="text-2xl font-bold font-display text-white">
                  Send an Instant Message to Admissions
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Have specific queries about syllabus or installments? Fill in your details to chat instantly with our admissions mentor.
                </p>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vigneshwaran S."
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-obsidian-950 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-gold-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        WhatsApp Number *
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
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="yourname@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-obsidian-950 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-gold-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Graduation Degree *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. B.Sc Zoology / B.Pharm / B.Sc Nursing"
                        value={formData.qualification}
                        onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-obsidian-950 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-gold-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Preferred Batch Timing
                    </label>
                    <select
                      value={formData.preferredBatch}
                      onChange={(e) => setFormData({ ...formData, preferredBatch: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-obsidian-950 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-gold-400 transition-colors"
                    >
                      <option value="Evening Live Online (7:30 PM - 9:00 PM)">Evening Live Online (7:30 PM - 9:00 PM)</option>
                      <option value="Morning Live Online (10:00 AM - 11:30 AM)">Morning Live Online (10:00 AM - 11:30 AM)</option>
                      <option value="Weekend Fast-Track Batch">Weekend Fast-Track Batch</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Your Questions / Notes
                    </label>
                    <textarea
                      rows="3"
                      placeholder="Ask any questions regarding course modules, certification, or payment installments..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-obsidian-950 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-gold-400 transition-colors resize-none"
                    />
                  </div>

                  <GoldButton
                    fullWidth
                    size="md"
                    type="submit"
                    icon={Send}
                  >
                    Submit & Chat on WhatsApp
                  </GoldButton>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold font-display text-white mb-2">
                    Inquiry Dispatched!
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
                    WhatsApp has opened with your inquiry details. Our counselor will respond immediately.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-gold-400 hover:text-gold-300 underline font-semibold"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
