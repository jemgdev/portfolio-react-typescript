import { Text, Container, Flex } from '@chakra-ui/react'
import { Element } from 'react-scroll'

export default function Home () {
  return (
    <Element name='home'>
      <Flex direction='column' alignItems='center' justifyContent='center' minH='100vh'>
        <Text fontSize='4xl'>Hola, soy Josué Emmanuel Medina García</Text>
        <Container maxW='container.md' pt='3vh'>
          <Text fontSize='xl'>Soy web developer full stack apasionado por el backend. Me encanta desarrollar sistemas con el fin de automatizar procesos en empresas de cualquier rubro.</Text>
        </Container>
      </Flex>
    </Element>
  )
}
