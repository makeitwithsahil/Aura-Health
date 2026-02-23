// pages/Home.jsx
// Aura Health · Light mode · Glassmorphism · Language Switch (EN / हिंदी / ગુજરાતી)
// Green theme #1ee394 · alias-as-heading · live type-ahead suggestions

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RiSearchLine,
  RiVolumeUpLine,
  RiStopCircleLine,
  RiArrowLeftLine,
  RiAlertLine,
  RiCapsuleLine,
  RiShieldCheckLine,
  RiParentLine,
  RiUserLine,
  RiUser3Line,
  RiHeartPulseLine,
  RiTranslate2,
} from "react-icons/ri";

import { getMedicineByName, getAllMedicineNames, getSuggestions } from "../services/searchService";
import { speakText, buildMedicineScript } from "../services/speechService";
import SymptomChecker from "../components/medicine/SymptomChecker";

// ─── Language config ──────────────────────────────────────────────────────────
const LANGUAGES = [
  { code: "en", label: "English", short: "EN" },
  { code: "hi", label: "हिंदी", short: "हि" },
  { code: "gu", label: "ગુજરાતી", short: "ગુ" },
];

const UI = {
  en: {
    tagline: "Type a medicine name — we will tell you what it does.",
    searchPlaceholder: "e.g. Paracetamol, Dolo, Zerodol...",
    searchBtn: "Search",
    notFound: (q) => `We don't have "${q}" yet. Please try one below.`,
    commonLabel: "Common medicines",
    backBtn: "Back",
    listenBtn: "Listen",
    stopBtn: "Stop",
    usedFor: "What it is used for",
    howMuch: "How much to take",
    warnings: "Important warnings",
    ageChildren: "Children",
    ageAdults: "Adults",
    ageElderly: "Elderly",
    doctorNote: "Always follow what your doctor told you. This is only a guide.",
    disclaimer: "This is general information only. Always ask your doctor or pharmacist before taking any medicine.",
    knownAs: "Also known as",
    genericName: "Generic name",
  },
  hi: {
    tagline: "दवा का नाम लिखें — हम बताएंगे यह क्या करती है।",
    searchPlaceholder: "जैसे: पैरासिटामोल, डोलो, जीरोडोल...",
    searchBtn: "खोजें",
    notFound: (q) => `"${q}" हमारे पास अभी नहीं है। नीचे से कोई दवा चुनें।`,
    commonLabel: "आम दवाएं",
    backBtn: "वापस",
    listenBtn: "सुनें",
    stopBtn: "रोकें",
    usedFor: "इसका उपयोग किस लिए होता है",
    howMuch: "कितनी मात्रा में लें",
    warnings: "जरूरी चेतावनी",
    ageChildren: "बच्चे",
    ageAdults: "बड़े",
    ageElderly: "बुजुर्ग",
    doctorNote: "डॉक्टर की बताई दवा हमेशा पालन करें। यह केवल मार्गदर्शन है।",
    disclaimer: "यह केवल सामान्य जानकारी है। कोई भी दवा लेने से पहले अपने डॉक्टर या फार्मासिस्ट से पूछें।",
    knownAs: "इसे इन नामों से भी जाना जाता है",
    genericName: "जेनेरिक नाम",
  },
  gu: {
    tagline: "દવાનું નામ લખો — અમે જણાવીશું તે શું કરે છે.",
    searchPlaceholder: "જેમ કે: પેરાસિટામોલ, ડોલો, ઝીરોડોલ...",
    searchBtn: "શોધો",
    notFound: (q) => `"${q}" અમારી પાસે હજી નથી. નીચેથી પસંદ કરો.`,
    commonLabel: "સામાન્ય દવાઓ",
    backBtn: "પાછળ",
    listenBtn: "સાંભળો",
    stopBtn: "રોકો",
    usedFor: "આ શેના માટે વપરાય છે",
    howMuch: "કેટલી માત્રા લેવી",
    warnings: "મહત્વની ચેતવણી",
    ageChildren: "બાળકો",
    ageAdults: "મોટા",
    ageElderly: "વૃદ્ધ",
    doctorNote: "ડૉક્ટરે જે કહ્યું હોય તે હંમેશા પાળો. આ ફક્ત માર્ગદર્શન છે.",
    disclaimer: "આ ફક્ત સામાન્ય માહિતી છે. કોઈ દવા લેતા પહેલા ડૉક્ટર કે ફાર્માસિસ્ટને પૂછો.",
    knownAs: "આ નામોથી પણ ઓળખાય છે",
    genericName: "જેનેરિક નામ",
  },
};

