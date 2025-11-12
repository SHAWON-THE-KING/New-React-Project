import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import client from '../assets/Clients.png';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const NextArrow = ({ onClick }) => (
  <button
    className="absolute bottom-0 right-0 cursor-pointer bg-amber-200 rounded-full text-blue-600 hover:text-blue-800 hover:bg-amber-400 text-[30px] z-10"
    onClick={onClick}
    aria-label="Next Slide"
  >
    <FiArrowRight />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute bottom-0 right-10 cursor-pointer bg-amber-200 rounded-full hover:bg-amber-400 text-green-600 hover:text-green-800 text-[30px] z-10"
    onClick={onClick}
    aria-label="Previous Slide"
  >
    <FiArrowLeft />
  </button>
);

function MySlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="w-full md:w-[843px] relative">
      <Slider {...settings}>
        <div>
          <h3 className="text-3xl font-medium">
            "The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."
          </h3>
          <div className="flex gap-8 pt-8">
            <img src={client} alt="Client" />
            <div>
              <h3 className="text-[20px] font-medium text-p">Jenny Wilson</h3>
              <p className="text-p text-[12px]">Vice President</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-3xl font-medium">
            "The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."
          </h3>
          <div className="flex gap-8 pt-8">
            <img src={client} alt="Client" />
            <div>
              <h3 className="text-[20px] font-medium text-p">Jenny Wilson</h3>
              <p className="text-p text-[12px]">Vice President</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-3xl font-medium">
            "The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."
          </h3>
          <div className="flex gap-8 pt-8">
            <img src={client} alt="Client" />
            <div>
              <h3 className="text-[20px] font-medium text-p">Jenny Wilson</h3>
              <p className="text-p text-[12px]">Vice President</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default MySlider;
