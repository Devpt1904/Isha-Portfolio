"use client";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Accordion, AccordionItem } from "@heroui/react";
import { useState } from "react";

import { SectionHeader } from "@/components/about/section-header";
import { capitalize } from "@/lib/utils";
import { TechCategories } from "@/components/about/types";

interface SkillsProps {
  tech: TechCategories;
}

const getCategoryTitle = (category: string): string => {
  const titles: Record<string, string> = {
    tools: "Tools",
    softSkills: "Soft Skills",
    dataAnalytics: "Data Analytics & Business Intelligence",
  };
  return titles[category] || capitalize(category);
};

const getGridCols = (category: string): string => {
  if (category === "softSkills") return "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5";
  if (category === "dataAnalytics") return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
  return "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4";
};

export const Skills = ({ tech }: SkillsProps) => {
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <SectionHeader icon="mdi:tools" title="Skills" />

      <Accordion 
        selectionMode="multiple" 
        variant="bordered"
        className="gap-4"
        onSelectionChange={(keys) => {
          setOpenKeys(Array.from(keys as Set<string>));
        }}
      >
        {Object.entries(tech).map(([category, { description, tools }]) => {
          const isOpen = openKeys.includes(category);
          
          return (
            <AccordionItem
              key={category}
              aria-label={getCategoryTitle(category)}
              title={getCategoryTitle(category)}
              classNames={{
                base: "rounded-xl bg-content1/30 backdrop-blur-sm px-4 py-2",
                title: "text-lg font-semibold",
                content: "pb-6",
              }}
            >
              <p className="mb-6 text-sm text-foreground-600 italic">{description}</p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className={`grid ${getGridCols(category)} gap-4`}
              >
                {tools.map((tool, index) => {
                  const hasUsage = 'usage' in tool && tool.usage;
                  
                  return (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: isOpen ? index * 0.05 : 0,
                        ease: "easeOut"
                      }}
                      className="group relative"
                    >
                      <div className="relative h-full rounded-xl border border-white/20 bg-white/5 dark:bg-black/20 backdrop-blur-md p-5 shadow-lg transition-all duration-300 hover:border-primary-500/60 hover:bg-white/10 dark:hover:bg-black/30 hover:scale-105 hover:shadow-xl hover:shadow-primary-500/20">
                        <div className="flex flex-col items-center text-center gap-3">
                          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500/20 to-secondary-500/20 backdrop-blur-sm border border-white/10 transition-all duration-300 group-hover:from-primary-500/30 group-hover:to-secondary-500/30 group-hover:border-primary-500/40 group-hover:shadow-lg group-hover:shadow-primary-500/20">
                            <Icon
                              className="text-foreground transition-transform group-hover:scale-110"
                              height={32}
                              icon={tool.icon}
                              width={32}
                            />
                          </div>
                          <span className="text-sm font-medium text-foreground leading-tight">
                            {tool.name}
                          </span>
                          {hasUsage && (
                            <span className="text-xs text-foreground-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1 leading-snug">
                              {tool.usage}
                            </span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AccordionItem>
          );
        })}
      </Accordion>
    </motion.div>
  );
};