"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";

const roles = ["Software Engineer", "Tech Entrepreneur"];
const aboutText =
  "Visionary | An Exceptional Technopreneur | Unique Blend of Technical Expertise | Entrepreneurial Vision | Relentless Drive for Innovation in Financial Markets | Software Engineer";

const skills = [
  {
    title: "Software Development",
    description:
      "Bachelor's degree in Software Engineering, with a deep understanding of digital systems.",
    tags: ["Software Engineering", "Digital Systems"],
  },
  {
    title: "Broadcast Engineering",
    description:
      "Experience at Star FM and Capitalk FM exposed me to mass audience communication, content distribution, and how to engage large and diverse audiences effectively.",
    tags: ["Star FM", "Capitalk FM", "Content Distribution"],
  },
  {
    title: "Marketing & Content Strategy",
    description:
      "I build content strategies that are creative and technically informed, designed for reach, engagement and brand growth, and aligned with algorithm-driven platforms.",
    tags: ["Audience Engagement", "Content Strategy", "Brand Growth"],
  },
  {
    title: "Social Media Presence",
    description:
      "Active on Twitter and LinkedIn, I keep up with current trends, especially what resonates with audiences in Zimbabwe.",
    tags: ["Twitter", "LinkedIn", "Zimbabwe Audiences"],
  },
  {
    title: "Why Luis Madziro",
    description:
      "A strong blend of software development, broadcast engineering and marketing: a deep understanding of digital systems, audience engagement, and content that performs well online.",
    tags: ["Tech", "Broadcast", "Marketing"],
  },
];

const services = [
  {
    title: "Professional Websites",
    subtitle: "Designed for your business",
    description:
      "We create polished, user-friendly websites that bring your business online and give your brand a professional first impression.",
    tags: ["Custom Websites", "Responsive Design", "User-Friendly"],
  },
  {
    title: "Stand Out and Grow",
    subtitle: "Make every visit count",
    description:
      "A strong online presence helps your business get noticed, connect with the right customers, and turn interest into growth.",
    tags: ["Branding", "Customer Reach", "Business Growth"],
  },
  {
    title: "Own Your Market",
    subtitle: "The Market Engineers",
    description:
      "Wherever there is a market, we aim to dominate it and make your brand visible. We build digital experiences that help your business stand out from the competition.",
    tags: ["Market Visibility", "Digital Strategy", "Brand Impact"],
  },
];

const navigation = ["Home", "About", "Skills", "Work", "Portfolio", "Contact"];

function SocialLinks() {
  return (
    <div className="my-[30px] flex gap-3" aria-label="Social profiles">
      <a
        className="social-link"
        href="https://www.linkedin.com/in/luis-madziro-ab000b279"
        aria-label="LinkedIn"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </a>
      <a
        className="social-link"
        href="https://twitter.com/eng_lui_tme"
        aria-label="X / Twitter"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>
      <a
        className="social-link"
        href="https://www.instagram.com/eng_lui_tme"
        aria-label="Instagram"
      >
        <svg className="stroke-icon" viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r=".6" />
        </svg>
      </a>
      <a
        className="social-link"
        href="https://wa.me/263790443607"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.2 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.3 0 .5l-.4.6-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.4.1.6-.1l.8-1c.2-.3.4-.2.6-.1l2 1c.3.1.5.2.5.3.1.2.1.7-.1 1.3z" />
        </svg>
      </a>
    </div>
  );
}

