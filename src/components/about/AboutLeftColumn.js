import React from "react";

const AboutLeftColumn = ({ title, description, secondTitle, secondDescription, image }) => {
  return (
    <>
      <div className="flex-1 text-lg text-center">
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
      <div className="flex-1 ml-20">
        <img src={image} alt="Robert's Hour" />
      </div>
    </>
  );
};

export default AboutLeftColumn;
