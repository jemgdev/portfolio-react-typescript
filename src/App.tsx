import Navbar from './components/Navbar'
import { Container } from '@chakra-ui/react'
import Projects from './pages/Projects'

export default function App () {
  return (
    <>
      <Navbar />
      <Container maxW='container.xl'>
        <Projects />
      </Container>
    </>
  )
}
