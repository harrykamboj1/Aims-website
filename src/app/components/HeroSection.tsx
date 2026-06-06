"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle, GraduationCap, TrendingUp } from "lucide-react";

const stats = [
  { value: "3000+", label: "Students Trained" },
  { value: "95%", label: "Success Rate" },
  { value: "2", label: "Countries" },
];

const features = [
  "Expert certified instructors",
  "Online & in-person classes",
  "Personalized study plans",
  "Immigration support included",
];

const exams = ["TCF", "IELTS", "PTE", "CELPIP"];

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center gradient-hero pattern-dots overflow-hidden pt-24">
      {/* Decorative shapes */}
      <div className="absolute top-32 right-0 w-[500px] h-[500px] bg-royal/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-accent rounded-full animate-float opacity-60" />
      <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-royal/40 rounded-full animate-float opacity-40" style={{ animationDelay: "1s" }} />

      <div className="container-custom relative z-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="section-label">
              <span>Achieve · Improve · Master · Succeed</span>
            </div>

            <h1 className="heading-display text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl text-balance">
              Your Path to{" "}
              <span className="text-accent">Language</span>{" "}
              Excellence Starts Here
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Expert coaching for TCF, IELTS, PTE & CELPIP — plus immigration
              guidance — from Surrey, Canada and Ferozepur, India. Transform
              your scores and your future with AIMS.
            </p>

            {/* Exam pills */}
            <div className="flex flex-wrap gap-2">
              {exams.map((exam) => (
                <span
                  key={exam}
                  className="px-4 py-1.5 bg-navy text-white text-sm font-semibold rounded-full tracking-wide"
                >
                  {exam}
                </span>
              ))}
            </div>

            <ul className="grid sm:grid-cols-2 gap-3">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-navy/80">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 pt-2">
              <button onClick={() => scrollTo("contact")} className="btn-primary group">
                Book Free Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => scrollTo("programs")} className="btn-secondary">
                Explore Programs
              </button>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white rounded-3xl shadow-[0_20px_60px_rgba(26,43,86,0.12)] border border-navy/5 p-8 lg:p-10">
              <div className="absolute -top-4 -right-4 bg-accent text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5" />
                95% Success Rate
              </div>

              <div className="flex justify-center mb-8">
                <Image
                  src="/logo.png"
                  alt="AIMS Logo"
                  width={320}
                  height={128}
                  className="w-full max-w-xs h-auto"
                  priority
                />
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center p-3 bg-cream rounded-xl">
                    <div className="text-2xl font-heading font-bold text-navy">{stat.value}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 p-4 bg-navy rounded-2xl text-white">
                <div className="p-3 bg-white/10 rounded-xl">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Trusted by 3000+ students</p>
                  <p className="text-white/70 text-xs mt-0.5">Surrey, Canada · Ferozepur, India</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
