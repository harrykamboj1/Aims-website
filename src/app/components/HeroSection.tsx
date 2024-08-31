"use client";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-bl from-white via-[#f6f4f8] to-lightPink h-screen flex flex-col items-center justify-center"
    >
      {/* Animated Heading */}
      <motion.h1
        className="text-5xl md:text-7xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="text-mainPurple">AIMS</span>
      </motion.h1>
      <motion.h3
        className="text-xl md:text-3xl text-center max-w-3xl mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        Achieve Your Language Dreams with AIMS – Master IELTS, PTE, and French
        with Expert Guidance!
      </motion.h3>
      {/* Buttons Container */}
      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <motion.button
          className="btn-primary px-6 py-3 bg-mainPurple text-white rounded-full"
          whileHover={{ scale: 1.05, backgroundColor: "#6A35C2" }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us
        </motion.button>
        <motion.button
          className="px-6 py-3 border-2 border-mainPurple text-mainPurple rounded-full"
          whileHover={{
            scale: 1.05,
            backgroundColor: "rgba(125, 65, 225, 0.1)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
