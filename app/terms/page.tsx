import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Tech Problem Solver",
  description:
    "Terms of Service and conditions for using Tech Problem Solver website and troubleshooting guides.",
  keywords:
    "terms of service, terms of use, website conditions, user agreement",
};

export default function TermsPage() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-blue-50 border-l-4 border-primary-600 p-6 mb-8">
            <p className="text-gray-700 font-medium">
              By accessing and using Tech Problem Solver, you agree to comply
              with and be bound by the following terms and conditions. Please
              read these terms carefully before using our website.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-700 mb-6">
            By accessing or using the Tech Problem Solver website ("Service"),
            you agree to be bound by these Terms of Service ("Terms"). If you
            disagree with any part of these terms, then you may not access the
            Service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
            2. Description of Service
          </h2>
          <p className="text-gray-700 mb-4">
            Tech Problem Solver provides troubleshooting guides and solutions
            for common technology problems including:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Phone and mobile device issues</li>
            <li>Computer hardware and software problems</li>
            <li>Internet and WiFi connectivity issues</li>
            <li>General tech support information</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
            3. User Responsibilities
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Appropriate Use
          </h3>
          <p className="text-gray-700 mb-4">
            You agree to use our Service only for lawful purposes and in a way
            that does not:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe on the rights of others</li>
            <li>Transmit harmful, offensive, or inappropriate content</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Interfere with the normal operation of our website</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Following Instructions
          </h3>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
            <p className="text-gray-700">
              <strong>Important:</strong> When following our troubleshooting
              guides, you do so at your own risk. Always back up your data
              before attempting any solutions, especially those involving system
              changes or resets.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
            4. Disclaimers and Limitations
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            No Warranty
          </h3>
          <p className="text-gray-700 mb-4">
            Our troubleshooting guides are provided "as is" without any warranty
            of any kind. We make no guarantees that:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>
              The solutions will work for your specific device or situation
            </li>
            <li>Following our guides will not cause damage to your device</li>
            <li>The information is completely accurate or up-to-date</li>
            <li>Our website will be available without interruption</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Limitation of Liability
          </h3>
          <p className="text-gray-700 mb-6">
            To the maximum extent permitted by law, Tech Problem Solver shall
            not be liable for any damages resulting from your use of our website
            or following our troubleshooting guides, including but not limited
            to device damage, data loss, or other consequential damages.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
            5. Intellectual Property Rights
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Our Content
          </h3>
          <p className="text-gray-700 mb-4">
            All content on Tech Problem Solver, including text, graphics, logos,
            and software, is our property or the property of our content
            suppliers and is protected by intellectual property laws.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Permitted Use
          </h3>
          <p className="text-gray-700 mb-6">
            You may view, print, and share our content for personal,
            non-commercial use only. You may not modify, distribute, reproduce,
            or create derivative works from our content without our written
            permission.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
            6. Third-Party Content and Links
          </h2>
          <p className="text-gray-700 mb-4">
            Our website may contain links to third-party websites or services.
            We are not responsible for:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>The content or privacy practices of linked websites</li>
            <li>The accuracy of information on third-party sites</li>
            <li>Any damage resulting from use of third-party services</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
            7. Privacy and Data Collection
          </h2>
          <p className="text-gray-700 mb-6">
            Your privacy is important to us. Our collection and use of personal
            information is governed by our
            <a
              href="/privacy"
              className="text-primary-600 hover:text-primary-500"
            >
              {" "}
              Privacy Policy
            </a>
            , which is incorporated into these Terms by reference.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
            8. Advertising
          </h2>
          <p className="text-gray-700 mb-6">
            Our website displays advertisements provided by third parties,
            including Google AdSense. These advertisements are not endorsements
            by us, and we are not responsible for the content or accuracy of
            third-party advertisements.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
            9. User-Generated Content
          </h2>
          <p className="text-gray-700 mb-4">
            If you submit content to us (such as feedback, comments, or
            suggestions), you grant us the right to:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Use, modify, and display your content</li>
            <li>Incorporate your suggestions into our services</li>
            <li>Remove content that violates our policies</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
            10. Termination
          </h2>
          <p className="text-gray-700 mb-6">
            We reserve the right to terminate or restrict your access to our
            Service at any time, without notice, if we believe you have violated
            these Terms or engaged in inappropriate conduct.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
            11. Changes to Terms
          </h2>
          <p className="text-gray-700 mb-6">
            We reserve the right to modify these Terms at any time. Changes will
            be effective immediately upon posting. Your continued use of the
            Service after changes are posted constitutes acceptance of the
            modified Terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
            12. Governing Law
          </h2>
          <p className="text-gray-700 mb-6">
            These Terms shall be governed by and construed in accordance with
            applicable laws, without regard to conflict of law provisions.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
            13. Severability
          </h2>
          <p className="text-gray-700 mb-6">
            If any provision of these Terms is found to be unenforceable, the
            remaining provisions will continue to be valid and enforceable.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
            14. Contact Information
          </h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about these Terms of Service, please
            contact us:
          </p>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-gray-700">
              <strong>Email:</strong> legal@techproblemsolver.com
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

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Important Reminder
            </h3>
            <p className="text-gray-700">
              Always back up your important data before attempting any
              troubleshooting steps. While our guides are tested and designed to
              be safe, every situation is unique, and we cannot guarantee
              outcomes for all devices and configurations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
