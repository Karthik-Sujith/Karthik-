import { useEffect, useRef } from "react";
import "./Project.css";

const projectsRaw = [
  {
    title: "Amenities Locator",
    category: "Web App",
    description:
      "Find nearby amenities instantly — hospitals, ATMs, parks, and more — with real-time map integration and smart filters.",
    tags: ["React", "Maps API", "Geolocation"],
    link: "https://amenities-locator.vercel.app/",
    github: "https://github.com/Karthik-Sujith/Amenities-locator",
  },
  {
    title: "Photobooth App",
    category: "Web App",
    description:
      "A fun in-browser photobooth with filters, frames, and instant download. No install needed — just open and snap.",
    tags: ["JavaScript", "Canvas API", "CSS"],
    link: "https://photobooth-iota-six.vercel.app/",
    github: "https://github.com/Karthik-Sujith/photobooth",
  },
  {
    title: "Expense Tracker",
    category: "Web App",
    description:
      "Track daily spending with category breakdowns, budget limits, and visual charts to keep your finances in check.",
    tags: ["React", "Chart.js", "LocalStorage"],
    link: "https://expense-tracker-six-ashy-82.vercel.app/",
    github: "https://github.com/Karthik-Sujith/Expense-Tracker",
  },
  {
    title: "Resume Builder",
    category: "Web App",
    description:
      "Generate a polished resume in minutes. Pick a template, fill in your details, and export a print-ready PDF.",
    tags: ["React", "PDF.js", "CSS"],
    link: "https://resume-builder-rose-xi.vercel.app/",
    github: "https://github.com/Karthik-Sujith/Resume-builder",
  },
  {
    title: "Habit Tracker",
    category: "Productivity",
    description:
      "Build streaks and stay consistent. Log daily habits, visualise progress, and get gentle reminders to keep going.",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://habit-tracker-kohl-phi.vercel.app/",
    github: "https://github.com/Karthik-Sujith/Habit-Tracker",
  },
  {
    title: "Pinterest Frontend",
    category: "Website",
    description:
      "A pixel-perfect Pinterest clone with masonry layout, infinite scroll, and responsive board management.",
    tags: ["React", "CSS Grid", "REST API"],
    link: "https://pinterest-frontend-five.vercel.app/",
    github: "https://github.com/Karthik-Sujith/pinterest-frontend",
  },
  {
    title: "Notes App",
    category: "Productivity",
    description:
      "A minimal notes app with rich text editing, colour labels, and instant search to keep your thoughts organised.",
    tags: ["React", "Quill.js", "LocalStorage"],
    link: "https://notes-app-xi-rosy.vercel.app/",
    github: "https://github.com/Karthik-Sujith/notes-app",
  },
  {
    title: "Color Palette Website",
    category: "Web App",
    description:
      "Generate, save, and export beautiful colour palettes. Includes contrast checker and one-click copy for hex values.",
    tags: ["JavaScript", "CSS", "Canvas"],
    link: "https://color-palette-app-orpin.vercel.app/",
    github: "https://github.com/Karthik-Sujith/color-palette-app",
  },
  {
    title: "Split and Settle App",
    category: "Web App",
    description:
      "A smart expense splitting app that helps groups track shared expenses and settle debts with real-time calculations.",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://split-and-settle.vercel.app/",
    github: "https://github.com/Karthik-Sujith/split-and-settle",
  },
  
  {
    title: "Text Cleaner",
    category: "Tool",
    description:
      "Paste messy text and clean it instantly — remove extra spaces, fix case, strip HTML, and format for any use.",
    tags: ["JavaScript", "Regex", "HTML"],
    link: "https://text-cleaner-sooty.vercel.app/",
    github: "https://github.com/Karthik-Sujith/text-cleaner",
  },
  {
    title: "Typing App",
    category: "Web App",
    description:
      "Improve your typing speed and accuracy with timed tests, WPM tracking, and difficulty levels from beginner to advanced.",
    tags: ["React", "JavaScript", "CSS"],
    link: "https://typing-app-coral.vercel.app/",
    github: "https://github.com/Karthik-Sujith/Typing-app",
  },
  {
    title: "Subscription Tracker",
    category: "Productivity",
    description:
      "Never forget a renewal. Log all your subscriptions, get cost breakdowns, and receive alerts before billing dates.",
    tags: ["React", "Node.js", "PostgreSQL"],
    link: "https://subscription-tracker-kappa-orcin.vercel.app/",
    github: "https://github.com/Karthik-Sujith/Subscription-tracker",
  },
  {
    title: "Clock App",
    category: "Tool",
    description:
      "A world clock app with multiple time zones, stopwatch, countdown timer, and an alarm — all in one clean interface.",
    tags: ["JavaScript", "HTML", "CSS"],
    link: "https://clock-app-five-silk.vercel.app/",
    github: "https://github.com/Karthik-Sujith/clock-app",
  },
  {
    title: "PDF Editor Website",
    category: "Web App",
    description:
      "Edit, annotate, merge, and compress PDFs right in the browser. No sign-up, no uploads to servers — fully private.",
    tags: ["React", "PDF-lib", "Canvas"],
    link: "https://pdf-editor-website-seven.vercel.app/",
    github: "https://github.com/Karthik-Sujith/pdf-editor-website",
  },
  {
    title: "Password Generator",
    category: "Tool",
    description:
      "Generate strong, secure passwords with custom length and character rules. Copy instantly or save to a local vault.",
    tags: ["JavaScript", "Crypto API", "HTML"],
    link: "https://expense-tracker-six-ashy-82.vercel.app/",
    github: "https://github.com/Karthik-Sujith/password-generator",
  },
  {
    title: "Table Tennis Academy",
    category: "Website",
    description:
      "A responsive website for a local Table Tennis Academy with schedules, player registration, and event announcements.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://highfivesportskannur.com/table-tennis",
    github: "https://github.com/abhirami100/High-five-Sports",
  },
  {
    title: "URL Shortner",
    category: "Web App",
    description:
      "A fast URL shortening service with custom alias support, click analytics, and QR code generation for every link.",
    tags: ["React", "Express", "PostgreSQL"],
    link: "https://url-shortner-wr98.onrender.com/",
    github: "https://github.com/Karthik-Sujith/url-shortner",
  },
];

