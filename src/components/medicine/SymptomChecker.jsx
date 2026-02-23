import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RiStethoscopeLine,
  RiAlertLine,
  RiShieldCheckLine,
  RiCapsuleLine,
  RiSearchEyeLine,
  RiCloseLine,
  RiAddLine,
  RiInformationLine,
  RiParentLine,
  RiUserLine,
  RiUser3Line,
  RiCheckboxCircleLine,
  RiErrorWarningLine,
} from "react-icons/ri";

import { medicines } from "../../data/medicines";

// ─── i18n UI strings ──────────────────────────────────────────────────────────
const UI = {
  en: {
    badge:              "OTC Guidance Tool",
    heading:            "Symptom-Based Guidance",
    subheading:         "Enter your symptoms and any medicines you already have at home. We will suggest which common over-the-counter medicines may help and how to use them safely.",
    disclaimer:         "This tool provides general educational information only and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a licensed healthcare professional before taking any medicine.",
    symptomsLabel:      "Your symptoms",
    symptomsHint:       "(press Enter or comma after each)",
    symptomsPlaceholder:"e.g. fever, headache, body ache...",
    medsLabel:          "Medicines you already have",
    medsHint:           "(optional)",
    medsPlaceholder:    "e.g. Paracetamol, Ibuprofen...",
    analyseBtn:         "Analyse Symptoms",
    clearBtn:           "Clear",
    quickAdd:           ["Fever", "Headache", "Body ache", "Cold", "Cough", "Acidity", "Muscle pain"],
    fromCabinet:        "From your medicine cabinet",
    otcOptions:         "Other common OTC options",
    otcAvailable:       "Commonly available OTC medicines",
    youHaveThis:        "You have this",
    whyHelps:           "Why it may help your symptoms",
    typicalFreq:        "Typical frequency",
    dosageGuidance:     "Dosage guidance",
    importantWarnings:  "Important warnings",
    noMatchTitle:       "No OTC match found in our database.",
    noMatchBody:        "The symptoms you entered did not match any medicines in our current dataset. Please consult a licensed healthcare professional for personalised guidance.",
    footerDisclaimer:   "Consult a licensed healthcare professional before taking any medicine. The guidance above is general educational information about common OTC medicines and is not a diagnosis or prescription. Individual health conditions, allergies, and other medications may affect suitability.",
    ageChildren:        "Children",
    ageAdults:          "Adults",
    ageElderly:         "Elderly",
    removeTag:          (tag) => `Remove ${tag}`,
  },
  hi: {
    badge:              "OTC गाइडेंस टूल",
    heading:            "लक्षण-आधारित मार्गदर्शन",
    subheading:         "अपने लक्षण और घर में उपलब्ध दवाएं दर्ज करें। हम बताएंगे कि कौन सी सामान्य दवा मदद कर सकती है और इसे कैसे लें।",
    disclaimer:         "यह टूल केवल सामान्य शैक्षिक जानकारी देता है और यह पेशेवर चिकित्सा सलाह, निदान या उपचार का विकल्प नहीं है। कोई भी दवा लेने से पहले किसी लाइसेंस प्राप्त स्वास्थ्य विशेषज्ञ से जरूर मिलें।",
    symptomsLabel:      "आपके लक्षण",
    symptomsHint:       "(हर लक्षण के बाद Enter या कॉमा दबाएं)",
    symptomsPlaceholder:"जैसे: बुखार, सिरदर्द, बदन दर्द...",
    medsLabel:          "आपके पास पहले से मौजूद दवाएं",
    medsHint:           "(वैकल्पिक)",
    medsPlaceholder:    "जैसे: पैरासिटामोल, इबुप्रोफेन...",
    analyseBtn:         "लक्षण जांचें",
    clearBtn:           "साफ करें",
    quickAdd:           ["बुखार", "सिरदर्द", "बदन दर्द", "सर्दी", "खांसी", "एसिडिटी", "मांसपेशी दर्द"],
    fromCabinet:        "आपकी दवाओं में से",
    otcOptions:         "अन्य सामान्य OTC विकल्प",
    otcAvailable:       "उपलब्ध सामान्य OTC दवाएं",
    youHaveThis:        "आपके पास है",
    whyHelps:           "यह आपके लक्षणों में कैसे मदद करती है",
    typicalFreq:        "सामान्य खुराक आवृत्ति",
    dosageGuidance:     "खुराक मार्गदर्शन",
    importantWarnings:  "जरूरी सावधानियां",
    noMatchTitle:       "हमारे डेटाबेस में कोई OTC मिलान नहीं मिला।",
    noMatchBody:        "आपके दर्ज लक्षण हमारी मौजूदा दवाओं से मेल नहीं खाते। कृपया व्यक्तिगत मार्गदर्शन के लिए किसी लाइसेंस प्राप्त स्वास्थ्य विशेषज्ञ से मिलें।",
    footerDisclaimer:   "कोई भी दवा लेने से पहले किसी लाइसेंस प्राप्त स्वास्थ्य विशेषज्ञ से परामर्श लें। ऊपर दी गई जानकारी केवल सामान्य शैक्षिक जानकारी है — यह कोई निदान या नुस्खा नहीं है। व्यक्तिगत स्वास्थ्य स्थितियां, एलर्जी और अन्य दवाएं उपयुक्तता को प्रभावित कर सकती हैं।",
    ageChildren:        "बच्चे",
    ageAdults:          "बड़े",
    ageElderly:         "बुजुर्ग",
    removeTag:          (tag) => `${tag} हटाएं`,
  },
  gu: {
    badge:              "OTC માર્ગદર્શન સાધન",
    heading:            "લક્ષણ-આધારિત માર્ગદર્શન",
    subheading:         "તમારા લક્ષણો અને ઘરમાં ઉપલબ્ધ દવાઓ દાખલ કરો. અમે જણાવીશું કે કઈ સામાન્ય OTC દવા મદદ કરી શકે છે અને તેને કેવી રીતે લેવી.",
    disclaimer:         "આ સાધન ફક્ત સામાન્ય શૈક્ષણિક માહિતી આપે છે અને તે વ્યાવસાયિક તબીબી સલાહ, નિદાન અથવા સારવારનો વિકલ્પ નથી. કોઈ પણ દવા લેતા પહેલાં લાઇસન્સ ધારક આરોગ્ય નિષ્ણાતની સલાહ અવશ્ય લો.",
    symptomsLabel:      "તમારા લક્ષણો",
    symptomsHint:       "(દરેક લક્ષણ પછી Enter અથવા કૉમા દબાવો)",
    symptomsPlaceholder:"દા.ત. તાવ, માથાનો દુખાવો, શરીરનો દુખાવો...",
    medsLabel:          "તમારી પાસે પહેલેથી ઉપલબ્ધ દવાઓ",
    medsHint:           "(વૈકલ્પિક)",
    medsPlaceholder:    "દા.ત. પેરાસિટામોલ, આઇબ્યુપ્રોફેન...",
    analyseBtn:         "લક્ષણ તપાસો",
    clearBtn:           "સાફ કરો",
    quickAdd:           ["તાવ", "માથાનો દુખાવો", "શરીરનો દુખાવો", "શરદી", "ઉધરસ", "એસિડિટી", "સ્નાયુ દુખાવો"],
    fromCabinet:        "તમારી દવાઓ પૈકી",
    otcOptions:         "અન્ય સામાન્ય OTC વિકલ્પો",
    otcAvailable:       "ઉપલબ્ધ સામાન્ય OTC દવાઓ",
    youHaveThis:        "તમારી પાસે છે",
    whyHelps:           "આ તમારા લક્ષણોમાં કેવી રીતે મદદ કરે છે",
    typicalFreq:        "સામાન્ય ઉપયોગ આવૃત્તિ",
    dosageGuidance:     "માત્રા માર્ગદર્શન",
    importantWarnings:  "જરૂરી સાવધાનીઓ",
    noMatchTitle:       "અમારા ડેટાબેઝમાં કોઈ OTC મળ્યું નથી.",
    noMatchBody:        "તમે દાખલ કરેલ લક્ષણો અમારી હાલની દવાઓ સાથે મેળ ખાતા નથી. કૃપા કરી વ્યક્તિગત માર્ગદર્શન માટે લાઇસન્સ ધારક આરોગ્ય નિષ્ણાતને મળો.",
    footerDisclaimer:   "કોઈ પણ દવા લેતા પહેલાં લાઇસન્સ ધારક આરોગ્ય નિષ્ણાતની સલાહ લો. ઉપરની માહિતી ફક્ત સામાન્ય શૈક્ષણિક માહિતી છે — આ નિદાન કે નુસ્ખો નથી. વ્યક્તિગત સ્વાસ્થ્ય સ્થિતિ, એલર્જી અને અન્ય દવાઓ યોગ્યતાને અસર કરી શકે છે.",
    ageChildren:        "બાળકો",
    ageAdults:          "મોટા",
    ageElderly:         "વૃદ્ધ",
    removeTag:          (tag) => `${tag} દૂર કરો`,
  },
};

