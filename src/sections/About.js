import React from "react";
import SectionTitle from "../ui/molecules/SectionTitle";
import AboutRightColumn from "../components/about/AboutRightColumn";
import AboutLeftColumn from "../components/about/AboutLeftColumn";

import aboutData from "../data/about.json";

import whyAreWeDoing from "../static/whyAreWeDoing.jpg";
import communityDiscovery from "../static/communityDiscovery.jpg";
import whatWeDo from "../static/whatWeDo.jpg";

const IMAGES = [whyAreWeDoing, communityDiscovery, whatWeDo];

const About = () => {
  return (
    <section className="container mx-auto py-20 ">
      <SectionTitle title="About" highlightedText=" Robert's Hour" />

      {aboutData.about.map((data, index) => {
        const isOdd = index % 2 !== 0;
        const image = IMAGES[index];
        return (
          <div className="flex items-center">
            {isOdd ? (
              <AboutRightColumn title={data.title} description={data.description} secondTitle={data.secondTitle} secondDescription={data.secondDescription} image={image} />
            ) : (
              <AboutLeftColumn title={data.title} description={data.description} secondTitle={data.secondTitle} secondDescription={data.secondDescription} image={image} />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default About;
