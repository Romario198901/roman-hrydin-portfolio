import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  X,
} from "lucide-react";

import portraitAsset from "@/assets/roman-hrydin-portrait.jpeg.asset.json";
import cvAsset from "@/assets/roman-hrydin-cv.pdf.asset.json";
import lelekaAsset from "@/assets/leleka-project.jpeg.asset.json";
import rentalcarAsset from "@/assets/rentalcar-project.jpeg.asset.json";
import learnLingoAsset from "@/assets/learn-lingo-project.jpeg.asset.json";
import pawsAsset from "@/assets/paws-project.jpeg.asset.json";
import goitAsset from "@/assets/goit-certificate.jpg.asset.json";
import epamAsset from "@/assets/epam-diploma.jpg.asset.json";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { navItems, professionalBackground, projects, technologyGroups, type Project } from "@/data/portfolio";

const projectImages: Record<Project["image"], string> = {
  leleka: lelekaAsset.url,
  rentalcar: rentalcarAsset.url,
  learnlingo: learnLingoAsset.url,
  paws: pawsAsset.url,
};

function SectionHeading({ label, title, description }: { label: string; title: string; description?: string }) {
  return (
    <div className="section-heading">
      <p className="section-label">{label}</p>
      <h2>{title}</h2>
      {description ? <p className="section-intro">{description}</p> : null}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="Roman Hrydin, home">
            <span className="brand-mark">RH</span>
            <span className="brand-copy"><strong>Roman Hrydin</strong><small>Full-Stack Developer</small></span>
          </a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
          <Button className="header-cv" asChild><a href={cvAsset.url} download="Roman-Hrydin-CV-English.pdf"><Download />Download CV</a></Button>
          <Button className="menu-button" variant="ghost" size="icon" onClick={() => setOpen(true)} aria-label="Open navigation menu"><Menu /></Button>
        </div>
      </header>
      {open ? (
        <div className="mobile-panel" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <div className="mobile-panel-top"><span className="brand-mark">RH</span><Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Close navigation menu"><X /></Button></div>
          <nav aria-label="Mobile navigation">
            {navItems.map((item, index) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{item.label}</a>)}
          </nav>
          <Button asChild><a href={cvAsset.url} download="Roman-Hrydin-CV-English.pdf"><Download />Download CV</a></Button>
        </div>
      ) : null}
    </>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card">
      <div className="project-visual">
        <img src={projectImages[project.image]} alt={project.imageAlt} loading="lazy" />
        <span className="project-number">0{index + 1}</span>
      </div>
      <div className="project-body">
        <div className="project-meta"><span>{project.type}</span><span>{project.role}</span></div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <ul className="contribution-list">
          {project.contributions.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}
        </ul>
        <div className="tag-list" aria-label={`${project.name} technologies`}>
          {project.stack.map((item) => <span key={item}>{item}</span>)}
        </div>
        <div className="project-actions">
          <Button asChild><a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo<ArrowUpRight /></a></Button>
        </div>
      </div>
    </article>
  );
}

function CertificateCard({ institution, program, duration, year, image, alt }: { institution: string; program: string; duration: string; year: string; image: string; alt: string }) {
  return (
    <article className="certificate-card">
      <Dialog>
        <DialogTrigger asChild>
          <button className="certificate-image" aria-label={`View ${institution} certificate at full size`}>
            <img src={image} alt={alt} />
            <span>View certificate <ArrowUpRight /></span>
          </button>
        </DialogTrigger>
        <DialogContent className="certificate-dialog">
          <DialogHeader><DialogTitle>{institution} — {program}</DialogTitle><DialogDescription>{duration}, {year}</DialogDescription></DialogHeader>
          <img src={image} alt={alt} />
        </DialogContent>
      </Dialog>
      <div className="certificate-copy"><p className="eyebrow">{institution}</p><h3>{program}</h3><div><span>{duration}</span><span>{year}</span></div></div>
    </article>
  );
}

