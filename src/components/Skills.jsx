import React from "react";
import js from "../assets/skills/js.png";
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.svg";
import bootstrap from "../assets/skills/bootstrap.jpg";
import express from "../assets/skills/express.png";
import mongoDb from "../assets/skills/mongodb.png";
import next from "../assets/skills/next.png";
import node from "../assets/skills/node.png";
import react from "../assets/skills/react.png";
import sass from "../assets/skills/sass.png";
import tailwind from "../assets/skills/tailwind.svg";
import vite from "../assets/skills/vite.svg";
import uxui from "../assets/skills/uxui.png";
import { IndividualSkill } from "./IndividualSkill";

export const Skills = () => (
  <div className="bg-corFundo2 pt-[10vh] p-3" id="skills">
    <h2 className="text-blue-500 mb-10 text-center font-bold text-[2rem]">
      SKILLS
    </h2>
    <div className="flex flex-col gap-3 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3">
      <IndividualSkill src={html} alt={"Icon html"} skill={"HTML"} />
      <IndividualSkill src={css} alt={"Icon Css"} skill={"Css"} />
      <IndividualSkill
        src={bootstrap}
        alt={"Icon Bootstrap"}
        skill={"Bootstrap"}
      />
      <IndividualSkill src={sass} alt={"Icon Sass"} skill={"Sass"} />
      <IndividualSkill
        src={tailwind}
        alt={"Icon Tailwind"}
        skill={"Tailwind"}
      />
      <IndividualSkill src={js} alt={"Icon JavaScript"} skill={"JavaScript"} />
      <IndividualSkill src={react} alt={"Icon React"} skill={"React"} />
      <IndividualSkill src={next} alt={"Icon Next"} skill={"Next"} />
      <IndividualSkill src={express} alt={"Icon Express"} skill={"Express"} />
      <IndividualSkill src={mongoDb} alt={"Icon MongoDb"} skill={"MongoDb"} />
      <IndividualSkill src={node} alt={"Icon Node.js"} skill={"Node"} />
      <IndividualSkill src={uxui} alt={"Icon UX/UI"} skill={"UX/UI"} />
      <IndividualSkill src={vite} alt={"Icon Vite"} skill={"Vite"} />
    </div>
  </div>
);
