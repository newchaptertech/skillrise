import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function upsertUser(email, name, password, role = "USER") {
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) return existing;
  const hash = await bcrypt.hash(password, 10);
  return prisma.user.create({
    data: { email, name, passwordHash: hash, role },
  });
}

async function listCourses() {
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
}

async function main() {
  const shouldListOnly = process.argv.includes("--list");
  if (shouldListOnly) {
    try {
      await listCourses();
    } catch (e) {
      console.error("ERROR", e && e.message ? e.message : e);
    } finally {
      await prisma.$disconnect();
    }
    return;
  }

  console.log("Seeding test data...");
  const admin = await upsertUser(
    "admin@skillrise.me",
    "Admin",
    "Admin123!",
    "ADMIN"
  );
  const coach = await upsertUser(
    "izzet@skillrise.me",
    "Izzet",
    "Password123!",
    "USER"
  );
  const learner = await upsertUser(
    "learner@skillrise.me",
    "Learner",
    "Password123!",
    "USER"
  );

  const courses = [
    {
      slug: "ai-productivity-chatgpt-mastery",
      title: "AI Productivity & ChatGPT Mastery",
      description:
        "Master ChatGPT and AI tools to 10x your productivity with real workflows.",
      level: "BEGINNER",
      tags: ["AI", "ChatGPT", "Productivity"],
    },
    {
      slug: "ai-personal-trainer-19-workout-plans",
      title: "AI Personal Trainer – Build $19 Workout Plans with AI",
      description:
        "Use AI to generate personalized workout plans and monetize them.",
      level: "INTERMEDIATE",
      tags: ["AI", "Fitness", "Monetization"],
    },
    {
      slug: "calisthenics-fundamentals",
      title: "Calisthenics Fundamentals",
      description:
        "Build a strong foundation in calisthenics with progressions and mobility.",
      level: "BEGINNER",
      tags: ["Calisthenics", "Strength", "Mobility"],
    },
  ];

  for (const c of courses) {
    const existing = await prisma.course.findUnique({
      where: { slug: c.slug },
    });
    if (!existing) {
      await prisma.course.create({ data: { ...c, isPublished: true } });
    }
  }

  // Enroll learner and coach in first course (idempotent)
  const firstCourse = await prisma.course.findUnique({
    where: { slug: courses[0].slug },
  });
  if (firstCourse) {
    const enrollmentsToEnsure = [
      { userId: coach.id, courseId: firstCourse.id },
      { userId: learner.id, courseId: firstCourse.id },
    ];
    for (const en of enrollmentsToEnsure) {
      const exists = await prisma.enrollment.findFirst({
        where: { userId: en.userId, courseId: en.courseId },
      });
      if (!exists) {
        await prisma.enrollment.create({ data: en });
      }
    }
  }

  console.log("Seed complete");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
