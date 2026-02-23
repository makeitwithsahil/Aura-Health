// components/ui/Button.jsx

import { motion } from "framer-motion";

/**
 * Reusable Button component.
 * Variants: "primary" | "secondary" | "ghost"
 */
export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
  ariaLabel,
  fullWidth = false,
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-xl text-sm tracking-wide transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 disabled:opacity-50 disabled:cursor-not-allowed";

  const sizes = "px-5 py-2.5";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-900/30",
    secondary:
      "bg-white/10 text-slate-200 border border-white/20 hover:bg-white/20 backdrop-blur-sm",
    ghost:
      "bg-transparent text-slate-400 hover:text-slate-200 hover:bg-white/5",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      whileHover={disabled ? {} : { scale: 1.03 }}
      whileTap={disabled ? {} : { scale: 0.97 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className={`${base} ${sizes} ${variants[variant]} ${fullWidth ? "w-full" : ""} ${className}`}
    >
      {children}
    </motion.button>
  );
}
