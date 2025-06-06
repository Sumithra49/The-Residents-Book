import { useState } from "react";
import "./Navbar.css";

const Navbar = ({ onApplyNowClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Hamburger button */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Navigation Links */}
      <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
        <li>
          <a href="#" className="nav-link underline">
            home
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            about us
          </a>
        </li>
        <li>
          <a href="#" className="nav-link apply-now" onClick={onApplyNowClick}>
            apply now
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            donate
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            inspire
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
