import React from "react";
import { isMobile } from "react-device-detect";
import useScrollDetector from "scroll-detect-hook";
import MobileNavigation from "../components/header/MobileNavigation";

import Navigation from "../components/header/Navigation";
import logo from "../static/logo-transparent.png";

const Header = () => {
  const { position } = useScrollDetector();
  const background = position > 50 ? "bg-blue-50" : "bg-blue-100";

  return (
    <section id="header" className={" fixed top-0 right-0 left-0 z-10 py-3  " + background}>
      <div className="w-11/12 mx-auto flex justify-between items-center">
        <a href="/" target="_self" className="block">
          <img src={logo} className="w-[80px]" alt="Ora Lui Robert" />
        </a>
        {isMobile ? <MobileNavigation /> : <Navigation />}
      </div>
    </section>
  );
};

export default Header;
