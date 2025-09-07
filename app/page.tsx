import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import CategoryCard from "@/components/CategoryCard";
import {
  Smartphone,
  Laptop,
  Wifi,
  Users,
  TrendingUp,
  Target,
  Search,
  CheckCircle,
  MessageSquare,
  Star,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Quick Solutions Hub - Solve Your Tech Problems Fast",
  description:
    "Get instant solutions to common phone, computer, and internet problems. Expert troubleshooting guides and step-by-step fixes for everyday tech issues.",
  keywords:
    "tech support, troubleshooting, phone problems, computer issues, internet problems, tech solutions, how to fix",
};

export default function HomePage() {
  const categories = [
    {
      title: "Phone Problems",
      description: "Battery issues, charging problems, app crashes, and more",
      href: "/phone-problems",
      icon: <Smartphone className="w-8 h-8 text-blue-600" />,
      gradient: "from-blue-500 to-purple-600",
      problems: [
        "Phone won't charge",
        "Battery drains fast",
        "Apps keep crashing",
      ],
      color: "primary",
    },
    {
      title: "Computer Problems",
      description: "Slow performance, startup issues, hardware problems",
      href: "/computer-problems",
      icon: <Laptop className="w-8 h-8 text-green-600" />,
      gradient: "from-green-500 to-teal-600",
      problems: [
        "Computer running slow",
        "Won't start up",
        "Blue screen errors",
      ],
      color: "secondary",
    },
    {
      title: "Internet Problems",
      description: "WiFi connectivity, slow speeds, network issues",
      href: "/internet-problems",
      icon: <Wifi className="w-8 h-8 text-orange-600" />,
      gradient: "from-orange-500 to-red-600",
      problems: [
        "Slow internet speed",
        "WiFi disconnecting",
        "Can't access websites",
      ],
      color: "accent",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Small Business Owner",
      avatar: <Users className="w-12 h-12 text-blue-600" />,
      content:
        "Fixed my laptop's slow performance in just 10 minutes! The step-by-step guide was so easy to follow.",
      rating: 5,
    },
    {
      name: "Mike Johnson",
      role: "Student",
      avatar: <Users className="w-12 h-12 text-green-600" />,
      content:
        "My phone was overheating constantly. Thanks to this site, I learned simple tricks that solved the problem immediately.",
      rating: 5,
    },
    {
      name: "Elena Rodriguez",
      role: "Remote Worker",
      avatar: <Users className="w-12 h-12 text-purple-600" />,
      content:
        "WiFi issues were killing my productivity. The troubleshooting guide got me back online in minutes!",
      rating: 5,
    },
  ];

  const recentBlogPosts = [
    {
      title: "Complete iPhone 15 Pro Max Camera Guide",
      excerpt: "Master every camera feature with our comprehensive guide",
      href: "/blog/apple/iphone-15-pro-max-camera-guide",
      image: <Smartphone className="w-8 h-8 text-blue-600" />,
      readTime: "8 min read",
      category: "Apple",
    },
    {
      title: "iPhone 14 Pro Max Camera Tips & Tricks",
      excerpt: "Professional photography tips for your iPhone 14 Pro Max",
      href: "/blog/apple/iphone-14-pro-max-camera-guide",
      image: <Smartphone className="w-8 h-8 text-gray-600" />,
      readTime: "6 min read",
      category: "Apple",
    },
  ];

  const features = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Quick & Easy",
      description:
        "Step-by-step solutions that anyone can follow, no technical knowledge required.",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Tested Solutions",
      description:
        "All our solutions are tested and verified to work on common devices and systems.",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Always Free",
      description:
        "All our troubleshooting guides and solutions are completely free to access.",
      color: "from-blue-400 to-indigo-500",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative isolate px-6 pt-14 lg:px-8 min-h-screen flex items-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-white to-secondary-50/30"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        {/* Background Image Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: "url(/images/backgrounds/hero-bg.jpg)" }}
        ></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-soft"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-soft"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-soft"></div>

        <div className="mx-auto max-w-6xl py-16 sm:py-24 lg:py-32 relative z-10">
          <div className="text-center animate-fade-in">
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary-100 text-primary-800 mb-6 gap-2">
                <TrendingUp className="w-4 h-4" />
                Trusted by 50,000+ users worldwide
              </span>
            </div>

            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl lg:text-8xl">
              Solve Your{" "}
              <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">
                Tech Problems
              </span>{" "}
              <span className="block text-4xl sm:text-5xl lg:text-6xl mt-2">
                In Minutes, Not Hours
              </span>
            </h1>

            <p className="mt-8 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
              Get quick, step-by-step solutions to the most common phone,
              computer, and internet problems.
              <span className="font-semibold text-primary-700">
                {" "}
                No technical expertise required
              </span>{" "}
              — just simple fixes that actually work.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                href="#problems"
                size="lg"
                className="group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Find Your Solution
                  <svg
                    className="ml-2 -mr-1 w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </Button>

              <Button variant="outline" size="lg" href="#how-it-works">
                How It Works
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-2 border-white"></div>
                </div>
                <span className="ml-3">Trusted by 50k+ users</span>
              </div>
              <div className="flex items-center">
                <span className="text-yellow-400">★★★★★</span>
                <span className="ml-2">4.9/5 success rate</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                <span>Average fix time: 5 minutes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Categories */}
      <section id="problems" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-semibold mb-4">
              <Target className="w-6 h-6 inline mr-2" />
              Quick Solutions
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              What problem are you facing?
            </h2>
            <p className="text-xl text-gray-600">
              Choose your device or issue category to find instant solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {categories.map((category, index) => (
              <CategoryCard
                key={category.title}
                category={category}
                index={index}
              />
            ))}
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">50K+</div>
              <div className="text-sm text-gray-600 mt-1">Problems Solved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-600">98%</div>
              <div className="text-sm text-gray-600 mt-1">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-600">5min</div>
              <div className="text-sm text-gray-600 mt-1">Avg Fix Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">24/7</div>
              <div className="text-sm text-gray-600 mt-1">Always Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-secondary-100 text-secondary-800 rounded-full text-sm font-semibold mb-4">
              <TrendingUp className="w-6 h-6 inline mr-2" />
              How It Works
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Get Fixed in 3 Simple Steps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "1",
                title: "Identify Your Problem",
                description:
                  "Browse our categories or describe what's happening with your device",
                icon: "🔍",
              },
              {
                step: "2",
                title: "Follow Simple Steps",
                description:
                  "Get clear, step-by-step instructions that anyone can follow",
                icon: "📋",
              },
              {
                step: "3",
                title: "Problem Solved!",
                description:
                  "Your device is working perfectly again in just minutes",
                icon: "✅",
              },
            ].map((step, index) => (
              <div key={step.step} className="text-center relative">
                {/* Connection Line */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary-300 to-secondary-300 transform translate-x-1/2"></div>
                )}

                <div className="relative bg-white rounded-2xl p-8 shadow-soft border border-gray-100 hover:shadow-soft-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl mx-auto mb-6 shadow-soft">
                    {step.step}
                  </div>

                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent-100 text-accent-800 rounded-full text-sm font-semibold mb-4">
              <MessageSquare className="w-6 h-6 inline mr-2" />
              Success Stories
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Real People, Real Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands who've solved their tech problems with our guides
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.name}
                className="p-8 text-center hover:shadow-soft-lg transition-all duration-300 border-0"
              >
                <div className="text-5xl mb-4">{testimonial.avatar}</div>

                {/* Stars */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ★
                    </span>
                  ))}
                </div>

                <blockquote className="text-gray-700 mb-6 italic">
                  "{testimonial.content}"
                </blockquote>

                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="inline-block px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-semibold mb-4">
                <FileText className="w-6 h-6 inline mr-2" />
                Latest Guides
              </span>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Featured Articles
              </h2>
              <p className="text-xl text-gray-600 mt-4">
                In-depth guides for specific devices and advanced solutions
              </p>
            </div>
            <Button href="/blog" variant="outline">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentBlogPosts.map((post, index) => (
              <Card
                key={post.title}
                hover={true}
                className="overflow-hidden border-0 shadow-soft-lg"
              >
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{post.image}</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500 ml-auto">
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors">
                    <Link href={post.href}>{post.title}</Link>
                  </h3>

                  <p className="text-gray-600 mb-6">{post.excerpt}</p>

                  <Button href={post.href} variant="ghost" className="p-0">
                    Read More
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
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <span className="inline-block px-4 py-2 bg-secondary-100 text-secondary-800 rounded-full text-sm font-semibold mb-4">
              🌟 Why Choose Us
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              The Quick Solutions Advantage
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={feature.title} className="text-center group">
                <div
                  className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white text-2xl shadow-soft group-hover:shadow-soft-lg group-hover:scale-110 transition-all duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Fix Your Tech Problems?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Join thousands of satisfied users who've solved their issues in
              minutes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="#problems"
                variant="secondary"
                size="lg"
                className="bg-white text-primary-700 hover:bg-gray-50"
              >
                Get Started Now
              </Button>
              <Button
                href="/about"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-700"
              >
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
