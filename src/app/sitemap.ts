import { MetadataRoute } from "next";
import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { routing } from "@/i18n/routing";

function getLastModifiedDate(filePath: string): Date {
  try {
    const command = `git log -1 --format=%cd --date=short -- ${filePath}`;
    const stdout = execSync(command).toString().trim();
    return stdout ? new Date(stdout) : new Date();
  } catch (error) {
    console.error(`Error getting last modified date for ${filePath}:`, error);
    return new Date();
  }
}

function getRoutesFromDir(dir: string): string[] {
  const routes: string[] = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    if (
      item.name.startsWith("api") ||
      item.name.startsWith("_") ||
      item.name.startsWith("(") ||
      /^(layout|template|loading|error|not-found)\.(js|jsx|ts|tsx)$/.test(
        item.name
      )
    ) {
      continue;
    }

    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      routes.push(...getRoutesFromDir(fullPath));
    } else if (/^page\.(js|jsx|ts|tsx)$/.test(item.name)) {
      routes.push(dir);
    }
  }
  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ragnexus.com";
  const localeDir = path.join(process.cwd(), "src/app/[locale]");
  const pageDirs = getRoutesFromDir(localeDir);

  return pageDirs.map((dir) => {
    const relative = path.relative(localeDir, dir);
    const routePath = relative === "" ? "" : `/${relative}`;
    const defaultUrl = `${baseUrl}/${routing.defaultLocale}${routePath}`;

    const languages = Object.fromEntries(
      routing.locales.map((locale) => [
        locale,
        `${baseUrl}/${locale}${routePath}`,
      ])
    );

    return {
      url: defaultUrl,
      lastModified: getLastModifiedDate(path.join(dir, "page.tsx")),
      alternates: { languages },
    };
  });
}
