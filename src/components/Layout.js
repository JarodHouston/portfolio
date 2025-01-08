import Background from "./Background";
import Navbar from "./Navbar";
import "../styles/Layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <Background />
      <Navbar />
      <div className="App">{children}</div>
    </>
  );
};

export default Layout;
