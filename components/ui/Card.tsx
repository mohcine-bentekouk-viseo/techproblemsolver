"use client";

import React from "react";
import { cn } from "../../lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export default function Card({
  children,
  className = "",
  hover = false,
  onClick,
}: CardProps) {
  const baseClasses = "bg-white rounded-lg shadow-soft border border-gray-100";
  const hoverClasses = hover ? "card-hover cursor-pointer" : "";

  const classes = cn(baseClasses, hoverClasses, className);

  if (onClick) {
    return (
      <div className={classes} onClick={onClick} role="button" tabIndex={0}>
        {children}
      </div>
    );
  }

  return <div className={classes}>{children}</div>;
}
