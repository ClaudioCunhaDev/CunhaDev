import React from "react";

export const IndividualExperience = (props) => {
  return (
    <div className="text-center border-2 p-3 max-w-[50rem] flex flex-col gap-3">
      <h3 className="text-[1.3rem] text-title font-semibold">{props.title}</h3>
      <p className="text-gray-500 font-semibold text-[1rem]">
        {props.description}
      </p>
    </div>
  );
};
