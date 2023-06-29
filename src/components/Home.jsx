import React from "react";
import cunha from "../assets/Cunha.jpeg";
import "../index.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import IconJavascript from "../assets/IconJavascript";
import IconHtml5 from "../assets/IconHtml5";
import IconBxlCss3 from "../assets/IconBxlCss3";
import IconLogoReact from "../assets/IconLogoReact";
import IconNext from "../assets/IconNext";
import IconTailwindcss from "../assets/IconTailwindcss";
import IconBootstrap from "../assets/IconBootstrap";
import IconSass from "../assets/IconSass";
import { MaquinaDeEscrever } from "./MaquinaDeEscrever";

export const Home = () => {
  return (
    <div
      id="home"
      className="bg-corFundo1 min-h-[100vh] w-full pt-[10vh] lg:h-[100vh] lg:items-center lg:flex lg:flex-col"
    >
      <div className="h-full lg:items-center lg:flex lg:flex-col lg:justify-around">
        <div className="lg:flex lg:gap-3 lg:items-center lg:justify-center min-[1920px]:justify-between min-[1920px]:w-full  ">
          <div className="flex justify-center mt-5">
            <div className="container">
              <div className="shape flex justify-center items-center border-[0.2rem]">
                <img
                  className="rounded-full border-x-[0.2rem] w-[220px] h-[220px] min-[1920px]:h-[300px] min-[1920px]:w-[300px]"
                  src={cunha}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center mt-5 text-center gap-5">
            <div className="text-title text-[2.5rem] font-bold">
              <MaquinaDeEscrever
                text={"Front-end Developer"}
                delay={50}
                esconderCursor
              />
            </div>
            <p className="lg:w-[25rem] min-[1920px]:text-[2rem] text-[1.5rem]">
              Hi, I'm Cláudio Cunha. A passionate Front-end React Developer
              based in Porto, Portugal. 🚩
            </p>
            <div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white text-[1.3rem] font-bold py-2 px-4 rounded inline-flex items-center w-[15rem] h-[5vh] justify-center">
                <svg
                  class="fill-current w-5 h-5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                <a href="/CunhaCVPT.pdf" download>
                  Download CV
                </a>
              </button>
            </div>
            <div className="flex gap-3 text-[2rem]">
              <a href="https://www.linkedin.com/in/claudionogueiradacunha/">
                <FaLinkedin />
              </a>
              <a href="https://github.com/ClaudioCunhaDev">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-5 flex flex-col items-center gap-5 lg:flex-row lg:justify-center lg:items-start min-[1920px]:items-center">
          <h1 className="border-b-2 border-gray-500 font-medium text-[1.8rem] lg:text-[2rem] lg:border-r-2 lg:border-b-0 lg:p-3 min-[1920px]:text-[2.7rem]">
            Tech Stack
          </h1>
          <div className="flex flex-col gap-3 pb-5 lg:flex-row ">
            <div className="flex gap-3">
              <div className="h-16 w-16 rounded-full border-2 bg-white flex justify-center items-center text-[1.7rem] min-[1920px]:text-[2.5rem] min-[1920px]:h-24 min-[1920px]:w-24">
                <IconHtml5 />
              </div>
              <div className="h-16 w-16 rounded-full border-2 bg-white flex justify-center items-center text-[1.8rem] min-[1920px]:text-[2.5rem] min-[1920px]:h-24 min-[1920px]:w-24">
                <IconBxlCss3 />
              </div>
              <div className="h-16 w-16 rounded-full border-2 bg-white flex justify-center items-center text-[1.2rem] min-[1920px]:text-[2.5rem] min-[1920px]:h-24 min-[1920px]:w-24">
                <IconJavascript />
              </div>
            </div>
            <div className="flex gap-3">
              <div className="h-16 w-16 rounded-full border-2 bg-white flex justify-center items-center text-[1.7rem] min-[1920px]:text-[2.5rem] min-[1920px]:h-24 min-[1920px]:w-24">
                <IconLogoReact />
              </div>
              <div className="h-16 w-16 rounded-full border-2 bg-white flex justify-center items-center text-[1.5rem] min-[1920px]:text-[2.5rem] min-[1920px]:h-24 min-[1920px]:w-24">
                <IconNext />
              </div>
              <div className="h-16 w-16 rounded-full border-2 bg-white flex justify-center items-center text-[1.7rem] min-[1920px]:text-[2.5rem] min-[1920px]:h-24 min-[1920px]:w-24">
                <IconTailwindcss />
              </div>
            </div>
            <div className="flex gap-3">
              <div className="h-16 w-16 rounded-full border-2 bg-white flex justify-center items-center text-[1.7rem] min-[1920px]:text-[2.5rem] min-[1920px]:h-24 min-[1920px]:w-24">
                <IconBootstrap />
              </div>
              <div className="h-16 w-16 rounded-full border-2 bg-white flex justify-center items-center text-[1.7rem] min-[1920px]:text-[2.5rem] min-[1920px]:h-24 min-[1920px]:w-24">
                <IconSass />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
