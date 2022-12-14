import React from "react";
import SectionTitle from "../ui/molecules/SectionTitle";

import targetsData from "../data/targets";

const Targets = () => {
  return (
    <section id="targets" className="bg-gray-200 py-14 lg:py-20">
      <SectionTitle title="Our Goals" />
      <div className="flex flex-wrap md:flex-nowrap items-center justify-center">
        {targetsData.targets.map((item, index) => {
          const number = index + 1;
          const hasMargin = index === 1 ? " md:mx-10 mx-0 my-10 md:my-0" : "";
          const gradientSetings = [
            { gradientFrom: "from-yellow-50", gradientVia: "via-yellow-500", gradientTo: "to-red-400" },
            { gradientFrom: "from-red-400", gradientVia: "via-rose-600", gradientTo: "to-pink-900" },
            { gradientFrom: "from-pink-900", gradientVia: "via-fuchsia-900", gradientTo: "to-indigo-900" },
          ];

          return (
            <div className={"flex" + hasMargin}>
              <h1
                className={`text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br ${gradientSetings[index]?.gradientFrom} ${gradientSetings[index]?.gradientVia} ${gradientSetings[index]?.gradientTo}`}
              >
                {number}
              </h1>
              <div className="flex items-center justify-center min-w-[150px] min-h-[150px]  bg-white shadow-2xl rounded-full text-center z-9 relative left-[-25px] ">
                <p className="w-[120px]">{item}</p>
              </div>
            </div>
          );
        })}
      </div>

      <p className="md:w-6/12 w-11/12 text-center mx-auto mt-10">{targetsData.description}</p>
    </section>
  );
};

export default Targets;
