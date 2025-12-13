"use client";
import React from "react";
import { motion } from "framer-motion";
import { Instagram, MapPin, Phone, MessageCircle } from "lucide-react";

interface ContactItemProps {
  icon: React.ElementType;
  href?: string;
  text: React.ReactNode;
  label?: string;
}

const ContactItem = ({ icon: Icon, href, text, label }: ContactItemProps) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -5 }}
    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
  >
    <div className="flex items-start space-x-4">
      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
        <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
      </div>
      <div className="flex-1">
        {label && (
          <p className="text-sm font-semibold text-gray-500 mb-1">{label}</p>
        )}
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-primary text-lg font-semibold transition-colors block"
          >
            {text}
          </a>
        ) : (
          <span className="text-gray-900 text-lg font-semibold block">
            {text}
          </span>
        )}
      </div>
    </div>
  </motion.div>
);

const SocialIcon = ({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center space-y-2 p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group"
    whileHover={{ scale: 1.1, y: -5 }}
    whileTap={{ scale: 0.95 }}
    aria-label={label}
  >
    <Icon className="w-8 h-8 text-gray-600 group-hover:text-primary transition-colors" />
    <span className="text-sm text-gray-600 group-hover:text-primary font-medium">
      {label}
    </span>
  </motion.a>
);

const ContactForm = () => {
  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-br from-primary/5 via-white to-accent/5 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
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
            <MessageCircle className="w-4 h-4" />
            <span>Get In Touch</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Let&apos;s Start Your{" "}
            <span className="gradient-text">Journey Together</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Have questions? We&apos;re here to help! Reach out to us and
            let&apos;s discuss how we can help you achieve your goals.
          </p>
        </motion.div>

        {/* Contact Information Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Locations Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl h-full">
                <h3 className="text-2xl font-heading font-bold mb-6 text-gray-900 flex items-center space-x-2">
                  <MapPin className="w-6 h-6 text-primary" />
                  <span>Our Locations</span>
                </h3>
                <div className="space-y-4">
                  <ContactItem
                    icon={MapPin}
                    text="Surrey, Canada"
                    label="Canada Office"
                  />
                  <ContactItem
                    icon={MapPin}
                    text="Ferozepur, India"
                    label="India Office"
                  />
                </div>
              </div>
            </motion.div>

            {/* Phone Numbers Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl h-full">
                <h3 className="text-2xl font-heading font-bold mb-6 text-gray-900 flex items-center space-x-2">
                  <Phone className="w-6 h-6 text-primary" />
                  <span>Contact Numbers</span>
                </h3>
                <div className="space-y-4">
                  <ContactItem
                    icon={Phone}
                    text="+1 672 866 7556"
                    label="Phone (Canada)"
                  />
                  <ContactItem
                    icon={Phone}
                    text="+91 78892 25504"
                    label="Phone (India)"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Social Media Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className=""
          >
            <h3 className="text-2xl font-heading font-bold mb-6 text-gray-900 text-center">
              Follow Us on Social Media
            </h3>
            <div className="flex justify-center">
              <SocialIcon
                href="https://www.instagram.com/aims_604/"
                icon={Instagram}
                label="Instagram"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
