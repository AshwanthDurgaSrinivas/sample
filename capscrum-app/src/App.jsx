import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Founders from './components/Founders'
import TechStack from './components/TechStack'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function useScrollReveal() {
  useEffect(() => {
    const selectors = [
      '[data-reveal]',
      '[data-reveal-left]',
      '[data-reveal-right]',
      '[data-reveal-scale]',
      '[data-reveal-stagger]',
    ].join(',')

    const observe = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return
            entry.target.classList.add('is-visible')

            const ms = entry.target.getAttribute('data-reveal-stagger')
            if (ms) {
              Array.from(entry.target.children).forEach((child, i) => {
                child.style.transitionDelay = `${i * parseInt(ms)}ms`
                child.classList.add('stagger-item-visible')
              })
            }
            observer.unobserve(entry.target)
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
      )

      document.querySelectorAll(selectors).forEach((el) => observer.observe(el))
      return observer
    }

    // Slight delay so DOM is ready
    const timeout = setTimeout(() => {
      const obs = observe()
      return () => obs.disconnect()
    }, 100)

    return () => clearTimeout(timeout)
  }, [])
}

export default function App() {
  useScrollReveal()

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <div className="divider" />
        <About />
        <div className="divider" />
        <Services />
        <div className="divider" />
        <Projects />
        <div className="divider" />
        <Founders />
        <div className="divider" />
        <TechStack />
        <div className="divider" />
        <WhyUs />
        <div className="divider" />
        <Testimonials />
        <div className="divider" />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
