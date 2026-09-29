function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-container">

        <p>
          © {new Date().getFullYear()} Rohit Kasar.
          All rights reserved.
        </p>

        <div className="footer-links">

          <a href="#home">
            Back to top
          </a>

          <a
            href="https://github.com/rohit1234-it"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/rohit-kasar-7aa073266"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;