export function Portfolio() {
  return (
    <div id="top">
      <Header />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="section-label">Hello, I’m</p>
              <h1 id="hero-title">Roman<br />Hrydin<span>.</span></h1>
              <p className="hero-role">Junior Full-Stack Developer</p>
              <p className="hero-summary">Junior Full-Stack Developer with practical experience building modern web applications using React, Next.js, Node.js, TypeScript, and REST APIs. Experienced in responsive interfaces, server-side logic, databases, authentication, and deployment.</p>
              <div className="hero-actions"><Button size="lg" asChild><a href="#projects">View Projects<ArrowDown /></a></Button><Button size="lg" variant="outline" asChild><a href={cvAsset.url} download="Roman-Hrydin-CV-English.pdf"><Download />Download CV</a></Button></div>
              <div className="hero-facts"><span><MapPin />Lviv, Ukraine</span><span>English — Upper-Intermediate</span><span>Ukrainian — Native</span></div>
            </div>
            <div className="portrait-wrap">
              <div className="portrait-frame"><img src={portraitAsset.url} alt="Portrait of Roman Hrydin" /></div>
              <div className="portrait-note"><span>Open to junior opportunities</span><strong>Frontend · Backend</strong></div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container about-grid">
            <SectionHeading label="About" title="Building modern web applications from interface to backend" />
            <div className="about-copy"><p>I build responsive React and Next.js applications with TypeScript, connect them to REST APIs, and implement server-side logic, authentication, MongoDB data flows, and production deployment.</p><p>I value clear teamwork, reliable delivery, and practical solutions. My background has strengthened my discipline, accountability, and ability to learn and perform under pressure.</p></div>
            <div className="focus-grid">
              {[['Focus','Full-Stack Web Development'],['Frontend','React · Next.js · TypeScript'],['Backend','Node.js · Express · MongoDB']].map(([title, text], index) => <article key={title}><span>0{index + 1}</span><p>{title}</p><h3>{text}</h3></article>)}
            </div>
          </div>
        </section>

        <section className="section section-muted" id="stack">
          <div className="container"><SectionHeading label="Tech Stack" title="Technologies I Work With" />
            <div className="tech-groups">{technologyGroups.map((group) => <article className="tech-group" key={group.title}><h3>{group.title}</h3><div className="tech-grid">{group.items.map((tech) => { const Icon = tech.icon; return <div className="tech-item" key={tech.name}><Icon aria-hidden="true" /><span>{tech.name}</span></div>; })}</div></article>)}</div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="container"><SectionHeading label="Projects" title="Selected Projects" description="A selection of full-stack and frontend projects focused on responsive interfaces, API integration, state management, authentication, and practical user flows." />
            <div className="projects-list">{projects.map((project, index) => <ProjectCard project={project} index={index} key={project.name} />)}</div>
          </div>
        </section>

        <section className="section section-dark" id="education">
          <div className="container"><SectionHeading label="Education & Certifications" title="A foundation built through practice" description="Structured full-stack training supported by practical projects and continued technical development." />
            <div className="certificate-grid">
              <CertificateCard institution="GoIT" program="Fullstack Developer Course" duration="872 hours" year="2025–2026" image={goitAsset.url} alt="GoIT Fullstack Developer certificate awarded to Roman Hrydin" />
              <CertificateCard institution="EPAM Campus" program="IT Fundamentals for Veterans" duration="110 hours" year="Completed 2025" image={epamAsset.url} alt="EPAM Campus IT Fundamentals for Veterans diploma awarded to Roman Hrydin" />
            </div>
            <div className="curriculum"><div><p className="eyebrow">Main curriculum</p><div className="curriculum-list">{["HTML & CSS","JavaScript","React","Next.js","Node.js","Career Skills"].map((item) => <span key={item}>{item}</span>)}</div></div><div className="university"><p className="eyebrow">Additional education</p><h3>Taurida V. I. Vernadsky National University</h3><p>Master’s Degree in History · 2006–2011</p></div></div>
          </div>
        </section>

        <section className="section background-section">
          <div className="container"><SectionHeading label="Professional Background" title="Experience beyond the code" />
            <div className="background-list">{professionalBackground.map((item) => <article key={item.role}><div><p className="eyebrow">{item.dates}</p><h3>{item.role}</h3><p>{item.organization}</p></div><p>{item.detail}</p></article>)}</div>
          </div>
        </section>

        <section className="cv-section">
          <div className="container cv-inner"><div><p className="section-label">Curriculum Vitae</p><h2>Want the full overview?</h2><p>Download my CV for a concise overview of my technical skills, project experience, education, and professional background.</p></div><Button size="lg" variant="secondary" asChild><a href={cvAsset.url} download="Roman-Hrydin-CV-English.pdf"><Download />Download CV — English</a></Button></div>
        </section>

        <section className="section" id="contact">
          <div className="container"><SectionHeading label="Contact" title="Let’s Get in Touch" description="Have a junior development opportunity or a project to discuss? I’d be glad to hear from you." />
            <div className="contact-grid">
              <a href="mailto:romario198901@gmail.com"><Mail /><span>Email</span><strong>romario198901@gmail.com</strong><ArrowUpRight /></a>
              <a href="https://www.linkedin.com/in/roman-hrydin-frontend-dev?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer"><Linkedin /><span>LinkedIn</span><strong>Roman Hrydin</strong><ArrowUpRight /></a>
              <a href="https://github.com/Romario198901" target="_blank" rel="noopener noreferrer"><Github /><span>GitHub</span><strong>Romario198901</strong><ArrowUpRight /></a>
              <a href="https://wa.me/380987028897" target="_blank" rel="noopener noreferrer"><MessageCircle /><span>WhatsApp</span><strong>+380 98 702 8897</strong><ArrowUpRight /></a>
            </div>
          </div>
        </section>
      </main>
      <footer><div className="container footer-inner"><div><strong>Roman Hrydin</strong><span>Junior Full-Stack Developer</span></div><p>© {new Date().getFullYear()} Roman Hrydin</p><div><a href="https://github.com/Romario198901" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><Github /></a><a href="https://www.linkedin.com/in/roman-hrydin-frontend-dev?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><Linkedin /></a></div></div></footer>
    </div>
  );
}