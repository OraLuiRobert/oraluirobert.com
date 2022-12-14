import React from "react";
import hero from "../static/hero.mp4";
import logoHero from "../static/logo-hero.png";
import heroImg from "../static/hero.png";

const Hero = ({ isInnerPage }) => {
  return (
    <section id="hero" className="mt-[65px]">
      {isInnerPage ? (
        <img src={heroImg} />
      ) : (
        <>
          <div className=" relative before:absolute before:bg-gray-50 before:top-0 before:bottom-0 before:left-0 before:right-0">
            <video src={hero} autoPlay loop muted />
            <img src={logoHero} className="absolute top-1/2 right-0 left-0 mx-auto bottom-0 -translate-y-2/4 w-2/5" />
          </div>
          <div className="text-center text-lg  lg:text-xl bg-yellow-50 py-5 uppercase font-black tracking-widest ">Our environment is fun, but our purpose is serious.</div>
        </>
      )}
    </section>
  );
};

export default Hero;
