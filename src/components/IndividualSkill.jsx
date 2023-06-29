import React from "react";

export const IndividualSkill = (props) => {
  return (
    <div className="flex gap-3 justify-center">
      <div className=" text-black text-center font-semibold p-3">
        <img src={props.src} className="h-[5rem] w-[7rem]" alt={props.alt} />
        <h2>{props.skill}</h2>
      </div>
    </div>
  );
};
