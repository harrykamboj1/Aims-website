// Navbar.tsx
"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
    setIsMenuOpen(false);

    // Smooth scroll to the section
    const section = document.getElementById(menu.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed w-full z-20 top-0 left-0 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <Image
            src="/AIMS_LIGHT.png"
            alt="AIMS Logo"
            width={150}
            height={50}
          />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Button className="rounded-full md:block hidden hover:bg-purple-700 bg-mainPurple transition-colors duration-300">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleMenuClick("contact");
              }}
            >
              Contact Us
            </a>
          </Button>
          <button
            type="button"
            className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-mainPurple ${
              scrolled
                ? "text-gray-500 hover:bg-purple-100"
                : "text-gray-500 hover:bg-gray-100"
            }`}
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul
            className={`flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ${
              scrolled
                ? "bg-white md:bg-transparent"
                : "bg-white md:bg-transparent"
            }`}
          >
            {["Home", "Gallery", "Services", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleMenuClick(item);
                  }}
                  className={`block py-2 px-3 rounded-md transition-colors duration-300 ${
                    activeMenu === item
                      ? "bg-mainPurple text-white"
                      : scrolled
                      ? "text-gray-900 hover:bg-purple-100"
                      : "text-gray-900 hover:bg-gray-100"
                  }`}
                  aria-current={activeMenu === item ? "page" : undefined}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
