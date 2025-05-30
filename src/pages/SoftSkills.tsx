import { useEffect, useRef } from 'react'
import { Element } from 'react-scroll'
import {
  Heading,
  Flex,
  Tooltip,
  Box,
  Text
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
import { useColorModeValue } from '@chakra-ui/react'

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
  return (
    <Element name="soft-skills">
      <Flex direction="column" align="center" justify="center" py={{ base: 16, md: 24 }} px={6}>
        <Heading fontSize={{ base: 'xl', md: '2xl' }} fontWeight="semibold" textAlign="center">
          Y sobre todo
        </Heading>
        <Box position="relative" maxW="5xl" w="full" minH={{ base: '280px', md: '100px' }}>
          <Flex justify="center" align="center" position="relative" h="full">
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              w={{ base: '250px', md: '400px' }}
              h={{ base: '250px', md: '400px' }}
              borderRadius="full"
              border="2px dashed"
              borderColor={useColorModeValue('gray.300', 'gray.600')}
              pointerEvents="none"
              userSelect="none"
            />
            {[
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
            ].map(({ label, icon, angle, desc }) => {
              const radius = 180
              const rad = (angle * Math.PI) / 180
              const x = radius * Math.cos(rad)
              const y = radius * Math.sin(rad)

              return (
                <Tooltip key={label} label={desc} hasArrow>
                  <Box
                    position="absolute"
                    left="50%"
                    top="50%"
                    transform={`translate(-50%, -50%) translate(${x}px, ${y}px)`}
                    bg={useColorModeValue('white', 'gray.700')}
                    borderRadius="full"
                    shadow="md"
                    p={4}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    minW="90px"
                  >
                    <Box fontSize="2xl" mb={2} color={useColorModeValue('blue.600', 'blue.300')}>
                      {icon}
                    </Box>
                    <Text fontSize="md" fontWeight="semibold" textAlign="center" whiteSpace="nowrap">
                      {label}
                    </Text>
                  </Box>
                </Tooltip>
              )
            })}
          </Flex>
        </Box>
      </Flex>
    </Element>

  )
}