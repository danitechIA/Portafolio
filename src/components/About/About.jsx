import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Code2, Server, Bot, Database } from 'lucide-react';
import useReveal from '../../hooks/useReveal';
import useCountUp from '../../hooks/useCountUp';
import './About.css';

const SKILL_GROUPS = [
    {
        icon: Code2,
        key: 'frontend',
        skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Vite', 'GSAP'],
    },
    {
        icon: Server,
        key: 'backend',
        skills: ['Python', 'FastAPI', 'Java', 'C# / .NET', 'Spring Boot', 'Node.js', 'REST APIs'],
    },
    {
        icon: Bot,
        key: 'ai',
        skills: ['LLMs (Groq, Cerebras, Gemini)', 'Whisper', 'n8n', 'Prompt Engineering', 'OpenAI API'],
    },
    {
        icon: Database,
        key: 'infra',
        skills: ['MySQL', 'PostgreSQL', 'SQLite', 'Docker', 'VPS / Linux', 'systemd', 'Bash', 'Git / GitHub', 'Vercel CI/CD', 'Odoo'],
    },
];

const MARQUEE = [
    'React', 'Python', 'FastAPI', 'JavaScript', 'Docker', 'n8n', 'LLMs', 'MySQL',
    'PostgreSQL', 'Java', 'C#', 'Spring Boot', 'GSAP', 'Vite', 'Linux', 'Git', 'ffmpeg', 'Whisper',
];

const Stat = ({ end, suffix, label }) => {
    const [ref, value] = useCountUp(end);
    return (
        <div className="stat" ref={ref}>
            <span className="stat-value">{value}{suffix}</span>
            <span className="stat-label">{label}</span>
        </div>
    );
};

const About = () => {
    const { t } = useLanguage();
    const ref = useReveal();

    return (
        <section id="about" className="section about-section" ref={ref}>
            <div className="container">
                <div className="reveal">
                    <span className="section-tag">01 · {t.nav.about}</span>
                    <h2 className="section-title">{t.about.title} <span className="accent">&lt;/&gt;</span></h2>
                </div>

                <div className="about-grid">
                    <div className="about-image-container reveal reveal-left">
                        <div className="about-image-frame">
                            <img src="/foto4.jpeg" alt="Daniel Dans Cots" className="about-profile-img" />
                        </div>
                        <div className="about-stats">
                            <Stat end={4} suffix="" label={t.about.statProjects} />
                            <Stat end={3} suffix="" label={t.about.statServices} />
                            <Stat end={20} suffix="+" label={t.about.statTech} />
                        </div>
                    </div>

                    <div className="about-text reveal reveal-right">
                        <p>{t.about.p1}</p>
                        <p>{t.about.p2}</p>
                        <p className="about-highlight">{t.about.p3}</p>
                    </div>
                </div>

                <div className="skill-groups">
                    {SKILL_GROUPS.map((group, i) => {
                        const Icon = group.icon;
                        return (
                            <div className="skill-group reveal" style={{ '--reveal-delay': `${i * 0.1}s` }} key={group.key}>
                                <div className="skill-group-header">
                                    <span className="skill-group-icon"><Icon size={20} /></span>
                                    <h3>{t.about.skillGroups[group.key]}</h3>
                                </div>
                                <div className="skills-container">
                                    {group.skills.map((skill) => (
                                        <span key={skill} className="skill-tag">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="marquee" aria-hidden="true">
                <div className="marquee-track">
                    {[...MARQUEE, ...MARQUEE].map((item, i) => (
                        <span key={i} className="marquee-item">{item} <span className="marquee-sep">◆</span></span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
