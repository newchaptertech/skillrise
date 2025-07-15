import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900 flex flex-col">
      {/* Hero Section */}
      <header className="bg-blue-700 text-white py-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-2">SkillRise Digital Academy</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Empowering you with high-quality online courses and digital products
          for personal and professional growth.
        </p>
      </header>

      <main className="flex-1 w-full max-w-3xl mx-auto py-8 px-4 space-y-8">
        {/* 1. Complete description of goods/services */}
        <section id="description">
          <h2 className="text-2xl font-semibold mb-2">What We Offer</h2>
          <p>
            SkillRise provides a curated selection of digital products and
            online courses in technology, business, and creative skills. All
            products are delivered instantly online—no shipping required. Our
            offerings include video courses, eBooks, downloadable templates, and
            interactive learning modules.
          </p>
        </section>

        {/* 2. Company legal name, address, and country */}
        <section id="company-info">
          <h2 className="text-2xl font-semibold mb-2">Company Information</h2>
          <p>
            <strong>Legal Name:</strong> SkillRise Digital Academy LLC
            <br />
            <strong>Address:</strong> 123 Learning Lane, Suite 100, San
            Francisco, CA 94105
            <br />
            <strong>Country:</strong> United States
          </p>
        </section>

        {/* 3. Refund Policy */}
        <section id="refund-policy">
          <h2 className="text-2xl font-semibold mb-2">Refund Policy</h2>
          <p>
            We offer a 14-day money-back guarantee on all digital products and
            courses. If you are not satisfied with your purchase, contact us
            within 14 days for a full refund. Please note: refunds are not
            available if you have completed more than 50% of a course or
            downloaded all materials.
          </p>
        </section>

        {/* 4. Shipping Information */}
        <section id="shipping-info">
          <h2 className="text-2xl font-semibold mb-2">Shipping Information</h2>
          <p>
            <strong>Note:</strong> All products are digital and delivered
            online. No physical shipping is required or provided.
          </p>
        </section>

        {/* 5. Terms and Conditions */}
        <section id="terms">
          <h2 className="text-2xl font-semibold mb-2">Terms and Conditions</h2>
          <p>
            By purchasing or enrolling in our products, you agree to use them
            for personal, non-commercial purposes only. Redistribution or resale
            is prohibited. For full terms, please contact us.
          </p>
        </section>

        {/* 6. Privacy Policy */}
        <section id="privacy-policy">
          <h2 className="text-2xl font-semibold mb-2">Privacy Policy</h2>
          <p>
            We respect your privacy. Your personal information is used solely
            for order processing and communication. We do not sell or share your
            data with third parties. For details, contact us.
          </p>
        </section>

        {/* 7. Contact Page */}
        <section id="contact">
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p>
            For customer service, email us at{" "}
            <a
              href="mailto:support@skillrise.com"
              className="text-blue-700 underline"
            >
              support@skillrise.com
            </a>
            .
          </p>
        </section>
      </main>

      {/* 8. Secure Website Notice */}
      <footer className="bg-gray-200 text-center py-4 text-sm">
        <span className="block">
          This website is served over HTTPS. We do not store payment
          information. &copy; {new Date().getFullYear()} SkillRise Digital
          Academy LLC.
        </span>
      </footer>
    </div>
  );
}

export default App;
