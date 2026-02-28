import { useEffect, useRef } from 'react'
import { Element } from 'react-scroll'
import {
  Box,
  Flex,
  Heading,
  Text,
  Badge,
  useColorModeValue,
  Circle,
  VStack,
} from '@chakra-ui/react'
import scrollReveal from 'scrollreveal'

type ExperienceEntry = {
  company: string
  role: string
  period: string
  highlights: string[]
  current?: boolean
}

const experiences: ExperienceEntry[] = [
  {
    company: 'QDS - Quality & Development Software SAC',
    role: 'Senior Backend Developer Node.js',
    period: 'Ene 2026 – Presente',
    current: true,
    highlights: [
      'Desarrollo de servicios backend escalables con Node.js y TypeScript.',
      'Diseño e implementación de APIs RESTful con arquitectura hexagonal.',
      'Integración con servicios AWS y pipelines de CI/CD.',
    ],
  },
  {
    company: 'PRAGMA',
    role: 'Senior L1 Backend Developer',
    period: 'Ago 2025 – Dic 2025 · 5 meses',
    highlights: [
      'Integración con AWS Bedrock para soluciones de IA generativa.',
      'Desarrollo de conectores con HubSpot para automatización de CRM.',
      'Migración de arquitecturas monolíticas a hexagonal e IaC con Terraform.',
    ],
  },
  {
    company: 'PRAGMA',
    role: 'Advanced L3 Backend Developer',
    period: 'Sep 2023 – Ago 2025 · 2 años',
    highlights: [
      'Tech lead en migraciones cloud on-premise → AWS (ECS, Lambda, API Gateway).',
      'Mentoría técnica a desarrolladores junior y mid-level.',
      'Definición de arquitecturas con DDD, CQRS y Event-Driven en NestJS.',
    ],
  },
  {
    company: 'PRAGMA',
    role: 'Advanced L1 Backend Developer',
    period: 'Mar 2023 – Sep 2023 · 7 meses',
    highlights: [
      'Desarrollo de backoffice bancario y módulos de pagos con VISA Cybersource.',
      'Migración de sistemas legacy a microservicios Node.js.',
      'Implementación de arquitectura hexagonal en proyectos del sector financiero.',
    ],
  },
  {
    company: 'PRAGMA',
    role: 'Junior L3 Backend Developer',
    period: 'Sep 2022 – Mar 2023 · 7 meses',
    highlights: [
      'Construcción de microservicios con NestJS para el sector bancario.',
      'Adopción de arquitectura hexagonal y patrones DDD en nuevos servicios.',
      'Integración con colas de mensajería SQS y eventos SNS en AWS.',
    ],
  },
  {
    company: 'PROYECTO ESPECIAL BINACIONAL PUYANGO-TUMBES',
    role: 'Asistente de Soporte TI',
    period: 'Mar 2022 – Jun 2022 · 4 meses',
    highlights: [
      'Administración de Windows Server y SQL Server para servicios internos.',
      'Soporte técnico de redes y mantenimiento de infraestructura local.',
      'Gestión de usuarios y permisos en sistemas de la institución.',
    ],
  },
]

export default function Experience() {
  const experienceRef = useRef<HTMLDivElement>(null)
  const lineColor = useColorModeValue('gray.200', 'gray.600')
  const dotInactiveBg = useColorModeValue('gray.200', 'gray.600')
  const cardBg = useColorModeValue('white', 'gray.700')
  const cardBorder = useColorModeValue('gray.100', 'gray.600')
  const metaColor = useColorModeValue('gray.500', 'gray.400')
  const bulletColor = useColorModeValue('gray.600', 'gray.300')

  useEffect(() => {
    if (experienceRef.current) {
      scrollReveal().reveal(experienceRef.current, {
        delay: 120,
        distance: '2em',
        origin: 'bottom',
        opacity: 0,
        reset: true,
      })
    }
  }, [])

  return (
    <Element name="experience">
      <Box py={{ base: 12, md: 16 }} px={{ base: 4, md: 8 }}>
        <Heading
          as="h2"
          textAlign="center"
          fontSize={{ base: '2xl', md: '3xl' }}
          fontWeight="semibold"
          mb={12}
        >
          Experiencia laboral
        </Heading>

        <Flex justify="center">
          <Box ref={experienceRef} w="full" maxW="3xl" position="relative">
            {/* Vertical line */}
            <Box
              position="absolute"
              left={{ base: '18px', md: '22px' }}
              top="0"
              bottom="0"
              w="2px"
              bg={lineColor}
            />

            <VStack spacing={8} align="stretch">
              {experiences.map((exp, index) => (
                <Flex key={index} gap={{ base: 4, md: 6 }} align="flex-start">
                  {/* Dot */}
                  <Circle
                    size={{ base: '38px', md: '46px' }}
                    bg={exp.current ? 'blue.500' : dotInactiveBg}
                    border="3px solid"
                    borderColor={exp.current ? 'blue.300' : lineColor}
                    flexShrink={0}
                    zIndex={1}
                  />

                  {/* Card */}
                  <Box
                    flex={1}
                    bg={cardBg}
                    border="1px solid"
                    borderColor={cardBorder}
                    borderRadius="lg"
                    p={{ base: 4, md: 5 }}
                    shadow="sm"
                    _hover={{ shadow: 'md' }}
                    transition="box-shadow 0.2s"
                  >
                    <Flex justify="space-between" align="flex-start" wrap="wrap" gap={2} mb={1}>
                      <Heading as="h3" fontSize={{ base: 'sm', md: 'md' }} fontWeight="semibold">
                        {exp.company}
                      </Heading>
                      {exp.current && (
                        <Badge colorScheme="blue" fontSize="xs" px={2} py={0.5} borderRadius="full">
                          Actual
                        </Badge>
                      )}
                    </Flex>

                    <Text fontSize={{ base: 'xs', md: 'sm' }} fontWeight="medium" color="blue.500" mb={1}>
                      {exp.role}
                    </Text>

                    <Text fontSize="xs" color={metaColor} mb={3}>
                      {exp.period}
                    </Text>

                    <VStack align="stretch" spacing={1}>
                      {exp.highlights.map((point, i) => (
                        <Flex key={i} gap={2} align="flex-start">
                          <Text color="blue.400" fontSize="xs" mt="2px" flexShrink={0}>▸</Text>
                          <Text fontSize={{ base: 'xs', md: 'sm' }} color={bulletColor}>
                            {point}
                          </Text>
                        </Flex>
                      ))}
                    </VStack>
                  </Box>
                </Flex>
              ))}
            </VStack>
          </Box>
        </Flex>
      </Box>
    </Element>
  )
}
