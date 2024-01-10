import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Blue from "./components/Blue";
import Red from "./components/Red";
import Home from "./components/Home";

function App() {
  return (
    <>
      <div id="container">
        <h1>Hello world</h1>
        <div id="navbar">
          <Link to="/red">Red Tag</Link>
          <Link to="/Blue">Blue Tag</Link>
          <Link to="/Home">Home Tag</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
