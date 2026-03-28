import "./Education.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state (important for reverse animation)
      gsap.set(".eduC-entry", { x: -80, opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "bottom 25%",
          toggleActions: "play reverse play reverse",
        },
        defaults: {
          ease: "power3.out",
        },
      });

      /* TITLE */
      tl.from(".eduC-title", {
        y: 40,
        opacity: 0,
        duration: 0.7,
      })

        /* EDUCATION CARDS */
        .to(
          ".eduC-entry",
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
          },
          "-=0.3"
        )

        /* DIVIDERS */
        .from(
          ".eduC-divider",
          {
            scaleX: 0,
            transformOrigin: "left",
            duration: 0.5,
            stagger: 0.2,
          },
          "-=0.4"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="eduC-section" ref={sectionRef}>
      <div className="eduC-wrapper">
        <h2 className="eduC-title">education</h2>

        {/* College */}
        <div className="eduC-entry">
          <div className="eduC-year">2021–2025</div>
          <div className="eduC-info">
            <h3>Bachelor of Engineering (B.E)</h3>
            <p className="course">Computer Science and Engineering</p>
            <p className="school">Hindusthan Institute of Technology</p>
          </div>
        </div>

        <div className="eduC-divider"></div>

        {/* 12th */}
        <div className="eduC-entry">
          <div className="eduC-year">2020–2021</div>
          <div className="eduC-info">
            <h3>Higher Secondary Education</h3>
            <p className="course">Computer Science</p>
            <p className="school">Amrita Vidyalayam</p>
          </div>
        </div>

        <div className="eduC-divider"></div>

        {/* 10th */}
        <div className="eduC-entry">
          <div className="eduC-year">2018–2019</div>
          <div className="eduC-info">
            <h3>Secondary School Education</h3>
            <p className="course">CBSE</p>
            <p className="school">Amrita Vidyalayam</p>
          </div>
        </div>
      </div>
    </section>
  );
}
