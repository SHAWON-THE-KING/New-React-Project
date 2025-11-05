import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import WorkCatagory from './WorkCatagory';
import CommonHeader from './CommonHeader';



const HowWeWork = () => {
    return (
        <>
            <div className='py-32 bg-secondary '>
                <div className="container">

                    <div className='flex gap-90'>

                        <div>
                            <CommonHeader
                                title="Our Process"
                                description="This is a sample paragraph that explains our process in detail."
                            />


                            <div className='flex items-center gap-2.5 hover:text-[#2405F2] pt-4'>
                                <p className='text-[18px] font-medium leading-8'>
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