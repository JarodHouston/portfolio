import SnowflakeLogo from "../images/snowflake.png";
import StreamlitLogo from "../images/streamlit.png";
import NativeApps from "../images/native-apps.jpg";
import TeachLALogo from "../images/teachla.svg";
import PenPals from "../images/penpals.png";
import DevXLogo from "../images/devx.avif";
import Finterview from "../images/finterview.png";
import PopoutIcon from "../images/popout-icon.png";
import "../styles/Work.css";

function Work() {
  return (
    <div className="work-container">
      <div className="internship-container">
        <h1 className="internship-container-title">Internships</h1>
        <div className="internship-body">
          <div className="left-work-container">
            <img
              src={SnowflakeLogo}
              alt="Snowflake logo"
              className="snowflake-image"
            />
          </div>
          <hr className="snowflake-bar"></hr>
          <div className="right-work-container">
            <h1>Snowflake</h1>
            <h4>Technology Alliances Intern</h4>
            <h6>
              <i>June - August 2024</i>
            </h6>
            <p style={{ marginTop: "50px" }}>
              I created a dashboard using <code>Streamlit</code>, an open-source
              Python framework, to visualize internal customer and partner data
              for the Sales team.
            </p>
            <div style={{ textAlign: "center" }}>
              <img
                src={StreamlitLogo}
                alt="Streamlit logo"
                className="streamlit-logo"
              />
            </div>
            <p>
              I used <code>SQL</code> to query from the internal database,
              stored this data in a pandas dataframe, and filtered based on the
              data requirements.
            </p>
            <p>
              The numerous data analytics I included helped the Partner Sales
              team understand how current partners were driving consumption
              through customer-facing built-in Native Application activity.
            </p>
            <div style={{ textAlign: "center" }}>
              <img
                src={NativeApps}
                alt="Snowflake Native Apps graphic"
                className="native-apps-img"
              />
            </div>
            <p>
              I first determined the most important and relevant metrics to
              display on the dashboard. I then determined the most efficient
              ways to <code>aggregate data</code> and represent these metrics in
              a format that is both succinct and easily understandable.{" "}
            </p>
            <p>
              Aside from developing this dashboard, I gained experience
              collaborating on product integration with Snowflake partners
              through dissecting and running demos and quickstarts. I also sat
              in on <code>executive level meetings</code> discussing go to
              market strategies and technical deep dives. I have been able to
              improve my communication skills through these interactions with
              both partners and customers on calls and during in-person
              meetings.
            </p>
          </div>
        </div>
      </div>
      <div className="internship-container">
        <h1 className="internship-container-title">Clubs</h1>
        <div className="internship-body">
          <div className="left-work-container">
            <img
              src={TeachLALogo}
              alt="ACM TeachLA logo"
              className="snowflake-image"
            />
          </div>
          <hr className="teachla-bar"></hr>
          <div className="right-work-container">
            <h1>ACM TeachLA</h1>
            <h4>Software Developer</h4>
            <h6>
              <i>October 2024 - Present</i>
            </h6>
            <p style={{ marginTop: "50px" }}>
              I am on a team of 5 developers where we are creating Pen Pals, a
              learning platform for kids that introduces them to more advanced
              math and coding concepts. We are using <code>Typescript</code> and{" "}
              <code>SCSS</code> for our framework.
            </p>
            <div style={{ textAlign: "center" }}>
              <img
                src={PenPals}
                alt="Sample screenshot from Pen Pals site"
                className="pen-pals-img"
              />
            </div>
            <p>
              Because I joined this project further into its development, my
              focus has been on improving and enhancing current features rather
              than adding new content. I have{" "}
              <code>improved the user interface</code> when entering answers to
              the prompts and implemented the <code>redesign</code> of the final
              page shown once all levels have been completed.
            </p>
            <p>
              Members of ACM TeachLA go out to local elementary and middle
              schools and use our applications as a learning tool for these
              children.
            </p>
            <a
              href="https://pen-pals.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="link-container">
                Pen Pals
                <img class="popout-icon" src={PopoutIcon} alt="Popout icon" />
              </div>
            </a>
          </div>
        </div>
        <div className="internship-body">
          <div className="left-work-container">
            <img src={DevXLogo} alt="DevX logo" className="snowflake-image" />
          </div>
          <hr className="devx-bar"></hr>
          <div className="right-work-container">
            <h1>DevX @ UCLA</h1>
            <h4>Lead Frontend Developer</h4>
            <h6>
              <i>February - June 2024</i>
            </h6>
            <h4>UI/UX Intern</h4>
            <h6>
              <i>October 2023 - June 2024</i>
            </h6>
            <p style={{ marginTop: "50px" }}>
              I worked on a team of 10 for a project called Finterview, a
              platform powered by AI for aspiring finance professionals. We used{" "}
              <code>Typescript</code> and <code>Tailwind CSS</code> for our
              framework. I was in charge of the login, home, and landing pages.
            </p>
            <div style={{ textAlign: "center" }}>
              <img
                src={Finterview}
                alt="Sign up page for Finterview"
                className="pen-pals-img"
              />
            </div>
            <p>
              The product aimed to provide an{" "}
              <code>AI-powered mock interview</code> to individuals in the
              financial world, mainly targeted towards college students and
              recent college graduates looking to improve their interview
              skills.
            </p>
            <p>
              Currently, an interest form has been published online, but the
              full product has been in development. The prjoect has been placed
              on hold.
            </p>
            <a
              href="https://usefinterview.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="link-container">
                Finterview
                <img class="popout-icon" src={PopoutIcon} alt="Popout icon" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
