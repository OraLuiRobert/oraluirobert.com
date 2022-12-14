import React from "react";

import DynamicRow from "../components/about/DynamicRow";

import donateImg from "../static/donate.svg";

const DonationMethods = () => {
  return (
    <section className="w-11/12 mx-auto py-14 lg:py-20">
      <DynamicRow
        title={"It directs 20% of the profit tax to us!"}
        description={
          " The state taxes any profit your company makes at 16%, but you can choose to have 20% of that amount go to Robert's Hour as a sponsorship. This is how you can become, without costing you anything extra."
        }
        buttonLabel={"Donate"}
        buttonUrl={"/donate"}
        secondTitle={"Donate by bank transfer!"}
        secondDescription={"Cont RON: RO95BTRLRONCRT0654843201 \n\n Cont EUR: RO45TRLEURCRT0654843201"}
        image={donateImg}
      />
    </section>
  );
};

export default DonationMethods;
