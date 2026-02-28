import { ExternalLink, Code2 } from 'lucide-react'
import Project from '../types/Project'

export default function CardProject({ code, description, languages, link, title, category, logo }: Project) {
  return (
    <div className="bg-surface border border-border rounded-xl overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-lg hover:shadow-black/40 hover:border-accent/30 transition-all duration-200">

      {/* Header visual sin imagen */}
      <div className="relative h-32 bg-gradient-to-br from-bg via-surface to-bg flex items-center justify-center border-b border-border">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, #4f8ef7 0%, transparent 50%), radial-gradient(circle at 80% 20%, #4f8ef7 0%, transparent 40%)'
        }} />
        {logo ? (
          <div className="w-16 h-16 bg-white rounded-2xl p-2 flex items-center justify-center shadow-lg z-10">
            <img src={logo} alt={title} className="w-full h-full object-contain" />
          </div>
        ) : (
          <div className="w-16 h-16 bg-bg border border-border rounded-2xl flex items-center justify-center z-10">
            <span className="text-accent font-mono text-xl font-bold">{title.slice(0, 2).toUpperCase()}</span>
          </div>
        )}
        <span className={`absolute top-3 right-3 text-xs px-2 py-0.5 rounded-full font-medium ${
          category === 'Profesional'
            ? 'bg-accent/20 text-accent border border-accent/30'
            : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
        }`}>
          {category}
        </span>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-bold text-lg text-gray-100 mb-3">{title}</h3>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {languages.map((language) => (
            <span
              key={language.name}
              className="text-xs font-mono px-2 py-0.5 rounded-full bg-bg border border-border text-muted"
            >
              {language.name}
            </span>
          ))}
        </div>

        <p className="text-sm text-gray-400 leading-relaxed flex-1">{description}</p>
      </div>

      {(link || code) && (
        <div className="px-5 pb-5 flex gap-3">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 border border-accent text-accent text-xs font-medium rounded-lg hover:bg-accent/10 transition-colors"
            >
              <ExternalLink size={13} />
              Ver proyecto
            </a>
          )}
          {code && (
            <a
              href={code}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 border border-border text-muted text-xs font-medium rounded-lg hover:border-accent/40 hover:text-gray-100 transition-colors"
            >
              <Code2 size={13} />
              Código
            </a>
          )}
        </div>
      )}
    </div>
  )
}
