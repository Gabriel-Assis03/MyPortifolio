import { useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  User,
  Code,
  FolderGit2,
  Mail,
  ArrowDown,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import { translations } from "./translations/translations";
import "./styles/global.css";

const navigation = [
  { key: "home", icon: Home },
  { key: "about", icon: User },
  { key: "skills", icon: Code },
  { key: "projects", icon: FolderGit2 },
  { key: "contact", icon: Mail },
];

function App() {
  const [language, setLanguage] = useState("pt");
  const [activeSection, setActiveSection] = useState("home");

  const t = translations[language];

  return (
    <main className="portfolio">
      <aside className="sidebar">
        <div className="brand">
          <span>GA.</span>
          <small>PORTFOLIO</small>
        </div>

        <nav className="navigation">
          {navigation.map(({ key, icon: Icon }) => (
            <button
              key={key}
              className={
                activeSection === key ? "nav-item active" : "nav-item"
              }
              onClick={() => {
                setActiveSection(key);
                document
                  .getElementById(key)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              aria-label={t[key]}
              title={t[key]}
            >
              <Icon size={19} />
              <span>{t[key]}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <button
            className="language-button"
            onClick={() =>
              setLanguage(language === "pt" ? "en" : "pt")
            }
          >
            {language === "pt" ? "EN / PT" : "PT / EN"}
          </button>

          <div className="social-links">
            <a href="https://github.com/Gabriel-Assis03"
               target="_blank" rel="noreferrer"
               aria-label="GitHub">
              <FaGithub size={19} />
            </a>

            <a href="https://linkedin.com/in/gabriel-do-carmo-assis"
               target="_blank" rel="noreferrer"
               aria-label="LinkedIn">
              <FaLinkedin size={19} />
            </a>
          </div>
        </div>
      </aside>

      <section className="content">
        <section className="hero" id="home">
          <div className="hero-decoration">
            <div className="enso"></div>
            <span className="vertical-text">侍 · 武士道</span>
          </div>

          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="eyebrow">{t.greeting}</span>

            <h1>
              GABRIEL
              <br />
              <span>ASSIS.</span>
            </h1>

            <div className="red-line"></div>

            <h2>{t.role}</h2>

            <p>{t.description}</p>

            <button
              className="explore-button"
              onClick={() =>
                document.getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t.explore}
              <ArrowDown size={17} />
            </button>
          </motion.div>

          <div className="hero-footer">
            <span>{t.location}</span>
            <span>01 — 05</span>
          </div>
        </section>

        <section className="placeholder-section" id="about">
          SOBRE MIM
        </section>

        <section className="placeholder-section" id="skills">
          HABILIDADES
        </section>

        <section className="placeholder-section" id="projects">
          PROJETOS
        </section>

        <section className="placeholder-section" id="contact">
          CONTATO
        </section>
      </section>
    </main>
  );
}

export default App;