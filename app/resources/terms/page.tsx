import React from "react";

export default function Terms() {
  return (
    <main className="max-w-2xl mx-auto py-16 px-4 mt-16">
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
      <p className="mb-2">
        By using SkillRise, you agree to our terms and conditions. Please read
        them carefully before using our services.
      </p>
      <p className="mb-2">
        These terms apply to all users of our digital products and services.
      </p>
      <p>
        For questions, contact us at{" "}
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
