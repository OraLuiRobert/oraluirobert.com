import React from "react";
import DynamicRow from "../components/about/DynamicRow";

import aboutData from "../data/about.json";

import whatWeDo from "../static/about/whatWeDo.jpg";

const WhatWeDo = () => {
  return (
    <section className="w-11/12 mx-auto py-14 lg:py-20 ">
      <DynamicRow
        title={aboutData.whatWeDo.title}
        description={aboutData.whatWeDo.description}
        secondTitle={aboutData.whatWeDo.secondTitle}
        secondDescription={aboutData.whatWeDo.secondDescription}
        image={whatWeDo}
      />
    </section>
  );
};

export default WhatWeDo;
