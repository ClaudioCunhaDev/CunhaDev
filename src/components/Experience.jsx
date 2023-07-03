import React from "react";
import { IndividualExperience } from "./IndividualExperience";

export const Experience = () => (
  <div className="bg-corFundo1 pt-[10vh] min-h-[100vh] p-3" id="experience">
    <h2 className="text-blue-500 mb-3 text-center font-bold text-[2rem]">
      EXPERIENCE
    </h2>
    <div className="min-h-[80vh] flex flex-col justify-around items-center">
      <IndividualExperience
        title={"Front-End GTA-RP Police Department:"}
        description={
          "I worked on the front-end part of the police department of a GTA-RP server. This experience greatly improved my programming skills, specifically React, JavaScript, TypeScript, and Tailwind."
        }
      />
      <IndividualExperience
        title={"Bytes4Future Bootcamp:"}
        description={
          "I completed an intensive programming bootcamp. Through this experience, I acquired new technologies, learned new concepts, and improved some of my skills, such as Node.js, Express, MongoDB, Next.js, React, JavaScript, UX/UI, and CSS."
        }
      />
      <IndividualExperience
        title={"OneBitCode Course"}
        description={
          "This course was part of my journey, and through it, I learned HTML, CSS, Bootstrap, JavaScript, and React."
        }
      />
    </div>
  </div>
);
