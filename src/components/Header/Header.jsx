import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Globe, Menu, X, Github, Linkedin } from 'lucide-react';
import './Header.css';

const SECTIONS = ['about', 'projects', 'certificates', 'contact'];

const Header = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 30);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (y / max) * 100 : 0);

      let current = '';
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) {
          current = id;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <a href="#" className="logo" onClick={closeMenu}>
          <img src="/Foto3.jpeg" alt="Daniel Dans Cots" className="logo-img" />
          <span className="logo-text">
            daniel<span className="logo-accent">.dans</span>
            <span className="logo-cursor">_</span>
          </span>
        </a>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          {SECTIONS.map((id, i) => (
            <a
              key={id}
              href={`#${id}`}
              className={`nav-link ${active === id ? 'active' : ''}`}
              onClick={closeMenu}
            >
              <span className="nav-index">0{i + 1}.</span> {t.nav[id]}
            </a>
          ))}
          <div className="nav-socials">
            <a href="https://github.com/danitechIA" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={18} /></a>
            <a href="https://www.linkedin.com/in/daniel-dans-cots-864aa53a7" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
          </div>
        </nav>

        <div className="header-actions">
          <button onClick={toggleLanguage} className="lang-toggle" aria-label="Change language">
            <Globe size={15} />
            {language.toUpperCase()}
          </button>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
    </header>
  );
};

export default Header;
