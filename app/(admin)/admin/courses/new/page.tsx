import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function NewCoursePage() {
  const session = await getSession();
  if ((session?.user as any)?.role !== "ADMIN") redirect("/courses");

  async function createCourse(formData: FormData) {
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
    await prisma.course.create({
      data: { title, slug, description, level, tags, isPublished },
    });
    redirect("/admin/courses");
  }

  return (
    <div className="mx-auto max-w-2xl py-10">
      <h1 className="mb-6 text-3xl font-bold">New Course</h1>
      <form action={createCourse} className="space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium">Title</label>
          <input name="title" className="form-input w-full" required />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Slug</label>
          <input name="slug" className="form-input w-full" required />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Description</label>
          <textarea
            name="description"
            className="form-textarea w-full"
            rows={6}
            required
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Level</label>
          <select name="level" className="form-select w-full">
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
            placeholder="AI, Fitness"
          />
        </div>
        <label className="flex items-center gap-2 text-sm">
          <input name="isPublished" type="checkbox" className="form-checkbox" />{" "}
          Published
        </label>
        <button className="btn">Create</button>
      </form>
    </div>
  );
}
