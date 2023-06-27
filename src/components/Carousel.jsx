import React from "react";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import bytes4future from "../assets/bytes4future.png";
import JSI1 from "../assets/JSI1.png";
import JSII1 from "../assets/JSII1.png";
import JSIII1 from "../assets/JSIII1.png";
import JSIV1 from "../assets/JSIV1.png";
import JSV1 from "../assets/JSV1.png";
import HTML1 from "../assets/HTML1.png";
import CSS1 from "../assets/CSS1.png";
import CSSMODERNO1 from "../assets/CSSMODERNO1.png";
import GITGITHUB1 from "../assets/GITGITHUB1.png";

// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";

const images = [
  HTML1,
  CSS1,
  CSSMODERNO1,
  JSI1,
  JSII1,
  JSIII1,
  GITGITHUB1,
  JSIV1,
  JSV1,
  bytes4future,
].reverse();

export default () => {
  return (
    <div className=" flex justify-center items-center">
      <Splide
        options={{
          rewind: true,
          gap: "1rem",
          perPage: 1,
          type: "loop",
        }}
        aria-label="My Favorite Images"
      >
        {images.map((image) => {
          return (
            <SplideSlide
              key={image}
              className="flex justify-center items-center"
            >
              <img
                src={image}
                alt="Image"
                className="max-h-[65vh] rounded-lg"
              />
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};
