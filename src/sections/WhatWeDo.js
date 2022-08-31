import React from "react";
import AboutLeftColumn from "../components/about/AboutLeftColumn";

import aboutData from "../data/about.json";

import whatWeDo from "../static/about/whatWeDo.jpg";

const WhatWeDo = () => {
  return (
    <section className="container mx-auto py-20 ">
      <AboutLeftColumn
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
