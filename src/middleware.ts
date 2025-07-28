import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import i18n from "../i18n.json";

const CSP = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval'
    https://*.licdn.com
    https://*.linkedin.com
    https://*.firebaseio.com
    https://*.firebaseapp.com
    https://*.googleapis.com
    https://*.googletagmanager.com
    https://*.iubenda.com
    https://*.webwhiz.ai
    https://va.vercel-scripts.com
    https://cdn.jsdelivr.net;
  style-src 'self' 'unsafe-inline' https://*.iubenda.com https://cdn.jsdelivr.net;
  img-src 'self' data: https: https://px.ads.linkedin.com;
  font-src 'self' https:;
  connect-src 'self'
    https://*.firebaseio.com
    https://*.googleapis.com
    https://*.googletagmanager.com
    https://*.iubenda.com
    https://*.webwhiz.ai
    https://*.google-analytics.com;
  frame-ancestors 'none';
  frame-src https://*.linkedin.com https://*.iubenda.com https://www.youtube.com https://www.youtube-nocookie.com https://widget.webwhiz.ai/;
  upgrade-insecure-requests;
`
  .replace(/\s{2,}/g, " ")
  .trim();

export function middleware(request: NextRequest) {
  const locale = request.nextUrl.locale || i18n.defaultLocale;
  request.nextUrl.searchParams.set("lang", locale);
  request.nextUrl.href = request.nextUrl.href.replace(`/${locale}`, "");

  const response = NextResponse.rewrite(request.nextUrl);

  response.headers.set("Content-Security-Policy", CSP);
  response.headers.set("Access-Control-Allow-Origin", "https://ragnexus.com");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-XSS-Protection", "1; mode=block");

  return response;
}

export const config = {
  matcher: "/:path*",
};
