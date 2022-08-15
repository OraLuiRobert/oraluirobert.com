import React from "react";

import logo from "../static/logo.png";

const Header = () => {
  return (
    <section id="header" className="flex flex-col w-11/12 items-center mx-auto container max-w-screen-lg pt-10 pb-10 sm:pt-10 sm:pb-12 sm:flex-row sm:justify-between">
      <a href="/" target="_self" className="block mb-3 sm:mb-0">
        <img src={logo} className="w-[60px]" alt="Ora Lui Robert" />
      </a>
    </section>
  );
};

export default Header;
