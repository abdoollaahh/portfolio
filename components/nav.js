import { motion } from "framer-motion";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex flex-row justify-between px-12 py-8 text-2xl text-slate-600 font-medium">
      <Link href="/">
        <div>Abdullah</div>
      </Link>
      <div className="flex flex-row justify-between w-72">
        <Link href="/info">
          <div>Info</div>
        </Link>
        <Link href="/work">
          <div>Work</div>
        </Link>
        <motion.a
          whileHover={{ scale: 1.1 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
        >
          <button>
            <form
              action="mailto:abdullahcch@gmail.com"
              method="post"
              encType="text/plain"
            >
              <input
                className="border border-[rgb(230,230,230)] px-5 rounded-2xl text-lg hover:text-[rgb(27,24,27)] hover:bg-[rgb(230,230,230)]"
                type="submit"
                value="Let's Talk"
              ></input>
            </form>
          </button>
        </motion.a>
      </div>
    </nav>
  );
};

export default Nav;
