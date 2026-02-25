// pages/Symptoms.jsx — Separate result card, larger UI, minimal clean layout

import { useState, useRef, useCallback, useMemo, memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  RiStethoscopeLine, RiCapsuleLine, RiShieldCheckLine,
  RiAlertLine, RiSearchEyeLine, RiCloseLine, RiInformationLine,
  RiParentLine, RiUserLine, RiUser3Line,
  RiCheckboxCircleLine, RiArrowRightLine, RiFlashlightLine, RiTimeLine,
} from "react-icons/ri";
import { medicines } from "../data/medicines";

// ─── Theme ────────────────────────────────────────────────────────────────────
const G = "#1ee394";
const G_DIM = "#17c97e";
const G_BG = "rgba(30,227,148,0.08)";
const G_HOVER = "rgba(30,227,148,0.14)";
const G_BORDER = "rgba(30,227,148,0.30)";
const G_DARK = "#0b9460";
const G_TEXT = "#054d34";
const BORDER_SOFT = "rgba(209,242,225,0.85)";
const CARD_BG = "#ffffff";
const INNER_BG = "rgba(248,254,251,1)";

// ─── i18n ─────────────────────────────────────────────────────────────────────
const UI = {
  en: {
    headline: "Describe your symptoms —",
    headlineSub: "we'll suggest what may help.",
    checkerTitle: "Symptom & Medicine Checker",
    checkerSub: "Powered by Aura Health AI",
    disclaimer: "General educational information only — not a substitute for professional medical advice. Always consult a healthcare professional before taking any medicine.",
    symptomsLabel: "Your symptoms",
    symptomsHint: "(press Enter or comma after each)",
    symptomsPlaceholder: "e.g. fever, headache, body ache...",
    medsLabel: "Medicines you already have",
    medsHint: "(optional)",
    medsPlaceholder: "e.g. Paracetamol, Ibuprofen...",
    analyseBtn: "Analyse Symptoms",
    clearBtn: "Clear all",
    quickAdd: ["Fever", "Headache", "Body ache", "Cold", "Cough", "Acidity", "Muscle pain"],
    fromCabinet: "From your cabinet",
    otcOptions: "Other OTC options",
    otcAvailable: "Suggested OTC medicines",
    youHaveThis: "You have this",
    whyHelps: "Why it may help",
    typicalFreq: "Typical frequency",
    dosageGuidance: "Dosage guide",
    importantWarnings: "Important warnings",
    noMatchTitle: "No OTC match found",
    noMatchBody: "Your symptoms didn't match medicines in our dataset. Try a common symptom below, or consult a professional.",
    noMatchTip: "Try: Fever, Headache, Body ache, Acidity, Cough",
    tryAgain: "Try different symptoms",
    consultDoctor: "Consult a doctor",
    footerDisclaimer: "Always consult a healthcare professional before taking any medicine. General information only, not a diagnosis.",
    ageChildren: "Children",
    ageAdults: "Adults",
    ageElderly: "Elderly",
    removeTag: (t) => `Remove ${t}`,
    idleHints: [
      { icon: RiFlashlightLine, label: "Add your symptoms to get started" },
      { icon: RiCapsuleLine, label: "We'll suggest the best OTC medicines" },
      { icon: RiShieldCheckLine, label: "See dosage, frequency & warnings" },
    ],
    resultsSubtitle: "Based on your symptoms",
  },
  hi: {
    headline: "अपने लक्षण बताएं —",
    headlineSub: "हम सुझाएंगे क्या मदद कर सकता है।",
    checkerTitle: "लक्षण और दवा जांचकर्ता",
    checkerSub: "Aura Health AI द्वारा संचालित",
    disclaimer: "केवल सामान्य शैक्षिक जानकारी — पेशेवर चिकित्सा सलाह का विकल्प नहीं। दवा लेने से पहले डॉक्टर से मिलें।",
    symptomsLabel: "आपके लक्षण",
    symptomsHint: "(हर लक्षण के बाद Enter या कॉमा दबाएं)",
    symptomsPlaceholder: "जैसे: बुखार, सिरदर्द, बदन दर्द...",
    medsLabel: "आपके पास मौजूद दवाएं",
    medsHint: "(वैकल्पिक)",
    medsPlaceholder: "जैसे: पैरासिटामोल, इबुप्रोफेन...",
    analyseBtn: "लक्षण जांचें",
    clearBtn: "साफ करें",
    quickAdd: ["बुखार", "सिरदर्द", "बदन दर्द", "सर्दी", "खांसी", "एसिडिटी", "मांसपेशी दर्द"],
    fromCabinet: "आपकी दवाओं में से",
    otcOptions: "अन्य OTC विकल्प",
    otcAvailable: "सुझाई गई OTC दवाएं",
    youHaveThis: "आपके पास है",
    whyHelps: "यह कैसे मदद करती है",
    typicalFreq: "सामान्य आवृत्ति",
    dosageGuidance: "खुराक गाइड",
    importantWarnings: "जरूरी सावधानियां",
    noMatchTitle: "कोई OTC मिलान नहीं",
    noMatchBody: "लक्षण हमारी दवाओं से मेल नहीं खाते।",
    noMatchTip: "आज़माएं: बुखार, सिरदर्द, एसिडिटी",
    tryAgain: "दूसरे लक्षण आज़माएं",
    consultDoctor: "डॉक्टर से मिलें",
    footerDisclaimer: "दवा लेने से पहले डॉक्टर से परामर्श लें। यह सामान्य जानकारी है, निदान नहीं।",
    ageChildren: "बच्चे",
    ageAdults: "बड़े",
    ageElderly: "बुजुर्ग",
    removeTag: (t) => `${t} हटाएं`,
    idleHints: [
      { icon: RiFlashlightLine, label: "लक्षण जोड़ें और शुरू करें" },
      { icon: RiCapsuleLine, label: "हम सही OTC दवाएं सुझाएंगे" },
      { icon: RiShieldCheckLine, label: "खुराक और सावधानियां तुरंत देखें" },
    ],
    resultsSubtitle: "आपके लक्षणों के आधार पर",
  },
  gu: {
    headline: "તમારાં લક્ષણો જણાવો —",
    headlineSub: "અમે સૂચન કરીશું શું મદદ કરી શકે.",
    checkerTitle: "લક્ષણ અને દવા તપાસ",
    checkerSub: "Aura Health AI દ્વારા સંચાલિત",
    disclaimer: "ફક્ત સામાન્ય માહિતી — વ્યાવસાયિક સલાહ નથી. કોઈ દવા લેતા પહેલાં ડૉક્ટરની સલાહ લો.",
    symptomsLabel: "તમારા લક્ષણો",
    symptomsHint: "(Enter અથવા કૉમા દબાવો)",
    symptomsPlaceholder: "દા.ત. તાવ, માથાનો દુખાવો...",
    medsLabel: "તમારી પાસે ઉપલબ્ધ દવાઓ",
    medsHint: "(વૈકલ્પિક)",
    medsPlaceholder: "દા.ત. પેરાસિટામોલ...",
    analyseBtn: "લક્ષણ તપાસો",
    clearBtn: "સાફ કરો",
    quickAdd: ["તાવ", "માથાનો દુખાવો", "શરીરનો દુખાવો", "શરદી", "ઉધરસ", "એસિડિટી", "સ્નાયુ દુખાવો"],
    fromCabinet: "તમારી દવાઓ પૈકી",
    otcOptions: "અન્ય OTC વિકલ્પો",
    otcAvailable: "સૂચવેલ OTC દવાઓ",
    youHaveThis: "તમારી પાસે છે",
    whyHelps: "આ કેવી રીતે મદદ કરે છે",
    typicalFreq: "સામાન્ય આવૃત્તિ",
    dosageGuidance: "ડોઝ માર્ગદર્શિકા",
    importantWarnings: "સાવધાનીઓ",
    noMatchTitle: "કોઈ OTC મળ્યું નથી",
    noMatchBody: "લક્ષણો મેળ ખાતા નથી. ડૉક્ટરને મળો.",
    noMatchTip: "અજમાવો: તાવ, માથાનો દુખાવો, એસિડિટી",
    tryAgain: "અન્ય લક્ષણો અજમાવો",
    consultDoctor: "ડૉક્ટરને મળો",
    footerDisclaimer: "દવા લેતા પહેલાં ડૉક્ટરની સલાહ લો. આ સામાન્ય માહિતી છે, નિદાન નહીં.",
    ageChildren: "બાળકો",
    ageAdults: "મોટા",
    ageElderly: "વૃદ્ધ",
    removeTag: (t) => `${t} દૂર કરો`,
    idleHints: [
      { icon: RiFlashlightLine, label: "ડાબી બાજુ લક્ષણો ઉમેરો" },
      { icon: RiCapsuleLine, label: "OTC દવાઓ સૂચવીશું" },
      { icon: RiShieldCheckLine, label: "ડોઝ અને સાવધાનીઓ જુઓ" },
    ],
    resultsSubtitle: "તમારા લક્ષણોના આધારે",
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const FREQ = {
  en: { paracetamol: "Every 6 hours (max 4×/day)", ibuprofen: "Every 6–8 hours (max 3×/day)", omeprazole: "Once daily, 30 min before breakfast" },
  hi: { paracetamol: "हर 6 घंटे में (अधिकतम 4 बार)", ibuprofen: "हर 6–8 घंटे में (अधिकतम 3 बार)", omeprazole: "दिन में एक बार, नाश्ते से 30 मिनट पहले" },
  gu: { paracetamol: "દર 6 કલાકે (મહ. 4 વખત)", ibuprofen: "દર 6–8 કલાકે (મહ. 3 વખત)", omeprazole: "દરરોજ, નાસ્તાના 30 મિ. પહેલાં" },
};

const REASONS = {
  en: {
    paracetamol: { fever: "Reduces body temperature via the brain's heat-regulation centre.", headache: "Blocks pain signals in the brain, relieving headache discomfort.", "body ache": "Reduces generalised pain signals throughout the body.", "body pain": "Reduces generalised pain signals throughout the body.", cold: "Eases fever and aches that accompany cold symptoms.", cough: "Helps with fever and throat discomfort during illness.", pain: "Reduces pain and discomfort effectively.", default: "Reduces pain and fever via the brain's pain-signalling pathways." },
    ibuprofen: { fever: "Lowers fever by reducing inflammatory signals in the body.", headache: "Reduces inflammation and pain signals causing headaches.", "body ache": "Anti-inflammatory — reduces muscle and tissue discomfort.", "muscle pain": "Targets inflammation in strained or overused muscles.", default: "Reduces pain and inflammation through anti-inflammatory action." },
    omeprazole: { acidity: "Reduces stomach acid production, relieving acidity and heartburn.", heartburn: "Blocks acid secretion in the stomach lining.", default: "Reduces stomach acid to relieve digestive discomfort." },
  },
  hi: {
    paracetamol: { बुखार: "शरीर का तापमान कम करता है।", सिरदर्द: "दर्द के संकेतों को अवरुद्ध करता है।", "बदन दर्द": "पूरे शरीर में दर्द कम करता है।", default: "दर्द और बुखार को कम करता है।" },
    ibuprofen: { बुखार: "सूजन कम करके बुखार उतारता है।", default: "दर्द और सूजन को कम करता है।" },
    omeprazole: { एसिडिटी: "पेट में एसिड उत्पादन कम करता है।", default: "पाचन परेशानी दूर करता है।" },
  },
  gu: {
    paracetamol: { તાવ: "તાપમાન ઘટાડે છે.", "માથાનો દુખાવો": "દર્દ ઘટાડે છે.", default: "દર્દ અને તાવ ઘટાડે છે." },
    ibuprofen: { તાવ: "બળતરા ઘટાડીને તાવ ઉતારે છે.", default: "દર્દ અને બળતરા ઘટાડે છે." },
    omeprazole: { એસિડિટી: "એસિડ ઘટાડે છે.", default: "પાચન અગવડ દૂર કરે છે." },
  },
};

const SYM_MAP = {
  fever: ["paracetamol", "ibuprofen"], temperature: ["paracetamol", "ibuprofen"],
  headache: ["paracetamol", "ibuprofen"], "head ache": ["paracetamol", "ibuprofen"], migraine: ["paracetamol", "ibuprofen"],
  "body ache": ["paracetamol", "ibuprofen"], "body pain": ["paracetamol", "ibuprofen"], pain: ["paracetamol", "ibuprofen"],
  cold: ["paracetamol"], flu: ["paracetamol", "ibuprofen"], cough: ["paracetamol"], throat: ["paracetamol"],
  "muscle pain": ["ibuprofen"], "muscle ache": ["ibuprofen"], muscle: ["ibuprofen"],
  "joint pain": ["ibuprofen"], joint: ["ibuprofen"], inflammation: ["ibuprofen"],
  acidity: ["omeprazole"], acid: ["omeprazole"], heartburn: ["omeprazole"],
  indigestion: ["omeprazole"], stomach: ["omeprazole"], "stomach ache": ["omeprazole"],
  gas: ["omeprazole"], bloating: ["omeprazole"], nausea: ["omeprazole"],
  बुखार: ["paracetamol", "ibuprofen"], सिरदर्द: ["paracetamol", "ibuprofen"],
  "बदन दर्द": ["paracetamol", "ibuprofen"], सर्दी: ["paracetamol"], खांसी: ["paracetamol"],
  "मांसपेशी दर्द": ["ibuprofen"], एसिडिटी: ["omeprazole"],
  તાવ: ["paracetamol", "ibuprofen"], "માથાનો દુખાવો": ["paracetamol", "ibuprofen"],
  "શરીરનો દુખાવો": ["paracetamol", "ibuprofen"], શરદી: ["paracetamol"], ઉધરસ: ["paracetamol"],
  "સ્નાયુ દુખાવો": ["ibuprofen"], એસિડિટી: ["omeprazole"],
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
const norm = (s) => s.trim().toLowerCase();

function getReason(medId, symptoms, lang) {
  const r = REASONS[lang]?.[medId] || REASONS.en[medId] || {};
  for (const s of symptoms) {
    const k = norm(s);
    if (r[k]) return r[k];
    for (const [rk, rv] of Object.entries(r)) {
      if (rk !== "default" && (k.includes(rk) || rk.includes(k))) return rv;
    }
  }
  return r.default || null;
}

function analyse(symptoms, userMeds) {
  const ns = symptoms.map(norm);
  const nm = userMeds.map(norm);
  const counts = {};
  for (const s of ns) {
    for (const [key, ids] of Object.entries(SYM_MAP)) {
      const nk = norm(key);
      if (s === nk || s.includes(nk) || nk.includes(s))
        ids.forEach((id) => { counts[id] = (counts[id] || 0) + 1; });
    }
  }
  const scored = medicines.map((med) => {
    let c = counts[med.id] || 0;
    if (!c && med.symptoms?.length) {
      const ms = med.symptoms.map(norm);
      c = ns.filter((s) => ms.some((m) => m.includes(s) || s.includes(m))).length;
    }
    return { med, matchCount: c, symptoms };
  }).filter((e) => e.matchCount > 0).sort((a, b) => b.matchCount - a.matchCount);
  const matched = scored.filter((e) => nm.some((u) => norm(e.med.name).includes(u) || u.includes(norm(e.med.name))));
  const suggested = scored.filter((e) => !matched.includes(e)).slice(0, 3);
  return { matched, suggested };
}

// ─── TagInput ─────────────────────────────────────────────────────────────────
function TagInput({ tags, setTags, placeholder, removeLabel }) {
  const [val, setVal] = useState("");
  const [focused, setFocused] = useState(false);
  const ref = useRef(null);

  const add = useCallback((v) => {
    const t = v.trim().replace(/,+$/, "").trim();
    if (t && !tags.map(norm).includes(norm(t))) setTags((p) => [...p, t]);
    setVal("");
  }, [tags, setTags]);

  const onKey = useCallback((e) => {
    if (e.key === "Enter" || e.key === ",") { e.preventDefault(); add(val); }
    else if (e.key === "Backspace" && val === "" && tags.length) setTags((p) => p.slice(0, -1));
  }, [add, val, tags.length, setTags]);

  const onChange = useCallback((e) => {
    const v = e.target.value;
    v.endsWith(",") ? add(v) : setVal(v);
  }, [add]);

  const remove = useCallback((tag) => setTags((p) => p.filter((t) => t !== tag)), [setTags]);

  return (
    <div
      className="flex flex-wrap gap-2 items-center min-h-[58px] w-full rounded-2xl px-4 py-3 cursor-text transition-all duration-200"
      style={{
        background: CARD_BG,
        border: `1.5px solid ${focused ? G_DIM : BORDER_SOFT}`,
        boxShadow: focused ? `0 0 0 3px rgba(30,227,148,0.12)` : "none",
      }}
      onClick={() => ref.current?.focus()}
    >
      {tags.map((tag) => (
        <span
          key={tag}
          className="inline-flex items-center gap-1.5 text-[13px] font-semibold px-3.5 py-1.5 rounded-full"
          style={{ background: G_BG, border: `1px solid ${G_BORDER}`, color: G_TEXT }}
        >
          {tag}
          <button
            onMouseDown={(e) => { e.preventDefault(); remove(tag); }}
            aria-label={typeof removeLabel === "function" ? removeLabel(tag) : `Remove ${tag}`}
            className="opacity-50 hover:opacity-100 transition-opacity leading-none"
          >
            <RiCloseLine size={14} />
          </button>
        </span>
      ))}
      <input
        ref={ref} value={val} onChange={onChange} onKeyDown={onKey}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        placeholder={tags.length === 0 ? placeholder : ""}
        className="flex-1 min-w-[130px] bg-transparent text-[14px] text-slate-700 placeholder:text-slate-300 outline-none"
      />
    </div>
  );
}

// ─── QuickPills ───────────────────────────────────────────────────────────────
const QuickPills = memo(function QuickPills({ items, normActive, onAdd }) {
  return (
    <div className="flex flex-wrap gap-2 mt-3.5">
      {items.map((s) => {
        const added = normActive.has(norm(s));
        return (
          <button key={s}
            disabled={added}
            onClick={() => { if (!added) onAdd(s); }}
            className="text-[13px] font-semibold px-3.5 py-1.5 rounded-full transition-all duration-150 disabled:cursor-default focus:outline-none active:scale-95"
            style={{
              background: added ? G_BG : "rgba(255,255,255,0.9)",
              border: `1.5px solid ${added ? G_BORDER : BORDER_SOFT}`,
              color: added ? G_DARK : "#3d7a60",
            }}
          >
            {added ? `✓ ${s}` : `+ ${s}`}
          </button>
        );
      })}
    </div>
  );
});

// ─── DosagePanel ──────────────────────────────────────────────────────────────
const DosagePanel = memo(function DosagePanel({ medData, t }) {
  const [age, setAge] = useState("adults");
  const AGE = [
    { id: "children", Icon: RiParentLine, label: t.ageChildren },
    { id: "adults", Icon: RiUserLine, label: t.ageAdults },
    { id: "elderly", Icon: RiUser3Line, label: t.ageElderly },
  ];
  return (
    <div>
      <p className="text-[12px] font-bold uppercase tracking-widest text-slate-400 mb-3">{t.dosageGuidance}</p>
      <div className="grid grid-cols-3 gap-2 mb-3.5">
        {AGE.map(({ id, Icon, label }) => {
          const active = age === id;
          return (
            <button key={id} onClick={() => setAge(id)}
              className="flex flex-col items-center gap-2 py-3.5 rounded-xl text-[13px] font-bold transition-all duration-200 focus:outline-none"
              style={active
                ? { background: G, color: G_TEXT, boxShadow: `0 4px 14px rgba(30,227,148,0.42)` }
                : { background: "rgba(255,255,255,0.85)", border: "1.5px solid rgba(226,232,240,0.9)", color: "#64748b" }}
            >
              <Icon size={17} />
              {label}
            </button>
          );
        })}
      </div>
      <div className="rounded-xl px-4 py-4 text-[15px] text-slate-700 leading-relaxed"
        style={{ background: G_BG, border: `1px solid ${G_BORDER}` }}>
        {medData.dosage[age]}
      </div>
    </div>
  );
});

// ─── ResultCard — individual medicine card ────────────────────────────────────
const ResultCard = memo(function ResultCard({ entry, lang, t }) {
  const { med } = entry;
  const data = med[lang] || med.en;
  const freq = FREQ[lang]?.[med.id] || FREQ.en[med.id];
  const reason = getReason(med.id, entry.symptoms || [], lang);

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: CARD_BG,
        border: `1.5px solid ${BORDER_SOFT}`,
        boxShadow: "0 2px 16px rgba(30,227,148,0.07), 0 1px 3px rgba(0,0,0,0.04)",
      }}
    >
      {/* Subtle top accent */}
      <div className="h-[2px]" style={{ background: `linear-gradient(90deg,${G} 0%,rgba(30,227,148,0.12) 100%)` }} />

      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4"
        style={{ borderBottom: `1px solid ${BORDER_SOFT}` }}>
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: G_BG, border: `1.5px solid ${G_BORDER}` }}>
            <RiCapsuleLine size={18} style={{ color: G_DARK }} />
          </div>
          <div>
            <p className="text-[17px] font-extrabold text-slate-800 leading-tight">{med.name}</p>
            {data?.category && (
              <p className="text-[13px] text-slate-400 font-medium mt-0.5">{data.category}</p>
            )}
          </div>
        </div>
        {entry.isMatched && (
          <span className="text-[12px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 flex-shrink-0 ml-3"
            style={{ background: G_BG, color: G_DARK, border: `1.5px solid ${G_BORDER}` }}>
            <RiCheckboxCircleLine size={13} />
            {t.youHaveThis}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="px-5 py-5 space-y-4">
        {reason && (
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2">{t.whyHelps}</p>
            <p className="text-[15px] text-slate-600 leading-relaxed">{reason}</p>
          </div>
        )}

        {freq && (
          <div className="flex items-center gap-3.5 rounded-xl px-4 py-3.5"
            style={{ background: G_BG, border: `1px solid ${G_BORDER}` }}>
            <RiTimeLine size={17} style={{ color: G_DARK, flexShrink: 0 }} />
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">{t.typicalFreq}</p>
              <p className="text-[15px] text-slate-700 font-semibold mt-0.5">{freq}</p>
            </div>
          </div>
        )}

        {data?.dosage && <DosagePanel medData={data} t={t} />}

        {data?.warnings?.length > 0 && (
          <div>
            <p className="text-[12px] font-bold uppercase tracking-widest text-slate-400 mb-3">{t.importantWarnings}</p>
            <ul className="space-y-2.5">
              {data.warnings.slice(0, 3).map((w, i) => (
                <li key={i} className="flex items-start gap-3 text-[14px] text-slate-600 leading-snug">
                  <span className="mt-0.5 w-[18px] h-[18px] flex-shrink-0 rounded-full flex items-center justify-center text-[9px] font-black"
                    style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.20)", color: "#ef4444" }}>!</span>
                  {w}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
});

// ─── NoMatchCard ──────────────────────────────────────────────────────────────
const NoMatchCard = memo(function NoMatchCard({ t, onReset }) {
  return (
    <div className="rounded-2xl overflow-hidden"
      style={{ background: CARD_BG, border: `1.5px solid ${BORDER_SOFT}`, boxShadow: "0 2px 16px rgba(30,227,148,0.07)" }}>
      <div className="h-[2px]" style={{ background: `linear-gradient(90deg,${G},rgba(30,227,148,0.10))` }} />
      <div className="px-5 py-5">
        <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-4"
          style={{ background: G_BG, border: `1.5px solid ${G_BORDER}` }}>
          <RiInformationLine size={20} style={{ color: G_DARK }} />
        </div>
        <p className="text-[16px] font-extrabold text-slate-800 mb-2">{t.noMatchTitle}</p>
        <p className="text-[15px] text-slate-500 leading-relaxed mb-4">{t.noMatchBody}</p>
        <div className="rounded-xl px-4 py-3.5 text-[13px] text-slate-500 mb-5"
          style={{ background: G_BG, border: `1px solid ${G_BORDER}` }}>
          💡 {t.noMatchTip}
        </div>
        <div className="flex flex-col sm:flex-row gap-2.5">
          <button onClick={onReset}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-[14px] font-bold transition-all duration-150 focus:outline-none"
            style={{ background: G_BG, border: `1.5px solid ${G_BORDER}`, color: G_DARK }}
            onMouseEnter={(e) => { e.currentTarget.style.background = G_HOVER; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = G_BG; }}>
            <RiArrowRightLine size={15} /> {t.tryAgain}
          </button>
          <Link to="/contact"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-[14px] font-semibold transition-colors duration-150"
            style={{ background: "rgba(255,255,255,0.9)", border: `1.5px solid ${BORDER_SOFT}`, color: "#475569" }}>
            <RiStethoscopeLine size={15} /> {t.consultDoctor}
          </Link>
        </div>
      </div>
    </div>
  );
});

// ─── IdlePlaceholder ──────────────────────────────────────────────────────────
function IdlePlaceholder({ hints }) {
  return (
    <div className="hidden lg:flex flex-col gap-3.5 pt-2" aria-hidden="true">
      {hints.map(({ icon: Icon, label }, i) => (
        <div key={i} className="flex items-center gap-4 px-5 py-4.5 rounded-2xl"
          style={{ background: "rgba(248,254,250,0.90)", border: `1px solid ${BORDER_SOFT}` }}>
          <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: G_BG, border: `1px solid ${G_BORDER}` }}>
            <Icon size={19} style={{ color: G_DARK }} />
          </div>
          <p className="text-[14px] text-slate-400 leading-snug">{label}</p>
        </div>
      ))}
    </div>
  );
}

// ─── Section Divider Label ────────────────────────────────────────────────────
function SectionLabel({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-2.5 mb-4">
      <Icon size={14} style={{ color: G_DARK }} />
      <p className="text-[12px] font-bold uppercase tracking-widest text-slate-400">{label}</p>
    </div>
  );
}

// ─── Results Panel (separate card) ───────────────────────────────────────────
function ResultsPanel({ result, noMatch, hasResults, t, lang, doReset }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-3xl overflow-hidden"
      style={{
        background: INNER_BG,
        border: `1.5px solid ${BORDER_SOFT}`,
        boxShadow: "0 8px 40px rgba(30,227,148,0.10), 0 1px 6px rgba(0,0,0,0.04)",
      }}
    >
      {/* Green top stripe */}
      <div className="h-[3px]" style={{ background: `linear-gradient(90deg,${G} 0%,${G_DIM} 55%,transparent 100%)` }} />

      {/* Panel header */}
      <div className="flex items-center justify-between px-6 sm:px-8 pt-6 pb-5"
        style={{ borderBottom: `1.5px solid ${BORDER_SOFT}` }}>
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{ background: G_BG, border: `1.5px solid ${G_BORDER}` }}>
            <RiCapsuleLine size={20} style={{ color: G_DARK }} />
          </div>
          <div>
            <p className="text-[16px] font-extrabold text-slate-700 leading-tight">{t.otcAvailable}</p>
            <p className="text-[13px] text-slate-400 mt-0.5">{t.resultsSubtitle}</p>
          </div>
        </div>
        <button
          onClick={doReset}
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-[13px] font-semibold transition-all duration-150 focus:outline-none"
          style={{ background: "rgba(255,255,255,0.9)", border: `1.5px solid ${BORDER_SOFT}`, color: "#64748b" }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = G_BORDER; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = BORDER_SOFT; }}
        >
          <RiCloseLine size={14} /> {t.clearBtn}
        </button>
      </div>

      {/* Panel body */}
      <div className="px-6 sm:px-8 py-6 space-y-6">
        {noMatch && <NoMatchCard t={t} onReset={doReset} />}

        {result?.matched.length > 0 && (
          <div>
            <SectionLabel icon={RiCheckboxCircleLine} label={t.fromCabinet} />
            <div className="space-y-4">
              {result.matched.map((e) => (
                <ResultCard key={e.med.id} entry={{ ...e, isMatched: true }} lang={lang} t={t} />
              ))}
            </div>
          </div>
        )}

        {result?.suggested.length > 0 && (
          <div>
            <SectionLabel
              icon={RiCapsuleLine}
              label={result.matched.length ? t.otcOptions : t.otcAvailable}
            />
            <div className="space-y-4">
              {result.suggested.map((e) => (
                <ResultCard key={e.med.id} entry={e} lang={lang} t={t} />
              ))}
            </div>
          </div>
        )}

        {hasResults && (
          <div className="flex items-start gap-3 rounded-2xl px-5 py-4"
            style={{ background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.12)" }}
            role="note">
            <RiAlertLine size={15} style={{ color: "#f87171", flexShrink: 0, marginTop: 1 }} />
            <p className="text-[14px] text-red-500/80 leading-relaxed">{t.footerDisclaimer}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function Symptoms({ lang = "en" }) {
  const t = UI[lang] || UI.en;

  const [symptoms, setSymptoms] = useState([]);
  const [userMeds, setUserMeds] = useState([]);
  const [analysed, setAnalysed] = useState(false);
  const [result, setResult] = useState(null);
  const [noMatch, setNoMatch] = useState(false);

  const hasResults = result && (result.matched.length > 0 || result.suggested.length > 0);
  const normSymptomsSet = useMemo(() => new Set(symptoms.map(norm)), [symptoms]);

  const doAnalyse = useCallback(() => {
    if (!symptoms.length) return;
    const res = analyse(symptoms, userMeds);
    setResult(res);
    setNoMatch(!res.matched.length && !res.suggested.length);
    setAnalysed(true);
  }, [symptoms, userMeds]);

  const doReset = useCallback(() => {
    setSymptoms([]); setUserMeds([]);
    setAnalysed(false); setResult(null); setNoMatch(false);
  }, []);

  const addSymptom = useCallback((s) => {
    setSymptoms((p) => {
      if (p.map(norm).includes(norm(s))) return p;
      return [...p, s];
    });
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col text-slate-800"
      style={{
        background:
          "radial-gradient(ellipse 80% 55% at 0% -10%, rgba(30,227,148,0.16) 0%, transparent 55%)," +
          "radial-gradient(ellipse 60% 45% at 100% 0%, rgba(30,227,148,0.10) 0%, transparent 50%)," +
          "radial-gradient(ellipse 70% 50% at 50% 110%, rgba(30,227,148,0.12) 0%, transparent 55%)," +
          "#f0fdf8",
      }}
    >
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 pt-10 sm:pt-14 pb-16 sm:pb-24">

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.44, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl sm:text-5xl lg:text-6xl font-light text-slate-700 leading-snug mb-10 sm:mb-12"
        >
          {t.headline}<br />
          <span className="font-extrabold text-slate-900">{t.headlineSub}</span>
        </motion.h1>

        {/* Two-column layout: LEFT = sticky input card, RIGHT = scrollable results */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start space-y-6 lg:space-y-0">

          {/* ── LEFT: Input Card — sticky on desktop so it doesn't leave a void ── */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.07, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-6"
          >
            <div
              className="rounded-3xl overflow-hidden"
              style={{
                background: CARD_BG,
                border: `1.5px solid ${BORDER_SOFT}`,
                boxShadow: "0 8px 40px rgba(30,227,148,0.09), 0 1px 6px rgba(0,0,0,0.04)",
              }}
            >
              {/* Top accent stripe */}
              <div className="h-[3px]" style={{ background: `linear-gradient(90deg,${G} 0%,${G_DIM} 55%,transparent 100%)` }} />

              {/* Card header */}
              <div className="flex items-center justify-between px-6 sm:px-8 pt-6 pb-5"
                style={{ borderBottom: `1.5px solid ${BORDER_SOFT}` }}>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: G_BG, border: `1.5px solid ${G_BORDER}` }}>
                    <RiStethoscopeLine size={20} style={{ color: G_DARK }} />
                  </div>
                  <div>
                    <p className="text-[16px] font-extrabold text-slate-700 leading-tight">{t.checkerTitle}</p>
                    <p className="text-[13px] text-slate-400 font-medium mt-0.5">{t.checkerSub}</p>
                  </div>
                </div>
                <span className="text-[11px] font-black tracking-widest px-2.5 py-1 rounded-full uppercase"
                  style={{ background: G_BG, color: G_DARK, border: `1px solid ${G_BORDER}` }}>AI</span>
              </div>

              {/* Card body */}
              <div className="px-6 sm:px-8 pt-6 pb-8 space-y-6">

                {/* Disclaimer */}
                <div className="flex items-start gap-3 rounded-2xl px-4 py-4"
                  style={{ background: G_BG, border: `1px solid ${G_BORDER}` }}>
                  <RiAlertLine size={16} style={{ color: G_DARK, flexShrink: 0, marginTop: 2 }} />
                  <p className="text-[14px] text-slate-500 leading-relaxed">{t.disclaimer}</p>
                </div>

                {/* Symptoms input */}
                <div>
                  <label className="block text-[12px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                    {t.symptomsLabel}
                    <span className="ml-2 normal-case font-normal text-slate-300">{t.symptomsHint}</span>
                  </label>
                  <TagInput
                    tags={symptoms}
                    setTags={setSymptoms}
                    placeholder={t.symptomsPlaceholder}
                    removeLabel={t.removeTag}
                  />
                  <QuickPills items={t.quickAdd} normActive={normSymptomsSet} onAdd={addSymptom} />
                </div>

                {/* Medicines input */}
                <div>
                  <label className="block text-[12px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                    {t.medsLabel}
                    <span className="ml-2 normal-case font-normal text-slate-300">{t.medsHint}</span>
                  </label>
                  <TagInput
                    tags={userMeds}
                    setTags={setUserMeds}
                    placeholder={t.medsPlaceholder}
                    removeLabel={t.removeTag}
                  />
                </div>

                {/* CTA button */}
                <button
                  onClick={doAnalyse}
                  disabled={!symptoms.length}
                  className="w-full flex items-center justify-center gap-2.5 text-[16px] font-bold px-6 py-4 rounded-2xl transition-all duration-150 disabled:cursor-not-allowed focus:outline-none active:scale-[0.99]"
                  style={
                    !symptoms.length
                      ? { background: "rgba(203,232,218,0.30)", color: "#94a3b8" }
                      : {
                        background: `linear-gradient(135deg,${G} 0%,${G_DIM} 100%)`,
                        color: G_TEXT,
                        boxShadow: "0 4px 24px rgba(30,227,148,0.42)",
                      }
                  }
                >
                  <RiSearchEyeLine size={19} />
                  {t.analyseBtn}
                </button>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Results Card (completely separate card, scrolls naturally) ── */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            {!analysed
              ? <IdlePlaceholder hints={t.idleHints} />
              : (
                <ResultsPanel
                  result={result}
                  noMatch={noMatch}
                  hasResults={hasResults}
                  t={t}
                  lang={lang}
                  doReset={doReset}
                />
              )
            }
          </motion.div>

        </div>
      </main>
    </div>
  );
}
