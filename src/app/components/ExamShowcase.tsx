"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BookOpen, Globe, Monitor, FileText } from "lucide-react";

const exams = [
  {
    name: "TCF",
    fullName: "French / TCF Canada",
    description: "Master French for Quebec & Canada immigration with DELF, DALF, TEF & TCF preparation.",
    href: "/french-training",
    icon: Globe,
    color: "from-navy to-navy-light",
    accent: "bg-royal-light text-royal",
  },
  {
    name: "IELTS",
    fullName: "IELTS Training",
    description: "Achieve band 7+ with expert coaching across all four modules and unlimited mock tests.",
    href: "/ielts-training",
    icon: BookOpen,
    color: "from-accent to-red-600",
    accent: "bg-red-light text-accent",
  },
  {
    name: "PTE",
    fullName: "PTE Academic",
    description: "Score 79+ with AI-scored practice, real exam simulation, and proven strategies.",
    href: "/pte-training",
    icon: Monitor,
    color: "from-royal to-blue-600",
    accent: "bg-royal-light text-royal",
  },
  {
    name: "CELPIP",
    fullName: "CELPIP Training",
    description: "Excel in Canadian English for PR & citizenship with immigration-focused curriculum.",
    href: "/celpip-training",
    icon: FileText,
    color: "from-navy-dark to-navy",
    accent: "bg-navy/10 text-navy",
  },
];

const ExamShowcase = () => (
  <section id="programs" className="section-padding bg-white">
    <div className="container-custom">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <div className="section-label justify-center mb-4">
          <span>Our Programs</span>
        </div>
        <h2 className="heading-display text-3xl md:text-5xl mb-4">
          Exam Preparation That Delivers Results
        </h2>
        <p className="brand-divider mt-6">
          <span className="px-3">TCF · IELTS · PTE · CELPIP</span>
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {exams.map((exam, i) => (
          <motion.div
            key={exam.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <Link href={exam.href} className="group block h-full">
              <div className="card-elevated h-full p-6 flex flex-col group-hover:-translate-y-1">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${exam.color} text-white mb-5 shadow-md`}>
                  <exam.icon className="w-5 h-5" />
                </div>
                <span className={`inline-block self-start text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3 ${exam.accent}`}>
                  {exam.name}
                </span>
                <h3 className="font-heading text-xl font-bold text-navy mb-2 group-hover:text-accent transition-colors">
                  {exam.fullName}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
                  {exam.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy group-hover:text-accent transition-colors">
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExamShowcase;
