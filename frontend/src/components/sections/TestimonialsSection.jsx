import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const TestimonialsSection = () => {
  const reviews = [
    {
      name: "Kavitha R.",
      degree: "B.Sc Microbiology Graduate",
      location: "Salem, Tamil Nadu",
      rating: 5,
      feedback: "Coming from a pure microbiology background, I had zero idea about medical billing or coding. The 45-day structured program broke down ICD-10 chapters so clearly. The daily MCQ sessions helped me clear my technical round with confidence!",
      role: "Placed as Junior Medical Coder"
    },
    {
      name: "Suresh Kumar M.",
      degree: "B.Pharm Graduate",
      location: "Namakkal, Tamil Nadu",
      rating: 5,
      feedback: "The trainer's explanation of anatomy and coding guidelines was top-notch. Having access to recorded class backups was a lifesaver when revising before the mock interviews. Highly recommend VS Medical Coding Academy to all pharmacy freshers.",
      role: "Medical Records Analyst"
    },
    {
      name: "Divya Bharathi S.",
      degree: "B.Sc Biotechnology",
      location: "Coimbatore, Tamil Nadu",
      rating: 5,
      feedback: "What stood out for me was the personal attention and doubt clearance. The interactive live classes made even tricky guidelines easy to remember. The resume guidance helped me secure an interview within weeks of completion.",
      role: "Healthcare BPO Process Associate"
    }
  ];

  return (
    <section className="relative py-20 sm:py-24 bg-obsidian-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Student Success Stories"
          title="What Our Students"
          highlight="Say About Us"
          subtitle="Real reviews from Life Science graduates who gained the skills, confidence, and certification to begin their corporate healthcare careers."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 sm:p-7 rounded-3xl bg-obsidian-900 border border-gold-500/20 hover:border-gold-400 shadow-xl backdrop-blur-md flex flex-col justify-between"
            >
              <div>
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-gold-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-gold-500/30" />
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{rev.feedback}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-display font-bold text-white text-sm">
                      {rev.name}
                    </h4>
                    <p className="text-[11px] text-gold-400 font-medium">
                      {rev.degree}
                    </p>
                    <p className="text-[10px] text-slate-400">
                      {rev.location}
                    </p>
                  </div>
                  <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified Learner
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
