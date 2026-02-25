// components/layout/Footer.jsx — light green theme matching Home.jsx

import { memo } from "react";
import { Link } from "react-router-dom";
import { RiHeartPulseLine, RiGithubLine } from "react-icons/ri";

const GREEN = "#1ee394";

export default memo(function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <span
            className="w-9 h-9 rounded-lg flex items-center justify-center shadow transition-opacity group-hover:opacity-80"
            style={{ backgroundColor: GREEN }}
          >
            <RiHeartPulseLine size={17} className="text-white" />
          </span>
          <span className="text-base font-bold text-slate-600">Aura Health</span>
          <span className="text-sm text-slate-400">&copy; {year}</span>
        </Link>

        {/* Disclaimer */}
        <p className="text-sm text-slate-400 text-center max-w-sm leading-relaxed">
          For informational purposes only. Always consult a qualified healthcare
          professional before taking any medicine.
        </p>

        {/* Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/makeitwithsahil/Aura-Health"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View source on GitHub"
            className="text-slate-400 hover:text-slate-600 transition-colors duration-200"
          >
            <RiGithubLine size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
});
