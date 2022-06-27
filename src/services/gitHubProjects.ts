import IGitHubProject from '../models/IGitHubProject'

export const getProjects = async (): Promise<IGitHubProject[]> => {
  const response = await fetch(`${import.meta.env.VITE_GITHUB_API}`)
  const data: IGitHubProject[] = await response.json()
  return data
}