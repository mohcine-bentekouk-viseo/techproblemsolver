import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import BrandCard from "@/components/BrandCard";
import {
  Smartphone,
  Monitor,
  Star,
  Settings,
  Zap,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tech Blog - Device Guides & Brand Reviews | Tech Problem Solver",
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
    logo: <Smartphone className="w-10 h-10 text-gray-700" />,
    gradient: "from-gray-400 to-gray-600",
    models: ["iPhone 15", "iPhone 14", "iPhone 13", "iPhone 12"],
    articleCount: 12,
  },
  {
    name: "Samsung",
    slug: "samsung",
    description: "Galaxy smartphones and tablets",
    logo: <Monitor className="w-10 h-10 text-blue-600" />,
    gradient: "from-blue-500 to-blue-700",
    models: ["Galaxy S24", "Galaxy S23", "Galaxy A54", "Galaxy Z Fold 5"],
    articleCount: 15,
  },
  {
    name: "Google",
    slug: "google",
    description: "Pixel phones and Google services",
    logo: "🤖",
    gradient: "from-green-500 to-green-700",
    models: ["Pixel 8", "Pixel 7", "Pixel 6a", "Pixel Fold"],
    articleCount: 8,
  },
  {
    name: "OnePlus",
    slug: "oneplus",
    description: "OnePlus flagship and Nord series",
    logo: <Zap className="w-6 h-6" />,
    gradient: "from-red-500 to-red-700",
    models: ["OnePlus 12", "OnePlus 11", "OnePlus Nord 3", "OnePlus Open"],
    articleCount: 6,
  },
  {
    name: "Xiaomi",
    slug: "xiaomi",
    description: "Mi and Redmi smartphone series",
    logo: "🔥",
    gradient: "from-orange-500 to-orange-700",
    models: ["Xiaomi 14", "Redmi Note 13", "Mi 13T", "Poco X6"],
    articleCount: 10,
  },
  {
    name: "Honor",
    slug: "honor",
    description: "Honor flagship and mid-range phones",
    logo: "💎",
    gradient: "from-purple-500 to-purple-700",
    models: ["Honor Magic 6", "Honor 90", "Honor X9a", "Honor Magic V2"],
    articleCount: 5,
  },
];

const featuredArticles = [
  {
    id: 1,
    title: "Complete Guide to iPhone 15 Pro Max Camera Settings",
    brand: "Apple",
    slug: "apple",
    articleSlug: "iphone-15-pro-max-camera-guide",
    excerpt:
      "Master your iPhone 15 Pro Max camera with our comprehensive guide covering all modes, settings, and professional tips for stunning photos.",
    publishDate: "2025-09-05",
    readTime: "8 min read",
    image: "📸",
    featured: true,
    views: "15.2K",
  },
  {
    id: 2,
    title: "Samsung Galaxy S24 Ultra: Complete Setup Guide",
    brand: "Samsung",
    slug: "samsung",
    articleSlug: "galaxy-s24-ultra-setup-guide",
    excerpt:
      "Step-by-step guide to set up your new Galaxy S24 Ultra, customize settings, and optimize performance from day one.",
    publishDate: "2025-09-04",
    readTime: "12 min read",
    image: <Settings className="w-12 h-12" />,
    featured: false,
    views: "8.7K",
  },
  {
    id: 3,
    title: "Google Pixel 8 Pro: Best Camera Tips & Tricks",
    brand: "Google",
    slug: "google",
    articleSlug: "pixel-8-pro-camera-tips",
    excerpt:
      "Unlock the full potential of your Pixel 8 Pro camera with advanced photography techniques and AI-powered features.",
    publishDate: "2025-09-03",
    readTime: "10 min read",
    image: "📷",
    featured: false,
    views: "12.1K",
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
    featured: false,
    views: "6.3K",
  },
];

const getBrandColor = (brandName: string) => {
  const brand = brands.find((b) => b.name === brandName);
  return brand?.gradient || "from-gray-500 to-gray-700";
};

