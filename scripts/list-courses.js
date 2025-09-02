import "dotenv/config";
import { PrismaClient } from "@prisma/client";

async function main() {
  const prisma = new PrismaClient();
  try {
    const courses = await prisma.course.findMany({
      select: {
        id: true,
        slug: true,
        title: true,
        level: true,
        isPublished: true,
        createdAt: true,
      },
      orderBy: { createdAt: "desc" },
    });
    console.log(JSON.stringify(courses, null, 2));
  } catch (e) {
    console.error("ERROR", e && e.message ? e.message : e);
  } finally {
    await prisma.$disconnect();
  }
}

main();
