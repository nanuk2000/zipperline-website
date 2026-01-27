import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy for Zipperline
          </h1>
          <p className="text-base text-gray-600">
            <strong>Effective Date:</strong> 27 January 2026
          </p>
        </header>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-8 mb-4">
              1. Information We Collect
            </h2>
            <div className="text-base text-gray-700 leading-relaxed space-y-4">
              <p>
                We collect the following types of information when you use Zipperline:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Account Information:</strong> We use Auth0 for authentication, which collects your email address and user ID to manage your account securely.
                </li>
                <li>
                  <strong>User Content:</strong> Videos you create are processed using MediaPipe technology and stored on Convex to enable the app's functionality.
                </li>
                <li>
                  <strong>Crash Data:</strong> We collect anonymized crash reports to improve app stability. This data is not linked to your identity.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-8 mb-4">
              2. How We Use Your Information
            </h2>
            <div className="text-base text-gray-700 leading-relaxed space-y-4">
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Authentication:</strong> Verify your identity and manage your account access through Auth0.
                </li>
                <li>
                  <strong>Video Processing and Storage:</strong> Process and store your videos using MediaPipe and Convex to deliver the core features of the app.
                </li>
                <li>
                  <strong>App Stability Monitoring:</strong> Analyze crash data to identify and fix bugs, ensuring a better user experience.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-8 mb-4">
              3. Third-Party Sharing
            </h2>
            <div className="text-base text-gray-700 leading-relaxed">
              <p>
                We do not share your personal information with advertisers or other third parties for marketing purposes. Your data is only shared with the service providers necessary to operate the app (Auth0 for authentication and Convex for storage), and these providers are contractually obligated to protect your information.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-8 mb-4">
              4. Payments
            </h2>
            <div className="text-base text-gray-700 leading-relaxed">
              <p>
                All payments are processed through Apple's in-app purchase system. We do not store any payment information, such as credit card numbers or billing addresses. Please refer to Apple's privacy policy for information on how they handle payment data.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-8 mb-4">
              5. Data Security
            </h2>
            <div className="text-base text-gray-700 leading-relaxed">
              <p>
                We implement reasonable security measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-8 mb-4">
              6. Your Rights
            </h2>
            <div className="text-base text-gray-700 leading-relaxed space-y-4">
              <p>You have the following rights regarding your data:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Delete Videos:</strong> You can delete your videos directly within the app at any time.
                </li>
                <li>
                  <strong>Request Data Access or Deletion:</strong> If you would like to access, update, or delete your account data, please contact us at{" "}
                  <a
                    href="mailto:dev@zipperline.com"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    dev@zipperline.com
                  </a>
                  .
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-8 mb-4">
              7. Changes to This Privacy Policy
            </h2>
            <div className="text-base text-gray-700 leading-relaxed">
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted in the app or made available at this URL. Your continued use of Zipperline after any updates constitutes your acceptance of the revised policy.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-8 mb-4">
              8. Contact Us
            </h2>
            <div className="text-base text-gray-700 leading-relaxed">
              <p>
                If you have any questions or concerns about this Privacy Policy, please contact us at{" "}
                <a
                  href="mailto:dev@zipperline.com"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  dev@zipperline.com
                </a>
                .
              </p>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
};

export default PrivacyPolicy;
