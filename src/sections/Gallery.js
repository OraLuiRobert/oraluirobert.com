import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SectionTitle from "../ui/molecules/SectionTitle";
import galleryImages from "../data/images";

const settings = {
  centerMode: true,
  centerPadding: "100px",
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

console.log();
const Gallery = () => {
  return (
    <section id="gallery" className="py-14 lg:py-20 overflow-hidden bg-gray-200">
      <SectionTitle title="Gallery" />
      <Slider {...settings}>
        {galleryImages.map((item) => {
          return <img src={item.src} />;
        })}
      </Slider>
    </section>
  );
};

export default Gallery;
