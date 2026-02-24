import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  RiHeartPulseLine,
  RiTranslate2,
  RiMenuLine,
  RiCloseLine,
  RiGithubLine,
} from "react-icons/ri";

import Home     from "./pages/Home";
import About    from "./pages/About";
import Symptoms from "./pages/Symptoms";
import Contact  from "./pages/Contact";
import Navbar   from "./components/layout/Navbar";
import Footer   from "./components/layout/Footer";

// ─── Page wrapper with shared background ─────────────────────────────────────
function PageWrapper({ lang, children }) {
  return (
    <div
      className="min-h-screen flex flex-col text-slate-800"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 0% -10%,  rgba(30,227,148,0.22) 0%, transparent 58%)," +
          "radial-gradient(ellipse 60% 45% at 100% 0%,  rgba(30,227,148,0.15) 0%, transparent 52%)," +
          "radial-gradient(ellipse 70% 50% at 50% 110%, rgba(30,227,148,0.16) 0%, transparent 58%)," +
          "radial-gradient(ellipse 40% 30% at 80% 60%,  rgba(30,227,148,0.08) 0%, transparent 45%)," +
          "#f0fdf8",
      }}
    >
      {children}
    </div>
  );
}

// ─── App shell ────────────────────────────────────────────────────────────────
function AppShell() {
  const [lang, setLang] = useState("en");

  return (
    <PageWrapper lang={lang}>
      <Navbar lang={lang} onLangChange={setLang} />

      {/* Page content — pass lang down as prop */}
      <main className="flex-1">
        <Routes>
          <Route path="/"         element={<Home     lang={lang} />} />
          <Route path="/about"    element={<About    lang={lang} />} />
          <Route path="/symptoms" element={<Symptoms lang={lang} />} />
          <Route path="/contact"  element={<Contact  lang={lang} />} />
        </Routes>
      </main>

      <Footer lang={lang} />
    </PageWrapper>
  );
}

// ─── Root export ──────────────────────────────────────────────────────────────
export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}