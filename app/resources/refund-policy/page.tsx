import React from "react";

export default function RefundPolicy() {
  return (
    <main className="max-w-2xl mx-auto py-16 px-4 mt-16">
      <h1 className="text-3xl font-bold mb-6">Refund Policy</h1>

      <p className="mb-6 text-gray-700">
        At SkillRise.me, we are committed to providing high-quality digital
        products, including AI-powered courses, guides, and tools. Please read
        our refund policy carefully before making a purchase.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        1. All Sales Are Final
      </h2>
      <p className="mb-4 text-gray-700">
        Due to the instant delivery and digital nature of our products,{" "}
        <strong>all sales are final once access is granted</strong>. After your
        purchase, you will receive immediate access to your digital content via
        your account or email. No physical items will be shipped.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. Legal Exceptions</h2>
      <p className="mb-4 text-gray-700">
        We will honor refund requests where required by law. If you are entitled
        to a refund under applicable consumer protection laws, please contact us
        and we will process your request in accordance with those laws.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        3. Undelivered or Incorrect Products
      </h2>
      <p className="mb-4 text-gray-700">
        If you do not receive access to your purchased product, or if you
        receive the wrong digital item, please contact us at{" "}
        <a href="mailto:support@skillrise.me" className="text-black underline">
          support@skillrise.me
        </a>{" "}
        within 7 days of purchase. We will make reasonable efforts to resolve
        the issue by providing access to the correct product or issuing a refund
        if necessary.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        4. No Refunds for Change of Mind
      </h2>
      <p className="mb-4 text-gray-700">
        We do not offer refunds for change of mind, accidental purchases, or
        misunderstandings about product content. Please review all product
        information carefully before purchasing. If you have questions, contact
        us before completing your order.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">5. Contact Us</h2>
      <p className="mb-8 text-gray-700">
        For any questions or to request support regarding your purchase, please
        email us at{" "}
        <a href="mailto:support@skillrise.me" className="text-black underline">
          support@skillrise.me
        </a>
        . We are here to help and will respond as quickly as possible.
      </p>

      <footer className="mt-12 text-xs text-gray-400 border-t pt-4">
        © 2025 SkillRise.me – Rise with New Skills. All rights reserved.
      </footer>
    </main>
  );
}
