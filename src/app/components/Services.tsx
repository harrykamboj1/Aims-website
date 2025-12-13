"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  BookOpen,
  GraduationCap,
  Plane,
  FileCheck,
  MapPin,
  Users,
  Clock,
  Award,
  Globe,
  MessageSquare,
  CheckCircle2,
  FileText,
} from "lucide-react";

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  index: number;
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  features,
  index,
}: ServiceCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -10, scale: 1.02 }}
    className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
  >
    {/* Decorative Gradient */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

    <div className="relative z-10">
      {/* Icon */}
      <div className="mb-6">
        <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-white" />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-2xl font-heading font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

      {/* Features */}
      <ul className="space-y-3">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start space-x-3">
            <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
            <span className="text-gray-700 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "IELTS Training",
      description:
        "Comprehensive IELTS preparation with expert instructors and proven strategies to achieve your target band score.",
      features: [
        "All 4 modules covered",
        "Mock tests & practice",
        "Personalized feedback",
        "Flexible schedules",
      ],
    },
    {
      icon: BookOpen,
      title: "PTE Coaching",
      description:
        "Master PTE Academic with our structured curriculum designed to help you excel in all sections of the exam.",
      features: [
        "Real exam simulation",
        "Score improvement guarantee",
        "Expert guidance",
        "Online & offline options",
      ],
    },
    {
      icon: FileText,
      title: "CELPIP Training",
      description:
        "Excel in CELPIP with comprehensive preparation for all four skills. Perfect for Canadian immigration and citizenship applications.",
      features: [
        "All 4 skills covered",
        "Canadian English focus",
        "Practice tests & feedback",
        "Immigration-focused curriculum",
      ],
    },
    {
      icon: GraduationCap,
      title: "French Language Training",
      description:
        "Learn French from certified instructors with interactive classes and immersive learning experiences.",
      features: [
        "A1 to C2 levels",
        "DELF/DALF preparation",
        "Conversational practice",
        "Cultural immersion",
      ],
    },
    {
      icon: Plane,
      title: "Immigration Consultancy",
      description:
        "Expert guidance on immigration processes, visa applications, and documentation for Canada and other countries.",
      features: [
        "Free consultation",
        "Documentation support",
        "Application assistance",
        "Success tracking",
      ],
    },
    {
      icon: FileCheck,
      title: "Visa Approval Services",
      description:
        "Comprehensive visa application support with high success rates and personalized assistance throughout the process.",
      features: [
        "Application review",
        "Document preparation",
        "Interview preparation",
        "Follow-up support",
      ],
    },
    {
      icon: MapPin,
      title: "Canada PR Guidance",
      description:
        "Complete assistance for Canadian Permanent Residency with step-by-step guidance and expert consultation.",
      features: [
        "Express Entry support",
        "Provincial nominations",
        "Documentation help",
        "Timeline planning",
      ],
    },
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Students Trained" },
    { icon: Award, value: "95%", label: "Success Rate" },
    { icon: Clock, value: "24/7", label: "Support Available" },
    { icon: Globe, value: "India & Canada", label: "Countries Present" },
  ];

  return (
    <section
      id="services"
      className="section-padding bg-gradient-to-b from-white via-gray-50 to-white"
    >
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-6"
          >
            <Award className="w-4 h-4" />
            <span>Our Services</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Comprehensive{" "}
            <span className="gradient-text">Educational Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            From language training to immigration support, we provide end-to-end
            solutions to help you achieve your dreams.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary to-accent rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 backdrop-blur-sm">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/90 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
