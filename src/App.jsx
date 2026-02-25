import { useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// ─── Lazy-loaded pages (each page's JS only downloads when first visited) ──────
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Symptoms = lazy(() => import("./pages/Symptoms"));
const Contact = lazy(() => import("./pages/Contact"));

// ─── Page wrapper with shared background ─────────────────────────────────────
function PageWrapper({ children }) {
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
    <PageWrapper>
      <Navbar lang={lang} onLangChange={setLang} />

      {/* Suspense: shell (navbar + footer) is always visible; page content fades in */}
      <main className="flex-1">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home lang={lang} />} />
            <Route path="/about" element={<About lang={lang} />} />
            <Route path="/symptoms" element={<Symptoms lang={lang} />} />
            <Route path="/contact" element={<Contact lang={lang} />} />
          </Routes>
        </Suspense>
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