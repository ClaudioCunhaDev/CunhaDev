import React from "react";
import { IndividualExperience } from "./IndividualExperience";

export const Experience = () => (
  <div className="bg-corFundo1 pt-[10vh] min-h-[100vh] p-3" id="experience">
    <h2 className="text-blue-500 mb-3 text-center font-bold text-[2rem]">
      EXPERIENCE
    </h2>
    <div className="min-h-[80vh] flex flex-col justify-around items-center">
      <IndividualExperience
        title={"FRONT-END GTA-RP Police Department"}
        description={
          "Fiz a parte front-end do departamento da policia de um servidor deGTA-RP. Esta experiência melhorou muito as minhas skills de programação, mais precisamente: React, javascript, typescript tailwind"
        }
      />
      <IndividualExperience
        title={"Bootcamp Bytes4Future"}
        description={
          "Fiz um Bootcamp intensivo de programação. Com esta experiência adquiri novas tecnologias, novos conceitos e melhorei algumas das minhas skills, tais como: NodeJs, Express, MongoDb, Next, React, JavaScript, UX/UI, Css"
        }
      />
      <IndividualExperience
        title={"OneBitCode Course"}
        description={
          "Este curso fez parte do meu processo, com ele aprendi: Html, Css, Bootstrap, JavaScript, React"
        }
      />
    </div>
  </div>
);
