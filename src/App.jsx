import { useEffect } from 'react'
import Lenis from 'lenis'
import Header from './components/Header'
import Hero from './components/Hero'
import BackgroundElements from './components/BackgroundElements'
import ErrorBoundary from './components/ErrorBoundary'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  useEffect(() => {
    // Optimize Lenis configuration for better performance
    const lenis = new Lenis({
      duration: 1.0, // Reduced from 1.2
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 0.8, // Reduced from 1
      smoothTouch: false,
      touchMultiplier: 1.5, // Reduced from 2
      infinite: false,
    })

    let rafId
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
      lenis.destroy()
    }
  }, [])

  return (
    <ErrorBoundary>
      <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 font-sans min-h-screen flex flex-col overflow-x-hidden">
        <Header />
        <main className="flex-grow flex flex-col relative">
          <Hero />
          <About />
          <Services />
          <Projects />
          <Contact />
        </main>
        <BackgroundElements />
      </div>
    </ErrorBoundary>
  )
}

export default App