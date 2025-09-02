import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q") ?? undefined;
  const level = searchParams.get("level") ?? undefined;
  const tags = searchParams.getAll("tag");

  const where: any = { isPublished: true };
  if (q) {
    where.OR = [
      { title: { contains: q, mode: "insensitive" } },
      { description: { contains: q, mode: "insensitive" } },
    ];
  }
  if (level) where.level = level as any;
  if (tags && tags.length > 0) where.tags = { hasEvery: tags };

  const courses = await prisma.course.findMany({
    where,
    orderBy: { title: "asc" },
  });
  return NextResponse.json(courses);
}

const createSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  level: z.enum(["BEGINNER", "INTERMEDIATE", "ADVANCED"]),
  tags: z.array(z.string()).default([]),
  isPublished: z.boolean().default(false),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = createSchema.parse(body);
    const created = await prisma.course.create({ data });
    return NextResponse.json(created, { status: 201 });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 400 });
  }
}
