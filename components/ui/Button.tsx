"use client";

import React from "react";
import Link from "next/link";
import { cn } from "../../lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const buttonVariants = {
  primary:
    "bg-primary-600 text-white hover:bg-primary-700 shadow-soft hover:shadow-soft-lg",
  secondary:
    "bg-secondary-600 text-white hover:bg-secondary-700 shadow-soft hover:shadow-soft-lg",
  outline:
    "border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white",
  ghost: "text-primary-600 hover:bg-primary-50",
};

const buttonSizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  onClick,
  disabled = false,
  type = "button",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:transform hover:-translate-y-0.5";

  const classes = cn(
    baseClasses,
    buttonVariants[variant],
    buttonSizes[size],
    className
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
