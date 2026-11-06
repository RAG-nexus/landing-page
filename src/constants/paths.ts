export const RAG_NEXUS_SVG = "/ragnexus.svg";
// Section of the home page; works from any page and in either language.
export const ABOUT_PAGE_PATH = "/javier-perez";
export const CONTACT_PAGE_PATH = "/contact";
export const HOME_PAGE_PATH = "/";
export const SERVICES_PAGE_PATH = "/services";
export const USE_CASES_PAGE_PATH = "/use-cases";
export const INTEGRATIONS_PAGE_PATH = "/integrations";

// RAGnexus platform (the product itself). Every CTA on the site that sends visitors
// to the app goes through `appUrl` so signups can be attributed to the placement.
export const APP_URL = "https://app.ragnexus.com";
export const appUrl = (placement: string): string =>
  `${APP_URL}/?utm_source=ragnexus.com&utm_medium=website&utm_campaign=app-cta&utm_content=${encodeURIComponent(placement)}`;
