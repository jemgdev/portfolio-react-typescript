import Project from '../types/Project'

export const getProjects = async (): Promise<Project[]> => {
  const response = await fetch(`${document.location.origin}${document.location.pathname}/projects.json`)
  const data: Project[] = await response.json()
  return data
}