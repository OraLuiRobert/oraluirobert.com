import React from "react";
import AboutRightColumn from "../components/about/AboutRightColumn";

import aboutData from "../data/about.json";

import communityDiscovery from "../static/about/communityDiscovery.jpg";

const Community = () => {
  return (
    <section className="container mx-auto py-20 ">
      <AboutRightColumn
        title={aboutData.community.title}
        description={aboutData.community.description}
        secondTitle={aboutData.community.secondTitle}
        secondDescription={aboutData.community.secondDescription}
        image={communityDiscovery}
      />
    </section>
  );
};

export default Community;