export default function BlogPage() {
  const featuredPost = featuredArticles.find((article) => article.featured);
  const recentPosts = featuredArticles.filter((article) => !article.featured);

  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-blue-50 min-h-screen">
      {/* Hero Section */}
      <section className="px-6 pt-8 pb-16 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary-100 text-primary-800 mb-6">
              <FileText className="w-6 h-6 inline mr-2" />
              Tech Blog & Guides
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
            Device Guides &{" "}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Brand Reviews
            </span>
          </h1>

          <p className="text-xl leading-8 text-gray-600 max-w-3xl mx-auto mb-8">
            Discover comprehensive guides, reviews, and troubleshooting tips for
            your favorite tech brands. From latest flagship phones to
            budget-friendly devices.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">50+</div>
              <div className="text-sm text-gray-600">Detailed Guides</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary-600">6</div>
              <div className="text-sm text-gray-600">Top Brands</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-600">100K+</div>
              <div className="text-sm text-gray-600">Monthly Readers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">Weekly</div>
              <div className="text-sm text-gray-600">New Content</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="pb-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-accent-100 text-accent-800 rounded-full text-sm font-semibold mb-4">
                ⭐ Editor's Pick
              </span>
              <h2 className="text-3xl font-bold text-gray-900">
                Featured Article
              </h2>
            </div>

            <Card
              hover={true}
              className="overflow-hidden border-0 shadow-soft-lg bg-gradient-to-r from-white to-gray-50"
            >
              <div className="md:flex">
                <div className="md:w-1/3 p-8 flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50">
                  <div className="text-8xl">{featuredPost.image}</div>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center mb-4">
                    <span
                      className={`px-3 py-1 bg-gradient-to-r ${getBrandColor(featuredPost.brand)} text-white text-xs font-semibold rounded-full mr-3`}
                    >
                      {featuredPost.brand}
                    </span>
                    <span className="text-sm text-gray-500">
                      {featuredPost.readTime}
                    </span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-sm text-gray-500">
                      {featuredPost.views} views
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-4 hover:text-primary-600 transition-colors">
                    <Link
                      href={`/blog/${featuredPost.slug}/${featuredPost.articleSlug}`}
                    >
                      {featuredPost.title}
                    </Link>
                  </h3>

                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <Button
                      href={`/blog/${featuredPost.slug}/${featuredPost.articleSlug}`}
                      size="lg"
                    >
                      Read Full Guide
                      <svg
                        className="ml-2 w-5 h-5"
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
                    <span className="text-sm text-gray-500">
                      Published{" "}
                      {new Date(featuredPost.publishDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Brand Categories */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-secondary-100 text-secondary-800 rounded-full text-sm font-semibold mb-4">
              <Smartphone className="w-6 h-6 inline mr-2" />
              Browse by Brand
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your Device Brand
            </h2>
            <p className="text-lg text-gray-600">
              Find guides and reviews specific to your favorite tech brands
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand) => (
              <BrandCard key={brand.name} brand={brand} />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="inline-block px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-semibold mb-4">
                🔥 Trending Now
              </span>
              <h2 className="text-3xl font-bold text-gray-900">
                Latest Guides
              </h2>
              <p className="text-lg text-gray-600 mt-2">
                Fresh content updated weekly
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <Card
                key={post.id}
                hover={true}
                className="overflow-hidden border-0 shadow-soft"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <span className="text-3xl mr-3">{post.image}</span>
                      <span
                        className={`px-3 py-1 bg-gradient-to-r ${getBrandColor(post.brand)} text-white text-xs font-semibold rounded-full`}
                      >
                        {post.brand}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">{post.views}</span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}/${post.articleSlug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{post.readTime}</span>
                    <span>
                      {new Date(post.publishDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button href="/blog/all" variant="outline" size="lg">
              View All Articles
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
      </section>
    </div>
  );
}
