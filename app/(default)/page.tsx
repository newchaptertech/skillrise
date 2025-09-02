export const metadata = {
  title: "SkillRise | Rise with New Skills.",
  description:
    "Actionable well-designed courses and tools to help you master digital skills, boost productivity, and build a healthier, more focused life.",
};

import Hero from "@/components/hero-home";
export const dynamic = "force-dynamic";
import Link from "next/link";
import { getSession } from "@/lib/auth";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";

export default async function Home() {
  const session = await getSession();
  const isAuthed = !!session?.user;
  return (
    <>
      <Hero />
      <div className="mx-auto max-w-5xl px-4">
        <div className="my-8 flex justify-center gap-3">
          {!isAuthed ? (
            <>
              <Link className="btn" href="/auth/signin">
                Sign in
              </Link>
              <Link className="btn" href="/auth/signup">
                Sign up
              </Link>
            </>
          ) : (
            <Link className="btn" href="/courses">
              Go to Courses
            </Link>
          )}
        </div>
      </div>
      <BusinessCategories />
      <FeaturesPlanet />
      <LargeTestimonial />
      <Cta />
    </>
  );
}
