// components/layout/Navbar.jsx — minimal premium navbar

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RiHeartPulseLine,
  RiMenuLine,
  RiCloseLine,
  RiTranslate2,
} from "react-icons/ri";

const GREEN        = "#1ee394";
const GREEN_DARK   = "#0d9e66";
const GREEN_BG     = "rgba(30,227,148,0.10)";
const GREEN_BORDER = "rgba(30,227,148,0.30)";

const NAV_LINKS = [
  { href: "/",         label: { en: "Search",   hi: "खोजें",       gu: "શોધો"    } },
  { href: "/symptoms", label: { en: "Symptoms", hi: "लक्षण",        gu: "લક્ષણ"   } },
  { href: "/about",    label: { en: "About",    hi: "जानकारी",      gu: "માહિતી"  } },
  { href: "/contact",  label: { en: "Contact",  hi: "संपर्क",        gu: "સંપર્ક"  } },
];

const LANGUAGES = [
  { code: "en", label: "English",  short: "EN" },
  { code: "hi", label: "हिंदी",   short: "हि" },
  { code: "gu", label: "ગુજરાતી", short: "ગુ" },
];

export default function Navbar({ lang: langProp = "en", onLangChange }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen,   setLangOpen]   = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  // Internal lang state — syncs with prop but works standalone too
  const [lang, setLang] = useState(langProp);
  const langRef = useRef(null);

  const current = typeof window !== "undefined" ? window.location.pathname : "/";

  // Keep internal state in sync if parent changes prop externally
  useEffect(() => { setLang(langProp); }, [langProp]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Lock body scroll when mobile open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const switchLang = (code) => {
    setLang(code);       // update internal state immediately
    setLangOpen(false);
    onLangChange?.(code); // also notify parent if provided
  };
  const currentLang = LANGUAGES.find((l) => l.code === lang);

  return (
    <header className="sticky top-0 z-50">
      {/* ── Bar ──────────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-5xl px-4 sm:px-6 pt-4 pb-0"
      >
        <div
          className="flex items-center justify-between px-5 py-3.5 rounded-2xl transition-all duration-500"
          style={{
            background: scrolled
              ? "rgba(255,255,255,0.82)"
              : "rgba(255,255,255,0.65)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: `1px solid ${scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.80)"}`,
            boxShadow: scrolled
              ? "0 8px 32px rgba(30,227,148,0.14), 0 2px 8px rgba(0,0,0,0.05)"
              : "0 2px 16px rgba(30,227,148,0.08)",
          }}
        >
          {/* Logo */}
          <a href="/" aria-label="Aura Health home" className="flex items-center gap-2.5 flex-shrink-0 focus:outline-none group">
            <motion.span
              whileHover={{ scale: 1.1, rotate: -6 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 500, damping: 20 }}
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                background: GREEN,
                boxShadow: `0 4px 12px rgba(30,227,148,0.40)`,
              }}
            >
              <RiHeartPulseLine size={18} className="text-white" />
            </motion.span>
            <span
              className="hidden sm:block font-bold text-[16px] tracking-tight text-slate-800"
              style={{ letterSpacing: "-0.01em" }}
            >
              Aura Health
            </span>
          </a>

          {/* Desktop links */}
          <nav aria-label="Primary" className="hidden md:flex items-center gap-0.5">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = current === href;
              return (
                <a
                  key={href}
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className="relative px-4 py-2 rounded-xl text-[14px] font-semibold transition-all duration-200 focus:outline-none"
                  style={{
                    color: isActive ? GREEN_DARK : "#64748b",
                    background: isActive ? GREEN_BG : "transparent",
                    border: `1px solid ${isActive ? GREEN_BORDER : "transparent"}`,
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "#334155";
                      e.currentTarget.style.background = "rgba(0,0,0,0.035)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "#64748b";
                      e.currentTarget.style.background = "transparent";
                    }
                  }}
                >
                  {label[lang] || label.en}
                </a>
              );
            })}
          </nav>

          {/* Right: lang + hamburger */}
          <div className="flex items-center gap-1.5">
            {/* Language switcher */}
            <div className="relative" ref={langRef}>
              <motion.button
                whileTap={{ scale: 0.93 }}
                onClick={() => setLangOpen((o) => !o)}
                aria-label="Switch language"
                aria-expanded={langOpen}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-[13px] font-bold text-slate-600 transition-all duration-200 focus:outline-none"
                style={{
                  background: langOpen ? GREEN_BG : "rgba(0,0,0,0.035)",
                  border: `1px solid ${langOpen ? GREEN_BORDER : "transparent"}`,
                }}
              >
                <RiTranslate2 size={15} style={{ color: GREEN_DARK }} />
                <span>{currentLang?.short}</span>
              </motion.button>

              <AnimatePresence>
                {langOpen && (
                  <motion.ul
                    role="listbox"
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute right-0 mt-1.5 rounded-2xl overflow-hidden min-w-[150px] z-50 py-1"
                    style={{
                      background: "rgba(255,255,255,0.92)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(255,255,255,0.95)",
                      boxShadow: "0 12px 36px rgba(30,227,148,0.16), 0 4px 12px rgba(0,0,0,0.06)",
                    }}
                  >
                    {LANGUAGES.map(({ code, label: lbl, short }) => (
                      <li key={code} role="option" aria-selected={lang === code}>
                        <button
                          onClick={() => switchLang(code)}
                          className="w-full flex items-center justify-between px-4 py-2.5 text-[14px] font-semibold transition-all duration-150 focus:outline-none"
                          style={
                            lang === code
                              ? { background: GREEN_BG, color: GREEN_DARK }
                              : { color: "#475569" }
                          }
                          onMouseEnter={(e) => { if (lang !== code) e.currentTarget.style.background = "rgba(0,0,0,0.04)"; }}
                          onMouseLeave={(e) => { if (lang !== code) e.currentTarget.style.background = ""; }}
                        >
                          <span>{lbl}</span>
                          <span className="text-[11px] opacity-50 font-bold">{short}</span>
                        </button>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            {/* Hamburger */}
            <motion.button
              whileTap={{ scale: 0.90 }}
              className="md:hidden p-2.5 rounded-xl transition-all duration-200 focus:outline-none"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((o) => !o)}
              style={{
                background: mobileOpen ? GREEN_BG : "rgba(0,0,0,0.035)",
                color: mobileOpen ? GREEN_DARK : "#64748b",
                border: `1px solid ${mobileOpen ? GREEN_BORDER : "transparent"}`,
              }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    style={{ display: "block" }}
                  >
                    <RiCloseLine size={22} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    style={{ display: "block" }}
                  >
                    <RiMenuLine size={22} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* ── Mobile menu ──────────────────────────────────────────────────── */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              aria-label="Mobile navigation"
              initial={{ opacity: 0, y: -8, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -6, height: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden mt-1.5"
            >
              <div
                className="rounded-2xl py-2 px-2"
                style={{
                  background: "rgba(255,255,255,0.88)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.95)",
                  boxShadow: "0 10px 32px rgba(30,227,148,0.14), 0 2px 8px rgba(0,0,0,0.05)",
                }}
              >
                <ul className="space-y-0.5">
                  {NAV_LINKS.map(({ href, label }, i) => {
                    const isActive = current === href;
                    return (
                      <motion.li
                        key={href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04, duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <a
                          href={href}
                          aria-current={isActive ? "page" : undefined}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center px-4 py-3 rounded-xl text-[15px] font-semibold transition-all duration-150"
                          style={{
                            color: isActive ? GREEN_DARK : "#475569",
                            background: isActive ? GREEN_BG : "transparent",
                            border: `1px solid ${isActive ? GREEN_BORDER : "transparent"}`,
                          }}
                        >
                          {label[lang] || label.en}
                        </a>
                      </motion.li>
                    );
                  })}
                </ul>

                {/* Language row */}
                <div
                  className="flex gap-1.5 px-2 pt-3 mt-2"
                  style={{ borderTop: `1px solid ${GREEN_BORDER}` }}
                >
                  {LANGUAGES.map(({ code, short }) => (
                    <motion.button
                      key={code}
                      whileTap={{ scale: 0.92 }}
                      onClick={() => { switchLang(code); setMobileOpen(false); }}
                      className="flex-1 py-2.5 rounded-xl text-[14px] font-bold transition-all duration-150 focus:outline-none"
                      style={
                        lang === code
                          ? { background: GREEN, color: "#fff", boxShadow: `0 4px 12px rgba(30,227,148,0.35)` }
                          : { background: GREEN_BG, color: GREEN_DARK }
                      }
                    >
                      {short}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}