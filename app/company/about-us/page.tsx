import React from "react";
import Image from "next/image";
import {
  FaRocket,
  FaUsers,
  FaLaptopCode,
  FaGlobeAmericas,
  FaEnvelope,
} from "react-icons/fa";

export default function AboutUs() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4 mt-16">
      {/* Hero Banner */}
      <section className="flex flex-col items-center text-center mb-12">
        <Image
          src="/images/logo.png"
          alt="SkillRise.me Logo"
          width={96}
          height={96}
          className="mb-4 rounded-full shadow-lg"
        />
        <h1 className="text-4xl font-extrabold mb-2 tracking-tight">
          About Us
        </h1>
        <p className="text-lg text-gray-600 max-w-xl">
          <strong>SkillRise.me</strong> is a digital learning platform dedicated
          to empowering your growth through accessible, AI-powered education.
          Our mission is to help you learn and thrive in the areas that matter
          most: health, productivity, and digital skills.
        </p>
      </section>

      {/* Vision Section */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <FaRocket className="text-brand h-6 w-6" />
          <h2 className="text-xl font-semibold">Our Vision</h2>
        </div>
        <p className="text-gray-700">
          We envision a world where everyone has the opportunity to unlock their
          full potential, regardless of background or location. SkillRise.me is
          committed to breaking down barriers to learning by providing
          high-quality, affordable, and instantly accessible digital education.
        </p>
      </section>

      {/* How We Help Section */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <FaLaptopCode className="text-brand h-6 w-6" />
          <h2 className="text-xl font-semibold">How We Help You Grow</h2>
        </div>
        <p className="text-gray-700 mb-2">
          Our platform offers a curated selection of mini-courses, guides, and
          tools designed to fit your busy lifestyle. Whether you want to boost
          your productivity, improve your well-being, or master new digital
          skills, SkillRise.me provides practical, actionable content you can
          apply right away.
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">
            All our products are digital-only and delivered instantly online
          </span>
          —no shipping, no waiting. You get immediate access to your learning
          materials from anywhere, at any time.
        </p>
      </section>

      {/* Commitment Section */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <FaGlobeAmericas className="text-brand h-6 w-6" />
          <h2 className="text-xl font-semibold">Our Commitment to Quality</h2>
        </div>
        <p className="text-gray-700">
          We believe that learning should be engaging, effective, and enjoyable.
          Our team works hard to ensure every course, guide, and tool meets high
          standards for clarity, usefulness, and up-to-date information. We
          regularly update our content to reflect the latest trends and best
          practices in health, productivity, and digital skills.
        </p>
      </section>

      {/* Team Section */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <FaUsers className="text-brand h-6 w-6" />
          <h2 className="text-xl font-semibold">Meet the Team</h2>
        </div>
        <p className="text-gray-700">
          SkillRise.me is developed and operated by{" "}
          <a
            href="https://newchapter.tech"
            className="text-black underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            New Chapter Technology LLC
          </a>
          , a web and mobile development company based in Pinedale, Wyoming. Our
          passionate team of developers, educators, and designers is dedicated
          to building tools that make learning accessible and impactful for
          everyone.
        </p>
      </section>

      {/* Why Digital Learning Section */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <FaRocket className="text-brand h-6 w-6" />
          <h2 className="text-xl font-semibold">Why Digital Learning?</h2>
        </div>
        <p className="text-gray-700">
          Digital learning offers flexibility, convenience, and the ability to
          learn at your own pace. With SkillRise.me, you can access your courses
          and resources instantly, revisit materials as often as you like, and
          fit learning into your unique schedule. We’re here to support your
          journey—wherever you are, whenever you’re ready.
        </p>
      </section>

      {/* Contact & Location Section */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <FaEnvelope className="text-brand h-6 w-6" />
          <h2 className="text-xl font-semibold">Contact & Location</h2>
        </div>
        <p className="text-gray-700 mb-2">
          We love hearing from our learners! If you have questions, feedback, or
          need support, please reach out to us at{" "}
          <a
            href="mailto:support@skillrise.me"
            className="text-black underline"
          >
            support@skillrise.me
          </a>
          .
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Company Location:</span> 432 W Pine
          St, Pinedale, WY 82941, USA
        </p>
      </section>
    </main>
  );
}
