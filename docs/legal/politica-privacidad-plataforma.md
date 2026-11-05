# Política de privacidad de la plataforma RAGnexus (borrador)

> Borrador para revisión legal. Los textos entre corchetes [PENDIENTE: …] deben completarse antes de publicar.
> Esta política cubre la plataforma app.ragnexus.com. La web ragnexus.com tiene su propia política.

---

## Versión en español

**Fecha de entrada en vigor:** 5 de noviembre de 2026

### 1. Quién es el responsable

El responsable del tratamiento de los datos descritos en esta política es **RAGnexus S.L.** Puedes contactar con nosotros en **javier@ragnexus.com**.

### 2. A qué se aplica

RAGnexus es una plataforma de inteligencia artificial para empresas, basada en el software de código abierto Onyx. Cada cliente dispone de su propio espacio de trabajo (workspace), aislado del resto. La plataforma ofrece chat con modelos de IA, búsqueda en documentos de la empresa, búsqueda web, agentes y conexión con otras aplicaciones (conectores).

Esta política se aplica a quienes se registran y usan la plataforma en app.ragnexus.com, incluida la prueba gratuita.

### 3. Qué datos tratamos

**Datos de tu cuenta**
- Email, nombre visible y contraseña. La contraseña se guarda cifrada mediante hash: no la conocemos.
- Si entras con Google: el identificador de tu cuenta de Google, tu email y tu nombre. Solo pedimos los permisos básicos de inicio de sesión (openid, email y profile). No accedemos a tu Gmail, Drive ni a ningún otro dato de tu cuenta de Google por esta vía.

**Contenido**
- Mensajes de chat y respuestas.
- Documentos y ficheros que subes.
- Contenido sincronizado desde los conectores que tu organización active.
- Agentes que crees y ajustes del workspace.

**Datos de uso**
- Consumo de modelos de IA por workspace (coste y número de tokens).
- Número de documentos indexados.
- Fecha de la última actividad.
- Eventos de uso de la plataforma (por ejemplo, que se ha enviado un mensaje, se ha creado un conector o se ha registrado un usuario), asociados a identificadores internos de usuario y de workspace. Estos eventos no incluyen el contenido de tus mensajes ni de tus documentos.

**Datos técnicos**
- Registros del servidor (peticiones y errores), que pueden incluir la dirección IP.
- Cookies necesarias para el funcionamiento de la plataforma (ver apartado 11).

**Protección frente a bots**
- En el registro, el inicio de sesión y la entrada con Google usamos Google reCAPTCHA, que analiza datos del navegador y del dispositivo para distinguir personas de bots.

**Comunicaciones**
- Emails de verificación, invitaciones a un workspace y avisos de inactividad.

### 4. Para qué los usamos y con qué base legal

| Finalidad | Datos | Base jurídica |
|---|---|---|
| Crear y gestionar tu cuenta y prestar el servicio (chat, búsqueda, agentes, conectores) | Cuenta, contenido, uso | Ejecución del contrato (art. 6.1.b RGPD) |
| Enviarte emails de verificación e invitaciones | Cuenta | Ejecución del contrato (art. 6.1.b) |
| Proteger la plataforma, prevenir abusos y bots | Técnicos, reCAPTCHA, cuenta | Interés legítimo en mantener el servicio seguro (art. 6.1.f) |
| Limitar el uso gratuito (2 USD por workspace y semana en modelos de IA) | Uso | Ejecución del contrato (condiciones de la prueba gratuita) |
| Avisarte de la inactividad y borrar los workspaces inactivos | Cuenta, uso | Ejecución del contrato e interés legítimo en no conservar datos innecesarios (art. 6.1.b y f) |
| Atender solicitudes de soporte | Cuenta y lo que nos cuentes | Ejecución del contrato (art. 6.1.b) |
| Informes internos y estadísticas de uso para gestionar y mejorar la plataforma | Uso, cuenta | Interés legítimo en administrar, planificar y mejorar el servicio (art. 6.1.f) |

Cuando la base es el interés legítimo, puedes oponerte escribiéndonos (ver apartado 10).

RAGnexus no usa tu contenido para entrenar modelos de IA. Los proveedores de los modelos gratuitos tienen sus propias condiciones; consulta el apartado 6.

### 5. Contenido de los clientes: RAGnexus como encargado

