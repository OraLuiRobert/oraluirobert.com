import React from "react";

import hero from "../static/hero.png";

const Hero = () => {
  return (
    <section className=" relative">
        <img src={hero} className="w-full" alt="Ora Lui Robert" />
    </section>
  );
};

export default Hero;
