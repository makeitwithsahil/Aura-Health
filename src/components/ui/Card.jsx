// components/ui/Card.jsx

import { motion } from "framer-motion";

/**
 * Glassmorphism card with optional hover lift.
 */
export default function Card({ children, className = "", hoverable = false, as: Tag = "div" }) {
  const base =
    "bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl";

  if (hoverable) {
    return (
      <motion.div
        whileHover={{ y: -4, scale: 1.015 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        className={`${base} ${className}`}
      >
        {children}
      </motion.div>
    );
  }

  return <Tag className={`${base} ${className}`}>{children}</Tag>;
}
