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
import { IconType } from 'react-icons'
import scrollReveal from 'scrollreveal'

type SoftSkillCardProps = {
  label: string
  icon: ReturnType<IconType>
  desc: string
}

function SoftSkillCard({ label, icon, desc }: SoftSkillCardProps) {
  const isMobile = useBreakpointValue({ base: false, md: false })
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [clicked, setClicked] = useState(false)
  const bg = useColorModeValue('white', 'gray.700')
  const hoverBg = useColorModeValue('gray.50', 'gray.600')
  const iconColor = useColorModeValue('blue.600', 'blue.300')

  const handleClick = () => {
    if (isMobile) {
      if (clicked) {
        setClicked(false)
        onClose()
      } else {
        setClicked(true)
        onOpen()
      }
    }
  }

  const isTooltipOpen = isMobile ? clicked && isOpen : undefined

  return (
    <Tooltip
      label={desc}
      hasArrow
      isOpen={isTooltipOpen}
      closeOnClick={false}
      openDelay={isMobile ? 0 : 300}
    >
      <Flex
        direction="column"
        align="center"
        bg={bg}
        borderRadius="lg"
        shadow="md"
        p={6}
        transition="all 0.2s"
        _hover={{ shadow: 'xl', transform: 'translateY(-4px)', bg: hoverBg }}
        onClick={handleClick}
        cursor={isMobile ? 'pointer' : 'default'}
      >
        <Box fontSize="2xl" color={iconColor} mb={3}>
          {icon}
        </Box>
        <Text fontWeight="semibold" fontSize="md" textAlign="center">
          {label}
        </Text>
      </Flex>
    </Tooltip>
  )
}

export default function SoftSkills() {
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
      desc: 'Expreso ideas con claridad y escucho con atención.',
    },
    {
      label: 'Trabajo en equipo',
      icon: <BsPeople />,
      desc: 'Fomento la colaboración y el trabajo en equipo.',
    },
    {
      label: 'Liderazgo',
      icon: <BsPersonPlus />,
      desc: 'Empodero al equipo con mis conocimientos y tomo la iniciativa en pro de cumplir con los objetivos.',
    },
    {
      label: 'Adaptabilidad',
      icon: <BsArrowRepeat />,
      desc: 'Me adapto rápidamente a cambios y nuevos desafíos.',
    },
    {
      label: 'Pensamiento crítico',
      icon: <BsDiagram3 />,
      desc: 'Analizo situaciones y resuelvo problemas en base a la lógica.',
    },
    {
      label: 'Aprendizaje continuo',
      icon: <BsBook />,
      desc: 'Siempre busco aprender y mejorar mis habilidades.'
    }
  ]

  return (
    <Element name="soft-skills">
      <Flex direction="column" align="center" justify="center" px={2}>
        <Heading fontSize={{ base: 'xl', md: '2xl' }} fontWeight="semibold" textAlign="center" mb={8}>
          Y sobre todo
        </Heading>
        <SimpleGrid ref={skillsRef} columns={{ base: 2, sm: 3, md: 3, lg: 3 }} spacing={{ base: 6, md: 10 }} maxW="5xl" w="full">
          {softSkills.map(({ label, icon, desc }) => (
            <SoftSkillCard key={label} label={label} icon={icon} desc={desc} />
          ))}
        </SimpleGrid>
      </Flex>
    </Element>
  )
}
