import React from "react";

import arrow from "../static/icon-go-up.svg";

const Footer = () => {
  return (
    <section className="container w-11/12 max-w-screen-lg mx-auto flex flex-col justify-between text-center items-center pb-6 sm:flex-row sm:text-left sm:pb-10">
      <p className="text-gray-400 text-base">
        Copyright &copy; 2022 QED. All rights reserved. QED is on
        <a href="https://github.com/qed-team" rel="noreferrer" target="_blank" className="border-b ml-2">
          GitHub
        </a>
        .
      </p>

      <a href="#header" className="flex p-2 -mr-2 hidden sm:block">
        <img src={arrow} alt="Go up" />
      </a>
    </section>
  );
};

export default Footer;
