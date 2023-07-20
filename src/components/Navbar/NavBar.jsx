import React from "react";
import Sidebar from "./Sidebar";

function NavBar() {
  return (
    <div className="h-[10vh] fixed bg-white w-full border-b-2 z-20 lg:flex lg:items-center lg:justify-between">
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <a href="#home" className="text-[2.3rem] pl-3 font-semibold lg:pt-0">
        CunhaDev
      </a>

      <div className="hidden lg:flex lg:gap-3 lg:text-[1.5rem] font-semibold lg:pr-3 xl:gap-5">
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
