"use client";

import Button from "./ui/Button";

interface Brand {
  name: string;
  slug: string;
  description: string;
  logo: React.ReactNode;
  gradient: string;
  models: string[];
  articleCount: number;
}

interface BrandCardProps {
  brand: Brand;
}

export default function BrandCard({ brand }: BrandCardProps) {
  return (
    <div
      className="p-8 text-center group border-0 shadow-soft relative overflow-hidden bg-white rounded-2xl cursor-pointer transform hover:scale-105 hover:shadow-soft-lg transition-all duration-300"
      onClick={() => (window.location.href = `/blog/${brand.slug}`)}
    >
      {/* Background Gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${brand.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}
      ></div>

      {/* Logo */}
      <div className="relative z-10 mb-6">
        <div className="mx-auto w-20 h-20 bg-white rounded-2xl shadow-soft flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-gray-100">
          {brand.logo}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
          {brand.name}
        </h3>
        <p className="text-gray-600 mb-4">{brand.description}</p>

        {/* Popular Models */}
        <div className="mb-6">
          <p className="text-sm font-semibold text-gray-900 mb-2">
            Popular Models:
          </p>
          <div className="flex flex-wrap justify-center gap-1">
            {brand.models.slice(0, 3).map((model) => (
              <span
                key={model}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
              >
                {model}
              </span>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center space-x-4 mb-6 text-sm text-gray-600">
          <span>{brand.articleCount} guides</span>
          <span>•</span>
          <span>Updated weekly</span>
        </div>

        {/* CTA */}
        <div onClick={(e) => e.stopPropagation()}>
          <Button
            href={`/blog/${brand.slug}`}
            variant="outline"
            className="w-full group-hover:scale-105 transition-transform"
          >
            Browse {brand.name} Guides
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
}
