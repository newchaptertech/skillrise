import { getSession } from "@/lib/auth";
export const dynamic = "force-dynamic";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function DashboardPage() {
  const session = await getSession();
  const userId = (session?.user as any)?.id as string;
  const enrollments = await prisma.enrollment.findMany({
    where: { userId },
    include: { course: true },
    orderBy: { createdAt: "desc" },
  });
  return (
    <div className="mx-auto max-w-5xl py-10">
      <h1 className="text-3xl font-bold">My Courses</h1>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {enrollments.map((e) => (
          <div key={e.id} className="rounded-lg border bg-white p-4 shadow-sm">
            <h3 className="text-lg font-semibold">{e.course.title}</h3>
            <p className="mt-2 line-clamp-3 text-sm text-gray-600">
              {e.course.description}
            </p>
            <div className="mt-4">
              <Link className="btn" href={`/courses/${e.course.slug}`}>
                Go to course
              </Link>
            </div>
          </div>
        ))}
        {enrollments.length === 0 && (
          <p>You have not enrolled in any course yet.</p>
        )}
      </div>
    </div>
  );
}
