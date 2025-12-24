"use client";

import { memo } from "react";
import { Card, CardFooter, Image } from "@heroui/react";
import { motion } from "framer-motion";

import { HighlightText } from "@/components/textAnimations/highlight-text";
import { SplittingText } from "@/components/textAnimations/splitting-text";
import { ProfileCardProps } from "@/components/about/types";

export const ProfileCard = memo(function ProfileCard({
  image,
  name,
  title,
  description,
}: ProfileCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full max-w-6xl mx-auto mb-12"
    >
      <Card className="relative w-full p-0 md:p-0 rounded-2xl dark:shadow-neutral-700 shadow-md overflow-hidden bg-gradient-to-r from-white/95 via-white/92 to-white/85 dark:from-black/70 dark:via-black/55 dark:to-black/40 backdrop-blur-sm">
        <div className="flex flex-col lg:flex-row items-start gap-3 sm:gap-5 md:gap-6 lg:gap-8 p-3 lg:p-0">
          {/* Left side - Image with info below */}
          <div className="flex flex-col items-start shrink-0">
            <div className="w-[150px] sm:w-[240px] md:w-[260px] lg:w-[280px] xl:w-[300px] relative h-[150px] sm:h-[260px] md:h-[280px] lg:h-[300px]">
              <Card isFooterBlurred className="w-full h-full">
                <Image
                  alt="Profile background"
                  className="z-0 object-cover"
                  src={image}
                />
                <CardFooter className="absolute bg-black/50 bottom-0 z-10 border-t border-white/20 hidden sm:flex">
                  <div className="flex flex-col text-white">
                    <HighlightText className="text-sm sm:text-base md:text-lg font-semibold" text={name} />
                    <p className="text-xs sm:text-sm text-white/80">{title}</p>
                  </div>
                </CardFooter>
              </Card>
            </div>
            {/* Name and title below image on mobile */}
            <div className="mt-2 sm:hidden">
              <HighlightText className="text-sm font-semibold text-foreground" text={name} />
              <p className="text-xs text-foreground-600 mt-2">{title}</p>
              <div className="w-full h-px bg-foreground-200 mt-3 mb-2" />
            </div>
          </div>

          {/* Description below image on mobile, right side on desktop */}
          <div className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl px-0 sm:px-4 md:px-6 py-0 sm:py-4 pb-0 sm:pb-5 lg:py-6 flex-1 w-full">
            {description.map((paragraph, index) => (
              <p key={index} className="mb-2 sm:mb-4">
                <SplittingText
                  delay={index * 250}
                  inView={true}
                  inViewOnce={true}
                  motionVariants={{ stagger: 0.08 }}
                  text={paragraph}
                  type="words"
                />
              </p>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
});