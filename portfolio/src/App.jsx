
import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import { translations } from "./translations/translations";
import "./styles/global.css";

function App() {
  const [language, setLanguage] = useState("pt");
  const [activeSection, setActiveSection] = useState("home");

  const t = translations[language];

  useEffect(() => {
    const sections = document.querySelectorAll("main section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.35 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio">
      <Sidebar
        language={language}
        setLanguage={setLanguage}
        activeSection={activeSection}
        t={t}
      />

      <main className="content">
        <Home t={t} />
        <About t={t} />
        <Projects t={t} />
        <Experience t={t} />
        <Contact t={t} />
      </main>
    </div>
  );
}

export default App;
