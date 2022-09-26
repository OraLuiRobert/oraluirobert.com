import React from "react";
import { Zoom, Fade } from "react-reveal";

const AboutLeftColumn = ({ title, description, secondTitle, secondDescription, image }) => {
  return (
    <div className="flex items-center flex-wrap md:flex-nowrap ">
      <Fade left>
        <div className=" text-lg text-center">
          <div className="mb-10">
            <h1 className="text-2xl py-2 font-bold">{title}</h1>
            <p className="text-left">{description}</p>
          </div>

          {secondTitle && (
            <div className="mb-5">
              <h1 className="text-2xl py-2 font-bold">{secondTitle}</h1>
              <p className="text-left">{secondDescription}</p>
            </div>
          )}
        </div>
      </Fade>
      <Zoom>
        <div className=" md:ml-20">
          <img src={image} alt="Robert's Hour" />
        </div>
      </Zoom>
    </div>
  );
};

export default AboutLeftColumn;
