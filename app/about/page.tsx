import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Quick Solutions Hub",
  description:
    "Learn about Quick Solutions Hub's mission to provide easy-to-follow tech support and troubleshooting guides for everyday problems.",
  keywords:
    "about us, tech support mission, troubleshooting guides, Quick Solutions Hub team",
};

export default function AboutPage() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            About Quick Solutions Hub
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Your trusted source for solving everyday tech problems
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-primary-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              At Quick Solutions Hub, we believe that technology should make
              life easier, not more complicated. Our mission is to bridge the
              gap between complex tech problems and simple solutions that anyone
              can understand and implement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                What We Do
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Provide step-by-step solutions to common tech problems
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Focus on phones, computers, and internet connectivity issues
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Translate technical jargon into simple, understandable
                  language
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Test all solutions to ensure they actually work
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Why Choose Us
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  No technical expertise required
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Clear, easy-to-follow instructions
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Solutions for both beginners and experienced users
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Regular updates with new problems and solutions
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Our Approach
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We understand that when your phone won't charge, your computer is
              running slow, or your internet keeps disconnecting, you need
              solutions fast. That's why we focus on:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-xl">⚡</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Speed</h4>
                <p className="text-sm text-gray-600">
                  Quick solutions that get you back up and running
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-xl">📋</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Simplicity</h4>
                <p className="text-sm text-gray-600">
                  No confusing technical terms or complex procedures
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-xl">✓</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Success</h4>
                <p className="text-sm text-gray-600">
                  Tested solutions that actually solve the problem
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-primary-600 p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Our Commitment
            </h3>
            <p className="text-gray-700">
              We're committed to making technology accessible to everyone.
              Whether you're a complete beginner or someone with tech
              experience, our guides are designed to help you solve problems
              quickly and learn along the way. We regularly update our content
              and add new solutions based on the most common issues people face.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Get Started
            </h3>
            <p className="text-gray-700 mb-6">
              Ready to solve your tech problems? Browse our categories or search
              for your specific issue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/phone-problems"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
              >
                Phone Problems
              </a>
              <a
                href="/computer-problems"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Computer Problems
              </a>
              <a
                href="/internet-problems"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Internet Problems
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
