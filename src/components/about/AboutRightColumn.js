import React from "react";

const AboutRightColumn = ({ title, description, secondTitle, secondDescription, image }) => {
  return (
    <>
      <div className="flex-1">
        <img src={image} alt="Robert's Hour" />
      </div>
      <div className="flex-1 text-lg text-center ml-20">
        <div className="mb-10">
          <h1 className="text-2xl py-2 font-bold">{title}</h1>
          <p className="text-left">{description}</p>
        </div>
        {secondTitle && (
          <div>
            <h1 className="text-2xl py-2 font-bold">{secondTitle}</h1>
            <p className="text-left">{secondDescription}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default AboutRightColumn;
