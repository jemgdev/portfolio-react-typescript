import { useRef, useEffect } from 'react'
import { 
  Text, 
  Container, 
  Flex
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
          <Text fontSize={{ base: '4xl', md: '5xl' }} ref={textNameRef} mb='4vh' textAlign={'center'}>Hola, soy Josué Emmanuel Medina García</Text>
          <Text fontSize={{ base: '3xl', md: '2xl' }} ref={textDescriptionRef} textAlign={'center'}>Node.js Backend Developer con amplia experiencia en AWS. Apacionado por participar en proyectos desafiantes donde pueda aplicar mis capacidades para desarrollar soluciones que mejoren la vida de las personas mediante la tecnología.</Text>
        </Container>
      </Flex>
    </Element>
  )
}
