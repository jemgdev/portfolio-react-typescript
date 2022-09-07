import ResponseGitHubProject from '../types/ResposeGitHubProject'

export const getProjects = async (): Promise<ResponseGitHubProject> => {
  const response = await fetch(`${import.meta.env.VITE_GITHUB_API}`, {
    headers: {
      'Authorization': `token ${import.meta.env.VITE_GITHUB_API_KEY}`,
      'Accept': 'application/vnd.github.v3+json'
    }
  })
  const data = await response.json()
  if (data.message) {
    return {
      gitHubProjects: [],
      message: data.message
    }
  }
  return {
    gitHubProjects: data,
    message: 'ok'
  }
}