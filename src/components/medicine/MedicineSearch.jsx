// components/medicine/MedicineSearch.jsx

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
  RiUserLine,
  RiParentLine,
  RiUser3Line,
  RiArrowRightSLine,
} from "react-icons/ri";

import Input from "../ui/Input";
import Button from "../ui/Button";
import Card from "../ui/Card";
import {
  getMedicineByName,
  getAllMedicineNames,
  getSuggestions,
} from "../../services/searchService";
import { speakText, buildMedicineScript } from "../../services/speechService";
import { fadeUp, staggerContainer, staggerItem } from "../../animations/variants";

// ── Brand green ───────────────────────────────────────────────────────────────
const GREEN        = "#1ee394";
const GREEN_DARK   = "#0d7a4a";
const GREEN_BG     = "rgba(30,227,148,0.08)";
const GREEN_BORDER = "rgba(30,227,148,0.25)";

const AGE_TABS = [
  { key: "children", label: "Children", Icon: RiParentLine },
  { key: "adults",   label: "Adults",   Icon: RiUserLine   },
  { key: "elderly",  label: "Elderly",  Icon: RiUser3Line  },
];

// ── Highlight matched query text inside a suggestion label ────────────────────
function HighlightMatch({ label, query }) {
  if (!query) return <>{label}</>;
  const idx = label.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return <>{label}</>;
  return (
    <>
      {label.slice(0, idx)}
      <span style={{ color: GREEN, fontWeight: 700 }}>
        {label.slice(idx, idx + query.length)}
      </span>
      {label.slice(idx + query.length)}
    </>
  );
}

