import React from "react";
import SectionTitle from "../ui/molecules/SectionTitle";
import DynamicRow from "../components/about/DynamicRow";

import aboutData from "../data/about.json";

import whyAreWeDoing from "../static/about/whyAreWeDoing.jpg";

const About = () => {
  return (
    <section id="about" className="w-11/12 mx-auto py-14 lg:py-20">
      <SectionTitle title="About" highlightedText=" Robert's Hour" />
      <DynamicRow
        title={aboutData.whyWeDo.title}
        description={aboutData.whyWeDo.description}
        secondTitle={aboutData.whyWeDo.secondTitle}
        secondDescription={aboutData.whyWeDo.secondDescription}
        image={whyAreWeDoing}
      />
    </section>
  );
};

export default About;
