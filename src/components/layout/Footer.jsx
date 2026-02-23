// components/layout/Footer.jsx

import { RiHeartPulseLine, RiGithubLine } from "react-icons/ri";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="border-t border-white/5 mt-24"
    >
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Brand */}
        <div className="flex items-center gap-2 text-slate-500">
          <RiHeartPulseLine size={16} className="text-blue-500" />
          <span className="text-sm font-semibold text-slate-400">ExplainMyMed</span>
          <span className="text-xs">&copy; {year}</span>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-slate-600 text-center max-w-sm leading-relaxed">
          For informational purposes only. Always consult a qualified healthcare
          professional before taking any medicine.
        </p>

        {/* Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View source on GitHub"
            className="text-slate-600 hover:text-slate-300 transition-colors duration-200"
          >
            <RiGithubLine size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
