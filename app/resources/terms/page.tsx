import React from "react";

export default function Terms() {
  return (
    <main className="max-w-2xl mx-auto py-16 px-4 mt-16">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

      <p className="mb-6 text-gray-700">
        Welcome to SkillRise.me! These Terms and Conditions ("Terms") govern
        your use of our website and digital products. By accessing or using
        SkillRise.me, you agree to these Terms. Please read them carefully.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        1. Instant Delivery of Digital Products
      </h2>
      <p className="mb-4 text-gray-700">
        All products offered on SkillRise.me are digital-only. Upon successful
        purchase, you will receive instant access to your mini-courses, guides,
        or tools via your account dashboard or email. No physical goods will be
        shipped.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        2. Personal Use License
      </h2>
      <p className="mb-4 text-gray-700">
        When you purchase a product from SkillRise.me, you are granted a
        non-exclusive, non-transferable license for personal use only. You may
        not share, resell, distribute, or otherwise make our content available
        to others without our express written permission.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        3. Account Responsibility
      </h2>
      <p className="mb-4 text-gray-700">
        You are responsible for maintaining the confidentiality of your account
        credentials and for all activities that occur under your account. Please
        notify us immediately at{" "}
        <a href="mailto:support@skillrise.me" className="text-black underline">
          support@skillrise.me
        </a>{" "}
        if you suspect unauthorized use of your account.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. Refund Policy</h2>
      <p className="mb-4 text-gray-700">
        Due to the nature of digital products and instant delivery, all sales
        are final and non-refundable except where required by law. If you
        experience issues accessing your purchase, please contact us at{" "}
        <a href="mailto:support@skillrise.me" className="text-black underline">
          support@skillrise.me
        </a>{" "}
        and we will do our best to assist you.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        5. Educational Use Only
      </h2>
      <p className="mb-4 text-gray-700">
        SkillRise.me products are intended for educational and personal
        development purposes only. They are not a substitute for professional
        advice in health, legal, financial, or other regulated fields.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        6. Limitation of Liability
      </h2>
      <p className="mb-4 text-gray-700">
        SkillRise.me and its team are not liable for any direct, indirect,
        incidental, or consequential damages arising from your use of our
        website or digital products. All content is provided "as is" without
        warranties of any kind.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">7. Content Updates</h2>
      <p className="mb-4 text-gray-700">
        We may update, improve, or remove content from our digital products at
        any time to ensure quality and relevance. Access to updated materials
        may require an active account or purchase.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        8. Modification of Terms
      </h2>
      <p className="mb-4 text-gray-700">
        SkillRise.me reserves the right to modify these Terms at any time.
        Changes will be posted on this page with an updated effective date.
        Continued use of the site after changes constitutes acceptance of the
        new Terms.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">9. Contact Us</h2>
      <p className="mb-8 text-gray-700">
        If you have any questions about these Terms, please contact us at{" "}
        <a href="mailto:support@skillrise.me" className="text-black underline">
          support@skillrise.me
        </a>
        .
      </p>

      <footer className="mt-12 text-xs text-gray-400 border-t pt-4">
        &copy; {new Date().getFullYear()} SkillRise.me. All rights reserved.
      </footer>
    </main>
  );
}
