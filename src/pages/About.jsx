// pages/About.jsx — Aura Health About page, theme-matched to Home.jsx

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  RiCapsuleLine, RiVolumeUpLine, RiUser3Line,
  RiSearchLine, RiBookOpenLine, RiShieldCheckLine,
  RiCheckLine, RiHeartPulseLine, RiFlashlightLine,
  RiTimeLine, RiAlertLine, RiSparklingLine,
  RiStethoscopeLine, RiParentLine, RiUserLine,
} from "react-icons/ri";

// ─── Theme — exact match to Home.jsx ──────────────────────────────────────────
const GREEN        = "#1ee394";
const GREEN_DIM    = "#17c97e";
const GREEN_BG     = "rgba(30,227,148,0.12)";
const GREEN_BORDER = "rgba(30,227,148,0.35)";

// Glass styles — same as Home.jsx
const glass       = "bg-white/70 backdrop-blur-2xl border border-white/90 shadow-sm";
const glassMedium = "bg-white/55 backdrop-blur-xl border border-white/75 shadow-sm";

// ─── Content ──────────────────────────────────────────────────────────────────
const content = {
  en: {
    pageLabel: "About Aura Health",
    headline: "Medicine explained simply —",
    headlineSub: "for everyone.",
    intro: "Most people Google a medicine name and get complex articles, too much information, and conflicting answers. Aura Health gives you a clear, structured summary in seconds — with audio built in.",
    trust: ["No account needed", "No ads", "Audio built in", "Completely free"],

    problemLabel: "The Problem",
    problemTitle: "Why medicine info is broken",
    problemSub: "People deserve simple, reliable answers. Today, they rarely get them.",
    problems: [
      { icon: RiAlertLine,      title: "Confusing leaflets",   desc: "Medical package inserts are written for professionals, not patients. Dense text, jargon, and tiny print." },
      { icon: RiSearchLine,     title: "Google overload",      desc: "Searching a medicine name returns clinical trials, forums, and conflicting advice — not a clear answer." },
      { icon: RiTimeLine,       title: "No structured format", desc: "AI chatbots give different answers depending on how you ask. There's no consistent, predictable output." },
    ],

    solutionLabel: "Our Solution",
    solutionTitle: "Focused. Structured. Instant.",
    solutionSub: "Aura Health is built only for medicines. One input, one structured result — every time.",
    features: [
      { icon: RiCapsuleLine,    title: "Plain-language explanations", desc: "No medical jargon. What the medicine does, in words anyone can understand." },
      { icon: RiParentLine,     title: "Age-wise dosage breakdown",   desc: "The right amount for Children, Adults, or Elderly — shown clearly in one tap." },
      { icon: RiVolumeUpLine,   title: "One-click audio",             desc: "Tap Listen and hear a clear spoken explanation — built for accessibility from day one." },
      { icon: RiShieldCheckLine,title: "Important warnings",          desc: "Key safety information shown upfront — not buried in a wall of text." },
      { icon: RiFlashlightLine, title: "Instant results",             desc: "No long prompts. No conversation. Type the name, get the answer." },
      { icon: RiStethoscopeLine,title: "Symptom checker",             desc: "Describe what you feel and get matched to relevant OTC medicines with dosage guides." },
    ],

    whyLabel: "Why not ChatGPT?",
    whyTitle: "Built specifically for medicines",
    whySub: "General AI tools are powerful — but Aura Health is purpose-built for this one job.",
    comparisons: [
      { label: "Focused experience",    aura: "Built only for medicines — zero distractions", gpt: "General-purpose, requires specific prompting" },
      { label: "Consistent format",     aura: "Same structured output every time",             gpt: "Varies based on how you phrase the question" },
      { label: "Non-tech users",        aura: "Type name → get answer, no prompts needed",     gpt: "Requires knowing how to ask medical questions" },
      { label: "Accessibility",         aura: "Built-in one-click audio for all users",         gpt: "No dedicated audio for spoken results" },
    ],

    howLabel: "How it works",
    howTitle: "Three steps. Zero confusion.",
    howSub: "You should never need instructions to use Aura Health.",
    steps: [
      { icon: RiSearchLine,    title: "Type the medicine name",  desc: "Enter any medicine name — brand names work too. Start typing and suggestions appear." },
      { icon: RiBookOpenLine,  title: "Read the clear summary",  desc: "See what it does, dosage by age, and important warnings — all in one clean view." },
      { icon: RiVolumeUpLine,  title: "Listen if you prefer",    desc: "Tap Listen for a spoken explanation — ideal for elderly users or low-literacy scenarios." },
    ],

    ctaTitle: "Clarity is a right, not a privilege.",
    ctaSub: "Everyone deserves to understand what they're putting in their body. Free, instant, and always will be.",
    ctaBtn: "Search a Medicine",

    scopeLabel: "Hackathon MVP scope",
    scopeTitle: "What's in — and what's next",
    scopeSub: "This is a focused prototype. We built what matters most, not everything.",
    inScope:   ["Medicine name search", "Pre-filled medicine database", "Age-wise dosage", "Warnings section", "English audio (TTS)", "Symptom checker", "Multilingual UI (EN / HI / GU)"],
    outScope:  ["OCR / image scanning", "Pharmacy suggestions", "Full global database", "Login / accounts", "Prescription analysis"],
  },
  hi: {
    pageLabel: "Aura Health के बारे में",
    headline: "दवाई आसान भाषा में —",
    headlineSub: "सबके लिए।",
    intro: "ज़्यादातर लोग दवा का नाम गूगल करते हैं और उन्हें मिलती है — जटिल जानकारी, बहुत ज़्यादा टेक्स्ट, और अलग-अलग जवाब। Aura Health कुछ सेकंड में स्पष्ट, संरचित जानकारी देता है — ऑडियो के साथ।",
    trust: ["कोई अकाउंट नहीं", "कोई विज्ञापन नहीं", "ऑडियो सुविधा", "बिल्कुल मुफ्त"],

    problemLabel: "समस्या",
    problemTitle: "दवा की जानकारी क्यों मुश्किल है",
    problemSub: "लोग सरल जवाब के हकदार हैं। आज वो मिलता नहीं।",
    problems: [
      { icon: RiAlertLine,  title: "उलझी हुई पर्ची",       desc: "दवाइयों की पर्चियां डॉक्टरों के लिए लिखी होती हैं, मरीज़ों के लिए नहीं।" },
      { icon: RiSearchLine, title: "गूगल पर बहुत कुछ",     desc: "दवा का नाम गूगल करने पर क्लिनिकल आर्टिकल, फोरम — स्पष्ट जवाब नहीं।" },
      { icon: RiTimeLine,   title: "कोई तय जानकारी नहीं", desc: "AI चैटबॉट्स हर बार अलग जवाब देते हैं — कोई तय फॉर्मेट नहीं।" },
    ],

    solutionLabel: "हमारा समाधान",
    solutionTitle: "केंद्रित। संरचित। तुरंत।",
    solutionSub: "Aura Health सिर्फ दवाइयों के लिए बना है। एक इनपुट, एक स्पष्ट जवाब — हर बार।",
    features: [
      { icon: RiCapsuleLine,    title: "आसान भाषा में जानकारी",  desc: "कोई मेडिकल शब्द नहीं। दवा क्या करती है — सरल शब्दों में।" },
      { icon: RiParentLine,     title: "उम्र के अनुसार खुराक",  desc: "बच्चे, बड़े या बुजुर्ग — एक टैप में सही मात्रा।" },
      { icon: RiVolumeUpLine,   title: "एक क्लिक में ऑडियो",    desc: "सुनें दबाएं और दवा की जानकारी सुनें।" },
      { icon: RiShieldCheckLine,title: "जरूरी सावधानियां",       desc: "महत्वपूर्ण चेतावनियां सबसे पहले दिखाई जाती हैं।" },
      { icon: RiFlashlightLine, title: "तुरंत परिणाम",           desc: "नाम लिखें, जवाब पाएं — कोई लंबी बातचीत नहीं।" },
      { icon: RiStethoscopeLine,title: "लक्षण जांचकर्ता",       desc: "लक्षण बताएं और सही OTC दवाएं सुझाव पाएं।" },
    ],

    whyLabel: "ChatGPT क्यों नहीं?",
    whyTitle: "दवाइयों के लिए खास बनाया",
    whySub: "AI उपकरण शक्तिशाली हैं — लेकिन Aura Health इसी एक काम के लिए बना है।",
    comparisons: [
      { label: "केंद्रित अनुभव",  aura: "सिर्फ दवाइयों के लिए — कोई विकर्षण नहीं", gpt: "सामान्य उपकरण, विशेष प्रॉम्प्ट चाहिए" },
      { label: "एक जैसा फॉर्मेट", aura: "हर बार एक जैसा जवाब",                      gpt: "सवाल के तरीके पर निर्भर" },
      { label: "आसान उपयोग",      aura: "नाम लिखें → जवाब पाएं",                    gpt: "सही सवाल पूछना जरूरी" },
      { label: "सुलभता",           aura: "बिल्ट-इन ऑडियो",                           gpt: "ऑडियो सुविधा नहीं" },
    ],

    howLabel: "कैसे करें",
    howTitle: "तीन कदम। कोई उलझन नहीं।",
    howSub: "Aura Health इस्तेमाल करने के लिए कोई निर्देश नहीं चाहिए।",
    steps: [
      { icon: RiSearchLine,   title: "दवा का नाम लिखें",   desc: "कोई भी दवा का नाम लिखें — ब्रांड नाम भी चलेगा।" },
      { icon: RiBookOpenLine, title: "आसान जानकारी पढ़ें", desc: "क्या करती है, मात्रा और सावधानियां।" },
      { icon: RiVolumeUpLine, title: "सुनना हो तो सुनें",  desc: "सुनें बटन दबाकर जानकारी सुन सकते हैं।" },
    ],

    ctaTitle: "समझना हर इंसान का हक है।",
    ctaSub: "हर किसी को यह जानने का हक है कि वे कौन सी दवा ले रहे हैं। मुफ्त और हमेशा।",
    ctaBtn: "दवा खोजें",

    scopeLabel: "हैकाथॉन MVP",
    scopeTitle: "क्या है — और क्या आगे",
    scopeSub: "यह एक केंद्रित प्रोटोटाइप है।",
    inScope:   ["दवा नाम खोज", "दवाओं का डेटाबेस", "उम्र के अनुसार खुराक", "सावधानियां", "ऑडियो (TTS)", "लक्षण जांचकर्ता", "बहुभाषी UI"],
    outScope:  ["OCR / इमेज स्कैन", "फार्मेसी सुझाव", "ग्लोबल डेटाबेस", "लॉगिन/अकाउंट", "प्रिस्क्रिप्शन विश्लेषण"],
  },
  gu: {
    pageLabel: "Aura Health વિષે",
    headline: "દવા સરળ ભાષામાં —",
    headlineSub: "બધા માટે.",
    intro: "મોટા ભાગના લોકો દવાનું નામ ગૂગલ કરે છે અને મળે છે — જટિલ લેખો, ઘણી બધી માહિતી, અને અલગ-અલગ જવાબો. Aura Health ચંદ સેકન્ડમાં સ્પષ્ટ, માળખાગત જવાબ આપે — ઓડિઓ સાથે.",
    trust: ["ખાતું જોઈતું નથી", "જાહેરાત નથી", "ઓડિઓ છે", "સંપૂર્ણ મફત"],

    problemLabel: "સમસ્યા",
    problemTitle: "દવાની માહિતી કેમ અઘરી છે",
    problemSub: "લોકો સ્પષ્ટ જવાબના હકદાર છે. આજે તે મળતો નથી.",
    problems: [
      { icon: RiAlertLine,  title: "ગૂંચવણભરી પર્ચી",   desc: "દવાઓની પેટી-ચિઠ્ઠીઓ ડૉક્ટરો માટે છે, દર્દીઓ માટે નહીં." },
      { icon: RiSearchLine, title: "ગૂગલ પર ઘણું",      desc: "દવાનું નામ ગૂગલ કરવાથી ક્લિનિકલ ટ્રાયલ અને ફોરમ મળે — સ્પષ્ટ જવાબ નહીં." },
      { icon: RiTimeLine,   title: "કોઈ ચોક્કસ ફોર્મેટ નહીં", desc: "AI ચૅટ ટૂલ્સ દર વખતે અલગ જવાબ આપે છે." },
    ],

    solutionLabel: "અમારો ઉકેલ",
    solutionTitle: "કેન્દ્રિત. માળખાગત. તાત્કાળ.",
    solutionSub: "Aura Health ફક્ત દવાઓ માટે બનાવ્યું છે. એક ઇનપુટ, એક સ્પષ્ટ જવાબ.",
    features: [
      { icon: RiCapsuleLine,    title: "સરળ ભાષામાં માહિતી",    desc: "કોઈ મેડિકલ શબ્દ નહીં. દવા શું કરે — સ્પષ્ટ ભાષામાં." },
      { icon: RiParentLine,     title: "ઉંમર પ્રમાણે ડોઝ",     desc: "બાળકો, મોટા કે વૃદ્ધ — એક ટૅપમાં સાચી માત્રા." },
      { icon: RiVolumeUpLine,   title: "એક ક્લિકમાં ઓડિઓ",     desc: "સાંભળો દબાઓ અને માહિતી સાંભળો." },
      { icon: RiShieldCheckLine,title: "મહત્વની ચેતવણીઓ",      desc: "જરૂરી સલામતી માહિતી સૌ પ્રથમ." },
      { icon: RiFlashlightLine, title: "તાત્કાળ પરિણામ",        desc: "નામ ટાઇપ કરો, જવાબ મળો — કોઈ લાંબી વાતચીત નહીં." },
      { icon: RiStethoscopeLine,title: "લક્ષણ તપાસ",            desc: "લક્ષણ જણાવો અને OTC દવા સૂચન મેળવો." },
    ],

    whyLabel: "ChatGPT કેમ નહીં?",
    whyTitle: "ખાસ દવાઓ માટે બનાવ્યું",
    whySub: "AI ટૂલ્સ શક્તિશાળી છે — પણ Aura Health આ એક કામ માટે બનાવ્યું છે.",
    comparisons: [
      { label: "કેન્દ્રિત અનુભવ",    aura: "ફક્ત દવાઓ માટે — કોઈ વિક્ષેપ નહીં",      gpt: "સામાન્ય ઉપકરણ, ખાસ prompt જોઈએ" },
      { label: "સ્થિર ફોર્મેટ",       aura: "દર વખતે એક જ માળખાગત જવાબ",             gpt: "સવાલ કઈ રીતે પૂછ્યો તેના પર આધાર" },
      { label: "સરળ ઉપયોગ",           aura: "નામ ટાઇપ → જવાબ, prompt ની જરૂર નહીં", gpt: "સ્વાસ્થ્ય પ્રશ્નો કેવી રીતે પૂછવા તે જાણવું પડે" },
      { label: "સુલભતા",              aura: "બિલ્ટ-ઇન ઓડિઓ",                          gpt: "ઓડિઓ સુવિધા નથી" },
    ],

    howLabel: "કઈ રીતે",
    howTitle: "ત્રણ પગલા. કોઈ મૂઝવણ નહીં.",
    howSub: "Aura Health વાપરવા માટે કોઈ સૂચના જોઈતી નથી.",
    steps: [
      { icon: RiSearchLine,   title: "દવાનું નામ ટાઇપ કરો",   desc: "કોઈ પણ દવાનું નામ — બ્રાન્ડ નામ પણ ચાલે." },
      { icon: RiBookOpenLine, title: "સ્પષ્ટ સારાંશ વાંચો",    desc: "શું કરે, ઉંમર પ્રમાણે ડોઝ, અને ચેતવણીઓ." },
      { icon: RiVolumeUpLine, title: "સાંભળવું હોય તો સાંભળો", desc: "સાંભળો દબાવો — ઓડિઓ સ્પષ્ટીકરણ." },
    ],

    ctaTitle: "સ્પષ્ટતા દરેકનો હક છે.",
    ctaSub: "દરેકને જાણવાનો હક છે કે તેઓ કઈ દવા લઈ રહ્યા છે. મફત અને તાત્કાળ.",
    ctaBtn: "દવા શોધો",

    scopeLabel: "હૅકેથૉન MVP",
    scopeTitle: "શું છે — અને આગળ શું",
    scopeSub: "આ એક કેન્દ્રિત પ્રોટોટાઇપ છે.",
    inScope:   ["દવા નામ શોધ", "દવાઓનો ડેટાબેઝ", "ઉંમર પ્રમાણે ડોઝ", "ચેતવણીઓ", "ઓડિઓ (TTS)", "લક્ષણ તપાસ", "બહુભાષી UI"],
    outScope:  ["OCR / ઇમેજ સ્કૅન", "ફાર્મસી સૂચન", "ગ્લોબલ ડેટાબેઝ", "લૉગિન/એકાઉન્ટ", "પ્રિસ્ક્રિપ્શન વિશ્લેષણ"],
  },
};

