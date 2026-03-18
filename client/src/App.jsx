import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CTASection from './components/CTASection'
import Features from './components/Features'
import Footer from './components/Footer'

export default function App() {
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
