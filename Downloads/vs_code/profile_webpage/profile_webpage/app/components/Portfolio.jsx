"use client";

import React from "react";

const projects = [
  {
    title: "Anti-sleep alert system",
    period: "2025",
    summary: "Real-time drowsiness detection with computer vision and haptics.",
    tags: ["Python", "OpenCV", "Edge device"],
  },
  {
    title: "Supercapacitor lab automation",
    period: "2024",
    summary:
      "Instrument control + dashboards for rapid testing and reporting.",
    tags: ["Instrumentation", "Dashboards", "Data pipelines"],
  },
  {
    title: "CT/MRI segmentation workflows",
    period: "2024",
    summary: "3D Slicer pipelines for anatomical labeling and volume export.",
    tags: ["3D Slicer", "Python", "Medical imaging"],
  },
  {
    title: "Biomedical systems prototyping",
    period: "2023",
    summary: "Rapid hardware prototypes exploring sensors and patient safety.",
    tags: ["Arduino", "Fusion 360", "Safety-first builds"],
  },
];

const experiences = [
  {
    degree: "B.Tech, Biomedical Engineering (AI & ML)",
    institution: "Karunya Institute Of Technology And Sciences, Coimbatore",
    dates: "2021 - Present",
    expectedGraduation: "2027",
    description: "Specializing in intelligent medical systems, machine learning for healthcare, and advanced biomedical device prototyping.",
  },
  {
  title: "Class XII | PCB", // This was degree, changed to title for consistency
    institution: "Sri Sathya Sai Loka Seva P.U. College, ALIKE",
    dates: "2020 - 2021",
    score: "93%",
    description: "Completed higher secondary education with Physics, Chemistry, and Biology.",
  },
  {
    title: "Class X", // This was degree, changed to title for consistency
    institution: "Sri Sathya Sai Loka Seva Vidya Kendra Alike",
    dates: "2018 - 2020",
    score: "82%",
    description: "Completed secondary education with strong foundation in science and mathematics.",
  },
];

const jobs = [
  {
    title: "Product Developer",
    institution: "Vivnovation",
    dates: "August 2023 - Present",
    description: "Contributed multiple innovative project concepts and developed a smart foot-health monitoring device, focusing on functional design and practical clinical impact.",
  },
  {
    title: "Product Engineer",
    institution: "Vivnovation",
    dates: "May 2023 - August 2023",
    description: "Working on product development, debugging system issues, and assisting in completing COL documentation and requirements.",
  },
];

const hackathons = [
  {
    title: "Smart India Hackathon 2024 – Winner",
    summary: "Recognized for developing a high-impact, problem-solving solution at a national level.",
    images: ["/Hackathon_pic.jpg"],
  },
  {
    title: "India–Israel Hackathon 2025 – Winner",
    summary: "Collaborated on an international innovation challenge and delivered a winning prototype.",
    images: ["/hackathon.jpeg", "/hackathon1.jpeg", "/hackathon2.jpeg"],
  },
];

const skills = [
  "Microsoft Office",
  "LabVIEW",
  "AutoCAD",
  "MATLAB",
  "Python",
  "Spyder",
  "Arduino IDE",
  "EAGLE",
  "VS Code",
  "Jupyter Notebook",
  "SolidWorks (Beginner/Intermediate)",
  "Fusion 360",
  "KiCad",
  "Raspberry Pi OS / Terminal Usage",
  "Git & GitHub",
  "3D Slicer",
  "TensorFlow (Basic ML workflows)",
  "OpenCV",
];

const softSkills = [
  "Critical Thinking",
  "Leadership",
  "Communication",
  "Strategic Planning",
  "Research",
  "Teamwork",
  "Problem-Solving",
  "Time Management",
  "Adaptability",
  "Public Speaking & Presentation",
  "Decision-Making",
  "Project Coordination",
  "Collaboration Across Teams",
  "Technical Documentation Skills",
  "Analytical Reasoning",
  "Creative Ideation",
];

