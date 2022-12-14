import React from "react";
import DynamicRow from "../components/about/DynamicRow";

import image from "../static/gallery/gallery-38.jpg";

// import { Zoom, Fade } from "react-reveal";

const Contribute = () => {
  return (
    <section id="donate" className="w-11/12 mx-auto py-14 lg:py-20">
      <DynamicRow
        title={"You can contribute too!"}
        description={
          " Through this program, children develop endurance, coordination, and strength in a “game” type training exercise to make sports appear more attractive and develop certain psychomotor skills. #Robert's Hour entails movement, combining the most efficient techniques from a wide range of exercises, through games of relatively high intensity in a short period of time, contained in training structured for children."
        }
        hasButton
        buttonLabel={"Donate"}
        buttonUrl={"/donate"}
        image={image}
      />
    </section>
  );
};

export default Contribute;
