"use client";

import { motion } from "framer-motion";
import { Card, CardBody, Progress } from "@heroui/react";
import { Icon } from "@iconify/react";

import { GradientText } from "@/components/textAnimations/gradient-text";
import { DATA } from "@/data";

export const SkillsOverviewSection = () => {
  const overview = DATA.home.skills.overview;
  const { sectionTitle, sectionDescription } = DATA.home.skills;

  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-content1">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <GradientText
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 gradient px-2 sm:px-4"
            text={sectionTitle}
          />
          <p className="text-foreground-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            {sectionDescription}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
          {overview.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <Card className="border-none shadow-md">
                <CardBody className="p-4 sm:p-5 md:p-6">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className={`p-2 sm:p-3 rounded-full bg-${skill.color}-100 shrink-0`}>
                      <Icon
                        className={`w-5 h-5 sm:w-6 sm:h-6 text-${skill.color}-500`}
                        icon={skill.icon}
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold truncate">{skill.name}</h3>
                      <p className="text-foreground-600 text-sm sm:text-base">{skill.level}%</p>
                    </div>
                  </div>
                  <Progress
                    className="h-2"
                    color={skill.color}
                    value={skill.level}
                  />
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
