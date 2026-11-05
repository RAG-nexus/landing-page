// External profiles used in schema.org `sameAs` and on the author page.
// Only verified URLs belong here; `null` means "not provided yet" and the UI
// and the JSON-LD simply omit it.

export const CRUNCHBASE_ORGANIZATION_URL =
  "https://www.crunchbase.com/organization/ragnexus";

// TODO(ragnexus): set the company LinkedIn page URL (e.g. https://www.linkedin.com/company/<slug>).
// Not found anywhere in the repo, so it is intentionally NOT guessed.
export const LINKEDIN_COMPANY_URL: string | null = null;

// TODO(ragnexus): set Javier Pérez's personal LinkedIn URL (https://www.linkedin.com/in/<slug>).
// Not found anywhere in the repo, so it is intentionally NOT guessed.
export const LINKEDIN_PERSON_URL: string | null = null;

// Square portrait (460x460) served from /public. The author page shows it in a 4:5 frame
// (cropped by object-cover) and the full Person JSON-LD declares it as `image`.
export const AUTHOR_PHOTO_PATH: string | null = "/javier-perez.jpg";
