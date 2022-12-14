import React from "react";
import { Zoom, Fade } from "react-reveal";

const DynamicRow = ({ title, description, secondTitle, secondDescription, image, isReversed, hasButton, buttonUrl, buttonLabel }) => {
  const reversed = isReversed ? "flex-row-reverse" : "";
  const margin = isReversed ? "md:mr-20" : "md:ml-20";
  return (
    <div className={"flex items-center justify-evenly flex-wrap lg:flex-nowrap " + reversed}>
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
          {hasButton && (
            <a href={buttonUrl} className="inline-block bg-blue-100 py-2 px-10 text-white rounded-md mb-10">
              {buttonLabel}
            </a>
          )}
        </div>
      </Fade>
      <Zoom>
        <div className={margin}>
          <img src={image} className="md:max-w-[800px] w-[500px] max-w-full" alt="Robert's Hour" />
        </div>
      </Zoom>
    </div>
  );
};

export default DynamicRow;
