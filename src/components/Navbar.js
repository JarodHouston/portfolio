import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeButton, setActiveButton] = useState("");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName); // Set the active button when clicked
    if (buttonName === "home") {
      navigate(`/`);
    } else {
      navigate(`/${buttonName}`);
    }
  };

  useEffect(() => {
    // Extract the last portion of the URL path
    const pathParts = location.pathname.split("/"); // Split by "/"
    const lastPart = pathParts[pathParts.length - 1]; // Get the last part
    setActiveButton(lastPart || "home"); // Set default to "Home" if empty
    window.scrollTo(0, 0); // Scroll to the top
  }, [location]);

  const navItemStyle = (buttonName) => ({
    backgroundColor:
      activeButton === buttonName ? "rgb(63, 53, 94)" : undefined,
    border:
      activeButton === buttonName ? "1px solid rgb(87, 113, 159)" : undefined,
    transition: "background-color 0.4s ease, border 0.4s ease",
  });

  return (
    <header className="App-header">
      {/* <div className="fading-overlay"></div> */}
      <button
        className="nav-item"
        style={navItemStyle("home")}
        onClick={() => handleButtonClick("home")}
      >
        Home
      </button>
      <button
        className="nav-item"
        style={navItemStyle("about")}
        onClick={() => handleButtonClick("about")}
      >
        About
      </button>
      <button
        className="nav-item"
        style={navItemStyle("work")}
        onClick={() => handleButtonClick("work")}
      >
        Work
      </button>
      <button
        className="nav-item"
        style={navItemStyle("projects")}
        onClick={() => handleButtonClick("projects")}
      >
        Projects
      </button>
    </header>
  );
}

export default Navbar;
