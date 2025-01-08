import "../styles/About.css";
import ProfilePic from "../images/profile-circular.png";
import PythonLogo from "../images/python.svg";
import CLogo from "../images/C_Logo.png";
import ReactLogo from "../images/react.png";
import SQLLogo from "../images/sql.png";
import JavaScriptLogo from "../images/javascript.webp";
import HTMLLogo from "../images/html.png";
import CSSLogo from "../images/css.png";
import LinuxLogo from "../images/linux.png";

function About() {
  return (
    <div className="about-container">
      <div className="left-about-section">
        <div className="profile-pic-container">
          <img
            src={ProfilePic}
            className="profile-pic"
            alt="Jarod in front of red wall"
          />
        </div>
        <p>SF Bay/LA</p>
      </div>
      <div className="right-about-section">
        <h1>Jarod Houston</h1>
        <h2 className="subtitle">Software Developer at ACM Teach LA</h2>
        <div className="socials-container">
          <form action="https://github.com/JarodHouston" target="_blank">
            <button type="submit" className="social-button">
              Github
            </button>
          </form>
          <form
            action="https://www.linkedin.com/in/jarod-houston-81335a246"
            target="_blank"
          >
            <button type="submit" className="social-button">
              LinkedIn
            </button>
          </form>
        </div>
        <p>
          I am a third year Computer Science major at UCLA where I have
          developed impactful and meaningful applications through clubs and
          organizations including ACM Teach LA and DevX.{" "}
        </p>
        <p>
          This past summer, I interned at Snowflake as a Technology Alliances
          Intern where I leveraged my programming knowledge to build a dashboard
          for the Partner Sales team to assist them in driving value.
        </p>
        <p>
          Aside from academics, I sing bass in a competitive a cappella group,
          have a black belt in karate, and enjoy many other hobbies including
          board games, thrifting, art, and hiking to name a few.
        </p>
        <div className="skills-section">
          <h2>Technical Skills</h2>
          <div className="skill-card-container">
            <div className="skill-card">
              <img src={PythonLogo} alt="python logo" />
              <p>Python</p>
            </div>
            <div className="skill-card">
              <img
                src={CLogo}
                alt="C logo"
                style={{ maxHeight: "35%", marginTop: "13%" }}
              />
              <p>C/C++</p>
            </div>
            <div className="skill-card">
              <img
                src={ReactLogo}
                alt="React logo"
                style={{ maxHeight: "30%", marginTop: "15%" }}
              />
              <p>React/React Native</p>
            </div>
            <div className="skill-card">
              <img
                src={SQLLogo}
                alt="SQL logo"
                style={{ maxHeight: "45%", marginTop: "15%" }}
              />
              <p>SQL</p>
            </div>
            <div className="skill-card">
              <img
                src={JavaScriptLogo}
                alt="JavaScript logo"
                style={{ maxHeight: "45%", marginTop: "7%" }}
              />
              <p>JavaScript</p>
            </div>
            <div className="skill-card">
              <img
                src={HTMLLogo}
                alt="HTML logo"
                style={{ maxHeight: "45%", marginTop: "7%" }}
              />
              <p>HTML</p>
            </div>
            <div className="skill-card">
              <img
                src={CSSLogo}
                alt="CSS logo"
                style={{ maxHeight: "45%", marginTop: "7%" }}
              />
              <p>CSS</p>
            </div>
            <div className="skill-card">
              <img
                src={LinuxLogo}
                alt="Linux logo"
                style={{ maxHeight: "45%", marginTop: "7%" }}
              />
              <p>Linux</p>
            </div>
          </div>
        </div>
        {/* <div className="education-section">
          <h2>Education</h2>
          <div className="education-container">
            <div className="education-heading">
              <h3>UCLA</h3>
              <p>2022-2026</p>
            </div>
            <p style={{ marginTop: "-20px" }}>
              <i>B.S. Computer Science</i>
            </p>
            <div className="education-heading">
              <h3>Los Altos High</h3>
              <p>2018-2022</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default About;
