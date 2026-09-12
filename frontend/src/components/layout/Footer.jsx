import React from 'react';
import { Crown, MapPin, Phone, Mail, ExternalLink, ArrowRight, ShieldCheck, Heart, Instagram } from 'lucide-react';

export const Footer = ({ onOpenInquiry }) => {
  const currentYear = new Date().getFullYear();

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="relative bg-obsidian-950 border-t border-gold-500/20 text-slate-400 text-sm overflow-hidden pt-16 pb-10">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-40 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          
          {/* Column 1 & 2: Brand Information & Salem Roots */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold-400 p-0.5 bg-obsidian-900 shadow-md shadow-gold-500/20">
                <img
                  src="/logo_vs.jpeg"
                  alt="VS Medical Coding Academy Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-xl text-white tracking-tight">
                  VS Medical Coding Academy
                </h3>
                <p className="text-xs font-semibold text-gold-400 tracking-wider uppercase">
                  Learn . Discipline . Success
                </p>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Salem's premier healthcare education academy providing career-focused Medical Coding training for Life Science, Nursing, and Pharmacy graduates through structured live online interactive sessions.
            </p>

            <div className="pt-2 space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>Headquartered in <strong>Salem, Tamil Nadu</strong> — Delivering interactive Live Online batches across India.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href="tel:+918300853884" className="hover:text-gold-300 transition-colors font-medium">
                  Hotline: +91 8300853884
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                <a
                  href="https://www.instagram.com/coachingvs?stkn=MWNyZnB4OGNyeGNsZA%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 transition-colors font-medium text-slate-300"
                >
                  Instagram: @coachingvs
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>ICD-10-CM Aligned Curriculum & Certification Support</span>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-xs mb-4 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className="hover:text-gold-300 transition-colors">
                  About the Academy
                </a>
              </li>
              <li>
                <a href="#what-is-coding" onClick={(e) => handleSmoothScroll(e, 'what-is-coding')} className="hover:text-gold-300 transition-colors">
                  What is Medical Coding?
                </a>
              </li>
              <li>
                <a href="#eligibility" onClick={(e) => handleSmoothScroll(e, 'eligibility')} className="hover:text-gold-300 transition-colors">
                  Degree Eligibility Checker
                </a>
              </li>
              <li>
                <a href="#journey" onClick={(e) => handleSmoothScroll(e, 'journey')} className="hover:text-gold-300 transition-colors">
                  6-Step Learning Journey
                </a>
              </li>
              <li>
                <a href="#curriculum" onClick={(e) => handleSmoothScroll(e, 'curriculum')} className="hover:text-gold-300 transition-colors">
                  12 Body Systems Syllabus
                </a>
              </li>
              <li>
                <a href="#why-us" onClick={(e) => handleSmoothScroll(e, 'why-us')} className="hover:text-gold-300 transition-colors">
                  Why Learn With Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Programs & Training */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-xs mb-4 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
              Training Programs
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#courses" onClick={(e) => handleSmoothScroll(e, 'courses')} className="hover:text-gold-300 transition-colors font-medium text-slate-200">
                  Medical Coding (45-Day Basic)
                </a>
              </li>
              <li>
                <a href="#courses" onClick={(e) => handleSmoothScroll(e, 'courses')} className="hover:text-gold-300 transition-colors">
                  Medical Terminology Certification
                </a>
              </li>
              <li>
                <a href="#courses" onClick={(e) => handleSmoothScroll(e, 'courses')} className="hover:text-gold-300 transition-colors">
                  ICD-10-CM Coding Guidelines
                </a>
              </li>
              <li>
                <a href="#courses" onClick={(e) => handleSmoothScroll(e, 'courses')} className="hover:text-gold-300 transition-colors">
                  Daily MCQ & Assessment Drills
                </a>
              </li>
              <li>
                <a href="#career" onClick={(e) => handleSmoothScroll(e, 'career')} className="hover:text-gold-300 transition-colors">
                  Healthcare BPO Interview Prep
                </a>
              </li>
              <li>
                <a href="#faqs" onClick={(e) => handleSmoothScroll(e, 'faqs')} className="hover:text-gold-300 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Admissions & Registration */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-xs mb-4 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
              Batch Admissions
            </h4>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Registrations are open for the upcoming live online batch. Submit your application early to secure your seat.
            </p>
            <div className="space-y-2.5">
              <a
                href="https://forms.gle/xiK963HaBQASsgBB8"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gold-gradient text-obsidian-950 font-bold text-xs shadow-md shadow-gold-500/20 hover:shadow-gold-500/40 transition-all"
              >
                <span>Google Admission Form</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onOpenInquiry}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-slate-700 hover:border-gold-400 text-slate-300 hover:text-white text-xs transition-colors cursor-pointer"
              >
                <span>Quick WhatsApp Inquiry</span>
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer as required by prompt */}
        <div className="border-t border-slate-800/80 pt-6 pb-6 text-xs text-slate-500 leading-relaxed">
          <p>
            <strong className="text-slate-400">Important Career Disclaimer:</strong> Medical Coding skills assist candidates in exploring opportunities across healthcare organizations, medical coding agencies, and healthcare BPO operations. Career opportunities, starting designations, and packages may vary based on the candidate's degree qualification, individual competence, assessment performance, and employer requirements.
          </p>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-slate-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} VS Medical Coding Academy. All rights reserved. Salem, Tamil Nadu, India.
          </p>
          <p className="flex items-center gap-1 text-slate-400">
            <span>Built for aspiring healthcare heroes</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>in Salem & across India</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
