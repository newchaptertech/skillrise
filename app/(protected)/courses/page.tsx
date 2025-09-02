import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Suspense } from "react";
export const dynamic = "force-dynamic";

async function CoursesList({
  q,
  level,
  tags,
}: {
  q?: string;
  level?: string;
  tags: string[];
}) {
  const where: any = { isPublished: true };
  if (q)
    where.OR = [
      { title: { contains: q, mode: "insensitive" } },
      { description: { contains: q, mode: "insensitive" } },
    ];
  if (level) where.level = level;
  if (tags.length) where.tags = { hasEvery: tags };
  const courses = await prisma.course.findMany({
    where,
    orderBy: { title: "asc" },
  });
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {courses.map((c) => (
        <div key={c.id} className="rounded-lg border bg-white p-4 shadow-sm">
          <h3 className="text-lg font-semibold">{c.title}</h3>
          <p className="mt-2 text-sm text-gray-600 line-clamp-3">
            {c.description}
          </p>
          <div className="mt-2 text-xs text-gray-500">Level: {c.level}</div>
          <div className="mt-2 flex flex-wrap gap-2">
            {c.tags.map((t) => (
              <span key={t} className="rounded bg-gray-100 px-2 py-1 text-xs">
                {t}
              </span>
            ))}
          </div>
          <div className="mt-4">
            <Link className="btn" href={`/courses/${c.slug}`}>
              View
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default async function CoursesPage({
  searchParams,
}: {
  searchParams: { q?: string; level?: string; tag?: string | string[] };
}) {
  // `searchParams` may be a resolvable proxy in this runtime - await it before use
  const sp = await Promise.resolve(searchParams as any);
  const q = sp?.q;
  const level = sp?.level;
  const tags = sp?.tag ? (Array.isArray(sp.tag) ? sp.tag : [sp.tag]) : [];
  return (
    <div className="mx-auto max-w-5xl space-y-6 py-10">
      <h1 className="text-3xl font-bold">Courses</h1>
      <Suspense>
        {/* @ts-expect-error Server Component */}
        <CoursesList q={q} level={level} tags={tags} />
      </Suspense>
    </div>
  );
}
