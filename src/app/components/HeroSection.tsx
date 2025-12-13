"use client";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Users, Award, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const handleMenuClick = (menu: string) => {
    const section = document.getElementById(menu.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const stats = [
    { icon: Users, value: "500+", label: "Successful Students" },
    { icon: Award, value: "95%", label: "Success Rate" },
    { icon: Globe, value: "India & Canada ", label: "Countries Present" },
  ];

  const features = [
    "Expert Certified Instructors",
    "Flexible Online & Offline Classes",
    "Personalized Learning Paths",
    "100% Success Guarantee",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-white to-accent/5 pt-20"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm"
            >
              <Award className="w-4 h-4" />
              <span>Trusted by 500+ Students Worldwide</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight"
            >
              Master{" "}
              <span className="gradient-text">IELTS, PTE, CELPIP & French</span>{" "}
              with Expert Guidance
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 leading-relaxed text-balance"
            >
              Transform your language skills and achieve your immigration dreams
              with AIMS. Expert instructors, proven methodologies, and
              personalized support to help you succeed.
            </motion.p>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 gap-3"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                onClick={() => handleMenuClick("Contact")}
                size="lg"
                className="gradient-primary text-white hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-8 py-6 text-lg font-semibold group"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => handleMenuClick("Services")}
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary/10 rounded-full px-8 py-6 text-lg font-semibold"
              >
                Explore Courses
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
