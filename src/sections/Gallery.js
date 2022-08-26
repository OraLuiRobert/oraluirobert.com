import React from "react";
import Lightroom from "react-lightbox-gallery";
import SectionTitle from "../ui/molecules/SectionTitle";
import galleryImages from "../data/gallery";

const settings = {
  columnContent: { default: 2, mobile: 3, tab: 2 },
  mode: "dark",
};

const Gallery = () => {
  return (
    <section id="gallery">
      <SectionTitle title="Gallery" />
      <Lightroom images={galleryImages} settings={settings} />
    </section>
  );
};

export default Gallery;
