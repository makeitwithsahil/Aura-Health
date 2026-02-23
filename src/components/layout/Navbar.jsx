// components/layout/Navbar.jsx

import { motion } from "framer-motion";
import { RiHeartPulseLine } from "react-icons/ri";
import { navbarVariant } from "../../animations/variants";

export default function Navbar() {
  return (
    <motion.header
      variants={navbarVariant}
      initial="hidden"
      animate="visible"
      role="banner"
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        {/* Glass pill navbar */}
        <div className="flex items-center justify-between w-full bg-slate-900/60 border border-white/10 backdrop-blur-xl rounded-2xl px-5 py-3 shadow-lg shadow-black/20">
          
          {/* Logo */}
          <a
            href="/"
            aria-label="ExplainMyMed home"
            className="flex items-center gap-2.5 group"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600 text-white shadow-md shadow-blue-900/40 group-hover:bg-blue-500 transition-colors duration-200">
              <RiHeartPulseLine size={18} />
            </span>
            <span className="text-white font-bold text-base tracking-tight leading-none">
              ExplainMyMed
            </span>
          </a>

          {/* Nav links */}
          <nav aria-label="Primary navigation">
            <ul className="flex items-center gap-1" role="list">
              <li>
                <a
                  href="#features"
                  className="text-slate-400 hover:text-slate-100 text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-white/5 transition-all duration-200"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-slate-400 hover:text-slate-100 text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-white/5 transition-all duration-200"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#search"
                  className="ml-2 inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-4 py-1.5 rounded-lg transition-colors duration-200 shadow-sm shadow-blue-900/40"
                >
                  Try It Free
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
