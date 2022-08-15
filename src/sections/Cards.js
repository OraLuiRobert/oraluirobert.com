import React from "react";

const Cards = () => {
  return (
    <section className="container w-11/12 max-w-screen-lg mx-auto lg:space-x-20 flex items-center flex-col lg:flex-row pt-10 pb-20 md:pt-40 md:pb-40 lg:pb-60 lg:pt-60">
      <div className="flex flex-col mb-10 justify-center w-full md:w-auto md:flex-row lg:mb-0">
        <div className="p-5 rounded-3xl bg-blue-50 text-white w-full md:w-48 h-48 mb-4 md:mb-0 md:mt-36 shadow-2xl relative z-10">
          <small className="font-semibold text-xl leading-6">Years of startup experience</small>
          <h4 className="font-semibold mt-9 text-5xl md:text-7xl">40</h4>
        </div>

        <div className="p-5 rounded-3xl bg-blue-50 text-white w-full md:w-48 h-48 mb-4 md:mb-0 md:-ml-5 md:-mr-20 shadow-2xl relative">
          <small className="font-semibold text-xl leading-6">Years of remote working</small>
          <h4 className="font-semibold mt-9 text-5xl md:text-7xl">15</h4>
        </div>

        <div className="p-5 rounded-3xl bg-blue-50 text-white w-full md:w-48 h-48 md:mt-44 shadow-2xl">
          <small className="font-semibold text-xl leading-6">Products shipped</small>
          <h4 className="font-semibold mt-9 text-5xl md:text-7xl">7</h4>
        </div>
      </div>

      <p className="text-lg md:text-2xl leading-8 md:leading-10 font-semibold">
        We are a web and product development company helping startups all over the world reach their audience. We pride with experience, knowledge and a driven desire for
        excellence.
      </p>
    </section>
  );
};

export default Cards;
