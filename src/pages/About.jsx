// pages/About.jsx — light glassmorphism, language-aware navbar, features + how it works + CTA

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  RiCapsuleLine, RiVolumeUpLine, RiUser3Line,
  RiSearchLine, RiBookOpenLine, RiShieldCheckLine,
  RiArrowLeftLine, RiCheckLine, RiHeartPulseLine, RiTranslate2,
} from "react-icons/ri";

const LANGUAGES = [
  { code: "en", short: "EN",  label: "English"  },
  { code: "hi", short: "हिं", label: "हिंदी"    },
  { code: "gu", short: "ગુ",  label: "ગુજરાતી"  },
];

const glass = "bg-white/65 backdrop-blur-xl border border-white/80 shadow-sm shadow-blue-100/50";

const content = {
  en: {
    pageLabel: "About ExplainMyMed", backLink: "Back to search",
    headline: "Medicine explained simply — for everyone",
    intro: "Most medicine leaflets are hard to understand. ExplainMyMed gives you a plain summary in seconds — with audio support built in.",
    trust: ["No account needed", "No ads", "Audio built in", "Completely free"],
    whyLabel: "Why ExplainMyMed", whyTitle: "Built for clarity and everyone",
    whySub: "A consistent, structured answer every time — no complicated prompts needed.",
    howLabel: "Simple by design", howTitle: "Three steps, zero confusion",
    howSub: "You should never need instructions to use ExplainMyMed.",
    ctaTitle: "Clarity is a right, not a privilege",
    ctaSub: "Everyone deserves to understand what they're putting in their body. Free and instant.",
    ctaBtn: "Search a Medicine",
    footer: "For general information only. Always speak to a doctor before taking any medicine.",
    features: [
      { title: "Plain English Explanations", desc: "No medical jargon. Simple words anyone can understand." },
      { title: "Age-Wise Dosage",            desc: "See the right amount for children, adults, or elderly — in one tap." },
      { title: "One-Click Audio",            desc: "Tap Listen and hear a clear spoken explanation." },
    ],
    steps: [
      { title: "Type the medicine name",  desc: "Enter any medicine name. Brand names work too." },
      { title: "Read the simple summary", desc: "See what it does, dosage by age, and warnings." },
      { title: "Listen if you prefer",    desc: "Tap Listen for a spoken explanation." },
    ],
  },
  hi: {
    pageLabel: "ExplainMyMed के बारे में", backLink: "वापस जाएं",
    headline: "दवाई आसान भाषा में — सबके लिए",
    intro: "ज्यादातर दवाइयों की पर्चियाँ समझना मुश्किल होता है। ExplainMyMed कुछ सेकंड में आसान जानकारी देता है — ऑडियो के साथ।",
    trust: ["कोई अकाउंट नहीं", "कोई विज्ञापन नहीं", "ऑडियो सुविधा है", "बिल्कुल मुफ्त"],
    whyLabel: "क्यों ExplainMyMed", whyTitle: "सभी के लिए — आसान और तेज़",
    whySub: "हर बार एक जैसा, सीधा जवाब — कोई मुश्किल सवाल नहीं।",
    howLabel: "सरल तरीका", howTitle: "तीन कदम, कोई उलझन नहीं",
    howSub: "ExplainMyMed इस्तेमाल करने के लिए कोई निर्देश नहीं चाहिए।",
    ctaTitle: "समझना हर इंसान का हक है",
    ctaSub: "हर किसी को यह जानने का हक है कि वे कौन सी दवा ले रहे हैं। मुफ्त और तुरंत।",
    ctaBtn: "दवा खोजें",
    footer: "यह केवल सामान्य जानकारी है। कोई भी दवा लेने से पहले डॉक्टर से मिलें।",
    features: [
      { title: "आसान भाषा में जानकारी", desc: "कोई मेडिकल शब्द नहीं। सरल भाषा में — सबके लिए।" },
      { title: "उम्र के हिसाब से दवा",   desc: "बच्चे, बड़े या बुजुर्ग — एक टैप में सही मात्रा।" },
      { title: "एक क्लिक में ऑडियो",     desc: "सुनें दबाएं और दवा की जानकारी सुनें।" },
    ],
    steps: [
      { title: "दवा का नाम लिखें",   desc: "कोई भी दवा का नाम लिखें — ब्रांड नाम भी चलेगा।" },
      { title: "आसान जानकारी पढ़ें", desc: "क्या करती है, मात्रा और सावधानियां।" },
      { title: "सुनना हो तो सुनें",   desc: "सुनें बटन दबाकर जानकारी सुन सकते हैं।" },
    ],
  },
  gu: {
    pageLabel: "ExplainMyMed વિષે", backLink: "પાછળ",
    headline: "દवा सरळ भाषामां — बधा माटे",
    intro: "मोटा भागनी दवाओनी पर्ची समजवी अघरी होय छे. ExplainMyMed चंद सेकन्डमां सरळ माहिती आपे — ऑडिओ साथे.",
    trust: ["खातुं जोईतुं नथी", "जाहेरात नथी", "ऑडिओ छे", "बिल्कुल मफत"],
    whyLabel: "क्यों ExplainMyMed", whyTitle: "स्पष्टता अने बधा माटे",
    whySub: "दर वखते एक जेवो, सीधो जवाब — कोई अघरो सवाल नहीं.",
    howLabel: "सरल रीत", howTitle: "त्रण पगला, कोई मुझवण नहीं",
    howSub: "ExplainMyMed वापरवा माटे कोई सुचना जोईती नथी.",
    ctaTitle: "समजवुं दरेकनो हक छे",
    ctaSub: "दरेकने जाणवानो हक छे के तेओ कई दवा ले छे. मफत अने तातकाळ.",
    ctaBtn: "दवा शोधो",
    footer: "फक्त सामान्य माहिती. कोई दवा लेता पेहला डॉक्टरने मळो.",
    features: [
      { title: "सरळ भाषामां माहिती", desc: "कोई मेडिकल शब्द नहीं. बधा माटे सरळ भाषा." },
      { title: "उम्र प्रमाणे दवा",   desc: "बाळको, मोटा के वृद्ध — एक टैपमां साची मात्रा." },
      { title: "एक क्लिकमां ऑडिओ",   desc: "साभळो दबाओ अने माहिती साभळो." },
    ],
    steps: [
      { title: "दवानुं नाम लखो",      desc: "कोई पण दवानुं नाम लखो — ब्रांड नाम पण चाले." },
      { title: "सरळ माहिती वांचो",    desc: "शुं करे, मात्रा अने सावचेती." },
      { title: "साभळवुं होय तो साभळो", desc: "साभळो दबावी माहिती साभळी शकाय." },
    ],
  },
};

