import React from "react";
import useScrollDetector from "scroll-detect-hook";

import Navigation from "../components/header/Navigation";
import logo from "../static/logo-transparent.png";

const Header = () => {
  const { position } = useScrollDetector();
  const background = position > 50 ? "bg-blue-50" : "bg-blue-100";

  return (
    <section id="header" className={" fixed top-0 right-0 left-0 z-10 py-3 px-5 " + background}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" target="_self" className="block mb-3 sm:mb-0">
          <img src={logo} className="w-[80px]" alt="Ora Lui Robert" />
        </a>
        <Navigation />
      </div>
    </section>
  );
};

export default Header;
