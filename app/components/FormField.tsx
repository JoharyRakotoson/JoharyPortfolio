import React from "react";

type FormFieldProps = {
  label: string;
  name: string;
  type?: "text" | "email" | "textarea";
  placeholder?: string;
  rows?: number;
  className?: string;
};

export default function FormField({
  label,
  name,
  type = "text",
  placeholder,
  rows = 4,
  className = "",
}: FormFieldProps) {
  const baseClasses =
    "mt-3 w-full rounded-2xl border border-gray-700/70 bg-transparent px-5 py-3 text-white outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20";

  return (
    <label className={`block text-sm font-medium text-gray-300 ${className}`}>
      {label}
      {type === "textarea" ? (
        <textarea
          name={name}
          rows={rows}
          placeholder={placeholder}
          className={`${baseClasses} resize-none`}
        />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          className={baseClasses}
        />
      )}
    </label>
  );
}
