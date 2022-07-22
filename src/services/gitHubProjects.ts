import GitHubProject from '../types/GitHubProject'

export const getProjects = async (): Promise<GitHubProject[]> => {
  const response = await fetch(`${import.meta.env.VITE_GITHUB_API}`, {
    headers: {
      'Authorization': `token ${import.meta.env.VITE_GITHUB_API_KEY}`,
      'Accept': 'application/vnd.github.v3+json'
    }
  })
  const data: GitHubProject[] = await response.json()
  return data
}