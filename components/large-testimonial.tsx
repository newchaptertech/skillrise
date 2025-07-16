import Image from "next/image";
import TestimonialImg from "@/public/images/large-testimonial.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";

export default function LargeTestimonial() {
  return (
    <section>
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="py-12 md:py-20 space-y-12">
          {/* Testimonial 1 */}
          <div className="space-y-3 text-center">
            <div className="relative inline-flex">
              <svg
                className="absolute -left-6 -top-2 -z-10"
                width={40}
                height={49}
                viewBox="0 0 40 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.7976 -0.000136375L39.9352 23.4746L33.4178 31.7234L13.7686 11.4275L22.7976 -0.000136375ZM9.34947 17.0206L26.4871 40.4953L19.9697 48.7441L0.320491 28.4482L9.34947 17.0206Z"
                  fill="#D1D5DB"
                />
              </svg>
              <Image
                className="rounded-full"
                src={TestimonialImg}
                width={48}
                height={48}
                alt="Large testimonial"
              />
            </div>
            <p className="text-2xl font-bold text-gray-900">
              “I built my first custom workout plan using AI in just one day.
              Life-changing.”
            </p>
            <div className="text-sm font-medium text-gray-500">
              <span className="text-gray-700">Jordan Lee</span>{" "}
              <span className="text-gray-400">/</span>{" "}
              <span className="text-black">SkillRise Learner</span>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="space-y-3 text-center">
            <div className="relative inline-flex">
              <svg
                className="absolute -left-6 -top-2 -z-10"
                width={40}
                height={49}
                viewBox="0 0 40 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.7976 -0.000136375L39.9352 23.4746L33.4178 31.7234L13.7686 11.4275L22.7976 -0.000136375ZM9.34947 17.0206L26.4871 40.4953L19.9697 48.7441L0.320491 28.4482L9.34947 17.0206Z"
                  fill="#D1D5DB"
                />
              </svg>
              <Image
                className="rounded-full"
                src={Avatar02}
                width={48}
                height={48}
                alt="Testimonial 2"
              />
            </div>
            <p className="text-2xl font-bold text-gray-900">
              “SkillRise made learning new skills so easy. The community support
              kept me motivated!”
            </p>
            <div className="text-sm font-medium text-gray-500">
              <span className="text-gray-700">Alex Kim</span>{" "}
              <span className="text-gray-400">/</span>{" "}
              <span className="text-black">SkillRise Learner</span>
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="space-y-3 text-center">
            <div className="relative inline-flex">
              <svg
                className="absolute -left-6 -top-2 -z-10"
                width={40}
                height={49}
                viewBox="0 0 40 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.7976 -0.000136375L39.9352 23.4746L33.4178 31.7234L13.7686 11.4275L22.7976 -0.000136375ZM9.34947 17.0206L26.4871 40.4953L19.9697 48.7441L0.320491 28.4482L9.34947 17.0206Z"
                  fill="#D1D5DB"
                />
              </svg>
              <Image
                className="rounded-full"
                src={Avatar03}
                width={48}
                height={48}
                alt="Testimonial 3"
              />
            </div>
            <p className="text-2xl font-bold text-gray-900">
              “I love being able to access courses anytime, anywhere. The
              lessons are practical and fun!”
            </p>
            <div className="text-sm font-medium text-gray-500">
              <span className="text-gray-700">Morgan Smith</span>{" "}
              <span className="text-gray-400">/</span>{" "}
              <span className="text-black">SkillRise Learner</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
