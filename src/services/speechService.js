// services/speechService.js

// Map language code to BCP-47 locale for TTS
const LANG_LOCALE = {
  en: "en-IN",
  hi: "hi-IN",
  gu: "gu-IN",
};

export function speakText(text, lang = "en", options = {}) {
  const { rate = 0.88, onEnd } = options;

  if (!window.speechSynthesis) {
    console.warn("SpeechSynthesis not supported.");
    return { cancel: () => {} };
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang   = LANG_LOCALE[lang] || "en-IN";
  utterance.rate   = rate;
  utterance.pitch  = 1;
  utterance.volume = 1;

  if (typeof onEnd === "function") {
    utterance.onend  = onEnd;
    utterance.onerror = onEnd;
  }

  window.speechSynthesis.speak(utterance);
  return { cancel: () => window.speechSynthesis.cancel() };
}

export function buildMedicineScript(medicine, ageGroup = "adults", lang = "en") {
  const L = medicine[lang];
  if (!L) return "";
  return [
    `${medicine.name}.`,
    L.description,
    `For ${ageGroup}: ${L.dosage[ageGroup]}`,
    `Warnings: ${L.warnings.join(". ")}.`,
  ].join(" ");
}
