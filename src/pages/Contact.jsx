// pages/Contact.jsx

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  RiMailLine, RiMapPinLine, RiGithubLine, RiTwitterXLine,
  RiLinkedinLine, RiHeartPulseLine, RiPhoneLine,
} from "react-icons/ri";

// ─── Theme ────────────────────────────────────────────────────────────────────
const GREEN        = "#1ee394";
const GREEN_BG     = "rgba(30,227,148,0.12)";
const GREEN_BORDER = "rgba(30,227,148,0.35)";
const glass        = "bg-white/65 backdrop-blur-xl border border-white/80 shadow-sm";

// ─── Translations ─────────────────────────────────────────────────────────────
const T = {
  en: {
    label: "Get in Touch",
    title: "Contact Us",
    sub: "Have a question, found an error in our medicine info, or want to collaborate? Reach out — we'd love to hear from you.",
    responseNote: "We typically respond within 24–48 hours. For urgent medicine concerns, please contact a licensed healthcare professional.",
    followUs: "Follow us",
    emailLabel: "Email",
    whatsappLabel: "WhatsApp",
    basedInLabel: "Based in",
  },
  hi: {
    label: "संपर्क करें",
    title: "हमसे मिलें",
    sub: "कोई सवाल है, दवा की जानकारी में गड़बड़ी मिली, या सहयोग करना चाहते हैं? हम सुनना चाहते हैं।",
    responseNote: "हम आमतौर पर 24–48 घंटों में जवाब देते हैं। दवा संबंधी आपातकाल में किसी लाइसेंसशुदा स्वास्थ्य पेशेवर से संपर्क करें।",
    followUs: "हमें फॉलो करें",
    emailLabel: "ईमेल",
    whatsappLabel: "व्हाट्सऐप",
    basedInLabel: "स्थान",
  },
  gu: {
    label: "સંપર્ક કરો",
    title: "અમને મળો",
    sub: "કોઈ સવાલ છે, દવાની માહિતીમાં ભૂલ મળી, કે સહયોગ કરવો છે? અમે સાંભળવા તૈયાર છીએ.",
    responseNote: "અમે સામાન્ય રીતે 24–48 કલાકમાં જવાબ આપીએ છીએ. દવા સંબંધી ઇમર્જન્સી માટે ડૉક્ટરનો સંપર્ક કરો.",
    followUs: "અમને ફૉલો કરો",
    emailLabel: "ઈમેઇલ",
    whatsappLabel: "વૉટ્સઍપ",
    basedInLabel: "સ્થળ",
  },
};

// ─── Static contact data (labels injected at render time) ─────────────────────
const CONTACT_INFO = [
  { key: "email",    icon: RiMailLine,   value: "workwiths4hil@gmail.com",     href: "mailto:workwiths4hil@gmail.com", color: "#0d9e66", bg: GREEN_BG },
  { key: "whatsapp", icon: RiPhoneLine,  value: "+91 92199 17186",           href: "https://wa.me/919219917186",   color: "#059669", bg: "rgba(5,150,105,0.10)" },
  { key: "basedIn",  icon: RiMapPinLine, value: "Vadodara, Gujarat, India", href: null,                           color: "#7c3aed", bg: "rgba(124,58,237,0.10)" },
];

const SOCIALS = [
  { platform: "GitHub",   href: "https://github.com/makeitwithsahil/Aura-Health",   icon: RiGithubLine  }
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function FadeIn({ children, delay = 0, className = "" }) {
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

// ─── Component ────────────────────────────────────────────────────────────────
export default function Contact({ lang = "en" }) {
  const t = T[lang] || T.en;

  // Map each contact entry's key to the translated label
  const labelMap = {
    email:    t.emailLabel,
    whatsapp: t.whatsappLabel,
    basedIn:  t.basedInLabel,
  };

  return (
    <div className="min-h-screen flex flex-col text-slate-800">
      <main className="flex-1 pt-16 pb-20 px-4 sm:px-6">
        <div className="max-w-lg mx-auto">

          {/* Header */}
          <FadeIn className="text-center mb-12">
            <p className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: "#0d9e66" }}>
              {t.label}
            </p>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-5 text-slate-900">
              {t.title}
            </h1>
            <p className="text-slate-500 text-xl leading-relaxed font-light">
              {t.sub}
            </p>
          </FadeIn>

          {/* Contact card */}
          <FadeIn delay={0.05}>
            <div
              className={`${glass} rounded-2xl p-7 flex flex-col gap-6`}
              style={{ boxShadow: "0 4px 32px rgba(30,227,148,0.12)" }}
            >
            
              {/* Contact rows */}
              <div className="flex flex-col gap-4">
                {CONTACT_INFO.map(({ key, icon: Icon, value, href, color, bg }) => (
                  <div key={key} className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: bg }}
                    >
                      <Icon size={20} style={{ color }} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-0.5">
                        {labelMap[key]}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="text-base font-semibold hover:opacity-70 transition-opacity"
                          style={{ color }}
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-base font-semibold text-slate-600">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-slate-100" />
            </div>
          </FadeIn>

          {/* Response note */}
          <FadeIn delay={0.1}>
            <div
              className="mt-4 rounded-2xl px-5 py-4"
              style={{ backgroundColor: GREEN_BG, border: `1px solid ${GREEN_BORDER}` }}
            >
              <p className="text-base font-medium leading-relaxed" style={{ color: "#0d6e49" }}>
                💬 {t.responseNote}
              </p>
            </div>
          </FadeIn>

        </div>
      </main>
    </div>
  );
}