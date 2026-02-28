import { motion } from 'framer-motion'
import { MessageCircle, Users, TrendingUp, RefreshCw, Brain, BookOpen } from 'lucide-react'

const softSkills = [
  {
    label: 'Comunicación',
    icon: MessageCircle,
    desc: 'Expreso ideas con claridad y escucho con atención.',
  },
  {
    label: 'Trabajo en equipo',
    icon: Users,
    desc: 'Fomento la colaboración y el trabajo en equipo.',
  },
  {
    label: 'Liderazgo',
    icon: TrendingUp,
    desc: 'Empodero al equipo con mis conocimientos y tomo la iniciativa en pro de cumplir los objetivos.',
  },
  {
    label: 'Adaptabilidad',
    icon: RefreshCw,
    desc: 'Me adapto rápidamente a cambios y nuevos desafíos.',
  },
  {
    label: 'Pensamiento crítico',
    icon: Brain,
    desc: 'Analizo situaciones y resuelvo problemas en base a la lógica.',
  },
  {
    label: 'Aprendizaje continuo',
    icon: BookOpen,
    desc: 'Siempre busco aprender y mejorar mis habilidades.',
  },
]

export default function SoftSkills() {
  return (
    <section id="soft-skills" className="py-20">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-12">
        Y sobre todo
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {softSkills.map(({ label, icon: Icon, desc }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="bg-surface border border-border rounded-xl p-5 hover:-translate-y-1 hover:border-accent/30 transition-all duration-200"
          >
            <Icon size={24} className="text-accent mb-3" />
            <h3 className="font-semibold text-gray-100 text-sm mb-1">{label}</h3>
            <p className="text-xs text-muted leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
