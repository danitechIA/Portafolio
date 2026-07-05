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
                shortDesc: "Diseño y desarrollo desde cero con React y Vite, animaciones GSAP, CI/CD en Vercel y SEO técnico completo, para un negocio real en producción.",
                fullDesc: "Diseño y desarrollo desde cero de la web de Estética Carme Cots, centro colaborador oficial de Skeyndor en Barcelona, construida con React 18 y Vite.\n\nToda la interfaz se animó con GSAP y ScrollTrigger (context API para limpieza de listeners y timelines por sección), sustituyendo un enfoque inicial basado en framer-motion. El banco de imágenes se procesó íntegramente en local: conversión de fotografías HEIC de iPhone a JPG/WebP con pillow-heif (el pipeline nativo de libheif fallaba con archivos con múltiples auxiliary images), curación de decenas de fotos casi duplicadas y recorte/optimización de cada asset final.\n\nEl pipeline de despliegue usa integración continua de GitHub a Vercel: cada push a main dispara build y deploy en producción en segundos, con dominio propio configurado vía DNS (registros A) y detección/resolución de bugs reales de CSS grid, cascada de imports y URL-encoding en nombres de archivo con caracteres especiales.\n\nSe completó con SEO técnico (sitemap.xml, robots.txt, datos estructurados schema.org de tipo BeautySalon, Open Graph y Twitter Cards) y analítica real mediante Google Tag Manager, GA4 y verificación en Search Console.",
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
                title: "TikTokAI — Editor de Subtítulos Karaoke con IA",
                shortDesc: "Editor de vídeo estilo CapCut que transcribe y genera subtítulos karaoke palabra a palabra con IA, listo para renderizar y publicar en TikTok.",
                fullDesc: "Herramienta propia de edición de vídeo vertical construida con FastAPI en el backend y una interfaz vanilla JS/HTML/CSS (sin frameworks ni build) inspirada en el editor de CapCut.\n\nEl flujo usa Groq como motor de IA: Whisper large-v3 para transcripción con timestamps por palabra, y Llama 3.1 8B para generar copy viral y hashtags a partir del contenido real del vídeo (con un prompt ajustado para no inventar afirmaciones que no aparecen en la transcripción).\n\nEl editor tiene un timeline multipista (subtítulos, títulos, sonido) con imantado a bordes de palabras y del cursor, historial de deshacer global, y un inspector contextual que muestra las propiedades del bloque seleccionado. El render final quema los subtítulos y títulos con ffmpeg/libass, mezclando efectos de sonido sintetizados (whoosh, pop, riser) con adelay/amix.\n\nDesplegado como servicio systemd independiente (Restart=always, prioridad de CPU reducida con nice) en el mismo VPS que el resto de mis proyectos, para no competir por recursos con los demás servicios en producción.",
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
                shortDesc: "Built from scratch with React and Vite, GSAP animations, Vercel CI/CD, and full technical SEO for a real production business.",
                fullDesc: "Website for Estética Carme Cots, an official Skeyndor partner salon in Barcelona, designed and built from scratch with React 18 and Vite.\n\nThe entire UI was animated with GSAP and ScrollTrigger (using the context API for per-section timelines and automatic listener cleanup), replacing an initial framer-motion approach. The photo library was processed entirely locally: HEIC-to-JPG/WebP conversion for iPhone photos via pillow-heif (the native libheif pipeline failed on files with multiple auxiliary images), curation of dozens of near-duplicate shots, and cropping/optimization of every final asset.\n\nThe deployment pipeline uses continuous integration from GitHub to Vercel: every push to main triggers a production build and deploy within seconds, with a custom domain wired up via DNS (A records), plus real CSS grid, import-order cascade, and URL-encoding bugs found and fixed along the way.\n\nRounded out with full technical SEO (sitemap.xml, robots.txt, schema.org BeautySalon structured data, Open Graph and Twitter Cards) and real analytics via Google Tag Manager, GA4, and Search Console verification.",
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
                title: "TikTokAI — AI Karaoke Subtitle Editor",
                shortDesc: "CapCut-style video editor that transcribes and generates word-by-word karaoke subtitles with AI, ready to render and post to TikTok.",
                fullDesc: "A self-built vertical video editing tool with a FastAPI backend and a vanilla JS/HTML/CSS frontend (no framework, no build step), inspired by CapCut's editor.\n\nThe pipeline runs on Groq: Whisper large-v3 for word-level timestamped transcription, and Llama 3.1 8B to generate viral copy and hashtags straight from the video's actual content (with a tuned prompt to avoid inventing claims not present in the transcript).\n\nThe editor has a multi-track timeline (subtitles, titles, sound) with snapping to word and cursor boundaries, a global undo history, and a contextual inspector showing the properties of whatever block is selected. The final render burns subtitles and titles in with ffmpeg/libass, mixing synthesized sound effects (whoosh, pop, riser) via adelay/amix.\n\nDeployed as its own systemd service (Restart=always, lowered CPU priority via nice) on the same VPS as my other projects, so it doesn't compete for resources with the other services running in production.",
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
