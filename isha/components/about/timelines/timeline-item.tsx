'use client';
import { motion } from "framer-motion";

import { SplittingText } from "@/components/textAnimations/splitting-text";
import { TimelineItemProps } from "@/components/about/types";

export const TimelineItem = ({
  title,
  date,
  description,
  variants,
  delay = 0,
}: TimelineItemProps) => {
  return (
    <motion.li className="mb-8 sm:mb-10 relative pl-4 sm:pl-6" variants={variants}>
      <span className="absolute left-0 top-1 bg-primary-500 rounded-full w-3 h-3 sm:w-4 sm:h-4 border-2 border-background z-10" />
      <h4 className="text-base sm:text-lg font-semibold">{title}</h4>
      <time className="block mb-1 text-xs sm:text-sm text-primary-500">{date}</time>
      <SplittingText
        className="text-xs sm:text-sm text-muted-foreground leading-relaxed"
        delay={delay}
        inView={true}
        inViewOnce={true}
        text={description}
        type="words"
      />
    </motion.li>
  );
};