export default function MedicineSearch() {
  const [query,       setQuery]       = useState("");
  const [result,      setResult]      = useState(null);  // { med, searchedTerm, isAlias }
  const [notFound,    setNotFound]    = useState(false);
  const [activeAge,   setActiveAge]   = useState("adults");
  const [speaking,    setSpeaking]    = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [showDrop,    setShowDrop]    = useState(false);
  const [dropIdx,     setDropIdx]     = useState(-1);

  const cancelSpeechRef = useRef(null);
  const inputRef        = useRef(null);
  const dropRef         = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setShowDrop(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Live suggestions as user types
  const handleQueryChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    setNotFound(false);
    if (val.trim().length >= 1) {
      const s = getSuggestions(val, 8);
      setSuggestions(s);
      setShowDrop(s.length > 0);
      setDropIdx(-1);
    } else {
      setSuggestions([]);
      setShowDrop(false);
    }
  };

  const handleSearch = (name = query) => {
    const res = getMedicineByName(name);
    setNotFound(false);
    setShowDrop(false);
    stopSpeech();
    if (res) {
      setResult(res);
      setActiveAge("adults");
    } else {
      setResult(null);
      setNotFound(true);
    }
  };

  const handleKeyDown = (e) => {
    if (showDrop && suggestions.length > 0) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setDropIdx((i) => Math.min(i + 1, suggestions.length - 1));
        return;
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setDropIdx((i) => Math.max(i - 1, 0));
        return;
      }
      if (e.key === "Enter" && dropIdx >= 0) {
        e.preventDefault();
        const chosen = suggestions[dropIdx];
        setQuery(chosen.label);
        handleSearch(chosen.value);
        return;
      }
      if (e.key === "Escape") {
        setShowDrop(false);
        return;
      }
    }
    if (e.key === "Enter") handleSearch();
  };

  const pickSuggestion = (s) => {
    setQuery(s.label);
    handleSearch(s.value);
  };

  const handleReset = () => {
    setResult(null);
    setNotFound(false);
    setQuery("");
    setSuggestions([]);
    setShowDrop(false);
    stopSpeech();
    setTimeout(() => inputRef.current?.focus(), 80);
  };

  const toggleSpeech = () => {
    if (speaking) {
      stopSpeech();
    } else {
      const script = buildMedicineScript(result.med, activeAge);
      const { cancel } = speakText(script, { onEnd: () => setSpeaking(false) });
      cancelSpeechRef.current = cancel;
      setSpeaking(true);
    }
  };

  const stopSpeech = () => {
    cancelSpeechRef.current?.();
    setSpeaking(false);
  };

  const quickNames = getAllMedicineNames();

  // Resolve multilingual fields gracefully (en fallback)
  const medData = result?.med;
  const enData  = medData?.en || medData; // use .en if present, else top-level

  return (
    <section id="search" aria-label="Medicine search" className="w-full max-w-5xl mx-auto">
      <AnimatePresence mode="wait">

        {/* ═══════════════════════════════ SEARCH STATE ══════════════════════ */}
        {!result ? (
          <motion.div
            key="search"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -12, transition: { duration: 0.25 } }}
          >
            {/* Search bar — constrained width, centered */}
            <div className="max-w-2xl mx-auto">
            {/* Search bar with live dropdown */}
            <div className="relative" ref={dropRef} role="search">
              <div className="flex gap-3">
                <Input
                  ref={inputRef}
                  id="medicine-search"
                  name="medicine"
                  value={query}
                  onChange={handleQueryChange}
                  onKeyDown={handleKeyDown}
                  onFocus={() =>
                    query.trim().length >= 1 &&
                    suggestions.length > 0 &&
                    setShowDrop(true)
                  }
                  placeholder="Search by name or brand (Zerodol, Crocin, Dolo 650…)"
                  leadingIcon={RiSearchLine}
                  ariaLabel="Search medicine by name or brand"
                  autoFocus
                  autoComplete="off"
                  className="flex-1 text-base py-4"
                />
                <button
                  onClick={() => handleSearch()}
                  aria-label="Search medicine"
                  className="px-6 py-4 text-sm font-bold rounded-xl transition-all duration-200 flex-shrink-0"
                  style={{
                    backgroundColor: GREEN,
                    color: "#0a3d28",
                    boxShadow: `0 2px 14px rgba(30,227,148,0.30)`,
                  }}
                >
                  Search
                </button>
              </div>

              {/* Live dropdown */}
              <AnimatePresence>
                {showDrop && suggestions.length > 0 && (
                  <motion.ul
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                    role="listbox"
                    className="absolute z-50 mt-1.5 w-full bg-slate-900 border border-slate-700/60 rounded-2xl shadow-2xl overflow-hidden"
                  >
                    {suggestions.map((s, i) => (
                      <li
                        key={`${s.value}-${i}`}
                        role="option"
                        aria-selected={i === dropIdx}
                        onMouseDown={() => pickSuggestion(s)}
                        className="flex items-center justify-between px-4 py-3 cursor-pointer transition-colors duration-100"
                        style={{
                          backgroundColor:
                            i === dropIdx ? "rgba(30,227,148,0.10)" : "transparent",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor =
                            "rgba(30,227,148,0.08)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor =
                            i === dropIdx ? "rgba(30,227,148,0.10)" : "transparent";
                        }}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <RiCapsuleLine size={14} style={{ color: GREEN, flexShrink: 0 }} />
                          <span className="text-slate-100 text-sm font-medium truncate">
                            <HighlightMatch label={s.label} query={query} />
                          </span>
                          {/* Show generic name when it's an alias */}
                          {s.label.toLowerCase() !== s.medName.toLowerCase() && (
                            <span className="text-xs text-slate-500 flex-shrink-0">
                              → {s.medName}
                            </span>
                          )}
                        </div>
                        <RiArrowRightSLine
                          size={14}
                          className="text-slate-600 flex-shrink-0 ml-2"
                        />
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            {/* Not-found error */}
            <AnimatePresence>
              {notFound && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  role="alert"
                  className="mt-3 text-sm text-red-400 flex items-center gap-2"
                >
                  <RiAlertLine size={15} />
                  No results for &ldquo;{query}&rdquo;. Try a brand name like Crocin, Dolo,
                  or Zerodol.
                </motion.p>
              )}
            </AnimatePresence>

            {/* Quick-search pills */}
            <div className="mt-5" aria-label="Medicine suggestions">
              <p className="text-xs text-slate-600 uppercase tracking-widest mb-3 font-medium">
                Quick search
              </p>
              <div className="flex flex-wrap gap-2">
                {quickNames.map((name) => (
                  <motion.button
                    key={name}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => { setQuery(name); handleSearch(name); }}
                    aria-label={`Search for ${name}`}
                    className="text-sm px-4 py-2 rounded-xl transition-all duration-200 font-medium border"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      borderColor: "rgba(255,255,255,0.09)",
                      color: "#94a3b8",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = GREEN_BG;
                      e.currentTarget.style.borderColor = GREEN_BORDER;
                      e.currentTarget.style.color = GREEN;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)";
                      e.currentTarget.style.color = "#94a3b8";
                    }}
                  >
                    {name}
                  </motion.button>
                ))}
              </div>
            </div>
            </div>{/* end centered container */}
          </motion.div>

        ) : (

          /* ═══════════════════════════════ RESULT STATE ═════════════════════ */
          <motion.div
            key="result"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            {/* Back + Audio controls */}
            <motion.div
              variants={staggerItem}
              className="flex items-center justify-between mb-5"
            >
              <Button
                onClick={handleReset}
                variant="ghost"
                ariaLabel="Back to search"
                className="gap-1.5 text-slate-500"
              >
                <RiArrowLeftLine size={15} />
                Back to search
              </Button>
              <button
                onClick={toggleSpeech}
                aria-label={speaking ? "Stop audio" : "Listen to explanation"}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border transition-all duration-200"
                style={
                  speaking
                    ? { backgroundColor: GREEN, color: "#0a3d28", borderColor: GREEN }
                    : {
                        background: "rgba(255,255,255,0.06)",
                        borderColor: "rgba(255,255,255,0.12)",
                        color: "#94a3b8",
                      }
                }
              >
                {speaking ? (
                  <><RiStopCircleLine size={15} /> Stop</>
                ) : (
                  <><RiVolumeUpLine size={15} /> Listen</>
                )}
              </button>
            </motion.div>

            {/* Medicine header card — full width */}
            <motion.div variants={staggerItem}>
              <Card className="p-6 mb-4 lg:flex lg:items-center lg:gap-8">
                <div className="lg:flex-1">
                  {/* Category badge */}
                  <span
                    className="inline-block text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-3 border"
                    style={{
                      background: GREEN_BG,
                      color: GREEN_DARK,
                      borderColor: GREEN_BORDER,
                    }}
                  >
                    {enData?.category}
                  </span>

                  <h2 className="text-2xl lg:text-4xl font-bold text-white tracking-tight mb-0.5">
                    {result.searchedTerm}
                  </h2>

                  {result.isAlias && (
                    <p className="text-sm font-semibold mb-1" style={{ color: GREEN }}>
                      Generic: {medData.name}
                    </p>
                  )}

                  <p className="text-xs text-slate-500 mb-0 font-medium">{medData.brand}</p>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mt-4 lg:mt-0 lg:max-w-xs lg:border-l lg:border-white/10 lg:pl-8">
                  {enData?.description}
                </p>
              </Card>
            </motion.div>

            {/* Two-column grid for Uses + Dosage on laptop */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">

              {/* Uses */}
              <motion.div variants={staggerItem}>
                <Card className="p-5 h-full">
                  <h3 className="text-sm font-semibold text-slate-300 flex items-center gap-2 mb-4">
                    <RiCapsuleLine size={16} style={{ color: GREEN }} />
                    Common Uses
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {(enData?.uses || []).map((use) => (
                      <span
                        key={use}
                        className="text-xs px-3 py-1.5 rounded-lg font-medium border"
                        style={{
                          background: "rgba(30,227,148,0.07)",
                          color: "#6ee7b7",
                          borderColor: "rgba(30,227,148,0.15)",
                        }}
                      >
                        {use}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>

              {/* Dosage */}
              <motion.div variants={staggerItem}>
                <Card className="p-5 h-full">
                  <h3 className="text-sm font-semibold text-slate-300 flex items-center gap-2 mb-4">
                    <RiShieldCheckLine size={16} style={{ color: GREEN }} />
                    Dosage by Age Group
                  </h3>

                  {/* Age tabs */}
                  <div className="flex gap-2 mb-4" role="tablist" aria-label="Age group dosage">
                    {AGE_TABS.map(({ key, label, Icon }) => (
                      <button
                        key={key}
                        role="tab"
                        aria-selected={activeAge === key}
                        onClick={() => { setActiveAge(key); stopSpeech(); }}
                        className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg transition-all duration-200 flex-1 justify-center border"
                        style={
                          activeAge === key
                            ? {
                                backgroundColor: GREEN,
                                color: "#0a3d28",
                                borderColor: GREEN,
                                boxShadow: `0 2px 10px rgba(30,227,148,0.28)`,
                              }
                            : {
                                background: "rgba(255,255,255,0.05)",
                                color: "#64748b",
                                borderColor: "rgba(255,255,255,0.05)",
                              }
                        }
                      >
                        <Icon size={13} />
                        {label}
                      </button>
                    ))}
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeAge}
                      role="tabpanel"
                      aria-label={`${activeAge} dosage`}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.2 }}
                      className="rounded-xl p-4 text-sm text-slate-300 leading-relaxed border"
                      style={{
                        background: "rgba(30,227,148,0.06)",
                        borderColor: "rgba(30,227,148,0.15)",
                      }}
                    >
                      {enData?.dosage?.[activeAge]}
                    </motion.div>
                  </AnimatePresence>

                  <p className="mt-3 text-xs text-slate-600 italic">
                    Always follow your healthcare provider&rsquo;s specific instructions.
                  </p>
                </Card>
              </motion.div>

            </div>{/* end uses+dosage grid */}

            {/* Warnings — full width with 2-col list on laptop */}
            <motion.div variants={staggerItem}>
              <Card className="p-5 bg-red-950/10 border-red-900/20">
                <h3 className="text-sm font-semibold text-red-400 flex items-center gap-2 mb-4">
                  <RiAlertLine size={16} />
                  Important Warnings
                </h3>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-3" role="list">
                  {(enData?.warnings || []).map((warning, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-slate-400 leading-relaxed"
                    >
                      <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-red-900/40 border border-red-800/40 flex items-center justify-center text-red-400 font-bold text-xs">
                        !
                      </span>
                      {warning}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            {/* Disclaimer */}
            <motion.p
              variants={staggerItem}
              className="mt-6 text-xs text-slate-600 text-center leading-relaxed"
            >
              This information is for general guidance only and does not replace
              professional medical advice.
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
