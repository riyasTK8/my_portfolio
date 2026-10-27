"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const revealTransition = {
  duration: 0.7,
  ease: [0.23, 1, 0.32, 1] as const,
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

function MotionReveal({
  children,
  className,
  delay = 0,
}: Readonly<{ children: React.ReactNode; className: string; delay?: number }>) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={fadeUp}
      transition={{ ...revealTransition, delay: shouldReduceMotion ? 0 : delay }}
    >
      {children}
    </motion.div>
  );
}

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Service", href: "#service" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/riyasTK8",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48v-1.7c-2.77.6-3.36-1.18-3.36-1.18-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.52 1.04 1.52 1.04.88 1.53 2.31 1.09 2.87.83.09-.65.35-1.09.63-1.34-2.2-.25-4.52-1.1-4.52-4.9 0-1.08.39-1.96 1.03-2.65-.1-.25-.45-1.29.1-2.69 0 0 .84-.27 2.75 1.03A9.35 9.35 0 0 1 12 6.84c.85 0 1.7.12 2.5.35 1.9-1.3 2.74-1.03 2.74-1.03.55 1.4.2 2.44.1 2.69.64.69 1.02 1.57 1.02 2.65 0 3.81-2.33 4.64-4.54 4.89.36.31.67.92.67 1.85v2.74c0 .26.18.59.69.48A10 10 0 0 0 12 2Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:mriyastk8@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2.38-.25 6.63 5.08a1 1 0 0 0 1.2 0L18.62 6.5H5.38Zm13.87 2.09-5.8 4.44a2.75 2.75 0 0 1-3.3 0L4.75 8.34v8.91c0 .41.34.75.75.75h12.99c.41 0 .75-.34.75-.75V8.34Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/riyas-k-i",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.4a1.56 1.56 0 0 1 0 3.1ZM5.5 9.62h2.88v9.88H5.5V9.62Zm5.1 0h2.76v1.35h.04c.38-.73 1.33-1.5 2.73-1.5 2.93 0 3.47 1.92 3.47 4.41v5.62h-2.88v-5.27c0-1.26-.03-2.87-1.75-2.87-1.75 0-2.02 1.37-2.02 2.78v5.36H10.6V9.62Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 1.8A3.96 3.96 0 0 0 3.8 7.75v8.5A3.96 3.96 0 0 0 7.75 20.2h8.5A3.96 3.96 0 0 0 20.2 16.25v-8.5A3.96 3.96 0 0 0 16.25 3.8h-8.5Zm8.85 1.83a1.12 1.12 0 1 1 0 2.24 1.12 1.12 0 0 1 0-2.24ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 0 0 12 8.8Z" />
      </svg>
    ),
  },
];

const aboutFacts = [
  { value: "2+", label: "years of coding experience" },
  { value: "1 yr", label: "professional development" },
  { value: "3+", label: "projects built from scratch" },
  { value: "Full Stack", label: "across frontend, backend & deployment" },
];

const journey = [
  "Started with C and core programming fundamentals like logic, conditions, loops, arrays, and pointers.",
  "Moved into modern frontend and backend development with real product workflows.",
  "Built applications across UI, APIs, databases, auth, deployment, and business logic.",
  "Focused on maintainability, clean architecture, and practical problem solving.",
];

const services = [
  {
    title: "Full Stack Web Development",
    text: "End-to-end web applications using Next.js, React, Node.js, TypeScript, and modern databases.",
    accent: "01",
  },
  {
    title: "Frontend Development",
    text: "Responsive, accessible interfaces with React, Next.js, Tailwind CSS, Redux Toolkit, and modern component systems.",
    accent: "02",
  },
  {
    title: "Backend & API Development",
    text: "REST APIs, authentication, authorization, integrations, business logic, and scalable service architecture.",
    accent: "03",
  },
  {
    title: "AI Integration & Data Visualization",
    text: "AI-powered product features, Gemini API workflows, data processing, and interactive chart generation.",
    accent: "04",
  },
  {
    title: "Database & Infrastructure Integration",
    text: "PostgreSQL, MongoDB, Redis, Supabase, AWS, Cloudflare, and deployment-driven infrastructure setups.",
    accent: "05",
  },
  {
    title: "Business Applications & Dashboards",
    text: "ERP/CRM workflows, admin dashboards, financial tooling, inventory systems, and internal operations platforms.",
    accent: "06",
  },
];

