import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="footer-brand">
          <img
            src="https://cdn.prod.website-files.com/62f41dee5606d80f65b7dcbb/6676ffc8dcc184ba44858820_the_residency_logo.svg"
            alt="The Residency Logo"
            className="footer-logo"
          />
          <h3>the residency</h3>
        </div>
        <p>homes for the ambitious</p>
        <div className="footer-socials">
          <a href="#">
            <span className="icon">𝕏</span>
          </a>
          <a href="#">
            <span className="icon">in</span>
          </a>
          <a href="#">
            <span className="icon">📷</span>
          </a>
        </div>
      </div>

      <div className="footer-links">
        <a href="#">
          <u>home</u>
        </a>
        <a href="#">about us</a>
        <a href="#">donate</a>
        <a href="#">for investors</a>
        <a href="#">click here for updates</a>
      </div>

      <div className="footer-bottom">
        <p>© 2025 – made with love and care for viewers like you</p>
      </div>
    </footer>
  );
}
export default Footer;
