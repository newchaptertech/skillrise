"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import Logo from "./logo";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            {!session && (
              <>
                <li>
                  <Link
                    href="/auth/signin"
                    className="px-8 py-2 rounded-xl font-semibold text-base bg-white text-gray-900 border border-[#c1ff72] hover:bg-[#f7ffe8] transition flex items-center justify-center"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    href="/auth/signup"
                    className="px-8 py-2 rounded-xl font-semibold text-base bg-[#c1ff72] text-gray-900 border border-[#c1ff72] shadow-sm hover:bg-[#b3f05f] transition flex items-center justify-center"
                  >
                    Register
                  </Link>
                </li>
              </>
            )}

            {session && (
              <>
                <li>
                  <Link
                    href="/courses"
                    className="px-6 py-2 rounded-xl font-medium text-base text-gray-700 hover:bg-gray-100 transition flex items-center justify-center"
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className="px-6 py-2 rounded-xl font-medium text-base bg-white text-gray-900 border border-[#e5e7eb] hover:bg-gray-50 transition"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
}
