import Link from "next/link";
export const dynamic = "force-dynamic";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AdminCoursesPage() {
  const session = await getSession();
  if ((session?.user as any)?.role !== "ADMIN") redirect("/courses");
  const courses = await prisma.course.findMany({
    orderBy: { createdAt: "desc" },
  });
  return (
    <div className="mx-auto max-w-5xl py-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Admin: Courses</h1>
        <Link className="btn" href="/admin/courses/new">
          New Course
        </Link>
      </div>
      <div className="divide-y rounded border bg-white">
        {courses.map((c) => (
          <div key={c.id} className="flex items-center justify-between p-4">
            <div>
              <div className="font-medium">{c.title}</div>
              <div className="text-xs text-gray-500">
                {c.slug} • {c.level} • {c.isPublished ? "Published" : "Draft"}
              </div>
            </div>
            <div className="flex gap-3">
              <Link className="btn" href={`/admin/courses/${c.id}/edit`}>
                Edit
              </Link>
            </div>
          </div>
        ))}
        {courses.length === 0 && <div className="p-4">No courses yet.</div>}
      </div>
    </div>
  );
}
