import IGitHubProject from '../models/IGitHubProject'

export const getProjects = async (): Promise<IGitHubProject[]> => {
  const response = await fetch(`${import.meta.env.VITE_GITHUB_API}`, {
    headers: {
      'Authorization': `token ${import.meta.env.VITE_GITHUB_API_KEY}`,
      'Accept': 'application/vnd.github.v3+json'
    }
  })
  const data: IGitHubProject[] = await response.json()
  return data
}