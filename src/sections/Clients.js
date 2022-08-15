import React from "react";

import map from "../data/map.json";

import { theme } from "../../tailwind.config";

const Clients = () => {
  return (
    <section className="bg-gray-50">
      <div className="container w-11/12 max-w-screen-lg py-24 mx-auto">
        <h3 className="relative z-10 text-2xl md:text-4xl font-semibold whitespace-nowrap">Available worldwide</h3>

        <div className="relative">
          <svg viewBox="0 0 1050 490" className="block w-full mt-5 md:-mt-10">
            {map.points.map(([cx, cy, fill], index) => (
              <circle key={index} cx={cx} cy={cy} fill={theme.extend.colors.gray[fill]} r="5" />
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Clients;
