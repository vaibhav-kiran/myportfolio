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
  return (
    <div className="min-h-screen bg-[#0c0c10] text-[#f3f3f3]">
      <header className="sticky top-0 z-40 border-b border-[#1a1a20] bg-[#0c0c10]/80 glass">
        <div className="mx-auto flex max-w-5xl items-center justify-center px-6 py-4">
          <nav className="flex items-center gap-6 text-sm text-neutral-400">
            <a className="hover:text-neutral-100" href="#about">
              About
            </a>
            <a className="hover:text-neutral-100" href="#hackathons">
              Hackathons
            </a>
            <a className="hover:text-neutral-100" href="#skills">
              Skills
            </a>
            <a className="hover:text-neutral-100" href="#soft-skills">
              Soft Skills
            </a>
            <a className="hover:text-neutral-100" href="#contact">
              Contact
            </a>
          </nav>
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
            <h1 className="text-6xl font-black leading-none tracking-tight sm:text-7xl md:text-8xl">
              Vaibhav Kiran
            </h1>
            <p className="text-2xl font-medium text-neutral-400 sm:text-3xl">
              Biomedical Engineering Student
            </p>
            <p className="text-lg text-neutral-400 sm:text-xl max-w-4xl mx-auto">
              I&apos;m a Biomedical Engineering student specializing in intelligent
              medical systems and device prototyping. I&apos;m developing machine
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
            
            {/* Core Interests Terminal */}
            <div className="terminal-window max-w-4xl mx-auto mt-16">
              <div className="terminal-header">
                <div className="terminal-controls">
                  <span className="control-dot control-red"></span>
                  <span className="control-dot control-yellow"></span>
                  <span className="control-dot control-green"></span>
                </div>
                <span className="terminal-title">Core Interests</span>
              </div>
              <div className="terminal-body">
                <div className="terminal-line">
                  <span className="terminal-prompt">$</span>
                  <TypingText 
                    text=" biomedical-interests --list-focus" 
                    delay={0} 
                    showCursor={true}
                    className="terminal-command"
                  />
                </div>
                <div className="terminal-line terminal-line-delay-1">
                  <TypingText 
                    text="Scanning focus areas..." 
                    delay={800} 
                    showCursor={true}
                    className="terminal-text"
                  />
                </div>
                <div className="terminal-line terminal-line-delay-2">
                  <span className="terminal-check">✓</span>
                  <TypingText 
                    text="Machine Learning for Medical Datasets" 
                    delay={1800}
                    className="terminal-item"
                  />
                </div>
                <div className="terminal-line terminal-line-delay-3">
                  <span className="terminal-check">✓</span>
                  <TypingText 
                    text="AI-based Health Monitoring Systems" 
                    delay={2500}
                    className="terminal-item"
                  />
                </div>
                <div className="terminal-line terminal-line-delay-4">
                  <span className="terminal-check">✓</span>
                  <TypingText 
                    text="3D Medical Imaging & Segmentation (3D Slicer)" 
                    delay={3200}
                    className="terminal-item"
                  />
                </div>
                <div className="terminal-line terminal-line-delay-5">
                  <span className="terminal-check">✓</span>
                  <TypingText 
                    text="Rapid Prototyping (CAD to 3D Printing Workflow)" 
                    delay={4000}
                    className="terminal-item"
                  />
                </div>
                <div className="terminal-line terminal-line-delay-6">
                  <span className="terminal-check">✓</span>
                  <TypingText 
                    text="Real-time Alert/Assistance Systems" 
                    delay={4800}
                    className="terminal-item"
                  />
                </div>
                <div className="terminal-line terminal-line-delay-7">
                  <span className="terminal-check">✓</span>
                  <TypingText 
                    text="Signal & Sensor Data Acquisition for Healthcare" 
                    delay={5500}
                    className="terminal-item"
                  />
                </div>
                <div className="terminal-line terminal-line-delay-8">
                  <span className="terminal-check">✓</span>
                  <TypingText 
                    text="Biomedical Image Processing (CT, MRI, X-ray)" 
                    delay={6300}
                    className="terminal-item"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="py-16 sm:py-20"
        >
          <h2 className="text-3xl font-semibold sm:text-4xl text-neutral-100 text-center mb-10">
            About Me
          </h2>
          <div className="about-container">
              {/* Introduction Card */}
              <div className="about-card">
                  <h3>Introduction</h3>
                  <p>
                      I&apos;m a Biomedical Engineering student specializing in intelligent
                      medical systems and device prototyping. I&apos;m developing machine
                      learning solutions for healthcare, crafting high precision 3D
                      designs for innovative prototypes, and leveraging advanced imaging
                      techniques to better understand anatomy and enhance clinical
                      outcomes.
                  </p>
                  <p className="mt-4">
                      My hands-on experience ranges from backend development to infrastructure automation,
                      always with a focus on reliability, scalability, and continuous improvement.
                  </p>
              </div>

              {/* Education Card */}
              <div className="about-card">
                  <h3>Education</h3>
                  <div className="experience-timeline">
                      {experiences.map((item, index) => (
                          <div key={index} className="mb-8 last:mb-0">
                              <h4 className="text-lg font-bold text-neutral-50 mb-1">
                                  {item.degree || item.title}
                              </h4>
                              <p className="text-sm text-neutral-400 mb-1">
                                  {item.institution}
                              </p>
                              <span className="dates text-xs text-neutral-500">
                                  {item.dates}
                                  {item.expectedGraduation && ` • Expected: ${item.expectedGraduation}`}
                                  {item.score && ` • Score: ${item.score}`}
                              </span>
                              <p className="mt-2 text-neutral-300">
                                  {item.description}
                              </p>
                          </div>
                      ))}
                  </div>
              </div>

              {/* Professional Experience Card */}
              <div className="about-card">
                  <h3>Professional Experience</h3>
                  <div className="experience-timeline">
                      {jobs.map((item, index) => (
                          <div key={index} className="mb-8 last:mb-0">
                              <h4 className="text-lg font-bold text-neutral-50 mb-1">
                                  {item.title}
                              </h4>
                              <p className="text-sm text-neutral-400 mb-1">
                                  {item.institution}
                              </p>
                              <span className="dates text-xs text-neutral-500">
                                  {item.dates}
                              </span>
                              <p className="mt-2 text-neutral-300">
                                  {item.description}
                              </p>
                          </div>
                      ))}
                  </div>
              </div>

              {/* Highlights Card */}
              <div className="about-card">
                  <h3>Highlights</h3>
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
              </div>

              {/* Leadership Roles Card */}
              <div className="about-card">
                  <h3>Leadership Roles</h3>
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
              </div>
          </div>
        </section>

        <section
          id="hackathons"
          className="border-t border-[#1a1a20] py-16 sm:py-20"
        >
          <div className="flex items-baseline justify-between gap-4">
          <div>
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                Hackathon Achievements
              </p>
              <h2 className="mt-2 text-3xl font-semibold sm:text-4xl text-neutral-100">
                Winning Innovations
              </h2>
            </div>
          </div>
          <div className="mt-10 grid gap-6">
            {hackathons.map((hackathon) => (
              <article
                key={hackathon.title}
                className="group rounded-2xl border border-[#1f1f24] bg-[#111117] p-6 shadow-sm transition-transform duration-150 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-50">
                      {hackathon.title}
                    </h3>
                    <p className="mt-2 text-neutral-300">{hackathon.summary}</p>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 border-t border-[#1a1a20] py-16 sm:py-20">
          <section id="skills">
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
              Technical Skills
            </p>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl text-neutral-100">
              Tools I reach for
            </h2>
            <div className="mt-8 grid grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <div key={skill} className="bg-[#1a1a20] border border-[#2a2a30] rounded-lg p-4 text-center hover:bg-[#2a2a30] transition-colors duration-200 flex items-center justify-center min-h-full">
                  <p className="text-xs font-medium text-neutral-100">{skill}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="soft-skills" className="border-t border-[#1a1a20] md:border-t-0 pt-16 md:pt-0">
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
              Soft Skills
            </p>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl text-neutral-100">
              My Strengths
            </h2>
            <div className="mt-8 grid grid-cols-2 lg:grid-cols-3 gap-4">
              {softSkills.map((skill) => (
                <div key={skill} className="bg-[#1a1a20] border border-[#2a2a30] rounded-lg p-4 text-center hover:bg-[#2a2a30] transition-colors duration-200 flex items-center justify-center min-h-full">
                  <p className="text-xs font-medium text-neutral-100">{skill}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section
          id="contact"
          className="border-t border-[#1a1a20] py-16 sm:py-20"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                Contact
              </p>
              <h2 className="text-3xl font-semibold sm:text-4xl text-neutral-100">
                Let&apos;s build the next thing
              </h2>
              <p className="mt-2 text-neutral-300">
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
