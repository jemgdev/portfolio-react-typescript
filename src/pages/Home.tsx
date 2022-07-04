import { useRef, useEffect } from 'react'
import { 
  Text, 
  Container, 
  Flex,
  Center
} from '@chakra-ui/react'
import { Element } from 'react-scroll'
import scrollReveal from 'scrollreveal'

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
    <Element name='home'>
      <Flex direction='column' alignItems='center' justifyContent='center' minH='100vh'>
        <Container maxW='container.md'>
          <Text fontSize='4xl' ref={textNameRef} mb='4vh'>Hola, soy Josué Emmanuel Medina García</Text>
          <Text fontSize='xl' ref={textDescriptionRef}>Soy web developer full stack apasionado por el backend. Me encanta desarrollar sistemas con el fin de automatizar procesos en empresas de cualquier rubro.</Text>
        </Container>
      </Flex>
    </Element>
  )
}
