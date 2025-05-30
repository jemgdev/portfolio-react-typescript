import Navbar from './components/Navbar'
import { Container } from '@chakra-ui/react'
import Projects from './pages/Projects'
import Home from './pages/Home'
import Skills from './pages/Skills'
import ContactMe from './pages/ContactMe'
import Footer from './components/Footer'
import SoftSkills from './pages/SoftSkills'

export default function App () {
  return (
    <>
      <Navbar />
      <Container maxW='container.xl'>
        <Home />
        <Projects />
        <Skills />
        <SoftSkills />
        <ContactMe />
      </Container>
      <Footer />
    </>
  )
}
