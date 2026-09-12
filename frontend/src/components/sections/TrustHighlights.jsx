import React from 'react';
import { motion } from 'framer-motion';
import { Video, Layers, Award, Compass, WalletCards } from 'lucide-react';

export const TrustHighlights = () => {
  const highlights = [
    {
      num: "01",
      title: "Live Online Classes",
      desc: "Learn through interactive instructor-led sessions with real-time doubt clearing.",
      icon: Video,
      color: "from-gold-500/20 to-gold-500/5",
      border: "border-gold-500/30"
    },
    {
      num: "02",
      title: "Structured Training",
      desc: "Follow a systematic learning path from clinical fundamentals to advanced coding concepts.",
      icon: Layers,
      color: "from-teal-500/20 to-teal-500/5",
      border: "border-teal-500/30"
    },
    {
      num: "03",
      title: "Certification Provided",
      desc: "Receive a recognized course completion certificate upon meeting the training requirements.",
      icon: Award,
      color: "from-emerald-500/20 to-emerald-500/5",
      border: "border-emerald-500/30"
    },
    {
      num: "04",
      title: "Career Guidance",
      desc: "Get strategic guidance for MNC interviews, resume preparation, and healthcare BPO opportunities.",
      icon: Compass,
      color: "from-blue-500/20 to-blue-500/5",
      border: "border-blue-500/30"
    },
    {
      num: "05",
      title: "Affordable Learning",
      desc: "Professional career training engineered with affordability and flexible payment options in mind.",
      icon: WalletCards,
      color: "from-amber-500/20 to-amber-500/5",
      border: "border-amber-500/30"
    }
  ];

  return (
    <section className="relative z-20 py-10 sm:py-12 bg-obsidian-950 border-y border-gold-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`relative p-5 rounded-2xl bg-gradient-to-b ${item.color} bg-obsidian-900/80 border ${item.border} backdrop-blur-md shadow-lg flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-gold-400/80 tracking-widest">
                      {item.num}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-obsidian-950/80 border border-white/10 flex items-center justify-center text-gold-300 group-hover:scale-110 group-hover:text-gold-200 transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-white text-base mb-1.5 group-hover:text-gold-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
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
