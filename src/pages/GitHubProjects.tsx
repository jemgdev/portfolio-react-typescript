import { useEffect, useState } from 'react'
import {
  Text,
  SimpleGrid
} from '@chakra-ui/react'
import { Element } from 'react-scroll'
import IGitHubProject from '../models/IGitHubProject'
import { getProjects } from '../services/gitHubProjects'
import CardGitHubProject from '../components/CardGitHubProject'

export default function GitHubProjects () {
  const [gitHubProjects, setGitHubProjects] = useState<IGitHubProject[]>([])

  const setStateGitHubProjects = async () => {
    setGitHubProjects(await getProjects())
  }

  useEffect(() => {
    setStateGitHubProjects()
  }, [])

  return (
    <Element name='github-projects'>
      <Text align='center' fontSize='3xl' fontWeight='semibold' mt='10vh' mb='4vh'>Proyectos de GitHub</Text>
      <SimpleGrid columns={[1, 2, 3]} gap={8}>
        {
          gitHubProjects.map(gitHubProject => (
            <CardGitHubProject key={gitHubProject.id} { ...gitHubProject } />
          ))
        }
      </SimpleGrid>
    </Element>
  )
}