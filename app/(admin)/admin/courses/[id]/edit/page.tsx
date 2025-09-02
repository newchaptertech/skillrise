import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { notFound, redirect } from "next/navigation";

export default async function EditCoursePage({
  params,
}: {
  params: { id: string };
}) {
  const session = await getSession();
  if ((session?.user as any)?.role !== "ADMIN") redirect("/courses");
  const course = await prisma.course.findUnique({ where: { id: params.id } });
  if (!course) return notFound();

  async function updateCourse(formData: FormData) {
    "use server";
    const title = String(formData.get("title") || "");
    const slug = String(formData.get("slug") || "");
    const description = String(formData.get("description") || "");
    const level = String(formData.get("level") || "BEGINNER") as any;
    const tags = String(formData.get("tags") || "")
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);
    const isPublished = formData.get("isPublished") === "on";
    await prisma.course.update({
      where: { id: params.id },
      data: { title, slug, description, level, tags, isPublished },
    });
    redirect("/admin/courses");
  }

  async function deleteCourse() {
    "use server";
    await prisma.course.delete({ where: { id: params.id } });
    redirect("/admin/courses");
  }

  return (
    <div className="mx-auto max-w-2xl py-10">
      <h1 className="mb-6 text-3xl font-bold">Edit Course</h1>
      <form action={updateCourse} className="space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium">Title</label>
          <input
            name="title"
            className="form-input w-full"
            defaultValue={course.title}
            required
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Slug</label>
          <input
            name="slug"
            className="form-input w-full"
            defaultValue={course.slug}
            required
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Description</label>
          <textarea
            name="description"
            className="form-textarea w-full"
            rows={6}
            defaultValue={course.description}
            required
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Level</label>
          <select
            name="level"
            className="form-select w-full"
            defaultValue={course.level}
          >
            <option>BEGINNER</option>
            <option>INTERMEDIATE</option>
            <option>ADVANCED</option>
          </select>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">
            Tags (comma separated)
          </label>
          <input
            name="tags"
            className="form-input w-full"
            defaultValue={course.tags.join(", ")}
          />
        </div>
        <label className="flex items-center gap-2 text-sm">
          <input
            name="isPublished"
            type="checkbox"
            className="form-checkbox"
            defaultChecked={course.isPublished}
          />{" "}
          Published
        </label>
        <div className="flex items-center gap-3">
          <button className="btn">Save</button>
          <button
            className="btn bg-red-600 text-white hover:bg-red-700"
            formAction={deleteCourse}
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}
