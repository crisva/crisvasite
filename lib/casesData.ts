export interface CaseStudyData {
  slug: string;

  // 1. Snapshot
  title: string;
  industry: string;
  valueProposition: string;
  heroImage: { src: string; alt: string };
  client: string;
  timeline: string;
  platforms: string;
  coreOutcome: string;
  teamRoles: string[];
  servicesProvided: string[];

  // 2. El problema
  problem: string;
  contextImage: { src: string; alt: string };

  // 3. El insight
  insight: string;
  hmwStatement: string;
  insightImage: { src: string; alt: string };

  // 4. La solución
  solution: string;
  keyScreensImage: { src: string; alt: string };
  solutionImage: { src: string; alt: string };

  // 5. Resultado
  finalResults: { num: string; label: string }[];
  clientTestimonial: string;
  impactImage: { src: string; alt: string };
}

export const casesData: CaseStudyData[] = [
  {
    slug: "firbid",
    title: "Firbid — La primera subasta de dolares online del Peru",
    industry: "Fintech · Plataforma de tipo de cambio",
    valueProposition: "El mercado cambiario peruano era injusto para personas y empresas. Disenamos la experiencia end-to-end que hizo posible competir por el mejor tipo de cambio desde cualquier lugar.",
    heroImage: { src: "/images/cases/firbid/firbid-screens-1.png", alt: "Firbid plataforma web" },
    client: "Firbid",
    timeline: "End-to-end",
    platforms: "Web · Web App",
    coreOutcome: "Plataforma lanzada con entidades financieras reales operando.",
    teamRoles: ["Lead Product Designer", "UX Researcher", "UI Designer"],
    servicesProvided: ["UX Research", "Diseno End-to-End", "Web Marketing", "Web App", "Prototipado", "Validacion con usuarios"],

    problem: "En Peru, el tipo de cambio lo controlaban los bancos y los cambistas informales. Las personas y empresas no tenian acceso al precio real del mercado. Firbid nacio para cambiar eso con un modelo de subasta donde las entidades financieras compiten entre si. El reto de diseno: hacer que un concepto financiero complejo se sintiera simple, seguro y confiable para el usuario comun.",
    contextImage: { src: "/images/cases/firbid/firbid-screens-1.png", alt: "Firbid sitio web primera version" },

    insight: "En una plataforma donde se mueve dinero real, la ansiedad es el principal enemigo de la conversion. Los usuarios no abandonaban por no entender el concepto: abandonaban por no saber si estaban haciendo lo correcto en cada paso. El diseno tenia que eliminar esa duda antes de que apareciera.",
    hmwStatement: "Como hacer que subastar dolares se sienta tan simple y seguro como hacer una transferencia bancaria?",
    insightImage: { src: "/images/cases/firbid/firbid-screens-2.png", alt: "Firbid sitio web segunda version" },

    solution: "Disenamos el producto completo en dos capas: el sitio de marketing que explica el concepto y genera confianza, y la plataforma web app donde ocurre la subasta. El flujo de usuario se redujo a 4 pasos claros. Validamos el concepto con usuarios finales y con entidades financieras como Interbank, Scotiabank, BBVA y BanBif, que terminaron participando como postores reales en la plataforma.",
    keyScreensImage: { src: "/images/cases/firbid/firbid-screens-3.png", alt: "Firbid web app plataforma de subastas" },
    solutionImage: { src: "/images/cases/firbid/firbid-screens-2.png", alt: "Firbid evolucion del diseno" },

    finalResults: [
      { num: "0 → 1", label: "DE CONCEPTO A PLATAFORMA LANZADA" },
      { num: "4+", label: "ENTIDADES FINANCIERAS OPERANDO" },
      { num: "100%", label: "FLUJO END-TO-END DISENADO Y VALIDADO" }
    ],
    clientTestimonial: "\"Excelente profesionales. Rescato su forma de trabajo individual para prototipar de forma inmediata y a la vez su trabajo en equipo. Es una persona que se adapta a cualquier ambiente laboral y congenia rapidamente con su entorno.\" — Jose Antonio Duarte, CEO Firbid",
    impactImage: { src: "/images/cases/firbid/firbid-screens-3.png", alt: "Firbid plataforma final" }
  },
  {
    slug: "cem-producto",
    title: "CEM Capacita — La plataforma que conecta ciencias con oportunidades",
    industry: "EdTech · Plataforma educativa en ciencias",
    valueProposition: "Los profesionales de ciencias en LATAM no tenian un lugar pensado para ellos. Lo diseñamos y lo construimos de cero.",
    heroImage: { src: "/images/cases/cem-web/hero.jpg", alt: "CEM app icon producto digital" },
    client: "CEM Capacita",
    timeline: "End-to-end",
    platforms: "Web · Responsive",
    coreOutcome: "Plataforma en produccion disenada y desarrollada por Crisva.",
    teamRoles: ["Lead Product Designer", "UX Researcher", "Frontend Developer"],
    servicesProvided: ["UX Research", "Arquitectura de informacion", "UI Design", "Desarrollo Frontend", "Deploy"],

    problem: "Los profesionales y estudiantes de ciencias en Latinoamerica no tenian una plataforma especializada para ellos. Las opciones existentes eran genericas, poco confiables o no entendian el ecosistema cientifico colaborativo. CEM queria cambiar eso pero no tenia ni marca ni producto digital.",
    contextImage: { src: "/images/cases/cem-web/context.jpg", alt: "CEM contenido digital y webinars" },

    insight: "Una plataforma educativa para cientificos no puede verse como otra plataforma de cursos online. Tiene que transmitir rigor, comunidad y oportunidad al mismo tiempo. El diseno tenia que comunicar que esto es diferente antes de que el usuario leyera una sola linea.",
    hmwStatement: "Como disenamos una plataforma educativa que se sienta tan confiable como una institucion academica y tan accesible como una app moderna?",
    insightImage: { src: "/images/cases/cem-web/insight.jpg", alt: "CEM cientifico en laboratorio" },

    solution: "Disenamos y desarrollamos cemcapacita.com desde cero: arquitectura de informacion, flujos de usuario, sistema de diseno y codigo en produccion. La plataforma conecta profesionales de ciencias con cursos, talleres y diplomados especializados, con un sistema de navegacion claro y una experiencia que transmite confianza institucional desde el primer scroll.",
    keyScreensImage: { src: "/images/cases/cem-web/screens.jpg", alt: "CEM aplicaciones y touchpoints" },
    solutionImage: { src: "/images/cases/cem-web/solution.jpg", alt: "CEM marca aplicada en uniforme" },

    finalResults: [
      { num: "0 → 1", label: "DE CONCEPTO A PLATAFORMA EN PRODUCCION" },
      { num: "Full", label: "DESIGN + DEVELOPMENT END-TO-END" },
      { num: "Web", label: "DISENADA Y DESARROLLADA POR CRISVA" }
    ],
    clientTestimonial: "\"Una plataforma que conecta a profesionales de las ciencias con oportunidades reales de crecimiento, disenada para generar confianza a traves de expertos y alianzas.\"",
    impactImage: { src: "/images/cases/cem-web/impact.jpg", alt: "CEM impacto en contenido digital" }
  },
  {
    slug: "cem-branding",
    title: "CEM — La marca que hace visible un ecosistema invisible",
    industry: "EdTech · Ecosistema cientifico colaborativo",
    valueProposition: "Una red de profesionales de ciencias sin identidad visual no es una red: es un grupo. Disenamos el sistema de marca que cambio eso.",
    heroImage: { src: "/images/cases/cem-brand/hero.jpg", alt: "CEM Brand Book portada" },
    client: "CEM Capacita",
    timeline: "Brand Sprint",
    platforms: "Digital · Print · Brand System",
    coreOutcome: "Brand book de 37 paginas que el equipo opera de forma autonoma.",
    teamRoles: ["Brand Strategist", "Visual Designer", "Art Director"],
    servicesProvided: ["Estrategia de marca", "Diseno de logotipo", "Sistema de color", "Tipografia", "Brand Book", "Tono de comunicacion"],

    problem: "CEM conecta a profesionales de ciencias con oportunidades de formacion y colaboracion en LATAM. Pero sin identidad visual, la plataforma parecia cualquier otra. El reto: crear una marca que transmita rigor cientifico, inclusion y modernidad al mismo tiempo, sin caer en los cliches del sector educativo.",
    contextImage: { src: "/images/cases/cem-brand/context.jpg", alt: "CEM aplicaciones de marca" },

    insight: "El insight que guio todo: CEM no es una plataforma de cursos. Es un ecosistema donde personas, conocimiento y oportunidades se conectan. El imagotipo tenia que simbolizar exactamente eso: una red molecular que une nodos, no un libro ni un graduado.",
    hmwStatement: "Como crear una identidad que comunique ecosistema cientifico colaborativo sin verse fria ni academica?",
    insightImage: { src: "/images/cases/cem-brand/insight.jpg", alt: "CEM imagotipo desarrollo" },

    solution: "Imagotipo basado en una red molecular: circulos conectados que simbolizan el ecosistema colaborativo de CEM. Color teal principal que combina la seriedad de las ciencias con la accesibilidad de una plataforma moderna. Brand book de 37 paginas con valores de marca, tono de comunicacion, paleta, tipografia, usos del logo y aplicaciones digitales.",
    keyScreensImage: { src: "/images/cases/cem-brand/screens.jpg", alt: "CEM contenido social y webinars" },
    solutionImage: { src: "/images/cases/cem-brand/solution.jpg", alt: "CEM marca aplicada en uniforme" },

    finalResults: [
      { num: "37 pág", label: "BRAND BOOK QUE EL EQUIPO OPERA SOLO" },
      { num: "5", label: "VALORES DE MARCA DEFINIDOS Y DOCUMENTADOS" },
      { num: "Sistema", label: "IDENTIDAD COHERENTE EN TODOS LOS TOUCHPOINTS" }
    ],
    clientTestimonial: "\"Cada interaccion es una oportunidad para fortalecer competencias, impulsar empleabilidad y dinamizar el ecosistema cientifico colaborativo.\"",
    impactImage: { src: "/images/cases/cem-brand/impact.jpg", alt: "CEM cientifico con identidad aplicada" }
  },
  {
    slug: "fluyez",
    title: "Fluyez — Identidad que convierte",
    industry: "Startup Digital · Fintech",
    valueProposition: "Una plataforma cripto que se sentía técnica y lejana. La rediseñamos para que se sintiera humana y cercana — sin perder credibilidad.",
    heroImage: { src: "/placeholder-hero.webp", alt: "Fluyez final product aesthetic" },
    client: "Fluyez",
    timeline: "5 semanas",
    platforms: "Mobile · Web",
    coreOutcome: "+35% en conversión durante los primeros 3 meses.",
    teamRoles: ["Lead UX/UI", "Brand Designer", "Copywriter"],
    servicesProvided: ["Research emocional", "Sistema visual", "Content kit de lanzamiento"],

    problem: "La tasa de rebote de Fluyez era alta desde el inicio. El branding anterior se veía genérico y gris: los usuarios millennials desconfiaban antes de leer una sola línea. Una plataforma fintech que no genera confianza visual no convierte.",
    contextImage: { src: "/placeholder-context.webp", alt: "Fluyez original website screenshot" },

    insight: "Los usuarios quieren color pero con estructura. No les asusta la complejidad del producto: les asusta sentirse solos en el proceso. Cada micro-momento de éxito tiene que ser celebrado visualmente.",
    hmwStatement: "¿Cómo hacer que el uso de la plataforma se sienta fluido y amistoso sin devaluar la sofisticación del producto?",
    insightImage: { src: "/placeholder-research.webp", alt: "Color psychology board" },

    solution: "Sistema visual vibrante pero balanceado: paleta vivaz con neutros seguros, esquinas redondeadas, ilustraciones amigables y micro-animaciones que celebran cada logro del usuario. El 90% de los usuarios en test de 5 segundos identificaban claramente dónde hacer clic. Content kit completo para lanzamiento.",
    keyScreensImage: { src: "/placeholder-screens.webp", alt: "Fluyez mobile app screens flow" },
    solutionImage: { src: "/placeholder-solution.webp", alt: "Before and After UI designs" },

    finalResults: [
      { num: "+35%", label: "CONVERSIÓN PRIMEROS 3 MESES" },
      { num: "90%", label: "USUARIOS ORIENTADOS EN 5 SEGUNDOS" },
      { num: "Brand Kit", label: "COMPLETO PARA LANZAMIENTO" }
    ],
    clientTestimonial: "\"El sistema visual cambió radicalmente nuestra percepción. Ahora nuestros usuarios confían y disfrutan la herramienta.\"",
    impactImage: { src: "/placeholder-impact.webp", alt: "Conversion tracking improvements" }
  },
  {
    slug: "tecniya",
    title: "TecniYA — La marca que genera confianza antes de que el técnico llegue",
    industry: "PropTech · Marketplace de servicios técnicos",
    valueProposition: "Nadie confía en quien va a entrar a su casa. Diseñamos la identidad que resuelve eso antes del primer contacto.",
    heroImage: { src: "/images/cases/tecniya/tecniya-hero.jpg", alt: "TecniYA Brand System aplicado" },
    client: "TecniYA",
    timeline: "6 semanas",
    platforms: "Digital · Web · Social Media · Print",
    coreOutcome: "Brand system completo que el equipo opera sin depender del estudio.",
    teamRoles: ["Brand Strategist", "Visual Designer", "Art Director", "UX Writer"],
    servicesProvided: ["Estrategia de marca", "Diseño de logotipo", "Sistema de color", "Ilustración", "Brand Book", "Web Concept", "Social Media Kit"],

    problem: "El sector de servicios del hogar opera en la informalidad. Los usuarios no saben quién va a entrar a su casa, los técnicos no tienen respaldo y las plataformas existentes no logran transmitir profesionalismo y cercanía al mismo tiempo. Sin resolver esa tensión, no hay adopción posible.",
    contextImage: { src: "/images/cases/tecniya/tecniya-sketches.jpg", alt: "Exploración conceptual del logotipo de TecniYA" },

    insight: "Los usuarios no buscan una marca aspiracional: buscan certeza. Quieren saber quién viene, cuándo llega y cuánto cuesta. La marca tiene que responder esas preguntas antes de que el usuario las haga.",
    hmwStatement: "¿Cómo crear una identidad que transmita seriedad y cercanía al mismo tiempo?",
    insightImage: { src: "/images/cases/tecniya/tecniya-branding1.jpg", alt: "Ilustración de técnico TecniYA" },

    solution: "Sistema de identidad completo construido desde el insight: logo como narrativa (plano de casa + burbuja de chat + Ya! = lo pedís, llegamos), azul para profesionalismo y verde para cercanía, ilustraciones que humanizan al técnico en lugar de reducirlo a mano de obra anónima. Brand book de 50 páginas validado para accesibilidad cromática, aplicado en 4 touchpoints digitales.",
    keyScreensImage: { src: "/images/cases/tecniya/tecniya-web.jpg", alt: "Web concept TecniYA" },
    solutionImage: { src: "/images/cases/tecniya/tecniya-branding2.jpg", alt: "Ilustraciones TecniYA" },

    finalResults: [
      { num: "6 sem", label: "DE BRIEF A LANZAMIENTO" },
      { num: "4", label: "TOUCHPOINTS CON IDENTIDAD COHERENTE" },
      { num: "50 pág", label: "BRAND BOOK QUE EL EQUIPO OPERA SOLO" }
    ],
    clientTestimonial: "\"Crisva entendió desde el primer día que TecniYA no es solo una app: es una promesa. Y esa promesa quedó en cada elemento de la marca.\"",
    impactImage: { src: "/images/cases/tecniya/tecniya-branding3.jpg", alt: "TecniYA ilustración gasfitero" }
  }
];