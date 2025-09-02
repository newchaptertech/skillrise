import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  // Clear existing (idempotent seed)
  await prisma.enrollment.deleteMany({});
  await prisma.account.deleteMany({});
  await prisma.session.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.course.deleteMany({});

  // Users
  const adminPasswordHash = await bcrypt.hash("Admin123!", 10);
  const coachPasswordHash = await bcrypt.hash("Password123!", 10);
  const learnerPasswordHash = await bcrypt.hash("Password123!", 10);

  const admin = await prisma.user.create({
    data: {
      name: "Admin",
      email: "admin@skillrise.me",
      passwordHash: adminPasswordHash,
      role: "ADMIN",
    },
  });

  const coach = await prisma.user.create({
    data: {
      name: "Izzet",
      email: "izzet@skillrise.me",
      passwordHash: coachPasswordHash,
      role: "USER",
    },
  });

  const learner = await prisma.user.create({
    data: {
      name: "Learner",
      email: "learner@skillrise.me",
      passwordHash: learnerPasswordHash,
      role: "USER",
    },
  });

  // Courses
  const courses = await prisma.$transaction([
    prisma.course.create({
      data: {
        slug: "ai-productivity-chatgpt-mastery",
        title: "AI Productivity & ChatGPT Mastery",
        description:
          "Master ChatGPT and AI tools to 10x your productivity with real workflows.",
        level: "BEGINNER",
        tags: ["AI", "ChatGPT", "Productivity"],
        isPublished: true,
      },
    }),
    prisma.course.create({
      data: {
        slug: "ai-personal-trainer-19-workout-plans",
        title: "AI Personal Trainer – Build $19 Workout Plans with AI",
        description:
          "Use AI to generate personalized workout plans and monetize them.",
        level: "INTERMEDIATE",
        tags: ["AI", "Fitness", "Monetization"],
        isPublished: true,
      },
    }),
    prisma.course.create({
      data: {
        slug: "calisthenics-fundamentals",
        title: "Calisthenics Fundamentals",
        description:
          "Build a strong foundation in calisthenics with progressions and mobility.",
        level: "BEGINNER",
        tags: ["Calisthenics", "Strength", "Mobility"],
        isPublished: true,
      },
    }),
    prisma.course.create({
      data: {
        slug: "handstand-mastery",
        title: "Handstand Mastery",
        description: "Learn to balance and control a freestanding handstand.",
        level: "INTERMEDIATE",
        tags: ["Handstand", "Balance", "Skills"],
        isPublished: true,
      },
    }),
    prisma.course.create({
      data: {
        slug: "front-lever-blueprint",
        title: "Front Lever Blueprint",
        description:
          "Step-by-step plan to achieve your first front lever with smart progressions.",
        level: "INTERMEDIATE",
        tags: ["Calisthenics", "Front Lever", "Progressions"],
        isPublished: true,
      },
    }),
    prisma.course.create({
      data: {
        slug: "24-hour-course-launch-dropsell",
        title: "24-Hour Course Launch (DropSell-style)",
        description:
          "Launch a course in 24 hours with lean content and funnel strategies.",
        level: "ADVANCED",
        tags: ["Launch", "Marketing", "Funnels"],
        isPublished: true,
      },
    }),
  ]);

  // Map for convenience
  const [aiProd, aiTrainer, calisthenics, handstand, frontLever] = [
    courses[0],
    courses[1],
    courses[2],
    courses[3],
    courses[4],
  ];

  // Pre-enrollments
  await prisma.enrollment.createMany({
    data: [
      { userId: coach.id, courseId: aiProd.id },
      { userId: coach.id, courseId: frontLever.id },
      { userId: learner.id, courseId: calisthenics.id },
      { userId: learner.id, courseId: aiTrainer.id },
    ],
    skipDuplicates: true,
  });

  console.log("Seed completed.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
