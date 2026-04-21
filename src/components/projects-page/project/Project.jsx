import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Project.css";

const projectsRaw = [
  {
    title: "Amenities Locator",
    category: "Web App",
    description:
      "Find nearby amenities instantly — hospitals,Police Stations,Fire stations nearest to your location real-time map integration.",
    tags: ["React", "Leaflet", "Geolocation", "Overpass API"],
    link: "https://amenities-locator.vercel.app/",
    github: "https://github.com/Karthik-Sujith/Amenities-locator",
  },
  {
    title: "Photobooth App",
    category: "Web App",
    description:
      "A fun in-browser photobooth with filters, frames, and instant download. No install needed — just open and snap.",
    tags: ["React", "Webcam API", "html2canvas"],
    link: "https://photobooth-iota-six.vercel.app/",
    github: "https://github.com/Karthik-Sujith/photobooth",
  },
  {
    title: "Expense Tracker",
    category: "Web App",
    description:
      "Track daily spending with category breakdowns, budget limits to keep your finances in check.",
    tags: ["React", "Lucide React", "LocalStorage"],
    link: "https://expense-tracker-six-ashy-82.vercel.app/",
    github: "https://github.com/Karthik-Sujith/Expense-Tracker",
  },
  {
    title: "Resume Builder",
    category: "Web App",
    description:
      "Generate a polished resume in minutes.Fill in your details, and export a print-ready PDF.",
    tags: ["React", "@react-pdf/renderer", "Lucide React"],
    link: "https://resume-builder-rose-xi.vercel.app/",
    github: "https://github.com/Karthik-Sujith/Resume-builder",
  },
  {
    title: "Habit Tracker",
    category: "Productivity",
    description:
      "Build streaks and stay consistent. Log daily habits, visualise progress to keep going.",
    tags: ["React", "React Router", "LocalStorage"],
    link: "https://habit-tracker-kohl-phi.vercel.app/",
    github: "https://github.com/Karthik-Sujith/Habit-Tracker",
  },
  {
    title: "Pinterest Frontend",
    category: "Website",
    description:
      "A pixel-perfect Pinterest clone with masonry layout, infinite scroll, and responsive board management.",
    tags: ["React", "DnD Kit", "html2canvas"],
    link: "https://pinterest-frontend-five.vercel.app/",
    github: "https://github.com/Karthik-Sujith/pinterest-frontend",
  },
  {
    title: "Notes App",
    category: "Productivity",
    description:
      "A minimal notes app with text editing to keep your thoughts organised.",
    tags: ["React", "Lucide React", "LocalStorage"],
    link: "https://notes-app-xi-rosy.vercel.app/",
    github: "https://github.com/Karthik-Sujith/notes-app",
  },
  {
    title: "Color Palette Website",
    category: "Web App",
    description:
      "Generate, save, and export beautiful colour palettes. Includes contrast checker and one-click copy for hex values.",
    tags: ["React", "GSAP", "colorthief", "Lenis"],
    link: "https://color-palette-app-orpin.vercel.app/",
    github: "https://github.com/Karthik-Sujith/color-palette-app",
  },
  {
    title: "Split and Settle App",
    category: "Web App",
    description:
      "A smart expense splitting app that helps groups track shared expenses and settle debts with real-time calculations.",
    tags: ["React", "Vite", "Supabase", "JavaScript"],
    link: "https://split-and-settle.vercel.app/",
    github: "https://github.com/Karthik-Sujith/split-and-settle",
  },
  {
    title: "Text Cleaner",
    category: "Tool",
    description:
      "Paste messy text and clean it instantly — remove extra spaces, fix case, strip HTML, and format for any use.",
    tags: ["React", "React Router", "CSS"],
    link: "https://text-cleaner-sooty.vercel.app/",
    github: "https://github.com/Karthik-Sujith/text-cleaner",
  },
  {
    title: "Typing App",
    category: "Web App",
    description:
      "Improve your typing speed and accuracy with timed tests, WPM tracking, and difficulty levels from beginner to advanced.",
    tags: ["React", "Chart.js", "react-chartjs-2"],
    link: "https://typing-app-coral.vercel.app/",
    github: "https://github.com/Karthik-Sujith/Typing-app",
  },
  {
    title: "Subscription Tracker",
    category: "Productivity",
    description:
      "Never forget a renewal. Log all your subscriptions and get cost breakdowns.",
    tags: ["React", "React Router", "LocalStorage"],
    link: "https://subscription-tracker-kappa-orcin.vercel.app/",
    github: "https://github.com/Karthik-Sujith/Subscription-tracker",
  },
  {
    title: "Clock App",
    category: "Tool",
    description:
      "A clock app with stopwatch, countdown timer, and an alarm — all in one clean interface.",
    tags: ["React", "Lucide React", "CSS"],
    link: "https://clock-app-five-silk.vercel.app/",
    github: "https://github.com/Karthik-Sujith/clock-app",
  },
  {
    title: "PDF Editor Website",
    category: "Web App",
    description:
      "Edit, annotate, merge, and compress PDFs right in the browser. No sign-up, no uploads to servers — fully private.",
    tags: ["React", "pdf-lib", "pdfjs-dist", "file-saver"],
    link: "https://pdf-editor-website-seven.vercel.app/",
    github: "https://github.com/Karthik-Sujith/pdf-editor-website",
  },
  {
    title: "Password Generator",
    category: "Tool",
    description:
      "Generate strong, secure passwords with custom length and character rules. Copy instantly or save to a local vault.",
    tags: ["React"],
    link: "https://expense-tracker-six-ashy-82.vercel.app/",
    github: "https://github.com/Karthik-Sujith/password-generator",
  },
  {
    title: "Table Tennis Academy",
    category: "Website",
    description:
      "A responsive website for a local Table Tennis Academy with schedules, player registration, and event announcements.",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    link: "https://highfivesportskannur.com/table-tennis",
    github: "https://github.com/abhirami100/High-five-Sports",
  },
  {
    title: "URL Shortner",
    category: "Web App",
    description:
      "A fast URL shortening service with custom alias support, click analytics, and QR code generation for every link.",
    tags: ["HTML", "Node.js", "Express", "JSON File"],
    link: "https://url-shortner-wr98.onrender.com/",
    github: "https://github.com/Karthik-Sujith/url-shortner",
  },
   {
    title: "Github Profile Finder",
    category: "Tool",
    description:
      "A tool to find github accounts by searching with their profile names.",
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Lucide React", "GitHub REST API"],
    link: "https://github-profile-finder-nine-coral.vercel.app",
    github: "https://github.com/Karthik-Sujith/Github-Profile-Finder",
  },
];

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
  const navigate = useNavigate();

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
            <button className="back-btn" onClick={() => navigate("/")}>
              <span className="back-btn-arrow">←</span>
              <span>Back</span>
            </button>
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
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}