// ─── Frequency labels (i18n) ──────────────────────────────────────────────────
const FREQUENCY_LABEL = {
  en: {
    paracetamol: "Every 6 hours (maximum 4 times per day)",
    ibuprofen:   "Every 6–8 hours (maximum 3 times per day)",
    omeprazole:  "Once daily, 30 minutes before breakfast",
  },
  hi: {
    paracetamol: "हर 6 घंटे में (दिन में अधिकतम 4 बार)",
    ibuprofen:   "हर 6–8 घंटे में (दिन में अधिकतम 3 बार)",
    omeprazole:  "दिन में एक बार, नाश्ते से 30 मिनट पहले",
  },
  gu: {
    paracetamol: "દર 6 કલાકે (દિવસમાં મહત્તમ 4 વખત)",
    ibuprofen:   "દર 6–8 કલાકે (દિવસમાં મહત્તમ 3 વખત)",
    omeprazole:  "દરરોજ એક વખત, નાસ્તાના 30 મિનિટ પહેલાં",
  },
};

// ─── Symptom reason strings (i18n) ───────────────────────────────────────────
const SYMPTOM_REASON = {
  en: {
    paracetamol: {
      fever:         "Reduces body temperature by acting on the brain's heat-regulation centre.",
      headache:      "Blocks pain signals in the brain, relieving headache discomfort.",
      "body ache":   "Reduces generalised pain signals throughout the body.",
      "body pain":   "Reduces generalised pain signals throughout the body.",
      cold:          "Eases associated fever and aches that accompany cold symptoms.",
      flu:           "Relieves fever and body pain linked to influenza.",
      "back pain":   "Acts on the central nervous system to relieve back pain.",
      toothache:     "Provides temporary pain relief while awaiting dental care.",
      "tooth pain":  "Provides temporary pain relief while awaiting dental care.",
      cough:         "Helps with associated fever and throat discomfort during cough illness.",
      default:       "Reduces pain and fever by acting on the brain's pain-signalling pathways.",
    },
    ibuprofen: {
      fever:         "Lowers fever by reducing inflammatory signals in the body.",
      headache:      "Reduces the inflammation and pain signals that cause headaches.",
      "body ache":   "An anti-inflammatory that reduces muscle and tissue discomfort.",
      "body pain":   "An anti-inflammatory that reduces muscle and tissue discomfort.",
      "back pain":   "Reduces inflammation in muscles and tissues causing back pain.",
      toothache:     "Reduces inflammation around the tooth and gum area.",
      "tooth pain":  "Reduces inflammation around the tooth and gum area.",
      "muscle pain": "Directly targets inflammation in strained or overused muscles.",
      "joint pain":  "Reduces swelling and pain in affected joints.",
      swelling:      "Inhibits prostaglandins, the chemicals responsible for swelling.",
      "period pain": "Reduces uterine contractions and inflammatory pain.",
      inflammation:  "Blocks COX enzymes that drive the inflammatory response.",
      default:       "Reduces pain, swelling, and fever through anti-inflammatory action.",
    },
    omeprazole: {
      acidity:         "Reduces stomach acid production, relieving acidity at the source.",
      heartburn:       "Decreases acid that rises into the oesophagus causing burning.",
      "stomach pain":  "Reduces excess acid that irritates the stomach lining.",
      "chest burning": "Stops acid overproduction that causes the burning sensation.",
      "acid reflux":   "Lowers acid levels so less material refluxes into the throat.",
      bloating:        "Helps normalise gastric environment, reducing bloating from excess acid.",
      default:         "Reduces stomach acid production, easing digestive discomfort.",
    },
  },
  hi: {
    paracetamol: {
      fever:         "मस्तिष्क के तापमान नियंत्रण केंद्र पर काम करके बुखार कम करती है।",
      headache:      "मस्तिष्क में दर्द के संकेतों को रोककर सिरदर्द से राहत देती है।",
      "body ache":   "पूरे शरीर में दर्द के संकेतों को कम करती है।",
      "body pain":   "पूरे शरीर में दर्द के संकेतों को कम करती है।",
      cold:          "सर्दी के साथ आने वाले बुखार और दर्द को कम करती है।",
      flu:           "फ्लू से जुड़े बुखार और बदन दर्द से राहत देती है।",
      "back pain":   "केंद्रीय तंत्रिका तंत्र पर काम करके कमर दर्द कम करती है।",
      toothache:     "दंत चिकित्सा तक का इंतजार करते समय अस्थायी दर्द राहत देती है।",
      cough:         "खांसी की बीमारी में बुखार और गले की तकलीफ में मदद करती है।",
      default:       "मस्तिष्क के दर्द-संकेत मार्गों पर काम करके दर्द और बुखार कम करती है।",
    },
    ibuprofen: {
      fever:         "शरीर में सूजन के संकेतों को कम करके बुखार उतारती है।",
      headache:      "सिरदर्द पैदा करने वाली सूजन और दर्द के संकेतों को कम करती है।",
      "body ache":   "एक सूजन-रोधी दवा जो मांसपेशियों और ऊतकों की तकलीफ कम करती है।",
      "body pain":   "एक सूजन-रोधी दवा जो मांसपेशियों और ऊतकों की तकलीफ कम करती है।",
      "back pain":   "कमर दर्द पैदा करने वाली मांसपेशियों की सूजन कम करती है।",
      toothache:     "दांत और मसूड़े के आसपास की सूजन कम करती है।",
      "muscle pain": "खिंची या अधिक उपयोग हुई मांसपेशियों की सूजन सीधे ठीक करती है।",
      "joint pain":  "प्रभावित जोड़ों की सूजन और दर्द कम करती है।",
      swelling:      "प्रोस्टाग्लैंडिन को रोककर सूजन कम करती है।",
      "period pain": "गर्भाशय के संकुचन और सूजन से जुड़े दर्द को कम करती है।",
      default:       "सूजन-रोधी क्रिया से दर्द, सूजन और बुखार कम करती है।",
    },
    omeprazole: {
      acidity:         "पेट में एसिड बनने को कम करके एसिडिटी से राहत देती है।",
      heartburn:       "घुटकी में उठने वाले एसिड को कम करके जलन से राहत देती है।",
      "stomach pain":  "पेट की परत को जलाने वाले अतिरिक्त एसिड को कम करती है।",
      bloating:        "अतिरिक्त एसिड से होने वाली पेट फूलन को कम करने में मदद करती है।",
      default:         "पेट में एसिड उत्पादन कम करके पाचन संबंधी तकलीफ से राहत देती है।",
    },
  },
  gu: {
    paracetamol: {
      fever:         "મગજના તાપમાન નિયંત્રણ કેન્દ્ર પર કામ કરીને તાવ ઘટાડે છે.",
      headache:      "મગજમાં દુખાવાના સંકેતો રોકીને માથાના દુખાવામાં રાહત આપે છે.",
      "body ache":   "આખા શરીરમાં દુખાવાના સંકેતો ઘટાડે છે.",
      "body pain":   "આખા શરીરમાં દુખાવાના સંકેતો ઘટાડે છે.",
      cold:          "શરદી સાથે આવતા તાવ અને દુખાવો ઘટાડે છે.",
      flu:           "ઈન્ફ્લ્યુએન્ઝા સાથે જોડાયેલ તાવ અને શરીરના દુખાવામાં રાહત આપે છે.",
      "back pain":   "કેન્દ્રીય ચેતાતંત્ર પર કામ કરીને કમરના દુખાવામાં રાહત આપે છે.",
      toothache:     "દાંતની સારવાર સુધી અસ્થાયી દુખાવો ઘટાડે છે.",
      cough:         "ઉધરસ સાથે સંકળાયેલ તાવ અને ગળાની તકલીફ ઓછી કરે છે.",
      default:       "મગજના દુખાવા-સંકેત માર્ગો પર કામ કરીને દુખાવો અને તાવ ઘટાડે છે.",
    },
    ibuprofen: {
      fever:         "શરીરમાં બળતરાના સંકેતો ઘટાડીને તાવ ઉતારે છે.",
      headache:      "માથાનો દુખાવો પેદા કરતી બળતરા અને દુખાવાના સંકેતો ઘટાડે છે.",
      "body ache":   "સ્નાયુ અને પેશીઓની તકલીફ ઘટાડતી બળતરા-વિરોધી દવા.",
      "body pain":   "સ્નાયુ અને પેશીઓની તકલીફ ઘટાડતી બળતરા-વિરોધી દવા.",
      "back pain":   "કમર દુખાવો ઉત્પન્ન કરતા સ્નાયુ અને પેશીઓની બળતરા ઘટાડે છે.",
      toothache:     "દાંત અને પેઢાની આસપાસની બળતરા ઘટાડે છે.",
      "muscle pain": "ખેંચાયેલ અથવા વધુ ઉપયોગ થયેલ સ્નાયુઓની બળતરા ઘટાડે છે.",
      "joint pain":  "અસરગ્રસ્ત સાંધામાં સોજો અને દુખાવો ઘટાડે છે.",
      swelling:      "સોજો માટે જવાબદાર પ્રોસ્ટેગ્લૅન્ડિન ઘટાડે છે.",
      "period pain": "ગર્ભાશયના સંકોચ અને બળતરા સાથે સંકળાયેલ દુખાવો ઘટાડે છે.",
      default:       "બળતરા-વિરોધી ક્રિયા દ્વારા દુખાવો, સોજો અને તાવ ઘટાડે છે.",
    },
    omeprazole: {
      acidity:         "પેટમાં એસિડ ઉત્પાદન ઘટાડીને એસિડિટીમાં સ્ત્રોત પર રાહત આપે છે.",
      heartburn:       "અન્નનળીમાં ઉઠતા એસિડ ઘટાડીને બળતરામાં રાહત આપે છે.",
      "stomach pain":  "પેટની અસ્તરને બળતી કરતા વધારાના એસિડ ઘટાડે છે.",
      bloating:        "વધારાના એસિડથી ઉત્પન્ન અફારો ઘટાડવામાં મદદ કરે છે.",
      default:         "પેટમાં એસિડ ઉત્પાદન ઘટાડીને પાચન સંબંધી અગવડ ઓછી કરે છે.",
    },
  },
};

