
function About({ t }) {
  return (
    <section className="section about-section" id="about">
      <div className="section-heading">
        <span>01 / ABOUT</span>
        <h2>{t.aboutTitle}</h2>
      </div>

      <div className="about-content">
        <div className="about-image">
          <img
            src="/images/about.jpg"
            alt="Ilustração japonesa em estilo sumi-e"
          />
        </div>

        <div className="about-text">
          <span className="section-label">GABRIEL ASSIS</span>

          <p>{t.aboutText}</p>

          <h3>{t.education}</h3>

          <ul>
            {t.educationItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
