import { useState, useEffect } from 'react'

const navItems = [
  { label: 'Features', id: 'features' },
  { label: 'How It Works', id: 'howitworks' },
  { label: 'FAQ', id: 'faq' },
  { label: 'CTA', id: 'cta' },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black bg-opacity-90 shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center text-white">
        {/* Logo */}
       <h1
          className="text-xl font-bold cursor-pointer flex items-center gap-2"
          onClick={() => scrollToSection('hero')}
      >
        <img
          src="/og-image.png"
          alt="logo"
          className="w-9 h-9 border-4 rounded-lg logo-pulse hover:rotate-12 hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_4px_rgba(255,165,0,0.4)] hover:drop-shadow-[0_0_8px_rgba(255,165,0,0.8)]"
        />
        SSM Bot
      </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-base font-medium">
          {navItems.map(({ label, id }) => (
            <li
              key={id}
              className="cursor-pointer hover:text-orange-400 transition-colors duration-200"
              onClick={() => scrollToSection(id)}
            >
              {label}
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl font-extrabold focus:outline-none text-white"
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="md:hidden bg-black bg-opacity-95 px-6 py-4 text-center space-y-4 text-white text-base font-medium">
          {navItems.map(({ label, id }) => (
            <li
              key={id}
              className="cursor-pointer hover:text-orange-400 transition-colors duration-200"
              onClick={() => scrollToSection(id)}
            >
              {label}
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navbar
