
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

function Home({ t }) {
  return (
    <section className="hero" id="home">
      <div className="hero-image"></div>
      <div className="hero-overlay"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="eyebrow">{t.greeting}</span>

        <h1>
          GABRIEL <span>ASSIS.</span>
        </h1>

        <div className="red-line"></div>

        <h2>{t.role}</h2>

        <p>{t.description}</p>

        <a href="#about" className="explore-button">
          {t.explore}
          <ArrowDown size={17} />
        </a>
      </motion.div>

      <div className="hero-footer">
        <span>{t.location}</span>
        <span>01 — 05</span>
      </div>
    </section>
  );
}

export default Home;
