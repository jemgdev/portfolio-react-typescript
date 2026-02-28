import { useEffect, useState } from 'react'
import CardProject from '../components/CardProject'
import { getProjects } from '../services/projects'
import Project from '../types/Project'
import { ExternalLink, Code2, Loader2 } from 'lucide-react'

function ProjectSkeleton() {
  return (
    <div className="bg-surface border border-border rounded-xl overflow-hidden animate-pulse">
      <div className="w-full h-48 bg-border" />
      <div className="p-5">
        <div className="h-5 bg-border rounded w-1/2 mb-3" />
        <div className="flex gap-2 mb-3">
          <div className="h-4 bg-border rounded-full w-16" />
          <div className="h-4 bg-border rounded-full w-20" />
        </div>
        <div className="space-y-2">
          <div className="h-3 bg-border rounded w-full" />
          <div className="h-3 bg-border rounded w-4/5" />
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    getProjects()
      .then((data) => {
        setProjects(data)
        setIsLoaded(true)
      })
      .catch(() => {
        setError(true)
        setIsLoaded(true)
      })
  }, [])

  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-20">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-12">
        Proyectos destacados
      </h2>

      {error && (
        <p className="text-center text-muted text-sm">
          No se pudieron cargar los proyectos.
        </p>
      )}

      {!isLoaded && (
        <div className="flex flex-col gap-8">
          <div className="bg-surface border border-border rounded-xl overflow-hidden animate-pulse h-64" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ProjectSkeleton />
            <ProjectSkeleton />
          </div>
        </div>
      )}

      {isLoaded && !error && (
        <>
          {/* Featured card */}
          {featured && (
            <div
              className="rounded-xl overflow-hidden mb-8 flex flex-col md:flex-row bg-surface"
              style={{
                border: '1px solid transparent',
                backgroundImage:
                  'linear-gradient(#111827, #111827), linear-gradient(135deg, #4f8ef7, #4f8ef720)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
              }}
            >
              <img
                src={featured.img}
                alt={featured.description}
                className="w-full md:w-2/5 h-56 md:h-auto object-cover flex-shrink-0"
              />

              <div className="flex flex-col justify-between flex-1">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-bold text-2xl text-gray-100">{featured.title}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      {featured.category}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {featured.languages.map((language) => (
                      <span
                        key={language.name}
                        className="text-xs font-mono px-2 py-0.5 rounded-full bg-bg border border-border text-muted"
                      >
                        {language.name}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed">
                    {featured.description}
                  </p>
                </div>

                {(featured.link || featured.code) && (
                  <div className="px-6 pb-6 flex gap-3">
                    {featured.link && (
                      <a
                        href={featured.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent/90 transition-colors"
                      >
                        <ExternalLink size={14} />
                        Ver proyecto
                      </a>
                    )}
                    {featured.code && (
                      <a
                        href={featured.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 border border-border text-muted text-sm font-medium rounded-lg hover:border-accent/40 hover:text-gray-100 transition-colors"
                      >
                        <Code2 size={14} />
                        Código
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 2-column grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {rest.map((project) => (
              <CardProject key={project.title} {...project} />
            ))}
          </div>
        </>
      )}

      {!isLoaded && !error && (
        <div className="flex justify-center py-8">
          <Loader2 className="animate-spin text-accent" size={24} />
        </div>
      )}
    </section>
  )
}
