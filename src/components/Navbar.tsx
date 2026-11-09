import { Menu, Moon, Sun, X } from 'lucide-react'
import { useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Expertise' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#architecture', label: 'System design' },
]

type NavbarProps = {
  theme: 'light' | 'dark'
  onThemeToggle: () => void
}

function Navbar({ theme, onThemeToggle }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Gayatri Manvitha Jaladi — home">
          <span className="brand-mark" aria-hidden="true">G</span>
          <span>Gayatri <span className="brand-surname">Jaladi</span></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
        <div
          className="nav-links"
          id="primary-navigation"
          data-open={menuOpen}
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let’s talk
          </a>
          <button
            className="nav-theme"
            type="button"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            aria-pressed={theme === 'dark'}
            onClick={() => {
              closeMenu()
              onThemeToggle()
            }}
          >
            {theme === 'light' ? <Moon size={16} aria-hidden="true" /> : <Sun size={16} aria-hidden="true" />}
            <span className="theme-label">{theme === 'light' ? 'Dark' : 'Light'}</span>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
