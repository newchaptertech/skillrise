import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const protectedRoutes = ["/courses", "/dashboard", "/admin"];
  const isProtected = protectedRoutes.some((p) => pathname.startsWith(p));
  if (!isProtected) return NextResponse.next();

  // Check for NextAuth session cookie (database sessions)
  const hasSession =
    req.cookies.has("next-auth.session-token") ||
    req.cookies.has("__Secure-next-auth.session-token");

  if (!hasSession) {
    const url = req.nextUrl.clone();
    url.pathname = "/auth/signin";
    url.searchParams.set("callbackUrl", req.nextUrl.pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/courses/:path*", "/dashboard", "/admin/:path*"],
};
