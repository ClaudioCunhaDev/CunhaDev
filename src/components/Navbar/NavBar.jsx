import React from "react";
import Sidebar from "./Sidebar";
import { useState } from "react";

function NavBar() {
  const [navBarColor, setNavBarColor] = useState("");
  const handleClickHome = () => {
    setNavBarColor("home");
  };
  const handleClickAboutMe = () => {
    setNavBarColor("aboutme");
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
    setNavBarColor("");
  };
  return (
    <div className="h-[10vh] fixed bg-white w-full border-b-2 z-20 lg:flex lg:items-center lg:justify-between">
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <a
        href="#home"
        className="text-[2.3rem] pl-3 font-semibold lg:pt-0 hover:text-blue-500"
        onClick={() => handleClickCunha()}
      >
        CunhaDev
      </a>

      <div className="hidden lg:flex lg:gap-1 lg:text-[1.5rem] font-semibold lg:pr-3">
        <a
          className={`hover:text-blue-500 p-2 ${
            navBarColor === "home" ? "text-blue-500" : ""
          }`}
          href="#home"
          onClick={() => handleClickHome()}
        >
          Home
        </a>
        <a
          className={`hover:text-blue-500 border-l-2 p-2 border-blue-500 ${
            navBarColor === "aboutme" ? "text-blue-500" : ""
          }`}
          href="#about"
          onClick={() => handleClickAboutMe()}
        >
          About me
        </a>
        <a
          className={`hover:text-blue-500 border-l-2 p-2 border-blue-500 ${
            navBarColor === "projects" ? "text-blue-500" : ""
          }`}
          href="#projects"
          onClick={() => handleClickProjects()}
        >
          Projects
        </a>
        <a
          className={`hover:text-blue-500 border-l-2 p-2 border-blue-500 ${
            navBarColor === "skills" ? "text-blue-500" : ""
          }`}
          href="#skills"
          onClick={() => handleClickSkills()}
        >
          Skills
        </a>
        <a
          className={`hover:text-blue-500 border-l-2 p-2 border-blue-500 ${
            navBarColor === "experience" ? "text-blue-500" : ""
          }`}
          href="#experience"
          onClick={() => handleClickExperience()}
        >
          Experience
        </a>
        <a
          className={`hover:text-blue-500 border-l-2 p-2 border-blue-500 ${
            navBarColor === "certificates" ? "text-blue-500" : ""
          }`}
          href="#certificates"
          onClick={() => handleClickCertificates()}
        >
          Certificates
        </a>
        <a
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
