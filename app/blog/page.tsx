import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Tech Blog - Device Guides & Brand Reviews | Quick Solutions Hub",
  description:
    "Latest tech guides, device reviews, and troubleshooting tips for popular brands like Apple, Samsung, Google Pixel, OnePlus, and more.",
  keywords:
    "tech blog, device guides, phone reviews, Apple iPhone, Samsung Galaxy, Google Pixel, OnePlus, Honor, Poco, Xiaomi",
};

const brands = [
  {
    name: "Apple",
    slug: "apple",
    description: "iPhone, iPad, Mac, and Apple Watch guides",
    logo: "🍎",
    color: "bg-gray-100",
    models: ["iPhone 15", "iPhone 14", "iPhone 13", "iPhone 12"],
    articleCount: 12,
  },
  {
    name: "Samsung",
    slug: "samsung",
    description: "Galaxy smartphones and tablets",
    logo: "📱",
    color: "bg-blue-50",
    models: ["Galaxy S24", "Galaxy S23", "Galaxy A54", "Galaxy Z Fold 5"],
    articleCount: 15,
  },
  {
    name: "Google",
    slug: "google",
    description: "Pixel phones and Google services",
    logo: "🤖",
    color: "bg-green-50",
    models: ["Pixel 8", "Pixel 7", "Pixel 6a", "Pixel Fold"],
    articleCount: 8,
  },
  {
    name: "OnePlus",
    slug: "oneplus",
    description: "OnePlus flagship and Nord series",
    logo: "⚡",
    color: "bg-red-50",
    models: ["OnePlus 12", "OnePlus 11", "OnePlus Nord 3", "OnePlus Open"],
    articleCount: 6,
  },
  {
    name: "Xiaomi",
    slug: "xiaomi",
    description: "Mi and Redmi smartphone series",
    logo: "🔥",
    color: "bg-orange-50",
    models: ["Xiaomi 14", "Redmi Note 13", "Mi 13T", "Poco X6"],
    articleCount: 10,
  },
  {
    name: "Honor",
    slug: "honor",
    description: "Honor flagship and mid-range phones",
    logo: "💎",
    color: "bg-purple-50",
    models: ["Honor Magic 6", "Honor 90", "Honor X9a", "Honor Magic V2"],
    articleCount: 5,
  },
  {
    name: "Poco",
    slug: "poco",
    description: "Performance-focused budget phones",
    logo: "🚀",
    color: "bg-yellow-50",
    models: ["Poco F6", "Poco X6 Pro", "Poco C65", "Poco M6"],
    articleCount: 7,
  },
  {
    name: "Oppo",
    slug: "oppo",
    description: "Find X series and Reno smartphones",
    logo: "✨",
    color: "bg-pink-50",
    models: ["Oppo Find X7", "Oppo Reno 11", "Oppo A79", "Oppo Find N3"],
    articleCount: 4,
  },
];

const recentArticles = [
  {
    id: 1,
    title: "Complete Guide to iPhone 15 Pro Max Camera Settings",
    brand: "Apple",
    slug: "apple",
    articleSlug: "iphone-15-pro-max-camera-guide",
    excerpt:
      "Master your iPhone 15 Pro Max camera with our comprehensive guide covering all modes, settings, and professional tips.",
    publishDate: "2025-09-05",
    readTime: "8 min read",
    image: "📸",
  },
  {
    id: 2,
    title: "Samsung Galaxy S24 Ultra: Complete Setup Guide",
    brand: "Samsung",
    slug: "samsung",
    articleSlug: "galaxy-s24-ultra-setup-guide",
    excerpt:
      "Step-by-step guide to set up your new Galaxy S24 Ultra, customize settings, and optimize performance.",
    publishDate: "2025-09-04",
    readTime: "12 min read",
    image: "⚙️",
  },
  {
    id: 3,
    title: "Google Pixel 8 Pro: Best Camera Tips & Tricks",
    brand: "Google",
    slug: "google",
    articleSlug: "pixel-8-pro-camera-tips",
    excerpt:
      "Unlock the full potential of your Pixel 8 Pro camera with advanced photography techniques and settings.",
    publishDate: "2025-09-03",
    readTime: "10 min read",
    image: "📷",
  },
  {
    id: 4,
    title: "OnePlus 12: Gaming Performance Optimization",
    brand: "OnePlus",
    slug: "oneplus",
    articleSlug: "oneplus-12-gaming-optimization",
    excerpt:
      "Maximize your OnePlus 12 gaming experience with performance tweaks, cooling tips, and best game settings.",
    publishDate: "2025-09-02",
    readTime: "7 min read",
    image: "🎮",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Tech Blog & Device Guides
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
            Discover comprehensive guides, reviews, and troubleshooting tips for
            your favorite tech brands. From latest flagship phones to
            budget-friendly options, we cover it all.
          </p>
        </div>

        {/* Brand Categories */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Browse by Brand
            </h2>
            <p className="text-gray-600">
              Choose your device brand for specific guides
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brands.map((brand) => (
              <Link
                key={brand.slug}
                href={`/blog/${brand.slug}`}
                className={`${brand.color} rounded-xl p-6 hover:shadow-lg transition-shadow group`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{brand.logo}</span>
                  <span className="text-sm font-medium text-gray-600">
                    {brand.articleCount} articles
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600">
                  {brand.name}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {brand.description}
                </p>

                <div className="space-y-1">
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                    Popular Models:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {brand.models.slice(0, 2).map((model) => (
                      <span
                        key={model}
                        className="text-xs bg-white bg-opacity-70 px-2 py-1 rounded-full text-gray-700"
                      >
                        {model}
                      </span>
                    ))}
                    {brand.models.length > 2 && (
                      <span className="text-xs text-gray-500">
                        +{brand.models.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Articles */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Latest Articles
            </h2>
            <Link
              href="/blog/all"
              className="text-primary-600 hover:text-primary-500 font-medium"
            >
              View all articles →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentArticles.map((article) => (
              <Link
                key={article.id}
                href={`/blog/${article.slug}/${article.articleSlug}`}
                className="group bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{article.image}</span>
                    <span className="text-sm font-medium text-primary-600">
                      {article.brand}
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="text-sm text-gray-500">
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {new Date(article.publishDate).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </span>
                    <span className="text-primary-600 group-hover:text-primary-700 font-medium text-sm">
                      Read more →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Categories Overview */}
        <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What You'll Find Here
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our blog covers everything from basic setup guides to advanced
              troubleshooting, helping you get the most out of your devices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">📱</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Device Setup Guides
              </h3>
              <p className="text-sm text-gray-600">
                Complete setup tutorials for new device owners
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">🔧</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Troubleshooting Tips
              </h3>
              <p className="text-sm text-gray-600">
                Fix common issues specific to your device model
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">⭐</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Tips & Tricks
              </h3>
              <p className="text-sm text-gray-600">
                Hidden features and optimization secrets
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
