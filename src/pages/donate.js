import React from "react";

import Layout from "../core/Layout";

import Header from "../sections/Header";
import Hero from "../sections/Hero";
import DonationMethods from "../sections/DonationMethods";
import Contact from "../sections/Contact";

const HomePage = () => {
  return (
    <Layout>
      <Header />
      <Hero isInnerPage />
      <DonationMethods />
      <Contact />
    </Layout>
  );
};

export default HomePage;
