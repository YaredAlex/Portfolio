import { useState } from "react";
import "./App.css";
import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/contact";
import HomeRoute from "./routes/home_route";
import AboutMe from "./pages/about";
import Projects from "./pages/projects_detail";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeRoute />}>
              <Route path="" element={<Home />} />
              <Route path="about-me" element={<AboutMe />} />
              <Route path="projects" element={<Projects />} />
              <Route path="/projects/:id" element={<Projects />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
