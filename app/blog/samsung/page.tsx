import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Samsung Galaxy Guides & Reviews | Tech Problem Solver",
  description:
    "Complete guides for Samsung Galaxy smartphones and tablets. Tips, tricks, and troubleshooting for Galaxy S24, S23, A series, and more.",
  keywords:
    "Samsung Galaxy guides, Galaxy S24, Galaxy S23, Galaxy A series, Samsung One UI, Galaxy tips, Samsung troubleshooting",
};

const samsungModels = [
  {
    category: "Galaxy S Series",
    models: [
      {
        name: "Galaxy S24 Ultra",
        year: "2024",
        slug: "galaxy-s24-ultra",
        description: "Flagship with S Pen and 200MP camera",
        articles: 10,
        popular: true,
      },
      {
        name: "Galaxy S24+",
        year: "2024",
        slug: "galaxy-s24-plus",
        description: "Large display with premium features",
        articles: 8,
        popular: true,
      },
      {
        name: "Galaxy S24",
        year: "2024",
        slug: "galaxy-s24",
        description: "Compact flagship with AI features",
        articles: 7,
        popular: true,
      },
      {
        name: "Galaxy S23 Ultra",
        year: "2023",
        slug: "galaxy-s23-ultra",
        description: "S Pen productivity powerhouse",
        articles: 15,
        popular: true,
      },
      {
        name: "Galaxy S23+",
        year: "2023",
        slug: "galaxy-s23-plus",
        description: "Balanced performance and battery",
        articles: 12,
        popular: false,
      },
      {
        name: "Galaxy S23",
        year: "2023",
        slug: "galaxy-s23",
        description: "Compact flagship experience",
        articles: 10,
        popular: false,
      },
      {
        name: "Galaxy S22 Ultra",
        year: "2022",
        slug: "galaxy-s22-ultra",
        description: "Note series spiritual successor",
        articles: 8,
        popular: false,
      },
    ],
  },
  {
    category: "Galaxy A Series",
    models: [
      {
        name: "Galaxy A55 5G",
        year: "2024",
        slug: "galaxy-a55",
        description: "Mid-range with flagship features",
        articles: 5,
        popular: true,
      },
      {
        name: "Galaxy A35 5G",
        year: "2024",
        slug: "galaxy-a35",
        description: "Affordable 5G with great cameras",
        articles: 4,
        popular: false,
      },
      {
        name: "Galaxy A25 5G",
        year: "2024",
        slug: "galaxy-a25",
        description: "Entry-level 5G smartphone",
        articles: 3,
        popular: false,
      },
      {
        name: "Galaxy A54 5G",
        year: "2023",
        slug: "galaxy-a54",
        description: "Popular mid-range choice",
        articles: 8,
        popular: true,
      },
    ],
  },
  {
    category: "Galaxy Z Series",
    models: [
      {
        name: "Galaxy Z Fold 6",
        year: "2024",
        slug: "galaxy-z-fold-6",
        description: "Latest book-style foldable",
        articles: 6,
        popular: true,
      },
      {
        name: "Galaxy Z Flip 6",
        year: "2024",
        slug: "galaxy-z-flip-6",
        description: "Compact flip phone design",
        articles: 5,
        popular: true,
      },
      {
        name: "Galaxy Z Fold 5",
        year: "2023",
        slug: "galaxy-z-fold-5",
        description: "Productivity-focused foldable",
        articles: 7,
        popular: false,
      },
      {
        name: "Galaxy Z Flip 5",
        year: "2023",
        slug: "galaxy-z-flip-5",
        description: "Stylish clamshell foldable",
        articles: 6,
        popular: false,
      },
    ],
  },
];

const featuredArticles = [
  {
    title: "Galaxy S24 Ultra Complete Setup & Customization Guide",
    slug: "galaxy-s24-ultra-setup-guide",
    model: "Galaxy S24 Ultra",
    excerpt:
      "Learn how to set up and customize your Galaxy S24 Ultra for maximum productivity with S Pen tips, One UI features, and more.",
    readTime: "18 min read",
    publishDate: "2025-09-04",
    featured: true,
  },
  {
    title: "Master Galaxy S23 Camera: Pro Photography Tips",
    slug: "galaxy-s23-camera-pro-tips",
    model: "Galaxy S23 Series",
    excerpt:
      "Unlock the full potential of your Galaxy S23 camera system with professional photography techniques and hidden features.",
    readTime: "14 min read",
    publishDate: "2025-09-03",
    featured: false,
  },
  {
    title: "One UI 6.1 Hidden Features and Tips",
    slug: "one-ui-6-1-hidden-features",
    model: "All Galaxy Devices",
    excerpt:
      "Discover advanced One UI 6.1 features that will transform how you use your Samsung Galaxy smartphone.",
    readTime: "10 min read",
    publishDate: "2025-09-02",
    featured: false,
  },
];

export default function SamsungBlogPage() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="text-4xl">📱</span>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Samsung Galaxy Guides
            </h1>
          </div>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
            Complete guides, tips, and troubleshooting for Samsung Galaxy
            devices. From flagship S series to budget-friendly A series and
            innovative foldables.
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
                    <span className="text-primary-600 font-medium">
                      Samsung
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
            <div className="text-sm text-gray-600">Galaxy Models Covered</div>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-sm text-gray-600">Detailed Guides</div>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              One UI
            </div>
            <div className="text-sm text-gray-600">Latest Version Tips</div>
          </div>
          <div className="text-center p-6 bg-orange-50 rounded-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">2024</div>
            <div className="text-sm text-gray-600">Up to Date Content</div>
          </div>
        </div>

        {/* Featured Articles */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Featured Samsung Guides
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <Link
                key={article.slug}
                href={`/blog/samsung/${article.slug}`}
                className={`group rounded-lg overflow-hidden hover:shadow-lg transition-shadow ${
                  index === 0
                    ? "lg:col-span-2 bg-gradient-to-r from-blue-50 to-purple-50"
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
                      Read guide →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Models by Category */}
        <div className="space-y-12">
          {samsungModels.map((category) => (
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
                    href={`/blog/samsung/${model.slug}`}
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

        {/* One UI Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Master Samsung One UI</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Samsung's One UI offers countless customization options and
              productivity features. Learn how to make the most of your Galaxy
              device's software.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="font-semibold mb-2">Customization</h3>
              <p className="text-sm text-blue-100">
                Themes, wallpapers, and interface tweaks
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="font-semibold mb-2">Productivity</h3>
              <p className="text-sm text-blue-100">
                Multi-window, edge panels, and shortcuts
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="font-semibold mb-2">Security</h3>
              <p className="text-sm text-blue-100">
                Knox, biometrics, and privacy features
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Need Help with Your Galaxy Device?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Our Samsung experts are here to help with setup guides,
            troubleshooting tips, and advanced customization tutorials for all
            Galaxy devices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 transition-colors"
            >
              Request Help
            </Link>
            <Link
              href="/phone-problems"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-base font-medium rounded-md text-white hover:border-gray-500 transition-colors"
            >
              Common Problems
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
