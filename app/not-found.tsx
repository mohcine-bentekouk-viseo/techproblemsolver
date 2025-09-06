import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-16 px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Page Not Found
          </h2>
          <p className="text-gray-600">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block w-full bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors"
          >
            Go Back Home
          </Link>

          <div className="text-sm text-gray-500">
            Or try searching for solutions:
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            <Link
              href="/phone-problems"
              className="flex-1 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors text-sm"
            >
              Phone Issues
            </Link>
            <Link
              href="/computer-problems"
              className="flex-1 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors text-sm"
            >
              Computer Issues
            </Link>
            <Link
              href="/internet-problems"
              className="flex-1 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors text-sm"
            >
              Internet Issues
            </Link>
          </div>
        </div>

        <div className="mt-8 text-xs text-gray-400">
          If you think this is an error, please{" "}
          <Link
            href="/contact"
            className="text-primary-600 hover:text-primary-500"
          >
            contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
