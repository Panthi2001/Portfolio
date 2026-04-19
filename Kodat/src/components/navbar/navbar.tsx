import { useState, useEffect } from 'react'
import './navbar.css'

// move links to an array so you don't repeat yourself (DRY principle)
const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Project', href: '#project' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <a href="#home" className="navbar__logo">KP</a>

      {/* Desktop: always visible */}
      <ul className="navbar__links">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="navbar__link">{link.label}</a>
          </li>
        ))}
      </ul>

      {/* Mobile: hamburger button */}
      <button
        className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile: dropdown links */}
      <ul className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        {navLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="navbar__link"
              onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar