import React from "react";
import Card from "../ui/molecules/Card";
import SectionTitle from "../ui/molecules/SectionTitle";

import sponsorPackages from "../data/packages.json";

const Packages = () => {
  return (
    <div id="packages" className="bg-gray-200 py-10 mb-20">
      <SectionTitle title="Sponsor Packages" />

      <div className="container  mx-auto flex justify-around items-stretch ">
        {sponsorPackages.packages.map((item, index) => (
          <Card packageName={item.name} packagePrice={item.price} packageBenefits={item.benefits} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Packages;
