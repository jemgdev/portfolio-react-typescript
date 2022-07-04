import { useEffect, useState, useRef } from 'react'
import {
  Text,
  SimpleGrid
} from '@chakra-ui/react'
import { Element } from 'react-scroll'
import IGitHubProject from '../models/IGitHubProject'
import { getProjects } from '../services/gitHubProjects'
import CardGitHubProject from '../components/CardGitHubProject'
import { useToast } from '@chakra-ui/react'
import scrollReveal from 'scrollreveal'
import CardGitHubProjectSkeleton from '../components/CardGitHubProjectSkeleton'

export default function GitHubProjects () {
  const [gitHubProjects, setGitHubProjects] = useState<IGitHubProject[]>([])
  const gitHubProjectsRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const toast = useToast()

  const setStateGitHubProjects = async () => {
    try {
      setGitHubProjects(await getProjects())
      setIsLoaded(!isLoaded)
      if (gitHubProjectsRef.current) {
        scrollReveal().reveal(gitHubProjectsRef.current, {
          delay: 120,
          distance: '2em',
          origin: 'bottom',
          opacity: 0,
          reset: true
        })
      }
    } catch (error) {
      toast({
        title: 'Error del servidor',
        description: 'Hubo un fallo al cargar los recursos de GitHub.',
        status: 'error',
        duration: 3000,
        variant: 'top-accent',
        position: 'bottom',
        isClosable: true,
      })
    }
  }

  useEffect(() => {
    setStateGitHubProjects()
  }, [])

  return (
    <Element name='github-projects'>
      <Text align='center' fontSize={{ base: '3xl', md: '4xl' }} fontWeight='semibold' mt='10vh' mb='4vh'>Proyectos de GitHub</Text>
      <SimpleGrid columns={[1, 2, 3]} gap={8} ref={gitHubProjectsRef}>
        {
          isLoaded 
            ? gitHubProjects.map(gitHubProject => <CardGitHubProject key={gitHubProject.id} { ...gitHubProject } />)
            : <CardGitHubProjectSkeleton />
        }
      </SimpleGrid>
    </Element>
  )
}