const projects = [
  {
    name: "XeroCare",
    category: "ERP & CRM Platform",
    image: "/erp.png",
    tech: ["Next.js", "Node.js", "TypeScript", "PostgreSQL", "Redis", "RabbitMQ", "R2", "JWT", "Microservices"],
    live: "http://15.252.52.227",
    description:
      "A microservices-based ERP and CRM platform for printer industry operations, integrating sales, rental, leasing, inventory, service, and financial workflows.",
    highlights: [
      "Rental and lease management.",
      "Quotation management and sales workflows.",
      "Accounts and financial management.",
      "Customer relationship management and sales pipelines.",
      "Inventory tracking, service ticketing, and SLA monitoring.",
      "RBAC, 2FA, audit logging, and secure access controls.",
      "Redis caching and RabbitMQ-based async processing."
    ],
  },
  {
    name: "Letsellr",
    category: "Property Management Platform",
    image: "/propertymanagement.png",
    tech: ["Next.js", "Node.js", "TypeScript", "MongoDB", "AWS EC2", "AWS S3", "Shadcn UI"],
    live: "https://letsellr.in",
    description:
      "A full-stack property management platform for listing, tracking, and managing properties with improved client–contractor communication and operational workflows.",
    highlights: [
      "End-to-end frontend and backend implementation.",
      "AWS S3 signed URL uploads for image handling.",
      "Reduced backend payload size by 80% and improved upload performance by 60%.",
      "UI/UX design, infrastructure setup, and project delivery from concept to launch."
    ],
  },
  {
    name: "InstaViz",
    category: "AI-Powered Data Visualization Tool",
    image: "/datavisualaization.png",
    tech: ["Next.js", "Node.js", "MongoDB", "TypeScript", "MCP", "Vercel", "AWS EC2", "Supabase", "R2", "Gemini APIs", "JWT", "Stripe"],
    live: "#contact",
    description:
      "An AI-powered data visualization application that transforms CSV data into interactive charts and insightful data stories.",
    highlights: [
      "CSV-to-chart generation with AI-assisted data understanding.",
      "Separate Gemini models for chart generation and conversational responses.",
      "MCP server for CSV aggregation and lower redundant API usage.",
      "Reduced redundant Gemini API requests and token usage by 50%.",
      "JWT access and refresh tokens, Google OAuth, and Stripe payments.",
      "Admin analytics and device-level session tracking for active users."
    ],
  },
];

const skillGroups = [
  { title: "Programming", items: ["JavaScript", "TypeScript"] },
  { title: "Frontend", items: ["React.js", "Next.js", "Redux Toolkit", "Tailwind CSS", "Shadcn UI", "Framer Motion", "Figma"] },
  { title: "Backend & APIs", items: ["Node.js", "Express.js", "REST APIs", "MVC Architecture", "JWT Authentication"] },
  { title: "Databases & Cloud", items: ["MongoDB", "PostgreSQL", "Prisma ORM", "Redis", "Supabase", "AWS EC2", "AWS S3", "Cloudflare", "Nginx", "R2"] },
  { title: "Tools & Technologies", items: ["Git", "GitHub", "Postman", "Stripe", "Gemini APIs", "Swagger", "MCP Server", "RabbitMQ"] },
];

