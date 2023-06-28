import React from "react";
import Button from "./Button";
export const ProjectComponent = (props) => {
  return (
    <div className="w-full bg-white rounded-lg border-2 gap-5 p-3">
      <div className="flex gap-3">
        <div className="w-[60%] flex items-center justify-center md:items-start p-3">
          <img
            src={props.src}
            alt={props.alt}
            className="h-[15vh] max-w-[10rem]"
          />
        </div>
        <div className="w-[40%] text-[0.7rem] h-[30vh] md:w-[15rem]  overflow-y-auto">
          <p className="text-blue-500 text-[1.2rem] font-semibold">
            {props.title}
          </p>
          <p className="font-semibold text-[1rem]">{props.description}</p>
        </div>
      </div>
      <div className="flex gap-5 w-full justify-center mt-5">
        <Button text={"View"} href={props.site} />
        <Button href={props.github} text={"Code"} />
      </div>
    </div>
  );
};
