import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

// Old slug -> new slug (mirrors LEGACY_REDIRECTS in src/i18n/routing.ts, which
// next.config.mjs cannot import). Permanent 301, direct, query string preserved.
const LEGACY = [
  ["en", "/abogados", "/law-firms"],
  ["en", "/politica-de-privacidad", "/privacy-policy"],
  ["es", "/services", "/servicios"],
  ["es", "/use-cases", "/casos-de-uso"],
  ["es", "/integrations", "/integraciones"],
  ["es", "/contact", "/contacto"],
  ["es", "/thank-you", "/gracias"],
];

const wwwHost = [{ type: "host", value: "www.ragnexus.com" }];

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Trailing slashes are stripped in src/middleware.ts with a single 301 (Next's
  // own normalisation is a 308 that would chain with the legacy redirects).
  skipTrailingSlashRedirect: true,
  async redirects() {
    return [
      // www -> apex in one hop (legacy slugs go straight to their final URL).
      ...LEGACY.map(([locale, from, to]) => ({
        source: `/${locale}${from}`,
        has: wwwHost,
        destination: `https://ragnexus.com/${locale}${to}`,
        statusCode: 301,
      })),
      {
        source: "/:path*",
        has: wwwHost,
        destination: "https://ragnexus.com/:path*",
        statusCode: 301,
      },
      ...LEGACY.flatMap(([locale, from, to]) => [
        {
          source: `/${locale}${from}`,
          destination: `/${locale}${to}`,
          statusCode: 301,
        },
        {
          source: `/${locale}${from}/`,
          destination: `/${locale}${to}`,
          statusCode: 301,
        },
      ]),
    ];
  },
};

export default withNextIntl(nextConfig);
