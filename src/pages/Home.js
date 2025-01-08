import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <div className="heading-container">
        <h1 className="fade-in-left">Jarod Houston</h1>
        <p>
          <i>B.S. Computer Science UCLA '22-'26</i>
        </p>
        <button onClick={() => navigate("/about")} className="about-button">
          About me
        </button>
      </div>
    </div>
  );
}

export default Home;
