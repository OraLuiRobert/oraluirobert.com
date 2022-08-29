import React from "react";
import SectionTitle from "../ui/molecules/SectionTitle";

import targetsData from "../data/targets";

const Targets = () => {
  return (
    <section id="targets" className="bg-gray-200 py-20">
      <SectionTitle title="Our Targets" />
      <div className="flex items-center justify-center">
        {targetsData.targets.map((item, index) => {
          const number = index + 1;

          const gradientSetings = [
            { gradientFrom: "from-yellow-50", gradientVia: "via-yellow-500", gradientTo: "to-red-400" },
            { gradientFrom: "from-red-400", gradientVia: "via-rose-600", gradientTo: "to-pink-900" },
            { gradientFrom: "from-pink-900", gradientVia: "via-fuchsia-900", gradientTo: "to-indigo-900" },
          ];

          return (
            <>
              <h1
                className={`text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br ${gradientSetings[index]?.gradientFrom} ${gradientSetings[index]?.gradientVia} ${gradientSetings[index]?.gradientTo}`}
              >
                {number}
              </h1>
              <div className="flex items-center justify-center min-w-[150px] min-h-[150px]  bg-white shadow-xl rounded-full text-center z-9 relative left-[-25px] ">
                <p className="w-[120px]">{item}</p>
              </div>
            </>
          );
        })}
      </div>

      <p className="w-6/12 max-w-screen-lg text-center mx-auto mt-10">{targetsData.description}</p>
    </section>
  );
};

export default Targets;
