import { MetadataRoute } from "next";
import { execSync } from "child_process";
import fs from "fs";
import path from "path";

// Helper function to get the last commit date for a file
function getLastModifiedDate(filePath: string): Date {
  try {
    const command = `git log -1 --format=%cd --date=short -- ${filePath}`;
    const stdout = execSync(command).toString().trim();
    return new Date(stdout);
  } catch (error) {
    console.error(`Error getting last modified date for ${filePath}:`, error);
    // Fallback to current date or a default date
    return new Date();
  }
}

// Function to recursively find page files and generate sitemap entries
function getRoutesFromDir(dir: string, baseUrl: string): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);

    // Skip API routes, private folders, route groups, layout/template/special files
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

    if (item.isDirectory()) {
      // Recursively search in subdirectories
      entries.push(...getRoutesFromDir(fullPath, baseUrl));
    } else if (/^page\.(js|jsx|ts|tsx)$/.test(item.name)) {
      // Found a page file, generate sitemap entry
      let routePath = path.relative(path.join(process.cwd(), "src/app"), dir);
      // Handle index route (root page.tsx)
      if (routePath === ".") {
        routePath = "";
      }
      const url = `${baseUrl}/${routePath}`;
      const pageFilePath = path.join(dir, item.name);
      const lastModified = getLastModifiedDate(pageFilePath);

      // Basic alternates generation (assuming /es/ and /en/ prefixes)
      // You might need more sophisticated logic depending on your i18n setup
      const alternates = {
        languages: {
          es: `${baseUrl}/es/${routePath}`,
          en: `${baseUrl}/en/${routePath}`,
        },
      };

      entries.push({
        url,
        lastModified,
        alternates,
      });
    }
  }
  return entries;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ragnexus.com";
  const appDir = path.join(process.cwd(), "src/app");

  // Automatically discover routes
  const dynamicRoutes = getRoutesFromDir(appDir, baseUrl);

  // You can still add specific routes manually if needed,
  // or filter/modify the dynamicRoutes array

  // Example: Ensure root URL '/' is handled correctly if page.tsx is at src/app/page.tsx
  const rootEntry = dynamicRoutes.find((entry) => entry.url === baseUrl + "/");
  if (rootEntry) {
    rootEntry.url = baseUrl; // Correct the root URL if found as '/'
    if (rootEntry.alternates?.languages) {
      rootEntry.alternates.languages.es = `${baseUrl}/es`;
      rootEntry.alternates.languages.en = `${baseUrl}/en`;
    }
  }
  // Handle cases where the root page might not be picked up depending on exact logic/structure
  else if (!dynamicRoutes.some((entry) => entry.url === baseUrl)) {
    const lastModifiedHome = getLastModifiedDate("src/app/page.tsx");
    dynamicRoutes.unshift({
      url: baseUrl,
      lastModified: lastModifiedHome,
      alternates: {
        languages: {
          es: `${baseUrl}/es`,
          en: `${baseUrl}/en`,
        },
      },
    });
  }

  // Clean up trailing slashes from paths except for the root
  dynamicRoutes.forEach((route) => {
    if (route.url !== baseUrl && route.url.endsWith("/")) {
      route.url = route.url.slice(0, -1);
    }
    if (
      route.alternates?.languages?.es &&
      route.alternates.languages.es !== `${baseUrl}/es` &&
      route.alternates.languages.es.endsWith("/")
    ) {
      route.alternates.languages.es = route.alternates.languages.es.slice(
        0,
        -1
      );
    }
    if (
      route.alternates?.languages?.en &&
      route.alternates.languages.en !== `${baseUrl}/en` &&
      route.alternates.languages.en.endsWith("/")
    ) {
      route.alternates.languages.en = route.alternates.languages.en.slice(
        0,
        -1
      );
    }
  });

  return dynamicRoutes;

  // --- Previous manual approach (commented out or removed) ---
  // const lastModifiedHome = getLastModifiedDate("src/app/page.tsx");
  // const lastModifiedServices = getLastModifiedDate("src/app/services/page.tsx"); // Assuming this path
  // const lastModifiedUseCases = getLastModifiedDate("src/app/use-cases/page.tsx"); // Assuming this path
  // const lastModifiedIntegrations = getLastModifiedDate("src/app/integrations/page.tsx"); // Added integrations route
  // return [
  //   {
  //     url: baseUrl,
  // ... rest of manual entries
  //   },
  // ];
}
