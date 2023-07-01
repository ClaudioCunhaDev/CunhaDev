import React from "react";
import Button from "./Button";
export const ProjectComponent = (props) => {
  return (
    <div className="w-full p-3 min-h-[20vh] max-w-[28rem] bg-white rounded-lg border-2 flex flex-col justify-between hover:drop-shadow-3xl">
      <div>
        <img src={props.src} alt={props.alt} className="h-[180px] w-[100%]" />
        <div className="my-5">
          <p className="text-blue-500 text-[1.2rem] font-semibold">
            {props.title}
          </p>
          <p className="font-semibold text-[1rem]">{props.description}</p>
        </div>
      </div>
      <div className=" flex gap-3 w-full justify-center">
        <Button text={"View"} href={props.site} />
        <Button href={props.github} text={"Code"} />
      </div>
    </div>
  );
};
