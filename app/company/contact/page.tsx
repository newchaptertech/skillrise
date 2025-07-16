import React from "react";

export default function Contact() {
  return (
    <main className="max-w-xl mx-auto py-16 px-4 mt-16">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="mb-4 text-gray-700">
        We’re here to help! If you have questions, need support, or want to
        share feedback about SkillRise.me, please reach out — we’d love to hear
        from you.
      </p>
      <p className="mb-4 text-gray-700">
        Email us at{" "}
        <a href="mailto:support@skillrise.me" className="text-black underline">
          support@skillrise.me
        </a>{" "}
        and we’ll get back to you within 1–2 business days.
      </p>
      <div className="bg-white rounded-lg shadow p-6 mt-8">
        <form
          action="https://formsubmit.co/support@skillrise.me"
          method="POST"
          className="space-y-4"
        >
          <input
            type="hidden"
            name="_next"
            value="/company/contact?success=1"
          />
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
              placeholder="Your name"
              required
              autoComplete="off"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
              placeholder="you@email.com"
              required
              autoComplete="off"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
              placeholder="How can we help you?"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full rounded bg-black py-2 px-4 font-semibold text-white hover:bg-gray-800 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
