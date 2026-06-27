"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { name: "Home", id: "home" },
  { name: "Programs", id: "programs" },
  { name: "Apps", id: "apps" },
  { name: "About", id: "about" },
  { name: "Reviews", id: "testimonials" },
  { name: "Contact", id: "contact" },
];

const programLinks = [
  { name: "IELTS Training", href: "/ielts-training" },
  { name: "PTE Coaching", href: "/pte-training" },
  { name: "CELPIP Training", href: "/celpip-training" },
  { name: "French / TCF", href: "/french-training" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false);
    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${id}`);
    }
  };

  const goHome = () => {
    setIsMenuOpen(false);
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (window.location.hash) {
        window.history.replaceState(null, "", "/");
      }
    } else {
      router.push("/");
    }
  };

  return (
    <header
      className={`fixed w-full z-50 top-0 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(26,43,86,0.08)]"
          : "bg-white/70 backdrop-blur-sm"
      }`}
    >
      {/* Top accent bar */}
      <div className="h-1 gradient-navy" />

      <nav className="container-custom">
        <div className="flex items-center justify-between h-[72px] lg:h-20">
          <Link
            href="/"
            onClick={(e) => {
              setIsMenuOpen(false);
              if (pathname === "/") {
                e.preventDefault();
                goHome();
              }
            }}
            className="flex-shrink-0"
            aria-label="Go to AIMS home page"
          >
            <Image
              src="/logo.png"
              alt="AIMS - Achieve Improve Master Succeed"
              width={140}
              height={56}
              className="h-12 lg:h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.id === "programs" ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setProgramsOpen(true)}
                  onMouseLeave={() => setProgramsOpen(false)}
                >
                  <button
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-navy/80 hover:text-navy rounded-lg hover:bg-navy/5 transition-colors"
                  >
                    {item.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${programsOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {programsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-[0_8px_30px_rgba(26,43,86,0.12)] border border-navy/10 py-2 overflow-hidden"
                      >
                        {programLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="block px-4 py-2.5 text-sm text-navy/80 hover:text-navy hover:bg-royal-light/50 transition-colors"
                          >
                            {link.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.id)}
                  className="px-4 py-2 text-sm font-medium text-navy/80 hover:text-navy rounded-lg hover:bg-navy/5 transition-colors"
                >
                  {item.name}
                </button>
              )
            )}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+16728667556"
              className="flex items-center gap-2 text-sm font-medium text-navy/70 hover:text-navy transition-colors"
            >
              <Phone className="w-4 h-4 text-accent" />
              +1 672 866 7556
            </a>
            <button onClick={() => handleNavClick("contact")} className="btn-primary text-sm !py-2.5 !px-5">
              Free Demo Class
            </button>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-navy hover:bg-navy/5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-navy/10"
          >
            <div className="container-custom py-4 space-y-1">
              {navItems.map((item) =>
                item.id === "programs" ? (
                  <div key={item.name} className="space-y-1">
                    <p className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-navy/40">
                      Programs
                    </p>
                    {programLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-4 py-2.5 text-navy/80 hover:text-navy hover:bg-navy/5 rounded-lg"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.id)}
                    className="w-full text-left px-4 py-3 text-navy/80 hover:text-navy hover:bg-navy/5 rounded-lg font-medium"
                  >
                    {item.name}
                  </button>
                )
              )}
              <button
                onClick={() => handleNavClick("contact")}
                className="w-full btn-primary mt-3 !py-3"
              >
                Book Free Demo Class
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
