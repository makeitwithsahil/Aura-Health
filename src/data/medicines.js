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

]