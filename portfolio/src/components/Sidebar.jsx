
import {
  Home as HomeIcon,
  UserRound,
  Code2,
  BriefcaseBusiness,
  Mail,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const navigation = [
  { id: "home", icon: HomeIcon },
  { id: "about", icon: UserRound },
  { id: "projects", icon: Code2 },
  { id: "experience", icon: BriefcaseBusiness },
  { id: "contact", icon: Mail },
];

function Sidebar({ language, setLanguage, activeSection, t }) {
  return (
    <aside className="sidebar">
      <a href="#home" className="brand">
        <span>GA.</span>
        <small>PORTFOLIO</small>
      </a>

      <nav className="navigation">
        {navigation.map(({ id, icon: Icon }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`nav-item ${
              activeSection === id ? "active" : ""
            }`}
            title={t[id]}
          >
            <Icon size={19} />
            <span>{t[id]}</span>
          </a>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <button
          className="language-button"
          onClick={() =>
            setLanguage(language === "pt" ? "en" : "pt")
          }
        >
          {language === "pt" ? "EN" : "PT"}
        </button>

        <div className="social-links">
          <a
            href="https://github.com/Gabriel-Assis03"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={19} />
          </a>

          <a
            href="https://linkedin.com/in/gabriel-do-carmo-assis"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={19} />
          </a>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
