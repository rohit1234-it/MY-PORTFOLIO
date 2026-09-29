import {
  Mail,
  Phone,
  MapPin,
 
} from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="section contact-section">

      <div className="container contact-container">

        <div className="section-heading">

          <p>CONTACT</p>

          <h2>
            Let's build something together.
          </h2>

        </div>

        <p className="contact-description">
          I'm open to opportunities as a Python Backend Developer,
          Django Developer, Junior Software Developer or Full Stack
          Developer.
        </p>

        <div className="contact-grid">

          <a
            href="mailto:rohitkasar372@gmail.com"
            className="contact-card"
          >
            <Mail size={25} />

            <div>
              <span>Email</span>
              <strong>
                rohitkasar372@gmail.com
              </strong>
            </div>
          </a>

          <a
            href="tel:+917709765340"
            className="contact-card"
          >
            <Phone size={25} />

            <div>
              <span>Phone</span>
              <strong>
                +91 7709765340
              </strong>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/rohit-kasar-7aa073266"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >

            <div>
              <span>LinkedIn</span>
              <strong>
                Connect with me
              </strong>
            </div>
          </a>

          <a
            href="https://github.com/rohit1234-it"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >

            <div>
              <span>GitHub</span>
              <strong>
                View my repositories
              </strong>
            </div>
          </a>

        </div>

        <div className="location">
          <MapPin size={18} />
          Jalgaon, Maharashtra, India
        </div>

      </div>

    </section>
  );
}

export default Contact;