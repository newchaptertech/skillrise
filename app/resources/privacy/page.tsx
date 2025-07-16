import React from "react";

export default function Privacy() {
  return (
    <main className="max-w-2xl mx-auto py-16 px-4 mt-16">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-2">
        Your privacy is important to us. This page will outline how SkillRise
        collects, uses, and protects your information.
      </p>
      <p className="mb-2">
        We do not share your personal information with third parties except as
        necessary to provide our services or as required by law.
      </p>
      <p className="mb-8 text-gray-700">
        For privacy-related questions, contact us at{" "}
        <a href="mailto:support@skillrise.me" className="text-black underline">
          support@skillrise.me
        </a>
        .
      </p>
    </main>
  );
}