// Fisher-Yates shuffle — seeded random so order is consistent per session
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const projects = shuffle(projectsRaw).map((p, i) => ({
  ...p,
  number: String(i + 1).padStart(2, "0"),
}));

export default function Project() {
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const loadScript = (src) =>
      new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) return resolve();
        const s = document.createElement("script");
        s.src = src;
        s.onload = resolve;
        s.onerror = reject;
        document.head.appendChild(s);
      });

    const init = async () => {
      await loadScript(
        "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
      );
      await loadScript(
        "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"
      );

      const { gsap, ScrollTrigger } = window;
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );

      const validCards = cardsRef.current.filter(Boolean);

      // First 6 animate on load
      gsap.fromTo(
        validCards.slice(0, 6),
        { opacity: 0, y: 36, scale: 0.97 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: { amount: 0.45, grid: [2, 3], from: "start" },
          delay: 0.15,
        }
      );

      // Rest animate on scroll
      validCards.slice(6).forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 32, scale: 0.97 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    };

    init();

    return () => {
      if (window.ScrollTrigger)
        window.ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="page">
      {/* ── Header ── */}
      <header className="page-header" ref={headerRef}>
        <div className="page-header-top">
          <div>
            <div className="header-eyebrow">
              <span className="eyebrow-pip" />
              <span className="eyebrow-text">My Work</span>
            </div>
            <h1 className="page-title">
              Projects<span className="page-title-ghost"></span>
            </h1>
          </div>
          <div className="header-right">
            
            
          </div>
        </div>
        <div className="page-header-rule" />
      </header>

      {/* ── Cards ── */}
      <div className="cards-grid">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className="proj-card"
            ref={(el) => (cardsRef.current[i] = el)}
          >
            <div className="card-bar" />
            <span className="card-ghost-num">{p.number}</span>

            <div className="card-inner">
              <div className="card-header">
                <span className="card-num">{p.number}</span>
                <span className="card-cat">{p.category}</span>
              </div>
              <h2 className="card-title">{p.title}</h2>
              <p className="card-desc">{p.description}</p>
              <div className="card-tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>

            <div className="card-footer">
              <div className="card-links">
                <a href={p.github} target="_blank" rel="noreferrer" className="clink">
                  GitHub
                </a>
                <a href={p.link} target="_blank" rel="noreferrer" className="clink clink--live">
                  Live ↗
                </a>
              </div>
              <div className="card-arrow">↗</div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}