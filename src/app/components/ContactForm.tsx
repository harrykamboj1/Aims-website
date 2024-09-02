import React from "react";
import { motion } from "framer-motion";
import {
  Instagram,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  MessageCircle,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div
      className="bg-gradient-to-r from-purple-100 to-pink-100 min-h-screen py-20"
      id="contact"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-mainPurple"
        >
          Contact Information
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-3xl mx-auto"
        >
          {/* <h3 className="text-3xl font-bold mb-8 text-mainPurple text-center">
            Contact Information
          </h3> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ContactItem
              icon={Instagram}
              href="https://www.instagram.com/aims_604/"
              text="@aims_604"
            />
            <ContactItem href="" icon={MapPin} text="Surrey, Canada" />
            <ContactItem
              href={""}
              icon={Phone}
              text={
                <>
                  India: +91 78892 25504
                  <br />
                  Canada: +1 672 866 7556
                </>
              }
            />
            <ContactItem
              icon={FaWhatsapp}
              href="https://whatsapp.com/channel/0029Va9ETE2FnSzIsNM0R32Q"
              text="AIMS Whatsapp Channel"
            />
            <ContactItem
              icon={FaWhatsapp}
              href="https://chat.whatsapp.com/K1xCHTIqUykCwNHwvHlgz0"
              text="IELTS Group"
            />
            <ContactItem
              icon={FaWhatsapp}
              href="https://chat.whatsapp.com/LgBnEuA3PUD15i7M1gBUvU"
              text="French Group"
            />
          </div>
          <div className="mt-12 flex justify-center space-x-8">
            <SocialIcon href="#" icon={Facebook} />
            <SocialIcon href="#" icon={Twitter} />
            <SocialIcon href="#" icon={Instagram} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const ContactItem = ({ icon: Icon, href, text }: any) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex items-center space-x-4"
  >
    <Icon className="w-8 h-8 text-mainPurple flex-shrink-0" />
    {href ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-mainPurple text-lg transition duration-300"
      >
        {text}
      </a>
    ) : (
      <span className="text-gray-700 text-lg">{text}</span>
    )}
  </motion.div>
);

const SocialIcon = ({ href, icon: Icon }: any) => (
  <motion.a
    href={href}
    className="text-gray-600 hover:text-mainPurple transition duration-300"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <Icon className="w-10 h-10" />
  </motion.a>
);

export default ContactForm;