const skillIcons: Record<string, string> = {
  JavaScript: "JS",
  TypeScript: "TS",
  "React.js": "⚛",
  "Next.js": "N",
  "Redux Toolkit": "RTK",
  "Tailwind CSS": "TW",
  "Shadcn UI": "SH",
  "Framer Motion": "FM",
  Figma: "F",
  "Node.js": "N",
  "Express.js": "EX",
  "REST APIs": "API",
  "MVC Architecture": "MVC",
  "JWT Authentication": "JWT",
  MongoDB: "MDB",
  PostgreSQL: "PG",
  "Prisma ORM": "PR",
  Redis: "RD",
  Supabase: "SB",
  "AWS EC2": "EC2",
  "AWS S3": "S3",
  Cloudflare: "CF",
  Nginx: "NG",
  R2: "R2",
  Git: "GIT",
  GitHub: "GH",
  Postman: "PO",
  Stripe: "ST",
  "Gemini APIs": "AI",
  Swagger: "SW",
  "MCP Server": "MCP",
  RabbitMQ: "RMQ",
};

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");
    const tiltCards = document.querySelectorAll("[data-tilt]");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(hover: none)").matches;

    if (reduceMotion) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealItems.forEach((item) => revealObserver.observe(item));

    // Skip tilt on touch devices
    if (isTouch) {
      return () => { revealObserver.disconnect(); };
    }

    const handlePointerMove = (event: Event) => {
      const pointerEvent = event as PointerEvent;
      // Only respond to mouse/pen, not touch
      if (pointerEvent.pointerType === "touch") return;

      const card = pointerEvent.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      const offsetX = (pointerEvent.clientX - rect.left) / rect.width;
      const offsetY = (pointerEvent.clientY - rect.top) / rect.height;
      const rotateY = (offsetX - 0.5) * 6;
      const rotateX = (0.5 - offsetY) * 6;

      card.style.setProperty("--rotate-x", `${rotateX}deg`);
      card.style.setProperty("--rotate-y", `${rotateY}deg`);
      card.style.setProperty("--pointer-x", `${offsetX}`);
      card.style.setProperty("--pointer-y", `${offsetY}`);
    };

    const handlePointerLeave = (event: Event) => {
      const card = event.currentTarget as HTMLElement;
      card.style.setProperty("--rotate-x", "0deg");
      card.style.setProperty("--rotate-y", "0deg");
      card.style.setProperty("--pointer-x", "0.5");
      card.style.setProperty("--pointer-y", "0.5");
    };

    tiltCards.forEach((card) => {
      card.addEventListener("pointermove", handlePointerMove);
      card.addEventListener("pointerleave", handlePointerLeave);
    });

    return () => {
      revealObserver.disconnect();
      tiltCards.forEach((card) => {
        card.removeEventListener("pointermove", handlePointerMove);
        card.removeEventListener("pointerleave", handlePointerLeave);
      });
    };
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(formData.subject || "Portfolio enquiry");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );

    window.location.href = `mailto:mriyastk8@gmail.com?subject=${subject}&body=${body}`;
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <main className="portfolio-page" id="home">
      <section className="hero" aria-label="Main hero section">
        <header className="topbar">
          <div className="brand">MUHAMMED RIYAS</div>

          <nav className="main-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        <motion.div
          className="hero-content"
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
          variants={fadeUp}
          transition={revealTransition}
        >
          <motion.h1 variants={fadeUp} transition={{ ...revealTransition, delay: shouldReduceMotion ? 0 : 0.08 }}>
            MUHAMMED RIYAS
          </motion.h1>
          <motion.p variants={fadeUp} transition={{ ...revealTransition, delay: shouldReduceMotion ? 0 : 0.18 }}>
            Fullstack Developer
          </motion.p>

          <motion.div
            className="hero-actions"
            variants={fadeUp}
            transition={{ ...revealTransition, delay: shouldReduceMotion ? 0 : 0.28 }}
          >
            <a href="#projects" className="primary-btn hero-btn">
              See my work
            </a>
            <a href="/riyas_resume.pdf" download className="secondary-btn hero-btn">
              Download resume
            </a>
          </motion.div>
        </motion.div>
      </section>

      <section className="content-section about-section" id="about">
        <div className="section-inner">
          <MotionReveal className="section-heading">
            <span className="eyebrow-tag">About</span>
            <h2>Building practical products with engineering depth.</h2>
          </MotionReveal>

          <div className="about-layout">
            <div className="about-copy reveal-left" data-tilt>
              <p className="intro-kicker">Full Stack Developer</p>
              <h3>MUHAMMED RIYAS</h3>
              <p className="lead">
                I am a Full Stack Developer with 2+ years of coding experience and nearly 1 year of
                professional development experience. I started with C and built a solid foundation in logic,
                conditions, loops, arrays, and pointers, and now focus on creating maintainable, production-ready
                software across frontend, backend, APIs, databases, and deployment.
              </p>
              <p className="lead">
                My work is shaped by real-world problem solving — building applications that are practical,
                reliable, and aligned with business needs. I enjoy turning ideas into clean, scalable product
                experiences that are easy to maintain and built for long-term use.
              </p>

              <div className="about-actions">
                <a href="#projects" className="primary-btn">
                  View projects
                </a>
                <a href="#contact" className="secondary-btn">
                  Contact me
                </a>
              </div>
            </div>

            <div className="profile-visual reveal-right" aria-label="Developer profile visual" data-tilt>
              <div className="visual-shell">
                <div className="terminal-bar">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="code-block">
                  <div className="code-line">
                    <span className="token-key">const</span> <span className="token-name">developer</span> = {'{'}
                  </div>
                  <div className="code-line indent">
                    role: <span className="token-string">"Full Stack Developer"</span>,
                  </div>
                  <div className="code-line indent">
                    focus: [<span className="token-string">"Frontend"</span>, <span className="token-string">"Backend"</span>, <span className="token-string">"Deployment"</span>],
                  </div>
                  <div className="code-line indent">
                    outcome: <span className="token-string">"Production-ready applications"</span>
                  </div>
                  <div className="code-line">{'}'};</div>
                </div>

                <div className="floating-stat stat-top">3+ projects</div>
                <div className="floating-stat stat-bottom">Full-stack delivery</div>
              </div>
            </div>
          </div>

          <div className="facts-grid">
            {aboutFacts.map((fact, index) => (
              <div key={fact.label} className={`fact-card reveal stagger-${index + 1}`}>
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </div>
            ))}
          </div>

          <div className="journey">
            {journey.map((step, index) => (
              <div key={step} className={`journey-item reveal stagger-${index + 1}`}>
                <div className="journey-dot">
                  <span>{index + 1}</span>
                </div>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section services-section" id="service">
        <div className="section-inner">
          <MotionReveal className="section-heading">
            <span className="eyebrow-tag">Services</span>
            <h2>What I can build for realworld.</h2>
          </MotionReveal>

          <div className="services-grid">
            {services.map((service, index) => (
              <article key={service.title} className={`service-card reveal stagger-${index + 1}`} data-tilt>
                <div className="service-index">{service.accent}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>

          <div className="section-cta reveal">
            <a href="#contact" className="primary-btn">
              Let’s discuss your project
            </a>
          </div>
        </div>
      </section>

      <section className="content-section projects-section" id="projects">
        <div className="section-inner">
          <MotionReveal className="section-heading">
            <span className="eyebrow-tag">Projects</span>
            <h2>My selected works.</h2>
          </MotionReveal>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article key={project.name} className={`project-card reveal stagger-${index + 1}`} data-tilt>
                <div className="project-number">0{index + 1}</div>

                <div className="project-thumb-wrap">
                  <img src={project.image} alt={`${project.name} preview`} className="project-thumb" />
                </div>

                <div className="project-head">
                  <div>
                    <p className="project-category">{project.category}</p>
                    <h3>{project.name}</h3>
                  </div>
                  <a href={project.live === "#contact" ? project.live : project.live} target={project.live === "#contact" ? undefined : "_blank"} rel={project.live === "#contact" ? undefined : "noreferrer"} className="mini-link">
                    {project.live === "#contact" ? "Contact" : "Live demo"}
                  </a>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="tech-list">
                  {project.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <ul className="project-points">
                  {project.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section skills-section" id="skills">
        <div className="section-inner">
          <MotionReveal className="section-heading">
            <span className="eyebrow-tag">Skills</span>
            <h2>Technical tools I build with.</h2>
          </MotionReveal>

          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <div key={group.title} className={`skill-card reveal stagger-${index + 1}`} data-tilt>
                <h3>{group.title}</h3>
                <div className="chip-list">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      <span className="chip-icon">{skillIcons[item] || item.slice(0, 2).toUpperCase()}</span>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section contact-section" id="contact">
        <div className="section-inner contact-shell">
          <motion.div
            className="contact-copy"
            initial={shouldReduceMotion ? false : { opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={revealTransition}
          >
            <span className="eyebrow-tag">Contact</span>
            <h2>Have an idea? Let’s build something meaningful.</h2>
            <p>
              I’m interested in building useful digital products, solving real-world problems, and collaborating
              on challenging engineering projects.
            </p>

            <div className="contact-links-row">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined} className="social-link" aria-label={link.label}>
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <div className="contact-panel reveal-right" data-tilt>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="field-row">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Your name" required />
              </div>

              <div className="field-row">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Your email" required />
              </div>

              <div className="field-row">
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" value={formData.subject} onChange={handleChange} placeholder="Project title" required />
              </div>

              <div className="field-row">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project" rows={5} required />
              </div>

              <button type="submit" className="submit-btn">
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="section-inner footer-inner">
          <p>© 2026 Muhammed Riyas</p>

          <div className="footer-socials">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined} className="footer-social" aria-label={link.label}>
                {link.icon}
              </a>
            ))}
          </div>

          <p>Full Stack Developer</p>
        </div>
      </footer>
    </main>
  );
}
