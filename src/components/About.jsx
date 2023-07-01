import React from "react";
import dek from "../assets/dek.jpg";
import FullStackDev from "../assets/FullStackDev.svg";

export const About = () => {
  return (
    <div
      id="about"
      className="bg-corFundo2 w-full pt-[10vh] lg:flex lg:justify-center lg:gap-[3rem] lg:h-screen lg:items-center"
    >
      <div className="min-h-[14rem] flex justify-center items-center">
        <div className="relative">
          <img
            src={dek}
            alt=""
            className="w-[18rem] h-[14rem] rounded-3xl md:h-[50vh] md:w-[25rem] lg:h-[50vh] lg:w-[45rem] lg:rounded-2xl 2xl:h-[80%] min-[1920px]:w-[45rem] hover:drop-shadow-3xl"
          />
          <div className="divImg absolute right-0 bottom-0 ">
            <img
              src={FullStackDev}
              className="rotate rounded-full h-[8.5vh] bg-white "
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3 lg:items-start mt-3">
        <h2 className="text-blue-500 font-bold text-[2rem] md:mt-[7vh] lg:mt-0 ">
          ABOUT ME
        </h2>
        <h2 className="text-[1.3rem] text-title font-bold px-5 md:text-[1.7rem] md:px-0">
          A dedicated FullStack Developer <br /> based in Porto, Portugal
        </h2>
        <p className="min-w-[18rem] max-w-[27rem] px-3 text-gray-500 md:text-[1.2rem] md:w-[27rem]">
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
