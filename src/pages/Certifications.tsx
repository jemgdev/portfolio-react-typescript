import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

type Certification = {
  name: string
  issuer: string
  date: string
  logo: string
  featured?: boolean
  credentialUrl?: string
}

const certifications: Certification[] = [
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Jun 2025 · Válido hasta Jun 2028',
    logo: 'https://www.google.com/s2/favicons?domain=aws.amazon.com&sz=64',
    featured: true,
    credentialUrl: 'https://www.credly.com/badges/800f1043-f2fa-4341-b229-33713eb80029/linked_in_profile',
  },
  {
    name: 'Scrum Fundamentals Certified (SFC)',
    issuer: 'VMEdu / Vabro.ai',
    date: 'Nov 2022',
    logo: 'https://www.google.com/s2/favicons?domain=vmedulife.com&sz=64',
    credentialUrl: 'https://www.scrumstudy.com/certification/verify?type=SFC&number=953636',
  },
  {
    name: 'IBM Cloud Essentials V3',
    issuer: 'IBM',
    date: 'Ago 2022',
    logo: 'https://www.google.com/s2/favicons?domain=ibm.com&sz=64',
    credentialUrl: 'https://courses.cognitiveclass.ai/certificates/948cbeffaf2f4794a9ad386fcb2000f8',
  },
  {
    name: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    date: 'Jun 2020',
    logo: 'https://www.google.com/s2/favicons?domain=cisco.com&sz=64',
    credentialUrl: 'https://www.credly.com/badges/5f7ccd2d-ea14-4ec2-b031-6f998372a2de',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-gray-100 text-center mb-3">Certificaciones</h2>
        <p className="text-muted text-center text-sm mb-12">Credenciales que respaldan mi perfil técnico</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative bg-surface border rounded-xl p-5 flex flex-col gap-4 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/10 ${
                cert.featured
                  ? 'border-accent/50 shadow-md shadow-accent/10'
                  : 'border-border'
              }`}
            >
              {cert.featured && (
                <span className="absolute -top-2.5 left-4 text-xs font-mono bg-accent text-white px-2 py-0.5 rounded-full">
                  ⭐ Destacada
                </span>
              )}

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-lg p-1.5 flex-shrink-0 flex items-center justify-center">
                  <img
                    src={cert.logo}
                    alt={cert.issuer}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.currentTarget
                      target.style.display = 'none'
                      const parent = target.parentElement
                      if (parent) {
                        parent.classList.remove('bg-white')
                        parent.classList.add('bg-surface', 'border', 'border-border')
                        parent.innerHTML = `<span class="text-accent font-mono text-sm font-bold">${cert.issuer.slice(0, 2).toUpperCase()}</span>`
                      }
                    }}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-muted">{cert.issuer}</span>
                  <span className="text-xs text-muted/60">{cert.date}</span>
                </div>
              </div>

              <p className="text-gray-100 text-sm font-medium leading-snug flex-1">{cert.name}</p>

              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-accent hover:underline mt-auto"
                >
                  Ver credencial <ExternalLink size={11} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
