import React from "react";
import "./Project.css";

const projects = [
  {
    id: "01",
    title: "Typing speed checker",
    description:
      "This is an app to check the typing speed .",
    tech: ["IoT", "NodeMCU", "Blynk", "Sensors"],
    link: "https://karthik-sujith.vercel.app/",
  },
  {
    id: "02",
    title: "Expense Tracker",
    description:
      "A responsive expense tracking web application built with HTML, CSS, and JavaScript featuring local storage and analytics.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://karthik-sujith.vercel.app/",
  },
  {
    id: "03",
    title: "Table Tennis Academy Website",
    description:
      "A fully responsive sports academy website built using React with modern UI design and interactive components.",
    tech: ["React", "CSS", "JavaScript"],
    link: "https://karthik-sujith.vercel.app/",
  },
  {
    id: "04",
    title: "Portfolio Website",
    description:
      "A personal developer portfolio showcasing projects, skills, and experience with a clean dark UI theme.",
    tech: ["React", "Vite", "CSS"],
    link: "https://karthik-sujith.vercel.app/",
  },

  {
    id: "05",
    title: "Password Generator",
    description:
      "A website which helps you generate secure passwords for your website and also check your existing password strength",
    tech: ["React", "Vite", "CSS"],
    link: "https://karthik-sujith.vercel.app/",
  },
  {
    id: "06",
    title: "Notes app",
    description:
      "A front end based notes app with CRUD features ",
    tech: ["React", "Vite", "CSS"],
    link: "https://karthik-sujith.vercel.app/",
  },
   {
    id: "07",
    title: "Photobooth app",
    description:
      "A photobooth app built in react to click photo strips ",
    tech: ["React", "Vite", "CSS"],
    link: "https://karthik-sujith.vercel.app/",
  },
   {
    id: "08",
    title: "PDF app",
    description:
      "A PDF app with essential PDF tools for you pdf ",
    tech: ["React", "Vite", "CSS"],
    link: "https://karthik-sujith.vercel.app/",
  },
   {
    id: "09",
    title: "Emergency app",
    description:
      "An app which helps you locate nearby amenities near you location ",
    tech: ["React", "Vite", "CSS"],
    link: "https://karthik-sujith.vercel.app/",
  },
   {
    id: "10",
    title: "QR-Code generator",
    description:
      "An app which helps you convert your content into QR codes",
    tech: ["React", "Vite", "CSS"],
    link: "https://karthik-sujith.vercel.app/",
  },
    {
    id: "11",
    title: "Calculator",
    description:
      "A calculator app made using html,css,js",
    tech: ["React", "Vite", "CSS"],
    link: "https://karthik-sujith.vercel.app/",
  },
];

function Project() {
  return (
    <div className="projects-page">
      <h1 className="projects-heading">PROJECTS</h1>

      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <span className="project-number">{project.id}</span>

            <h2 className="project-title">{project.title}</h2>

            <p className="project-description">{project.description}</p>

            <div className="project-tech">
              {project.tech.map((tech, index) => (
                <span key={index} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>

            <a href={project.link} className="project-link">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;