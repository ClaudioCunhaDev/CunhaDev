import React from "react";
import Button from "./Button";
export const ProjectComponent = (props) => {
  return (
    <div className="h-[28vh] w-[15rem] bg-white border-2 gap-5 p-3 flex flex-col items-center md:w-[30rem] min-[2560px]:h-[20vh]">
      <div className="flex gap-3">
        <img
          src={props.src}
          alt={props.alt}
          className="max-w-[55%] max-h-[10vh] md:min-w-[20%]"
        />
        <div className="h-20 overflow-y-auto text-[0.7rem] md:w-[15rem] ">
          <p className="text-blue-500 text-[1rem] font-semibold">
            {props.title}
          </p>
          <p className="font-semibold">{props.description}</p>
        </div>
      </div>
      <div className="flex gap-5 w-full justify-center items-center h-[10vh]">
        <Button text={"View"} href={props.site} />
        <Button href={props.github} text={"Code"} />
      </div>
    </div>
  );
};
