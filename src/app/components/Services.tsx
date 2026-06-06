"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Plane,
  FileCheck,
  MapPin,
  Users,
  Clock,
  Award,
  Globe,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const additionalServices = [
  {
    icon: Plane,
    title: "Immigration Consultancy",
    description: "Expert guidance on visa applications, documentation, and immigration processes for Canada and beyond.",
    features: ["Free consultation", "Documentation support", "Application assistance"],
  },
  {
    icon: FileCheck,
    title: "Visa Approval Services",
    description: "Comprehensive visa application support with high success rates and personalized assistance.",
    features: ["Application review", "Interview prep", "Follow-up support"],
  },
  {
    icon: MapPin,
    title: "Canada PR Guidance",
    description: "Complete assistance for Canadian Permanent Residency with step-by-step expert consultation.",
    features: ["Express Entry support", "Provincial nominations", "Timeline planning"],
  },
];

const stats = [
  { icon: Users, value: "3000+", label: "Students Trained" },
  { icon: Award, value: "95%", label: "Success Rate" },
  { icon: Clock, value: "24/7", label: "Support Available" },
  { icon: Globe, value: "2", label: "Countries" },
];

const Services = () => (
  <section id="services" className="section-padding bg-cream">
    <div className="container-custom">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <div className="section-label justify-center mb-4">
          <span>Beyond Language Training</span>
        </div>
        <h2 className="heading-display text-3xl md:text-5xl mb-4">
          Complete Immigration Support
        </h2>
        <p className="text-muted-foreground text-lg">
          From language scores to landing in Canada — we guide you every step of the way.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {additionalServices.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-elevated p-7 group hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-5 group-hover:bg-accent transition-colors duration-300">
              <service.icon className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-heading text-xl font-bold text-navy mb-2">{service.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-navy/70">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Stats banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="gradient-navy rounded-3xl p-8 md:p-12 relative overflow-hidden"
      >
        <div className="absolute inset-0 pattern-dots opacity-10 pointer-events-none" />
        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl mb-3">
                <stat.icon className="w-5 h-5 text-white" />
              </div>
              <div className="text-3xl font-heading font-bold text-white">{stat.value}</div>
              <div className="text-white/60 text-sm mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="text-center mt-10">
        <Link href="/#contact" className="btn-primary inline-flex">
          Get Free Consultation
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default Services;
