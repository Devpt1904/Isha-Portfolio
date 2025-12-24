"use client";

import type { PressEvent } from "@react-aria/interactions";

import { motion } from "framer-motion";
import { Link } from "@heroui/react";

import { Hole } from "@/components/backgrounds/hole/hole";
import { GlowButton } from "@/components/glow-button";
import { DATA } from "@/data";

export const HeroSection = ({
  showBackground = true,
  name = DATA.home.hero.name,
  title = DATA.home.hero.title,
  subtitle = DATA.home.hero.subtitle,
}: {
  showBackground?: boolean;
  name?: string;
  title?: string;
  subtitle?: string;
}) => {
  const scrollToWork = (_e: PressEvent) => {
    const workSection = document.getElementById("work-section");

    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center justify-center relative overflow-hidden bg-background px-4 sm:px-6">
      {showBackground && <Hole />}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/10 to-transparent" />
      <div className="container mx-auto px-0 sm:px-4 z-10 py-8 sm:py-0">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-5 md:mb-6 text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Hi, I&apos;m {name} &mdash; I transform complex data into clear
            strategic value.
          </motion.h1>

          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="text-foreground-600 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-7 md:mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {title}: {subtitle}
          </motion.p>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-row gap-2 sm:gap-4 md:gap-6 justify-center items-center w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              download
              aria-label="Download CV in PDF format"
              className="flex-1 sm:flex-initial max-w-[160px] sm:max-w-none"
              href="/Isha-resume.pdf"
            >
              <GlowButton
                label="Download CV"
                ariaLabel="Download CV in PDF format"
                className="scale-[0.85] sm:scale-100"
              />
            </Link>
            <Link
              aria-label="View my projects"
              className="flex-1 sm:flex-initial max-w-[160px] sm:max-w-none"
              href="/projects"
            >
              <GlowButton
                label="View Work"
                ariaLabel="View my projects"
                className="scale-[0.85] sm:scale-100"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
