import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { notFound, redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function CourseDetail({
  params,
}: {
  params: { slug: string };
}) {
  const p = await params;
  const slug = p.slug;
  const course = await prisma.course.findUnique({ where: { slug } });
  if (!course || !course.isPublished) return notFound();
  const session = await getSession();

  async function enroll() {
    "use server";
    const serverSession = await getSession();
    if (!serverSession?.user)
      redirect(`/auth/signin?callbackUrl=/courses/${slug}`);
    await prisma.enrollment.upsert({
      where: {
        userId_courseId: {
          userId: (serverSession.user as any).id,
          courseId: course.id,
        },
      },
      create: { userId: (serverSession.user as any).id, courseId: course.id },
      update: {},
    });
    redirect("/dashboard");
  }

  return (
    <div className="mx-auto max-w-3xl py-10">
      <h1 className="text-3xl font-bold">{course.title}</h1>
      <p className="mt-4 text-gray-600">{course.description}</p>
      <div className="mt-4 text-sm text-gray-500">Level: {course.level}</div>
      <form action={enroll} className="mt-8">
        <button className="btn">Enroll</button>
      </form>
    </div>
  );
}
