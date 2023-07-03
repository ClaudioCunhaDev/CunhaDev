import React from "react";
import Sidebar from "./Sidebar";

function NavBar() {
  return (
    <div className="h-[10vh] fixed  bg-white w-full border-b-2 z-20">
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <a href="#home">
        <h1 className="text-[2rem] pl-3 pt-3 font-semibold min-[1920px]:pt-[3vh]">
          CunhaDev
        </h1>
      </a>
    </div>
  );
}

export default NavBar;
