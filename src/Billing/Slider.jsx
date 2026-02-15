import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Tooltip } from "@mui/material";

function Partners() {
  const settings = {
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 10,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1280,
      settings: { slidesToShow: 8 },
    },
    {
      breakpoint: 1024,
      settings: { slidesToShow: 7 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 5 },
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 3 },
    },
  ],
};

  const partners = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    name: `Partner ${i + 1}`,
    image: `/${i + 1}.jpg`,
  }));

  return (
    <div className="px-5 border-2 bg-[#EDF0FF]">
      <div className="max-w-screen-xl mx-auto overflow-hidden">
        <Slider {...settings}>
          {partners.map((partner) => (
            <div key={partner.id} className="px-3 py-5">
              <Tooltip title={partner.name} placement="bottom">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="mx-auto h-12 sm:h-14 md:h-16 lg:h-20 object-contain"
                />
              </Tooltip>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Partners;
