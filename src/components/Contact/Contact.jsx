import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Mail, Linkedin, Github, MessageCircle, Copy, Check, Send, MapPin, ArrowUp } from 'lucide-react';
import useReveal from '../../hooks/useReveal';
import './Contact.css';

const EMAIL = 'ddctrabajocontacto@gmail.com';
const WHATSAPP_URL = 'https://wa.me/34637759861?text=' + encodeURIComponent('Hola Daniel, vi tu portafolio y me gustaría contactar contigo.');

const Contact = () => {
    const { t } = useLanguage();
    const ref = useReveal();
    const [copied, setCopied] = useState(false);
    const [sending, setSending] = useState(false);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
            setTimeout(() => setCopied(false), 2200);
        } catch {
            window.location.href = `mailto:${EMAIL}`;
        }
    };

    const channels = [
        { icon: <Mail size={20} />, label: 'Email', value: EMAIL, href: `mailto:${EMAIL}`, copy: true },
        { icon: <Linkedin size={20} />, label: 'LinkedIn', value: 'Daniel Dans Cots', href: 'https://www.linkedin.com/in/daniel-dans-cots-864aa53a7' },
        { icon: <Github size={20} />, label: 'GitHub', value: 'danitechIA', href: 'https://github.com/danitechIA' },
        { icon: <MessageCircle size={20} />, label: 'WhatsApp', value: t.contact.whatsappLabel, href: WHATSAPP_URL },
    ];

    return (
        <section id="contact" className="section contact-section" ref={ref}>
            <div className="container">
                <div className="reveal contact-header">
                    <span className="section-tag">03 · {t.nav.contact}</span>
                    <h2 className="section-title"><span className="accent">{t.contact.title}</span></h2>
                    <p className="contact-intro">{t.contact.intro}</p>
                </div>

                <div className="contact-grid">
                    <div className="contact-channels reveal reveal-left">
                        {channels.map(({ icon, label, value, href, copy }) => (
                            <div key={label} className="channel-card">
                                <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="channel-main">
                                    <span className="channel-icon">{icon}</span>
                                    <span className="channel-text">
                                        <span className="channel-label">{label}</span>
                                        <span className="channel-value">{value}</span>
                                    </span>
                                </a>
                                {copy && (
                                    <button className="channel-copy" onClick={copyEmail} aria-label="Copiar email">
                                        {copied ? <Check size={16} className="copied" /> : <Copy size={16} />}
                                    </button>
                                )}
                            </div>
                        ))}
                        <div className="channel-card channel-static">
                            <span className="channel-icon"><MapPin size={20} /></span>
                            <span className="channel-text">
                                <span className="channel-label">{t.contact.locationLabel}</span>
                                <span className="channel-value">Barcelona, España · {t.contact.remote}</span>
                            </span>
                        </div>
                    </div>

                    <form
                        className="contact-form reveal reveal-right"
                        action={`https://formsubmit.co/${EMAIL}`}
                        method="POST"
                        onSubmit={() => setSending(true)}
                    >
                        <input type="text" name="_honey" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_next" value="https://danitechia.vercel.app/?sent=true#contact" />
                        <input type="hidden" name="_subject" value="Nuevo mensaje desde el portfolio" />

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">{t.contact.name}</label>
                                <input type="text" id="name" name="name" required placeholder={t.contact.namePlaceholder} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">{t.contact.email}</label>
                                <input type="email" id="email" name="email" required placeholder="tu@email.com" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">{t.contact.message}</label>
                            <textarea id="message" name="message" rows="6" required placeholder={t.contact.messagePlaceholder}></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary form-submit" disabled={sending}>
                            {sending ? t.contact.sending : t.contact.send} <Send size={17} />
                        </button>
                    </form>
                </div>
            </div>

            <footer className="footer">
                <div className="container footer-content">
                    <p className="footer-text">
                        © {new Date().getFullYear()} Daniel Dans Cots — {t.contact.builtWith}
                        <span className="footer-stack"> React · Vite · CSS</span>
                    </p>
                    <button
                        className="back-to-top"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        aria-label="Volver arriba"
                    >
                        <ArrowUp size={18} />
                    </button>
                </div>
            </footer>
        </section>
    );
};

export default Contact;
