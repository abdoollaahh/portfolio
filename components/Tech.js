import { motion } from "framer-motion";
const Tech = ({ images, name }) => {
  return (
    <div>
      <motion.div
        whileHover={{ scale: 1.4, duration: 0.75 }}
        className="flex flex-col  border-gray-500 w-64 h-40 rounded-md p-2 m-2 shadow-lg hover:shadow-2xl"
      >
        <div className="basis-11/12 peer flex flex-row justify-center items-center">
          {images}
        </div>
        <motion.div
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
          className="basis-1/12 hidden peer-hover:flex hover:flex flex-row items-center justify-center text-sm"
        >
          {name}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Tech;
