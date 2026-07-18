import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { routing } from "./i18n/routing";

const CSP = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval'
    https://*.licdn.com
    https://*.linkedin.com
    https://*.firebaseio.com
    https://*.firebaseapp.com
    https://*.firebasedatabase.app
    https://*.googleapis.com
    https://*.googletagmanager.com
    https://*.iubenda.com
    https://*.webwhiz.ai
    https://va.vercel-scripts.com
    https://cdn.jsdelivr.net
    https://*.posthog.com;
  style-src 'self' 'unsafe-inline' https://*.iubenda.com https://cdn.jsdelivr.net;
  img-src 'self' data: https: https://px.ads.linkedin.com;
  font-src 'self' https:;
  connect-src 'self'
    https://*.licdn.com
    https://*.linkedin.com
    https://*.firebaseio.com
    https://*.firebasedatabase.app
    wss://*.firebasedatabase.app
    https://*.googleapis.com
    https://*.googletagmanager.com
    https://*.iubenda.com
    https://*.webwhiz.ai
    https://*.google-analytics.com
    https://formspree.io
    https://*.posthog.com;
  frame-ancestors 'none';
  frame-src https://*.linkedin.com https://*.iubenda.com https://www.youtube.com https://www.youtube-nocookie.com https://widget.webwhiz.ai/ https://*.firebasedatabase.app;
  upgrade-insecure-requests;
`
  .replace(/\s{2,}/g, " ")
  .trim();

const intlMiddleware = createMiddleware(routing);

export function middleware(request: NextRequest) {
  const response = intlMiddleware(request);

  response.headers.set("Content-Security-Policy", CSP);
  response.headers.set("Access-Control-Allow-Origin", "https://ragnexus.com");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-XSS-Protection", "1; mode=block");

  return response;
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
