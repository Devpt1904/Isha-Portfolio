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
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8">
          {/* Left image card */}
          <div className="w-full sm:w-[280px] lg:w-[300px] relative h-[280px] sm:h-[300px] mt-4 lg:mt-0">
            <Card isFooterBlurred className="w-full h-full">
              <Image
                alt="Profile background"
                className="z-0 object-cover"
                src={image}
              />
              <CardFooter className="absolute bg-black/50 bottom-0 z-10 border-t border-white/20">
                <div className="flex flex-col text-white">
                  <HighlightText className="text-lg font-semibold " text={name} />
                  <p className="text-sm text-white/80">{title}</p>
                </div>
              </CardFooter>
            </Card>
          </div>

          {/* Right Description */}
          <div className="text-muted-foreground text-sm leading-relaxed max-w-2xl px-4 sm:px-6 py-4 pb-6">
            {description.map((paragraph, index) => (
              <p key={index} className="mb-4">
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