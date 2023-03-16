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
          <h1 className="m-4 flex flex-row justify-center text-5xl font-bold">
            My Tech
          </h1>
          <div className="flex flex-col items-center">
            <div className="mx-36 mt-10 flex flex-col justify-center md:flex-row">
              <Tech
                name="React"
                images={<Image src="/react.png" width={90} height={90} />}
              />
              <Tech name="Tech" />
              <Tech name="Tech" />
            </div>
            <div className="mt mx-36 flex flex-col justify-center md:flex-row">
              <Tech name="Tech" />
              <Tech name="Tech" />
              <Tech name="Tech" />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Works;
