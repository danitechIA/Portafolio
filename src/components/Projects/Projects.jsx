import React, { useState, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ExternalLink, Github, Eye, ArrowUpRight } from 'lucide-react';
import ProjectModal from './ProjectModal';
import useReveal from '../../hooks/useReveal';
import './Projects.css';

const TiltCard = ({ children, className, onClick }) => {
    const ref = useRef(null);

    const handleMove = (e) => {
        const el = ref.current;
        if (!el || window.matchMedia('(pointer: coarse)').matches) return;
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        el.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg) translateY(-4px)`;
        el.style.setProperty('--mx', `${(x + 0.5) * 100}%`);
        el.style.setProperty('--my', `${(y + 0.5) * 100}%`);
    };

    const handleLeave = () => {
        if (ref.current) ref.current.style.transform = '';
    };

    return (
        <div ref={ref} className={className} onMouseMove={handleMove} onMouseLeave={handleLeave} onClick={onClick}>
            {children}
        </div>
    );
};

const Projects = () => {
    const { t } = useLanguage();
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const ref = useReveal();

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    const projects = [
        {
            ...t.projects.skillgenProject,
            tech: ['Tauri', 'Rust', 'Tokio', 'JavaScript', 'HTML/CSS'],
            status: t.projects.statusLive,
        },
        {
            ...t.projects.tiktokaiProject,
            tech: ['FastAPI', 'Python', 'ffmpeg', 'Groq', 'Whisper', 'Llama 3.1'],
            status: t.projects.statusLive,
        },
        {
            ...t.projects.skeyndorProject,
            tech: ['React', 'Vite', 'GSAP', 'Vercel', 'SEO', 'GA4'],
            status: t.projects.statusLive,
        },
        {
            ...t.projects.n8nProject,
            tech: ['n8n', 'Docker', 'VPS', 'MySQL', 'OpenAI'],
            status: t.projects.statusLive,
            repoLink: 'https://github.com/danitechIA/n8n_tikets',
        },
    ];

    return (
        <section id="projects" className="section projects-section" ref={ref}>
            <div className="container">
                <div className="projects-header reveal">
                    <span className="section-tag">02 · {t.nav.projects}</span>
                    <h2 className="section-title">{t.projects.title.split(' ')[0]} <span className="accent">{t.projects.title.split(' ').slice(1).join(' ')}</span></h2>
                    <p className="projects-subtitle">{t.projects.subtitle}</p>
                </div>

                <div className="projects-list">
                    {projects.map((project, index) => (
                        <div key={index} className={`project-row reveal ${index % 2 ? 'reversed' : ''}`}>
                            <TiltCard className="project-visual" onClick={() => openModal(project)}>
                                <div className="project-visual-inner">
                                    <img src={project.thumbnail} alt={project.title} loading="lazy" />
                                    <div className="project-visual-overlay">
                                        <span className="overlay-cta"><Eye size={18} /> {t.projects.viewDetails}</span>
                                    </div>
                                    <div className="visual-shine" />
                                </div>
                            </TiltCard>

                            <div className="project-info">
                                <div className="project-meta">
                                    <span className="project-number">0{index + 1}</span>
                                    <span className="project-status">
                                        <span className="status-dot" /> {project.status}
                                    </span>
                                </div>
                                <h3 className="project-title" onClick={() => openModal(project)}>
                                    {project.title}
                                    <ArrowUpRight size={20} className="title-arrow" />
                                </h3>
                                <p className="project-description">{project.shortDesc}</p>
                                <div className="project-tech">
                                    {project.tech.map((tech) => (
                                        <span key={tech} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <button className="btn btn-outline btn-sm" onClick={() => openModal(project)}>
                                        <Eye size={15} /> {t.projects.viewDetails}
                                    </button>
                                    {project.demoLink && (
                                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                                            <ExternalLink size={15} /> {project.demoLinkLabel || t.projects.viewDemo}
                                        </a>
                                    )}
                                    {project.repoLink && (
                                        <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                                            <Github size={15} /> {t.projects.viewCode}
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="projects-cta reveal">
                    <p>{t.projects.moreOnGithub}</p>
                    <a href="https://github.com/danitechIA" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        <Github size={18} /> github.com/danitechIA
                    </a>
                </div>
            </div>

            <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={closeModal} t={t} />
        </section>
    );
};

export default Projects;