El contenido que una organización sube o conecta a su workspace (documentos de empresa, correos, datos de clientes o empleados, etc.) es responsabilidad de esa organización. Para ese contenido, la organización cliente es la responsable del tratamiento y RAGnexus actúa como encargado: lo trata solo para prestarle el servicio y siguiendo sus instrucciones.

Si tu organización trata datos personales de terceros en RAGnexus, necesita un contrato de encargo del tratamiento con nosotros. Puedes solicitarlo en javier@ragnexus.com.

Si eres un usuario invitado por tu empresa, para dudas sobre ese contenido dirígete primero a tu empresa.

### 6. Con quién compartimos datos

Solo compartimos datos con los proveedores que necesitamos para prestar el servicio:

- **Hostman Ltd** – alojamiento de los servidores, la base de datos y los ficheros, en centros de datos de Frankfurt (Alemania).
- **Hetzner Online GmbH (Alemania)** – aloja el servidor dedicado desde el que RAGnexus envía sus propios emails (verificación, invitaciones y avisos), en Alemania.
- **OpenRouter (Estados Unidos)** – enruta los mensajes de chat hacia los modelos de IA de la prueba gratuita: GLM (Z.ai), Qwen (Alibaba) y DeepSeek. No restringimos la región, así que estos modelos pueden ejecutarse en Estados Unidos, China u otros países fuera del Espacio Económico Europeo. Reciben el texto de tus mensajes y el contexto necesario para responder (por ejemplo, fragmentos de tus documentos). Algunos de estos proveedores pueden conservar los mensajes o usarlos para mejorar sus modelos según sus propias condiciones. [PENDIENTE: confirmar la configuración de privacidad de la cuenta de OpenRouter] **Te recomendamos no introducir datos personales sensibles ni información confidencial mientras uses los modelos gratuitos.**
- **Google** – inicio de sesión con Google y reCAPTCHA Enterprise.
- **Búsqueda web** – usamos SearXNG, alojado por RAGnexus, que envía el texto de tus búsquedas a buscadores públicos (por ejemplo, Google). Esas consultas no incluyen tu identidad, pero sí el texto que buscas.
- **Telemetría** – la plataforma envía los eventos de uso descritos en el apartado 3 a un servidor de RAGnexus (telemetry.ragnexus.com). [PENDIENTE: dónde se aloja ese servidor]

**Proveedores que conecta el cliente.** Si tu organización conecta sus propios proveedores (otros modelos de IA, servicios de búsqueda o conectores), esos tratamientos se rigen por los acuerdos entre tu organización y esos proveedores.

No vendemos tus datos ni los cedemos a terceros con fines publicitarios. Solo los comunicaremos a autoridades cuando una ley nos obligue.

### 7. Transferencias fuera del Espacio Económico Europeo

Tus datos se alojan en Alemania. Algunos proveedores los tratan fuera del EEE:

- **OpenRouter (EE. UU.)** – [PENDIENTE: indicar si está adherido al EU-U.S. Data Privacy Framework o, si no, si hay cláusulas contractuales tipo de la Comisión Europea]
- **Google (EE. UU.)** – Google LLC está adherido al EU-U.S. Data Privacy Framework y además usa cláusulas contractuales tipo.
- **Proveedores de los modelos gratuitos (EE. UU., China u otros países)** – algunos de estos países, como China, no cuentan con una decisión de adecuación de la Comisión Europea. [PENDIENTE: garantía aplicable (cláusulas contractuales tipo u otra)]

Puedes pedirnos información sobre las garantías aplicables escribiendo a javier@ragnexus.com.

### 8. Cuánto tiempo conservamos los datos

- **Workspace activo:** mientras lo uses, hasta que borres el contenido o cierres la cuenta.
- **Workspace inactivo:** te avisamos por email a los 30 días sin uso, enviamos un último aviso a los 53 días y a los 60 días borramos el workspace por completo (datos, documentos, ficheros e índice de búsqueda).
- **Copias de seguridad:** hacemos copias diarias de la base de datos y las conservamos 2 meses. Los datos borrados desaparecen de las copias cuando estas caducan.
- **Registros del servidor:** 2 meses.

### 9. Seguridad

Cada workspace está aislado de los demás y las contraseñas se guardan cifradas mediante hash. [PENDIENTE: añadir solo medidas reales y verificables, p. ej. cifrado en tránsito (HTTPS) y en reposo, control de accesos]

### 10. Tus derechos

Puedes ejercer en cualquier momento tus derechos de:

