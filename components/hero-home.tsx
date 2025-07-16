"use client";

import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";
import Avatar05 from "@/public/images/avatar-05.jpg";
import Avatar06 from "@/public/images/avatar-06.jpg";
import { useState, useEffect } from "react";

export default function HeroHome() {
  // Motivational message to type out
  const message = `Hey there.\n\nYou are not here by accident. You’re here because something inside you knows you’re meant for more — more clarity, more strength, more growth.\n\nYou don’t need to be perfect to begin. You just need to begin.\n\nEvery small step you take today is a signal to your future self: “I’m ready to rise.”\n\nLet’s start.`;
  const [displayed, setDisplayed] = useState("");
  const [idx, setIdx] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (idx < message.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + message[idx]);
        setIdx((prev) => prev + 1);
      }, 65); // slower typing speed
      return () => clearTimeout(timeout);
    }
  }, [idx, message]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <div
              className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]"
              data-aos="zoom-y-out"
            >
              <div className="-mx-0.5 flex justify-center -space-x-3">
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar01}
                  width={32}
                  height={32}
                  alt="Avatar 01"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar02}
                  width={32}
                  height={32}
                  alt="Avatar 01"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar03}
                  width={32}
                  height={32}
                  alt="Avatar 02"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar04}
                  width={32}
                  height={32}
                  alt="Avatar 03"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar05}
                  width={32}
                  height={32}
                  alt="Avatar 04"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar06}
                  width={32}
                  height={32}
                  alt="Avatar 05"
                />
              </div>
            </div>
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Rise with New Skills.
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Actionable well-designed courses and tools to help you master
                digital skills, boost productivity, and build a healthier, more
                focused life.
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="mb-4 w-full sm:mb-0 sm:w-auto px-8 py-3 rounded-xl font-semibold text-lg bg-[#c1ff72] text-gray-900 border border-[#c1ff72] shadow-sm hover:bg-[#b3f05f] transition flex items-center justify-center"
                    href="https://go.skillrise.me"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="relative inline-flex items-center">
                      Start Learning Now
                      <span
                        className="ml-1 tracking-normal transition-transform group-hover:translate-x-0.5"
                        style={{ color: "#222" }}
                      >
                        -&gt;
                      </span>
                    </span>
                  </a>
                  <a
                    className="w-full sm:ml-4 sm:w-auto px-8 py-3 rounded-xl font-semibold text-lg bg-white text-gray-900 border border-[#c1ff72] hover:bg-[#f7ffe8] transition flex items-center justify-center"
                    href="https://go.skillrise.me"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Explore Courses
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,--theme(--color-slate-300/.8),transparent)1]">
              <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,var(--color-gray-600)_4.5px,transparent_0)] after:w-[41px]">
                <span className="text-[13px] font-medium text-white">
                  SkillRise.me
                </span>
              </div>
              <div className="font-mono text-gray-200 text-lg min-h-[2.5em]">
                {displayed.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i !== displayed.split("\n").length - 1 && <br />}
                  </span>
                ))}
                <span
                  className={
                    showCursor
                      ? "inline-block w-2 bg-gray-200 animate-pulse align-bottom"
                      : "inline-block w-2 bg-transparent align-bottom"
                  }
                  style={{ height: "1em", marginLeft: 2 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
