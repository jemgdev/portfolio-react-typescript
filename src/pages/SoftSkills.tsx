import { useEffect, useRef, useState } from 'react'
import { Element } from 'react-scroll'
import {
  Heading,
  Flex,
  Tooltip,
  Box,
  Text,
  SimpleGrid,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react'
import { 
  BsChatDots, 
  BsPeople,
  BsArrowRepeat, 
  BsDiagram3, 
  BsBook,
  BsPersonPlus
} from 'react-icons/bs'
import scrollReveal from 'scrollreveal'

export default function SoftSkills () {
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


  const softSkills = [
    {
      label: 'Comunicación',
      icon: <BsChatDots />,
      angle: 0,
      desc: 'Expreso ideas con claridad y escucho con atención.',
    },
    {
      label: 'Trabajo en equipo',
      icon: <BsPeople />,
      angle: 60,
      desc: 'Fomento la colaboración y el trabajo en equipo.',
    },
    {
      label: 'Liderazgo',
      icon: <BsPersonPlus />,
      angle: 120,
      desc: 'Empodero al equipo con mis conocimientos y tomo la iniciativa en pro de cumplir con los objetivos.',
    },
    {
      label: 'Adaptabilidad',
      icon: <BsArrowRepeat />,
      angle: 180,
      desc: 'Me adapto rápidamente a cambios y nuevos desafíos.',
    },
    {
      label: 'Pensamiento crítico',
      icon: <BsDiagram3 />,
      angle: 240,
      desc: 'Analizo situaciones y resuelvo problemas en base a la lógica.',
    },
    {
      label: 'Aprendizaje continuo',
      icon: <BsBook />,
      angle: 300,
      desc: 'Siempre busco aprender y mejorar mis habilidades.'
    }
  ]

  return (
    <Element name="soft-skills">
      <Flex direction="column" align="center" justify="center" px={2}>
        <Heading fontSize={{ base: 'xl', md: '2xl' }} fontWeight="semibold" textAlign="center" mb={8}>
          Y sobre todo
        </Heading>
        <SimpleGrid columns={{ base: 2, sm: 3, md: 3, lg: 3 }} spacing={{ base: 6, md: 10 }} maxW="5xl" w="full">
          {softSkills.map(({ label, icon, desc }) => {
            return (
              <Tooltip key={label} label={desc} hasArrow>
                <Flex
                  direction="column"
                  align="center"
                  bg={useColorModeValue('white', 'gray.700')}
                  borderRadius="lg"
                  shadow="md"
                  p={6}
                  transition="all 0.2s"
                  _hover={{ shadow: 'xl', transform: 'translateY(-4px)', bg: useColorModeValue('gray.50', 'gray.600') }}
                >
                  <Box fontSize="2xl" color={useColorModeValue('blue.600', 'blue.300')} mb={3}>
                    {icon}
                  </Box>
                  <Text fontWeight="semibold" fontSize="md" textAlign="center">
                    {label}
                  </Text>
                </Flex>
              </Tooltip>
            )}
          )}
        </SimpleGrid>
      </Flex>
    </Element>
  )
}