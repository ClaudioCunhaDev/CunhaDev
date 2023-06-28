import React from "react";
import NavBar from "./components/Navbar/NavBar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Certificates } from "./components/Certificates";
import { Contact } from "./components/Contact";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Certificates />
      <Contact />
    </div>
  );
}

export default App;
