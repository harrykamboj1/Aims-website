import React from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  BookOpen,
  GraduationCap,
  Plane,
  FileCheck,
  MapPin,
} from "lucide-react";

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-md"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Icon className="w-12 h-12 text-mainPurple mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "Virtual Learning",
      description:
        "Interactive online classes for a seamless learning experience.",
    },
    {
      icon: BookOpen,
      title: "Meaningful Education",
      description:
        "Curriculum designed to provide practical and valuable knowledge.",
    },
    {
      icon: GraduationCap,
      title: "Online Curriculum",
      description:
        "Comprehensive online courses tailored to your learning goals.",
    },
    {
      icon: Plane,
      title: "Immigration Consultancy",
      description: "Expert guidance on immigration processes and requirements.",
    },
    {
      icon: FileCheck,
      title: "Visa Approval",
      description: "Assistance in visa application and approval procedures.",
    },
    {
      icon: MapPin,
      title: "Canada PR Guide",
      description:
        "Detailed guidance for obtaining permanent residency in Canada.",
    },
  ];

  return (
    <motion.div
      className="min-h-screen py-16 bg-gradient-to-r from-purple-50 to-pink-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="services"
    >
      <motion.div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-mainPurple mb-2">
          Our Services
        </h2>
        <h3 className="text-xl md:text-2xl text-center mb-12 text-gray-600">
          Comprehensive solutions for your educational and immigration needs
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
