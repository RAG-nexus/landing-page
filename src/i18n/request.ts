import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

const namespaces = [
  "common",
  "contact",
  "home",
  "integrations",
  "services",
  "use-cases",
  "abogados",
] as const;

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const loaded = await Promise.all(
    namespaces.map(async (ns) => {
      const mod = await import(`../../locales/${locale}/${ns}.json`);
      return [ns, mod.default] as const;
    })
  );

  const messages = Object.fromEntries(loaded) as Record<
    (typeof namespaces)[number],
    Record<string, unknown>
  >;

  return { locale, messages };
});
