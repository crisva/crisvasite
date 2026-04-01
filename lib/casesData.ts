export interface CaseStudyData {
  slug: string;
  // 1. Executive Snapshot
  title: string;
  industry: string;
  valueProposition: string;
  heroImage: { src: string; alt: string };
  client: string;
  timeline: string;
  platforms: string;
  coreOutcome: string;

  // 2. Business Context & Problem Framing
  contextBackground: string;
  contextChallenges: string;
  contextBurningPlatform: string;
  contextImage: { src: string; alt: string };

  // 3. Objectives & Success Metrics
  objectives: string[];
  kpis: string[];
  metricsImage: { src: string; alt: string };

  // 4. Role & Scope of the Agency
  teamRoles: string[];
  servicesProvided: string[];

  // 5. Discovery & Research
  researchMethodologies: string[];
  researchHighlights: string;
  researchImage: { src: string; alt: string };

  // 6. Problem Definition (Synthesis)
  hmwStatement: string;
  corePainPoints: string[];
  synthesisImage: { src: string; alt: string };

  // 7. Strategy & Design Approach
  strategicPillars: string[];
  designPrinciples: string[];
  approachImage: { src: string; alt: string };

  // 8. Solution Design
  solutionEvolution: string;
  solutionImage: { src: string; alt: string }; // wireframe vs high-fi

  // 9. Key Screens & Interactions
  keyScreensDesc: string;
  keyScreensImage: { src: string; alt: string };
  interactionVideo: { src: string; alt: string }; // Optional mock video/gif URL

  // 10. Validation & Iteration
  usabilityTestingDesc: string;
  testingImage: { src: string; alt: string };

  // 11. Results & Impact
  finalResults: { num: string; label: string }[];
  clientTestimonial: string;
  impactImage: { src: string; alt: string };
}

