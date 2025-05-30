import { useRef, useEffect } from 'react'
import { 
  Text, 
  Container, 
  Flex,
  Heading
} from '@chakra-ui/react'
import { Element } from 'react-scroll'
import scrollReveal from 'scrollreveal'
import { useColorModeValue } from '@chakra-ui/react'

export default function Home () {
  const textNameRef = useRef<HTMLParagraphElement>(null)
  const textDescriptionRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    scrollReveal().reveal(textNameRef.current!, {
      origin: 'left',
      distance: '10%'
    })

    scrollReveal().reveal(textDescriptionRef.current!, {
      delay: 160,
      origin: 'left',
      distance: '30%'
    })
  }, [])

  return (
    <Element name="home">
      <Flex
        direction="column"
        align="center"
        justify="center"
        minH="100vh"
        px={4}
        textAlign="center"
      >
        <Container maxW="container.md">
          <Heading
            as="h1"
            fontSize={{ base: '3xl', md: '5xl' }}
            fontWeight="bold"
            mb={6}
            ref={textNameRef}
          >
            Hola, soy Josué Emmanuel Medina García
          </Heading>

          <Text
            fontSize={{ base: 'xl', md: '2xl' }}
            color={useColorModeValue('gray.700', 'gray.300')}
            ref={textDescriptionRef}
          >
            Desarrollador Backend especializado en Node.js con sólidos conocimientos en soluciones basadas en AWS. Tengo interés en formar parte en proyectos retadores, donde pueda utilizar todas mis habilidades para la creación de soluciones y llevarlas al siguiente nivel. Así poder mejorar la vida de las personas a través de la tecnología.
          </Text>
        </Container>
      </Flex>
    </Element>

  )
}
