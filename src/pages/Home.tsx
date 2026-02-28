import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, ArrowRight } from 'lucide-react'

const terminalLines = [
  { prompt: '>', command: 'whoami', output: '"Josué Emmanuel Medina García"' },
  { prompt: '>', command: 'role', output: '"Senior Backend Developer · AWS Certified"' },
  { prompt: '>', command: 'skills', output: '["Node.js", "NestJS", "AWS", "TypeScript", "Docker"]' },
  { prompt: '>', command: 'experience', output: '"5+ años en backend · Banca · Fintech · SaaS"' },
  { prompt: '>', command: 'status', output: '"Trabajando en QDS · Perú 🇵🇪"' },
]

function TerminalBlock() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    if (visibleLines >= terminalLines.length) return
    const timer = setTimeout(() => {
      setVisibleLines((v) => v + 1)
    }, 800)
    return () => clearTimeout(timer)
  }, [visibleLines])

  return (
    <div className="bg-[#0a0a0a] border border-border rounded-xl p-5 font-mono text-sm w-full max-w-md shadow-2xl">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-3 h-3 rounded-full bg-red-500" />
        <span className="w-3 h-3 rounded-full bg-yellow-500" />
        <span className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-2 text-muted text-xs">terminal</span>
      </div>

      {terminalLines.slice(0, visibleLines).map((line, i) => (
        <div key={i} className="mb-3">
          <div className="flex items-center gap-2">
            <span className="text-green-400">{line.prompt}</span>
            <span className="text-gray-100">{line.command}</span>
          </div>
          <div className="text-muted ml-4 mt-0.5">{line.output}</div>
        </div>
      ))}

      {visibleLines < terminalLines.length && (
        <div className="flex items-center gap-2">
          <span className="text-green-400">&gt;</span>
          <span className="w-2 h-4 bg-accent animate-pulse" />
        </div>
      )}
    </div>
  )
}

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center py-20">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col gap-5"
        >
          <span className="text-xs font-mono text-accent uppercase tracking-widest">
            Senior Backend Developer
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-100 leading-tight">
            Hola, soy <span className="text-accent">Josué</span>
          </h1>

          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-300">
            Medina García
          </h2>

          <p className="text-gray-400 leading-relaxed max-w-lg">
            Construyo sistemas backend escalables con <span className="text-gray-100">Node.js</span>, <span className="text-gray-100">NestJS</span> y <span className="text-gray-100">AWS</span>. Especializado en arquitectura hexagonal, DDD y CQRS — llevando soluciones al siguiente nivel.
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-2">
            <a
              href="#projects"
              className="flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent/90 transition-colors"
            >
              Ver proyectos
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact-me"
              className="px-5 py-2.5 border border-accent text-accent text-sm font-medium rounded-lg hover:bg-accent/10 transition-colors"
            >
              Contáctame
            </a>
          </div>

          <div className="flex items-center gap-4 mt-1">
            <a
              href="https://github.com/jemgdev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/jemgdev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="hidden lg:flex justify-center"
        >
          <TerminalBlock />
        </motion.div>
      </div>
    </section>
  )
}
