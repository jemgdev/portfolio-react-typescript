import Navbar from './components/Navbar'
import Projects from './pages/Projects'
import Home from './pages/Home'
import Skills from './pages/Skills'
import ContactMe from './pages/ContactMe'
import Footer from './components/Footer'
import SoftSkills from './pages/SoftSkills'
import Experience from './pages/Experience'

export default function App () {
  return (
    <div className="bg-bg text-gray-100 font-sans">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Home />
        <Experience />
        <Projects />
        <Skills />
        <SoftSkills />
        <ContactMe />
      </main>
      <Footer />
    </div>
  )
}
