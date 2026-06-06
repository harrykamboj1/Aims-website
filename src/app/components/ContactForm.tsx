"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Instagram,
  MapPin,
  Phone,
  Mail,
  User,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { saveContactSubmission } from "@/lib/supabase";
import { sendContactEmail } from "@/lib/email";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

const services = [
  "IELTS Training",
  "PTE Coaching",
  "CELPIP Training",
  "French / TCF Training",
  "Immigration Consultancy",
  "Visa Approval Services",
  "Canada PR Guidance",
  "Other",
];

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      await saveContactSubmission(formData);
      await sendContactEmail(formData);
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again or call us directly.");
    }
  };

  return (
    <section id="contact" className="section-padding bg-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-royal/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="section-label justify-center mb-4">
            <span>Get In Touch</span>
          </div>
          <h2 className="heading-display text-3xl md:text-5xl mb-4">
            Start Your Journey Today
          </h2>
          <p className="text-muted-foreground text-lg">
            Book a free demo class or ask us anything. We respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="card-elevated p-6">
              <h3 className="font-heading text-lg font-bold text-navy mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent" />
                Our Locations
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-cream rounded-lg">
                  <p className="text-xs font-semibold uppercase tracking-wider text-navy/40 mb-0.5">Canada</p>
                  <p className="text-navy font-medium">Surrey, Canada</p>
                </div>
                <div className="p-3 bg-cream rounded-lg">
                  <p className="text-xs font-semibold uppercase tracking-wider text-navy/40 mb-0.5">India</p>
                  <p className="text-navy font-medium">Ferozepur, India</p>
                </div>
              </div>
            </div>

            <div className="card-elevated p-6">
              <h3 className="font-heading text-lg font-bold text-navy mb-4 flex items-center gap-2">
                <Phone className="w-5 h-5 text-accent" />
                Call Us
              </h3>
              <div className="space-y-3">
                <a href="tel:+16728667556" className="block p-3 bg-cream rounded-lg hover:bg-royal-light/50 transition-colors">
                  <p className="text-xs font-semibold uppercase tracking-wider text-navy/40 mb-0.5">Canada</p>
                  <p className="text-navy font-semibold">+1 672 866 7556</p>
                </a>
                <a href="tel:+917889225504" className="block p-3 bg-cream rounded-lg hover:bg-royal-light/50 transition-colors">
                  <p className="text-xs font-semibold uppercase tracking-wider text-navy/40 mb-0.5">India</p>
                  <p className="text-navy font-semibold">+91 78892 25504</p>
                </a>
              </div>
            </div>

            <a
              href="https://www.instagram.com/aims_604/"
              target="_blank"
              rel="noopener noreferrer"
              className="card-elevated p-6 flex items-center gap-4 hover:-translate-y-0.5 transition-transform group"
            >
              <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                <Instagram className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-navy group-hover:text-accent transition-colors">@aims_604</p>
                <p className="text-sm text-muted-foreground">Follow us on Instagram</p>
              </div>
            </a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="card-elevated p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy mb-1.5">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-navy/30" />
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-cream border border-navy/10 rounded-lg text-navy placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-royal/30 focus:border-royal transition-all"
                      placeholder="Your name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy mb-1.5">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-navy/30" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-cream border border-navy/10 rounded-lg text-navy placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-royal/30 focus:border-royal transition-all"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-navy mb-1.5">
                    Phone
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-navy/30" />
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-cream border border-navy/10 rounded-lg text-navy placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-royal/30 focus:border-royal transition-all"
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-navy mb-1.5">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-cream border border-navy/10 rounded-lg text-navy focus:outline-none focus:ring-2 focus:ring-royal/30 focus:border-royal transition-all"
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-cream border border-navy/10 rounded-lg text-navy placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-royal/30 focus:border-royal transition-all resize-none"
                  placeholder="Tell us about your goals..."
                />
              </div>

              {status === "success" && (
                <div className="flex items-center gap-2 p-4 bg-green-50 text-green-700 rounded-lg text-sm">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  Thank you! We&apos;ll get back to you within 24 hours.
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2 p-4 bg-red-50 text-red-700 rounded-lg text-sm">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-primary w-full !py-4 disabled:opacity-60"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
