export const translations = {
    es: {
        nav: {
            about: "Sobre Mí",
            projects: "Proyectos",
            certificates: "Certificados",
            contact: "Contacto",
        },
        certs: {
            title: "Formación Certificada",
            subtitle: "Certificaciones oficiales de Meta y Google completadas a través de Coursera, además de formación en desarrollo con IA. Haz clic en cualquier certificado para verlo.",
            view: "Ver certificado",
            showCourses: "Ver cursos del programa",
            hideCourses: "Ocultar cursos",
            programs: {
                metaBackend: {
                    name: "Meta Back-End Developer — Certificado Profesional",
                    desc: "Programa profesional de 9 cursos de Meta: Python, Django, APIs REST, bases de datos, control de versiones, el stack completo y un proyecto final de backend.",
                },
                googlePrompting: {
                    name: "Google Prompting Essentials",
                    desc: "Especialización de 4 cursos de Google en prompt engineering: diseño de prompts para el trabajo diario, análisis de datos, presentaciones y uso de la IA como socio experto.",
                },
                bigSchool: {
                    name: "Curso de Iniciación al Desarrollo con IA",
                    desc: "Jornadas formativas de BIG school sobre desarrollo con inteligencia artificial (6 horas).",
                },
            },
        },
        hero: {
            greeting: "Hola, soy",
            available: "Disponible para trabajar",
            roles: [
                "Desarrollador Full-Stack",
                "Automatización con IA",
                "Backend con Python & FastAPI",
                "Frontend con React",
                "Integración de LLMs",
            ],
            subtitle: "Construyo aplicaciones modernas y sistemas automatizados con IA que funcionan en producción 24/7: desde aplicaciones de escritorio para agentes de IA hasta editores de vídeo con inteligencia artificial.",
            viewWork: "Ver Proyectos",
            downloadCV: "Descargar CV",
        },
        about: {
            title: "Sobre Mí",
            p1: "Soy un desarrollador dedicado con pasión por construir aplicaciones eficientes, escalables y amigables. Mi trayectoria en tecnología ha sido impulsada por la curiosidad y el deseo de resolver problemas del mundo real a través del código.",
            p2: "Cuento con una amplia experiencia tanto en Back-end como en Front-end, bases de datos y desarrollo de APIs. Además, me especializo en la automatización de procesos y optimización de flujos de trabajo, integrando también soluciones de Inteligencia Artificial (IA) en mis proyectos.",
            p3: "Todo lo que ves en este portfolio está desplegado y funcionando en producción: gestiono mi propio VPS Linux con varios servicios corriendo 24/7 (systemd, Docker, backups automáticos, SSL).",
            statProjects: "Proyectos en producción",
            statServices: "Servicios 24/7 en VPS",
            statTech: "Tecnologías",
            skillGroups: {
                frontend: "Frontend",
                backend: "Backend & APIs",
                ai: "IA & Automatización",
                infra: "Datos & Infraestructura",
            },
        },
        projects: {
            title: "Proyectos Destacados",
            subtitle: "Sistemas reales, desplegados y funcionando en producción. Haz clic en cualquiera para ver la arquitectura completa.",
            viewDemo: "Ver Demo",
            viewCode: "Ver Código",
            viewDetails: "Ver Detalles",
            close: "Cerrar",
            statusLive: "EN PRODUCCIÓN",
            moreOnGithub: "¿Quieres ver más? Encuentra todo mi código y proyectos en GitHub.",
            workflowTitle: "Arquitectura del Flujo",
            featuresTitle: "Características Clave",
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
                shortDesc: "Diseño y desarrollo desde cero con React y Vite, animaciones GSAP, CI/CD en Vercel y SEO técnico completo, para un negocio real en producción.",
                fullDesc: "Web real para un negocio real: Estética Carme Cots, centro de belleza colaborador oficial de Skeyndor en Barcelona. La diseñé y desarrollé desde cero, desde el primer boceto hasta el dominio propio en producción.\n\nLa página presenta los tratamientos y servicios del centro con animaciones suaves al hacer scroll, carga rápido y se adapta a cualquier móvil. Cada fotografía pasó por un proceso de selección, conversión y optimización para que el sitio pese poco sin perder calidad.\n\nAdemás del desarrollo me ocupé de todo lo que rodea a una web profesional: el dominio y su DNS, el despliegue automático (cada cambio que subo se publica solo en segundos), el SEO técnico para que Google la entienda y la posicione, y la analítica con GA4 para que el negocio sepa cuánta gente visita la web y desde dónde.",
                workflow: [
                    "Diseño de UI/UX desde cero (sin plantilla previa)",
                    "Desarrollo del frontend con React 18 + Vite",
                    "Conversión y curación del banco de fotografía real (HEIC → WebP/JPG)",
                    "Animaciones de scroll con GSAP y ScrollTrigger",
                    "CI/CD: despliegue automático en Vercel desde GitHub",
                    "Dominio propio, DNS, SEO técnico y Analytics (GTM + GA4)"
                ],
                features: [
                    { title: "Stack React + Vite", desc: "SPA construida desde cero con React 18, Vite y CSS puro, sin frameworks de UI." },
                    { title: "Animaciones GSAP", desc: "ScrollTrigger con gsap.context para timelines aisladas y cleanup automático por componente." },
                    { title: "CI/CD en Vercel", desc: "Integración continua con GitHub: cada push a main despliega a producción en segundos." },
                    { title: "SEO Técnico", desc: "Sitemap, JSON-LD (schema.org), Open Graph, Search Console, GTM y GA4 configurados." }
                ],
                demoLink: "https://esteticacarmecots.com",
                demoLinkLabel: "Ver Web",
                technicalDocLabel: "Visitar Web en Vivo",
                thumbnail: "/skeyndor-thumbnail.png",
                screenshot: "/skeyndor-screenshot.png"
            },
            tiktokaiProject: {
                title: "TikTokAI — Editor de Subtítulos con IA",
                shortDesc: "Editor de vídeo estilo CapCut que transcribe y genera subtítulos karaoke palabra a palabra con IA, listo para renderizar y publicar en TikTok.",
                fullDesc: "Subes un vídeo vertical y en segundos tienes subtítulos karaoke palabra a palabra, perfectamente sincronizados con tu voz y listos para publicar en TikTok.\n\nLa IA escucha el vídeo, lo transcribe con la marca de tiempo exacta de cada palabra y te propone un título viral y hashtags basados en lo que realmente dices — no se inventa nada que no esté en el vídeo.\n\nDespués lo retocas como en CapCut: un editor con timeline donde mueves subtítulos, títulos y efectos de sonido, con imantado a las palabras, deshacer y vista previa en directo. Cuando te gusta el resultado, un clic renderiza el vídeo final con todo incrustado.\n\nLo construí desde cero con Python (FastAPI) y ffmpeg, y lleva meses funcionando 24/7 en mi propio servidor como un servicio más de producción.",
                workflow: [
                    "Subida de vídeo vertical (grabado en el propio móvil)",
                    "Transcripción word-level con Groq Whisper large-v3",
                    "Edición en timeline multipista (subtítulos, títulos, sonido)",
                    "Generación de hook viral y hashtags con Llama 3.1 (Groq)",
                    "Render final quemando subtítulos con ffmpeg/libass",
                    "Descarga del vídeo listo para publicar"
                ],
                features: [
                    { title: "Transcripción con IA", desc: "Groq Whisper large-v3 transcribe con marcas de tiempo por palabra para el efecto karaoke." },
                    { title: "Editor Multipista", desc: "Timeline estilo CapCut con imantado, deshacer global y edición por bloques." },
                    { title: "Render ffmpeg/libass", desc: "Subtítulos y títulos animados quemados directamente en el vídeo final." },
                    { title: "Copywriting con IA", desc: "Genera hook viral y hashtags con Llama 3.1 fiel al contenido real del vídeo." }
                ],
                thumbnail: "/tiktokai-thumbnail.png",
                screenshot: "/tiktokai-screenshot.png"
            },
            skillgenProject: {
                title: "AI Skill Generator — App de Escritorio para Agentes de IA",
                shortDesc: "Aplicación de escritorio construida con Tauri y Rust para crear y gestionar skills de agentes de código IA y chatear con el agente desde una interfaz visual, sin tocar la terminal.",
                fullDesc: "Trabajar con agentes de código IA normalmente significa vivir en la terminal. Esta app lo convierte en algo visual: abres tu proyecto, ves todas tus skills de un vistazo, las creas o editas con un clic, y hablas con el agente desde un chat integrado que responde en streaming, en tiempo real.\n\nSi no tienes el motor de IA instalado, la propia app lo detecta, lo descarga y lo instala por ti con progreso en vivo — sin comandos ni configuración manual. Al arrancar también comprueba sola si hay una versión nueva.\n\nLa construí primero con Electron y después la migré por completo a Tauri con backend en Rust: misma interfaz, pero binarios mucho más ligeros y menor consumo de memoria. El frontend solo puede tocar la pequeña API que el backend expone, así que el sistema queda protegido por diseño.",
                workflow: [
                    "Selección de la carpeta del proyecto desde la app",
                    "Dashboard con estado del proyecto y del motor de IA",
                    "Gestión visual de skills (crear, editar, borrar, buscar)",
                    "Chat con el agente de IA con respuesta en streaming",
                    "Instalación del motor de IA con progreso en vivo",
                    "Aviso de nuevas versiones vía GitHub Releases"
                ],
                features: [
                    { title: "App de Escritorio Tauri + Rust", desc: "Backend nativo en Rust con binarios ligeros y bajo consumo; UI en JS vanilla, sin frameworks ni build." },
                    { title: "Gestor Visual de Skills", desc: "Crear, editar, borrar y buscar skills del agente sin escribir un solo comando." },
                    { title: "Agent Chat Integrado", desc: "Conversación con el agente de código con salida en streaming e historial de contexto." },
                    { title: "Backend Seguro en Rust", desc: "Comandos de Tauri tipados: el frontend solo accede a la API mínima expuesta por el backend nativo." }
                ],
                thumbnail: "/skillgen-thumbnail.png",
                screenshot: "/skillgen-screenshot.png"
            },
        },
        contact: {
            title: "Contáctame",
            intro: "¿Tienes un proyecto en mente o simplemente quieres saludar? ¡Envíame un mensaje!",
            name: "Nombre",
            email: "Correo",
            message: "Mensaje",
            send: "Enviar Mensaje",
            sending: "Enviando...",
            success: "¡Gracias por contactarme! Te responderé pronto.",
            builtWithTitle: "Tecnologías utilizadas",
            builtWith: "Diseñado y construido con",
            whatsappLabel: "Enviar mensaje directo",
            locationLabel: "Ubicación",
            remote: "Remoto OK",
            namePlaceholder: "Tu nombre",
            messagePlaceholder: "Cuéntame sobre tu proyecto u oportunidad...",
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
            certificates: "Certificates",
            contact: "Contact",
        },
        certs: {
            title: "Certified Training",
            subtitle: "Official Meta and Google certifications completed through Coursera, plus training in AI development. Click any certificate to view it.",
            view: "View certificate",
            showCourses: "Show program courses",
            hideCourses: "Hide courses",
            programs: {
                metaBackend: {
                    name: "Meta Back-End Developer — Professional Certificate",
                    desc: "Meta's 9-course professional program: Python, Django, REST APIs, databases, version control, the full stack and a final backend capstone project.",
                },
                googlePrompting: {
                    name: "Google Prompting Essentials",
                    desc: "Google's 4-course specialization in prompt engineering: designing prompts for everyday work, data analysis, presentations and using AI as an expert partner.",
                },
                bigSchool: {
                    name: "Introduction to AI Development Course",
                    desc: "Training sessions by BIG school on AI-powered development (6 hours).",
                },
            },
        },
        hero: {
            greeting: "Hi, I'm",
            available: "Open to work",
            roles: [
                "Full-Stack Developer",
                "AI Automation",
                "Backend with Python & FastAPI",
                "Frontend with React",
                "LLM Integration",
            ],
            subtitle: "I build modern applications and AI-powered automated systems that run in production 24/7 — from desktop apps for AI agents to AI video editors.",
            viewWork: "View Work",
            downloadCV: "Download CV",
        },
        about: {
            title: "About Me",
            p1: "I am a dedicated developer with a passion for building efficient, scalable, and user-friendly web applications. My journey in tech has been driven by curiosity and a desire to solve real-world problems through code.",
            p2: "I have extensive experience in both Back-end and Front-end development, databases, and APIs. I also specialize in process automation and workflow optimization, integrating Artificial Intelligence (AI) solutions into my projects.",
            p3: "Everything you see in this portfolio is deployed and running in production: I manage my own Linux VPS with several services running 24/7 (systemd, Docker, automatic backups, SSL).",
            statProjects: "Projects in production",
            statServices: "24/7 services on VPS",
            statTech: "Technologies",
            skillGroups: {
                frontend: "Frontend",
                backend: "Backend & APIs",
                ai: "AI & Automation",
                infra: "Data & Infrastructure",
            },
        },
        projects: {
            title: "Featured Projects",
            subtitle: "Real systems, deployed and running in production. Click any of them to see the full architecture.",
            viewDemo: "Live Demo",
            viewCode: "Code",
            viewDetails: "View Details",
            close: "Close",
            statusLive: "LIVE IN PRODUCTION",
            moreOnGithub: "Want to see more? Find all my code and projects on GitHub.",
            workflowTitle: "Workflow Architecture",
            featuresTitle: "Key Features",
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
                shortDesc: "Built from scratch with React and Vite, GSAP animations, Vercel CI/CD, and full technical SEO for a real production business.",
                fullDesc: "A real website for a real business: Estética Carme Cots, an official Skeyndor partner beauty salon in Barcelona. I designed and built it from scratch, from the first sketch to the custom domain running in production.\n\nThe site walks visitors through the salon's treatments and services with smooth scroll animations, loads fast and adapts to any phone. Every photo went through selection, conversion and optimization so the site stays light without losing quality.\n\nBeyond the code, I handled everything a professional website needs: the domain and its DNS, automatic deployment (every change I push goes live on its own within seconds), technical SEO so Google understands and ranks it, and GA4 analytics so the business knows how many people visit and where they come from.",
                workflow: [
                    "UI/UX design from scratch (no template)",
                    "Frontend built with React 18 + Vite",
                    "Real photo library conversion and curation (HEIC → WebP/JPG)",
                    "Scroll animations with GSAP and ScrollTrigger",
                    "CI/CD: automatic Vercel deployment from GitHub",
                    "Custom domain, DNS, technical SEO and Analytics (GTM + GA4)"
                ],
                features: [
                    { title: "React + Vite Stack", desc: "SPA built from scratch with React 18, Vite, and plain CSS, no UI framework." },
                    { title: "GSAP Animations", desc: "ScrollTrigger with gsap.context for isolated per-component timelines and automatic cleanup." },
                    { title: "Vercel CI/CD", desc: "Continuous integration with GitHub: every push to main deploys to production in seconds." },
                    { title: "Technical SEO", desc: "Sitemap, JSON-LD (schema.org), Open Graph, Search Console, GTM and GA4 configured." }
                ],
                demoLink: "https://esteticacarmecots.com",
                demoLinkLabel: "View Site",
                technicalDocLabel: "Visit Live Site",
                thumbnail: "/skeyndor-thumbnail.png",
                screenshot: "/skeyndor-screenshot.png"
            },
            tiktokaiProject: {
                title: "TikTokAI — AI Subtitle Editor",
                shortDesc: "CapCut-style video editor that transcribes and generates word-by-word karaoke subtitles with AI, ready to render and post to TikTok.",
                fullDesc: "Upload a vertical video and within seconds you get word-by-word karaoke subtitles, perfectly synced to your voice and ready to publish on TikTok.\n\nThe AI listens to the video, transcribes it with the exact timestamp of every word, and suggests a viral title and hashtags based on what you actually say — it never makes up claims that are not in the video.\n\nThen you polish it like in CapCut: a timeline editor where you move subtitles, titles and sound effects around, with word snapping, undo and live preview. When it looks right, one click renders the final video with everything burned in.\n\nI built it from scratch with Python (FastAPI) and ffmpeg, and it has been running 24/7 on my own server for months as one more production service.",
                workflow: [
                    "Upload a vertical video (recorded on the phone)",
                    "Word-level transcription with Groq Whisper large-v3",
                    "Edit on a multi-track timeline (subtitles, titles, sound)",
                    "Generate a viral hook and hashtags with Llama 3.1 (Groq)",
                    "Final render burning in subtitles with ffmpeg/libass",
                    "Download the video ready to publish"
                ],
                features: [
                    { title: "AI Transcription", desc: "Groq Whisper large-v3 transcribes with per-word timestamps for the karaoke effect." },
                    { title: "Multi-Track Editor", desc: "CapCut-style timeline with snapping, global undo, and block-based editing." },
                    { title: "ffmpeg/libass Render", desc: "Animated subtitles and titles burned directly into the final video." },
                    { title: "AI Copywriting", desc: "Generates a viral hook and hashtags with Llama 3.1, faithful to the video's real content." }
                ],
                thumbnail: "/tiktokai-thumbnail.png",
                screenshot: "/tiktokai-screenshot.png"
            },
            skillgenProject: {
                title: "AI Skill Generator — Desktop App for AI Agents",
                shortDesc: "Desktop application built with Tauri and Rust to create and manage AI coding-agent skills and chat with the agent from a visual interface — no terminal required.",
                fullDesc: "Working with AI coding agents usually means living in the terminal. This app makes it visual: open your project, see all your skills at a glance, create or edit them with a click, and talk to the agent through a built-in chat that streams its answers in real time.\n\nIf the AI engine is not installed, the app detects it, downloads it and installs it for you with live progress — no commands, no manual setup. On startup it also checks by itself whether a new version is available.\n\nI first built it with Electron and later migrated it entirely to Tauri with a Rust backend: same interface, but much lighter binaries and a smaller memory footprint. The frontend can only touch the small API the backend exposes, so the system stays protected by design.",
                workflow: [
                    "Select the project folder from the app",
                    "Dashboard with project and AI engine status",
                    "Visual skill management (create, edit, delete, search)",
                    "Chat with the AI agent with streaming output",
                    "In-app AI engine installation with live progress",
                    "New version notifications via GitHub Releases"
                ],
                features: [
                    { title: "Tauri + Rust Desktop App", desc: "Native Rust backend with lightweight binaries and low memory use; vanilla JS UI — no frameworks, no build step." },
                    { title: "Visual Skills Manager", desc: "Create, edit, delete and search agent skills without typing a single command." },
                    { title: "Built-in Agent Chat", desc: "Talk to the coding agent with streaming output and context history." },
                    { title: "Secure Rust Backend", desc: "Typed Tauri commands: the frontend can only reach the minimal API the native backend exposes." }
                ],
                thumbnail: "/skillgen-thumbnail.png",
                screenshot: "/skillgen-screenshot.png"
            },
        },
        contact: {
            title: "Get In Touch",
            intro: "Have a project in mind or just want to say hi? Feel free to send me a message!",
            name: "Name",
            email: "Email",
            message: "Message",
            send: "Send Message",
            sending: "Sending...",
            success: "Thanks for getting in touch! I will get back to you soon.",
            builtWithTitle: "Built with",
            builtWith: "Designed & built with",
            whatsappLabel: "Send a direct message",
            locationLabel: "Location",
            remote: "Remote OK",
            namePlaceholder: "Your name",
            messagePlaceholder: "Tell me about your project or opportunity...",
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
