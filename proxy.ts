import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Retired GoDaddy/WordPress paths → current App Router paths.
 * skipTrailingSlashRedirect is on so this file owns both legacy
 * redirects and trailing-slash stripping (single 308, no chains).
 */
const exact: Record<string, string> = {
  "/contact-us-1": "/contact",
  "/contact-us": "/contact",
  "/request-service": "/contact",
  "/requesting-service-form": "/contact",
  "/request-a-quote": "/contact",
  "/get-a-quote": "/contact",
  "/quote": "/contact",
  "/get-started": "/contact",
  "/applicant": "/contact",
  "/career-opportunities": "/contact",
  "/subcontractor-dd-form": "/contact",
  "/careers": "/contact",
  "/jobs": "/contact",
  "/faq": "/contact",
  "/home": "/",
  "/home-2": "/",
  "/index.html": "/",
  "/index.php": "/",
  "/about-us": "/",
  "/about": "/",
  "/why-choose-us": "/",
  "/services": "/",
  "/our-services": "/",
  "/team": "/",
  "/privacy-policy": "/",
  "/privacy": "/",
  "/terms": "/",
  "/articles": "/",
  "/blog": "/",
  "/news": "/",
  "/shop": "/",
  "/cart": "/",
  "/my-account": "/",
  "/testimonials": "/",
  "/reviews": "/",
  "/bodyguards": "/executive-protection",
  "/arizona-bodyguard": "/executive-protection",
  "/tucson-bodyguard": "/executive-protection",
  "/executive-protection-1": "/executive-protection",
  "/personal-protection-k9s": "/executive-protection",
  "/armed-escorts": "/executive-protection",
  "/protection": "/executive-protection",
  "/bodyguard": "/executive-protection",
  "/event-security-services": "/event-security",
  "/event-security-1": "/event-security",
  "/security-guards-1": "/security-guards",
  "/security-company": "/security-guards",
  "/security-companies": "/security-guards",
  "/security-companies-in-arizona": "/security-guards",
  "/security": "/security-guards",
  "/guards": "/security-guards",
  "/off-duty-police": "/security-guards",
  "/site-surveillance": "/security-guards",
  "/active-shooter-training": "/security-guards",
  "/firearms-training": "/security-guards",
  "/self-defense-training": "/security-guards",
  "/training-programs": "/security-guards",
  "/workplace-violence": "/security-guards",
  "/where-we-operate": "/national-accounts",
  "/arizona": "/national-accounts",
  "/washington": "/national-accounts",
  "/oregon": "/national-accounts",
  "/florida": "/national-accounts",
  "/texas": "/national-accounts",
  "/new-mexico": "/national-accounts",
  "/locations": "/national-accounts",
  "/national-accounts-1": "/national-accounts",
};

const subpathDest: { root: string; dest: string }[] = [
  { root: "/bodyguards", dest: "/executive-protection" },
  { root: "/executive-protection", dest: "/executive-protection" },
  { root: "/event-security", dest: "/event-security" },
  { root: "/security-guards", dest: "/security-guards" },
  { root: "/workplace-violence", dest: "/security-guards" },
  { root: "/articles", dest: "/" },
  { root: "/theft", dest: "/" },
];

function stripSlash(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

function destinationFor(pathname: string): string | null {
  const normalized = stripSlash(pathname);
  if (exact[normalized]) return exact[normalized];
  for (const { root, dest } of subpathDest) {
    if (normalized === root) continue;
    if (normalized.startsWith(root + "/")) return dest;
  }
  return null;
}

function redirectTo(request: NextRequest, pathname: string) {
  const url = new URL(request.url);
  url.pathname = pathname;
  // Avoid accidental trailing slash on non-root destinations
  if (pathname !== "/" && url.pathname.endsWith("/")) {
    url.pathname = url.pathname.slice(0, -1);
  }
  return NextResponse.redirect(url, 308);
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const dest = destinationFor(pathname);
  if (dest) {
    const normalized = stripSlash(pathname);
    if (normalized !== dest) {
      return redirectTo(request, dest);
    }
  }

  if (pathname.length > 1 && pathname.endsWith("/")) {
    return redirectTo(request, stripSlash(pathname));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|svg|webp|mp4|ico|txt|xml)$).*)",
  ],
};
