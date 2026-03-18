import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
          </div>
          <span className="text-xl font-black text-gray-900 tracking-tight">LinkSnip</span>
        </a>

        {/* Desktop Nav Links */}
        {/* <div className="hidden md:flex items-center gap-8">
          {['Features', 'Pricing', 'Docs', 'About'].map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors duration-200 relative group"
            >
              {link}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-indigo-500 rounded-full group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div> */}

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {/* <a
            href="#login"
            className="text-sm font-semibold text-gray-700 hover:text-indigo-600 transition-colors duration-200 px-4 py-2"
          >
            Login
          </a> */}
          <a
            href="#get-started"
            className="btn-primary bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
          >
            Get Started
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden glass-nav border-t border-indigo-100 transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 py-4 flex flex-col gap-4">
          {['Features', 'Pricing', 'Docs', 'About'].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">
              {link}
            </a>
          ))}
          <div className="flex gap-3 pt-2 border-t border-indigo-100">
            <a href="#login" className="text-sm font-semibold text-gray-700 px-4 py-2 border border-gray-300 rounded-xl hover:border-indigo-400 transition-colors">Login</a>
            <a href="#get-started" className="text-sm font-semibold text-white bg-indigo-600 px-4 py-2 rounded-xl hover:bg-indigo-700 transition-colors">Get Started</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
