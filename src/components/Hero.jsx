import {
  Download,
  ArrowDown,
  Mail,
} from "lucide-react";

import resume from "../assets/resume.pdf";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="container hero-container">

        <div className="hero-content">

          <p className="hero-label">
            PYTHON BACKEND DEVELOPER
          </p>

          <h1>
            Hi, I'm <span>Rohit Kasar</span>
          </h1>

          <h2>
            I build backend systems, REST APIs
            and practical web applications.
          </h2>

          <p className="hero-description">
            Python Backend Developer focused on Python, Django,
            Django REST Framework, PostgreSQL and REST API development.
            I enjoy solving problems and building real-world applications.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="btn primary-btn">
              View Projects
              <ArrowDown size={18} />
            </a>

            <a
              href={resume}
              download
              className="btn secondary-btn"
            >
              <Download size={18} />
              Download Resume
            </a>

          </div>

          <div className="social-icons">

            <a
              href="https://github.com/rohit1234-it"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
            </a>

            <a
              href="https://linkedin.com/in/rohit-kasar-7aa073266"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
            </a>

            <a
              href="mailto:rohitkasar372@gmail.com"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>

          </div>

        </div>

        <div className="hero-visual">

          <div className="code-card">

            <div className="code-header">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="code-body">

              <p>
                <span className="keyword">class</span>{" "}
                <span className="class-name">Developer</span>:
              </p>

              <p className="indent">
                name = <span className="string">"Rohit Kasar"</span>
              </p>

              <p className="indent">
                role ={" "}
                <span className="string">
                  "Python Backend Developer"
                </span>
              </p>

              <p className="indent">
                experience ={" "}
                <span className="number">"Backend Intern"</span>
              </p>

              <p className="indent">
                skills = [
              </p>

              <p className="indent-2">
                <span className="string">"Python"</span>,
              </p>

              <p className="indent-2">
                <span className="string">"Django"</span>,
              </p>

              <p className="indent-2">
                <span className="string">"DRF"</span>,
              </p>

              <p className="indent-2">
                <span className="string">"PostgreSQL"</span>
              </p>

              <p className="indent">]</p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;