import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Nav from "../../components/nav";
import Footer from "../../components/footer";

const Info = () => {
  return (
    <div>
      <Nav />
      <AnimatePresence>
        <motion.div
          className="flex flex-col text-4xl font-md absolute left-0 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="flex flex-row justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          >
            <Image
              src="/memoji.png"
              width={180}
              height={180}
              className="border rounded-full"
            />
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex justify-center text-5xl m-4 font-bold">
              Hey!
            </div>
            <div className="flex flex-row justify-center mx-8 text-center text-3xl font-light">
              I&apos;m a Designer-Developer who creates innovative and
              user-friendly digital experiences.
              <br />
              My unique background in both design and development allows me to
              seamlessly bridge the gap
              <br /> between form and function. With a focus on intuitive design
              and responsive development,<br></br> I deliver results that exceed
              my clients&apos; expectations.
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
export default Info;
