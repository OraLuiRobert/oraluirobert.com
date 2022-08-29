import React from "react";
import navigation from "../../data/navigation.json";

const Navigation = () => {
  return (
    <ul className="flex uppercase">
      {navigation.menu.map((item) => {
        return (
          <li className="mr-7 relative before:hidden before:hover:block before:h-0.5  before:absolute before:-bottom-1 before:bg-white before:w-full">
            <a className="text-white cursor-pointer" href={item.href}>
              {item.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Navigation;
