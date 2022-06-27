import IProject from '../models/IProject'

export const getProjects = async (): Promise<IProject[]> => {
  const response = await fetch(`${document.location.origin}${document.location.pathname}/projects.json`)
  const data: IProject[] = await response.json()
  return data
}