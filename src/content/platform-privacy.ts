import type { Locale } from "@/i18n/routing";

// Privacy policy of the RAGnexus platform (app.ragnexus.com), linked from the Google OAuth
// consent screen. Inline **bold** and `code` are rendered by the page.

export type Block = { p: string } | { ul: string[] } | { table: { head: string[]; rows: string[][] } };

export interface PolicySection {
  id: string;
  title: string;
  blocks: Block[];
}

export interface Policy {
  title: string;
  effective: string;
  tocLabel: string;
  sections: PolicySection[];
}

const es: Policy = {
  title: "Política de privacidad de la plataforma",
  effective: "Fecha de entrada en vigor: 5 de noviembre de 2026",
  tocLabel: "Contenido",
  sections: [
    {
      id: "responsable",
      title: "1. Quién es el responsable",
      blocks: [
        {
          p: "El responsable del tratamiento de los datos descritos en esta política es **RAGnexus S.L.** Puedes contactar con nosotros en **javier@ragnexus.com**.",
        },
      ],
    },
    {
      id: "alcance",
      title: "2. A qué se aplica",
      blocks: [
        {
          p: "RAGnexus es una plataforma de inteligencia artificial para empresas, basada en el software de código abierto Onyx. Cada cliente dispone de su propio espacio de trabajo (workspace), aislado del resto. La plataforma ofrece chat con modelos de IA, búsqueda en documentos de la empresa, búsqueda web, agentes y conexión con otras aplicaciones (conectores).",
        },
        {
          p: "Esta política se aplica a quienes se registran y usan la plataforma en app.ragnexus.com, incluida la prueba gratuita. La web ragnexus.com tiene su propia política de privacidad.",
        },
      ],
    },
    {
      id: "datos",
      title: "3. Qué datos tratamos",
      blocks: [
        { p: "**Datos de tu cuenta**" },
        {
          ul: [
            "Email, nombre visible y contraseña. La contraseña se guarda cifrada mediante hash: no la conocemos.",
            "Si entras con Google: el identificador de tu cuenta de Google, tu email y tu nombre. Solo pedimos los permisos básicos de inicio de sesión (openid, email y profile). No accedemos a tu Gmail, Drive ni a ningún otro dato de tu cuenta de Google por esta vía.",
          ],
        },
        { p: "**Contenido**" },
        {
          ul: [
            "Mensajes de chat y respuestas.",
            "Documentos y ficheros que subes.",
            "Contenido sincronizado desde los conectores que tu organización active.",
            "Agentes que crees y ajustes del workspace.",
          ],
        },
        { p: "**Datos de uso**" },
        {
          ul: [
            "Consumo de modelos de IA por workspace (coste y número de tokens).",
            "Número de documentos indexados.",
            "Fecha de la última actividad.",
            "Eventos de uso de la plataforma (por ejemplo, que se ha enviado un mensaje, se ha creado un conector o se ha registrado un usuario), asociados a identificadores internos de usuario y de workspace. Estos eventos no incluyen el contenido de tus mensajes ni de tus documentos.",
          ],
        },
        { p: "**Datos técnicos**" },
        {
          ul: [
            "Registros del servidor (peticiones y errores), que pueden incluir la dirección IP.",
            "Cookies necesarias para el funcionamiento de la plataforma (ver apartado 11).",
          ],
        },
        { p: "**Protección frente a bots**" },
        {
          ul: [
            "En el registro, el inicio de sesión y la entrada con Google usamos Google reCAPTCHA, que analiza datos del navegador y del dispositivo para distinguir personas de bots.",
          ],
        },
        { p: "**Comunicaciones**" },
        { ul: ["Emails de verificación, invitaciones a un workspace y avisos de inactividad."] },
      ],
    },
    {
      id: "finalidades",
      title: "4. Para qué los usamos y con qué base legal",
      blocks: [
        {
          table: {
            head: ["Finalidad", "Datos", "Base jurídica"],
            rows: [
              ["Crear y gestionar tu cuenta y prestar el servicio (chat, búsqueda, agentes, conectores)", "Cuenta, contenido, uso", "Ejecución del contrato (art. 6.1.b RGPD)"],
              ["Enviarte emails de verificación e invitaciones", "Cuenta", "Ejecución del contrato (art. 6.1.b)"],
              ["Proteger la plataforma, prevenir abusos y bots", "Técnicos, reCAPTCHA, cuenta", "Interés legítimo en mantener el servicio seguro (art. 6.1.f)"],
              ["Limitar el uso gratuito (2 USD por workspace y semana en modelos de IA)", "Uso", "Ejecución del contrato (condiciones de la prueba gratuita)"],
              ["Avisarte de la inactividad y borrar los workspaces inactivos", "Cuenta, uso", "Ejecución del contrato e interés legítimo en no conservar datos innecesarios (art. 6.1.b y f)"],
              ["Atender solicitudes de soporte", "Cuenta y lo que nos cuentes", "Ejecución del contrato (art. 6.1.b)"],
              ["Informes internos y estadísticas de uso para gestionar y mejorar la plataforma", "Uso, cuenta", "Interés legítimo en administrar, planificar y mejorar el servicio (art. 6.1.f)"],
            ],
          },
        },
        { p: "Cuando la base es el interés legítimo, puedes oponerte escribiéndonos (ver apartado 10)." },
        {
          p: "RAGnexus no usa tu contenido para entrenar modelos de IA. Los proveedores de los modelos gratuitos tienen sus propias condiciones; consulta el apartado 6.",
        },
      ],
    },
    {
      id: "encargado",
      title: "5. Contenido de los clientes: RAGnexus como encargado",
      blocks: [
        {
          p: "El contenido que una organización sube o conecta a su workspace (documentos de empresa, correos, datos de clientes o empleados, etc.) es responsabilidad de esa organización. Para ese contenido, la organización cliente es la responsable del tratamiento y RAGnexus actúa como encargado: lo trata solo para prestarle el servicio y siguiendo sus instrucciones.",
        },
        {
          p: "Si tu organización trata datos personales de terceros en RAGnexus, necesita un contrato de encargo del tratamiento con nosotros. Puedes solicitarlo en javier@ragnexus.com.",
        },
        { p: "Si eres un usuario invitado por tu empresa, para dudas sobre ese contenido dirígete primero a tu empresa." },
      ],
    },
    {
      id: "destinatarios",
      title: "6. Con quién compartimos datos",
      blocks: [
        { p: "Solo compartimos datos con los proveedores que necesitamos para prestar el servicio:" },
        {
          ul: [
            "**Hostman Ltd**: alojamiento de los servidores, la base de datos y los ficheros, en centros de datos de Frankfurt (Alemania).",
            "**Hetzner Online GmbH**: aloja, en Alemania, el servidor dedicado desde el que RAGnexus envía sus propios emails (verificación, invitaciones y avisos).",
            "**OpenRouter (Estados Unidos)**: enruta los mensajes de chat hacia los modelos de IA de la prueba gratuita: GLM (Z.ai), Qwen (Alibaba) y DeepSeek. No restringimos la región, así que estos modelos pueden ejecutarse en Estados Unidos, China u otros países fuera del Espacio Económico Europeo. Reciben el texto de tus mensajes y el contexto necesario para responder (por ejemplo, fragmentos de tus documentos). Algunos de estos proveedores pueden conservar los mensajes o usarlos para mejorar sus modelos según sus propias condiciones. **Te recomendamos no introducir datos personales sensibles ni información confidencial mientras uses los modelos gratuitos.**",
            "**Google**: inicio de sesión con Google y reCAPTCHA Enterprise.",
            "**Búsqueda web**: usamos SearXNG, alojado por RAGnexus, que envía el texto de tus búsquedas a buscadores públicos (por ejemplo, Google). Esas consultas no incluyen tu identidad, pero sí el texto que buscas.",
            "**Telemetría**: la plataforma envía los eventos de uso descritos en el apartado 3 a un servidor de RAGnexus (telemetry.ragnexus.com).",
          ],
        },
        {
          p: "**Proveedores que conecta el cliente.** Si tu organización conecta sus propios proveedores (otros modelos de IA, servicios de búsqueda o conectores), esos tratamientos se rigen por los acuerdos entre tu organización y esos proveedores.",
        },
        {
          p: "No vendemos tus datos ni los cedemos a terceros con fines publicitarios. Solo los comunicaremos a autoridades cuando una ley nos obligue.",
        },
      ],
    },
    {
      id: "transferencias",
      title: "7. Transferencias fuera del Espacio Económico Europeo",
      blocks: [
        { p: "Tus datos se alojan en Alemania. Algunos proveedores los tratan fuera del EEE:" },
        {
          ul: [
            "**OpenRouter y los proveedores de los modelos gratuitos**, que pueden estar en Estados Unidos, China u otros países. Algunos de estos países, como China, no cuentan con una decisión de adecuación de la Comisión Europea.",
            "**Google (Estados Unidos)**: Google LLC está adherido al EU-U.S. Data Privacy Framework y además usa cláusulas contractuales tipo.",
          ],
        },
        { p: "Puedes pedirnos información sobre estas transferencias escribiendo a javier@ragnexus.com." },
      ],
    },
    {
      id: "conservacion",
      title: "8. Cuánto tiempo conservamos los datos",
      blocks: [
        {
          ul: [
            "**Workspace activo:** mientras lo uses, hasta que borres el contenido o cierres la cuenta.",
            "**Workspace inactivo:** te avisamos por email a los 30 días sin uso, enviamos un último aviso a los 53 días y a los 60 días borramos el workspace por completo (datos, documentos, ficheros e índice de búsqueda).",
            "**Copias de seguridad:** hacemos copias diarias de la base de datos y las conservamos 2 meses. Los datos borrados desaparecen de las copias cuando estas caducan.",
            "**Registros del servidor:** 2 meses.",
          ],
        },
      ],
    },
    {
      id: "seguridad",
      title: "9. Seguridad",
      blocks: [{ p: "Cada workspace está aislado de los demás y las contraseñas se guardan cifradas mediante hash." }],
    },
    {
      id: "derechos",
      title: "10. Tus derechos",
      blocks: [
        { p: "Puedes ejercer en cualquier momento tus derechos de:" },
        {
          ul: [
            "**acceso** a tus datos;",
            "**rectificación** de datos inexactos;",
            "**supresión** de tus datos;",
            "**oposición** a los tratamientos basados en el interés legítimo;",
            "**limitación** del tratamiento;",
            "**portabilidad**, para recibir tus datos en un formato estructurado;",
            "**retirar tu consentimiento** cuando el tratamiento se base en él.",
          ],
        },
        {
          p: "Escríbenos a **javier@ragnexus.com** indicando qué derecho quieres ejercer. Te responderemos en el plazo máximo de un mes. Para el contenido de un workspace de empresa, trasladaremos la solicitud a esa empresa, que es la responsable.",
        },
        {
          p: "Si crees que no hemos tratado bien tus datos, puedes reclamar ante la Agencia Española de Protección de Datos (www.aepd.es).",
        },
      ],
    },
    {
      id: "cookies",
      title: "11. Cookies",
      blocks: [
        {
          p: "La plataforma solo usa cookies necesarias para funcionar y para recordar tus preferencias. No usa cookies de analítica ni de publicidad.",
        },
        {
          table: {
            head: ["Cookie", "Quién la pone", "Para qué"],
            rows: [
              ["`fastapiusersauth`", "RAGnexus", "Mantener tu sesión iniciada"],
              ["`fastapiusersoauthcsrf`, `fastapiusersoauthpkce_…`", "RAGnexus", "Proteger el inicio de sesión con Google"],
              ["`onyx_captcha_verified`", "RAGnexus", "Recordar que has superado la verificación antibots"],
              ["`onyx_tid`", "RAGnexus", "Identificar tu workspace en algunos procesos, como restablecer la contraseña"],
              ["`onyx_anonymous_user`", "RAGnexus", "Acceso sin cuenta a un workspace, si su administrador lo permite"],
              ["`sidebarIsToggled` y otras de preferencias (avisos cerrados, ajustes de visualización)", "RAGnexus", "Recordar cómo prefieres ver la plataforma (hasta 1 año)"],
              ["Cookies de Google reCAPTCHA", "Google", "Detectar bots en el registro y el inicio de sesión"],
            ],
          },
        },
      ],
    },
    {
      id: "google",
      title: "12. Datos de tu cuenta de Google",
      blocks: [
        {
          p: "Si entras con Google, solo recibimos tu identificador de cuenta, tu email y tu nombre. Los usamos únicamente para crear tu cuenta e identificarte al iniciar sesión. No los vendemos, no los usamos para publicidad y no los compartimos con terceros salvo con los proveedores de alojamiento descritos en el apartado 6.",
        },
        {
          p: "Nuestro uso de la información recibida de las APIs de Google cumple la Política de datos de usuario de los servicios de API de Google, incluidos los requisitos de uso limitado.",
        },
      ],
    },
    {
      id: "menores",
      title: "13. Menores",
      blocks: [
        {
          p: "RAGnexus está dirigido a empresas y solo pueden usarlo mayores de 18 años. Si sabemos que un menor nos ha facilitado datos, los borraremos.",
        },
      ],
    },
    {
      id: "cambios",
      title: "14. Cambios en esta política",
      blocks: [
        {
          p: "Si cambiamos esta política de forma importante, te avisaremos por email o en la plataforma antes de que el cambio entre en vigor.",
        },
      ],
    },
  ],
};

