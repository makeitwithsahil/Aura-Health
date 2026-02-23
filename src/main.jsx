// main.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Recommended index.html <head> tags for SEO:
//
//   <title>ExplainMyMed — Understand Your Medicine in Seconds</title>
//   <meta name="description" content="Instantly look up what any medicine does,
//     see age-wise dosage guidance for children, adults, and elderly, and listen
//     to a clear audio explanation. Simple, fast, and designed for everyone." />
//   <meta name="viewport" content="width=device-width, initial-scale=1" />
//   <meta name="robots" content="index, follow" />
//   <meta property="og:title" content="ExplainMyMed — Understand Your Medicine in Seconds" />
//   <meta property="og:description" content="Plain-English medicine explanations
//     with age-wise dosage and built-in audio. Free and instant." />
//   <meta property="og:type" content="website" />
//   <link rel="canonical" href="https://yourdomain.com" />
// ─────────────────────────────────────────────────────────────────────────────

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"; // Tailwind base styles

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
