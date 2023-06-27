import React from "react";
import dek from "../assets/dek.jpg";
import FullStackDev from "../assets/FullStackDev.svg";

export const About = () => {
  return (
    <div
      id="about"
      className="bg-corFundo2 w-full pt-[10vh] lg:flex lg:justify-center lg:gap-[3rem] lg:h-screen lg:items-center"
    >
      <div className="h-[14rem] flex justify-center items-center min-[2560px]:items-end">
        <div className="relative">
          <img
            src={dek}
            alt=""
            className="w-[16rem] h-[10rem] rounded-3xl md:h-[30vh] md:w-[25rem] lg:h-[60vh] lg:w-[30rem] lg:rounded-2xl 2xl:h-[55vh] min-[1920px]:w-[40rem] min-[2560px]:h-[38vh] min-[2560px]:w-[50rem]"
          />
          <div className="divImg absolute right-0 bottom-0 ">
            <img
              src={FullStackDev}
              className="rotate rounded-full h-[8.5vh] bg-white "
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3 lg:items-start min-[1920px]:h-[55vh]">
        <h2 className="text-blue-500 font-bold text-[1.4rem] md:mt-[7vh] lg:mt-0 min-[1920px]:text-[2rem]">
          ABOUT ME
        </h2>
        <h2 className="text-[1.7rem] text-title font-bold px-5 md:text-[1.5rem] md:px-0">
          A dedicated FullStack Developer <br /> based in Porto, Portugal
        </h2>
        <p className="w-[18rem] text-gray-500 md:text-[1rem] md:w-[25rem]">
          As a Junior FullStack Developer, I possess an impressive arsenal of
          skills in HTML, CSS, JavaScript, React, Next, Tailwind, NodeJs,
          Express, MongoDb, Bootstrap and SCSS. I excel in designing and
          maintaining responsive websites that offer a smooth user experience.
          My expertise lies in crafting dynamic, engaging interfaces through
          writing clean and optimized code and utilizing cutting-edge
          development tools and techniques. I am also a team player who thrives
          in collaborating with cross-functional teams to produce outstanding
          web applications.
        </p>
      </div>
    </div>
  );
};
