import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home.js";
import About from "./pages/About.js";
import Blog from "./pages/Blog.js";
import Contact from "./pages/Contact.js";
import Project from "./pages/Project.js";
import Navbars from "./components/Navbars.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div>
      <Router>
        <Navbars />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
