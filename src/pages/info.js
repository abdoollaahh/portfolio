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
          className="font-md absolute left-0 flex w-full flex-col text-4xl"
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
            <div className="group relative">
              <div className="absolute -inset-1 animate-spin-slow rounded-full bg-gradient-to-r  from-[#1D2B64] to-[#d9a7c7] blur transition duration-[1500ms] group-hover:blur-3xl group-hover:duration-500 dark:bg-gradient-to-r dark:from-pink-600 dark:to-purple-600"></div>
              <Image
                src="/memoji.png"
                width={180}
                height={180}
                className="relative rounded-full bg-[rgb(230,230,230)] dark:bg-[rgb(27,24,27)]"
              />
            </div>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="m-4 flex justify-center text-5xl font-bold">
              Hey!
            </div>
            <div className="mx-8 flex flex-row justify-center text-center text-3xl font-light">
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
