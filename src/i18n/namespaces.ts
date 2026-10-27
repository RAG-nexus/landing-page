/** One JSON file per namespace in locales/<locale>/. Register new files here. */
export const namespaces = [
  "common",
  "contact",
  "home",
  "integrations",
  "services",
  "use-cases",
  "abogados",
  "author",
  "calculator",
] as const;

export type Namespace = (typeof namespaces)[number];
