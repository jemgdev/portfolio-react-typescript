import { useEffect, useState } from 'react'
import CardProject from '../components/CardProject'
import { Text, SimpleGrid} from '@chakra-ui/react'
import { getProjects } from '../services/projects'
import { Element } from 'react-scroll'
import Project from '../models/Project'

export default function Projects () {
  const [projects, setProjects] = useState<Project[]>([])

  const setStateProjects = async () => {
    setProjects(await getProjects())
  }

  useEffect(() => {
    setStateProjects()
  }, [])
  
  return (
    <Element name='projects'>
      <Text align='center' fontSize='3xl' fontWeight='semibold' mt='10vh' mb='4vh'>Proyectos</Text>
      <SimpleGrid columns={[2, null, 3]} gap={6}>
        {
          projects.map(project => <CardProject key={project.title} {...project} />)
        }
      </SimpleGrid>
      
    </Element>
  )
}