const en: Policy = {
  title: "Platform privacy policy",
  effective: "Effective date: 5 November 2026",
  tocLabel: "Contents",
  sections: [
    {
      id: "controller",
      title: "1. Who is responsible",
      blocks: [
        {
          p: "The controller of the data described in this policy is **RAGnexus S.L.** You can contact us at **javier@ragnexus.com**.",
        },
      ],
    },
    {
      id: "scope",
      title: "2. What this policy covers",
      blocks: [
        {
          p: "RAGnexus is an AI platform for businesses, built on the open-source software Onyx. Each customer has its own isolated workspace. The platform offers chat with AI models, search across company documents, web search, agents, and connections to other apps (connectors).",
        },
        {
          p: "This policy applies to anyone who signs up for and uses the platform at app.ragnexus.com, including the free trial. The ragnexus.com website has its own privacy policy.",
        },
      ],
    },
    {
      id: "data",
      title: "3. What data we process",
      blocks: [
        { p: "**Account data**" },
        {
          ul: [
            "Email, display name, and password. The password is stored as a hash, so we never know it.",
            "If you sign in with Google: your Google account ID, email, and name. We only request the basic sign-in permissions (openid, email, and profile). We do not access your Gmail, Drive, or any other Google account data this way.",
          ],
        },
        { p: "**Content**" },
        {
          ul: [
            "Chat messages and responses.",
            "Documents and files you upload.",
            "Content synced from connectors your organization enables.",
            "Agents you create and workspace settings.",
          ],
        },
        { p: "**Usage data**" },
        {
          ul: [
            "AI model usage per workspace (cost and number of tokens).",
            "Number of indexed documents.",
            "Date of last activity.",
            "Platform usage events (for example, that a message was sent, a connector was created, or a user signed up), linked to internal user and workspace IDs. These events don't include the content of your messages or documents.",
          ],
        },
        { p: "**Technical data**" },
        {
          ul: [
            "Server logs (requests and errors), which may include your IP address.",
            "Cookies needed for the platform to work (see section 11).",
          ],
        },
        { p: "**Bot protection**" },
        {
          ul: [
            "We use Google reCAPTCHA on sign-up, sign-in, and Google sign-in. It analyzes browser and device data to tell people from bots.",
          ],
        },
        { p: "**Communications**" },
        { ul: ["Verification emails, workspace invitations, and inactivity notices."] },
      ],
    },
    {
      id: "purposes",
      title: "4. Why we use it and on what legal basis",
      blocks: [
        {
          table: {
            head: ["Purpose", "Data", "Legal basis"],
            rows: [
              ["Create and manage your account and provide the service (chat, search, agents, connectors)", "Account, content, usage", "Performance of a contract (Art. 6(1)(b) GDPR)"],
              ["Send verification emails and invitations", "Account", "Performance of a contract (Art. 6(1)(b))"],
              ["Protect the platform and prevent abuse and bots", "Technical, reCAPTCHA, account", "Legitimate interest in keeping the service secure (Art. 6(1)(f))"],
              ["Cap free usage (USD 2 per workspace per week on AI models)", "Usage", "Performance of a contract (free-trial terms)"],
              ["Notify you of inactivity and delete inactive workspaces", "Account, usage", "Performance of a contract and legitimate interest in not keeping unnecessary data (Art. 6(1)(b) and (f))"],
              ["Handle support requests", "Account and what you tell us", "Performance of a contract (Art. 6(1)(b))"],
              ["Internal reports and usage statistics to run and improve the platform", "Usage, account", "Legitimate interest in managing, planning, and improving the service (Art. 6(1)(f))"],
            ],
          },
        },
        { p: "Where we rely on legitimate interest, you can object by writing to us (see section 10)." },
        {
          p: "RAGnexus does not use your content to train AI models. The providers of the free models have their own terms; see section 6.",
        },
      ],
    },
    {
      id: "processor",
      title: "5. Customer content: RAGnexus as processor",
      blocks: [
        {
          p: "The content an organization uploads or connects to its workspace (company documents, emails, customer or employee data, etc.) is that organization's responsibility. For that content, the customer organization is the controller and RAGnexus acts as processor: it processes the content only to provide the service and on the customer's instructions.",
        },
        {
          p: "If your organization processes third parties' personal data in RAGnexus, it needs a data processing agreement with us. You can request one at javier@ragnexus.com.",
        },
        { p: "If your company invited you, please contact your company first with questions about that content." },
      ],
    },
    {
      id: "recipients",
      title: "6. Who we share data with",
      blocks: [
        { p: "We only share data with the providers we need to run the service:" },
        {
          ul: [
            "**Hostman Ltd**: hosting for the servers, database, and files, in data centers in Frankfurt (Germany).",
            "**Hetzner Online GmbH**: hosts, in Germany, the dedicated server RAGnexus uses to send its own emails (verification, invitations, and notices).",
            "**OpenRouter (United States)**: routes chat messages to the free-trial AI models: GLM (Z.ai), Qwen (Alibaba), and DeepSeek. We don't restrict the region, so these models may run in the United States, China, or other countries outside the European Economic Area. They receive the text of your messages and the context needed to answer (for example, excerpts from your documents). Some of these providers may keep messages or use them to improve their models under their own terms. **We recommend not entering sensitive personal data or confidential information while using the free models.**",
            "**Google**: Google Sign-In and reCAPTCHA Enterprise.",
            "**Web search**: we use SearXNG, hosted by RAGnexus, which sends the text of your searches to public search engines (for example, Google). Those queries don't include your identity, but they do include what you search for.",
            "**Telemetry**: the platform sends the usage events described in section 3 to a RAGnexus server (telemetry.ragnexus.com).",
          ],
        },
        {
          p: "**Providers connected by the customer.** If your organization connects its own providers (other AI models, search services, or connectors), that processing is governed by the agreements between your organization and those providers.",
        },
        {
          p: "We do not sell your data or share it with third parties for advertising. We only disclose it to authorities when the law requires us to.",
        },
      ],
    },
    {
      id: "transfers",
      title: "7. Transfers outside the European Economic Area",
      blocks: [
        { p: "Your data is hosted in Germany. Some providers process it outside the EEA:" },
        {
          ul: [
            "**OpenRouter and the free-model providers**, which may be in the United States, China, or other countries. Some of these countries, such as China, have no European Commission adequacy decision.",
            "**Google (United States)**: Google LLC is certified under the EU-U.S. Data Privacy Framework and also uses standard contractual clauses.",
          ],
        },
        { p: "You can ask us about these transfers at javier@ragnexus.com." },
      ],
    },
    {
      id: "retention",
      title: "8. How long we keep data",
      blocks: [
        {
          ul: [
            "**Active workspace:** while you use it, until you delete the content or close the account.",
            "**Inactive workspace:** we email you after 30 days without use, send a final notice at 53 days, and delete the workspace entirely at 60 days (data, documents, files, and search index).",
            "**Backups:** we take daily database backups and keep them for 2 months. Deleted data disappears from backups when they expire.",
            "**Server logs:** 2 months.",
          ],
        },
      ],
    },
    {
      id: "security",
      title: "9. Security",
      blocks: [{ p: "Each workspace is isolated from the others, and passwords are stored as hashes." }],
    },
    {
      id: "rights",
      title: "10. Your rights",
      blocks: [
        { p: "You can exercise your rights at any time to:" },
        {
          ul: [
            "**access** your data;",
            "**rectify** inaccurate data;",
            "**erase** your data;",
            "**object** to processing based on legitimate interest;",
            "**restrict** processing;",
            "**data portability**, to receive your data in a structured format;",
            "**withdraw consent** where processing is based on it.",
          ],
        },
        {
          p: "Email **javier@ragnexus.com** stating which right you want to exercise. We will reply within one month at most. For content in a company workspace, we will pass the request to that company, which is the controller.",
        },
        {
          p: "If you think we have mishandled your data, you can lodge a complaint with the Spanish Data Protection Agency (www.aepd.es) or the authority in your country.",
        },
      ],
    },
    {
      id: "cookies",
      title: "11. Cookies",
      blocks: [
        {
          p: "The platform only uses cookies it needs to work and to remember your preferences. It uses no analytics or advertising cookies.",
        },
        {
          table: {
            head: ["Cookie", "Set by", "Purpose"],
            rows: [
              ["`fastapiusersauth`", "RAGnexus", "Keep you signed in"],
              ["`fastapiusersoauthcsrf`, `fastapiusersoauthpkce_…`", "RAGnexus", "Secure Google sign-in"],
              ["`onyx_captcha_verified`", "RAGnexus", "Remember that you passed the bot check"],
              ["`onyx_tid`", "RAGnexus", "Identify your workspace in some flows, such as password reset"],
              ["`onyx_anonymous_user`", "RAGnexus", "Access a workspace without an account, if its admin allows it"],
              ["`sidebarIsToggled` and other preference cookies (dismissed notices, display settings)", "RAGnexus", "Remember how you like to view the platform (up to 1 year)"],
              ["Google reCAPTCHA cookies", "Google", "Detect bots on sign-up and sign-in"],
            ],
          },
        },
      ],
    },
    {
      id: "google",
      title: "12. Your Google account data",
      blocks: [
        {
          p: "If you sign in with Google, we only receive your account ID, email, and name. We use them solely to create your account and identify you at sign-in. We don't sell them, use them for advertising, or share them with third parties other than the hosting providers listed in section 6.",
        },
        {
          p: "Our use of information received from Google APIs complies with the Google API Services User Data Policy, including the Limited Use requirements.",
        },
      ],
    },
    {
      id: "children",
      title: "13. Children",
      blocks: [
        {
          p: "RAGnexus is intended for businesses and may only be used by people aged 18 or over. If we learn that a minor has given us data, we will delete it.",
        },
      ],
    },
    {
      id: "changes",
      title: "14. Changes to this policy",
      blocks: [
        {
          p: "If we make significant changes to this policy, we will notify you by email or in the platform before the change takes effect.",
        },
      ],
    },
  ],
};

export const PLATFORM_PRIVACY: Record<Locale, Policy> = { es, en };
