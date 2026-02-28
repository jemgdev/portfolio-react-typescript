import { useEffect, useState, useRef } from 'react'
import CardProject from '../components/CardProject'
import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { getProjects } from '../services/projects'
import { Element } from 'react-scroll'
import Project from '../types/Project'
import CardProjectSkeleton from '../components/CardProjectSkeleton'
import { useToast } from '@chakra-ui/react'
import scrollReveal from 'scrollreveal'

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [isLoaded, setIsLoaded] = useState(false)
  const projectsRef = useRef<HTMLDivElement>(null)
  const toast = useToast()

  const featuredCardBg = useColorModeValue('white', 'gray.800')
  const featuredDescColor = useColorModeValue('gray.700', 'gray.300')
  const featuredFooterBg = useColorModeValue('gray.100', 'gray.700')

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
          reset: true,
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

  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <Element name="projects">
      <Heading
        textAlign="center"
        fontSize={{ base: '2xl', md: '3xl' }}
        fontWeight="semibold"
        mt="10vh"
        mb="5vh"
      >
        Proyectos destacados
      </Heading>

      <Box ref={projectsRef}>
        {isLoaded ? (
          <>
            {/* Featured card — full width, horizontal on md+ */}
            {featured && (
              <Box
                borderWidth="1px"
                borderRadius="xl"
                overflow="hidden"
                boxShadow="md"
                bg={featuredCardBg}
                mb={8}
                display="flex"
                flexDirection={{ base: 'column', md: 'row' }}
              >
                <Image
                  src={featured.img}
                  alt={featured.description}
                  objectFit="cover"
                  w={{ base: '100%', md: '45%' }}
                  h={{ base: '220px', md: 'auto' }}
                  flexShrink={0}
                />

                <Flex direction="column" justify="space-between" flex={1}>
                  <Box p={6}>
                    <Flex align="center" gap={3} mb={3}>
                      <Text fontWeight="bold" fontSize="2xl">
                        {featured.title}
                      </Text>
                      <Badge
                        colorScheme="green"
                        borderRadius="full"
                        px={2}
                        fontSize="xs"
                      >
                        {featured.category}
                      </Badge>
                    </Flex>

                    <Box display="flex" flexWrap="wrap" gap={2} mb={4}>
                      {featured.languages.map((language) => (
                        <Badge
                          key={language.name}
                          borderRadius="full"
                          px={2}
                          colorScheme={language.color}
                          fontSize="sm"
                        >
                          {language.name}
                        </Badge>
                      ))}
                    </Box>

                    <Text fontSize="md" color={featuredDescColor}>
                      {featured.description}
                    </Text>
                  </Box>

                  {(featured.link || featured.code) && (
                    <Box
                      bg={featuredFooterBg}
                      py={4}
                      px={6}
                      borderBottomRadius={{ base: 'xl', md: 'none' }}
                      borderBottomRightRadius="xl"
                    >
                      <Center>
                        <ButtonGroup spacing={3}>
                          {featured.link && (
                            <Button
                              as="a"
                              href={featured.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              colorScheme="blue"
                            >
                              Ver proyecto
                            </Button>
                          )}
                          {featured.code && (
                            <Button
                              as="a"
                              href={featured.code}
                              target="_blank"
                              rel="noopener noreferrer"
                              colorScheme="blue"
                            >
                              Código
                            </Button>
                          )}
                        </ButtonGroup>
                      </Center>
                    </Box>
                  )}
                </Flex>
              </Box>
            )}

            {/* 2-column grid for the rest */}
            <SimpleGrid columns={[1, 2]} gap={8}>
              {rest.map((project) => (
                <CardProject key={project.title} {...project} />
              ))}
            </SimpleGrid>
          </>
        ) : (
          <CardProjectSkeleton />
        )}
      </Box>
    </Element>
  )
}
