import React, { useState } from 'react';
import { TopAnnouncementBar } from './components/layout/TopAnnouncementBar';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { MobileBottomBar } from './components/layout/MobileBottomBar';
import { HeroSection } from './components/sections/HeroSection';
import { WhatIsCodingSection } from './components/sections/WhatIsCodingSection';
import { CoursesSection } from './components/sections/CoursesSection';
import { EligibilitySection } from './components/sections/EligibilitySection';
import { LearningJourney } from './components/sections/LearningJourney';
import { CurriculumGrid } from './components/sections/CurriculumGrid';
import { WhyChooseUsSection } from './components/sections/WhyChooseUsSection';
import { CareerOpportunities } from './components/sections/CareerOpportunities';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { FaqSection } from './components/sections/FaqSection';
import { ContactSection } from './components/sections/ContactSection';
import { WhatsAppFloatingBtn } from './components/common/WhatsAppFloatingBtn';
import { QuickInquiryModal } from './components/common/QuickInquiryModal';

export function App() {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  const handleOpenInquiry = () => {
    setIsInquiryModalOpen(true);
  };

  const handleCloseInquiry = () => {
    setIsInquiryModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-obsidian-950 text-slate-100 flex flex-col font-sans selection:bg-gold-500 selection:text-obsidian-950 pb-16 md:pb-0">
      {/* Top Urgent Alert Bar */}
      <TopAnnouncementBar onOpenInquiry={handleOpenInquiry} />

      {/* Sticky Navigation */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Optimized Conversion-Focused Landing Page Flow */}
      <main className="flex-grow">
        {/* 1. Hero Section: Answers all 4 questions in 5 seconds */}
        <HeroSection onOpenInquiry={handleOpenInquiry} />

        {/* 2. Signature Feature: Interactive Clinical Code Simulator Mini-App */}
        <WhatIsCodingSection onOpenInquiry={handleOpenInquiry} />

        {/* 3. The 45-Day Program & Curriculum */}
        <CoursesSection onOpenInquiry={handleOpenInquiry} />

        {/* 4. Interactive Degree Eligibility Matcher */}
        <EligibilitySection onOpenInquiry={handleOpenInquiry} />

        {/* 5. 6-Step Learning Journey Timeline */}
        <LearningJourney />

        {/* 6. In-Depth 12 Human Body Systems & Guidelines Syllabus */}
        <CurriculumGrid />

        {/* 7. Why Learn With Us */}
        <WhyChooseUsSection />

        {/* 8. Example Career Progression & Healthcare Opportunities */}
        <CareerOpportunities onOpenInquiry={handleOpenInquiry} />

        {/* 9. Social Proof: Student Reviews */}
        <TestimonialsSection />

        {/* 10. Top Questions Answered */}
        <FaqSection onOpenInquiry={handleOpenInquiry} />

        {/* 11. Final Admissions & Hotline Hub */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenInquiry={handleOpenInquiry} />

      {/* Sticky Mobile Conversion Bar */}
      <MobileBottomBar onOpenInquiry={handleOpenInquiry} />

      {/* Desktop WhatsApp Floating Button */}
      <div className="hidden md:block">
        <WhatsAppFloatingBtn />
      </div>

      {/* Quick Inquiry Dialog */}
      <QuickInquiryModal isOpen={isInquiryModalOpen} onClose={handleCloseInquiry} />
    </div>
  );
}

export default App;
