import { useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
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
        <a className="brand" href="#home" onClick={closeMenu}>
          Gayatri
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? '×' : '☰'}
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
          <a
            className="nav-contact"
            href="#contact"
            onClick={closeMenu}
          >
            Get in touch
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
            <span aria-hidden="true">{theme === 'light' ? '☾' : '☀'}</span>
            {theme === 'light' ? 'Dark mode' : 'Light mode'}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
