// components/ui/Input.jsx

import { forwardRef } from "react";

/**
 * Reusable text input with optional leading icon support.
 */
const Input = forwardRef(function Input(
  {
    value,
    onChange,
    onKeyDown,
    placeholder = "",
    type = "text",
    id,
    name,
    ariaLabel,
    leadingIcon: LeadingIcon,
    className = "",
    autoFocus = false,
    autoComplete = "off",
    disabled = false,
  },
  ref
) {
  return (
    <div className="relative flex items-center w-full">
      {LeadingIcon && (
        <span className="absolute left-4 text-slate-400 pointer-events-none flex items-center">
          <LeadingIcon size={18} />
        </span>
      )}
      <input
        ref={ref}
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        autoFocus={autoFocus}
        autoComplete={autoComplete}
        disabled={disabled}
        aria-label={ariaLabel || placeholder}
        className={`
          w-full bg-white/5 border border-white/10 text-slate-100 placeholder-slate-500
          rounded-xl py-3.5 text-sm font-medium
          focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50
          transition-all duration-200
          disabled:opacity-50 disabled:cursor-not-allowed
          ${LeadingIcon ? "pl-11 pr-4" : "px-4"}
          ${className}
        `}
      />
    </div>
  );
});

export default Input;