// ─── FadeIn helper ────────────────────────────────────────────────────────────
function FadeIn({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Section header ───────────────────────────────────────────────────────────
function SectionHead({ label, title, sub, id }) {
  return (
    <div className="text-center mb-12">
      <p className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: "#0d9e66" }}>
        {label}
      </p>
      <h2 id={id} className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
        {title}
      </h2>
      {sub && (
        <p className="text-slate-500 text-lg max-w-md mx-auto leading-relaxed font-light">{sub}</p>
      )}
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function About({ lang = "en" }) {
  const t = content[lang] || content.en;

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
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 pt-28 pb-24 space-y-28">

        {/* ── HERO ── */}
        <FadeIn className="text-center">
          <p className="text-sm font-bold tracking-widest uppercase mb-5" style={{ color: "#0d9e66" }}>
            {t.pageLabel}
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            {t.headline}
          </h1>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-7"
            style={{ color: GREEN_DIM }}>
            {t.headlineSub}
          </h1>
          <p className="text-slate-500 text-xl sm:text-2xl leading-relaxed max-w-xl mx-auto font-light mb-10">
            {t.intro}
          </p>

          {/* Trust badges */}
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {t.trust.map((pt) => (
              <li key={pt} className="flex items-center gap-2 text-base text-slate-500 font-medium">
                <RiCheckLine size={15} style={{ color: GREEN, flexShrink: 0 }} />
                {pt}
              </li>
            ))}
          </ul>
        </FadeIn>

        {/* ── PROBLEM ── */}
        <section aria-labelledby="prob-h">
          <FadeIn>
            <SectionHead id="prob-h" label={t.problemLabel} title={t.problemTitle} sub={t.problemSub} />
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {t.problems.map(({ icon: Icon, title, desc }, i) => (
              <FadeIn key={title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className={`${glass} rounded-3xl p-7 h-full`}
                  style={{ boxShadow: "0 4px 24px rgba(30,227,148,0.10)" }}
                >
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: GREEN_BG, border: `1px solid ${GREEN_BORDER}` }}>
                    <Icon size={20} style={{ color: "#0d9e66" }} />
                  </div>
                  <h3 className="text-base font-bold text-slate-800 mb-2 leading-snug">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-light">{desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ── SOLUTION / FEATURES ── */}
        <section aria-labelledby="feat-h">
          <FadeIn>
            <SectionHead id="feat-h" label={t.solutionLabel} title={t.solutionTitle} sub={t.solutionSub} />
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.features.map(({ icon: Icon, title, desc }, i) => (
              <FadeIn key={title} delay={i * 0.07}>
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className={`${glass} rounded-3xl p-7 h-full`}
                  style={{ boxShadow: "0 4px 24px rgba(30,227,148,0.10)" }}
                >
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: GREEN_BG, border: `1px solid ${GREEN_BORDER}` }}>
                    <Icon size={20} style={{ color: "#0d9e66" }} />
                  </div>
                  <h3 className="text-base font-bold text-slate-800 mb-2 leading-snug">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-light">{desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section aria-labelledby="how-h">
          <FadeIn>
            <SectionHead id="how-h" label={t.howLabel} title={t.howTitle} sub={t.howSub} />
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8">
            {t.steps.map(({ icon: Icon, title, desc }, i) => (
              <FadeIn key={title} delay={i * 0.1} className="flex flex-col items-center text-center">
                <div className="relative mb-7">
                  <div
                    className={`${glass} w-20 h-20 rounded-2xl flex items-center justify-center`}
                    style={{ boxShadow: "0 4px 20px rgba(30,227,148,0.18)" }}
                  >
                    <Icon size={28} style={{ color: "#0d9e66" }} />
                  </div>
                  <span
                    className="absolute -top-2 -right-2 w-7 h-7 rounded-full text-white text-sm font-black flex items-center justify-center shadow-md"
                    style={{ backgroundColor: GREEN }}
                  >
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-800 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light">{desc}</p>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ── WHY NOT CHATGPT ── */}
        <section aria-labelledby="why-h">
          <FadeIn>
            <SectionHead id="why-h" label={t.whyLabel} title={t.whyTitle} sub={t.whySub} />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div
              className={`${glass} rounded-3xl overflow-hidden`}
              style={{ boxShadow: "0 6px 32px rgba(30,227,148,0.12)" }}
            >
              {/* Table header */}
              <div className="grid grid-cols-3 text-sm font-bold uppercase tracking-widest border-b border-white/60"
                style={{ borderBottomColor: "rgba(30,227,148,0.20)" }}>
                <div className="px-6 py-4 text-slate-400">Feature</div>
                <div className="px-6 py-4 flex items-center gap-2" style={{ color: "#0d9e66", backgroundColor: GREEN_BG }}>
                  <RiHeartPulseLine size={14} />
                  Aura Health
                </div>
                <div className="px-6 py-4 text-slate-400">ChatGPT / Google</div>
              </div>

              {/* Rows */}
              {t.comparisons.map(({ label, aura, gpt }, i) => (
                <div
                  key={label}
                  className={`grid grid-cols-3 text-sm border-b last:border-0 transition-colors`}
                  style={{ borderBottomColor: "rgba(30,227,148,0.12)" }}
                >
                  <div className="px-6 py-5 font-semibold text-slate-600">{label}</div>
                  <div className="px-6 py-5 font-medium flex items-start gap-2"
                    style={{ color: "#0a6b45", backgroundColor: "rgba(30,227,148,0.06)" }}>
                    <RiCheckLine size={15} style={{ color: GREEN, flexShrink: 0, marginTop: 2 }} />
                    {aura}
                  </div>
                  <div className="px-6 py-5 text-slate-400 font-light">{gpt}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* ── HACKATHON SCOPE ── */}
        <section aria-labelledby="scope-h">
          <FadeIn>
            <SectionHead id="scope-h" label={t.scopeLabel} title={t.scopeTitle} sub={t.scopeSub} />
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              {/* In scope */}
              <div
                className={`${glass} rounded-3xl p-7`}
                style={{ boxShadow: "0 4px 24px rgba(30,227,148,0.10)" }}
              >
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: GREEN_BG, border: `1px solid ${GREEN_BORDER}` }}>
                    <RiCheckLine size={14} style={{ color: "#0d9e66" }} />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-widest" style={{ color: "#0d9e66" }}>
                    Included in MVP
                  </p>
                </div>
                <ul className="space-y-3">
                  {t.inScope.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                      <RiCheckLine size={14} style={{ color: GREEN, flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Out of scope */}
              <div className="bg-slate-50/80 backdrop-blur-xl border border-slate-100 shadow-sm rounded-3xl p-7">
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center bg-slate-100 border border-slate-200">
                    <RiSparklingLine size={14} className="text-slate-400" />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-widest text-slate-400">
                    Future Roadmap
                  </p>
                </div>
                <ul className="space-y-3">
                  {t.outScope.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-400 text-sm">
                      <span className="w-3.5 h-3.5 rounded-full border-2 border-slate-200 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* ── CTA ── */}
        <FadeIn>
          <div
            className={`${glass} rounded-3xl px-8 py-16 text-center`}
            style={{ boxShadow: "0 8px 48px rgba(30,227,148,0.15)" }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: GREEN_BG, border: `1px solid ${GREEN_BORDER}` }}
            >
              <RiShieldCheckLine size={26} style={{ color: "#0d9e66" }} />
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              {t.ctaTitle}
            </h2>
            <p className="text-slate-500 text-lg sm:text-xl leading-relaxed max-w-md mx-auto mb-10 font-light">
              {t.ctaSub}
            </p>
            <motion.a
              href="/"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2.5 font-bold text-lg px-10 py-5 rounded-2xl shadow-lg transition-colors duration-200 focus:outline-none"
              style={{ backgroundColor: GREEN, color: "#054d34" }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = GREEN_DIM; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = GREEN; }}
            >
              <RiSearchLine size={18} />
              {t.ctaBtn}
            </motion.a>
          </div>
        </FadeIn>

      </main>
    </div>
  );
}
