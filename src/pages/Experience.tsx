import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

type ExperienceEntry = {
  company: string
  role: string
  period: string
  highlights: string[]
  current?: boolean
  projects?: { name: string; description: string; link?: string }[]
}

const experiences: ExperienceEntry[] = [
  {
    company: 'QDS - Quality & Development Software SAC',
    role: 'Senior Backend Developer Node.js',
    period: 'Ene 2026 – Presente',
    current: true,
    highlights: [
      'Desarrollo de servicios backend escalables con Node.js y TypeScript.',
      'Diseño e implementación de APIs RESTful con arquitectura hexagonal.',
      'Integración con servicios AWS y pipelines de CI/CD.',
    ],
    projects: [
      {
        name: 'Kasnet',
        description:
          'Plataforma bancaria con múltiples productos financieros. Backend con NestJS y arquitectura hexagonal.',
        link: 'https://www.kasnet.com/',
      },
    ],
  },
  {
    company: 'PRAGMA',
    role: 'Senior L1 Backend Developer',
    period: 'Ago 2025 – Dic 2025 · 5 meses',
    highlights: [
      'Integración con AWS Bedrock para soluciones de IA generativa.',
      'Desarrollo de conectores con HubSpot para automatización de CRM.',
      'Migración de arquitecturas monolíticas a hexagonal e IaC con Terraform.',
    ],
    projects: [
      {
        name: 'CV Analyzer',
        description:
          'Analizador de hojas de vida con IA usando AWS Bedrock, Python, Terraform e integración con HubSpot para el equipo de contratación.',
      },
      {
        name: 'Wally',
        description: 'Billetera digital. Desarrollo backend con Node.js y AWS.',
        link: 'https://www.wally.tech/',
      },
    ],
  },
  {
    company: 'PRAGMA',
    role: 'Advanced L3 Backend Developer',
    period: 'Sep 2023 – Ago 2025 · 2 años',
    highlights: [
      'Tech lead en migraciones cloud on-premise → AWS (ECS, Lambda, API Gateway).',
      'Mentoría técnica a desarrolladores junior y mid-level.',
      'Definición de arquitecturas con DDD, CQRS y Event-Driven en NestJS.',
    ],
    projects: [
      {
        name: 'Efecto BAM 2.0',
        description:
          'Plataforma de fidelización bancaria (reintegros, puntos, millas). Migración on-premise → AWS. Tech lead y desarrollo de múltiples APIs.',
        link: 'https://www.bam.com.gt/efecto-bam/',
      },
      {
        name: 'Extrafinanciamiento',
        description:
          'Línea de crédito adicional para tarjetahabientes de BAM. Liderazgo técnico y despliegue en ambientes dev/QA.',
        link: 'https://www.bam.com.gt/extrafinanciamiento/',
      },
      {
        name: 'Cuenta Fácil e Inversión Virtual',
        description:
          '4 productos digitales de bancarización para Guatemala. Desarrollo de componentes críticos de apertura de cuentas.',
        link: 'https://www.bam.com.gt/personas/cuentas/cuenta-facil/',
      },
    ],
  },
  {
    company: 'PRAGMA',
    role: 'Advanced L1 Backend Developer',
    period: 'Mar 2023 – Sep 2023 · 7 meses',
    highlights: [
      'Desarrollo de backoffice bancario y módulos de pagos con VISA Cybersource.',
      'Migración de sistemas legacy a microservicios Node.js.',
      'Implementación de arquitectura hexagonal en proyectos del sector financiero.',
    ],
    projects: [
      {
        name: 'Orkester',
        description:
          'Backoffice bancario de BAM. Mantenimiento evolutivo y nuevas APIs REST sobre plataforma en producción.',
      },
      {
        name: 'Adquirencia - Pago Inmediato',
        description:
          'Automatización del cierre de POS para negocios afiliados. Microservicios de conciliación y desembolso financiero.',
        link: 'https://www.bancolombia.com/empresas/productos-servicios/cash-management/recaudos/ventas-con-tarjeta',
      },
    ],
  },
  {
    company: 'PRAGMA',
    role: 'Junior L3 Backend Developer',
    period: 'Sep 2022 – Mar 2023 · 7 meses',
    highlights: [
      'Construcción de microservicios con NestJS para el sector bancario.',
      'Adopción de arquitectura hexagonal y patrones DDD en nuevos servicios.',
      'Integración con colas de mensajería SQS y eventos SNS en AWS.',
    ],
    projects: [
      {
        name: 'Crezcamos Aliados',
        description:
          'Programa de créditos para pequeños negocios de BAM. Microservicios serverless con arquitectura limpia y Jest.',
        link: 'https://www.bam.com.gt/personas/prestamos/bam-aliados/',
      },
      {
        name: 'Puntos Colombia',
        description:
          'Plataforma de fidelización por puntos. Microservicios de onboarding de clientes.',
        link: 'https://www.puntoscolombia.com/personas/inicio',
      },
    ],
  },
  {
    company: 'PROYECTO ESPECIAL BINACIONAL PUYANGO-TUMBES',
    role: 'Asistente de Soporte TI',
    period: 'Mar 2022 – Jun 2022 · 4 meses',
    highlights: [
      'Administración de Windows Server y SQL Server para servicios internos.',
      'Soporte técnico de redes y mantenimiento de infraestructura local.',
      'Gestión de usuarios y permisos en sistemas de la institución.',
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
                  <h3 className="font-semibold text-gray-100 text-sm sm:text-base">{exp.company}</h3>
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
