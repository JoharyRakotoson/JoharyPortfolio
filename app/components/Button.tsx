"use client";

import React from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline" | "social";

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  target?: string;
  rel?: string;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-red-500 text-white border border-red-500 hover:bg-red-600",
  secondary:
    "border border-white/20 bg-transparent text-white hover:border-red-500 hover:text-red-300",
  ghost: "bg-white/10 text-white hover:bg-white/20 border border-white/10",
  outline:
    "border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)] backdrop-blur-md bg-black-500/80 text-white hover:border-red-500",
  social:
    "w-full flex items-center justify-start gap-3 px-4 py-3 rounded-xl border border-gray-800 bg-gray-900/90 text-white hover:border-red-500 hover:bg-gray-800/60 hover:text-red-300 transition-all duration-200",
};

export default function Button({
  children,
  variant = "primary",
  href,
  type = "button",
  className = "",
  onClick,
  target,
  rel,
}: ButtonProps) {
  const sharedClasses = `inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold transition duration-200 ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={sharedClasses} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={sharedClasses} onClick={onClick}>
      {children}
    </button>
  );
}
