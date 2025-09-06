import type { Metadata } from "next";
import Link from "next/link";

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
      icon: "📱",
      problems: [
        "Phone won't charge",
        "Battery drains fast",
        "Apps keep crashing",
      ],
    },
    {
      title: "Computer Problems",
      description: "Slow performance, startup issues, hardware problems",
      href: "/computer-problems",
      icon: "💻",
      problems: [
        "Computer running slow",
        "Won't start up",
        "Blue screen errors",
      ],
    },
    {
      title: "Internet Problems",
      description: "WiFi connectivity, slow speeds, network issues",
      href: "/internet-problems",
      icon: "🌐",
      problems: [
        "Slow internet speed",
        "WiFi disconnecting",
        "Can't access websites",
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Background Image Overlay (uncomment when you add your image) */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{ backgroundImage: "url(/images/backgrounds/hero-bg.jpg)" }}
        ></div>

        <div className="mx-auto max-w-4xl py-16 sm:py-24 lg:py-32 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Solve Your <span className="text-primary-600">Tech Problems</span>{" "}
              Fast
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              Get quick, step-by-step solutions to the most common phone,
              computer, and internet problems. No technical expertise required -
              just simple fixes that work.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="#problems"
                className="rounded-md bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                Find Solutions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Problem Categories */}
      <div id="problems" className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">
              Quick Solutions
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What problem are you facing?
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Choose your device or issue category to find instant solutions
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {categories.map((category) => (
                <div
                  key={category.title}
                  className="flex flex-col bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
                >
                  <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-gray-900">
                    <span className="text-2xl">{category.icon}</span>
                    {category.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{category.description}</p>
                    <div className="mt-4">
                      <p className="text-sm font-medium text-gray-900 mb-2">
                        Common issues:
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {category.problems.map((problem, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                            {problem}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6">
                      <Link
                        href={category.href}
                        className="text-sm font-semibold leading-6 text-primary-600 hover:text-primary-500"
                      >
                        View all solutions <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Quick Solutions Hub?
            </h2>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary-600">
                    <span className="text-white text-lg">⚡</span>
                  </div>
                  Quick & Easy
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Step-by-step solutions that anyone can follow, no technical
                    knowledge required.
                  </p>
                </dd>
              </div>

              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary-600">
                    <span className="text-white text-lg">✓</span>
                  </div>
                  Tested Solutions
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    All our solutions are tested and verified to work on common
                    devices and systems.
                  </p>
                </dd>
              </div>

              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary-600">
                    <span className="text-white text-lg">🆓</span>
                  </div>
                  Always Free
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    All our troubleshooting guides and solutions are completely
                    free to access.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
