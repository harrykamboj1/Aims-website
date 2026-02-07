"use client";
import { Instagram, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "IELTS Training", href: "#services" },
      { name: "CELPIP Training", href: "#services" },
      { name: "PTE Coaching", href: "#services" },
      { name: "French Language", href: "#services" },
      { name: "Immigration Consultancy", href: "#services" },
      { name: "Visa Services", href: "#services" },
      { name: "Canada PR Guide", href: "#services" },
    ],
    company: [
      { name: "About Us", href: "#home" },
      { name: "Our Gallery", href: "#gallery" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "Contact", href: "#contact" },
    ],
  };

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/aims_604/",
      label: "Instagram",
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center space-x-2">
                {/* Logo Icon/Shape */}
                <div className="w-24 h-12 gradient-primary rounded-lg flex items-center justify-center shadow-md">
                  <span className="text-white font-heading font-bold text-2xl">
                    aims
                  </span>
                </div>
                {/* Logo Text */}
                <div className="flex flex-col">
                  {/* <span className="text-2xl font-heading font-bold text-white leading-none">
                    aims
                  </span> */}
                  {/* <span className="text-sm text-gray-400 font-medium leading-none mt-0.5">
                    Education
                  </span> */}
                </div>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Empowering students worldwide to achieve their language and
              immigration goals through expert guidance, personalized learning,
              and proven success strategies.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Surrey, Canada & Ferozepur, India</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-primary" />
                <span>+1 672 866 7556</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-primary" />
                <span>+91 78892 25504</span>
              </div>
            </div>
          </motion.div>

          {/* Services Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-white font-heading font-bold text-lg mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-200 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company & Social Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white font-heading font-bold text-lg mb-6">
              Company
            </h3>
            <ul className="space-y-3 mb-8">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-200 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <div>
              <h3 className="text-white font-heading font-bold text-lg mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all duration-200"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-gray-800 py-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} aims. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <span className="text-red-500">❤️</span>
              <span>for students worldwide</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
