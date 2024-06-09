import {Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import Project from "./pages/Project/project";
import Skills from "./pages/Skills/skills";
import Certificate from "./pages/Certificate/certificate";
import Contact from "./pages/Contact/contact";

const Router = () => {
  return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/project" element={<Project />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
  );
};

export default Router;