import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Sparkles, HeartPulse, CheckSquare, GraduationCap, Home } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const WhyChooseUsSection = () => {
  const features = [
    {
      title: "Trainer-Led Learning",
      desc: "Learn directly through live interactive classes with seasoned healthcare documentation mentors.",
      icon: UserCheck,
      color: "border-gold-500/30"
    },
    {
      title: "Beginner-Friendly Approach",
      desc: "Complex ICD-10-CM guidelines and medical terms are explained in a simple, structured, intuitive manner.",
      icon: Sparkles,
      color: "border-teal-500/30"
    },
    {
      title: "Healthcare-Focused Training",
      desc: "Curriculum tailored specifically around healthcare and medical coding fundamentals for life science minds.",
      icon: HeartPulse,
      color: "border-rose-500/30"
    },
    {
      title: "Practice-Based Learning",
      desc: "Regular MCQs, clinical case studies, and question-based practice drills to build speed and accuracy.",
      icon: CheckSquare,
      color: "border-blue-500/30"
    },
    {
      title: "Career Guidance",
      desc: "Get dedicated guidance for resume building, mock interviews, and healthcare BPO placement preparation.",
      icon: GraduationCap,
      color: "border-amber-500/30"
    },
    {
      title: "Flexible Online Learning",
      desc: "Learn comfortably from home without the need to travel, supported by recorded sessions for revision.",
      icon: Home,
      color: "border-emerald-500/30"
    }
  ];

  return (
    <section id="why-us" className="relative py-20 sm:py-24 bg-obsidian-900/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="The VS Academy Edge"
          title="Why Learn"
          highlight="With Us?"
          subtitle="Discover what makes VS Medical Coding Academy the premier choice for life science and healthcare graduates transitioning into healthcare IT."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className={`p-6 sm:p-7 rounded-2xl bg-obsidian-900/90 border ${item.color} shadow-xl backdrop-blur-md group flex flex-col justify-between`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-300 mb-5 group-hover:scale-110 group-hover:text-gold-200 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-white text-lg sm:text-xl mb-2 group-hover:text-gold-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
