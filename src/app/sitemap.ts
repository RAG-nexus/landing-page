import { MetadataRoute } from "next";
import { execSync } from "child_process";
import path from "path";
import {
  NOINDEX_PATHNAMES,
  absoluteUrl,
  hreflangUrls,
  routing,
  type AppPathname,
} from "@/i18n/routing";

function getLastModifiedDate(filePath: string): Date {
  try {
    const command = `git log -1 --format=%cd --date=short -- "${filePath}"`;
    const stdout = execSync(command).toString().trim();
    return stdout ? new Date(stdout) : new Date();
  } catch (error) {
    console.error(`Error getting last modified date for ${filePath}:`, error);
    return new Date();
  }
}

/** Only indexable, non-redirecting URLs, each with es / en / x-default. */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = (Object.keys(routing.pathnames) as AppPathname[]).filter(
    (route) => !NOINDEX_PATHNAMES.includes(route)
  );

  return routes.flatMap((route) => {
    const pageFile = path.join(
      process.cwd(),
      "src/app/[locale]",
      route === "/" ? "" : route,
      "page.tsx"
    );
    const lastModified = getLastModifiedDate(pageFile);
    return routing.locales.map((locale) => ({
      url: absoluteUrl(route, locale),
      lastModified,
      alternates: { languages: hreflangUrls(route) },
    }));
  });
}
