import type { AppPathname, Locale } from "@/i18n/routing";

export interface PageSeo {
  /** Full <title>, ending in " | RAGnexus". Also the JSON-LD WebPage name. */
  title: string;
  /** Meta description. Empty for noindex pages. */
  description: string;
  /** Short page name used in the breadcrumb (visible page label). */
  breadcrumb: string;
}

/** Single source of truth for per-page title / description / breadcrumb name. */
export const PAGE_SEO: Record<AppPathname, Record<Locale, PageSeo>> = {
  "/": {
    es: {
      title: "IA privada para empresas, con datos en Europa | RAGnexus",
      description:
        "Asistente de IA conectado a los documentos de tu empresa. Cada respuesta cita su fuente y tus datos no salen de Europa. Nube europea u on-premise.",
      breadcrumb: "Inicio",
    },
    en: {
      title: "Private AI for business, data kept in Europe | RAGnexus",
      description:
        "An AI assistant grounded in your company's documents. Every answer cites its source, and your data never leaves Europe. EU cloud or on-premise.",
      breadcrumb: "Home",
    },
  },
  "/abogados": {
    es: {
      title: "IA privada para despachos de abogados en España | RAGnexus",
      description:
        "Asistente de IA para despachos de 20 a 80 abogados: encuentra precedentes y cláusulas internas citando la fuente. Datos en Europa y opción on-premise.",
      breadcrumb: "Abogados",
    },
    en: {
      title: "Private AI for law firms in Spain | RAGnexus",
      description:
        "An AI assistant for firms of 20 to 80 lawyers: find internal precedents and clauses with the source cited. Data kept in Europe, on-premise option.",
      breadcrumb: "Law firms",
    },
  },
  "/services": {
    es: {
      title: "Servicios de asistentes de IA a medida | RAGnexus",
      description:
        "Desarrollo de asistentes de IA con tus propios datos, integración en tus plataformas, mantenimiento por suscripción y formación para tu equipo.",
      breadcrumb: "Servicios",
    },
    en: {
      title: "Custom AI assistant services | RAGnexus",
      description:
        "Development of AI assistants grounded in your own data, integration into your platforms, subscription maintenance, and training for your team.",
      breadcrumb: "Services",
    },
  },
  "/use-cases": {
    es: {
      title: "Caso de uso: un chat de IA para tu web | RAGnexus",
      description:
        "El mismo chat que ves en esta web: un asistente de IA que usa el contenido de tu sitio para responder con contexto completo sobre tu oferta.",
      breadcrumb: "Casos de uso",
    },
    en: {
      title: "Use case: an AI chat for your website | RAGnexus",
      description:
        "The same chat you see on this site: an AI assistant that uses your website's content to answer with full context about your offer.",
      breadcrumb: "Use cases",
    },
  },
  "/integrations": {
    es: {
      title: "Integraciones con SharePoint, Drive y Notion | RAGnexus",
      description:
        "RAGnexus se conecta a SharePoint, Google Drive, Notion, Confluence, Slack, Salesforce, HubSpot y muchas otras herramientas que tu empresa ya usa.",
      breadcrumb: "Integraciones",
    },
    en: {
      title: "Integrations with SharePoint, Drive and Notion | RAGnexus",
      description:
        "RAGnexus connects to SharePoint, Google Drive, Notion, Confluence, Slack, Salesforce, HubSpot, and many other tools your company already uses.",
      breadcrumb: "Integrations",
    },
  },
  "/contact": {
    es: {
      title: "Reserva una demo de 20 minutos | RAGnexus",
      description:
        "Habla 20 minutos con el fundador y te diremos con honestidad si RAGnexus encaja en tu empresa, o si no. Sin compromiso y sin presentación enlatada.",
      breadcrumb: "Contacto",
    },
    en: {
      title: "Book a 20-minute demo | RAGnexus",
      description:
        "Talk to the founder for 20 minutes and we'll tell you honestly whether RAGnexus fits your company, or not. No commitment, no canned presentation.",
      breadcrumb: "Contact",
    },
  },
  "/politica-de-privacidad": {
    es: {
      title: "Política de privacidad | RAGnexus",
      description:
        "Cómo trata RAGnexus los datos personales de quienes visitan esta web o nos contactan: qué recogemos, para qué, con quién y cuáles son tus derechos.",
      breadcrumb: "Política de privacidad",
    },
    en: {
      title: "Privacy policy | RAGnexus",
      description:
        "How RAGnexus handles the personal data of people who visit this site or contact us: what we collect, why, who with, and what your rights are.",
      breadcrumb: "Privacy policy",
    },
  },
  "/javier-perez": {
    es: {
      title: "Javier Pérez, CEO y fundador de RAGnexus | RAGnexus",
      description:
        "Javier Pérez es el fundador de RAGnexus, el espacio de trabajo con IA privado para empresas europeas. Ingeniero de software en Barcelona.",
      breadcrumb: "Javier Pérez",
    },
    en: {
      title: "Javier Pérez, CEO & Founder of RAGnexus | RAGnexus",
      description:
        "Javier Pérez is the founder of RAGnexus, the private AI workspace for European companies. Software engineer based in Barcelona.",
      breadcrumb: "Javier Pérez",
    },
  },
  "/thank-you": {
    es: { title: "Gracias | RAGnexus", description: "", breadcrumb: "Gracias" },
    en: { title: "Thank you | RAGnexus", description: "", breadcrumb: "Thank you" },
  },
};

export function getPageSeo(route: AppPathname, locale: string): PageSeo {
  const byLocale = PAGE_SEO[route];
  return byLocale[(locale as Locale) in byLocale ? (locale as Locale) : "en"];
}
