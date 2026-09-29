import { Menu } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-container">

        <a href="#home" className="logo">
          Rohit  Kasar<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="nav-right">

          <a
            href="https://github.com/rohit1234-it"
            target="_blank"
            rel="noreferrer"
            className="github-btn"
          >
            GitHub
          </a>

          <button className="mobile-menu">
            <Menu size={22} />
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;