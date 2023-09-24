import React from "react";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { color } from "framer-motion";

function NavBar() {
  const [navBarColor, setNavBarColor] = useState("");

  const handleClickHome = () => {
    setNavBarColor("home");
  };
  const handleClickAboutMe = () => {
    setNavBarColor("about");
  };
  const handleClickProjects = () => {
    setNavBarColor("projects");
  };
  const handleClickSkills = () => {
    setNavBarColor("skills");
  };
  const handleClickExperience = () => {
    setNavBarColor("experience");
  };
  const handleClickCertificates = () => {
    setNavBarColor("certificates");
  };
  const handleClickContact = () => {
    setNavBarColor("contacts");
  };
  const handleClickCunha = () => {
    setNavBarColor("home");
  };

  return (
    <div className="h-[10vh] fixed bg-white w-full border-b-2 z-20 xl:flex xl:items-center xl:justify-between">
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <a
        style={{ color: navBarColor === "home" ? "#2563EB" : "" }}
        href="#home"
        className="text-[2.3rem] pl-4 font-semibold xl:pt-0 hover:text-blue-500"
        onClick={() => handleClickCunha()}
      >
        CunhaDev
      </a>

      <div className="hidden xl:flex xl:gap-1 xl:text-[1.5rem] font-semibold xl:pr-4">
        <a
          style={{ color: navBarColor === "home" ? "#2563EB" : "" }}
          className={`hover:text-blue-500 p-2 ${
            navBarColor === "home" ? "text-blue-500" : ""
          }`}
          href="#home"
          onClick={() => handleClickHome()}
        >
          Home
        </a>
        <a
          style={{ color: navBarColor === "about" ? "#2563EB" : "" }}
          className={`hover:text-blue-500 border-l-2 p-2 border-blue-500 ${
            navBarColor === "aboutme" ? "text-blue-500" : ""
          }`}
          href="#about"
          onClick={() => handleClickAboutMe()}
        >
          About me
        </a>
        <a
          style={{ color: navBarColor === "projects" ? "#2563EB" : "" }}
          className={`hover:text-blue-500 border-l-2 p-2 border-blue-500 ${
            navBarColor === "projects" ? "text-blue-500" : ""
          }`}
          href="#projects"
          onClick={() => handleClickProjects()}
        >
          Projects
        </a>
        <a
          style={{ color: navBarColor === "skills" ? "#2563EB" : "" }}
          className={`hover:text-blue-500 border-l-2 p-2 border-blue-500 ${
            navBarColor === "skills" ? "text-blue-500" : ""
          }`}
          href="#skills"
          onClick={() => handleClickSkills()}
        >
          Skills
        </a>
        <a
          style={{ color: navBarColor === "experience" ? "#2563EB" : "" }}
          className={`hover:text-blue-500 border-l-2 p-2 border-blue-500 ${
            navBarColor === "experience" ? "text-blue-500" : ""
          }`}
          href="#experience"
          onClick={() => handleClickExperience()}
        >
          Experience
        </a>
        <a
          style={{ color: navBarColor === "certificates" ? "#2563EB" : "" }}
          className={`hover:text-blue-500 border-l-2 p-2 border-blue-500 ${
            navBarColor === "certificates" ? "text-blue-500" : ""
          }`}
          href="#certificates"
          onClick={() => handleClickCertificates()}
        >
          Certificates
        </a>
        <a
          style={{ color: navBarColor === "contacts" ? "#2563EB" : "" }}
          className={`hover:text-blue-500 border-l-2 p-2 border-blue-500 ${
            navBarColor === "contacts" ? "text-blue-500" : ""
          }`}
          href="#contact"
          onClick={() => handleClickContact()}
        >
          Contact me
        </a>
      </div>
    </div>
  );
}

export default NavBar;
