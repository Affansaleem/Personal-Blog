// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Content from "./components/Content";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/app" element={<Content />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </Router>
  );
}

export default App;
