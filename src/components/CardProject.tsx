import { ExternalLink, Code2 } from 'lucide-react'
import Project from '../types/Project'

export default function CardProject({ code, description, img, languages, link, title, category, logo }: Project) {
  return (
    <div className="bg-surface border border-border rounded-xl overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-lg hover:shadow-black/40 hover:border-accent/30 transition-all duration-200">
      <div className="relative">
        <img
          src={img}
          alt={description}
          className="w-full h-48 object-cover"
        />
        <span className={`absolute top-3 right-3 text-xs px-2 py-0.5 rounded-full font-medium ${
          category === 'Profesional'
            ? 'bg-accent/20 text-accent border border-accent/30'
            : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
        }`}>
          {category}
        </span>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center gap-3 mb-3">
          {logo && (
            <div className="w-8 h-8 bg-white rounded-lg p-1 flex-shrink-0 flex items-center justify-center">
              <img src={logo} alt={title} className="w-full h-full object-contain" />
            </div>
          )}
          <h3 className="font-bold text-lg text-gray-100">{title}</h3>
        </div>

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
