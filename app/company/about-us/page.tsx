import React from "react";

export default function AboutUs() {
  return (
    <main className="max-w-2xl mx-auto py-16 px-4 mt-16">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="mb-2">
        SkillRise is a digital learning platform developed by New Chapter
        Technology LLC.
      </p>
      <p className="mb-2">
        New Chapter Technology LLC is a technology company based in Pinedale,
        Wyoming, USA, specializing in web and mobile application development.
        Our mission is to empower growth through innovative, accessible
        technology solutions.
      </p>
      <p className="mb-2">
        We are passionate about helping individuals and businesses achieve their
        goals with cutting-edge software and exceptional customer service.
      </p>
      <p className="mb-2">Address: 432 W Pine St, Pinedale, WY 82941, USA</p>
      <p>
        Learn more at{" "}
        <a
          href="https://newchapter.tech/"
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          newchapter.tech
        </a>
        .
      </p>
    </main>
  );
}
