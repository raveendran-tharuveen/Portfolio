// src/pages/OnePage.jsx
import Navbar from '../components/Navbar'

// ✅ import the SECTION components
import Home from '../sections/Home'
import About from '../sections/About'
import Projects from '../sections/Projects'
import Experiences from '../sections/Experiences'
import Contact from '../sections/Contact'

export default function OnePage() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Experiences />
      <Contact />
    </>
  )
}

