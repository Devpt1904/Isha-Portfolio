"use client";

import { motion } from "framer-motion";

type Experience = {
  date: string;
  role: string;
  org: string;
  bullets: string[];
};

const experiences: Experience[] = [
  {
    date: "May 2025 – June 2025",
    role: "Data Operations & Management Intern",
    org: "Photon School — Vadodara, Gujarat",
    bullets: [
      "Managed and organized student data to ensure accuracy and easy retrieval",
      "Maintained and updated databases by correcting inconsistencies",
      "Assisted in preparing basic reports for academic and administrative use",
      "Coordinated with staff to ensure smooth data operations",
    ],
  },
  {
    date: "Sept 2024 – Dec 2024",
    role: "Data Analyst",
    org: "Algorion — Vadodara, Gujarat",
    bullets: [
      "Collected and analyzed financial, technical, and sentiment data for Indian stocks",
      "Generated comparative reports using multiple data sources",
      "Produced insights to support investment decisions and market analysis",
      "Worked with stock screening and charting tools",
    ],
  },
];

const cardVariants = {
  left: {
    hidden: { opacity: 0, x: -60 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.15 + 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    }),
  },
  right: {
    hidden: { opacity: 0, x: 60 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.15 + 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    }),
  },
};

const dotVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: { delay: i * 0.15 + 0.2, duration: 0.4, type: "spring" },
  }),
};

function TimelineItem({
  exp,
  side,
  index,
}: {
  exp: Experience;
  side: "left" | "right";
  index: number;
}) {
  return (
    <div className="relative flex w-full mb-12 last:mb-0">
      {/* For desktop: left/right, for mobile: always left */}
      <div
        className={`hidden md:flex w-1/2 ${side === "left" ? "justify-end pr-8" : "justify-start pl-8"}`}
      >
        {side === "left" && (
          <motion.div
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={cardVariants.left}
            className="group max-w-md w-full"
          >
            <ExperienceCard exp={exp} />
          </motion.div>
        )}
      </div>
      {/* Timeline center */}
      <div className="flex flex-col items-center z-10">
        <motion.span
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={dotVariants}
          className="w-5 h-5 rounded-full bg-primary border-4 border-background shadow-md"
        />
        {/* Vertical line */}
        {index < experiences.length - 1 && (
          <span className="w-px h-full bg-border/60" aria-hidden="true" />
        )}
      </div>
      {/* Right side */}
      <div
        className={`hidden md:flex w-1/2 ${side === "right" ? "justify-start pl-8" : "justify-end pr-8"}`}
      >
        {side === "right" && (
          <motion.div
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={cardVariants.right}
            className="group max-w-md w-full"
          >
            <ExperienceCard exp={exp} />
          </motion.div>
        )}
      </div>
      {/* Mobile: always left */}
      <div className="md:hidden flex-1 pl-6">
        <motion.div
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={cardVariants.left}
          className="group max-w-md w-full"
        >
          <ExperienceCard exp={exp} />
        </motion.div>
      </div>
    </div>
  );
}

function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <div
      className="bg-background/90 border border-border rounded-xl shadow-sm hover:shadow-lg transition-all duration-300
        p-6 relative
        hover:border-primary/70 focus-within:border-primary/70
        hover:ring-2 hover:ring-primary/10 focus-within:ring-2 focus-within:ring-primary/10
        hover:-translate-y-1
        "
      aria-label={exp.role}
    >
      <div className="text-xs text-foreground-500 mb-1">{exp.date}</div>
      <div className="font-bold text-lg text-primary mb-1">{exp.role}</div>
      <div className="text-foreground-700 font-medium mb-2">{exp.org}</div>
      <ul className="list-disc pl-5 space-y-1 text-foreground-600 text-sm">
        {exp.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

export function ExperienceTimelineSection() {
  return (
    <section className="py-20 bg-background" id="experience">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-foreground">
          My Experience
        </h2>
        <p className="text-center text-foreground-600 mb-12 text-base md:text-lg">
          A timeline of my professional journey and growth.
        </p>
        <div className="relative flex flex-col items-center">
          {/* Timeline vertical line (centered) */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-full bg-border/60 z-0 pointer-events-none" />
          <div className="w-full flex flex-col">
            {experiences.map((exp, i) => (
              <TimelineItem
                key={exp.role}
                exp={exp}
                side={i % 2 === 0 ? "left" : "right"}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}