// ─── Symptom → medicine mapping (English keys only) ──────────────────────────
const SYMPTOM_MED_MAP = {
  fever:           ["paracetamol", "ibuprofen"],
  headache:        ["paracetamol", "ibuprofen"],
  "body ache":     ["paracetamol", "ibuprofen"],
  "body pain":     ["paracetamol", "ibuprofen"],
  cold:            ["paracetamol"],
  flu:             ["paracetamol"],
  "back pain":     ["paracetamol", "ibuprofen"],
  toothache:       ["paracetamol", "ibuprofen"],
  "tooth pain":    ["paracetamol", "ibuprofen"],
  cough:           ["paracetamol"],
  "muscle pain":   ["ibuprofen"],
  "joint pain":    ["ibuprofen"],
  swelling:        ["ibuprofen"],
  "period pain":   ["ibuprofen"],
  inflammation:    ["ibuprofen"],
  acidity:         ["omeprazole"],
  heartburn:       ["omeprazole"],
  "stomach pain":  ["omeprazole"],
  "chest burning": ["omeprazole"],
  "acid reflux":   ["omeprazole"],
  bloating:        ["omeprazole"],
};

// Hindi symptom → English key
const HI_ALIAS = {
  "बुखार":        "fever",
  "सिरदर्द":      "headache",
  "बदन दर्द":     "body ache",
  "शरीर दर्द":    "body pain",
  "सर्दी":        "cold",
  "खांसी":        "cough",
  "एसिडिटी":      "acidity",
  "मांसपेशी दर्द": "muscle pain",
  "कमर दर्द":     "back pain",
  "जोड़ दर्द":    "joint pain",
  "पेट दर्द":     "stomach pain",
  "सूजन":         "swelling",
  "जलन":          "heartburn",
  "फ्लू":         "flu",
};

