import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Instagram,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
} from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div
      className="bg-gradient-to-r  from-purple-50 to-pink-50 min-h-screen py-20"
      id="contact"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-mainPurple">
          Get in Touch
        </h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <motion.form
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-gray-800 font-semibold mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mainPurple focus:border-transparent transition duration-300"
                  required
                  placeholder="John Doe"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-800 font-semibold mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mainPurple focus:border-transparent transition duration-300"
                  required
                  placeholder="john@example.com"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-800 font-semibold mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mainPurple focus:border-transparent transition duration-300 resize-none"
                  required
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-mainPurple text-white font-bold py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </motion.form>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h3 className="text-3xl font-bold mb-6 text-mainPurple">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Instagram className="w-8 h-8 text-mainPurple mr-4" />
                  <a
                    href="https://www.instagram.com/aims_604/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-mainPurple text-lg transition duration-300"
                  >
                    @aims_604
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-8 h-8 text-mainPurple mr-4" />
                  <span className="text-gray-700 text-lg">Surrey, Canada</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-8 h-8 text-mainPurple mr-4" />
                  <div className="text-gray-700">
                    <p className="text-lg">India: +91 78892 25504</p>
                    <p className="text-lg">Canada: +1 672 866 7556</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-8 h-8 text-mainPurple mr-4" />
                  <a
                    href="mailto:info@aims.com"
                    className="text-gray-700 hover:text-mainPurple text-lg transition duration-300"
                  >
                    info@aims.com
                  </a>
                </div>
              </div>
              <div className="mt-8 flex justify-center space-x-6">
                <a
                  href="#"
                  className="text-gray-600 hover:text-mainPurple transition duration-300"
                >
                  <Facebook className="w-8 h-8" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-mainPurple transition duration-300"
                >
                  <Twitter className="w-8 h-8" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-mainPurple transition duration-300"
                >
                  <Instagram className="w-8 h-8" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
