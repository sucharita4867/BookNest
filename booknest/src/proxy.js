import { NextResponse } from "next/server";

export function proxy(request) {
  const auth = request.cookies.get("auth")?.value;
  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith("/addBook") && auth !== "true") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/addBook/:path*"],
};
