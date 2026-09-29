import {
  ExternalLink,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "ATS Job Portal",
    description:
      "Applicant Tracking System for managing jobs, candidates, applications and skill-based matching.",
    technologies: [
      "Python",
      "Django",
      "DRF",
      "JWT",
      "PostgreSQL",
      "React",
    ],
    github:
      "https://github.com/rohit1234-it/Applicant-Tracking-System",
    live:
      "https://rohit7709.pythonanywhere.com/",
  },

  {
    number: "02",
    title: "Inventory Management System",
    description:
      "Inventory management application for managing products, suppliers, orders and invoices.",
    technologies: [
      "Python",
      "Django",
      "DRF",
      "React",
      "MySQL",
    ],
    github:
      "https://github.com/rohit1234-it/Inventory-Management-System",
    live:
      "https://inventory-management-system-5lyq.vercel.app/",
  },

  {
    number: "03",
    title: "Property Rental & Management",
    description:
      "Property management platform with authentication, property CRUD, search, filtering and rental workflows.",
    technologies: [
      "Django",
      "DRF",
      "JWT",
      "React",
      "PostgreSQL",
    ],
    github:
      "https://github.com/rohit1234-it",
        live:
      "https://property-rental-frontend-ui8b.onrender.com",
  },

];

function Projects() {
  return (
    <section id="projects" className="section projects-section">

      <div className="container">

        <div className="section-heading">
          <p>PROJECTS</p>
          <h2>Projects I've built.</h2>
        </div>

        <div className="projects-grid">

          {projects.map((project) => (

            <article
              className="project-card"
              key={project.title}
            >

              <div className="project-number">
                {project.number}
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">

                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}

              </div>

              <div className="project-links">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLink size={17} />
                    Live Demo
                  </a>
                )}

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;