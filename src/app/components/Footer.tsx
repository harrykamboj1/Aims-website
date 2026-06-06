"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Instagram, Phone, MapPin, ArrowUpRight } from "lucide-react";

const exams = ["TCF", "IELTS", "PTE", "CELPIP"];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const router = useRouter();

  const goHome = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (window.location.hash) {
        window.history.replaceState(null, "", "/");
      }
    } else {
      router.push("/");
    }
  };

  const programLinks = [
    { name: "IELTS Training", href: "/ielts-training" },
    { name: "PTE Coaching", href: "/pte-training" },
    { name: "CELPIP Training", href: "/celpip-training" },
    { name: "French / TCF", href: "/french-training" },
  ];

  const companyLinks = [
    { name: "About Us", href: "/#about" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact", href: "/#contact" },
  ];

  const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
      href={href}
      className="text-white/55 hover:text-white text-sm transition-colors inline-flex items-center gap-1.5 group"
    >
      <span className="group-hover:translate-x-0.5 transition-transform">{children}</span>
      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent" />
    </Link>
  );

  return (
    <footer className="bg-navy-dark text-white relative overflow-hidden">
      {/* Top accent */}
      <div className="h-1 bg-gradient-to-r from-accent via-royal to-accent" />

      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-royal/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 pattern-dots opacity-[0.07] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* CTA band */}
        <div className="py-14 md:py-16 border-b border-white/10">
          <div className="relative rounded-2xl bg-white/[0.04] border border-white/10 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="absolute top-0 left-8 w-16 h-1 bg-accent rounded-full" />
            <div className="max-w-xl pt-2">
              <p className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                Start Today
              </p>
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-2 leading-snug">
                Ready to Achieve Your Target Score?
              </h3>
              <p className="text-white/55 text-sm md:text-base leading-relaxed">
                Book a free demo class and start your journey with AIMS today.
              </p>
            </div>
            <Link
              href="/#contact"
              className="btn-primary whitespace-nowrap flex-shrink-0 w-full md:w-auto justify-center"
            >
              Book Free Demo
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 py-14">
          {/* Brand — spans 4 cols */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Link
              href="/"
              onClick={(e) => {
                if (pathname === "/") {
                  e.preventDefault();
                  goHome();
                }
              }}
              className="inline-block mb-6"
              aria-label="Go to AIMS home page"
            >
              <div className="bg-white rounded-xl px-4 py-3 inline-block shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_28px_rgba(0,0,0,0.28)] transition-shadow">
                <Image
                  src="/logo.png"
                  alt="AIMS"
                  width={130}
                  height={52}
                  className="h-11 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-white/50 text-sm leading-relaxed mb-5 max-w-xs">
              Expert language training and immigration support for students in Canada and India.
            </p>

            <p className="text-white/35 text-xs font-semibold uppercase tracking-widest mb-3">
              Our Programs
            </p>
            <div className="flex flex-wrap gap-2">
              {exams.map((exam) => (
                <span
                  key={exam}
                  className="px-3 py-1 text-xs font-bold tracking-wide rounded-full border border-white/15 text-white/70 bg-white/5"
                >
                  {exam}
                </span>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] mb-5 text-white/90 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-accent rounded-full" />
              Programs
            </h4>
            <ul className="space-y-3.5">
              {programLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.name}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] mb-5 text-white/90 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-accent rounded-full" />
              Company
            </h4>
            <ul className="space-y-3.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.name}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] mb-5 text-white/90 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-accent rounded-full" />
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-accent" />
                </span>
                <div>
                  <p className="text-xs text-white/35 mb-0.5">Locations</p>
                  <p className="text-sm text-white/60 leading-snug">Surrey, Canada & Ferozepur, India</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-accent" />
                </span>
                <div className="space-y-1">
                  <p className="text-xs text-white/35 mb-0.5">Phone</p>
                  <a href="tel:+16728667556" className="block text-sm text-white/60 hover:text-white transition-colors">
                    +1 672 866 7556
                  </a>
                  <a href="tel:+917889225504" className="block text-sm text-white/60 hover:text-white transition-colors">
                    +91 78892 25504
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center">
                  <Instagram className="w-4 h-4 text-accent" />
                </span>
                <div>
                  <p className="text-xs text-white/35 mb-0.5">Social</p>
                  <a
                    href="https://www.instagram.com/aims_604/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    @aims_604
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/35">
            &copy; {currentYear} AIMS. All rights reserved.
          </p>
          <p className="text-xs text-white/35 tracking-widest uppercase">
            Achieve · Improve · Master · Succeed
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
