import { memo, useState } from "react";
import { Card, CardBody, Button, Image, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

import { ProjectCardProps } from "@/components/projects/types";

export const ProjectCard = memo(function ProjectCard({
  project,
  onViewDetails,
}: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative w-full h-[420px] perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      >
        {/* Front of Card */}
        <div
          className="absolute w-full h-full backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Card
            className="
              border border-white/10 bg-gradient-to-br from-content1/50 to-content1/30
              backdrop-blur-md
              shadow-lg hover:shadow-2xl hover:shadow-primary-500/20
              rounded-2xl overflow-hidden h-full w-full
              transition-all duration-300
            "
            radius="lg"
          >
            <CardBody className="p-0 flex flex-col h-full">
              <div className="relative w-full h-[240px] overflow-hidden">
                <Image
                  removeWrapper
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  classNames={{
                    img: "w-full h-full object-cover",
                  }}
                  loading="lazy"
                  src={project.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 z-10">
                  <Chip
                    size="sm"
                    variant="flat"
                    className="bg-black/70 border border-white/20 text-white font-semibold backdrop-blur-md"
                  >
                    {project.category}
                  </Chip>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {project.title}
                </h3>
                <p className="text-foreground-600 text-sm leading-relaxed line-clamp-3 flex-grow">
                  {project.description}
                </p>
                <div className="mt-4 flex items-center justify-center gap-2 text-primary-500 text-sm font-medium">
                  <Icon icon="lucide:mouse-pointer-click" className="w-4 h-4" />
                  <span>Hover to see more</span>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Back of Card */}
        <div
          className="absolute w-full h-full backface-hidden"
          style={{ 
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <Card
            className="
              border border-primary-500/30 bg-gradient-to-br from-primary-500/10 to-secondary-500/10
              backdrop-blur-md
              shadow-2xl shadow-primary-500/30
              rounded-2xl overflow-hidden h-full w-full
            "
            radius="lg"
          >
            <CardBody className="p-6 flex flex-col h-full justify-between">
              <div className="space-y-4 flex-grow">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {project.title}
                  </h3>
                  <Chip
                    size="sm"
                    variant="flat"
                    className="bg-primary-500/20 text-primary-500 border border-primary-500/30"
                  >
                    {project.category}
                  </Chip>
                </div>

                <p className="text-foreground-600 text-sm leading-relaxed line-clamp-4">
                  {project.details || project.description}
                </p>

                {/* Tech Stack */}
                {project.tech && project.tech.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold text-foreground/60 mb-2 uppercase tracking-wider">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 4).map((tech, index) => (
                        <Chip
                          key={index}
                          size="sm"
                          variant="flat"
                          className="bg-content1/50 text-foreground-600"
                          startContent={<Icon icon={tech.icon} className="w-3 h-3" />}
                        >
                          {tech.name}
                        </Chip>
                      ))}
                      {project.tech.length > 4 && (
                        <Chip
                          size="sm"
                          variant="flat"
                          className="bg-content1/50 text-foreground-600"
                        >
                          +{project.tech.length - 4}
                        </Chip>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-2 pt-4">
                <Button
                  aria-label="View project details"
                  className="w-full bg-primary-500 text-white hover:bg-primary-600 transition-all duration-300 font-semibold shadow-lg shadow-primary-500/30"
                  endContent={<Icon icon="lucide:arrow-right" />}
                  onClick={onViewDetails}
                >
                  View Full Details
                </Button>
                
                {(project.github || project.live) && (
                  <div className="flex gap-2">
                    {project.github && (
                      <Button
                        as="a"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View on GitHub"
                        className="flex-1 bg-content1/50 hover:bg-content1 transition-colors"
                        variant="flat"
                        size="sm"
                        startContent={<Icon icon="mdi:github" className="w-4 h-4" />}
                      >
                        GitHub
                      </Button>
                    )}
                    {project.live && (
                      <Button
                        as="a"
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View Live Project"
                        className="flex-1 bg-content1/50 hover:bg-content1 transition-colors"
                        variant="flat"
                        size="sm"
                        startContent={<Icon icon="lucide:external-link" className="w-4 h-4" />}
                      >
                        Live
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </CardBody>
          </Card>
        </div>
      </motion.div>
    </div>
  );
});
