import { motion, AnimatePresence, easeOut } from "framer-motion";
import Footer from "../../components/footer";
import Hero from "../../components/heroPage";
import Nav from "../../components/nav";

const Home = () => {
  return (
    <div>
      <Nav />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, duration: 10 }}
          transition={{ duration: 0.85, ease: easeOut }}
          exit={{ opacity: 0 }}
        >
          <Hero />
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  );
};
export default Home;
