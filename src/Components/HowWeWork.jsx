import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import WorkCatagory from './WorkCatagory';
import CommonHeader from './CommonHeader';



const HowWeWork = () => {
    return (
        <>
            <div className='py-32 bg-secondary '>
                <div className="container">

                    <div className='flex flex-col  md:flex-row justify-between md:items-start gap-12 md:gap-0'>
                        <div className="text-center md:text-left">
                            <CommonHeader
                                title="Our Process"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                            />


                            <div className="flex items-center gap-2.5 hover:text-[#2405F2] pt-4 justify-center md:justify-start">
                                <p className="text-[18px] font-medium">
                                    Get in touch with us
                                </p>
                                <FaArrowRightLong />
                            </div>

                        </div>

                        <WorkCatagory />
                    </div>

                </div>
            </div>
        </>
    )
}

export default HowWeWork