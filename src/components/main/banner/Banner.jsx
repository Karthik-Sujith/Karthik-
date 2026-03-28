import "./Banner.css";
import profileImg from "../../../assets/img.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export default function Banner() {
  const nameRef = useRef(null);
  const roleRef = useRef(null);
  const descRef = useRef(null);
  const actionsRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.set([nameRef.current, roleRef.current, descRef.current], {
      opacity: 0,
      y: 10,
    });

    gsap.set(actionsRef.current, { opacity: 0, y: 14 });
    gsap.set(imgRef.current, { opacity: 0, scale: 0.95 });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.to(nameRef.current, { opacity: 1, y: 0, duration: 0.8 })
      .to(nameRef.current, {
      
        duration: 1.2,
        text: "KARTHIK SUJITH",
      })
      .to(imgRef.current, { opacity: 1, scale: 1, duration: 0.8 }, "-=0.3")
      .to(roleRef.current, { opacity: 1, y: 0, duration: 0.6 })
      .to(descRef.current, { opacity: 1, y: 0, duration: 0.6 })
      .to(descRef.current, {
        duration: 3,
        ease: "none",
        text: {
          value:
            "Frontend developer focused on building clean, scalable, and user-friendly web interfaces with modern technologies.",
          delimiter: "",
        },
      })
      .to(actionsRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.4");
  }, []);

  return (
    <section className="banner">
      <div className="banner-container stacked">

        {/* NAME (ON TOP OF IMAGE) */}
        <h1 className="banner-title on-top">
          <span ref={nameRef}></span>
        </h1>

        {/* IMAGE */}
        <div className="banner-photo" ref={imgRef}>
          <img src={profileImg} alt="Karthik-Sujith" />
        </div>

        {/* ROLE */}
        <span className="banner-role" ref={roleRef}>
          Web Developer | Web Designer | Content Writer
        </span>

        {/* DESCRIPTION */}
        <p className="banner-desc" ref={descRef}></p>

        {/* BUTTONS */}
        <div className="banner-actions" ref={actionsRef}>
          <a href="#projects" className="btn primary">View Work</a>
          <a href="#contact" className="btn secondary">My Resume</a>
        </div>

      </div>
    </section>
  );
}
