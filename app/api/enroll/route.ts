import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { NextResponse } from "next/server";
import { z } from "zod";

const enrollSchema = z.object({ courseId: z.string().min(1) });

export async function POST(req: Request) {
  const session = await getSession();
  if (!session?.user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await req.json();
  const { courseId } = enrollSchema.parse(body);

  const course = await prisma.course.findUnique({ where: { id: courseId } });
  if (!course || !course.isPublished) {
    return NextResponse.json({ error: "Course not found" }, { status: 404 });
  }

  const enrollment = await prisma.enrollment.upsert({
    where: { userId_courseId: { userId: (session.user as any).id, courseId } },
    create: { userId: (session.user as any).id, courseId },
    update: {},
  });

  return NextResponse.json(enrollment, { status: 201 });
}
