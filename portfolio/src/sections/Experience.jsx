
function Experience({ t }) {
  return (
    <section className="section experience-section" id="experience">
      <div className="section-heading">
        <span>03 / JOURNEY</span>
        <h2>{t.experienceTitle}</h2>
      </div>

      <div className="experience-list">
        {t.experienceItems.map((item, index) => (
          <article className="experience-item" key={item.title}>
            <div className="experience-marker">
              <span>0{index + 1}</span>
            </div>

            <div className="experience-info">
              <span className="experience-period">
                {item.period}
              </span>

              <h3>{item.title}</h3>
              <h4>{item.institution}</h4>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
