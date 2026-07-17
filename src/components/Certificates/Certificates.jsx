import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Award, ExternalLink, ChevronDown } from 'lucide-react';
import useReveal from '../../hooks/useReveal';
import './Certificates.css';

const PROGRAMS = [
    {
        key: 'metaBackend',
        image: '/certs/meta-backend-developer.png',
        pdf: '/certs/meta-backend-developer.pdf',
        issuer: 'Meta · Coursera',
        date: '07/2026',
        count: 9,
        certs: [
            { name: 'Introduction to Back-End Development', pdf: '/certs/meta-intro-backend.pdf', image: '/certs/meta-intro-backend.png', date: '07/2026' },
            { name: 'Programming in Python', pdf: '/certs/meta-programming-python.pdf', image: '/certs/meta-programming-python.png', date: '07/2026' },
            { name: 'Version Control', pdf: '/certs/meta-version-control.pdf', image: '/certs/meta-version-control.png', date: '07/2026' },
            { name: 'Introduction to Databases for Back-End Development', pdf: '/certs/meta-databases.pdf', image: '/certs/meta-databases.png', date: '07/2026' },
            { name: 'Django Web Framework', pdf: '/certs/meta-django.pdf', image: '/certs/meta-django.png', date: '07/2026' },
            { name: 'APIs', pdf: '/certs/meta-apis.pdf', image: '/certs/meta-apis.png', date: '07/2026' },
            { name: 'The Full Stack', pdf: '/certs/meta-full-stack.pdf', image: '/certs/meta-full-stack.png', date: '07/2026' },
            { name: 'Back-End Developer Capstone', pdf: '/certs/meta-capstone.pdf', image: '/certs/meta-capstone.png', date: '07/2026' },
            { name: 'Coding Interview Preparation', pdf: '/certs/meta-coding-interview.pdf', image: '/certs/meta-coding-interview.png', date: '07/2026' },
        ],
    },
    {
        key: 'googlePrompting',
        image: '/certs/google-prompting-essentials.png',
        pdf: '/certs/google-prompting-essentials.pdf',
        issuer: 'Google · Coursera',
        date: '01/2026',
        count: 4,
        certs: [
            { name: 'Start Writing Prompts like a Pro', pdf: '/certs/google-writing-prompts.pdf', image: '/certs/google-writing-prompts.png', date: '01/2026' },
            { name: 'Design Prompts for Everyday Work Tasks', pdf: '/certs/google-design-prompts.pdf', image: '/certs/google-design-prompts.png', date: '01/2026' },
            { name: 'Speed Up Data Analysis and Presentation Building', pdf: '/certs/google-data-analysis.pdf', image: '/certs/google-data-analysis.png', date: '01/2026' },
            { name: 'Use AI as a Creative or Expert Partner', pdf: '/certs/google-ai-partner.pdf', image: '/certs/google-ai-partner.png', date: '01/2026' },
        ],
    },
    {
        key: 'bigSchool',
        image: '/certs/bigschool-desarrollo-ia.png',
        pdf: '/certs/bigschool-desarrollo-ia.pdf',
        issuer: 'BIG school',
        date: '01/2026',
        count: 0,
        certs: [],
    },
];

const ProgramCard = ({ program, t }) => {
    const [open, setOpen] = useState(false);
    const info = t.certs.programs[program.key];

    return (
        <div className="cert-program reveal">
            <a className="cert-program-media" href={program.pdf} target="_blank" rel="noopener noreferrer">
                <img src={program.image} alt={info.name} loading="lazy" />
                <span className="cert-view"><ExternalLink size={14} /> {t.certs.view}</span>
            </a>
            <div className="cert-program-body">
                <div className="cert-program-head">
                    <Award size={18} className="cert-award" />
                    <span className="cert-issuer">{program.issuer}</span>
                    <span className="cert-date">{program.date}</span>
                </div>
                <h3>{info.name}</h3>
                <p>{info.desc}</p>
                {program.certs.length > 0 && (
                    <button className="cert-toggle" onClick={() => setOpen(!open)}>
                        <ChevronDown size={16} className={open ? 'rotated' : ''} />
                        {open ? t.certs.hideCourses : `${t.certs.showCourses} (${program.count})`}
                    </button>
                )}
                {open && (
                    <ul className="cert-course-list">
                        {program.certs.map((c) => (
                            <li key={c.pdf}>
                                <a href={c.pdf} target="_blank" rel="noopener noreferrer">
                                    <span>{c.name}</span>
                                    <ExternalLink size={13} />
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

const Certificates = () => {
    const { t } = useLanguage();
    const ref = useReveal();

    return (
        <section id="certificates" className="section certificates-section" ref={ref}>
            <div className="container">
                <div className="reveal">
                    <span className="section-tag">03 · {t.nav.certificates}</span>
                    <h2 className="section-title">{t.certs.title} <span className="accent">&#10003;</span></h2>
                    <p className="certs-subtitle">{t.certs.subtitle}</p>
                </div>
                <div className="cert-programs">
                    {PROGRAMS.map((p) => (
                        <ProgramCard key={p.key} program={p} t={t} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
