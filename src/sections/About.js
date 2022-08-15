import React from "react";

import team from "../data/team.json";

const About = () => {
  return (
    <section className="container w-11/12 max-w-screen-lg mx-auto pt-20 md:pt-40 lg:pt-60">
      <div className="flex flex-col mb-10 md:mb-28 lg:flex-row lg:space-x-28">
        <h3 className="text-2xl md:text-4xl font-semibold whitespace-nowrap mb-5">A team to be proud of</h3>
        <p className="text-lg text-gray-400 leading-8 md:leading-10 md:text-2xl">
          We thrive on diversity and believe that our success is defined by the people in our team. We are coding experts, consultants, open source enthusiasts, and researchers at
          heart. We love a challenge.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-3 md:grid-rows-3">
        {team.peoples.map((person) => (
          <div key={person.name} className="flex flex-col">
            <strong className="text-xl md:leading-10 md:text-2xl">{person.name}</strong>
            <small className="text-lg text-gray-400 md:text-xl">{person.role}</small>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
