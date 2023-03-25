import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const images = ["CREATIVE", "DEVELOPER", "DIGITAL", "DESIGNER"];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  const [direction, setDirection] = useState(true);

  const variants = {
    enter: {
      x: 0,
      opacity: 0,
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: {
      zIndex: 0,
      x: 0,
      opacity: 0,
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedImage(
        (selectedImage) =>
          images[
            images.indexOf(selectedImage) + 1 <= images.length - 1
              ? images.indexOf(selectedImage) + 1
              : 0
          ]
      );
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [images]);

  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.div
          variants={variants}
          key={selectedImage}
          custom={direction}
          transition={{
            duration: 2,
          }}
          initial="enter"
          animate="center"
          exit="exit"
        >
          <div className="mt-24 flex h-80 cursor-default flex-row items-center justify-center text-7xl font-thin tracking-[0.21em] md:text-[200px]">
            {selectedImage}
          </div>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          className="mx-16 flex flex-row-reverse overflow-hidden"
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.95, ease: "easeOut" }}
        >
          <div>
            Hello! I&apos;m Abdullah a digital designer and creative
            <br /> developer passionate about creating
            <br /> memorable experiences.
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
export default Hero;
