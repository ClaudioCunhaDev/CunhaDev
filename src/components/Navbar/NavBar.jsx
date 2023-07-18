import React from "react";
import Sidebar from "./Sidebar";

function NavBar() {
  return (
    <div className="h-[10vh] fixed bg-white w-full border-b-2 z-20 lg:flex lg:items-center lg:justify-between">
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <a href="#home">
        <h1 className="text-[2rem] pl-3 pt-2 font-semibold min-[1920px]:pt-[3vh] lg:pt-0">
          CunhaDev
        </h1>
      </a>
      <div className="hidden lg:flex lg:gap-3 lg:text-[1.5rem] font-semibold min-[1920px]:pt-[3vh] lg:pr-3">
        <a className="hover:text-blue-500" href="#home">
          Home
        </a>
        <a className="hover:text-blue-500" href="#about">
          About me
        </a>
        <a className="hover:text-blue-500" href="#projects">
          Projects
        </a>
        <a className="hover:text-blue-500" href="#skills">
          Skills
        </a>
        <a className="hover:text-blue-500" href="#experience">
          Experience
        </a>
        <a className="hover:text-blue-500" href="#certificates">
          Certificates
        </a>
        <a className="hover:text-blue-500" href="#contact">
          Contact me
        </a>
      </div>
    </div>
  );
}

export default NavBar;
