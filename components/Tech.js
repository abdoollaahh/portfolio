import { motion } from "framer-motion";
const Tech = ({ images, name }) => {
  return (
    <div>
      <motion.div
        whileHover={{ scale: 1.5, duration: 0.75 }}
        className="m-2 flex  h-40 w-64 flex-col rounded-md border-gray-500 bg-[rgb(230,230,230)] p-2 shadow-lg hover:shadow-2xl dark:bg-[rgb(27,24,27)]"
      >
        <div className="peer flex basis-11/12 flex-row items-center justify-center">
          {images}
        </div>
        <motion.div
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
          className="hidden basis-1/12 flex-row items-center justify-center text-sm hover:flex peer-hover:flex"
        >
          {name}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Tech;