// Gujarati symptom → English key
const GU_ALIAS = {
  "તાવ":              "fever",
  "માથાનો દુખાવો":    "headache",
  "શરીરનો દુખાવો":    "body ache",
  "શરદી":             "cold",
  "ઉધરસ":             "cough",
  "એસિડિટી":          "acidity",
  "સ્નાયુ દુખાવો":    "muscle pain",
  "કમરનો દુખાવો":     "back pain",
  "સાંધાનો દુખાવો":   "joint pain",
  "પેટ દુખાવો":       "stomach pain",
  "સોજો":             "swelling",
  "ફ્લૂ":             "flu",
};

const OTC_IDS = ["paracetamol", "ibuprofen", "omeprazole"];

// ─── Helpers ─────────────────────────────────────────────────────────────────
function normalise(str) {
  // Keep Latin letters, Hindi Unicode block, Gujarati Unicode block, spaces
  return str.toLowerCase().trim().replace(/[^a-z\u0900-\u097f\u0a80-\u0aff ]/g, "");
}

/** Resolve any localised symptom string to its canonical English key */
function toEnglishKey(symptom) {
  const norm = normalise(symptom);
  // Hindi lookup
  for (const [hi, en] of Object.entries(HI_ALIAS)) {
    if (normalise(hi) === norm) return en;
  }
  // Gujarati lookup
  for (const [gu, en] of Object.entries(GU_ALIAS)) {
    if (normalise(gu) === norm) return en;
  }
  // Already English (or unknown)
  return norm;
}

