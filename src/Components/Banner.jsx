import React from 'react'
import banner from '../assets/Banner.png'
import Button from './Button'
import { FaArrowRightLong } from "react-icons/fa6";


const Banner = () => {
    return (
        <>
            <div className='bg-primary'>
                <div className="container">
                    <div className='flex justify-between py-32 '>
                        <div className='w-[562px] text-white'>
                            <h1 className='text-[54px] font-semibold leading-[74px] pb-6'>
                                Building stellar websites for early startups
                            </h1>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                            </p>

                            <div className='flex items-center gap-10 pt-12'>
                                <Button className='text-black! bg-[#FCD980] border-none'>View our work</Button>
                                <div className='flex gap-2.5 items-center hover:text-green-600'>
                                <p><a href="#">View Pricing </a></p>
                                <FaArrowRightLong />
                                </div>
                            </div>
                        </div>

                        <div>
                            <img src={banner} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner