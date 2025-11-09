import React from "react";
import banner from "../assets/Banner.png";
import Button from "./Button";
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="bg-primary">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between py-16 md:py-32 items-center md:items-start gap-12 md:gap-0">
          {/* Text Section */}
          <div className="w-full md:w-[562px] text-white text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-[54px] font-semibold leading-snug md:leading-[74px] pb-6">
              Building stellar websites for early startups
            </h1>
            <p className="max-w-md mx-auto md:mx-0 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-6 sm:gap-10">
              <Button className="text-black bg-[#FCD980] border-none px-6 py-3">
                View our work
              </Button>
              <div className="flex gap-2.5 items-center hover:text-green-600 cursor-pointer">
                <p>
                  <a href="#">View Pricing</a>
                </p>
                <FaArrowRightLong />
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-auto">
            <img src={banner} alt="Banner" className="mx-auto md:mx-0 max-w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
