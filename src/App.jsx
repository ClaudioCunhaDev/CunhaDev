import React from "react";
import NavBar from "./components/Navbar/NavBar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Certificates } from "./components/Certificates";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Certificates />
      <Contact />
    </div>
  );
}

export default App;
