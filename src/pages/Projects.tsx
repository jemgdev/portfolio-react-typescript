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
      <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-3">
        Proyectos Freelancer
      </h2>
      <p className="text-muted text-center text-sm mb-12">Proyectos propios actualmente en producción</p>

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
          {/* 2-column grid — all projects */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((project) => (
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
