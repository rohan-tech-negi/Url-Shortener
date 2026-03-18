import { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CTASection from './components/CTASection'
import Features from './components/Features'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })

    let raf
    function onFrame(time) {
      lenis.raf(time)
      raf = requestAnimationFrame(onFrame)
    }
    raf = requestAnimationFrame(onFrame)

    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <CTASection />
      <Features />
      <Footer />
    </div>
  )
}
