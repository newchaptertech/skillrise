import "dotenv/config";
import { PrismaClient } from "@prisma/client";

async function main() {
  const prisma = new PrismaClient();
  try {
    const users = await prisma.user.findMany({
      select: { id: true, email: true, passwordHash: true, role: true },
    });
    console.log(JSON.stringify(users, null, 2));
  } catch (e) {
    console.error("ERROR", e && e.message ? e.message : e);
  } finally {
    await prisma.$disconnect();
  }
}

main();
