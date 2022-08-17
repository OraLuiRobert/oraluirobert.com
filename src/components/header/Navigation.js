import React from "react";

const Navigation = () => {
  return (
    <ul className="flex uppercase">
      <li className="mr-7 relative before:hidden before:hover:block before:h-0.5  before:absolute before:-bottom-1 before:bg-white before:w-full">
        <a className="text-white ">About us</a>
      </li>
      <li className="mr-7 relative before:hidden before:hover:block before:h-0.5  before:absolute before:-bottom-1 before:bg-white before:w-full">
        <a className="text-white">Projects</a>
      </li>
      <li className="mr-7 relative before:hidden before:hover:block before:h-0.5  before:absolute before:-bottom-1 before:bg-white before:w-full">
        <a className="text-white">Sponsors</a>
      </li>
      <li className="relative before:hidden before:hover:block before:h-0.5  before:absolute before:-bottom-1 before:bg-white before:w-full">
        <a className="text-white">Contact us</a>
      </li>
    </ul>
  );
};

export default Navigation;
