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
  highlights: string[]
  projects: ProjectEntry[]
}

const experiences: ExperienceEntry[] = [
  {
    client: 'Kasnet',
    consultora: 'via QDS',
    role: 'Senior Backend Developer · NestJS',
    period: 'Ene 2026 – Presente',
    current: true,
    highlights: [
      'Desarrollo de múltiples productos bancarios con NestJS y arquitectura hexagonal.',
      'Implementación de APIs RESTful con DDD, CQRS y patrones de diseño avanzados.',
      'Integración con servicios AWS y pipelines de CI/CD automatizados.',
    ],
    projects: [
      { name: 'Kasnet', description: 'Plataforma bancaria con múltiples productos financieros.', link: 'https://www.kasnet.com/' },
    ],
  },
  {
    client: 'PRAGMA',
    consultora: 'via PRAGMA',
    role: 'Senior L1 Backend Developer · Node.js',
    period: 'Ago 2025 – Dic 2025 · 5 meses',
    highlights: [
      'Implementación de AWS Bedrock para análisis automático de CVs con IA generativa.',
      'Integración con HubSpot para optimizar procesos de selección de talento.',
      'Definición de arquitectura AWS serverless con Terraform e IaC.',
    ],
    projects: [
      { name: 'CV Analyzer', description: 'Analizador de hojas de vida con IA. AWS Bedrock, Python, Terraform, HubSpot.' },
    ],
  },
  {
    client: 'Wally',
    consultora: 'via PRAGMA',
    role: 'Advanced L3 Backend Developer · Node.js',
    period: 'Oct 2024 – Dic 2024 · 3 meses',
    highlights: [
      'Desarrollo de servicios backend para billetera digital con Node.js y AWS.',
      'Implementación de microservicios escalables con arquitectura cloud-native.',
      'Integración con servicios financieros y pasarelas de pago.',
    ],
    projects: [
      { name: 'Wally', description: 'Billetera digital. Servicios backend con Node.js y AWS.', link: 'https://www.wally.tech/' },
    ],
  },
  {
    client: 'BAM – Banco Agromercantil',
    consultora: 'via PRAGMA',
    role: 'Advanced L3 / L1 Backend Developer · Node.js',
    period: 'Sep 2022 – Jun 2025 · 2 años 9 meses',
    highlights: [
      'Tech lead en migración completa de infraestructura on-premise a AWS.',
      'Desarrollo de múltiples productos bancarios digitales de alto impacto en Guatemala.',
      'Mentoría técnica a equipos de desarrollo y definición de arquitecturas cloud.',
      'Liderazgo técnico en proyectos con equipos multidisciplinarios y stakeholders del banco.',
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
    role: 'Junior L3 Backend Developer · Node.js',
    period: 'Mar 2023 · 1 mes',
    highlights: [
      'Desarrollo de microservicios de onboarding de clientes a la plataforma de fidelización.',
      'Integración con el ecosistema de puntos canjeables de Puntos Colombia.',
      'Rápida adaptación al stack técnico en un proyecto ya en marcha.',
    ],
    projects: [
      { name: 'Puntos Colombia', description: 'Plataforma de fidelización por puntos canjeables.', link: 'https://www.puntoscolombia.com/personas/inicio' },
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
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold text-gray-100 text-sm sm:text-base">{exp.client}</h3>
                    {exp.consultora && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-surface border border-border text-muted">
                        {exp.consultora}
                      </span>
                    )}
                  </div>
                  {exp.current && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-accent/20 text-accent border border-accent/30">
                      Actual
                    </span>
                  )}
                </div>

                <p className="text-sm font-medium text-accent mb-1">{exp.role}</p>
                <p className="text-xs text-muted mb-4">{exp.period}</p>

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
