const skills = [
  "Python",
  "Django",
  "Django REST Framework",
  "PostgreSQL",
  "MySQL",
  "SQLite",
  "REST APIs",
  "JWT / SimpleJWT",
  "SQL",
  "Django ORM",
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Git",
  "GitHub",
  "GitLab",
  "Postman",
  "VS Code",
];

function Skills() {
  return (
    <section id="skills" className="section skills-section">

      <div className="container">

        <div className="section-heading">
          <p>TECHNICAL SKILLS</p>
          <h2>Technologies I work with.</h2>
        </div>

        <div className="skills-grid">

          {skills.map((skill) => (
            <div className="skill-item" key={skill}>
              {skill}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;