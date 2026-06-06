"use client";
import { motion } from "framer-motion";
import { LucideIcon, ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

interface PageHeroProps {
  badge: string;
  badgeIcon?: LucideIcon;
  title: React.ReactNode;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string; isPhone?: boolean };
}

const PageHero = ({
  badge,
  badgeIcon: BadgeIcon,
  title,
  description,
  primaryCta = { label: "Book Free Demo Class", href: "/#contact" },
  secondaryCta = { label: "Call Now", href: "tel:+16728667556", isPhone: true },
}: PageHeroProps) => (
  <section className="pt-28 pb-16 md:pt-36 md:pb-20 gradient-hero pattern-dots relative overflow-hidden">
    <div className="absolute top-20 right-0 w-80 h-80 bg-royal/8 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

    <div className="container-custom relative z-10">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider rounded-full mb-6"
        >
          {BadgeIcon && <BadgeIcon className="w-4 h-4" />}
          {badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="heading-display text-4xl md:text-5xl lg:text-6xl mb-6"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href={primaryCta.href} className="btn-primary">
            {primaryCta.label}
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={secondaryCta.href}
            className="btn-secondary"
          >
            {secondaryCta.isPhone && <Phone className="w-4 h-4" />}
            {secondaryCta.label}
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default PageHero;
