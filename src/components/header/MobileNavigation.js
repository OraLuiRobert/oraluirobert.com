import React, { useState } from "react";

import navigation from "../../data/navigation.json";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isVisible = isOpen ? "opacity-0" : "opacity-1";
  const isLeftDiagonal = isOpen ? "rotate-45" : "";
  const isRightDiagonal = isOpen ? "-rotate-45" : "";
  const hasMargin = isOpen ? " mb-[-12px]" : "";
  const isMenuVisible = isOpen ? "" : "translate-x-full";

  return (
    <>
      <div className="burger-button" onClick={toggleMenu}>
        <span className={"bg-white w-7 h-0.5 block transition-all " + isLeftDiagonal + hasMargin}></span>
        <span className={"bg-white w-7 h-0.5 my-1 block transition-all " + isVisible}></span>
        <span className={"bg-white w-7 h-0.5 block transition-all " + isRightDiagonal}></span>
      </div>

      <div className={"menu bg-black/75 w-3/6 fixed top-[66px] bottom-0 right-0 text-center transition-all " + isMenuVisible}>
        <ul className="flex flex-col pt-2">
          {navigation.menu.map((item, index) => {
            return (
              <li className="mb-2 pb-2 border-b-[1px] border-black">
                <a className="text-white cursor-pointer" href={item.href}>
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default MobileNavigation;
