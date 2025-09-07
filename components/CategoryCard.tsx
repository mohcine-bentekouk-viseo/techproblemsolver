"use client";

import Button from "./ui/Button";

interface Category {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  gradient: string;
  problems: string[];
  color: string;
}

interface CategoryCardProps {
  category: Category;
  index: number;
}

export default function CategoryCard({ category, index }: CategoryCardProps) {
  return (
    <div
      className="p-8 text-center group border-0 shadow-soft-lg relative overflow-hidden bg-white rounded-2xl cursor-pointer transform hover:scale-105 hover:shadow-soft-xl transition-all duration-300"
      onClick={() => (window.location.href = category.href)}
    >
      {/* Background Gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}
      ></div>

      {/* Icon */}
      <div className="relative z-10 mb-6">
        <div className="mx-auto w-20 h-20 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-soft flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          {category.icon}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
          {category.title}
        </h3>
        <p className="text-gray-600 mb-6">{category.description}</p>

        {/* Common Issues */}
        <div className="text-left">
          <p className="text-sm font-semibold text-gray-900 mb-3 text-center">
            Common issues we solve:
          </p>
          <ul className="space-y-2">
            {category.problems.map((problem, idx) => (
              <li key={idx} className="flex items-center text-sm text-gray-700">
                <span
                  className={`w-2 h-2 bg-${category.color}-500 rounded-full mr-3 flex-shrink-0`}
                ></span>
                {problem}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-8" onClick={(e) => e.stopPropagation()}>
          <Button
            href={category.href}
            variant={index === 1 ? "secondary" : "primary"}
            className="w-full group-hover:scale-105 transition-transform"
          >
            View Solutions
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
}
