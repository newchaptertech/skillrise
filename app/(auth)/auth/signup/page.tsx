"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useState } from "react";

const FormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
});

type FormValues = z.infer<typeof FormSchema>;

export const dynamic = "force-dynamic";

export default function SignUpPage() {
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(FormSchema) });

  async function onSubmit(values: FormValues) {
    setError(null);
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (!res.ok) {
      const data = await res.json();
      setError(data.error || "Registration failed");
      return;
    }
    await signIn("credentials", {
      email: values.email,
      password: values.password,
      callbackUrl: "/courses",
    });
  }

  return (
    <div className="mx-auto max-w-md py-10">
      <h1 className="mb-6 text-3xl font-bold">Create your account</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium">Name</label>
          <input className="form-input w-full" {...register("name")} />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Email</label>
          <input
            className="form-input w-full"
            type="email"
            {...register("email")}
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Password</label>
          <input
            className="form-input w-full"
            type="password"
            {...register("password")}
          />
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button className="btn w-full" disabled={isSubmitting}>
          {isSubmitting ? "Creating..." : "Create account"}
        </button>
      </form>
    </div>
  );
}
