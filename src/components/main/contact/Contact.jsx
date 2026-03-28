import "./Contact.css";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const formRef = useRef();
  const sectionRef = useRef();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 🔒 Set initial hidden state (prevents load animation)
      gsap.set(
        [
          ".contact-copy h2",
          ".contact-copy p",
          ".contact-field",
          ".contact-form button",
        ],
        { opacity: 0, y: 40 }
      );

      gsap.to(".contact-copy h2", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      gsap.to(".contact-copy p", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      gsap.to(".contact-field", {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 85%",
          once: true,
        },
      });

      gsap.to(".contact-form button", {
        y: 0,
        opacity: 1,
        duration: 0.6,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 85%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_lcp2gzq",
        "template_rcbme0q",
        formRef.current,
        "7ZTf73lJjPEWmCe1j"
      )
      .then(() => {
        formRef.current.reset();
        toast.success("Message sent successfully!");
      })
      .catch(() => {
        toast.error("Failed to send message. Please try again.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <section className="contact-split" ref={sectionRef} id="contact">
      <div className="contact-wrapper">
      <div className="contact-copy">
          <h2>
            Let's build <br />
            something meaningful
          </h2>

          <p>
            I'm open to freelance work, full times roles, or interesting
            collaborations. If you have an idea or opportunity, let's work.
          </p>
        </div>

        <form ref={formRef} className="contact-form" onSubmit={sendEmail}>
          <div className="contact-field">
            <input type="text" name="user_name" required />
            <label>Name</label>
          </div>

          <div className="contact-field">
            <input type="email" name="user_email" required />
            <label>Email</label>
          </div>

          <div className="contact-field">
            <input type="text" name="user_subject" required />
            <label>Subject</label>
          </div>

          <div className="contact-field">
            <textarea name="user_message" required />
            <label>Message</label>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar
        pauseOnHover={false}
        draggable={false}
      />
    </section>
  );
}
