import { GraduationCap } from "lucide-react";

function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="container">

        <div className="section-heading">
          <p className="section-label">EDUCATION</p>

          <h2>
            My <span>Academic Journey</span>
          </h2>
        </div>

        <div className="education-grid">

          {/* Graduation */}
          <div className="education-card">

            <div className="education-icon">
              <GraduationCap size={28} />
            </div>

            <span className="education-year">
              2025
            </span>

            <h3>
              Bachelor of Vocation (B.Voc)
            </h3>

            <h4>
              Software Development
            </h4>

            <p className="education-institute">
              KCE Society's College of Engineering & IT,
              Jalgaon
            </p>

            <p className="education-description">
              Focused on software development, programming,
              web development, databases and application development.
            </p>

          </div>


          {/* HSC */}
          <div className="education-card">

            <div className="education-icon">
              <GraduationCap size={28} />
            </div>

            <span className="education-year">
              2022
            </span>

            <h3>
              HSC
            </h3>

            <h4>
              Science
            </h4>

            <p className="education-institute">
              Nutan Maratha College,
              Jalgaon
            </p>

            <p className="education-description">
              Higher Secondary Certificate – Science
            </p>

          </div>


          {/* SSC */}
          <div className="education-card">

            <div className="education-icon">
              <GraduationCap size={28} />
            </div>

            <span className="education-year">
              2020
            </span>

            <h3>
              SSC
            </h3>

            <h4>
              Secondary School Certificate
            </h4>

            <p className="education-institute">
              Bhausaheb Raut Vidyalaya,
              Jalgaon
            </p>

            <p className="education-description">
              Secondary School Certificate
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;