import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Apple iPhone & iPad Guides | Quick Solutions Hub",
  description:
    "Complete guides, tips, and troubleshooting for Apple iPhone, iPad, Mac, and Apple Watch. From iPhone 15 to older models.",
  keywords:
    "Apple iPhone guides, iPad tips, iOS troubleshooting, iPhone 15, iPhone 14, iPhone 13, iPhone 12, Apple Watch",
};

const appleModels = [
  {
    category: "iPhone",
    models: [
      {
        name: "iPhone 15 Pro Max",
        year: "2023",
        slug: "iphone-15-pro-max",
        description: "Latest flagship with titanium design and advanced camera",
        articles: 8,
        popular: true,
      },
      {
        name: "iPhone 15 Pro",
        year: "2023",
        slug: "iphone-15-pro",
        description: "Compact pro model with powerful performance",
        articles: 6,
        popular: true,
      },
      {
        name: "iPhone 15",
        year: "2023",
        slug: "iphone-15",
        description: "Standard model with USB-C and excellent cameras",
        articles: 5,
        popular: false,
      },
      {
        name: "iPhone 14 Pro Max",
        year: "2022",
        slug: "iphone-14-pro-max",
        description: "Dynamic Island and 48MP main camera",
        articles: 12,
        popular: true,
      },
      {
        name: "iPhone 14",
        year: "2022",
        slug: "iphone-14",
        description: "Reliable performance with improved battery",
        articles: 8,
        popular: false,
      },
      {
        name: "iPhone 13 Pro",
        year: "2021",
        slug: "iphone-13-pro",
        description: "ProMotion display and cinematic video mode",
        articles: 10,
        popular: false,
      },
      {
        name: "iPhone 13",
        year: "2021",
        slug: "iphone-13",
        description: "Great battery life and dual camera system",
        articles: 9,
        popular: false,
      },
      {
        name: "iPhone 12 Pro",
        year: "2020",
        slug: "iphone-12-pro",
        description: "First iPhone with 5G and LiDAR scanner",
        articles: 7,
        popular: false,
      },
      {
        name: "iPhone 12",
        year: "2020",
        slug: "iphone-12",
        description: "5G support with classic design language",
        articles: 6,
        popular: false,
      },
    ],
  },
  {
    category: "iPad",
    models: [
      {
        name: 'iPad Pro 12.9" (2023)',
        year: "2023",
        slug: "ipad-pro-129-2023",
        description: "M2 chip with incredible performance for pro tasks",
        articles: 4,
        popular: true,
      },
      {
        name: "iPad Air (2022)",
        year: "2022",
        slug: "ipad-air-2022",
        description: "M1 chip in a lightweight design",
        articles: 3,
        popular: false,
      },
      {
        name: "iPad (10th Gen)",
        year: "2022",
        slug: "ipad-10th-gen",
        description: "Colorful design with USB-C port",
        articles: 2,
        popular: false,
      },
    ],
  },
  {
    category: "Apple Watch",
    models: [
      {
        name: "Apple Watch Series 9",
        year: "2023",
        slug: "apple-watch-series-9",
        description: "S9 chip with double tap gesture",
        articles: 3,
        popular: true,
      },
      {
        name: "Apple Watch Ultra 2",
        year: "2023",
        slug: "apple-watch-ultra-2",
        description: "Rugged design for extreme adventures",
        articles: 2,
        popular: false,
      },
    ],
  },
];

const featuredArticles = [
  {
    title: "Complete iPhone 15 Pro Max Setup Guide",
    slug: "iphone-15-pro-max-setup-guide",
    model: "iPhone 15 Pro Max",
    excerpt:
      "Everything you need to know to set up your new iPhone 15 Pro Max perfectly, from initial setup to advanced customizations.",
    readTime: "15 min read",
    publishDate: "2025-09-05",
    featured: true,
  },
  {
    title: "iPhone 14 Pro Max Camera Mastery",
    slug: "iphone-14-pro-max-camera-guide",
    model: "iPhone 14 Pro Max",
    excerpt:
      "Master the 48MP camera system, ProRAW, and Cinematic mode for professional-quality photos and videos.",
    readTime: "12 min read",
    publishDate: "2025-09-04",
    featured: false,
  },
  {
    title: "iOS 17 Hidden Features You Should Know",
    slug: "ios-17-hidden-features",
    model: "All iPhones",
    excerpt:
      "Discover lesser-known iOS 17 features that will enhance your iPhone experience and boost productivity.",
    readTime: "8 min read",
    publishDate: "2025-09-03",
    featured: false,
  },
];

export default function AppleBlogPage() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="text-4xl">🍎</span>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Apple Guides
            </h1>
          </div>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
            Comprehensive guides, tips, and troubleshooting for all Apple
            devices. From the latest iPhone 15 series to older models, we've got
            you covered.
          </p>

          {/* Breadcrumb */}
          <div className="mt-6">
            <nav className="flex justify-center" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link
                    href="/blog"
                    className="text-gray-500 hover:text-primary-600"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <span className="text-primary-600 font-medium">Apple</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Featured Articles */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Featured Articles
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <Link
                key={article.slug}
                href={`/blog/apple/${article.slug}`}
                className={`group rounded-lg overflow-hidden hover:shadow-lg transition-shadow ${
                  index === 0
                    ? "lg:col-span-2 bg-gradient-to-r from-gray-50 to-blue-50"
                    : "bg-gray-50"
                }`}
              >
                <div className={`p-6 ${index === 0 ? "lg:p-8" : ""}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm font-medium text-primary-600">
                      {article.model}
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="text-sm text-gray-500">
                      {article.readTime}
                    </span>
                    {article.featured && (
                      <>
                        <span className="text-gray-300">•</span>
                        <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full font-medium">
                          FEATURED
                        </span>
                      </>
                    )}
                  </div>

                  <h3
                    className={`font-bold text-gray-900 mb-3 group-hover:text-primary-600 ${
                      index === 0 ? "text-2xl lg:text-3xl" : "text-xl"
                    }`}
                  >
                    {article.title}
                  </h3>

                  <p
                    className={`text-gray-600 mb-4 leading-relaxed ${
                      index === 0 ? "text-lg" : ""
                    }`}
                  >
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
                      Read article →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Models by Category */}
        <div className="space-y-12">
          {appleModels.map((category) => (
            <div key={category.category}>
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                {category.category}
                <span className="text-sm font-normal text-gray-500">
                  ({category.models.length} models)
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.models.map((model) => (
                  <Link
                    key={model.slug}
                    href={`/blog/apple/${model.slug}`}
                    className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-primary-300 transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-bold text-gray-900 group-hover:text-primary-600 mb-1">
                          {model.name}
                        </h3>
                        <span className="text-sm text-gray-500">
                          {model.year}
                        </span>
                      </div>
                      {model.popular && (
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                          POPULAR
                        </span>
                      )}
                    </div>

                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {model.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {model.articles}{" "}
                        {model.articles === 1 ? "article" : "articles"}
                      </span>
                      <span className="text-primary-600 group-hover:text-primary-700 font-medium text-sm">
                        View guides →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Our Apple experts are constantly adding new guides and
            troubleshooting tips. Contact us if you need help with a specific
            issue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 transition-colors"
            >
              Request a Guide
            </Link>
            <Link
              href="/phone-problems"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-base font-medium rounded-md text-white hover:border-gray-500 transition-colors"
            >
              General Phone Problems
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
