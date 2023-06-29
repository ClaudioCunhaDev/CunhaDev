import React from "react";

export const IndividualExperience = (props) => {
  return (
    <div className="text-center p-3 max-w-[50rem] flex flex-col gap-3">
      <h3 className="text-[1.4rem] text-title font-semibold md:text-[1.8rem]">
        {props.title}
      </h3>
      <p className="text-gray-500 font-semibold text-[1.1rem] md:text-[1.5rem]">
        {props.description}
      </p>
    </div>
  );
};
