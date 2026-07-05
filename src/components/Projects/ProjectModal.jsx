import React, { useEffect } from 'react';
import { X, Github, ExternalLink, CheckCircle, GitBranch } from 'lucide-react';
import './ProjectModal.css';

const ProjectModal = ({ project, isOpen, onClose, t }) => {
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleEsc);
        }

        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleEsc);
        };
    }, [isOpen, onClose]);

    if (!isOpen || !project) return null;

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) onClose();
    };

    return (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
            <div className="modal-content">
                <button className="modal-close-btn" onClick={onClose} aria-label={t.projects.close}>
                    <X size={18} />
                </button>

                <div className="modal-header">
                    <h2 className="modal-title">{project.title}</h2>
                    <div className="modal-tech-stack">
                        {project.tech.map((tech) => (
                            <span key={tech} className="tech-tag">{tech}</span>
                        ))}
                    </div>
                </div>

                <div className="modal-body">
                    {project.screenshot && (
                        <div className="modal-screenshot-wrap">
                            <img src={project.screenshot} alt={project.title} className="modal-screenshot" />
                        </div>
                    )}

                    <p className="project-description-full">{project.fullDesc}</p>

                    {project.workflow && (
                        <div className="modal-section">
                            <h3 className="modal-section-title"><GitBranch size={17} /> {t.projects.workflowTitle}</h3>
                            <div className="workflow-steps">
                                {project.workflow.map((step, index) => (
                                    <div key={index} className="workflow-step">
                                        <span className="step-number">{index + 1}</span>
                                        <p>{step}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {project.features && (
                        <div className="modal-section">
                            <h3 className="modal-section-title"><CheckCircle size={17} /> {t.projects.featuresTitle}</h3>
                            <div className="feature-list">
                                {project.features.map((feature, index) => (
                                    <div key={index} className="feature-item">
                                        <h4>{feature.title}</h4>
                                        <p>{feature.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="modal-footer">
                    {project.demoLink && (
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                            <ExternalLink size={17} /> {project.technicalDocLabel || project.demoLinkLabel || 'Demo'}
                        </a>
                    )}
                    {project.repoLink && (
                        <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            <Github size={17} /> GitHub
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
