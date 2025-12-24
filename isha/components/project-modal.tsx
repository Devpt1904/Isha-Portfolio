import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Chip,
  ScrollShadow,
  Divider,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

import ImageGallery from "@/components/image-gallery";
import { ProjectModalProps } from "@/components/projects/types";

export const ProjectModal = ({
  isOpen,
  onClose,
  project,
}: ProjectModalProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isOpen && videoRef.current && project?.videoFile) {
      videoRef.current.play();
    }
  }, [isOpen, project?.videoFile]);

  if (!project) return null;

  return (
    <Modal
      backdrop="blur"
      className="border border-white/10 bg-content1/95 backdrop-blur-xl shadow-2xl rounded-2xl overflow-hidden mx-2 sm:mx-0"
      isOpen={isOpen}
      scrollBehavior="inside"
      size="3xl"
      onClose={onClose}
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-2 px-4 sm:px-6 pt-4 sm:pt-6 pb-3 sm:pb-4">
          <div className="flex items-start justify-between gap-3 sm:gap-4">
            <div className="flex-1">
              <motion.h2
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xl sm:text-2xl font-bold text-foreground mb-2"
              >
                {project.title}
              </motion.h2>
              <Chip
                size="sm"
                variant="flat"
                className="bg-primary-500/10 text-primary-500 border border-primary-500/20 font-semibold"
              >
                {project.category}
              </Chip>
            </div>
            {(project.github || project.live) && (
              <div className="flex gap-2">
                {project.github && (
                  <Button
                    isIconOnly
                    as="a"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View on GitHub"
                    size="sm"
                    variant="flat"
                    className="bg-foreground/10 hover:bg-foreground/20"
                  >
                    <Icon icon="mdi:github" width={20} />
                  </Button>
                )}
                {project.live && (
                  <Button
                    isIconOnly
                    as="a"
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Live Project"
                    size="sm"
                    variant="flat"
                    className="bg-primary-500/10 hover:bg-primary-500/20 text-primary-500"
                  >
                    <Icon icon="lucide:external-link" width={18} />
                  </Button>
                )}
              </div>
            )}
          </div>
        </ModalHeader>

        <Divider className="bg-white/10" />

        <ScrollShadow 
          hideScrollBar 
          size={60} 
          className="max-h-[65vh] sm:max-h-[70vh] md:max-h-[75vh]"
        >
          <ModalBody className="px-4 sm:px-6 py-4 sm:py-6">
            {/* Two-column layout for Petstagram project only */}
            {project.gallery && project.gallery.length > 0 && project.id === 1 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {/* Left: Gallery */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="space-y-4"
                >
                  <ImageGallery images={project.gallery} showThumbnails={false} />
                </motion.div>

                {/* Right: Details */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-6"
                >
                  {/* Description */}
                  <div className="space-y-2 sm:space-y-3">
                    <h3 className="text-base sm:text-lg font-semibold text-foreground flex items-center gap-2">
                      <Icon icon="lucide:info" className="text-primary-500" width={18} />
                      Project Details
                    </h3>
                    <p className="text-foreground-600 leading-relaxed text-xs sm:text-sm whitespace-pre-line">
                      {project.details}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  {project.tech && project.tech.length > 0 && (
                    <div className="space-y-2 sm:space-y-3">
                      <h3 className="text-base sm:text-lg font-semibold text-foreground flex items-center gap-2">
                        <Icon icon="lucide:code" className="text-primary-500" width={20} />
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, index) => (
                          <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + index * 0.05 }}
                          >
                            <Chip
                              size="md"
                              variant="flat"
                              className="bg-content2 hover:bg-content3 transition-colors cursor-default"
                              startContent={<Icon icon={tech.icon} className="w-4 h-4" />}
                            >
                              {tech.name}
                            </Chip>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Thumbnails under Tech Stack */}
                  <div className="space-y-2 sm:space-y-3">
                    <h3 className="text-base sm:text-lg font-semibold text-foreground flex items-center gap-2">
                      <Icon icon="lucide:images" className="text-primary-500" width={18} />
                      Screenshots ({project.gallery.length})
                    </h3>
                    <div className="flex gap-2 sm:gap-3 flex-wrap">
                      {project.gallery.map((img, index) => (
                        <motion.div
                          key={img}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + index * 0.05 }}
                        >
                          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 border-white/10 bg-content2/50">
                            <img
                              loading="lazy"
                              src={img}
                              alt={`Screenshot ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Image Gallery for other projects (like Budget Dashboard) */}
                {project.gallery && project.gallery.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="w-full"
                  >
                    <ImageGallery images={project.gallery} showThumbnails={false} />
                  </motion.div>
                )}

                {/* Video Player */}
                {project.videoFile && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="w-full"
                  >
                    <div className="rounded-xl overflow-hidden border border-white/10 bg-content2/50">
                      <video
                        ref={videoRef}
                        controls
                        className="w-full h-auto"
                        poster={project.image}
                        autoPlay
                        playsInline
                      >
                        <source src={project.videoFile} type="video/mp4" />
                        <track kind="captions" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </motion.div>
                )}

                {/* PDF Viewer */}
                {project.pdfFile && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="w-full"
                  >
                    <div className="rounded-xl overflow-hidden border border-white/10 bg-content2/50">
                      <iframe
                        src={project.pdfFile}
                        className="w-full h-[750px]"
                        title={`${project.title} PDF`}
                      />
                    </div>
                    <div className="mt-3 flex justify-end">
                      <Button
                        as="a"
                        href={project.pdfFile}
                        target="_blank"
                        size="sm"
                        variant="flat"
                        className="bg-primary-500/10 text-primary-500"
                        startContent={<Icon icon="lucide:download" width={16} />}
                      >
                        Download PDF
                      </Button>
                    </div>
                  </motion.div>
                )}

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-3"
                >
                  <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <Icon icon="lucide:info" className="text-primary-500" width={20} />
                    Project Details
                  </h3>
                  <p className="text-foreground-600 leading-relaxed text-sm whitespace-pre-line">
                    {project.details}
                  </p>
                </motion.div>

                {/* Tech Stack */}
                {project.tech && project.tech.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-3"
                  >
                    <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <Icon icon="lucide:code" className="text-primary-500" width={20} />
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, index) => (
                        <motion.div
                          key={tech.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + index * 0.05 }}
                        >
                          <Chip
                            size="md"
                            variant="flat"
                            className="bg-content2 hover:bg-content3 transition-colors cursor-default"
                            startContent={<Icon icon={tech.icon} className="w-4 h-4" />}
                          >
                            {tech.name}
                          </Chip>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            )}
          </ModalBody>
        </ScrollShadow>
      </ModalContent>
    </Modal>
  );
};
