import React, { useEffect, useRef, useState } from "react";
import "./Project.css";

const projects = [
  {
    id: "01",
    title: "Typing Speed Checker",
    description: "Real-time WPM tracking app to check and improve your typing speed.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://karthik-sujith.vercel.app/",
    github: "https://github.com/",
    category: "Utility",
  },
  {
    id: "02",
    title: "Expense Tracker",
    description: "Responsive expense tracking with local storage persistence and analytics.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://karthik-sujith.vercel.app/",
    github: "https://github.com/",
    category: "Finance",
  },
  {
    id: "03",
    title: "Table Tennis Academy",
    description: "Fully responsive sports academy website with modern UI design.",
    tech: ["React", "CSS", "JavaScript"],
    link: "https://karthik-sujith.vercel.app/",
    github: "https://github.com/",
    category: "Web",
  },
  {
    id: "04",
    title: "Portfolio Website",
    description: "Personal developer portfolio showcasing projects, skills, and experience.",
    tech: ["React", "Vite", "CSS"],
    link: "https://karthik-sujith.vercel.app/",
    github: "https://github.com/",
    category: "Web",
  },
  {
    id: "05",
    title: "Password Generator",
    description: "Generate secure passwords and check existing password strength instantly.",
    tech: ["React", "Vite", "CSS"],
    link: "https://karthik-sujith.vercel.app/",
    github: "https://github.com/",
    category: "Security",
  },
  {
    id: "06",
    title: "Notes App",
    description: "Frontend-based notes app with full CRUD features and clean UI.",
    tech: ["React", "Vite", "CSS"],
    link: "https://karthik-sujith.vercel.app/",
    github: "https://github.com/",
    category: "Productivity",
  },
  {
    id: "07",
    title: "Photobooth App",
    description: "Capture and create fun photo strips with this React-powered photobooth.",
    tech: ["React", "Vite", "CSS"],
    link: "https://karthik-sujith.vercel.app/",
    github: "https://github.com/",
    category: "Creative",
  },
  {
    id: "08",
    title: "PDF App",
    description: "Essential PDF utility tools for managing and editing your documents.",
    tech: ["React", "Vite", "CSS"],
    link: "https://pdf-editor-website-seven.vercel.app/",
    github: "https://github.com/Karthik-Sujith/pdf-editor-website",
    category: "Utility",
  },
  {
    id: "09",
    title: "Emergency App",
    description: "Locate nearby emergency amenities based on your current GPS location.",
    tech: ["React", "Vite", "CSS"],
    link: "https://karthik-sujith.vercel.app/",
    github: "https://github.com/",
    category: "Safety",
  },
  {
    id: "10",
    title: "QR-Code Generator",
    description: "Convert any text or URL into a scannable QR code instantly.",
    tech: ["React", "Vite", "CSS"],
    link: "https://karthik-sujith.vercel.app/",
    github: "https://github.com/",
    category: "Utility",
  },
  {
    id: "11",
    title: "Calculator",
    description: "A clean, functional calculator built with HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://karthik-sujith.vercel.app/",
    github: "https://github.com/",
    category: "Utility",
  },
];

export default function Project() {
  const [hoveredId, setHoveredId] = useState(null);
  const [visible, setVisible] = useState({});
  const rowRefs = useRef([]);
  const headerRef = useRef(null);

  useEffect(() => {
    // Intersection Observer for scroll reveals
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.dataset.id;
            setVisible((prev) => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    rowRefs.current.forEach((row) => {
      if (row) observer.observe(row);
    });

    if (headerRef.current) observer.observe(headerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pj-root">
      {/* Grain texture overlay */}
      <div className="pj-grain" />

      {/* Decorative vertical lines */}
      <div className="pj-vlines">
        <div className="pj-vline" />
        <div className="pj-vline" />
        <div className="pj-vline" />
      </div>

      <div className="pj-container">
        {/* HEADER BLOCK */}
        <header
          className={`pj-header ${visible["header"] ? "pj-reveal" : ""}`}
          ref={headerRef}
          data-id="header"
        >
          <div className="pj-header-top">
            <span className="pj-eyebrow">— Selected Work</span>
            <span className="pj-header-count">{projects.length} Projects</span>
          </div>
          <div className="pj-title-row">
            <h1 className="pj-main-title">
              <span className="pj-title-outline">PRO</span>
              <span className="pj-title-filled">JECTS</span>
            </h1>
            <p className="pj-header-sub">
              Project Live links and Github links will be updated soon
            </p>
          </div>
        </header>

        {/* RULE */}
        <div className="pj-rule" />

        {/* COLUMN LABELS */}
        <div className="pj-col-labels">
          <span>Index</span>
          <span>Project</span>
          <span className="pj-col-hide-sm">Category</span>
          <span className="pj-col-hide-md">Stack</span>
          <span>Links</span>
        </div>

        <div className="pj-rule pj-rule--thin" />

        {/* PROJECT ROWS */}
        <ul className="pj-list">
          {projects.map((project, i) => (
            <li
              key={project.id}
              className={`pj-item ${visible[project.id] ? "pj-reveal" : ""} ${
                hoveredId === project.id ? "pj-item--active" : ""
              } ${hoveredId && hoveredId !== project.id ? "pj-item--dimmed" : ""}`}
              ref={(el) => (rowRefs.current[i] = el)}
              data-id={project.id}
              style={{ transitionDelay: `${(i % 6) * 60}ms` }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Animated left accent bar */}
              <div className="pj-accent-bar" />

              <span className="pj-id">{project.id}</span>

              <div className="pj-info">
                <h2 className="pj-name">{project.title}</h2>
                <p className="pj-desc">{project.description}</p>
              </div>

              <span className="pj-category pj-col-hide-sm">{project.category}</span>

              <div className="pj-tech pj-col-hide-md">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="pj-tag">{t}</span>
                ))}
              </div>

              <div className="pj-links">
                <a
                  href={project.link}
                  className="pj-btn"
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>Live</span>
                  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a
                  href={project.github}
                  className="pj-btn pj-btn--ghost"
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>Code</span>
                  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </li>
          ))}
        </ul>

        <div className="pj-rule" />

        {/* FOOTER ROW */}
        <div className="pj-footer">
          <span className="pj-footer-note">More work in progress ↗</span>
        </div>
      </div>
    </div>
  );
}