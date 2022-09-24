import React from "react";
import { Zoom, Fade } from "react-reveal";

const AboutRightColumn = ({ title, description, secondTitle, secondDescription, image }) => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center flex-wrap md:flex-nowrap ">
      <Zoom>
        <div>
          <img src={image} alt="Robert's Hour" />
        </div>
      </Zoom>
      <Fade right>
        <div className=" text-lg text-center md:ml-20">
          <div className="mb-10">
            <h1 className="text-2xl py-2 font-bold">{title}</h1>
            <p className="text-left">{description}</p>
          </div>
          {secondTitle && (
            <div>
              <h1 className="text-2xl py-2 font-bold">{secondTitle}</h1>
              <p className="text-left mb-5">{secondDescription}</p>
            </div>
          )}
        </div>
      </Fade>
    </div>
  );
};

export default AboutRightColumn;
