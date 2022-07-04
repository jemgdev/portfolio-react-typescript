import { useEffect, useState, useRef } from 'react'
import CardProject from '../components/CardProject'
import { Text, SimpleGrid} from '@chakra-ui/react'
import { getProjects } from '../services/projects'
import { Element } from 'react-scroll'
import Project from '../models/IProject'
import CardProjectSkeleton from '../components/CardProjectSkeleton'
import { useToast } from '@chakra-ui/react'
import scrollReveal from 'scrollreveal'

export default function Projects () {
  const [projects, setProjects] = useState<Project[]>([])
  const [isLoaded, setIsLoaded] = useState(false)
  const projectsRef = useRef<HTMLDivElement>(null)
  const toast = useToast()

  const setStateProjects = async () => {
    try {
      setProjects(await getProjects())
      setIsLoaded(true)
      if (projectsRef.current) {
        scrollReveal().reveal(projectsRef.current, {
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
        description: 'Hubo un fallo al cargar los recursos de los proyectos.',
        status: 'error',
        duration: 3000,
        variant: 'top-accent',
        position: 'bottom',
        isClosable: true,
      })
    }
  }

  useEffect(() => {
    setStateProjects()
  }, [])
  
  return (
    <Element name='projects'>
      <Text align='center' fontSize={{ base: '3xl', md: '4xl' }} fontWeight='semibold' mt='10vh' mb='4vh'>Proyectos</Text>
      <SimpleGrid columns={[1, 2, 3]} gap={8} ref={projectsRef}>
        {
          isLoaded 
            ? projects.map(project => <CardProject key={project.title} {...project} />)
            : <CardProjectSkeleton />
        }
      </SimpleGrid>
    </Element>
  )
}