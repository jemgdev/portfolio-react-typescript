import { motion } from 'framer-motion'
import skillCategories from '../services/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-12">
        Mis habilidades más destacadas
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((category, ci) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: ci * 0.1 }}
            className="bg-surface border border-border rounded-xl p-5"
          >
            <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-full bg-bg border border-border text-gray-300 hover:border-accent/40 hover:text-gray-100 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
