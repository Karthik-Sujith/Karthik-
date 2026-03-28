import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import "./Experience.css";

const Experience = () => {
  const [active, setActive] = useState(0);

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const listRef = useRef(null);
  const detailRef = useRef(null);

  const experiences = [
    {
      company: "Digital Buddha",
      role: "Web Developer Intern",
      duration: "Jul 2025 - Present",
      description:
        "Built reusable React components and improved UI performance while working closely with designers.",
    },
    {
      company: "Innobyte Services",
      role: "Web Developer Intern",
      duration: "Aug 2024 - Sep 2024",
      description:
        "Developed strong frontend fundamentals through hands-on projects and modern development practices.",
    },
    {
      company: "Sanlog Automations",
      role: "Python Developer Intern",
      duration: "Jun 2023 - Jul 2023",
      description:
        "Designed and implemented an IoT based smart poultry farming automation system.",
    },
    {
      company: "Visaithalam Solutions",
      role: "Content Writer",
      duration: "Feb 2023 - Mar 2023",
      description:
        "Delivered responsive websites for clients with a focus on usability and performance.",
    },
    {
      company: "Novitech",
      role: "Web Developer Intern",
      duration: "Jan 2022 - Jan 2022",
      description:
        "Learnt about HTML and CSS and JS and made a website.",
    },
  ];

  
  useEffect(() => {
    gsap.set([titleRef.current, listRef.current, detailRef.current], {
      opacity: 0,
      y: 30,
    });

    gsap.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });

    gsap.to(listRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
      delay: 0.1,
    });

    gsap.to(detailRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
      delay: 0.2,
    });
  }, []);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % experiences.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [experiences.length]);

  
  useEffect(() => {
    if (!detailRef.current) return;

    gsap.fromTo(
      detailRef.current,
      { opacity: 0, y: 16 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      }
    );
  }, [active]);

  return (
    <section className="experience" id="experience" ref={sectionRef}>
      <div className="experience-container">
        <h2 className="experience-title" ref={titleRef}>
          EXPERIENCE
        </h2>

        <div className="experience-focus">
          
          <div className="experience-list" ref={listRef}>
            {experiences.map((exp, index) => (
              <button
                key={exp.company}
                className={`experience-tab ${
                  active === index ? "active" : ""
                }`}
                type="button"
                onClick={() => setActive(index)}
              >
                {exp.company}
              </button>
            ))}
          </div>

          
          <div className="experience-detail" ref={detailRef}>
            <h3>{experiences[active].role}</h3>

            <span className="meta">
              {experiences[active].company} •{" "}
              {experiences[active].duration}
            </span>

            <p>{experiences[active].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
