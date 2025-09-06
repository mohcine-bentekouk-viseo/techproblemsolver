import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Quick Solutions Hub",
  description:
    "Privacy Policy for Quick Solutions Hub including information about data collection, cookies, advertising, and your privacy rights.",
  keywords:
    "privacy policy, data protection, cookies, advertising, GDPR compliance",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-blue-50 border-l-4 border-primary-600 p-6 mb-8">
            <p className="text-gray-700 font-medium">
              This Privacy Policy explains how Quick Solutions Hub collects,
              uses, and protects your information when you visit our website and
              use our services.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
            1. Information We Collect
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Personal Information
          </h3>
          <p className="text-gray-700 mb-4">
            We may collect personal information that you voluntarily provide to
            us when you:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Contact us through our contact form</li>
            <li>Subscribe to our newsletter (if available)</li>
            <li>Submit feedback or suggestions</li>
            <li>Participate in surveys or promotions</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Automatically Collected Information
          </h3>
          <p className="text-gray-700 mb-4">
            When you visit our website, we automatically collect certain
            information, including:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>IP address and location information</li>
            <li>Browser type and version</li>
            <li>Device information and operating system</li>
            <li>Pages visited and time spent on our site</li>
            <li>Referring website information</li>
            <li>Search terms used to find our site</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-700 mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Provide and improve our services</li>
            <li>Respond to your inquiries and support requests</li>
            <li>Analyze website usage and optimize user experience</li>
            <li>Comply with legal obligations</li>
            <li>Prevent fraud and enhance security</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
            3. Cookies and Tracking Technologies
          </h2>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Important Cookie Notice
            </h3>
            <p className="text-gray-700">
              Our website uses cookies and similar tracking technologies to
              enhance your browsing experience and provide personalized content
              and advertisements.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Types of Cookies We Use
          </h3>

          <div className="space-y-4 mb-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">
                Essential Cookies
              </h4>
              <p className="text-gray-700 text-sm">
                These cookies are necessary for the website to function properly
                and cannot be disabled.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">
                Analytics Cookies
              </h4>
              <p className="text-gray-700 text-sm">
                We use Google Analytics to understand how visitors use our site
                and improve our services.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">
                Advertising Cookies
              </h4>
              <p className="text-gray-700 text-sm">
                We use Google AdSense to display relevant advertisements. These
                cookies help personalize ads based on your interests.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
            4. Third-Party Services and Advertising
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Google AdSense
          </h3>
          <p className="text-gray-700 mb-4">
            We use Google AdSense to display advertisements on our website.
            Google AdSense uses cookies to serve ads based on your prior visits
            to our website or other websites. You can opt out of personalized
            advertising by visiting{" "}
            <a
              href="https://www.google.com/settings/ads"
              className="text-primary-600 hover:text-primary-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google\'s Ads Settings
            </a>
            .
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Google Analytics
          </h3>
          <p className="text-gray-700 mb-6">
            We use Google Analytics to analyze website traffic and user
            behavior. Google Analytics uses cookies to collect information about
            your use of our website. You can opt out of Google Analytics by
            installing the
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              className="text-primary-600 hover:text-primary-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Analytics opt-out browser add-on
            </a>
            .
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
            5. Data Sharing and Disclosure
          </h2>
          <p className="text-gray-700 mb-4">
            We do not sell, trade, or otherwise transfer your personal
            information to third parties except:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>
              To trusted service providers who assist us in operating our
              website
            </li>
            <li>When required by law or to comply with legal processes</li>
            <li>
              To protect our rights, property, or safety, or that of our users
            </li>
            <li>In connection with a business transfer or merger</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
            6. Data Security
          </h2>
          <p className="text-gray-700 mb-6">
            We implement appropriate security measures to protect your personal
            information against unauthorized access, alteration, disclosure, or
            destruction. However, no method of transmission over the internet or
            electronic storage is 100% secure.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
            7. Your Rights and Choices
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Cookie Preferences
          </h3>
          <p className="text-gray-700 mb-4">
            You can control cookies through your browser settings. However,
            disabling cookies may affect the functionality of our website.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Opt-Out of Personalized Ads
          </h3>
          <p className="text-gray-700 mb-4">
            You can opt out of personalized advertising by:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>
              Visiting{" "}
              <a
                href="https://www.google.com/settings/ads"
                className="text-primary-600 hover:text-primary-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Ads Settings
              </a>
            </li>
            <li>
              Using the{" "}
              <a
                href="https://www.networkadvertising.org/choices/"
                className="text-primary-600 hover:text-primary-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Network Advertising Initiative opt-out page
              </a>
            </li>
            <li>
              Visiting{" "}
              <a
                href="https://www.aboutads.info/choices/"
                className="text-primary-600 hover:text-primary-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Digital Advertising Alliance\'s opt-out page
              </a>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
            8. GDPR Compliance (EU Visitors)
          </h2>
          <p className="text-gray-700 mb-4">
            If you are located in the European Union, you have additional rights
            under the General Data Protection Regulation (GDPR), including:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Right to access your personal data</li>
            <li>Right to rectify inaccurate personal data</li>
            <li>Right to erase your personal data</li>
            <li>Right to restrict processing of your personal data</li>
            <li>Right to data portability</li>
            <li>Right to object to processing</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
            9. Children\'s Privacy
          </h2>
          <p className="text-gray-700 mb-6">
            Our website is not intended for children under 13 years of age. We
            do not knowingly collect personal information from children under
            13. If you are a parent or guardian and believe your child has
            provided us with personal information, please contact us.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
            10. Changes to This Privacy Policy
          </h2>
          <p className="text-gray-700 mb-6">
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the "Last updated" date.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
            11. Contact Us
          </h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about this Privacy Policy, please contact
            us:
          </p>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-gray-700">
              <strong>Email:</strong> privacy@quicksolutionshub.com
              <br />
              <strong>Website:</strong>{" "}
              <a
                href="/contact"
                className="text-primary-600 hover:text-primary-500"
              >
                Contact Page
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