function TypingText({ text, delay = 0, showCursor = false, className = "" }) {
  const [displayedText, setDisplayedText] = React.useState("");
  const [isTyping, setIsTyping] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
        }
      }, 30); // Fast typing speed - 30ms per character

      return () => clearInterval(typingInterval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && isTyping && <span className="terminal-cursor">_</span>}
    </span>
  );
}

export default function Portfolio() {
  const [theme, setTheme] = React.useState("dark");
  const isDark = theme === "dark";

  const pageClass = isDark
    ? "bg-[#0a0a0a] text-[#f8fafc]"
    : "bg-[#f6f8fb] text-[#0b1220]";
  const headerClass = isDark
    ? "bg-[#0a0a0a]/85"
    : "bg-white/85";
  const navLinkClass = isDark
    ? "text-neutral-200 hover:text-white"
    : "text-[#334155] hover:text-[#0b1220]";
  const surfaceClass = isDark
    ? "bg-[#111111]"
    : "bg-[#e8edf5] shadow-sm";
  const cardClass = isDark
    ? "bg-[#111111]"
    : "bg-[#e1e7f0] shadow-sm";
  const mutedText = isDark ? "text-neutral-300" : "text-[#334155]";
  const softerText = isDark ? "text-neutral-200" : "text-[#1e293b]";
  const strongText = isDark ? "text-white" : "text-[#0b1220]";
  const borderMain = isDark ? "border-[#1f1f24]" : "border-[#d5dce6]";

  const terminalVars = isDark
    ? {
        "--terminal-bg": "#111111",
        "--terminal-border": "#1f1f24",
        "--terminal-header-bg": "#111111",
        "--terminal-header-text": "#cfd5e5",
        "--terminal-body-bg": "#111111",
        "--terminal-text": "#f8fafc",
        "--terminal-accent": "#27c93f",
      }
    : {
        "--terminal-bg": "#e8edf5",
        "--terminal-border": "#d5dce6",
        "--terminal-header-bg": "#dfe6f2",
        "--terminal-header-text": "#0b1220",
        "--terminal-body-bg": "#f5f8fd",
        "--terminal-text": "#0b1220",
        "--terminal-accent": "#1e9c3f",
      };

  return (
    <div className={`min-h-screen ${pageClass}`}>
      <header className={`sticky top-0 z-40 glass ${headerClass}`}>
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <nav className="flex items-center gap-6 text-sm">
            <a className={navLinkClass} href="#about">
              About
            </a>
            <a className={navLinkClass} href="#hackathons">
              Hackathons
            </a>
            <a className={navLinkClass} href="#skills">
              Skills
            </a>
            <a className={navLinkClass} href="/RESUME.pdf" target="_blank" rel="noreferrer">
              Resume
            </a>
            <a className={navLinkClass} href="#soft-skills">
              Soft Skills
            </a>
            <a className={navLinkClass} href="#contact">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition-colors duration-150 ${
                isDark
                  ? "border-[#1f2638] bg-[#111424] text-white hover:bg-[#161a2b]"
                  : "border-[#ced7e3] bg-white text-[#0b1220] shadow-sm hover:bg-[#eef2f7]"
              }`}
              href="/RESUME.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <span>📄</span>
              <span>Resume</span>
            </a>
            <button
              type="button"
              aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className={`flex items-center gap-2 rounded-full px-3 py-1 text-xs border transition-colors duration-150 ${
                isDark
                  ? "border-[#2a2a30] bg-[#16161d] text-neutral-200 hover:bg-[#1f1f27]"
                  : "border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-100 shadow-sm"
              }`}
            >
              <span>{isDark ? "🌞" : "🌙"}</span>
              <span>{isDark ? "Light" : "Dark"} mode</span>
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 pb-24">
        <section
          id="home"
          className="relative flex flex-col items-center gap-10 py-20 text-center"
        >
          <div className="absolute inset-0 pointer-events-none">
            <svg
              className="star small"
              style={{ top: "12%", left: "20%" }}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2l2 6h6l-5 3.6L16 18l-4-3-4 3 1-6.4L4 8h6z" />
            </svg>
            <svg
              className="star blue"
              style={{ top: "10%", left: "50%" }}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2l2 6h6l-5 3.6L16 18l-4-3-4 3 1-6.4L4 8h6z" />
            </svg>
            <svg
              className="star orange"
              style={{ top: "18%", right: "24%" }}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2l2 6h6l-5 3.6L16 18l-4-3-4 3 1-6.4L4 8h6z" />
            </svg>
            <svg
              className="star small blue"
              style={{ top: "26%", left: "36%" }}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2l2 6h6l-5 3.6L16 18l-4-3-4 3 1-6.4L4 8h6z" />
            </svg>
            <svg
              className="star small"
              style={{ top: "24%", right: "32%" }}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2l2 6h6l-5 3.6L16 18l-4-3-4 3 1-6.4L4 8h6z" />
            </svg>
            <svg
              className="star orange"
              style={{ top: "8%", left: "15%" }}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2l2 6h6l-5 3.6L16 18l-4-3-4 3 1-6.4L4 8h6z" />
            </svg>
            <svg
              className="star small blue"
              style={{ top: "14%", right: "18%" }}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2l2 6h6l-5 3.6L16 18l-4-3-4 3 1-6.4L4 8h6z" />
            </svg>
            <svg
              className="star"
              style={{ top: "22%", left: "28%" }}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2l2 6h6l-5 3.6L16 18l-4-3-4 3 1-6.4L4 8h6z" />
            </svg>
            <svg
              className="star small"
              style={{ top: "20%", right: "40%" }}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2l2 6h6l-5 3.6L16 18l-4-3-4 3 1-6.4L4 8h6z" />
            </svg>
            <svg
              className="star blue"
              style={{ top: "16%", left: "42%" }}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2l2 6h6l-5 3.6L16 18l-4-3-4 3 1-6.4L4 8h6z" />
            </svg>
            <svg
              className="star small orange"
              style={{ top: "28%", right: "28%" }}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2l2 6h6l-5 3.6L16 18l-4-3-4 3 1-6.4L4 8h6z" />
            </svg>
          </div>
          <div className="space-y-6 max-w-4xl">
            <h1 className={`text-6xl font-black leading-none tracking-tight sm:text-7xl md:text-8xl ${strongText}`}>
              Vaibhav Kiran
            </h1>
            <p className={`text-2xl font-medium sm:text-3xl ${mutedText}`}>
              Biomedical Engineering Student
            </p>
            <p className={`text-lg sm:text-xl max-w-4xl mx-auto ${mutedText}`}>
              I'm a Biomedical Engineering student specializing in intelligent
              medical systems and device prototyping. I'm developing machine
              learning solutions for healthcare, crafting high precision 3D
              designs for innovative prototypes, and leveraging advanced imaging
              techniques to better understand anatomy and enhance clinical
              outcomes.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              <a
                className="cta-button"
                href="https://www.linkedin.com/in/vaibhav-kiran/"
                target="_blank"
                rel="noreferrer"
              >
                <span>🔗</span>
                LinkedIn
              </a>
              <a
                className="cta-button"
                href="https://github.com/vaibhav-kiran"
                target="_blank"
                rel="noreferrer"
              >
                <span>🐙</span>
                GitHub
              </a>
              <a
                className="cta-button"
                href="mailto:vaibhavkiran.work@gmail.com"
              >
                <span>✉️</span>
                Contact
              </a>
            </div>
          </div>
        </section>
        
        <section id="about">
          <h2 className={`text-3xl font-semibold sm:text-4xl text-center mb-10 ${strongText}`}>
            About Me
          </h2>
        </section>

        <section
          id="introduction"
          className={`p-8 rounded-2xl ${surfaceClass} mb-8`}
        >
          <h3 className={`text-xl font-semibold mb-2 ${strongText}`}>Introduction</h3>
          <p className={softerText}>
              I'm a Biomedical Engineering student specializing in intelligent
              medical systems and device prototyping. I'm developing machine
              learning solutions for healthcare, crafting high precision 3D
              designs for innovative prototypes, and leveraging advanced imaging
              techniques to better understand anatomy and enhance clinical
              outcomes.
          </p>
          <p className={`mt-4 ${softerText}`}>
              My hands-on experience ranges from backend development to infrastructure automation,
              always with a focus on reliability, scalability, and continuous improvement.
          </p>
        </section>

        <section
          id="education"
          className={`p-8 rounded-2xl ${surfaceClass} mb-8`}
        >
          <h3 className={`text-xl font-semibold mb-2 ${strongText}`}>Education</h3>
          <div className="experience-timeline">
              {experiences.map((item, index) => (
                  <div key={index} className="mb-8 last:mb-0">
                      <h4 className={`text-lg font-bold mb-1 ${strongText}`}>
                          {item.degree || item.title}
                      </h4>
                      <p className={`text-sm mb-1 ${mutedText}`}>
                          {item.institution}
                      </p>
                      <span className={`dates text-xs ${mutedText}`}>
                          {item.dates}
                          {item.expectedGraduation && ` • Expected: ${item.expectedGraduation}`}
                          {item.score && ` • Score: ${item.score}`}
                      </span>
                      <p className={`mt-2 ${softerText}`}>
                          {item.description}
                      </p>
                  </div>
              ))}
          </div>
        </section>

        <section
          id="experience"
          className={`p-8 rounded-2xl ${surfaceClass} mb-8`}
        >
          <h3 className={`text-xl font-semibold mb-2 ${strongText}`}>Professional Experience</h3>
          <div className="experience-timeline">
              {jobs.map((item, index) => (
                  <div key={index} className="mb-8 last:mb-0">
                      <h4 className={`text-lg font-bold mb-1 ${strongText}`}>
                          {item.title}
                      </h4>
                      <p className={`text-sm mb-1 ${mutedText}`}>
                          {item.institution}
                      </p>
                      <span className={`dates text-xs ${mutedText}`}>
                          {item.dates}
                      </span>
                      <p className={`mt-2 ${softerText}`}>
                          {item.description}
                      </p>
                  </div>
              ))}
          </div>
        </section>

        <section
          id="highlights"
          className={`p-8 rounded-2xl ${surfaceClass} mb-8`}
        >
          <h3 className={`text-xl font-semibold mb-2 ${strongText}`}>Highlights</h3>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2">
              <div className="highlight-group">
                  <div className="highlight-title">
                      <span className="about-icon">👨‍💼</span>
                      President – Department Technical Club (ReGen-X)
                  </div>
                  <div className="highlight-sub">Leading technical initiatives, student projects, and innovation-driven activities within the department.</div>
              </div>

              <div className="highlight-group">
                  <div className="highlight-title">
                      <span className="about-icon">🏆</span>
                      Smart India Hackathon 2024 – Winner
                  </div>
                  <div className="highlight-sub">Recognized for developing a high-impact, problem-solving solution at a national level.</div>
              </div>

              <div className="highlight-group">
                  <div className="highlight-title">
                      <span className="about-icon">🏅</span>
                      India–Israel Hackathon 2025 – Winner
                  </div>
                  <div className="highlight-sub">Collaborated on an international innovation challenge and delivered a winning prototype.</div>
              </div>

              <div className="highlight-group">
                  <div className="highlight-title">
                      <span className="about-icon">💡</span>
                      Product Engineer – Dizbi Private Ltd
                  </div>
                  <div className="highlight-sub">Worked on product ideas and developed a smart foot-health monitoring solution.</div>
              </div>

              <div className="highlight-group">
                  <div className="highlight-title">
                      <span className="about-icon">⚙️</span>
                      Product Engineer – Vivnovation
                  </div>
                  <div className="highlight-sub">Contributing to product development, debugging, and COL documentation processes.</div>
              </div>
          </div>
        </section>

        <section
          id="leadership"
          className={`p-8 rounded-2xl ${surfaceClass} mb-8`}
        >
          <h3 className={strongText}>Leadership Roles</h3>
          <div className="grid grid-cols-1 gap-y-2">
              <div className="highlight-group">
                  <div className="highlight-title">
                      <span className="about-icon">👑</span>
                      President & Head, REGEN-X — Department Technical Club
                  </div>
              </div>
              <div className="highlight-group">
                  <div className="highlight-title">
                      <span className="about-icon">🤝</span>
                      Senior Coordinator, Corporate Relations — E-Cell
                  </div>
              </div>
          </div>
        </section>

        <section id="hackathons">
          <div className="flex items-baseline justify-center gap-4">
          <div>
              <h2 className={`text-3xl font-semibold sm:text-4xl text-center mb-10 ${strongText}`}>
                Winning Innovations
              </h2>
            </div>
          </div>
          <div className="mt-10 grid gap-6">
            {hackathons.map((hackathon) => (
              <article
                key={hackathon.title}
                className={`group rounded-2xl p-6 transition-transform duration-150 hover:-translate-y-1 hover:shadow-md ${cardClass}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className={`text-xl font-semibold ${strongText}`}>
                      {hackathon.title}
                    </h3>
                    <p className={`mt-2 ${softerText}`}>{hackathon.summary}</p>
                  </div>
                </div>
                <div className={`mt-4 ${hackathon.images.length > 1 ? 'grid grid-cols-3 gap-2' : ''}`}>
                  {hackathon.images.map((image, index) => (
                    <img key={index} src={image} alt={`${hackathon.title} - ${index + 1}`} className={`w-full h-auto rounded-lg object-cover ${index === 0 ? 'max-h-96' : 'max-h-64'}`} />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <section id="skills" className={`p-8 rounded-2xl ${surfaceClass} mb-8`}>
            <p className={`text-xs uppercase tracking-[0.25em] ${mutedText}`}>
              Technical Skills
            </p>
            <h2 className={`mt-2 text-3xl font-semibold sm:text-4xl ${strongText}`}>
              Tools I reach for
            </h2>
            <div className="mt-8 grid grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className={`rounded-lg p-4 text-center transition-colors duration-200 flex items-center justify-center min-h-full ${cardClass} ${
                    isDark ? "hover:bg-[#161a2b]" : "hover:bg-[#dfe6f1]"
                  }`}
                >
                  <p className={`text-xs font-medium ${strongText}`}>{skill}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="soft-skills" className={`p-8 rounded-2xl ${surfaceClass} mb-8`}>
            <p className={`text-xs uppercase tracking-[0.25em] ${mutedText}`}>
              Soft Skills
            </p>
            <h2 className={`mt-2 text-3xl font-semibold sm:text-4xl ${strongText}`}>
              My Strengths
            </h2>
            <div className="mt-8 grid grid-cols-2 lg:grid-cols-3 gap-4">
              {softSkills.map((skill) => (
                <div
                  key={skill}
                  className={`rounded-lg p-4 text-center transition-colors duration-200 flex items-center justify-center min-h-full ${cardClass} ${
                    isDark ? "hover:bg-[#161a2b]" : "hover:bg-[#dfe6f1]"
                  }`}
                >
                  <p className={`text-xs font-medium ${strongText}`}>{skill}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section
          id="contact"
          className={`p-8 rounded-2xl ${surfaceClass}`}
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className={`text-xs uppercase tracking-[0.25em] ${mutedText}`}>
                Contact
              </p>
              <h2 className={`text-3xl font-semibold sm:text-4xl ${strongText}`}>
                Let&apos;s build the next thing
              </h2>
              <p className={`mt-2 ${softerText}`}>
                Open to collaborations, internships, and research projects.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                className="cta-button"
                href="mailto:vaibhavkiran.work@gmail.com"
              >
                <span>✉️</span>
                Email
              </a>
              <a
                className="cta-button"
                href="https://www.linkedin.com/in/vaibhav-kiran/"
                target="_blank"
                rel="noreferrer"
              >
                <span>🔗</span>
                LinkedIn
              </a>
              <a
                className="cta-button"
                href="https://github.com/vaibhav-kiran"
                target="_blank"
                rel="noreferrer"
              >
                <span>🐙</span>
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