- **acceso** a tus datos;
- **rectificación** de datos inexactos;
- **supresión** de tus datos;
- **oposición** a los tratamientos basados en el interés legítimo;
- **limitación** del tratamiento;
- **portabilidad**, para recibir tus datos en un formato estructurado;
- **retirar tu consentimiento** cuando el tratamiento se base en él.

Escríbenos a **javier@ragnexus.com** indicando qué derecho quieres ejercer. Te responderemos en el plazo máximo de un mes. Para el contenido de un workspace de empresa, trasladaremos la solicitud a esa empresa, que es la responsable.

Si crees que no hemos tratado bien tus datos, puedes reclamar ante la Agencia Española de Protección de Datos (www.aepd.es).

### 11. Cookies

La plataforma solo usa cookies necesarias para funcionar y para recordar tus preferencias. No usa cookies de analítica ni de publicidad.

| Cookie | Quién la pone | Para qué | Duración |
|---|---|---|---|
| `fastapiusersauth` | RAGnexus | Mantener tu sesión iniciada | [PENDIENTE] |
| `fastapiusersoauthcsrf`, `fastapiusersoauthpkce_…` | RAGnexus | Proteger el inicio de sesión con Google | Durante el inicio de sesión |
| `onyx_captcha_verified` | RAGnexus | Recordar que has superado la verificación antibots | [PENDIENTE] |
| `onyx_tid` | RAGnexus | Identificar tu workspace en algunos procesos, como restablecer la contraseña | [PENDIENTE] |
| `onyx_anonymous_user` | RAGnexus | Acceso sin cuenta a un workspace, si su administrador lo permite | [PENDIENTE] |
| `sidebarIsToggled` y otras de preferencias (avisos cerrados, ajustes de visualización) | RAGnexus | Recordar cómo prefieres ver la plataforma | Hasta 1 año |
| Cookies de Google reCAPTCHA | Google | Detectar bots en el registro y el inicio de sesión | Según Google |

### 12. Datos de tu cuenta de Google

Si entras con Google, solo recibimos tu identificador de cuenta, tu email y tu nombre. Los usamos únicamente para crear tu cuenta e identificarte al iniciar sesión. No los vendemos, no los usamos para publicidad y no los compartimos con terceros salvo con los proveedores de alojamiento descritos en el apartado 6. [PENDIENTE: confirmar técnicamente que el nombre o el email no se incluyen en los mensajes enviados a los modelos de IA]

Nuestro uso de la información recibida de las APIs de Google cumple la Política de datos de usuario de los servicios de API de Google, incluidos los requisitos de uso limitado.

### 13. Menores

RAGnexus está dirigido a empresas y solo pueden usarlo mayores de 18 años. Si sabemos que un menor nos ha facilitado datos, los borraremos.

### 14. Cambios en esta política

Si cambiamos esta política de forma importante, te avisaremos por email o en la plataforma antes de que el cambio entre en vigor.

---

## English version

**Effective date:** 5 November 2026

### 1. Who is responsible

The controller of the data described in this policy is **RAGnexus S.L.** You can contact us at **javier@ragnexus.com**.

### 2. What this policy covers

RAGnexus is an AI platform for businesses, built on the open-source software Onyx. Each customer has its own isolated workspace. The platform offers chat with AI models, search across company documents, web search, agents, and connections to other apps (connectors).

This policy applies to anyone who signs up for and uses the platform at app.ragnexus.com, including the free trial.

### 3. What data we process

**Account data**
- Email, display name, and password. The password is stored as a hash, so we never know it.
- If you sign in with Google: your Google account ID, email, and name. We only request the basic sign-in permissions (openid, email, and profile). We do not access your Gmail, Drive, or any other Google account data this way.

**Content**
- Chat messages and responses.
- Documents and files you upload.
- Content synced from connectors your organization enables.
- Agents you create and workspace settings.

**Usage data**
- AI model usage per workspace (cost and number of tokens).
- Number of indexed documents.
- Date of last activity.
- Platform usage events (for example, that a message was sent, a connector was created, or a user signed up), linked to internal user and workspace IDs. These events don't include the content of your messages or documents.

**Technical data**
- Server logs (requests and errors), which may include your IP address.
- Cookies needed for the platform to work (see section 11).

**Bot protection**
- We use Google reCAPTCHA on sign-up, sign-in, and Google sign-in. It analyzes browser and device data to tell people from bots.

**Communications**
- Verification emails, workspace invitations, and inactivity notices.

