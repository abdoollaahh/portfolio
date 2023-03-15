import { motion, AnimatePresence } from "framer-motion";
import Nav from "../../components/nav";
import Tech from "../../components/Tech";
import Image from "next/image";

const Works = () => {
  return (
    <div>
      <Nav />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="flex flex-row justify-center text-5xl font-bold m-4">
            My Tech
          </h1>
          <div className="mx-36 mt-10 flex flex-row justify-center">
            <Tech
              name="React"
              images={<Image src="/react.png" width={90} height={90} />}
            />
            <Tech name="Tech" />
            <Tech name="Tech" />
          </div>
          <div className="mx-36 mt flex flex-row justify-center">
            <Tech name="Tech" />
            <Tech name="Tech" />
            <Tech name="Tech" />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Works;
