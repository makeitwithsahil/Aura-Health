# 💊 Aura Health

**A focused, structured medicine explanation tool — built for clarity, speed, and accessibility.**

> Hackathon MVP · Built with React + Vite · Multilingual (EN / HI / GU)

---

## 🎯 What It Does

Most people Google a medicine name and get clinical articles, conflicting forum advice, and information they can't understand. Aura Health solves this with a single, focused tool:

**Type a medicine name → Get a clear, structured summary, instantly.**

Every result includes:
- What the medicine is used for (plain language)
- Age-wise dosage breakdown (Children / Adults / Elderly)
- Important warnings, shown upfront
- One-click English audio via Text-to-Speech
- A symptom checker that maps symptoms to relevant OTC medicines

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔍 **Medicine Search** | Type any medicine or brand name — live suggestions appear as you type |
| 💊 **Structured Results** | Consistent format every time: uses, dosage, warnings |
| 👨‍👩‍👧 **Age-Wise Dosage** | Separate dosage info for Children, Adults, and Elderly |
| 🔊 **One-Click Audio** | Built-in Text-to-Speech for spoken explanations |
| 🩺 **Symptom Checker** | Describe symptoms → get matched OTC medicine suggestions with dosage |
| 🌐 **Multilingual UI** | Full support for English, Hindi (हिंदी), and Gujarati (ગુજરાતી) |
| ⚡ **Instant & Free** | No account, no login, no ads — ever |

---

## 🖥️ Pages

| Route | Page | Description |
|---|---|---|
| `/` | **Home** | Medicine search with live suggestions, results, audio, and dosage tabs |
| `/symptoms` | **Symptom Checker** | Enter symptoms → get OTC medicine recommendations |
| `/about` | **About** | Project background, problem statement, feature overview, and hackathon scope |
| `/team` | **Team** | Meet the people who built Aura Health |
| `/contact` | **Contact** | Email, WhatsApp, location, and social links |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | [React](https://react.dev/) + [Vite](https://vitejs.dev/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) (utility-first, no component library) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [Remix Icons](https://remixicon.com/) via `react-icons/ri` |
| Audio | Web Speech API (`window.speechSynthesis`) — no external service |
| Data | Local JSON/JS medicine database — no backend, no API calls |
| Routing | [React Router](https://reactrouter.com/) |
| Language | JavaScript (JSX) |

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/makeitwithsahil/Aura-Health.git
cd Aura-Health

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
src/
├── pages/
│   ├── Home.jsx          # Medicine search + results
│   ├── Symptoms.jsx      # Symptom checker
│   ├── About.jsx         # About page
│   ├── Team.jsx          # Team page
│   └── Contact.jsx       # Contact page
├── services/
│   ├── searchService.js  # Medicine lookup + autocomplete logic
│   └── speechService.js  # TTS script builder + speaker
├── data/
│   └── medicines.js      # Pre-filled medicine database
└── App.jsx               # Routing + layout
```

---

## 🌐 Multilingual Support

Aura Health supports three languages out of the box. Language is passed as a `lang` prop to each page component.

| Code | Language |
|---|---|
| `en` | English |
| `hi` | Hindi (हिंदी) |
| `gu` | Gujarati (ગુજરાતી) |

All UI strings, quick-add pills, dosage guidance, and audio scripts are fully translated. Switch language from the navbar — no page reload required.

---

## 🩺 Symptom Checker

The symptom checker (`/symptoms`) works without any backend or AI API:

1. User types or selects symptoms (e.g. Fever, Headache, Acidity)
2. A local symptom→medicine map scores and ranks matching OTC medicines
3. Results show: why it helps, typical frequency, age-wise dosage, and warnings
4. If the user has medicines at home, those are matched first ("From your cabinet")

---

## ❌ What's NOT in This MVP

This is a scoped hackathon prototype. The following are intentionally excluded:

- ❌ OCR / image scanning of medicine labels
- ❌ Pharmacy or purchase suggestions
- ❌ Full global medicine database
- ❌ User accounts or login
- ❌ Prescription analysis
- ❌ Backend server or database

---

## 🔍 Why Not Just Use ChatGPT?

| | Aura Health | ChatGPT / Google |
|---|---|---|
| **Focus** | Built only for medicines | General-purpose |
| **Format** | Same structured output every time | Varies by how you ask |
| **Ease of use** | Type name → get answer, no prompting | Requires knowing how to phrase medical questions |
| **Audio** | Built-in one-click TTS | No dedicated spoken output |
| **Speed** | Instant, no conversation needed | Requires a back-and-forth exchange |

---

## ⚠️ Disclaimer

Aura Health provides **general educational information only**. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a licensed healthcare professional before taking any medicine.

---

## 📬 Contact

- **Email:** [workwiths4hil@gmail.com](mailto:workwiths4hil@gmail.com)
- **WhatsApp:** +91 92199 17186
- **Location:** Vadodara, Gujarat, India
- **GitHub:** [github.com/makeitwithsahil/Aura-Health](https://github.com/makeitwithsahil/Aura-Health)

---

## 📄 License

This project was built for a hackathon. All rights reserved by the team.
