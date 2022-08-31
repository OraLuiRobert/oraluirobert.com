import React from "react";

import Layout from "../core/Layout";

import Header from "../sections/Header";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Targets from "../sections/Targets";
import Community from "../sections/Community";
import Projects from "../sections/Projects";
import WhatWeDo from "../sections/WhatWeDo";
import Packages from "../sections/Packages";
import Gallery from "../sections/Gallery";
import Contact from "../sections/Contact";

const HomePage = () => {
  return (
    <Layout>
      <Header />
      <Hero />
      <About />
      <Targets />
      <Community />
      <Projects />
      <WhatWeDo />
      <Packages />
      <Gallery />
      <Contact />
    </Layout>
  );
};

export default HomePage;
