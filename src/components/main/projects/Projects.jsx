import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Smart Poultry Farming",
    desc: "IoT-based automation system with real-time monitoring.",
    tech: "IoT  NodeMCU",
  },
  {
    title: "Expense Tracker",
    desc: "You can track you expenses.",
    tech: "React HTML JS CSS",
  },
  {
    title: "Table Tennis Academy Website",
    desc: "Website for Table tennis Academy.",
    tech: "React HTML JS CSS",
  },
  {
    title: "Portfolio Website",
    desc: "I built my portfolio websites",
    tech: "React HTML JS CSS",
  },
];

export default function Projects() {
  const [active, setActive] = useState(null);
  const rowsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    rowsRef.current.forEach((row, i) => {
      if (!row) return;

      const index = row.querySelector(".type-index");
      const title = row.querySelector("h3");

      gsap.fromTo(
        [index, title],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 80%",
            once: true,
          },
          delay: i * 0.08,
        }
      );
    });
  }, []);

  const handleClick = (i) => {
    setActive(active === i ? null : i);
  };

  return (
    <section className="type-projects" id="projects">
      <div className="type-container">
        <h2 className="type-title">PROJECTS</h2>

        <div className="type-lists">
          {projects.map((p, i) => (
            <div
              key={i}
              ref={(el) => (rowsRef.current[i] = el)}
              className={`type-row ${active === i ? "active" : ""}`}
              onClick={() => handleClick(i)}
            >
              <span className="type-index">0{i + 1}</span>

              <h3>{p.title}</h3>

              <div className="type-reveal">
                <p>{p.desc}</p>
                <span>{p.tech}</span>

                <div className="type-links">
                  <a href="https://karthik-sujith.vercel.app/">Live</a>
                  <a href="https://karthik-sujith.vercel.app/">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="type-view-all-wrapper">
          <button
            className="type-view-all-btn"
            onClick={() => navigate("/projects")}
          >
            <span>View All</span>
          </button>
        </div>
      </div>
    </section>
  );
}