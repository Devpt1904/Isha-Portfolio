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

import ImageGallery from "@/components/image-gallery";
import { ProjectModalProps } from "@/components/projects/types";

export const ProjectModal = ({
  isOpen,
  onClose,
  project,
}: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Modal
      backdrop="blur"
      className="border border-white/10 bg-content1/95 backdrop-blur-xl shadow-2xl rounded-2xl overflow-hidden"
      isOpen={isOpen}
      scrollBehavior="inside"
      size="3xl"
      onClose={onClose}
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-2 px-6 pt-6 pb-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <motion.h2
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl font-bold text-foreground mb-2"
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

        <ScrollShadow hideScrollBar size={60} className="max-h-[70vh]">
          <ModalBody className="px-6 py-6 space-y-6">
            {/* Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
              >
                <ImageGallery images={project.gallery} />
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
          </ModalBody>
        </ScrollShadow>

        <Divider className="bg-white/10" />

        <ModalFooter className="px-6 py-4">
          <Button
            color="primary"
            variant="light"
            onPress={onClose}
            className="font-semibold"
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
