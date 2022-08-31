import React from "react";
import { FaCheck } from "react-icons/fa";

const Card = ({ packageName, packagePrice, packageBenefits, index }) => {
  const hasMargin = index === 1 ? " mx-10" : "";
  const gradientSetings = [
    { gradientFrom: "from-yellow-50", gradientVia: "via-yellow-500", gradientTo: "to-red-400" },
    { gradientFrom: "from-red-400", gradientVia: "via-rose-600", gradientTo: "to-pink-900" },
    { gradientFrom: "from-pink-900", gradientVia: "via-fuchsia-900", gradientTo: "to-indigo-900" },
  ];
  return (
    <div
      className={`flex flex-col justify-between p-10 rounded-2xl flex-1 text-center text-white shadow-2xl bg-gradient-to-br ${hasMargin} ${gradientSetings[index].gradientFrom} ${gradientSetings[index].gradientVia} ${gradientSetings[index].gradientTo}`}
    >
      <div className="description">
        <h1 className="font-bold text-2xl rounded-full">{packageName}</h1>
        <h2 className="py-5 rounded-full ">{packagePrice}</h2>
        {packageBenefits.map((benefit, index) => (
          <div className="flex items-start" key={index}>
            <FaCheck className="mt-1" />
            <p className="text-left ml-2">{benefit}</p>
          </div>
        ))}
      </div>
      <div className="cardFooter">
        <button className="bg-white text-black px-6 py-2 rounded-xl font-bold mt-5 ">Order Now</button>
      </div>
    </div>
  );
};

export default Card;