### 4. Why we use it and on what legal basis

| Purpose | Data | Legal basis |
|---|---|---|
| Create and manage your account and provide the service (chat, search, agents, connectors) | Account, content, usage | Performance of a contract (Art. 6(1)(b) GDPR) |
| Send verification emails and invitations | Account | Performance of a contract (Art. 6(1)(b)) |
| Protect the platform and prevent abuse and bots | Technical, reCAPTCHA, account | Legitimate interest in keeping the service secure (Art. 6(1)(f)) |
| Cap free usage (USD 2 per workspace per week on AI models) | Usage | Performance of a contract (free-trial terms) |
| Notify you of inactivity and delete inactive workspaces | Account, usage | Performance of a contract and legitimate interest in not keeping unnecessary data (Art. 6(1)(b) and (f)) |
| Handle support requests | Account and what you tell us | Performance of a contract (Art. 6(1)(b)) |
| Internal reports and usage statistics to run and improve the platform | Usage, account | Legitimate interest in managing, planning, and improving the service (Art. 6(1)(f)) |

Where we rely on legitimate interest, you can object by writing to us (see section 10).

RAGnexus does not use your content to train AI models. The providers of the free models have their own terms; see section 6.

### 5. Customer content: RAGnexus as processor

The content an organization uploads or connects to its workspace (company documents, emails, customer or employee data, etc.) is that organization's responsibility. For that content, the customer organization is the controller and RAGnexus acts as processor: it processes the content only to provide the service and on the customer's instructions.

If your organization processes third parties' personal data in RAGnexus, it needs a data processing agreement with us. You can request one at javier@ragnexus.com.

If your company invited you, please contact your company first with questions about that content.

### 6. Who we share data with

We only share data with the providers we need to run the service:

- **Hostman Ltd** – hosting for the servers, database, and files, in data centers in Frankfurt (Germany).
- **Hetzner Online GmbH (Germany)** – hosts the dedicated server RAGnexus uses to send its own emails (verification, invitations, and notices), in Germany.
- **OpenRouter (United States)** – routes chat messages to the free-trial AI models: GLM (Z.ai), Qwen (Alibaba), and DeepSeek. We don't restrict the region, so these models may run in the United States, China, or other countries outside the European Economic Area. They receive the text of your messages and the context needed to answer (for example, excerpts from your documents). Some of these providers may keep messages or use them to improve their models under their own terms. [PENDING: confirm the OpenRouter account's privacy settings] **We recommend not entering sensitive personal data or confidential information while using the free models.**
- **Google** – Google Sign-In and reCAPTCHA Enterprise.
- **Web search** – we use SearXNG, hosted by RAGnexus, which sends the text of your searches to public search engines (for example, Google). Those queries don't include your identity, but they do include what you search for.
- **Telemetry** – the platform sends the usage events described in section 3 to a RAGnexus server (telemetry.ragnexus.com). [PENDING: where that server is hosted]

**Providers connected by the customer.** If your organization connects its own providers (other AI models, search services, or connectors), that processing is governed by the agreements between your organization and those providers.

We do not sell your data or share it with third parties for advertising. We only disclose it to authorities when the law requires us to.

### 7. Transfers outside the European Economic Area

Your data is hosted in Germany. Some providers process it outside the EEA:

- **OpenRouter (US)** – [PENDING: state whether it is certified under the EU-U.S. Data Privacy Framework or, if not, whether European Commission standard contractual clauses apply]
- **Google (US)** – Google LLC is certified under the EU-U.S. Data Privacy Framework and also uses standard contractual clauses.
- **Free-model providers (US, China, or other countries)** – some of these countries, such as China, have no European Commission adequacy decision. [PENDING: applicable safeguard (standard contractual clauses or other)]

You can ask us about the applicable safeguards at javier@ragnexus.com.

### 8. How long we keep data

- **Active workspace:** while you use it, until you delete the content or close the account.
- **Inactive workspace:** we email you after 30 days without use, send a final notice at 53 days, and delete the workspace entirely at 60 days (data, documents, files, and search index).
- **Backups:** we take daily database backups and keep them for 2 months. Deleted data disappears from backups when they expire.
- **Server logs:** 2 months.

### 9. Security

Each workspace is isolated from the others, and passwords are stored as hashes. [PENDING: add only real, verifiable measures, e.g. encryption in transit (HTTPS) and at rest, access control]

### 10. Your rights