const FICONS  = [RiCapsuleLine, RiUser3Line, RiVolumeUpLine];
const FCOLORS = [
  { icon: "text-blue-500",   bg: "bg-blue-50"   },
  { icon: "text-indigo-500", bg: "bg-indigo-50" },
  { icon: "text-sky-500",    bg: "bg-sky-50"    },
];
const SICONS = [RiSearchLine, RiBookOpenLine, RiVolumeUpLine];

function FadeIn({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >{children}</motion.div>
  );
}

export default function About() {
  const [lang, setLang] = useState("en");
  const t = content[lang];

  return (
    <div className="min-h-screen flex flex-col text-slate-800"
      style={{
        background:
          "radial-gradient(ellipse 80% 55% at 5% -5%,  #bfdbfe 0%, transparent 58%)," +
          "radial-gradient(ellipse 55% 45% at 95% 5%,  #c7d2fe 0%, transparent 55%)," +
          "radial-gradient(ellipse 65% 50% at 50% 105%,#e0f2fe 0%, transparent 60%)," +
          "#eff6ff",
      }}
    >
      {/* Navbar */}
      <header role="banner" className="sticky top-0 z-40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-4 pb-0">
          <motion.nav initial={{ opacity: 0, y: -18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}
            className={`${glass} rounded-2xl px-4 sm:px-5 py-3 flex items-center justify-between gap-3`}
          >
            <a href="/" aria-label="ExplainMyMed home" className="flex items-center gap-2 group flex-shrink-0">
              <span className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center shadow shadow-blue-300/70 group-hover:bg-blue-500 transition-colors">
                <RiHeartPulseLine size={16} className="text-white" />
              </span>
              <span className="font-bold text-[15px] tracking-tight hidden sm:block">ExplainMyMed</span>
            </a>

            <div role="group" aria-label="Choose language" className="flex items-center gap-1 bg-slate-100/80 rounded-xl p-1">
              <RiTranslate2 size={14} className="text-slate-400 ml-1 flex-shrink-0" />
              {LANGUAGES.map(({ code, short, label }) => (
                <button key={code} onClick={() => setLang(code)} aria-pressed={lang === code} aria-label={`Switch to ${label}`}
                  className={`px-3 py-1.5 rounded-lg text-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                    lang === code ? "bg-blue-600 text-white shadow shadow-blue-200" : "text-slate-500 hover:text-slate-800 hover:bg-white/80"
                  }`}
                >{short}</button>
              ))}
            </div>

            <a href="/" className="flex items-center gap-1.5 text-slate-400 hover:text-slate-700 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg px-2 py-1 flex-shrink-0">
              <RiArrowLeftLine size={14} /> <span className="hidden sm:inline">{t.backLink}</span>
            </a>
          </motion.nav>
        </div>
      </header>

      <main className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-6 py-16 sm:py-24">

        {/* Heading */}
        <FadeIn className="text-center mb-20">
          <p className="text-xs text-blue-500 font-bold tracking-widest uppercase mb-4">{t.pageLabel}</p>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">{t.headline}</h1>
          <p className="text-slate-500 text-lg sm:text-xl leading-relaxed max-w-xl mx-auto font-light">{t.intro}</p>
        </FadeIn>

        {/* Trust */}
        <FadeIn className="mb-20" delay={0.05}>
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {t.trust.map((pt) => (
              <li key={pt} className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                <RiCheckLine size={14} className="text-blue-500 flex-shrink-0" />{pt}
              </li>
            ))}
          </ul>
        </FadeIn>

        {/* Features */}
        <section aria-labelledby="feat-h" className="mb-24">
          <FadeIn className="text-center mb-12">
            <p className="text-xs text-blue-500 font-bold tracking-widest uppercase mb-3">{t.whyLabel}</p>
            <h2 id="feat-h" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">{t.whyTitle}</h2>
            <p className="text-slate-400 text-base max-w-md mx-auto leading-relaxed font-light">{t.whySub}</p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {t.features.map(({ title, desc }, i) => {
              const Icon = FICONS[i]; const { icon, bg } = FCOLORS[i];
              return (
                <FadeIn key={title} delay={i * 0.08}>
                  <motion.div whileHover={{ y: -5, transition: { duration: 0.2 } }} className={`${glass} rounded-3xl p-7 h-full`}>
                    <div className={`w-11 h-11 rounded-2xl ${bg} flex items-center justify-center mb-5`}>
                      <Icon size={20} className={icon} />
                    </div>
                    <h3 className="text-base font-bold text-slate-800 mb-2 leading-snug">{title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-light">{desc}</p>
                  </motion.div>
                </FadeIn>
              );
            })}
          </div>
        </section>

        {/* How It Works */}
        <section aria-labelledby="how-h" className="mb-24">
          <FadeIn className="text-center mb-14">
            <p className="text-xs text-indigo-500 font-bold tracking-widest uppercase mb-3">{t.howLabel}</p>
            <h2 id="how-h" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">{t.howTitle}</h2>
            <p className="text-slate-400 text-base max-w-sm mx-auto leading-relaxed font-light">{t.howSub}</p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6">
            {t.steps.map(({ title, desc }, i) => {
              const Icon = SICONS[i];
              return (
                <FadeIn key={title} delay={i * 0.1} className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className={`${glass} w-16 h-16 rounded-2xl flex items-center justify-center`}>
                      <Icon size={22} className="text-blue-500" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-black flex items-center justify-center shadow shadow-blue-200">{i + 1}</span>
                  </div>
                  <h3 className="text-[15px] font-bold text-slate-800 mb-2">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-light">{desc}</p>
                </FadeIn>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <FadeIn>
          <div className={`${glass} rounded-3xl px-8 py-14 sm:py-16 text-center`}>
            <RiShieldCheckLine size={32} className="text-blue-500 mx-auto mb-5" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">{t.ctaTitle}</h2>
            <p className="text-slate-500 text-base leading-relaxed max-w-md mx-auto mb-8 font-light">{t.ctaSub}</p>
            <motion.a href="/" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-base px-8 py-4 rounded-2xl shadow shadow-blue-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
              <RiSearchLine size={17} />{t.ctaBtn}
            </motion.a>
          </div>
        </FadeIn>
      </main>

      <footer role="contentinfo" className="pb-10 px-4 sm:px-6">
        <p className="text-center text-sm text-slate-400 leading-relaxed max-w-sm mx-auto">{t.footer}</p>
      </footer>
    </div>
  );
}
