import React from "react";

export default function RefundPolicy() {
  return (
    <main className="max-w-2xl mx-auto py-16 px-4 mt-16">
      <h1 className="text-3xl font-bold mb-4">Refund Policy</h1>
      <p className="mb-2">
        Thank you for purchasing a digital product from SkillRise.
      </p>
      <p className="mb-2">
        Due to the nature of digital goods, all sales are final and
        non-refundable once access has been granted, except where required by
        law.
      </p>
      <p>
        If you have any questions or concerns, please contact us at{" "}
        <a
          href="mailto:support@skillrise.me"
          className="text-blue-600 underline"
        >
          support@skillrise.me
        </a>
        .
      </p>
    </main>
  );
}
