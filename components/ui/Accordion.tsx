"use client";

import React, { useState } from "react";
import { cn } from "../../lib/utils";

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}

export default function Accordion({
  items,
  allowMultiple = false,
  className = "",
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);

    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      if (!allowMultiple) {
        newOpenItems.clear();
      }
      newOpenItems.add(id);
    }

    setOpenItems(newOpenItems);
  };

  return (
    <div className={cn("space-y-2", className)}>
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-lg border border-gray-200 overflow-hidden"
        >
          <button
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
            onClick={() => toggleItem(item.id)}
            aria-expanded={openItems.has(item.id)}
          >
            <div className="flex items-center space-x-3">
              {item.icon && (
                <span
                  className="flex items-center"
                  role="img"
                  aria-hidden="true"
                >
                  {item.icon}
                </span>
              )}
              <span className="font-semibold text-gray-900">{item.title}</span>
            </div>
            <svg
              className={cn(
                "w-5 h-5 text-gray-500 transition-transform duration-200",
                openItems.has(item.id) ? "rotate-180" : ""
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            className={cn(
              "accordion-content px-6 pb-4",
              openItems.has(item.id) ? "open" : ""
            )}
          >
            <div className="text-gray-700">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
