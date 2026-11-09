import { useEffect, useState } from 'react'
import About from './components/About'
import Architecture from './components/Architecture'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import './App.css'

type Theme = 'light' | 'dark'

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme')
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme
    }

    return 'dark'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  return (
    <>
      <Navbar
        theme={theme}
        onThemeToggle={() =>
          setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
        }
      />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Architecture />
        <Certifications />
        <Contact />
      </main>
      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Gayatri Manvitha Jaladi</span>
        <span>Java · Cloud · Systems</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  )
}

export default App
