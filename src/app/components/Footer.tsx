import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <footer className="mt-16 bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <p className="text-gray-600">
                &copy; {currentYear} AIMS. All rights reserved.
              </p>
            </div>
            <div className="w-full md:w-1/3 mb-4 md:mb-0 text-center">
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-600 hover:text-mainPurple">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-mainPurple">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-mainPurple">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/3 text-right">
              <nav>
                <ul className="flex justify-end space-x-4">
                  <li>
                    <Link
                      href="/"
                      className="text-gray-600 hover:text-mainPurple"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#services"
                      className="text-gray-600 hover:text-mainPurple"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#contact"
                      className="text-gray-600 hover:text-mainPurple"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
