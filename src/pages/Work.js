import CiscoLogo from "../images/cisco.png";
import HyperfabricImage from "../images/cisco-nexus-hyperfabric.png";
import SnowflakeLogo from "../images/snowflake.png";
import StreamlitLogo from "../images/streamlit.png";
import NativeApps from "../images/native-apps.jpg";
import TeachLALogo from "../images/teachla.svg";
import PenPals from "../images/penpals.png";
import ACMWLogo from "../images/acmWLogo.svg";
import ClubHub from "../images/clubhub.png";
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
            <img src={CiscoLogo} alt="Cisco logo" className="cisco-image" />
          </div>
          <hr className="cisco-bar"></hr>
          <div className="right-work-container">
            <h1>Cisco</h1>
            <h4>Technical Marketing Engineer Intern</h4>
            <h6>
              <i>June - September 2025</i>
            </h6>
            <p style={{ marginTop: "50px" }}>
              I designed and developed a Python SDK that calls Cisco Nexus
              Hyperfabric <code>API endpoints</code>, allowing users to
              configure fabrics through simple, human-readable YAML files to
              abstract away network complexity.
            </p>
            <p>
              <div style={{ textAlign: "center" }}>
                <img
                  src={HyperfabricImage}
                  alt="Cisco Nexus Hyperfabric"
                  className="native-apps-img"
                />
              </div>
            </p>
            <p>
              This project offers numerous features that enhances the user
              experience:
              <ol>
                <li>
                  Users can upload YAML file configurations. A rollback system
                  was implemented to ensure that the creation and modifications
                  of fabric-level objects are atomic operations.
                </li>
                <li>
                  Users can export existing fabrics into YAML-structured files.
                  A timestamp of the download is included to allow for simple
                  state tracking.
                </li>
                <li>
                  Real-time validation is performed while a user is generating
                  their YAML files.
                </li>
              </ol>
            </p>
            <p>
              Another major portion of this project was{" "}
              <code>auto-generating code</code>. This project was reliant on a
              known object model and set of API functions, so any additions or
              modifications to either would require code to be written. In order
              for this project to stay relevant, I wrote a separate Python
              script that reads the object model and generates code to support
              new objects or attributes, as well as changes to existing objects.
              This auto-code generation was certainly a stretch goal and was not
              fully implemented, but the major components were developed.
            </p>
            <p>
              I grew a lot as a programmer as I built an entire Python SDK from
              scratch and learned how to work with APIs, gracefully handle
              errors, and build a <code>custom linter</code>. Through this
              project, I was also exposed to how network fabrics can be
              configured and how different topologies are effective for
              different scenarios.
            </p>
          </div>
        </div>
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
            <img src={ACMWLogo} alt="ACM W logo" className="snowflake-image" />
          </div>
          <hr className="acmw-bar"></hr>
          <div className="right-work-container">
            <h1>Tech Fellowship</h1>
            <h4>Software Developer</h4>
            <h6>
              <i>January - May 2025</i>
            </h6>
            <p style={{ marginTop: "50px" }}>
              Through ACM W, I completed a 15-week Tech Fellowship where I
              worked on a team of 5 and gained valuable experience designing a
              product and <code>building an MVP</code>.
            </p>
            <p>
              The product we designed was a mobile app called ClubHub, where
              college students can discover on-campus clubs and organizations as
              well as project groups and start-ups. The inspiration came from
              the idea that as an incoming college student, it can be difficult
              to find the right clubs that fit your needs, and it may be
              challenging to find or be accepted into opportunities where you
              can gain relevant work experience.
            </p>
            <p>
              We used <code>React Native</code> to develop this iOS and Android
              compatible mobile app, and we used <code>Firebase</code> for our
              database.
            </p>
            <div style={{ textAlign: "center" }}>
              <img
                src={ClubHub}
                alt="Screenshot of 2 screens from Clubhub MVP"
                className="pen-pals-img"
                style={{ borderRadius: 8 }}
              />
            </div>
            <p>
              Throughout the fellowship, I gained and practiced{" "}
              <code>Product Management</code> skills including identifying
              customer needs, ideating a solution, and creating a road-map. I
              also attended workshops on launching startups, networking, and
              technical interviews.
            </p>
            <p>
              At the end of the fellowship, my group and I pitched our MVP to
              the rest of the club as well as a few industry professionals that
              were invited. The culmination of our hard work was evident in the
              positive feedback we received on our successful presentation and
              product.
            </p>
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
