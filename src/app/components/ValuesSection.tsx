"use client";
import { motion } from "framer-motion";
import { Target, TrendingUp, Trophy, Rocket } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Achieve",
    description: "Set ambitious goals and reach the scores you need for immigration, study, or career advancement.",
  },
  {
    icon: TrendingUp,
    title: "Improve",
    description: "Continuous progress through expert feedback, mock tests, and personalized learning paths.",
  },
  {
    icon: Trophy,
    title: "Master",
    description: "Deep mastery of all four language skills with proven strategies from certified instructors.",
  },
  {
    icon: Rocket,
    title: "Succeed",
    description: "Join 3000+ students who've achieved their dreams with AIMS guidance and support.",
  },
];

const ValuesSection = () => (
  <section className="py-16 bg-navy relative overflow-hidden">
    <div className="absolute inset-0 pattern-dots opacity-20 pointer-events-none" />
    <div className="container-custom relative z-10">
      <div className="text-center mb-12">
        <p className="text-accent text-xs font-semibold uppercase tracking-[0.25em] mb-3">
          Our Philosophy
        </p>
        <h2 className="heading-display text-3xl md:text-4xl text-white">
          Built on Four Pillars of Success
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group text-center p-6 rounded-2xl border border-white/10 hover:border-accent/40 hover:bg-white/5 transition-all duration-300"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/15 text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
              <v.icon className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-xl font-bold text-white mb-2">{v.title}</h3>
            <p className="text-white/60 text-sm leading-relaxed">{v.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ValuesSection;
