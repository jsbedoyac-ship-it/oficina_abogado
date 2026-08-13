export type Lang = "es" | "en";

export const content = {
  es: {
    meta: {
      title: "Juan Sebastián Bedoya Castrillón | Asesoría Legal",
      description:
        "Marca personal de Juan Sebastián Bedoya Castrillón, estudiante de último semestre de Derecho en la Universidad EAFIT — Medellín, Colombia.",
    },
    nav: {
      links: [
        { href: "#sobre-mi", label: "Sobre mí" },
        { href: "#trayectoria", label: "Trayectoria" },
        { href: "#servicios", label: "Servicios" },
        { href: "#metodo", label: "Método" },
        { href: "#contacto", label: "Contacto" },
      ],
      cta: "Contáctame",
    },
    hero: {
      eyebrow: "Derecho · Medellín, Colombia",
      brandTagline: "Asesoría Legal",
      role: "Estudiante de Derecho — Universidad EAFIT",
      tagline:
        "Construyendo una práctica legal fundamentada en negociación, resolución de conflictos y acompañamiento cercano — con la rigurosidad de quien se está formando para ejercer con excelencia.",
      ctaPrimary: "Agenda una asesoría",
      ctaSecondary: "Conoce mi trayectoria",
    },
    about: {
      eyebrow: "Sobre mí",
      name: "Juan Sebastián\nBedoya Castrillón",
      body: [
        "Estudiante de Derecho en último semestre en la Universidad EAFIT, con formación en resolución de conflictos, derecho corporativo, derecho privado y derecho civil. Mi enfoque nace de una convicción simple: la mayoría de los conflictos son fallas de estructura, no de mala fe.",
      ],
      facts: [
        { label: "Derecho · Pregrado", value: "Universidad EAFIT" },
        { label: "Conciliación en Derecho", value: "JURISMACS · MASC" },
        { label: "Bachillerato Internacional", value: "Diploma IB" },
        { label: "Idiomas", value: "Español · Inglés" },
      ],
    },
    timeline: {
      eyebrow: "Trayectoria",
      title: "Formación y experiencia",
      items: [
        {
          year: "2021 — presente",
          title: "Pregrado en Derecho",
          org: "Universidad EAFIT",
          description:
            "Último semestre. Enfoque en resolución de conflictos, derecho corporativo y derecho civil.",
        },
        {
          year: "Jul 2025 — Jul 2026",
          title: "Practicante — Seguros y ARL",
          org: "Seguros Generales Suramericana S.A.",
          description:
            "Estudio y asignación de procesos, apoyo en procesos de embargos, interposición y respuesta de tutelas y derechos de petición, revisión de respuestas a entes de control, comités de reservas.",
        },
        {
          year: "Feb 2024 — Jul 2025",
          title: "Coordinador administrativo",
          org: "Healthy Muscle Maker S.A.S.",
          description:
            "Coordinación de puntos de venta en Medellín y Bogotá, manejo de personal, proveedores y facturación; estandarización de procesos y servicios a terceros.",
        },
        {
          year: "2023",
          title: "Coordinador de Conciliatón",
          org: "Centro de Conciliación JURISMACS — Itagüí",
          description:
            "Coordinación logística y de contenidos para jornada de conciliación comunitaria.",
        },
        {
          year: "2023",
          title: "Voluntariado — Festival de la Conciliación",
          org: "Ministerio de Justicia y del Derecho",
          description:
            "Asesoría para el montaje del Centro de Conciliación CONCILIARTE en El Santuario, Antioquia, junto al centro JURISMAC.",
        },
        {
          year: "2021",
          title: "Diploma del Bachillerato Internacional (IB)",
          org: "Aspaen Alcázares, Medellín",
          description:
            "Certificación completa de creatividad, actividad y servicio.",
        },
      ],
      courses: {
        title: "Formación complementaria",
        items: [
          "Introducción al Litigio ante Cortes Internacionales — Educatium.org",
          "Introducción a la Contratación Electrónica — Educatium.org",
        ],
      },
    },
    services: {
      eyebrow: "Áreas de práctica",
      title: "Cuatro frentes, un mismo criterio",
      subtitle:
        "Ningún asunto es solo el problema legal que lo detona. Lo abordo como un sistema.",
      note: "Como estudiante de último semestre, aún no cuento con tarjeta profesional. Los servicios a continuación son de asesoría, gestión y apoyo — no representación legal ni litigio, que requieren un abogado titulado.",
      groups: [
        {
          number: "01",
          title: "Derecho corporativo",
          tags: "CONSTITUCIÓN · GOBIERNO · CONTRATOS",
          description:
            "Acompañamiento en la estructuración societaria y las reglas de gobierno de la empresa, bajo supervisión de profesionales titulados. La arquitectura antes del crecimiento.",
        },
        {
          number: "02",
          title: "Civil y familia",
          tags: "SUCESIONES · ARRENDAMIENTOS · TRÁMITES",
          description:
            "Orientación inicial y gestión documental en asuntos civiles y de familia, con derivación a abogado titulado cuando el caso lo requiere.",
        },
        {
          number: "03",
          title: "Conciliación y MASC",
          tags: "MEDIACIÓN · ACUERDOS · NEGOCIACIÓN",
          description:
            "Experiencia directa facilitando procesos de conciliación, con foco en acuerdos rápidos y documentados. Un pleito ganado en tres años suele costar más que un acuerdo cerrado en tres semanas.",
        },
        {
          number: "04",
          title: "Contratos y riesgo",
          tags: "REVISIÓN · CLÁUSULAS · RIESGOS",
          description:
            "Revisión preliminar de contratos comerciales, con foco en la cláusula que va a importar cuando algo salga mal — no en la que se ve bien al firmar, bajo supervisión de profesionales titulados.",
        },
      ],
    },
    method: {
      eyebrow: "Método",
      stepLabel: "Etapa",
      title: "Cómo se trabaja un caso aquí",
      subtitle:
        "Sin promesas vacías ni informes de cien páginas que nadie lee. Cuatro pasos, cada uno con un entregable concreto.",
      steps: [
        {
          number: "01",
          title: "Escucha",
          description:
            "Reunión sin costo. Salgo entendiendo el negocio, no solo el problema legal.",
          deliverable: "Entrega: acta de alcance",
        },
        {
          number: "02",
          title: "Diagnóstico",
          description:
            "Riesgos ordenados por gravedad y costo probable. En dos páginas, en español.",
          deliverable: "Entrega: informe · 72 h",
        },
        {
          number: "03",
          title: "Estrategia",
          description:
            "Dos rutas: la de acuerdo y la contenciosa, con tiempos y honorarios de cada una.",
          deliverable: "Entrega: plan y presupuesto",
        },
        {
          number: "04",
          title: "Ejecución",
          description:
            "Interlocución directa conmigo y reporte de avance en fecha fija, sin que lo pidas.",
          deliverable: "Entrega: reporte mensual",
        },
      ],
    },
    contact: {
      eyebrow: "Consulta inicial",
      title: "La primera conversación no se cobra.",
      body:
        "Cuéntame el asunto en pocas líneas. Respondo en menos de 24 horas hábiles diciéndote si puedo acompañarte — y si no, a quién deberías acudir.",
      email: "jsbedoyac@gmail.com",
      phoneDisplay: "+57 301 573 6677",
      phoneWhatsapp: "573015736677",
      location: "Medellín, Colombia",
      attention: "Medellín, presencial · resto de Colombia, virtual",
      linkedin:
        "https://www.linkedin.com/in/juan-sebasti%C3%A1n-bedoya-castrill%C3%B3n-142779356",
      whatsappIntro: "Buen día. Estoy interesado en consultar con Bedoya - Legal.",
      materias: ["Corporativo", "Civil y familia", "Conciliación"],
      infoLabels: {
        email: "Correo",
        phone: "Teléfono",
        attention: "Atención",
      },
      formLabels: {
        name: "Nombre completo",
        phone: "Teléfono / WhatsApp",
        email: "Correo",
        company: "Empresa (opcional)",
        matter: "Materia",
        message: "El asunto",
        disclaimer: "Toda la información que compartas se trata de forma confidencial.",
        consentPrefix: "Acepto el ",
        consentLink: "tratamiento de datos personales",
        consentSuffix: " conforme a la Ley 1581 de 2012.",
        submit: "Enviar solicitud",
      },
    },
    footer: {
      disclaimer:
        "Juan Sebastián Bedoya Castrillón es estudiante de Derecho en último semestre en la Universidad EAFIT y aún no cuenta con tarjeta profesional de abogado. Este sitio no ofrece representación legal ni litigio.",
      rights: "Todos los derechos reservados.",
      dataPolicyTitle: "Tratamiento de datos personales",
      dataPolicyBody:
        "En cumplimiento de la Ley 1581 de 2012 y sus decretos reglamentarios, los datos personales que compartas a través de este sitio (nombre, teléfono y correo) serán usados únicamente para responder tu consulta y no serán compartidos con terceros sin tu autorización. Puedes solicitar la actualización, corrección o eliminación de tus datos escribiendo a jsbedoyac@gmail.com.",
    },
  },
  en: {
    meta: {
      title: "Juan Sebastián Bedoya Castrillón | Legal Support",
      description:
        "Personal brand of Juan Sebastián Bedoya Castrillón, final-year Law student at Universidad EAFIT — Medellín, Colombia.",
    },
    nav: {
      links: [
        { href: "#sobre-mi", label: "About" },
        { href: "#trayectoria", label: "Path" },
        { href: "#servicios", label: "Services" },
        { href: "#metodo", label: "Method" },
        { href: "#contacto", label: "Contact" },
      ],
      cta: "Get in touch",
    },
    hero: {
      eyebrow: "Law · Medellín, Colombia",
      brandTagline: "Legal Advisory",
      role: "Law Student — Universidad EAFIT",
      tagline:
        "Building a legal practice grounded in negotiation, conflict resolution, and close client care — with the rigor of someone training to practice with excellence.",
      ctaPrimary: "Book a consultation",
      ctaSecondary: "See my path",
    },
    about: {
      eyebrow: "About me",
      name: "Juan Sebastián\nBedoya Castrillón",
      body: [
        "Final-year Law student at Universidad EAFIT, with training in conflict resolution, corporate law, private law, and civil law. My approach starts from a simple conviction: most conflicts are failures of structure, not bad faith.",
      ],
      facts: [
        { label: "Law · Undergraduate", value: "Universidad EAFIT" },
        { label: "Conciliation in Law", value: "JURISMACS · ADR" },
        { label: "International Baccalaureate", value: "IB Diploma" },
        { label: "Languages", value: "Spanish · English" },
      ],
    },
    timeline: {
      eyebrow: "Path",
      title: "Education and experience",
      items: [
        {
          year: "2021 — present",
          title: "Law Degree",
          org: "Universidad EAFIT",
          description:
            "Final semester. Focus on conflict resolution, corporate law, and civil law.",
        },
        {
          year: "Jul 2025 — Jul 2026",
          title: "Intern — Insurance & Workers' Comp",
          org: "Seguros Generales Suramericana S.A.",
          description:
            "Case study and assignment, support on garnishment processes, filing and responding to writs of protection (tutelas) and petitions, review of regulator responses, reserve committees.",
        },
        {
          year: "Feb 2024 — Jul 2025",
          title: "Administrative Coordinator",
          org: "Healthy Muscle Maker S.A.S.",
          description:
            "Coordination of retail locations in Medellín and Bogotá, staff, vendor and billing management; standardization of processes and third-party services.",
        },
        {
          year: "2023",
          title: "Conciliatón Coordinator",
          org: "JURISMACS Conciliation Center — Itagüí",
          description:
            "Logistics and content coordination for a community conciliation event.",
        },
        {
          year: "2023",
          title: "Volunteer — Conciliation Festival",
          org: "Ministry of Justice and Law",
          description:
            "Advisory support to set up the CONCILIARTE Conciliation Center in El Santuario, Antioquia, alongside the JURISMAC center.",
        },
        {
          year: "2021",
          title: "International Baccalaureate (IB) Diploma",
          org: "Aspaen Alcázares, Medellín",
          description:
            "Full certification in creativity, activity, and service.",
        },
      ],
      courses: {
        title: "Additional training",
        items: [
          "Introduction to Litigation Before International Courts — Educatium.org",
          "Introduction to Electronic Contracting — Educatium.org",
        ],
      },
    },
    services: {
      eyebrow: "Areas of practice",
      title: "Four fronts, one standard",
      subtitle:
        "No matter is ever just the legal problem that triggered it. I approach it as a system.",
      note: "As a final-year student, I don't yet hold a professional bar license. The services below are advisory, administrative, and support work — not legal representation or litigation, which require a licensed attorney.",
      groups: [
        {
          number: "01",
          title: "Corporate law",
          tags: "FORMATION · GOVERNANCE · CONTRACTS",
          description:
            "Support with corporate structuring and company governance rules, under the supervision of licensed professionals. The architecture before the growth.",
        },
        {
          number: "02",
          title: "Civil & family",
          tags: "ESTATES · LEASES · PROCEDURES",
          description:
            "Initial guidance and document management on civil and family matters, with referral to a licensed attorney when the case requires it.",
        },
        {
          number: "03",
          title: "Conciliation & ADR",
          tags: "MEDIATION · AGREEMENTS · NEGOTIATION",
          description:
            "Direct, hands-on experience facilitating conciliation processes, focused on fast, documented agreements. A case won in three years usually costs more than a deal closed in three weeks.",
        },
        {
          number: "04",
          title: "Contracts & risk",
          tags: "REVIEW · CLAUSES · RISK",
          description:
            "Preliminary review of commercial contracts, focused on the clause that will matter when something goes wrong — not the one that looks good at signing, under the supervision of licensed professionals.",
        },
      ],
    },
    method: {
      eyebrow: "Method",
      stepLabel: "Stage",
      title: "How a case is handled here",
      subtitle:
        "No empty promises, no hundred-page reports nobody reads. Four steps, each with a concrete deliverable.",
      steps: [
        {
          number: "01",
          title: "Listen",
          description:
            "A free meeting. I come away understanding the business, not just the legal problem.",
          deliverable: "Deliverable: scope memo",
        },
        {
          number: "02",
          title: "Diagnosis",
          description:
            "Risks ranked by severity and likely cost. In two pages, in plain language.",
          deliverable: "Deliverable: report · 72 h",
        },
        {
          number: "03",
          title: "Strategy",
          description:
            "Two paths: settlement or litigation, each with its own timeline and fees.",
          deliverable: "Deliverable: plan and budget",
        },
        {
          number: "04",
          title: "Execution",
          description:
            "Direct communication with me and progress reports on a fixed date, without you having to ask.",
          deliverable: "Deliverable: monthly report",
        },
      ],
    },
    contact: {
      eyebrow: "Initial consultation",
      title: "The first conversation is free.",
      body:
        "Tell me the matter in a few lines. I respond in under 24 business hours to say whether I can help — and if not, who you should go to.",
      email: "jsbedoyac@gmail.com",
      phoneDisplay: "+57 301 573 6677",
      phoneWhatsapp: "573015736677",
      location: "Medellín, Colombia",
      attention: "In-person in Medellín · virtual across Colombia",
      linkedin:
        "https://www.linkedin.com/in/juan-sebasti%C3%A1n-bedoya-castrill%C3%B3n-142779356",
      whatsappIntro: "Hello. I'm interested in consulting with Bedoya - Legal.",
      materias: ["Corporate", "Civil & family", "Conciliation"],
      infoLabels: {
        email: "Email",
        phone: "Phone",
        attention: "Availability",
      },
      formLabels: {
        name: "Full name",
        phone: "Phone / WhatsApp",
        email: "Email",
        company: "Company (optional)",
        matter: "Matter",
        message: "The matter",
        disclaimer: "Everything you share is treated confidentially.",
        consentPrefix: "I accept the ",
        consentLink: "personal data processing policy",
        consentSuffix: " under Colombian Law 1581 of 2012.",
        submit: "Send inquiry",
      },
    },
    footer: {
      disclaimer:
        "Juan Sebastián Bedoya Castrillón is a final-year Law student at Universidad EAFIT and does not yet hold a professional bar license. This site does not offer legal representation or litigation services.",
      rights: "All rights reserved.",
      dataPolicyTitle: "Personal data processing",
      dataPolicyBody:
        "In accordance with Colombian Law 1581 of 2012 and its regulatory decrees, any personal data you share through this site (name, phone, and email) will be used solely to respond to your inquiry and will not be shared with third parties without your authorization. You may request the update, correction, or deletion of your data by writing to jsbedoyac@gmail.com.",
    },
  },
} as const;
