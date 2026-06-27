"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Smartphone,
  Mic,
  PenLine,
  Sparkles,
  Gauge,
  ArrowRight,
  CheckCircle2,
  Flame,
  TrendingUp,
  AlertTriangle,
  Globe,
} from "lucide-react";

// Once the apps are deployed, swap these for the live URLs.
// Left as in-page contact CTAs until then.
const FRENCH_APP_URL = "/#contact";
const IELTS_APP_URL = "/#contact";

const apps = [
  {
    name: "AIMS French Tutor",
    badge: "TCF Canada",
    description:
      "An AI-powered TCF Canada coach. Sit a realistic guided interview with an AI examiner, write timed responses, and drill your pronunciation — all scored in real time against the official criteria.",
    href: FRENCH_APP_URL,
    color: "from-navy to-navy-light",
    accent: "bg-royal-light text-royal",
    icon: Mic,
    tasks: ["Intro", "Interaction", "Argumentation", "Free discussion"],
    features: [
      "Live speaking call with an AI examiner",
      "All 3 expression orale tasks",
      "Writing tasks with word count & instant evaluation",
      "Pronunciation practice with per-phrase feedback",
      "Full timed mock tests, end to end",
    ],
  },
  {
    name: "AIMS IELTS Tutor",
    badge: "Speaking & Writing",
    description:
      "Interactive AI practice for IELTS Speaking and Writing. Rehearse every part of the test, submit Academic or General writing, and get an instant band-score breakdown with actionable feedback.",
    href: IELTS_APP_URL,
    color: "from-accent to-red-600",
    accent: "bg-red-light text-accent",
    icon: PenLine,
    tasks: ["Part 1–3", "Academic", "General"],
    features: [
      "Speaking Parts 1–3: interview, cue-card long turn & discussion",
      "Academic writing: Task 1 report + Task 2 essay",
      "General writing: letter + essay tasks",
      "Instant band-score evaluation per response",
      "Real-time, exam-style feedback on every answer",
    ],
  },
];

const highlights = [
  { icon: Sparkles, label: "AI-powered feedback" },
  { icon: Gauge, label: "Instant score evaluation" },
  { icon: Flame, label: "Daily streaks & goals" },
  { icon: TrendingUp, label: "Progress dashboard" },
  { icon: AlertTriangle, label: "Top-errors tracking" },
  { icon: Globe, label: "Multilingual interface" },
  { icon: Smartphone, label: "Practice anytime, anywhere" },
];

const AppPromo = () => (
  <section id="apps" className="section-padding bg-white">
    <div className="container-custom">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <div className="section-label justify-center mb-4">
          <span>Practice On Your Own</span>
        </div>
        <h2 className="heading-display text-3xl md:text-5xl mb-4">
          AI Practice Apps for French &amp; IELTS
        </h2>
        <p className="text-muted-foreground text-lg">
          Sharpen your skills between classes with our AI tutors — speak, write
          and get instant, exam-style feedback whenever you want. Track streaks,
          goals and your most common mistakes as your scores climb.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {apps.map((app, i) => (
          <motion.div
            key={app.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Link href={app.href} className="group block h-full">
              <div className="card-elevated h-full p-7 flex flex-col group-hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${app.color} text-white shadow-md`}
                  >
                    <app.icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${app.accent}`}
                  >
                    {app.badge}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-navy mb-2 group-hover:text-accent transition-colors">
                  {app.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {app.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {app.tasks.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-semibold px-2.5 py-1 rounded-full bg-navy/5 text-navy/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2.5 mb-6">
                  {app.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-navy/70"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-navy group-hover:text-accent transition-colors">
                  Try the app
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3"
      >
        {highlights.map((h) => (
          <div
            key={h.label}
            className="flex items-center gap-2 text-sm font-medium text-navy/70"
          >
            <h.icon className="w-4 h-4 text-accent" />
            {h.label}
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default AppPromo;