export const casesData: CaseStudyData[] = [
  {
    slug: "firbid",
    title: "Firbid — De idea a producto listo para el mercado",
    industry: "Fintech · Plataforma de subastas",
    valueProposition: "Proceso end-to-end que cubrió flujo de registro, onboarding, sistema de pujas y transacción final para asegurar el éxito en el go-to-market.",
    heroImage: { src: "/placeholder-hero.webp", alt: "Firbid Final Solution High-Fidelity Mockup" },
    client: "Firbid",
    timeline: "8 semanas",
    platforms: "Web App",
    coreOutcome: "MVP 100% completo y listo para lanzamiento.",
    
    contextBackground: "Firbid buscaba ingresar al mercado con un concepto disruptivo de subastas para el sector financiero.",
    contextChallenges: "La necesidad de una interfaz que generara extrema confianza mientras mantenía el dinamismo de una plataforma de pujas.",
    contextBurningPlatform: "Faltaba tiempo crítico para salir al mercado antes que la competencia introdujera soluciones similares.",
    contextImage: { src: "/placeholder-context.webp", alt: "Context of Firbid's existing landscape" },

    objectives: [
      "Diseñar un MVP funcional que valide la propesta de valor.",
      "Garantizar un onboarding sin fricción para nuevos inversores."
    ],
    kpis: [
      "Tiempo de registro reducido a < 3 minutos.",
      "Cero abandonos en la primera puja."
    ],
    metricsImage: { src: "/placeholder-metrics.webp", alt: "Firbid target KPIs visualization" },

    teamRoles: ["Lead Product Designer", "UX Researcher", "UI Designer"],
    servicesProvided: ["Diseño End-to-End", "Prototipado interactivo", "Auditoría UX/UI"],

    researchMethodologies: ["Entrevistas a usuarios", "Competitive Audit", "Pruebas de usabilidad iniciales"],
    researchHighlights: "Los usuarios expresaron la necesidad absoluta de transparencia y respuesta inmediata en tiempo real durante las pujas.",
    researchImage: { src: "/placeholder-research.webp", alt: "Firbid research affinity map" },

    hmwStatement: "¿Cómo podríamos convertir el complejo proceso de pujas corporativas en una experiencia intuitiva, segura y rápida?",
    corePainPoints: ["Falta de transparencia en subastas tradicionales.", "Procesos de onboarding burocráticos y largos."],
    synthesisImage: { src: "/placeholder-synthesis.webp", alt: "Firbid user journey map" },

    strategicPillars: ["Confianza desde el día 1", "Agilidad en cada clic", "Transparencia de datos"],
    designPrinciples: ["Bordes limpios", "Tipografía jerárquica", "Feedback inmediato de acciones"],
    approachImage: { src: "/placeholder-approach.webp", alt: "Firbid Information Architecture" },

    solutionEvolution: "Pasamos de wireframes muy cargados de datos a un modelo progresivo donde solo se despliega información cuando el usuario lo requiere, reduciendo la carga cognitiva.",
    solutionImage: { src: "/placeholder-solution.webp", alt: "Wireframe vs High-Fidelity transformation" },

    keyScreensDesc: "Las pantallas principales incluyen el dashboard del inversor en tiempo real y el panel de pujas con notificaciones push.",
    keyScreensImage: { src: "/placeholder-screens.webp", alt: "Firbid high fidelity desktop screens" },
    interactionVideo: { src: "/placeholder-interaction.mp4", alt: "Real-time bidding interaction" },

    usabilityTestingDesc: "Evaluamos el prototipo de alta fidelidad con 15 inversores semilla. Simplificamos el modal de confirmación de puja al notar una fricción de 4 segundos en las decisiones críticas.",
    testingImage: { src: "/placeholder-testing.webp", alt: "Heatmap from Firbid usability test" },

    finalResults: [
      { num: "0 → 1", label: "MVP LISTO PARA MERCADO" },
      { num: "100%", label: "PROCESO END-TO-END CUBIERTO" },
      { num: "8 sem", label: "DE DISCOVERY A ENTREGA FINAL" }
    ],
    clientTestimonial: "\"El nivel de detalle y claridad estratégica de Crisva permitió que pasáramos de la idea a un producto real sin contratiempos.\"",
    impactImage: { src: "/placeholder-impact.webp", alt: "Firbid impact and results cards" }
  },
  {
    slug: "dynamo",
    title: "Dynamo — Branding que se convirtió en sociedad",
    industry: "Startup B2B",
    valueProposition: "Transformamos una identidad incierta en un ecosistema de marca B2B coherente que posicionó a Dynamo como referentes de mercado.",
    heroImage: { src: "/placeholder-hero.webp", alt: "Dynamo Brand Ecosystem Mockup" },
    client: "Dynamo",
    timeline: "6 Semanas",
    platforms: "Digital, Print & Brand System",
    coreOutcome: "Lanzamiento integral del sistema visual y asociación a largo plazo.",

    contextBackground: "Dynamo entraba a competir en un nicho B2B estático y aburrido.",
    contextChallenges: "Cómo destacar y verse dinámicos sin perder la formalidad que los clientes corporativos exigían.",
    contextBurningPlatform: "Necesitaban iniciar su comercialización con una cara confiable desde el minuto cero.",
    contextImage: { src: "/placeholder-context.webp", alt: "Dynamo initial brand audit" },

    objectives: [
      "Construir un Brand System escalable",
      "Proyectar una imagen de vanguardia y corporativa"
    ],
    kpis: [
      "Aprobación de brand kit en < 3 iteraciones",
      "Consistencia en 100% de los touchpoints medidos"
    ],
    metricsImage: { src: "/placeholder-metrics.webp", alt: "Dynamo KPIs chart" },

    teamRoles: ["Brand Strategist", "Visual Designer", "Art Director"],
    servicesProvided: ["Identidad estratégica", "Manual de marca", "Aplicaciones visuales"],

    researchMethodologies: ["Stakeholder workshops", "Auditoría de competidores globales", "Definición de voz y tono"],
    researchHighlights: "Los key stakeholders buscaban transmitir energía sin verse inmaduros.",
    researchImage: { src: "/placeholder-research.webp", alt: "Dynamo brand workshop session" },

    hmwStatement: "¿Cómo podríamos canalizar la energía cinética de Dynamo hacia una identidad visual corporativamente sólida?",
    corePainPoints: ["La comunicación en el sector B2B carece de impacto emocional.", "Inconsistencia visual al generar nuevos recursos de marketing."],
    synthesisImage: { src: "/placeholder-synthesis.webp", alt: "Brand archetype mapping" },

    strategicPillars: ["Energía controlada", "Minimalismo funcional", "Claridad estructural"],
    designPrinciples: ["Contraste audaz", "Tipografía geométrica", "Uso inteligente del vacío"],
    approachImage: { src: "/placeholder-approach.webp", alt: "Brand elements breakdown" },

    solutionEvolution: "Se exploraron 3 rutas direccionales, convergiendo en un isotipo basado en movimiento constante pero líneas perfectas.",
    solutionImage: { src: "/placeholder-solution.webp", alt: "Logo development sketches to final" },

    keyScreensDesc: "Mostramos el despliegue de la marca a lo largo de landing pages corporativas, tarjetas de presentación y papelería digital.",
    keyScreensImage: { src: "/placeholder-screens.webp", alt: "Dynamo brand collateral mockup" },
    interactionVideo: { src: "/placeholder-interaction.mp4", alt: "Dynamo logo animation" },

    usabilityTestingDesc: "Realizamos validación de contraste tipográfico y accesibilidad en versiones web.",
    testingImage: { src: "/placeholder-testing.webp", alt: "Accessibility score readouts" },

    finalResults: [
      { num: "Socio", label: "NO PROVEEDOR, ALIADO" },
      { num: "Sistema", label: "MARCA COHERENTE EN TODOS LOS TOUCHPOINTS" }
    ],
    clientTestimonial: "\"Dynamo describe el trabajo con Crisva como su mejor decisión.\"",
    impactImage: { src: "/placeholder-impact.webp", alt: "Dynamo successful brand launch" }
  },
  {
    slug: "fluyez",
    title: "Fluyez — Identidad que convierte",
    industry: "Startup Digital",
    valueProposition: "Un branding completo y centrado en la conversión emocional que impulsó las tasas de captura de leads.",
    heroImage: { src: "/placeholder-hero.webp", alt: "Fluyez final product aesthetic" },
    client: "Fluyez",
    timeline: "5 Semanas",
    platforms: "Mobile & Web",
    coreOutcome: "+35% incremento en conversión durante los primeros 3 meses.",

    contextBackground: "Fluyez es una startup cripto/fintech digital apuntando al mercado millennial.",
    contextChallenges: "Democratizar un concepto complejo usando un estilo visual accesible, vibrante y empático.",
    contextBurningPlatform: "Alta tasa de rebote con su branding previo no profesional.",
    contextImage: { src: "/placeholder-context.webp", alt: "Fluyez original website screenshot" },

    objectives: [
      "Reducir fricción emocional al entender la startup",
      "Aumentar el CTR (Click Through Rate)"
    ],
    kpis: [
      "+20% retención en página",
      "+30% incremento en conversión"
    ],
    metricsImage: { src: "/placeholder-metrics.webp", alt: "Fluyez conversion targets" },

    teamRoles: ["Lead UX/UI", "Brand Designer", "Copywriter"],
    servicesProvided: ["Research emocional", "Sistema visual", "Content kit de lanzamiento"],

    researchMethodologies: ["Análisis de heurísticos", "Paneles de usuarios objetivo", "Testeo A/B inicial"],
    researchHighlights: "Los usuarios desconfiaban de plataformas fintech que se veían 'demasiado grises'. Querían color pero con estructura.",
    researchImage: { src: "/placeholder-research.webp", alt: "Color psychology board" },

    hmwStatement: "¿Cómo podríamos hacer que el registro y el uso de la plataforma se sienta fluido y amistoso sin devaluar la sofisticación del producto?",
    corePainPoints: ["Complejidad del discurso.", "Falta de llamados a la acción claros y jerarquizados."],
    synthesisImage: { src: "/placeholder-synthesis.webp", alt: "Fluyez empathy map" },

    strategicPillars: ["Cercanía extrema", "Educación visual", "Llamativos pero seguros"],
    designPrinciples: ["Botones con alto contraste", "Ilustraciones amigables", "Micro-animaciones de éxito"],
    approachImage: { src: "/placeholder-approach.webp", alt: "Fluyez UI library" },

    solutionEvolution: "Se refinaron los componentes UI para tener esquinas más redondeadas y se diseñó una paleta de colores vivaz pero balanceada con neutros seguros.",
    solutionImage: { src: "/placeholder-solution.webp", alt: "Before and After UI designs" },

    keyScreensDesc: "Las pantallas de Onboarding y Dashboard ahora celebran cada pequeño logro del usuario.",
    keyScreensImage: { src: "/placeholder-screens.webp", alt: "Fluyez mobile app screens flow" },
    interactionVideo: { src: "/placeholder-interaction.mp4", alt: "Fluyez success celebration animation" },

    usabilityTestingDesc: "La versión final superó el test de 5 segundos. El 90% de los usuarios identificaban claramente dónde debían hacer clic.",
    testingImage: { src: "/placeholder-testing.webp", alt: "A/B test results heatmap" },

    finalResults: [
      { num: "+35%", label: "CONVERSIÓN PRIMEROS 3 MESES" },
      { num: "Brand Kit", label: "COMPLETO PARA LANZAMIENTO" }
    ],
    clientTestimonial: "\"El sistema visual cambió radicalmente nuestra percepción. Ahora nuestros usuarios confían y disfrutan la herramienta.\"",
    impactImage: { src: "/placeholder-impact.webp", alt: "Conversion tracking improvements" }
  }
];
