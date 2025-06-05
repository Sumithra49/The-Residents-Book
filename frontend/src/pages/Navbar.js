import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
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
          <a href="#" className="nav-link apply-now">
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
