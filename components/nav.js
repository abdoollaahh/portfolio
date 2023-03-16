import { motion } from "framer-motion";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex flex-row items-center justify-between px-12 py-8 text-2xl font-medium text-slate-600 dark:text-[rgb(230,230,230)]">
      <Link href="/">
        <div>Abdullah</div>
      </Link>
      <div className="flex w-72 flex-row items-center justify-between">
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
                className="rounded-2xl border border-slate-700 px-5 text-lg hover:text-[rgb(230,230,230)] dark:border-[rgb(230,230,230)] dark:hover:bg-[rgb(230,230,230)] dark:hover:text-[rgb(27,24,27)]"
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
