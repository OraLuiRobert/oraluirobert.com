import React from "react";
import DynamicRow from "../components/about/DynamicRow";

import aboutData from "../data/about.json";

import communityDiscovery from "../static/about/communityDiscovery.jpg";

const Community = () => {
  return (
    <section className="w-11/12 mx-auto py-14 lg:py-20">
      <DynamicRow
        isReversed
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
