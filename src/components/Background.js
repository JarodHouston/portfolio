import { useEffect, useState } from "react";
import "../styles/Background.css";

function Background() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentPos, setCurrentPos] = useState({ x: 0, y: 0 });
  const delay = 0.1; // The delay factor (between 0 and 1)

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Smooth transition of position using requestAnimationFrame
  useEffect(() => {
    const updatePosition = () => {
      setCurrentPos((prevPos) => {
        const dx = mousePos.x - prevPos.x;
        const dy = mousePos.y - prevPos.y;

        // Interpolate the position for smooth delay
        return {
          x: prevPos.x + dx * delay,
          y: prevPos.y + dy * delay,
        };
      });

      requestAnimationFrame(updatePosition);
    };

    updatePosition(); // Start the animation loop
  }, [mousePos, delay]);

  // CSS for the new background
  const backgroundStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: -10,
    margin: 0,
    height: "100vh",
    width: "100vw",
    backgroundColor: "#06012e", // Background color (black area outside the circle)
    backgroundImage: `radial-gradient(circle, #a0a0a0 0.5px, transparent 1px)`,
    backgroundSize: "30px 30px", // Adjust size of dots and spacing
    maskImage: `radial-gradient(circle at ${currentPos.x}px ${currentPos.y}px, rgba(0, 0, 0, 1) 1%, rgba(0, 0, 0, 0) 50%)`, // Mask around mouse position with delay
    maskSize: "100% 100%",
    pointerEvents: "none", // Ensure it doesn't interfere with user interactions
  };

  return (
    <>
      <div className="fading-overlay"></div>
      <div className="background">
        <div style={backgroundStyle}></div>
      </div>
    </>
  );
}

export default Background;
