import { useEffect, useRef } from 'react'
import { Element } from 'react-scroll'
import { 
  SimpleGrid,
  Heading,
  Flex,
  Image,
  Box,
  Text
} from '@chakra-ui/react'
import scrollReveal from 'scrollreveal'
import skills from '../services/skills'

export default function Skills () {
  const skillsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (skillsRef.current) {
      scrollReveal().reveal(skillsRef.current, {
        delay: 120,
        distance: '2em',
        origin: 'bottom',
        opacity: 0,
        reset: true
      })
    }
  }, [])
  return (
    <Element name="skills">
      <Box py={{ base: 12, md: 16 }} px={{ base: 4, md: 8 }}>
        <Heading
          as="h2"
          textAlign="center"
          fontSize={{ base: '2xl', md: '3xl' }}
          fontWeight="semibold"
          mb={10}
        >
          Mis habilidades más destacadas
        </Heading>

        <Flex justify="center">
          <SimpleGrid
            ref={skillsRef}
            columns={{ base: 2, sm: 3, md: 4 }}
            spacing={{ base: 8, md: 12, lg: 16 }}
          >
            {skills.map((skill) => (
              <Box key={skill.alt} textAlign="center">
                <Image
                  src={skill.src}
                  alt={skill.alt}
                  boxSize={{ base: '60px', md: '80px' }}
                  mx="auto"
                  transition="transform 0.2s"
                  _hover={{ transform: 'scale(1.1)' }}
                />
                <Text mt={2} fontSize="sm" color="gray.500">
                  {skill.alt}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Flex>
      </Box>
    </Element>

  )
}