import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { routing, type Locale } from "./i18n/routing";

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
    https://*.posthog.com
    https://cdn.ragnexus.com;
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
    https://*.posthog.com
    https://cdn.ragnexus.com;
  frame-ancestors 'none';
  frame-src https://*.linkedin.com https://*.iubenda.com https://www.youtube.com https://www.youtube-nocookie.com https://widget.webwhiz.ai/ https://*.firebasedatabase.app;
  upgrade-insecure-requests;
`
  .replace(/\s{2,}/g, " ")
  .trim();

const intlMiddleware = createMiddleware(routing);

/** Cookie written by the language selector. Same name next-intl uses by default. */
const LOCALE_COOKIE = "NEXT_LOCALE";

function isLocale(value: string | undefined): value is Locale {
  return !!value && (routing.locales as readonly string[]).includes(value);
}

/**
 * Preferred locale from Accept-Language: the language with the highest q (first
 * listed wins ties). "es", "es-ES", "es-MX"... -> "es"; anything else -> "en".
 */
export function localeFromAcceptLanguage(header: string | null): Locale {
  if (!header) return "en";
  let best: { tag: string; q: number } | null = null;
  for (const part of header.split(",")) {
    const [tagRaw, ...params] = part.trim().split(";");
    const tag = tagRaw.trim().toLowerCase();
    if (!tag) continue;
    const qParam = params.map((p) => p.trim()).find((p) => p.startsWith("q="));
    const q = qParam ? Number(qParam.slice(2)) : 1;
    if (Number.isNaN(q) || q <= 0) continue;
    if (!best || q > best.q) best = { tag, q };
  }
  return best && (best.tag === "es" || best.tag.startsWith("es-")) ? "es" : "en";
}

function withSecurityHeaders(response: NextResponse) {
  response.headers.set("Content-Security-Policy", CSP);
  response.headers.set("Access-Control-Allow-Origin", "https://ragnexus.com");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  return response;
}

export function middleware(request: NextRequest) {
  // Root only: temporary (302) redirect by language. The cookie, set by the
  // language selector, wins over Accept-Language. No IP geolocation.
  // /es/... and /en/... URLs are never redirected by language.
  if (request.nextUrl.pathname === "/") {
    const cookie = request.cookies.get(LOCALE_COOKIE)?.value;
    const locale = isLocale(cookie)
      ? cookie
      : localeFromAcceptLanguage(request.headers.get("accept-language"));
    const target = request.nextUrl.clone();
    target.pathname = `/${locale}`;
    const response = NextResponse.redirect(target, 302);
    response.headers.set("Vary", "Accept-Language, Cookie");
    return withSecurityHeaders(response);
  }

  // No trailing slash: one permanent hop, query string preserved.
  const { pathname } = request.nextUrl;
  if (pathname.length > 1 && pathname.endsWith("/")) {
    const target = new URL(
      pathname.replace(/\/+$/, "") + request.nextUrl.search,
      request.url
    );
    return withSecurityHeaders(NextResponse.redirect(target, 301));
  }

  return withSecurityHeaders(intlMiddleware(request));
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
