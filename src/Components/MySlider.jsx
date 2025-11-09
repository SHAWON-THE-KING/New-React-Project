import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import client from '../assets/Clients.png'

function MySlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="w-full md:w-[843px] ">
      <Slider {...settings}>
        <div>
          <h3 className="text-3xl font-medium">"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h3>
          <div className="flex gap-8 pt-8">
            <img src={client} alt="" />
            <div>
              <h3 className="text-[20px] font-medium text-p">Jenny Wilson</h3>
              <p className="text-p text-[12px] ">Vice President</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-3xl font-medium">"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h3>
          <div className="flex gap-8 pt-8">
            <img src={client} alt="" />
            <div>
              <h3 className="text-[20px] font-medium text-p">Jenny Wilson</h3>
              <p className="text-p text-[12px] ">Vice President</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-3xl font-medium">"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h3>
          <div className="flex gap-8 pt-8">
            <img src={client} alt="" />
            <div>
              <h3 className="text-[20px] font-medium text-p">Jenny Wilson</h3>
              <p className="text-p text-[12px] ">Vice President</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default MySlider;
