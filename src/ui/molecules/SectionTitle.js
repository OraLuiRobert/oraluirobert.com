import React from "react";

const SectionTitle = ({ title, highlightedText }) => {
  return (
    <h1 className="font-bold text-3xl lg:text-4xl text-center mb-16 lg:mb-20 relative before:h-1  before:absolute before:-bottom-3 before:bg-blue-100 before:w-[100px] before:left-0 before:right-0 before:mx-auto">
      {!highlightedText ? (
        title
      ) : (
        <>
          {title}
          <b className="text-blue-100">{highlightedText}</b>
        </>
      )}
    </h1>
  );
};

export default SectionTitle;
