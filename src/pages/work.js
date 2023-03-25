import { motion, AnimatePresence } from "framer-motion";
import Nav from "../../components/nav";
import Tech from "../../components/Tech";

const Works = () => {
  return (
    <div>
      <Nav />
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="m-4 flex flex-row justify-center text-5xl font-semibold text-slate-600 dark:text-white">
            My Tech
          </h1>
          <div className="my-8">
            <Tech />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Works;
