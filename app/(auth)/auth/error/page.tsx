export const dynamic = "force-dynamic";

("use client");

import { useSearchParams } from "next/navigation";

export default function AuthErrorPage() {
  const params = useSearchParams();
  const error = params.get("error");
  return (
    <div className="mx-auto max-w-md py-10">
      <h1 className="mb-4 text-2xl font-bold">Authentication Error</h1>
      <p className="text-sm text-red-600">{error || "Something went wrong."}</p>
    </div>
  );
}
