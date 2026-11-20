
import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact({ t }) {
    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        const data = new FormData(form);

        const name = data.get("name");
        const email = data.get("email");
        const message = data.get("message");

        const destination = "gabrielassis0709@gmail.com";

        if (destination === "gabrielassis0709@gmail.com") {
            alert(t.emailError);
            return;
        }

        const subject = encodeURIComponent(`Contato de ${name}`);
        const body = encodeURIComponent(
            `Nome: ${name}\nE-mail: ${email}\n\n${message}`
        );

        window.location.href =
            `mailto:${destination}?subject=${subject}&body=${body}`;
    };

    return (
        <section className="section contact-section" id="contact">
            <div className="section-heading">
                <span>04 / CONTACT</span>
                <h2>{t.contactTitle}</h2>
                <p>{t.contactDescription}</p>
            </div>

            <div className="contact-content">
                <div className="contact-socials">
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=gabrielassis0709@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Mail size={20} />
                        E-mail
                    </a>

                    <a
                        href="https://linkedin.com/in/gabriel-do-carmo-assis"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaLinkedin size={20} />
                        LinkedIn
                    </a>

                    <a
                        href="https://github.com/Gabriel-Assis03"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaGithub size={20} />
                        GitHub
                    </a>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <input name="name" placeholder={t.name} required />
                    <input
                        name="email"
                        type="email"
                        placeholder={t.email}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder={t.message}
                        rows="5"
                        required
                    />

                    <button type="submit">
                        {t.send}
                        <Send size={16} />
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