function getMedById(id) {
  return medicines.find((m) => m.id === id) || null;
}

function analyseSymptoms(symptoms, availableMeds) {
  const scoreMap = {};

  symptoms.forEach((symptom) => {
    const enKey = toEnglishKey(symptom);

    // Direct map lookup
    const hits = [...(SYMPTOM_MED_MAP[enKey] || [])];

    // Partial substring match against English map keys
    Object.keys(SYMPTOM_MED_MAP).forEach((key) => {
      if (key !== enKey && (enKey.includes(key) || key.includes(enKey))) {
        SYMPTOM_MED_MAP[key].forEach((id) => {
          if (!hits.includes(id)) hits.push(id);
        });
      }
    });

    hits.forEach((id) => {
      if (!scoreMap[id]) scoreMap[id] = new Set();
      scoreMap[id].add(symptom);         // store original (localised) symptom
    });
  });

  if (Object.keys(scoreMap).length === 0) return { matched: [], suggested: [] };

  const sorted = Object.entries(scoreMap).sort((a, b) => b[1].size - a[1].size);
  const availableNorms = availableMeds.map((m) => normalise(m));

  const matched   = [];
  const suggested = [];

  sorted.forEach(([medId, matchedSet]) => {
    const med = getMedById(medId);
    if (!med) return;

    const userHasIt =
      availableNorms.length > 0 &&
      availableNorms.some(
        (n) =>
          normalise(med.name) === n ||
          med.aliases.some((a) => normalise(a) === n)
      );

    const entry = { med, matchedSymptoms: [...matchedSet], medId, userHasIt, isOTC: OTC_IDS.includes(medId) };

    if (availableMeds.length === 0) {
      if (entry.isOTC) suggested.push(entry);
    } else {
      if (userHasIt) matched.push(entry);
      else if (entry.isOTC) suggested.push(entry);
    }
  });

  return { matched, suggested };
}

