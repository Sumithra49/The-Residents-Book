import { useEffect, useState } from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import "./App.css";
import Footer from "./pages/Footer";
import Navbar from "./pages/Navbar";

function App() {
  const [residents, setResidents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    title: "",
    profilePhoto: "",
    linkedin: "",
    twitter: "",
  });

  const fetchResidents = async () => {
    try {
      const res = await fetch(
        "https://the-residents-book-7m8j.onrender.com/residents"
      );
      const data = await res.json();
      setResidents(data);
    } catch (err) {
      console.error("Failed to fetch residents:", err);
    }
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, title } = formData;

    if (!firstName || !lastName || !title) {
      alert("First Name, Last Name, and Title are required.");
      return;
    }

    try {
      const res = await fetch(
        "https://the-residents-book-7m8j.onrender.com/residents",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (res.ok) {
        const newResident = await res.json();
        setResidents((prev) => [...prev, newResident]);
        setFormData({
          firstName: "",
          lastName: "",
          title: "",
          profilePhoto: "",
          linkedin: "",
          twitter: "",
        });
        setShowForm(false);
        alert("Resident added!");
      } else {
        const err = await res.json();
        alert("Error: " + err.message);
      }
    } catch (error) {
      alert("Submission failed: " + error.message);
    }
  };

  useEffect(() => {
    fetchResidents();
  }, []);

  return (
    <div className="container">
      <Navbar onApplyNowClick={() => setShowForm(true)} />

      <div className="header">
        <img
          src="https://cdn.prod.website-files.com/62f41dee5606d80f65b7dcbb/6676ffc8dcc184ba44858820_the_residency_logo.svg"
          alt="The Residency Logo"
          style={{ height: "30px" }}
        />
        <div className="title" style={{ fontSize: "30px" }}>
          The Residency
        </div>
      </div>

      <button
        className="add-button"
        onClick={() => setShowForm((prev) => !prev)}
      >
        {showForm ? "Close Form" : "add resident"}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className="modal-form fade-in">
          <input
            type="text"
            name="firstName"
            placeholder="First Name*"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name*"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="title"
            placeholder="Title / Role*"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="profilePhoto"
            placeholder="Profile Photo URL"
            value={formData.profilePhoto}
            onChange={handleChange}
          />
          <input
            type="text"
            name="linkedin"
            placeholder="LinkedIn URL"
            value={formData.linkedin}
            onChange={handleChange}
          />
          <input
            type="text"
            name="twitter"
            placeholder="Twitter URL"
            value={formData.twitter}
            onChange={handleChange}
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      )}

      {/* Top Row */}
      <div className="residents-list">
        <div className="residents-scroll">
          {[...residents, ...residents].map((res, index) => (
            <div
              className="resident-card fade-in"
              key={`${res._id}-top-${index}`}
            >
              <img
                src={
                  res.profilePhoto ||
                  "https://res.cloudinary.com/demo/image/upload/default-profile.jpg"
                }
                alt={`${res.firstName} ${res.lastName}`}
                className="profile-img"
              />
              <h3>
                {res.firstName} {res.lastName}
              </h3>
              <p>{res.title}</p>
              <div className="social-icons">
                {res.linkedin ? (
                  <a
                    href={res.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    title="LinkedIn"
                  >
                    <FaLinkedin size={20} />
                  </a>
                ) : (
                  <span className="social-icon disabled" title="No LinkedIn">
                    <FaLinkedin size={20} />
                  </span>
                )}

                {res.twitter ? (
                  <a
                    href={res.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    title="Twitter"
                  >
                    <FaTwitter size={20} />
                  </a>
                ) : (
                  <span className="social-icon disabled" title="No Twitter">
                    <FaTwitter size={20} />
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="residents-scroll bottom-row">
          {[...residents, ...residents].map((res, index) => (
            <div
              className="resident-card fade-in"
              key={`${res._id}-bottom-${index}`}
            >
              <img
                src={
                  res.profilePhoto ||
                  "https://res.cloudinary.com/demo/image/upload/default-profile.jpg"
                }
                alt={`${res.firstName} ${res.lastName}`}
                className="profile-img"
              />
              <h3>
                {res.firstName} {res.lastName}
              </h3>
              <p>{res.title}</p>

              <div className="social-icons">
                {res.linkedin ? (
                  <a
                    href={res.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    title="LinkedIn"
                  >
                    <FaLinkedin size={20} />
                  </a>
                ) : (
                  <span className="social-icon disabled" title="No LinkedIn">
                    <FaLinkedin size={20} />
                  </span>
                )}

                {res.twitter ? (
                  <a
                    href={res.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    title="Twitter"
                  >
                    <FaTwitter size={20} />
                  </a>
                ) : (
                  <span className="social-icon disabled" title="No Twitter">
                    <FaTwitter size={20} />
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
