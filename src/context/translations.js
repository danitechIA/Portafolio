export const translations = {
    es: {
        nav: {
            about: "Sobre Mí",
            projects: "Proyectos",
            contact: "Contacto",
        },
        hero: {
            title: "Desarrollando Experiencias Digitales",
            subtitle: "Soy Daniel un desarrollador apasionado por crear aplicaciones modernas y soluciones automatizadas.",
            viewWork: "Ver Proyectos",
            downloadCV: "Descargar CV",
        },
        about: {
            title: "Sobre Mí",
            p1: "Soy un desarrollador dedicado con pasión por construir aplicaciones eficientes, escalables y amigables. Mi trayectoria en tecnología ha sido impulsada por la curiosidad y el deseo de resolver problemas del mundo real a través del código.",
            p2: "Cuento con una amplia experiencia tanto en Back-end como en Front-end, bases de datos y desarrollo de APIs. Además, me especializo en la automatización de procesos y optimización de flujos de trabajo, integrando también soluciones de Inteligencia Artificial (IA) en mis proyectos.",
        },
        projects: {
            title: "Proyectos Destacados",
            subtitle: "Estos son algunos de mis trabajos recientes.",
            viewDemo: "Ver Demo",
            viewCode: "Ver Código",
            viewDetails: "Ver Detalles",
            close: "Cerrar",
            n8nProject: {
                title: "Analizador de Tickets con IA y n8n",
                shortDesc: "Automatización inteligente para procesar tickets, extraer datos con IA y organizar finanzas.",
                fullDesc: "Extrae automáticamente la información clave de tus tickets y facturas a partir de una simple foto.\n\nOrganiza tus documentos en carpetas y guarda todos los datos para tener tus gastos siempre bajo control.\n\nDetecta tickets repetidos para evitar errores y asegura que toda tu contabilidad esté siempre al día.",
                workflow: [
                    "Subida de imagen del ticket/factura",
                    "Análisis con IA (Visión) para extracción de datos",
                    "Almacenamiento en base de datos MySQL (Docker)",
                    "Generación y actualización de Excel/Google Sheets",
                    "Clasificación automática en Google Drive por fecha",
                    "Detección de duplicados y notificación de errores"
                ],
                features: [
                    { title: "Infraestructura VPS", desc: "Desplegado en VPS con Docker y Let's Encrypt SSL." },
                    { title: "Seguridad y Backups", desc: "Certificados SSL automáticos y copias de seguridad completas (.tar.gz)." },
                    { title: "Extracción IA", desc: "Identifica automáticamente importes, fechas y nombres de empresas." },
                    { title: "Gestión de Datos", desc: "Guarda registros históricos en MySQL y Excel para contabilidad." }
                ],
                demoLink: "https://github.com/danistrix63/n8n_tikets/blob/main/DEMO.md",
                technicalDocLabel: "Ver Guía Técnica",
                thumbnail: "/n8n-thumbnail.png",
                screenshot: "/n8n-workflow.png"
            },
            skeyndorProject: {
                title: "Estética Carme Cots — Web para Centro de Belleza",
                shortDesc: "Rediseño completo de la web de un centro de estética real, con animaciones GSAP, SEO técnico y despliegue en producción.",
                fullDesc: "Rediseño y desarrollo completo de la web de Estética Carme Cots, centro colaborador oficial de Skeyndor en Barcelona.\n\nPartiendo de una web básica, se rehizo el diseño entero: animaciones fluidas con GSAP y ScrollTrigger, curación y edición de fotografía real del centro, y una sección de reseñas fiel a las opiniones reales de clientas.\n\nSe desplegó en Vercel con dominio propio, integración continua desde GitHub, y una configuración completa de SEO técnico (sitemap, datos estructurados schema.org, Open Graph) además de Google Search Console, Tag Manager y Analytics para medir tráfico real.",
                workflow: [
                    "Auditoría y rediseño completo de UI/UX",
                    "Curación y edición de banco de fotografía real del centro",
                    "Animaciones de scroll con GSAP y ScrollTrigger",
                    "Despliegue continuo en Vercel conectado a GitHub",
                    "Configuración de dominio propio y DNS",
                    "SEO técnico, Search Console, Tag Manager y Analytics"
                ],
                features: [
                    { title: "Animaciones GSAP", desc: "Transiciones y revelados suaves al hacer scroll en toda la web." },
                    { title: "Despliegue en Vercel", desc: "Integración continua con GitHub: cada cambio se publica automáticamente." },
                    { title: "SEO Técnico", desc: "Sitemap, datos estructurados, Open Graph y verificación en Search Console." },
                    { title: "Analítica Real", desc: "Google Tag Manager y GA4 configurados para medir tráfico y conversiones." }
                ],
                demoLink: "https://esteticacarmecots.com",
                technicalDocLabel: "Visitar Web en Vivo",
                thumbnail: "/skeyndor-thumbnail.png",
                screenshot: "/skeyndor-screenshot.png"
            }
        },
        contact: {
            title: "Contáctame",
            intro: "¿Tienes un proyecto en mente o simplemente quieres saludar? ¡Envíame un mensaje!",
            name: "Nombre",
            email: "Correo",
            message: "Mensaje",
            send: "Enviar Mensaje",
            success: "¡Gracias por contactarme! Te responderé pronto.",
            builtWithTitle: "Tecnologías utilizadas",
        },
        chatbot: {
            title: "Dani Asistente",
            placeholder: "Escribe un mensaje...",
            greeting: "¡Hola! Soy Dani Asistente. ¿En qué puedo ayudarte hoy?",
            responses: {
                project: "Puedes ver mis proyectos en la sección de 'Proyectos'. He trabajado en dashboards, apps web y herramientas de automatización.",
                contact: "Puedes contactarme a través del formulario o enviarme un correo a ddctrabajocontacto@gmail.com.",
                skill: "Me especializo en desarrollo Back-end, Front-end, bases de datos, APIs y automatización con IA. Revisa la sección 'Sobre Mí' para la lista completa.",
                default: "¡Sigo aprendiendo! Pregúntame sobre mis proyectos, habilidades o cómo contactarme.",
            }
        }
    },
    en: {
        nav: {
            about: "About",
            projects: "Projects",
            contact: "Contact",
        },
        hero: {
            title: "Building Digital Experiences",
            subtitle: "I'm Daniel Dans Cots, a passionate developer creating modern web applications and automated solutions.",
            viewWork: "View Work",
            downloadCV: "Download CV",
        },
        about: {
            title: "About Me",
            p1: "I am a dedicated developer with a passion for building efficient, scalable, and user-friendly web applications. My journey in tech has been driven by curiosity and a desire to solve real-world problems through code.",
            p2: "I have extensive experience in both Back-end and Front-end development, databases, and APIs. I also specialize in process automation and workflow optimization, integrating Artificial Intelligence (AI) solutions into my projects.",
        },
        projects: {
            title: "Featured Projects",
            subtitle: "Here are some of my recent works showcasing my skills.",
            viewDemo: "Live Demo",
            viewCode: "Code",
            viewDetails: "View Details",
            close: "Close",
            n8nProject: {
                title: "AI Ticket Analyzer with n8n",
                shortDesc: "Smart automation to process tickets, extract data with AI, and organize finances.",
                fullDesc: "Automatically extracts key information from your tickets and invoices starting from a simple photo.\n\nOrganizes your documents into folders and saves all data to keep your expenses always under control.\n\nDetects duplicate tickets to prevent errors and ensures your accounting is always up to date.",
                workflow: [
                    "Upload ticket/invoice image",
                    "AI Analysis (Vision) for data extraction",
                    "Storage in MySQL database (Docker)",
                    "Excel/Google Sheets generation and update",
                    "Automatic classification in Google Drive by date",
                    "Duplicate detection and error notification"
                ],
                features: [
                    { title: "VPS Infrastructure", desc: "Deployed on VPS with Docker and Let's Encrypt SSL." },
                    { title: "Security & Backups", desc: "Automatic SSL certificates and complete system backups (.tar.gz)." },
                    { title: "AI Extraction", desc: "Automatically identifies amounts, dates, and company names." },
                    { title: "Data Management", desc: "Keeps historical records in MySQL and Excel for accounting." }
                ],
                demoLink: "https://github.com/danistrix63/n8n_tikets/blob/main/DEMO.md",
                technicalDocLabel: "View Technical Guide",
                thumbnail: "/n8n-thumbnail.png",
                screenshot: "/n8n-workflow.png"
            },
            skeyndorProject: {
                title: "Estética Carme Cots — Beauty Salon Website",
                shortDesc: "Full redesign of a real beauty salon's website, with GSAP animations, technical SEO, and a production deployment.",
                fullDesc: "Complete redesign and development of the website for Estética Carme Cots, an official Skeyndor partner salon in Barcelona.\n\nStarting from a basic website, the entire design was rebuilt: smooth animations with GSAP and ScrollTrigger, curation and editing of real photography from the salon, and a reviews section faithful to real client testimonials.\n\nDeployed on Vercel with a custom domain, continuous integration from GitHub, and a full technical SEO setup (sitemap, schema.org structured data, Open Graph) plus Google Search Console, Tag Manager, and Analytics to measure real traffic.",
                workflow: [
                    "Full UI/UX audit and redesign",
                    "Curation and editing of the salon's real photo library",
                    "Scroll animations with GSAP and ScrollTrigger",
                    "Continuous deployment on Vercel connected to GitHub",
                    "Custom domain and DNS setup",
                    "Technical SEO, Search Console, Tag Manager and Analytics"
                ],
                features: [
                    { title: "GSAP Animations", desc: "Smooth scroll-triggered transitions and reveals across the site." },
                    { title: "Vercel Deployment", desc: "Continuous integration with GitHub: every change goes live automatically." },
                    { title: "Technical SEO", desc: "Sitemap, structured data, Open Graph tags and Search Console verification." },
                    { title: "Real Analytics", desc: "Google Tag Manager and GA4 configured to track traffic and conversions." }
                ],
                demoLink: "https://esteticacarmecots.com",
                technicalDocLabel: "Visit Live Site",
                thumbnail: "/skeyndor-thumbnail.png",
                screenshot: "/skeyndor-screenshot.png"
            }
        },
        contact: {
            title: "Get In Touch",
            intro: "Have a project in mind or just want to say hi? Feel free to send me a message!",
            name: "Name",
            email: "Email",
            message: "Message",
            send: "Send Message",
            success: "Thanks for getting in touch! I will get back to you soon.",
            builtWithTitle: "Built with",
        },
        chatbot: {
            title: "Dani Assistant",
            placeholder: "Type a message...",
            greeting: "Hi there! I'm Dani Assistant. How can I help you today?",
            responses: {
                project: "You can check out my projects in the 'Projects' section above. I've worked on web apps, dashboards, and automation tools.",
                contact: "You can reach me via the contact form below or email me at ddctrabajocontacto@gmail.com.",
                skill: "I specialize in Back-end, Front-end, databases, APIs, and AI automation. Check the 'About' section for a full list.",
                default: "I'm still learning! Feel free to ask about my projects, skills, or how to contact me.",
            }
        }
    }
};
