import "./Header.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Header() {
  const logoRef = useRef(null);
  const navRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
  
    gsap.set([logoRef.current, contactRef.current], {
      opacity: 0,
      y: -24,
    });

    if (navRef.current) {
      gsap.set(navRef.current.children, {
        opacity:0,
        y: -20,
      });
    }

    
    const tl = gsap.timeline({
      defaults: { ease: "power4.out" },
    });

    tl.to(logoRef.current, {      
      opacity: 1,
      y: 0,
      duration: 0.6,
    })
      .to(
        navRef.current.children,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
        },
        "-=0.35"
      )
      .to(
        contactRef.current,
        {
          
          opacity: 1,
          y: 0,
          duration: 0.55,
        },
        "-=0.3"
      );
  }, []);

  const scrollToSection = (id) => {
    
    const section = document.getElementById(id);
    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="header">
      {/* LOGO */}
      <div
        className="logo"
        ref={logoRef}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{ cursor: "pointer" }}
      >
        KS<span className="dot">.</span>
      </div>

      
      <nav className="nav-bar" ref={navRef}>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Home
        </button>

        <button onClick={() => scrollToSection("skills")}>
          Skills
        </button>

        <button onClick={() => scrollToSection("experience")}>
          Experience
        </button>

        <button onClick={() => scrollToSection("projects")}>
        Projects
        </button>
      </nav>

    
      <button
        className="contact-btn"
        ref={contactRef}
        onClick={() => scrollToSection("contact")}
      >
        Contact
      </button>
    </header>
  );
}
