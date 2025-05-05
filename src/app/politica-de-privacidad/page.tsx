import type { Metadata } from "next";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { lang: string };
}): Promise<Metadata> {
  const metaData = {
    en: {
      title: "Privacy Policy | How RAGnexus Protects Your Data",
      description:
        "Learn how RAGnexus collects, uses, and protects your personal data. Read our privacy policy to understand your rights and how we ensure data security.",
    },
    es: {
      title: "Política de Privacidad | Cómo RAGnexus Protege Tus Datos",
      description:
        "Descubre cómo RAGnexus recopila, utiliza y protege tus datos personales. Lee nuestra política de privacidad para conocer tus derechos y cómo garantizamos la seguridad de tus datos.",
    },
  };

  return metaData[searchParams.lang as keyof typeof metaData];
}

export default function PrivacyPolicy() {
  return (
    <div className="mx-12 my-4 text-justify text-sm">
      <div className="iub_container iub_base_container">
        <div id="wbars">
          <div className="iub_content legal_pp">
            <div className="iub_header">
              <h1>
                Pol&iacute;tica de privacidad de <strong>ragnexus.com</strong>
              </h1>

              <p>
                Esta Aplicaci&oacute;n recoge algunos Datos Personales de sus
                Usuarios.
              </p>
              <br />
              <br />
              <p>
                El presente documento puede imprimirse como referencia
                utilizando el comando de impresión en las opciones de
                configuración de cualquier navegador.
              </p>
            </div>

            <div className="one_line_col">
              <h2 id="owner_of_the_data">
                Titular y Responsable del tratamiento de los Datos
              </h2>

              <p>RAGnexus</p>
              <p>
                <strong>Correo electrónico de contacto del Titular:</strong>{" "}
                javier@ragnexus.com
              </p>
            </div>

            <div className="one_line_col">
              <h2 id="types_of_data">Clases de Datos recogidos</h2>

              <p>
                Entre las clases de Datos Personales que recoge esta
                Aplicaci&oacute;n, ya sea directamente o a través de terceros,
                se encuentran: Rastreadores; Datos de uso; cantidad de Usuarios;
                estadísticas de sesión; nombre; número de teléfono; dirección de
                correo electrónico; página web.
              </p>

              <p>
                La información completa referente a cada categoría de Datos
                Personales que se recogen se proporciona en las secciones de la
                presente política de privacidad dedicadas a tal fin o mediante
                textos explicativos específicos que se muestran antes de la
                recogida de dichos Datos.
                <br />
                Los Datos Personales podrán ser proporcionados libremente por el
                Usuario o, en caso de los Datos de Uso, serán recogidos
                automáticamente cuando se utilice esta Aplicaci&oacute;n.
                <br />
                Salvo que se indique lo contrario, todos los Datos solicitados
                por esta Aplicaci&oacute;n son obligatorios y la negativa a
                proporcionarlos podrá imposibilitar que esta Aplicaci&oacute;n
                pueda proceder a la prestación de sus servicios. En los casos en
                los que esta Aplicaci&oacute;n indique específicamente que
                ciertos Datos no son obligatorios, los Usuarios serán libres de
                no comunicar tales Datos sin que esto tenga consecuencia alguna
                sobre la disponibilidad o el funcionamiento del Servicio.
                <br />
                Los Usuarios que tengan dudas sobre qué Datos son obligatorios
                pueden contactar con el Titular.
                <br />
                El uso de Cookies - o de otras herramientas de seguimiento - por
                parte de esta Aplicaci&oacute;n o por los titulares de servicios
                de terceros utilizados por esta Aplicaci&oacute;n tiene como
                finalidad la prestación del Servicio solicitado por el Usuario,
                además de cualesquiera otras finalidades que se describan en el
                presente documento y en la Política de Cookies.
              </p>
              <p>
                El Usuario asume la responsabilidad respecto de los Datos
                Personales de terceros que se obtengan, publiquen o compartan a
                través de esta Aplicaci&oacute;n.
              </p>
            </div>

            <div className="one_line_col">
              <h2 id="place_of_processing">
                Modalidad y lugar del tratamiento de los Datos recogidos
              </h2>
              <h3 className="iub-subheading iub-subheading-legal-mode-processing">
                Modalidades de Tratamiento
              </h3>
              <p>
                El Titular tratará los Datos de los Usuarios de manera adecuada
                y adoptará las medidas de seguridad apropiadas para impedir el
                acceso, la revelación, alteración o destrucción no autorizados
                de los Datos.
                <br />
                El tratamiento de Datos se realizará mediante ordenadores y/o
                herramientas informáticas, siguiendo procedimientos y
                modalidades organizativas estrictamente relacionadas con las
                finalidades señaladas. Además del Titular, en algunos casos
                podrán acceder a los Datos ciertas categorías de personas
                autorizadas, relacionadas con el funcionamiento de esta
                Aplicaci&oacute;n (administración, ventas, marketing,
                departamento jurídico y de administración de sistemas) o
                contratistas externos que presten servicios al Titular (tales
                como proveedores externos de servicios técnicos, empresas de
                mensajería, empresas de hosting, empresas de informática,
                agencias de comunicación) que serán nombrados por el Titular
                como Encargados del Tratamiento, si fuera necesario. Se podrá
                solicitar al Titular en cualquier momento una lista actualizada
                de dichas personas.
              </p>

              <h3 className="iub-subheading iub-subheading-legal-place">
                Lugar
              </h3>
              <p>
                Los Datos se tratan en las oficinas del Titular, así como en
                cualquier otro lugar en el que se encuentren situadas las partes
                implicadas en dicho proceso de tratamiento.
                <br />
                Dependiendo de la localización de los Usuarios, las
                transferencias de Datos pueden implicar la transferencia de los
                Datos de los Usuarios a otro país diferente al suyo propio. Para
                más información sobre el lugar de tratamiento de dichos Datos
                transferidos, los Usuarios podrán consultar la sección que
                contiene los detalles sobre el tratamiento de los Datos
                Personales.
              </p>

              <h3 className="iub-subheading iub-subheading-legal-time">
                Período de conservación
              </h3>
              <p>
                Salvo que se indique lo contrario en el presente documento, los
                Datos Personales serán tratados y conservados durante el tiempo
                necesario y para la finalidad por la que han sido recogidos y
                podrán conservarse durante más tiempo debido a una obligación
                legal pertinente o sobre la base del consentimiento de los
                Usuarios.
              </p>
            </div>

            <div className="one_line_col">
              <h2 id="use_collected_data">
                Finalidad del Tratamiento de los Datos recogidos
              </h2>
              <p>
                Los Datos relativos al Usuario son recogidos para permitir al
                Titular prestar su Servicio, cumplir sus obligaciones legales,
                responder a solicitudes de ejecución, proteger sus derechos e
                intereses (o los de sus Usuarios o terceros), detectar cualquier
                actividad maliciosa o fraudulenta, así como para las siguientes
                finalidades: Estadísticas, Contactar con el Usuario y Hosting e
                infrastructura de backend.
              </p>

              <p>
                Los Usuarios pueden encontrar información específica los Datos
                personales utilizados para cada finalidad en la sección
                “Información detallada del Tratamiento de los Datos Personales”.
              </p>
            </div>

            <div data-locale="es"></div>

            <div className="one_line_col">
              <h2 id="data_processing_detailed_info">
                Información detallada del Tratamiento de los Datos Personales
              </h2>
              <p>
                Los Datos Personales se recogen para las siguientes finalidades
                y utilizando los siguientes servicios:
              </p>
              <ul className="for_boxes">
                <li>
                  <details className="box_primary box_10 expand">
                    <summary>
                      <h3 className=" w_icon_24 policyicon_purpose_12856220 iub-purpose iub-purpose-12856220">
                        Contactar con el Usuario
                      </h3>
                    </summary>
                    <div className="details_body">
                      <h4 className="iub-service iub-service-10996785">
                        Formulario de contacto (esta Aplicaci&oacute;n)
                      </h4>
                      <div className="wrap">
                        <p>
                          Al rellenar el formulario de contacto con sus Datos,
                          el Usuario autoriza a esta Aplicaci&oacute;n a
                          utilizar dichos datos para responder a solicitudes de
                          información, de presupuestos o de cualquier otro tipo
                          que esté indicado en el encabezamiento del formulario.
                        </p>
                      </div>

                      <p>
                        Datos Personales tratados: dirección de correo
                        electrónico; nombre; número de teléfono; página web.
                      </p>
                    </div>
                  </details>
                </li>

                <li>
                  <details className="box_primary box_10 expand">
                    <summary>
                      <h3 className=" w_icon_24 policyicon_purpose_12856217 iub-purpose iub-purpose-12856217">
                        Estadísticas
                      </h3>
                    </summary>
                    <div className="details_body">
                      <p>
                        Los servicios contenidos en esta sección permiten al
                        Titular monitorizar y analizar el tráfico web y pueden
                        ser utilizados para rastrear el comportamiento del
                        Usuario.
                      </p>

                      <h4 className="iub-service iub-service-10996782">
                        Google Analytics 4 (Google Ireland Limited)
                      </h4>
                      <div className="wrap">
                        <p>
                          Google Analytics 4 es un servicio de análisis web
                          prestado por Google Ireland Limited (“Google”). Google
                          utiliza los Datos recogidos para rastrear y examinar
                          el uso de esta Aplicaci&oacute;n, para preparar
                          informes de sus actividades y compartirlos con otros
                          servicios de Google. Google puede utilizar los Datos
                          recogidos para contextualizar y personalizar los
                          anuncios de su propia red de publicidad. En Google
                          Analytics 4, las direcciones IP se usan en el momento
                          de la recogida y luego se descartan antes de que los
                          Datos se registren en cualquier centro de datos o
                          servidor. Los Usuarios pueden obtener más información
                          consultando{" "}
                          <a href="https://support.google.com/analytics/answer/12017362?hl=es&amp;ref_topic=2919631">
                            la documentación oficial de Google
                          </a>
                          .
                        </p>

                        <p>
                          Para entender el uso de Datos por parte de Google,
                          consulta su{" "}
                          <a href="https://policies.google.com/technologies/partner-sites">
                            política para socios
                          </a>{" "}
                          y su{" "}
                          <a href="https://business.safety.google/privacy/">
                            página de datos empresariales
                          </a>
                          .
                        </p>
                      </div>

                      <p>
                        Datos Personales tratados: cantidad de Usuarios; Datos
                        de uso; estadísticas de sesión; Rastreadores.
                      </p>

                      <p>
                        Lugar de tratamiento: Irlanda &ndash;{" "}
                        <a
                          href="https://business.safety.google/privacy/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Pol&iacute;tica de privacidad
                        </a>{" "}
                        &ndash;{" "}
                        <a href="https://tools.google.com/dlpage/gaoptout?hl=es">
                          Opt Out
                        </a>
                        .{" "}
                      </p>
                    </div>
                  </details>
                </li>

                <li>
                  <details className="box_primary box_10 expand">
                    <summary>
                      <h3 className=" w_icon_24 policyicon_purpose_12856221 iub-purpose iub-purpose-12856221">
                        Hosting e infrastructura de backend
                      </h3>
                    </summary>
                    <div className="details_body">
                      <p>
                        Este tipo de servicios tienen por finalidad el
                        alojamiento de Datos y archivos para permitir que esta
                        Aplicaci&oacute;n funcione y sea distribuida, así como
                        para proporcionar una infrastructura lista para operar
                        que permita poner en marcha diversas funcionalidades o
                        partes de esta Aplicaci&oacute;n.
                      </p>

                      <p>
                        Algunos servicios de los enumerados más adelante, en su
                        caso, pueden funcionar mediante servidores
                        geográficamente distribuidos, lo que dificulta la
                        determinación de la localización exacta en la que se
                        almacenan los Datos personales.
                      </p>
                      <h4 className="iub-service iub-service-10996786">
                        Vercel (Vercel Inc.)
                      </h4>
                      <div className="wrap">
                        <p>
                          Vercel es un servicio de hosting y backend prestado
                          por Vercel Inc.
                        </p>
                      </div>

                      <p>
                        Datos Personales tratados: Datos de uso; distintas
                        clases de Datos, según se especifica en la Política de
                        Privacidad del servicio.
                      </p>

                      <p>
                        Lugar de tratamiento: EE.UU. &ndash;{" "}
                        <a
                          href="https://vercel.com/legal/privacy-policy"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Pol&iacute;tica de privacidad
                        </a>
                        .{" "}
                      </p>
                    </div>
                  </details>
                </li>
              </ul>
            </div>

            <div data-locale="es"></div>

            <div className="one_line_col">
              <h2 id="cookie_policy">Política de Cookies</h2>
              <p>
                Esta Aplicaci&oacute;n utiliza Rastreadores. Para obtener más
                información, los Usuarios pueden consultar la{" "}
                <a
                  href="//www.iubenda.com/privacy-policy/72497857/cookie-policy"
                  title="Política de Cookies"
                  className="show_comp_link iframe-preserve an-preserve"
                >
                  Política de Cookies
                </a>
                .
              </p>
            </div>

            <h2 id="cookie_policy_further_information">
              Más información para los usuarios
            </h2>

            <h3 className="iub-subheading iub-subheading-legal-basis-of-processing">
              Base jurídica del Tratamiento
            </h3>
            <p>
              El Titular podrá tratar los Datos Personales del Usuario, si se
              cumple una de las siguientes condiciones:
            </p>
            <ul>
              <li>
                Cuando los Usuarios hayan dado su consentimiento para una o más
                finalidades específicas.
              </li>
              <li>
                Cuando la obtención de Datos sea necesaria para el cumplimiento
                de un contrato con el Usuario y/o cualquier otra obligación
                precontractual del mismo;
              </li>
              <li>
                Cuando el tratamiento sea necesario para el cumplimiento de una
                obligación legal de obligado cumplimiento por parte del Usuario;
              </li>
              <li>
                Cuando el tratamiento esté relacionado con una tarea ejecutada
                en interés público o en el ejercicio de competencias oficiales
                otorgadas al Titular;
              </li>
              <li>
                Cuando el tratamiento sea necesario con el fin de un interés
                legítimo perseguido por el Titular o un tercero.
              </li>
            </ul>
            <p>
              En cualquier caso, el Titular está a su disposición para definir
              las bases jurídicas específicas que se aplican al tratamiento y en
              particular, si la obtención de los Datos Personales es un
              requisito contractual o estatutario o un requisito necesario para
              formalizar un contrato.
            </p>

            <h3 className="iub-subheading iub-subheading-legal-time">
              Más información sobre el tiempo de retención
            </h3>

            <p>
              Salvo que se indique lo contrario en el presente documento, los
              Datos Personales serán tratados y conservados durante el tiempo
              necesario y para la finalidad por la que han sido recogidos y
              podrán conservarse durante más tiempo debido a una obligación
              legal pertinente o sobre la base del consentimiento de los
              Usuarios.
            </p>
            <p>Por lo tanto:</p>
            <ul>
              <li>
                Los Datos Personales recogidos para la formalización de un
                contrato entre el Titular y el Usuario deberán conservarse como
                tales hasta en tanto dicho contrato se haya formalizado por
                completo.
              </li>
              <li>
                Los Datos Personales recogidos en legítimo interés del Titular
                deberán conservarse durante el tiempo necesario para cumplir con
                dicha finalidad. Los Usuarios pueden encontrar información
                específica relacionada con el interés legítimo del Titular
                consultando las secciones relevantes del presente documento o
                contactando con el Titular.{" "}
              </li>
            </ul>
            <p>
              El Titular podrá conservar los Datos Personales durante un periodo
              adicional cuando el Usuario preste su consentimiento a tal
              tratamiento, siempre que dicho consentimiento siga vigente.
              Además, el Titular podrá estar obligado a conservar Datos
              Personales durante un periodo adicional siempre que se precise
              para el cumplimiento de una obligación legal o por orden que
              proceda de la autoridad.
              <br />
              <br />
              Una vez terminado el período de conservación, los Datos Personales
              deberán eliminarse. Por lo tanto, los derechos de acceso,
              supresión, rectificación y de portabilidad de datos no podrán
              ejercerse una vez haya expirado dicho periodo de conservación.
            </p>

            <h3 id="rights_subjects">
              Los derechos de los Usuarios basados en el Reglamento General de
              Protección de datos (RGPD)
            </h3>
            <p>
              Los Usuarios podrán ejercer ciertos derechos en relación con sus
              Datos que sean tratados por el Titular.
            </p>

            <p>
              En particular, los Usuarios tienen derecho a hacer lo siguiente,
              en la medida en que lo permita la ley:
            </p>

            <ul>
              <li>
                <strong>Retirar su consentimiento en cualquier momento.</strong>{" "}
                Los Usuarios tienen derecho a retirar su consentimiento cuando
                lo hubieran otorgado con anterioridad para el tratamiento de sus
                Datos Personales.
              </li>
              <li>
                <strong>Objeción al tratamiento de sus Datos.</strong> Los
                Usuarios tienen derecho a oponerse al tratamiento de sus Datos
                si dicho tratamiento se lleva a cabo con arreglo a una base
                jurídica distinta del consentimiento.
              </li>
              <li>
                <strong>Acceso a sus Datos.</strong> Los Usuarios tienen derecho
                a saber si sus Datos son tratados por el Titular, a obtener
                información sobre ciertos aspectos del tratamiento, así como a
                obtener una copia de los Datos objeto del tratamiento.
              </li>
              <li>
                <strong>Verificar y solicitar la rectificación.</strong> Los
                Usuarios tienen derecho a verificar la exactitud de sus Datos y
                solicitar que los mismos se actualicen o corrijan.
              </li>
              <li>
                <strong>Limitar el tratamiento de sus Datos.</strong> Los
                Usuarios tienen derecho a limitar el tratamiento de sus Datos.
                En ese supuesto, el Titular solo tratará sus Datos con la
                finalidad de almacenarlos.
              </li>
              <li>
                <strong>Borrar o eliminar los Datos Personales.</strong> Los
                Usuarios tienen derecho a obtener la supresión de sus Datos por
                parte del Titular.
              </li>
              <li>
                <strong>
                  Recibir sus Datos y transferirlos a otro responsable.
                </strong>{" "}
                Los Usuarios tienen derecho a recibir sus Datos en un formato
                estructurado, de uso común y lectura mecánica y, si fuera
                técnicamente posible, a que se transmitan los mismos a otro
                responsable sin ningún impedimento.
              </li>
              <li>
                <strong>Presentar una reclamación.</strong> Los Usuarios tienen
                derecho a presentar una reclamación ante la autoridad competente
                en materia de protección de Datos Personales.{" "}
              </li>
            </ul>

            <p>
              Los Usuarios también tendrán derecho a conocer las bases legales
              de las transferencias de Datos al extranjero, incluido a cualquier
              organización internacional que se rija por el Derecho
              Internacional Público o que esté formada por dos o más países,
              como la ONU, y a conocer las medidas de seguridad tomadas por el
              Titular para salvaguardar sus Datos.
            </p>

            <h4 className="iub-subheading iub-subheading-legal-right-to-object">
              Información sobre el derecho de oposición al tratamiento
            </h4>
            <p>
              <strong>
                Cuando el tratamiento de los Datos Personales se realice en
                interés público, en el ejercicio de poderes públicos conferidos
                al Titular o con motivo de un interés legítimo perseguido por el
                Titular, los Usuarios podrán oponerse a dicho tratamiento
                alegando un motivo relacionado con su situación particular para
                justificar su oposición.
              </strong>
            </p>
            <p>
              <strong>
                Los Usuarios deben saber, sin embargo, que en caso de que sus
                Datos Personales sean tratados con fines de marketing directo,
                pueden oponerse en cualquier momento a tal tratamiento, de forma
                gratuita y sin necesidad de justificación. Cuanto el Usuario se
                oponga al tratamiento para fines de marketing directo, los Datos
                Personales no podrán continuar siendo tratados para tales fines.
                Para saber si los Datos Personales de los Usuarios están siendo
                tratados por el Titular para fines de marketing directo, los
                Usuarios deberán consultar las secciones relevantes del presente
                documento.{" "}
              </strong>
            </p>

            <h4 className="iub-subheading iub-subheading-legal-how-to-exercise">
              Cómo ejercer estos derechos
            </h4>

            <p>
              Cualquier solicitud de ejercicio de los derechos del Usuario puede
              dirigirse al Propietario a través de los datos de contacto
              facilitados en este documento. Dichas solicitudes son gratuitas y
              el Titular responderá a ellas tan pronto como le sea posible y
              siempre dentro del plazo de un mes, proporcionando a los Usuarios
              la información exigida por la ley. El Titular comunicará cualquier
              rectificación o supresión de Datos Personales o limitación del
              tratamiento a cada destinatario, en su caso, al que se le hayan
              comunicado los Datos Personales, salvo que sea imposible o exija
              un esfuerzo desproporcionado. A solicitud de los Usuarios, el
              Titular les informará sobre dichos destinatarios.
            </p>

            <div className="one_line_col"></div>

            <div className="one_line_col">
              <h2 id="further_data_processing_info">
                Información adicional sobre la recogida de Datos y su
                tratamiento
              </h2>
              <h3 className="iub-subheading iub-subheading-legal-protection">
                Defensa jurídica
              </h3>
              <p>
                Los Datos Personales del Usuario podrán ser utilizados para la
                defensa jurídica del Titular ante un tribunal o en las fases
                judiciales previas a un posible pleito derivado del uso
                inapropiado de esta Aplicaci&oacute;n o de los Servicios
                relacionados.
                <br />
                El Usuario declara conocer que el Titular puede ser requerido
                por las autoridades públicas a fin de revelar Datos Personales.
              </p>
              <h3 className="iub-subheading iub-subheading-legal-specific-info">
                Informaci&oacute;n adicional acerca de los Datos Personales del
                Usuario
              </h3>
              <p>
                Además de las informaciones contenidas en esta política de
                privacidad, esta Aplicaci&oacute;n podrá proporcionar al Usuario
                información adicional y contextual relativa a Servicios
                específicos o a la recogida y tratamiento de los Datos
                Personales.
              </p>
              <h3 className="iub-subheading iub-subheading-legal-maintenance">
                Log del sistema y mantenimiento
              </h3>
              <p>
                Por motivos relativos al funcionamiento y mantenimiento, esta
                Aplicaci&oacute;n y cualquier otro servicio, proporcionado por
                terceros, que se utilice, podrá recoger un registro del sistema;
                es decir, archivos que registren la interacción con esta
                Aplicaci&oacute;n y que puedan contener Datos Personales, tales
                como la dirección IP del Usuario.
              </p>
              <h3 className="iub-subheading iub-subheading-legal-information-not-contained">
                Informaci&oacute;n no contenida en esta pol&iacute;tica de
                privacidad
              </h3>
              <p>
                Se podrá solicitar en cualquier momento información adicional
                sobre la recogida y el tratamiento de los Datos Personales al
                Titular. La información de contacto se indica al inicio del
                presente documento.
              </p>

              <h3 className="iub-subheading iub-subheading-legal-changes-to-this-privacy-policy">
                Modificación de la presente política de privacidad
              </h3>
              <p>
                El Titular se reserva el derecho de modificar esta política de
                privacidad en cualquier momento, notificándolo a los Usuarios a
                través de esta página y, a ser posible, a través de esta
                Aplicaci&oacute;n y/o de ser técnica y legalmente posible
                notificando directamente a los Usuarios, en caso de que el
                Titular cuente con la información de contacto necesaria a tal
                fin. Se recomienda encarecidamente que revisen esta página con
                frecuencia, tomando como referencia la fecha de la última
                actualización indicada al final de la página.
                <br />
                <br />
                En el caso de que los cambios afectasen a las actividades de
                tratamiento realizadas en base al consentimiento del Usuario, el
                Titular deberá obtener, si fuera necesario, el nuevo
                consentimiento del Usuario.
              </p>
            </div>

            <div className="one_line_col">
              <details className="box_primary box_10 definitions expand">
                <summary>
                  <h3
                    id="definitions_and_legal_references"
                    className="w_icon_24 icon_ribbon"
                  >
                    Definiciones y referencias legales
                  </h3>
                </summary>
                <div className="details_body">
                  <h4>Datos Personales (o Datos)</h4>
                  <p>
                    Constituye un dato personal cualquier información que,
                    directa, indirectamente o en relación con otra información –
                    incluyendo un número de identificación personal – permita
                    identificar a una persona física.
                  </p>

                  <h4>Datos de Uso</h4>
                  <p>
                    Las informaciones recogidas de forma autom&aacute;tica por
                    esta Aplicaci&oacute;n (o por servicios de terceros
                    utilizados por esta Aplicaci&oacute;n), podr&aacute;n
                    incluir: las direcciones IP o nombres de dominio de los
                    ordenadores utilizados por el Usuario que se conecte a esta
                    Aplicaci&oacute;n, las direcciones URI (Uniform Resource
                    Identifier), la hora de la solicitud, el método utilizado
                    para realizar la solicitud al servidor, las dimensiones del
                    archivo obtenido en respuesta, el c&oacute;digo numérico
                    indicando el estado de la respuesta del servidor (resultado
                    satisfactorio, error, etc.), el pa&iacute;s de origen, las
                    caracter&iacute;sticas del navegador y del sistema operativo
                    utilizados por el visitante, las diversas coordenadas
                    temporales de la visita (por ejemplo, el tiempo de
                    permanencia en cada una de las p&aacute;ginas) y los
                    detalles relativos al itinerario seguido dentro de la
                    Aplicaci&oacute;n, con especial referencia a la secuencia de
                    p&aacute;ginas consultadas, a los par&aacute;metros
                    relativos al sistema operativo y al entorno
                    inform&aacute;tico del Usuario.
                  </p>

                  <h4>Usuario</h4>
                  <p>
                    El individuo que utilice esta Aplicaci&oacute;n, quien, a
                    menos que se indique lo contrario deberá coincidir con el
                    Interesado.
                  </p>

                  <h4>Interesado</h4>
                  <p>
                    La persona física a la que se refieren los Datos Personales.
                  </p>

                  <h4>Encargado del Tratamiento (o Encargado)</h4>
                  <p>
                    La persona física o jurídica, administración pública,
                    agencia o cualquier otra institución, que procese los Datos
                    Personales en nombre del Responsable del Tratamiento,
                    descrita en la presente política de privacidad.
                  </p>

                  <h4>Responsable del Tratamiento (o Titular)</h4>
                  <p>
                    La persona física o jurídica, administración pública,
                    agencia o cualquier otra institución, que actuando en
                    solitario o conjuntamente con otras, determine las
                    finalidades y las medidas del tratamiento de los Datos
                    Personales, incluyendo las medidas de seguridad relativas al
                    funcionamiento y al uso de esta Aplicaci&oacute;n. A menos
                    que se especifique lo contrario, el Responsable del
                    Tratamiento es el Titular de esta Aplicaci&oacute;n.
                  </p>

                  <h4>Esta Aplicaci&oacute;n</h4>
                  <p>
                    El medio a través del cual se han recogido y tratado los
                    Datos Personales del Usuario.
                  </p>

                  <h4>Servicio</h4>
                  <p>
                    El servicio proporcionado por esta Aplicaci&oacute;n, tal y
                    como se describe en las definiciones y referencias legales
                    (en caso de estar disponibles) y en esta página o
                    aplicación.
                  </p>

                  <h4>Unión Europea (o UE)</h4>
                  <p>
                    A menos que se indique lo contrario, todas las referencias
                    hechas a la Unión Europea en el presente documento incluyen
                    todos los actuales Estados miembros de la Unión Europea y
                    del Espacio Económico Europeo.
                  </p>

                  <h4>Cookie</h4>
                  <p>
                    Las Cookies son Rastreadores que consisten en pequeñas
                    cantidades de datos almacenados en el navegador del Usuario.
                  </p>

                  <h4>Rastreador</h4>
                  <p>
                    Rastreador designa cualquier tecnología - p.ej. Cookies,
                    identificadores únicos, balizas web, scripts incrustados,
                    etiquetas de entidad y creación de huella digital - que
                    permite rastrear a los Usuarios, por ejemplo, accediendo a
                    información o almacenándola en el dispositivo del Usuario.
                  </p>
                  <hr />
                  <h4>Informaci&oacute;n legal</h4>
                  <p>
                    Esta política de privacidad se refiere sólo a esta
                    Aplicaci&oacute;n, a menos que se indique lo contrario en el
                    presente documento.
                  </p>
                </div>
              </details>
            </div>

            <div className="iub_footer">
              <p>Última revisi&oacute;n: 30 agosto 2024</p>
              <p></p>

              <p>
                <a
                  className="link-underline"
                  href="https://www.iubenda.com/es/generador-de-politicas-de-privacidad-y-cookies"
                  title="iubenda – generador de Políticas de Privacidad"
                >
                  iubenda
                </a>{" "}
                aloja este contenido y únicamente recoge{" "}
                <a
                  className="link-underline"
                  href="//www.iubenda.com/privacy-policy/52661198"
                >
                  los Datos Personales que sean estrictamente necesarios
                </a>{" "}
                para prestar este servicio.
              </p>

              <a
                href="//www.iubenda.com/privacy-policy/72497857"
                title="Muestra la pol&iacute;tica de privacidad simplificada"
                className="show_comp_link iframe-preserve an-preserve"
              >
                Muestra la pol&iacute;tica de privacidad simplificada
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