// ─── Animation variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.25 } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};
const cardAnim = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.44, ease: [0.22, 1, 0.36, 1] } },
};

// ─── Age icons ────────────────────────────────────────────────────────────────
const AGE_ICONS = { children: RiParentLine, adults: RiUserLine, elderly: RiUser3Line };

// ─── Shared glass class ───────────────────────────────────────────────────────
const glass = "bg-white/65 backdrop-blur-xl border border-white/80 shadow-sm";

// ─── Brand green ─────────────────────────────────────────────────────────────
const GREEN = "#1ee394";
const GREEN_DIM = "#17c97e"; // slightly deeper for hover
const GREEN_BG = "rgba(30,227,148,0.12)";
const GREEN_BORDER = "rgba(30,227,148,0.35)";

// ─── Component ────────────────────────────────────────────────────────────────
export default function Home() {
  const [lang, setLang] = useState("en");
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [searchedTerm, setSearchedTerm] = useState(""); // what the user typed / alias
  const [notFound, setNotFound] = useState(false);
  const [activeAge, setActiveAge] = useState("adults");
  const [speaking, setSpeaking] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const cancelRef = useRef(null);
  const inputRef = useRef(null);
  const suggBoxRef = useRef(null);
  const t = UI[lang];

  // ── Live suggestions as user types ──────────────────────────────────────────
  useEffect(() => {
    if (query.trim().length === 0) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }
    const hits = getSuggestions(query, 8);
    setSuggestions(hits);
    setShowSuggestions(hits.length > 0);
  }, [query]);

  // Close suggestions on outside click
  useEffect(() => {
    const handler = (e) => {
      if (
        suggBoxRef.current && !suggBoxRef.current.contains(e.target) &&
        inputRef.current && !inputRef.current.contains(e.target)
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // ── Logic ──────────────────────────────────────────────────────────────────
  const doSearch = (name = query) => {
    const res = getMedicineByName(name);
    setNotFound(false);
    stopSpeech();
    setShowSuggestions(false);
    if (res) {
      setResult(res.med);
      setSearchedTerm(res.searchedTerm);
      setActiveAge("adults");
    } else {
      setResult(null);
      setSearchedTerm("");
      setNotFound(true);
    }
  };

  const pickSuggestion = (sugg) => {
    setQuery(sugg.label);
    setShowSuggestions(false);
    doSearch(sugg.label);
  };

  const handleReset = () => {
    setResult(null);
    setSearchedTerm("");
    setNotFound(false);
    setQuery("");
    stopSpeech();
    setTimeout(() => inputRef.current?.focus(), 80);
  };

  const toggleSpeech = () => {
    if (speaking) { stopSpeech(); return; }
    const script = buildMedicineScript(result, activeAge, lang);
    const { cancel } = speakText(script, lang, { onEnd: () => setSpeaking(false) });
    cancelRef.current = cancel;
    setSpeaking(true);
  };

  const stopSpeech = () => { cancelRef.current?.(); setSpeaking(false); };

  const switchLang = (code) => { setLang(code); setLangOpen(false); stopSpeech(); };

  const ageLabel = (age) =>
    age === "children" ? t.ageChildren : age === "adults" ? t.ageAdults : t.ageElderly;

  // Is the heading showing an alias (not the canonical name)?
  const isAlias = result && searchedTerm && searchedTerm.toLowerCase() !== result.name.toLowerCase();

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div
      className="min-h-screen flex flex-col text-slate-800"
      style={{
        background:
          "radial-gradient(ellipse 75% 55% at 5% -5%,  rgba(30,227,148,0.18) 0%, transparent 55%)," +
          "radial-gradient(ellipse 55% 40% at 95% 5%,  rgba(30,227,148,0.12) 0%, transparent 50%)," +
          "radial-gradient(ellipse 65% 45% at 50% 105%, rgba(30,227,148,0.14) 0%, transparent 55%)," +
          "#f0fdf8",
      }}
    >
      {/* Skip link */}
      <a href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:text-white focus:px-4 focus:py-2 focus:rounded-xl focus:text-sm focus:font-bold"
        style={{ backgroundColor: GREEN }}
      >
        Skip to content
      </a>

      {/* ══ NAVBAR ══════════════════════════════════════════════════════════ */}
      <header role="banner" className="sticky top-0 z-40">
        <div className="max-w-xl mx-auto px-4 pt-4">
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42, ease: "easeOut" }}
            className={`${glass} rounded-2xl px-5 py-3.5 flex items-center justify-between`}
            style={{ boxShadow: `0 2px 20px rgba(30,227,148,0.12)` }}
          >
            {/* Logo */}
            <a href="/" aria-label="Aura Health home" className="flex items-center gap-2.5 group">
              <span
                className="w-8 h-8 rounded-xl flex items-center justify-center shadow transition-opacity duration-200 group-hover:opacity-85"
                style={{ backgroundColor: GREEN }}
              >
                <RiHeartPulseLine size={16} className="text-white" />
              </span>
              <span className="font-bold text-[15px] tracking-tight text-slate-800">
                Aura Health
              </span>
            </a>

            {/* Language dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangOpen((o) => !o)}
                aria-label="Switch language"
                aria-expanded={langOpen}
                aria-haspopup="listbox"
                className={`${glass} flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-sm font-bold text-slate-700 hover:bg-white/85 transition-all duration-200 focus:outline-none focus:ring-2`}
                style={{ "--tw-ring-color": GREEN }}
              >
                <RiTranslate2 size={15} style={{ color: GREEN }} />
                {LANGUAGES.find((l) => l.code === lang)?.short}
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.ul
                    role="listbox"
                    aria-label="Select language"
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.97 }}
                    transition={{ duration: 0.18 }}
                    className={`absolute right-0 mt-2 ${glass} rounded-2xl p-1.5 min-w-[150px] z-50`}
                  >
                    {LANGUAGES.map(({ code, label }) => (
                      <li key={code} role="option" aria-selected={lang === code}>
                        <button
                          onClick={() => switchLang(code)}
                          className="w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-colors duration-150 focus:outline-none"
                          style={
                            lang === code
                              ? { backgroundColor: GREEN, color: "#fff" }
                              : { color: "#334155" }
                          }
                          onMouseEnter={(e) => { if (lang !== code) e.currentTarget.style.backgroundColor = GREEN_BG; }}
                          onMouseLeave={(e) => { if (lang !== code) e.currentTarget.style.backgroundColor = ""; }}
                        >
                          {label}
                        </button>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </header>

      {/* ══ MAIN ════════════════════════════════════════════════════════════ */}
      <main id="main" className="flex-1 max-w-xl mx-auto w-full px-4 pt-10 pb-16 sm:pt-14 sm:pb-20">
        <AnimatePresence mode="wait">

          {/* ── SEARCH VIEW ─────────────────────────────────────────────── */}
          {!result && (
            <motion.div key={`search-${lang}`} variants={fadeUp} initial="hidden" animate="visible" exit="exit">

              {/* Tagline */}
              <p className="text-slate-600 text-xl sm:text-2xl text-center font-light leading-relaxed mb-10 px-2">
                {t.tagline}
              </p>

              {/* Search bar + live suggestions */}
              <div className="relative mb-5">
                <div role="search" className={`${glass} rounded-2xl p-2 flex gap-2`}
                  style={{ boxShadow: `0 2px 20px rgba(30,227,148,0.10)` }}
                >
                  <div className="relative flex-1">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                      <RiSearchLine size={18} aria-hidden="true" />
                    </span>
                    <input
                      ref={inputRef}
                      id="medicine-search"
                      type="search"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") { doSearch(); }
                        if (e.key === "Escape") { setShowSuggestions(false); }
                      }}
                      onFocus={() => { if (suggestions.length > 0) setShowSuggestions(true); }}
                      placeholder={t.searchPlaceholder}
                      aria-label={t.searchPlaceholder}
                      aria-autocomplete="list"
                      aria-controls="suggestion-list"
                      autoFocus
                      autoComplete="off"
                      className="w-full bg-transparent text-slate-800 placeholder-slate-400 rounded-xl py-3.5 pl-11 pr-3 text-base font-medium focus:outline-none"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    onClick={() => doSearch()}
                    className="text-white font-bold px-6 rounded-xl text-sm shadow transition-opacity duration-200 focus:outline-none whitespace-nowrap"
                    style={{ backgroundColor: GREEN }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = GREEN_DIM; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = GREEN; }}
                  >
                    {t.searchBtn}
                  </motion.button>
                </div>

                {/* Live suggestion dropdown */}
                <AnimatePresence>
                  {showSuggestions && suggestions.length > 0 && (
                    <motion.ul
                      id="suggestion-list"
                      ref={suggBoxRef}
                      role="listbox"
                      aria-label="Medicine suggestions"
                      initial={{ opacity: 0, y: -6, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -4, scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 right-0 top-full mt-1.5 z-50 rounded-2xl overflow-hidden"
                      style={{
                        background: "rgba(255,255,255,0.96)",
                        backdropFilter: "blur(20px)",
                        border: `1px solid ${GREEN_BORDER}`,
                        boxShadow: `0 8px 32px rgba(30,227,148,0.15), 0 2px 8px rgba(0,0,0,0.08)`,
                      }}
                    >
                      {suggestions.map((sugg, i) => (
                        <motion.li
                          key={`${sugg.medId}-${sugg.label}`}
                          role="option"
                          initial={{ opacity: 0, x: -4 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.03 }}
                        >
                          <button
                            onClick={() => pickSuggestion(sugg)}
                            className="w-full text-left px-4 py-3 flex items-center justify-between gap-3 transition-colors duration-120 focus:outline-none"
                            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = GREEN_BG; }}
                            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = ""; }}
                          >
                            <span className="flex items-center gap-2">
                              <RiCapsuleLine size={13} style={{ color: GREEN, flexShrink: 0 }} />
                              <span className="text-slate-800 font-semibold text-sm">
                                {sugg.label}
                              </span>
                            </span>
                            {/* Show canonical name only when it differs from label */}
                            {sugg.label.toLowerCase() !== sugg.medName.toLowerCase() && (
                              <span className="text-xs text-slate-400 font-medium shrink-0">
                                → {sugg.medName}
                              </span>
                            )}
                          </button>
                          {i < suggestions.length - 1 && (
                            <div className="mx-4 h-px" style={{ backgroundColor: "rgba(30,227,148,0.15)" }} />
                          )}
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>

              {/* Not found */}
              <AnimatePresence>
                {notFound && (
                  <motion.p role="alert" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="flex items-start gap-2 text-red-500 text-sm font-medium mb-5 px-1 leading-relaxed"
                  >
                    <RiAlertLine size={16} className="flex-shrink-0 mt-0.5" aria-hidden="true" />
                    {t.notFound(query)}
                  </motion.p>
                )}
              </AnimatePresence>

              {/* Suggestion pills */}
              <div>
                <p className="text-[11px] text-slate-400 uppercase tracking-widest font-bold mb-3 px-1">
                  {t.commonLabel}
                </p>
                <div className="flex flex-wrap gap-2" role="list" aria-label={t.commonLabel}>
                  {getAllMedicineNames().map((name) => (
                    <motion.button
                      key={name}
                      role="listitem"
                      whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                      onClick={() => { setQuery(name); doSearch(name); }}
                      aria-label={name}
                      className={`${glass} text-slate-700 hover:text-slate-900 text-sm font-bold px-4 py-2.5 rounded-xl transition-all duration-200 focus:outline-none`}
                      style={{ boxShadow: `0 1px 8px rgba(30,227,148,0.08)` }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = GREEN_BG;
                        e.currentTarget.style.borderColor = GREEN_BORDER;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "";
                        e.currentTarget.style.borderColor = "";
                      }}
                    >
                      {name}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* ── RESULT VIEW ─────────────────────────────────────────────── */}
          {result && (
            <motion.div key={`result-${result.id}-${lang}`} variants={stagger} initial="hidden" animate="visible" exit={{ opacity: 0, transition: { duration: 0.2 } }}>

              {/* Back + Listen */}
              <motion.div variants={cardAnim} className="flex items-center justify-between mb-8">
                <motion.button
                  whileHover={{ x: -2 }} whileTap={{ scale: 0.96 }}
                  onClick={handleReset}
                  aria-label={t.backBtn}
                  className="flex items-center gap-1.5 text-slate-400 hover:text-slate-700 text-base font-bold transition-colors duration-200 focus:outline-none rounded-xl px-2 py-1"
                >
                  <RiArrowLeftLine size={17} aria-hidden="true" />
                  {t.backBtn}
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                  onClick={toggleSpeech}
                  aria-label={speaking ? t.stopBtn : t.listenBtn}
                  className={`flex items-center gap-2 text-sm font-bold px-5 py-3 rounded-xl transition-all duration-200 focus:outline-none shadow-sm ${speaking
                    ? "bg-red-500 hover:bg-red-400 text-white shadow-red-200"
                    : `${glass} text-slate-700 hover:bg-white/85`
                    }`}
                >
                  {speaking
                    ? <><RiStopCircleLine size={16} aria-hidden="true" /> {t.stopBtn}</>
                    : <><RiVolumeUpLine size={16} aria-hidden="true" /> {t.listenBtn}</>
                  }
                </motion.button>
              </motion.div>

              {/* ── Name + description ──────────────────────────────────── */}
              <motion.section variants={cardAnim} aria-labelledby="med-name"
                className={`${glass} rounded-3xl p-7 sm:p-9 mb-4`}
                style={{ boxShadow: `0 4px 24px rgba(30,227,148,0.12)` }}
              >
                {/* Category badge */}
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5"
                  style={{ backgroundColor: GREEN_BG, color: "#0d9e66", border: `1px solid ${GREEN_BORDER}` }}
                >
                  <RiCapsuleLine size={12} aria-hidden="true" />
                  {result[lang]?.category}
                </span>

                {/* ── HEADING: show what user searched ── */}
                <h1 id="med-name" className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-1">
                  {searchedTerm || result.name}
                </h1>

                {/* If alias was searched, show the generic name below */}
                {isAlias && (
                  <p className="text-sm font-semibold mb-1" style={{ color: GREEN }}>
                    {t.genericName}: {result.name}
                  </p>
                )}

                {/* Brand names */}
                <p className="text-sm text-slate-400 italic mb-7 leading-relaxed">{result.brand}</p>

                <p className="text-slate-700 text-lg sm:text-xl leading-relaxed font-light">
                  {result[lang]?.description}
                </p>
              </motion.section>

              {/* ── What it's used for ──────────────────────────────────── */}
              <motion.section variants={cardAnim} aria-labelledby="uses-heading"
                className={`${glass} rounded-3xl p-7 sm:p-9 mb-4`}
              >
                <h2 id="uses-heading" className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-5">
                  <RiCapsuleLine size={13} style={{ color: GREEN }} aria-hidden="true" />
                  {t.usedFor}
                </h2>
                <ul className="flex flex-wrap gap-2.5" role="list">
                  {result[lang]?.uses.map((use) => (
                    <li key={use}
                      className="text-base font-semibold px-4 py-2 rounded-xl"
                      style={{ backgroundColor: GREEN_BG, color: "#0d6e49", border: `1px solid ${GREEN_BORDER}` }}
                    >
                      {use}
                    </li>
                  ))}
                </ul>
              </motion.section>

              {/* ── Dosage ─────────────────────────────────────────────── */}
              <motion.section variants={cardAnim} aria-labelledby="dosage-heading"
                className={`${glass} rounded-3xl p-7 sm:p-9 mb-4`}
              >
                <h2 id="dosage-heading" className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-6">
                  <RiShieldCheckLine size={13} style={{ color: GREEN }} aria-hidden="true" />
                  {t.howMuch}
                </h2>

                {/* Age tabs */}
                <div role="tablist" aria-label={t.howMuch} className="grid grid-cols-3 gap-2.5 mb-6">
                  {["children", "adults", "elderly"].map((age) => {
                    const Icon = AGE_ICONS[age];
                    const isActive = activeAge === age;
                    return (
                      <button
                        key={age}
                        role="tab"
                        aria-selected={isActive}
                        aria-controls={`panel-${age}`}
                        onClick={() => { setActiveAge(age); stopSpeech(); }}
                        className="flex flex-col items-center justify-center gap-1.5 py-4 rounded-2xl font-bold text-sm transition-all duration-200 focus:outline-none"
                        style={
                          isActive
                            ? { backgroundColor: GREEN, color: "#fff", boxShadow: `0 4px 14px rgba(30,227,148,0.35)` }
                            : { backgroundColor: "rgba(255,255,255,0.55)", border: "1px solid #e2e8f0", color: "#64748b" }
                        }
                        onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.backgroundColor = GREEN_BG; }}
                        onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.55)"; }}
                      >
                        <Icon size={22} aria-hidden="true" />
                        {ageLabel(age)}
                      </button>
                    );
                  })}
                </div>

                {/* Dosage text */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeAge}-${lang}`}
                    id={`panel-${activeAge}`}
                    role="tabpanel"
                    aria-label={ageLabel(activeAge)}
                    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    className="rounded-2xl p-5 sm:p-6 text-slate-800 text-lg sm:text-xl leading-relaxed"
                    style={{ backgroundColor: GREEN_BG, border: `1px solid ${GREEN_BORDER}` }}
                  >
                    {result[lang]?.dosage[activeAge]}
                  </motion.div>
                </AnimatePresence>

                <p className="mt-4 text-sm text-slate-400 italic leading-relaxed">{t.doctorNote}</p>
              </motion.section>

              {/* ── Warnings ───────────────────────────────────────────── */}
              <motion.section variants={cardAnim} aria-labelledby="warnings-heading"
                className="bg-red-50/75 backdrop-blur-xl border border-red-100 shadow-sm rounded-3xl p-7 sm:p-9 mb-10"
              >
                <h2 id="warnings-heading" className="text-xs font-bold text-red-500 uppercase tracking-widest flex items-center gap-2 mb-6">
                  <RiAlertLine size={13} aria-hidden="true" />
                  {t.warnings}
                </h2>
                <ul className="space-y-5" role="list">
                  {result[lang]?.warnings.map((warning, i) => (
                    <li key={i} className="flex items-start gap-4 text-slate-700 text-lg leading-relaxed">
                      <span aria-hidden="true" className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-full bg-red-100 border border-red-200 flex items-center justify-center text-red-500 text-xs font-black">
                        !
                      </span>
                      {warning}
                    </li>
                  ))}
                </ul>
              </motion.section>

            </motion.div>
          )}
        </AnimatePresence>

        {/* ── SYMPTOM CHECKER SECTION ────────────────────────────────── */}
        <SymptomChecker lang={lang} />
      </main>

      {/* ══ FOOTER ══════════════════════════════════════════════════════════ */}
      <footer role="contentinfo" className="py-8 px-4">
        <p className="text-center text-sm text-slate-400 leading-relaxed max-w-sm mx-auto">
          {t.disclaimer}
        </p>
      </footer>

      {/* Overlay to close lang dropdown on outside click */}
      {langOpen && (
        <div className="fixed inset-0 z-30" aria-hidden="true" onClick={() => setLangOpen(false)} />
      )}
    </div>
  );
}
