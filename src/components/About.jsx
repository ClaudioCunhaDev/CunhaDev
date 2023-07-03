import React from "react";
import dek from "../assets/dek.jpg";
import FullStackDev from "../assets/FullStackDev.svg";

export const About = () => {
  return (
    <div
      id="about"
      className="bg-corFundo2 w-screen pt-[10vh] lg:pt-[10vh] lg:flex lg:justify-center lg:gap-[3rem] lg:h-screen lg:items-center"
    >
      <div className="flex justify-center items-center">
        <div className="relative">
          <img
            src={dek}
            alt=""
            className="px-2 w-[100%] h-[21rem] rounded-3xl md:h-[50vh] md:w-[30rem] lg:h-[50vh] lg:w-[45rem] lg:rounded-2xl 2xl:h-[80%] min-[1920px]:w-[45rem] hover:drop-shadow-3xl"
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
          A dedicated Front-End Developer <br /> based in Porto, Portugal
        </h2>
        <p className="min-w-[18rem] max-w-[27rem] px-5 md:px-3 text-gray-500 md:text-[1.2rem] md:w-[27rem]">
          Being a Junior Front-End Developer has given me the skillset needed to
          code in React, Next, Javascript, Tailwind, Sass, Bootstrap, HTML, CSS.
          It has also provided the correct tools to offer users with the
          possibility of using well-designed and responsive websites, all while
          maintaining a smooth experience. I believe any good dev's strenghts
          lie in rightfuly crafting dynamic and engaging interfaces through
          clean and optimized code lines. I would describe myself as a team
          player whose goal is to collaborate with a cross-functional team with
          one goal in common - to produce and develop outstanding web
          applications.
        </p>
      </div>
    </div>
  );
};
