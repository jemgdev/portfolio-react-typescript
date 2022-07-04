import Navbar from './components/Navbar'
import { Container } from '@chakra-ui/react'
import Projects from './pages/Projects'
import Home from './pages/Home'
import GitHubProjects from './pages/GitHubProjects'
import Skills from './pages/Skills'
import ContactMe from './pages/ContactMe'
import Footer from './components/Footer'

export default function App () {
  return (
    <>
      <Navbar />
      <Container maxW='container.xl'>
        <Home />
        <Projects />
        <GitHubProjects />
        <Skills />
        <ContactMe />
      </Container>
      <Footer />
    </>
  )
}
