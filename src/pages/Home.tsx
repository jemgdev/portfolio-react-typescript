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
            Hola 👋, soy Josué Emmanuel Medina García
          </Heading>

          <Text
            fontSize={{ base: 'xl', md: '2xl' }}
            color={useColorModeValue('gray.700', 'gray.300')}
            ref={textDescriptionRef}
          >
            Senior Backend Developer con 5+ años de experiencia construyendo sistemas escalables con Node.js, NestJS y AWS. Especializado en arquitectura hexagonal, DDD y CQRS. AWS Certified — apasionado por llevar soluciones al siguiente nivel con tecnología de calidad.
          </Text>
        </Container>
      </Flex>
    </Element>

  )
}
