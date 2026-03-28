import "./Footer.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start:"top 85%",
          once: false,
        },
      });

      tl.from(".footer-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        
      })
        .from(
          ".footer-top p",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          ".footer-copy",
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".footer-links a",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.4"
        );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer-container">
        <div className="footer-top">
          <h2 className="footer-heading">
            Crafting fast, scalable, and
            <br /> user focused web-experiences.
          </h2>

          <p>
           
          </p>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
          Made by Karthik Sujith
          </p>

          <div className="footer-links">
            <a
              href="https://github.com/Karthik-Sujith"
              target="_blank"
              rel="noreferrer"
              className="github"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/karthiksujith"
              target="_blank"
              rel="noreferrer"
              className="linkedin"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
