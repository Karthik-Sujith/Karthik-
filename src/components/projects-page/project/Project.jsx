import React, { useEffect, useRef } from "react";
import "./Project.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "01",
    title: "Typing Speed Checker",
    description: "An app to check and improve your typing speed with real-time WPM tracking.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://karthik-sujith.vercel.app/",
    github: "https://github.com/",
    year: "2024",
  },
  {
    id: "02",
    title: "Expense Tracker",
    description: "A responsive expense tracking web application featuring local storage and analytics.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://karthik-sujith.vercel.app/",
    github: "https://github.com/",
    year: "2024",
  },
  {
    id: "03",
    title: "Table Tennis Academy Website",
    description: "A fully responsive sports academy website built using React with modern UI design.",
    tech: ["React", "CSS", "JavaScript"],
    link: "https://karthik-sujith.vercel.app/",
    github: "https://github.com/",
    year: "2024",
  },
  {
    id: "04",
    title: "Portfolio Website",
    description: "A personal developer portfolio showcasing projects, skills, and experience.",
    tech: ["React", "Vite", "CSS"],
    link: "https://karthik-sujith.vercel.app/",
    github: "https://github.com/",
    year: "2024",
  },
  {
    id: "05",
    title: "Password Generator",
    description: "Generate secure passwords and check existing password strength instantly.",
    tech: ["React", "Vite", "CSS"],
    link: "https://karthik-sujith.vercel.app/",
    github: "https://github.com/",
    year: "2024",
  },
  {
    id: "06",
    title: "Notes App",
    description: "A frontend-based notes app with full CRUD features and clean UI.",
    tech: ["React", "Vite", "CSS"],
    link: "https://karthik-sujith.vercel.app/",
    github: "https://github.com/",
    year: "2024",
  },
  {
    id: "07",
    title: "Photobooth App",
    description: "A photobooth app built in React to capture and create fun photo strips.",
    tech: ["React", "Vite", "CSS"],
    link: "https://karthik-sujith.vercel.app/",
    github: "https://github.com/",
    year: "2024",
  },
  {
    id: "08",
    title: "PDF App",
    description: "A PDF utility app with essential tools for managing and editing your PDFs.",
    tech: ["React", "Vite", "CSS"],
    link: "https://karthik-sujith.vercel.app/",
    github: "https://github.com/",
    year: "2024",
  },
  {
    id: "09",
    title: "Emergency App",
    description: "Locate nearby emergency amenities based on your current location.",
    tech: ["React", "Vite", "CSS"],
    link: "https://karthik-sujith.vercel.app/",
    github: "https://github.com/",
    year: "2024",
  },
  {
    id: "10",
    title: "QR-Code Generator",
    description: "Convert any text or URL into a scannable QR code instantly.",
    tech: ["React", "Vite", "CSS"],
    link: "https://karthik-sujith.vercel.app/",
    github: "https://github.com/",
    year: "2024",
  },
  {
    id: "11",
    title: "Calculator",
    description: "A clean, functional calculator app built with HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://karthik-sujith.vercel.app/",
    github: "https://github.com/",
    year: "2024",
  },
];

export default function Project() {
  const rowsRef = useRef([]);
  const headingRef = useRef(null);
  const glowRef = useRef(null);
  const pageRef = useRef(null);

  useEffect(() => {
    // Heading reveal
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, ease: "power4.out" }
    );

    // Staggered row reveals
    rowsRef.current.forEach((row, i) => {
      if (!row) return;
      gsap.fromTo(
        row,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 88%",
            once: true,
          },
          delay: (i % 5) * 0.07,
        }
      );
    });

    // Cursor glow follow
    const handleMouseMove = (e) => {
      if (!glowRef.current) return;
      gsap.to(glowRef.current, {
        x: e.clientX - 200,
        y: e.clientY - 200,
        duration: 0.8,
        ease: "power2.out",
      });
    };

    const page = pageRef.current;
    page.addEventListener("mousemove", handleMouseMove);
    return () => page.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleRowEnter = (e) => {
    const num = e.currentTarget.querySelector(".pp2-num");
    const title = e.currentTarget.querySelector(".pp2-title");
    const arrow = e.currentTarget.querySelector(".pp2-arrow");
    gsap.to(num, { color: "#a020f0", x: 6, duration: 0.3, ease: "power2.out" });
    gsap.to(title, { x: 10, duration: 0.3, ease: "power2.out" });
    gsap.to(arrow, { x: 6, opacity: 1, duration: 0.3, ease: "power2.out" });
  };

  const handleRowLeave = (e) => {
    const num = e.currentTarget.querySelector(".pp2-num");
    const title = e.currentTarget.querySelector(".pp2-title");
    const arrow = e.currentTarget.querySelector(".pp2-arrow");
    gsap.to(num, { color: "#333", x: 0, duration: 0.3, ease: "power2.out" });
    gsap.to(title, { x: 0, duration: 0.3, ease: "power2.out" });
    gsap.to(arrow, { x: 0, opacity: 0.3, duration: 0.3, ease: "power2.out" });
  };

  return (
    <div className="pp2-root" ref={pageRef}>
      {/* Cursor glow */}
      <div className="pp2-glow" ref={glowRef} />

      <div className="pp2-container">
        {/* Header */}
        <div className="pp2-header" ref={headingRef}>
          <p className="pp2-label">SELECTED WORK</p>
          <h1 className="pp2-heading">PROJECTS</h1>
          <p className="pp2-count">{projects.length} Projects</p>
        </div>

        {/* Top border */}
        <div className="pp2-divider" />

        {/* Project rows */}
        {projects.map((project, i) => (
          <div
            key={project.id}
            className="pp2-row"
            ref={(el) => (rowsRef.current[i] = el)}
            onMouseEnter={handleRowEnter}
            onMouseLeave={handleRowLeave}
          >
            <div className="pp2-row-left">
              <span className="pp2-num">{project.id}</span>
              <div className="pp2-info">
                <h2 className="pp2-title">{project.title}</h2>
                <p className="pp2-desc">{project.description}</p>
              </div>
            </div>

            <div className="pp2-row-right">
              <div className="pp2-tech">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="pp2-badge">{t}</span>
                ))}
              </div>
              <span className="pp2-year">{project.year}</span>
              <div className="pp2-actions">
                <a href={project.link} className="pp2-link">Live ↗</a>
                <a href={project.github} className="pp2-link">GitHub ↗</a>
              </div>
              <span className="pp2-arrow">→</span>
            </div>
          </div>
        ))}

        <div className="pp2-divider" />

        <div className="pp2-footer">
          <p>All projects built with passion & precision.</p>
        </div>
      </div>
    </div>
  );
}