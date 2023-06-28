import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import "./Sidebar.css";

export default (props) => {
  const [state, setState] = useState({ menuOpen: false });

  const closeMenu = () => {
    setState({ menuOpen: false });
  };

  const handleStateChange = (state) => {
    setState({ menuOpen: state.isOpen });
  };

  return (
    <div className="custom-menu">
      <Menu
        isOpen={state.menuOpen}
        onStateChange={(state) => handleStateChange(state)}
        disableCloseOnEsc
        right
        width={"100%"}
      >
        <a className="menu-item" href="#home" onClick={() => closeMenu()}>
          Home
        </a>
        <a className="menu-item" href="#about" onClick={() => closeMenu()}>
          About me
        </a>
        <a className="menu-item" href="#projects" onClick={() => closeMenu()}>
          Projects
        </a>
        <a className="menu-item" href="#skills" onClick={() => closeMenu()}>
          Skills
        </a>
        <a className="menu-item" href="#experience" onClick={() => closeMenu()}>
          Experience
        </a>
        <a
          className="menu-item"
          href="#certificates"
          onClick={() => closeMenu()}
        >
          Certificates
        </a>
        <a className="menu-item" href="#contact" onClick={() => closeMenu()}>
          Contact me
        </a>
      </Menu>
    </div>
  );
};
