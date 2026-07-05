import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowRight, Download, Github, Linkedin, Mail, ChevronDown, MapPin } from 'lucide-react';
import useTypewriter from '../../hooks/useTypewriter';
import './Hero.css';

const TERMINAL_LINES = [
    { prompt: true, text: 'whoami' },
    { cls: 'out', text: 'daniel_dans — full-stack & AI developer' },
    { prompt: true, text: 'ls ~/stack' },
    { cls: 'out', text: 'react/  python/  fastapi/  n8n/  llms/  vps/' },
    { prompt: true, text: './deploy.sh --production' },
    { cls: 'ok', text: '✓ 4 proyectos reales en producción 24/7' },
];

const Hero = () => {
    const { t, language } = useLanguage();
    const typed = useTypewriter(t.hero.roles);
    const cvFile = language === 'en' ? '/Daniel_Dans_CV_EN.pdf' : '/Daniel_Dans_CV_ES.pdf';

    return (
        <section className="hero">
            <div className="container hero-content">
                <div className="hero-left">
                    <div className="hero-badge reveal-init">
                        <span className="badge-dot" />
                        {t.hero.available}
                    </div>

                    <h1 className="hero-title reveal-init d1">
                        {t.hero.greeting} <span className="hero-name">Daniel Dans</span>
                    </h1>

                    <div className="hero-typed reveal-init d2">
                        <span className="typed-prefix">&gt;</span>
                        <span className="typed-text">{typed}</span>
                        <span className="typed-caret" />
                    </div>

                    <p className="hero-subtitle reveal-init d3">{t.hero.subtitle}</p>

                    <div className="hero-location reveal-init d3">
                        <MapPin size={14} /> Barcelona, España
                    </div>

                    <div className="hero-buttons reveal-init d4">
                        <a href="#projects" className="btn btn-primary">
                            {t.hero.viewWork} <ArrowRight size={18} />
                        </a>
                        <a href={cvFile} download className="btn btn-outline">
                            {t.hero.downloadCV} <Download size={18} />
                        </a>
                    </div>

                    <div className="hero-socials reveal-init d5">
                        <a href="https://github.com/danitechIA" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={20} /></a>
                        <a href="https://www.linkedin.com/in/daniel-dans-cots-864aa53a7" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
                        <a href="mailto:ddctrabajocontacto@gmail.com" aria-label="Email"><Mail size={20} /></a>
                    </div>
                </div>

                <div className="hero-right reveal-init d3">
                    <div className="terminal-card">
                        <div className="terminal-bar">
                            <span className="t-dot red" />
                            <span className="t-dot yellow" />
                            <span className="t-dot green" />
                            <span className="terminal-title">daniel@vps: ~/portfolio</span>
                        </div>
                        <div className="terminal-body">
                            {TERMINAL_LINES.map((line, i) => (
                                <div key={i} className={`t-line ${line.cls || ''}`} style={{ animationDelay: `${0.5 + i * 0.45}s` }}>
                                    {line.prompt && <span className="t-prompt">❯ </span>}
                                    {line.text}
                                </div>
                            ))}
                            <div className="t-line t-cursor-line" style={{ animationDelay: `${0.5 + TERMINAL_LINES.length * 0.45}s` }}>
                                <span className="t-prompt">❯ </span>
                                <span className="typed-caret" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <a href="#about" className="scroll-indicator" aria-label="Scroll">
                <ChevronDown size={22} />
            </a>
        </section>
    );
};

export default Hero;
