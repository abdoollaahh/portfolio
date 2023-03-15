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
          <div className="flex flex-row h-80 mt-24 justify-center items-center text-[200px] font-thin tracking-[0.21em] cursor-default">
            {selectedImage}
          </div>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          className="flex flex-row-reverse mx-16 overflow-hidden"
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.95, ease: "easeOut" }}
        >
          <h1>
            Hello! I’m Abdullah a digital designer and creative
            <br /> developer passionate about creating
            <br /> memorable experiences.
          </h1>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
export default Hero;