function Reveal({ children }: { children: React.ReactNode }) {
  return <div className="reveal">{children}</div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [role, setRole] = useState(roles[0]);
  const [aboutProgress, setAboutProgress] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const [slidesPaused, setSlidesPaused] = useState(false);

  useEffect(() => {
    let titleIndex = 0;
    let character = roles[0].length;
    let deleting = true;
    let timeout: ReturnType<typeof setTimeout>;

    const typeRole = () => {
      const currentRole = roles[titleIndex];
      if (deleting) {
        character -= 1;
        setRole(currentRole.slice(0, character));
        if (character === 0) {
          deleting = false;
          titleIndex = (titleIndex + 1) % roles.length;
          timeout = setTimeout(typeRole, 400);
          return;
        }
        timeout = setTimeout(typeRole, 50);
      } else {
        character += 1;
        setRole(roles[titleIndex].slice(0, character));
        if (character === roles[titleIndex].length) {
          deleting = true;
          timeout = setTimeout(typeRole, 1500);
          return;
        }
        timeout = setTimeout(typeRole, 100);
      }
    };

    timeout = setTimeout(typeRole, 1500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (aboutProgress >= aboutText.length) return;
    const timeout = setTimeout(() => {
      setAboutProgress((progress) => Math.min(progress + 1, aboutText.length));
    }, 40);
    return () => clearTimeout(timeout);
  }, [aboutProgress]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      let currentSection = "home";
      document.querySelectorAll<HTMLElement>("main section[id]").forEach((section) => {
        if (section.getBoundingClientRect().top < 140) currentSection = section.id;
      });
      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    updateActiveSection();
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  useEffect(() => {
    if (slidesPaused) return;
    const interval = window.setInterval(() => {
      if (document.visibilityState === "visible") {
        setSlideIndex((index) => (index + 1) % skills.length);
      }
    }, 5000);
    return () => window.clearInterval(interval);
  }, [slidesPaused]);

  const goToSlide = (index: number) => {
    setSlideIndex((index + skills.length) % skills.length);
  };

  const sendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");
    const text = `Hi Eng Lui, I'm ${name} (${email}).\n\n${message}`;
    window.location.href = `https://wa.me/263790443607?text=${encodeURIComponent(text)}`;
  };

  return (
    <>
      <header className="fixed top-0 z-30 w-full border-b border-[var(--line)] bg-[var(--navbg)] backdrop-blur-[10px]">
        <div className="wrap">
          <nav className="flex h-16 items-center gap-7" aria-label="Main navigation">
            <a className="font-medium" href="#home">
              Eng Lui
            </a>
            <button
              className="ml-auto rounded-lg border border-[var(--line)] px-3 py-1.5 text-[13px] text-[var(--text)] min-[861px]:hidden"
              type="button"
              aria-expanded={menuOpen}
              aria-controls="primary-links"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? "Close" : "Menu"}
            </button>
            <div
              id="primary-links"
              className={`${menuOpen ? "flex" : "hidden"} absolute top-full left-0 right-0 flex-col gap-0 border-b border-[var(--line)] bg-[var(--bg)] px-6 py-2 text-[13px] text-[var(--mute)] min-[861px]:static min-[861px]:ml-auto min-[861px]:flex min-[861px]:flex-row min-[861px]:gap-[26px] min-[861px]:border-0 min-[861px]:bg-transparent min-[861px]:p-0`}
            >
              {navigation.map((item) => {
                const sectionId = item.toLowerCase();
                return (
                  <a
                    className={`py-3 min-[861px]:py-0 ${
                      activeSection === sectionId ? "text-[var(--cyan)]" : ""
                    }`}
                    href={`#${sectionId}`}
                    key={sectionId}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </a>
                );
              })}
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section className="home flex items-center" id="home">
          <div className="wrap grid items-center gap-10 min-[861px]:grid-cols-[1.15fr_1fr]">
            <div>
              <h1 className="hero-title">
                Hi,
                <br />
                I&apos;m <span className="text-[var(--cyan)]">Eng Lui</span>
                <span className="type-line">
                  <span>{role}</span>
                  <span className="cursor" />
                </span>
              </h1>
              <SocialLinks />
              <a className="button-primary" href="#contact">
                Contact
              </a>
            </div>
            <svg
              className="hero-blob"
              viewBox="0 0 479 467"
              role="img"
              aria-label="Illustrated portrait of Eng Lui"
            >
              <defs>
                <linearGradient id="hero-gradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#00B4C8" />
                  <stop offset="1" stopColor="#041f23" />
                </linearGradient>
                <clipPath id="hero-clip">
                  <path d="M9.19 145.96C34.03 76.58 114.87 54.73 184.11 29.48 245.8 6.99 311.86-14.95 370.74 14.14c60.47 29.88 97.21 93.36 106.45 160.17 8.7 62.92-22.26 120.07-60.69 170.64-42.76 56.29-90.43 117.85-161.06 121.24-76.03 3.65-143.89-44.05-190.28-104.38C17.48 299.81-17.16 219.58 9.19 145.96Z" />
                </clipPath>
              </defs>
              <path
                d="M9.19 145.96C34.03 76.58 114.87 54.73 184.11 29.48 245.8 6.99 311.86-14.95 370.74 14.14c60.47 29.88 97.21 93.36 106.45 160.17 8.7 62.92-22.26 120.07-60.69 170.64-42.76 56.29-90.43 117.85-161.06 121.24-76.03 3.65-143.89-44.05-190.28-104.38C17.48 299.81-17.16 219.58 9.19 145.96Z"
                fill="url(#hero-gradient)"
              />
              <image
                href="/images/hero-cartoon-on-site.jpg"
                x="0"
                y="20"
                width="479"
                height="444"
                preserveAspectRatio="xMidYMid slice"
                clipPath="url(#hero-clip)"
              />
            </svg>
          </div>
        </section>

        <section className="section pt-10" id="about">
          <div className="wrap">
            <Reveal>
              <p className="eyebrow">ABOUT</p>
            </Reveal>
            <Reveal>
              <div className="about-layout mt-10">
                <div className="stage">
                  <div className="ring ring-outer" />
                  <div className="ring ring-inner" />
                  <div className="portrait">
                    <Image
                      src="/images/about-portrait-cyan-tint.jpg"
                      alt="Eng Lui"
                      fill
                      sizes="(max-width: 860px) 180px, 220px"
                      className="object-cover object-[50%_20%]"
                    />
                  </div>
                  <div className="role-orbit" aria-label="Professional roles">
                    <span className="portrait-label orbit-label role-one">
                      <span className="role-counter-angle">
                        <span className="role-counter-spin">Software Engineer</span>
                      </span>
                    </span>
                    <span className="portrait-label orbit-label role-two">
                      <span className="role-counter-angle">
                        <span className="role-counter-spin">Technopreneur</span>
                      </span>
                    </span>
                    <span className="portrait-label orbit-label role-three">
                      <span className="role-counter-angle">
                        <span className="role-counter-spin">Strategic Planner</span>
                      </span>
                    </span>
                    <span className="portrait-label orbit-label role-four">
                      <span className="role-counter-angle">
                        <span className="role-counter-spin">Innovation Lead</span>
                      </span>
                    </span>
                    <span className="portrait-label orbit-label role-five">
                      <span className="role-counter-angle">
                        <span className="role-counter-spin">Client Advocate</span>
                      </span>
                    </span>
                  </div>
                </div>
                <div className="about-copy">
                  <h3 className="mb-3 text-[28px] font-light">
                    <b className="font-normal text-[var(--cyan)]">Eng Lui</b>
                  </h3>
                  <p className="fc mb-1 text-[17px] text-[var(--text)]">
                    I am the Founder and CEO of{" "}
                    <b className="font-normal text-[var(--cyan)]">The Market Engineers</b>.
                  </p>
                  <a
                    className="market-engineers-link mb-5 inline-flex items-center gap-2 text-sm"
                    href="https://themarketengineers.co.zw"
                    aria-label="The Market Engineers website"
                  >
                    <svg
                      className="h-5 w-5 fill-none stroke-current"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z" />
                    </svg>
                    The Market Engineers
                  </a>
                  <p className="min-h-[110px] text-base">
                    {aboutText.slice(0, aboutProgress)}
                    <span className="cursor" />
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section section-spaced" id="skills">
          <div className="wrap">
            <Reveal><p className="eyebrow">SKILLS</p></Reveal>
            <Reveal><h2 className="heading">Professional skills</h2></Reveal>
            <Reveal>
              <div className="mt-10 grid items-center gap-14 min-[861px]:grid-cols-[1.2fr_1fr]">
                <p>
                  Passionate about building innovative software solutions and scalable web
                  applications. I combine technical expertise with entrepreneurial vision to
                  create impactful projects. Always eager to collaborate, explore new ideas,
                  and turn challenges into opportunities.
                </p>
                <div
                  onMouseEnter={() => setSlidesPaused(true)}
                  onMouseLeave={() => setSlidesPaused(false)}
                  onFocus={() => setSlidesPaused(true)}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) setSlidesPaused(false);
                  }}
                >
                  <div className="carousel-slides">
                    {skills.map((skill, index) => (
                      <article
                        aria-hidden={slideIndex !== index}
                        className={`carousel-slide ${slideIndex === index ? "is-active" : ""}`}
                        key={skill.title}
                      >
                        <span className="skill-number">
                          {String(index + 1).padStart(2, "0")} / 05
                        </span>
                        <h3 className="my-2 text-[26px] font-light">{skill.title}</h3>
                        <p className="text-sm">{skill.description}</p>
                        <div className="tags">
                          {skill.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                        </div>
                      </article>
                    ))}
                  </div>
                  <div className="carousel-controls">
                    <button
                      className="carousel-arrow"
                      type="button"
                      aria-label="Previous slide"
                      onClick={() => goToSlide(slideIndex - 1)}
                    >
                      ←
                    </button>
                    <button
                      className="carousel-arrow"
                      type="button"
                      aria-label="Next slide"
                      onClick={() => goToSlide(slideIndex + 1)}
                    >
                      →
                    </button>
                    <div className="ml-auto flex gap-2" aria-label="Choose a skill">
                      {skills.map((skill, index) => (
                        <button
                          aria-label={`Show ${skill.title}`}
                          aria-current={slideIndex === index ? "true" : undefined}
                          className={`carousel-dot ${slideIndex === index ? "is-active" : ""}`}
                          key={skill.title}
                          type="button"
                          onClick={() => goToSlide(index)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section section-spaced" id="work">
          <div className="wrap">
            <Reveal><p className="eyebrow">WORK</p></Reveal>
            <Reveal><h2 className="heading">What we do</h2></Reveal>
            <Reveal>
              <div className="mt-10 grid gap-[18px] min-[861px]:grid-cols-3">
                {services.map((service) => (
                  <article className="work-card" key={service.title}>
                    <h3 className="text-[21px] font-normal">{service.title}</h3>
                    <p className="my-1 text-xs text-[var(--teal)]">{service.subtitle}</p>
                    <p className="text-[13px]">{service.description}</p>
                    <div className="tags">
                      {service.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                    </div>
                  </article>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section section-spaced" id="portfolio">
          <div className="wrap">
            <Reveal><p className="eyebrow">PORTFOLIO</p></Reveal>
            <Reveal><h2 className="heading">A closer look at my work</h2></Reveal>
            <Reveal>
              <article className="mt-10 grid items-center gap-8 overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--card)] p-7 min-[861px]:grid-cols-[1fr_auto] min-[861px]:p-10">
                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[var(--teal)]">
                    Featured work
                  </p>
                  <h3 className="mb-3 text-2xl font-light text-[var(--text)]">
                    The Market Engineers
                  </h3>
                  <p className="max-w-2xl">
                    Explore the services and digital work from the company I founded.
                  </p>
                </div>
                <a
                  className="button-primary inline-flex items-center gap-3 justify-self-start"
                  href="https://www.themarketengineers.co.zw/#services"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View my work
                  <span aria-hidden="true">↗</span>
                </a>
              </article>
            </Reveal>
          </div>
        </section>

        <section className="section section-spaced" id="contact">
          <div className="wrap">
            <Reveal><p className="eyebrow">CONTACT</p></Reveal>
            <Reveal><h2 className="heading">Let&apos;s work together</h2></Reveal>
            <Reveal>
              <form className="mt-9 grid max-w-[620px] gap-3" onSubmit={sendMessage}>
                <input className="form-control" name="name" placeholder="Name" required />
                <input
                  className="form-control"
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                />
                <textarea
                  className="form-control min-h-[130px] resize-y"
                  name="message"
                  placeholder="Wanna work with Eng Lui? Write your message right here..."
                  required
                />
                <button className="button-primary justify-self-start" type="submit">
                  Send
                </button>
              </form>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--line)] py-11 text-center">
        <div className="wrap">
          <div className="font-medium">The Market Engineers</div>
          <div className="flex justify-center">
            <SocialLinks />
          </div>
          <p className="text-xs">© 2026 Eng Lui. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
