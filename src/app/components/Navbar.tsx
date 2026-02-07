"use client";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
    setIsMenuOpen(false);
    const section = document.getElementById(menu.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center space-x-2">
              {/* Logo Icon/Shape */}
              <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-heading font-bold text-xl">
                  A
                </span>
              </div>
              {/* Logo Text */}
              <div className="flex flex-col">
                <span className="text-2xl font-heading font-bold gradient-text leading-none">
                  Aims
                </span>
                {/* <span className="text-xs text-gray-500 font-medium leading-none mt-0.5">
                  Education
                </span> */}
              </div>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleMenuClick(item.name)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeMenu === item.name
                    ? "bg-primary text-white shadow-md"
                    : "text-gray-700 hover:text-primary hover:bg-primary/10"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              onClick={() => handleMenuClick("Contact")}
              className="gradient-primary text-white hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-6 py-2.5 font-semibold"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="container-custom py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleMenuClick(item.name)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all ${
                    activeMenu === item.name
                      ? "bg-primary text-white"
                      : "text-gray-700 hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <Button
                onClick={() => handleMenuClick("Contact")}
                className="w-full mt-4 gradient-primary text-white rounded-full py-3 font-semibold"
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
