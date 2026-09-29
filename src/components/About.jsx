import {
  Download,
  ExternalLink,
  Code2,
  Database,
  Server,
} from "lucide-react";

import resume from "../assets/resume.pdf";

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">

        <div className="section-heading">
          <p className="section-label">ABOUT ME</p>

          <h2>
            Building practical solutions with{" "}
            <span>Python & Django</span>
          </h2>
        </div>

        <div className="about-grid">

          <div className="about-content">

            <p>
              I'm <strong>Rohit Kasar</strong>, a Python Backend Developer
              focused on building reliable backend systems, REST APIs and
              practical web applications.
            </p>

            <p>
              I have hands-on experience with{" "}
              <strong>Python, Django, Django REST Framework,
              PostgreSQL and JWT authentication</strong>.
              I also work with React for frontend integration and
              Git/GitHub for version control.
            </p>

            <p>
              Currently, I'm working as a{" "}
              <strong>Backend Developer Intern</strong>, where I work on
              REST APIs, frontend-backend integration, API testing,
              debugging and real-world application development.
            </p>

            <p>
              My goal is to grow as a backend engineer by continuously
              building projects, solving programming problems and
              improving my understanding of scalable software systems.
            </p>

            <div className="about-buttons">

              <a
                href={resume}
                download
                className="btn primary-btn"
              >
                <Download size={18} />
                Download Resume
              </a>

              <a
                href="https://github.com/rohit1234-it"
                target="_blank"
                rel="noreferrer"
                className="btn secondary-btn"
              >
                <ExternalLink size={18} />
                View GitHub
              </a>

            </div>

          </div>


          <div className="about-cards">

            <div className="about-card">

              <div className="about-card-icon">
                <Code2 size={26} />
              </div>

              <div>
                <h3>Backend Development</h3>

                <p>
                  Python, Django, DRF, REST APIs,
                  JWT authentication and CRUD systems.
                </p>
              </div>

            </div>


            <div className="about-card">

              <div className="about-card-icon">
                <Database size={26} />
              </div>

              <div>
                <h3>Database</h3>

                <p>
                  PostgreSQL, MySQL, SQLite,
                  SQL queries and Django ORM.
                </p>
              </div>

            </div>


            <div className="about-card">

              <div className="about-card-icon">
                <Server size={26} />
              </div>

              <div>
                <h3>API Development</h3>

                <p>
                  REST API development, authentication,
                  Postman testing and frontend integration.
                </p>
              </div>

            </div>


            <div className="about-card">

              <div className="about-card-icon">
              </div>

              <div>
                <h3>Development Tools</h3>

                <p>
                  Git, GitHub, GitLab, Postman,
                  VS Code and deployment workflows.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;