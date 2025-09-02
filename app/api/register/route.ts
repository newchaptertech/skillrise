import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { z } from "zod";
import { hash } from "bcrypt";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password } = schema.parse(body);
    const exists = await prisma.user.findUnique({ where: { email } });
    if (exists)
      return NextResponse.json(
        { error: "Email already in use" },
        { status: 400 }
      );
    const passwordHash = await hash(password, 10);
    const user = await prisma.user.create({
      data: { name, email, passwordHash, role: "USER" },
    });
    return NextResponse.json({ id: user.id }, { status: 201 });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 400 });
  }
}
