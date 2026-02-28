import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

type ProjectEntry = {
  name: string
  description: string
  link?: string
}

type ExperienceEntry = {
  client: string
  consultora: string
  role: string
  period: string
  current?: boolean
  tags?: string[]
  highlights: string[]
  projects: ProjectEntry[]
  logo: string
}

const experiences: ExperienceEntry[] = [
  {
    client: 'Kasnet',
    consultora: 'via QDS',
    logo: 'https://www.google.com/s2/favicons?domain=kasnet.com&sz=64',
    role: 'Senior Backend Developer · NestJS',
    period: 'Ene 2026 – Presente',
    current: true,
    tags: ['Arquitectura Hexagonal', 'DDD', 'CQRS', 'NestJS'],
    highlights: [
      'Diseño e implementación de arquitectura hexagonal con DDD y CQRS en productos bancarios.',
      'Definición de contratos de servicios REST y patrones de diseño avanzados.',
      'Integración con servicios AWS y pipelines de CI/CD automatizados.',
    ],
    projects: [
      { name: 'Kasnet', description: 'Plataforma bancaria con múltiples productos financieros.', link: 'https://www.kasnet.com/' },
    ],
  },
  {
    client: 'Wally',
    consultora: 'via PRAGMA',
    logo: 'https://www.wally.tech/hs-fs/hubfs/1-Sep-22-2025-05-39-24-7047-PM.png?width=120&height=33',
    role: 'Senior L1 Backend Developer · Node.js',
    period: 'Oct 2025 – Dic 2025 · 3 meses',
    tags: ['Microservicios', 'AWS', 'Fintech'],
    highlights: [
      'Diseño e implementación de microservicios backend para billetera digital con Node.js y AWS.',
      'Definición de arquitectura cloud-native escalable para servicios financieros.',
      'Integración con pasarelas de pago y servicios financieros externos.',
    ],
    projects: [
      { name: 'Wally', description: 'Billetera digital. Servicios backend con Node.js y AWS.', link: 'https://www.wally.tech/' },
    ],
  },
  {
    client: 'PRAGMA',
    consultora: 'via PRAGMA',
    logo: 'https://www.google.com/s2/favicons?domain=pragma.co&sz=64',
    role: 'Senior L1 Backend Developer · Node.js',
    period: 'Jun 2025 – Oct 2025 · 5 meses',
    tags: ['Tech Lead', 'IA Generativa', 'AWS Bedrock', 'Terraform'],
    highlights: [
      'Liderazgo técnico y mentoría del equipo de desarrollo, asegurando buenas prácticas y calidad de código.',
      'Definición de arquitectura AWS serverless escalable con Terraform e IaC.',
      'Implementación de soluciones de IA generativa con AWS Bedrock para automatización de procesos de RRHH.',
      'Integración con HubSpot para optimizar el pipeline de selección de talento.',
    ],
    projects: [
      { name: 'CV Analyzer', description: 'Analizador de hojas de vida con IA. AWS Bedrock, Python, Terraform, HubSpot.' },
      { name: 'IA EVA', description: 'Filtro de RRHH potenciado por IA: set de preguntas inteligentes para evaluación de candidatos.' },
      { name: 'Feedback Automático', description: 'IA que analiza proyectos completos en código y genera puntuación de calidad técnica.' },
    ],
  },
  {
    client: 'BAM – Banco Agromercantil',
    consultora: 'via PRAGMA',
    logo: 'https://www.google.com/s2/favicons?domain=bam.com.gt&sz=64',
    role: 'Advanced L3 / L1 Backend Developer · Node.js',
    period: 'Abr 2023 – Jun 2025 · 2 años 3 meses',
    tags: ['Tech Lead', 'Arquitectura Cloud', 'Migración AWS', 'Banca'],
    highlights: [
      'Liderazgo técnico en migración completa de infraestructura on-premise a AWS, coordinando equipos multidisciplinarios y stakeholders del banco.',
      'Participación activa junto a arquitectos de software en la definición de arquitecturas cloud-native y contratos de servicios REST.',
      'Mentoría técnica a desarrolladores junior y avanzados en backend, AWS, patrones de diseño y CI/CD.',
      'Desarrollo de múltiples productos bancarios digitales de alto impacto: apertura de cuentas, fidelización, créditos y pagos.',
      'Gestión de bloqueos técnicos, cambios de alcance y coordinación de despliegues en ambientes dev, QA y producción.',
    ],
    projects: [
      { name: 'Efecto BAM 2.0', description: 'Plataforma de fidelización bancaria (reintegros, puntos, millas). Migración on-premise → AWS.', link: 'https://www.bam.com.gt/efecto-bam/' },
      { name: 'Extrafinanciamiento', description: 'Línea de crédito adicional para tarjetahabientes. Liderazgo técnico y despliegue.', link: 'https://www.bam.com.gt/extrafinanciamiento/' },
      { name: 'Cuenta Fácil e Inversión Virtual', description: '4 productos digitales de bancarización para Guatemala.', link: 'https://www.bam.com.gt/personas/cuentas/cuenta-facil/' },
      { name: 'Orkester', description: 'Backoffice bancario. Mantenimiento evolutivo y nuevas APIs REST en producción.' },
      { name: 'Adquirencia – Pago Inmediato', description: 'Automatización del cierre de POS. Microservicios de conciliación y desembolso.', link: 'https://www.bancolombia.com/empresas/productos-servicios/cash-management/recaudos/ventas-con-tarjeta' },
      { name: 'Crezcamos Aliados', description: 'Créditos para pequeños negocios. Microservicios serverless con arquitectura limpia.', link: 'https://www.bam.com.gt/personas/prestamos/bam-aliados/' },
    ],
  },
  {
    client: 'Puntos Colombia',
    consultora: 'via PRAGMA',
    logo: 'https://www.google.com/s2/favicons?domain=puntoscolombia.com&sz=64',
    role: 'Junior L3 Backend Developer · Node.js',
    period: 'Mar 2023 · 1 mes',
    tags: ['Microservicios', 'Serverless', 'AWS'],
    highlights: [
      'Desarrollo de microservicios de onboarding de clientes bajo arquitectura hexagonal y Clean Code.',
      'Análisis funcional con stakeholders para convertir reglas de negocio en soluciones técnicas escalables.',
      'Integración con el ecosistema de puntos canjeables de Puntos Colombia.',
    ],
    projects: [
      { name: 'Puntos Colombia', description: 'Plataforma de fidelización por puntos canjeables.', link: 'https://www.puntoscolombia.com/personas/inicio' },
    ],
  },
  {
    client: 'PRAGMA',
    consultora: 'via PRAGMA',
    logo: 'https://www.google.com/s2/favicons?domain=pragma.co&sz=64',
    role: 'Junior L3 Backend Developer · Node.js',
    period: '2022',
    tags: ['Node.js', 'AWS', 'Plataformas Internas'],
    highlights: [
      'Diseño e implementación de plataformas internas para gestión del crecimiento profesional de equipos.',
      'Desarrollo de herramientas de datos y automatización de procesos internos.',
      'Primeros pasos en arquitectura cloud y microservicios con Node.js y AWS.',
    ],
    projects: [
      { name: 'Orbita', description: 'Plataforma interna de crecimiento y desarrollo profesional para equipos de PRAGMA.' },
      { name: 'DataCampaign', description: 'Herramienta de gestión y análisis de campañas de datos.' },
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-16">
        Experiencia laboral
      </h2>

      <div className="relative max-w-3xl mx-auto">
        {/* Glowing timeline line */}
        <div
          className="absolute left-5 top-0 bottom-0 w-0.5"
          style={{
            background: 'linear-gradient(to bottom, #4f8ef7, #4f8ef720)',
            boxShadow: '0 0 8px #4f8ef780',
          }}
        />

        <div className="flex flex-col gap-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex gap-6 items-start"
            >
              {/* Dot */}
              <div className="relative flex-shrink-0 mt-1">
                {exp.current ? (
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center z-10 relative">
                    <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-30" />
                    <span className="w-3 h-3 rounded-full bg-[#10b981]" />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-surface border border-border z-10 relative" />
                )}
              </div>

              {/* Card */}
              <div className="flex-1 bg-surface border border-border rounded-xl p-5 hover:border-accent/40 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <div className="flex items-center gap-3">
                    {exp.logo ? (
                      <img
                        src={exp.logo}
                        alt={exp.client}
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-lg object-contain bg-white p-1.5 flex-shrink-0"
                        onError={(e) => {
                          const target = e.currentTarget
                          target.style.display = 'none'
                          const fallback = target.nextElementSibling as HTMLElement | null
                          if (fallback) fallback.style.display = 'flex'
                        }}
                      />
                    ) : null}
                    <div
                      className="w-9 h-9 rounded-lg bg-surface border border-border text-accent font-mono text-sm items-center justify-center flex-shrink-0"
                      style={{ display: 'none' }}
                    >
                      {exp.client.slice(0, 2).toUpperCase()}
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-semibold text-gray-100 text-sm sm:text-base">{exp.client}</h3>
                      {exp.consultora && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-surface border border-border text-muted">
                          {exp.consultora}
                        </span>
                      )}
                    </div>
                  </div>
                  {exp.current && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-accent/20 text-accent border border-accent/30">
                      Actual
                    </span>
                  )}
                </div>

                <p className="text-sm font-medium text-accent mb-1">{exp.role}</p>
                <p className="text-xs text-muted mb-3">{exp.period}</p>

                {exp.tags && exp.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {exp.tags.map((tag, ti) => (
                      <span key={ti} className="text-xs font-mono px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <ul className="flex flex-col gap-1.5 mb-4">
                  {exp.highlights.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-400">
                      <span className="text-accent mt-0.5 flex-shrink-0">▸</span>
                      {point}
                    </li>
                  ))}
                </ul>

                {exp.projects && exp.projects.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">
                      Proyectos
                    </p>
                    <div className="flex flex-col gap-2">
                      {exp.projects.map((project, pi) => (
                        <div key={pi} className="bg-bg/60 rounded-lg px-3 py-2 border border-border">
                          {project.link ? (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs font-bold text-gray-100 hover:text-accent transition-colors"
                            >
                              {project.name}
                              <ExternalLink size={10} />
                            </a>
                          ) : (
                            <span className="text-xs font-bold text-gray-100">{project.name}</span>
                          )}
                          <p className="text-xs text-muted mt-0.5">{project.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
