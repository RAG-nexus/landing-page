import { pageGraph, serializeJsonLd, type JsonLdGraph } from "@/lib/jsonld";
import type { AppPathname } from "@/i18n/routing";

/** The single JSON-LD <script> of a page. Render it once per page. */
export function JsonLd({ graph }: { graph: JsonLdGraph | null }) {
  if (!graph) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(graph) }}
    />
  );
}

/** Standard graph for a public page (see pageGraph). */
export function PageJsonLd({ route, locale }: { route: AppPathname; locale: string }) {
  return <JsonLd graph={pageGraph(route, locale)} />;
}
