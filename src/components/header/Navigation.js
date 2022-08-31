import React from "react";
import navigation from "../../data/navigation.json";

const Navigation = () => {
  return (
    <ul className="flex uppercase">
      {navigation.menu.map((item, index) => {
        const hasMargin = navigation.menu.length - 1 !== index ? " mr-7" : "";

        return (
          <li className={"relative before:hidden before:hover:block before:h-0.5  before:absolute before:-bottom-1 before:bg-white before:w-full" + hasMargin}>
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