// ─── Shared glass style ───────────────────────────────────────────────────────
const glass = "bg-white/65 backdrop-blur-xl border border-white/80 shadow-sm shadow-emerald-100/50";
const AGE_ICONS = { children: RiParentLine, adults: RiUserLine, elderly: RiUser3Line };

// ─── DosageTab ────────────────────────────────────────────────────────────────
function DosageTab({ med, lang, t }) {
  const [age, setAge] = useState("adults");
  const ageKeys   = ["children", "adults", "elderly"];
  const ageLabels = { children: t.ageChildren, adults: t.ageAdults, elderly: t.ageElderly };

  return (
    <div className="mt-4">
      <div className="grid grid-cols-3 gap-2 mb-3">
        {ageKeys.map((a) => {
          const Icon = AGE_ICONS[a];
          return (
            <button
              key={a}
              onClick={() => setAge(a)}
              className={`flex flex-col items-center gap-1 py-3 rounded-xl text-xs font-bold transition-all duration-200 ${
                age === a
                  ? "text-slate-900 font-bold"
                  : "bg-white/50 border border-slate-200 text-slate-500 hover:bg-white/80"
              } ${age === a ? "" : ""}`}
              style={age === a ? { backgroundColor: "#1ee394", color: "#0a4030" } : {}}
            >
              <Icon size={16} />
              {ageLabels[a]}
            </button>
          );
        })}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={`${age}-${lang}`}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="bg-emerald-50/80 border border-emerald-100 rounded-xl p-4 text-slate-700 text-sm leading-relaxed"
        >
          {med[lang]?.dosage[age]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ─── ResultCard ───────────────────────────────────────────────────────────────
function ResultCard({ entry, index, lang, t }) {
  const [expanded, setExpanded] = useState(index === 0);
  const { med, matchedSymptoms, medId, userHasIt } = entry;

  // Pick reason strings for active lang, fall back to English
  const reasonMap = SYMPTOM_REASON[lang]?.[medId] || SYMPTOM_REASON.en[medId] || {};
  const freqLabel = FREQUENCY_LABEL[lang]?.[medId] || FREQUENCY_LABEL.en[medId] || "—";

  const getWhyReason = (symptom) => {
    const enKey = toEnglishKey(symptom);
    return (
      reasonMap[enKey] ||
      reasonMap[normalise(symptom)] ||
      reasonMap.default ||
      "Addresses this symptom through its primary mechanism of action."
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
      className={`${glass} rounded-2xl overflow-hidden`}
    >
      <button
        onClick={() => setExpanded((v) => !v)}
        className="w-full flex items-center justify-between p-5 text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-400 rounded-2xl"
        aria-expanded={expanded}
      >
        <div className="flex items-center gap-3">
          <span className={`flex items-center justify-center w-9 h-9 rounded-xl ${userHasIt ? "bg-emerald-100 text-emerald-600" : "bg-emerald-50 text-emerald-600"}`}>
            <RiCapsuleLine size={18} />
          </span>
          <div>
            <p className="font-bold text-slate-800 text-base">{med.name}</p>
            <p className="text-xs text-slate-400">{med.brand}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {userHasIt && (
            <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full">
              <RiCheckboxCircleLine size={12} />
              {t.youHaveThis}
            </span>
          )}
          <span className="text-slate-400">
            {expanded ? <RiCloseLine size={18} /> : <RiAddLine size={18} />}
          </span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-6 space-y-5 border-t border-white/60 pt-5">

              {/* Description in active language */}
              <p className="text-slate-600 text-sm leading-relaxed">{med[lang]?.description}</p>

              {/* Why it helps */}
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                  <RiInformationLine size={12} className="text-emerald-500" />
                  {t.whyHelps}
                </p>
                <ul className="space-y-2">
                  {matchedSymptoms.map((s, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-xs font-black flex items-center justify-center">
                        {i + 1}
                      </span>
                      <span>
                        <span className="font-semibold capitalize">{s}:</span>{" "}
                        {getWhyReason(s)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Frequency */}
              <div className="flex items-start gap-3 bg-emerald-50/80 border border-emerald-100 rounded-xl p-4">
                <RiShieldCheckLine size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-0.5">{t.typicalFreq}</p>
                  <p className="text-sm text-slate-700">{freqLabel}</p>
                </div>
              </div>

              {/* Dosage by age */}
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1 flex items-center gap-1.5">
                  <RiShieldCheckLine size={12} className="text-emerald-500" />
                  {t.dosageGuidance}
                </p>
                <DosageTab med={med} lang={lang} t={t} />
              </div>

              {/* Warnings */}
              <div>
                <p className="text-xs font-bold text-red-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                  <RiAlertLine size={12} />
                  {t.importantWarnings}
                </p>
                <ul className="space-y-2">
                  {med[lang]?.warnings.map((w, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-red-100 border border-red-200 text-red-500 text-xs font-black flex items-center justify-center">!</span>
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── TagInput ─────────────────────────────────────────────────────────────────
function TagInput({ tags, setTags, placeholder, color = "blue", removeLabel }) {
  const [draft, setDraft] = useState("");
  const inputRef = useRef(null);

  const add = (val) => {
    const v = val.trim();
    if (v && !tags.map(normalise).includes(normalise(v))) setTags([...tags, v]);
    setDraft("");
  };

  const remove = (i) => setTags(tags.filter((_, idx) => idx !== i));

  const onKey = (e) => {
    if (["Enter", ",", "Tab"].includes(e.key)) { e.preventDefault(); add(draft); }
    else if (e.key === "Backspace" && draft === "" && tags.length) remove(tags.length - 1);
  };

  const colorMap = {
    blue:   { tag: "bg-emerald-100 border-emerald-200 text-emerald-800",     x: "text-emerald-400 hover:text-emerald-700"   },
    violet: { tag: "bg-violet-100 border-violet-200 text-violet-800", x: "text-violet-400 hover:text-violet-700" },
  };
  const c = colorMap[color];

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      className={`${glass} min-h-[52px] flex flex-wrap gap-2 items-center px-4 py-3 rounded-2xl cursor-text focus-within:ring-2 focus-within:ring-emerald-400`}
    >
      {tags.map((tag, i) => (
        <span key={i} className={`flex items-center gap-1.5 text-sm font-semibold px-3 py-1 rounded-full border ${c.tag}`}>
          {tag}
          <button
            onClick={(e) => { e.stopPropagation(); remove(i); }}
            aria-label={removeLabel(tag)}
            className={`${c.x} transition-colors`}
          >
            <RiCloseLine size={13} />
          </button>
        </span>
      ))}
      <input
        ref={inputRef}
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onKeyDown={onKey}
        onBlur={() => draft.trim() && add(draft)}
        placeholder={tags.length === 0 ? placeholder : ""}
        className="flex-1 min-w-[120px] bg-transparent text-slate-700 placeholder-slate-400 text-sm outline-none"
      />
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────
export default function SymptomChecker({ lang = "en" }) {
  const t = UI[lang] || UI.en;

  const [symptoms, setSymptoms] = useState([]);
  const [userMeds, setUserMeds] = useState([]);
  const [result,   setResult]   = useState(null);
  const [analysed, setAnalysed] = useState(false);
  const [noMatch,  setNoMatch]  = useState(false);

  const handleAnalyse = () => {
    if (symptoms.length === 0) return;
    const { matched, suggested } = analyseSymptoms(symptoms, userMeds);
    setResult({ matched, suggested });
    setAnalysed(true);
    setNoMatch(matched.length === 0 && suggested.length === 0);
  };

  const handleReset = () => {
    setSymptoms([]); setUserMeds([]); setResult(null); setAnalysed(false); setNoMatch(false);
  };

  const hasResults = result && (result.matched.length > 0 || result.suggested.length > 0);

  return (
    <section id="symptom-checker" aria-labelledby="symptom-heading" className="mt-20 mb-6">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
        className="mb-8"
      >
        <div className="flex items-center gap-2.5 mb-3">
          <span className="flex items-center justify-center w-9 h-9 rounded-xl text-slate-900 shadow shadow-emerald-300/40" style={{ backgroundColor: "#1ee394" }}>
            <RiStethoscopeLine size={18} />
          </span>
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#0d8f5a" }}>{t.badge}</span>
        </div>
        <h2 id="symptom-heading" className="text-3xl font-extrabold text-slate-800 tracking-tight mb-2">
          {t.heading}
        </h2>
        <p className="text-slate-500 text-base leading-relaxed max-w-lg">{t.subheading}</p>
      </motion.div>

      {/* Disclaimer */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.44, delay: 0.06 }}
        role="note"
        className="flex items-start gap-3 bg-amber-50/90 border border-amber-200 rounded-2xl p-4 mb-6"
      >
        <RiErrorWarningLine size={18} className="text-amber-500 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-amber-800 leading-relaxed">{t.disclaimer}</p>
      </motion.div>

      {/* Form */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.48, delay: 0.1 }}
        className={`${glass} rounded-3xl p-6 sm:p-8 mb-6`}
      >
        {/* Symptoms */}
        <div className="mb-5">
          <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
            {t.symptomsLabel}
            <span className="ml-1 normal-case font-normal">{t.symptomsHint}</span>
          </label>
          <TagInput
            tags={symptoms}
            setTags={setSymptoms}
            placeholder={t.symptomsPlaceholder}
            color="blue"
            removeLabel={t.removeTag}
          />
          {/* Quick-add chips — fully localised */}
          <div className="flex flex-wrap gap-2 mt-3">
            {t.quickAdd.map((s) => (
              <button
                key={s}
                onClick={() => {
                  if (!symptoms.map(normalise).includes(normalise(s))) setSymptoms([...symptoms, s]);
                }}
                disabled={symptoms.map(normalise).includes(normalise(s))}
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/70 border border-slate-200 text-slate-500 hover:border-emerald-300 hover:text-emerald-700 hover:bg-emerald-50 transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                + {s}
              </button>
            ))}
          </div>
        </div>

        {/* Medicines you have */}
        <div className="mb-6">
          <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
            {t.medsLabel}
            <span className="ml-1 normal-case font-normal">{t.medsHint}</span>
          </label>
          <TagInput
            tags={userMeds}
            setTags={setUserMeds}
            placeholder={t.medsPlaceholder}
            color="violet"
            removeLabel={t.removeTag}
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
            onClick={handleAnalyse}
            disabled={symptoms.length === 0}
            className="flex-1 flex items-center justify-center gap-2 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-slate-900 font-bold text-sm px-6 py-3.5 rounded-2xl shadow transition-all duration-200"
            style={{ backgroundColor: symptoms.length === 0 ? undefined : "#1ee394", boxShadow: symptoms.length === 0 ? undefined : "0 2px 12px rgba(30,227,148,0.30)" }}
          >
            <RiSearchEyeLine size={16} />
            {t.analyseBtn}
          </motion.button>
          {analysed && (
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileTap={{ scale: 0.96 }}
              onClick={handleReset}
              className="flex items-center gap-1.5 px-4 py-3.5 rounded-2xl border border-slate-200 bg-white/60 hover:bg-white/90 text-slate-500 hover:text-slate-700 text-sm font-semibold transition-all duration-200"
            >
              <RiCloseLine size={15} />
              {t.clearBtn}
            </motion.button>
          )}
        </div>
      </motion.div>

      {/* Results */}
      <AnimatePresence>
        {analysed && (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.46, ease: [0.22, 1, 0.36, 1] }}
          >
            {noMatch && (
              <div className="flex items-start gap-3 bg-slate-50/90 border border-slate-200 rounded-2xl p-5">
                <RiInformationLine size={18} className="text-slate-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-700 font-semibold text-sm mb-1">{t.noMatchTitle}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{t.noMatchBody}</p>
                </div>
              </div>
            )}

            {result?.matched.length > 0 && (
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <RiCheckboxCircleLine size={16} className="text-emerald-500" />
                  <h3 className="text-sm font-bold text-slate-600 uppercase tracking-widest">{t.fromCabinet}</h3>
                </div>
                <div className="space-y-3">
                  {result.matched.map((entry, i) => (
                    <ResultCard key={entry.med.id} entry={entry} index={i} lang={lang} t={t} />
                  ))}
                </div>
              </div>
            )}

            {result?.suggested.length > 0 && (
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <RiCapsuleLine size={16} className="text-emerald-500" />
                  <h3 className="text-sm font-bold text-slate-600 uppercase tracking-widest">
                    {result.matched.length > 0 ? t.otcOptions : t.otcAvailable}
                  </h3>
                </div>
                <div className="space-y-3">
                  {result.suggested.map((entry, i) => (
                    <ResultCard key={entry.med.id} entry={entry} index={i} lang={lang} t={t} />
                  ))}
                </div>
              </div>
            )}

            {hasResults && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-3 bg-red-50/80 border border-red-100 rounded-2xl p-5 mt-4"
                role="note"
              >
                <RiAlertLine size={16} className="text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-700 leading-relaxed">{t.footerDisclaimer}</p>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
