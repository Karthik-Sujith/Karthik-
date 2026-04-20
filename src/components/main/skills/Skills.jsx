import "./Skills.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const focusAreas = [
  {
    title: "HTML",
    skill: "Markup & Structure",
    insight:"I focus on clean, semantic markup that improves accessibility, SEO, and long-term maintainability.",
  },
  {
    title: "CSS",
    skill: "Styling & Layout",
    insight:"I build responsive layouts, animations, and visual systems using modern CSS techniques.",
  },
  {
    title: "JAVASCRIPT",
    skill: "Logic & Interactivity",
    insight:"I handle async flows  and state driven UI behavior clearly.",
  },
  {
    title: "REACT",
    skill: "Framework",
    insight: "I design reusable components using hooks and predictable state management.",
  },
  {
    title: "GITHUB",
    skill: "Version Control",
    insight:"Maintaining different versions so that it is usable and trackable.",
  },
  {
    title: "PYTHON",
    skill: "Programming language",
    insight:"Using python for scripting, logic building , and development workflows.",
  },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const blocksRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* SECTION TITLE ANIMATION */
      gsap.from(".focus-header h2", {
        scrollTrigger: {
          trigger: ".focus-header",
          start: "top 85%",
          toggleActions: "play none none reset",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      /* THIS IS FOR THE BLOCK ANIMATIONS */
    
      blocksRef.current.forEach((block) => {
        if (!block) return;

        const index = block.querySelector(".focus-index");
        const title = block.querySelector("h3");
        const text = block.querySelector("p");
        const skill = block.querySelector(".focus-skill");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: block,
            start: "top 85%",
            toggleActions: "play none none reset",
          },
        });

        tl.from(block, {
          y: 40,
          opacity:0,
          duration:0.6,
          ease: "power3.out",
        })
          .from(
            index,
            {
              scale:0.6,
              opacity: 0,
              duration: 0.4,
              ease: "back-out(1.7)",
            },
            "-=0.3"
          )
          .from(
            title,
            {
              y: 20,
              opacity: 0,
              duration: 0.4,
              ease: "power2.out",
            },
            "-=0.25"
          )
          .from(
            text,
            {
              y: 20,
              opacity: 0,
              duration: 0.4,
              ease: "power2.out",
            },
            "-=0.2"
          )
          .from(
            skill,
            {
              scale: 0.85,
              opacity: 0,
              duration: 0.4,
              ease: "power2.out",
            },
            "-=0.15"
          );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="focus-skills" id="skills" ref={sectionRef}>
      <div className="focus-skills-inner">
        <div className="focus-header">
          <h2>SKILLSET</h2>
        </div>

        <div className="focus-layout">
          {focusAreas.map((area, index) => (
            <div
              className="focus-block"
              key={index}
              ref={(el) => (blocksRef.current[index] = el)}
            >
              <span className="focus-index">0{index + 1}</span>
              <h3>{area.title}</h3>
              <p>{area.insight}</p>
              <div className="focus-skill">{area.skill}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;