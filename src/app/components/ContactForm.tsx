"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Instagram,
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  User,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  BookOpen,
} from "lucide-react";
import { saveContactSubmission } from "@/lib/supabase";
import { sendContactEmail } from "@/lib/email";

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

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const services = [
    "IELTS Training",
    "PTE Coaching",
    "CELPIP Training",
    "French Language Training",
    "Immigration Consultancy",
    "Visa Approval Services",
    "Canada PR Guidance",
    "Other",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      // Save to Supabase
      await saveContactSubmission(formData);

      // Send email notification
      await sendContactEmail(formData);

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      setErrorMessage(
        "Something went wrong. Please try again or contact us directly."
      );
    }
  };

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
            Have questions? We&apos;re here to help! Fill out the form below and
            our team will get back to you within 24 hours.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-100">
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 gradient-primary rounded-xl">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900">
                  Send Us a Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-gray-900 placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your email address"
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-gray-900 placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div className="relative">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your phone number"
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-gray-900 placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div className="relative">
                  <label
                    htmlFor="service"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Service Interested In *
                  </label>
                  <div className="relative">
                    <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-gray-900 appearance-none cursor-pointer"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    placeholder="Tell us about your goals and how we can help..."
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-gray-900 placeholder:text-gray-400 resize-none"
                  />
                </div>

                {/* Status Messages */}
                <AnimatePresence mode="wait">
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center space-x-3 p-4 bg-green-50 border border-green-200 rounded-xl"
                    >
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                      <p className="text-green-700 font-medium">
                        Thank you! Your message has been sent successfully.
                        We&apos;ll get back to you soon!
                      </p>
                    </motion.div>
                  )}

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center space-x-3 p-4 bg-red-50 border border-red-200 rounded-xl"
                    >
                      <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                      <p className="text-red-700 font-medium">{errorMessage}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 px-8 gradient-primary text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Locations Section */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
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

            {/* Phone Numbers Section */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-heading font-bold mb-6 text-gray-900 flex items-center space-x-2">
                <Phone className="w-6 h-6 text-primary" />
                <span>Contact Numbers</span>
              </h3>
              <div className="space-y-4">
                <ContactItem
                  icon={Phone}
                  href="tel:+16728667556"
                  text="+1 672 866 7556"
                  label="Phone (Canada)"
                />
                <ContactItem
                  icon={Phone}
                  href="tel:+917889225504"
                  text="+91 78892 25504"
                  label="Phone (India)"
                />
              </div>
            </div>

            {/* Email Section */}
            {/* <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-heading font-bold mb-6 text-gray-900 flex items-center space-x-2">
                <Mail className="w-6 h-6 text-primary" />
                <span>Email Us</span>
              </h3>
              <ContactItem
                icon={Mail}
                href="mailto:info@aims-education.com"
                text="info@aims-education.com"
                label="General Inquiries"
              />
            </div> */}

            {/* Social Media Section */}
            <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
              <h3 className="text-2xl font-heading font-bold mb-6 text-gray-900">
                Follow Us on Social Media
              </h3>
              <div className="flex justify-center">
                <SocialIcon
                  href="https://www.instagram.com/aims_604/"
                  icon={Instagram}
                  label="Instagram"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
