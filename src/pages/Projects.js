import DownArrow from "../images/down-arrow.png";
import HobbyHopperLogo from "../images/hobby-hopper.png";
import TasteUCLALogo from "../images/tasteUCLA-inverted.png";
import WoodokuLogo from "../images/woodoku.png";
import BattleshipLogo from "../images/battleship.png";
import TwentyLogo from "../images/2048.png";
import "../styles/Projects.css";

function Projects(ProjectData) {
  function expandProject(event) {
    const container = event.currentTarget;
    const image = container.querySelector(".down-arrow");
    if (container.classList.contains("expanded")) {
      // Collapse: Set to current height, then to 0
      container.style.height = `${container.scrollHeight}px`; // Set to current full height
      requestAnimationFrame(() => {
        container.style.height = "300px"; // Collapse to original height
      });
      if (image) {
        image.classList.remove("rotated"); // Reset image rotation
      }
    } else {
      // Expand: Set to fixed height, then to full height
      container.style.height = "300px"; // Ensure it's at the base height
      requestAnimationFrame(() => {
        container.style.height = `${container.scrollHeight}px`; // Expand to content height
      });
      if (image) {
        image.classList.add("rotated"); // Rotate image
      }
    }
    container.addEventListener("transitionend", () => {
      // Reset inline style after transition ends
      if (!container.classList.contains("expanded")) {
        container.style.height = ""; // Clear inline height for hover to work
      }
    });
    container.classList.toggle("expanded");
  }
  return (
    <div className="project-container">
      <div className="project-card" onClick={expandProject}>
        <div className="project-card-header">
          <h2>Hobby Hopper</h2>
          <img src={HobbyHopperLogo} alt="Hobby Hopper logo" />
        </div>
        <p className="date">January - April 2024</p>
        <p className="description">Mobile app to explore new hobbies</p>
        <div className="arrow-container">
          <img className="down-arrow" src={DownArrow} alt="down arrow" />
        </div>
        {/* FIX THE DIV */}
        <div style={{ width: "28%" }}>
          <a
            href="https://github.com/JarodHouston/Behavior-App"
            target="_blank"
            rel="noreferrer"
          >
            <div className="project-link">Github</div>
          </a>
        </div>
        <div className="expanded-content">
          <p>
            I had the pleasure of working with <b>5 MBA students</b> at UCLA's
            Anderson School of Management to help realize their app idea they
            created as part of a capstone class to study the Business of
            Behavioral Change under Professor Hal Herschfield.
          </p>
          <p>
            They're app, <b>Hobby Hopper</b>, is a platform where users can
            explore new hobbies ranging from yoga to crochet lessons through
            suggestions of activities and events happening in their local area
            or online. Users can connect with friends to RSVP to activities
            together. People hosting events can become verified on the app to
            promote their event through the app.
          </p>
          <p>
            As the only software developer on the team, my responsibilty was to
            turn the MBA students' app idea into an actual mobile app. For the
            purposes of their project, I focused mainly on the frontend work of
            the app since the backend functionality was less important. I used{" "}
            <code>React Native</code> and <code>CSS</code> to bring their app to
            life. They provided a <code>Figma</code> file with the
            specifications for each page layout, button functionality, and icons
            and images.
          </p>
          <div style={{ height: "40px" }}></div>
        </div>
      </div>
      <div className="project-card" onClick={expandProject}>
        <div className="project-card-header">
          <h2>Brewin Interpreter</h2>
        </div>
        <p className="date">October - December 2024</p>
        <p className="description">
          Interprets the made-up coding language, Brewin
        </p>
        <div className="arrow-container">
          <img className="down-arrow" src={DownArrow} alt="down arrow" />
        </div>
        <div style={{ width: "28%" }}>
          {" "}
          <a
            href="https://github.com/JarodHouston/CS-131-Brewin-Interpreter"
            target="_blank"
            rel="noreferrer"
          >
            <div className="project-link">Github</div>
          </a>
        </div>

        <div className="expanded-content">
          <p>
            Throughout my Programming Languages class, our main project was
            creating an interpreter for a made up language called Brewin.
          </p>
          <p>
            I developed multiple versions of the interpreter to interpret the
            different versions of Brewin, being Brewing++ and Brewin#.
          </p>
          <p>
            The interpreter is written in <code>Python</code>.
          </p>
          <div style={{ height: "40px" }}></div>
        </div>
      </div>
      <div className="project-card" onClick={expandProject}>
        <div className="project-card-header">
          <h2>tasteUCLA</h2>
          <img src={TasteUCLALogo} alt="tasteUCLA logo" />
        </div>
        <p className="date">October - December 2023</p>
        <p className="description">Rate and review UCLA campus food</p>
        <div className="arrow-container">
          <img className="down-arrow" src={DownArrow} alt="down arrow" />
        </div>
        <div style={{ width: "28%" }}>
          <a
            href="https://github.com/JENCS/TasteUCLA"
            target="_blank"
            rel="noreferrer"
          >
            <div className="project-link">Github</div>
          </a>
        </div>

        <div className="expanded-content">
          <p>
            For my Software Construction class, I worked with 4 others to create
            a fully functional application called tasteUCLA, a platform where
            UCLA students can post and review food served on campus.
          </p>
          <p>
            We used <code>React</code> and a <code>MERN</code> stack for this
            project. I worked on both frontend and backend work including
            styling and coding numerous pages on the app and connecting the
            application to our database.
          </p>
          <div style={{ height: "40px" }}></div>
        </div>
      </div>
      <div className="project-card" onClick={expandProject}>
        <div className="project-card-header">
          <h2>Woodoku</h2>
          <img src={WoodokuLogo} alt="Woodoku game screenshot" />
        </div>
        <p className="date">May - June 2022</p>
        <p className="description">Re-creation of the game Woodoku</p>
        <div className="arrow-container">
          <img className="down-arrow" src={DownArrow} alt="down arrow" />
        </div>
        <div style={{ width: "28%" }}>
          <a
            href="https://github.com/JarodHouston/Woodoku"
            target="_blank"
            rel="noreferrer"
          >
            <div className="project-link">Github</div>
          </a>
        </div>

        <div className="expanded-content">
          <p>
            I re-created one of my favorite mobile games Woodoku, a spin on
            Sudoku with different shaped wooden blocks. The objective is to
            complete 3x3 grids, rows, and columns to make those blocks disappear
            and gain points. The game ends when you have no more valid places
            you can place your current blocks.
          </p>
          <p>
            This project was created with <code>Java</code>.
          </p>
          <div style={{ height: "40px" }}></div>
        </div>
      </div>
      <div className="project-card" onClick={expandProject}>
        <div className="project-card-header">
          <h2>Battleship</h2>
          <img src={BattleshipLogo} alt="Battleship game screenshot" />
        </div>
        <p className="date">December 2022</p>
        <p className="description">Text based Battleship game</p>
        <div className="arrow-container">
          <img className="down-arrow" src={DownArrow} alt="down arrow" />
        </div>
        <div style={{ width: "28%" }}>
          <a
            href="https://github.com/JarodHouston/Battleship"
            target="_blank"
            rel="noreferrer"
          >
            <div className="project-link">Github</div>
          </a>
        </div>

        <div className="expanded-content">
          <p>
            I created a 1 player game of Battleship where you play against the
            computer. It is a text based game that takes entries in from the
            user and will print out the output for each turn in the game. The
            built in AI opponent will think intelligently, think you can be
            smarter and beat it?
          </p>
          <p>
            This project was created with <code>C++</code>.
          </p>
          <div style={{ height: "40px" }}></div>
        </div>
      </div>
      <div className="project-card" onClick={expandProject}>
        <div className="project-card-header">
          <h2>2048 Spinoff</h2>
          <img src={TwentyLogo} alt="2048 Spinoff game screenshot" />
        </div>
        <p className="date">November - December 2021</p>
        <p className="description">2048 with colors</p>
        <div className="arrow-container">
          <img className="down-arrow" src={DownArrow} alt="down arrow" />
        </div>
        <div style={{ width: "28%" }}>
          <a
            href="https://github.com/JarodHouston/2048-Spinoff"
            target="_blank"
            rel="noreferrer"
          >
            <div className="project-link">Github</div>
          </a>
        </div>

        <div className="expanded-content">
          <p>
            I re-created the classic game 2048 with colors instead of numbers.
            Combine like colors to "upgrade" that color and unlock new ones. The
            mechanics work the same as the traditional game.
          </p>
          <p>
            This project was created using <code>Java</code>.
          </p>
          <div style={{ height: "40px" }}></div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