You can exercise your rights at any time to:

- **access** your data;
- **rectify** inaccurate data;
- **erase** your data;
- **object** to processing based on legitimate interest;
- **restrict** processing;
- **data portability**, to receive your data in a structured format;
- **withdraw consent** where processing is based on it.

Email **javier@ragnexus.com** stating which right you want to exercise. We will reply within one month at most. For content in a company workspace, we will pass the request to that company, which is the controller.

If you think we have mishandled your data, you can lodge a complaint with the Spanish Data Protection Agency (www.aepd.es) or the authority in your country.

### 11. Cookies

The platform only uses cookies it needs to work and to remember your preferences. It uses no analytics or advertising cookies.

| Cookie | Set by | Purpose | Duration |
|---|---|---|---|
| `fastapiusersauth` | RAGnexus | Keep you signed in | [PENDING] |
| `fastapiusersoauthcsrf`, `fastapiusersoauthpkce_…` | RAGnexus | Secure Google sign-in | During sign-in |
| `onyx_captcha_verified` | RAGnexus | Remember that you passed the bot check | [PENDING] |
| `onyx_tid` | RAGnexus | Identify your workspace in some flows, such as password reset | [PENDING] |
| `onyx_anonymous_user` | RAGnexus | Access a workspace without an account, if its admin allows it | [PENDING] |
| `sidebarIsToggled` and other preference cookies (dismissed notices, display settings) | RAGnexus | Remember how you like to view the platform | Up to 1 year |
| Google reCAPTCHA cookies | Google | Detect bots on sign-up and sign-in | Per Google |

### 12. Your Google account data

If you sign in with Google, we only receive your account ID, email, and name. We use them solely to create your account and identify you at sign-in. We don't sell them, use them for advertising, or share them with third parties other than the hosting providers listed in section 6. [PENDING: technically confirm that your name or email are not included in messages sent to AI models]

Our use of information received from Google APIs complies with the Google API Services User Data Policy, including the Limited Use requirements.

### 13. Children

RAGnexus is intended for businesses and may only be used by people aged 18 or over. If we learn that a minor has given us data, we will delete it.

### 14. Changes to this policy

If we make significant changes to this policy, we will notify you by email or in the platform before the change takes effect.

---

## Puntos que debe revisar un abogado

1. **Transferencias a China u otros países sin adecuación** (modelos gratuitos vía OpenRouter, sin restricción de región): base legal, cláusulas contractuales tipo, evaluación de impacto de la transferencia (TIA) y si es viable ofrecer estos modelos para tratar datos personales, sobre todo los de terceros que suben los clientes.
2. **Proveedores que conservan o entrenan con los mensajes**: si basta con la advertencia del apartado 6 o hay que bloquear esos proveedores en OpenRouter.
3. **Contrato de encargo (DPA)**: hay que redactarlo (art. 28 RGPD) antes de ofrecerlo, con la lista de subencargados (Hostman, Hetzner, OpenRouter y proveedores de modelos) y cómo se avisan los cambios.
4. **Coherencia con la web ragnexus.com**, que dice "tus datos no salen de Europa", "la inferencia se procesa en Europa" y "proveedores que no retienen ni entrenan". Con la configuración actual de la prueba gratuita, eso no se cumple.
5. **Identificación del responsable**: la política solo indica la razón social y el email. El art. 13 RGPD exige identidad y datos de contacto; la LSSI exige NIF y domicilio en el aviso legal.
6. **Entidad de Hostman**: confirmar el nombre exacto y el país de registro (fuentes públicas apuntan a Limassol, Chipre).
7. **Cookies de reCAPTCHA y de preferencias**: si son estrictamente necesarias (exentas de consentimiento) según la LSSI y la guía de cookies de la AEPD.
8. **Telemetría**: base jurídica (interés legítimo) y si debe permitirse desactivarla.
9. **Base jurídica de los informes internos y de los avisos de inactividad** (interés legítimo): si hace falta documentar la ponderación.
10. **Requisitos de Google para la verificación OAuth** (Google API Services User Data Policy, Limited Use): que la redacción del apartado 12 sea suficiente.
11. **Edad mínima de 18 años**: si hace falta algún mecanismo de verificación o basta con declararla en los términos.
12. **Medidas de seguridad**: incluir solo las reales.
13. **Relación con la política actual de la web** (generada con iubenda), que no menciona PostHog, WebWhiz ni el píxel de LinkedIn.
