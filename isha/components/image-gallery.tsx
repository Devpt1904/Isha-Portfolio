"use client";

import { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Skeleton, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

interface ImageGalleryProps {
  images: readonly string[];
  showThumbnails?: boolean;
}

const ImageGallery = memo(({ images, showThumbnails = true }: ImageGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
    setImageLoaded(false);
  };

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setImageLoaded(false);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setImageLoaded(false);
  };

  return (
    <div className="w-full flex flex-col items-center gap-4 mb-6">
      <div className="relative w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={images[activeIndex]}
            className="w-full flex justify-center items-center h-[300px] md:h-[360px] lg:h-[400px] rounded-xl bg-content2/30 p-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Skeleton isLoaded={imageLoaded} className="rounded-lg">
              <img
                loading="lazy"
                src={images[activeIndex]}
                alt={`Project image ${activeIndex + 1}`}
                className="max-h-[290px] md:max-h-[350px] lg:max-h-[390px] w-auto object-contain rounded-lg"
                onLoad={() => setImageLoaded(true)}
              />
            </Skeleton>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <Button
              isIconOnly
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-md z-10"
              size="sm"
              radius="full"
              onClick={handlePrevious}
            >
              <Icon icon="heroicons:chevron-left-20-solid" className="w-5 h-5 text-white" />
            </Button>
            <Button
              isIconOnly
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-md z-10"
              size="sm"
              radius="full"
              onClick={handleNext}
            >
              <Icon icon="heroicons:chevron-right-20-solid" className="w-5 h-5 text-white" />
            </Button>
          </>
        )}
      </div>

      {showThumbnails && (
        <div className="flex gap-3 flex-wrap justify-center">
          {images.map((img, index) => (
            <motion.div
              key={img}
              className={`w-20 h-20 rounded-lg overflow-hidden cursor-pointer border-2 bg-content2/50 ${index === activeIndex
                ? "border-primary-500"
                : "border-transparent"
                }`}
              onClick={() => handleThumbnailClick(index)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                loading="lazy"
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
});

export default ImageGallery;

ImageGallery.displayName = "ImageGallery";
