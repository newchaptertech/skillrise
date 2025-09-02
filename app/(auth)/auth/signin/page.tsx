"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";

const FormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type FormValues = z.infer<typeof FormSchema>;

export const dynamic = "force-dynamic";

export default function SignInPage() {
  const params = useSearchParams();
  const callbackUrl = params.get("callbackUrl") || "/courses";
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(FormSchema) });

  async function onSubmit(values: FormValues) {
    setError(null);
    const res = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl,
    });
    if (res?.error) setError(res.error);
    else if (res?.url) window.location.href = res.url;
  }

  return (
    <div className="mx-auto max-w-md py-10">
      <h1 className="mb-6 text-3xl font-bold">Sign in</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
          {isSubmitting ? "Signing in..." : "Sign in"}
        </button>
      </form>
      <div className="mt-4 text-center">
        <button
          className="btn w-full"
          onClick={() => signIn("google", { callbackUrl })}
        >
          Continue with Google
        </button>
      </div>
      <p className="mt-6 text-center text-sm">
        No account?{" "}
        <Link className="underline" href="/auth/signup">
          Sign up
        </Link>
      </p>
    </div>
  );
}
