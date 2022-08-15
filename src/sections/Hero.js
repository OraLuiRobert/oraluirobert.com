import React from "react";

import hero from "../static/hero.png";

const Hero = () => {
  return (
    <section className="container w-11/12 max-w-screen-xl mx-auto relative">
        <img src={hero} alt="Ora Lui Robert" />
    </section>
  );
};

export default Hero;
