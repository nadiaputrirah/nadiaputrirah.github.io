import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useEffect } from "react";
import "./App.css";

import Home from "./pages/Home/index";
import Project from "./pages/Project/project";
import Skills from "./pages/Skills/skills";
import Certificate from "./pages/Certificate/certificate";
import Contact from "./pages/Contact/contact";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/home");
    }
  }, [location, navigate]);

  return (
    <Routes>
      <Route path="/home/*" element={<Home />} />
      <Route path="/project/*" element={<Project />} />
      <Route path="/skills/*" element={<Skills />} />
      <Route path="/certificate/*" element={<Certificate />} />
      <Route path="/contact/*" element={<Contact />} />
    </Routes>
  );
}

export default App;
