import React from "react";
import SectionTitle from "../ui/molecules/SectionTitle";
import AboutRightColumn from "../components/about/AboutRightColumn";
import AboutLeftColumn from "../components/about/AboutLeftColumn";

import aboutData from "../data/about.json";

import whyAreWeDoing from "../static/about/whyAreWeDoing.jpg";

const About = () => {
  return (
    <section id="about" className="container mx-auto py-20 ">
      <SectionTitle title="About" highlightedText=" Robert's Hour" />

      <AboutLeftColumn
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
