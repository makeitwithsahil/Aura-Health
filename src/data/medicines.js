// data/medicines.js
// Top 50 most-used medicines in India
// Each entry: id, name, aliases (generic + ALL common Indian brand names), brand display
// Content in 3 languages: en · hi · gu
// ─────────────────────────────────────────────────────────────────────────────

export const medicines = [

  // ── 1. PARACETAMOL ────────────────────────────────────────────────────────
  {
    id: "paracetamol",
    name: "Paracetamol",
    aliases: [
      "paracetamol","acetaminophen","tylenol","panadol",
      "crocin","dolo","dolo 650","calpol","fepanil","metacin",
      "pyrigesic","pacimol","sumo","sumo cold","p 500","p650",
      "combiflam","zerodol p","zerodol","ultracet","dolopar",
      "febrinil","tempra","para","para 650"
    ],
    brand: "Crocin · Dolo 650 · Calpol · Fepanil · Pacimol · Zerodol-P",

    en: {
      category: "Pain & Fever",
      description:
        "Paracetamol is the most common medicine for pain and fever. It tells your brain to feel less pain and helps bring your temperature down. Very safe when taken in the right amount.",
      uses: ["Fever", "Headache", "Body ache", "Toothache", "Back pain", "Cold & flu pain", "Post-vaccination fever"],
      dosage: {
        children: "10–15 mg per kg of body weight every 6 hours. Syrup: 1 teaspoon (5 ml) per 10 kg. Max 4 doses per day. E.g. a 20 kg child gets 2 teaspoons (10 ml).",
        adults:   "1–2 tablets (500 mg each) every 6 hours as needed. Maximum 8 tablets (4000 mg) in 24 hours. Take with or without food.",
        elderly:  "1 tablet (500 mg) every 6–8 hours. Do not exceed 6 tablets per day. Drink plenty of water.",
      },
      warnings: [
        "Never exceed the stated dose — overdose seriously harms the liver",
        "Check all other medicines you take — many cold, flu and pain tablets already contain paracetamol",
        "Avoid alcohol while taking this medicine",
        "See a doctor if fever or pain does not improve in 3 days",
      ],
    },

    hi: {
      category: "दर्द और बुखार",
      description:
        "पैरासिटामोल दर्द और बुखार के लिए सबसे आम दवा है। यह दिमाग को दर्द कम महसूस कराती है और तापमान घटाती है। सही मात्रा में लेने पर बहुत सुरक्षित है।",
      uses: ["बुखार", "सिरदर्द", "बदन दर्द", "दांत दर्द", "कमर दर्द", "सर्दी-जुकाम का दर्द", "टीके के बाद बुखार"],
      dosage: {
        children: "हर 6 घंटे में 10–15 मि.ग्रा. प्रति किलो। सिरप: हर 10 किलो पर 1 चम्मच (5 मिली)। दिन में 4 बार से ज्यादा न दें।",
        adults:   "हर 6 घंटे में 1–2 गोली (500 मि.ग्रा.)। 24 घंटे में 8 से ज्यादा गोली न लें। खाने के साथ या बिना खाए ले सकते हैं।",
        elderly:  "हर 6–8 घंटे में 1 गोली (500 मि.ग्रा.)। दिन में 6 से ज्यादा न लें। खूब पानी पिएं।",
      },
      warnings: [
        "तय मात्रा से ज्यादा न लें — ज्यादा लेने से लीवर को गंभीर नुकसान होता है",
        "अपनी बाकी दवाएं जांचें — सर्दी-खांसी और दर्द की कई दवाओं में पहले से पैरासिटामोल होता है",
        "इस दवा के दौरान शराब न पिएं",
        "3 दिन में बुखार या दर्द ठीक न हो तो डॉक्टर से मिलें",
      ],
    },

    gu: {
      category: "દુખાવો અને તાવ",
      description:
        "પેરાસિટામોલ દુખાવો અને તાવ માટે સૌથી સામાન્ય દવા છે. આ મગજને ઓછો દુખાવો અનુભવ કરાવે છે અને તાવ ઘટાડે છે. સાચી માત્રામાં ખૂબ સુરક્ષિત.",
      uses: ["તાવ", "માથાનો દુખાવો", "શરીરનો દુખાવો", "દાંતનો દુખાવો", "કમરનો દુખાવો", "શરદી-ઉધરસ", "રસી પછી તાવ"],
      dosage: {
        children: "દર 6 કલાકે 10–15 મિ.ગ્રા. પ્રતિ કિલો. સિરપ: દર 10 કિલોએ 1 ચમચી. દિવસમાં 4 વખત.",
        adults:   "દર 6 કલાકે 1–2 ગોળી (500 મિ.ગ્રા.). 24 કલાકમાં 8 ગોળી કરતાં વધારે નહીં.",
        elderly:  "દર 6–8 કલાકે 1 ગોળી (500 મિ.ગ્રા.). દિવસમાં 6 ગોળી કરતાં વધારે નહીં. ઘણું પાણી પીઓ.",
      },
      warnings: [
        "ક્યારેય વધારે ડોઝ ન લો — ઓવરડોઝ લિવરને ગંભીર નુકસાન કરે છે",
        "બીજી દવાઓ ચેક કરો — ઘણી શરદી અને દુખાવાની ગોળીઓમાં પહેલેથી પેરાસિટામોલ હોય છે",
        "આ દવા દરમ્યાન દારૂ ન પીઓ",
        "3 દિવસમાં સારું ન થાય તો ડૉક્ટર પાસે જાઓ",
      ],
    },
  },

  // ── 2. IBUPROFEN ─────────────────────────────────────────────────────────
  {
    id: "ibuprofen",
    name: "Ibuprofen",
    aliases: [
      "ibuprofen","brufen","advil","nurofen","motrin",
      "combiflam","ibugesic","ibugesic plus","ibuclin","ibuclin junior",
      "maxofen","fenlong","espren","ibufen","brufencold"
    ],
    brand: "Brufen · Combiflam · Ibugesic · Advil · Ibuclin",

    en: {
      category: "Anti-Inflammatory Pain & Fever",
      description:
        "Ibuprofen reduces swelling, relieves pain and brings down fever. It blocks chemicals (prostaglandins) that cause inflammation. Always take with food to protect your stomach.",
      uses: ["Muscle pain", "Joint pain & swelling", "Period pain", "Dental pain", "Fever", "Sports injury", "Headache"],
      dosage: {
        children: "Children over 3 months only. 5–10 mg per kg every 6–8 hours. Give with food or milk. Max 4 doses per day.",
        adults:   "200–400 mg every 6–8 hours with food. Maximum 1200 mg per day without a prescription. Take with a full glass of water.",
        elderly:  "Lowest effective dose only (200 mg) with food. Avoid if possible — high risk of stomach bleeding and kidney problems in elderly.",
      },
      warnings: [
        "Always take with food or milk — NEVER on an empty stomach",
        "Do not take if you have stomach ulcers, kidney disease, or heart failure",
        "Avoid in pregnancy, especially in the last 3 months",
        "Do not combine with aspirin or other NSAIDs",
      ],
    },

    hi: {
      category: "सूजन-रोधी दर्द और बुखार",
      description:
        "इबुप्रोफेन सूजन कम करती है, दर्द से राहत देती है और बुखार उतारती है। यह सूजन पैदा करने वाले रसायनों को रोकती है। पेट की सुरक्षा के लिए हमेशा खाने के साथ लें।",
      uses: ["मांसपेशियों का दर्द", "जोड़ों का दर्द और सूजन", "मासिक दर्द", "दांत दर्द", "बुखार", "खेल-कूद की चोट", "सिरदर्द"],
      dosage: {
        children: "केवल 3 महीने से बड़े बच्चों के लिए। हर 10 किलो पर 5–10 मि.ग्रा., हर 6–8 घंटे। खाने या दूध के साथ।",
        adults:   "200–400 मि.ग्रा. हर 6–8 घंटे, खाने के साथ। बिना नुस्खे के अधिकतम 1200 मि.ग्रा. प्रतिदिन।",
        elderly:  "केवल सबसे कम खुराक (200 मि.ग्रा.) खाने के साथ। बुजुर्गों में पेट से खून आना और किडनी की समस्या का खतरा ज्यादा।",
      },
      warnings: [
        "हमेशा खाने या दूध के साथ लें — खाली पेट कभी नहीं",
        "पेट का अल्सर, किडनी या दिल की बीमारी हो तो न लें",
        "गर्भावस्था में न लें, खासकर आखिरी 3 महीनों में",
        "एस्पिरिन या दूसरी NSAIDs के साथ न लें",
      ],
    },

    gu: {
      category: "સોજા-વિરોધી દુખાવો અને તાવ",
      description:
        "આઇબ્યુપ્રોફેન સોજો ઘટાડે, દુખાવો ઓછો કરે અને તાવ ઉતારે. સોજો પેદા કરતા રસાયણ રોકે. પેટ રક્ષવા હંમેશા ખાવા સાથે લો.",
      uses: ["સ્નાયુ દુખાવો", "સાંધાનો દુખાવો-સોજો", "માસિક દુખાવો", "દાંત દુખાવો", "તાવ", "સ્પોર્ટ્સ ઈજા", "માથાનો દુખાવો"],
      dosage: {
        children: "ફક્ત 3 મહિનાથી મોટા. 5–10 મિ.ગ્રા./કિલો દર 6–8 કલાકે. ખાવા સાથે.",
        adults:   "200–400 મિ.ગ્રા. દર 6–8 કલાકે ખાવા સાથે. દરરોજ મહત્તમ 1200 મિ.ગ્રા.",
        elderly:  "ઓછામાં ઓછી 200 મિ.ગ્રા. ખાવા સાથે. વૃદ્ધોમાં ઉચ્ચ જોખમ — ટાળવું.",
      },
      warnings: [
        "ખાવા સાથે જ લો — ખાલી પેટ ક્યારેય નહીં",
        "અલ્સર, કિડની, હૃદય સમસ્યા હોય તો ન લો",
        "ગર્ભાવસ્થામાં ન લો, ખાસ છેલ્લા 3 મહિના",
        "એસ્પિરિન સાથે ન લો",
      ],
    },
  },

  // ── 3. DICLOFENAC ────────────────────────────────────────────────────────
  {
    id: "diclofenac",
    name: "Diclofenac",
    aliases: [
      "diclofenac","voveran","volini","voltaren","voltaflam",
      "diclomol","diclomol plus","diclogesic","zerodol","zerodol sp",
      "reactine","reactin","relaxyl","movon","signoflam",
      "dynapar","dynapar plus","joindol","cataflan"
    ],
    brand: "Voveran · Voltaren · Zerodol-SP · Diclomol · Dynapar · Signoflam",

    en: {
      category: "Anti-Inflammatory Pain Relief",
      description:
        "Diclofenac is a strong anti-inflammatory medicine that relieves pain and reduces swelling quickly. Very commonly used for joint pain, back pain, and sports injuries. Always take with food.",
      uses: ["Back pain", "Knee & joint pain", "Arthritis", "Sports injury", "Post-surgery pain", "Dental pain", "Shoulder pain"],
      dosage: {
        children: "Not recommended for children under 14 years without a doctor's advice.",
        adults:   "50 mg tablet 2–3 times a day with food. Or 75 mg tablet once a day. Maximum 150 mg per day. Use for shortest time needed.",
        elderly:  "Lowest dose (50 mg once or twice daily) with food. Monitor for stomach, kidney and heart side effects closely.",
      },
      warnings: [
        "Always take with food — risk of stomach bleeding is high",
        "Do not take if you have heart disease, kidney disease, or stomach ulcers",
        "Do not use for more than 7 days without a doctor's advice",
        "Can raise blood pressure — check BP regularly during use",
      ],
    },

    hi: {
      category: "सूजन-रोधी दर्द निवारक",
      description:
        "डिक्लोफेनाक एक मजबूत सूजन-रोधी दवा है जो जल्दी दर्द से राहत और सूजन कम करती है। जोड़ों के दर्द, कमर दर्द और चोट में बहुत उपयोगी। हमेशा खाने के साथ लें।",
      uses: ["कमर दर्द", "घुटने और जोड़ों का दर्द", "गठिया (आर्थराइटिस)", "खेल की चोट", "ऑपरेशन के बाद दर्द", "दांत दर्द", "कंधे का दर्द"],
      dosage: {
        children: "14 साल से कम बच्चों को डॉक्टर की सलाह के बिना न दें।",
        adults:   "खाने के साथ 50 मि.ग्रा. दिन में 2–3 बार। या 75 मि.ग्रा. दिन में एक बार। अधिकतम 150 मि.ग्रा. प्रतिदिन।",
        elderly:  "कम से कम खुराक (50 मि.ग्रा. दिन में 1–2 बार) खाने के साथ। पेट, किडनी और दिल पर नजर रखें।",
      },
      warnings: [
        "हमेशा खाने के साथ लें — पेट से खून आने का खतरा है",
        "दिल की बीमारी, किडनी की समस्या या पेट के अल्सर में न लें",
        "डॉक्टर की सलाह के बिना 7 दिन से ज्यादा न लें",
        "यह ब्लड प्रेशर बढ़ा सकती है — नियमित BP जांच करें",
      ],
    },

    gu: {
      category: "સોજા-વિરોધી દુખાવા-નિવારક",
      description:
        "ડિક્લોફેનાક એક મજબૂત દવા છે જે ઝડપથી દુખાવો ઘટાડે અને સોજો ઓછો કરે. સાંધા, કમર અને ઈજામાં ઉપયોગી. ખાવા સાથે.",
      uses: ["કમરનો દુખાવો", "ઘૂંટણ-સાંધો", "સંધિવા", "સ્પોર્ટ્સ ઈજા", "ઑપ. પછી", "દાંત", "ખભો"],
      dosage: {
        children: "14 વર્ષ નીચે ડૉક્ટર સલાહ વગર નહીં.",
        adults:   "50 મિ.ગ્રા. ખાવા સાથે દિવસમાં 2–3 વખત. અથવા 75 મિ.ગ્રા. એક વખત.",
        elderly:  "50 મિ.ગ્રા. ખાવા સાથે 1–2 વખત. સાઇડ ઇફેક્ટ ધ્યાનથી.",
      },
      warnings: [
        "ખાવા સાથે — પેટ બળવાનો ભય",
        "હૃદય, કિડની, અલ્સર હોય તો ન લો",
        "7 દિવસ કરતાં વધારે ડૉક્ટર સિવાય નહીં",
        "BP વધી શકે — નિયમિત ચેક કરો",
      ],
    },
  },

  // ── 4. ASPIRIN ───────────────────────────────────────────────────────────
  {
    id: "aspirin",
    name: "Aspirin",
    aliases: [
      "aspirin","disprin","ecosprin","aspirin 75","ecosprin 75",
      "ecosprin av","loprin","delisprin","ascard","cardace aspirin",
      "acetylsalicylic acid","asa"
    ],
    brand: "Disprin · Ecosprin · Ascard · Loprin",

    en: {
      category: "Blood Thinner & Pain Relief",
      description:
        "Aspirin in low dose (75 mg) is used daily to prevent heart attacks and strokes by stopping blood clots. In higher doses it relieves pain and fever. The two uses are very different — always check which dose you need.",
      uses: ["Heart attack prevention", "Stroke prevention", "Headache (higher dose)", "Fever (higher dose)", "Pain (higher dose)"],
      dosage: {
        children: "NOT for children under 16 years — risk of a rare but dangerous brain condition (Reye's syndrome).",
        adults:   "Heart prevention: 75 mg once daily after food. Pain/fever: 300–600 mg every 4–6 hours with food (max 4 g/day).",
        elderly:  "75 mg once daily for heart protection after food. Higher doses increase bleeding risk significantly.",
      },
      warnings: [
        "NEVER give to children under 16 — can cause life-threatening Reye's syndrome",
        "Increases bleeding risk — tell your surgeon/dentist before any procedure",
        "Do not stop your daily aspirin without your doctor's advice",
        "Take with food to reduce stomach irritation",
      ],
    },

    hi: {
      category: "खून पतला करना और दर्द निवारण",
      description:
        "कम खुराक (75 मि.ग्रा.) एस्पिरिन दिल के दौरे और स्ट्रोक रोकने के लिए रोज ली जाती है। ज्यादा खुराक में दर्द और बुखार कम करती है। दोनों उपयोग बिल्कुल अलग हैं।",
      uses: ["हार्ट अटैक से बचाव", "स्ट्रोक से बचाव", "सिरदर्द (ज्यादा खुराक)", "बुखार (ज्यादा खुराक)", "दर्द (ज्यादा खुराक)"],
      dosage: {
        children: "16 साल से कम बच्चों को बिल्कुल नहीं — रेये सिंड्रोम का खतरा।",
        adults:   "दिल बचाव: खाने के बाद 75 मि.ग्रा. रोज। दर्द/बुखार: 300–600 मि.ग्रा. हर 4–6 घंटे।",
        elderly:  "दिल बचाव के लिए खाने के बाद 75 मि.ग्रा. रोज। ज्यादा खुराक से खून का खतरा।",
      },
      warnings: [
        "16 साल से कम बच्चों को कभी न दें — रेये सिंड्रोम जानलेवा है",
        "खून पतला करती है — ऑपरेशन से पहले डॉक्टर को बताएं",
        "डॉक्टर की सलाह के बिना रोज की एस्पिरिन बंद न करें",
        "पेट की जलन से बचने के लिए खाने के साथ लें",
      ],
    },

    gu: {
      category: "લોહી પાતળું અને દુખાવો",
      description:
        "ઓછી 75 મિ.ગ્રા. ડોઝ હાર્ટ અટેક અને સ્ટ્રોક રોકવા. વધારે ડોઝ દુખાવો-તાવ. બે ઉપયોગ સ્પષ્ટ અલગ.",
      uses: ["હૃદય રક્ષણ", "સ્ટ્રોક નિવારણ", "માથાનો દુખાવો", "તાવ", "દુખાવો"],
      dosage: {
        children: "16 વર્ષ નીચે ક્યારેય નહીં — Reye's syndrome.",
        adults:   "હૃદય: 75 મિ.ગ્રા. ખાવા પછી. દુખાવો: 300–600 મિ.ગ્રા. દર 4–6 કલાકે.",
        elderly:  "75 મિ.ગ્રા. ખાવા પછી. વધારે ડોઝ ન.",
      },
      warnings: [
        "16 વર્ષ નીચે ક્યારેય નહીં — Reye's syndrome",
        "લોહી પાતળું — ઑપ. પહેલા ડૉક્ટર જણાવો",
        "ડૉક્ટર સિવાય બંધ ન કરો",
        "ખાવા સાથે",
      ],
    },
  },

  // ── 5. ACECLOFENAC ───────────────────────────────────────────────────────
  {
    id: "aceclofenac",
    name: "Aceclofenac",
    aliases: [
      "aceclofenac","aceclo","hifenac","hifenac p","hifenac d",
      "acenac","acenac p","dolowin","dolowin plus","zerodol",
      "zerodol p","zerodol sp","acemiz","acemiz plus",
      "movon","movon plus","nise","ace proxyvon"
    ],
    brand: "Hifenac · Zerodol-SP · Dolowin · Acemiz · Movon",

    en: {
      category: "Anti-Inflammatory Pain Relief",
      description:
        "Aceclofenac is a newer, stronger pain and inflammation medicine. It is gentler on the stomach than older NSAIDs. Commonly combined with Paracetamol (e.g. Zerodol-P) or Serratiopeptidase (Zerodol-SP) for stronger effect.",
      uses: ["Joint pain", "Back pain", "Arthritis", "Dental pain", "Post-surgery pain", "Muscle pain", "Knee pain"],
      dosage: {
        children: "Not recommended under 18 years.",
        adults:   "100 mg tablet twice daily with food (morning and evening). Take for the shortest time needed.",
        elderly:  "100 mg once daily with food to start. Monitor kidney and stomach carefully.",
      },
      warnings: [
        "Take with food — stomach irritation is common",
        "Do not use with other NSAIDs like Ibuprofen or Diclofenac at the same time",
        "Avoid in kidney or liver disease",
        "Stop if you get any rash or swelling of face — could be allergy",
      ],
    },

    hi: {
      category: "सूजन-रोधी दर्द निवारक",
      description:
        "एसीक्लोफेनाक एक नई और असरदार दर्द-सूजन निवारक दवा है। पुरानी NSAIDs से पेट पर कम असर। अक्सर पैरासिटामोल (जीरोडोल-P) या सेरेशियोपेप्टिडेज (जीरोडोल-SP) के साथ मिलाकर दी जाती है।",
      uses: ["जोड़ों का दर्द", "कमर दर्द", "गठिया", "दांत दर्द", "ऑपरेशन के बाद", "मांसपेशियों का दर्द", "घुटने का दर्द"],
      dosage: {
        children: "18 साल से कम बच्चों को नहीं।",
        adults:   "100 मि.ग्रा. की गोली दिन में 2 बार खाने के साथ।",
        elderly:  "शुरुआत में 100 मि.ग्रा. दिन में एक बार। किडनी और पेट की जांच रखें।",
      },
      warnings: [
        "खाने के साथ लें — पेट में जलन सामान्य है",
        "एक साथ इबुप्रोफेन या डिक्लोफेनाक न लें",
        "किडनी या लीवर की बीमारी में न लें",
        "त्वचा पर दाने या चेहरे पर सूजन हो तो तुरंत बंद करें",
      ],
    },

    gu: {
      category: "સોજા-વિરોધી",
      description:
        "એસિક્લોફેનાક નવી અને અસરકારક. પેટ પર ઓછી અસર. ઘણી વખત Zerodol-P (Paracetamol) કે Zerodol-SP (Serratiopeptidase) સાથે.",
      uses: ["સાંધો", "કમર", "ઘૂંટણ", "ગઠિયો", "દાંત", "ઑપ. પછી", "સ્નાયુ"],
      dosage: {
        children: "18 વર્ષ નીચે નહીં.",
        adults:   "100 મિ.ગ્રા. ખાવા સાથે 2 વખત.",
        elderly:  "100 મિ.ગ્રા. 1 વખત. ચેક રાખો.",
      },
      warnings: [
        "ખાવા સાથે",
        "Ibuprofen, Diclofenac સાથે ન",
        "કિડની/લિવર રોગ ન",
        "ચામડી ફોડ/ચહેરો સૂળ — બંધ",
      ],
    },
  },

  // ── 6. NIMESULIDE ────────────────────────────────────────────────────────
  {
    id: "nimesulide",
    name: "Nimesulide",
    aliases: [
      "nimesulide","nise","nise gel","nimulid","nimulid md",
      "nicip","nicip plus","nimesulide paracetamol","nimopen",
      "nimprex","nimodol","nims","nimugesic"
    ],
    brand: "Nise · Nimulid · Nicip · Nimopen",

    en: {
      category: "Anti-Inflammatory Pain Relief",
      description:
        "Nimesulide is a fast-acting pain and fever medicine. It works quickly (within 30 minutes). Note: It is banned for children under 12 in India due to liver safety concerns.",
      uses: ["Fever in adults", "Muscle pain", "Back pain", "Dental pain", "Period pain", "Joint pain"],
      dosage: {
        children: "BANNED for children under 12 years in India. Do not use.",
        adults:   "100 mg tablet twice daily after food. Maximum 200 mg per day. Use for shortest time needed.",
        elderly:  "Use with caution. 100 mg once daily after food. Monitor liver function if used long term.",
      },
      warnings: [
        "Banned for children under 12 — do NOT give to children",
        "Take after food — can cause stomach upset",
        "Do not use for more than 15 days continuously",
        "Avoid if you have liver disease or alcohol use",
      ],
    },

    hi: {
      category: "तेज दर्द-बुखार निवारक",
      description:
        "निमेसुलाइड तेजी से (30 मिनट में) असर करने वाली दर्द और बुखार की दवा है। भारत में 12 साल से कम बच्चों को देना बैन है।",
      uses: ["बड़ों में बुखार", "मांसपेशियों का दर्द", "कमर दर्द", "दांत दर्द", "मासिक दर्द", "जोड़ों का दर्द"],
      dosage: {
        children: "भारत में 12 साल से कम को बैन है। न दें।",
        adults:   "100 मि.ग्रा. खाने के बाद दिन में 2 बार। अधिकतम 200 मि.ग्रा.।",
        elderly:  "सावधानी से। 100 मि.ग्रा. खाने के बाद एक बार।",
      },
      warnings: [
        "12 साल से कम बच्चों को न दें — भारत में बैन",
        "खाने के बाद लें",
        "15 दिन से ज्यादा लगातार न लें",
        "लीवर की बीमारी या शराब के साथ न लें",
      ],
    },

    gu: {
      category: "ઝડપી દુખાવો-તાવ",
      description:
        "નિમેસ્યુલાઇડ ઝડપથી (30 મિ.) અસર. ભારતમાં 12 વર્ષ નીચે બૅન.",
      uses: ["મોટા લોકોમાં તાવ", "સ્નાયુ", "કમર", "દાંત", "માસિક", "સાંધો"],
      dosage: {
        children: "12 વર્ષ નીચે બૅન — ન.",
        adults:   "100 મિ.ગ્રા. ખાવા પછી 2 વખત.",
        elderly:  "100 મિ.ગ્રા. 1 વખત સાવધ.",
      },
      warnings: [
        "12 વર્ષ નીચે ન — ભારતમાં બૅન",
        "ખાવા પછી",
        "15 દિવસ સળંગ ન",
        "લિવર/દારૂ ન",
      ],
    },
  },

  // ── 7. AMOXICILLIN ───────────────────────────────────────────────────────
  {
    id: "amoxicillin",
    name: "Amoxicillin",
    aliases: [
      "amoxicillin","amoxil","novamox","mox","mox 500","amoxyclav",
      "augmentin","clavam","clavam 625","moxikind","moxiforce",
      "amoxil cv","cipmox","zoxil","polymox","trimox"
    ],
    brand: "Novamox · Mox · Augmentin (with Clavulanate) · Cipmox · Clavam",

    en: {
      category: "Antibiotic — Kills Bacteria",
      description:
        "Amoxicillin kills bacteria. It is one of the most commonly prescribed antibiotics. It does NOT work against cold, flu or viral infections. Always complete the full course — stopping early lets bacteria come back stronger.",
      uses: ["Throat infection", "Ear infection", "Chest infection (pneumonia)", "Urine infection", "Dental abscess", "Skin infection"],
      dosage: {
        children: "25–50 mg per kg per day, divided into 2–3 doses. Syrup: as directed on label. Complete full course.",
        adults:   "250–500 mg capsule 3 times a day (every 8 hours). For serious infections 875 mg twice daily. Always complete the course.",
        elderly:  "250–500 mg 3 times a day. Reduce dose if kidney function is poor. Complete full course.",
      },
      warnings: [
        "Complete the full course even if you feel better — stopping early causes antibiotic resistance",
        "Tell your doctor if you are allergic to Penicillin — Amoxicillin is a Penicillin antibiotic",
        "Can cause diarrhea — eat yogurt to help",
        "Does not work for viruses (cold, flu, COVID)",
      ],
    },

    hi: {
      category: "एंटीबायोटिक — बैक्टीरिया नाशक",
      description:
        "अमोक्सिसिलिन बैक्टीरिया को मारती है। सबसे ज्यादा लिखी जाने वाली एंटीबायोटिक में से एक। सर्दी, फ्लू या वायरस पर काम नहीं करती। पूरा कोर्स जरूर पूरा करें।",
      uses: ["गले का संक्रमण", "कान का संक्रमण", "छाती का संक्रमण", "पेशाब का संक्रमण", "दांत का फोड़ा", "त्वचा का संक्रमण"],
      dosage: {
        children: "25–50 मि.ग्रा. प्रति किलो प्रतिदिन, 2–3 खुराकों में। पूरा कोर्स।",
        adults:   "250–500 मि.ग्रा. दिन में 3 बार (हर 8 घंटे)। गंभीर मामलों में 875 मि.ग्रा. दो बार।",
        elderly:  "250–500 मि.ग्रा. दिन में 3 बार। किडनी कमजोर हो तो कम मात्रा।",
      },
      warnings: [
        "अच्छा लगने पर भी पूरा कोर्स पूरा करें — बीच में बंद करने से एंटीबायोटिक प्रतिरोध बनता है",
        "पेनिसिलिन से एलर्जी हो तो डॉक्टर को बताएं",
        "दस्त हो सकते हैं — दही खाएं",
        "वायरस (सर्दी, फ्लू) पर काम नहीं करती",
      ],
    },

    gu: {
      category: "એન્ટિબાયોટિક — બેક્ટેરિયા",
      description:
        "એમોક્સિસિલિન બેક્ટેરિયા મારે. ઠંડી-ઉધરસ-ફ્લૂ ઉપર નહીં. કોર્સ પૂરો.",
      uses: ["ગળો", "કાન", "છાતી", "પેશાબ", "દાંત ફોડો", "ત્વચા"],
      dosage: {
        children: "25–50 મિ.ગ્રા./કિ. 2–3 ડોઝ. પૂરો.",
        adults:   "500 મિ.ગ્રા. 3 વખત.",
        elderly:  "250–500 મિ.ગ્રા. 3 વખત.",
      },
      warnings: [
        "કોર્સ પૂરો — ઓછો ન",
        "Penicillin એલર્જી ડૉ.ને જણાવો",
        "ઝાડા — દહીં ખાઓ",
        "વાઇરસ ઉપર ન",
      ],
    },
  },

  // ── 8. AZITHROMYCIN ──────────────────────────────────────────────────────
  {
    id: "azithromycin",
    name: "Azithromycin",
    aliases: [
      "azithromycin","azee","azithral","zithromax","z pack",
      "azimax","azicip","azibact","azithrocin","zady",
      "atm","atm 500","trulimax","azilide"
    ],
    brand: "Azee · Azithral · Zithromax · Azicip · Azimax",

    en: {
      category: "Antibiotic — 3 or 5 Day Course",
      description:
        "Azithromycin is a short-course antibiotic (3–5 days). It stays in your body for days after you stop taking it. Commonly used for chest, throat, and skin infections.",
      uses: ["Chest infection", "Throat infection", "Typhoid", "Skin infection", "Sexually transmitted infections", "Ear infection"],
      dosage: {
        children: "10 mg per kg once daily for 3 days. Syrup form available. Doctor must prescribe.",
        adults:   "500 mg once daily for 3 days (or as prescribed). Take on empty stomach or with food. Complete the full short course.",
        elderly:  "500 mg once daily, 3 days. Use with caution in liver disease.",
      },
      warnings: [
        "Complete all 3 (or 5) days even if you feel better on day 1 or 2",
        "Can affect heart rhythm — tell doctor if you have heart disease",
        "Do not take antacids (like aluminum/magnesium) within 2 hours",
        "Avoid if you have liver disease",
      ],
    },

    hi: {
      category: "एंटीबायोटिक — 3 या 5 दिन का कोर्स",
      description:
        "एजिथ्रोमाइसिन एक छोटे कोर्स की एंटीबायोटिक है (3–5 दिन)। बंद करने के बाद भी दिनों तक शरीर में रहती है।",
      uses: ["छाती का संक्रमण", "गले का संक्रमण", "टाइफाइड", "त्वचा संक्रमण", "यौन संचारित रोग", "कान का संक्रमण"],
      dosage: {
        children: "10 मि.ग्रा. प्रति किलो दिन में एक बार, 3 दिन।",
        adults:   "500 मि.ग्रा. दिन में एक बार, 3 दिन।",
        elderly:  "500 मि.ग्रा. एक बार। लीवर की बीमारी में सावधानी।",
      },
      warnings: [
        "3 या 5 दिन का पूरा कोर्स करें",
        "दिल की बीमारी में सावधानी — हृदय ताल प्रभावित हो सकती है",
        "एंटासिड 2 घंटे के अंतर पर लें",
        "लीवर की बीमारी में न लें",
      ],
    },

    gu: {
      category: "3 કે 5 દિવસ",
      description: "ઓછો કોર્સ, 3–5 દિવસ. ગળો, છાતી, ત્વચા.",
      uses: ["છાતી", "ગળો", "ટાઇફોઇડ", "ત્વચા", "STI", "કાન"],
      dosage: {
        children: "10 મિ.ગ્રા./કિ. 1 વખત 3 દિ.",
        adults:   "500 મિ.ગ્રા. 1 વખત 3 દિ.",
        elderly:  "500 મિ.ગ્રા. 1 વખત. લિવ. સાવ.",
      },
      warnings: ["કોર્સ પૂરો", "હૃદય — ડૉ. જણાવ", "એન્ટાસિડ 2 કલાક", "લિવ. ન"],
    },
  },

  // ── 9. CIPROFLOXACIN ─────────────────────────────────────────────────────
  {
    id: "ciprofloxacin",
    name: "Ciprofloxacin",
    aliases: [
      "ciprofloxacin","cipro","ciprolet","ciplox","cifran","cifran od",
      "ciproxin","zoxan","neofloxin","ciprodac","quintor","bactiflox"
    ],
    brand: "Ciplox · Cifran · Ciprolet · Ciprodac · Quintor",

    en: {
      category: "Broad-Spectrum Antibiotic",
      description:
        "Ciprofloxacin is a strong antibiotic used for urinary, stomach, and respiratory infections. It is a broad-spectrum antibiotic — meaning it kills many types of bacteria.",
      uses: ["Urinary tract infection (UTI)", "Typhoid", "Stomach infections", "Bone infection", "Chest infection", "Skin infection"],
      dosage: {
        children: "Not recommended for children — can affect bone and cartilage development. Only if no safer option.",
        adults:   "250–500 mg twice daily (every 12 hours). Take with water. Can take with or without food.",
        elderly:  "250–500 mg twice daily. Reduce dose if kidney function is poor.",
      },
      warnings: [
        "Drink plenty of water while taking this medicine",
        "Avoid sunlight — can make skin very sensitive to sun (use sunscreen)",
        "Can cause tendon damage — stop if you feel pain or swelling near tendons",
        "Not for children — affects cartilage growth",
      ],
    },

    hi: {
      category: "व्यापक-स्पेक्ट्रम एंटीबायोटिक",
      description: "सिप्रोफ्लोक्सासिन मूत्र, पेट और सांस के संक्रमण के लिए मजबूत एंटीबायोटिक।",
      uses: ["मूत्र संक्रमण (UTI)", "टाइफाइड", "पेट का संक्रमण", "हड्डी का संक्रमण", "छाती", "त्वचा"],
      dosage: {
        children: "बच्चों को नहीं — हड्डी विकास प्रभावित।",
        adults:   "250–500 मि.ग्रा. दिन में 2 बार।",
        elderly:  "250–500 मि.ग्रा. 2 बार। किडनी कमजोर हो तो कम।",
      },
      warnings: [
        "खूब पानी पिएं",
        "धूप से बचें — सनस्क्रीन लगाएं",
        "टेंडन में दर्द हो तो बंद करें",
        "बच्चों को न दें",
      ],
    },

    gu: {
      category: "એન્ટિ.-બ્રૉડ",
      description: "UTI, ટાઇફોઇડ, ત્વચા, છાતી.",
      uses: ["UTI", "ટાઇફોઇડ", "પેટ", "હાડ", "છાતી", "ત્વચા"],
      dosage: {
        children: "ન.",
        adults:   "250–500 મિ.ગ્રા. 2 વખત.",
        elderly:  "250–500 મિ.ગ્રા. 2 વખત.",
      },
      warnings: ["ઘણું પાણી", "તડકો ટાળ", "Tendon — બંધ", "બાળ ન"],
    },
  },

  // ── 10. METRONIDAZOLE ────────────────────────────────────────────────────
  {
    id: "metronidazole",
    name: "Metronidazole",
    aliases: [
      "metronidazole","flagyl","metrogyl","metrogyl 400","metro",
      "metrogel","metrocream","aristogyl","aldezole","metron",
      "noritate","rozex","tiniba"
    ],
    brand: "Flagyl · Metrogyl · Aristogyl · Metron",

    en: {
      category: "Antibiotic & Antiparasitic",
      description:
        "Metronidazole kills bacteria AND parasites. It is widely used for stomach/gut infections, dental infections, and certain vaginal infections. Absolutely do not drink alcohol while taking it.",
      uses: ["Stomach infection / diarrhea (amoeba)", "Dental abscess", "Vaginal infection", "Gut infection", "Bacterial vaginosis", "H. pylori (with other medicines)"],
      dosage: {
        children: "7.5 mg per kg every 8 hours. Syrup form available.",
        adults:   "400–500 mg 3 times a day with food for 5–7 days (dose varies by infection).",
        elderly:  "400 mg twice daily with food. Avoid long-term use.",
      },
      warnings: [
        "ABSOLUTELY NO ALCOHOL — causes severe nausea, vomiting and flushing",
        "Can cause metallic taste in mouth — this is normal",
        "Take with food to reduce nausea",
        "Complete the full course",
      ],
    },

    hi: {
      category: "एंटीबायोटिक और परजीवी-नाशक",
      description: "मेट्रोनिडाजोल बैक्टीरिया और परजीवी दोनों को मारती है। पेट के संक्रमण और दांत के फोड़े में उपयोगी। शराब बिल्कुल नहीं।",
      uses: ["पेट संक्रमण/दस्त (अमीबा)", "दांत का फोड़ा", "योनि संक्रमण", "आंत संक्रमण", "H. pylori"],
      dosage: {
        children: "7.5 मि.ग्रा./किलो हर 8 घंटे।",
        adults:   "400–500 मि.ग्रा. दिन में 3 बार खाने के साथ।",
        elderly:  "400 मि.ग्रा. 2 बार खाने के साथ।",
      },
      warnings: [
        "शराब बिल्कुल नहीं — गंभीर उल्टी होगी",
        "मुंह में धातु जैसा स्वाद सामान्य है",
        "खाने के साथ लें",
        "पूरा कोर्स करें",
      ],
    },

    gu: {
      category: "એન્ટ.+પ્રોટો.",
      description: "પેટ, દાંત, યોનિ. શરાબ ક્યારેય ન.",
      uses: ["અમીબા/ઝાડા", "દાંત ફોડો", "યો.ચેપ", "H.pylori"],
      dosage: {
        children: "7.5 મિ.ગ્રા./કિ. 8 ક.",
        adults:   "400–500 મિ.ગ્રા. 3 વ.",
        elderly:  "400 મિ.ગ્રા. 2 વ.",
      },
      warnings: ["શરાબ ક્યારેય ન", "ધાત-સ્વાદ સ.છ", "ખા. સ.", "કોર્સ"],
    },
  },

  // ── 11. OMEPRAZOLE ───────────────────────────────────────────────────────
  {
    id: "omeprazole",
    name: "Omeprazole",
    aliases: [
      "omeprazole","omez","ocid","prilosec","losec","omepraz",
      "ompraz","omecip","omizac","ocid dsr","omez d","omez it",
      "ultop","zolax","antra","romesec"
    ],
    brand: "Omez · Ocid · Ultop · Ompraz · Prilosec",

    en: {
      category: "Acid Reducer (PPI)",
      description:
        "Omeprazole stops your stomach from making too much acid. It belongs to a group called PPIs (Proton Pump Inhibitors). Take it 30 minutes before breakfast for best effect.",
      uses: ["Acidity", "Heartburn", "Stomach ulcer", "GERD (acid reflux)", "H. pylori treatment", "Stomach protection with NSAIDs"],
      dosage: {
        children: "0.7–3 mg per kg once daily. Only on doctor's advice.",
        adults:   "20 mg once daily, 30 minutes before breakfast. For ulcers: 40 mg daily for 4–8 weeks.",
        elderly:  "20 mg once daily before breakfast. Same as adults. No dose adjustment needed.",
      },
      warnings: [
        "Take 30 minutes BEFORE breakfast for best effect",
        "Do not crush or chew — swallow capsule whole",
        "Long-term use can reduce magnesium, calcium and Vitamin B12",
        "See doctor if you have black stools or blood in vomit",
      ],
    },

    hi: {
      category: "एसिड कम करने वाली दवा (PPI)",
      description: "ओमेप्रेज़ोल पेट को बहुत ज्यादा एसिड बनाने से रोकती है। नाश्ते से 30 मिनट पहले लें।",
      uses: ["एसिडिटी", "सीने की जलन", "पेट का अल्सर", "GERD", "H. pylori", "NSAIDs के साथ पेट सुरक्षा"],
      dosage: {
        children: "0.7–3 मि.ग्रा./किलो एक बार। डॉक्टर की सलाह पर।",
        adults:   "20 मि.ग्रा. नाश्ते से 30 मिनट पहले। अल्सर: 40 मि.ग्रा. 4–8 हफ्ते।",
        elderly:  "20 मि.ग्रा. नाश्ते से पहले।",
      },
      warnings: [
        "नाश्ते से 30 मिनट पहले लें",
        "कैप्सूल चबाएं नहीं — पूरा निगलें",
        "लंबे समय तक Mg, Ca, B12 कम हो सकती है",
        "काले दस्त या खून की उल्टी हो तो तुरंत डॉक्टर के पास जाएं",
      ],
    },

    gu: {
      category: "એસિડ ઘટાડ (PPI)",
      description: "પેટ એ. ઘ. 30 મિ. નાસ્તા પહેલા.",
      uses: ["એ.સ.", "GER", "અ.સ.", "H.pyl", "NSAIDs"],
      dosage: {
        children: "ડૉ. સ.",
        adults:   "20 મિ.ગ્ 30 મિ. પ. .",
        elderly:  "20 મિ.ગ્.",
      },
      warnings: ["30 મ. પ.", "ગળ. .", "Mg/B12", "ક. ઉ.→ ડૉ."],
    },
  },

  // ── 12. PANTOPRAZOLE ─────────────────────────────────────────────────────
  {
    id: "pantoprazole",
    name: "Pantoprazole",
    aliases: [
      "pantoprazole","pan","pan 40","pantop","pantop d","pan d",
      "pantin","pantium","protonix","pan dsr","pantozol","nupenta",
      "pantosec","pepzol","lupipan","panto","pantoloc"
    ],
    brand: "Pan-40 · Pan-D · Pantop · Protonix · Nupenta",

    en: {
      category: "Acid Reducer (PPI)",
      description:
        "Pantoprazole reduces stomach acid production. It is similar to Omeprazole and very widely used in India. Pan-D combines Pantoprazole with Domperidone (for gas and bloating).",
      uses: ["Acidity", "Heartburn", "Stomach ulcer", "GERD", "Bloating (Pan-D)", "Gastritis"],
      dosage: {
        children: "Only on doctor's advice.",
        adults:   "40 mg once daily, 30–60 minutes before breakfast. Pan-D: 40mg+10mg once daily before meal.",
        elderly:  "40 mg once daily before breakfast.",
      },
      warnings: [
        "Take 30–60 minutes before breakfast",
        "Do not break or chew tablets",
        "Long-term use may reduce bone density",
        "Tell doctor if symptoms do not improve in 4 weeks",
      ],
    },

    hi: {
      category: "एसिड कम करने वाली (PPI)",
      description: "पैंटोप्राजोल पेट का एसिड घटाती है। Pan-D में डोम्पेरिडोन भी होता है।",
      uses: ["एसिडिटी", "जलन", "अल्सर", "GERD", "गैस (Pan-D)", "गेस्ट्राइटिस"],
      dosage: {
        children: "डॉक्टर की सलाह।",
        adults:   "40 मि.ग्रा. नाश्ते से 30–60 मिनट पहले।",
        elderly:  "40 मि.ग्रा. नाश्ते से पहले।",
      },
      warnings: [
        "नाश्ते से 30–60 मिनट पहले",
        "गोली चबाएं नहीं",
        "हड्डी घनत्व कम हो सकता है",
        "4 हफ्ते में ठीक न हो तो डॉक्टर से मिलें",
      ],
    },

    gu: {
      category: "એ. ઘ. PPI",
      description: "Pan-D = Pantoprazole+Domperidone.",
      uses: ["એ.સ.", "ગૅ.", "અ.સ.", "GERD", "ગ(Pan-D)"],
      dosage: {
        children: "ડૉ.",
        adults:   "40 મિ. 30–60 .",
        elderly:  "40 .",
      },
      warnings: ["30–60 .", "ચ. .", "Bone", "4 w"],
    },
  },

  // ── 13. DOMPERIDONE ──────────────────────────────────────────────────────
  {
    id: "domperidone",
    name: "Domperidone",
    aliases: [
      "domperidone","domstal","motilium","vomistop","dom","domluk",
      "vomilux","perinorm","metoclopramide","reglan","emeset",
      "nausicalm","domperi","vomidom"
    ],
    brand: "Domstal · Vomistop · Motilium · Pan-D (with Pantoprazole)",

    en: {
      category: "Anti-Nausea & Stomach Motility",
      description:
        "Domperidone stops nausea and vomiting. It also helps food move through your stomach faster. Commonly given for vomiting, feeling full quickly, and nausea after eating.",
      uses: ["Nausea", "Vomiting", "Bloating", "Feeling full too quickly", "Acid reflux symptoms", "Slow stomach emptying"],
      dosage: {
        children: "0.25 mg per kg 3 times a day before meals. Syrup available.",
        adults:   "10 mg 3 times a day, 15–30 minutes before meals. Maximum 30 mg per day.",
        elderly:  "10 mg 2–3 times daily before meals. Use minimum effective dose.",
      },
      warnings: [
        "Do not exceed recommended dose — can affect heart rhythm",
        "Not for long-term use — use for shortest time needed",
        "Tell doctor if you have heart disease",
        "Take before meals for best effect",
      ],
    },

    hi: {
      category: "उल्टी रोकना और पाचन",
      description: "डोम्पेरिडोन उल्टी और मतली रोकती है। खाना जल्दी पेट से आगे जाने में मदद करती है।",
      uses: ["मतली", "उल्टी", "पेट फूलना", "जल्दी पेट भरना", "एसिड रिफ्लक्स", "धीमा पाचन"],
      dosage: {
        children: "0.25 मि.ग्रा./किलो, दिन में 3 बार खाने से पहले।",
        adults:   "10 मि.ग्रा. दिन में 3 बार, खाने से 15–30 मिनट पहले।",
        elderly:  "10 मि.ग्रा. 2–3 बार खाने से पहले।",
      },
      warnings: [
        "ज्यादा न लें — हृदय ताल प्रभावित",
        "लंबे समय के लिए नहीं",
        "दिल की बीमारी हो तो डॉक्टर को बताएं",
        "खाने से पहले लें",
      ],
    },

    gu: {
      category: "ઊ.રો.+પ.",
      description: "ઊ., મ. ર. ખ.પ.",
      uses: ["મ.", "ઊ.", "ગ.", "ભ.", "ઘ.પ."],
      dosage: {
        children: "0.25 ./. 3.",
        adults:   "10 . 3. .",
        elderly:  "10 . 2–3.",
      },
      warnings: ["વ. .", "લ. .", "હ. .", "ખ.પ."],
    },
  },

  // ── 14. ONDANSETRON ──────────────────────────────────────────────────────
  {
    id: "ondansetron",
    name: "Ondansetron",
    aliases: [
      "ondansetron","emeset","ondem","zofran","vomifree","emistat",
      "emesis","ems","ondansetron 4mg","ondansetron 8mg","perinorm"
    ],
    brand: "Emeset · Ondem · Zofran · Vomifree",

    en: {
      category: "Anti-Vomiting (Serotonin Blocker)",
      description:
        "Ondansetron is a powerful anti-vomiting medicine. It is often used after surgery, chemotherapy, or for severe vomiting in pregnancy (morning sickness). Works differently from domperidone.",
      uses: ["Severe vomiting", "Post-surgery nausea", "Chemotherapy nausea", "Severe pregnancy vomiting", "Gastroenteritis vomiting"],
      dosage: {
        children: "0.1 mg per kg, 3 times a day. Doctor must prescribe.",
        adults:   "4–8 mg 2–3 times a day. Dissolving tablet (MD) can be placed under the tongue.",
        elderly:  "4 mg 2–3 times daily. No dose adjustment needed but use minimum dose.",
      },
      warnings: [
        "Can cause headache and constipation",
        "Do not use regularly without doctor's advice",
        "Tell doctor if you have heart rhythm problems",
        "MD tablet: place under tongue, let it dissolve — do not swallow whole",
      ],
    },

    hi: {
      category: "उल्टी-रोधी (शक्तिशाली)",
      description: "ओंडानसेट्रॉन तेज उल्टी रोकने की दवा है। ऑपरेशन के बाद, कीमोथेरेपी में उपयोगी।",
      uses: ["तेज उल्टी", "ऑपरेशन के बाद मतली", "कीमोथेरेपी", "गर्भावस्था में उल्टी", "गेस्ट्रोएंटेराइटिस"],
      dosage: {
        children: "0.1 मि.ग्रा./किलो 3 बार।",
        adults:   "4–8 मि.ग्रा. 2–3 बार। MD गोली जीभ के नीचे।",
        elderly:  "4 मि.ग्रा. 2–3 बार।",
      },
      warnings: [
        "सिरदर्द और कब्ज हो सकती है",
        "डॉक्टर की सलाह बिना नियमित न लें",
        "दिल की ताल की समस्या हो तो बताएं",
        "MD गोली जीभ के नीचे घुलने दें",
      ],
    },

    gu: {
      category: "ઊ.રો.શ.",
      description: "ઊ.ઓ.ઍ.",
      uses: ["ઊ.", "ઓ.પ.", "ક.", "ગ.ઉ.", "G.E."],
      dosage: {
        children: "0.1 ./. 3.",
        adults:   "4–8 . 2–3.",
        elderly:  "4 . 2–3.",
      },
      warnings: ["M.Hn.K.", "R.", "Hr.", "MD ↓"],
    },
  },

  // ── 15. METFORMIN ────────────────────────────────────────────────────────
  {
    id: "metformin",
    name: "Metformin",
    aliases: [
      "metformin","glucophage","glycomet","gluformin","fortamet",
      "glycomet gp","glycomet sr","glycomet trio","glucomet",
      "obimet","obimet sr","bigomet","metlong","rezulin","diabex"
    ],
    brand: "Glycomet · Glucophage · Obimet · Gluformin · Bigomet",

    en: {
      category: "Diabetes — Blood Sugar Control",
      description:
        "Metformin is the first-choice medicine for Type 2 diabetes. It helps your body use insulin better and reduces sugar released by your liver. Always take with food.",
      uses: ["Type 2 diabetes", "Pre-diabetes", "PCOS (hormonal imbalance in women)", "Insulin resistance"],
      dosage: {
        children: "For children over 10 years: 500 mg twice daily with meals. Doctor must prescribe.",
        adults:   "Start with 500 mg twice daily with meals. Can be increased to 2000 mg/day. Do not change dose without doctor's advice.",
        elderly:  "500 mg once or twice daily with food. Monitor kidney function regularly.",
      },
      warnings: [
        "Take with food — never on empty stomach (causes nausea)",
        "Stop before surgery, CT scan with dye, or MRI with contrast — ask your doctor",
        "Avoid alcohol — risk of lactic acidosis",
        "Kidney failure — do not take without doctor's advice",
      ],
    },

    hi: {
      category: "डायबिटीज — ब्लड शुगर",
      description: "मेटफॉर्मिन टाइप 2 डायबिटीज के लिए पहली पसंद की दवा है। इंसुलिन को बेहतर काम करने में मदद करती है। हमेशा खाने के साथ।",
      uses: ["टाइप 2 डायबिटीज", "प्री-डायबिटीज", "पीसीओएस", "इंसुलिन प्रतिरोध"],
      dosage: {
        children: "10 साल से ऊपर: 500 मि.ग्रा. 2 बार खाने के साथ।",
        adults:   "शुरुआत 500 मि.ग्रा. 2 बार। अधिकतम 2000 मि.ग्रा.।",
        elderly:  "500 मि.ग्रा. 1–2 बार। किडनी जांच नियमित।",
      },
      warnings: [
        "खाने के साथ — खाली पेट मतली होगी",
        "ऑपरेशन या कंट्रास्ट स्कैन से पहले बंद करें",
        "शराब न पिएं — लैक्टिक एसिडोसिस का खतरा",
        "किडनी फेल्योर में न लें",
      ],
    },

    gu: {
      category: "ડા. — B.S.",
      description: "T2D. ઇ. સ. (%ખ. સ.)",
      uses: ["T2D", "Pre-D", "PCOS", "IR"],
      dosage: {
        children: "10+ : 500 . 2.",
        adults:   "500 . 2. → 2000.",
        elderly:  "500 . 1–2. Kid.",
      },
      warnings: ["ખ. સ.", "ઓ/Scan → બ.", "શ. .", "Kid. F. ×"],
    },
  },

  // ── 16. GLIMEPIRIDE ──────────────────────────────────────────────────────
  {
    id: "glimepiride",
    name: "Glimepiride",
    aliases: [
      "glimepiride","amaryl","glimpid","glimisave","glimy","glimer",
      "glycomet gp1","glycomet gp2","glycomet gp3","glimiprex",
      "glimtide","glimperide","glimpiride","triglimax"
    ],
    brand: "Amaryl · Glimpid · Glimisave · Glycomet-GP · Glimy",

    en: {
      category: "Diabetes — Insulin Stimulator",
      description:
        "Glimepiride helps your pancreas release more insulin to control blood sugar. Often combined with Metformin. Must eat after taking — skipping meals can cause dangerous low blood sugar (hypoglycemia).",
      uses: ["Type 2 diabetes (when Metformin alone is not enough)"],
      dosage: {
        children: "Not for children.",
        adults:   "1–4 mg once daily with first meal of the day. Start with 1 mg. Increase only on doctor's advice.",
        elderly:  "0.5–1 mg daily with first meal. Low blood sugar risk is high — monitor carefully.",
      },
      warnings: [
        "Always eat after taking — skipping food causes dangerously low blood sugar",
        "Symptoms of low sugar: sweating, shaking, confusion — immediately take sugar/juice",
        "Avoid alcohol — worsens hypoglycemia",
        "Carry sugar/glucose tablets with you at all times",
      ],
    },

    hi: {
      category: "डायबिटीज — इंसुलिन उत्तेजक",
      description: "ग्लिमेपिराइड अग्नाशय से इंसुलिन निकलवाती है। अक्सर मेटफॉर्मिन के साथ। खाना छोड़ने पर खतरनाक हाइपोग्लाइसीमिया।",
      uses: ["टाइप 2 डायबिटीज"],
      dosage: {
        children: "बच्चों को नहीं।",
        adults:   "1–4 मि.ग्रा. पहले खाने के साथ।",
        elderly:  "0.5–1 मि.ग्रा. पहले खाने के साथ। कम शुगर का खतरा।",
      },
      warnings: [
        "लेने के बाद खाना जरूर खाएं",
        "कम शुगर: पसीना, कंपन, भ्रम — तुरंत चीनी/जूस",
        "शराब न पिएं",
        "हमेशा चीनी या ग्लूकोज की गोली साथ रखें",
      ],
    },

    gu: {
      category: "ડ. ઇ. ઉ.",
      description: "G. ઇ. ↑ → B.S. ↓. ભ. .",
      uses: ["T2D"],
      dosage: {
        children: "ન.",
        adults:   "1–4 . ભ. સ.",
        elderly:  "0.5–1 . ભ. ↓",
      },
    },
  },

  // ── 17. AMLODIPINE ───────────────────────────────────────────────────────
  {
    id: "amlodipine",
    name: "Amlodipine",
    aliases: [
      "amlodipine","amlip","amlong","amlovas","norvasc","stamlo",
      "amlopress","amlodac","amlodil","amlokind","cardiopril",
      "amcard","calchek","amloz","apresoline"
    ],
    brand: "Amlip · Amlong · Norvasc · Stamlo · Amlovas · Amlokind",

    en: {
      category: "Blood Pressure & Heart (Calcium Channel Blocker)",
      description:
        "Amlodipine relaxes your blood vessels so blood flows more easily, lowering blood pressure and reducing the heart's workload. Also used for chest pain (angina).",
      uses: ["High blood pressure", "Angina (chest pain)", "Heart disease prevention", "Coronary artery disease"],
      dosage: {
        children: "2.5–5 mg once daily. Only on specialist advice.",
        adults:   "5 mg once daily. Can be increased to 10 mg once daily. Take at the same time each day.",
        elderly:  "Start with 2.5 mg once daily. Increase slowly.",
      },
      warnings: [
        "Do not stop suddenly — can cause blood pressure to spike",
        "Ankle swelling is a common side effect — tell your doctor",
        "Avoid grapefruit juice — interferes with the medicine",
        "Take at the same time every day",
      ],
    },

    hi: {
      category: "ब्लड प्रेशर और दिल (CCB)",
      description: "अम्लोडिपीन रक्त वाहिकाओं को शिथिल करती है जिससे रक्तचाप कम होता है। सीने के दर्द में भी उपयोगी।",
      uses: ["हाई ब्लड प्रेशर", "एन्जाइना", "दिल की बीमारी", "कोरोनरी आर्टरी"],
      dosage: {
        children: "2.5–5 मि.ग्रा. एक बार।",
        adults:   "5 मि.ग्रा. एक बार। अधिकतम 10 मि.ग्रा.।",
        elderly:  "2.5 मि.ग्रा. से शुरू।",
      },
      warnings: [
        "अचानक बंद न करें — BP बढ़ सकता है",
        "टखने में सूजन सामान्य — डॉक्टर को बताएं",
        "अंगूर का रस पीने से बचें",
        "रोज एक ही समय पर लें",
      ],
    },

    gu: {
      category: "BP+ह. CCB",
      description: "BV.↓→BP↓. Angina.",
      uses: ["Hi BP", "Angina", "HD", "CAD"],
      dosage: {
        children: "2.5–5 . 1.",
        adults:   "5 . 1. → 10.",
        elderly:  "2.5 . ↑..",
      },
      warnings: ["ા.બ. ×", "Ankle Swell →Dr", "Gr.J. ×", "=Time"],
    },
  },

  // ── 18. ATENOLOL ─────────────────────────────────────────────────────────
  {
    id: "atenolol",
    name: "Atenolol",
    aliases: [
      "atenolol","tenormin","aten","atenorm","betacard","betaloc","tenolol",
      "atenol","atenex","b-atenol","atecard","atehexal"
    ],
    brand: "Tenormin · Aten · Atenorm · Betacard · Tenolol",

    en: {
      category: "Blood Pressure & Heart (Beta-Blocker)",
      description:
        "Atenolol slows the heart rate and lowers blood pressure. It reduces the heart's oxygen demand and protects the heart after a heart attack.",
      uses: ["High blood pressure", "Angina", "Heart rate control", "After heart attack", "Anxiety (heart pounding)"],
      dosage: {
        children: "1 mg per kg once daily. Specialist only.",
        adults:   "25–100 mg once daily. Usually 50 mg to start.",
        elderly:  "25–50 mg once daily. Monitor heart rate.",
      },
      warnings: [
        "NEVER stop suddenly — can trigger severe heart problems or heart attack",
        "Can cause fatigue and cold hands/feet — this is normal",
        "Diabetic patients: may mask signs of low blood sugar",
        "Do not take if you have asthma",
      ],
    },

    hi: {
      category: "ब्लड प्रेशर (बीटा-ब्लॉकर)",
      description: "एटेनोलोल हृदय गति धीमी करती है और रक्तचाप घटाती है।",
      uses: ["हाई BP", "एन्जाइना", "हृदय गति नियंत्रण", "हार्ट अटैक के बाद", "घबराहट"],
      dosage: {
        children: "1 मि.ग्रा./किलो एक बार।",
        adults:   "25–100 मि.ग्रा. एक बार।",
        elderly:  "25–50 मि.ग्रा. एक बार।",
      },
      warnings: [
        "कभी अचानक बंद न करें — हार्ट अटैक का खतरा",
        "थकान और ठंडे हाथ-पैर सामान्य",
        "डायबिटीज में: कम शुगर के लक्षण छुपा सकती है",
        "दमे (अस्थमा) में न लें",
      ],
    },

    gu: {
      category: "BP β-Block.",
      description: "HR ↓ BP ↓.",
      uses: ["Hi BP", "Ang.", "HR ctrl", "Post-MI", "Anx."],
      dosage: {
        children: "1 ./. 1.",
        adults:   "25–100 . 1.",
        elderly:  "25–50 . 1.",
      },
      warnings: ["ા. × (MI)", "Fatigue/Cold X-Y Nml", "DM: ↓S mask", "Asthma ×"],
    },
  },

  // ── 19. TELMISARTAN ──────────────────────────────────────────────────────
  {
    id: "telmisartan",
    name: "Telmisartan",
    aliases: [
      "telmisartan","telma","telmikind","telmibid","telsar","telsartan",
      "micardis","telmichek","telheal","telmichek h","arbitel","cresar"
    ],
    brand: "Telma · Telmikind · Micardis · Telsartan · Cresar",

    en: {
      category: "Blood Pressure (ARB)",
      description:
        "Telmisartan blocks a hormone (angiotensin) that narrows blood vessels, so they stay relaxed and blood pressure stays lower. Also protects kidneys in diabetics.",
      uses: ["High blood pressure", "Kidney protection in diabetics", "Heart failure", "Stroke prevention"],
      dosage: {
        children: "Not generally used in children.",
        adults:   "40–80 mg once daily. Can be taken with or without food.",
        elderly:  "20–40 mg once daily. Monitor kidney function.",
      },
      warnings: [
        "Do not take if pregnant — can harm the baby",
        "Avoid potassium supplements without doctor's advice",
        "Can cause dizziness when standing up quickly",
        "Monitor kidney and blood potassium levels",
      ],
    },

    hi: {
      category: "ब्लड प्रेशर (ARB)",
      description: "टेल्मिसार्टन एंजियोटेंसिन हार्मोन को रोककर रक्त वाहिकाओं को खुला रखती है।",
      uses: ["हाई BP", "डायबिटीज में किडनी सुरक्षा", "हार्ट फेल्योर", "स्ट्रोक बचाव"],
      dosage: {
        children: "बच्चों में सामान्यतः नहीं।",
        adults:   "40–80 मि.ग्रा. एक बार।",
        elderly:  "20–40 मि.ग्रा. एक बार।",
      },
      warnings: [
        "गर्भावस्था में न लें — बच्चे को नुकसान",
        "पोटेशियम सप्लीमेंट डॉक्टर से पूछकर",
        "उठने पर चक्कर आ सकते हैं",
        "किडनी और पोटेशियम स्तर नियमित जांच",
      ],
    },

    gu: {
      category: "BP ARB",
      description: "Ang. ↓ → BV ↑ → BP ↓.",
      uses: ["Hi BP", "DM Kid.", "HF", "Str."],
      dosage: {
        children: "ȸ.",
        adults:   "40–80 . 1.",
        elderly:  "20–40 . 1.",
      },
      warnings: ["Preg. ×", "K+ Dr.", "Dizz. ↑", "Kid.+K"],
    },
  },

  // ── 20. CETIRIZINE ───────────────────────────────────────────────────────
  {
    id: "cetirizine",
    name: "Cetirizine",
    aliases: [
      "cetirizine","cetirizine 10mg","zyrtec","cetzine","ctriz","ceti",
      "alerid","okacet","allercet","zyncet","cetrine","rcet",
      "aladay","atarax","histafree"
    ],
    brand: "Zyrtec · Cetzine · Okacet · Alerid · Ctriz · Allercet",

    en: {
      category: "Antihistamine — Allergy Relief",
      description:
        "Cetirizine blocks histamine, the chemical your body releases during an allergic reaction. Less drowsy than older antihistamines. Very commonly used for running nose, itching, and allergic skin rashes.",
      uses: ["Runny nose (allergic)", "Sneezing", "Skin rash / hives / itching", "Hay fever", "Dust allergy", "Pet allergy", "Eye itching"],
      dosage: {
        children: "Age 2–6: 2.5 mg once daily. Age 6–12: 5 mg once daily. Above 12: 10 mg once daily.",
        adults:   "10 mg once daily. Can take at night as may cause mild drowsiness.",
        elderly:  "5 mg once daily to start. May cause more drowsiness — take at bedtime.",
      },
      warnings: [
        "May cause mild drowsiness — avoid driving or operating machines if affected",
        "Safe for long-term use in allergic rhinitis",
        "Avoid alcohol — increases drowsiness",
        "Take at bedtime to manage daytime sleepiness",
      ],
    },

    hi: {
      category: "एलर्जी रोधी (एंटीहिस्टामिन)",
      description: "सिटिरिजिन एलर्जी की प्रतिक्रिया में बनने वाले हिस्टामिन को रोकती है। पुरानी दवाओं से कम नींद आती है।",
      uses: ["नाक बहना (एलर्जी)", "छींक", "त्वचा पर दाने/पित्ती/खुजली", "हे फीवर", "धूल एलर्जी", "आंखों में खुजली"],
      dosage: {
        children: "2–6 साल: 2.5 मि.ग्रा. एक बार। 6–12: 5 मि.ग्रा.। 12+: 10 मि.ग्रा.।",
        adults:   "10 मि.ग्रा. एक बार। रात को लेना बेहतर।",
        elderly:  "5 मि.ग्रा. शुरू में। सोने से पहले लें।",
      },
      warnings: [
        "हल्की नींद आ सकती है — गाड़ी चलाते समय सावधान",
        "लंबे समय तक उपयोग सुरक्षित",
        "शराब न पिएं — नींद बढ़ती है",
        "रात को लेने से दिन में नींद कम",
      ],
    },

    gu: {
      category: "Allergy — Anti-H",
      description: "H1 ↓ → Allergy Relief. ↓ Drowsy.",
      uses: ["Runny N.", "Sneezing", "Rash/Hives", "Hay F.", "Dust", "Pet", "Eye itch"],
      dosage: {
        children: "2–6: 2.5. 6–12: 5. 12+: 10.",
        adults:   "10 . 1. Night.",
        elderly:  "5 . Night.",
      },
      warnings: ["↓ Drowsy → ×Drive", "Long-term OK", "Alc. ×", "Night→Day↓"],
    },
  },

  // ── 21. MONTELUKAST ──────────────────────────────────────────────────────
  {
    id: "montelukast",
    name: "Montelukast",
    aliases: [
      "montelukast","singulair","montair","montek","montair lc",
      "montek lc","telekast","telekast l","tiova","montair fx",
      "lumibax","romilast"
    ],
    brand: "Singulair · Montair · Montek · Montair-LC (with Levocetirizine)",

    en: {
      category: "Asthma & Allergy Prevention",
      description:
        "Montelukast prevents asthma attacks and allergic symptoms by blocking leukotrienes — chemicals that cause airway swelling. Taken daily to prevent symptoms, not to relieve a sudden attack.",
      uses: ["Asthma prevention", "Allergic rhinitis", "Exercise-induced asthma", "Chronic allergic runny nose"],
      dosage: {
        children: "Age 2–5: 4 mg granules/chew tablet at bedtime. Age 6–14: 5 mg chew tablet at bedtime.",
        adults:   "10 mg once daily at bedtime.",
        elderly:  "10 mg once daily at bedtime. No dose adjustment.",
      },
      warnings: [
        "Take every day — this is a prevention medicine, not for immediate relief",
        "May cause mood changes, vivid dreams, or anxiety in some people — tell your doctor",
        "Do not use during a sudden asthma attack — use salbutamol inhaler",
        "Continue even when you feel well",
      ],
    },

    hi: {
      category: "अस्थमा और एलर्जी रोकथाम",
      description: "मॉन्टेलुकास्ट ल्यूकोट्रिएन्स को रोककर अस्थमा और एलर्जी से बचाती है। रोज रात को लें।",
      uses: ["अस्थमा रोकथाम", "एलर्जिक राइनाइटिस", "व्यायाम से अस्थमा", "पुरानी एलर्जी"],
      dosage: {
        children: "2–5 साल: 4 मि.ग्रा. रात को। 6–14: 5 मि.ग्रा.।",
        adults:   "10 मि.ग्रा. रात को।",
        elderly:  "10 मि.ग्रा. रात को।",
      },
      warnings: [
        "रोज लें — यह बचाव की दवा है, तुरंत राहत की नहीं",
        "मूड बदलाव या सपने आ सकते हैं — डॉक्टर को बताएं",
        "तेज अस्थमा अटैक में यह काम नहीं करती — सालबुटामोल इनहेलर लें",
        "ठीक लगने पर भी जारी रखें",
      ],
    },

    gu: {
      category: "Asthma+Allergy Prev.",
      description: "Leukotriene ↓ → Airway ↑. Prevention only.",
      uses: ["Asth. Prev.", "All. Rhin.", "Exercise Asth.", "Chronic Allergy"],
      dosage: {
        children: "2–5: 4(gr). 6–14: 5(chew). Night.",
        adults:   "10 . Night.",
        elderly:  "10 . Night.",
      },
      warnings: ["Daily — Prev.", "Mood chg. → Dr.", "Attack → Salbutamol", "Continue"],
    },
  },

  // ── 22. SALBUTAMOL ───────────────────────────────────────────────────────
  {
    id: "salbutamol",
    name: "Salbutamol",
    aliases: [
      "salbutamol","albuterol","ventolin","asthalin","levolin","salbu",
      "asthalin inhaler","ventolin inhaler","salbutamol inhaler",
      "salbetol","proventil","aerocort","brovana"
    ],
    brand: "Asthalin · Ventolin · Levolin · Asthalin HFA",

    en: {
      category: "Asthma Inhaler — Quick Relief",
      description:
        "Salbutamol (Albuterol) quickly opens up the airways within minutes. It is the rescue inhaler used during an asthma attack or sudden breathlessness. Always carry it with you.",
      uses: ["Asthma attack (rescue)", "Sudden breathlessness", "COPD", "Wheezing", "Exercise-induced asthma"],
      dosage: {
        children: "1–2 puffs (100 mcg each) as needed. Use a spacer device for children under 5.",
        adults:   "1–2 puffs when needed. Maximum 4 puffs at a time. If needing more than 3–4 times a day — see your doctor.",
        elderly:  "1–2 puffs as needed. Same as adults.",
      },
      warnings: [
        "This is a RESCUE inhaler — not for daily prevention",
        "If you need it more than 3 times a week, your asthma is not well controlled — see doctor",
        "Can cause fast heartbeat and trembling — this passes quickly",
        "Always carry it with you",
      ],
    },

    hi: {
      category: "अस्थमा इनहेलर — त्वरित राहत",
      description: "सालबुटामोल कुछ मिनटों में वायुमार्ग खोलती है। अस्थमा अटैक में यह बचाव की दवा है। हमेशा साथ रखें।",
      uses: ["अस्थमा अटैक", "अचानक सांस फूलना", "COPD", "घर-घराहट"],
      dosage: {
        children: "1–2 पफ जरूरत पर। 5 साल से कम: स्पेसर का उपयोग।",
        adults:   "1–2 पफ जरूरत पर। एक बार में अधिकतम 4 पफ।",
        elderly:  "1–2 पफ जरूरत पर।",
      },
      warnings: [
        "यह बचाव की दवा है — रोज नहीं",
        "हफ्ते में 3 बार से ज्यादा लें तो डॉक्टर से मिलें",
        "दिल की धड़कन तेज और हाथ हिल सकते हैं — जल्दी ठीक होता है",
        "हमेशा साथ रखें",
      ],
    },

    gu: {
      category: "Asthma Rescue",
      description: "Airway ↑ < 5 min. Rescue only.",
      uses: ["Attack", "Breathless", "COPD", "Wheeze"],
      dosage: {
        children: "1–2 puff. <5 yr: Spacer.",
        adults:   "1–2 puff. Max 4.",
        elderly:  "1–2 puff.",
      },
      warnings: ["Rescue-not-daily", ">3/wk → Dr.", "HR↑ Tremble (temp)", "Always carry"],
    },
  },

  // ── 23. ATORVASTATIN ─────────────────────────────────────────────────────
  {
    id: "atorvastatin",
    name: "Atorvastatin",
    aliases: [
      "atorvastatin","lipitor","storvas","atorva","atorlip","aztor",
      "atorva 10","atorva 20","atorva 40","lipicure","lipvas",
      "tonact","rospure","atocor","novastat"
    ],
    brand: "Lipitor · Storvas · Atorva · Atorlip · Lipicure · Tonact",

    en: {
      category: "Cholesterol-Lowering (Statin)",
      description:
        "Atorvastatin lowers bad cholesterol (LDL) and triglycerides in your blood. It helps prevent heart attacks and strokes. Usually taken at night as cholesterol is made mainly at night.",
      uses: ["High cholesterol", "Heart disease prevention", "After heart attack", "Stroke prevention", "Triglycerides"],
      dosage: {
        children: "Only for familial high cholesterol above age 10. Specialist only.",
        adults:   "10–80 mg once daily at night. Dose set by doctor based on cholesterol level.",
        elderly:  "10–40 mg once daily at night. Start low, monitor liver.",
      },
      warnings: [
        "Take at night for best effect",
        "Stop and see doctor immediately if you have severe muscle pain or weakness — rare but serious",
        "Avoid grapefruit juice",
        "Do not stop without doctor's advice — protects your heart long term",
      ],
    },

    hi: {
      category: "कोलेस्ट्रॉल कम करना (स्टैटिन)",
      description: "एटोरवास्टेटिन खराब कोलेस्ट्रॉल (LDL) कम करती है। दिल के दौरे से बचाती है। रात को लेना बेहतर।",
      uses: ["ज्यादा कोलेस्ट्रॉल", "दिल की बीमारी बचाव", "हार्ट अटैक के बाद", "स्ट्रोक", "ट्राइग्लिसराइड"],
      dosage: {
        children: "10 साल ऊपर, खानदानी हाई कोलेस्ट्रॉल में।",
        adults:   "10–80 मि.ग्रा. रात को।",
        elderly:  "10–40 मि.ग्रा. रात को।",
      },
      warnings: [
        "रात को लें",
        "तेज मांसपेशी दर्द हो तो तुरंत डॉक्टर के पास जाएं",
        "अंगूर का रस न पिएं",
        "डॉक्टर की सलाह बिना बंद न करें",
      ],
    },

    gu: {
      category: "Cholesterol ↓ (Statin)",
      description: "LDL ↓. Heart protection. Night.",
      uses: ["Hi Chol", "Heart Prev", "Post-MI", "Stroke", "TG"],
      dosage: {
        children: "10+  FH. Sp.",
        adults:   "10–80 . Night.",
        elderly:  "10–40 . Night.",
      },
      warnings: ["Night", "Muscle pain → Dr. ASAP", "Gr.J. ×", "× Stop"],
    },
  },

  // ── 24. LEVOTHYROXINE ────────────────────────────────────────────────────
  {
    id: "levothyroxine",
    name: "Levothyroxine",
    aliases: [
      "levothyroxine","thyronorm","thyrox","synthroid","eltroxin",
      "thyrofit","euthyrox","levo","levothroid","unithroid",
      "thyronorm 25","thyronorm 50","thyronorm 75","thyronorm 100"
    ],
    brand: "Thyronorm · Thyrox · Synthroid · Eltroxin · Thyrofit",

    en: {
      category: "Thyroid Hormone Replacement",
      description:
        "Levothyroxine replaces or supplements the thyroid hormone when your thyroid gland does not produce enough (hypothyroidism). Must be taken on an empty stomach, 30–60 minutes before breakfast.",
      uses: ["Hypothyroidism (underactive thyroid)", "After thyroid surgery", "Thyroid cancer treatment", "Goitre (enlarged thyroid)"],
      dosage: {
        children: "Dose calculated by weight and age — specialist only.",
        adults:   "25–200 mcg once daily on empty stomach, 30–60 min before breakfast. Dose set by thyroid hormone levels.",
        elderly:  "Start low (25–50 mcg) and increase slowly.",
      },
      warnings: [
        "Take on EMPTY STOMACH 30–60 minutes before breakfast — food reduces absorption",
        "Do not take with antacids, calcium, or iron within 4 hours",
        "Never miss a dose — thyroid levels will drop",
        "Regular blood test (TSH) needed every 3–6 months",
      ],
    },

    hi: {
      category: "थायराइड हार्मोन",
      description: "लेवोथायरोक्सिन थायराइड ग्रंथि की कमी पूरी करती है। खाली पेट, नाश्ते से 30–60 मिनट पहले।",
      uses: ["हाइपोथायरायडिज्म", "थायराइड ऑपरेशन के बाद", "थायराइड कैंसर", "घेंघा"],
      dosage: {
        children: "वजन और उम्र के अनुसार — विशेषज्ञ।",
        adults:   "25–200 mcg खाली पेट, नाश्ते से 30–60 मिनट पहले।",
        elderly:  "25–50 mcg से शुरू।",
      },
      warnings: [
        "खाली पेट, नाश्ते से 30–60 मिनट पहले",
        "एंटासिड, कैल्शियम, आयरन 4 घंटे के अंतर पर",
        "खुराक कभी न छोड़ें",
        "हर 3–6 महीने TSH जांच जरूरी",
      ],
    },

    gu: {
      category: "Thyroid Hormone",
      description: "Hypothyroidism. Empty stomach 30–60 before breakfast.",
      uses: ["Hypo-T", "Post op", "Ca-T", "Goitre"],
      dosage: {
        children: "Sp. only.",
        adults:   "25–200 mcg E.Stom. 30–60 min.",
        elderly:  "25–50 mcg ↑slow.",
      },
      warnings: ["E.Stom 30–60", "Antacid/Ca/Fe 4hr", "Never miss", "TSH 3–6m"],
    },
  },

  // ── 25. PREDNISOLONE ─────────────────────────────────────────────────────
  {
    id: "prednisolone",
    name: "Prednisolone",
    aliases: [
      "prednisolone","omnacortil","wysolone","predone","deltacortril",
      "prelone","pred forte","prednisone","depo medrol","medrol",
      "methylprednisolone","hostacortin"
    ],
    brand: "Omnacortil · Wysolone · Prelone · Pred Forte · Medrol",

    en: {
      category: "Steroid — Anti-Inflammatory",
      description:
        "Prednisolone is a corticosteroid (steroid) that powerfully reduces inflammation and suppresses the immune system. Used for many conditions but must be taken exactly as prescribed — never stop suddenly.",
      uses: ["Severe asthma", "Allergic reactions", "Autoimmune diseases", "Joint inflammation", "Eye inflammation", "Skin conditions (pemphigus)"],
      dosage: {
        children: "As prescribed by doctor — dose varies by condition.",
        adults:   "5–60 mg daily depending on condition. Always follow exact prescription. With food to reduce stomach irritation.",
        elderly:  "Lowest effective dose. High risk of osteoporosis, diabetes, and blood pressure.",
      },
      warnings: [
        "NEVER stop suddenly after long use — taper dose slowly as directed",
        "Can raise blood sugar — diabetics must monitor carefully",
        "Can cause stomach ulcers — take with food or an antacid",
        "Long-term use causes bone loss, weight gain, and immune suppression",
      ],
    },

    hi: {
      category: "स्टेरॉइड — सूजन-रोधी",
      description: "प्रेडनिसोलोन एक शक्तिशाली स्टेरॉइड है। सूजन और प्रतिरक्षा को कम करती है। निर्धारित खुराक सख्ती से पालन करें।",
      uses: ["तेज अस्थमा", "एलर्जी", "ऑटोइम्यून बीमारियां", "जोड़ों की सूजन", "त्वचा रोग"],
      dosage: {
        children: "डॉक्टर के अनुसार।",
        adults:   "5–60 मि.ग्रा. खाने के साथ। डॉक्टर के निर्देश सख्ती से।",
        elderly:  "न्यूनतम खुराक। हड्डी और शुगर का खतरा।",
      },
      warnings: [
        "लंबे समय के बाद अचानक बंद न करें — धीरे-धीरे कम करें",
        "ब्लड शुगर बढ़ सकती है",
        "पेट का अल्सर हो सकता है — खाने के साथ लें",
        "लंबे समय से हड्डी कमजोर, वजन बढ़ना",
      ],
    },

    gu: {
      category: "Steroid",
      description: "Anti-inflam. Immune↓. Taper only.",
      uses: ["Asth.", "Allergy", "Auto-Imm.", "Joint", "Skin"],
      dosage: {
        children: "Dr. only.",
        adults:   "5–60 . Food. Exact Rx.",
        elderly:  "Min. dose. Bone+Sugar risk.",
      },
      warnings: ["× Sudden stop — Taper", "BS ↑ DM", "GI Ulcer → Food", "Long: Bone↓ Weight↑ Immune↓"],
    },
  },

  // ── 26. VITAMIN D3 ───────────────────────────────────────────────────────
  {
    id: "vitamin-d3",
    name: "Vitamin D3",
    aliases: [
      "vitamin d3","cholecalciferol","calcirol","d3 must","d3 rise",
      "uprise d3","trigaine","dvion","calcimax d3","tayo","ossopan",
      "encalm","calcimax","d3 sachet","d cal","adcal","d3 60000"
    ],
    brand: "Calcirol · Uprise-D3 · Tayo · D-Rise · D3 Must",

    en: {
      category: "Vitamin Supplement",
      description:
        "Vitamin D3 is essential for strong bones and teeth, immune function, and muscle strength. Very common deficiency in India due to indoor lifestyle and darker skin. Comes as daily (1000 IU) or weekly/monthly high-dose capsules (60,000 IU).",
      uses: ["Vitamin D deficiency", "Bone weakness / rickets", "Joint pain from deficiency", "Immune support", "Muscle weakness"],
      dosage: {
        children: "400–1000 IU daily. Or 60,000 IU sachet once weekly for 8 weeks under supervision.",
        adults:   "1000–2000 IU daily OR 60,000 IU weekly sachet for 8–12 weeks if deficient.",
        elderly:  "800–2000 IU daily. Essential to prevent fractures and falls.",
      },
      warnings: [
        "High-dose (60,000 IU) sachets are not for daily use — weekly only",
        "Take with food (a fatty meal) for best absorption",
        "Too much Vitamin D causes calcium buildup — stick to recommended dose",
        "Check your Vitamin D blood level before starting high-dose treatment",
      ],
    },

    hi: {
      category: "विटामिन सप्लीमेंट",
      description: "विटामिन D3 हड्डियों, इम्यूनिटी और मांसपेशियों के लिए जरूरी है। भारत में बहुत सामान्य कमी।",
      uses: ["विटामिन D की कमी", "हड्डी कमजोरी", "जोड़ों का दर्द (कमी से)", "इम्यूनिटी", "मांसपेशी कमजोरी"],
      dosage: {
        children: "400–1000 IU रोज। या 60,000 IU सप्ताह में एक बार।",
        adults:   "1000–2000 IU रोज या 60,000 IU सप्ताह में एक बार।",
        elderly:  "800–2000 IU रोज। हड्डी टूटने से बचाव।",
      },
      warnings: [
        "60,000 IU रोज नहीं — केवल साप्ताहिक",
        "खाने के साथ लें",
        "बहुत ज्यादा लेने से कैल्शियम जमा हो जाता है",
        "इलाज से पहले खून की जांच करें",
      ],
    },

    gu: {
      category: "Vit D3",
      description: "Bone+Imm+Musc. India common def.",
      uses: ["D3 def.", "Bone weak", "Joint pain", "Imm.", "Musc. weak"],
      dosage: {
        children: "400–1000 IU/d. 60k/wk sup.",
        adults:   "1000–2000 IU/d. 60k/wk def.",
        elderly:  "800–2000 IU/d. Fracture prev.",
      },
      warnings: ["60k = weekly only", "Food+Fat", "Too much→Ca↑", "Test first"],
    },
  },

  // ── 27. VITAMIN B12 ──────────────────────────────────────────────────────
  {
    id: "vitamin-b12",
    name: "Vitamin B12",
    aliases: [
      "vitamin b12","cobalamin","methylcobalamin","cobadex","neurobion",
      "becosules","becadexamin","rejunex","nervijen","nerve up",
      "mecobalamin","met xl","cobal","mecobion","neurokind"
    ],
    brand: "Neurobion · Cobadex · Rejunex · Nervijen · Becosules",

    en: {
      category: "Vitamin Supplement — Nerve Health",
      description:
        "Vitamin B12 (Methylcobalamin) is essential for nerve health, red blood cell formation, and brain function. Deficiency is very common in vegetarians/vegans and people taking Metformin long-term.",
      uses: ["B12 deficiency", "Nerve pain / tingling / numbness", "Anemia", "Fatigue and weakness", "Memory support", "Diabetics on Metformin"],
      dosage: {
        children: "250–500 mcg daily for deficiency.",
        adults:   "500 mcg – 1500 mcg daily for deficiency. Maintenance: 500 mcg daily.",
        elderly:  "1000–1500 mcg daily — absorption decreases with age.",
      },
      warnings: [
        "Vegetarians and vegans are at high risk of B12 deficiency",
        "Metformin reduces B12 absorption — supplement if on long-term Metformin",
        "Very safe — excess B12 is excreted in urine",
        "Get blood levels tested annually if at risk",
      ],
    },

    hi: {
      category: "विटामिन — नसों की सेहत",
      description: "B12 नसों, लाल रक्त कोशिकाओं और मस्तिष्क के लिए जरूरी है। शाकाहारियों में बहुत सामान्य कमी।",
      uses: ["B12 की कमी", "नसों में दर्द/झुनझुनी", "एनीमिया", "थकान", "स्मृति", "मेटफॉर्मिन उपयोगकर्ता"],
      dosage: {
        children: "250–500 mcg रोज।",
        adults:   "500–1500 mcg रोज।",
        elderly:  "1000–1500 mcg रोज।",
      },
      warnings: [
        "शाकाहारियों में कमी बहुत आम",
        "मेटफॉर्मिन लेने पर B12 कम हो जाती है",
        "बहुत सुरक्षित — अधिक मात्रा मूत्र में निकल जाती है",
        "जोखिम में हों तो सालाना जांच",
      ],
    },

    gu: {
      category: "B12 Nerve",
      description: "Nerve+RBC+Brain. Veg.+Metformin risk.",
      uses: ["B12 def.", "Nerve pain", "Anemia", "Fatigue", "Memory", "Metformin"],
      dosage: {
        children: "250–500 mcg/d.",
        adults:   "500–1500 mcg/d.",
        elderly:  "1000–1500 mcg/d.",
      },
      warnings: ["Veg. risk", "Metformin→↓B12", "Safe excess→urine", "Annual test"],
    },
  },

  // ── 28. IRON (FERROUS SULPHATE) ──────────────────────────────────────────
  {
    id: "ferrous-sulphate",
    name: "Iron (Ferrous Sulphate)",
    aliases: [
      "iron","ferrous sulphate","feso4","ferroglobin","autrin",
      "orofer","orofer xt","fefol","iberet","hemfer","iron folic",
      "dexorange","livogen","haemup","pregacare iron","pediasure iron",
      "ferric","ferium","sangobion","feronia"
    ],
    brand: "Orofer · Ferroglobin · Dexorange · Livogen · Hemfer",

    en: {
      category: "Iron Supplement — Anemia",
      description:
        "Iron is essential for making hemoglobin (the oxygen carrier in red blood cells). Iron deficiency anemia is extremely common in India, especially in women, children, and pregnant mothers.",
      uses: ["Iron deficiency anemia", "Pregnancy anemia", "Weakness and fatigue from anemia", "Heavy periods causing anemia"],
      dosage: {
        children: "3–6 mg per kg per day in divided doses. Syrup form preferred.",
        adults:   "200 mg ferrous sulphate (65 mg elemental iron) 1–3 times daily, on empty stomach or with Vitamin C for best absorption.",
        elderly:  "65 mg elemental iron once or twice daily with food if stomach upset occurs.",
      },
      warnings: [
        "Can cause constipation, dark stools, and stomach upset",
        "Take with Vitamin C (lemon/orange juice) for better absorption",
        "Do not take with tea, coffee, milk, or antacids — reduces absorption",
        "Keep away from children — iron overdose is very dangerous in young children",
      ],
    },

    hi: {
      category: "आयरन — एनीमिया",
      description: "आयरन हीमोग्लोबिन बनाने के लिए जरूरी है। भारत में महिलाओं, बच्चों और गर्भवती माताओं में बहुत आम कमी।",
      uses: ["आयरन की कमी से एनीमिया", "गर्भावस्था एनीमिया", "थकान", "भारी मासिक स्राव"],
      dosage: {
        children: "3–6 मि.ग्रा./किलो/दिन।",
        adults:   "200 मि.ग्रा. दिन में 1–3 बार। विटामिन C के साथ सबसे बेहतर।",
        elderly:  "65 मि.ग्रा. 1–2 बार।",
      },
      warnings: [
        "कब्ज, काले दस्त और पेट दर्द हो सकते हैं",
        "विटामिन C के साथ लें",
        "चाय, दूध, एंटासिड के साथ न लें",
        "बच्चों से दूर रखें — आयरन ओवरडोज खतरनाक",
      ],
    },

    gu: {
      category: "Iron Anemia",
      description: "Hb. India Women+Preg. common.",
      uses: ["IDA", "Preg Anemia", "Fatigue", "HMB"],
      dosage: {
        children: "3–6 mg/kg/d.",
        adults:   "200mg 1–3x + Vit C.",
        elderly:  "65mg 1–2x.",
      },
      warnings: ["Constip/Black stool/GI", "Vit C+", "Tea/Milk/Antacid −", "Children away!"],
    },
  },

  // ── 29. CLOTRIMAZOLE ─────────────────────────────────────────────────────
  {
    id: "clotrimazole",
    name: "Clotrimazole",
    aliases: [
      "clotrimazole","canesten","candid","candid b","candid cl",
      "onabet","clotrin","mycelex","lotrisone","fungiclox",
      "fungimol","fungo","candid tv","clomaz"
    ],
    brand: "Candid · Canesten · Candid-B · Onabet · Candid-CL",

    en: {
      category: "Antifungal (Cream / Tablet)",
      description:
        "Clotrimazole kills fungal infections. Used as a cream for skin infections (ringworm, athlete's foot, jock itch) and as a vaginal tablet/cream for yeast infections. Candid-B combines it with Betamethasone (a steroid) for inflamed fungal rashes.",
      uses: ["Ringworm (tinea)", "Athlete's foot", "Jock itch", "Vaginal yeast infection", "Oral thrush", "Skin fungal infection"],
      dosage: {
        children: "Apply thin layer to affected area 2–3 times daily. Keep area dry.",
        adults:   "Cream: apply 2–3 times daily for 2–4 weeks. Vaginal tablet: 1 tablet (100 mg) daily for 6 nights.",
        elderly:  "Same as adults.",
      },
      warnings: [
        "Do not apply to eyes, mouth, or open wounds",
        "Continue for full duration even if skin looks better — stops relapse",
        "Candid-B (with steroid): do not use for more than 2 weeks on face or sensitive areas",
        "Keep skin area dry and clean for best effect",
      ],
    },

    hi: {
      category: "फंगल-रोधी",
      description: "क्लोट्रिमाजोल फंगल संक्रमण को मारता है। दाद, खुजली, योनि यीस्ट संक्रमण में उपयोगी।",
      uses: ["दाद/रिंगवर्म", "पैर का फंगस", "जांघ खुजली", "योनि यीस्ट", "ओरल थ्रश", "त्वचा फंगस"],
      dosage: {
        children: "पतली परत दिन में 2–3 बार।",
        adults:   "क्रीम: 2–3 बार 2–4 हफ्ते। योनि: 6 रातें।",
        elderly:  "बड़ों जैसे।",
      },
      warnings: [
        "आंख, मुंह, खुले घाव पर न लगाएं",
        "पूरा कोर्स करें — त्वचा ठीक लगने पर भी",
        "Candid-B चेहरे पर 2 हफ्ते से ज्यादा नहीं",
        "त्वचा सूखी और साफ रखें",
      ],
    },

    gu: {
      category: "Antifungal",
      description: "Ringworm, Athlete's foot, Yeast.",
      uses: ["Ringworm", "Foot fungus", "Jock itch", "Vaginal yeast", "Oral thrush"],
      dosage: {
        children: "Thin layer 2–3x/d.",
        adults:   "Cream 2–3x/d 2–4wk. Vag: 6nights.",
        elderly:  "Same.",
      },
      warnings: ["×Eyes/Mouth/Wound", "Full course", "Candid-B face <2wk", "Dry+Clean"],
    },
  },

  // ── 30. LOPERAMIDE ───────────────────────────────────────────────────────
  {
    id: "loperamide",
    name: "Loperamide",
    aliases: [
      "loperamide","imodium","eldoper","lopamide","lomofen",
      "roko","diarex","gut","lopez","lopimox","lomotil"
    ],
    brand: "Imodium · Eldoper · Lopamide · Roko · Lomofen",

    en: {
      category: "Anti-Diarrheal",
      description:
        "Loperamide slows bowel movements and reduces diarrhea quickly. It is for non-infectious diarrhea — if you have bloody diarrhea or fever, see a doctor instead of taking this.",
      uses: ["Acute diarrhea", "Traveler's diarrhea", "IBS-related diarrhea", "Diarrhea from food change"],
      dosage: {
        children: "Not for children under 2 years. Age 2–12: 1 mg 3 times daily. Doctor's advice needed.",
        adults:   "2 mg after first loose stool, then 1 mg after each loose stool. Maximum 8 mg per day.",
        elderly:  "2 mg to start, then 1 mg. Maximum 6 mg per day.",
      },
      warnings: [
        "Do NOT use if diarrhea has blood or mucus, or if you have high fever — go to doctor",
        "Stay well hydrated — drink ORS (oral rehydration solution)",
        "Do not use for more than 2 days without doctor's advice",
        "Not for children under 2",
      ],
    },

    hi: {
      category: "दस्त रोकने वाली दवा",
      description: "लोपेरामाइड आंतों की गति धीमी करके जल्दी दस्त रोकती है। खूनी दस्त या बुखार हो तो डॉक्टर के पास जाएं।",
      uses: ["तीव्र दस्त", "यात्रा दस्त", "IBS दस्त", "खान-पान बदलने से दस्त"],
      dosage: {
        children: "2 साल से कम: नहीं। 2–12: 1 मि.ग्रा. 3 बार।",
        adults:   "पहले पतले दस्त के बाद 2 मि.ग्रा., फिर हर दस्त पर 1 मि.ग्रा.। अधिकतम 8 मि.ग्रा.।",
        elderly:  "2 मि.ग्रा. शुरू, फिर 1 मि.ग्रा.। अधिकतम 6 मि.ग्रा.।",
      },
      warnings: [
        "खूनी दस्त या बुखार हो तो न लें — डॉक्टर के पास जाएं",
        "ORS पिएं — पानी की कमी न होने दें",
        "2 दिन से ज्यादा डॉक्टर की सलाह के बिना नहीं",
        "2 साल से कम बच्चों को नहीं",
      ],
    },

    gu: {
      category: "ઝ. ર.",
      description: "Bowel ↓ → Diarrhea ↓. Bloody/Fever → Dr.",
      uses: ["Acute Diarr.", "Traveler's", "IBS", "Food change"],
      dosage: {
        children: "<2yr ×. 2–12: 1. 3x.",
        adults:   "2 first, then 1. Max 8.",
        elderly:  "2 start, 1. Max 6.",
      },
      warnings: ["Blood/Fever → Dr.", "ORS", "<2 days", "<2yr ×"],
    },
  },

  // ── 31. DEXTROMETHORPHAN/BROMHEXINE (Cough) ──────────────────────────────
  {
    id: "dextromethorphan",
    name: "Dextromethorphan",
    aliases: [
      "dextromethorphan","delsym","robitussin","benadryl cough","alex",
      "kofarest","wikoryl","benadryl syrup","zedex","phensedyl",
      "corex","grilinctus","t-minic","cofsils","solvin cold"
    ],
    brand: "Benadryl Cough · Alex · Kofarest · Zedex · Cofsils",

    en: {
      category: "Cough Suppressant",
      description:
        "Dextromethorphan reduces the urge to cough by acting on the brain's cough center. Best for a dry, irritating cough with no mucus. Not for productive (wet) coughs — those need an expectorant instead.",
      uses: ["Dry cough", "Irritating cough at night", "Post-viral dry cough", "Cough from cold/allergy"],
      dosage: {
        children: "Age 6–12: 5–10 mg every 4 hours. Maximum 60 mg per day. Do not use under 6 without doctor's advice.",
        adults:   "10–30 mg every 4–6 hours. Maximum 120 mg per day.",
        elderly:  "10–15 mg every 6–8 hours.",
      },
      warnings: [
        "For DRY cough only — if you have mucus/phlegm, use Bromhexine or Ambroxol instead",
        "Do not use if taking antidepressants (MAOIs)",
        "Can cause drowsiness — avoid driving",
        "Do not give to children under 6",
      ],
    },

    hi: {
      category: "खांसी दबाने वाली दवा",
      description: "डेक्सट्रोमेथोरफान दिमाग के खांसी केंद्र पर असर करके सूखी खांसी रोकती है।",
      uses: ["सूखी खांसी", "रात की जलन वाली खांसी", "वायरल के बाद सूखी खांसी", "एलर्जी खांसी"],
      dosage: {
        children: "6–12 साल: हर 4 घंटे 5–10 मि.ग्रा.।",
        adults:   "10–30 मि.ग्रा. हर 4–6 घंटे।",
        elderly:  "10–15 मि.ग्रा. हर 6–8 घंटे।",
      },
      warnings: [
        "केवल सूखी खांसी — बलगम हो तो ब्रोमहेक्सिन लें",
        "एंटीडिप्रेसेंट के साथ न लें",
        "नींद आ सकती है — गाड़ी से बचें",
        "6 साल से कम बच्चों को नहीं",
      ],
    },

    gu: {
      category: "ઉ. Suppress",
      description: "Dry cough. Brain center ↓.",
      uses: ["Dry cough", "Night irrit.", "Post-viral", "Allergy cough"],
      dosage: {
        children: "6–12: 5–10 . 4hr.",
        adults:   "10–30 . 4–6hr.",
        elderly:  "10–15 . 6–8hr.",
      },
      warnings: ["Dry only (not wet)", "MAOI ×", "Drowsy → ×Drive", "<6yr ×"],
    },
  },

  // ── 32. BROMHEXINE / AMBROXOL ─────────────────────────────────────────────
  {
    id: "ambroxol",
    name: "Ambroxol",
    aliases: [
      "ambroxol","bromhexine","ambrodil","mucosolvan","ambrolite",
      "syr ambrolite","solvin","solvin ls","chericof","ambrolite s",
      "benadryl expectorant","grilinctus bm","mucinac","muscinac ls"
    ],
    brand: "Ambrodil · Mucosolvan · Solvin · Chericof · Ambrolite",

    en: {
      category: "Expectorant — Thins Mucus",
      description:
        "Ambroxol/Bromhexine thins and loosens mucus in the airways, making it easier to cough out. Use for wet, productive coughs with mucus/phlegm — not for dry cough.",
      uses: ["Wet cough with phlegm", "Chest congestion", "Bronchitis", "COPD mucus", "Sinusitis"],
      dosage: {
        children: "Ambroxol 15 mg syrup 2–3 times daily for children 2–5 years. 30 mg 2–3 times for 6–12 years.",
        adults:   "30 mg (Ambroxol) 3 times daily after meals. Or 8–16 mg Bromhexine 3 times daily.",
        elderly:  "30 mg twice or three times daily.",
      },
      warnings: [
        "For WET cough with mucus only — not for dry cough",
        "Drink plenty of water — helps thin mucus further",
        "Avoid in first trimester of pregnancy",
        "Take after food to reduce stomach upset",
      ],
    },

    hi: {
      category: "बलगम पतला करने वाली",
      description: "अम्ब्रोक्सोल/ब्रोमहेक्सिन वायुमार्ग में बलगम पतला करती है। गीली खांसी के लिए।",
      uses: ["गीली खांसी/बलगम", "छाती जमाव", "ब्रोंकाइटिस", "COPD बलगम", "साइनस"],
      dosage: {
        children: "2–5 साल: 15 मि.ग्रा. 2–3 बार। 6–12: 30 मि.ग्रा. 2–3 बार।",
        adults:   "30 मि.ग्रा. 3 बार खाने के बाद।",
        elderly:  "30 मि.ग्रा. 2–3 बार।",
      },
      warnings: [
        "केवल गीली खांसी — सूखी खांसी नहीं",
        "खूब पानी पिएं",
        "गर्भावस्था पहली तिमाही में न लें",
        "खाने के बाद लें",
      ],
    },

    gu: {
      category: "ઉ. Mucus Thin",
      description: "Wet cough phlegm thin.",
      uses: ["Wet cough", "Chest cong.", "Bronchitis", "COPD", "Sinus"],
      dosage: {
        children: "2–5: 15. 2–3x. 6–12: 30. 2–3x.",
        adults:   "30 . 3x. Food after.",
        elderly:  "30 . 2–3x.",
      },
      warnings: ["Wet only", "Water ↑", "Preg T1 ×", "After food"],
    },
  },

  // ── 33. RANITIDINE / FAMOTIDINE ──────────────────────────────────────────
  {
    id: "famotidine",
    name: "Famotidine",
    aliases: [
      "famotidine","pepcid","famtac","facid","famocid","topcid",
      "ranitidine","zantac","rantac","histac","zinetac","aciloc",
      "h2 blocker","acid reducer"
    ],
    brand: "Pepcid · Famtac · Topcid · (Ranitidine: Rantac · Aciloc · Histac)",

    en: {
      category: "Acid Reducer (H2 Blocker)",
      description:
        "Famotidine (and Ranitidine) reduce stomach acid by blocking histamine H2 receptors. Faster-acting than PPIs for immediate relief but weaker for long-term control. Note: Ranitidine was recalled in many countries due to impurity concerns — Famotidine is the safer alternative.",
      uses: ["Acidity", "Heartburn", "Stomach ulcer (mild)", "GERD", "Indigestion"],
      dosage: {
        children: "0.5 mg per kg twice daily. Doctor's advice only.",
        adults:   "20–40 mg once or twice daily. Take before meals.",
        elderly:  "20 mg once or twice daily. Reduce if kidney function is poor.",
      },
      warnings: [
        "Famotidine is the preferred H2 blocker now (safer than Ranitidine)",
        "Take before meals for best effect",
        "Short-term relief medicine — see doctor if symptoms continue beyond 2 weeks",
        "Can interact with some antifungals — tell doctor all medicines you take",
      ],
    },

    hi: {
      category: "एसिड कम करना (H2 ब्लॉकर)",
      description: "फेमोटिडाइन एसिड जल्दी कम करती है। रेनिटिडाइन अब ज्यादातर देशों में बंद है — फेमोटिडाइन बेहतर विकल्प।",
      uses: ["एसिडिटी", "जलन", "हल्का अल्सर", "GERD", "अपच"],
      dosage: {
        children: "0.5 मि.ग्रा./किलो 2 बार।",
        adults:   "20–40 मि.ग्रा. 1–2 बार खाने से पहले।",
        elderly:  "20 मि.ग्रा. 1–2 बार।",
      },
      warnings: [
        "फेमोटिडाइन अब बेहतर विकल्प है (रेनिटिडाइन से सुरक्षित)",
        "खाने से पहले लें",
        "2 हफ्ते से ज्यादा लक्षण हों तो डॉक्टर से मिलें",
        "सभी दवाएं डॉक्टर को बताएं",
      ],
    },

    gu: {
      category: "Acid H2 Block",
      description: "Fast acid ↓. Famotidine > Ranitidine now.",
      uses: ["Acid", "Heartburn", "Ulcer mild", "GERD", "Indig."],
      dosage: {
        children: "0.5 mg/kg 2x.",
        adults:   "20–40 . 1–2x. Pre-meal.",
        elderly:  "20 . 1–2x.",
      },
      warnings: ["Famotidine preferred", "Pre-meal", ">2wk Dr.", "Drug int. Dr."],
    },
  },

  // ── 34. LOSARTAN ─────────────────────────────────────────────────────────
  {
    id: "losartan",
    name: "Losartan",
    aliases: [
      "losartan","cozaar","losar","losacar","losakind","losartan 50",
      "losartan 25","losar h","losacar h","repace","repace h","tozaar"
    ],
    brand: "Cozaar · Losar · Losacar · Repace · Tozaar",

    en: {
      category: "Blood Pressure (ARB)",
      description:
        "Losartan lowers blood pressure by blocking the angiotensin II hormone. Also protects kidneys in diabetics. Losartan-H combines it with a diuretic (Hydrochlorothiazide) for stronger effect.",
      uses: ["High blood pressure", "Kidney protection in diabetics", "Heart failure", "Stroke prevention"],
      dosage: {
        children: "Children over 6 with specialist advice only.",
        adults:   "25–100 mg once daily. Start at 50 mg. Can take with or without food.",
        elderly:  "25–50 mg once daily.",
      },
      warnings: [
        "Do not take if pregnant — causes birth defects",
        "Can raise potassium — avoid potassium supplements",
        "Monitor kidney function regularly",
        "Can cause dizziness — stand up slowly",
      ],
    },

    hi: {
      category: "ब्लड प्रेशर (ARB)",
      description: "लोसार्टन एंजियोटेंसिन II रोककर BP कम करती है। डायबिटीज में किडनी बचाती है।",
      uses: ["हाई BP", "किडनी बचाव", "हार्ट फेल्योर", "स्ट्रोक"],
      dosage: {
        children: "6 साल ऊपर विशेषज्ञ से।",
        adults:   "25–100 मि.ग्रा. एक बार।",
        elderly:  "25–50 मि.ग्रा. एक बार।",
      },
      warnings: [
        "गर्भावस्था में न लें — जन्म दोष",
        "पोटेशियम न लें अतिरिक्त",
        "किडनी जांच नियमित",
        "चक्कर — धीरे उठें",
      ],
    },

    gu: {
      category: "BP ARB",
      description: "Ang-II ↓ → BP ↓. DM kidney prot.",
      uses: ["Hi BP", "Kid. prot.", "HF", "Stroke"],
      dosage: {
        children: "6+ Sp.",
        adults:   "25–100 . 1x.",
        elderly:  "25–50 . 1x.",
      },
      warnings: ["Preg. ×", "K+ ↑ ×", "Kid. monitor", "Dizziness ↑ slow"],
    },
  },

  // ── 35. CHLORPHENIRAMINE ─────────────────────────────────────────────────
  {
    id: "chlorpheniramine",
    name: "Chlorpheniramine",
    aliases: [
      "chlorpheniramine","ctm","chlor trimeton","piriton","avil",
      "phenergan","actifed","benadryl allergy","allercalm","polaramine"
    ],
    brand: "Avil · Piriton · Phenergan (Promethazine) · CTM",

    en: {
      category: "Antihistamine (Sedating) — Allergy & Cold",
      description:
        "Chlorpheniramine (CTM) is an older antihistamine. It relieves allergy and cold symptoms effectively but causes significant drowsiness. Often included in cold and cough combination medicines.",
      uses: ["Runny nose (cold/allergy)", "Sneezing", "Skin rash/hives", "Watery eyes", "Insect bite itch"],
      dosage: {
        children: "2 mg every 4–6 hours. Maximum 8 mg per day.",
        adults:   "4 mg every 4–6 hours. Maximum 24 mg per day.",
        elderly:  "2 mg every 4–6 hours. High drowsiness risk.",
      },
      warnings: [
        "Causes significant drowsiness — DO NOT drive or operate machinery",
        "Avoid alcohol — greatly increases drowsiness",
        "Elderly: increases risk of falls",
        "Best taken at bedtime",
      ],
    },

    hi: {
      category: "एलर्जी (पुरानी — नींद आती है)",
      description: "क्लोरफेनिरामाइन एलर्जी और सर्दी के लक्षण कम करती है लेकिन बहुत नींद आती है।",
      uses: ["नाक बहना", "छींक", "पित्ती/दाने", "आंखों से पानी", "कीड़े के काटने पर"],
      dosage: {
        children: "हर 4–6 घंटे 2 मि.ग्रा.।",
        adults:   "हर 4–6 घंटे 4 मि.ग्रा.।",
        elderly:  "हर 4–6 घंटे 2 मि.ग्रा.।",
      },
      warnings: [
        "बहुत नींद — गाड़ी न चलाएं",
        "शराब न पिएं",
        "बुजुर्गों में गिरने का खतरा",
        "रात को लेना बेहतर",
      ],
    },

    gu: {
      category: "Allergy (Old-Drowsy)",
      description: "Cold/Allergy relief. Very drowsy.",
      uses: ["Runny N.", "Sneezing", "Rash/Hives", "Watery eyes", "Bite"],
      dosage: {
        children: "2. 4–6hr.",
        adults:   "4. 4–6hr.",
        elderly:  "2. 4–6hr.",
      },
      warnings: ["Very Drowsy →×Drive", "Alc. ×", "Elderly: Fall risk", "Bedtime"],
    },
  },

  // ── 36. ALPRAZOLAM ───────────────────────────────────────────────────────
  {
    id: "alprazolam",
    name: "Alprazolam",
    aliases: [
      "alprazolam","xanax","alprax","restyl","alzolam","anxit",
      "tranax","trika","zolax","alprazolam 0.25","alprazolam 0.5"
    ],
    brand: "Alprax · Restyl · Anxit · Trika · Tranax",

    en: {
      category: "Anti-Anxiety (Benzodiazepine) — Prescription Only",
      description:
        "Alprazolam reduces anxiety and panic. It acts quickly. However, it is habit-forming and should only be used short-term and under strict medical supervision. Prescription required.",
      uses: ["Anxiety disorder", "Panic attacks", "Short-term anxiety relief"],
      dosage: {
        children: "NOT for children.",
        adults:   "0.25–0.5 mg 3 times daily. Maximum 4 mg/day. Doctor must prescribe.",
        elderly:  "0.25 mg 2–3 times daily. High risk of falls and confusion.",
      },
      warnings: [
        "HABIT FORMING — do not take more than prescribed or for longer than advised",
        "Do not stop suddenly — causes withdrawal seizures",
        "Do not drink alcohol — can be fatal",
        "Causes drowsiness — do not drive",
      ],
    },

    hi: {
      category: "एंग्जायटी (नुस्खे से) — आदत लग सकती है",
      description: "एल्प्राजोलम चिंता और घबराहट कम करती है। आदत लगने वाली दवा — केवल डॉक्टर की निगरानी में।",
      uses: ["एंग्जायटी", "पैनिक अटैक", "अल्पकालिक चिंता"],
      dosage: {
        children: "बच्चों को नहीं।",
        adults:   "0.25–0.5 मि.ग्रा. दिन में 3 बार।",
        elderly:  "0.25 मि.ग्रा. 2–3 बार। गिरने का खतरा।",
      },
      warnings: [
        "आदत लगने वाली — डॉक्टर से ज्यादा न लें",
        "अचानक बंद न करें — दौरे का खतरा",
        "शराब के साथ जानलेवा",
        "गाड़ी न चलाएं",
      ],
    },

    gu: {
      category: "Anxiety Rx ONLY — Habit form",
      description: "Anxiety+Panic. Habit forming. Dr. ONLY.",
      uses: ["Anxiety", "Panic", "Short-term"],
      dosage: {
        children: "×",
        adults:   "0.25–0.5 . 3x. Rx.",
        elderly:  "0.25 . 2–3x. Fall risk.",
      },
      warnings: ["Habit — × exceed", "× Sudden stop (seizure)", "Alc = Fatal", "× Drive"],
    },
  },

  // ── 37. SERTRALINE ───────────────────────────────────────────────────────
  {
    id: "sertraline",
    name: "Sertraline",
    aliases: [
      "sertraline","zoloft","serta","serlift","serenata","daxid",
      "sertima","sertraline 50","sertraline 100","setaline"
    ],
    brand: "Zoloft · Serta · Serlift · Daxid · Serenata",

    en: {
      category: "Antidepressant (SSRI) — Prescription Only",
      description:
        "Sertraline is an SSRI antidepressant that gradually increases serotonin levels in the brain. It takes 2–4 weeks to feel the full benefit. Used for depression, anxiety, OCD, and PTSD.",
      uses: ["Depression", "Anxiety disorders", "OCD", "PTSD", "Panic disorder", "Social anxiety"],
      dosage: {
        children: "For OCD in children 6+ under specialist care. Start 25 mg.",
        adults:   "50 mg once daily. Can be increased to 200 mg. Takes 2–4 weeks to work.",
        elderly:  "25 mg daily to start, increase slowly.",
      },
      warnings: [
        "Takes 2–4 weeks to work — do not stop early",
        "Never stop suddenly — taper under doctor's supervision",
        "Tell doctor if you feel worse or have thoughts of self-harm in early weeks",
        "Avoid alcohol",
      ],
    },

    hi: {
      category: "एंटीडिप्रेसेंट (SSRI) — नुस्खे से",
      description: "सर्ट्रालीन सेरोटोनिन बढ़ाती है। असर 2–4 हफ्ते में आता है। डिप्रेशन, OCD, PTSD में उपयोगी।",
      uses: ["डिप्रेशन", "एंग्जायटी", "OCD", "PTSD", "पैनिक"],
      dosage: {
        children: "OCD: 6+ साल, 25 मि.ग्रा.।",
        adults:   "50 मि.ग्रा. एक बार। 2–4 हफ्ते में असर।",
        elderly:  "25 मि.ग्रा. से शुरू।",
      },
      warnings: [
        "2–4 हफ्ते लगते हैं — जल्दी बंद न करें",
        "अचानक बंद न करें",
        "शुरुआत में बुरा लगे या नुकसान के विचार आएं तो डॉक्टर को बताएं",
        "शराब न पिएं",
      ],
    },

    gu: {
      category: "SSRI Depression Rx",
      description: "Serotonin ↑. 2–4 wk effect. Rx only.",
      uses: ["Depression", "Anxiety", "OCD", "PTSD", "Panic"],
      dosage: {
        children: "OCD 6+: 25.",
        adults:   "50 . 1x. 2–4wk.",
        elderly:  "25 . ↑slow.",
      },
      warnings: ["2–4 wk wait", "×Sudden stop", "Self-harm thoughts→Dr.", "Alc ×"],
    },
  },

  // ── 38. CEPHALEXIN ───────────────────────────────────────────────────────
  {
    id: "cephalexin",
    name: "Cephalexin",
    aliases: [
      "cephalexin","cefalexin","keflex","sporidex","phexin","cephalexin 500",
      "cephadex","cefatabs","cefakind","cephaspor"
    ],
    brand: "Sporidex · Phexin · Keflex · Cephadex · Cefakind",

    en: {
      category: "Antibiotic (Cephalosporin)",
      description:
        "Cephalexin is a first-generation cephalosporin antibiotic. Used for skin, throat, and urinary infections. Often used when someone is allergic to Amoxicillin (though cross-allergy is possible).",
      uses: ["Skin infections", "Throat infection", "Urinary tract infection", "Bone infection", "Dental abscess"],
      dosage: {
        children: "25–50 mg per kg per day in 2–4 divided doses.",
        adults:   "250–500 mg every 6 hours. Take with or without food.",
        elderly:  "250–500 mg every 8–12 hours. Reduce if kidney is weak.",
      },
      warnings: [
        "If allergic to Penicillin, tell your doctor — possible cross-reaction",
        "Complete the full antibiotic course",
        "Can cause diarrhea — take yogurt",
        "Take with food if stomach upset occurs",
      ],
    },

    hi: {
      category: "एंटीबायोटिक (सेफेलोस्पोरिन)",
      description: "सेफेलेक्सिन त्वचा, गले और मूत्र संक्रमण के लिए। अमोक्सिसिलिन से एलर्जी होने पर विकल्प।",
      uses: ["त्वचा संक्रमण", "गला संक्रमण", "UTI", "हड्डी संक्रमण", "दांत"],
      dosage: {
        children: "25–50 मि.ग्रा./किलो, 2–4 खुराकों में।",
        adults:   "250–500 मि.ग्रा. हर 6 घंटे।",
        elderly:  "250–500 मि.ग्रा. हर 8–12 घंटे।",
      },
      warnings: [
        "पेनिसिलिन एलर्जी होने पर डॉक्टर को बताएं",
        "पूरा कोर्स करें",
        "दस्त हो सकते हैं — दही खाएं",
        "पेट दर्द हो तो खाने के साथ लें",
      ],
    },

    gu: {
      category: "Antibiotic Ceph.",
      description: "Skin, throat, UTI. Amox-allergy alt.",
      uses: ["Skin", "Throat", "UTI", "Bone", "Dental"],
      dosage: {
        children: "25–50 mg/kg 2–4x.",
        adults:   "250–500 . 6hr.",
        elderly:  "250–500 . 8–12hr.",
      },
      warnings: ["Penicillin allergy Dr.", "Full course", "Diarr.→Yogurt", "Food if GI"],
    },
  },

  // ── 39. DOXYCYCLINE ──────────────────────────────────────────────────────
  {
    id: "doxycycline",
    name: "Doxycycline",
    aliases: [
      "doxycycline","vibramycin","doxt sl","doxy 1","doxycycline 100",
      "doxy","doxitab","lymecycline","doxigen","microdox"
    ],
    brand: "Vibramycin · Doxt-SL · Doxitab · Microdox",

    en: {
      category: "Antibiotic (Tetracycline)",
      description:
        "Doxycycline treats a wide range of infections including acne, chest infections, malaria prevention, and some tick-borne diseases. Always take with a full glass of water and stay upright for 30 minutes after taking.",
      uses: ["Acne (long-term low dose)", "Chest infection", "Malaria prevention", "Chlamydia", "Lyme disease", "Rosacea"],
      dosage: {
        children: "NOT for children under 8 — causes permanent teeth discoloration.",
        adults:   "100 mg twice daily or 200 mg once daily. Take upright with water. For acne: 50–100 mg daily for months.",
        elderly:  "100 mg once or twice daily.",
      },
      warnings: [
        "NOT for children under 8 or pregnant women — causes tooth discoloration and bone effects",
        "Take with a FULL glass of water and remain upright for 30 minutes — else ulcers in throat",
        "Increases sun sensitivity — use sunscreen daily",
        "Avoid dairy, antacids, and iron within 2 hours",
      ],
    },

    hi: {
      category: "एंटीबायोटिक (टेट्रासाइक्लिन)",
      description: "डॉक्सीसाइक्लिन मुंहासे, सीने के संक्रमण, मलेरिया बचाव में काम आती है। पूरे गिलास पानी के साथ सीधे खड़े होकर लें।",
      uses: ["मुंहासे (कम खुराक)", "छाती संक्रमण", "मलेरिया बचाव", "क्लैमाइडिया", "रोसेसिया"],
      dosage: {
        children: "8 साल से कम: नहीं — दांत खराब।",
        adults:   "100 मि.ग्रा. दिन में 2 बार या 200 मि.ग्रा. एक बार।",
        elderly:  "100 मि.ग्रा. 1–2 बार।",
      },
      warnings: [
        "8 साल से कम और गर्भवती: नहीं",
        "पूरे गिलास पानी के साथ, सीधे खड़े होकर लें",
        "धूप से सावधान — सनस्क्रीन लगाएं",
        "डेयरी, एंटासिड, आयरन से 2 घंटे दूर",
      ],
    },

    gu: {
      category: "Antibiotic Tetra.",
      description: "Acne, chest, malaria prev., Chlamydia.",
      uses: ["Acne", "Chest inf.", "Malaria", "STI", "Rosacea"],
      dosage: {
        children: "<8yr × (teeth)",
        adults:   "100 . 2x or 200 . 1x.",
        elderly:  "100 . 1–2x.",
      },
      warnings: ["<8yr/Preg × (teeth)", "Full water+Upright 30min", "Sun → Sunscreen", "Dairy/Antacid/Fe 2hr"],
    },
  },

  // ── 40. NAPROXEN ─────────────────────────────────────────────────────────
  {
    id: "naproxen",
    name: "Naproxen",
    aliases: [
      "naproxen","naprosyn","napryn","naxdom","naproxen 500",
      "proxen","naprogesic","aleve","flanax","xenobid"
    ],
    brand: "Naprosyn · Naxdom · Napryn · Aleve",

    en: {
      category: "Anti-Inflammatory Pain Relief (NSAID)",
      description:
        "Naproxen is a longer-acting NSAID pain reliever. One tablet lasts 8–12 hours, making it convenient for twice-daily dosing. Good for arthritis, period pain, and back pain.",
      uses: ["Arthritis", "Back pain", "Period pain", "Muscle pain", "Gout", "Headache", "Dental pain"],
      dosage: {
        children: "Children over 2 for fever only: 5–10 mg/kg every 8–12 hours. Not for general use under 12.",
        adults:   "250–500 mg twice daily with food. Extended release 750 mg–1000 mg once daily.",
        elderly:  "250 mg twice daily. High GI and kidney risk — use with caution.",
      },
      warnings: [
        "Always take with food",
        "Long-lasting — do not double up if you forget a dose",
        "High risk of stomach bleeding and kidney problems with long-term use",
        "Avoid in pregnancy, especially last trimester",
      ],
    },

    hi: {
      category: "सूजन-रोधी (NSAID) लंबे असर वाली",
      description: "नेप्रोक्सेन लंबे समय तक असर करती है (8–12 घंटे)। गठिया, मासिक और कमर दर्द में उपयोगी।",
      uses: ["गठिया", "कमर दर्द", "मासिक दर्द", "मांसपेशी दर्द", "गाउट", "सिरदर्द"],
      dosage: {
        children: "2 साल से: 5–10 मि.ग्रा./किलो। 12 से कम सामान्य उपयोग नहीं।",
        adults:   "250–500 मि.ग्रा. दिन में 2 बार खाने के साथ।",
        elderly:  "250 मि.ग्रा. 2 बार। सावधानी।",
      },
      warnings: [
        "खाने के साथ",
        "लंबा असर — भूली हुई खुराक दोबारा न लें",
        "लंबे समय में पेट और किडनी का खतरा",
        "गर्भावस्था में न लें",
      ],
    },

    gu: {
      category: "NSAID Long-act",
      description: "8–12hr. Arthritis, Period, Back.",
      uses: ["Arthritis", "Back", "Period", "Muscle", "Gout", "Head"],
      dosage: {
        children: "2+: 5–10 mg/kg 8–12hr.",
        adults:   "250–500 . 2x. Food.",
        elderly:  "250 . 2x. Caution.",
      },
      warnings: ["Food", "Long act → no double", "GI+Kid risk long", "Preg ×"],
    },
  },

  // ── 41. TAMSULOSIN ───────────────────────────────────────────────────────
  {
    id: "tamsulosin",
    name: "Tamsulosin",
    aliases: [
      "tamsulosin","urimax","veltam","urimax d","veltam d",
      "contiflo","silodal","flomax","tamlo","tamsulin"
    ],
    brand: "Urimax · Veltam · Contiflo · Flomax",

    en: {
      category: "Prostate & Urinary (Alpha Blocker)",
      description:
        "Tamsulosin relaxes muscles in the prostate and bladder neck, making urination easier. Used for benign prostate enlargement (BPH) and sometimes to help pass kidney stones.",
      uses: ["Enlarged prostate (BPH)", "Difficulty urinating", "Kidney stone passing (as aid)", "Frequent urination at night"],
      dosage: {
        children: "Not for children.",
        adults:   "0.4 mg once daily after the same meal each day.",
        elderly:  "0.4 mg once daily. Can cause significant dizziness on standing — take at bedtime.",
      },
      warnings: [
        "Can cause severe dizziness on standing (postural hypotension) — sit/stand slowly",
        "Take at the same time daily after a meal",
        "Tell your eye surgeon if you take this — can affect eye surgery (floppy iris syndrome)",
        "Not a cure — for symptom relief only",
      ],
    },

    hi: {
      category: "प्रोस्टेट और मूत्र (अल्फा ब्लॉकर)",
      description: "टेम्सुलोसिन प्रोस्टेट और मूत्राशय की मांसपेशियों को शिथिल करती है। BPH में पेशाब आसान करती है।",
      uses: ["प्रोस्टेट बढ़ना (BPH)", "पेशाब में तकलीफ", "गुर्दे की पथरी", "रात में बार-बार पेशाब"],
      dosage: {
        children: "बच्चों के लिए नहीं।",
        adults:   "0.4 मि.ग्रा. एक बार रोज, खाने के बाद।",
        elderly:  "0.4 मि.ग्रा. रोज। रात को लेना बेहतर।",
      },
      warnings: [
        "उठने पर चक्कर — धीरे उठें",
        "रोज एक ही समय खाने के बाद",
        "नेत्र शल्य चिकित्सा से पहले डॉक्टर को बताएं",
        "यह इलाज नहीं — लक्षण राहत है",
      ],
    },

    gu: {
      category: "BPH Prostate",
      description: "BPH → Urination ↑. Kidney stone aid.",
      uses: ["BPH", "Difficulty urine", "Kidney stone", "Nocturia"],
      dosage: {
        children: "×",
        adults:   "0.4 . 1x after meal.",
        elderly:  "0.4 . Bedtime.",
      },
      warnings: ["Dizz on stand → slow", "= Time meal", "Eye surg → Dr.", "Symptom relief only"],
    },
  },

  // ── 42. CLINDAMYCIN ──────────────────────────────────────────────────────
  {
    id: "clindamycin",
    name: "Clindamycin",
    aliases: [
      "clindamycin","clindac","dalacin","cleocin","clindacin",
      "clindasol","clindac a gel","clindamycin gel","clindox"
    ],
    brand: "Clindac · Dalacin · Clindacin · Clindasol · Clindac-A Gel",

    en: {
      category: "Antibiotic (Oral & Topical — Skin/Acne)",
      description:
        "Clindamycin kills bacteria that cause skin and soft tissue infections, and acne. Clindac-A Gel is the topical form widely used for acne.",
      uses: ["Acne (gel form)", "Skin infections", "Bone infections", "Abdominal infections", "Dental infections"],
      dosage: {
        children: "8–25 mg per kg per day in 3–4 doses. Oral capsule.",
        adults:   "Oral: 150–300 mg 4 times daily. Gel: apply thin layer to affected area once or twice daily.",
        elderly:  "Same as adults.",
      },
      warnings: [
        "Stop immediately if severe diarrhea with blood or mucus — rare but serious (C. difficile)",
        "Take oral form with a full glass of water",
        "Do not apply gel to eyes or broken skin",
        "Complete the full course",
      ],
    },

    hi: {
      category: "एंटीबायोटिक (त्वचा/मुंहासे)",
      description: "क्लिन्डामाइसिन मुंहासे, त्वचा और नरम ऊतक संक्रमण में उपयोगी। Clindac-A Gel मुंहासों पर।",
      uses: ["मुंहासे (जेल)", "त्वचा संक्रमण", "दांत संक्रमण"],
      dosage: {
        children: "8–25 मि.ग्रा./किलो 3–4 भागों में।",
        adults:   "150–300 मि.ग्रा. 4 बार। जेल: पतली परत।",
        elderly:  "बड़ों जैसे।",
      },
      warnings: [
        "खूनी दस्त हो तो तुरंत बंद करें",
        "पूरे गिलास पानी के साथ",
        "जेल आंख या खुले घाव पर नहीं",
        "पूरा कोर्स करें",
      ],
    },

    gu: {
      category: "Antibiotic Skin/Acne",
      description: "Acne gel. Skin+Soft tissue inf.",
      uses: ["Acne gel", "Skin inf.", "Bone", "Dental"],
      dosage: {
        children: "8–25 mg/kg 3–4x.",
        adults:   "150–300 . 4x. Gel: thin.",
        elderly:  "Same.",
      },
      warnings: ["Bloody diarr → stop ASAP (C.diff)", "Full glass water", "Gel ×Eyes/wounds", "Full course"],
    },
  },

  // ── 43. ENALAPRIL ────────────────────────────────────────────────────────
  {
    id: "enalapril",
    name: "Enalapril",
    aliases: [
      "enalapril","vasotec","enam","envas","encardil","enalapril 5",
      "enalapril 10","cardace","renitec","berlipril"
    ],
    brand: "Vasotec · Enam · Envas · Encardil · Cardace",

    en: {
      category: "Blood Pressure & Heart (ACE Inhibitor)",
      description:
        "Enalapril is an ACE inhibitor that lowers blood pressure and protects the heart and kidneys. A persistent dry cough is a common side effect — if it bothers you, switch to an ARB (like Losartan).",
      uses: ["High blood pressure", "Heart failure", "Kidney protection (diabetics)", "After heart attack"],
      dosage: {
        children: "0.08 mg/kg per day. Specialist only.",
        adults:   "5–40 mg once or twice daily.",
        elderly:  "2.5 mg once daily to start.",
      },
      warnings: [
        "Dry persistent cough is a very common side effect — tell your doctor",
        "Do NOT take if pregnant — causes birth defects",
        "Can raise potassium — avoid potassium supplements",
        "Monitor kidney function regularly",
      ],
    },

    hi: {
      category: "ब्लड प्रेशर (ACE इनहिबिटर)",
      description: "एनालाप्रिल BP कम करती है और दिल-किडनी की रक्षा करती है। सूखी खांसी सामान्य दुष्प्रभाव।",
      uses: ["हाई BP", "हार्ट फेल्योर", "किडनी बचाव", "हार्ट अटैक के बाद"],
      dosage: {
        children: "0.08 मि.ग्रा./किलो/दिन।",
        adults:   "5–40 मि.ग्रा. 1–2 बार।",
        elderly:  "2.5 मि.ग्रा. शुरू।",
      },
      warnings: [
        "सूखी खांसी सामान्य — डॉक्टर को बताएं",
        "गर्भावस्था में नहीं — जन्म दोष",
        "पोटेशियम न लें",
        "किडनी जांच नियमित",
      ],
    },

    gu: {
      category: "BP ACE Inhib.",
      description: "BP ↓ + Heart+Kid. Dry cough common.",
      uses: ["Hi BP", "HF", "Kid.", "Post-MI"],
      dosage: {
        children: "0.08 mg/kg/d Sp.",
        adults:   "5–40 . 1–2x.",
        elderly:  "2.5 . start.",
      },
      warnings: ["Dry cough → Dr.", "Preg ×", "K+ ×", "Kid. monitor"],
    },
  },

  // ── 44. ROSUVASTATIN ─────────────────────────────────────────────────────
  {
    id: "rosuvastatin",
    name: "Rosuvastatin",
    aliases: [
      "rosuvastatin","crestor","rozavel","rosuvas","rosulip","roseday",
      "razel","roseday f","rosave","rozavas","rosufit"
    ],
    brand: "Crestor · Rozavel · Rosuvas · Rosulip · Roseday",

    en: {
      category: "Cholesterol-Lowering (Statin)",
      description:
        "Rosuvastatin is a newer, more potent statin. Lowers LDL cholesterol very effectively. Can be taken at any time of day (unlike Atorvastatin which is best at night).",
      uses: ["High cholesterol", "Heart disease prevention", "High triglycerides", "After heart attack"],
      dosage: {
        children: "Familial hypercholesterolemia above 8 years. Specialist only.",
        adults:   "5–40 mg once daily. 10 mg is the common starting dose.",
        elderly:  "5–10 mg once daily to start.",
      },
      warnings: [
        "Stop and see doctor if you develop severe muscle pain or weakness",
        "Avoid grapefruit — small interaction",
        "Asian patients: more sensitive — start at 5 mg",
        "Do not take in pregnancy",
      ],
    },

    hi: {
      category: "कोलेस्ट्रॉल (स्टैटिन — शक्तिशाली)",
      description: "रोसुवास्टेटिन एक नई और शक्तिशाली स्टैटिन है। किसी भी समय ले सकते हैं।",
      uses: ["हाई कोलेस्ट्रॉल", "दिल बचाव", "ट्राइग्लिसराइड", "हार्ट अटैक के बाद"],
      dosage: {
        children: "खानदानी: 8+ विशेषज्ञ।",
        adults:   "5–40 मि.ग्रा. एक बार।",
        elderly:  "5–10 मि.ग्रा. से शुरू।",
      },
      warnings: [
        "तेज मांसपेशी दर्द — डॉक्टर",
        "अंगूर न",
        "भारतीय/एशियाई: 5 मि.ग्रा. से शुरू",
        "गर्भावस्था में नहीं",
      ],
    },

    gu: {
      category: "Statin Potent",
      description: "LDL ↓↓. Any time day.",
      uses: ["Hi Chol.", "Heart", "TG", "Post-MI"],
      dosage: {
        children: "FH 8+ Sp.",
        adults:   "5–40 . 1x.",
        elderly:  "5–10 . start.",
      },
      warnings: ["Muscle pain → Dr.", "Grape ×", "Asian: 5 start", "Preg ×"],
    },
  },

  // ── 45. HYDROCORTISONE ───────────────────────────────────────────────────
  {
    id: "hydrocortisone",
    name: "Hydrocortisone",
    aliases: [
      "hydrocortisone","cortisone","hc","lyclear","locoid",
      "synalar","calamine hydro","quadriderm","fucicort","lobate",
      "lobate gm","tenovate","dermovate","clobetasol"
    ],
    brand: "Hydrocortisone · Lobate · Tenovate · Dermovate · Quadriderm",

    en: {
      category: "Steroid Cream — Skin Inflammation",
      description:
        "Hydrocortisone is a mild topical corticosteroid cream that reduces skin inflammation, redness, and itching. Stronger steroids (Clobetasol, Betamethasone) are also used for specific skin conditions.",
      uses: ["Eczema", "Contact dermatitis", "Insect bite reaction", "Skin rash", "Nappy rash (mild HC)"],
      dosage: {
        children: "Apply thin layer once or twice daily. Use mildest effective cream. Avoid face.",
        adults:   "Apply thin layer to affected area once or twice daily. Do not cover with airtight bandage.",
        elderly:  "Same as adults. Monitor for skin thinning with prolonged use.",
      },
      warnings: [
        "Do not use on face, groin, or underarms unless doctor specifically says so",
        "Do not use for more than 7 days without doctor's advice",
        "Stronger steroids (Dermovate/Tenovate) only on doctor's prescription",
        "Do not apply to infected skin — steroids can worsen infections",
      ],
    },

    hi: {
      category: "स्टेरॉइड क्रीम — त्वचा",
      description: "हाइड्रोकोर्टिसोन त्वचा की सूजन, लालिमा और खुजली कम करती है। मजबूत स्टेरॉइड क्रीम (क्लोबेटासोल) विशेषज्ञ से।",
      uses: ["एग्जिमा", "संपर्क त्वचाशोथ", "कीड़े का काटना", "त्वचा पर दाने"],
      dosage: {
        children: "पतली परत 1–2 बार। चेहरे पर नहीं।",
        adults:   "पतली परत 1–2 बार।",
        elderly:  "बड़ों जैसे।",
      },
      warnings: [
        "चेहरे, कमर, बगल पर डॉक्टर की सलाह बिना नहीं",
        "7 दिन से ज्यादा नहीं",
        "मजबूत स्टेरॉइड क्रीम केवल नुस्खे से",
        "संक्रमित त्वचा पर न लगाएं",
      ],
    },

    gu: {
      category: "Steroid Cream Skin",
      description: "Skin inflam/itch ↓. Mild HC. Stronger = Rx.",
      uses: ["Eczema", "Dermatitis", "Insect bite", "Rash"],
      dosage: {
        children: "Thin 1–2x. ×Face.",
        adults:   "Thin 1–2x.",
        elderly:  "Same. Skin thin watch.",
      },
      warnings: ["×Face/Groin/Armpit", "<7days", "Strong Rx only", "×Infected skin"],
    },
  },

  // ── 46. ORS (ORAL REHYDRATION SALTS) ────────────────────────────────────
  {
    id: "ors",
    name: "ORS (Oral Rehydration Salts)",
    aliases: [
      "ors","electral","pedialyte","rehydral","electrobion",
      "elyte","gastrolyte","normolyte","frescolyte","lucozade sport",
      "jeevan jal","nimboo pani","oral rehydration"
    ],
    brand: "Electral · Pedialyte · Rehydral · Electrobion · Gastrolyte",

    en: {
      category: "Rehydration — Fluid Replacement",
      description:
        "ORS replaces fluids and electrolytes (salts) lost through diarrhea, vomiting, or fever. It is the most important treatment for dehydration — more effective than plain water alone. Safe for all ages.",
      uses: ["Diarrhea dehydration", "Vomiting fluid loss", "Fever dehydration", "Heat exhaustion", "Children's diarrhea"],
      dosage: {
        children: "After each loose stool: children under 2 give 50–100 ml; 2–10 years give 100–200 ml.",
        adults:   "200–400 ml (1–2 glasses) after each loose stool. Drink frequently in small sips.",
        elderly:  "Drink small amounts frequently. Monitor signs of dehydration closely.",
      },
      warnings: [
        "Mix with clean drinking water exactly as directed on packet",
        "Do not add extra sugar or salt",
        "Discard unused solution after 1 hour at room temperature (24 hrs in fridge)",
        "See a doctor if diarrhea has blood or does not improve in 24 hours",
      ],
    },

    hi: {
      category: "पुनर्जलीकरण — पानी-नमक संतुलन",
      description: "ORS दस्त, उल्टी या बुखार से खोए पानी और नमक की भरपाई करता है। सभी उम्र के लिए सुरक्षित।",
      uses: ["दस्त से निर्जलीकरण", "उल्टी", "बुखार", "गर्मी", "बच्चों के दस्त"],
      dosage: {
        children: "हर दस्त के बाद: 2 साल से कम 50–100 मिली, 2–10 साल 100–200 मिली।",
        adults:   "हर दस्त के बाद 200–400 मिली।",
        elderly:  "थोड़ा-थोड़ा बार-बार पिएं।",
      },
      warnings: [
        "पैकेट के निर्देश के अनुसार साफ पानी में घोलें",
        "अतिरिक्त चीनी या नमक न मिलाएं",
        "1 घंटे बाद बचा घोल फेंक दें",
        "खूनी दस्त या 24 घंटे में ठीक न हो तो डॉक्टर",
      ],
    },

    gu: {
      category: "ORS Rehydration",
      description: "Fluid+Electrolyte replace. All ages safe.",
      uses: ["Diarr. dehydr.", "Vomiting", "Fever", "Heat", "Child diarr."],
      dosage: {
        children: "Per stool: <2yr 50–100ml, 2–10yr 100–200ml.",
        adults:   "200–400ml per stool.",
        elderly:  "Small sips frequent.",
      },
      warnings: ["Clean water exact", "×Extra sugar/salt", "1hr discard (24hr fridge)", "Blood/24hr no improve → Dr."],
    },
  },

  // ── 47. CALCIUM + VITAMIN D ──────────────────────────────────────────────
  {
    id: "calcium-vitamin-d",
    name: "Calcium + Vitamin D",
    aliases: [
      "calcium","calcium carbonate","calcimax","shelcal","ostocalcium",
      "gemcal","caltrate","supracal","calcirol d3","tab calcium",
      "calcium d3","cal c vita","vitacal"
    ],
    brand: "Shelcal · Calcimax · Gemcal · Caltrate · Supracal · Ostocalcium",

    en: {
      category: "Calcium Supplement — Bone Health",
      description:
        "Calcium is essential for strong bones, teeth, and muscle function. Vitamin D3 helps absorb calcium. Most commonly prescribed together for bone loss (osteoporosis), in pregnant women, and in the elderly.",
      uses: ["Bone weakness (osteoporosis)", "Pregnancy & breastfeeding", "Growing children", "Osteoarthritis", "Calcium deficiency"],
      dosage: {
        children: "500 mg calcium daily (through food and supplements combined).",
        adults:   "500–1000 mg calcium once or twice daily with food. Best absorbed when taken with food.",
        elderly:  "1200 mg calcium + 800 IU Vitamin D3 daily in divided doses.",
      },
      warnings: [
        "Take with food for best absorption",
        "Do not take at the same time as iron or thyroid medicines — space them 2 hours apart",
        "Excess calcium can cause kidney stones — do not exceed 2000 mg per day",
        "Constipation is a common side effect",
      ],
    },

    hi: {
      category: "कैल्शियम — हड्डी स्वास्थ्य",
      description: "कैल्शियम हड्डियों, दांतों और मांसपेशियों के लिए जरूरी है। विटामिन D3 अवशोषण में मदद करता है।",
      uses: ["हड्डी कमजोरी (ऑस्टियोपोरोसिस)", "गर्भावस्था", "बढ़ते बच्चे", "गठिया", "कैल्शियम कमी"],
      dosage: {
        children: "500 मि.ग्रा. रोज।",
        adults:   "500–1000 मि.ग्रा. खाने के साथ।",
        elderly:  "1200 मि.ग्रा. + 800 IU D3 रोज।",
      },
      warnings: [
        "खाने के साथ लें",
        "आयरन या थायराइड दवा से 2 घंटे दूर",
        "ज्यादा लेने से गुर्दे की पथरी",
        "कब्ज हो सकती है",
      ],
    },

    gu: {
      category: "Calcium Bone",
      description: "Bone+Teeth. VitD3 absorb help.",
      uses: ["Osteoporosis", "Pregnancy", "Children", "OA", "Ca def."],
      dosage: {
        children: "500mg/d.",
        adults:   "500–1000mg food.",
        elderly:  "1200mg + 800IU D3.",
      },
      warnings: ["Food", "Iron/Thyroid 2hr apart", "Excess→KidneyStone", "Constip."],
    },
  },

  // ── 48. FOLIC ACID ───────────────────────────────────────────────────────
  {
    id: "folic-acid",
    name: "Folic Acid",
    aliases: [
      "folic acid","folate","folvite","fol","folicap","folsafe",
      "folican","pregnacare folic","folinext","folinext dp",
      "m2 tone","fol 5mg","folinine","neurofol"
    ],
    brand: "Folvite · Folicap · Folsafe · Folinext",

    en: {
      category: "Vitamin B9 — Pregnancy & Blood",
      description:
        "Folic acid (Vitamin B9) is essential for DNA formation and cell growth. Crucial before and during pregnancy to prevent neural tube defects in the baby. Also used for anemia.",
      uses: ["Pregnancy (neural tube defect prevention)", "Anemia (megaloblastic)", "Methotrexate treatment support", "Spina bifida prevention"],
      dosage: {
        children: "As directed by doctor.",
        adults:   "Pregnancy prevention: 400–800 mcg daily starting 1 month before conception. Anemia: 1–5 mg daily.",
        elderly:  "400 mcg–1 mg daily.",
      },
      warnings: [
        "All women planning pregnancy should start 1 month BEFORE conception",
        "Very safe — water-soluble, excess excreted",
        "High doses can mask Vitamin B12 deficiency — combine with B12 if needed",
        "Continue throughout first trimester at minimum",
      ],
    },

    hi: {
      category: "फोलिक एसिड — गर्भावस्था",
      description: "फोलिक एसिड गर्भावस्था में बच्चे की रीढ़ की हड्डी की समस्या से बचाती है। गर्भधारण से 1 महीना पहले शुरू करें।",
      uses: ["गर्भावस्था बचाव (न्यूरल ट्यूब)", "एनीमिया", "मेथोट्रेक्सेट सहायता"],
      dosage: {
        children: "डॉक्टर के अनुसार।",
        adults:   "गर्भावस्था: गर्भधारण से 1 महीना पहले 400–800 mcg। एनीमिया: 1–5 मि.ग्रा.।",
        elderly:  "400 mcg–1 मि.ग्रा.।",
      },
      warnings: [
        "गर्भधारण से 1 महीना पहले शुरू करें",
        "बहुत सुरक्षित",
        "ज्यादा मात्रा से B12 कमी छुप जाती है",
        "पहली तिमाही तक जारी रखें",
      ],
    },

    gu: {
      category: "Folic Acid Pregnancy",
      description: "Neural tube prev. DNA cell. Pre-conception.",
      uses: ["Preg NTD prev.", "Anemia", "Methotrexate"],
      dosage: {
        children: "Dr.",
        adults:   "Preg: 400–800mcg (1mo before). Anemia: 1–5mg.",
        elderly:  "400mcg–1mg.",
      },
      warnings: ["1mo before conception", "Very safe", "High → B12 masked", "1st trimester min."],
    },
  },

  // ── 49. NITROFURANTOIN ───────────────────────────────────────────────────
  {
    id: "nitrofurantoin",
    name: "Nitrofurantoin",
    aliases: [
      "nitrofurantoin","macrobid","macrodan","nitrof","niftran",
      "nitrofur","urotorin","phenurin","furadantin","berkfurin"
    ],
    brand: "Macrobid · Niftran · Urotorin · Furadantin",

    en: {
      category: "Urinary Antibiotic (UTI)",
      description:
        "Nitrofurantoin specifically targets urinary tract infections. It concentrates in urine to kill bacteria. Only works for the urinary tract — not for other infections.",
      uses: ["Urinary tract infection (UTI)", "Recurrent UTI prevention", "Bladder infection", "Cystitis"],
      dosage: {
        children: "5–7 mg per kg per day in 4 doses. Doctor's prescription needed.",
        adults:   "50–100 mg 4 times daily with food. Modified release (Macrobid): 100 mg twice daily.",
        elderly:  "Use with caution — avoid if kidney function is significantly reduced.",
      },
      warnings: [
        "Take with food — reduces nausea and increases absorption",
        "Can turn urine dark brown/yellow — this is harmless",
        "Do not take if kidney function is poor",
        "Complete the full course even if symptoms improve",
      ],
    },

    hi: {
      category: "मूत्र एंटीबायोटिक (UTI)",
      description: "नाइट्रोफ्यूरेंटोइन मूत्र पथ संक्रमण (UTI) के लिए विशेष। मूत्र में केंद्रित होकर बैक्टीरिया मारती है।",
      uses: ["UTI", "बार-बार UTI बचाव", "मूत्राशय संक्रमण", "सिस्टाइटिस"],
      dosage: {
        children: "5–7 मि.ग्रा./किलो 4 खुराकों में।",
        adults:   "50–100 मि.ग्रा. 4 बार खाने के साथ।",
        elderly:  "सावधानी — कमजोर किडनी में न।",
      },
      warnings: [
        "खाने के साथ लें",
        "पेशाब गहरे भूरे/पीले रंग का हो सकता है — सामान्य है",
        "किडनी कमजोर हो तो न लें",
        "पूरा कोर्स करें",
      ],
    },

    gu: {
      category: "UTI Antibiotic",
      description: "UTI specific. Urine conc.",
      uses: ["UTI", "Recurrent UTI", "Cystitis"],
      dosage: {
        children: "5–7 mg/kg 4x.",
        adults:   "50–100 . 4x food.",
        elderly:  "Caution poor Kid. ×",
      },
      warnings: ["Food", "Urine dark = normal", "Poor kidney ×", "Full course"],
    },
  },

  // ── 50. PANTOPRAZOLE + DOMPERIDONE (PAN-D) ───────────────────────────────
  {
    id: "ranitidine-sucralfate",
    name: "Sucralfate",
    aliases: [
      "sucralfate","sucral","sucralfate gel","succal","ulcyte",
      "ulsanic","antepsin","carafate","gastroplex","sucrafil"
    ],
    brand: "Sucral · Ulcyte · Ulsanic · Carafate · Gastroplex",

    en: {
      category: "Stomach Ulcer Protector",
      description:
        "Sucralfate forms a protective coating over stomach and duodenal ulcers, shielding them from acid. It does not reduce acid production — it creates a physical barrier. Must be taken on an empty stomach.",
      uses: ["Stomach ulcer", "Duodenal ulcer", "GERD (as add-on)", "Stress ulcer prevention", "Gastritis"],
      dosage: {
        children: "40–80 mg per kg per day in divided doses. Doctor only.",
        adults:   "1 gram (2 tablets or 10 ml gel) 4 times daily — 1 hour before meals and at bedtime, on empty stomach.",
        elderly:  "Same as adults.",
      },
      warnings: [
        "Take on EMPTY STOMACH — 1 hour before meals",
        "Do not take antacids within 30 minutes",
        "Can cause constipation",
        "Space other medicines by 2 hours — sucralfate can reduce their absorption",
      ],
    },

    hi: {
      category: "पेट के अल्सर का सुरक्षा कवच",
      description: "सक्राल्फेट पेट के अल्सर पर सुरक्षात्मक परत बनाती है। एसिड कम नहीं करती — सुरक्षा देती है। खाली पेट लें।",
      uses: ["पेट का अल्सर", "डुओडेनल अल्सर", "GERD सहायक", "गेस्ट्राइटिस"],
      dosage: {
        children: "40–80 मि.ग्रा./किलो 4 भागों में।",
        adults:   "1 ग्राम खाने से 1 घंटा पहले, दिन में 4 बार। खाली पेट।",
        elderly:  "बड़ों जैसे।",
      },
      warnings: [
        "खाली पेट — खाने से 1 घंटा पहले",
        "30 मिनट के अंदर एंटासिड न लें",
        "कब्ज हो सकती है",
        "दूसरी दवाएं 2 घंटे दूर",
      ],
    },

    gu: {
      category: "Ulcer Coating",
      description: "Stomach/Duodenum ulcer barrier. Empty stomach.",
      uses: ["Stomach ulcer", "Duodenal ulcer", "GERD", "Gastritis"],
      dosage: {
        children: "40–80 mg/kg 4x. Dr.",
        adults:   "1g 4x. 1hr pre-meal. Empty.",
        elderly:  "Same.",
      },
      warnings: ["Empty 1hr pre-meal", "Antacid 30min gap", "Constip.", "Other drugs 2hr gap"],
    },
  },

];