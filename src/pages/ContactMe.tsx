import { useState, ChangeEvent } from 'react'
import { Github, Linkedin, Mail, Copy, Check, Send } from 'lucide-react'
import Contact from '../types/Contact'
import sendEmail from '../services/sendEmail'

export default function ContactMe() {
  const initValues: Contact = { email: '', name: '', message: '' }
  const [form, setForm] = useState<Contact>(initValues)
  const [copied, setCopied] = useState(false)
  const [feedback, setFeedback] = useState<{ message: string; ok: boolean } | null>(null)
  const [sending, setSending] = useState(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('jemgdev@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSend = async () => {
    setSending(true)
    setFeedback(null)
    const response = await sendEmail(form)
    setFeedback({ message: response.message, ok: response.ok })
    if (response.ok) setForm(initValues)
    setSending(false)
  }

  return (
    <section id="contact-me" className="py-20">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-12">
        Contáctame
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
        {/* Left: contact info */}
        <div className="flex flex-col gap-6">
          <p className="text-gray-400 text-sm leading-relaxed">
            ¿Tienes un proyecto en mente o quieres hablar sobre oportunidades? Escríbeme y te respondo a la brevedad.
          </p>

          <div className="flex flex-col gap-4">
            <a
              href="mailto:jemgdev@gmail.com"
              className="flex items-center gap-3 text-sm text-gray-300 hover:text-accent transition-colors group"
            >
              <span className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center group-hover:border-accent/40 transition-colors">
                <Mail size={16} className="text-muted group-hover:text-accent transition-colors" />
              </span>
              jemgdev@gmail.com
            </a>

            <a
              href="https://github.com/jemgdev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-gray-300 hover:text-accent transition-colors group"
            >
              <span className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center group-hover:border-accent/40 transition-colors">
                <Github size={16} className="text-muted group-hover:text-accent transition-colors" />
              </span>
              github.com/jemgdev
            </a>

            <a
              href="https://www.linkedin.com/in/jemgdev/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-gray-300 hover:text-accent transition-colors group"
            >
              <span className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center group-hover:border-accent/40 transition-colors">
                <Linkedin size={16} className="text-muted group-hover:text-accent transition-colors" />
              </span>
              linkedin.com/in/jemgdev
            </a>
          </div>

          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-2 w-fit px-4 py-2 border border-border rounded-lg text-xs text-muted hover:border-accent/40 hover:text-gray-100 transition-colors"
          >
            {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
            {copied ? '¡Copiado!' : 'Copiar email'}
          </button>
        </div>

        {/* Right: form */}
        <div className="bg-surface border border-border rounded-xl p-6 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-muted uppercase tracking-wider">
              Nombre *
            </label>
            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              value={form.name}
              onChange={handleChange}
              className="bg-bg border border-border rounded-lg px-3 py-2 text-sm text-gray-100 placeholder-muted focus:outline-none focus:border-accent/60 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-muted uppercase tracking-wider">
              Email *
            </label>
            <input
              type="email"
              name="email"
              placeholder="tu@email.com"
              value={form.email}
              onChange={handleChange}
              className="bg-bg border border-border rounded-lg px-3 py-2 text-sm text-gray-100 placeholder-muted focus:outline-none focus:border-accent/60 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-muted uppercase tracking-wider">
              Mensaje *
            </label>
            <textarea
              name="message"
              placeholder="Escribe tu mensaje..."
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="bg-bg border border-border rounded-lg px-3 py-2 text-sm text-gray-100 placeholder-muted focus:outline-none focus:border-accent/60 transition-colors resize-none"
            />
          </div>

          {feedback && (
            <p className={`text-xs ${feedback.ok ? 'text-emerald-400' : 'text-red-400'}`}>
              {feedback.message}
            </p>
          )}

          <button
            onClick={handleSend}
            disabled={sending}
            className="flex items-center justify-center gap-2 px-4 py-2.5 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send size={14} />
            {sending ? 'Enviando...' : 'Enviar mensaje'}
          </button>
        </div>
      </div>
    </section>
  )
}
