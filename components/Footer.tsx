import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Solutions Hub
            </h3>
            <p className="text-gray-600 text-sm">
              Your trusted source for solving everyday tech problems quickly and
              easily.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">
              Problem Categories
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/phone-problems"
                  className="text-gray-600 hover:text-primary-600"
                >
                  Phone Problems
                </Link>
              </li>
              <li>
                <Link
                  href="/computer-problems"
                  className="text-gray-600 hover:text-primary-600"
                >
                  Computer Problems
                </Link>
              </li>
              <li>
                <Link
                  href="/internet-problems"
                  className="text-gray-600 hover:text-primary-600"
                >
                  Internet Problems
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-primary-600"
                >
                  Blog & Guides
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-primary-600"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-primary-600"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-600 hover:text-primary-600"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-600 hover:text-primary-600"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Quick Solutions Hub. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
