import Link from "next/link";
import {
  Smartphone,
  Monitor,
  Globe,
  FileText,
  Info,
  Mail,
  Lock,
  FileIcon,
  Heart,
  Wrench,
} from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      name: "Twitter",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M2 3a1 1 0 00-1 1v12a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H2zm13.5 6L9 6.5v7l6.5-3.5z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                  <Wrench className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Tech Problem Solver
                </h3>
              </div>
              <p className="text-gray-600 text-sm mb-6 max-w-md">
                Your trusted source for solving everyday tech problems quickly
                and easily. We provide step-by-step solutions that anyone can
                follow, no technical expertise required.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="bg-white p-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 text-gray-600 hover:text-primary-600 hover:scale-105"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Problem Categories */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                Problem Categories
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/phone-problems"
                    className="text-gray-600 hover:text-primary-600 transition-colors flex items-center group"
                  >
                    <Smartphone className="w-4 h-4" />
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">
                      Phone Problems
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/computer-problems"
                    className="text-gray-600 hover:text-primary-600 transition-colors flex items-center group"
                  >
                    <Monitor className="w-4 h-4" />
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">
                      Computer Problems
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/internet-problems"
                    className="text-gray-600 hover:text-primary-600 transition-colors flex items-center group"
                  >
                    <Globe className="w-4 h-4" />
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">
                      Internet Problems
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-600 hover:text-primary-600 transition-colors flex items-center group"
                  >
                    <FileText className="w-4 h-4" />
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">
                      Blog & Guides
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support & Legal */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-2 h-2 bg-secondary-500 rounded-full mr-2"></span>
                Support & Legal
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-600 hover:text-secondary-600 transition-colors flex items-center group"
                  >
                    <Info className="w-4 h-4" />
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">
                      About Us
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-600 hover:text-secondary-600 transition-colors flex items-center group"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">
                      Contact Support
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-gray-600 hover:text-secondary-600 transition-colors flex items-center group"
                  >
                    <Lock className="w-4 h-4" />
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">
                      Privacy Policy
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-gray-600 hover:text-secondary-600 transition-colors flex items-center group"
                  >
                    <FileIcon className="w-4 h-4" />
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">
                      Terms of Service
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <span>© {new Date().getFullYear()} Tech Problem Solver</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">All rights reserved</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span className="flex items-center">
                Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> for
                problem solvers
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
