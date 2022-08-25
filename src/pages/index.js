import React from "react";

import Layout from "../core/Layout";

import Header from "../sections/Header";
import Hero from "../sections/Hero";
import Packages from "../sections/Packages";
import Contact from "../sections/Contact";
import About from "../sections/About";

const HomePage = () => {
  return (
    <Layout>
      <Header />
      <Hero />
      <About />
      <Packages />
      <Contact />
    </Layout>
  );
};

export default HomePage;
