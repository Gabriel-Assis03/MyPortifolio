
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

function Projects({ t }) {
  return (
    <section className="section projects-section" id="projects">
      <div className="section-heading">
        <span>02 / WORK</span>
        <h2>{t.projectsTitle}</h2>
        <p>{t.projectsDescription}</p>
      </div>

      <div className="projects-list">
        {t.projectItems.map((project, index) => (
          <article className="project-card" key={project.name}>
            <div className="project-year">
              <span>{project.year}</span>
              <span className="timeline-dot"></span>
            </div>

            <div className="project-image">
              <img src={project.image} alt={project.name} />
            </div>

            <div className="project-info">
              <span className="section-label">
                PROJECT 0{index + 1}
              </span>

              <h3>{project.name}</h3>
              <p>{project.description}</p>

              <div className="technologies">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                <FaGithub size={16} />
                GitHub
                <ExternalLink size={13} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
