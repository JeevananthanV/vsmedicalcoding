import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ExternalLink, Phone, ArrowUpRight, Instagram } from 'lucide-react';
import { GoldButton } from '../common/GoldButton';

export const Navbar = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: '45-Day Program', href: '#courses' },
    { label: 'Live Simulator', href: '#what-is-coding' },
    { label: 'Eligibility', href: '#eligibility' },
    { label: 'Curriculum', href: '#curriculum' },
    { label: 'Career', href: '#career' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check active section
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
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
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-obsidian-950/90 backdrop-blur-md border-b border-gold-500/20 shadow-xl shadow-black/40 py-3'
          : 'bg-obsidian-950/60 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleSmoothScroll(e, '#home')}
          className="flex items-center gap-3 group"
        >
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-gold-500/40 p-0.5 bg-obsidian-900 group-hover:border-gold-400 transition-colors shadow-sm shadow-gold-500/20">
            <img
              src="/logo_vs.jpeg"
              alt="VS Medical Coding Academy Logo"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-gold-300 transition-colors">
              </span>
            </div>
            <p className="text-[10px] sm:text-xs text-gold-400 tracking-wider uppercase font-semibold">
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-5 text-sm font-medium text-slate-300">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className={`relative py-1 transition-colors hover:text-gold-300 ${
                  isActive ? 'text-gold-400 font-semibold' : 'text-slate-300'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-gold-500 to-amber-300 rounded-full"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://www.instagram.com/coachingvs?stkn=MWNyZnB4OGNyeGNsZA%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border border-slate-700/80 text-slate-300 hover:text-pink-400 hover:border-pink-500/40 hover:bg-pink-500/10 transition-all cursor-pointer flex items-center justify-center"
            title="Follow on Instagram @coachingvs"
            aria-label="Instagram @coachingvs"
          >
            <Instagram className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenInquiry}
            className="text-xs font-semibold px-4 py-2.5 rounded-xl border border-gold-500/40 text-gold-300 hover:bg-gold-500/10 hover:border-gold-300 transition-all cursor-pointer"
          >
            Enquire Now
          </button>

          <GoldButton
            href="https://forms.gle/xiK963HaBQASsgBB8"
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            icon={ArrowUpRight}
          >
            Join Now
          </GoldButton>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 xl:hidden">
          <a
            href="https://forms.gle/xiK963HaBQASsgBB8"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden text-xs font-bold px-3 py-1.5 rounded-lg bg-gold-gradient text-obsidian-950"
          >
            Join Now
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl border border-slate-700/80 text-slate-300 hover:text-white hover:border-gold-400 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-gold-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden border-b border-gold-500/20 bg-obsidian-950/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-3">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className={`py-2 px-3 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-gold-500/15 text-gold-300 border-l-2 border-gold-400'
                        : 'text-slate-200 hover:bg-white/5 hover:text-gold-300'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}

              <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenInquiry();
                  }}
                  className="w-full py-3 rounded-xl border border-gold-500/40 text-gold-300 font-semibold text-center hover:bg-gold-500/10 transition-colors"
                >
                  Quick Course Inquiry
                </button>

                <GoldButton
                  href="https://forms.gle/xiK963HaBQASsgBB8"
                  target="_blank"
                  rel="noopener noreferrer"
                  fullWidth
                  size="md"
                  icon={ArrowUpRight}
                >
                  Join Next Batch (Official Form)
                </GoldButton>

                <a
                  href="https://www.instagram.com/coachingvs?stkn=MWNyZnB4OGNyeGNsZA%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2 text-sm text-slate-300 hover:text-pink-400 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span>Instagram: @coachingvs</span>
                </a>

                <a
                  href="tel:+918300853884"
                  className="flex items-center justify-center gap-2 py-2 text-sm text-slate-300 hover:text-gold-300 transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold-400" />
                  <span>Call Admissions: +91 8300853884</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
